import { useState, useMemo } from 'react';
import { STARTER_CHARTS } from '../data/charts.js';
import { useLocalStorage } from '../hooks/useLocalStorage.js';
import { parseChart } from '../utils/chartParser.js';
import ChartRenderer from '../components/ChartRenderer.jsx';
import styles from './Jam.module.css';

const BUCKETS = [
  { key: 'want', label: 'Want to Know' },
  { key: 'working', label: 'Working On' },
  { key: 'know', label: 'Know' },
];

const BUCKET_MOVES = {
  want: [
    { target: 'working', label: 'Start Learning' },
  ],
  working: [
    { target: 'know', label: 'I Know This' },
    { target: 'want', label: 'Back to Wishlist' },
  ],
  know: [
    { target: 'working', label: 'Need Practice' },
  ],
};

function extractMeta(text) {
  const titleMatch = text.match(/@title\s+(.+)/);
  const keyMatch = text.match(/@key\s+(.+)/);
  const artistMatch = text.match(/@artist\s+(.+)/);
  return {
    title: titleMatch ? titleMatch[1].trim() : 'Untitled',
    key: keyMatch ? keyMatch[1].trim() : '',
    artist: artistMatch ? artistMatch[1].trim() : '',
  };
}

export default function Jam() {
  const [jamSongs, setJamSongs] = useLocalStorage('jam-songs', []);
  const [view, setView] = useState('list'); // list | chart | add | paste
  const [activeSong, setActiveSong] = useState(null);
  const [search, setSearch] = useState('');
  const [addSearch, setAddSearch] = useState('');
  const [pasteText, setPasteText] = useState('');

  // Songs already in jam by chart id
  const jamIds = useMemo(
    () => new Set(jamSongs.map((s) => s.id)),
    [jamSongs]
  );

  // Available songs from library not yet added
  const availableSongs = useMemo(() => {
    const q = addSearch.toLowerCase();
    return STARTER_CHARTS.filter((c) => {
      if (jamIds.has(c.id)) return false;
      if (!q) return true;
      const meta = extractMeta(c.text);
      return (
        meta.title.toLowerCase().includes(q) ||
        (c.artist || '').toLowerCase().includes(q) ||
        meta.key.toLowerCase().includes(q)
      );
    });
  }, [addSearch, jamIds]);

  const addFromLibrary = (chart) => {
    const meta = extractMeta(chart.text);
    const song = {
      id: chart.id,
      title: meta.title,
      artist: chart.artist || meta.artist,
      key: meta.key,
      genre: chart.genre || '',
      text: chart.text,
      videos: chart.videos || [],
      bucket: 'want',
      addedAt: Date.now(),
    };
    setJamSongs([...jamSongs, song]);
  };

  const addFromPaste = () => {
    const trimmed = pasteText.trim();
    if (!trimmed) return;
    const meta = extractMeta(trimmed);
    const song = {
      id: 'jam-' + Date.now(),
      title: meta.title,
      artist: meta.artist,
      key: meta.key,
      genre: '',
      text: trimmed,
      videos: [],
      bucket: 'want',
      addedAt: Date.now(),
    };
    setJamSongs([...jamSongs, song]);
    setPasteText('');
    setView('list');
  };

  const moveSong = (songId, newBucket) => {
    setJamSongs(
      jamSongs.map((s) => (s.id === songId ? { ...s, bucket: newBucket } : s))
    );
  };

  const removeSong = (songId) => {
    setJamSongs(jamSongs.filter((s) => s.id !== songId));
    if (activeSong && activeSong.id === songId) {
      setView('list');
      setActiveSong(null);
    }
  };

  const openChart = (song) => {
    setActiveSong(song);
    setView('chart');
  };

  const handlePrint = () => {
    window.print();
  };

  // Filter songs by search
  const filteredBuckets = useMemo(() => {
    const q = search.toLowerCase();
    const result = {};
    for (const b of BUCKETS) {
      result[b.key] = jamSongs.filter((s) => {
        if (s.bucket !== b.key) return false;
        if (!q) return true;
        return (
          s.title.toLowerCase().includes(q) ||
          s.artist.toLowerCase().includes(q) ||
          s.key.toLowerCase().includes(q)
        );
      });
    }
    return result;
  }, [jamSongs, search]);

  // === CHART VIEW ===
  if (view === 'chart' && activeSong) {
    const moves = BUCKET_MOVES[activeSong.bucket] || [];
    return (
      <div className={styles.page}>
        <div className={styles.viewHeader}>
          <button className={styles.backBtn} onClick={() => setView('list')}>
            &larr; Jam
          </button>
          <div className={styles.viewActions}>
            <button className={styles.printBtn} onClick={handlePrint}>
              Print
            </button>
            <button
              className={styles.removeBtn}
              onClick={() => removeSong(activeSong.id)}
            >
              Remove
            </button>
          </div>
        </div>

        <div className={styles.songMeta}>
          {activeSong.artist && (
            <span className={styles.songArtist}>{activeSong.artist}</span>
          )}
          {activeSong.key && (
            <span className={styles.songKey}>Key of {activeSong.key}</span>
          )}
          <span className={styles.bucketLabel}>
            {BUCKETS.find((b) => b.key === activeSong.bucket).label}
          </span>
        </div>

        {moves.length > 0 && (
          <div className={styles.moveActions}>
            {moves.map((m) => (
              <button
                key={m.target}
                className={styles.moveBtn}
                onClick={() => {
                  moveSong(activeSong.id, m.target);
                  setActiveSong({ ...activeSong, bucket: m.target });
                }}
              >
                {m.label}
              </button>
            ))}
          </div>
        )}

        <div className={styles.printArea}>
          <ChartRenderer text={activeSong.text} />
        </div>
      </div>
    );
  }

  // === ADD FROM LIBRARY ===
  if (view === 'add') {
    return (
      <div className={styles.page}>
        <div className={styles.viewHeader}>
          <button className={styles.backBtn} onClick={() => setView('list')}>
            &larr; Back
          </button>
          <button
            className={styles.pasteBtn}
            onClick={() => setView('paste')}
          >
            Paste Chart
          </button>
        </div>

        <h2 className={styles.heading}>Add from Library</h2>

        <input
          className={styles.search}
          type="text"
          placeholder="Search songs, artists, keys..."
          value={addSearch}
          onChange={(e) => setAddSearch(e.target.value)}
        />

        <div className={styles.addList}>
          {availableSongs.map((chart) => {
            const meta = extractMeta(chart.text);
            return (
              <div key={chart.id} className={styles.addCard}>
                <div className={styles.addCardInfo}>
                  <span className={styles.addTitle}>{meta.title}</span>
                  {chart.artist && (
                    <span className={styles.addArtist}>{chart.artist}</span>
                  )}
                </div>
                <div className={styles.addCardRight}>
                  {meta.key && (
                    <span className={styles.keyBadge}>{meta.key}</span>
                  )}
                  <button
                    className={styles.addBtn}
                    onClick={() => addFromLibrary(chart)}
                  >
                    + Add
                  </button>
                </div>
              </div>
            );
          })}
          {availableSongs.length === 0 && (
            <p className={styles.empty}>
              {addSearch ? 'No matches.' : 'All library songs added!'}
            </p>
          )}
        </div>
      </div>
    );
  }

  // === PASTE VIEW ===
  if (view === 'paste') {
    return (
      <div className={styles.page}>
        <div className={styles.viewHeader}>
          <button className={styles.backBtn} onClick={() => setView('add')}>
            &larr; Back
          </button>
          <button className={styles.saveBtn} onClick={addFromPaste}>
            Save Song
          </button>
        </div>

        <h2 className={styles.heading}>Paste Chord Chart</h2>
        <p className={styles.pasteHint}>
          Use Nashville syntax: @title, @key, [A] Section, | chords |
        </p>

        <div className={styles.pasteLayout}>
          <textarea
            className={styles.pasteEditor}
            value={pasteText}
            onChange={(e) => setPasteText(e.target.value)}
            spellCheck={false}
            placeholder={`@title Song Name\n@key G\n@tempo 120\n@feel Rock\n\n[A] Verse\n| G | C | D | Em |\n\n[B] Chorus\n| C | D | G | G |\n\n@structure A A B A B`}
          />
          {pasteText.trim() && (
            <div className={styles.pastePreview}>
              <ChartRenderer text={pasteText} />
            </div>
          )}
        </div>
      </div>
    );
  }

  // === MAIN LIST VIEW ===
  const totalSongs = jamSongs.length;

  return (
    <div className={styles.page}>
      <div className={styles.headerRow}>
        <h2 className={styles.heading}>Jam</h2>
        <button className={styles.addTopBtn} onClick={() => setView('add')}>
          + Add Song
        </button>
      </div>

      {totalSongs > 0 && (
        <input
          className={styles.search}
          type="text"
          placeholder="Search your repertoire..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      )}

      {totalSongs === 0 ? (
        <div className={styles.emptyState}>
          <p className={styles.emptyTitle}>No songs yet</p>
          <p className={styles.emptyText}>
            Add songs from the library or paste your own chord charts.
          </p>
          <button
            className={styles.addTopBtn}
            onClick={() => setView('add')}
          >
            + Add Your First Song
          </button>
        </div>
      ) : (
        BUCKETS.map((bucket) => {
          const songs = filteredBuckets[bucket.key];
          return (
            <div key={bucket.key} className={styles.bucket}>
              <div className={styles.bucketHeader}>
                <h3 className={styles.bucketLabel}>{bucket.label}</h3>
                <span className={styles.bucketCount}>{songs.length}</span>
              </div>
              {songs.length === 0 ? (
                <p className={styles.bucketEmpty}>No songs here yet.</p>
              ) : (
                <div className={styles.songList}>
                  {songs.map((song) => (
                    <button
                      key={song.id}
                      className={styles.songCard}
                      onClick={() => openChart(song)}
                    >
                      <div className={styles.songCardInfo}>
                        <span className={styles.songTitle}>{song.title}</span>
                        {song.artist && (
                          <span className={styles.songCardArtist}>
                            {song.artist}
                          </span>
                        )}
                      </div>
                      {song.key && (
                        <span className={styles.keyBadge}>{song.key}</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}
