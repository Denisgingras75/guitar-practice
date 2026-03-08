import { useState } from 'react';
import { ALL_ROOTS } from '../data/scales.js';
import { getScalePositions } from '../theory/fretboard.js';
import Fretboard from './Fretboard.jsx';
import styles from './ScaleCard.module.css';

const ALL_POSITIONS_VALUE = -1;

export default function ScaleCard({ scale, onPractice }) {
  const [expanded, setExpanded] = useState(false);
  const [root, setRoot] = useState('A');
  const [positionIndex, setPositionIndex] = useState(ALL_POSITIONS_VALUE);
  const [showIntervals, setShowIntervals] = useState(false);

  const isAllPositions = positionIndex === ALL_POSITIONS_VALUE;
  const minFret = isAllPositions ? 0 : scale.positions[positionIndex].minFret;
  const maxFret = isAllPositions ? 17 : scale.positions[positionIndex].maxFret;
  const positions = getScalePositions(root, scale.intervals, minFret, maxFret);

  return (
    <div className={`${styles.card} ${expanded ? styles.cardExpanded : ''}`}>
      <div className={styles.cardHeader} onClick={() => setExpanded(!expanded)}>
        <div className={styles.headerLeft}>
          <h3 className={styles.name}>{scale.name}</h3>
          {!expanded && scale.mood && (
            <span className={styles.moodHint}>{scale.mood}</span>
          )}
          {!expanded && scale.tags && scale.tags.length > 0 && (
            <div className={styles.tagsInline}>
              {scale.tags.slice(0, 3).map((tag) => (
                <span key={tag} className={styles.tagSmall}>{tag}</span>
              ))}
            </div>
          )}
        </div>
        <span className={`${styles.chevron} ${expanded ? styles.chevronOpen : ''}`}>&#9662;</span>
      </div>

      {expanded && (
        <div className={styles.body}>
          <p className={styles.description}>{scale.description}</p>

          {scale.characteristicNote && (
            <p className={styles.detail}>
              <strong>Characteristic note:</strong> {scale.characteristicNote}
            </p>
          )}
          {scale.chordFit && (
            <p className={styles.detail}>
              <strong>Chord fit:</strong> {scale.chordFit}
            </p>
          )}
          {scale.mood && (
            <p className={styles.detail}>
              <strong>Mood:</strong> {scale.mood}
            </p>
          )}

          <div className={styles.intervalFormula}>
            <span className={styles.formulaLabel}>Intervals:</span>
            {scale.intervals.map((interval, i) => (
              <span key={i} className={styles.intervalDot}>{interval}</span>
            ))}
          </div>

          <div className={styles.controls}>
            <label className={styles.control}>
              Root
              <select value={root} onChange={(e) => setRoot(e.target.value)}>
                {ALL_ROOTS.map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </label>

            <label className={styles.control}>
              Position
              <select
                value={positionIndex}
                onChange={(e) => setPositionIndex(Number(e.target.value))}
              >
                {scale.positions.map((p, i) => (
                  <option key={i} value={i}>{p.name}</option>
                ))}
              </select>
            </label>

            <label className={styles.toggle}>
              <input
                type="checkbox"
                checked={showIntervals}
                onChange={(e) => setShowIntervals(e.target.checked)}
              />
              Intervals
            </label>
          </div>

          <Fretboard
            positions={positions}
            root={root}
            minFret={position.minFret}
            maxFret={position.maxFret}
            showIntervals={showIntervals}
          />

          {scale.tags && scale.tags.length > 0 && (
            <div className={styles.tags}>
              {scale.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          )}

          {onPractice && (
            <button
              className={styles.practiceBtn}
              onClick={() => onPractice({ ...scale, root })}
            >
              Practice This
            </button>
          )}
        </div>
      )}
    </div>
  );
}
