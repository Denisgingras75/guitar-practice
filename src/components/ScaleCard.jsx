import { useState } from 'react';
import { ALL_ROOTS } from '../data/scales.js';
import { getScalePositions } from '../theory/fretboard.js';
import Fretboard from './Fretboard.jsx';
import styles from './ScaleCard.module.css';

export default function ScaleCard({ scale, onPractice }) {
  const [root, setRoot] = useState('A');
  const [positionIndex, setPositionIndex] = useState(0);
  const [showIntervals, setShowIntervals] = useState(false);

  const position = scale.positions[positionIndex];
  const positions = getScalePositions(root, scale.intervals, position.minFret, position.maxFret);

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
  );
}
