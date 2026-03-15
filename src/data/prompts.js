// Freestyle battle topics & prompts
export const topics = [
  'Your city', 'Late night vibes', 'Hustle & grind', 'Proving doubters wrong',
  'Your crew', 'Rising to the top', 'Street wisdom', 'Confidence',
  'Overcoming obstacles', 'Money moves', 'Legacy', 'The come-up',
  'Real vs. fake', 'Your style', 'The mic', 'Battle scars',
  'Dream chasing', 'The underground', 'Respect', 'Your story',
  'The spotlight', 'Cold nights', 'Victory lap', 'From nothing',
  'Built different', 'No days off', 'The game', 'Loyalty',
  'Ambition', 'Self-made', 'Against all odds', 'The crown',
];

export const wordPrompts = [
  ['fire', 'desire', 'wire', 'higher'],
  ['flow', 'show', 'know', 'grow'],
  ['bars', 'stars', 'cars', 'scars'],
  ['rhyme', 'time', 'climb', 'prime'],
  ['mic', 'strike', 'like', 'hike'],
  ['beat', 'street', 'heat', 'feat'],
  ['king', 'ring', 'thing', 'swing'],
  ['stage', 'page', 'rage', 'age'],
  ['real', 'deal', 'feel', 'steel'],
  ['gold', 'bold', 'cold', 'told'],
  ['night', 'fight', 'light', 'right'],
  ['dream', 'stream', 'team', 'scheme'],
  ['power', 'tower', 'hour', 'devour'],
  ['soul', 'control', 'goal', 'roll'],
  ['grind', 'mind', 'find', 'behind'],
  ['crown', 'town', 'down', 'sound'],
];

export const challenges = [
  { name: 'Speed Round', description: 'Freestyle for 30 seconds non-stop', duration: 30 },
  { name: 'Topic Switch', description: 'New topic every 15 seconds', duration: 60 },
  { name: 'Word Chain', description: 'Use all 4 given words in your verse', duration: 45 },
  { name: 'Freestyle Flow', description: 'Open freestyle, no restrictions', duration: 60 },
  { name: 'Punchline King', description: 'End every 4 bars with a punchline', duration: 45 },
  { name: 'Storyteller', description: 'Tell a complete story in your verse', duration: 60 },
  { name: 'Double Time', description: 'Rap at double speed for the round', duration: 30 },
  { name: 'Callback', description: 'Reference what your opponent said', duration: 45 },
];

export const battleFormats = [
  { name: '1v1 Classic', rounds: 3, turnDuration: 45, description: '3 rounds, 45 seconds each' },
  { name: 'Quick Fire', rounds: 5, turnDuration: 30, description: '5 fast rounds, 30 seconds each' },
  { name: 'Championship', rounds: 5, turnDuration: 60, description: '5 rounds, 60 seconds each' },
  { name: 'Sudden Death', rounds: 1, turnDuration: 90, description: '1 round, 90 seconds, winner takes all' },
];

export const scoringCategories = [
  { key: 'flow', label: 'Flow', icon: '&#127926;', description: 'Rhythm, cadence & delivery' },
  { key: 'wordplay', label: 'Wordplay', icon: '&#128218;', description: 'Punchlines, metaphors & schemes' },
  { key: 'performance', label: 'Performance', icon: '&#127917;', description: 'Energy, stage presence & crowd reaction' },
  { key: 'freestyle', label: 'Freestyle', icon: '&#9889;', description: 'Off the top, improvisation skill' },
];

export function getRandomTopic() {
  return topics[Math.floor(Math.random() * topics.length)];
}

export function getRandomWords() {
  return wordPrompts[Math.floor(Math.random() * wordPrompts.length)];
}

export function getRandomChallenge() {
  return challenges[Math.floor(Math.random() * challenges.length)];
}
