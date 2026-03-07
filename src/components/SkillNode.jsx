import { useState } from 'react';
import { useSkillProgress } from '../hooks/useSkillProgress.js';
import PracticeTimer from './PracticeTimer.jsx';
import { usePracticeLog } from '../hooks/usePracticeLog.js';
import { ALL_NODES } from '../data/curriculum/index.js';
import styles from './SkillNode.module.css';

export default function SkillNode({ node, onClose }) {
  const { isCompleted, toggleNode, arePrereqsMet } = useSkillProgress();
  const [practicing, setPracticing] = useState(null);
  const { addEntry } = usePracticeLog();

  const completed = isCompleted(node.id);
  const unlocked = arePrereqsMet(node);

  const prereqNodes = (node.prerequisites || []).map((id) =>
    ALL_NODES.find((n) => n.id === id)
  ).filter(Boolean);

  const handleComplete = (entry) => {
    addEntry(entry);
    setPracticing(null);
  };

  return (
    <div className={styles.detail}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.name}>{node.name}</h3>
          <span className={`${styles.status} ${completed ? styles.done : unlocked ? styles.available : styles.locked}`}>
            {completed ? 'Completed' : unlocked ? 'Available' : 'Locked'}
          </span>
        </div>
        {onClose && (
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">&times;</button>
        )}
      </div>

      <p className={styles.description}>{node.description}</p>

      {node.whyItMatters && (
        <div className={styles.whySection}>
          <span className={styles.whyLabel}>Why it matters</span>
          <p className={styles.whyText}>{node.whyItMatters}</p>
        </div>
      )}

      {practicing && (
        <div className={styles.timerWrap}>
          <PracticeTimer
            topic={{ name: `${node.name}`, category: node.tree }}
            onComplete={handleComplete}
          />
        </div>
      )}

      {/* Prerequisites */}
      {prereqNodes.length > 0 && (
        <div className={styles.section}>
          <span className={styles.sectionLabel}>Prerequisites</span>
          <div className={styles.prereqList}>
            {prereqNodes.map((p) => (
              <span
                key={p.id}
                className={`${styles.prereqTag} ${isCompleted(p.id) ? styles.prereqDone : ''}`}
              >
                {isCompleted(p.id) ? '\u2713 ' : '\u25CB '}{p.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Exercises */}
      {node.exercises && node.exercises.length > 0 && (
        <div className={styles.section}>
          <span className={styles.sectionLabel}>Exercises</span>
          <ol className={styles.exerciseList}>
            {node.exercises.map((ex, i) => (
              <li key={i} className={styles.exercise}>
                <span className={styles.exerciseName}>{ex.name}</span>
                <p className={styles.exerciseDesc}>{ex.description}</p>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Tab */}
      {node.tab && (
        <div className={styles.section}>
          <span className={styles.sectionLabel}>Tab</span>
          <pre className={styles.tab}>{node.tab}</pre>
        </div>
      )}

      {/* External Link */}
      {node.externalUrl && (
        <a
          href={node.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.externalLink}
        >
          View Full Tab &rarr;
        </a>
      )}

      {/* Action Buttons */}
      <div className={styles.actions}>
        {!practicing && (
          <button
            className={styles.practiceBtn}
            onClick={() => setPracticing(true)}
          >
            Practice This
          </button>
        )}
        <button
          className={`${styles.completeBtn} ${completed ? styles.completeBtnDone : ''}`}
          onClick={() => toggleNode(node.id)}
        >
          {completed ? 'Mark Incomplete' : 'Mark Complete'}
        </button>
      </div>
    </div>
  );
}
