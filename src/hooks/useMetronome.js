import { useState, useRef, useCallback } from 'react';

export function useMetronome() {
  const [playing, setPlaying] = useState(false);
  const [bpm, setBpm] = useState(120);
  const [timeSignature, setTimeSignature] = useState(4);
  const [subdivision, setSubdivision] = useState(1);
  const [accentBeat1, setAccentBeat1] = useState(true);
  const [currentBeat, setCurrentBeat] = useState(0);

  const audioContextRef = useRef(null);
  const intervalRef = useRef(null);
  const beatCountRef = useRef(0);
  const tapTimestampsRef = useRef([]);

  const getAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioContextRef.current;
  }, []);

  const playClick = useCallback((isAccent) => {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.frequency.value = isAccent ? 1000 : 800;
    gain.gain.setValueAtTime(isAccent ? 0.5 : 0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);

    osc.start(now);
    osc.stop(now + 0.05);
  }, [getAudioContext]);

  const stop = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    beatCountRef.current = 0;
    setCurrentBeat(0);
    setPlaying(false);
  }, []);

  const start = useCallback(() => {
    // Resume suspended context (required by mobile Safari autoplay policy)
    const ctx = getAudioContext();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    beatCountRef.current = 0;
    setCurrentBeat(0);

    const msPerClick = (60000 / bpm) / subdivision;
    const totalSubdivisions = timeSignature * subdivision;

    // Fire first click immediately
    const isAccentFirst = accentBeat1 && beatCountRef.current === 0;
    playClick(isAccentFirst);
    setCurrentBeat(0);
    beatCountRef.current = 1;

    intervalRef.current = setInterval(() => {
      const subIndex = beatCountRef.current % totalSubdivisions;
      const isDownbeat = subIndex === 0;
      const isAccent = accentBeat1 && isDownbeat;

      playClick(isAccent);
      setCurrentBeat(Math.floor(subIndex / subdivision));
      beatCountRef.current = beatCountRef.current + 1;
    }, msPerClick);

    setPlaying(true);
  }, [bpm, subdivision, timeSignature, accentBeat1, playClick, getAudioContext]);

  const restart = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    beatCountRef.current = 0;
    setCurrentBeat(0);

    const ctx = getAudioContext();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const msPerClick = (60000 / bpm) / subdivision;
    const totalSubdivisions = timeSignature * subdivision;

    playClick(accentBeat1);
    setCurrentBeat(0);
    beatCountRef.current = 1;

    intervalRef.current = setInterval(() => {
      const subIndex = beatCountRef.current % totalSubdivisions;
      const isDownbeat = subIndex === 0;
      const isAccent = accentBeat1 && isDownbeat;

      playClick(isAccent);
      setCurrentBeat(Math.floor(subIndex / subdivision));
      beatCountRef.current = beatCountRef.current + 1;
    }, msPerClick);

    setPlaying(true);
  }, [bpm, subdivision, timeSignature, accentBeat1, playClick, getAudioContext]);

  const tapTempo = useCallback(() => {
    const now = Date.now();
    const taps = tapTimestampsRef.current;

    // Reset if gap > 2 seconds
    if (taps.length > 0 && now - taps[taps.length - 1] > 2000) {
      tapTimestampsRef.current = [now];
      return;
    }

    taps.push(now);

    // Keep last 5 taps
    if (taps.length > 5) {
      tapTimestampsRef.current = taps.slice(taps.length - 5);
    }

    if (tapTimestampsRef.current.length < 2) return;

    const timestamps = tapTimestampsRef.current;
    let totalInterval = 0;
    for (let i = 1; i < timestamps.length; i++) {
      totalInterval += timestamps[i] - timestamps[i - 1];
    }
    const avgInterval = totalInterval / (timestamps.length - 1);
    const tappedBpm = Math.round(60000 / avgInterval);
    const clamped = Math.min(250, Math.max(30, tappedBpm));

    setBpm(clamped);
  }, []);

  return {
    playing,
    bpm,
    setBpm,
    timeSignature,
    setTimeSignature,
    subdivision,
    setSubdivision,
    accentBeat1,
    setAccentBeat1,
    currentBeat,
    start,
    stop,
    restart,
    tapTempo,
  };
}
