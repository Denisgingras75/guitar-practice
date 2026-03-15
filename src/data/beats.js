// Beat patterns for the Web Audio beat maker
// Each beat is a pattern of kick, snare, hihat over 16 steps

export const beats = [
  {
    name: 'Boom Bap',
    bpm: 90,
    style: 'Classic',
    pattern: {
      kick:  [1,0,0,0, 0,0,0,0, 1,0,1,0, 0,0,0,0],
      snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
      hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
    },
  },
  {
    name: 'Trap Heat',
    bpm: 140,
    style: 'Trap',
    pattern: {
      kick:  [1,0,0,0, 0,0,1,0, 0,0,0,0, 1,0,0,0],
      snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
      hihat: [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
    },
  },
  {
    name: 'Lo-Fi Chill',
    bpm: 80,
    style: 'Lo-Fi',
    pattern: {
      kick:  [1,0,0,0, 0,0,0,1, 0,0,1,0, 0,0,0,0],
      snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,1],
      hihat: [1,0,1,1, 0,0,1,0, 1,0,1,1, 0,0,1,0],
    },
  },
  {
    name: 'East Coast',
    bpm: 95,
    style: 'Classic',
    pattern: {
      kick:  [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,1,0],
      snare: [0,0,0,0, 1,0,0,1, 0,0,0,0, 1,0,0,0],
      hihat: [1,1,0,1, 1,0,1,1, 1,1,0,1, 1,0,1,1],
    },
  },
  {
    name: 'Hard Knock',
    bpm: 85,
    style: 'Hardcore',
    pattern: {
      kick:  [1,0,0,1, 0,0,0,0, 1,0,0,1, 0,0,0,0],
      snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,1,0],
      hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
    },
  },
  {
    name: 'Drill',
    bpm: 145,
    style: 'Trap',
    pattern: {
      kick:  [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,1,0,0],
      snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
      hihat: [1,0,1,1, 1,0,1,1, 1,0,1,1, 1,0,1,1],
    },
  },
  {
    name: 'Freestyle',
    bpm: 100,
    style: 'Classic',
    pattern: {
      kick:  [1,0,0,0, 0,0,1,0, 1,0,0,0, 0,0,0,0],
      snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
      hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
    },
  },
  {
    name: 'Battle Cry',
    bpm: 110,
    style: 'Hardcore',
    pattern: {
      kick:  [1,0,0,0, 0,0,0,0, 0,0,1,0, 1,0,0,0],
      snare: [0,0,0,0, 1,0,0,1, 0,0,0,0, 1,0,0,0],
      hihat: [1,1,1,0, 1,1,1,0, 1,1,1,0, 1,1,1,0],
    },
  },
];
