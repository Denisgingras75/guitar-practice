import { parseChart } from '../utils/chartParser.js';
import styles from './ChartRenderer.module.css';

export default function ChartRenderer({ text }) {
  let chart;
  try {
    chart = parseChart(text);
  } catch {
    return <p style={{ color: 'var(--fg-muted)' }}>Invalid chart syntax.</p>;
  }

  return (
    <div className={styles.chart}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>{chart.title || 'Untitled'}</h2>
        <div className={styles.metaRow}>
          {chart.key && <span className={styles.metaBadge}>Key: {chart.key}</span>}
          {chart.tempo && <span className={styles.metaBadge}>{chart.tempo} BPM</span>}
          {chart.feel && <span className={styles.metaFeel}>{chart.feel}</span>}
        </div>
      </div>

      {/* Sections */}
      {chart.sections.map((section) => (
        <div key={section.id} className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>{section.id}</span>
            <span className={styles.sectionName}>{section.name}</span>
            {section.repeat > 1 && (
              <span className={styles.repeatBadge}>x{section.repeat}</span>
            )}
          </div>
          <div className={styles.barGrid}>
            {section.bars.map((bar, i) => (
              <div
                key={i}
                className={`${styles.bar} ${bar.simile ? styles.barSimile : ''} ${bar.chords.length > 1 ? styles.barSplit : ''}`}
              >
                {bar.simile ? (
                  <span className={styles.simile}>%</span>
                ) : bar.chords.length > 1 ? (
                  <div className={styles.splitBar}>
                    {bar.chords.map((chord, j) => (
                      <span key={j} className={styles.splitChord}>{chord}</span>
                    ))}
                  </div>
                ) : (
                  <span className={styles.chord}>{bar.chords[0]}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Structure */}
      {chart.structure.length > 0 && (
        <div className={styles.structure}>
          <span className={styles.structureLabel}>Structure</span>
          <div className={styles.structureList}>
            {chart.structure.map((id, i) => {
              const sec = chart.sections.find((s) => s.id === id);
              return (
                <span key={i} className={styles.structureItem}>
                  <span className={styles.structureItemBadge}>{id}</span>
                  {sec && <span className={styles.structureItemName}>{sec.name}</span>}
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
