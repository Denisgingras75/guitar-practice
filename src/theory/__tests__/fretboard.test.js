import { describe, it, expect } from 'vitest';
import { getNoteAtFret, getScalePositions, getIntervalName, STANDARD_TUNING } from '../fretboard.js';

describe('getNoteAtFret', () => {
  it('open low E string = E', () => expect(getNoteAtFret('E', 0)).toBe('E'));
  it('5th fret A string = D', () => expect(getNoteAtFret('A', 5)).toBe('D'));
  it('12th fret = same as open', () => expect(getNoteAtFret('E', 12)).toBe('E'));
});

describe('getScalePositions', () => {
  it('returns fret positions for A minor pentatonic in position 1 (frets 5-8)', () => {
    const positions = getScalePositions('A', [0,3,5,7,10], 5, 8);
    expect(positions).toHaveLength(6);
    // Low E string: frets 5 (A) and 8 (C) are in A minor pentatonic
    expect(positions[0].frets).toContain(5);
    expect(positions[0].frets).toContain(8);
  });

  it('marks root notes', () => {
    const positions = getScalePositions('A', [0,3,5,7,10], 5, 8);
    const lowE = positions[0];
    expect(lowE.roots).toContain(5);
  });
});

describe('getIntervalName', () => {
  it('root = R', () => expect(getIntervalName('A', 'A')).toBe('R'));
  it('perfect 5th = 5', () => expect(getIntervalName('A', 'E')).toBe('5'));
  it('minor 3rd = b3', () => expect(getIntervalName('A', 'C')).toBe('b3'));
});

describe('STANDARD_TUNING', () => {
  it('is E A D G B E', () => {
    expect(STANDARD_TUNING).toEqual(['E','A','D','G','B','E']);
  });
});
