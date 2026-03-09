import { useState, useRef } from 'react';
import { GUITARISTS } from '../data/guitarists.js';
import PracticeTimer from '../components/PracticeTimer.jsx';
import { usePracticeLog } from '../hooks/usePracticeLog.js';
import styles from './Guitarists.module.css';

export default function Guitarists() {
  const [practicing, setPracticing] = useState(null);
  const [expanded, setExpanded] = useState(null);
  const { addEntry } = usePracticeLog();
  const timerRef = useRef(null);

  var handleComplete = function (entry) {
    addEntry(entry);
    setPracticing(null);
  };

  var handlePractice = function (name, guitarist) {
    setPracticing({ name: name + ' (' + guitarist + ')', category: 'guitarists' });
    // Scroll to the timer so the user can see it
    setTimeout(function () {
      if (timerRef.current) {
        timerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  var toggleExpand = function (id) {
    setExpanded(function (prev) { return prev === id ? null : id; });
  };

  return (
    <div className={styles.page}>
      <h2 className={styles.heading}>Guitarists</h2>

      {practicing && (
        <div ref={timerRef} className={styles.timerWrap}>
          <PracticeTimer
            topic={practicing}
            onComplete={handleComplete}
          />
        </div>
      )}

      <div className={styles.list}>
        {GUITARISTS.map(function (g) {
          var isExpanded = expanded === g.id;
          return (
            <div key={g.id} className={styles.card}>
              {/* Header */}
              <button
                className={styles.cardToggle}
                onClick={function () { toggleExpand(g.id); }}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.guitaristName}>{g.name}</span>
                  <span className={styles.bandName}>{g.band}</span>
                </div>
                <div className={styles.genreTags}>
                  {g.genre.map(function (genre) {
                    return <span key={genre} className={styles.genreTag}>{genre}</span>;
                  })}
                </div>
                <span className={styles.chevron}>{isExpanded ? '\u25B2' : '\u25BC'}</span>
              </button>

              <p className={styles.description}>{g.description}</p>

              {isExpanded && (
                <div className={styles.details}>
                  {/* Signature Scales */}
                  <div className={styles.section}>
                    <div className={styles.subHeading}>Signature Scales</div>
                    <div className={styles.scaleTags}>
                      {g.signatureScales.map(function (scale) {
                        return <span key={scale} className={styles.scaleTag}>{scale}</span>;
                      })}
                    </div>
                  </div>

                  {/* Key Techniques */}
                  <div className={styles.section}>
                    <div className={styles.subHeading}>Key Techniques</div>
                    <div className={styles.techniqueList}>
                      {g.keyTechniques.map(function (tech) {
                        return (
                          <div key={tech.name} className={styles.techniqueItem}>
                            <div className={styles.techniqueHeader}>
                              <span className={styles.techniqueName}>{tech.name}</span>
                              <button
                                className={styles.practiceBtn}
                                onClick={function () { handlePractice(tech.name, g.name); }}
                              >
                                Practice This
                              </button>
                            </div>
                            <p className={styles.techniqueDesc}>{tech.description}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Signature Songs */}
                  <div className={styles.section}>
                    <div className={styles.subHeading}>Signature Songs</div>
                    <div className={styles.songList}>
                      {g.signatureSongs.map(function (song) {
                        return (
                          <div key={song.name} className={styles.songItem}>
                            <span className={styles.songName}>{song.name}</span>
                            <p className={styles.songReason}>{song.reason}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Practice Routine */}
                  <div className={styles.section}>
                    <div className={styles.subHeading}>Practice Routine</div>
                    <ol className={styles.routineList}>
                      {g.practiceApproach.map(function (exercise, i) {
                        return (
                          <li key={i} className={styles.routineItem}>
                            <div className={styles.routineHeader}>
                              <span className={styles.routineName}>{exercise.name}</span>
                              <button
                                className={styles.practiceBtn}
                                onClick={function () { handlePractice(exercise.name, g.name); }}
                              >
                                Practice This
                              </button>
                            </div>
                            <p className={styles.routineDesc}>{exercise.description}</p>
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
