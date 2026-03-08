import { useState } from 'react';
import { TECHNIQUES } from '../data/techniques.js';
import PracticeTimer from '../components/PracticeTimer.jsx';
import { usePracticeLog } from '../hooks/usePracticeLog.js';
import styles from './Techniques.module.css';

function TechniqueCard({ tech, onPractice }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`${styles.card} ${expanded ? styles.cardExpanded : ''}`}>
      <div className={styles.cardHeader} onClick={() => setExpanded(!expanded)}>
        <div className={styles.headerLeft}>
          <span className={styles.techName}>{tech.name}</span>
          <span className={styles.badge}>{tech.category}</span>
          {tech.instrument && tech.instrument !== 'both' && (
            <span className={`${styles.badge} ${styles.instrumentBadge}`} data-instrument={tech.instrument}>
              {tech.instrument}
            </span>
          )}
        </div>
        <span className={`${styles.chevron} ${expanded ? styles.chevronOpen : ''}`}>&#9662;</span>
      </div>

      {expanded && (
        <div className={styles.body}>
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
            onClick={() => onPractice(tech)}
          >
            Practice This
          </button>
        </div>
      )}
    </div>
  );
}

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
          <TechniqueCard key={tech.id} tech={tech} onPractice={setPracticing} />
        ))}
      </div>
    </div>
  );
}
