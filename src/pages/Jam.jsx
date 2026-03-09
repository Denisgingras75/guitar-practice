import { useState, useMemo } from 'react';
import { STARTER_CHARTS } from '../data/charts.js';
import { useLocalStorage } from '../hooks/useLocalStorage.js';
import { looksLikeUG, convertUGToNashville, cleanUGToLyrics } from '../utils/ugParser.js';
import ChartRenderer from '../components/ChartRenderer.jsx';
import LyricsRenderer, { looksLikeLyrics } from '../components/LyricsRenderer.jsx';
import styles from './Jam.module.css';

function SmartRenderer({ text }) {
  if (looksLikeLyrics(text)) {
    return <LyricsRenderer text={text} />;
  }
  return <ChartRenderer text={text} />;
}

function PdfViewer({ dataUrl }) {
  return (
    <div className={styles.pdfViewer}>
      <object
        data={dataUrl}
        type="application/pdf"
        className={styles.pdfObject}
      >
        <p className={styles.pdfFallback}>
          Your browser cannot display this PDF.{' '}
          <a href={dataUrl} download="chart.pdf" className={styles.pdfDownloadLink}>
            Download PDF
          </a>
        </p>
      </object>
    </div>
  );
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

const TABS = [
  { key: 'songs', label: 'Songs' },
  { key: 'bySong', label: 'Tabs by Song' },
  { key: 'byArtist', label: 'Tabs by Artist' },
  { key: 'denis', label: 'Denis Tabs' },
  { key: 'resources', label: 'Resources' },
];

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

function getVersions(song) {
  if (song.versions && song.versions.length > 0) return song.versions;
  return [{ id: 'v-default', label: 'Chord Chart', text: song.text }];
}

function youtubeSearchUrl(q) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;
}

function ugSearchUrl(q) {
  return `https://www.ultimate-guitar.com/search.php?search_type=title&value=${encodeURIComponent(q)}`;
}

export default function Jam() {
  const [jamSongs, setJamSongs] = useLocalStorage('jam-songs', []);
  const [activeTab, setActiveTab] = useState('songs');
  const [view, setView] = useState('list'); // list | chart | add | paste
  const [activeSong, setActiveSong] = useState(null);
  const [search, setSearch] = useState('');
  const [addSearch, setAddSearch] = useState('');
  const [pasteText, setPasteText] = useState('');
  const [resourceSearch, setResourceSearch] = useState('');
  const [showResourceSearch, setShowResourceSearch] = useState(false);
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfDataUrl, setPdfDataUrl] = useState('');
  const [pdfTitle, setPdfTitle] = useState('');
  const [pdfArtist, setPdfArtist] = useState('');

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
      source: 'library',
      addedAt: Date.now(),
    };
    setJamSongs([...jamSongs, song]);
  };

  const addFromPaste = () => {
    const trimmed = pasteText.trim();
    if (!trimmed) return;
    const now = Date.now();

    // If it looks like UG, auto-create both Lyrics & Chords and Chord Chart versions
    if (looksLikeUG(trimmed)) {
      const lyricsText = cleanUGToLyrics(trimmed) || trimmed;
      const nashvilleText = convertUGToNashville(trimmed);
      const meta = extractMeta(lyricsText);
      const versions = [
        { id: 'v-' + now, label: 'Lyrics & Chords', text: lyricsText },
      ];
      if (nashvilleText) {
        versions.push({ id: 'v-' + (now + 1), label: 'Chord Chart', text: nashvilleText });
      }
      const song = {
        id: 'denis-' + now,
        title: meta.title || 'Untitled',
        artist: meta.artist,
        key: meta.key,
        genre: '',
        level: '',
        text: lyricsText,
        versions,
        source: 'denis',
        addedAt: now,
      };
      setJamSongs([...jamSongs, song]);
      setPasteText('');
      setView('list');
      setActiveTab('denis');
      return;
    }

    // Non-UG paste — keep original behavior
    const meta = extractMeta(trimmed);
    const song = {
      id: 'denis-' + now,
      title: meta.title,
      artist: meta.artist,
      key: meta.key,
      genre: '',
      level: '',
      text: trimmed,
      versions: [{ id: 'v-' + now, label: 'Chord Chart', text: trimmed }],
      source: 'denis',
      addedAt: now,
    };
    setJamSongs([...jamSongs, song]);
    setPasteText('');
    setView('list');
    setActiveTab('denis');
  };

  const handlePdfSelect = async (e) => {
    const file = e.target.files?.[0];
    if (!file || file.type !== 'application/pdf') return;
    setPdfFile(file);
    const dataUrl = await readFileAsDataUrl(file);
    setPdfDataUrl(dataUrl);
    // Extract title from filename (remove .pdf extension)
    const name = file.name.replace(/\.pdf$/i, '').replace(/[-_]/g, ' ');
    if (!pdfTitle) setPdfTitle(name);
  };

  const addFromPdf = () => {
    if (!pdfDataUrl) return;
    const now = Date.now();
    const title = pdfTitle.trim() || 'Untitled';
    const artist = pdfArtist.trim() || '';
    const song = {
      id: 'denis-' + now,
      title,
      artist,
      key: '',
      genre: '',
      level: '',
      text: `@title ${title}\n${artist ? `@artist ${artist}\n` : ''}`,
      versions: [
        { id: 'v-' + now, label: 'Original PDF', text: '', isPdf: true, pdfDataUrl },
      ],
      source: 'denis',
      addedAt: now,
    };
    setJamSongs([...jamSongs, song]);
    setPdfFile(null);
    setPdfDataUrl('');
    setPdfTitle('');
    setPdfArtist('');
    setView('list');
    setActiveTab('denis');
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

  const goBack = () => {
    setView('list');
    setActiveSong(null);
    setEditing(false);
    setAddingVersion(false);
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
    const newText = versions[0].text;
    const meta = extractMeta(newText);
    updateSong(activeSong.id, {
      versions,
      text: newText,
      title: meta.title || activeSong.title,
      key: meta.key || activeSong.key,
      artist: meta.artist || activeSong.artist,
    });
    setEditing(false);
  };

  const cancelEdit = () => {
    setEditing(false);
    setEditText('');
  };

  // ── Version handlers ────────────────────────────────────────────────────

  const VERSION_TYPES = ['Chord Chart', 'Lyrics & Chords', 'Tab', 'Simplified', 'Alternate Tuning', 'PDF Upload', 'Custom'];
  const [newVersionPdfDataUrl, setNewVersionPdfDataUrl] = useState('');

  const handleVersionPdfSelect = async (e) => {
    const file = e.target.files?.[0];
    if (!file || file.type !== 'application/pdf') return;
    const dataUrl = await readFileAsDataUrl(file);
    setNewVersionPdfDataUrl(dataUrl);
  };

  const startAddVersion = () => {
    setNewVersionLabel('Chord Chart');
    setNewVersionText('');
    setNewVersionPdfDataUrl('');
    setAddingVersion(true);
    setEditing(false);
  };

  const saveNewVersion = () => {
    if (!activeSong) return;
    const isPdf = newVersionLabel === 'PDF Upload';
    if (isPdf && !newVersionPdfDataUrl) return;
    if (!isPdf && !newVersionText.trim()) return;
    const versions = [...getVersions(activeSong)];
    if (isPdf) {
      versions.push({
        id: 'v-' + Date.now(),
        label: 'Original PDF',
        text: '',
        isPdf: true,
        pdfDataUrl: newVersionPdfDataUrl,
      });
    } else {
      versions.push({
        id: 'v-' + Date.now(),
        label: newVersionLabel,
        text: newVersionText.trim(),
      });
    }
    updateSong(activeSong.id, { versions });
    setActiveVersionIdx(versions.length - 1);
    setAddingVersion(false);
    setNewVersionText('');
    setNewVersionPdfDataUrl('');
  };

  const cancelAddVersion = () => {
    setAddingVersion(false);
    setNewVersionText('');
    setNewVersionPdfDataUrl('');
  };

  const deleteVersion = (idx) => {
    if (!activeSong) return;
    const versions = [...getVersions(activeSong)];
    if (versions.length <= 1) return;
    versions.splice(idx, 1);
    const newIdx = Math.min(activeVersionIdx, versions.length - 1);
    updateSong(activeSong.id, { versions, text: versions[0].text });
    setActiveVersionIdx(newIdx);
  };

  const handlePrint = () => window.print();

  // ── Filtered / grouped data ─────────────────────────────────────────────

  const q = search.toLowerCase();

  const matchesSearch = (song) => {
    if (!q) return true;
    return (
      song.title.toLowerCase().includes(q) ||
      (song.artist || '').toLowerCase().includes(q) ||
      (song.key || '').toLowerCase().includes(q)
    );
  };

  // All songs in jam, filtered
  const allSongs = useMemo(
    () => jamSongs.filter(matchesSearch),
    [jamSongs, q]
  );

  // Denis tabs only
  const denisTabs = useMemo(
    () => jamSongs.filter((s) => s.source === 'denis').filter(matchesSearch),
    [jamSongs, q]
  );

  // Group by song title
  const bySong = useMemo(() => {
    const groups = {};
    for (const s of allSongs) {
      const key = s.title || 'Untitled';
      if (!groups[key]) groups[key] = [];
      groups[key].push(s);
    }
    return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
  }, [allSongs]);

  // Group by artist
  const byArtist = useMemo(() => {
    const groups = {};
    for (const s of allSongs) {
      const key = s.artist || 'Unknown';
      if (!groups[key]) groups[key] = [];
      groups[key].push(s);
    }
    return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
  }, [allSongs]);

  // === CHART VIEW ===
  if (view === 'chart' && activeSong) {
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
      const handleCleanLyrics = () => {
        const cleaned = cleanUGToLyrics(newVersionText);
        if (cleaned) {
          setNewVersionText(cleaned);
          setNewVersionLabel('Lyrics & Chords');
        }
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

          {newVersionLabel === 'PDF Upload' ? (
            <div className={styles.pdfUploadSection}>
              <label className={styles.pdfUploadLabel}>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handleVersionPdfSelect}
                  className={styles.pdfFileInput}
                />
                <span className={styles.pdfUploadBtn}>Choose PDF File</span>
              </label>
              {newVersionPdfDataUrl && (
                <div className={styles.pdfPreviewWrap}>
                  <p className={styles.pdfUploadSuccess}>PDF loaded — ready to save</p>
                  <PdfViewer dataUrl={newVersionPdfDataUrl} />
                </div>
              )}
            </div>
          ) : (
            <>
              {isUG && (
                <div className={styles.ugBanner}>
                  <span>Detected Ultimate Guitar format</span>
                  <button className={styles.convertBtn} onClick={handleCleanLyrics}>
                    Clean as Lyrics
                  </button>
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
                    <SmartRenderer text={previewText} />
                  </div>
                )}
              </div>
            </>
          )}
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
                <SmartRenderer text={editText} />
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
          <button className={styles.backBtn} onClick={goBack}>
            &larr; Back
          </button>
          <div className={styles.viewActions}>
            {!currentVersion.isPdf && (
              <button
                className={styles.editBtn}
                onClick={() => startEditing(currentVersion.text)}
              >
                Edit
              </button>
            )}
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
          {activeSong.level && (
            <span className={`${styles.levelBadge} ${styles['level' + activeSong.level.charAt(0).toUpperCase() + activeSong.level.slice(1)]}`}>
              {activeSong.level}
            </span>
          )}
        </div>

        {/* Version tabs */}
        {versions.length > 1 && (
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
          </div>
        )}

        <div className={styles.chartActions}>
          <button className={styles.addVersionSmBtn} onClick={startAddVersion}>
            + Add Version
          </button>
          {versions.length > 1 && (
            <button
              className={styles.deleteVersionBtn}
              onClick={() => deleteVersion(safeIdx)}
            >
              Delete this version
            </button>
          )}
        </div>

        <div className={styles.printArea}>
          {currentVersion.isPdf ? (
            <PdfViewer dataUrl={currentVersion.pdfDataUrl} />
          ) : (
            <SmartRenderer text={currentVersion.text} />
          )}
        </div>

        <div className={styles.chartFooter}>
          <a
            href={youtubeSearchUrl(`${activeSong.title} ${activeSong.artist} guitar lesson`)}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resourceLink}
          >
            YouTube Lessons &rarr;
          </a>
          <a
            href={ugSearchUrl(`${activeSong.title} ${activeSong.artist}`)}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resourceLink}
          >
            Ultimate Guitar &rarr;
          </a>
        </div>
      </div>
    );
  }

  // === RESOURCE SEARCH VIEW ===
  if (view === 'resourceSearch') {
    return (
      <div className={styles.page}>
        <div className={styles.viewHeader}>
          <button className={styles.backBtn} onClick={() => { setView('list'); setResourceSearch(''); }}>
            &larr; Back
          </button>
        </div>

        <h2 className={styles.heading}>Search YouTube &amp; Ultimate Guitar</h2>
        <p className={styles.pasteHint}>
          Search for songs, tabs, lessons, and backing tracks across YouTube and Ultimate Guitar.
        </p>

        <input
          className={styles.search}
          type="text"
          placeholder="Search for a song or artist..."
          value={resourceSearch}
          onChange={(e) => setResourceSearch(e.target.value)}
          autoFocus
        />

        {resourceSearch.trim() && (
          <div className={styles.resourceLinks}>
            <a
              href={youtubeSearchUrl(`${resourceSearch} guitar lesson`)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resourceCard}
            >
              <span className={styles.resourceIcon}>YT</span>
              <div className={styles.resourceCardInfo}>
                <span className={styles.resourceCardTitle}>YouTube Guitar Lessons</span>
                <span className={styles.resourceCardSub}>Search &ldquo;{resourceSearch}&rdquo; on YouTube</span>
              </div>
              <span className={styles.resourceArrow}>&rarr;</span>
            </a>

            <a
              href={youtubeSearchUrl(`${resourceSearch} guitar tab`)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resourceCard}
            >
              <span className={styles.resourceIcon}>YT</span>
              <div className={styles.resourceCardInfo}>
                <span className={styles.resourceCardTitle}>YouTube Tabs</span>
                <span className={styles.resourceCardSub}>Search &ldquo;{resourceSearch}&rdquo; tabs on YouTube</span>
              </div>
              <span className={styles.resourceArrow}>&rarr;</span>
            </a>

            <a
              href={ugSearchUrl(resourceSearch)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resourceCard}
            >
              <span className={styles.resourceIcon}>UG</span>
              <div className={styles.resourceCardInfo}>
                <span className={styles.resourceCardTitle}>Ultimate Guitar</span>
                <span className={styles.resourceCardSub}>Search &ldquo;{resourceSearch}&rdquo; on Ultimate Guitar</span>
              </div>
              <span className={styles.resourceArrow}>&rarr;</span>
            </a>

            <a
              href={youtubeSearchUrl(`${resourceSearch} backing track`)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resourceCard}
            >
              <span className={styles.resourceIcon}>BT</span>
              <div className={styles.resourceCardInfo}>
                <span className={styles.resourceCardTitle}>Backing Tracks</span>
                <span className={styles.resourceCardSub}>Search &ldquo;{resourceSearch}&rdquo; backing tracks</span>
              </div>
              <span className={styles.resourceArrow}>&rarr;</span>
            </a>
          </div>
        )}

        {!resourceSearch.trim() && (
          <p className={styles.empty}>
            Type a song or artist name above to search YouTube, Ultimate Guitar, and more.
          </p>
        )}
      </div>
    );
  }

  // === ADD FROM LIBRARY ===
  if (view === 'add') {
    return (
      <div className={styles.page}>
        <div className={styles.viewHeader}>
          <button className={styles.backBtn} onClick={goBack}>
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
      if (converted) setPasteText(converted);
    };

    const handleCleanLyrics = () => {
      const cleaned = cleanUGToLyrics(pasteText);
      if (cleaned) setPasteText(cleaned);
    };

    // Show preview: if UG detected, preview the cleaned lyrics version; otherwise preview as-is
    const previewText = pasteText.trim()
      ? isUG
        ? cleanUGToLyrics(pasteText) || ''
        : pasteText
      : '';

    return (
      <div className={styles.page}>
        <div className={styles.viewHeader}>
          <button className={styles.backBtn} onClick={() => { setView('list'); setPdfFile(null); setPdfDataUrl(''); setPdfTitle(''); setPdfArtist(''); }}>
            &larr; Back
          </button>
          {pdfDataUrl ? (
            <button className={styles.saveBtn} onClick={addFromPdf}>
              Save PDF
            </button>
          ) : (
            <button className={styles.saveBtn} onClick={addFromPaste}>
              Save Tab
            </button>
          )}
        </div>

        <h2 className={styles.heading}>Add to Denis Tabs</h2>

        {/* Toggle between Paste Text and Upload PDF */}
        <div className={styles.pasteModeTabs}>
          <button
            className={`${styles.pasteModeTab} ${!pdfDataUrl && !pdfFile ? styles.pasteModeTabActive : ''}`}
            onClick={() => { setPdfFile(null); setPdfDataUrl(''); setPdfTitle(''); setPdfArtist(''); }}
          >
            Paste Text
          </button>
          <button
            className={`${styles.pasteModeTab} ${pdfDataUrl || pdfFile ? styles.pasteModeTabActive : ''}`}
            onClick={() => {}}
          >
            Upload PDF
          </button>
        </div>

        {pdfDataUrl || pdfFile ? (
          <div className={styles.pdfUploadSection}>
            {!pdfDataUrl && (
              <label className={styles.pdfUploadLabel}>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handlePdfSelect}
                  className={styles.pdfFileInput}
                />
                <span className={styles.pdfUploadBtn}>Choose PDF File</span>
              </label>
            )}

            {pdfDataUrl && (
              <>
                <div className={styles.pdfMetaFields}>
                  <div className={styles.pdfMetaField}>
                    <label className={styles.fieldLabel}>Song Title</label>
                    <input
                      className={styles.search}
                      type="text"
                      placeholder="Song title..."
                      value={pdfTitle}
                      onChange={(e) => setPdfTitle(e.target.value)}
                    />
                  </div>
                  <div className={styles.pdfMetaField}>
                    <label className={styles.fieldLabel}>Artist</label>
                    <input
                      className={styles.search}
                      type="text"
                      placeholder="Artist name..."
                      value={pdfArtist}
                      onChange={(e) => setPdfArtist(e.target.value)}
                    />
                  </div>
                </div>
                <p className={styles.pdfUploadSuccess}>PDF loaded — fill in the details above and save</p>
                <div className={styles.pdfUploadActions}>
                  <button className={styles.pdfChangeBtn} onClick={() => { setPdfFile(null); setPdfDataUrl(''); }}>
                    Change PDF
                  </button>
                </div>
                <PdfViewer dataUrl={pdfDataUrl} />
              </>
            )}

            {!pdfDataUrl && (
              <div className={styles.pdfDropHint}>
                <p>Upload a PDF chart from Ultimate Tabs or any other source.</p>
                <p className={styles.pdfDropSub}>The original PDF will be saved as a version you can toggle between alongside your song chart.</p>
                <label className={styles.pdfUploadLabel}>
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={handlePdfSelect}
                    className={styles.pdfFileInput}
                  />
                  <span className={styles.pdfUploadBtnLg}>Select PDF to Upload</span>
                </label>
              </div>
            )}
          </div>
        ) : (
          <>
            <p className={styles.pasteHint}>
              Paste from Ultimate Guitar or use Nashville syntax (@title, @key, | chords |)
            </p>

            {isUG && (
              <div className={styles.ugBanner}>
                <span>Detected Ultimate Guitar format — Save will auto-create Lyrics &amp; Chords + Chord Chart versions</span>
                <button className={styles.convertBtn} onClick={handleCleanLyrics}>
                  Clean as Lyrics
                </button>
                <button className={styles.convertBtn} onClick={handleConvertUG}>
                  Convert to Nashville Only
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
                  <SmartRenderer text={previewText} />
                </div>
              )}
            </div>
          </>
        )}
      </div>
    );
  }

  // === MAIN LIST VIEW ===
  const totalSongs = jamSongs.length;

  const renderSongCard = (song) => {
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
            <span className={styles.songCardArtist}>{song.artist}</span>
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
  };

  const renderGroupedList = (groups) => (
    <div className={styles.groupedList}>
      {groups.map(([groupName, songs]) => (
        <div key={groupName} className={styles.bucket}>
          <div className={styles.bucketHeader}>
            <h3 className={styles.bucketLabel}>{groupName}</h3>
            <span className={styles.bucketCount}>{songs.length}</span>
          </div>
          <div className={styles.songList}>
            {songs.map(renderSongCard)}
          </div>
        </div>
      ))}
      {groups.length === 0 && (
        <p className={styles.empty}>No songs found.</p>
      )}
    </div>
  );

  return (
    <div className={styles.page}>
      <div className={styles.headerRow}>
        <h2 className={styles.heading}>Jam</h2>
        <div className={styles.headerActions}>
          <button className={styles.addTopBtn} onClick={() => setView('add')}>
            + Add Song
          </button>
          <button className={styles.pasteTopBtn} onClick={() => setView('paste')}>
            + Paste Tab
          </button>
          <button className={styles.resourceSearchBtn} onClick={() => setView('resourceSearch')}>
            Search YouTube / UG
          </button>
        </div>
      </div>

      {/* Stats */}
      {totalSongs > 0 && (
        <div className={styles.statsBar}>
          <span className={styles.stat}><strong>{totalSongs}</strong> songs</span>
          <span className={styles.statDivider}>|</span>
          <span className={styles.stat}><strong>{denisTabs.length}</strong> custom tabs</span>
          <span className={styles.statDivider}>|</span>
          <span className={styles.stat}><strong>{new Set(jamSongs.map((s) => s.artist).filter(Boolean)).size}</strong> artists</span>
        </div>
      )}

      {/* Tab bar */}
      <div className={styles.tabBar}>
        {TABS.map((tab) => (
          <button
            key={tab.key}
            className={`${styles.tabBtn} ${activeTab === tab.key ? styles.tabBtnActive : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Search (not on resources tab) */}
      {activeTab !== 'resources' && totalSongs > 0 && (
        <input
          className={styles.search}
          type="text"
          placeholder="Search your repertoire..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      )}

      {/* Empty state */}
      {totalSongs === 0 && activeTab !== 'resources' ? (
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
        <>
          {/* Songs tab — flat list of all songs */}
          {activeTab === 'songs' && (
            <div className={styles.songList}>
              {allSongs.map(renderSongCard)}
              {allSongs.length === 0 && totalSongs > 0 && (
                <p className={styles.empty}>No matches.</p>
              )}
            </div>
          )}

          {/* Tabs by Song */}
          {activeTab === 'bySong' && renderGroupedList(bySong)}

          {/* Tabs by Artist */}
          {activeTab === 'byArtist' && renderGroupedList(byArtist)}

          {/* Denis Tabs */}
          {activeTab === 'denis' && (
            <>
              <div className={styles.songList}>
                {denisTabs.map(renderSongCard)}
                {denisTabs.length === 0 && (
                  <div className={styles.emptyState}>
                    <p className={styles.emptyTitle}>No custom tabs yet</p>
                    <p className={styles.emptyText}>
                      Paste chord charts from Ultimate Guitar or write your own.
                    </p>
                    <button
                      className={styles.addTopBtn}
                      onClick={() => setView('paste')}
                    >
                      + Paste Your First Tab
                    </button>
                  </div>
                )}
              </div>
            </>
          )}

          {/* Resources tab */}
          {activeTab === 'resources' && (
            <div className={styles.resourcesSection}>
              <input
                className={styles.search}
                type="text"
                placeholder="Search for a song or artist..."
                value={resourceSearch}
                onChange={(e) => setResourceSearch(e.target.value)}
              />

              {resourceSearch.trim() && (
                <div className={styles.resourceLinks}>
                  <a
                    href={youtubeSearchUrl(`${resourceSearch} guitar lesson`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.resourceCard}
                  >
                    <span className={styles.resourceIcon}>YT</span>
                    <div className={styles.resourceCardInfo}>
                      <span className={styles.resourceCardTitle}>YouTube Guitar Lessons</span>
                      <span className={styles.resourceCardSub}>Search "{resourceSearch}" on YouTube</span>
                    </div>
                    <span className={styles.resourceArrow}>&rarr;</span>
                  </a>

                  <a
                    href={youtubeSearchUrl(`${resourceSearch} guitar tab`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.resourceCard}
                  >
                    <span className={styles.resourceIcon}>YT</span>
                    <div className={styles.resourceCardInfo}>
                      <span className={styles.resourceCardTitle}>YouTube Tabs</span>
                      <span className={styles.resourceCardSub}>Search "{resourceSearch}" tabs on YouTube</span>
                    </div>
                    <span className={styles.resourceArrow}>&rarr;</span>
                  </a>

                  <a
                    href={ugSearchUrl(resourceSearch)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.resourceCard}
                  >
                    <span className={styles.resourceIcon}>UG</span>
                    <div className={styles.resourceCardInfo}>
                      <span className={styles.resourceCardTitle}>Ultimate Guitar</span>
                      <span className={styles.resourceCardSub}>Search "{resourceSearch}" on Ultimate Guitar</span>
                    </div>
                    <span className={styles.resourceArrow}>&rarr;</span>
                  </a>

                  <a
                    href={youtubeSearchUrl(`${resourceSearch} backing track`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.resourceCard}
                  >
                    <span className={styles.resourceIcon}>BT</span>
                    <div className={styles.resourceCardInfo}>
                      <span className={styles.resourceCardTitle}>Backing Tracks</span>
                      <span className={styles.resourceCardSub}>Search "{resourceSearch}" backing tracks</span>
                    </div>
                    <span className={styles.resourceArrow}>&rarr;</span>
                  </a>
                </div>
              )}

              {!resourceSearch.trim() && (
                <p className={styles.pasteHint}>
                  Type a song or artist name above to search YouTube, Ultimate Guitar, and more.
                </p>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
