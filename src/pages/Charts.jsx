import { useState } from 'react';
import { STARTER_CHARTS } from '../data/charts.js';
import { useLocalStorage } from '../hooks/useLocalStorage.js';
import ChartRenderer from '../components/ChartRenderer.jsx';
import VideoEmbed from '../components/VideoEmbed.jsx';
import styles from './Charts.module.css';

const GENRE_STYLES = {
  blues: { border: styles.borderBlues, badge: styles.genreBlues },
  rock: { border: styles.borderRock, badge: styles.genreRock },
  'classic-rock': { border: styles.borderClassicRock, badge: styles.genreClassicRock },
  folk: { border: styles.borderFolk, badge: styles.genreFolk },
  jam: { border: styles.borderJam, badge: styles.genreJam },
  psychedelic: { border: styles.borderPsychedelic, badge: styles.genrePsychedelic },
  country: { border: styles.borderCountry, badge: styles.genreCountry },
  soul: { border: styles.borderSoul, badge: styles.genreSoul },
};

function getGenreStyle(genre) {
  return GENRE_STYLES[genre] || { border: styles.borderDefault, badge: styles.genreDefault };
}

const EMPTY_CHART = `@title New Song
@key C
@tempo 120
@feel Rock

[A] Verse
| C | G | Am | F |

[B] Chorus
| F | G | C | Am |

@structure A A B A B`;

const ALL_GENRES = [...new Set(STARTER_CHARTS.map((c) => c.genre).filter(Boolean))];

export default function Charts() {
  const [userCharts, setUserCharts] = useLocalStorage('user-charts', []);
  const [view, setView] = useState('list');
  const [activeChart, setActiveChart] = useState(null);
  const [editText, setEditText] = useState('');
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState('');
  const [genreFilter, setGenreFilter] = useState(null);

  const allCharts = [
    ...STARTER_CHARTS.map((c) => ({ ...c, source: 'starter' })),
    ...userCharts.map((c) => ({ ...c, source: 'user' })),
  ];

  const filtered = allCharts.filter((c) => {
    if (genreFilter && c.genre !== genreFilter) return false;
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
    if (editId) {
      setUserCharts(userCharts.map((c) => (c.id === editId ? { ...c, text: editText } : c)));
    } else {
      setUserCharts([...userCharts, newChart]);
    }
    setView('list');
  };

  const deleteChart = (id) => {
    setUserCharts(userCharts.filter((c) => c.id !== id));
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

        <div className={styles.genreFilters}>
          <button
            className={`${styles.genreFilterBtn} ${!genreFilter ? styles.genreFilterActive : ''}`}
            style={!genreFilter ? { borderColor: 'var(--accent)', color: 'var(--accent)' } : undefined}
            onClick={() => setGenreFilter(null)}
          >
            All
          </button>
          {ALL_GENRES.map((g) => {
            const gs = getGenreStyle(g);
            const active = genreFilter === g;
            return (
              <button
                key={g}
                className={`${styles.genreFilterBtn} ${active ? styles.genreFilterActive : ''} ${gs.badge}`}
                style={active ? { borderColor: 'currentColor', background: 'rgba(255,255,255,0.05)' } : undefined}
                onClick={() => setGenreFilter(active ? null : g)}
              >
                {g.replace('-', ' ')}
              </button>
            );
          })}
        </div>

        <p className={styles.songCount}>{filtered.length} song{filtered.length !== 1 ? 's' : ''}</p>

        <div className={styles.chartList}>
          {filtered.map((chart) => {
            const titleMatch = chart.text.match(/@title\s+(.+)/);
            const keyMatch = chart.text.match(/@key\s+(.+)/);
            const title = titleMatch ? titleMatch[1] : chart.id;
            const key = keyMatch ? keyMatch[1] : '';
            const gs = getGenreStyle(chart.genre);
            const hasVideos = chart.videos && chart.videos.length > 0;

            return (
              <button
                key={chart.id + chart.source}
                className={`${styles.chartCard} ${gs.border}`}
                onClick={() => openChart(chart)}
              >
                <div className={styles.chartCardInfo}>
                  <span className={styles.chartTitle}>{title}</span>
                  {chart.artist && <span className={styles.chartArtist}>{chart.artist}</span>}
                </div>
                <div className={styles.chartCardMeta}>
                  {hasVideos && (
                    <span className={styles.videoBadge}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                      {chart.videos.length}
                    </span>
                  )}
                  {key && <span className={styles.keyBadge}>{key}</span>}
                  {chart.genre && (
                    <span className={`${styles.genreBadge} ${gs.badge}`}>
                      {chart.genre.replace('-', ' ')}
                    </span>
                  )}
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
    const gs = getGenreStyle(activeChart.genre);
    const tempoMatch = activeChart.text.match(/@tempo\s+(.+)/);
    const feelMatch = activeChart.text.match(/@feel\s+(.+)/);
    const keyMatch = activeChart.text.match(/@key\s+(.+)/);

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

        <div className={styles.detailMeta}>
          {activeChart.artist && <span className={styles.detailArtist}>{activeChart.artist}</span>}
          {activeChart.artist && keyMatch && <span className={styles.detailDot}>&#9679;</span>}
          {keyMatch && <span className={styles.detailInfo}>Key of {keyMatch[1]}</span>}
          {tempoMatch && <><span className={styles.detailDot}>&#9679;</span><span className={styles.detailInfo}>{tempoMatch[1]} BPM</span></>}
          {activeChart.genre && (
            <>
              <span className={styles.detailDot}>&#9679;</span>
              <span className={`${styles.genreBadge} ${gs.badge}`}>{activeChart.genre.replace('-', ' ')}</span>
            </>
          )}
        </div>

        {activeChart.videos && activeChart.videos.length > 0 && (
          <div className={styles.videosSection}>
            <h3 className={styles.videosHeading}>Lessons &amp; Tutorials</h3>
            {activeChart.videos.map((v, i) => (
              <VideoEmbed key={i} video={{ type: 'youtube', url: v.url, title: `${v.channel} — ${v.title}` }} />
            ))}
          </div>
        )}

        <ChartRenderer text={activeChart.text} />
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
          <label className={styles.editorLabel}>Chart Syntax</label>
          <textarea
            className={styles.editor}
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            spellCheck={false}
            placeholder="Type your chart here..."
          />
        </div>
        <div className={styles.previewPane}>
          <label className={styles.editorLabel}>Preview</label>
          <ChartRenderer text={editText} />
        </div>
      </div>
    </div>
  );
}
