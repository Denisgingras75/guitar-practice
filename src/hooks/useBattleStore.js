import { useState, useCallback, useEffect } from 'react';

// IndexedDB wrapper for storing battles and audio blobs
const DB_NAME = 'freestyleBattles';
const DB_VERSION = 1;

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('battles')) {
        db.createObjectStore('battles', { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains('recordings')) {
        db.createObjectStore('recordings', { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains('customBeats')) {
        db.createObjectStore('customBeats', { keyPath: 'id' });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

function dbPut(storeName, data) {
  return openDB().then(db => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(storeName, 'readwrite');
      tx.objectStore(storeName).put(data);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  });
}

function dbGetAll(storeName) {
  return openDB().then(db => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(storeName, 'readonly');
      const req = tx.objectStore(storeName).getAll();
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  });
}

function dbGet(storeName, id) {
  return openDB().then(db => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(storeName, 'readonly');
      const req = tx.objectStore(storeName).get(id);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  });
}

function dbDelete(storeName, id) {
  return openDB().then(db => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(storeName, 'readwrite');
      tx.objectStore(storeName).delete(id);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  });
}

export default function useBattleStore() {
  const [battles, setBattles] = useState([]);
  const [customBeats, setCustomBeats] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadBattles = useCallback(async () => {
    try {
      const all = await dbGetAll('battles');
      setBattles(all.sort((a, b) => b.createdAt - a.createdAt));
    } catch (e) {
      console.error('Failed to load battles:', e);
    }
  }, []);

  const loadCustomBeats = useCallback(async () => {
    try {
      const all = await dbGetAll('customBeats');
      setCustomBeats(all.sort((a, b) => b.addedAt - a.addedAt));
    } catch (e) {
      console.error('Failed to load custom beats:', e);
    }
  }, []);

  useEffect(() => {
    Promise.all([loadBattles(), loadCustomBeats()]).then(() => setLoading(false));
  }, [loadBattles, loadCustomBeats]);

  const createBattle = useCallback(async (name, players) => {
    const battle = {
      id: crypto.randomUUID(),
      name,
      players, // array of player names
      rounds: [],
      createdAt: Date.now(),
      status: 'active', // active | completed
    };
    await dbPut('battles', battle);
    await loadBattles();
    return battle;
  }, [loadBattles]);

  const addRound = useCallback(async (battleId, round) => {
    // round: { player, beatId, audioBlob, duration, recordedAt }
    const battle = await dbGet('battles', battleId);
    if (!battle) return null;

    const recordingId = crypto.randomUUID();
    // Store audio blob separately
    await dbPut('recordings', { id: recordingId, blob: round.audioBlob });

    battle.rounds.push({
      id: crypto.randomUUID(),
      player: round.player,
      beatId: round.beatId,
      beatName: round.beatName,
      recordingId,
      duration: round.duration,
      recordedAt: Date.now(),
    });

    await dbPut('battles', battle);
    await loadBattles();
    return battle;
  }, [loadBattles]);

  const getRecording = useCallback(async (recordingId) => {
    const rec = await dbGet('recordings', recordingId);
    return rec ? rec.blob : null;
  }, []);

  const deleteBattle = useCallback(async (battleId) => {
    const battle = await dbGet('battles', battleId);
    if (battle) {
      // Delete all associated recordings
      for (const round of battle.rounds) {
        await dbDelete('recordings', round.recordingId);
      }
    }
    await dbDelete('battles', battleId);
    await loadBattles();
  }, [loadBattles]);

  const addCustomBeat = useCallback(async (name, audioFile) => {
    const beat = {
      id: crypto.randomUUID(),
      name,
      blob: audioFile,
      addedAt: Date.now(),
      type: 'custom',
    };
    await dbPut('customBeats', beat);
    await loadCustomBeats();
    return beat;
  }, [loadCustomBeats]);

  const deleteCustomBeat = useCallback(async (beatId) => {
    await dbDelete('customBeats', beatId);
    await loadCustomBeats();
  }, [loadCustomBeats]);

  const exportBattle = useCallback(async (battleId) => {
    const battle = await dbGet('battles', battleId);
    if (!battle) return null;

    // Collect all recordings
    const recordings = {};
    for (const round of battle.rounds) {
      const blob = await dbGet('recordings', round.recordingId);
      if (blob) recordings[round.recordingId] = blob.blob;
    }
    return { battle, recordings };
  }, []);

  return {
    battles,
    customBeats,
    loading,
    createBattle,
    addRound,
    getRecording,
    deleteBattle,
    addCustomBeat,
    deleteCustomBeat,
    exportBattle,
    reload: loadBattles,
  };
}
