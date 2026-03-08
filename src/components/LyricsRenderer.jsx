import styles from './LyricsRenderer.module.css';

/**
 * Detects whether text is in chord-over-lyrics format
 * (as opposed to Nashville chart format).
 */
const CHORD_RE =
  /^[A-G][#b]?(m|min|maj|dim|aug|sus[24]?|add|M|msus|madd)?\d{0,2}(b5|#5|#9|b9|#11|b13)?(\/[A-G][#b]?)?$/;

function isChord(token) {
  const clean = token.replace(/[()[\]]/g, '');
  if (!clean || /^x\d$/.test(clean)) return false;
  if (/^N\.?C\.?$/i.test(clean)) return true; // No Chord is valid
  return CHORD_RE.test(clean);
}

function isChordLine(line) {
  const trimmed = line.trim();
  if (!trimmed) return false;
  const tokens = trimmed.split(/\s+/);
  if (tokens.length === 0) return false;
  const chordCount = tokens.filter(isChord).length;
  return chordCount >= 1 && chordCount / tokens.length >= 0.6;
}

const SECTION_RE = /^\[([^\]]+)\]\s*$/;
const SECTION_COLON_RE =
  /^(Intro|Verse|Chorus|Bridge|Solo|Outro|Pre-Chorus|Prechorus|Interlude|Breakdown|Riff|Hook|Instrumental|Tab|Refrain)\s*\d*\s*:?\s*$/i;

function isSectionHeader(line) {
  const trimmed = line.trim();
  return SECTION_RE.test(trimmed) || SECTION_COLON_RE.test(trimmed);
}

function parseSectionName(line) {
  const trimmed = line.trim();
  const bracketMatch = trimmed.match(SECTION_RE);
  if (bracketMatch) return bracketMatch[1].trim();
  return trimmed.replace(/:?\s*$/, '').trim();
}

export function looksLikeLyrics(text) {
  if (!text || text.trim().length < 10) return false;
  // If it has Nashville bar notation, it's a chart
  if (/\|\s*[A-G]/.test(text) || /\|\|:/.test(text)) return false;

  const lines = text.split('\n').filter((l) => l.trim());
  const chordLines = lines.filter(isChordLine).length;
  const nonEmpty = lines.filter((l) => !isSectionHeader(l)).length;

  // Has chord lines but also non-chord lines (lyrics)
  return chordLines >= 1 && nonEmpty > chordLines;
}

/**
 * Parse chord-over-lyrics text into structured sections.
 */
function parseLyrics(text) {
  const lines = text.split('\n');
  const sections = [];
  let current = null;

  // Extract metadata
  let title = '';
  let key = '';
  let capo = '';

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const trimmed = raw.trim();

    // Metadata lines
    const metaMatch = trimmed.match(/^@(\w+)\s+(.+)$/);
    if (metaMatch) {
      const k = metaMatch[1].toLowerCase();
      if (k === 'title') title = metaMatch[2].trim();
      if (k === 'key') key = metaMatch[2].trim();
      if (k === 'capo') capo = metaMatch[2].trim();
      continue;
    }

    // Section header
    if (isSectionHeader(trimmed)) {
      current = { name: parseSectionName(trimmed), lines: [] };
      sections.push(current);
      continue;
    }

    // Blank line
    if (!trimmed) {
      if (current && current.lines.length > 0) {
        current.lines.push({ type: 'blank' });
      }
      continue;
    }

    // Create default section if none yet
    if (!current) {
      current = { name: '', lines: [] };
      sections.push(current);
    }

    // Check if this is a chord line followed by a lyrics line
    if (isChordLine(raw)) {
      // Peek at next line — is it lyrics?
      const nextLine = i + 1 < lines.length ? lines[i + 1] : '';
      const nextTrimmed = nextLine.trim();

      if (nextTrimmed && !isChordLine(nextLine) && !isSectionHeader(nextTrimmed) && !nextTrimmed.startsWith('@')) {
        // Chord line + lyrics line pair
        current.lines.push({
          type: 'chord-lyric',
          chordLine: raw,
          lyricLine: nextLine,
        });
        i++; // skip the lyrics line
      } else {
        // Chord-only line (no lyrics below)
        current.lines.push({
          type: 'chord-only',
          chordLine: raw,
        });
      }
    } else {
      // Pure lyrics line (no chords above)
      current.lines.push({
        type: 'lyric-only',
        lyricLine: trimmed,
      });
    }
  }

  return { title, key, capo, sections };
}

/**
 * Render a chord line with chords positioned above lyrics.
 * Preserves the spacing/positions of chords from the original text.
 */
function ChordLyricPair({ chordLine, lyricLine }) {
  return (
    <div className={styles.pair}>
      <div className={styles.chordLine}>
        {chordLine.replace(/\t/g, '    ')}
      </div>
      {lyricLine !== undefined && (
        <div className={styles.lyricLine}>
          {lyricLine.replace(/\t/g, '    ')}
        </div>
      )}
    </div>
  );
}

export default function LyricsRenderer({ text }) {
  const { title, key, capo, sections } = parseLyrics(text);

  return (
    <div className={styles.lyrics}>
      {/* Header */}
      {(title || key || capo) && (
        <div className={styles.header}>
          {title && <h2 className={styles.title}>{title}</h2>}
          <div className={styles.metaRow}>
            {key && <span className={styles.metaBadge}>Key: {key}</span>}
            {capo && <span className={styles.metaBadge}>Capo: {capo}</span>}
          </div>
        </div>
      )}

      {/* Sections */}
      {sections.map((section, si) => (
        <div key={si} className={styles.section}>
          {section.name && (
            <div className={styles.sectionHeader}>
              {section.name}
            </div>
          )}
          <div className={styles.sectionBody}>
            {section.lines.map((line, li) => {
              if (line.type === 'blank') {
                return <div key={li} className={styles.blank} />;
              }
              if (line.type === 'chord-lyric') {
                return (
                  <ChordLyricPair
                    key={li}
                    chordLine={line.chordLine}
                    lyricLine={line.lyricLine}
                  />
                );
              }
              if (line.type === 'chord-only') {
                return (
                  <ChordLyricPair
                    key={li}
                    chordLine={line.chordLine}
                  />
                );
              }
              // lyric-only
              return (
                <div key={li} className={styles.lyricLine}>
                  {line.lyricLine}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
