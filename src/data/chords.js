export const CHORD_TYPES = [
  { id: 'major', name: 'Major', symbol: '', intervals: [0, 4, 7], description: 'Stable, happy, resolved.' },
  { id: 'minor', name: 'Minor', symbol: 'm', intervals: [0, 3, 7], description: 'Sad, dark, introspective.' },
  { id: 'dom7', name: 'Dominant 7th', symbol: '7', intervals: [0, 4, 7, 10], description: 'Bluesy tension that wants to resolve. The V chord.' },
  { id: 'maj7', name: 'Major 7th', symbol: 'maj7', intervals: [0, 4, 7, 11], description: 'Lush, jazzy, sophisticated major.' },
  { id: 'min7', name: 'Minor 7th', symbol: 'm7', intervals: [0, 3, 7, 10], description: 'Smooth minor. Jazz, R&B, neo-soul.' },
  { id: 'sus2', name: 'Suspended 2nd', symbol: 'sus2', intervals: [0, 2, 7], description: 'Open, ambiguous — neither major nor minor.' },
  { id: 'sus4', name: 'Suspended 4th', symbol: 'sus4', intervals: [0, 5, 7], description: 'Tense, wants to resolve to major. The Who, Pete Townshend.' },
  { id: 'dim', name: 'Diminished', symbol: 'dim', intervals: [0, 3, 6], description: 'Unstable, eerie, symmetrical.' },
  { id: 'aug', name: 'Augmented', symbol: 'aug', intervals: [0, 4, 8], description: 'Stretched, dreamy, unresolved. Beatles loved these.' },
  { id: 'dom9', name: 'Dominant 9th', symbol: '9', intervals: [0, 4, 7, 10, 14], description: 'Funky, rich. Hendrix chord territory.' },
];

// Open voicings: [lowE, A, D, G, B, highE] — null = muted string
export const OPEN_VOICINGS = {
  // Major
  'C-major':  [null, 3, 2, 0, 1, 0],
  'A-major':  [null, 0, 2, 2, 2, 0],
  'G-major':  [3, 2, 0, 0, 0, 3],
  'E-major':  [0, 2, 2, 1, 0, 0],
  'D-major':  [null, null, 0, 2, 3, 2],

  // Minor
  'A-minor':  [null, 0, 2, 2, 1, 0],
  'E-minor':  [0, 2, 2, 0, 0, 0],
  'D-minor':  [null, null, 0, 2, 3, 1],

  // Dominant 7th
  'A-dom7':   [null, 0, 2, 0, 2, 0],
  'E-dom7':   [0, 2, 0, 1, 0, 0],
  'D-dom7':   [null, null, 0, 2, 1, 2],
  'G-dom7':   [3, 2, 0, 0, 0, 1],
  'C-dom7':   [null, 3, 2, 3, 1, 0],
  'B-dom7':   [null, 2, 1, 2, 0, 2],

  // Major 7th
  'C-maj7':   [null, 3, 2, 0, 0, 0],
  'A-maj7':   [null, 0, 2, 1, 2, 0],
  'G-maj7':   [3, 2, 0, 0, 0, 2],
  'D-maj7':   [null, null, 0, 2, 2, 2],
  'E-maj7':   [0, 2, 1, 1, 0, 0],

  // Minor 7th
  'A-min7':   [null, 0, 2, 0, 1, 0],
  'E-min7':   [0, 2, 2, 0, 3, 0],
  'D-min7':   [null, null, 0, 2, 1, 1],

  // Suspended
  'A-sus2':   [null, 0, 2, 2, 0, 0],
  'D-sus2':   [null, null, 0, 2, 3, 0],
  'E-sus4':   [0, 2, 2, 2, 0, 0],
  'A-sus4':   [null, 0, 2, 2, 3, 0],
  'D-sus4':   [null, null, 0, 2, 3, 3],
};

// Barre chord shapes — moveable up and down the neck
export const BARRE_SHAPES = [
  {
    id: 'e-major',
    name: 'E-form Major Barre',
    rootString: 5, // 0-indexed low E
    shape: [0, 2, 2, 1, 0, 0], // frets relative to barre
    chordType: 'major',
    description: 'The workhorse barre chord. Root on low E string.',
  },
  {
    id: 'e-minor',
    name: 'E-form Minor Barre',
    rootString: 5,
    shape: [0, 2, 2, 0, 0, 0],
    chordType: 'minor',
    description: 'Minor barre off the E shape. Same root position as E-form major.',
  },
  {
    id: 'a-major',
    name: 'A-form Major Barre',
    rootString: 4, // A string
    shape: [null, 0, 2, 2, 2, 0],
    chordType: 'major',
    description: 'Root on the A string. Great for higher voicings without going up the neck.',
  },
  {
    id: 'a-minor',
    name: 'A-form Minor Barre',
    rootString: 4,
    shape: [null, 0, 2, 2, 1, 0],
    chordType: 'minor',
    description: 'Minor barre off the A shape. Root on the A string.',
  },
];
