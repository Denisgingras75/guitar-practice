import useBattleHistory from '../hooks/useBattleHistory.js';
import styles from './History.module.css';

export default function History() {
  const { history, clearHistory, getStats } = useBattleHistory();
  const stats = getStats();

  return (
    <div className={styles.history}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.pageTitle}>Battle History</h2>
          <p className={styles.pageDesc}>{stats.total} total sessions</p>
        </div>
        {history.length > 0 && (
          <button className="btn btn-outline btn-sm" onClick={clearHistory}>Clear All</button>
        )}
      </div>

      {/* Stats */}
      <div className={styles.statsRow}>
        <div className={styles.stat}>
          <span className={styles.statNum}>{stats.battles}</span>
          <span className={styles.statLabel}>Battles</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum}>{stats.practices}</span>
          <span className={styles.statLabel}>Practice</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum}>{stats.totalRounds}</span>
          <span className={styles.statLabel}>Rounds</span>
        </div>
      </div>

      {/* List */}
      {history.length === 0 ? (
        <div className={styles.empty}>
          <span className={styles.emptyIcon}>&#127908;</span>
          <p className={styles.emptyText}>No sessions yet. Start a battle or practice to see your history here.</p>
        </div>
      ) : (
        <div className={styles.list}>
          {history.map(item => (
            <div key={item.id} className={styles.item}>
              <div className={styles.itemHeader}>
                <span className={styles.itemIcon}>
                  {item.type === 'battle' ? '\u2694\ufe0f' : '\ud83c\udfa4'}
                </span>
                <div className={styles.itemInfo}>
                  <span className={styles.itemName}>{item.name}</span>
                  <span className={styles.itemDate}>
                    {new Date(item.date).toLocaleDateString('en-US', {
                      month: 'short', day: 'numeric', year: 'numeric',
                      hour: '2-digit', minute: '2-digit',
                    })}
                  </span>
                </div>
                <span className={`badge ${item.type === 'battle' ? 'badge-fire' : 'badge-green'}`}>
                  {item.type === 'battle' ? 'Battle' : 'Practice'}
                </span>
              </div>

              {item.type === 'battle' && (
                <div className={styles.battleDetail}>
                  <div className={styles.matchup}>
                    <span className={item.winner === item.player1 ? styles.winner : ''}>{item.player1}</span>
                    <span className={styles.matchScore}>{item.score1} - {item.score2}</span>
                    <span className={item.winner === item.player2 ? styles.winner : ''}>{item.player2}</span>
                  </div>
                  <div className={styles.meta}>
                    <span>{item.format}</span>
                    <span>{item.rounds} rounds</span>
                    <span>{item.beat}</span>
                  </div>
                </div>
              )}

              {item.type === 'practice' && (
                <div className={styles.practiceDetail}>
                  <div className={styles.meta}>
                    <span>{item.mode}</span>
                    {item.topic && <span>Topic: {item.topic}</span>}
                    {item.challenge && <span>{item.challenge}</span>}
                    <span>{item.beat}</span>
                    {item.selfScore && (
                      <span>{'★'.repeat(item.selfScore)}{'☆'.repeat(5 - item.selfScore)}</span>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
