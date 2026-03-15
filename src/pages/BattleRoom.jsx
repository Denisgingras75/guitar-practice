import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useBattleStore from '../hooks/useBattleStore.js';
import useBeatEngine from '../hooks/useBeatEngine.js';
import useRecorder from '../hooks/useRecorder.js';
import instrumentals from '../data/instrumentals.js';
import styles from './BattleRoom.module.css';

function formatTime(secs) {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function BattleRoom() {
  const { id } = useParams();
  const navigate = useNavigate();
  const store = useBattleStore();
  const beatEngine = useBeatEngine();
  const recorder = useRecorder();

  const [battle, setBattle] = useState(null);
  const [selectedBeat, setSelectedBeat] = useState(null);
  const [selectedCustomBeat, setSelectedCustomBeat] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [playingRound, setPlayingRound] = useState(null);
  const [countdown, setCountdown] = useState(0);
  const audioRef = useRef(null);
  const customAudioRef = useRef(null);

  // Load battle data
  useEffect(() => {
    if (!store.loading) {
      const found = store.battles.find(b => b.id === id);
      setBattle(found || null);
    }
  }, [store.battles, store.loading, id]);

  // Figure out whose turn it is
  useEffect(() => {
    if (battle) {
      const nextIdx = battle.rounds.length % battle.players.length;
      setCurrentPlayer(nextIdx);
    }
  }, [battle]);

  const handleSelectBeat = (beat) => {
    if (selectedBeat?.id === beat.id) {
      beatEngine.stop();
      setSelectedBeat(null);
    } else {
      setSelectedBeat(beat);
      setSelectedCustomBeat(null);
      beatEngine.play(beat);
    }
  };

  const handleSelectCustomBeat = useCallback(async (beat) => {
    if (selectedCustomBeat?.id === beat.id) {
      if (customAudioRef.current) {
        customAudioRef.current.pause();
        customAudioRef.current = null;
      }
      setSelectedCustomBeat(null);
    } else {
      beatEngine.stop();
      setSelectedBeat(null);
      setSelectedCustomBeat(beat);
      // Play custom beat audio
      if (customAudioRef.current) {
        customAudioRef.current.pause();
      }
      const url = URL.createObjectURL(beat.blob);
      const audio = new Audio(url);
      audio.loop = true;
      audio.play();
      customAudioRef.current = audio;
    }
  }, [selectedCustomBeat, beatEngine]);

  const handleRecord = async () => {
    if (recorder.recording) {
      recorder.stopRecording();
      beatEngine.stop();
      if (customAudioRef.current) {
        customAudioRef.current.pause();
      }
      return;
    }

    // 3-2-1 countdown
    setCountdown(3);
    await new Promise(r => setTimeout(r, 1000));
    setCountdown(2);
    await new Promise(r => setTimeout(r, 1000));
    setCountdown(1);
    await new Promise(r => setTimeout(r, 1000));
    setCountdown(0);

    // Start beat
    if (selectedBeat) {
      beatEngine.play(selectedBeat);
    } else if (selectedCustomBeat && customAudioRef.current) {
      customAudioRef.current.currentTime = 0;
      customAudioRef.current.play();
    }

    // Start recording (mix mic + beat)
    const ctx = selectedBeat ? beatEngine.getAudioContext() : null;
    const dest = selectedBeat ? beatEngine.getDestination() : null;
    await recorder.startRecording(ctx, dest);
  };

  const handleSaveRound = async () => {
    if (!recorder.audioBlob || !battle) return;
    const beatId = selectedBeat?.id || selectedCustomBeat?.id || 'none';
    const beatName = selectedBeat?.name || selectedCustomBeat?.name || 'No beat';
    await store.addRound(battle.id, {
      player: battle.players[currentPlayer],
      beatId,
      beatName,
      audioBlob: recorder.audioBlob,
      duration: recorder.duration,
    });
    recorder.clearRecording();
    setSelectedBeat(null);
    setSelectedCustomBeat(null);
  };

  const handlePlayRound = async (round) => {
    if (playingRound === round.id) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      setPlayingRound(null);
      return;
    }
    const blob = await store.getRecording(round.recordingId);
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    audio.onended = () => setPlayingRound(null);
    audio.play();
    audioRef.current = audio;
    setPlayingRound(round.id);
  };

  const handleDownloadRound = async (round) => {
    const blob = await store.getRecording(round.recordingId);
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${round.player}-round${battle.rounds.indexOf(round) + 1}.webm`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleShareBattle = async () => {
    if (!navigator.share) {
      // Fallback: download all rounds
      for (const round of battle.rounds) {
        await handleDownloadRound(round);
      }
      return;
    }
    // Share the latest round
    const latestRound = battle.rounds[battle.rounds.length - 1];
    if (!latestRound) return;
    const blob = await store.getRecording(latestRound.recordingId);
    if (!blob) return;
    const file = new File([blob], `${battle.name}-${latestRound.player}.webm`, { type: 'audio/webm' });
    try {
      await navigator.share({
        title: `${battle.name} - Freestyle Battle`,
        text: `${latestRound.player} dropped bars! Your turn to respond.`,
        files: [file],
      });
    } catch {
      // User cancelled share
    }
  };

  if (store.loading) {
    return <div className={styles.page}><p className={styles.loading}>Loading battle...</p></div>;
  }

  if (!battle) {
    return (
      <div className={styles.page}>
        <p className={styles.notFound}>Battle not found.</p>
        <button className={styles.backBtn} onClick={() => navigate('/battles')}>Back to Battles</button>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <button className={styles.backLink} onClick={() => navigate('/battles')}>Back</button>
      <h1 className={styles.heading}>{battle.name}</h1>
      <div className={styles.playerBar}>
        {battle.players.map((p, i) => (
          <span key={i} className={`${styles.playerChip} ${i === currentPlayer ? styles.playerActive : ''}`}>
            {p}
            <span className={styles.roundCount}>
              {battle.rounds.filter(r => r.player === p).length}
            </span>
          </span>
        ))}
      </div>

      {/* Recording Section */}
      <section className={styles.recordSection}>
        <h2 className={styles.turnLabel}>
          {battle.players[currentPlayer]}'s Turn
        </h2>

        {/* Beat Selector (compact) */}
        <div className={styles.beatSelect}>
          <span className={styles.selectLabel}>Pick a beat:</span>
          <div className={styles.beatChips}>
            {instrumentals.map(beat => (
              <button
                key={beat.id}
                className={`${styles.beatChip} ${selectedBeat?.id === beat.id ? styles.beatChipActive : ''}`}
                onClick={() => handleSelectBeat(beat)}
              >
                {beat.name}
                <span className={styles.chipBpm}>{beat.bpm}</span>
              </button>
            ))}
            {store.customBeats.map(beat => (
              <button
                key={beat.id}
                className={`${styles.beatChip} ${styles.customChip} ${selectedCustomBeat?.id === beat.id ? styles.beatChipActive : ''}`}
                onClick={() => handleSelectCustomBeat(beat)}
              >
                {beat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Recording Controls */}
        <div className={styles.recControls}>
          {countdown > 0 && (
            <div className={styles.countdown}>{countdown}</div>
          )}
          {!countdown && (
            <>
              <button
                className={`${styles.recBtn} ${recorder.recording ? styles.recBtnActive : ''}`}
                onClick={handleRecord}
                disabled={!selectedBeat && !selectedCustomBeat}
              >
                <span className={styles.recDot} />
                {recorder.recording ? 'Stop' : 'Record'}
              </button>
              {recorder.recording && (
                <span className={styles.recTime}>{formatTime(recorder.duration)}</span>
              )}
            </>
          )}
        </div>

        {/* Preview & Save */}
        {recorder.audioUrl && !recorder.recording && (
          <div className={styles.previewSection}>
            <audio src={recorder.audioUrl} controls className={styles.audioPlayer} />
            <div className={styles.previewActions}>
              <button className={styles.saveBtn} onClick={handleSaveRound}>
                Save Round
              </button>
              <button className={styles.retakeBtn} onClick={recorder.clearRecording}>
                Retake
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Battle Timeline */}
      <section className={styles.timeline}>
        <div className={styles.timelineHeader}>
          <h2 className={styles.sectionTitle}>Rounds</h2>
          {battle.rounds.length > 0 && (
            <button className={styles.shareBtn} onClick={handleShareBattle}>
              Share / Export
            </button>
          )}
        </div>
        {battle.rounds.length === 0 && (
          <p className={styles.empty}>No rounds yet. Drop the first verse!</p>
        )}
        {battle.rounds.map((round, i) => (
          <div key={round.id} className={styles.roundCard}>
            <div className={styles.roundNum}>R{i + 1}</div>
            <div className={styles.roundInfo}>
              <span className={styles.roundPlayer}>{round.player}</span>
              <span className={styles.roundMeta}>
                {round.beatName} · {formatTime(round.duration)}
              </span>
            </div>
            <div className={styles.roundActions}>
              <button
                className={`${styles.playBtn} ${playingRound === round.id ? styles.playBtnActive : ''}`}
                onClick={() => handlePlayRound(round)}
              >
                {playingRound === round.id ? 'Pause' : 'Play'}
              </button>
              <button className={styles.dlBtn} onClick={() => handleDownloadRound(round)}>
                DL
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
