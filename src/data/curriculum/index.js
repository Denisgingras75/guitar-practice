import { TECHNIQUE_NODES } from './technique.js';
import { THEORY_NODES } from './theory.js';
import { FRETBOARD_NODES } from './fretboard.js';
import { EAR_NODES } from './ear.js';
import { CREATIVITY_NODES } from './creativity.js';
import { REPERTOIRE_NODES } from './repertoire.js';

export const TREES = [
  { id: 'technique', name: 'Technique', description: 'Physical mechanics — picking, fretting, articulation, speed, dynamics' },
  { id: 'theory', name: 'Theory', description: 'Understanding why music works — intervals, harmony, analysis' },
  { id: 'fretboard', name: 'Fretboard', description: 'Knowing the neck — note locations, patterns, visualization' },
  { id: 'ear', name: 'Ear Training', description: 'Hearing what\'s happening — pitch, intervals, chords, progressions' },
  { id: 'creativity', name: 'Creativity', description: 'Finding your voice — improv, composition, personal style' },
  { id: 'repertoire', name: 'Repertoire', description: 'Learning actual music — songs, tabs, performance' },
];

export const TIER_NAMES = ['Foundation', 'Developing', 'Intermediate', 'Advanced', 'Mastery'];

export const ALL_NODES = [
  ...TECHNIQUE_NODES,
  ...THEORY_NODES,
  ...FRETBOARD_NODES,
  ...EAR_NODES,
  ...CREATIVITY_NODES,
  ...REPERTOIRE_NODES,
];

export function getTreeNodes(treeId) {
  return ALL_NODES.filter((n) => n.tree === treeId);
}

export function getTierNodes(treeId, tier) {
  return ALL_NODES.filter((n) => n.tree === treeId && n.tier === tier);
}
