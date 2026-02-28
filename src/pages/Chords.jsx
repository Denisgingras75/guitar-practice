import { CHORD_TYPES, OPEN_VOICINGS } from '../data/chords.js';
import styles from './Chords.module.css';

const STRING_LABELS = ['E', 'A', 'D', 'G', 'B', 'e'];
const FRET_COUNT = 4;

function ChordDiagram({ name, voicing }) {
  // voicing is [lowE, A, D, G, B, highE] where null = muted
  const maxFret = Math.max(...voicing.filter((f) => f !== null && f > 0));
  const minFret = Math.min(...voicing.filter((f) => f !== null && f > 0)) || 0;

  // Determine starting fret for the diagram window
  const startFret = maxFret <= FRET_COUNT ? 1 : minFret;

  return (
    <div className={styles.diagramWrap}>
      <div className={styles.diagramLabel}>{name}</div>
      <div className={styles.diagram}>
        {/* Open/muted indicators above strings */}
        <div className={styles.openIndicators}>
          {voicing.map((fret, i) => (
            <div key={i} className={styles.openIndicator}>
              {fret === null ? 'X' : fret === 0 ? 'O' : '\u00A0'}
            </div>
          ))}
        </div>

        {/* Fret grid */}
        <div className={styles.fretGrid}>
          {Array.from({ length: FRET_COUNT }, (_, fretIdx) => {
            const fret = startFret + fretIdx;
            return (
              <div key={fret} className={styles.fretRow}>
                {voicing.map((v, stringIdx) => (
                  <div key={stringIdx} className={styles.cell}>
                    {v === fret && <div className={styles.dot} />}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function getVoicingsForType(chordTypeId) {
  const results = [];
  for (const [key, voicing] of Object.entries(OPEN_VOICINGS)) {
    // key format: "C-major", "A-dom7", etc.
    const parts = key.split('-');
    const root = parts[0];
    const typeId = parts.slice(1).join('-');
    if (typeId === chordTypeId) {
      results.push({ root, voicing, key });
    }
  }
  return results;
}

export default function Chords() {
  return (
    <div className={styles.page}>
      <h2 className={styles.heading}>Chords</h2>

      <div className={styles.list}>
        {CHORD_TYPES.map((type) => {
          const voicings = getVoicingsForType(type.id);
          return (
            <div key={type.id} className={styles.chordTypeCard}>
              <div className={styles.chordTypeName}>{type.name}</div>
              <div className={styles.chordTypeInfo}>
                {type.symbol && (
                  <span className={styles.symbol}>X{type.symbol}</span>
                )}
                <span className={styles.formula}>
                  [{type.intervals.join(', ')}]
                </span>
              </div>
              <p className={styles.description}>{type.description}</p>

              {voicings.length > 0 && (
                <div className={styles.voicings}>
                  {voicings.map((v) => (
                    <ChordDiagram
                      key={v.key}
                      name={`${v.root}${type.symbol}`}
                      voicing={v.voicing}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
