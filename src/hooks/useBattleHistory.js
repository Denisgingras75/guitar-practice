import { useState, useCallback } from 'react';

const STORAGE_KEY = 'freestyle-battle-history';

function loadHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveHistory(history) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

export default function useBattleHistory() {
  const [history, setHistory] = useState(loadHistory);

  const addBattle = useCallback((battle) => {
    setHistory(prev => {
      const next = [{ ...battle, id: Date.now(), date: new Date().toISOString() }, ...prev];
      saveHistory(next);
      return next;
    });
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
    saveHistory([]);
  }, []);

  const getStats = useCallback(() => {
    const total = history.length;
    const battles = history.filter(h => h.type === 'battle');
    const practices = history.filter(h => h.type === 'practice');
    const totalRounds = battles.reduce((sum, b) => sum + (b.rounds || 0), 0);
    return { total, battles: battles.length, practices: practices.length, totalRounds };
  }, [history]);

  return { history, addBattle, clearHistory, getStats };
}
