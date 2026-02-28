import { useLocalStorage } from './useLocalStorage.js';

export function usePracticeLog() {
  const [log, setLog] = useLocalStorage('practice-log', []);

  const addEntry = (entry) => {
    setLog(prev => [...prev, {
      ...entry,
      id: Date.now(),
      date: new Date().toISOString(),
    }]);
  };

  const getRecentSessions = (days = 7) => {
    const cutoff = Date.now() - days * 86400000;
    return log.filter(e => new Date(e.date).getTime() > cutoff);
  };

  const getTotalMinutes = (days = 7) => {
    return getRecentSessions(days).reduce((sum, e) => sum + (e.durationMinutes || 0), 0);
  };

  return { log, addEntry, getRecentSessions, getTotalMinutes };
}
