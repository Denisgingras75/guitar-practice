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
