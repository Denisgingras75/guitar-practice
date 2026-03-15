import { useState, useRef, useCallback, useEffect } from 'react';

// Simple Web Audio drum synth
function createKick(ctx, time) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.frequency.setValueAtTime(150, time);
  osc.frequency.exponentialRampToValueAtTime(0.01, time + 0.5);
  gain.gain.setValueAtTime(1, time);
  gain.gain.exponentialRampToValueAtTime(0.01, time + 0.5);
  osc.start(time);
  osc.stop(time + 0.5);
}

function createSnare(ctx, time) {
  // Noise burst
  const bufferSize = ctx.sampleRate * 0.1;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  const noise = ctx.createBufferSource();
  noise.buffer = buffer;
  const noiseGain = ctx.createGain();
  noise.connect(noiseGain);
  noiseGain.connect(ctx.destination);
  noiseGain.gain.setValueAtTime(0.7, time);
  noiseGain.gain.exponentialRampToValueAtTime(0.01, time + 0.1);
  noise.start(time);
  noise.stop(time + 0.1);

  // Body tone
  const osc = ctx.createOscillator();
  const oscGain = ctx.createGain();
  osc.connect(oscGain);
  oscGain.connect(ctx.destination);
  osc.frequency.setValueAtTime(200, time);
  oscGain.gain.setValueAtTime(0.5, time);
  oscGain.gain.exponentialRampToValueAtTime(0.01, time + 0.08);
  osc.start(time);
  osc.stop(time + 0.08);
}

function createHihat(ctx, time) {
  const bufferSize = ctx.sampleRate * 0.05;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  const noise = ctx.createBufferSource();
  noise.buffer = buffer;

  // High-pass filter for tinny sound
  const filter = ctx.createBiquadFilter();
  filter.type = 'highpass';
  filter.frequency.value = 7000;

  const gain = ctx.createGain();
  noise.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  gain.gain.setValueAtTime(0.3, time);
  gain.gain.exponentialRampToValueAtTime(0.01, time + 0.05);
  noise.start(time);
  noise.stop(time + 0.05);
}

export default function useBeatPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentBeat, setCurrentBeat] = useState(null);
  const [currentStep, setCurrentStep] = useState(-1);
  const ctxRef = useRef(null);
  const timerRef = useRef(null);
  const stepRef = useRef(0);

  const stop = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsPlaying(false);
    setCurrentStep(-1);
    stepRef.current = 0;
  }, []);

  const play = useCallback((beat) => {
    stop();
    if (!ctxRef.current) {
      ctxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    const ctx = ctxRef.current;
    if (ctx.state === 'suspended') ctx.resume();

    setCurrentBeat(beat);
    setIsPlaying(true);
    stepRef.current = 0;

    const stepDuration = (60 / beat.bpm / 4) * 1000; // 16th notes

    const tick = () => {
      const step = stepRef.current % 16;
      const time = ctx.currentTime;

      if (beat.pattern.kick[step]) createKick(ctx, time);
      if (beat.pattern.snare[step]) createSnare(ctx, time);
      if (beat.pattern.hihat[step]) createHihat(ctx, time);

      setCurrentStep(step);
      stepRef.current++;
    };

    tick(); // Play first step immediately
    timerRef.current = setInterval(tick, stepDuration);
  }, [stop]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return { play, stop, isPlaying, currentBeat, currentStep };
}
