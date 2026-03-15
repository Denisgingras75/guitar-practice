import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useBattleStore from '../hooks/useBattleStore.js';
import useBeatEngine from '../hooks/useBeatEngine.js';
import instrumentals from '../data/instrumentals.js';
import styles from './Battles.module.css';

export default function Battles() {
  const navigate = useNavigate();
  const { battles, customBeats, loading, createBattle, deleteBattle, addCustomBeat, deleteCustomBeat } = useBattleStore();
  const beatEngine = useBeatEngine();
  const [showNew, setShowNew] = useState(false);
  const [battleName, setBattleName] = useState('');
  const [players, setPlayers] = useState(['', '']);
  const [previewBeat, setPreviewBeat] = useState(null);
  const [filter, setFilter] = useState('All');
  const [showUpload, setShowUpload] = useState(false);
  const [uploadName, setUploadName] = useState('');

  const genres = ['All', ...new Set(instrumentals.map(b => b.genre))];

  const filteredBeats = filter === 'All'
    ? instrumentals
    : instrumentals.filter(b => b.genre === filter);

  const handleCreate = async () => {
    const validPlayers = players.filter(p => p.trim());
    if (!battleName.trim() || validPlayers.length < 2) return;
    const battle = await createBattle(battleName.trim(), validPlayers);
    navigate(`/battles/${battle.id}`);
  };

  const handlePreview = (beat) => {
    if (previewBeat === beat.id) {
      beatEngine.stop();
      setPreviewBeat(null);
    } else {
      beatEngine.play(beat);
      setPreviewBeat(beat.id);
    }
  };

  const handleUploadBeat = async (e) => {
    const file = e.target.files?.[0];
    if (!file || !uploadName.trim()) return;
    await addCustomBeat(uploadName.trim(), file);
    setUploadName('');
    setShowUpload(false);
    e.target.value = '';
  };

  const addPlayer = () => {
    if (players.length < 8) setPlayers([...players, '']);
  };

  const removePlayer = (idx) => {
    if (players.length > 2) setPlayers(players.filter((_, i) => i !== idx));
  };

  const updatePlayer = (idx, val) => {
    const next = [...players];
    next[idx] = val;
    setPlayers(next);
  };

  if (loading) return <div className={styles.page}><p className={styles.loading}>Loading...</p></div>;

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Freestyle Battles</h1>
      <p className={styles.subtitle}>Record over beats. Send bars back and forth. Crown the champion.</p>

      {/* Beat Preview Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Instrumentals</h2>
        <div className={styles.genreFilter}>
          {genres.map(g => (
            <button
              key={g}
              className={`${styles.genreBtn} ${filter === g ? styles.genreActive : ''}`}
              onClick={() => setFilter(g)}
            >
              {g}
            </button>
          ))}
        </div>
        <div className={styles.beatGrid}>
          {filteredBeats.map(beat => (
            <div key={beat.id} className={`${styles.beatCard} ${previewBeat === beat.id ? styles.beatPlaying : ''}`}>
              <div className={styles.beatInfo}>
                <span className={styles.beatName}>{beat.name}</span>
                <span className={styles.beatMeta}>{beat.bpm} BPM · {beat.key}</span>
              </div>
              <div className={styles.beatPattern}>
                {beat.pattern.kick.map((v, i) => (
                  <div
                    key={i}
                    className={`${styles.step} ${v || beat.pattern.snare[i] ? styles.stepActive : ''} ${beatEngine.currentStep === i && previewBeat === beat.id ? styles.stepCurrent : ''}`}
                  />
                ))}
              </div>
              <button
                className={`${styles.previewBtn} ${previewBeat === beat.id ? styles.previewStop : ''}`}
                onClick={() => handlePreview(beat)}
              >
                {previewBeat === beat.id ? 'Stop' : 'Preview'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Beats */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Custom Beats</h2>
          <button className={styles.addBtn} onClick={() => setShowUpload(!showUpload)}>
            {showUpload ? 'Cancel' : '+ Add Beat'}
          </button>
        </div>
        {showUpload && (
          <div className={styles.uploadForm}>
            <input
              type="text"
              className={styles.input}
              placeholder="Beat name..."
              value={uploadName}
              onChange={(e) => setUploadName(e.target.value)}
            />
            <label className={styles.fileLabel}>
              Choose Audio File
              <input
                type="file"
                accept="audio/*"
                onChange={handleUploadBeat}
                className={styles.fileInput}
              />
            </label>
          </div>
        )}
        {customBeats.length === 0 && !showUpload && (
          <p className={styles.empty}>No custom beats yet. Upload your own instrumentals!</p>
        )}
        {customBeats.map(beat => (
          <div key={beat.id} className={styles.customBeatItem}>
            <span className={styles.customBeatName}>{beat.name}</span>
            <button className={styles.deleteBtn} onClick={() => deleteCustomBeat(beat.id)}>Remove</button>
          </div>
        ))}
      </section>

      {/* Start New Battle */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Battles</h2>
          <button className={styles.newBattleBtn} onClick={() => setShowNew(!showNew)}>
            {showNew ? 'Cancel' : 'New Battle'}
          </button>
        </div>

        {showNew && (
          <div className={styles.newBattleForm}>
            <input
              type="text"
              className={styles.input}
              placeholder="Battle name..."
              value={battleName}
              onChange={(e) => setBattleName(e.target.value)}
            />
            <div className={styles.playersSection}>
              <span className={styles.playersLabel}>Players</span>
              {players.map((p, i) => (
                <div key={i} className={styles.playerRow}>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder={`Player ${i + 1} name...`}
                    value={p}
                    onChange={(e) => updatePlayer(i, e.target.value)}
                  />
                  {players.length > 2 && (
                    <button className={styles.removePlayerBtn} onClick={() => removePlayer(i)}>×</button>
                  )}
                </div>
              ))}
              <button className={styles.addPlayerBtn} onClick={addPlayer}>+ Add Player</button>
            </div>
            <button
              className={styles.startBtn}
              onClick={handleCreate}
              disabled={!battleName.trim() || players.filter(p => p.trim()).length < 2}
            >
              Start Battle
            </button>
          </div>
        )}

        {/* Battle List */}
        {battles.length === 0 && !showNew && (
          <p className={styles.empty}>No battles yet. Start one up!</p>
        )}
        {battles.map(battle => (
          <div
            key={battle.id}
            className={styles.battleCard}
            onClick={() => navigate(`/battles/${battle.id}`)}
          >
            <div className={styles.battleInfo}>
              <span className={styles.battleName}>{battle.name}</span>
              <span className={styles.battleMeta}>
                {battle.players.join(' vs ')} · {battle.rounds.length} round{battle.rounds.length !== 1 ? 's' : ''}
              </span>
            </div>
            <div className={styles.battleActions}>
              <span className={`${styles.battleStatus} ${battle.status === 'active' ? styles.statusActive : styles.statusDone}`}>
                {battle.status === 'active' ? 'Live' : 'Done'}
              </span>
              <button
                className={styles.deleteBtn}
                onClick={(e) => { e.stopPropagation(); deleteBattle(battle.id); }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
