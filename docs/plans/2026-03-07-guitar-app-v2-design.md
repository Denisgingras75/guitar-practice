# Guitar Practice App v2 Design

**Goal:** Add song chart system (Nashville-style lead sheets with builder), YouTube video curation across all skill nodes, and a built-in metronome.

**Architecture:** All client-side. Charts stored in localStorage. No backend, no API keys. YouTube links are static (curated) + search URL fallback. Metronome uses Web Audio API (same stack as tuner).

**Tech:** Vite + React 19, CSS Modules, Web Audio API, localStorage.

---

## Feature 1: Song Chart System

### Chart Syntax

```
@title Midnight Drive
@key Am
@tempo 120
@feel Driving Rock

[A] Verse
||: Am | F | C | G :|| x4

[B] Chorus
||: F | C | G | Am / G :|| x2

[C] Bridge
| Dm | F | Am | G |
| Dm | F | G | % |

@structure A B A B C B
```

### Parser

Converts text to structured data:

```js
{
  title: 'Midnight Drive',
  key: 'Am',
  tempo: 120,
  feel: 'Driving Rock',
  sections: [
    {
      id: 'A',
      name: 'Verse',
      repeat: 4,
      bars: [
        { chords: ['Am'] },
        { chords: ['F'] },
        { chords: ['C'] },
        { chords: ['G'] },
      ],
    },
    // ...
  ],
  structure: ['A', 'B', 'A', 'B', 'C', 'B'],
}
```

Bar with `/` split: `{ chords: ['Am', 'G'] }` (2 chords = split bar).
Simile `%`: `{ simile: true }` (renderer shows % and inherits previous bar's chords).

### Renderer

- Section headers with letter badges (A, B, C)
- Chord bars in a 4-column grid (standard 4 bars per line)
- Repeat brackets with `x4` notation
- Split bars visually divided
- Key/tempo/feel in styled header
- Structure roadmap at bottom

### Chart Builder Page (`/charts`)

- List view: all charts (starter + user-created), searchable by title/key/artist
- Chart view: full rendered chart
- Builder view: text editor (left) + live preview (right), stacked on mobile
- User charts: create, edit, delete (localStorage key: `song-charts`)
- Starter library: read-only, baked into `src/data/charts.js`

### Starter Library (~25 songs)

- Goose: Hungersite, Arcadia, Tumble
- Sturgill Simpson: Turtles All The Way Down, Living the Dream, In Bloom
- Led Zeppelin: Black Dog, Going to California, The Ocean
- Tracy Chapman: Fast Car, Give Me One Reason, Talkin' Bout a Revolution
- Psychedelic Porn Crumpets: Found God in a Tomato, Cornflake
- Blues: The Thrill Is Gone, Pride and Joy, Red House
- Classic: Wish You Were Here, Blackbird, Little Wing, Comfortably Numb

---

## Feature 2: YouTube Video Curation

### Curated Links

Add `videos` array to skill node data shape:

```js
videos: [
  { title: 'Ben Eller - Vibrato Masterclass', channel: 'Ben Eller', url: '...' },
]
```

2-3 videos per node. Priority channels: Justin Guitar, Ben Eller, Paul Davids, Marty Music, Rick Beato, Signals Music Studio, Adam Neely.

### "Find More" Button

Opens YouTube search in new tab: `https://www.youtube.com/results?search_query=guitar+{skill name}+tutorial`

Zero API cost, always fresh.

### Videos on Charts

Each chart gets optional `videos` array for performance/tutorial references.

### UI

New "Videos" section in SkillNode component. Compact link list (channel + title). "Find More on YouTube" button below.

---

## Feature 3: Built-in Metronome

### Page: `/metronome`

### Controls
- BPM slider (30-250) + manual input
- Tap tempo (averages last 4 taps)
- Time signature: 4/4, 3/4, 6/8
- Subdivision: quarter, eighth, triplet, sixteenth
- Accent on beat 1 toggle

### Audio
- Web Audio API OscillatorNode
- High pitch click on beat 1, lower on other beats
- Same AudioContext pattern as tuner

### Visual
- Beat indicator dots, current beat highlighted
- Large BPM display

### Integration
- Exercises with `bpm` field get "Open Metronome" link → `/metronome?bpm=80`
- Nav + home grid updated (11 items total)

---

## Navigation Update

Add Charts and Metronome to:
- `CategoryNav.jsx` links array
- `Home.jsx` categories array
- `App.jsx` routes
