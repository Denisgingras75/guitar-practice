# Guitar Practice Curriculum — Skill Tree Design

## Summary
Replace flat routines with a progressive skill tree curriculum from foundation to mastery. 6 trees, 5 tiers each, ~150-200 nodes. Self-assessed progression. Curated tab library for repertoire tree. Existing routines become "Quick Practice" sub-feature.

## Structure

**6 Skill Trees**, each with 5 tiers:

| Tier | Name | Roughly Maps To |
|------|------|-----------------|
| 1 | Foundation | Year 0-1 |
| 2 | Developing | Year 1-2 |
| 3 | Intermediate | Year 2-4 |
| 4 | Advanced | Year 4-7 |
| 5 | Mastery | Year 7-10+ |

Each tier contains **nodes** — specific skills to unlock. A node has:
- Name, description, why it matters
- Practice exercises
- Prerequisites (other nodes that should be completed first)
- Completion = self-assessed checkbox (LocalStorage)

## The 6 Trees

### 1. Technique
Physical mechanics — picking, fretting, articulation, speed, dynamics.

- T1: Clean fretting, alternate picking, basic strumming, open chord changes
- T2: Barre chords, bending accuracy, hammer-on/pull-off, palm muting
- T3: Vibrato control, hybrid picking, sweep intro, string skipping
- T4: Economy picking, advanced legato, tapping patterns, tremolo picking
- T5: Sweep mastery, two-hand tapping, dynamic micro-control, speed/cleanliness at tempo

### 2. Theory
Understanding why music works.

- T1: Note names, major scale formula, basic intervals, I-IV-V
- T2: All diatonic chords, minor keys, circle of fifths, chord function
- T3: Modes (why, not just shapes), secondary dominants, chord substitution
- T4: Modal interchange, altered chords, chord-scale theory, voice leading
- T5: Reharmonization, composition analysis, polytonality, advanced arranging

### 3. Fretboard Knowledge
Knowing the neck.

- T1: Open string names, notes on strings 5-6, octave shapes
- T2: All natural notes everywhere, CAGED basics, pentatonic 5 positions
- T3: 3NPS patterns, connecting positions via slides, intervals on the neck
- T4: Horizontal playing, instant chord tone location, arpeggios everywhere
- T5: Complete visualization — any chord/scale/arpeggio anywhere instantly

### 4. Ear Training
Hearing what's happening.

- T1: Tuning by ear, major vs minor, root note ID
- T2: Interval recognition (ascending), chord quality ID, simple melody transcription
- T3: Descending intervals, chord quality (maj7/min7/dim/aug), transcribe a solo
- T4: Chord progression recognition, hearing extensions, relative pitch fluency
- T5: Instant transcription, hearing voice leading, complex harmony recognition

### 5. Creativity
Finding your voice.

- T1: Pentatonic noodling with feel, writing a 4-chord progression, recording yourself
- T2: Call and response soloing, writing a melody, basic song structure
- T3: Motivic development, writing in different feels, solo guitar arranging
- T4: Style blending, composing with modes, writing for multiple instruments
- T5: Personal voice, complex composition, spontaneous arrangement

### 6. Repertoire (Songs)
Learning actual music. Curated tabs for curriculum songs, reference links for others.

- T1: Simple open-chord songs (Knockin on Heavens Door, Horse With No Name, Wish You Were Here)
- T2: Barre chord songs and basic solos (Santeria, Under the Bridge intro)
- T3: Intermediate solos and fingerstyle (Stairway solo, Little Wing intro, Blackbird)
- T4: Complex pieces (Cliffs of Dover sections, jazz standards, full fingerstyle arrangements)
- T5: Concert-level repertoire, original compositions, sight-reading lead sheets

## Tab Format

Curriculum songs: full ASCII tabs in app data.
Reference songs: metadata + external link, no hosted tab.

## UI

- **Skill Trees page** — each tree is an expandable section with vertical node progression
- Nodes: locked (grey), available (outlined), completed (filled/accent)
- Tap node → description, exercises, tab (if repertoire), mark complete
- Progress bar per tree + overall
- Existing routines become "Quick Practice" accessible from nav

## Data Shape

```js
{
  id: 'technique-vibrato-control',
  tree: 'technique',
  tier: 3,
  name: 'Vibrato Control',
  description: '...',
  whyItMatters: '...',
  prerequisites: ['technique-bending-accuracy'],
  exercises: [...],
  completed: false, // LocalStorage
}
```

## What Changes

- New `curriculum.js` — all 6 trees, ~150-200 nodes
- New `SkillTrees` page with tree visualization
- New `SkillNode` component for node detail
- New `useSkillProgress` hook (LocalStorage)
- Routines page becomes "Quick Practice"
- Nav: add "Skills" link, rename "Routines" to "Quick Practice"
