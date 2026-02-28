import { useState } from 'react';
import { TECHNIQUES } from '../data/techniques.js';
import PracticeTimer from '../components/PracticeTimer.jsx';
import { usePracticeLog } from '../hooks/usePracticeLog.js';
import styles from './Techniques.module.css';

export default function Techniques() {
  const [practicing, setPracticing] = useState(null);
  const { addEntry } = usePracticeLog();

  const handleComplete = (entry) => {
    addEntry(entry);
    setPracticing(null);
  };

  return (
    <div className={styles.page}>
      <h2 className={styles.heading}>Techniques</h2>

      {practicing && (
        <div className={styles.timerWrap}>
          <PracticeTimer
            topic={{ name: practicing.name, category: 'techniques' }}
            onComplete={handleComplete}
          />
        </div>
      )}

      <div className={styles.list}>
        {TECHNIQUES.map((tech) => (
          <div key={tech.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.techName}>{tech.name}</span>
              <span className={styles.badge}>{tech.category}</span>
            </div>

            <p className={styles.description}>{tech.description}</p>

            {tech.tips.length > 0 && (
              <>
                <div className={styles.subHeading}>Tips</div>
                <ul className={styles.tips}>
                  {tech.tips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </>
            )}

            {tech.exercises.length > 0 && (
              <>
                <div className={styles.subHeading}>Exercises</div>
                <ol className={styles.exercises}>
                  {tech.exercises.map((ex, i) => (
                    <li key={i}>
                      <span className={styles.exerciseName}>{ex.name}</span>
                      {' \u2014 '}
                      {ex.description}
                    </li>
                  ))}
                </ol>
              </>
            )}

            {tech.tags.length > 0 && (
              <div className={styles.tags}>
                {tech.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            )}

            <button
              className={styles.practiceBtn}
              onClick={() => setPracticing(tech)}
            >
              Practice This
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
