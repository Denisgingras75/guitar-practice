import { Link } from 'react-router-dom';
import useBattleHistory from '../hooks/useBattleHistory.js';
import styles from './Home.module.css';

export default function Home() {
  const { getStats, history } = useBattleHistory();
  const stats = getStats();
  const recent = history.slice(0, 5);

  return (
    <div className={styles.home}>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroGlow} />
        <h2 className={styles.heroTitle}>DROP BARS.<br />WIN BATTLES.</h2>
        <p className={styles.heroSub}>Sharpen your freestyle skills and go head-to-head</p>
        <div className={styles.heroCtas}>
          <Link to="/battle" className="btn btn-primary btn-lg">
            &#9876;&#65039; Start Battle
          </Link>
          <Link to="/practice" className="btn btn-secondary btn-lg">
            &#127908; Solo Practice
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className={styles.statsRow}>
        <div className={styles.stat}>
          <span className={styles.statNum}>{stats.total}</span>
          <span className={styles.statLabel}>Sessions</span>
        </div>
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

      {/* Quick Actions */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Quick Start</h3>
        <div className={styles.quickGrid}>
          <Link to="/practice?mode=freestyle" className={styles.quickCard}>
            <span className={styles.quickIcon}>&#127911;</span>
            <span className={styles.quickLabel}>Free Flow</span>
            <span className={styles.quickDesc}>Open freestyle with beats</span>
          </Link>
          <Link to="/practice?mode=topic" className={styles.quickCard}>
            <span className={styles.quickIcon}>&#128172;</span>
            <span className={styles.quickLabel}>Topic Drill</span>
            <span className={styles.quickDesc}>Random topics to rap about</span>
          </Link>
          <Link to="/practice?mode=words" className={styles.quickCard}>
            <span className={styles.quickIcon}>&#128221;</span>
            <span className={styles.quickLabel}>Word Play</span>
            <span className={styles.quickDesc}>Use given words in your bars</span>
          </Link>
          <Link to="/battle" className={styles.quickCard}>
            <span className={styles.quickIcon}>&#128293;</span>
            <span className={styles.quickLabel}>Battle</span>
            <span className={styles.quickDesc}>1v1 turn-based battle</span>
          </Link>
        </div>
      </div>

      {/* Recent Activity */}
      {recent.length > 0 && (
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Recent Activity</h3>
            <Link to="/history" className={styles.viewAll}>View all</Link>
          </div>
          <div className={styles.recentList}>
            {recent.map(item => (
              <div key={item.id} className={styles.recentItem}>
                <span className={styles.recentIcon}>
                  {item.type === 'battle' ? '\u2694\ufe0f' : '\ud83c\udfa4'}
                </span>
                <div className={styles.recentInfo}>
                  <span className={styles.recentName}>{item.name || item.type}</span>
                  <span className={styles.recentMeta}>
                    {new Date(item.date).toLocaleDateString()}
                    {item.winner && ` \u2022 Winner: ${item.winner}`}
                  </span>
                </div>
                {item.type === 'battle' && (
                  <span className={`badge ${item.winner ? 'badge-gold' : 'badge-fire'}`}>
                    {item.rounds} rounds
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
