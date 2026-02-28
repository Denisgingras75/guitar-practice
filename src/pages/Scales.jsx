import { useState } from 'react';
import { SCALES } from '../data/scales.js';
import ScaleCard from '../components/ScaleCard.jsx';
import PracticeTimer from '../components/PracticeTimer.jsx';
import { usePracticeLog } from '../hooks/usePracticeLog.js';
import styles from './Scales.module.css';

export default function Scales() {
  const [practicing, setPracticing] = useState(null);
  const { addEntry } = usePracticeLog();

  const handlePractice = (scale) => {
    setPracticing(scale);
  };

  const handleComplete = (entry) => {
    addEntry(entry);
    setPracticing(null);
  };

  return (
    <div className={styles.page}>
      <h2 className={styles.heading}>Scales</h2>

      {practicing && (
        <div className={styles.timerWrap}>
          <PracticeTimer
            topic={{ name: `${practicing.root} ${practicing.name}`, category: 'scales' }}
            onComplete={handleComplete}
          />
        </div>
      )}

      <div className={styles.list}>
        {SCALES.map((scale) => (
          <ScaleCard key={scale.id} scale={scale} onPractice={handlePractice} />
        ))}
      </div>
    </div>
  );
}
