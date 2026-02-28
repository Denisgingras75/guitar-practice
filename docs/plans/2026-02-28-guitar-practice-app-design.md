# Guitar Practice App — Design

## Summary
Personal guitar practice app. Responsive web (phone + laptop). Pre-loaded with standard guitar theory. Browse-and-pick practice model. Rich media per topic.

## Decisions
- **Audience:** Just Denis
- **Platform:** Responsive web app (phone + laptop equally)
- **Core need:** Structured practice library, not an AI coach
- **Content:** Pre-loaded with standard theory, customizable
- **Practice model:** Browse categories, pick what to work on
- **Media:** YouTube embeds + personal recordings + fretboard diagrams + tab
- **Architecture:** Static site + PWA. Vite + React. JSON data. LocalStorage. No backend.

## Architecture
```
guitar-practice/
├── src/
│   ├── data/           # All guitar content as JSON
│   │   ├── scales.json
│   │   ├── modes.json
│   │   ├── chords.json
│   │   ├── techniques.json
│   │   └── references.json
│   ├── components/
│   │   ├── Fretboard.jsx     # SVG fretboard renderer
│   │   ├── ScaleCard.jsx     # Scale/mode display with diagram
│   │   ├── VideoEmbed.jsx    # YouTube + local recordings
│   │   ├── PracticeLog.jsx   # Track sessions
│   │   └── CategoryNav.jsx   # Browse by type
│   └── pages/
│       ├── Home.jsx          # Dashboard
│       ├── Scales.jsx
│       ├── Modes.jsx
│       ├── Chords.jsx
│       ├── Techniques.jsx
│       └── Practice.jsx      # Active session view
```

## Content Structure
```json
{
  "id": "pentatonic-minor",
  "name": "Minor Pentatonic",
  "category": "scales",
  "positions": [1, 2, 3, 4, 5],
  "fretboard": { "root": "A", "frets": [[5,8], [5,7]] },
  "description": "The foundation of blues and rock soloing",
  "videos": [
    { "type": "youtube", "url": "...", "title": "..." },
    { "type": "recording", "url": "...", "date": "..." }
  ],
  "tags": ["blues", "rock", "beginner", "essential"]
}
```

## Pre-loaded Content
- **Scales:** Major, minor, pentatonic, blues, harmonic/melodic minor, chromatic — all positions, all keys
- **Modes:** All 7 — characteristic notes, parent scales, backing track suggestions
- **Chords:** Open, barre, 7ths, 9ths, sus, dim, aug — CAGED positions
- **Techniques:** Bending, vibrato, hammer-on/pull-off, slides, tapping, sweep, hybrid picking, palm mute, harmonics

## Fretboard Renderer
SVG-based. Shows any scale/chord. Highlights roots and intervals. Toggle positions. Switch note names vs interval numbers.

## Practice Flow
1. Open → see categories
2. Tap category → browse library
3. Tap topic → fretboard diagram, description, videos, notes
4. "Practice This" → session timer, logs it
5. Done → logged to LocalStorage history

## PWA
Service worker caches JSON + app shell. Offline capable. Installable.
