# Guitar Practice App — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Personal guitar practice app with pre-loaded theory content, SVG fretboard diagrams, video embeds, and practice session tracking.

**Architecture:** Static Vite + React app. Music theory engine generates fretboard positions from interval formulas (DRY — no hardcoded positions per key). Content defined as compact JSON. LocalStorage for practice log. PWA for offline + installable.

**Tech Stack:** Vite, React 18, React Router 6, CSS Modules, vite-plugin-pwa

**Design doc:** `docs/plans/2026-02-28-guitar-practice-app-design.md`

---

## Task 1: Project Scaffold

**Files:**
- Create: `package.json`, `vite.config.js`, `index.html`, `src/main.jsx`, `src/App.jsx`, `src/App.module.css`

**Step 1: Initialize Vite + React project**

```bash
cd /Users/denisgingras/guitar-practice
npm create vite@latest . -- --template react
npm install
npm install react-router-dom
```

**Step 2: Clean boilerplate**

Remove default Vite CSS and counter app. Replace `src/App.jsx` with:

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <h1>Guitar Practice</h1>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
```

**Step 3: Verify dev server runs**

```bash
npm run dev
```

Expected: App loads at localhost:5173 with "Guitar Practice" heading.

**Step 4: Commit**

```bash
git init
echo "node_modules\ndist\n.DS_Store" > .gitignore
git add -A
git commit -m "feat: scaffold vite + react project"
```

---

## Task 2: Music Theory Engine

The core logic. Converts scale/chord formulas into fretboard positions. This is the brain — everything else renders what this produces.

**Files:**
- Create: `src/theory/notes.js`
- Create: `src/theory/fretboard.js`
- Create: `src/theory/scales.js`
- Create: `src/theory/chords.js`
- Test: `src/theory/__tests__/notes.test.js`
- Test: `src/theory/__tests__/fretboard.test.js`

**Step 1: Install vitest**

```bash
npm install -D vitest
```

Add to `package.json` scripts: `"test": "vitest --run"`

**Step 2: Write failing tests for note math**

```js
// src/theory/__tests__/notes.test.js
import { describe, it, expect } from 'vitest';
import { noteIndex, noteName, transposeNote, getScaleNotes } from '../notes.js';

describe('noteIndex', () => {
  it('returns 0 for C', () => expect(noteIndex('C')).toBe(0));
  it('returns 9 for A', () => expect(noteIndex('A')).toBe(9));
  it('handles flats', () => expect(noteIndex('Bb')).toBe(10));
  it('handles sharps', () => expect(noteIndex('F#')).toBe(6));
});

describe('noteName', () => {
  it('returns C for 0', () => expect(noteName(0)).toBe('C'));
  it('returns A for 9', () => expect(noteName(9)).toBe('A'));
  it('wraps around', () => expect(noteName(12)).toBe('C'));
});

describe('transposeNote', () => {
  it('C up 7 semitones = G', () => expect(transposeNote('C', 7)).toBe('G'));
  it('A up 3 semitones = C', () => expect(transposeNote('A', 3)).toBe('C'));
});

describe('getScaleNotes', () => {
  it('C major = C D E F G A B', () => {
    expect(getScaleNotes('C', [0,2,4,5,7,9,11])).toEqual(['C','D','E','F','G','A','B']);
  });
  it('A minor pentatonic = A C D E G', () => {
    expect(getScaleNotes('A', [0,3,5,7,10])).toEqual(['A','C','D','E','G']);
  });
});
```

**Step 3: Run tests — verify they fail**

```bash
npx vitest --run src/theory/__tests__/notes.test.js
```

Expected: FAIL — module not found.

**Step 4: Implement notes.js**

```js
// src/theory/notes.js
const NOTES_SHARP = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
const FLAT_MAP = { 'Db':'C#','Eb':'D#','Fb':'E','Gb':'F#','Ab':'G#','Bb':'A#','Cb':'B' };

export function noteIndex(note) {
  const normalized = FLAT_MAP[note] || note;
  return NOTES_SHARP.indexOf(normalized);
}

export function noteName(index) {
  return NOTES_SHARP[((index % 12) + 12) % 12];
}

export function transposeNote(note, semitones) {
  return noteName(noteIndex(note) + semitones);
}

export function getScaleNotes(root, intervals) {
  const rootIdx = noteIndex(root);
  return intervals.map(i => noteName(rootIdx + i));
}
```

**Step 5: Run tests — verify they pass**

```bash
npx vitest --run src/theory/__tests__/notes.test.js
```

Expected: All PASS.

**Step 6: Write failing tests for fretboard position generator**

```js
// src/theory/__tests__/fretboard.test.js
import { describe, it, expect } from 'vitest';
import { getNoteAtFret, getScalePositions, STANDARD_TUNING } from '../fretboard.js';

describe('getNoteAtFret', () => {
  it('open low E string = E', () => expect(getNoteAtFret('E', 0)).toBe('E'));
  it('5th fret A string = D', () => expect(getNoteAtFret('A', 5)).toBe('D'));
  it('12th fret = same as open', () => expect(getNoteAtFret('E', 12)).toBe('E'));
});

describe('getScalePositions', () => {
  it('returns fret positions for A minor pentatonic in position 1 (frets 5-8)', () => {
    const positions = getScalePositions('A', [0,3,5,7,10], 5, 8);
    // Should have entries for all 6 strings
    expect(positions).toHaveLength(6);
    // Low E string: frets 5 (A) and 8 (C) are in A minor pentatonic
    expect(positions[0].frets).toContain(5);
    expect(positions[0].frets).toContain(8);
  });

  it('marks root notes', () => {
    const positions = getScalePositions('A', [0,3,5,7,10], 5, 8);
    // Low E string fret 5 = A = root
    const lowE = positions[0];
    expect(lowE.roots).toContain(5);
  });
});
```

**Step 7: Run tests — verify they fail**

```bash
npx vitest --run src/theory/__tests__/fretboard.test.js
```

**Step 8: Implement fretboard.js**

```js
// src/theory/fretboard.js
import { noteIndex, noteName, getScaleNotes } from './notes.js';

export const STANDARD_TUNING = ['E','A','D','G','B','E'];

export function getNoteAtFret(openNote, fret) {
  return noteName(noteIndex(openNote) + fret);
}

export function getScalePositions(root, intervals, minFret, maxFret) {
  const scaleNotes = new Set(getScaleNotes(root, intervals));
  const rootNote = root;

  return STANDARD_TUNING.map((openNote, stringIndex) => {
    const frets = [];
    const roots = [];
    const noteNames = {};

    for (let fret = minFret; fret <= maxFret; fret++) {
      const note = getNoteAtFret(openNote, fret);
      if (scaleNotes.has(note)) {
        frets.push(fret);
        noteNames[fret] = note;
        if (note === rootNote) {
          roots.push(fret);
        }
      }
    }

    return { string: stringIndex, openNote, frets, roots, noteNames };
  });
}

export function getIntervalName(root, note) {
  const semitones = ((noteIndex(note) - noteIndex(root)) % 12 + 12) % 12;
  const names = {0:'R',1:'b2',2:'2',3:'b3',4:'3',5:'4',6:'b5',7:'5',8:'b6',9:'6',10:'b7',11:'7'};
  return names[semitones];
}
```

**Step 9: Run all tests**

```bash
npx vitest --run
```

Expected: All PASS.

**Step 10: Commit**

```bash
git add -A
git commit -m "feat: music theory engine — note math + fretboard position generator"
```

---

## Task 3: Scale & Mode Data

Compact definitions using interval formulas. The theory engine generates everything else.

**Files:**
- Create: `src/data/scales.js`
- Create: `src/data/modes.js`
- Create: `src/data/chords.js`
- Create: `src/data/techniques.js`

**Step 1: Create scale definitions**

```js
// src/data/scales.js
export const SCALES = [
  {
    id: 'major',
    name: 'Major (Ionian)',
    intervals: [0,2,4,5,7,9,11],
    description: 'The foundation of Western music. Bright, happy sound.',
    tags: ['essential', 'beginner'],
    positions: [
      { name: 'Position 1 (Open)', minFret: 0, maxFret: 4 },
      { name: 'Position 1', minFret: 2, maxFret: 6 },
      { name: 'Position 2', minFret: 4, maxFret: 8 },
      { name: 'Position 3', minFret: 7, maxFret: 10 },
      { name: 'Position 4', minFret: 9, maxFret: 12 },
      { name: 'Position 5', minFret: 11, maxFret: 15 },
    ],
    videos: [],
  },
  {
    id: 'natural-minor',
    name: 'Natural Minor (Aeolian)',
    intervals: [0,2,3,5,7,8,10],
    description: 'Sad, dark counterpart to major. The relative minor.',
    tags: ['essential', 'beginner'],
    positions: [
      { name: 'Position 1', minFret: 0, maxFret: 3 },
      { name: 'Position 2', minFret: 3, maxFret: 6 },
      { name: 'Position 3', minFret: 5, maxFret: 8 },
      { name: 'Position 4', minFret: 7, maxFret: 11 },
      { name: 'Position 5', minFret: 10, maxFret: 13 },
    ],
    videos: [],
  },
  {
    id: 'pentatonic-major',
    name: 'Major Pentatonic',
    intervals: [0,2,4,7,9],
    description: 'Five-note major scale. Country, pop, rock. Safe over major chords.',
    tags: ['essential', 'beginner'],
    positions: [
      { name: 'Position 1', minFret: 0, maxFret: 4 },
      { name: 'Position 2', minFret: 2, maxFret: 6 },
      { name: 'Position 3', minFret: 4, maxFret: 8 },
      { name: 'Position 4', minFret: 7, maxFret: 10 },
      { name: 'Position 5', minFret: 9, maxFret: 12 },
    ],
    videos: [],
  },
  {
    id: 'pentatonic-minor',
    name: 'Minor Pentatonic',
    intervals: [0,3,5,7,10],
    description: 'The backbone of blues and rock soloing. Learn this first.',
    tags: ['essential', 'beginner', 'blues', 'rock'],
    positions: [
      { name: 'Position 1', minFret: 5, maxFret: 8 },
      { name: 'Position 2', minFret: 7, maxFret: 11 },
      { name: 'Position 3', minFret: 10, maxFret: 13 },
      { name: 'Position 4', minFret: 12, maxFret: 15 },
      { name: 'Position 5', minFret: 2, maxFret: 5 },
    ],
    videos: [],
  },
  {
    id: 'blues',
    name: 'Blues Scale',
    intervals: [0,3,5,6,7,10],
    description: 'Minor pentatonic + the blue note (b5). Gritty, expressive.',
    tags: ['essential', 'blues', 'rock'],
    positions: [
      { name: 'Position 1', minFret: 5, maxFret: 8 },
      { name: 'Position 2', minFret: 7, maxFret: 11 },
      { name: 'Position 3', minFret: 10, maxFret: 13 },
      { name: 'Position 4', minFret: 12, maxFret: 15 },
      { name: 'Position 5', minFret: 2, maxFret: 5 },
    ],
    videos: [],
  },
  {
    id: 'harmonic-minor',
    name: 'Harmonic Minor',
    intervals: [0,2,3,5,7,8,11],
    description: 'Natural minor with raised 7th. Classical, metal, Middle Eastern flavor.',
    tags: ['intermediate', 'classical', 'metal'],
    positions: [
      { name: 'Position 1', minFret: 0, maxFret: 4 },
      { name: 'Position 2', minFret: 3, maxFret: 7 },
      { name: 'Position 3', minFret: 5, maxFret: 9 },
      { name: 'Position 4', minFret: 7, maxFret: 11 },
      { name: 'Position 5', minFret: 10, maxFret: 14 },
    ],
    videos: [],
  },
  {
    id: 'melodic-minor',
    name: 'Melodic Minor',
    intervals: [0,2,3,5,7,9,11],
    description: 'Minor with raised 6th and 7th. Jazz staple. Smooth.',
    tags: ['intermediate', 'jazz'],
    positions: [
      { name: 'Position 1', minFret: 0, maxFret: 4 },
      { name: 'Position 2', minFret: 3, maxFret: 7 },
      { name: 'Position 3', minFret: 5, maxFret: 9 },
      { name: 'Position 4', minFret: 7, maxFret: 11 },
      { name: 'Position 5', minFret: 10, maxFret: 14 },
    ],
    videos: [],
  },
  {
    id: 'chromatic',
    name: 'Chromatic',
    intervals: [0,1,2,3,4,5,6,7,8,9,10,11],
    description: 'All 12 notes. Great for warm-up and finger independence exercises.',
    tags: ['warmup', 'technique'],
    positions: [
      { name: 'Full range', minFret: 0, maxFret: 12 },
    ],
    videos: [],
  },
];

export const ALL_ROOTS = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
```

**Step 2: Create mode definitions**

```js
// src/data/modes.js
export const MODES = [
  {
    id: 'ionian',
    name: 'Ionian',
    degree: 1,
    intervals: [0,2,4,5,7,9,11],
    parentScale: 'Major',
    characteristicNote: 'Natural 4th (avoid note over maj7)',
    mood: 'Bright, happy, resolved',
    description: 'The major scale itself. Home base.',
    chordFit: 'Major, Maj7',
    tags: ['essential', 'beginner'],
    positions: [
      { name: 'Position 1', minFret: 0, maxFret: 4 },
      { name: 'Position 2', minFret: 4, maxFret: 8 },
      { name: 'Position 3', minFret: 7, maxFret: 10 },
      { name: 'Position 4', minFret: 9, maxFret: 12 },
      { name: 'Position 5', minFret: 11, maxFret: 15 },
    ],
    videos: [],
  },
  {
    id: 'dorian',
    name: 'Dorian',
    degree: 2,
    intervals: [0,2,3,5,7,9,10],
    parentScale: 'Major (from 2nd degree)',
    characteristicNote: 'Natural 6th — brighter than natural minor',
    mood: 'Jazzy minor, smooth, sophisticated',
    description: 'Minor scale with a major 6th. Santana, jazz, funk.',
    chordFit: 'Minor, Min7',
    tags: ['essential', 'intermediate', 'jazz', 'funk'],
    positions: [
      { name: 'Position 1', minFret: 0, maxFret: 3 },
      { name: 'Position 2', minFret: 3, maxFret: 6 },
      { name: 'Position 3', minFret: 5, maxFret: 9 },
      { name: 'Position 4', minFret: 7, maxFret: 11 },
      { name: 'Position 5', minFret: 10, maxFret: 13 },
    ],
    videos: [],
  },
  {
    id: 'phrygian',
    name: 'Phrygian',
    degree: 3,
    intervals: [0,1,3,5,7,8,10],
    parentScale: 'Major (from 3rd degree)',
    characteristicNote: 'b2 — Spanish/flamenco half-step from root',
    mood: 'Dark, Spanish, exotic, tense',
    description: 'Flamenco, metal. That b2 is unmistakable.',
    chordFit: 'Minor, Min7',
    tags: ['intermediate', 'metal', 'flamenco'],
    positions: [
      { name: 'Position 1', minFret: 0, maxFret: 3 },
      { name: 'Position 2', minFret: 3, maxFret: 6 },
      { name: 'Position 3', minFret: 5, maxFret: 8 },
      { name: 'Position 4', minFret: 8, maxFret: 11 },
      { name: 'Position 5', minFret: 10, maxFret: 13 },
    ],
    videos: [],
  },
  {
    id: 'lydian',
    name: 'Lydian',
    degree: 4,
    intervals: [0,2,4,6,7,9,11],
    parentScale: 'Major (from 4th degree)',
    characteristicNote: '#4 — dreamy, floating quality',
    mood: 'Dreamy, ethereal, uplifting, magical',
    description: 'Major scale with raised 4th. Steve Vai, Joe Satriani, film scores.',
    chordFit: 'Major, Maj7#11',
    tags: ['intermediate', 'progressive'],
    positions: [
      { name: 'Position 1', minFret: 0, maxFret: 4 },
      { name: 'Position 2', minFret: 4, maxFret: 8 },
      { name: 'Position 3', minFret: 6, maxFret: 10 },
      { name: 'Position 4', minFret: 9, maxFret: 12 },
      { name: 'Position 5', minFret: 11, maxFret: 15 },
    ],
    videos: [],
  },
  {
    id: 'mixolydian',
    name: 'Mixolydian',
    degree: 5,
    intervals: [0,2,4,5,7,9,10],
    parentScale: 'Major (from 5th degree)',
    characteristicNote: 'b7 — bluesy dominant feel',
    mood: 'Bluesy, rock, laid-back, dominant',
    description: 'The rock/blues mode. Grateful Dead, Allman Brothers, classic rock jams.',
    chordFit: 'Dominant 7, 9, 13',
    tags: ['essential', 'blues', 'rock'],
    positions: [
      { name: 'Position 1', minFret: 0, maxFret: 4 },
      { name: 'Position 2', minFret: 4, maxFret: 7 },
      { name: 'Position 3', minFret: 7, maxFret: 10 },
      { name: 'Position 4', minFret: 9, maxFret: 12 },
      { name: 'Position 5', minFret: 11, maxFret: 15 },
    ],
    videos: [],
  },
  {
    id: 'aeolian',
    name: 'Aeolian',
    degree: 6,
    intervals: [0,2,3,5,7,8,10],
    parentScale: 'Major (from 6th degree)',
    characteristicNote: 'b6 — darker than Dorian',
    mood: 'Sad, minor, dark, emotional',
    description: 'Natural minor scale. The default "sad" sound.',
    chordFit: 'Minor, Min7',
    tags: ['essential', 'beginner'],
    positions: [
      { name: 'Position 1', minFret: 0, maxFret: 3 },
      { name: 'Position 2', minFret: 3, maxFret: 6 },
      { name: 'Position 3', minFret: 5, maxFret: 8 },
      { name: 'Position 4', minFret: 7, maxFret: 11 },
      { name: 'Position 5', minFret: 10, maxFret: 13 },
    ],
    videos: [],
  },
  {
    id: 'locrian',
    name: 'Locrian',
    degree: 7,
    intervals: [0,1,3,5,6,8,10],
    parentScale: 'Major (from 7th degree)',
    characteristicNote: 'b5 — unstable, diminished root',
    mood: 'Extremely dark, unstable, tense, dissonant',
    description: 'The "forbidden" mode. Rarely used melodically. Metal and experimental.',
    chordFit: 'Diminished, Min7b5',
    tags: ['advanced', 'metal'],
    positions: [
      { name: 'Position 1', minFret: 0, maxFret: 3 },
      { name: 'Position 2', minFret: 3, maxFret: 6 },
      { name: 'Position 3', minFret: 5, maxFret: 8 },
      { name: 'Position 4', minFret: 8, maxFret: 11 },
      { name: 'Position 5', minFret: 10, maxFret: 13 },
    ],
    videos: [],
  },
];
```

**Step 3: Create chord definitions**

```js
// src/data/chords.js
// Chord voicings: array of 6 values (low E to high E)
// null = muted string, 0 = open, number = fret
export const CHORD_TYPES = [
  {
    id: 'major',
    name: 'Major',
    formula: [0, 4, 7],
    symbol: '',
    description: 'Happy, bright, resolved.',
  },
  {
    id: 'minor',
    name: 'Minor',
    formula: [0, 3, 7],
    symbol: 'm',
    description: 'Sad, dark, emotional.',
  },
  {
    id: 'dominant-7',
    name: 'Dominant 7th',
    formula: [0, 4, 7, 10],
    symbol: '7',
    description: 'Bluesy, wants to resolve. The V chord.',
  },
  {
    id: 'major-7',
    name: 'Major 7th',
    formula: [0, 4, 7, 11],
    symbol: 'maj7',
    description: 'Jazzy, dreamy, smooth.',
  },
  {
    id: 'minor-7',
    name: 'Minor 7th',
    formula: [0, 3, 7, 10],
    symbol: 'm7',
    description: 'Smooth minor. Jazz, R&B, neo-soul.',
  },
  {
    id: 'sus2',
    name: 'Suspended 2nd',
    formula: [0, 2, 7],
    symbol: 'sus2',
    description: 'Open, ambiguous. Neither major nor minor.',
  },
  {
    id: 'sus4',
    name: 'Suspended 4th',
    formula: [0, 5, 7],
    symbol: 'sus4',
    description: 'Tense, wants to resolve to major.',
  },
  {
    id: 'diminished',
    name: 'Diminished',
    formula: [0, 3, 6],
    symbol: 'dim',
    description: 'Tense, dark, symmetrical. Passing chord.',
  },
  {
    id: 'augmented',
    name: 'Augmented',
    formula: [0, 4, 8],
    symbol: 'aug',
    description: 'Bright tension. Symmetrical — every note could be root.',
  },
  {
    id: 'dominant-9',
    name: 'Dominant 9th',
    formula: [0, 4, 7, 10, 14],
    symbol: '9',
    description: 'Funky, soulful. Hendrix chord territory.',
  },
];

// Common open chord voicings [lowE, A, D, G, B, highE]
export const OPEN_VOICINGS = {
  'C-major':  [null, 3, 2, 0, 1, 0],
  'A-major':  [null, 0, 2, 2, 2, 0],
  'G-major':  [3, 2, 0, 0, 0, 3],
  'E-major':  [0, 2, 2, 1, 0, 0],
  'D-major':  [null, null, 0, 2, 3, 2],
  'A-minor':  [null, 0, 2, 2, 1, 0],
  'E-minor':  [0, 2, 2, 0, 0, 0],
  'D-minor':  [null, null, 0, 2, 3, 1],
  'C-major-7': [null, 3, 2, 0, 0, 0],
  'A-minor-7': [null, 0, 2, 0, 1, 0],
  'E-dominant-7': [0, 2, 0, 1, 0, 0],
  'A-dominant-7': [null, 0, 2, 0, 2, 0],
  'D-dominant-7': [null, null, 0, 2, 1, 2],
  'G-dominant-7': [3, 2, 0, 0, 0, 1],
};

// Barre chord shapes (relative to root fret on specified string)
export const BARRE_SHAPES = {
  'E-form-major':  { rootString: 5, shape: [0, 2, 2, 1, 0, 0] },
  'E-form-minor':  { rootString: 5, shape: [0, 2, 2, 0, 0, 0] },
  'A-form-major':  { rootString: 4, shape: [null, 0, 2, 2, 2, 0] },
  'A-form-minor':  { rootString: 4, shape: [null, 0, 2, 2, 1, 0] },
};
```

**Step 4: Create technique definitions**

```js
// src/data/techniques.js
export const TECHNIQUES = [
  {
    id: 'bending',
    name: 'Bending',
    category: 'expression',
    description: 'Push or pull a string to raise its pitch. The soul of blues guitar. Half-step, whole-step, and 1.5-step bends.',
    tips: [
      'Use ring finger backed by middle and index for strength',
      'Bend toward the ceiling on the wound strings (E A D)',
      'Pre-bend: bend first, pick, then release — vocal effect',
      'Always know your target note — bend in tune',
    ],
    exercises: [
      'Bend each note of the minor pentatonic up a whole step to the next scale tone',
      'Unison bends: fret target note on one string, bend to match on adjacent string',
      'Pre-bend and release across all positions',
    ],
    videos: [],
    tags: ['essential', 'expression', 'blues'],
  },
  {
    id: 'vibrato',
    name: 'Vibrato',
    category: 'expression',
    description: 'Rapid, controlled bending back and forth. The signature of your tone. Wide vs narrow, fast vs slow.',
    tips: [
      'Pivot from the wrist, not the fingers',
      'Keep it rhythmic — vibrato has a pulse',
      'Match vibrato speed to the song tempo and feel',
      'BB King: fast narrow. Clapton: wide slow. Find yours.',
    ],
    exercises: [
      'Hold a note for 4 beats with slow wide vibrato, then 4 beats fast narrow',
      'Apply vibrato to every note of a scale ascending',
      'Combine bend + vibrato at the top of the bend',
    ],
    videos: [],
    tags: ['essential', 'expression'],
  },
  {
    id: 'hammer-on',
    name: 'Hammer-On',
    category: 'legato',
    description: 'Pick a note, then hammer a fretting finger down to sound the next note without picking. Smooth, connected sound.',
    tips: [
      'Hammer with the fingertip, right behind the fret',
      'Force comes from the finger, not the hand',
      'Volume should match the picked note',
    ],
    exercises: [
      'Hammer-on every interval in the pentatonic scale',
      'Trill exercise: rapid hammer-on/pull-off on one pair of frets, 30 seconds per finger',
      'Hammer from nowhere: no picked note, just hammer onto the fretboard',
    ],
    videos: [],
    tags: ['essential', 'legato', 'beginner'],
  },
  {
    id: 'pull-off',
    name: 'Pull-Off',
    category: 'legato',
    description: 'Pluck the string with your fretting finger as you lift off. The reverse of hammer-on.',
    tips: [
      'Pull slightly downward as you release — snap the string',
      'Keep the lower finger planted and ready',
      'Equal volume between pulled-off and hammered notes',
    ],
    exercises: [
      'Descending pentatonic with pull-offs only',
      'Combine hammer-on + pull-off in groups of 3 (triplet feel)',
      'Pull-off cascades: 4 notes descending on one string',
    ],
    videos: [],
    tags: ['essential', 'legato', 'beginner'],
  },
  {
    id: 'slides',
    name: 'Slides',
    category: 'legato',
    description: 'Slide from one fret to another without releasing pressure. Smooth transition between notes.',
    tips: [
      'Maintain constant pressure during the slide',
      'Slide into notes from below for a vocal quality',
      'Slide out of notes for a trailing-off effect',
    ],
    exercises: [
      'Slide between every position of the pentatonic scale',
      'Long slides: slide from fret 2 to fret 12 and back, one string at a time',
      'Double stops: slide two strings simultaneously',
    ],
    videos: [],
    tags: ['essential', 'legato', 'beginner'],
  },
  {
    id: 'tapping',
    name: 'Tapping',
    category: 'two-hand',
    description: 'Use picking hand fingers to hammer onto the fretboard. Opens up wide intervals and fast patterns impossible with one hand.',
    tips: [
      'Tap right behind the fret for clean tone',
      'Mute unused strings with both hands',
      'Start with simple tap-pull-hammer triplet patterns',
    ],
    exercises: [
      'Basic tapping triplet: tap 12, pull-off 8, hammer 5 — repeat',
      'Tapping arpeggios across strings',
      'Two-hand tapping scale runs',
    ],
    videos: [],
    tags: ['intermediate', 'two-hand'],
  },
  {
    id: 'sweep-picking',
    name: 'Sweep Picking',
    category: 'picking',
    description: 'Single continuous pick stroke across multiple strings, one note per string. Arpeggios at speed.',
    tips: [
      'The pick "falls" through the strings — one fluid motion',
      'Mute each string after playing it — no notes ringing together',
      'Start painfully slow. Speed comes from clean technique.',
    ],
    exercises: [
      '3-string minor arpeggio sweep (Am shape)',
      '5-string major arpeggio sweep',
      'Economy picking: combine sweeping with alternate picking',
    ],
    videos: [],
    tags: ['advanced', 'picking'],
  },
  {
    id: 'hybrid-picking',
    name: 'Hybrid Picking',
    category: 'picking',
    description: 'Pick with the plectrum + middle/ring fingers simultaneously. Country, rock, and modern playing.',
    tips: [
      'Middle finger (m) on the B string, ring finger (a) on high E',
      'Snap the string for a percussive attack',
      'Lets you play non-adjacent strings simultaneously — impossible with just a pick',
    ],
    exercises: [
      'Alternating bass note (pick) with melody notes (fingers)',
      'Banjo-roll patterns using pick + m + a',
      'Chicken pickin: snap the string with middle finger for that twangy pop',
    ],
    videos: [],
    tags: ['intermediate', 'picking', 'country'],
  },
  {
    id: 'palm-muting',
    name: 'Palm Muting',
    category: 'rhythm',
    description: 'Rest the picking hand palm lightly on the strings near the bridge. Chunky, percussive rhythm tone.',
    tips: [
      'Position matters: too far from bridge = dead thud, too far = no muting',
      'Vary pressure for different levels of muting',
      'Essential for tight rhythm playing and chugging',
    ],
    exercises: [
      'Palm muted power chord progressions at varying tempos',
      'Gallop rhythm: muted eighth notes with accented open chords',
      'Muted single-note runs (metal style)',
    ],
    videos: [],
    tags: ['essential', 'rhythm', 'beginner'],
  },
  {
    id: 'harmonics',
    name: 'Harmonics',
    category: 'texture',
    description: 'Bell-like tones produced by lightly touching the string at nodal points. Natural (frets 5, 7, 12) and artificial.',
    tips: [
      'Natural harmonics: touch lightly directly over the fret wire, not behind it',
      'Pinch harmonics: catch the string with thumb edge right after picking',
      'Tap harmonics: tap 12 frets above any fretted note',
    ],
    exercises: [
      'Play all natural harmonics at frets 5, 7, 12, and 19',
      'Pinch harmonics on every note of a scale',
      'Harmonic melody: play a tune using only harmonics',
    ],
    videos: [],
    tags: ['intermediate', 'texture'],
  },
];
```

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: guitar content data — scales, modes, chords, techniques"
```

---

## Task 4: Fretboard SVG Component

The visual centerpiece. Renders any scale or chord on an interactive fretboard diagram.

**Files:**
- Create: `src/components/Fretboard.jsx`
- Create: `src/components/Fretboard.module.css`

**Step 1: Implement Fretboard component**

The SVG fretboard should:
- Draw 6 strings and frets (configurable range)
- Show dots at standard fret markers (3, 5, 7, 9, 12, 15, 17)
- Accept `positions` data (from getScalePositions) and render colored circles
- Highlight root notes differently (filled vs outlined)
- Show note name or interval inside each dot
- Responsive — scales to container width

```jsx
// src/components/Fretboard.jsx
import { getIntervalName } from '../theory/fretboard.js';
import styles from './Fretboard.module.css';

const FRET_MARKERS = [3, 5, 7, 9, 12, 15, 17, 19, 21];
const DOUBLE_MARKERS = [12];

export default function Fretboard({ positions, root, minFret = 0, maxFret = 15, showIntervals = false }) {
  const numFrets = maxFret - minFret + 1;
  const stringCount = 6;
  const padding = { top: 30, bottom: 20, left: 40, right: 20 };
  const fretWidth = 50;
  const stringSpacing = 24;
  const width = padding.left + numFrets * fretWidth + padding.right;
  const height = padding.top + (stringCount - 1) * stringSpacing + padding.bottom;

  const fretX = (fret) => padding.left + (fret - minFret) * fretWidth;
  const stringY = (string) => padding.top + string * stringSpacing;
  const noteCX = (fret) => fret === 0 ? padding.left - 15 : fretX(fret) - fretWidth / 2;

  return (
    <div className={styles.container}>
      <svg viewBox={`0 0 ${width} ${height}`} className={styles.svg}>
        {/* Nut */}
        {minFret === 0 && (
          <line x1={padding.left} y1={padding.top - 5} x2={padding.left} y2={stringY(5) + 5} stroke="var(--fg)" strokeWidth={4} />
        )}

        {/* Fret wires */}
        {Array.from({ length: numFrets + 1 }, (_, i) => i + minFret).map(fret => (
          <line key={`fret-${fret}`} x1={fretX(fret)} y1={padding.top - 5} x2={fretX(fret)} y2={stringY(5) + 5} stroke="var(--fg-muted)" strokeWidth={1} opacity={0.3} />
        ))}

        {/* Strings */}
        {Array.from({ length: stringCount }, (_, i) => (
          <line key={`string-${i}`} x1={minFret === 0 ? padding.left : padding.left - 10} y1={stringY(i)} x2={width - padding.right} y2={stringY(i)} stroke="var(--fg-muted)" strokeWidth={i < 3 ? 1 : 1.5 + (i - 3) * 0.3} />
        ))}

        {/* Fret markers */}
        {FRET_MARKERS.filter(f => f > minFret && f <= maxFret).map(fret => (
          <circle key={`marker-${fret}`} cx={noteCX(fret)} cy={DOUBLE_MARKERS.includes(fret) ? stringY(1.5) : stringY(2.5)} r={4} fill="var(--fg-muted)" opacity={0.15} />
        ))}
        {DOUBLE_MARKERS.filter(f => f > minFret && f <= maxFret).map(fret => (
          <circle key={`marker2-${fret}`} cx={noteCX(fret)} cy={stringY(3.5)} r={4} fill="var(--fg-muted)" opacity={0.15} />
        ))}

        {/* Fret numbers */}
        {Array.from({ length: numFrets }, (_, i) => i + minFret + 1)
          .filter(f => f % 2 === 1 || FRET_MARKERS.includes(f))
          .map(fret => (
            <text key={`num-${fret}`} x={noteCX(fret)} y={padding.top - 12} textAnchor="middle" fontSize={10} fill="var(--fg-muted)">{fret}</text>
          ))}

        {/* Scale/chord notes */}
        {positions && positions.map(({ string, frets, roots, noteNames }) =>
          frets.map(fret => {
            const isRoot = roots.includes(fret);
            const note = noteNames[fret];
            const label = showIntervals ? getIntervalName(root, note) : note;
            return (
              <g key={`note-${string}-${fret}`}>
                <circle
                  cx={noteCX(fret)}
                  cy={stringY(string)}
                  r={10}
                  fill={isRoot ? 'var(--accent)' : 'var(--fg)'}
                  opacity={isRoot ? 1 : 0.8}
                />
                <text
                  x={noteCX(fret)}
                  y={stringY(string) + 4}
                  textAnchor="middle"
                  fontSize={8}
                  fontWeight={isRoot ? 700 : 400}
                  fill={isRoot ? 'var(--bg)' : 'var(--bg)'}
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
```

**Step 2: Style the fretboard**

```css
/* src/components/Fretboard.module.css */
.container {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.svg {
  width: 100%;
  height: auto;
  min-width: 400px;
}
```

**Step 3: Test visually**

Wire up a quick test in App.jsx — render a Fretboard with A minor pentatonic position 1. Verify it looks correct in the browser.

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: SVG fretboard renderer component"
```

---

## Task 5: Core UI Components

**Files:**
- Create: `src/components/ScaleCard.jsx`, `ScaleCard.module.css`
- Create: `src/components/VideoEmbed.jsx`, `VideoEmbed.module.css`
- Create: `src/components/CategoryNav.jsx`, `CategoryNav.module.css`
- Create: `src/components/PracticeTimer.jsx`, `PracticeTimer.module.css`
- Create: `src/hooks/usePracticeLog.js`
- Create: `src/hooks/useLocalStorage.js`

**Step 1: LocalStorage hook**

```js
// src/hooks/useLocalStorage.js
import { useState } from 'react';

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    window.localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [storedValue, setValue];
}
```

**Step 2: Practice log hook**

```js
// src/hooks/usePracticeLog.js
import { useLocalStorage } from './useLocalStorage.js';

export function usePracticeLog() {
  const [log, setLog] = useLocalStorage('practice-log', []);

  const addEntry = (entry) => {
    setLog(prev => [...prev, {
      ...entry,
      id: Date.now(),
      date: new Date().toISOString(),
    }]);
  };

  const getRecentSessions = (days = 7) => {
    const cutoff = Date.now() - days * 86400000;
    return log.filter(e => new Date(e.date).getTime() > cutoff);
  };

  const getTotalMinutes = (days = 7) => {
    return getRecentSessions(days).reduce((sum, e) => sum + (e.durationMinutes || 0), 0);
  };

  return { log, addEntry, getRecentSessions, getTotalMinutes };
}
```

**Step 3: ScaleCard component**

Displays a scale/mode with its fretboard diagram, description, and action buttons.

```jsx
// src/components/ScaleCard.jsx
import { useState } from 'react';
import Fretboard from './Fretboard.jsx';
import { getScalePositions } from '../theory/fretboard.js';
import { ALL_ROOTS } from '../data/scales.js';
import styles from './ScaleCard.module.css';

export default function ScaleCard({ scale, onPractice }) {
  const [root, setRoot] = useState('A');
  const [posIndex, setPosIndex] = useState(0);
  const [showIntervals, setShowIntervals] = useState(false);

  const pos = scale.positions[posIndex];
  const positions = getScalePositions(root, scale.intervals, pos.minFret, pos.maxFret);

  return (
    <div className={styles.card}>
      <h3 className={styles.name}>{scale.name}</h3>
      <p className={styles.desc}>{scale.description}</p>

      {scale.characteristicNote && (
        <p className={styles.charNote}>Characteristic: {scale.characteristicNote}</p>
      )}
      {scale.chordFit && (
        <p className={styles.chordFit}>Works over: {scale.chordFit}</p>
      )}

      <div className={styles.controls}>
        <select value={root} onChange={e => setRoot(e.target.value)}>
          {ALL_ROOTS.map(n => <option key={n} value={n}>{n}</option>)}
        </select>
        <select value={posIndex} onChange={e => setPosIndex(Number(e.target.value))}>
          {scale.positions.map((p, i) => <option key={i} value={i}>{p.name}</option>)}
        </select>
        <button onClick={() => setShowIntervals(!showIntervals)}>
          {showIntervals ? 'Notes' : 'Intervals'}
        </button>
      </div>

      <Fretboard
        positions={positions}
        root={root}
        minFret={pos.minFret}
        maxFret={pos.maxFret}
        showIntervals={showIntervals}
      />

      <div className={styles.tags}>
        {scale.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
      </div>

      {onPractice && (
        <button className={styles.practiceBtn} onClick={() => onPractice(scale, root)}>
          Practice This
        </button>
      )}
    </div>
  );
}
```

**Step 4: VideoEmbed component**

```jsx
// src/components/VideoEmbed.jsx
import styles from './VideoEmbed.module.css';

function getYouTubeId(url) {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^&?/]+)/);
  return match ? match[1] : null;
}

export default function VideoEmbed({ video }) {
  if (video.type === 'youtube') {
    const videoId = getYouTubeId(video.url);
    if (!videoId) return null;
    return (
      <div className={styles.wrapper}>
        <iframe
          className={styles.iframe}
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title={video.title || 'Video'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
          allowFullScreen
        />
        {video.title && <p className={styles.title}>{video.title}</p>}
      </div>
    );
  }

  if (video.type === 'recording') {
    return (
      <div className={styles.wrapper}>
        <audio controls src={video.url} className={styles.audio} />
        {video.title && <p className={styles.title}>{video.title}</p>}
        {video.date && <p className={styles.date}>{video.date}</p>}
      </div>
    );
  }

  return null;
}
```

**Step 5: CategoryNav component**

```jsx
// src/components/CategoryNav.jsx
import { NavLink } from 'react-router-dom';
import styles from './CategoryNav.module.css';

const CATEGORIES = [
  { path: '/', label: 'Home', icon: '/' },
  { path: '/scales', label: 'Scales' },
  { path: '/modes', label: 'Modes' },
  { path: '/chords', label: 'Chords' },
  { path: '/techniques', label: 'Techniques' },
];

export default function CategoryNav() {
  return (
    <nav className={styles.nav}>
      {CATEGORIES.map(c => (
        <NavLink
          key={c.path}
          to={c.path}
          className={({ isActive }) => isActive ? styles.active : styles.link}
        >
          {c.label}
        </NavLink>
      ))}
    </nav>
  );
}
```

**Step 6: PracticeTimer component**

```jsx
// src/components/PracticeTimer.jsx
import { useState, useEffect, useRef } from 'react';
import styles from './PracticeTimer.module.css';

export default function PracticeTimer({ topic, onComplete }) {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => setSeconds(s => s + 1), 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  const handleDone = () => {
    setRunning(false);
    clearInterval(intervalRef.current);
    onComplete({
      topic: topic.name || topic.id,
      category: topic.category || 'general',
      durationMinutes: Math.round(seconds / 60 * 10) / 10,
    });
  };

  return (
    <div className={styles.timer}>
      <div className={styles.time}>{formatTime(seconds)}</div>
      <div className={styles.topic}>Practicing: {topic.name || topic.id}</div>
      <div className={styles.controls}>
        <button onClick={() => setRunning(!running)}>
          {running ? 'Pause' : 'Resume'}
        </button>
        <button onClick={handleDone} className={styles.doneBtn}>Done</button>
      </div>
    </div>
  );
}
```

**Step 7: Create CSS module files for each component**

Create minimal CSS module files for: ScaleCard, VideoEmbed, CategoryNav, PracticeTimer. Keep styles minimal — layout and spacing only. Colors via CSS custom properties.

**Step 8: Commit**

```bash
git add -A
git commit -m "feat: core UI components — ScaleCard, VideoEmbed, CategoryNav, PracticeTimer"
```

---

## Task 6: Pages + Routing

**Files:**
- Create: `src/pages/Home.jsx`
- Create: `src/pages/Scales.jsx`
- Create: `src/pages/Modes.jsx`
- Create: `src/pages/Chords.jsx`
- Create: `src/pages/Techniques.jsx`
- Modify: `src/App.jsx` — add all routes

**Step 1: Home page**

Dashboard showing practice stats and quick links to each category.

```jsx
// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { usePracticeLog } from '../hooks/usePracticeLog.js';
import styles from './Home.module.css';

export default function Home() {
  const { getRecentSessions, getTotalMinutes } = usePracticeLog();
  const recent = getRecentSessions(7);
  const totalMin = getTotalMinutes(7);

  return (
    <div className={styles.page}>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statNum}>{totalMin}</span>
          <span className={styles.statLabel}>min this week</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum}>{recent.length}</span>
          <span className={styles.statLabel}>sessions</span>
        </div>
      </div>

      <div className={styles.grid}>
        <Link to="/scales" className={styles.categoryCard}>
          <h2>Scales</h2>
          <p>Major, minor, pentatonic, blues, harmonic, melodic</p>
        </Link>
        <Link to="/modes" className={styles.categoryCard}>
          <h2>Modes</h2>
          <p>Ionian through Locrian — moods, chords, positions</p>
        </Link>
        <Link to="/chords" className={styles.categoryCard}>
          <h2>Chords</h2>
          <p>Open, barre, 7ths, extensions — CAGED shapes</p>
        </Link>
        <Link to="/techniques" className={styles.categoryCard}>
          <h2>Techniques</h2>
          <p>Bending, vibrato, legato, tapping, picking</p>
        </Link>
      </div>

      {recent.length > 0 && (
        <div className={styles.recentSection}>
          <h3>Recent Sessions</h3>
          {recent.slice(-5).reverse().map(s => (
            <div key={s.id} className={styles.recentItem}>
              <span>{s.topic}</span>
              <span>{s.durationMinutes} min</span>
              <span>{new Date(s.date).toLocaleDateString()}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
```

**Step 2: Scales page**

```jsx
// src/pages/Scales.jsx
import { useState } from 'react';
import { SCALES } from '../data/scales.js';
import ScaleCard from '../components/ScaleCard.jsx';
import PracticeTimer from '../components/PracticeTimer.jsx';
import { usePracticeLog } from '../hooks/usePracticeLog.js';
import styles from './Scales.module.css';

export default function Scales() {
  const [practicing, setPracticing] = useState(null);
  const { addEntry } = usePracticeLog();

  if (practicing) {
    return (
      <PracticeTimer
        topic={{ ...practicing.scale, category: 'scales' }}
        onComplete={(entry) => {
          addEntry({ ...entry, root: practicing.root });
          setPracticing(null);
        }}
      />
    );
  }

  return (
    <div className={styles.page}>
      <h1>Scales</h1>
      <div className={styles.list}>
        {SCALES.map(scale => (
          <ScaleCard
            key={scale.id}
            scale={scale}
            onPractice={(s, root) => setPracticing({ scale: s, root })}
          />
        ))}
      </div>
    </div>
  );
}
```

**Step 3: Modes page** — same pattern as Scales but uses MODES data. Include mode-specific info (characteristic note, chord fit, mood).

**Step 4: Chords page** — displays chord types with voicing diagrams. Use a chord diagram variant of the Fretboard component (vertical orientation, 4-5 frets).

**Step 5: Techniques page** — list of technique cards with description, tips, and exercises. No fretboard needed — text-focused.

**Step 6: Wire up App.jsx with all routes**

```jsx
// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CategoryNav from './components/CategoryNav.jsx';
import Home from './pages/Home.jsx';
import Scales from './pages/Scales.jsx';
import Modes from './pages/Modes.jsx';
import Chords from './pages/Chords.jsx';
import Techniques from './pages/Techniques.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="header">
          <h1 className="title">Guitar Practice</h1>
        </header>
        <CategoryNav />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scales" element={<Scales />} />
            <Route path="/modes" element={<Modes />} />
            <Route path="/chords" element={<Chords />} />
            <Route path="/techniques" element={<Techniques />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
```

**Step 7: Test all routes manually in browser**

**Step 8: Commit**

```bash
git add -A
git commit -m "feat: all pages + routing — home, scales, modes, chords, techniques"
```

---

## Task 7: Styling + Dark Theme

**Files:**
- Modify: `src/App.css` — global styles, CSS custom properties, dark theme
- Modify: all CSS modules for polished responsive layout

**Step 1: Define CSS custom properties (dark theme)**

```css
/* src/App.css */
:root {
  --bg: #0a0a0a;
  --bg-card: #141414;
  --bg-hover: #1a1a1a;
  --fg: #e8e8e8;
  --fg-muted: #888;
  --accent: #f59e0b;
  --accent-hover: #d97706;
  --border: #222;
  --radius: 8px;
  --font: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'SF Mono', 'Fira Code', monospace;
}
```

Guitar practice happens in dim rooms — dark theme is the default and only theme. Amber accent for warmth (like tube amps).

**Step 2: Style all pages and components**

Use the frontend-design skill (@frontend-design) for polished responsive design. Key requirements:
- Mobile-first responsive grid
- Cards with subtle borders, hover states
- Bottom nav on mobile, side nav on desktop
- Fretboard should scroll horizontally on small screens
- Practice timer should be large and prominent
- Tags as small pills

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: dark theme styling + responsive layout"
```

---

## Task 8: PWA Setup

**Files:**
- Install: `vite-plugin-pwa`
- Modify: `vite.config.js`
- Create: `public/manifest.json` (auto-generated by plugin)
- Create: icon files in `public/`

**Step 1: Install PWA plugin**

```bash
npm install -D vite-plugin-pwa
```

**Step 2: Configure in vite.config.js**

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Guitar Practice',
        short_name: 'Guitar',
        description: 'Personal guitar practice app',
        theme_color: '#0a0a0a',
        background_color: '#0a0a0a',
        display: 'standalone',
        icons: [
          { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,json}'],
      },
    }),
  ],
});
```

**Step 3: Create placeholder icons**

Generate simple guitar pick icon SVG, export as 192x192 and 512x512 PNG.

**Step 4: Test PWA**

```bash
npm run build
npm run preview
```

Verify in Chrome DevTools > Application > Service Workers that it registers. Test "Install" prompt.

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: PWA setup — offline support + installable"
```

---

## Task 9: Deploy to Vercel

**Step 1: Deploy**

```bash
npm install -g vercel
cd /Users/denisgingras/guitar-practice
vercel
```

Follow prompts. The app is a static Vite build — Vercel auto-detects.

**Step 2: Verify live URL works on phone and laptop**

**Step 3: Commit vercel config if generated**

```bash
git add -A
git commit -m "chore: vercel deployment config"
```

---

## Summary

| Task | What | Depends on |
|------|------|-----------|
| 1 | Project scaffold | — |
| 2 | Music theory engine | 1 |
| 3 | Scale/mode/chord/technique data | 2 |
| 4 | Fretboard SVG component | 2 |
| 5 | Core UI components | 3, 4 |
| 6 | Pages + routing | 5 |
| 7 | Styling + dark theme | 6 |
| 8 | PWA setup | 7 |
| 9 | Deploy | 8 |

Tasks 3 and 4 can run in parallel (both depend only on Task 2).
