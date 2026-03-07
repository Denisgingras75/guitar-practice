# Skill Tree Curriculum — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a progressive skill tree curriculum with 6 trees, 5 tiers, ~150 nodes, curated tab library, and self-assessed progression tracking.

**Architecture:** New `curriculum.js` data file with all nodes. `useSkillProgress` hook wraps LocalStorage for completion state. `SkillTrees` page renders trees as expandable tier sections with node cards. `SkillNode` detail view shows exercises, tabs, prereqs. Existing routines page renamed to "Quick Practice".

**Tech Stack:** React 19, React Router 7, CSS Modules, LocalStorage, existing theory engine

**Design doc:** `docs/plans/2026-03-07-skill-tree-curriculum-design.md`

---

## Task 1: useSkillProgress Hook

**Files:**
- Create: `src/hooks/useSkillProgress.js`

**Step 1: Create the hook**

```js
import { useLocalStorage } from './useLocalStorage.js';

export function useSkillProgress() {
  const [completed, setCompleted] = useLocalStorage('skill-progress', {});

  const isCompleted = (nodeId) => !!completed[nodeId];

  const toggleNode = (nodeId) => {
    setCompleted((prev) => {
      const next = { ...prev };
      if (next[nodeId]) {
        delete next[nodeId];
      } else {
        next[nodeId] = Date.now();
      }
      return next;
    });
  };

  const getTreeProgress = (nodes) => {
    const total = nodes.length;
    const done = nodes.filter((n) => completed[n.id]).length;
    return { total, done, percent: total ? Math.round((done / total) * 100) : 0 };
  };

  const getTierProgress = (nodes, tree, tier) => {
    const tierNodes = nodes.filter((n) => n.tree === tree && n.tier === tier);
    return getTreeProgress(tierNodes);
  };

  const arePrereqsMet = (node) => {
    if (!node.prerequisites || node.prerequisites.length === 0) return true;
    return node.prerequisites.every((id) => completed[id]);
  };

  return { isCompleted, toggleNode, getTreeProgress, getTierProgress, arePrereqsMet };
}
```

**Step 2: Commit**

```bash
git add src/hooks/useSkillProgress.js
git commit -m "feat: add useSkillProgress hook for skill tree completion tracking"
```

---

## Task 2: Curriculum Data — Technique Tree

**Files:**
- Create: `src/data/curriculum/technique.js`

Create ~25-30 nodes for the Technique tree across 5 tiers. Each node:
```js
{
  id: 'tech-clean-fretting',
  tree: 'technique',
  tier: 1,
  name: 'Clean Fretting',
  description: 'Every note rings clearly with no buzz or muted strings.',
  whyItMatters: 'Sloppy fretting is the #1 thing that makes beginners sound like beginners. Clean fretting is the foundation everything else sits on.',
  prerequisites: [],
  exercises: [
    { name: 'Fret Check', description: 'Play each fret on each string one at a time. Every note must ring clearly. If it buzzes, adjust finger position (closer to fret wire, more pressure).' },
  ],
  tab: null,
  externalUrl: null,
}
```

**Tier 1 — Foundation:** Clean fretting, alternate picking basics, basic strumming (down/up), open chord shapes (Em Am C G D), chord transitions, basic rhythm (quarter/eighth notes)

**Tier 2 — Developing:** Barre chord F, barre chord Bm, bending (half/whole step), hammer-on, pull-off, basic palm muting, power chords, string muting

**Tier 3 — Intermediate:** Vibrato control, hybrid picking, string skipping, basic sweep (3-string), legato runs, pinch harmonics, slide technique, fingerpicking PIMA

**Tier 4 — Advanced:** Economy picking, advanced legato (multi-string), tapping patterns, tremolo picking, sweep arpeggios (5-string), advanced bending (compound/pre-bend), double stops

**Tier 5 — Mastery:** Two-hand tapping compositions, sweep mastery (all shapes/keys), speed + cleanliness at 180+ BPM, dynamic micro-control (pppp to ffff), any technique on demand in musical context

Full exercise data for every node. 3-4 exercises each.

**Step: Commit**

```bash
git add src/data/curriculum/technique.js
git commit -m "feat: add technique skill tree (30 nodes, 5 tiers)"
```

---

## Task 3: Curriculum Data — Theory Tree

**Files:**
- Create: `src/data/curriculum/theory.js`

~25 nodes.

**Tier 1:** Note names on the staff, major scale formula (WWHWWWH), basic intervals (unison through octave), I-IV-V chords, time signatures (4/4, 3/4)

**Tier 2:** All diatonic chords in major, relative minor, circle of fifths, chord function (tonic/subdominant/dominant), Nashville number system, minor scale types (natural/harmonic/melodic)

**Tier 3:** All 7 modes and their functions, secondary dominants (V/V etc), tritone substitution, chord extensions (9ths 11ths 13ths), borrowed chords

**Tier 4:** Modal interchange, altered dominant theory, chord-scale theory, voice leading principles, negative harmony, diminished and augmented substitution

**Tier 5:** Full reharmonization, composition analysis (form and function), polytonality, advanced arranging (horn section voicings on guitar), writing for ensemble

**Step: Commit**

```bash
git add src/data/curriculum/theory.js
git commit -m "feat: add theory skill tree (25 nodes, 5 tiers)"
```

---

## Task 4: Curriculum Data — Fretboard Tree

**Files:**
- Create: `src/data/curriculum/fretboard.js`

~20 nodes.

**Tier 1:** Open string names, notes on low E and A strings, octave shape (2 strings apart), finding root notes for barre chords

**Tier 2:** All natural notes everywhere, CAGED system overview, pentatonic 5 positions (minor), pentatonic 5 positions (major), relating positions to CAGED shapes

**Tier 3:** 3-note-per-string patterns, connecting positions with slides, intervals across strings, triad shapes across the neck, chord tones within scale positions

**Tier 4:** Single-string (horizontal) scale playing, instant chord tone location in any key, arpeggios in all inversions everywhere, see relative major/minor instantly

**Tier 5:** Complete neck visualization (any scale any position instantly), sight-reading fretboard notation, instant transposition, full arpeggio superimposition

**Step: Commit**

```bash
git add src/data/curriculum/fretboard.js
git commit -m "feat: add fretboard knowledge skill tree (20 nodes, 5 tiers)"
```

---

## Task 5: Curriculum Data — Ear Training Tree

**Files:**
- Create: `src/data/curriculum/ear.js`

~20 nodes.

**Tier 1:** Tuning by ear (5th fret method), hearing major vs minor chords, singing root of a chord, matching pitch vocally

**Tier 2:** Ascending interval recognition (all), major/minor/dom7 chord quality ID, simple melody transcription, hearing the bass note in a chord

**Tier 3:** Descending interval recognition, extended chord quality (maj7/min7/dim/aug), transcribe a guitar solo by ear, hearing chord progressions (I-IV-V-vi etc)

**Tier 4:** Hearing extensions (9/11/13), recognizing modes by ear, relative pitch fluency (sing any interval), transcribing full arrangements

**Tier 5:** Instant transcription (hear it → play it), hearing voice leading in real time, identifying complex reharmonization by ear, perfect relative pitch

**Step: Commit**

```bash
git add src/data/curriculum/ear.js
git commit -m "feat: add ear training skill tree (20 nodes, 5 tiers)"
```

---

## Task 6: Curriculum Data — Creativity Tree

**Files:**
- Create: `src/data/curriculum/creativity.js`

~20 nodes.

**Tier 1:** Pentatonic improv over a backing track, write a 4-chord progression, record yourself and listen back, practice playing with dynamics (loud/soft)

**Tier 2:** Call and response soloing, writing a vocal melody over chords, song structure (verse/chorus/bridge), rhythm guitar creativity (beyond strumming)

**Tier 3:** Motivic development (build a solo from 3 notes), writing in different feels (shuffle/swing/straight), arranging a song for solo guitar, using space/silence as a tool

**Tier 4:** Style blending (mix 2 genres), composing with modes and borrowed chords, writing for guitar + other instruments, developing a personal lick vocabulary

**Tier 5:** Identifiable personal voice, complex composition (odd meters/key changes), spontaneous arrangement of any song, teaching/communicating musical ideas

**Step: Commit**

```bash
git add src/data/curriculum/creativity.js
git commit -m "feat: add creativity skill tree (20 nodes, 5 tiers)"
```

---

## Task 7: Curriculum Data — Repertoire Tree (with Tabs)

**Files:**
- Create: `src/data/curriculum/repertoire.js`

~25 nodes. Each node is a song or song category. Curriculum songs include full ASCII tab. Reference songs include metadata + external link.

**Tier 1 (Curriculum tabs):** Horse With No Name, Knockin on Heavens Door, Wish You Were Here, Wonderwall, Good Riddance

**Tier 2 (Curriculum tabs):** Santeria (solo), Under the Bridge (intro), Californication, Smoke on the Water (full), Come As You Are

**Tier 3 (Mix):** Blackbird (tab), Little Wing intro (tab), Stairway solo (tab), Hotel California solo (reference), Sultans of Swing (reference)

**Tier 4 (Mix):** Classical Gas (tab), Cliffs of Dover main riff (tab), Autumn Leaves jazz (reference), Eruption (reference)

**Tier 5 (Reference):** Concert repertoire building, original composition portfolio, sight-reading lead sheets, full arrangement performance

**Step: Commit**

```bash
git add src/data/curriculum/repertoire.js
git commit -m "feat: add repertoire skill tree with curated tabs (25 nodes, 5 tiers)"
```

---

## Task 8: Curriculum Index File

**Files:**
- Create: `src/data/curriculum/index.js`

```js
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
```

**Step: Commit**

```bash
git add src/data/curriculum/index.js
git commit -m "feat: add curriculum index aggregating all 6 skill trees"
```

---

## Task 9: SkillTrees Page

**Files:**
- Create: `src/pages/SkillTrees.jsx`
- Create: `src/pages/SkillTrees.module.css`

Page layout:
- Page heading "Skill Trees" with overall progress stat
- 6 expandable tree sections, each showing:
  - Tree name, description, progress bar (X/Y nodes, N%)
  - When expanded: 5 tier subsections
  - Each tier: tier name, tier progress, list of node cards
- Node card shows: name, status icon (locked/available/completed), description preview
- Clicking a node opens inline detail (not a separate route — keep it simple)

Node states:
- **Locked** (grey, dimmed) — prerequisites not met
- **Available** (outlined border, accent color) — prereqs met, not completed
- **Completed** (filled accent background) — user marked done

CSS: dark theme consistent with rest of app. Progress bars use `var(--accent)`. Tier sections have subtle left border colors matching the timeline colors from routines page.

**Step: Commit**

```bash
git add src/pages/SkillTrees.jsx src/pages/SkillTrees.module.css
git commit -m "feat: add SkillTrees page with expandable trees, tiers, and node cards"
```

---

## Task 10: SkillNode Detail Component

**Files:**
- Create: `src/components/SkillNode.jsx`
- Create: `src/components/SkillNode.module.css`

Inline detail panel that shows when a node is tapped:
- Full description + "Why it matters"
- Prerequisites list (with completion status of each)
- Exercises list (reuses existing exercise display style)
- Tab display (if repertoire node with tab data) — monospace pre-formatted block
- External link button (if externalUrl present)
- "Mark Complete" / "Mark Incomplete" toggle button
- "Practice This" button (launches PracticeTimer)

**Step: Commit**

```bash
git add src/components/SkillNode.jsx src/components/SkillNode.module.css
git commit -m "feat: add SkillNode detail component with exercises, tabs, and completion toggle"
```

---

## Task 11: Wire Up Routes and Navigation

**Files:**
- Modify: `src/App.jsx` — add SkillTrees route at `/skills`
- Modify: `src/components/CategoryNav.jsx` — add "Skills" link, rename "Routines" link to "Practice"
- Modify: `src/pages/Home.jsx` — add Skills to categories grid, update Routines description

Route: `/skills` → `<SkillTrees />`

Nav order: Home | Skills | Practice | Scales | Modes | Chords | Techniques | Artists | Tuner

Home categories: add Skills card at top with description "6 skill trees from foundation to mastery"

**Step: Commit**

```bash
git add src/App.jsx src/components/CategoryNav.jsx src/pages/Home.jsx
git commit -m "feat: wire up skill trees route and navigation"
```

---

## Task 12: Build, Test, Deploy

**Step 1: Build**

```bash
npm run build
```

Expected: clean build, no errors.

**Step 2: Run tests**

```bash
npm test
```

Expected: all existing tests pass.

**Step 3: Deploy**

```bash
npx vercel --prod
```

**Step 4: Commit all remaining changes**

```bash
git add -A
git commit -m "feat: complete skill tree curriculum — 6 trees, ~150 nodes, tabs, progression tracking"
```
