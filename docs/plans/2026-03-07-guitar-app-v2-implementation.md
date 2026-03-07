# Guitar Practice App v2 Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add Nashville-style song chart system with parser/renderer/builder, YouTube video curation on skill nodes, and a built-in Web Audio metronome.

**Architecture:** All client-side React. Chart parser converts a simple text syntax into structured data rendered by a chart component. Charts stored in localStorage via existing `useLocalStorage` hook. Metronome uses Web Audio API OscillatorNode (same pattern as `useTuner.js`). YouTube links are static data on skill nodes + search URL fallback.

**Tech Stack:** React 19, Vite, CSS Modules, Web Audio API, localStorage

---

### Task 1: Chart Parser (`parseChart`)

**Files:**
- Create: `src/utils/chartParser.js`

**Context:** This is the core engine. It converts the Nashville-style text syntax into structured JSON that the renderer will consume. The syntax supports `@title`, `@key`, `@tempo`, `@feel`, `@structure` metadata, `[A] Section Name` headers, `||:` and `:||` repeat brackets with `xN`, bar lines `|`, split bars with `/`, and simile `%`.

**Step 1: Create the parser**

```js
// src/utils/chartParser.js

export function parseChart(text) {
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  const meta = { title: '', key: '', tempo: '', feel: '' };
  const sections = [];
  let structure = [];
  let currentSection = null;

  for (const line of lines) {
    // Metadata lines
    if (line.startsWith('@title ')) { meta.title = line.slice(7).trim(); continue; }
    if (line.startsWith('@key ')) { meta.key = line.slice(5).trim(); continue; }
    if (line.startsWith('@tempo ')) { meta.tempo = line.slice(7).trim(); continue; }
    if (line.startsWith('@feel ')) { meta.feel = line.slice(6).trim(); continue; }
    if (line.startsWith('@structure ')) {
      structure = line.slice(11).trim().split(/\s+/);
      continue;
    }

    // Section header: [A] Verse
    const sectionMatch = line.match(/^\[([A-Z])\]\s*(.*)$/);
    if (sectionMatch) {
      currentSection = { id: sectionMatch[1], name: sectionMatch[2] || sectionMatch[1], repeat: 1, bars: [] };
      sections.push(currentSection);
      continue;
    }

    // Bar line: ||: Am | F | C | G :|| x4
    if (currentSection && line.includes('|')) {
      let barLine = line;
      let repeat = 1;

      // Check for repeat markers
      const hasRepeatStart = barLine.includes('||:');
      const repeatEnd = barLine.match(/:?\|\|?\s*x(\d+)/);
      if (repeatEnd) {
        repeat = parseInt(repeatEnd[1], 10);
        currentSection.repeat = repeat;
      }

      // Clean up repeat markers and extract chords
      barLine = barLine.replace(/\|\|:/g, '|').replace(/:?\|\|?\s*x\d+/g, '|').replace(/:?\|\|/g, '|');

      // Split into bars
      const parts = barLine.split('|').map(p => p.trim()).filter(Boolean);
      for (const part of parts) {
        if (part === '%') {
          currentSection.bars.push({ simile: true, chords: [] });
        } else {
          const chords = part.split('/').map(c => c.trim()).filter(Boolean);
          currentSection.bars.push({ simile: false, chords });
        }
      }
    }
  }

  return { ...meta, sections, structure };
}

export function chartToText(chart) {
  let text = '';
  if (chart.title) text += `@title ${chart.title}\n`;
  if (chart.key) text += `@key ${chart.key}\n`;
  if (chart.tempo) text += `@tempo ${chart.tempo}\n`;
  if (chart.feel) text += `@feel ${chart.feel}\n`;
  text += '\n';

  for (const section of chart.sections) {
    text += `[${section.id}] ${section.name}\n`;
    const barStrings = section.bars.map(bar =>
      bar.simile ? '%' : bar.chords.join(' / ')
    );
    // Group into rows of 4
    const rows = [];
    for (let i = 0; i < barStrings.length; i += 4) {
      rows.push(barStrings.slice(i, i + 4));
    }
    for (const row of rows) {
      const repeatStart = section.repeat > 1 ? '||: ' : '| ';
      const repeatEnd = section.repeat > 1 ? ` :|| x${section.repeat}` : ' |';
      text += repeatStart + row.join(' | ') + repeatEnd + '\n';
    }
    text += '\n';
  }

  if (chart.structure.length > 0) {
    text += `@structure ${chart.structure.join(' ')}\n`;
  }
  return text;
}
```

**Step 2: Verify it works**

Run: `node -e "import {parseChart} from './src/utils/chartParser.js'; const c = parseChart('@title Test\n@key Am\n@tempo 120\n@feel Rock\n\n[A] Verse\n||: Am | F | C | G :|| x4\n\n@structure A A'); console.log(JSON.stringify(c, null, 2))"`

Expected: JSON output with title "Test", one section "A" with 4 bars and repeat 4, structure ["A","A"].

**Step 3: Commit**

```bash
git add src/utils/chartParser.js
git commit -m "feat: add chart parser and serializer for Nashville-style chord charts"
```

---

### Task 2: Starter Chart Library

**Files:**
- Create: `src/data/charts.js`

**Context:** ~25 Nashville-style chord charts baked into the app. Each chart is stored as the text syntax string so it can be rendered via the parser AND edited in the builder. Songs span Denis's taste: Goose, Sturgill Simpson, Led Zeppelin, Tracy Chapman, Psychedelic Porn Crumpets, blues classics, and rock staples.

**Step 1: Create the chart data file**

Create `src/data/charts.js` with this structure for each song:

```js
export const STARTER_CHARTS = [
  {
    id: 'fast-car',
    artist: 'Tracy Chapman',
    genre: 'folk',
    text: `@title Fast Car
@key C
@tempo 104
@feel Fingerpicking Folk

[A] Intro/Verse
||: C | G | Em | D :|| x4

[B] Chorus
| C | G | Em | D |
| C | G | Em | D |

@structure A B A B A B`,
  },
  // ... 24 more songs
];
```

Include these songs (research accurate chord progressions):

**Goose:** Hungersite, Arcadia, Tumble
**Sturgill Simpson:** Turtles All The Way Down, Living the Dream, In Bloom (cover)
**Led Zeppelin:** Black Dog, Going to California, The Ocean
**Tracy Chapman:** Fast Car, Give Me One Reason, Talkin Bout a Revolution
**Psychedelic Porn Crumpets:** Found God in a Tomato, Cornflake
**Blues:** The Thrill Is Gone (BB King), Pride and Joy (SRV), Red House (Hendrix)
**Classics:** Wish You Were Here (Pink Floyd), Blackbird (Beatles), Little Wing (Hendrix), Comfortably Numb (Pink Floyd)
**Extra:** House of the Rising Sun (Animals), Have You Ever Seen the Rain (CCR), Sittin on the Dock of the Bay (Otis Redding)

Each chart must have accurate key, tempo, feel, sections (verse/chorus/bridge/solo/etc), and structure. Use Nashville chart conventions: `%` for simile, `/` for split bars, `||: :||` for repeats.

**Step 2: Verify**

```bash
node -e "import {STARTER_CHARTS} from './src/data/charts.js'; console.log(STARTER_CHARTS.length + ' charts loaded'); STARTER_CHARTS.forEach(c => console.log('  ' + c.id + ' - ' + c.artist))"
```

Expected: 25 charts listed.

**Step 3: Commit**

```bash
git add src/data/charts.js
git commit -m "feat: add 25 starter song charts (Goose, Sturgill, Zeppelin, Tracy Chapman, blues, classics)"
```

---

### Task 3: Chart Renderer Component

**Files:**
- Create: `src/components/ChartRenderer.jsx`
- Create: `src/components/ChartRenderer.module.css`

**Context:** Takes parsed chart data and renders a beautiful Nashville-style chart. Dark theme consistent with the app (`--bg-card`, `--accent`, `--border`, etc). Section headers have letter badges. Bars displayed in a 4-column grid. Repeat brackets, split bars, and simile marks all visually distinct.

**Step 1: Create the renderer component**

```jsx
// src/components/ChartRenderer.jsx
import { parseChart } from '../utils/chartParser.js';
import styles from './ChartRenderer.module.css';

export default function ChartRenderer({ text }) {
  const chart = parseChart(text);

  return (
    <div className={styles.chart}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>{chart.title}</h2>
        <div className={styles.metaRow}>
          {chart.key && <span className={styles.metaBadge}>Key: {chart.key}</span>}
          {chart.tempo && <span className={styles.metaBadge}>{chart.tempo} BPM</span>}
          {chart.feel && <span className={styles.metaFeel}>{chart.feel}</span>}
        </div>
      </div>

      {/* Sections */}
      {chart.sections.map((section) => (
        <div key={section.id} className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>{section.id}</span>
            <span className={styles.sectionName}>{section.name}</span>
            {section.repeat > 1 && (
              <span className={styles.repeatBadge}>x{section.repeat}</span>
            )}
          </div>
          <div className={styles.barGrid}>
            {section.bars.map((bar, i) => (
              <div
                key={i}
                className={`${styles.bar} ${bar.simile ? styles.barSimile : ''} ${bar.chords.length > 1 ? styles.barSplit : ''}`}
              >
                {bar.simile ? (
                  <span className={styles.simile}>%</span>
                ) : bar.chords.length > 1 ? (
                  <div className={styles.splitBar}>
                    {bar.chords.map((chord, j) => (
                      <span key={j} className={styles.splitChord}>{chord}</span>
                    ))}
                  </div>
                ) : (
                  <span className={styles.chord}>{bar.chords[0]}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Structure */}
      {chart.structure.length > 0 && (
        <div className={styles.structure}>
          <span className={styles.structureLabel}>Structure</span>
          <div className={styles.structureList}>
            {chart.structure.map((id, i) => {
              const sec = chart.sections.find(s => s.id === id);
              return (
                <span key={i} className={styles.structureItem}>
                  <span className={styles.structureItemBadge}>{id}</span>
                  {sec && <span className={styles.structureItemName}>{sec.name}</span>}
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
```

**Step 2: Create the CSS module**

```css
/* src/components/ChartRenderer.module.css */
.chart {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
}

.header {
  margin-bottom: 1.25rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border);
}

.title {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--fg);
  margin: 0 0 0.5rem;
}

.metaRow {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
}

.metaBadge {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 2px 10px;
  border-radius: 99px;
  border: 1px solid var(--accent);
  color: var(--accent);
  background: var(--accent-glow);
}

.metaFeel {
  font-size: 0.8rem;
  color: var(--fg-muted);
  font-style: italic;
}

/* Sections */
.section {
  margin-bottom: 1.25rem;
}

.sectionHeader {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.sectionBadge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--accent);
  color: #0a0a0a;
  font-size: 0.7rem;
  font-weight: 800;
  flex-shrink: 0;
}

.sectionName {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--fg);
}

.repeatBadge {
  font-size: 0.65rem;
  font-weight: 700;
  color: var(--accent);
  border: 1px solid var(--accent);
  border-radius: 99px;
  padding: 1px 8px;
}

/* Bar Grid */
.barGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
}

.bar {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 0.5rem;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  min-height: 44px;
}

.chord {
  font-size: 1rem;
  font-weight: 700;
  color: var(--fg);
  font-family: var(--font-mono);
}

/* Split bars */
.barSplit {
  padding: 0;
}

.splitBar {
  display: flex;
  width: 100%;
  height: 100%;
}

.splitChord {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--fg);
  font-family: var(--font-mono);
  padding: 0.6rem 0.25rem;
}

.splitChord + .splitChord {
  border-left: 1px dashed var(--fg-dim);
}

/* Simile */
.barSimile {
  opacity: 0.5;
}

.simile {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--fg-dim);
  font-family: var(--font-mono);
}

/* Structure */
.structure {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
}

.structureLabel {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--fg-muted);
  display: block;
  margin-bottom: 0.5rem;
}

.structureList {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.structureItem {
  display: flex;
  align-items: center;
  gap: 4px;
}

.structureItemBadge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--bg-hover);
  border: 1px solid var(--border);
  color: var(--accent);
  font-size: 0.6rem;
  font-weight: 800;
}

.structureItemName {
  font-size: 0.75rem;
  color: var(--fg-dim);
}

/* Responsive */
@media (max-width: 480px) {
  .barGrid {
    grid-template-columns: repeat(2, 1fr);
  }
  .chart {
    padding: 1rem;
  }
}
```

**Step 3: Commit**

```bash
git add src/components/ChartRenderer.jsx src/components/ChartRenderer.module.css
git commit -m "feat: add ChartRenderer component for Nashville-style chord charts"
```

---

### Task 4: Charts Page with List, View, and Builder

**Files:**
- Create: `src/pages/Charts.jsx`
- Create: `src/pages/Charts.module.css`

**Context:** The main charts page at `/charts`. Three views: list (all charts, searchable), view (single chart rendered), and builder (text editor + live preview). User charts stored in localStorage via `useLocalStorage` hook (key: `user-charts`). Starter library imported from `src/data/charts.js`.

**Step 1: Create the Charts page**

```jsx
// src/pages/Charts.jsx
import { useState } from 'react';
import { STARTER_CHARTS } from '../data/charts.js';
import { useLocalStorage } from '../hooks/useLocalStorage.js';
import ChartRenderer from '../components/ChartRenderer.jsx';
import styles from './Charts.module.css';

const EMPTY_CHART = `@title New Song
@key C
@tempo 120
@feel Rock

[A] Verse
| C | G | Am | F |

[B] Chorus
| F | G | C | Am |

@structure A A B A B`;

export default function Charts() {
  const [userCharts, setUserCharts] = useLocalStorage('user-charts', []);
  const [view, setView] = useState('list'); // 'list' | 'view' | 'edit'
  const [activeChart, setActiveChart] = useState(null);
  const [editText, setEditText] = useState('');
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState('');

  const allCharts = [
    ...STARTER_CHARTS.map(c => ({ ...c, source: 'starter' })),
    ...userCharts.map(c => ({ ...c, source: 'user' })),
  ];

  const filtered = allCharts.filter(c => {
    const q = search.toLowerCase();
    if (!q) return true;
    const text = c.text.toLowerCase();
    const artist = (c.artist || '').toLowerCase();
    const genre = (c.genre || '').toLowerCase();
    return text.includes(q) || artist.includes(q) || genre.includes(q) || c.id.includes(q);
  });

  const openChart = (chart) => {
    setActiveChart(chart);
    setView('view');
  };

  const openBuilder = (chart) => {
    if (chart) {
      setEditText(chart.text);
      setEditId(chart.id);
    } else {
      setEditText(EMPTY_CHART);
      setEditId(null);
    }
    setView('edit');
  };

  const saveChart = () => {
    const id = editId || 'user-' + Date.now();
    const newChart = { id, text: editText, artist: '', genre: '' };
    // Extract artist from text if present (from @artist line or just leave blank)
    if (editId) {
      setUserCharts(userCharts.map(c => c.id === editId ? { ...c, text: editText } : c));
    } else {
      setUserCharts([...userCharts, newChart]);
    }
    setView('list');
  };

  const deleteChart = (id) => {
    setUserCharts(userCharts.filter(c => c.id !== id));
    setView('list');
  };

  // === LIST VIEW ===
  if (view === 'list') {
    return (
      <div className={styles.page}>
        <div className={styles.headerRow}>
          <h2 className={styles.heading}>Song Charts</h2>
          <button className={styles.newBtn} onClick={() => openBuilder(null)}>+ New Chart</button>
        </div>

        <input
          className={styles.search}
          type="text"
          placeholder="Search by song, artist, key, genre..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className={styles.chartList}>
          {filtered.map((chart) => {
            // Extract title from text
            const titleMatch = chart.text.match(/@title\s+(.+)/);
            const keyMatch = chart.text.match(/@key\s+(.+)/);
            const title = titleMatch ? titleMatch[1] : chart.id;
            const key = keyMatch ? keyMatch[1] : '';

            return (
              <button key={chart.id} className={styles.chartCard} onClick={() => openChart(chart)}>
                <div className={styles.chartCardInfo}>
                  <span className={styles.chartTitle}>{title}</span>
                  {chart.artist && <span className={styles.chartArtist}>{chart.artist}</span>}
                </div>
                <div className={styles.chartCardMeta}>
                  {key && <span className={styles.keyBadge}>{key}</span>}
                  {chart.source === 'user' && <span className={styles.userBadge}>Mine</span>}
                </div>
              </button>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className={styles.empty}>No charts match your search.</p>
        )}
      </div>
    );
  }

  // === VIEW MODE ===
  if (view === 'view' && activeChart) {
    return (
      <div className={styles.page}>
        <div className={styles.viewHeader}>
          <button className={styles.backBtn} onClick={() => setView('list')}>&larr; All Charts</button>
          <div className={styles.viewActions}>
            {activeChart.source === 'user' && (
              <>
                <button className={styles.editBtn} onClick={() => openBuilder(activeChart)}>Edit</button>
                <button className={styles.deleteBtn} onClick={() => deleteChart(activeChart.id)}>Delete</button>
              </>
            )}
          </div>
        </div>
        {activeChart.artist && <p className={styles.viewArtist}>{activeChart.artist}</p>}
        <ChartRenderer text={activeChart.text} />
        {activeChart.videos && activeChart.videos.length > 0 && (
          <div className={styles.videosSection}>
            <h3 className={styles.videosHeading}>Videos</h3>
            {activeChart.videos.map((v, i) => (
              <a key={i} href={v.url} target="_blank" rel="noopener noreferrer" className={styles.videoLink}>
                <span className={styles.videoChannel}>{v.channel}</span>
                <span className={styles.videoTitle}>{v.title}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }

  // === EDIT / BUILD MODE ===
  return (
    <div className={styles.page}>
      <div className={styles.viewHeader}>
        <button className={styles.backBtn} onClick={() => setView('list')}>&larr; Back</button>
        <button className={styles.saveBtn} onClick={saveChart}>Save Chart</button>
      </div>

      <div className={styles.builder}>
        <div className={styles.editorPane}>
          <textarea
            className={styles.editor}
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            spellCheck={false}
            placeholder="Type your chart here..."
          />
        </div>
        <div className={styles.previewPane}>
          <ChartRenderer text={editText} />
        </div>
      </div>
    </div>
  );
}
```

**Step 2: Create the CSS module**

Create `src/pages/Charts.module.css` with styles for all three views:

- `.page` — max-width 900px, margin auto (same as other pages)
- `.headerRow` — flex between heading and new button
- `.search` — full-width input, dark theme, border, rounded
- `.chartList` — flex column, gap 0.5rem
- `.chartCard` — flex row, bg-card, border, hover state, clickable
- `.builder` — 2-column grid on desktop (editor left, preview right), stacked on mobile
- `.editor` — monospace textarea, full height, dark bg, no resize
- `.previewPane` — overflow auto
- `.viewHeader` — flex between back button and action buttons
- All buttons styled consistent with app theme (accent color, dark bg)
- Badge styles (keyBadge, userBadge) matching existing badge patterns

Use existing CSS custom properties: `--bg`, `--bg-card`, `--border`, `--fg`, `--fg-muted`, `--accent`, `--radius`, `--font-mono`.

**Step 3: Verify**

Run: `npx vite build 2>&1 | tail -5`
Expected: Build succeeds.

**Step 4: Commit**

```bash
git add src/pages/Charts.jsx src/pages/Charts.module.css
git commit -m "feat: add Charts page with list, view, and builder modes"
```

---

### Task 5: Metronome Hook (`useMetronome`)

**Files:**
- Create: `src/hooks/useMetronome.js`

**Context:** Web Audio API metronome. Same `AudioContext` pattern as `src/hooks/useTuner.js` (reference that file for how the app handles audio). Uses `OscillatorNode` for click sounds — high frequency (1000Hz) for accent beat 1, lower (800Hz) for other beats. Scheduling uses `setInterval` with lookahead for timing accuracy.

**Step 1: Create the hook**

```js
// src/hooks/useMetronome.js
import { useState, useRef, useCallback } from 'react';

export function useMetronome() {
  const [playing, setPlaying] = useState(false);
  const [bpm, setBpm] = useState(120);
  const [timeSignature, setTimeSignature] = useState(4); // beats per measure
  const [currentBeat, setCurrentBeat] = useState(0);
  const [subdivision, setSubdivision] = useState(1); // 1=quarter, 2=eighth, 3=triplet, 4=sixteenth
  const [accentBeat1, setAccentBeat1] = useState(true);

  const audioCtxRef = useRef(null);
  const intervalRef = useRef(null);
  const beatRef = useRef(0);

  const playClick = useCallback((accent) => {
    const ctx = audioCtxRef.current;
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = accent ? 1000 : 800;
    gain.gain.value = accent ? 0.5 : 0.3;
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.05);
  }, []);

  const start = useCallback(() => {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    audioCtxRef.current = ctx;
    beatRef.current = 0;

    const totalClicks = timeSignature * subdivision;
    const msPerClick = (60000 / bpm) / subdivision;

    intervalRef.current = setInterval(() => {
      const isMainBeat = beatRef.current % subdivision === 0;
      const mainBeatNum = Math.floor(beatRef.current / subdivision);
      const isAccent = accentBeat1 && mainBeatNum === 0 && isMainBeat;
      playClick(isAccent);
      if (isMainBeat) {
        setCurrentBeat(mainBeatNum);
      }
      beatRef.current = (beatRef.current + 1) % totalClicks;
    }, msPerClick);

    setPlaying(true);
  }, [bpm, timeSignature, subdivision, accentBeat1, playClick]);

  const stop = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (audioCtxRef.current) audioCtxRef.current.close();
    audioCtxRef.current = null;
    setPlaying(false);
    setCurrentBeat(0);
  }, []);

  // Restart if params change while playing
  const restart = useCallback(() => {
    stop();
    // Use setTimeout to avoid overlapping audio contexts
    setTimeout(() => start(), 50);
  }, [stop, start]);

  // Tap tempo
  const tapTimesRef = useRef([]);
  const tapTempo = useCallback(() => {
    const now = Date.now();
    tapTimesRef.current.push(now);
    // Keep last 5 taps
    if (tapTimesRef.current.length > 5) tapTimesRef.current.shift();
    if (tapTimesRef.current.length >= 2) {
      const taps = tapTimesRef.current;
      const intervals = [];
      for (let i = 1; i < taps.length; i++) {
        intervals.push(taps[i] - taps[i - 1]);
      }
      const avg = intervals.reduce((a, b) => a + b, 0) / intervals.length;
      const newBpm = Math.round(60000 / avg);
      if (newBpm >= 30 && newBpm <= 250) setBpm(newBpm);
    }
    // Reset if gap > 2 seconds
    if (tapTimesRef.current.length >= 2) {
      const last = tapTimesRef.current[tapTimesRef.current.length - 1];
      const prev = tapTimesRef.current[tapTimesRef.current.length - 2];
      if (last - prev > 2000) tapTimesRef.current = [now];
    }
  }, []);

  return {
    playing, bpm, setBpm, timeSignature, setTimeSignature,
    subdivision, setSubdivision, accentBeat1, setAccentBeat1,
    currentBeat, start, stop, restart, tapTempo,
  };
}
```

**Step 2: Verify**

Run: `npx vite build 2>&1 | tail -5`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/hooks/useMetronome.js
git commit -m "feat: add useMetronome hook with Web Audio click, tap tempo, subdivisions"
```

---

### Task 6: Metronome Page

**Files:**
- Create: `src/pages/Metronome.jsx`
- Create: `src/pages/Metronome.module.css`

**Context:** The metronome UI at `/metronome`. Large BPM display, slider, tap tempo button, beat indicator dots, time signature and subdivision selectors. Reads `?bpm=N` from URL search params so routine exercises can deep-link to a specific tempo. Visual style matches the tuner page: centered, minimal, functional. Reference `src/pages/Tuner.jsx` and `src/pages/Tuner.module.css` for visual consistency.

**Step 1: Create the Metronome page**

```jsx
// src/pages/Metronome.jsx
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useMetronome } from '../hooks/useMetronome.js';
import styles from './Metronome.module.css';

const SUBDIVISIONS = [
  { value: 1, label: 'Quarter' },
  { value: 2, label: 'Eighth' },
  { value: 3, label: 'Triplet' },
  { value: 4, label: '16th' },
];

const TIME_SIGS = [
  { value: 4, label: '4/4' },
  { value: 3, label: '3/4' },
  { value: 6, label: '6/8' },
];

export default function Metronome() {
  const [searchParams] = useSearchParams();
  const {
    playing, bpm, setBpm, timeSignature, setTimeSignature,
    subdivision, setSubdivision, accentBeat1, setAccentBeat1,
    currentBeat, start, stop, restart, tapTempo,
  } = useMetronome();

  // Read BPM from URL param on mount
  useEffect(() => {
    const urlBpm = searchParams.get('bpm');
    if (urlBpm) {
      const parsed = parseInt(urlBpm, 10);
      if (parsed >= 30 && parsed <= 250) setBpm(parsed);
    }
  }, [searchParams, setBpm]);

  const handleBpmChange = (newBpm) => {
    setBpm(newBpm);
    if (playing) restart();
  };

  const handleTimeSigChange = (val) => {
    setTimeSignature(val);
    if (playing) restart();
  };

  const handleSubChange = (val) => {
    setSubdivision(val);
    if (playing) restart();
  };

  return (
    <div className={styles.page}>
      <h2 className={styles.heading}>Metronome</h2>

      {/* BPM Display */}
      <div className={styles.bpmDisplay}>
        <span className={styles.bpmNumber}>{bpm}</span>
        <span className={styles.bpmLabel}>BPM</span>
      </div>

      {/* Beat Indicator */}
      <div className={styles.beats}>
        {Array.from({ length: timeSignature }, (_, i) => (
          <div
            key={i}
            className={`${styles.beatDot} ${playing && currentBeat === i ? styles.beatActive : ''} ${i === 0 ? styles.beatAccent : ''}`}
          />
        ))}
      </div>

      {/* BPM Slider */}
      <div className={styles.sliderRow}>
        <button className={styles.bpmBtn} onClick={() => handleBpmChange(Math.max(30, bpm - 1))}>-</button>
        <input
          type="range"
          min="30"
          max="250"
          value={bpm}
          onChange={(e) => handleBpmChange(parseInt(e.target.value, 10))}
          className={styles.slider}
        />
        <button className={styles.bpmBtn} onClick={() => handleBpmChange(Math.min(250, bpm + 1))}>+</button>
      </div>

      {/* Play / Tap */}
      <div className={styles.mainActions}>
        <button
          className={`${styles.playBtn} ${playing ? styles.playing : ''}`}
          onClick={playing ? stop : start}
        >
          {playing ? 'Stop' : 'Start'}
        </button>
        <button className={styles.tapBtn} onClick={tapTempo}>
          Tap Tempo
        </button>
      </div>

      {/* Settings */}
      <div className={styles.settings}>
        <div className={styles.settingGroup}>
          <span className={styles.settingLabel}>Time Sig</span>
          <div className={styles.settingOptions}>
            {TIME_SIGS.map((ts) => (
              <button
                key={ts.value}
                className={`${styles.settingBtn} ${timeSignature === ts.value ? styles.settingActive : ''}`}
                onClick={() => handleTimeSigChange(ts.value)}
              >
                {ts.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.settingGroup}>
          <span className={styles.settingLabel}>Subdivision</span>
          <div className={styles.settingOptions}>
            {SUBDIVISIONS.map((sub) => (
              <button
                key={sub.value}
                className={`${styles.settingBtn} ${subdivision === sub.value ? styles.settingActive : ''}`}
                onClick={() => handleSubChange(sub.value)}
              >
                {sub.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.settingGroup}>
          <label className={styles.checkLabel}>
            <input
              type="checkbox"
              checked={accentBeat1}
              onChange={(e) => {
                setAccentBeat1(e.target.checked);
                if (playing) restart();
              }}
            />
            Accent beat 1
          </label>
        </div>
      </div>
    </div>
  );
}
```

**Step 2: Create the CSS module**

Create `src/pages/Metronome.module.css`:

- `.page` — max-width 500px centered (narrower than other pages, like tuner)
- `.bpmDisplay` — large centered number (3rem+), accent color, tabular-nums
- `.beats` — flex row of dots, centered
- `.beatDot` — 20px circle, border, dim by default
- `.beatActive` — accent background, glow
- `.beatAccent` — slightly larger (first beat)
- `.slider` — full width, accent colored thumb
- `.playBtn` — large, accent bg, centered
- `.playing` — red/stop state
- `.tapBtn` — outline style, accent border
- `.settings` — flex column, grouped options
- `.settingBtn` — pill buttons, active = accent fill

**Step 3: Verify**

Run: `npx vite build 2>&1 | tail -5`
Expected: Build succeeds.

**Step 4: Commit**

```bash
git add src/pages/Metronome.jsx src/pages/Metronome.module.css
git commit -m "feat: add Metronome page with BPM slider, tap tempo, beat indicator, subdivisions"
```

---

### Task 7: YouTube Video Curation on Skill Nodes

**Files:**
- Modify: `src/data/curriculum/technique.js` — add `videos` array to each node
- Modify: `src/data/curriculum/theory.js` — add `videos` array to each node
- Modify: `src/data/curriculum/fretboard.js` — add `videos` array to each node
- Modify: `src/data/curriculum/ear.js` — add `videos` array to each node
- Modify: `src/data/curriculum/creativity.js` — add `videos` array to each node
- Modify: `src/data/curriculum/repertoire.js` — add `videos` array to each node
- Modify: `src/components/SkillNode.jsx:96-107` — add Videos section
- Modify: `src/components/SkillNode.module.css` — add video link styles

**Context:** Add 2-3 hand-picked YouTube video links per skill node (166 nodes total). Videos should be from trusted channels: Justin Guitar, Ben Eller, Paul Davids, Marty Music, Rick Beato, Signals Music Studio, Steve Stine, Adam Neely, Acoustic Life. Each video entry has `{ title, channel, url }`. The SkillNode component gets a new "Videos" section between the Tab section and External Link.

**Step 1: Add videos array to all curriculum nodes**

For each node in each curriculum file, add a `videos` array with 2-3 curated YouTube links. Example:

```js
{
  id: 'tech-vibrato',
  // ... existing fields ...
  videos: [
    { title: 'How to Get GREAT Vibrato', channel: 'Ben Eller', url: 'https://www.youtube.com/watch?v=EXAMPLE1' },
    { title: 'Vibrato Technique for Beginners', channel: 'Justin Guitar', url: 'https://www.youtube.com/watch?v=EXAMPLE2' },
  ],
}
```

Search YouTube for real, accurate, high-quality tutorial URLs for each skill topic. Prioritize videos that:
- Match the skill level of the node's tier
- Are from established, trusted guitar educators
- Have clear instruction (not just performance)
- Are still available (recent videos preferred)

If you cannot find a specific video for a niche topic, set `videos: []` (empty array) — the UI will show only the "Find More" button.

**Step 2: Update SkillNode component**

In `src/components/SkillNode.jsx`, add a Videos section between the Tab section (line 95) and the External Link (line 98):

```jsx
{/* Videos */}
{((node.videos && node.videos.length > 0) || true) && (
  <div className={styles.section}>
    <span className={styles.sectionLabel}>Videos</span>
    {node.videos && node.videos.length > 0 && (
      <div className={styles.videoList}>
        {node.videos.map((v, i) => (
          <a key={i} href={v.url} target="_blank" rel="noopener noreferrer" className={styles.videoLink}>
            <span className={styles.videoChannel}>{v.channel}</span>
            <span className={styles.videoTitle}>{v.title}</span>
          </a>
        ))}
      </div>
    )}
    <a
      href={`https://www.youtube.com/results?search_query=guitar+${encodeURIComponent(node.name)}+tutorial`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.findMoreLink}
    >
      Find More on YouTube &rarr;
    </a>
  </div>
)}
```

**Step 3: Add video styles to SkillNode.module.css**

```css
/* === Videos === */
.videoList {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 0.5rem;
}

.videoLink {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 0.5rem 0.75rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  text-decoration: none;
  transition: border-color 0.15s;
}

.videoLink:hover {
  border-color: var(--accent);
}

.videoChannel {
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: var(--accent);
}

.videoTitle {
  font-size: 0.8rem;
  color: var(--fg);
}

.findMoreLink {
  font-size: 0.8rem;
  color: var(--fg-muted);
  display: inline-block;
}

.findMoreLink:hover {
  color: var(--accent);
}
```

**Step 4: Verify**

Run: `npx vite build 2>&1 | tail -5`
Expected: Build succeeds.

**Step 5: Commit**

```bash
git add src/data/curriculum/*.js src/components/SkillNode.jsx src/components/SkillNode.module.css
git commit -m "feat: add curated YouTube videos to all 166 skill nodes + Find More button"
```

---

### Task 8: Wire Up Routes, Nav, and Home Grid

**Files:**
- Modify: `src/App.jsx:1-40` — add imports and routes for Charts and Metronome
- Modify: `src/components/CategoryNav.jsx:4-14` — add Charts and Metronome to links array
- Modify: `src/pages/Home.jsx:5-14` — add Charts and Metronome to categories array

**Step 1: Update App.jsx**

Add imports at top:
```jsx
import Charts from './pages/Charts.jsx';
import Metronome from './pages/Metronome.jsx';
```

Add routes inside `<Routes>`:
```jsx
<Route path="/charts" element={<Charts />} />
<Route path="/metronome" element={<Metronome />} />
```

**Step 2: Update CategoryNav.jsx**

Add to the `links` array (between Tuner and the end):
```js
{ to: '/charts', label: 'Charts' },
{ to: '/metronome', label: 'Metronome' },
```

**Step 3: Update Home.jsx**

Add to the `categories` array:
```js
{ to: '/charts', name: 'Song Charts', desc: 'Nashville-style chord charts — browse or build your own' },
{ to: '/metronome', name: 'Metronome', desc: 'Tap tempo, subdivisions, accent — Web Audio click track' },
```

**Step 4: Verify**

Run: `npx vite build 2>&1 | tail -5`
Expected: Build succeeds with no errors.

**Step 5: Commit**

```bash
git add src/App.jsx src/components/CategoryNav.jsx src/pages/Home.jsx
git commit -m "feat: wire up Charts and Metronome routes, nav, and home grid"
```

---

### Task 9: Metronome Deep Links from Routines

**Files:**
- Modify: `src/pages/Routines.jsx` — add metronome link to exercises with bpm field

**Context:** Each exercise in the routines data now has a `bpm` field (e.g., `"60-80"`). Add a small link/button next to the BPM badge that navigates to `/metronome?bpm=N` (using the lower bound of the BPM range).

**Step 1: Update Routines.jsx**

Import `Link` from react-router-dom. In the exercise header area where the BPM badge is rendered, wrap it in a `Link`:

```jsx
{ex.bpm && (
  <Link
    to={`/metronome?bpm=${parseInt(ex.bpm, 10)}`}
    className={styles.bpmLink}
    title="Open Metronome"
  >
    {ex.bpm} BPM
  </Link>
)}
```

Replace the static `.bpmBadge` span with this clickable link. Add `.bpmLink` style to `Routines.module.css`:

```css
.bpmLink {
  font-size: 0.6rem;
  font-weight: 600;
  padding: 1px 6px;
  border-radius: 99px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  border: 1px solid var(--accent);
  color: var(--accent);
  background: var(--accent-glow);
  text-decoration: none;
  transition: background 0.15s;
}

.bpmLink:hover {
  background: var(--accent);
  color: #0a0a0a;
}
```

**Step 2: Verify**

Run: `npx vite build 2>&1 | tail -5`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/pages/Routines.jsx src/pages/Routines.module.css
git commit -m "feat: link exercise BPM badges to metronome with pre-set tempo"
```

---

### Task 10: Final Build, Test, and Deploy

**Files:** None new — verification only.

**Step 1: Full build**

Run: `npx vite build 2>&1`
Expected: Build succeeds. Note bundle size (will be larger due to chart data).

**Step 2: Run tests**

Run: `npx vitest run 2>&1`
Expected: All tests pass.

**Step 3: Manual smoke test**

Start dev server: `npx vite --host 2>&1 &`
Verify in browser:
- `/charts` — list shows 25 starter charts, search works, click opens rendered chart
- `/charts` — "New Chart" opens builder with live preview, save works
- `/metronome` — BPM slider works, play/stop produces audible clicks, beat dots animate
- `/metronome?bpm=80` — opens with BPM pre-set to 80
- Skill tree nodes show Videos section with curated links + "Find More" button
- Routine exercises with BPM badge link to metronome
- Nav has 11 items, scrolls on mobile
- Home grid has 10 category cards

**Step 4: Deploy**

Run: `npx vercel --prod 2>&1`
Expected: Deploys to `https://guitar-practice-five.vercel.app`

**Step 5: Commit any final fixes**

```bash
git add -A
git commit -m "chore: final build verification and deploy"
```
