export const ROUTINES = [
  {
    id: 'beginner-electric',
    name: 'Beginner Electric',
    instrument: 'electric',
    level: 'beginner',
    totalMinutes: 30,
    description: 'Foundation building for electric guitar. Open chords, pentatonic basics, and clean technique.',
    sections: [
      {
        name: 'Warm-Up',
        minutes: 5,
        exercises: [
          { name: 'Chromatic 1-2-3-4', description: 'Play frets 1-2-3-4 on each string, ascending and descending. Focus on clean fretting and even timing.' },
          { name: 'Spider Exercise', description: 'Alternate 1-3-2-4 finger pattern across all strings. Builds finger independence.' },
        ],
      },
      {
        name: 'Chords',
        minutes: 10,
        exercises: [
          { name: 'Open Chord Changes', description: 'Cycle through Em - Am - C - G - D. One strum per chord, switch cleanly. Then try 4 strums each.' },
          { name: 'Strum Patterns', description: 'Down-Down-Up-Up-Down-Up over Am and G. Keep your wrist loose and the rhythm steady.' },
        ],
      },
      {
        name: 'Scales',
        minutes: 10,
        exercises: [
          { name: 'A Minor Pentatonic Pos 1', description: 'Play position 1 (frets 5-8) ascending and descending. Use alternate picking. Say each note name out loud.' },
          { name: 'Simple Lick Practice', description: 'Learn a 4-note lick in Am pentatonic. Play it slow, loop it, then speed up gradually.' },
        ],
      },
      {
        name: 'Fun / Songs',
        minutes: 5,
        exercises: [
          { name: 'Jam Over Backing Track', description: 'Find an Am blues backing track. Use only the 5 notes of Am pentatonic. Focus on rhythm and space, not speed.' },
        ],
      },
    ],
  },
  {
    id: 'beginner-acoustic',
    name: 'Beginner Acoustic',
    instrument: 'acoustic',
    level: 'beginner',
    totalMinutes: 30,
    description: 'Acoustic fundamentals. Fingerpicking, open chords, and strumming dynamics.',
    sections: [
      {
        name: 'Warm-Up',
        minutes: 5,
        exercises: [
          { name: 'Finger Stretches', description: 'Stretch each finger on frets 1-4 across all strings. Acoustic strings are heavier — warm up slowly.' },
          { name: 'Open String Picking', description: 'Alternate pick each open string: down-up, 4 times per string. Focus on consistent volume.' },
        ],
      },
      {
        name: 'Chords & Strumming',
        minutes: 10,
        exercises: [
          { name: 'Campfire Chords', description: 'G - C - D - Em progression. 4 downstrums each. Focus on letting all strings ring cleanly.' },
          { name: 'Dynamic Strumming', description: 'Play the same progression soft for 4 bars, then loud for 4 bars. Acoustic guitar lives in dynamics.' },
        ],
      },
      {
        name: 'Fingerpicking',
        minutes: 10,
        exercises: [
          { name: 'Basic Travis Pick', description: 'Thumb alternates bass notes (strings 6-5 or 5-4). Index and middle pluck strings 3 and 2. Start with C chord.' },
          { name: 'Arpeggio Pattern', description: 'Over Am: pluck strings 5-3-2-1-2-3 in sequence. Smooth and even. Then try over Em, C, G.' },
        ],
      },
      {
        name: 'Songs',
        minutes: 5,
        exercises: [
          { name: 'Simple Song Practice', description: 'Pick a song you love with 3-4 chords. Play through it slowly, focusing on smooth chord transitions.' },
        ],
      },
    ],
  },
  {
    id: 'intermediate-electric',
    name: 'Intermediate Electric',
    instrument: 'electric',
    level: 'intermediate',
    totalMinutes: 45,
    description: 'Building vocabulary. Barre chords, modes, bending, and soloing over changes.',
    sections: [
      {
        name: 'Warm-Up',
        minutes: 5,
        exercises: [
          { name: '3-Note-Per-String Scales', description: 'Major scale in 3NPS pattern, all positions. Alternate picking, start at 80 BPM.' },
          { name: 'Legato Warm-Up', description: 'Hammer-on/pull-off triplets: 5h7p5 on each string ascending. Build speed gradually.' },
        ],
      },
      {
        name: 'Technique',
        minutes: 10,
        exercises: [
          { name: 'Bend Accuracy', description: 'Whole-step bends on G string, frets 7-12. Play the target note first, then bend up to match it. Ear training.' },
          { name: 'Vibrato Control', description: 'Hold a note for 4 beats clean, then add vibrato for 4 beats. Practice wide (rock) and narrow (jazz) styles.' },
        ],
      },
      {
        name: 'Theory / Modes',
        minutes: 15,
        exercises: [
          { name: 'Mode of the Day', description: 'Pick one mode. Play it in all positions over the whole neck. Identify the characteristic note in each position.' },
          { name: 'Modal Improv', description: 'Jam over a static chord vamp in your chosen mode for 5 minutes. Focus on landing on the characteristic note.' },
        ],
      },
      {
        name: 'Chord Work',
        minutes: 5,
        exercises: [
          { name: 'Barre Chord Mobility', description: 'Play a ii-V-I in 3 different keys using barre chords. Minimize hand movement between changes.' },
        ],
      },
      {
        name: 'Application',
        minutes: 10,
        exercises: [
          { name: 'Solo Over Changes', description: 'Play over a 12-bar blues or jazz blues backing track. Follow the chord changes — switch scales/arpeggios with each chord.' },
          { name: 'Lick Integration', description: 'Take a lick you learned and transpose it to 3 different keys. Insert it naturally into your improv.' },
        ],
      },
    ],
  },
  {
    id: 'intermediate-acoustic',
    name: 'Intermediate Acoustic',
    instrument: 'acoustic',
    level: 'intermediate',
    totalMinutes: 45,
    description: 'Beyond basics. Fingerstyle patterns, alternate tunings, and melodic playing.',
    sections: [
      {
        name: 'Warm-Up',
        minutes: 5,
        exercises: [
          { name: 'Fingerpicking Warm-Up', description: 'PIMA pattern across all 6 strings on an Em chord. Thumb (P) handles strings 6-4, index (I) string 3, middle (M) string 2, ring (A) string 1.' },
          { name: 'Scales with Fingers', description: 'Play a G major scale fingerstyle — no pick. Alternate I and M fingers. Builds right-hand independence.' },
        ],
      },
      {
        name: 'Fingerstyle',
        minutes: 15,
        exercises: [
          { name: 'Travis Picking Advanced', description: 'Alternating bass with melody on top. Over G-C-D progression, keep the bass rock-steady while the melody floats above.' },
          { name: 'Fingerstyle Arrangement', description: 'Take a melody you know. Play the bass note of each chord with your thumb while picking the melody on upper strings. One-guitar arrangement.' },
        ],
      },
      {
        name: 'Alternate Tuning',
        minutes: 10,
        exercises: [
          { name: 'Drop D Exploration', description: 'Tune low E to D. Play power chords with one finger. Explore how open D changes bass runs and chord voicings.' },
          { name: 'DADGAD Basics', description: 'Tune to DADGAD. Let all strings ring open — that\'s a Dsus4. Explore modal melodies on the top 2 strings over the drone.' },
        ],
      },
      {
        name: 'Dynamics & Feel',
        minutes: 10,
        exercises: [
          { name: 'Whisper to Thunder', description: 'Play a 4-chord progression starting pianissimo, building to forte over 8 bars, then back down. Acoustic guitar is ALL about dynamics.' },
          { name: 'Percussive Acoustic', description: 'Add slaps (palm hit on strings) and taps (thumb on soundboard) between chord strums. Rhythm guitar as a drum kit.' },
        ],
      },
      {
        name: 'Repertoire',
        minutes: 5,
        exercises: [
          { name: 'Song Study', description: 'Work on a fingerstyle arrangement. Focus on one 8-bar section until it\'s clean, then move on. Quality over quantity.' },
        ],
      },
    ],
  },
  {
    id: 'advanced-electric',
    name: 'Advanced Electric',
    instrument: 'electric',
    level: 'advanced',
    totalMinutes: 60,
    description: 'Deep practice. Sweep picking, advanced theory, chord-melody, and creative improv.',
    sections: [
      {
        name: 'Technical Warm-Up',
        minutes: 10,
        exercises: [
          { name: 'Sweep Arpeggios', description: '5-string major and minor sweep patterns through all 12 keys. Start at comfortable tempo, add 5 BPM when clean.' },
          { name: 'Economy Picking Scales', description: '3NPS scales using economy picking (sweep into the next string instead of alternate). Builds fluid motion.' },
          { name: 'Tapping Sequences', description: 'Three-note tapping patterns (tap-pull-hammer) ascending through a scale. Both hands need to be equally strong.' },
        ],
      },
      {
        name: 'Advanced Theory',
        minutes: 15,
        exercises: [
          { name: 'Chord-Scale Relationships', description: 'Over a ii-V-I-vi: Dorian over ii, Mixolydian over V, Ionian over I, Aeolian over vi. Navigate the changes in real time.' },
          { name: 'Superimposition', description: 'Over a Cmaj7, play E minor pentatonic (highlights the 3, 5, 7, 9, 11). Learn to hear upper extensions through scale choice.' },
          { name: 'Altered Dominants', description: 'Over a G7 vamp, practice the Altered scale. Hit the b9, #9, b5, #5. Maximum jazz tension, then resolve to Cmaj7.' },
        ],
      },
      {
        name: 'Creative Expression',
        minutes: 15,
        exercises: [
          { name: 'Motivic Development', description: 'Start with a 3-note motif. Repeat it, transpose it, invert it, augment it, fragment it. Build a complete solo from one idea.' },
          { name: 'Rhythmic Displacement', description: 'Take a familiar lick and start it on beat 2, then beat 3, then the "and" of 1. Same notes, completely different feel.' },
          { name: 'Dynamic Soloing', description: 'Solo for 5 minutes. Use volume, space, and register changes instead of just adding notes. Make the guitar breathe.' },
        ],
      },
      {
        name: 'Chord-Melody',
        minutes: 10,
        exercises: [
          { name: 'Jazz Voicings', description: 'Learn drop-2 voicings for a ii-V-I in C. Move through inversions. Connect them smoothly with voice leading.' },
          { name: 'Hendrix-Style R&L', description: 'Embellish barre chords with pentatonic fills without stopping the rhythm. Rhythm and lead become one thing.' },
        ],
      },
      {
        name: 'Free Improv',
        minutes: 10,
        exercises: [
          { name: 'No Rules Jam', description: 'Pick a key, hit record, and play for 10 minutes with no plan. Listen back and identify your tendencies. Break them tomorrow.' },
        ],
      },
    ],
  },
  {
    id: 'advanced-acoustic',
    name: 'Advanced Acoustic',
    instrument: 'acoustic',
    level: 'advanced',
    totalMinutes: 60,
    description: 'Mastery-level acoustic. Complex fingerstyle, open tunings, percussive techniques, and composition.',
    sections: [
      {
        name: 'Warm-Up',
        minutes: 10,
        exercises: [
          { name: 'Independence Drill', description: 'Thumb plays a walking bass line while fingers play a melody in contrary motion. Start absurdly slow — this is hard.' },
          { name: 'Harp Harmonics', description: 'Play natural harmonics at 12, 7, and 5 while fretting melody notes with the left hand. Creates harp-like textures.' },
        ],
      },
      {
        name: 'Advanced Fingerstyle',
        minutes: 15,
        exercises: [
          { name: 'Polyphonic Playing', description: 'Arrange a piece with bass, harmony, and melody lines all happening simultaneously. Think of the guitar as a piano.' },
          { name: 'Flamenco Techniques', description: 'Practice rasgueado (finger roll strums) and picado (rest-stroke single notes). These add fire to any style.' },
        ],
      },
      {
        name: 'Open Tunings',
        minutes: 15,
        exercises: [
          { name: 'Open G Slide', description: 'Tune to Open G (DGDGBD). Practice slide guitar — focus on intonation and vibrato directly over the fret.' },
          { name: 'Nashville Tuning', description: 'If you have a spare set: replace low strings with high-gauge equivalents an octave up. Creates a 12-string shimmer effect.' },
          { name: 'Composition in DADGAD', description: 'Write an 8-bar piece in DADGAD. Use the open strings as drones. Celtic, Indian, and ambient textures live here.' },
        ],
      },
      {
        name: 'Percussive Acoustic',
        minutes: 10,
        exercises: [
          { name: 'Body Percussion Integration', description: 'Combine slap (palm on strings), tap (fingers on body), and ghost notes into your strumming. Create a groove that doesn\'t need a drummer.' },
          { name: 'Harmonic Slap', description: 'Slap harmonics at fret 12 while playing a bass line with your thumb. Andy McKee / Tommy Emmanuel territory.' },
        ],
      },
      {
        name: 'Composition',
        minutes: 10,
        exercises: [
          { name: 'Write Something', description: 'Spend 10 minutes composing. No rules. Record every idea, even bad ones. Quantity leads to quality over time.' },
        ],
      },
    ],
  },
  {
    id: 'quick-warmup',
    name: 'Quick Warm-Up',
    instrument: 'both',
    level: 'all',
    totalMinutes: 10,
    description: 'Short on time? This 10-minute warm-up covers the essentials before you dive into anything else.',
    sections: [
      {
        name: 'Physical',
        minutes: 3,
        exercises: [
          { name: 'Finger Stretches', description: 'Stretch each finger away from the others. Rotate wrists. 30 seconds of hand/forearm massage.' },
          { name: 'Chromatic Run', description: 'Frets 1-4 on all strings, one finger per fret. Ascending then descending. Focus on clean fretting, not speed.' },
        ],
      },
      {
        name: 'Picking',
        minutes: 3,
        exercises: [
          { name: 'Alternate Picking Drill', description: 'Pick a single note: down-up-down-up at 120 BPM. Then move to string crossing: pick one note per string ascending.' },
        ],
      },
      {
        name: 'Musicality',
        minutes: 4,
        exercises: [
          { name: 'Pentatonic Flow', description: 'Play Am pentatonic freely. No metronome. Focus on making music — use bends, slides, vibrato. This is about feel, not accuracy.' },
        ],
      },
    ],
  },
  {
    id: 'theory-deep-dive',
    name: 'Theory Deep Dive',
    instrument: 'both',
    level: 'intermediate',
    totalMinutes: 30,
    description: 'Pure theory session. Understanding the fretboard, intervals, and how scales connect.',
    sections: [
      {
        name: 'Fretboard Knowledge',
        minutes: 10,
        exercises: [
          { name: 'Note Naming', description: 'Pick a random note (e.g., Bb). Find it on every string as fast as possible. Time yourself. Target: all 6 strings in under 10 seconds.' },
          { name: 'Interval Recognition', description: 'Pick two random frets on one string. Name the interval. Then find that same interval on adjacent strings.' },
        ],
      },
      {
        name: 'Scale Connections',
        minutes: 10,
        exercises: [
          { name: 'Position Linking', description: 'Play a major scale in position 1. Slide into position 2 on one string. Continue through all 5 positions without stopping.' },
          { name: 'Horizontal Playing', description: 'Play a major scale on a single string from open to the 12th fret. See the whole neck as one position.' },
        ],
      },
      {
        name: 'Harmony',
        minutes: 10,
        exercises: [
          { name: 'Harmonize a Scale', description: 'Build a triad on each degree of C major (C-Dm-Em-F-G-Am-Bdim). Play them as chords. Know why each is major, minor, or diminished.' },
          { name: 'Chord Tone Soloing', description: 'Over a C-Am-F-G progression, solo using ONLY chord tones (1-3-5 of each chord). No scale runs — just the bones of each chord.' },
        ],
      },
    ],
  },
];
