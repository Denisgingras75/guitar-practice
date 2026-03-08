import { useState } from 'react';
import { ALL_ROOTS, SCALES } from '../data/scales.js';
import { MODES } from '../data/modes.js';
import { CHORD_TYPES, OPEN_VOICINGS } from '../data/chords.js';
import { getScalePositions } from '../theory/fretboard.js';
import Fretboard from '../components/Fretboard.jsx';
import styles from './CheatSheet.module.css';

const NOTE_NAMES = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];

function getNotesInScale(root, intervals) {
  const rootIdx = NOTE_NAMES.indexOf(root);
  return intervals.map((i) => NOTE_NAMES[(rootIdx + i) % 12]);
}

// Standard major-scale chord qualities by degree
const MAJOR_DEGREES = [
  { degree: 'I', quality: 'major', symbol: '' },
  { degree: 'ii', quality: 'minor', symbol: 'm' },
  { degree: 'iii', quality: 'minor', symbol: 'm' },
  { degree: 'IV', quality: 'major', symbol: '' },
  { degree: 'V', quality: 'major', symbol: '' },
  { degree: 'vi', quality: 'minor', symbol: 'm' },
  { degree: 'vii\u00B0', quality: 'dim', symbol: 'dim' },
];

const MINOR_DEGREES = [
  { degree: 'i', quality: 'minor', symbol: 'm' },
  { degree: 'ii\u00B0', quality: 'dim', symbol: 'dim' },
  { degree: 'III', quality: 'major', symbol: '' },
  { degree: 'iv', quality: 'minor', symbol: 'm' },
  { degree: 'v', quality: 'minor', symbol: 'm' },
  { degree: 'VI', quality: 'major', symbol: '' },
  { degree: 'VII', quality: 'major', symbol: '' },
];

const COMMON_PROGRESSIONS = [
  { name: 'Pop / Rock', numerals: ['I', 'V', 'vi', 'IV'] },
  { name: 'Blues 12-bar', numerals: ['I', 'I', 'I', 'I', 'IV', 'IV', 'I', 'I', 'V', 'IV', 'I', 'V'] },
  { name: '50s Doo-Wop', numerals: ['I', 'vi', 'IV', 'V'] },
  { name: 'Jazz ii-V-I', numerals: ['ii', 'V', 'I'] },
  { name: 'Andalusian', numerals: ['i', 'VII', 'VI', 'V'] },
  { name: 'Grunge / Alt', numerals: ['I', 'IV', 'vi', 'V'] },
];

const KEY_SCALES = ['major', 'natural-minor', 'minor-pentatonic', 'major-pentatonic', 'blues'];

function MiniChordDiagram({ name, voicing }) {
  const FRET_COUNT = 4;
  const maxFret = Math.max(...voicing.filter((f) => f !== null && f > 0));
  const minFret = Math.min(...voicing.filter((f) => f !== null && f > 0)) || 0;
  const startFret = maxFret <= FRET_COUNT ? 1 : minFret;

  return (
    <div className={styles.miniDiagram}>
      <div className={styles.miniLabel}>{name}</div>
      <div className={styles.miniGrid}>
        <div className={styles.miniIndicators}>
          {voicing.map((fret, i) => (
            <div key={i} className={styles.miniIndicator}>
              {fret === null ? 'X' : fret === 0 ? 'O' : '\u00A0'}
            </div>
          ))}
        </div>
        <div className={styles.miniFrets}>
          {Array.from({ length: FRET_COUNT }, (_, fretIdx) => {
            const fret = startFret + fretIdx;
            return (
              <div key={fret} className={styles.miniFretRow}>
                {voicing.map((v, si) => (
                  <div key={si} className={styles.miniCell}>
                    {v === fret && <div className={styles.miniDot} />}
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

function ScaleSection({ root, scaleId }) {
  const [expanded, setExpanded] = useState(false);
  const [positionIndex, setPositionIndex] = useState(0);
  const scale = SCALES.find((s) => s.id === scaleId);
  if (!scale) return null;

  const notes = getNotesInScale(root, scale.intervals);
  const position = scale.positions[positionIndex];
  const positions = getScalePositions(root, scale.intervals, position.minFret, position.maxFret);

  return (
    <div className={`${styles.scaleRow} ${expanded ? styles.scaleRowExpanded : ''}`}>
      <div className={styles.scaleHeader} onClick={() => setExpanded(!expanded)}>
        <div className={styles.scaleInfo}>
          <span className={styles.scaleName}>{scale.name}</span>
          <span className={styles.scaleNotes}>{notes.join(' \u2013 ')}</span>
        </div>
        <span className={`${styles.chevron} ${expanded ? styles.chevronOpen : ''}`}>&#9662;</span>
      </div>
      {expanded && (
        <div className={styles.scaleBody}>
          <div className={styles.positionSelect}>
            {scale.positions.map((p, i) => (
              <button
                key={i}
                className={`${styles.posBtn} ${i === positionIndex ? styles.posBtnActive : ''}`}
                onClick={() => setPositionIndex(i)}
              >
                {p.name.replace('Position ', 'P')}
              </button>
            ))}
          </div>
          <Fretboard
            positions={positions}
            root={root}
            minFret={position.minFret}
            maxFret={position.maxFret}
            showIntervals={false}
          />
        </div>
      )}
    </div>
  );
}

function ModeRow({ root, mode }) {
  const [expanded, setExpanded] = useState(false);
  const [positionIndex, setPositionIndex] = useState(0);
  const notes = getNotesInScale(root, mode.intervals);
  const position = mode.positions[positionIndex];
  const positions = getScalePositions(root, mode.intervals, position.minFret, position.maxFret);

  return (
    <div className={`${styles.scaleRow} ${expanded ? styles.scaleRowExpanded : ''}`}>
      <div className={styles.scaleHeader} onClick={() => setExpanded(!expanded)}>
        <div className={styles.scaleInfo}>
          <span className={styles.scaleName}>{mode.name}</span>
          <span className={styles.modeMood}>{mode.mood}</span>
          <span className={styles.modeChord}>{mode.chordFit}</span>
        </div>
        <span className={`${styles.chevron} ${expanded ? styles.chevronOpen : ''}`}>&#9662;</span>
      </div>
      {expanded && (
        <div className={styles.scaleBody}>
          <div className={styles.scaleNotes} style={{ marginBottom: '0.5rem' }}>{notes.join(' \u2013 ')}</div>
          {mode.characteristicNote && (
            <div className={styles.modeDetail}>Characteristic note: {mode.characteristicNote}</div>
          )}
          <div className={styles.positionSelect}>
            {mode.positions.map((p, i) => (
              <button
                key={i}
                className={`${styles.posBtn} ${i === positionIndex ? styles.posBtnActive : ''}`}
                onClick={() => setPositionIndex(i)}
              >
                {p.name.replace('Position ', 'P')}
              </button>
            ))}
          </div>
          <Fretboard
            positions={positions}
            root={root}
            minFret={position.minFret}
            maxFret={position.maxFret}
            showIntervals={false}
          />
        </div>
      )}
    </div>
  );
}

export default function CheatSheet() {
  const [root, setRoot] = useState('A');
  const [showModes, setShowModes] = useState(false);

  const majorNotes = getNotesInScale(root, [0, 2, 4, 5, 7, 9, 11]);
  const minorNotes = getNotesInScale(root, [0, 2, 3, 5, 7, 8, 10]);

  // Build chord lists for the key
  const majorChords = MAJOR_DEGREES.map((d, i) => ({
    ...d,
    root: majorNotes[i],
    name: `${majorNotes[i]}${d.symbol}`,
  }));
  const minorChords = MINOR_DEGREES.map((d, i) => ({
    ...d,
    root: minorNotes[i],
    name: `${minorNotes[i]}${d.symbol}`,
  }));

  // Resolve progression numerals to chord names
  const resolveProgression = (numerals) => {
    // Check if it uses minor numerals
    const isMinor = numerals.some((n) => ['i', 'ii\u00B0', 'III', 'iv', 'v', 'VI', 'VII'].includes(n));
    const chords = isMinor ? minorChords : majorChords;
    const degreeMap = {};
    (isMinor ? MINOR_DEGREES : MAJOR_DEGREES).forEach((d, i) => {
      degreeMap[d.degree] = chords[i];
    });
    return numerals.map((n) => degreeMap[n]?.name || n);
  };

  // Find open voicings for chords in the key
  const getChordsWithVoicings = (chordList) => {
    return chordList.map((chord) => {
      const typeId = CHORD_TYPES.find((t) => t.symbol === chord.symbol)?.id;
      const voicingKey = `${chord.root}-${typeId}`;
      const voicing = OPEN_VOICINGS[voicingKey];
      return { ...chord, voicing, typeId };
    });
  };

  const majorChordsWithVoicings = getChordsWithVoicings(majorChords);
  const minorChordsWithVoicings = getChordsWithVoicings(minorChords);

  return (
    <div className={styles.page}>
      <div className={styles.titleRow}>
        <h2 className={styles.heading}>Cheat Sheet</h2>
        <div className={styles.keyPicker}>
          <span className={styles.keyLabel}>Key</span>
          <select value={root} onChange={(e) => setRoot(e.target.value)} className={styles.keySelect}>
            {ALL_ROOTS.map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
      </div>

      {/* === Diatonic Chords === */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Chords in {root} Major</h3>
        <div className={styles.chordRow}>
          {majorChordsWithVoicings.map((c) => (
            <div key={c.degree} className={styles.chordCell}>
              <div className={styles.chordDegree}>{c.degree}</div>
              <div className={styles.chordName}>{c.name}</div>
              {c.voicing && (
                <MiniChordDiagram name="" voicing={c.voicing} />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Chords in {root} Minor</h3>
        <div className={styles.chordRow}>
          {minorChordsWithVoicings.map((c) => (
            <div key={c.degree} className={styles.chordCell}>
              <div className={styles.chordDegree}>{c.degree}</div>
              <div className={styles.chordName}>{c.name}</div>
              {c.voicing && (
                <MiniChordDiagram name="" voicing={c.voicing} />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* === Common Progressions === */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Common Progressions</h3>
        <div className={styles.progressions}>
          {COMMON_PROGRESSIONS.map((prog) => (
            <div key={prog.name} className={styles.progRow}>
              <span className={styles.progName}>{prog.name}</span>
              <div className={styles.progChords}>
                {resolveProgression(prog.numerals).map((chord, i) => (
                  <span key={i} className={styles.progChord}>
                    <span className={styles.progNumeral}>{prog.numerals[i]}</span>
                    {chord}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === Scales === */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Scales in {root}</h3>
        <div className={styles.scaleList}>
          {KEY_SCALES.map((id) => (
            <ScaleSection key={id} root={root} scaleId={id} />
          ))}
        </div>
      </section>

      {/* === Modes === */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>Modes of {root} Major</h3>
          <button className={styles.toggleBtn} onClick={() => setShowModes(!showModes)}>
            {showModes ? 'Hide' : 'Show'}
          </button>
        </div>
        {showModes && (
          <div className={styles.scaleList}>
            {MODES.map((mode) => (
              <ModeRow key={mode.id} root={root} mode={mode} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
