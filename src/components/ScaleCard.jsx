import { useState } from 'react';
import { ALL_ROOTS } from '../data/scales.js';
import { getScalePositions } from '../theory/fretboard.js';
import Fretboard from './Fretboard.jsx';
import styles from './ScaleCard.module.css';

const ALL_POSITIONS_VALUE = -1;

export default function ScaleCard({ scale, onPractice }) {
  const [root, setRoot] = useState('A');
  const [positionIndex, setPositionIndex] = useState(ALL_POSITIONS_VALUE);
  const [showIntervals, setShowIntervals] = useState(false);

  const isAllPositions = positionIndex === ALL_POSITIONS_VALUE;
  const minFret = isAllPositions ? 0 : scale.positions[positionIndex].minFret;
  const maxFret = isAllPositions ? 17 : scale.positions[positionIndex].maxFret;
  const positions = getScalePositions(root, scale.intervals, minFret, maxFret);

  return (
    <div className={styles.card}>
      <h3 className={styles.name}>{scale.name}</h3>
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
            <option value={ALL_POSITIONS_VALUE}>All Positions (Full Neck)</option>
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
        minFret={minFret}
        maxFret={maxFret}
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
  );
}
