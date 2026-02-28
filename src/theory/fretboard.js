import { noteIndex, noteName, getScaleNotes } from './notes.js';

export const STANDARD_TUNING = ['E','A','D','G','B','E'];

export function getNoteAtFret(openNote, fret) {
  return noteName(noteIndex(openNote) + fret);
}

export function getScalePositions(root, intervals, minFret, maxFret) {
  const scaleNotes = new Set(getScaleNotes(root, intervals));

  return STANDARD_TUNING.map((openNote, stringIndex) => {
    const frets = [];
    const roots = [];
    const noteNames = {};

    for (let fret = minFret; fret <= maxFret; fret++) {
      const note = getNoteAtFret(openNote, fret);
      if (scaleNotes.has(note)) {
        frets.push(fret);
        noteNames[fret] = note;
        if (note === root) {
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
