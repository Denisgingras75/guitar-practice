import { Link } from 'react-router-dom';
import { usePracticeLog } from '../hooks/usePracticeLog.js';
import styles from './Home.module.css';

const categories = [
  { to: '/skills', name: 'Skill Trees', desc: '6 trees from foundation to mastery — track your progress' },
  { to: '/practice', name: 'Quick Practice', desc: 'Structured sessions, beginner to advanced' },
  { to: '/scales', name: 'Scales', desc: '25+ scales with fretboard diagrams in any key' },
  { to: '/modes', name: 'Modes', desc: 'All 7 modes — moods, chord fits, characteristic notes' },
  { to: '/chords', name: 'Chords', desc: 'Open, barre, 7ths, extensions, voicing diagrams' },
  { to: '/techniques', name: 'Techniques', desc: 'Bending, vibrato, legato, tapping, picking' },
  { to: '/guitarists', name: 'Artists', desc: 'Study Hendrix, Page, Santana, Sturgill, Rick M' },
  { to: '/tuner', name: 'Tuner', desc: 'Chromatic tuner — mic-based pitch detection' },
];

export default function Home() {
  const { getRecentSessions, getTotalMinutes } = usePracticeLog();
  const recent = getRecentSessions(7);
  const totalMin = Math.round(getTotalMinutes(7) * 10) / 10;

  return (
    <div className={styles.page}>
      <div className={styles.stats}>
        <div className={styles.statCard}>
          <span className={styles.statValue}>{totalMin}</span>
          <span className={styles.statLabel}>min this week</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statValue}>{recent.length}</span>
          <span className={styles.statLabel}>sessions</span>
        </div>
      </div>

      <h2 className={styles.heading}>Categories</h2>
      <div className={styles.grid}>
        {categories.map((cat) => (
          <Link key={cat.to} to={cat.to} className={styles.categoryCard}>
            <div className={styles.categoryName}>{cat.name}</div>
            <div className={styles.categoryDesc}>{cat.desc}</div>
          </Link>
        ))}
      </div>

      {recent.length > 0 && (
        <>
          <h2 className={styles.heading}>Recent Sessions</h2>
          <ul className={styles.recentList}>
            {recent
              .slice()
              .reverse()
              .slice(0, 5)
              .map((entry) => (
                <li key={entry.id} className={styles.recentItem}>
                  <span className={styles.recentTopic}>{entry.topic}</span>
                  <span className={styles.recentMeta}>
                    {entry.durationMinutes} min &middot;{' '}
                    {new Date(entry.date).toLocaleDateString()}
                  </span>
                </li>
              ))}
          </ul>
        </>
      )}
    </div>
  );
}
