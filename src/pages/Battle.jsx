import { useState, useEffect, useCallback, useRef } from 'react';
import { battleFormats, scoringCategories, getRandomTopic } from '../data/prompts.js';
import { beats } from '../data/beats.js';
import useBeatPlayer from '../hooks/useBeatPlayer.js';
import useBattleHistory from '../hooks/useBattleHistory.js';
import styles from './Battle.module.css';

const PHASES = { SETUP: 'setup', BATTLE: 'battle', SCORING: 'scoring', RESULTS: 'results' };

export default function Battle() {
  // Setup
  const [phase, setPhase] = useState(PHASES.SETUP);
  const [player1, setPlayer1] = useState('Player 1');
  const [player2, setPlayer2] = useState('Player 2');
  const [format, setFormat] = useState(battleFormats[0]);
  const [selectedBeat, setSelectedBeat] = useState(beats[0]);

  // Battle state
  const [currentRound, setCurrentRound] = useState(1);
  const [currentTurn, setCurrentTurn] = useState(1); // 1 or 2
  const [timeLeft, setTimeLeft] = useState(format.turnDuration);
  const [isRunning, setIsRunning] = useState(false);
  const [roundTopic, setRoundTopic] = useState('');

  // Scoring
  const [scores, setScores] = useState({ 1: {}, 2: {} });
  const [roundScores, setRoundScores] = useState({});

  const timerRef = useRef(null);
  const beatPlayer = useBeatPlayer();
  const { addBattle } = useBattleHistory();

  const currentPlayer = currentTurn === 1 ? player1 : player2;

  // Start battle
  const startBattle = useCallback(() => {
    setPhase(PHASES.BATTLE);
    setCurrentRound(1);
    setCurrentTurn(1);
    setTimeLeft(format.turnDuration);
    setScores({ 1: {}, 2: {} });
    setRoundTopic(getRandomTopic());
  }, [format]);

  // Start turn
  const startTurn = useCallback(() => {
    setTimeLeft(format.turnDuration);
    setIsRunning(true);
    beatPlayer.play(selectedBeat);
  }, [format, selectedBeat, beatPlayer]);

  // End turn
  const endTurn = useCallback(() => {
    setIsRunning(false);
    beatPlayer.stop();
    if (timerRef.current) clearInterval(timerRef.current);

    // Move to scoring
    setPhase(PHASES.SCORING);
    const initScores = {};
    scoringCategories.forEach(c => { initScores[c.key] = 3; });
    setRoundScores(initScores);
  }, [beatPlayer]);

  // Submit score for current turn
  const submitScore = useCallback(() => {
    setScores(prev => {
      const next = { ...prev };
      if (!next[currentTurn][currentRound]) next[currentTurn][currentRound] = {};
      next[currentTurn][currentRound] = { ...roundScores };
      return next;
    });

    if (currentTurn === 1) {
      // Player 2's turn
      setCurrentTurn(2);
      setPhase(PHASES.BATTLE);
      setTimeLeft(format.turnDuration);
    } else {
      // Check if more rounds
      if (currentRound < format.rounds) {
        setCurrentRound(prev => prev + 1);
        setCurrentTurn(1);
        setRoundTopic(getRandomTopic());
        setPhase(PHASES.BATTLE);
        setTimeLeft(format.turnDuration);
      } else {
        setPhase(PHASES.RESULTS);
      }
    }
  }, [currentTurn, currentRound, format, roundScores]);

  // Timer
  useEffect(() => {
    if (!isRunning) return;
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          endTurn();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [isRunning, endTurn]);

  // Calculate totals
  const getTotalScore = (playerNum) => {
    const playerScores = scores[playerNum];
    let total = 0;
    Object.values(playerScores).forEach(round => {
      Object.values(round).forEach(val => { total += val; });
    });
    return total;
  };

  const getRoundScore = (playerNum, round) => {
    const rs = scores[playerNum]?.[round];
    if (!rs) return 0;
    return Object.values(rs).reduce((sum, v) => sum + v, 0);
  };

  const saveBattle = useCallback(() => {
    const s1 = getTotalScore(1);
    const s2 = getTotalScore(2);
    addBattle({
      type: 'battle',
      name: `${player1} vs ${player2}`,
      format: format.name,
      rounds: format.rounds,
      player1,
      player2,
      score1: s1,
      score2: s2,
      winner: s1 > s2 ? player1 : s2 > s1 ? player2 : 'Tie',
      beat: selectedBeat.name,
    });
    setPhase(PHASES.SETUP);
  }, [addBattle, player1, player2, format, selectedBeat, scores]);

  const formatTime = (s) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;

  // ========== SETUP ==========
  if (phase === PHASES.SETUP) {
    return (
      <div className={styles.battle}>
        <h2 className={styles.pageTitle}>Battle Mode</h2>
        <p className={styles.pageDesc}>Set up a 1v1 freestyle battle</p>

        {/* Players */}
        <div className={styles.card}>
          <span className={styles.label}>PLAYERS</span>
          <div className={styles.playerInputs}>
            <div className={styles.playerField}>
              <span className={styles.playerNum}>P1</span>
              <input
                className={styles.input}
                value={player1}
                onChange={e => setPlayer1(e.target.value)}
                placeholder="Player 1 name"
              />
            </div>
            <span className={styles.vs}>VS</span>
            <div className={styles.playerField}>
              <span className={styles.playerNum}>P2</span>
              <input
                className={styles.input}
                value={player2}
                onChange={e => setPlayer2(e.target.value)}
                placeholder="Player 2 name"
              />
            </div>
          </div>
        </div>

        {/* Format */}
        <div className={styles.card}>
          <span className={styles.label}>BATTLE FORMAT</span>
          <div className={styles.formatGrid}>
            {battleFormats.map(f => (
              <button
                key={f.name}
                className={`${styles.formatCard} ${format.name === f.name ? styles.formatActive : ''}`}
                onClick={() => setFormat(f)}
              >
                <span className={styles.formatName}>{f.name}</span>
                <span className={styles.formatDesc}>{f.description}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Beat */}
        <div className={styles.card}>
          <span className={styles.label}>BEAT</span>
          <div className={styles.beatGrid}>
            {beats.map(b => (
              <button
                key={b.name}
                className={`${styles.beatChip} ${selectedBeat.name === b.name ? styles.beatActive : ''}`}
                onClick={() => setSelectedBeat(b)}
              >
                {b.name} <span className={styles.bpm}>{b.bpm}</span>
              </button>
            ))}
          </div>
        </div>

        <button className="btn btn-primary btn-lg" onClick={startBattle} style={{ width: '100%' }}>
          &#9876;&#65039; Start Battle
        </button>
      </div>
    );
  }

  // ========== BATTLE (active turn) ==========
  if (phase === PHASES.BATTLE) {
    const progress = ((format.turnDuration - timeLeft) / format.turnDuration) * 100;

    return (
      <div className={styles.battle}>
        {/* Round header */}
        <div className={styles.roundHeader}>
          <span className={styles.roundBadge}>Round {currentRound}/{format.rounds}</span>
          <span className={styles.turnBadge}>
            {currentTurn === 1 ? '\ud83d\udd34' : '\ud83d\udd35'} {currentPlayer}&apos;s Turn
          </span>
        </div>

        {/* Topic */}
        <div className={styles.topicCard}>
          <span className={styles.topicLabel}>TOPIC</span>
          <span className={styles.topicText}>{roundTopic}</span>
        </div>

        {/* Timer */}
        <div className={styles.timerArea}>
          <div className={styles.timerRing}>
            <svg viewBox="0 0 120 120" className={styles.timerSvg}>
              <circle cx="60" cy="60" r="54" className={styles.timerBg} />
              <circle
                cx="60" cy="60" r="54"
                className={`${styles.timerProgress} ${timeLeft <= 10 ? styles.timerWarning : ''}`}
                strokeDasharray={`${2 * Math.PI * 54}`}
                strokeDashoffset={`${2 * Math.PI * 54 * (1 - progress / 100)}`}
              />
            </svg>
            <span className={`${styles.timerText} ${timeLeft <= 10 ? styles.timerTextWarn : ''}`}>
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>

        {/* Beat viz */}
        {beatPlayer.isPlaying && (
          <div className={styles.beatViz}>
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className={`${styles.beatStep} ${beatPlayer.currentStep === i ? styles.beatStepActive : ''}`}
              />
            ))}
          </div>
        )}

        {/* Controls */}
        <div className={styles.battleControls}>
          {!isRunning ? (
            <button className="btn btn-primary btn-lg" onClick={startTurn}>
              &#127908; {currentPlayer}, GO!
            </button>
          ) : (
            <button className="btn btn-outline btn-lg" onClick={endTurn}>
              &#9724;&#65039; End Turn
            </button>
          )}
        </div>

        {/* Scoreboard */}
        <div className={styles.scoreboard}>
          <div className={styles.scorePlayer}>
            <span className={styles.scoreName}>{player1}</span>
            <span className={styles.scoreTotal}>{getTotalScore(1)}</span>
          </div>
          <span className={styles.scoreVs}>VS</span>
          <div className={styles.scorePlayer}>
            <span className={styles.scoreName}>{player2}</span>
            <span className={styles.scoreTotal}>{getTotalScore(2)}</span>
          </div>
        </div>
      </div>
    );
  }

  // ========== SCORING ==========
  if (phase === PHASES.SCORING) {
    return (
      <div className={styles.battle}>
        <div className={styles.scoringHeader}>
          <h3 className={styles.scoringTitle}>
            Score {currentPlayer}&apos;s Round
          </h3>
          <span className={styles.roundBadge}>Round {currentRound}</span>
        </div>

        <div className={styles.scoringCards}>
          {scoringCategories.map(cat => (
            <div key={cat.key} className={styles.scoringCard}>
              <div className={styles.scoringInfo}>
                <span
                  className={styles.scoringIcon}
                  dangerouslySetInnerHTML={{ __html: cat.icon }}
                />
                <div>
                  <span className={styles.scoringLabel}>{cat.label}</span>
                  <span className={styles.scoringDesc}>{cat.description}</span>
                </div>
              </div>
              <div className={styles.scoringSlider}>
                {[1, 2, 3, 4, 5].map(v => (
                  <button
                    key={v}
                    className={`${styles.scoreBtn} ${roundScores[cat.key] >= v ? styles.scoreBtnActive : ''}`}
                    onClick={() => setRoundScores(prev => ({ ...prev, [cat.key]: v }))}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.scoringTotal}>
          Total: {Object.values(roundScores).reduce((s, v) => s + v, 0)} / 20
        </div>

        <button className="btn btn-primary btn-lg" onClick={submitScore} style={{ width: '100%' }}>
          Submit Score
        </button>
      </div>
    );
  }

  // ========== RESULTS ==========
  if (phase === PHASES.RESULTS) {
    const s1 = getTotalScore(1);
    const s2 = getTotalScore(2);
    const winner = s1 > s2 ? player1 : s2 > s1 ? player2 : null;
    const maxPossible = format.rounds * 20;

    return (
      <div className={styles.battle}>
        <div className={styles.resultsHeader}>
          <span className={styles.crown}>&#128081;</span>
          <h2 className={styles.resultsTitle}>
            {winner ? `${winner} Wins!` : "It's a Tie!"}
          </h2>
        </div>

        <div className={styles.finalScores}>
          <div className={`${styles.finalPlayer} ${s1 >= s2 ? styles.finalWinner : ''}`}>
            <span className={styles.finalName}>{player1}</span>
            <span className={styles.finalScore}>{s1}</span>
            <span className={styles.finalMax}>/ {maxPossible}</span>
          </div>
          <span className={styles.finalVs}>VS</span>
          <div className={`${styles.finalPlayer} ${s2 >= s1 ? styles.finalWinner : ''}`}>
            <span className={styles.finalName}>{player2}</span>
            <span className={styles.finalScore}>{s2}</span>
            <span className={styles.finalMax}>/ {maxPossible}</span>
          </div>
        </div>

        {/* Round breakdown */}
        <div className={styles.breakdown}>
          <span className={styles.label}>ROUND BREAKDOWN</span>
          {Array.from({ length: format.rounds }).map((_, i) => {
            const r = i + 1;
            const rs1 = getRoundScore(1, r);
            const rs2 = getRoundScore(2, r);
            return (
              <div key={r} className={styles.breakdownRow}>
                <span className={styles.breakdownRound}>R{r}</span>
                <span className={`${styles.breakdownScore} ${rs1 > rs2 ? styles.breakdownWin : ''}`}>
                  {rs1}
                </span>
                <span className={styles.breakdownDash}>-</span>
                <span className={`${styles.breakdownScore} ${rs2 > rs1 ? styles.breakdownWin : ''}`}>
                  {rs2}
                </span>
              </div>
            );
          })}
        </div>

        <div className={styles.resultActions}>
          <button className="btn btn-primary" onClick={saveBattle}>Save & Exit</button>
          <button className="btn btn-secondary" onClick={startBattle}>Rematch</button>
          <button className="btn btn-outline" onClick={() => setPhase(PHASES.SETUP)}>New Battle</button>
        </div>
      </div>
    );
  }

  return null;
}
