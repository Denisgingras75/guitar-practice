export const FRETBOARD_NODES = [
  // ─── TIER 1 — Foundation ─────────────────────────────────────────
  {
    id: 'fret-open-strings',
    tree: 'fretboard',
    tier: 1,
    name: 'Open String Names',
    description: 'Know the six open string names (EADGBE) by heart, from lowest to highest pitch.',
    whyItMatters:
      'Every fretboard skill builds on knowing the open strings instantly. If you hesitate here, everything downstream is slower.',
    prerequisites: [],
    exercises: [
      {
        name: 'String Call-Out',
        description:
          'Pick a random string visually, say its name out loud before you pluck it. Cycle all six strings in under 5 seconds.',
      },
      {
        name: 'Reverse Recall',
        description:
          'Say the string names from high E to low E (EBGDAE) without looking. Repeat until fluent.',
      },
      {
        name: 'Eyes-Closed Pluck',
        description:
          'Close your eyes, pluck a random string. Name it by sound alone. Get 10 in a row correct.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [
      { title: 'Guitar String Names — NEVER Forget Them Again', channel: 'Justin Guitar', url: 'https://www.youtube.com/watch?v=oN9EoKWQFqE' },
    ],
  },
  {
    id: 'fret-notes-low-e-a',
    tree: 'fretboard',
    tier: 1,
    name: 'Notes on Low E and A Strings',
    description: 'Memorize every note on the low E and A strings from the open string to the 12th fret.',
    whyItMatters:
      'These two strings are where you find root notes for barre chords, power chords, and most scale patterns. They are the GPS of the fretboard.',
    prerequisites: ['fret-open-strings'],
    exercises: [
      {
        name: 'Ascending Note Sprint',
        description:
          'Say every note ascending on the low E string (E, F, F#, G... up to E at fret 12) in under 10 seconds. Repeat for the A string.',
      },
      {
        name: 'Random Fret Quiz',
        description:
          'Have someone call out a fret number (0-12) and a string (E or A). Name the note in under 2 seconds. Do 20 reps.',
      },
      {
        name: 'Note Finder',
        description:
          'Pick a note name (e.g., Bb). Find it on both the low E and A strings as fast as possible. Target: under 3 seconds per note.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [
      { title: 'Learn the Notes on the Low E and A Strings', channel: 'Justin Guitar', url: 'https://www.youtube.com/watch?v=9NBpWCaEOuI' },
    ],
  },
  {
    id: 'fret-octave-shapes',
    tree: 'fretboard',
    tier: 1,
    name: 'Octave Shapes (2-String Patterns)',
    description: 'Learn the four octave shapes that let you jump any known note to a different string.',
    whyItMatters:
      'Octave shapes are the fastest way to spread one known note across the entire neck. Learn four shapes and you unlock all six strings from a single reference point.',
    prerequisites: ['fret-open-strings'],
    exercises: [
      {
        name: 'Shape 1: E-to-D String',
        description:
          'Play any note on the low E string, then find its octave 2 strings up and 2 frets higher (e.g., E string fret 3 = G, D string fret 5 = G). Do this for all 12 notes.',
      },
      {
        name: 'Shape 2: A-to-G String',
        description:
          'Same pattern — A string to G string, 2 strings up and 2 frets higher. Drill all 12 notes.',
      },
      {
        name: 'Shape 3: D-to-B String',
        description:
          'D string to B string requires 2 strings up and 3 frets higher (the B string offset). Drill until automatic.',
      },
      {
        name: 'Octave Chain',
        description:
          'Pick one note (e.g., C). Start on the low E string, chain octave shapes up through all six strings as fast as possible. Target: all positions in under 8 seconds.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [
      { title: 'Octave Shapes on Guitar — The Complete Guide', channel: 'Paul Davids', url: 'https://www.youtube.com/watch?v=MEFfxj3KXJU' },
    ],
  },
  {
    id: 'fret-barre-roots',
    tree: 'fretboard',
    tier: 1,
    name: 'Finding Root Notes for Barre Chords',
    description: 'Instantly locate the correct fret for any barre chord by finding its root on the E or A string.',
    whyItMatters:
      'Barre chords are your bread and butter for playing any song in any key. If you cannot find roots fast, chord changes will always feel rushed.',
    prerequisites: ['fret-notes-low-e-a'],
    exercises: [
      {
        name: 'E-Shape Barre Drill',
        description:
          'Someone calls a chord name (e.g., Bb major). Find the root on the low E string and form the E-shape barre. Target: under 3 seconds from call to chord.',
      },
      {
        name: 'A-Shape Barre Drill',
        description:
          'Same drill but using A-string roots with the A-shape barre. 12 random chords, all under 3 seconds.',
      },
      {
        name: 'Switching Roots',
        description:
          'Alternate between E-shape and A-shape barre chords for the same chord name (e.g., F major at fret 1 low E vs. fret 8 A string). Switch back and forth 10 times cleanly.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [
      { title: 'Barre Chords — How to Find Any Chord on the Neck', channel: 'Justin Guitar', url: 'https://www.youtube.com/watch?v=Q7fM7R2vFmA' },
    ],
  },

  // ─── TIER 2 — Developing ─────────────────────────────────────────
  {
    id: 'fret-chromatic-enharmonics',
    tree: 'fretboard',
    tier: 2,
    name: 'Chromatic Notes and Enharmonics',
    description: 'Learn every note on the fretboard including sharps and flats, and understand enharmonic equivalents (F# = Gb, Bb = A#, etc.).',
    whyItMatters:
      'Natural notes are the skeleton, but music lives in the sharps and flats too. Understanding enharmonics means you can follow a chart that says F# AND one that says Gb — and know they are the same fret.',
    prerequisites: ['fret-notes-low-e-a'],
    exercises: [
      {
        name: 'Half-Step Fill-In',
        description:
          'Pick any string. Name every note ascending one fret at a time from fret 0 to fret 12. When you land between natural notes (e.g., fret 6 on low E), say both names: "F# slash Gb." Speed target: all 13 positions in under 15 seconds per string.',
      },
      {
        name: 'Sharp vs Flat Context',
        description:
          'Play the chromatic scale on the A string from open to fret 12. Ascending, name every note using sharps (A, A#, B, C, C#...). Descending, use flats (A, Ab, G, Gb...). The same fret has two names — drill both until they feel equal.',
      },
      {
        name: 'Enharmonic Flashcard Drill',
        description:
          'Write the 5 enharmonic pairs on a card: F#/Gb, C#/Db, G#/Ab, D#/Eb, A#/Bb. Someone calls one name, you instantly say the other AND touch that fret on any two strings. Target: zero hesitation on all five pairs.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'fret-string-interval-map',
    tree: 'fretboard',
    tier: 2,
    name: 'String-to-String Interval Mapping',
    description: 'Know exactly how many semitones (frets) separate adjacent strings and use that to find any note on any string from a known note on another.',
    whyItMatters:
      'The guitar is a transposable instrument — most string pairs are a perfect 4th apart (5 frets), except the G-B pair (4 frets). This single fact lets you translate any note instantly across strings without memorizing every fret independently.',
    prerequisites: ['fret-chromatic-enharmonics'],
    exercises: [
      {
        name: 'The 5-Fret Rule',
        description:
          'Pick any note on the low E string. Find it on the A string 5 frets higher (e.g., fret 3 = G on E, fret 8 = G on A). Drill all 12 notes across the E-A pair. Then do A-D, D-G. These all use the same +5 rule.',
      },
      {
        name: 'The G-to-B Exception',
        description:
          'The G-to-B string pair is tuned a major 3rd apart, not a 4th — so the offset is +4 frets, not +5. Drill the G-B transfer for all 12 notes until the exception is automatic. Misremembering this is one of the most common fretboard errors.',
      },
      {
        name: 'Cross-String Note Transfer',
        description:
          'Someone calls a note and a target string (e.g., "Find D on the B string"). Use your interval map: D is fret 5 on the A string — A-to-D is +5, D-to-G is +5, G-to-B is +4, so B string fret 3 = D. Do 20 random transfers in under 3 minutes.',
      },
      {
        name: 'Diagonal Scale Mapping',
        description:
          'Play a C major scale diagonally — one note per string moving up by one string each time, using interval maps to find the next note. No patterns, just math. Start on low E string and end on the high E string.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'fret-all-natural-notes',
    tree: 'fretboard',
    tier: 2,
    name: 'All Natural Notes Everywhere',
    description: 'Know every natural note (A B C D E F G) on every string from frets 0-12.',
    whyItMatters:
      'Natural notes are the skeleton of the fretboard. Once you see them, sharps and flats are just one fret away. This is the tipping point where the neck stops looking random.',
    prerequisites: ['fret-notes-low-e-a', 'fret-octave-shapes'],
    exercises: [
      {
        name: 'Single-Note Scavenger Hunt',
        description:
          'Pick one note (e.g., C). Find every C on the fretboard (frets 0-12) across all six strings. Target: all positions in under 10 seconds.',
      },
      {
        name: 'String-by-String Recital',
        description:
          'Pick one string. Say all seven natural notes and their fret numbers ascending. Do all six strings. No pauses longer than 2 seconds.',
      },
      {
        name: 'Random Note Challenge',
        description:
          'Point to a random fret on a random string. If it is a natural note, name it. If it is a sharp/flat, name both enharmonic options. 30 reps in 2 minutes.',
      },
      {
        name: 'Written Fretboard Map',
        description:
          'On a blank fretboard diagram (frets 0-12), fill in all natural notes from memory. Check against a reference. Repeat until 100% accurate.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [
      { title: 'How to Learn All the Notes on the Guitar', channel: 'Marty Music', url: 'https://www.youtube.com/watch?v=sSMJAqYKL6c' },
    ],
  },
  {
    id: 'fret-caged',
    tree: 'fretboard',
    tier: 2,
    name: 'CAGED System Overview',
    description: 'Understand how the five open chord shapes (C, A, G, E, D) connect to cover the entire fretboard.',
    whyItMatters:
      'CAGED gives you a visual roadmap for chords, scales, and arpeggios in any key. It turns the fretboard from 12 disconnected frets into five overlapping zones.',
    prerequisites: ['fret-all-natural-notes'],
    exercises: [
      {
        name: 'CAGED Chord Walk — C Major',
        description:
          'Play C major using all five CAGED shapes ascending the neck: C shape (open), A shape (fret 3), G shape (fret 5), E shape (fret 8), D shape (fret 10). Transition smoothly.',
      },
      {
        name: 'Shape Identification',
        description:
          'Play a barre chord at a random fret. Identify which CAGED shape it belongs to. Do 10 random positions.',
      },
      {
        name: 'Root Mapping Per Shape',
        description:
          'For each CAGED shape, highlight where the root note sits. Play through all five shapes for G major, calling out the root location in each.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [
      { title: 'CAGED System Explained — Finally Makes Sense', channel: 'Paul Davids', url: 'https://www.youtube.com/watch?v=3WT9i4LK3Sc' },
      { title: 'CAGED System Guitar Lesson', channel: 'Marty Music', url: 'https://www.youtube.com/watch?v=hBkKOiO4yqs' },
    ],
  },
  {
    id: 'fret-minor-pent-5pos',
    tree: 'fretboard',
    tier: 2,
    name: 'Minor Pentatonic 5 Positions',
    description: 'Play the minor pentatonic scale in all five positions across the fretboard.',
    whyItMatters:
      'The minor pentatonic is the most used scale in blues, rock, and pop soloing. Knowing all five positions means you can solo anywhere on the neck instead of being stuck in one box.',
    prerequisites: ['fret-all-natural-notes'],
    exercises: [
      {
        name: 'Box 1 (Position 1) Drill',
        description:
          'Play the A minor pentatonic in position 1 (frets 5-8) ascending and descending. Use alternate picking. Metronome at 80 BPM, eighth notes. Clean every note.',
      },
      {
        name: 'Five-Position Sequence',
        description:
          'Play A minor pentatonic through all five positions without stopping, ascending the neck from position 1 (fret 5) to position 5 (fret 15). Then descend back.',
      },
      {
        name: 'Key Transposition',
        description:
          'Play all five positions in E minor (starting position 1 at fret 12/open). Then move to G minor (fret 3). Prove you can shift the whole system.',
      },
      {
        name: 'Position Jump',
        description:
          'Set a metronome to 60 BPM. Every 4 beats, jump to a random position number (1-5) in A minor pentatonic. No dead air between jumps.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [
      { title: 'Pentatonic Scale — All 5 Positions', channel: 'Justin Guitar', url: 'https://www.youtube.com/watch?v=iUkYDJxD6-k' },
      { title: '5 Pentatonic Scale Positions — Complete Guide', channel: 'Marty Music', url: 'https://www.youtube.com/watch?v=zEQLHqJTdZY' },
    ],
  },
  {
    id: 'fret-major-pent-5pos',
    tree: 'fretboard',
    tier: 2,
    name: 'Major Pentatonic 5 Positions',
    description: 'Play the major pentatonic scale in all five positions, understanding its relationship to the minor pentatonic.',
    whyItMatters:
      'The major pentatonic shares the same shapes as the minor pentatonic but shifted. Knowing both gives you instant access to major and minor tonalities over any chord.',
    prerequisites: ['fret-minor-pent-5pos'],
    exercises: [
      {
        name: 'Relative Minor Overlay',
        description:
          'Play A minor pentatonic position 1 at fret 5. Now play C major pentatonic position 1 at the same fret. Notice they are the same shape. Map all five positions this way.',
      },
      {
        name: 'Major Sound Drill',
        description:
          'Over a G major backing track, solo using only G major pentatonic (positions 1-5). Focus on landing on the root (G), 3rd (B), and 5th (D) on strong beats.',
      },
      {
        name: 'Major vs. Minor Switch',
        description:
          'Over an A major chord, play 4 bars of A major pentatonic, then switch to A minor pentatonic for 4 bars. Hear the tonal shift. Alternate for 5 minutes.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },

  // ─── TIER 3 — Intermediate ───────────────────────────────────────
  {
    id: 'fret-pentatonic-chord-tones',
    tree: 'fretboard',
    tier: 3,
    name: 'Pentatonic to Chord Tone Overlay',
    description: 'Overlay chord tones (root, 3rd, 5th) on top of pentatonic positions so you can hear AND see the harmony inside each scale box.',
    whyItMatters:
      'Pentatonic players who do not see chord tones inside the scale sound like they are soloing past the changes, not through them. This bridges the gap between scale-based soloing and harmonic soloing.',
    prerequisites: ['fret-minor-pent-5pos', 'fret-caged'],
    exercises: [
      {
        name: 'Root Highlighting',
        description:
          'In A minor pentatonic position 1 (frets 5-8), circle every A note on a fretboard diagram. While playing, land on these A notes at the start of every new bar. The scale becomes an anchor, not a random collection of notes.',
      },
      {
        name: 'Triad Tones in the Box',
        description:
          'In A minor pentatonic position 1, identify where the A minor triad lives (A, C, E). Mark them with a different color. Solo using only chord tones for 2 bars, then open up to the full pentatonic for 2 bars. Hear how targeted the chord-tone bars sound.',
      },
      {
        name: 'Chord Change Navigation',
        description:
          'Over a Am-C-G-D progression, stay in one pentatonic position. As each chord changes, immediately emphasize the nearest chord tone of the new chord. Do not shift position — just reframe which notes you target. Record and listen for the harmonic tracking.',
      },
      {
        name: 'Five Positions, Chord Tones Each',
        description:
          'Work through all five positions of A minor pentatonic. In each position, identify and mark the root, b3rd, and 5th of Am. Play the exercise from position 1 to position 5, targeting chord tones at each position change.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [
      { title: 'Chord Tones vs Scales — How to Solo Over Chord Changes', channel: 'Paul Davids', url: 'https://www.youtube.com/watch?v=N8_mRSXVHvs' },
    ],
  },
  {
    id: 'fret-3nps',
    tree: 'fretboard',
    tier: 3,
    name: '3-Note-Per-String Patterns',
    description: 'Play scales using exactly three notes on each string, creating even, fluid patterns across the neck.',
    whyItMatters:
      'Three-note-per-string patterns enable faster legato playing and smoother position shifts. They also reveal the scale as a continuous line rather than disconnected boxes.',
    prerequisites: ['fret-minor-pent-5pos'],
    exercises: [
      {
        name: 'G Major 3NPS — Position 1',
        description:
          'Starting on G (low E string, fret 3), play the G major scale with 3 notes per string through all six strings and back. Use hammer-ons ascending and pull-offs descending.',
      },
      {
        name: 'All Seven Positions',
        description:
          'Play the G major 3NPS pattern starting from each scale degree (G, A, B, C, D, E, F#). That gives you seven positions. Drill two per practice session.',
      },
      {
        name: 'Speed Builder',
        description:
          'Pick one 3NPS position. Start metronome at 80 BPM, sixteenth notes. Play ascending/descending cleanly. Increase by 4 BPM when flawless for 60 seconds.',
      },
      {
        name: 'String-Pair Isolation',
        description:
          'Isolate just two adjacent strings (e.g., low E and A). Play the 3NPS fragment repeatedly until the string crossing is seamless. Move to the next pair.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'fret-connecting-positions',
    tree: 'fretboard',
    tier: 3,
    name: 'Connecting Positions with Slides',
    description: 'Use slides to seamlessly move between scale positions without breaking the musical phrase.',
    whyItMatters:
      'Playing in one position sounds boxy. Slides let you travel the neck fluidly, turning five isolated positions into one continuous playing field.',
    prerequisites: ['fret-3nps'],
    exercises: [
      {
        name: 'Two-Position Slide',
        description:
          'In A minor pentatonic, play position 1 ascending (frets 5-8), then slide on the G string from fret 7 to fret 9 to enter position 2. Descend in position 2. Reverse it.',
      },
      {
        name: 'Full-Neck Slide Run',
        description:
          'Start at position 1 of A minor pentatonic (fret 5). Use one slide per position to travel through all five positions up to fret 17. Then slide back down. Keep even rhythm.',
      },
      {
        name: 'Slide Targeting',
        description:
          'Pick a target note (e.g., the root A on the high E string, fret 5 and fret 17). From any random position, slide into that target note musically. 10 reps from different starting points.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'fret-intervals-across',
    tree: 'fretboard',
    tier: 3,
    name: 'Intervals Across Strings',
    description: 'Recognize and play common intervals (3rds, 4ths, 5ths, 6ths, octaves) as shapes between two strings.',
    whyItMatters:
      'Intervals are the building blocks of chords and melodies. Seeing them as shapes lets you harmonize on the fly, build chords from scratch, and understand what you are playing — not just where.',
    prerequisites: ['fret-all-natural-notes'],
    exercises: [
      {
        name: 'Third Shapes on Adjacent Strings',
        description:
          'Play diatonic 3rds in C major on the E and B strings (frets 0-12). Notice the shape stays consistent except across the G-B string pair. Map all string pairs.',
      },
      {
        name: 'Fifth Finder',
        description:
          'Pick any note on the A string. Find its perfect 5th on the D string (same fret + 2, or one string up and two frets higher). Drill all 12 notes. Target: under 2 seconds each.',
      },
      {
        name: 'Interval Ear Training',
        description:
          'Play a random interval shape. Before looking, sing the upper note. Check yourself. Trains both fretboard knowledge and ear simultaneously.',
      },
      {
        name: 'Harmonized Scale in 3rds',
        description:
          'Play the C major scale harmonized in 3rds (C-E, D-F, E-G, F-A, etc.) on the D and G strings ascending from fret 0 to fret 12. Then try 6ths.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'fret-triad-shapes',
    tree: 'fretboard',
    tier: 3,
    name: 'Triad Shapes Across the Neck',
    description: 'Play major and minor triads in all inversions on every string group (EAD, ADG, DGB, GBE).',
    whyItMatters:
      'Triads are the most compact, versatile chord voicings. They unlock rhythm playing anywhere on the neck and are the foundation for understanding chord tones in solos.',
    prerequisites: ['fret-caged', 'fret-intervals-across'],
    exercises: [
      {
        name: 'Major Triad Inversions — Top 3 Strings',
        description:
          'Play a C major triad on the G, B, E strings in root position (fret 5, 5, 5 area), 1st inversion, and 2nd inversion. Ascend the neck through all three inversions.',
      },
      {
        name: 'String Group Transfer',
        description:
          'Take the C major root-position triad shape from the GBE strings and find the equivalent on the DGB, ADG, and EAD string groups. Four groups, three inversions each = 12 shapes.',
      },
      {
        name: 'Triad Chord Progression',
        description:
          'Play a I-IV-V in G major (G, C, D) using only close-voice triads on the top three strings. Stay between frets 3 and 8. Minimize hand movement.',
      },
      {
        name: 'Minor Triad Mirror',
        description:
          'For every major triad shape you know, flatten the 3rd by one fret to get the minor triad. Drill C major to C minor across all inversions and string groups.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [
      { title: 'Guitar Triads — The Most Useful Thing You Can Learn', channel: 'Paul Davids', url: 'https://www.youtube.com/watch?v=XDlT1JtnGxg' },
    ],
  },

  // ─── TIER 4 — Advanced ───────────────────────────────────────────
  {
    id: 'fret-horizontal',
    tree: 'fretboard',
    tier: 4,
    name: 'Horizontal (Single-String) Playing',
    description: 'Play scales, melodies, and licks on a single string, traveling the full length of the fretboard.',
    whyItMatters:
      'Horizontal playing forces you to see the note layout along the string rather than across strings. It breaks the vertical-box habit and builds a linear understanding of intervals.',
    prerequisites: ['fret-3nps', 'fret-connecting-positions'],
    exercises: [
      {
        name: 'Single-String Major Scale',
        description:
          'Play a G major scale entirely on the low E string from open G (fret 3) to G at fret 15. Use the whole-whole-half-whole-whole-whole-half pattern. Say each note name as you play it.',
      },
      {
        name: 'Melody on One String',
        description:
          'Play "Happy Birthday" or another simple melody entirely on the B string. No string changes allowed. This trains your ear and fret distance awareness.',
      },
      {
        name: 'Interval Jumps',
        description:
          'On the A string, start at fret 3 (C). Jump up a major 3rd (fret 7, E), then a perfect 5th from C (fret 10, G). Drill random interval jumps. Name the interval before you move.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'fret-instant-chord-tones',
    tree: 'fretboard',
    tier: 4,
    name: 'Instant Chord Tone Location',
    description: 'Given any chord name, instantly find the root, 3rd, 5th, and 7th on the fretboard in any position.',
    whyItMatters:
      'Knowing chord tones is the difference between noodling and intentional soloing. When you can see chord tones in real time, your solos outline the harmony and sound like you know what you are playing.',
    prerequisites: ['fret-triad-shapes'],
    exercises: [
      {
        name: 'Chord Tone Spotlight',
        description:
          'Someone calls "Cmaj7." You have 5 seconds to play the root (C), 3rd (E), 5th (G), and 7th (B) in the current position without shifting. Do 10 random chords.',
      },
      {
        name: 'Arpeggio Over Changes',
        description:
          'Play a ii-V-I in C (Dm7, G7, Cmaj7). For each chord, play only the four chord tones (R, 3, 5, 7) ascending. Stay between frets 3 and 8.',
      },
      {
        name: 'Chord Tone Soloing',
        description:
          'Over a 12-bar blues in A, solo using only chord tones of each chord (A7, D7, E7). No pentatonic patterns — just R, 3, 5, b7 of each chord as it passes.',
      },
      {
        name: 'Speed Naming',
        description:
          'Point at any fret on any string. Name which chord tone it would be over a given chord. Example: fret 7 on the G string = D. Over a Bb chord, that is the major 3rd. 20 reps in 2 minutes.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'fret-arpeggios-inversions',
    tree: 'fretboard',
    tier: 4,
    name: 'Arpeggios in All Inversions',
    description: 'Play major 7, minor 7, dominant 7, and minor 7b5 arpeggios in all inversions across the fretboard.',
    whyItMatters:
      'Arpeggios in all inversions let you outline any chord from any starting note. This is essential for bebop-influenced playing, sweep picking, and creating melodic lines over chord changes.',
    prerequisites: ['fret-triad-shapes', 'fret-instant-chord-tones'],
    exercises: [
      {
        name: 'Cmaj7 — Four Inversions',
        description:
          'Play Cmaj7 arpeggio (C E G B) starting from each chord tone as the lowest note. Root position, 1st inversion (E G B C), 2nd inversion (G B C E), 3rd inversion (B C E G). Use the top four strings.',
      },
      {
        name: 'Quality Cycle',
        description:
          'On the same root (C), play Cmaj7, Cm7, C7, Cm7b5 arpeggios back to back in the same position. Notice which notes change. Drill until the differences are automatic.',
      },
      {
        name: 'Arpeggio Through Changes',
        description:
          'Play a ii-V-I in G (Am7, D7, Gmaj7). For each chord, play the arpeggio in the inversion that starts closest to where you ended the previous arpeggio. Minimize position shifts.',
      },
      {
        name: 'Two-Octave Sweep',
        description:
          'Pick any 7th chord arpeggio. Play it across all six strings covering two octaves. Ascending use sweep picking; descending use sweep picking. Start slow (60 BPM) and build.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'fret-relative-major-minor',
    tree: 'fretboard',
    tier: 4,
    name: 'Seeing Relative Major/Minor Instantly',
    description: 'Instantly shift your perspective between a minor key and its relative major (and vice versa) in any position.',
    whyItMatters:
      'Every minor key shares notes with a major key (Am = C major). Seeing both simultaneously means you can reframe any pattern on the fly — critical for improvisation and understanding song harmony.',
    prerequisites: ['fret-all-natural-notes', 'fret-instant-chord-tones'],
    exercises: [
      {
        name: 'Root Reframing',
        description:
          'Play the A minor pentatonic position 1. Now, without moving your hand, see it as C major pentatonic. Play a phrase that sounds minor (emphasize A, C, E). Then play a phrase that sounds major (emphasize C, E, G). Same notes, different target.',
      },
      {
        name: 'Relative Key Quiz',
        description:
          'Someone calls a key (e.g., F# minor). You name the relative major (A major) and immediately play the scale in the current position. Target: under 3 seconds for the name, immediate playing.',
      },
      {
        name: 'Pivot Note Drill',
        description:
          'Over an Am to C major chord change, solo continuously. When the chord switches, shift your emphasis notes but do not shift position. Feel the tonal center move under your fingers.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },

  {
    id: 'fret-modal-positions',
    tree: 'fretboard',
    tier: 4,
    name: 'Modal Position Identification',
    description: 'Find and name the seven diatonic scale positions (modes) across the fretboard and recognize which CAGED shape each mode lives in.',
    whyItMatters:
      'Modes are not separate scales — they are the same notes starting from different roots. Once you see where each mode lives within the CAGED system, you can access any modal color from any position on the neck without shifting.',
    prerequisites: ['fret-caged', 'fret-3nps'],
    exercises: [
      {
        name: 'G Major / A Dorian Overlap',
        description:
          'Play G major scale starting from G at fret 3 on low E. Now play the exact same notes but start and emphasize A (fret 5, low E). The shape is identical — only the root has changed. That is A Dorian. Drill all seven modes this way from the G major scale.',
      },
      {
        name: 'Mode Root Mapping',
        description:
          'On a fretboard diagram, mark every G on the neck (frets 3, 10, 15 on low E; frets 5, 12 on A, etc.). These are all Ionian positions. Then mark every A — those are all Dorian positions. Fill in all seven scale degrees across the neck.',
      },
      {
        name: 'Modal Position Jump',
        description:
          'Set a drone in G. Play G Ionian for 8 bars. Without moving far, shift to B Phrygian (same notes, different root). Then D Mixolydian. Stay in the same fret area each time — only the tonal center moves. Target: all seven positions in the same fret region.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [
      { title: 'Modes — Explained in a Way That Actually Makes Sense', channel: 'Signals Music Studio', url: 'https://www.youtube.com/watch?v=EerBnVd2Mkk' },
    ],
  },

  // ─── TIER 5 — Mastery ────────────────────────────────────────────
  {
    id: 'fret-complete-visualization',
    tree: 'fretboard',
    tier: 5,
    name: 'Complete Neck Visualization',
    description: 'See the entire fretboard as one connected system — scales, arpeggios, and chord tones simultaneously without thinking in positions.',
    whyItMatters:
      'This is the goal of all fretboard study. When you see the whole neck at once, there are no "wrong" positions, no panic zones — just music everywhere.',
    prerequisites: ['fret-horizontal', 'fret-arpeggios-inversions'],
    exercises: [
      {
        name: 'Free-Roam Improv',
        description:
          'Over a static Dm7 chord, solo for 3 minutes. Deliberately use all five positions, horizontal lines, and arpeggio shapes. Never stay in one area for more than 4 beats.',
      },
      {
        name: 'Blindfold Position Test',
        description:
          'Close your eyes. Someone calls a note and a string. Fret it without looking. Open your eyes to check. Target: 90% accuracy over 20 random calls.',
      },
      {
        name: 'Whole-Neck Chord Tone Map',
        description:
          'Someone calls "Eb major 7." Without pausing, play every Eb, G, Bb, and D on the entire fretboard (all six strings, frets 0-12) in under 20 seconds.',
      },
      {
        name: 'Connect-the-Dots Solo',
        description:
          'Over a jazz blues in Bb, target one specific chord tone (e.g., the 3rd) of each chord. Play it on a different string each time the chord changes. Prove you see it everywhere.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'fret-sight-reading',
    tree: 'fretboard',
    tier: 5,
    name: 'Sight-Reading Fretboard Notation',
    description: 'Read standard notation or fretboard diagrams and play the correct notes in real time without stopping.',
    whyItMatters:
      'Sight-reading proves deep fretboard knowledge — there is no time to calculate. It also opens up the entire world of written music, method books, and charts.',
    prerequisites: ['fret-complete-visualization'],
    exercises: [
      {
        name: 'Single-Line Sight-Read',
        description:
          'Open any beginner sight-reading book. Play single-note melodies in first position (frets 0-4) at tempo without stopping. Graduate to higher positions as accuracy improves.',
      },
      {
        name: 'Position Shift Reading',
        description:
          'Read a melody that spans two positions (e.g., 1st and 5th position). Execute the position shift cleanly at tempo. Use reading studies by William Leavitt or similar.',
      },
      {
        name: 'Chord Chart Reading',
        description:
          'Given a lead sheet with chord symbols (e.g., Gm7 | C7 | Fmaj7), comp through it in real time choosing appropriate voicings. No preparation — open and play.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'fret-instant-transposition',
    tree: 'fretboard',
    tier: 5,
    name: 'Instant Transposition',
    description: 'Transpose any lick, riff, or melody to a new key in real time by shifting fretboard shapes.',
    whyItMatters:
      'Transposition is the ultimate test of whether you understand shapes vs. just memorizing fret numbers. It lets you play any song in any key on the spot — invaluable for jam sessions and gigs.',
    prerequisites: ['fret-complete-visualization'],
    exercises: [
      {
        name: 'Lick Transposition Cycle',
        description:
          'Learn a short lick in A minor. Transpose it to all 12 keys by moving the shape. Play each transposition cleanly. Full cycle in under 90 seconds.',
      },
      {
        name: 'Song Transposition',
        description:
          'Take a song you know in one key (e.g., a riff in E minor). A caller says "up a minor 3rd" — you immediately play it in G minor. Random intervals, 10 reps.',
      },
      {
        name: 'Real-Time Key Change',
        description:
          'Over a backing track that modulates every 8 bars (e.g., C major to Eb major to F# major), solo continuously. Adapt your patterns to each new key without stopping.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'fret-arpeggio-superimposition',
    tree: 'fretboard',
    tier: 5,
    name: 'Full Arpeggio Superimposition',
    description: 'Superimpose arpeggios from related chords over a single harmony to create rich, colorful lines.',
    whyItMatters:
      'Superimposition is how advanced players create tension and release. Playing an Em7 arpeggio over a Cmaj7 chord gives you the 3rd, 5th, 7th, and 9th — instant color without memorizing new scales.',
    prerequisites: ['fret-arpeggios-inversions', 'fret-complete-visualization'],
    exercises: [
      {
        name: 'Upper Structure Arpeggios',
        description:
          'Over a Cmaj7 chord, play Em7 arpeggio (gives you 3, 5, 7, 9). Then play Gmaj7 arpeggio (gives you 5, 7, 9, #11 if you use F#). Hear how each superimposition changes the color.',
      },
      {
        name: 'Dominant Substitutions',
        description:
          'Over a G7 chord, play Dm7 arpeggio (5, b7, 9, 11), Bm7b5 arpeggio (3, 5, b7, 9), and Fmaj7 arpeggio (b7, 9, 11, 13). Compare the tensions. Pick your favorite and drill it in all positions.',
      },
      {
        name: 'Superimposition over ii-V-I',
        description:
          'Over a ii-V-I in C (Dm7, G7, Cmaj7), play a different superimposed arpeggio over each chord. For example: Fmaj7 over Dm7, Bdim7 over G7, Em7 over Cmaj7. Chain them smoothly.',
      },
      {
        name: 'Free Superimposition',
        description:
          'Over a static chord (e.g., Am7 vamp), cycle through every diatonic 7th arpeggio in C major (Cmaj7, Dm7, Em7, Fmaj7, G7, Am7, Bm7b5). Hear how each one colors the Am7 differently. Pick the three you like best and build a solo around them.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
];
