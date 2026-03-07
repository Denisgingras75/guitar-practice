import { Link } from 'react-router-dom';
import { usePracticeLog } from '../hooks/usePracticeLog.js';
import styles from './Home.module.css';

const sections = [
  {
    title: 'Practice',
    colorVar: '--section-practice',
    items: [
      { to: '/skills', name: 'Skill Trees', desc: '6 trees from foundation to mastery', icon: '\uD83C\uDFAF' },
      { to: '/practice', name: 'Routines', desc: 'Structured sessions by level', icon: '\uD83D\uDCCB' },
    ],
  },
  {
    title: 'Learn',
    colorVar: '--section-learn',
    items: [
      { to: '/scales', name: 'Scales', desc: '25+ scales with fretboard diagrams', icon: '\uD83C\uDFB5' },
      { to: '/modes', name: 'Modes', desc: '7 modes with moods & chord fits', icon: '\uD83C\uDF1F' },
      { to: '/chords', name: 'Chords', desc: 'Open, barre, 7ths, extensions', icon: '\u270A' },
      { to: '/techniques', name: 'Techniques', desc: 'Bending, legato, tapping, picking', icon: '\u26A1' },
    ],
  },
  {
    title: 'Songs',
    colorVar: '--section-songs',
    items: [
      { to: '/charts', name: 'Song Charts', desc: 'Nashville charts + YouTube lessons', icon: '\uD83C\uDFB6' },
      { to: '/guitarists', name: 'Artists', desc: 'Study the greats & their techniques', icon: '\uD83C\uDFB8' },
    ],
  },
  {
    title: 'Tools',
    colorVar: '--section-tools',
    items: [
      { to: '/tuner', name: 'Tuner', desc: 'Chromatic mic-based pitch detection', icon: '\uD83C\uDFA4' },
      { to: '/metronome', name: 'Metronome', desc: 'Tap tempo, subdivisions, accents', icon: '\u23F1\uFE0F' },
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
          <h2 className={styles.sectionTitle} style={{ color: `var(${section.colorVar})` }}>{section.title}</h2>
          <div className={styles.grid}>
            {section.items.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={styles.categoryCard}
                style={{ borderLeftColor: `var(${section.colorVar})` }}
              >
                <span className={styles.categoryIcon}>{item.icon}</span>
                <div className={styles.categoryText}>
                  <div className={styles.categoryName}>{item.name}</div>
                  <div className={styles.categoryDesc}>{item.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}

      {recent.length > 0 && (
        <div className={styles.recentSection}>
          <h2 className={styles.sectionTitle} style={{ color: 'var(--fg-dim)' }}>Recent Sessions</h2>
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
        </div>
      )}
    </div>
  );
}
