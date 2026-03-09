/**
 * Ultimate Guitar parser & converters.
 *
 * - convertUGToNashville: strips lyrics, produces Nashville bar notation
 * - cleanUGToLyrics: cleans messy UG paste into proper chord-over-lyrics
 */

// ── Chord detection ─────────────────────────────────────────────────────────

const CHORD_RE =
  /^[A-G][#b]?(m|min|maj|dim|aug|sus[24]?|add|M|msus|madd)?\d{0,2}(b5|#5|#9|b9|#11|b13)?(\/[A-G][#b]?)?$/;

function isChord(token) {
  const clean = token.replace(/[()[\]]/g, '');
  if (clean === '' || clean === 'x2' || clean === 'x3' || clean === 'x4') return false;
  if (/^N\.?C\.?$/i.test(clean)) return false;
  return CHORD_RE.test(clean);
}

function isChordLine(line) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.length < 1) return false;

  const tokens = trimmed.split(/\s+/);
  if (tokens.length === 0) return false;

  const chordCount = tokens.filter(isChord).length;
  // At least 60% of tokens are chords and there's at least 1 chord
  return chordCount >= 1 && chordCount / tokens.length >= 0.6;
}

// ── Section header detection ────────────────────────────────────────────────

const BRACKET_HEADER_RE = /^\[([^\]]+)\]\s*$/;
const COLON_HEADER_RE =
  /^(Intro|Verse|Chorus|Bridge|Solo|Outro|Pre-Chorus|Prechorus|Interlude|Breakdown|Riff|Hook|Instrumental|Tab|Refrain)\s*\d*\s*:?\s*$/i;

function parseSectionName(line) {
  const trimmed = line.trim();
  const bracketMatch = trimmed.match(BRACKET_HEADER_RE);
  if (bracketMatch) return bracketMatch[1].trim();
  const colonMatch = trimmed.match(COLON_HEADER_RE);
  if (colonMatch) return colonMatch[0].replace(/:?\s*$/, '').trim();
  return null;
}

// ── Key detection ───────────────────────────────────────────────────────────

function guessKey(chords) {
  if (chords.length === 0) return 'C';
  // Use first chord, strip quality
  const first = chords[0];
  const rootMatch = first.match(/^([A-G][#b]?)/);
  return rootMatch ? rootMatch[1] : 'C';
}

// ── Format detection ────────────────────────────────────────────────────────

export function looksLikeUG(text) {
  if (!text || text.trim().length < 10) return false;
  // Already Nashville?
  if (/(@title|@key|\|\|:|\|\s+[A-G])/.test(text)) return false;

  const lines = text.split('\n').map((l) => l.trim()).filter(Boolean);

  // Has UG-style section headers?
  const hasHeaders = lines.some((l) => parseSectionName(l) !== null);
  // Has chord lines?
  const chordLineCount = lines.filter(isChordLine).length;

  return hasHeaders && chordLineCount >= 1 || chordLineCount >= 3;
}

// ── Main converter ──────────────────────────────────────────────────────────

export function convertUGToNashville(text, songTitle, songArtist) {
  const lines = text.split('\n');

  // Collect sections: { name, chords[] }
  const sections = [];
  let current = null;

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const trimmed = raw.trim();

    // Section header?
    const sectionName = parseSectionName(trimmed);
    if (sectionName) {
      current = { name: sectionName, chords: [] };
      sections.push(current);
      continue;
    }

    // Chord line?
    if (isChordLine(trimmed)) {
      if (!current) {
        current = { name: 'Intro', chords: [] };
        sections.push(current);
      }
      const chords = trimmed.split(/\s+/).filter(isChord);
      current.chords.push(...chords);
    }
    // Skip lyrics and blank lines
  }

  if (sections.length === 0) return null;

  // ── Assign Nashville letters ────────────────────────────────────────────

  // Normalize names: "Verse 1" → "Verse", "Pre-Chorus" stays
  function normalizeName(name) {
    return name.replace(/\s*\d+$/, '').trim();
  }

  const nameToLetter = {};
  const nameToChords = {}; // first occurrence chords (for dedup)
  let letterCode = 65; // 'A'

  const structure = [];
  const uniqueSections = []; // only first occurrence with chords

  for (const section of sections) {
    const norm = normalizeName(section.name);

    // Check if we already defined this section
    if (nameToLetter[norm]) {
      // Same section again — check if chords match
      const existingChords = nameToChords[norm].join(',');
      const newChords = section.chords.join(',');

      if (newChords && newChords !== existingChords) {
        // Different chords — make a new section
        const letter = String.fromCharCode(letterCode++);
        const variantName = section.name;
        nameToLetter[variantName] = letter;
        nameToChords[variantName] = section.chords;
        uniqueSections.push({ letter, name: variantName, chords: section.chords });
        structure.push(letter);
      } else {
        // Same chords (or empty) — just reference the existing letter
        structure.push(nameToLetter[norm]);
      }
    } else {
      const letter = String.fromCharCode(letterCode++);
      nameToLetter[norm] = letter;
      nameToChords[norm] = section.chords;
      uniqueSections.push({ letter, name: section.name, chords: section.chords });
      structure.push(letter);
    }
  }

  // ── Build Nashville output ──────────────────────────────────────────────

  const allChords = sections.flatMap((s) => s.chords);
  const key = guessKey(allChords);

  const out = [];

  if (songTitle) {
    out.push('@title ' + songTitle);
  } else {
    out.push('@title Untitled');
  }
  out.push('@key ' + key);
  out.push('@tempo 120');
  out.push('@feel (update feel)');

  for (const sec of uniqueSections) {
    out.push('');
    out.push('[' + sec.letter + '] ' + sec.name);

    if (sec.chords.length === 0) {
      out.push('| (add chords) |');
      continue;
    }

    // Group into 4-bar lines
    for (let i = 0; i < sec.chords.length; i += 4) {
      const barGroup = sec.chords.slice(i, Math.min(i + 4, sec.chords.length));
      // Pad short final group to 4 by repeating last chord
      while (barGroup.length < 4 && sec.chords.length >= 4) {
        barGroup.push(barGroup[barGroup.length - 1]);
      }
      out.push('| ' + barGroup.join(' | ') + ' |');
    }
  }

  out.push('');
  out.push('@structure ' + structure.join(' '));

  return out.join('\n');
}

// ── UG junk line detection ─────────────────────────────────────────────────

const UG_JUNK_RE =
  /^(XXO|Adjust|Transpose|Simplify|Tuning:|Pin Chords|Rate this tab|♡|Capo|Key:|Strumming|There is no strumming|x[0-9]+$|[0-9]+fr$)/i;

const UG_JUNK_EXACT = new Set([
  'xxo', 'adjust', 'transpose', 'simplify', 'pin chords',
  'rate this tab', '♡', 'ooo', 'xoo', 'oxo', 'oox', 'x',
]);

function isJunkLine(line) {
  const trimmed = line.trim();
  if (!trimmed) return false;
  if (UG_JUNK_EXACT.has(trimmed.toLowerCase())) return true;
  if (UG_JUNK_RE.test(trimmed)) return true;
  // Pure fret/string diagrams like "x32010" or "320003"
  if (/^[x0-9]{4,6}$/i.test(trimmed)) return true;
  return false;
}

// ── Clean UG paste → proper chord-over-lyrics ──────────────────────────────

/**
 * Takes messy text copied from Ultimate Guitar and produces clean
 * chord-over-lyrics text that LyricsRenderer can display.
 *
 * Handles:
 * - Stripping UG UI junk (Pin Chords, Rate this tab, chord diagrams, etc.)
 * - Merging consecutive chord-only lines that UG splits across rows
 * - Pairing chord lines with their lyric lines
 * - Extracting key/capo metadata
 * - Deduplicating repeated sections
 */
export function cleanUGToLyrics(text, songTitle, songArtist) {
  const rawLines = text.split('\n');

  // Extract metadata from junk lines before stripping
  let detectedKey = '';
  let detectedCapo = '';
  for (const line of rawLines) {
    const trimmed = line.trim();
    const keyMatch = trimmed.match(/Key:\s*([A-G][#b]?m?\d*)/i);
    if (keyMatch) detectedKey = keyMatch[1];
    const capoMatch = trimmed.match(/Capo\s*:?\s*(\d+)/i);
    if (capoMatch) detectedCapo = capoMatch[1];
  }

  // Strip junk lines
  const cleaned = rawLines.filter((line) => !isJunkLine(line));

  // Now process into sections with properly paired chord/lyric lines
  const sections = [];
  let current = null;

  // Buffer for merging consecutive chord-only lines
  let chordBuffer = [];

  function flushChordBuffer() {
    if (chordBuffer.length === 0) return;
    // Merge consecutive chord lines into one spaced line
    const merged = chordBuffer.join('  ');
    if (current) {
      current.lines.push({ type: 'chords', text: merged });
    }
    chordBuffer = [];
  }

  for (let i = 0; i < cleaned.length; i++) {
    const raw = cleaned[i];
    const trimmed = raw.trim();

    // Section header?
    const sectionName = parseSectionName(trimmed);
    if (sectionName) {
      flushChordBuffer();
      current = { name: sectionName, lines: [] };
      sections.push(current);
      continue;
    }

    // Blank line
    if (!trimmed) {
      flushChordBuffer();
      continue;
    }

    // Create default section if none
    if (!current) {
      current = { name: 'Intro', lines: [] };
      sections.push(current);
    }

    if (isChordLine(raw)) {
      // Check if next non-blank, non-header, non-chord line is a lyric
      let nextIdx = i + 1;
      while (nextIdx < cleaned.length && !cleaned[nextIdx].trim()) nextIdx++;

      const nextLine = nextIdx < cleaned.length ? cleaned[nextIdx] : '';
      const nextTrimmed = nextLine.trim();

      if (
        nextTrimmed &&
        !isChordLine(nextLine) &&
        !parseSectionName(nextTrimmed) &&
        !isJunkLine(nextLine) &&
        nextTrimmed.length > 1
      ) {
        // This chord line has a lyric partner — flush any buffered chords first
        flushChordBuffer();
        current.lines.push({
          type: 'chord-lyric',
          chordLine: trimmed,
          lyricLine: nextTrimmed,
        });
        i = nextIdx; // skip the lyric line
      } else {
        // Chord-only — buffer for potential merging
        chordBuffer.push(trimmed);
      }
    } else {
      // Lyric line with no chord above
      flushChordBuffer();
      // Skip very short junk fragments (single chars that slipped through)
      if (trimmed.length <= 1 && !/[a-zA-Z]/.test(trimmed)) continue;
      current.lines.push({ type: 'lyric', text: trimmed });
    }
  }
  flushChordBuffer();

  // ── Build output ────────────────────────────────────────────────────────

  if (sections.length === 0) return null;

  // Guess key from first chord if not detected from metadata
  if (!detectedKey) {
    for (const sec of sections) {
      for (const line of sec.lines) {
        const chordText = line.type === 'chord-lyric' ? line.chordLine : line.type === 'chords' ? line.text : '';
        if (chordText) {
          const tokens = chordText.split(/\s+/).filter(isChord);
          if (tokens.length > 0) {
            detectedKey = guessKey(tokens);
            break;
          }
        }
      }
      if (detectedKey) break;
    }
  }

  const out = [];

  // Metadata
  if (songTitle) out.push(`@title ${songTitle}`);
  if (detectedKey) out.push(`@key ${detectedKey}`);
  if (detectedCapo) out.push(`@capo ${detectedCapo}`);
  if (out.length > 0) out.push('');

  for (const section of sections) {
    // Skip sections that are entirely empty
    if (section.lines.length === 0) continue;

    out.push(`[${section.name}]`);

    for (const line of section.lines) {
      if (line.type === 'chord-lyric') {
        out.push(line.chordLine);
        out.push(line.lyricLine);
      } else if (line.type === 'chords') {
        out.push(line.text);
      } else if (line.type === 'lyric') {
        out.push(line.text);
      }
    }

    out.push('');
  }

  return out.join('\n').replace(/\n{3,}/g, '\n\n').trim();
}
