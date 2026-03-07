import { useTuner, STANDARD_TUNING_FREQ } from '../hooks/useTuner.js';
import styles from './Tuner.module.css';

const STRINGS = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'];

function getNearestString(note) {
  if (!note) return null;
  let closest = null;
  let minDiff = Infinity;
  for (const s of STANDARD_TUNING_FREQ) {
    const diff = Math.abs(note.frequency - s.freq);
    if (diff < minDiff) {
      minDiff = diff;
      closest = s;
    }
  }
  return closest;
}

function getCentsColor(cents) {
  const abs = Math.abs(cents);
  if (abs <= 5) return 'var(--tuner-green)';
  if (abs <= 15) return 'var(--tuner-yellow)';
  return 'var(--tuner-red)';
}

export default function Tuner() {
  const { listening, note, error, start, stop } = useTuner();
  const nearest = getNearestString(note);

  return (
    <div className={styles.page}>
      <h2 className={styles.heading}>Tuner</h2>

      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.tunerCard}>
        {/* Note display */}
        <div className={styles.noteDisplay}>
          {note ? (
            <>
              <span className={styles.noteName}>{note.name}</span>
              <span className={styles.octave}>{note.octave}</span>
            </>
          ) : (
            <span className={styles.notePlaceholder}>{listening ? '...' : '--'}</span>
          )}
        </div>

        {/* Cents meter */}
        <div className={styles.meterWrap}>
          <div className={styles.meterTrack}>
            <div className={styles.meterCenter} />
            {note && (
              <div
                className={styles.meterNeedle}
                style={{
                  left: `${50 + note.cents * 0.5}%`,
                  backgroundColor: getCentsColor(note.cents),
                }}
              />
            )}
          </div>
          <div className={styles.meterLabels}>
            <span>-50</span>
            <span className={styles.meterLabelCenter}>0</span>
            <span>+50</span>
          </div>
        </div>

        {/* Cents readout */}
        {note && (
          <p className={styles.centsText} style={{ color: getCentsColor(note.cents) }}>
            {note.cents > 0 ? '+' : ''}{note.cents} cents
          </p>
        )}

        {/* Frequency */}
        {note && (
          <p className={styles.freqText}>{note.frequency.toFixed(1)} Hz</p>
        )}

        {/* Start/Stop button */}
        <button
          className={`${styles.toggleBtn} ${listening ? styles.active : ''}`}
          onClick={listening ? stop : start}
        >
          {listening ? 'Stop' : 'Start Tuning'}
        </button>
      </div>

      {/* String reference */}
      <div className={styles.stringsSection}>
        <h3 className={styles.subHeading}>Standard Tuning</h3>
        <div className={styles.stringGrid}>
          {STANDARD_TUNING_FREQ.map((s, i) => {
            const isActive = nearest && nearest.note === s.note && nearest.octave === s.octave;
            return (
              <div
                key={STRINGS[i]}
                className={`${styles.stringCard} ${isActive ? styles.stringActive : ''}`}
              >
                <span className={styles.stringName}>{s.note}</span>
                <span className={styles.stringOctave}>{s.octave}</span>
                <span className={styles.stringFreq}>{s.freq.toFixed(1)} Hz</span>
                <span className={styles.stringLabel}>String {6 - i}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.tips}>
        <h3 className={styles.subHeading}>Tips</h3>
        <ul>
          <li>Play one string at a time, let it ring</li>
          <li>Tune up to pitch (tighten), not down — holds tuning better</li>
          <li>Green = in tune (within 5 cents), yellow = close, red = keep going</li>
          <li>Works best in a quiet room with the mic close to the guitar</li>
        </ul>
      </div>
    </div>
  );
}
