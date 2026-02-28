import { Link } from 'react-router-dom';
import { usePracticeLog } from '../hooks/usePracticeLog.js';
import styles from './Home.module.css';

const categories = [
  { to: '/scales', name: 'Scales', desc: 'Major, minor, pentatonic, blues, harmonic, melodic' },
  { to: '/modes', name: 'Modes', desc: 'Ionian through Locrian' },
  { to: '/chords', name: 'Chords', desc: 'Open, barre, 7ths, extensions' },
  { to: '/techniques', name: 'Techniques', desc: 'Bending, vibrato, legato, tapping, picking' },
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
