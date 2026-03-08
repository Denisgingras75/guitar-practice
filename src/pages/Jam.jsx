import { useState, useMemo } from 'react';
import { STARTER_CHARTS } from '../data/charts.js';
import { useLocalStorage } from '../hooks/useLocalStorage.js';
import { parseChart } from '../utils/chartParser.js';
import { looksLikeUG, convertUGToNashville } from '../utils/ugParser.js';
import ChartRenderer from '../components/ChartRenderer.jsx';
import VideoEmbed from '../components/VideoEmbed.jsx';
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

const VERSION_TYPES = ['Chord Chart', 'Tab', 'Simplified', 'Alternate Tuning', 'Custom'];

function youtubeSearchUrl(title, artist) {
  const q = encodeURIComponent(`${title} ${artist} guitar lesson`.trim());
  return `https://www.youtube.com/results?search_query=${q}`;
}

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

// Get versions array from a song, handling legacy format
function getVersions(song) {
  if (song.versions && song.versions.length > 0) return song.versions;
  return [{ id: 'v-default', label: 'Chord Chart', text: song.text }];
}

export default function Jam() {
  const [jamSongs, setJamSongs] = useLocalStorage('jam-songs', []);
  const [view, setView] = useState('list'); // list | chart | add | paste
  const [activeSong, setActiveSong] = useState(null);
  const [search, setSearch] = useState('');
  const [addSearch, setAddSearch] = useState('');
  const [pasteText, setPasteText] = useState('');

  // Version & edit state
  const [activeVersionIdx, setActiveVersionIdx] = useState(0);
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState('');
  const [addingVersion, setAddingVersion] = useState(false);
  const [newVersionLabel, setNewVersionLabel] = useState('Chord Chart');
  const [newVersionText, setNewVersionText] = useState('');

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

  // ── Helpers ─────────────────────────────────────────────────────────────

  const updateSong = (songId, updates) => {
    const updated = jamSongs.map((s) =>
      s.id === songId ? { ...s, ...updates } : s
    );
    setJamSongs(updated);
    // Keep activeSong in sync
    if (activeSong && activeSong.id === songId) {
      setActiveSong({ ...activeSong, ...updates });
    }
  };

  const addFromLibrary = (chart) => {
    const meta = extractMeta(chart.text);
    const song = {
      id: chart.id,
      title: meta.title,
      artist: chart.artist || meta.artist,
      key: meta.key,
      genre: chart.genre || '',
      level: chart.level || '',
      text: chart.text,
      versions: [{ id: 'v-' + Date.now(), label: 'Chord Chart', text: chart.text }],
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
      versions: [{ id: 'v-' + Date.now(), label: 'Chord Chart', text: trimmed }],
      videos: [],
      bucket: 'want',
      addedAt: Date.now(),
    };
    setJamSongs([...jamSongs, song]);
    setPasteText('');
    setView('list');
  };

  const moveSong = (songId, newBucket) => {
    updateSong(songId, { bucket: newBucket });
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
    setActiveVersionIdx(0);
    setEditing(false);
    setAddingVersion(false);
    setView('chart');
  };

  // ── Edit handlers ───────────────────────────────────────────────────────

  const startEditing = (versionText) => {
    setEditText(versionText);
    setEditing(true);
  };

  const saveEdit = () => {
    if (!activeSong) return;
    const versions = [...getVersions(activeSong)];
    versions[activeVersionIdx] = { ...versions[activeVersionIdx], text: editText };
    // Update text to first version for backwards compat
    const newText = versions[0].text;
    const meta = extractMeta(newText);
    updateSong(activeSong.id, {
      versions,
      text: newText,
      title: meta.title || activeSong.title,
      key: meta.key || activeSong.key,
    });
    setEditing(false);
  };

  const cancelEdit = () => {
    setEditing(false);
    setEditText('');
  };

  // ── Version handlers ────────────────────────────────────────────────────

  const startAddVersion = () => {
    setNewVersionLabel('Chord Chart');
    setNewVersionText('');
    setAddingVersion(true);
    setEditing(false);
  };

  const saveNewVersion = () => {
    if (!activeSong || !newVersionText.trim()) return;
    const versions = [...getVersions(activeSong)];
    versions.push({
      id: 'v-' + Date.now(),
      label: newVersionLabel,
      text: newVersionText.trim(),
    });
    updateSong(activeSong.id, { versions });
    setActiveVersionIdx(versions.length - 1);
    setAddingVersion(false);
    setNewVersionText('');
  };

  const cancelAddVersion = () => {
    setAddingVersion(false);
    setNewVersionText('');
  };

  const deleteVersion = (idx) => {
    if (!activeSong) return;
    const versions = [...getVersions(activeSong)];
    if (versions.length <= 1) return; // Can't delete the only version
    versions.splice(idx, 1);
    const newIdx = Math.min(activeVersionIdx, versions.length - 1);
    updateSong(activeSong.id, { versions, text: versions[0].text });
    setActiveVersionIdx(newIdx);
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
    const versions = getVersions(activeSong);
    const safeIdx = Math.min(activeVersionIdx, versions.length - 1);
    const currentVersion = versions[safeIdx];

    // Adding a new version
    if (addingVersion) {
      const isUG = looksLikeUG(newVersionText);
      const handleConvertUG = () => {
        const converted = convertUGToNashville(newVersionText);
        if (converted) setNewVersionText(converted);
      };
      const previewText = newVersionText.trim() && !isUG ? newVersionText : '';

      return (
        <div className={styles.page}>
          <div className={styles.viewHeader}>
            <button className={styles.backBtn} onClick={cancelAddVersion}>
              &larr; Back to Song
            </button>
            <button className={styles.saveBtn} onClick={saveNewVersion}>
              Save Version
            </button>
          </div>

          <h2 className={styles.heading}>Add Version</h2>

          <div className={styles.versionLabelRow}>
            <label className={styles.fieldLabel}>Version type</label>
            <div className={styles.versionTypeOptions}>
              {VERSION_TYPES.map((t) => (
                <button
                  key={t}
                  className={`${styles.versionTypeBtn} ${newVersionLabel === t ? styles.versionTypeActive : ''}`}
                  onClick={() => setNewVersionLabel(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {isUG && (
            <div className={styles.ugBanner}>
              <span>Detected Ultimate Guitar format</span>
              <button className={styles.convertBtn} onClick={handleConvertUG}>
                Convert to Chart
              </button>
            </div>
          )}

          <div className={styles.pasteLayout}>
            <textarea
              className={styles.pasteEditor}
              value={newVersionText}
              onChange={(e) => setNewVersionText(e.target.value)}
              spellCheck={false}
              placeholder="Paste chord chart, tab, or Nashville syntax..."
            />
            {previewText && (
              <div className={styles.pastePreview}>
                <ChartRenderer text={previewText} />
              </div>
            )}
          </div>
        </div>
      );
    }

    // Editing current version
    if (editing) {
      return (
        <div className={styles.page}>
          <div className={styles.viewHeader}>
            <button className={styles.backBtn} onClick={cancelEdit}>
              &larr; Cancel
            </button>
            <button className={styles.saveBtn} onClick={saveEdit}>
              Save Changes
            </button>
          </div>

          <h2 className={styles.heading}>
            Edit: {currentVersion.label || 'Chart'}
          </h2>

          <div className={styles.pasteLayout}>
            <textarea
              className={styles.pasteEditor}
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              spellCheck={false}
            />
            {editText.trim() && (
              <div className={styles.pastePreview}>
                <ChartRenderer text={editText} />
              </div>
            )}
          </div>
        </div>
      );
    }

    // Normal chart view
    return (
      <div className={styles.page}>
        <div className={styles.viewHeader}>
          <button className={styles.backBtn} onClick={() => setView('list')}>
            &larr; Jam
          </button>
          <div className={styles.viewActions}>
            <button
              className={styles.editBtn}
              onClick={() => startEditing(currentVersion.text)}
            >
              Edit
            </button>
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
                }}
              >
                {m.label}
              </button>
            ))}
          </div>
        )}

        {/* Version tabs */}
        <div className={styles.versionTabs}>
          {versions.map((v, i) => (
            <button
              key={v.id}
              className={`${styles.versionTab} ${i === safeIdx ? styles.versionTabActive : ''}`}
              onClick={() => setActiveVersionIdx(i)}
            >
              {v.label || 'Version ' + (i + 1)}
            </button>
          ))}
          <button className={styles.addVersionBtn} onClick={startAddVersion}>
            +
          </button>
        </div>

        {/* Version actions */}
        {versions.length > 1 && (
          <div className={styles.versionActions}>
            <button
              className={styles.deleteVersionBtn}
              onClick={() => deleteVersion(safeIdx)}
            >
              Delete this version
            </button>
          </div>
        )}

        <div className={styles.printArea}>
          <ChartRenderer text={currentVersion.text} />
        </div>

        {/* YouTube & Videos */}
        <div className={styles.videoSection}>
          <a
            href={youtubeSearchUrl(activeSong.title, activeSong.artist)}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ytSearchLink}
          >
            Find Lessons on YouTube &rarr;
          </a>

          {activeSong.videos && activeSong.videos.length > 0 && (
            <div className={styles.videoList}>
              {activeSong.videos.map((v, i) => (
                <VideoEmbed key={i} video={v} />
              ))}
            </div>
          )}
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
                  {chart.level && (
                    <span className={`${styles.levelBadge} ${styles['level' + chart.level.charAt(0).toUpperCase() + chart.level.slice(1)]}`}>
                      {chart.level}
                    </span>
                  )}
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
    const isUG = looksLikeUG(pasteText);

    const handleConvertUG = () => {
      const converted = convertUGToNashville(pasteText);
      if (converted) {
        setPasteText(converted);
      }
    };

    const previewText = pasteText.trim() && !isUG ? pasteText : '';

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
          Paste from Ultimate Guitar or use Nashville syntax (@title, @key, | chords |)
        </p>

        {isUG && (
          <div className={styles.ugBanner}>
            <span>Detected Ultimate Guitar format</span>
            <button className={styles.convertBtn} onClick={handleConvertUG}>
              Convert to Chart
            </button>
          </div>
        )}

        <div className={styles.pasteLayout}>
          <textarea
            className={styles.pasteEditor}
            value={pasteText}
            onChange={(e) => setPasteText(e.target.value)}
            spellCheck={false}
            placeholder={`Paste from Ultimate Guitar:\n\n[Verse]\nG          C          D\nSome lyrics here...\nEm         C          G\nMore lyrics here...\n\n[Chorus]\nC    D    G    Em\n...\n\n— or Nashville syntax —\n\n@title Song Name\n@key G\n\n[A] Verse\n| G | C | D | Em |\n\n@structure A A B A B`}
          />
          {previewText && (
            <div className={styles.pastePreview}>
              <ChartRenderer text={previewText} />
            </div>
          )}
        </div>
      </div>
    );
  }

  // === MAIN LIST VIEW ===
  const totalSongs = jamSongs.length;
  const knowCount = jamSongs.filter((s) => s.bucket === 'know').length;
  const workingCount = jamSongs.filter((s) => s.bucket === 'working').length;

  return (
    <div className={styles.page}>
      <div className={styles.headerRow}>
        <h2 className={styles.heading}>Jam</h2>
        <button className={styles.addTopBtn} onClick={() => setView('add')}>
          + Add Song
        </button>
      </div>

      {totalSongs > 0 && (
        <div className={styles.statsBar}>
          <span className={styles.stat}><strong>{knowCount}</strong> known</span>
          <span className={styles.statDivider}>|</span>
          <span className={styles.stat}><strong>{workingCount}</strong> learning</span>
          <span className={styles.statDivider}>|</span>
          <span className={styles.stat}><strong>{totalSongs}</strong> total</span>
        </div>
      )}

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
                  {songs.map((song) => {
                    const vCount = getVersions(song).length;
                    return (
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
                        <div className={styles.songCardMeta}>
                          {vCount > 1 && (
                            <span className={styles.versionCountBadge}>
                              {vCount} versions
                            </span>
                          )}
                          {song.level && (
                            <span className={`${styles.levelBadge} ${styles['level' + song.level.charAt(0).toUpperCase() + song.level.slice(1)]}`}>
                              {song.level}
                            </span>
                          )}
                          {song.key && (
                            <span className={styles.keyBadge}>{song.key}</span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}
