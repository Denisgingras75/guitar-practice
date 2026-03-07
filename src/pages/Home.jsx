import { Link } from 'react-router-dom';
import { usePracticeLog } from '../hooks/usePracticeLog.js';
import styles from './Home.module.css';

const sections = [
  {
    title: 'Practice',
    items: [
      { to: '/skills', name: 'Skill Trees', desc: '6 trees from foundation to mastery — track your progress' },
      { to: '/practice', name: 'Routines', desc: 'Structured sessions, beginner to advanced' },
    ],
  },
  {
    title: 'Learn',
    items: [
      { to: '/scales', name: 'Scales', desc: '25+ scales with fretboard diagrams in any key' },
      { to: '/modes', name: 'Modes', desc: 'All 7 modes — moods, chord fits, characteristic notes' },
      { to: '/chords', name: 'Chords', desc: 'Open, barre, 7ths, extensions, voicing diagrams' },
      { to: '/techniques', name: 'Techniques', desc: 'Bending, vibrato, legato, tapping, picking' },
    ],
  },
  {
    title: 'Songs',
    items: [
      { to: '/charts', name: 'Song Charts', desc: 'Nashville-style chord charts — browse or build your own' },
      { to: '/guitarists', name: 'Artists', desc: 'Study Hendrix, Page, Santana, Sturgill, Rick M' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { to: '/tuner', name: 'Tuner', desc: 'Chromatic tuner — mic-based pitch detection' },
      { to: '/metronome', name: 'Metronome', desc: 'Tap tempo, subdivisions, accent — Web Audio click track' },
    ],
  },
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

      {sections.map((section) => (
        <div key={section.title} className={styles.section}>
          <h2 className={styles.sectionTitle}>{section.title}</h2>
          <div className={styles.grid}>
            {section.items.map((item) => (
              <Link key={item.to} to={item.to} className={styles.categoryCard}>
                <div className={styles.categoryName}>{item.name}</div>
                <div className={styles.categoryDesc}>{item.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      ))}

      {recent.length > 0 && (
        <>
          <h2 className={styles.heading}>Recent Sessions</h2>
          <ul className={styles.recentList}>
            {[...recent]
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
