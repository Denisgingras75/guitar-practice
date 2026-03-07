import { useState, useRef, useCallback } from 'react';

const NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const A4 = 440;

// Standard tuning frequencies (E2, A2, D3, G3, B3, E4)
export const STANDARD_TUNING_FREQ = [
  { note: 'E', octave: 2, freq: 82.41 },
  { note: 'A', octave: 2, freq: 110.00 },
  { note: 'D', octave: 3, freq: 146.83 },
  { note: 'G', octave: 3, freq: 196.00 },
  { note: 'B', octave: 3, freq: 246.94 },
  { note: 'E', octave: 4, freq: 329.63 },
];

function frequencyToNote(freq) {
  if (freq <= 0) return null;
  const semitones = 12 * Math.log2(freq / A4);
  const rounded = Math.round(semitones);
  const cents = Math.round((semitones - rounded) * 100);
  const noteIndex = ((rounded % 12) + 12) % 12;
  const octave = Math.floor((rounded + 9) / 12) + 4;
  return {
    name: NOTE_NAMES[noteIndex],
    octave,
    cents,
    frequency: freq,
  };
}

// Autocorrelation pitch detection
function detectPitch(buffer, sampleRate) {
  const SIZE = buffer.length;
  let rms = 0;
  for (let i = 0; i < SIZE; i++) {
    rms += buffer[i] * buffer[i];
  }
  rms = Math.sqrt(rms / SIZE);

  // Not enough signal
  if (rms < 0.01) return -1;

  // Autocorrelation
  const corr = new Float32Array(SIZE);
  for (let lag = 0; lag < SIZE; lag++) {
    let sum = 0;
    for (let i = 0; i < SIZE - lag; i++) {
      sum += buffer[i] * buffer[i + lag];
    }
    corr[lag] = sum;
  }

  // Find first dip then first peak after it
  let d = 0;
  while (d < SIZE && corr[d] > 0) d++;
  if (d >= SIZE) return -1;

  let maxVal = -1;
  let maxPos = -1;
  for (let i = d; i < SIZE; i++) {
    if (corr[i] > maxVal) {
      maxVal = corr[i];
      maxPos = i;
    }
  }

  if (maxPos === -1) return -1;

  // Parabolic interpolation for better accuracy
  const y1 = maxPos > 0 ? corr[maxPos - 1] : corr[maxPos];
  const y2 = corr[maxPos];
  const y3 = maxPos < SIZE - 1 ? corr[maxPos + 1] : corr[maxPos];
  const shift = (y3 - y1) / (2 * (2 * y2 - y1 - y3));
  const refinedPos = maxPos + (isFinite(shift) ? shift : 0);

  return sampleRate / refinedPos;
}

export function useTuner() {
  const [listening, setListening] = useState(false);
  const [note, setNote] = useState(null);
  const [error, setError] = useState(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const streamRef = useRef(null);
  const rafRef = useRef(null);

  const start = useCallback(async () => {
    try {
      setError(null);
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      audioContextRef.current = ctx;

      const source = ctx.createMediaStreamSource(stream);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 4096;
      source.connect(analyser);
      analyserRef.current = analyser;

      const buffer = new Float32Array(analyser.fftSize);

      const tick = () => {
        analyser.getFloatTimeDomainData(buffer);
        const freq = detectPitch(buffer, ctx.sampleRate);
        if (freq > 50 && freq < 1200) {
          setNote(frequencyToNote(freq));
        }
        rafRef.current = requestAnimationFrame(tick);
      };

      setListening(true);
      tick();
    } catch (err) {
      setError('Microphone access denied. Check your browser permissions.');
      setListening(false);
    }
  }, []);

  const stop = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (audioContextRef.current) audioContextRef.current.close();
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop());
    }
    setListening(false);
    setNote(null);
  }, []);

  return { listening, note, error, start, stop };
}
