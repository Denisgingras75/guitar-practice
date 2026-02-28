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
