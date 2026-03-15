import { useState, useRef, useCallback, useEffect } from 'react';

// Note name -> frequency mapping
const NOTE_FREQ = {
  'C1': 32.70, 'Db1': 34.65, 'D1': 36.71, 'Eb1': 38.89, 'E1': 41.20,
  'F1': 43.65, 'Gb1': 46.25, 'G1': 49.00, 'Ab1': 51.91, 'A1': 55.00,
  'Bb1': 58.27, 'B1': 61.74,
  'C2': 65.41, 'Db2': 69.30, 'D2': 73.42, 'Eb2': 77.78, 'E2': 82.41,
  'F2': 87.31, 'Gb2': 92.50, 'G2': 98.00, 'Ab2': 103.83, 'A2': 110.00,
  'Bb2': 116.54, 'B2': 123.47,
};

function createNoiseBuffer(ctx, duration) {
  const sampleRate = ctx.sampleRate;
  const length = sampleRate * duration;
  const buffer = ctx.createBuffer(1, length, sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < length; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  return buffer;
}

function playKick(ctx, time, dest) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(160, time);
  osc.frequency.exponentialRampToValueAtTime(40, time + 0.12);
  gain.gain.setValueAtTime(1.0, time);
  gain.gain.exponentialRampToValueAtTime(0.001, time + 0.3);
  osc.connect(gain);
  gain.connect(dest);
  osc.start(time);
  osc.stop(time + 0.3);
}

function playSnare(ctx, time, dest) {
  // Noise burst
  const noise = ctx.createBufferSource();
  noise.buffer = createNoiseBuffer(ctx, 0.15);
  const noiseFilter = ctx.createBiquadFilter();
  noiseFilter.type = 'highpass';
  noiseFilter.frequency.value = 1000;
  const noiseGain = ctx.createGain();
  noiseGain.gain.setValueAtTime(0.7, time);
  noiseGain.gain.exponentialRampToValueAtTime(0.001, time + 0.15);
  noise.connect(noiseFilter);
  noiseFilter.connect(noiseGain);
  noiseGain.connect(dest);
  noise.start(time);
  noise.stop(time + 0.15);

  // Body tone
  const osc = ctx.createOscillator();
  const oscGain = ctx.createGain();
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(200, time);
  osc.frequency.exponentialRampToValueAtTime(100, time + 0.05);
  oscGain.gain.setValueAtTime(0.5, time);
  oscGain.gain.exponentialRampToValueAtTime(0.001, time + 0.1);
  osc.connect(oscGain);
  oscGain.connect(dest);
  osc.start(time);
  osc.stop(time + 0.1);
}

function playHihat(ctx, time, dest, open = false) {
  const noise = ctx.createBufferSource();
  noise.buffer = createNoiseBuffer(ctx, open ? 0.3 : 0.05);
  const filter = ctx.createBiquadFilter();
  filter.type = 'highpass';
  filter.frequency.value = 7000;
  const gain = ctx.createGain();
  const duration = open ? 0.3 : 0.05;
  gain.gain.setValueAtTime(open ? 0.3 : 0.25, time);
  gain.gain.exponentialRampToValueAtTime(0.001, time + duration);
  noise.connect(filter);
  filter.connect(gain);
  gain.connect(dest);
  noise.start(time);
  noise.stop(time + duration);
}

function playClap(ctx, time, dest) {
  const noise = ctx.createBufferSource();
  noise.buffer = createNoiseBuffer(ctx, 0.12);
  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.value = 2000;
  filter.Q.value = 1;
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.6, time);
  gain.gain.exponentialRampToValueAtTime(0.001, time + 0.12);
  noise.connect(filter);
  filter.connect(gain);
  gain.connect(dest);
  noise.start(time);
  noise.stop(time + 0.12);
}

function playBass(ctx, time, noteStr, dest) {
  const freq = NOTE_FREQ[noteStr] || 65.41;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(freq, time);
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(300, time);
  filter.frequency.exponentialRampToValueAtTime(80, time + 0.25);
  gain.gain.setValueAtTime(0.4, time);
  gain.gain.exponentialRampToValueAtTime(0.001, time + 0.3);
  osc.connect(filter);
  filter.connect(gain);
  gain.connect(dest);
  osc.start(time);
  osc.stop(time + 0.3);
}

export default function useBeatEngine() {
  const [playing, setPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [currentBeat, setCurrentBeat] = useState(null);
  const ctxRef = useRef(null);
  const schedulerRef = useRef(null);
  const stepRef = useRef(0);
  const nextStepTimeRef = useRef(0);
  const destRef = useRef(null);

  const getContext = useCallback(() => {
    if (!ctxRef.current || ctxRef.current.state === 'closed') {
      ctxRef.current = new AudioContext();
    }
    return ctxRef.current;
  }, []);

  // Returns the AudioContext destination (for recording)
  const getDestination = useCallback(() => {
    const ctx = getContext();
    if (!destRef.current) {
      destRef.current = ctx.createGain();
      destRef.current.connect(ctx.destination);
    }
    return destRef.current;
  }, [getContext]);

  const getAudioContext = useCallback(() => getContext(), [getContext]);

  const stop = useCallback(() => {
    if (schedulerRef.current) {
      clearInterval(schedulerRef.current);
      schedulerRef.current = null;
    }
    setPlaying(false);
    setCurrentStep(-1);
    stepRef.current = 0;
  }, []);

  const play = useCallback((beat) => {
    if (playing) stop();

    const ctx = getContext();
    if (ctx.state === 'suspended') ctx.resume();

    const dest = getDestination();
    setCurrentBeat(beat);
    setPlaying(true);

    const { bpm, pattern, swing = 0, bass } = beat;
    const stepsPerBeat = 4; // 16th notes
    const totalSteps = pattern.kick.length;
    const secondsPer16th = 60 / bpm / stepsPerBeat;

    stepRef.current = 0;
    nextStepTimeRef.current = ctx.currentTime + 0.05;

    const scheduleAhead = 0.1; // seconds
    const lookAhead = 25; // ms

    const scheduler = setInterval(() => {
      while (nextStepTimeRef.current < ctx.currentTime + scheduleAhead) {
        const step = stepRef.current % totalSteps;
        let time = nextStepTimeRef.current;

        // Apply swing to odd 16th notes
        if (step % 2 === 1 && swing > 0) {
          time += secondsPer16th * swing;
        }

        if (pattern.kick[step])    playKick(ctx, time, dest);
        if (pattern.snare[step])   playSnare(ctx, time, dest);
        if (pattern.hihat[step])   playHihat(ctx, time, dest, false);
        if (pattern.openHat && pattern.openHat[step]) playHihat(ctx, time, dest, true);
        if (pattern.clap && pattern.clap[step]) playClap(ctx, time, dest);
        if (bass && bass.pattern[step % bass.pattern.length]) {
          playBass(ctx, time, bass.note, dest);
        }

        setCurrentStep(step);
        nextStepTimeRef.current += secondsPer16th;
        stepRef.current++;
      }
    }, lookAhead);

    schedulerRef.current = scheduler;
  }, [playing, stop, getContext, getDestination]);

  useEffect(() => {
    return () => {
      if (schedulerRef.current) clearInterval(schedulerRef.current);
    };
  }, []);

  return {
    playing,
    currentStep,
    currentBeat,
    play,
    stop,
    getAudioContext,
    getDestination,
  };
}
