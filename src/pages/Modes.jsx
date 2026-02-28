import { useState } from 'react';
import { MODES } from '../data/modes.js';
import ScaleCard from '../components/ScaleCard.jsx';
import PracticeTimer from '../components/PracticeTimer.jsx';
import { usePracticeLog } from '../hooks/usePracticeLog.js';
import styles from './Modes.module.css';

export default function Modes() {
  const [practicing, setPracticing] = useState(null);
  const { addEntry } = usePracticeLog();

  const handlePractice = (mode) => {
    setPracticing(mode);
  };

  const handleComplete = (entry) => {
    addEntry(entry);
    setPracticing(null);
  };

  return (
    <div className={styles.page}>
      <h2 className={styles.heading}>Modes</h2>

      {practicing && (
        <div className={styles.timerWrap}>
          <PracticeTimer
            topic={{ name: `${practicing.root} ${practicing.name}`, category: 'modes' }}
            onComplete={handleComplete}
          />
        </div>
      )}

      <div className={styles.list}>
        {MODES.map((mode) => (
          <ScaleCard key={mode.id} scale={mode} onPractice={handlePractice} />
        ))}
      </div>
    </div>
  );
}
