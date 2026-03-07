import { useState } from 'react';
import { ROUTINES } from '../data/routines.js';
import PracticeTimer from '../components/PracticeTimer.jsx';
import { usePracticeLog } from '../hooks/usePracticeLog.js';
import styles from './Routines.module.css';

const LEVELS = ['all', 'beginner', 'intermediate', 'advanced'];
const INSTRUMENTS = ['all', 'electric', 'acoustic', 'both'];

export default function Routines() {
  const [filter, setFilter] = useState({ level: 'all', instrument: 'all' });
  const [expanded, setExpanded] = useState(null);
  const [practicing, setPracticing] = useState(null);
  const { addEntry } = usePracticeLog();

  const filtered = ROUTINES.filter((r) => {
    if (filter.level !== 'all' && r.level !== 'all' && r.level !== filter.level) return false;
    if (filter.instrument !== 'all' && r.instrument !== 'both' && r.instrument !== filter.instrument) return false;
    return true;
  });

  const handleComplete = (entry) => {
    addEntry(entry);
    setPracticing(null);
  };

  return (
    <div className={styles.page}>
      <h2 className={styles.heading}>Practice Routines</h2>

      {practicing && (
        <div className={styles.timerWrap}>
          <PracticeTimer topic={practicing} onComplete={handleComplete} />
        </div>
      )}

      {/* Filters */}
      <div className={styles.filters}>
        <label className={styles.filterLabel}>
          Level
          <select
            value={filter.level}
            onChange={(e) => setFilter((f) => ({ ...f, level: e.target.value }))}
          >
            {LEVELS.map((l) => (
              <option key={l} value={l}>{l === 'all' ? 'All Levels' : l.charAt(0).toUpperCase() + l.slice(1)}</option>
            ))}
          </select>
        </label>
        <label className={styles.filterLabel}>
          Instrument
          <select
            value={filter.instrument}
            onChange={(e) => setFilter((f) => ({ ...f, instrument: e.target.value }))}
          >
            {INSTRUMENTS.map((i) => (
              <option key={i} value={i}>{i === 'all' ? 'All' : i.charAt(0).toUpperCase() + i.slice(1)}</option>
            ))}
          </select>
        </label>
      </div>

      {/* Routine Cards */}
      <div className={styles.list}>
        {filtered.map((routine) => {
          const isExpanded = expanded === routine.id;
          return (
            <div key={routine.id} className={styles.card}>
              <button
                className={styles.cardToggle}
                onClick={() => setExpanded(isExpanded ? null : routine.id)}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.routineName}>{routine.name}</span>
                  <div className={styles.badges}>
                    <span className={styles.badgeLevel} data-level={routine.level}>
                      {routine.level}
                    </span>
                    <span className={styles.badgeInstrument} data-instrument={routine.instrument}>
                      {routine.instrument}
                    </span>
                    <span className={styles.badgeTime}>{routine.totalMinutes} min</span>
                  </div>
                </div>
                <p className={styles.routineDesc}>{routine.description}</p>
                <span className={styles.chevron}>{isExpanded ? '\u25B2' : '\u25BC'}</span>
              </button>

              {isExpanded && (
                <div className={styles.sections}>
                  {/* Timeline bar */}
                  <div className={styles.timeline}>
                    {routine.sections.map((s) => (
                      <div
                        key={s.name}
                        className={styles.timelineSegment}
                        style={{ flex: s.minutes }}
                        title={`${s.name} — ${s.minutes} min`}
                      >
                        <span className={styles.timelineLabel}>{s.name}</span>
                      </div>
                    ))}
                  </div>

                  {routine.sections.map((section) => (
                    <div key={section.name} className={styles.section}>
                      <div className={styles.sectionHeader}>
                        <span className={styles.sectionName}>{section.name}</span>
                        <span className={styles.sectionTime}>{section.minutes} min</span>
                      </div>
                      <div className={styles.exercises}>
                        {section.exercises.map((ex) => (
                          <div key={ex.name} className={styles.exercise}>
                            <div className={styles.exerciseHeader}>
                              <span className={styles.exerciseName}>{ex.name}</span>
                              <button
                                className={styles.practiceBtn}
                                onClick={() => setPracticing({
                                  name: `${ex.name} (${routine.name})`,
                                  category: 'routines',
                                })}
                              >
                                Practice
                              </button>
                            </div>
                            <p className={styles.exerciseDesc}>{ex.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  <button
                    className={styles.startRoutineBtn}
                    onClick={() => setPracticing({
                      name: routine.name,
                      category: 'routines',
                    })}
                  >
                    Start Full Routine ({routine.totalMinutes} min)
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className={styles.empty}>No routines match your filters. Try adjusting level or instrument.</p>
      )}
    </div>
  );
}
