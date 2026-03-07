import { getIntervalName, STANDARD_TUNING } from '../theory/fretboard.js';
import styles from './Fretboard.module.css';

const STRING_SPACING = 24;
const NOTE_RADIUS = 10;
const STRING_COUNT = 6;

const MARKER_FRETS = new Set([3, 5, 7, 9, 15, 17, 19, 21]);
const DOUBLE_MARKER_FRETS = new Set([12]);

const STRING_LABELS = [...STANDARD_TUNING].reverse(); // high E at top

export default function Fretboard({
  positions = [],
  root = 'A',
  minFret = 0,
  maxFret = 15,
  showIntervals = false,
}) {
  const fretCount = maxFret - minFret;
  // Scale fret width down for full-neck views so the diagram stays readable
  const FRET_WIDTH = fretCount > 10 ? 38 : 50;
  const PAD = { top: 30, bottom: 20, left: 40, right: 20 };
  const width = PAD.left + fretCount * FRET_WIDTH + PAD.right;
  const height = PAD.top + (STRING_COUNT - 1) * STRING_SPACING + PAD.bottom;
  const noteRadius = fretCount > 10 ? 8 : NOTE_RADIUS;
  const noteFontSize = fretCount > 10 ? 6.5 : 8;

  // X position for a given fret number (at the fret wire)
  const fretX = (fret) => PAD.left + (fret - minFret) * FRET_WIDTH;

  // X position for a note at a given fret (center of fret space)
  const noteX = (fret) => {
    if (fret === 0) return PAD.left - noteRadius - 4;
    return fretX(fret) - FRET_WIDTH / 2;
  };

  // Y position for a string — invert so high E (index 5) is at top, low E (index 0) at bottom
  const stringY = (stringIndex) =>
    PAD.top + (STRING_COUNT - 1 - stringIndex) * STRING_SPACING;

  const topY = stringY(STRING_COUNT - 1); // high E — top of fretboard
  const bottomY = stringY(0); // low E — bottom of fretboard

  return (
    <div className={styles.container}>
      <svg
        className={styles.svg}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMinYMid meet"
        role="img"
        aria-label={`Guitar fretboard showing ${root} scale from fret ${minFret} to ${maxFret}`}
      >
        {/* String labels (tuning) */}
        {STRING_LABELS.map((label, i) => (
          <text
            key={`sl-${i}`}
            x={PAD.left - 24}
            y={PAD.top + i * STRING_SPACING}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={9}
            fontWeight={600}
            fill="var(--fg-muted, #888)"
          >
            {label}
          </text>
        ))}

        {/* Fret numbers */}
        {Array.from({ length: fretCount + 1 }, (_, i) => {
          const fret = minFret + i;
          if (fret === 0) return null;
          return (
            <text
              key={`fn-${fret}`}
              x={fretX(fret) - FRET_WIDTH / 2}
              y={PAD.top - 16}
              textAnchor="middle"
              fontSize={fretCount > 10 ? 8 : 10}
              fill="var(--fg-muted, #999)"
            >
              {fret}
            </text>
          );
        })}

        {/* Nut */}
        {minFret === 0 && (
          <line
            x1={PAD.left}
            y1={topY - 2}
            x2={PAD.left}
            y2={bottomY + 2}
            stroke="var(--fg, #333)"
            strokeWidth={4}
          />
        )}

        {/* Fret wires */}
        {Array.from({ length: fretCount }, (_, i) => {
          const fret = minFret + i + 1;
          return (
            <line
              key={`fw-${fret}`}
              x1={fretX(fret)}
              y1={topY}
              x2={fretX(fret)}
              y2={bottomY}
              stroke="var(--fg-muted, #ccc)"
              strokeWidth={1}
            />
          );
        })}

        {/* Strings */}
        {Array.from({ length: STRING_COUNT }, (_, i) => {
          // i iterates 0-5; string 0 = low E (thickest, at bottom), string 5 = high E (thinnest, at top)
          const thickness = 1 + (STRING_COUNT - 1 - i) * 0.3;
          return (
            <line
              key={`s-${i}`}
              x1={PAD.left}
              y1={stringY(i)}
              x2={PAD.left + fretCount * FRET_WIDTH}
              y2={stringY(i)}
              stroke="var(--fg, #555)"
              strokeWidth={thickness}
              opacity={0.6}
            />
          );
        })}

        {/* Fret markers */}
        {Array.from({ length: fretCount }, (_, i) => {
          const fret = minFret + i + 1;
          const cx = fretX(fret) - FRET_WIDTH / 2;
          const boardMid = (topY + bottomY) / 2;

          if (DOUBLE_MARKER_FRETS.has(fret)) {
            const offset = STRING_SPACING * 1.5;
            return (
              <g key={`marker-${fret}`}>
                <circle
                  cx={cx}
                  cy={boardMid - offset}
                  r={3}
                  fill="var(--fg-muted, #ccc)"
                  opacity={0.4}
                />
                <circle
                  cx={cx}
                  cy={boardMid + offset}
                  r={3}
                  fill="var(--fg-muted, #ccc)"
                  opacity={0.4}
                />
              </g>
            );
          }

          if (MARKER_FRETS.has(fret)) {
            return (
              <circle
                key={`marker-${fret}`}
                cx={cx}
                cy={boardMid}
                r={3}
                fill="var(--fg-muted, #ccc)"
                opacity={0.4}
              />
            );
          }

          return null;
        })}

        {/* Scale / chord notes */}
        {positions.map((pos) =>
          pos.frets
            .filter((fret) => fret >= minFret && fret <= maxFret)
            .map((fret) => {
              const isRoot = pos.roots.includes(fret);
              const noteName = pos.noteNames[fret];
              const label = showIntervals
                ? getIntervalName(root, noteName)
                : noteName;

              return (
                <g key={`note-${pos.string}-${fret}`}>
                  <circle
                    cx={noteX(fret)}
                    cy={stringY(pos.string)}
                    r={noteRadius}
                    fill={
                      isRoot
                        ? 'var(--accent, #e85d04)'
                        : 'var(--fg, #333)'
                    }
                    opacity={isRoot ? 1 : 0.8}
                  />
                  <text
                    x={noteX(fret)}
                    y={stringY(pos.string)}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={noteFontSize}
                    fontWeight={isRoot ? 700 : 400}
                    fill="var(--bg, #fff)"
                  >
                    {label}
                  </text>
                </g>
              );
            })
        )}
      </svg>
    </div>
  );
}
