import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useMetronome } from '../hooks/useMetronome.js';
import styles from './Metronome.module.css';

const SUBDIVISIONS = [
  { value: 1, label: 'Quarter' },
  { value: 2, label: 'Eighth' },
  { value: 3, label: 'Triplet' },
  { value: 4, label: '16th' },
];

const TIME_SIGS = [
  { value: 4, label: '4/4' },
  { value: 3, label: '3/4' },
  { value: 6, label: '6/8' },
];

export default function Metronome() {
  const [searchParams] = useSearchParams();
  const {
    playing, bpm, setBpm, timeSignature, setTimeSignature,
    subdivision, setSubdivision, accentBeat1, setAccentBeat1,
    currentBeat, start, stop, restart, tapTempo,
  } = useMetronome();

  useEffect(() => {
    const urlBpm = searchParams.get('bpm');
    if (urlBpm) {
      const parsed = parseInt(urlBpm, 10);
      if (parsed >= 30 && parsed <= 250) setBpm(parsed);
    }
  }, [searchParams, setBpm]);

  const handleBpmChange = (newBpm) => {
    setBpm(newBpm);
    if (playing) restart();
  };

  const handleTimeSigChange = (val) => {
    setTimeSignature(val);
    if (playing) restart();
  };

  const handleSubChange = (val) => {
    setSubdivision(val);
    if (playing) restart();
  };

  return (
    <div className={styles.page}>
      <h2 className={styles.heading}>Metronome</h2>

      {/* BPM Display */}
      <div className={styles.bpmDisplay}>
        <span className={styles.bpmNumber}>{bpm}</span>
        <span className={styles.bpmLabel}>BPM</span>
      </div>

      {/* Beat Indicator */}
      <div className={styles.beats}>
        {Array.from({ length: timeSignature }, (_, i) => (
          <div
            key={i}
            className={`${styles.beatDot} ${playing && currentBeat === i ? styles.beatActive : ''} ${i === 0 ? styles.beatAccent : ''}`}
          />
        ))}
      </div>

      {/* BPM Slider */}
      <div className={styles.sliderRow}>
        <button className={styles.bpmBtn} onClick={() => handleBpmChange(Math.max(30, bpm - 1))}>-</button>
        <input
          type="range"
          min="30"
          max="250"
          value={bpm}
          onChange={(e) => handleBpmChange(parseInt(e.target.value, 10))}
          className={styles.slider}
        />
        <button className={styles.bpmBtn} onClick={() => handleBpmChange(Math.min(250, bpm + 1))}>+</button>
      </div>

      {/* Play / Tap */}
      <div className={styles.mainActions}>
        <button
          className={`${styles.playBtn} ${playing ? styles.playing : ''}`}
          onClick={playing ? stop : start}
        >
          {playing ? 'Stop' : 'Start'}
        </button>
        <button className={styles.tapBtn} onClick={tapTempo}>
          Tap Tempo
        </button>
      </div>

      {/* Settings */}
      <div className={styles.settings}>
        <div className={styles.settingGroup}>
          <span className={styles.settingLabel}>Time Sig</span>
          <div className={styles.settingOptions}>
            {TIME_SIGS.map((ts) => (
              <button
                key={ts.value}
                className={`${styles.settingBtn} ${timeSignature === ts.value ? styles.settingActive : ''}`}
                onClick={() => handleTimeSigChange(ts.value)}
              >
                {ts.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.settingGroup}>
          <span className={styles.settingLabel}>Subdivision</span>
          <div className={styles.settingOptions}>
            {SUBDIVISIONS.map((sub) => (
              <button
                key={sub.value}
                className={`${styles.settingBtn} ${subdivision === sub.value ? styles.settingActive : ''}`}
                onClick={() => handleSubChange(sub.value)}
              >
                {sub.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.settingGroup}>
          <label className={styles.checkLabel}>
            <input
              type="checkbox"
              checked={accentBeat1}
              onChange={(e) => {
                setAccentBeat1(e.target.checked);
                if (playing) restart();
              }}
            />
            Accent beat 1
          </label>
        </div>
      </div>
    </div>
  );
}
