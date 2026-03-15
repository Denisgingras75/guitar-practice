import { useState, useEffect, useCallback, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getRandomTopic, getRandomWords, getRandomChallenge, challenges } from '../data/prompts.js';
import { beats } from '../data/beats.js';
import useBeatPlayer from '../hooks/useBeatPlayer.js';
import useBattleHistory from '../hooks/useBattleHistory.js';
import styles from './Practice.module.css';

const MODES = [
  { key: 'freestyle', label: 'Free Flow', icon: '\ud83c\udfa7', desc: 'Open freestyle with a beat' },
  { key: 'topic', label: 'Topic Drill', icon: '\ud83d\udcac', desc: 'Get random topics to rap about' },
  { key: 'words', label: 'Word Play', icon: '\ud83d\udcdd', desc: 'Incorporate given words in your bars' },
  { key: 'challenge', label: 'Challenge', icon: '\ud83c\udfc6', desc: 'Specific freestyle challenges' },
];

export default function Practice() {
  const [params] = useSearchParams();
  const [mode, setMode] = useState(params.get('mode') || null);
  const [topic, setTopic] = useState(getRandomTopic());
  const [words, setWords] = useState(getRandomWords());
  const [challenge, setChallenge] = useState(getRandomChallenge());
  const [selectedBeat, setSelectedBeat] = useState(beats[0]);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [selfScore, setSelfScore] = useState(3);
  const timerRef = useRef(null);
  const beatPlayer = useBeatPlayer();
  const { addBattle } = useBattleHistory();

  const duration = mode === 'challenge' ? challenge.duration : 60;

  const startSession = useCallback(() => {
    setTimeLeft(duration);
    setIsRunning(true);
    setIsFinished(false);
    beatPlayer.play(selectedBeat);
  }, [duration, selectedBeat, beatPlayer]);

  const stopSession = useCallback(() => {
    setIsRunning(false);
    setIsFinished(true);
    beatPlayer.stop();
    if (timerRef.current) clearInterval(timerRef.current);
  }, [beatPlayer]);

  const resetSession = useCallback(() => {
    setIsRunning(false);
    setIsFinished(false);
    setTimeLeft(duration);
    setSelfScore(3);
    beatPlayer.stop();
  }, [duration, beatPlayer]);

  const saveSession = useCallback(() => {
    addBattle({
      type: 'practice',
      name: `${MODES.find(m => m.key === mode)?.label || 'Practice'} Session`,
      mode,
      topic: mode === 'topic' ? topic : undefined,
      words: mode === 'words' ? words : undefined,
      challenge: mode === 'challenge' ? challenge.name : undefined,
      beat: selectedBeat.name,
      selfScore,
      duration,
    });
    resetSession();
    setMode(null);
  }, [addBattle, mode, topic, words, challenge, selectedBeat, selfScore, duration, resetSession]);

  useEffect(() => {
    if (!isRunning) return;
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          stopSession();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [isRunning, stopSession]);

  const refreshPrompt = () => {
    if (mode === 'topic') setTopic(getRandomTopic());
    else if (mode === 'words') setWords(getRandomWords());
    else if (mode === 'challenge') setChallenge(getRandomChallenge());
  };

  // Mode selection
  if (!mode) {
    return (
      <div className={styles.practice}>
        <h2 className={styles.pageTitle}>Solo Practice</h2>
        <p className={styles.pageDesc}>Choose a practice mode to sharpen your freestyle skills</p>
        <div className={styles.modeGrid}>
          {MODES.map(m => (
            <button key={m.key} className={styles.modeCard} onClick={() => { setMode(m.key); resetSession(); }}>
              <span className={styles.modeIcon}>{m.icon}</span>
              <span className={styles.modeLabel}>{m.label}</span>
              <span className={styles.modeDesc}>{m.desc}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  const formatTime = (s) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;
  const progress = ((duration - timeLeft) / duration) * 100;

  return (
    <div className={styles.practice}>
      <div className={styles.topBar}>
        <button className={styles.backBtn} onClick={() => { resetSession(); setMode(null); }}>
          &#8592; Back
        </button>
        <h2 className={styles.modeTitle}>{MODES.find(m => m.key === mode)?.label}</h2>
      </div>

      {/* Prompt Area */}
      <div className={styles.promptCard}>
        {mode === 'topic' && (
          <>
            <span className={styles.promptLabel}>YOUR TOPIC</span>
            <span className={styles.promptText}>{topic}</span>
          </>
        )}
        {mode === 'words' && (
          <>
            <span className={styles.promptLabel}>USE THESE WORDS</span>
            <div className={styles.wordList}>
              {words.map((w, i) => (
                <span key={i} className={styles.wordChip}>{w}</span>
              ))}
            </div>
          </>
        )}
        {mode === 'challenge' && (
          <>
            <span className={styles.promptLabel}>{challenge.name}</span>
            <span className={styles.promptText}>{challenge.description}</span>
          </>
        )}
        {mode === 'freestyle' && (
          <>
            <span className={styles.promptLabel}>FREE FLOW</span>
            <span className={styles.promptText}>No rules. Just spit bars.</span>
          </>
        )}
        {!isRunning && !isFinished && mode !== 'freestyle' && (
          <button className={styles.refreshBtn} onClick={refreshPrompt}>
            &#128260; New prompt
          </button>
        )}
      </div>

      {/* Beat Selector */}
      {!isRunning && !isFinished && (
        <div className={styles.beatSection}>
          <span className={styles.beatLabel}>SELECT BEAT</span>
          <div className={styles.beatGrid}>
            {beats.map(b => (
              <button
                key={b.name}
                className={`${styles.beatChip} ${selectedBeat.name === b.name ? styles.beatActive : ''}`}
                onClick={() => setSelectedBeat(b)}
              >
                <span className={styles.beatName}>{b.name}</span>
                <span className={styles.beatBpm}>{b.bpm} BPM</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Timer */}
      <div className={styles.timerArea}>
        <div className={styles.timerRing}>
          <svg viewBox="0 0 120 120" className={styles.timerSvg}>
            <circle cx="60" cy="60" r="54" className={styles.timerBg} />
            <circle
              cx="60" cy="60" r="54"
              className={styles.timerProgress}
              strokeDasharray={`${2 * Math.PI * 54}`}
              strokeDashoffset={`${2 * Math.PI * 54 * (1 - progress / 100)}`}
            />
          </svg>
          <span className={styles.timerText}>{formatTime(timeLeft)}</span>
        </div>

        {beatPlayer.isPlaying && (
          <div className={styles.beatViz}>
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className={`${styles.beatStep} ${beatPlayer.currentStep === i ? styles.beatStepActive : ''}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        {!isRunning && !isFinished && (
          <button className="btn btn-primary btn-lg" onClick={startSession}>
            &#9654;&#65039; Start
          </button>
        )}
        {isRunning && (
          <button className="btn btn-outline btn-lg" onClick={stopSession}>
            &#9724;&#65039; Stop
          </button>
        )}
        {isFinished && (
          <div className={styles.finishArea}>
            <h3 className={styles.finishTitle}>Session Complete!</h3>
            <div className={styles.selfScore}>
              <span className={styles.scoreLabel}>Rate your performance</span>
              <div className={styles.scoreStars}>
                {[1, 2, 3, 4, 5].map(s => (
                  <button
                    key={s}
                    className={`${styles.star} ${s <= selfScore ? styles.starActive : ''}`}
                    onClick={() => setSelfScore(s)}
                  >
                    {s <= selfScore ? '\u2b50' : '\u2606'}
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.finishActions}>
              <button className="btn btn-primary" onClick={saveSession}>Save & Exit</button>
              <button className="btn btn-outline" onClick={resetSession}>Try Again</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
