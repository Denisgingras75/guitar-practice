import { useState, useEffect, useRef } from 'react';
import styles from './PracticeTimer.module.css';

export default function PracticeTimer({ topic, onComplete }) {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  const toggle = () => setRunning((r) => !r);

  const done = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
    const durationMinutes = Math.round((seconds / 60) * 10) / 10;
    onComplete({
      topic: topic.name || topic.id || 'Unknown',
      category: topic.category || 'general',
      durationMinutes,
    });
  };

  const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
  const ss = String(seconds % 60).padStart(2, '0');

  return (
    <div className={styles.timer}>
      <p className={styles.label}>
        Practicing: <strong>{topic.name || topic.id || 'Session'}</strong>
      </p>
      <p className={styles.time}>{mm}:{ss}</p>
      <div className={styles.buttons}>
        <button className={styles.btn} onClick={toggle}>
          {running ? 'Pause' : 'Resume'}
        </button>
        <button className={`${styles.btn} ${styles.done}`} onClick={done}>
          Done
        </button>
      </div>
    </div>
  );
}
