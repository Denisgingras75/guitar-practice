import { useState, useRef, useCallback } from 'react';

export default function useRecorder() {
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const [duration, setDuration] = useState(0);
  const [micGranted, setMicGranted] = useState(null);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const startTimeRef = useRef(0);
  const timerRef = useRef(null);
  const streamRef = useRef(null);

  const requestMic = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      setMicGranted(true);
      return stream;
    } catch {
      setMicGranted(false);
      return null;
    }
  }, []);

  const startRecording = useCallback(async (audioCtx, beatDestNode) => {
    let stream = streamRef.current;
    if (!stream) {
      stream = await requestMic();
      if (!stream) return false;
    }

    // If we have an audio context with a beat playing, mix mic + beat
    let combinedStream;
    if (audioCtx && beatDestNode) {
      const dest = audioCtx.createMediaStreamDestination();
      // Connect beat audio
      beatDestNode.connect(dest);
      // Connect mic input
      const micSource = audioCtx.createMediaStreamSource(stream);
      micSource.connect(dest);
      combinedStream = dest.stream;
    } else {
      combinedStream = stream;
    }

    chunksRef.current = [];
    const mr = new MediaRecorder(combinedStream, {
      mimeType: MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
        ? 'audio/webm;codecs=opus'
        : 'audio/webm',
    });

    mr.ondataavailable = (e) => {
      if (e.data.size > 0) chunksRef.current.push(e.data);
    };

    mr.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
      setAudioBlob(blob);
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);
    };

    mediaRecorderRef.current = mr;
    mr.start(100);
    setRecording(true);
    setAudioBlob(null);
    setAudioUrl(null);
    startTimeRef.current = Date.now();
    setDuration(0);

    timerRef.current = setInterval(() => {
      setDuration(Math.floor((Date.now() - startTimeRef.current) / 1000));
    }, 500);

    return true;
  }, [requestMic]);

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
    setRecording(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setDuration(Math.floor((Date.now() - startTimeRef.current) / 1000));
  }, []);

  const clearRecording = useCallback(() => {
    if (audioUrl) URL.revokeObjectURL(audioUrl);
    setAudioBlob(null);
    setAudioUrl(null);
    setDuration(0);
  }, [audioUrl]);

  return {
    recording,
    audioBlob,
    audioUrl,
    duration,
    micGranted,
    requestMic,
    startRecording,
    stopRecording,
    clearRecording,
  };
}
