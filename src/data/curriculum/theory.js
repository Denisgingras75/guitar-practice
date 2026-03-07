export const THEORY_NODES = [
  // ============================================================
  // TIER 1 — Foundation
  // ============================================================
  {
    id: 'theory-note-names',
    tree: 'theory',
    tier: 1,
    name: 'Note Names',
    description: 'Learn the 12 chromatic notes, natural notes, sharps, and flats across the fretboard.',
    whyItMatters: 'Every chord, scale, and melody is built from named notes. If you can\'t name what you\'re playing, you can\'t communicate it or transpose it.',
    prerequisites: [],
    exercises: [
      {
        name: 'Fretboard Note Sprint',
        description: 'Set a metronome to 60 BPM. Call out a random note name and find it on every string within 4 beats. Start with natural notes (A-G), then add sharps/flats.',
      },
      {
        name: 'Single-String Chromatic Walk',
        description: 'Pick one string. Play every fret from open to the 12th, saying each note name aloud: E, F, F#, G, G#, A, A#, B, C, C#, D, D#, E. Do all 6 strings.',
      },
      {
        name: 'Enharmonic Pairs',
        description: 'Write down all enharmonic equivalents (C#/Db, D#/Eb, F#/Gb, G#/Ab, A#/Bb). Play each on the 3rd string and say both names. Know that context determines which name to use.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [
      { title: 'Musical Alphabet and Note Names', channel: 'Justin Guitar', url: 'https://www.youtube.com/watch?v=cZzlZkSdGao' },
    ],
  },
  {
    id: 'theory-major-scale-formula',
    tree: 'theory',
    tier: 1,
    name: 'Major Scale Formula',
    description: 'Understand the Whole-Whole-Half-Whole-Whole-Whole-Half step pattern that defines every major scale.',
    whyItMatters: 'The major scale is the reference point for virtually all Western music theory. Chords, modes, and intervals are all described relative to it.',
    prerequisites: ['theory-note-names'],
    exercises: [
      {
        name: 'Build Scales on Paper',
        description: 'Without your guitar, write out the notes of C, G, D, A, and F major using the WWHWWWH formula. Check your work, then play each on a single string to hear the pattern.',
      },
      {
        name: 'One-String Major Scale',
        description: 'Play the G major scale entirely on the 3rd string (G): open, 2nd fret, 4th, 5th, 7th, 9th, 11th, 12th. Feel the W-W-H-W-W-W-H spacing in frets (2-2-1-2-2-2-1).',
      },
      {
        name: 'Transposition Drill',
        description: 'Play a C major scale in open position. Now move the same pattern to start on A (5th fret, 6th string) keeping the same interval structure. Do this for 5 different root notes.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [
      { title: 'Major Scale — Everything You Need to Know', channel: 'Justin Guitar', url: 'https://www.youtube.com/watch?v=XuWRnZcI5Yg' },
    ],
  },
  {
    id: 'theory-basic-intervals',
    tree: 'theory',
    tier: 1,
    name: 'Basic Intervals',
    description: 'Identify and play intervals from unison through octave: minor 2nd, major 2nd, minor 3rd, major 3rd, perfect 4th, tritone, perfect 5th, minor 6th, major 6th, minor 7th, major 7th, octave.',
    whyItMatters: 'Intervals are the DNA of music. Chords are stacked intervals, melodies are interval sequences. Training your ear to hear them transforms your musicianship.',
    prerequisites: ['theory-note-names'],
    exercises: [
      {
        name: 'Interval Shapes on One String',
        description: 'Starting on the 5th fret of the 6th string (A), play each interval by counting frets: m2 = 1 fret, M2 = 2, m3 = 3, M3 = 4, P4 = 5, tritone = 6, P5 = 7. Say the interval name as you play.',
      },
      {
        name: 'Song Reference List',
        description: 'Associate each interval with a song: m2 = Jaws theme, M2 = Happy Birthday, m3 = Smoke on the Water riff, M3 = When the Saints, P4 = Here Comes the Bride, P5 = Star Wars, Octave = Somewhere Over the Rainbow. Sing then play.',
      },
      {
        name: 'Two-String Interval Shapes',
        description: 'Learn the fretboard shapes for each interval across adjacent strings. For example, a major 3rd on strings 6-5 is the root + 1 fret lower on the next string (accounting for the B string tuning offset). Map all 12 intervals across string pairs.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [
      { title: 'Music Intervals — The Complete Guide', channel: 'Rick Beato', url: 'https://www.youtube.com/watch?v=R5tRLUMFgpM' },
    ],
  },
  {
    id: 'theory-i-iv-v',
    tree: 'theory',
    tier: 1,
    name: 'I-IV-V Chords',
    description: 'Understand why the I, IV, and V chords are the backbone of Western music and how to find them in any key.',
    whyItMatters: 'The I-IV-V progression powers blues, rock, country, folk, and pop. Learning to find these three chords in any key means you can jam over thousands of songs immediately.',
    prerequisites: ['theory-major-scale-formula'],
    exercises: [
      {
        name: 'Find I-IV-V in 5 Keys',
        description: 'Write the major scale for C, G, D, A, and E. The 1st, 4th, and 5th notes are your chord roots. Play each I-IV-V progression using open or barre chords: C-F-G, G-C-D, D-G-A, A-D-E, E-A-B.',
      },
      {
        name: '12-Bar Blues in 3 Keys',
        description: 'Play the standard 12-bar blues pattern (I-I-I-I, IV-IV-I-I, V-IV-I-V) in the keys of A, E, and G. Use dominant 7th chords (A7, D7, E7) for the blues sound.',
      },
      {
        name: 'Root Note Mapping',
        description: 'For the key of G, find the I (G), IV (C), and V (D) root notes on the 6th string: frets 3, 8, and 10. Notice the IV is always 5 frets up (or 7 frets down) and the V is always 7 frets up (or 5 frets down). Verify this pattern in 3 other keys.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [
      { title: 'I IV V Chords — How to Find Them in Any Key', channel: 'Marty Music', url: 'https://www.youtube.com/watch?v=aAMDzBGWAGs' },
    ],
  },
  {
    id: 'theory-time-signatures',
    tree: 'theory',
    tier: 1,
    name: 'Time Signatures',
    description: 'Understand how 4/4, 3/4, and 6/8 organize beats into measures and how to feel the difference.',
    whyItMatters: 'Rhythm is half of music. Knowing time signatures lets you count, communicate with other musicians, and understand why a waltz feels different from a rock song.',
    prerequisites: [],
    exercises: [
      {
        name: 'Strum and Count',
        description: 'Strum a G chord in 4/4 at 80 BPM, counting "1-2-3-4" aloud, accenting beat 1. Switch to 3/4, counting "1-2-3" with a strong beat 1. Feel how the pulse grouping changes.',
      },
      {
        name: '6/8 vs 3/4 Comparison',
        description: 'Play an Am chord in 3/4 (three equal quarter-note strums) then in 6/8 (two groups of three eighth notes: "1-2-3-4-5-6" with accents on 1 and 4). Same number of subdivisions, totally different feel.',
      },
      {
        name: 'Song Identification',
        description: 'Listen to 3 songs you know and identify the time signature. Most rock/pop = 4/4. Try "Norwegian Wood" (waltz feel, 3/4-ish) and "House of the Rising Sun" (6/8 arpeggiated). Strum along and count.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },

  // ============================================================
  // TIER 2 — Developing
  // ============================================================
  {
    id: 'theory-diatonic-chords',
    tree: 'theory',
    tier: 2,
    name: 'Diatonic Chords in Major',
    description: 'Build all 7 chords from a major scale and understand why each is major, minor, or diminished.',
    whyItMatters: 'This is the map of every key. Once you know that the ii chord is always minor and the V is always major, you can predict chord progressions and write your own.',
    prerequisites: ['theory-major-scale-formula', 'theory-i-iv-v'],
    exercises: [
      {
        name: 'Harmonize C Major',
        description: 'Stack thirds from each note of C major: C-E-G (Cmaj), D-F-A (Dm), E-G-B (Em), F-A-C (Fmaj), G-B-D (Gmaj), A-C-E (Am), B-D-F (Bdim). Play each chord and say its quality: I-ii-iii-IV-V-vi-vii°.',
      },
      {
        name: 'Diatonic Chords in G and D',
        description: 'Repeat the harmonization for G major (G-Am-Bm-C-D-Em-F#dim) and D major (D-Em-F#m-G-A-Bm-C#dim). Play through each set as a chord sequence. Notice the pattern maj-min-min-maj-maj-min-dim is always the same.',
      },
      {
        name: 'Spot the Outsider',
        description: 'Given a progression like C-Am-F-G-Bb, identify which chord is NOT diatonic to C major (Bb). This trains you to hear when a song borrows from outside the key. Try with 5 different progressions.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'theory-relative-minor',
    tree: 'theory',
    tier: 2,
    name: 'Relative Minor',
    description: 'Understand that every major key has a relative minor starting on its 6th degree, sharing the same notes.',
    whyItMatters: 'This doubles your key knowledge instantly. If you know C major, you already know A minor. Songs often shift between relative major and minor for emotional contrast.',
    prerequisites: ['theory-diatonic-chords'],
    exercises: [
      {
        name: 'Relative Minor Pairs',
        description: 'Write and play the relative minor for each major key: C/Am, G/Em, D/Bm, A/F#m, E/C#m, F/Dm, Bb/Gm. Play the major scale, then start from the 6th degree — same notes, different root.',
      },
      {
        name: 'Major-to-Minor Pivot',
        description: 'Play C-F-G-C (happy, resolved). Now play Am-Dm-G-Am (darker, same notes). Switch between the two progressions without stopping. Feel how the tonal center shifts while the note pool stays identical.',
      },
      {
        name: 'Identify the True Key',
        description: 'Take the progression Am-F-C-G. Is this in C major or A minor? Play it and listen for which chord feels like "home." The chord that feels like resolution reveals the true key. Try with Em-C-G-D and Dm-Bb-F-C.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'theory-circle-of-fifths',
    tree: 'theory',
    tier: 2,
    name: 'Circle of Fifths',
    description: 'Learn the circular arrangement of all 12 keys by ascending fifths (clockwise) and fourths (counterclockwise).',
    whyItMatters: 'The circle of fifths shows key relationships at a glance. It tells you which keys are closely related, predicts sharps and flats, and explains why certain chord progressions sound smooth.',
    prerequisites: ['theory-note-names', 'theory-basic-intervals'],
    exercises: [
      {
        name: 'Draw and Play the Circle',
        description: 'Draw the circle of fifths from memory: C-G-D-A-E-B-F#/Gb-Db-Ab-Eb-Bb-F. Then play the root note of each key ascending by fifths on the 6th string. Notice each step is 7 frets up (or 5 frets down).',
      },
      {
        name: 'Adjacent Key Modulation',
        description: 'Play a I-IV-V-I in C (C-F-G-C), then modulate to G (one step clockwise) by playing C-F-G... G-C-D-G. Adjacent keys on the circle share 6 of 7 notes, making modulation smooth. Try moving from G to D, then D to A.',
      },
      {
        name: 'Sharp/Flat Count',
        description: 'Using the circle, recall: each step clockwise adds one sharp (G=1#, D=2#, A=3#...). Each step counterclockwise adds one flat (F=1b, Bb=2b, Eb=3b...). Play the major scale in each key and name the sharps or flats.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'theory-chord-function',
    tree: 'theory',
    tier: 2,
    name: 'Chord Function',
    description: 'Classify every diatonic chord as tonic (I, iii, vi), subdominant (ii, IV), or dominant (V, vii°) based on its pull and resolution tendency.',
    whyItMatters: 'Function explains WHY progressions work. The V chord creates tension, the I resolves it, and the IV pushes you forward. Understanding function lets you substitute chords intelligently.',
    prerequisites: ['theory-diatonic-chords'],
    exercises: [
      {
        name: 'Tension-Resolution Drill',
        description: 'In the key of C, play G7 (dominant) and let it ring. Feel the pull toward C. Now resolve to C major. Repeat with Bdim to C. Then try substituting Em for C (tonic family) — notice it partially resolves. Map the feeling of each function.',
      },
      {
        name: 'Rewrite with Substitutions',
        description: 'Take C-Am-F-G (I-vi-IV-V). Replace each chord with another from its function group: I→iii (Em), vi→I (C), IV→ii (Dm), V→vii° (Bdim). Play Em-C-Dm-Bdim. Similar harmonic movement, different color.',
      },
      {
        name: 'Analyze a Song',
        description: 'Pick a song you know (e.g., "Let It Be" = C-G-Am-F). Write the Roman numerals (I-V-vi-IV) and label functions: Tonic-Dominant-Tonic-Subdominant. Notice how the progression alternates between tension and rest.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'theory-harmonic-rhythm',
    tree: 'theory',
    tier: 2,
    name: 'Harmonic Rhythm',
    description: 'Understand how the rate of chord change (harmonic rhythm) shapes energy, tension, and feel in a song.',
    whyItMatters: 'Harmonic rhythm is the secret pacing mechanism in every great song. Fast chord changes create urgency and complexity; slow changes create space and groove. Controlling harmonic rhythm is as important as choosing the right chords.',
    prerequisites: ['theory-diatonic-chords', 'theory-time-signatures'],
    exercises: [
      {
        name: 'Same Chords, Different Rhythm',
        description: 'Play C-Am-F-G changing every 4 beats (slow harmonic rhythm). Then play the same chords changing every 2 beats. Then every 1 beat. Notice how the energy and complexity change even though the harmony is identical. Record all three versions and compare. The fastest version sounds more urgent; the slowest sounds the most spacious.',
      },
      {
        name: 'Vary Within a Progression',
        description: 'Write a 4-bar progression where the harmonic rhythm varies: bar 1 is 4 beats on I, bar 2 is 2 beats on IV then 2 beats on V, bar 3 is 1 beat each on ii-iii-IV-V, bar 4 is 4 beats on I. Play through it and feel how the accelerating chord changes create a sense of arrival at the final I chord. This technique is used in pre-choruses constantly.',
      },
      {
        name: 'Analyze 3 Songs',
        description: 'Pick 3 songs with different feels (slow ballad, mid-tempo pop, fast punk). Identify the harmonic rhythm of each. Count how many beats each chord holds on average. Then listen to how the harmonic rhythm changes between the verse and chorus. Most choruses speed up harmonically OR simplify dramatically. Write your findings.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'theory-nashville-number',
    tree: 'theory',
    tier: 2,
    name: 'Nashville Number System',
    description: 'Use numbers instead of letter names to describe chord progressions, making instant transposition possible.',
    whyItMatters: 'Nashville numbers are the universal language of working musicians. Someone calls "1-4-5 in E" and you play. It frees you from key-specific thinking and makes you gig-ready.',
    prerequisites: ['theory-chord-function'],
    exercises: [
      {
        name: 'Convert 5 Songs to Numbers',
        description: 'Take 5 songs you know and write them in Nashville numbers. "Twist and Shout" in D: 1-4-5-4. "Horse with No Name" in Em: 1-2 (repeating). Practice reading your charts and playing in the original key.',
      },
      {
        name: 'Instant Transposition',
        description: 'Write a progression as 1-6m-4-5 and play it in C (C-Am-F-G), then G (G-Em-C-D), then E (E-C#m-A-B). The numbers stay the same; only the letter names change. Get all 3 keys smooth at 90 BPM.',
      },
      {
        name: 'Number Chart Cold Read',
        description: 'Have someone (or write yourself) a Nashville chart: 1-1-4-4-1-1-5-4-1-5. Set a tempo and play through it in a random key on the first try. Repeat in 3 different keys without stopping.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },

  // ============================================================
  // TIER 3 — Intermediate
  // ============================================================
  {
    id: 'theory-modes',
    tree: 'theory',
    tier: 3,
    name: 'The 7 Modes',
    description: 'Learn Ionian, Dorian, Phrygian, Lydian, Mixolydian, Aeolian, and Locrian — what defines each and when to use them.',
    whyItMatters: 'Modes give you 7 different emotional colors from a single scale. Dorian makes minor sound jazzy, Mixolydian sounds bluesy-major, Lydian sounds dreamy. They expand your soloing and composing vocabulary enormously.',
    prerequisites: ['theory-diatonic-chords'],
    exercises: [
      {
        name: 'Play All 7 from One Root',
        description: 'Play all 7 modes starting on A: A Ionian (A B C# D E F# G#), A Dorian (A B C D E F# G), A Phrygian (A Bb C D E F G), A Lydian (A B C# D# E F# G#), A Mixolydian (A B C# D E F# G), A Aeolian (A B C D E F G), A Locrian (A Bb C D Eb F G). Use one position on the fretboard.',
      },
      {
        name: 'Characteristic Note Drill',
        description: 'Each mode has one note that defines its flavor vs major: Dorian = raised 6th, Phrygian = flat 2nd, Lydian = raised 4th, Mixolydian = flat 7th. Solo over a drone note and emphasize just that characteristic note to hear the modal color.',
      },
      {
        name: 'Modal Vamp Soloing',
        description: 'Loop a D-G vamp (Dorian sound). Solo using D Dorian, emphasizing the B natural (raised 6th). Then loop E-F (Phrygian sound) and solo with E Phrygian, emphasizing the F (flat 2nd). Spend 5 minutes on each mode.',
      },
      {
        name: 'Mode Identification by Ear',
        description: 'Record yourself playing a scale in a random mode. Play it back and try to identify it by the feeling: bright and happy = Ionian, dark but groovy = Dorian, Spanish/tense = Phrygian, floating/bright = Lydian, bluesy/rock = Mixolydian, sad/natural = Aeolian, unstable = Locrian.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [
      { title: 'Guitar Modes — Made Simple', channel: 'Paul Davids', url: 'https://www.youtube.com/watch?v=iBsSHWfnflU' },
      { title: 'Modes — Explained in a Way That Actually Makes Sense', channel: 'Signals Music Studio', url: 'https://www.youtube.com/watch?v=EerBnVd2Mkk' },
    ],
  },
  {
    id: 'theory-diatonic-substitution',
    tree: 'theory',
    tier: 3,
    name: 'Diatonic Chord Substitution',
    description: 'Replace chords with diatonic substitutes that share most of the same notes, adding color without changing harmonic function.',
    whyItMatters: 'Substitution is how you keep harmony fresh without modulating or borrowing. Knowing that iii can replace I, or vi can replace IV, gives you immediate options for adding sophistication to any progression you play.',
    prerequisites: ['theory-chord-function', 'theory-diatonic-chords'],
    exercises: [
      {
        name: 'Tonic Family Swaps',
        description: 'In C major, the tonic family (I, iii, vi) all have similar function. Take a standard I-IV-V-I (C-F-G-C) and substitute tonic chords: replace I with iii (Em) or vi (Am). Try: Em-F-G-Am, then Am-F-G-Em. Play each version and notice the darkness that the vi sub (Am) adds compared to the brightness of the iii sub (Em).',
      },
      {
        name: 'Subdominant Family Swaps',
        description: 'The subdominant family (ii, IV) are interchangeable in many contexts. Take C-F-G-C and swap iv for ii: C-Dm-G-C. Now try reversing: wherever you have a Dm progression, see if F works instead. Apply this in G major (Am instead of C, or C instead of Am). Both should feel stable but slightly different in character.',
      },
      {
        name: 'Sub a Full Progression',
        description: 'Start with the I-V-vi-IV in G: G-D-Em-C. Apply substitutions to at least 2 chords: for example, replace G(I) with Bm(iii) and C(IV) with Am(ii). Result: Bm-D-Em-Am. Play both versions and describe the emotional difference in one sentence each. Then create your own substituted version and play it over a simple drum pattern.',
      },
      {
        name: 'Identify Subs in Real Songs',
        description: 'Listen to "Hotel California" (Eagles). The verse progression (Bm-F#-A-E-G-D-Em-F#) contains both direct diatonic chords and several that feel like substitutes. Map the progression to the key of Bm and identify where each chord falls in the diatonic system. Note any chords that feel like subs for a more expected chord.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'theory-harmonic-analysis',
    tree: 'theory',
    tier: 3,
    name: 'Harmonic Analysis',
    description: 'Analyze complete chord progressions in context, labeling Roman numerals, function, borrowed chords, and secondary dominants.',
    whyItMatters: 'Analysis turns passive listening into active understanding. When you can look at any chord chart and explain WHY every chord is there, you stop memorizing progressions and start understanding them. This skill compounds — every song you analyze makes the next one faster.',
    prerequisites: ['theory-chord-function', 'theory-secondary-dominants'],
    exercises: [
      {
        name: 'Four-Step Analysis Protocol',
        description: 'Develop a repeatable process: (1) Identify the key from the first and last chord and overall sound. (2) Write Roman numerals for each chord. (3) Flag anything non-diatonic and ask: is it a secondary dominant? A borrowed chord? Chromatic passing chord? (4) Label the function (T/SD/D) for each. Apply this to C-Am-F-G, then G-Em-C-D, then Am-F-C-G. Write your analysis for each.',
      },
      {
        name: 'Analyze a Standard',
        description: 'Take the chord progression to "Blackbird" (Beatles) or "Over the Rainbow." Identify the key. Write Roman numerals for every chord. Flag every chord that is not diatonic and identify its role. Post-analysis: play through the progression again and hear how your analysis matches the emotional arc of the song.',
      },
      {
        name: 'The Non-Diatonic Chord Hunt',
        description: 'Find 5 songs that use at least one non-diatonic chord. For each, identify: what is the chord, what key is the song in, and how does the chord relate (secondary dominant, borrowed from parallel minor, chromatic passing chord, tritone sub). Listen for how the non-diatonic chord creates surprise and then resolves. Catalog your findings.',
      },
      {
        name: 'Write, Then Analyze Yourself',
        description: 'Compose an 8-bar progression using only chords that come to you intuitively — do not think theoretically while writing. Then analyze it after. Identify the key, label Roman numerals, and explain every chord choice. This closes the loop between instinct and theory. You will often find that your ear was already doing theory without knowing it.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'theory-secondary-dominants',
    tree: 'theory',
    tier: 3,
    name: 'Secondary Dominants',
    description: 'Use dominant 7th chords that temporarily tonicize non-tonic diatonic chords (V/V, V/ii, V/vi, etc.).',
    whyItMatters: 'Secondary dominants add surprise and forward motion. That unexpected E7 in the key of C? It\'s V/vi, pulling toward Am. This is how songwriters create ear-catching moments without leaving the key.',
    prerequisites: ['theory-chord-function'],
    exercises: [
      {
        name: 'V/V in Three Keys',
        description: 'In C major, the V/V is D7 (it\'s the dominant of G, which is your V). Play C-D7-G-C. Feel how D7 creates extra pull toward G. Do the same in G (A7 pulling to D) and in A (B7 pulling to E). ',
      },
      {
        name: 'Find All Secondary Dominants in C',
        description: 'Calculate: V/ii = A7 (dom of Dm), V/iii = B7 (dom of Em), V/IV = C7 (dom of F), V/V = D7, V/vi = E7 (dom of Am). Play each followed by its target chord. Notice each uses a note outside the key.',
      },
      {
        name: 'Insert into a Progression',
        description: 'Take C-Am-Dm-G. Insert secondary dominants: C-E7-Am-A7-Dm-D7-G. Play slowly and hear how each dominant creates a mini-resolution. This is the "chain of dominants" sound common in jazz and classic pop.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [
      { title: 'Secondary Dominants — How They Work', channel: 'Rick Beato', url: 'https://www.youtube.com/watch?v=N9cX_HywTyc' },
    ],
  },
  {
    id: 'theory-chord-extensions',
    tree: 'theory',
    tier: 3,
    name: 'Chord Extensions',
    description: 'Add 9ths, 11ths, and 13ths to triads and 7th chords to create richer harmonic colors.',
    whyItMatters: 'Extensions turn basic chords into lush, sophisticated sounds. A Cmaj7 is pretty; a Cmaj9 is gorgeous. Knowing extensions lets you play jazz, neo-soul, R&B, and modern pop convincingly.',
    prerequisites: ['theory-diatonic-chords', 'theory-basic-intervals'],
    exercises: [
      {
        name: 'Build Extensions from Intervals',
        description: 'A 9th = octave + 2nd, 11th = octave + 4th, 13th = octave + 6th. On paper, build Cmaj9 (C-E-G-B-D), Dm11 (D-F-A-C-G), and G13 (G-B-D-F-E). Then find practical guitar voicings — you rarely play all notes, so pick 4-5.',
      },
      {
        name: 'Practical Extended Voicings',
        description: 'Learn these essential voicings: Cmaj9 (x-3-2-0-0-0), Am9 (x-0-2-2-1-3), Dm9 (x-5-3-5-5-5), G13 (3-x-3-4-5-x). Play a ii-V-I with extensions: Dm9-G13-Cmaj9. Notice how smooth the voice leading is.',
      },
      {
        name: 'Extension Substitution',
        description: 'Take a simple progression: C-Am-F-G. Replace each with an extended version: Cmaj9-Am9-Fmaj7(#11)-G13. Play both versions back to back and notice how extensions add depth without changing the harmonic function.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [
      { title: 'Extended Chords — 9ths 11ths 13ths Explained', channel: 'Adam Neely', url: 'https://www.youtube.com/watch?v=aLuSVMJGS0o' },
    ],
  },
  {
    id: 'theory-tritone-sub',
    tree: 'theory',
    tier: 3,
    name: 'Tritone Substitution',
    description: 'Replace a dominant 7th chord with another dominant 7th a tritone away, creating chromatic bass movement.',
    whyItMatters: 'Tritone subs are one of the most powerful harmonic tools in jazz and beyond. They work because two dominant 7th chords a tritone apart share the same guide tones (3rd and 7th), so the resolution still functions.',
    prerequisites: ['theory-secondary-dominants'],
    exercises: [
      {
        name: 'Basic Tritone Sub in C',
        description: 'The V in C is G7 (G-B-D-F). A tritone from G is Db. So Db7 (Db-F-Ab-Cb) can replace G7. Play Dm7-G7-Cmaj7, then Dm7-Db7-Cmaj7. Hear the chromatic bass descent: D-Db-C. That smooth half-step resolution is the magic.',
      },
      {
        name: 'Tritone Subs for All Secondary Dominants',
        description: 'In C major: V/ii(A7)→Eb7, V/iii(B7)→F7, V/IV(C7)→Gb7, V/V(D7)→Ab7, V/vi(E7)→Bb7. Play each sub followed by its target chord. Map these on the fretboard.',
      },
      {
        name: 'Chromatic ii-V Variations',
        description: 'Compare: Dm7-G7-Cmaj7 (standard), Dm7-Db7-Cmaj7 (tritone sub), Abm7-Db7-Cmaj7 (sub ii-V from the tritone). Play all three and notice how each creates a different color of approach to the same resolution.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [
      { title: 'Tritone Substitution — Jazz Theory Explained', channel: 'Adam Neely', url: 'https://www.youtube.com/watch?v=zLXgm0rEXFQ' },
    ],
  },
  {
    id: 'theory-minor-scale-types',
    tree: 'theory',
    tier: 3,
    name: 'Minor Scale Types',
    description: 'Compare natural minor, harmonic minor (raised 7th), and melodic minor (raised 6th and 7th) and know when each applies.',
    whyItMatters: 'Each minor scale creates different chord possibilities and melodic flavors. Harmonic minor gives you that strong V7 chord in a minor key. Melodic minor is the gateway to jazz harmony. Knowing all three makes your minor-key playing intentional.',
    prerequisites: ['theory-relative-minor'],
    exercises: [
      {
        name: 'Three Scales from One Root',
        description: 'Play A natural minor (A-B-C-D-E-F-G), A harmonic minor (A-B-C-D-E-F-G#), and A melodic minor ascending (A-B-C-D-E-F#-G#). Use the same fretboard position and notice only 1-2 notes change. Hear the character shift.',
      },
      {
        name: 'Harmonize Each Minor Scale',
        description: 'Build triads on each degree of A natural minor, harmonic minor, and melodic minor. Notice harmonic minor gives you E major (V) instead of Em (v) — this is why classical music uses it for strong cadences in minor keys.',
      },
      {
        name: 'Context Application',
        description: 'Over an Am-Dm-E7-Am progression, solo using natural minor over Am and Dm, but switch to harmonic minor over E7 (you need that G# to match the chord). This is how classical and flamenco guitarists navigate minor keys.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },

  // ============================================================
  // TIER 4 — Advanced
  // ============================================================
  {
    id: 'theory-modal-interchange',
    tree: 'theory',
    tier: 4,
    name: 'Modal Interchange',
    description: 'Borrow chords from parallel modes (e.g., using chords from C minor while in C major) to add unexpected color.',
    whyItMatters: 'Modal interchange explains the bIII, bVI, and bVII chords that appear in rock, pop, and film music constantly. That Eb chord in a C major song? Borrowed from C Aeolian. This technique dramatically expands your chord palette.',
    prerequisites: ['theory-modes', 'theory-minor-scale-types'],
    exercises: [
      {
        name: 'Common Borrowed Chords',
        description: 'In C major, play these borrowed chords from C minor: bIII (Eb), bVI (Ab), bVII (Bb), iv (Fm). Try the progression C-Bb-F-C (I-bVII-IV-I). The bVII is borrowed from Mixolydian. This is the "Hey Jude" / "Sweet Home Alabama" sound.',
      },
      {
        name: 'Picardy Third and Reverse',
        description: 'End a minor progression (Am-Dm-E7) on A major instead of Am — this is a Picardy third (borrowing I from the parallel major). Then do the reverse: end a major progression (C-F-G) on Cm. Feel the emotional twist each creates.',
      },
      {
        name: 'Map All Parallel Modes',
        description: 'Write out all chords available from C Ionian, Dorian, Phrygian, Lydian, Mixolydian, Aeolian, and Locrian. This gives you ~20+ chords that can function in the key of C. Play through the unique ones: Db from Phrygian, F#dim from Lydian, Gm from Dorian.',
      },
      {
        name: 'Write a Borrowed-Chord Progression',
        description: 'Compose an 8-bar progression in G major that uses at least 2 borrowed chords. Example: G-Em-Eb-Bb-C-Cm-G-D. Identify where each borrowed chord comes from (Eb = bVI from Aeolian, Cm = iv from Aeolian, Bb = bIII from Aeolian).',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'theory-altered-dominants',
    tree: 'theory',
    tier: 4,
    name: 'Altered Dominant Theory',
    description: 'Understand the altered scale (melodic minor up a half step) and how b9, #9, b5/#11, and b13 tensions color dominant chords.',
    whyItMatters: 'Altered dominants are the sound of modern jazz guitar. They create maximum tension before resolution, giving you that sophisticated, "outside" sound. Hendrix\'s "Purple Haze" E7#9 is an altered dominant in rock clothes.',
    prerequisites: ['theory-chord-extensions', 'theory-tritone-sub'],
    exercises: [
      {
        name: 'The Altered Scale',
        description: 'Play G altered (G-Ab-Bb-Cb-Db-Eb-F) — this is Ab melodic minor starting on G. Use it over G7 resolving to Cmaj7. Start on the 3rd fret, 6th string. Notice every extension is altered: b9, #9, #11, b13.',
      },
      {
        name: 'Altered Dominant Voicings',
        description: 'Learn these voicings: G7b9 (3-x-3-4-3-x), G7#9 (3-x-3-4-4-x), G7b13 (3-x-3-4-4-6), G7alt (3-x-3-4-4-3). Play each resolving to Cmaj7. Notice how each alteration changes the tension color.',
      },
      {
        name: 'Altered ii-V-I Lines',
        description: 'Over Dm7-G7alt-Cmaj7, play a line that uses D Dorian over Dm7, G altered scale over G7, and C Ionian over Cmaj7. The key is smooth voice leading between the scales. Start with just chord tones, then add scale tones.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'theory-chord-scale-theory',
    tree: 'theory',
    tier: 4,
    name: 'Chord-Scale Theory',
    description: 'Match the correct scale to every chord in a progression, providing a framework for melodic improvisation.',
    whyItMatters: 'Chord-scale theory removes guesswork from soloing. Instead of hoping the right notes are under your fingers, you know exactly which scale fits each chord. It\'s the bridge between theory knowledge and fluid improvisation.',
    prerequisites: ['theory-modes', 'theory-chord-extensions'],
    exercises: [
      {
        name: 'Diatonic Chord-Scale Map',
        description: 'In C major, map each chord to its mode: Cmaj7 = Ionian, Dm7 = Dorian, Em7 = Phrygian, Fmaj7 = Lydian, G7 = Mixolydian, Am7 = Aeolian, Bm7b5 = Locrian. Solo over each chord using its assigned mode for 8 bars.',
      },
      {
        name: 'Non-Diatonic Chord Scales',
        description: 'Common non-diatonic matches: m7 chords get Dorian, dominant 7 chords get Mixolydian or altered, maj7#11 gets Lydian, m7b5 gets Locrian #2 (or half-diminished). Over a Dm7-G7-Cmaj7-A7-Dm7 progression, assign and play the correct scale for each chord.',
      },
      {
        name: 'Target Note Soloing',
        description: 'For each chord change, identify the strongest target notes (3rd and 7th of each chord). Solo using the chord-scale but aim to land on these target notes on beat 1 of each chord change. This creates melodic coherence across changes.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'theory-voice-leading',
    tree: 'theory',
    tier: 4,
    name: 'Voice Leading Principles',
    description: 'Move between chords with minimal motion, keeping common tones and moving other voices by step.',
    whyItMatters: 'Voice leading is the difference between clunky chord changes and buttery smooth harmony. It\'s essential for jazz comping, fingerstyle arranging, and writing parts that singers and other instruments can follow.',
    prerequisites: ['theory-chord-extensions'],
    exercises: [
      {
        name: 'Common Tone Voice Leading',
        description: 'Play Cmaj7 (x-3-2-0-0-0) to Dm7 (x-5-3-2-1-1). Find the common tones (C stays, E moves to F, G stays, B moves to A). Now find a voicing of Dm7 that keeps the common tones on the same strings. Minimize finger movement.',
      },
      {
        name: 'Drop 2 Voice Leading Through ii-V-I',
        description: 'Using drop 2 voicings on the top 4 strings: Dm7 (x-x-3-2-1-1) → G7 (x-x-3-4-3-1) → Cmaj7 (x-x-2-4-0-0). Notice each voice moves by a step or stays put. Practice in 5 keys.',
      },
      {
        name: 'Chromatic Voice Leading',
        description: 'Play Cmaj7-C#dim7-Dm7-D#dim7-Em7. The bass moves chromatically C-C#-D-D#-E while the upper voices shift by half steps. Map this on strings 2-4 and feel how smooth chromatic voice leading creates a flowing harmony.',
      },
      {
        name: 'Inner Voice Movement',
        description: 'Hold a C note on the 2nd string (1st fret) and move one inner voice: C-E-G-C → C-E-Ab-C → C-E-A-C → C-E-Bb-C. This technique (pedal tone with moving voice) is used constantly in fingerstyle guitar. Create your own sequence over a G pedal.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'theory-minor-key-harmony',
    tree: 'theory',
    tier: 4,
    name: 'Functional Harmony in Minor Keys',
    description: 'Navigate the three forms of minor scale (natural, harmonic, melodic) to build chords and progressions, including the strong V7 cadence and the Andalusian cadence.',
    whyItMatters: 'Minor key harmony is messier than major because composers routinely pull from all three minor scales. Understanding which chords come from which minor scale — and why — lets you write minor-key music that sounds intentional rather than random.',
    prerequisites: ['theory-minor-scale-types', 'theory-secondary-dominants'],
    exercises: [
      {
        name: 'Minor Key Chord Palette',
        description: 'In A minor, compile all available chords from all three minor scales: natural minor gives Am, Bdim, C, Dm, Em, F, G. Harmonic minor adds E major, G#dim, C(maj7). Melodic minor adds D major (IV), F#dim, B minor (ii). Write all unique chords. You now have roughly 12 chords available. Group them: which come from natural, which from harmonic, which from melodic.',
      },
      {
        name: 'The Andalusian Cadence',
        description: 'Play Am-G-F-E in A minor. This is one of the most powerful progressions in Western music (flamenco, rock, classical). The E major chord (not Em) is borrowed from harmonic minor — it is the V chord with a raised 7th (G#), creating strong pull back to Am. Practice this at 80 BPM and listen for the tension-release at the E-Am movement. Try it in Dm (Dm-C-Bb-A).',
      },
      {
        name: 'Neapolitan Chord',
        description: 'The Neapolitan chord (bII, flat-two major) is a borrowed subdominant chord common in minor keys. In A minor, the Neapolitan is Bb major. Play: Am-Dm-Bb-E7-Am. The Bb creates a particularly tense, dramatic sound before the V7 resolution. It is built on the flattened second degree of the minor scale. Find it in Beethoven\'s "Moonlight Sonata" and other classical pieces.',
      },
      {
        name: 'Write a Minor Key Progression',
        description: 'Compose a 16-bar chord progression in D minor that uses at least: the natural minor iv chord (Gm), the harmonic minor V chord (A major or A7), and one chord from the melodic minor (G major, the bVII is common). Play through it and analyze every chord\'s source. The goal is intentional mixing, not random borrowing.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'theory-pedal-point',
    tree: 'theory',
    tier: 4,
    name: 'Pedal Point & Ostinato',
    description: 'Sustain or repeat a single bass note while harmonies above it change, creating tension through the friction between the fixed bass and moving chords.',
    whyItMatters: 'Pedal point is one of the oldest compositional devices in music — Bach used it, Hendrix used it ("Machine Gun"), and metal guitarists use it constantly. It creates tension organically because some chords are consonant over the pedal, others clash. That contrast is the engine.',
    prerequisites: ['theory-chord-function', 'theory-harmonic-analysis'],
    exercises: [
      {
        name: 'Open String Pedal',
        description: 'Tune to standard tuning. Loop the open E string (low E) as a pedal tone. Over it, play these chords: E5, Dsus2/E, A/E, Cmaj7/E, G/E. Some will be consonant (E5, A/E), some dissonant (Cmaj7/E, G/E). Note which intervals between the pedal and the chord create tension and which create resolution. This is functional tension-by-collision.',
      },
      {
        name: 'Static Bass, Moving Harmony',
        description: 'Hold the A string open (or at fret 5 on the low E for an A pedal). Above it, play: Am, then Fmaj7/A (F chord with A in bass), then Dm/A, then G/A. Each chord creates a different quality against the A pedal. Practice transitioning between chords while keeping the pedal constant — your picking hand must arpeggiate to sustain the bass note.',
      },
      {
        name: 'Ostinato Pattern',
        description: 'Write a repeating 2-bar bass riff (ostinato) and put different chord harmonies on top. Example: bass plays A-A-E-E (low E: open, open, fret 7, fret 7) while upper strings play: Am (bar 1) and Dm/F (bar 2, different root over same bass movement). This creates harmonic richness from harmonic rhythm contrast between bass and treble. Develop this into an 8-bar composition.',
      },
      {
        name: 'Identify Pedal Point in Recordings',
        description: 'Listen for pedal point in: "Machine Gun" by Hendrix (E pedal throughout), the intro to "Stairway to Heaven" (bass note sustaining under moving chords), Bach\'s Toccata and Fugue (organ pedal tone). For each, identify: what is the pedal note, how long does it hold, and which chords create the most tension against it.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'theory-negative-harmony',
    tree: 'theory',
    tier: 4,
    name: 'Negative Harmony',
    description: 'Mirror intervals around a key\'s axis to generate fresh chord substitutions and melodic ideas.',
    whyItMatters: 'Negative harmony (popularized by Jacob Collier, rooted in Ernst Levy\'s work) gives you a systematic way to find unexpected but musically logical substitutions. It\'s a creativity tool that can pull you out of cliches.',
    prerequisites: ['theory-modal-interchange'],
    exercises: [
      {
        name: 'Find the Axis',
        description: 'In C major, the axis sits between E and Eb (the midpoint of the root\'s major and minor 3rds). Mirror each note around this axis: C↔G, D↔F, E↔Eb, A↔Bb, B↔Ab. Write out the complete mirror mapping for all 12 chromatic notes.',
      },
      {
        name: 'Mirror a Chord Progression',
        description: 'Take C-G-Am-F (I-V-vi-IV) in C major. Mirror each chord: C→Cm, G→Fm, Am→Abmaj, F→Gm. Play the negative version: Cm-Fm-Ab-Gm. It sounds completely different yet has a strange harmonic logic. Compare the two back to back.',
      },
      {
        name: 'Negative Melody',
        description: 'Take a simple melody in C major (e.g., "Mary Had a Little Lamb": E-D-C-D-E-E-E). Mirror each note around the E/Eb axis. Play the original and mirrored versions together to hear the symmetry. Use this technique to generate counter-melodies.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },

  // ============================================================
  // TIER 5 — Mastery
  // ============================================================
  {
    id: 'theory-reharmonization',
    tree: 'theory',
    tier: 5,
    name: 'Reharmonization',
    description: 'Replace a song\'s original chords with new ones that support the melody differently, using substitution, chromatic movement, and modal interchange.',
    whyItMatters: 'Reharmonization is how you make a standard sound like YOUR arrangement. It combines every theory concept you\'ve learned — tritone subs, modal interchange, voice leading — into a creative act. It\'s the ultimate theory application.',
    prerequisites: ['theory-voice-leading', 'theory-altered-dominants'],
    exercises: [
      {
        name: 'Reharmonize "Happy Birthday"',
        description: 'The melody is simple: 5-5-6-5-1-7, 5-5-6-5-2-1. Start with the original I-V-I-IV-I-V-I. Now reharmonize using: secondary dominants, tritone subs, and chromatic passing chords. Aim for 3 different reharmonized versions.',
      },
      {
        name: 'Melody Note as Extension',
        description: 'Take any melody note and treat it as the 9th, #11th, or 13th of a chord instead of the root or 3rd. If the melody plays E over C major (3rd), try Dbmaj7 (where E = #9/b3) or Amaj9 (where E = 5th). This generates surprising but functional harmony.',
      },
      {
        name: 'Planing / Constant Structure',
        description: 'Move one chord quality in parallel: play Cmaj7-Dbmaj7-Dmaj7-Ebmaj7 under a sustained G melody note. The G becomes the 5th, b5, 4th, and 3rd respectively. This non-functional approach creates modern, cinematic sounds.',
      },
      {
        name: 'Coltrane Changes Applied',
        description: 'Take a static Cmaj7 for 4 bars. Replace with Cmaj7-Eb7-Abmaj7-B7-Emaj7-G7-Cmaj7 (major thirds cycle with dominant approaches). Play through at a slow tempo, using appropriate chord scales for each chord.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'theory-composition-analysis',
    tree: 'theory',
    tier: 5,
    name: 'Composition Analysis',
    description: 'Analyze complete pieces for form (AABA, verse-chorus, through-composed), harmonic rhythm, motivic development, and structural function.',
    whyItMatters: 'Analysis lets you reverse-engineer why great music works. It builds your compositional vocabulary so you stop writing by accident and start writing with intention. Every great guitarist-composer — from Django to Metheny — studied form.',
    prerequisites: ['theory-chord-scale-theory'],
    exercises: [
      {
        name: 'Analyze a Jazz Standard',
        description: 'Take "Autumn Leaves." Map the form (AABC, 32 bars). Label every chord with Roman numerals in both the relative major and minor. Identify the ii-V-I patterns. Note where the melody uses chord tones vs tensions. Write a one-page analysis.',
      },
      {
        name: 'Pop Song Deconstruction',
        description: 'Pick a hit song. Map its sections (intro, verse, pre-chorus, chorus, bridge). Note the harmonic rhythm (how often chords change), the hook placement, and what makes the chorus feel bigger than the verse. Apply one technique you identify to your own writing.',
      },
      {
        name: 'Motivic Development Study',
        description: 'In Beethoven\'s 5th, four notes generate an entire symphony. Pick a guitar piece (e.g., "Little Wing" by Hendrix) and trace how the opening motif transforms: transposition, inversion, rhythmic displacement, extension. Then write 4 variations of your own 4-note motif.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'theory-polytonality',
    tree: 'theory',
    tier: 5,
    name: 'Polytonality',
    description: 'Layer two or more keys simultaneously to create complex, dissonant-yet-structured textures.',
    whyItMatters: 'Polytonality pushes beyond conventional harmony into the territory of modern composition, film scoring, and avant-garde jazz. It\'s not about random dissonance — it\'s controlled tension that can evoke emotions single-key harmony cannot.',
    prerequisites: ['theory-modal-interchange'],
    exercises: [
      {
        name: 'Bitonality on Guitar',
        description: 'Tune a capo to the 7th fret and play open E chord shapes above it while a looped bass plays in C. You\'re stacking E major over C major, creating a polytonal texture. Listen for how the two keys interact — some moments clash, others align beautifully.',
      },
      {
        name: 'Upper Structure Triads',
        description: 'Over a C7 chord, play an E major triad (E-G#-B). These notes become the 3rd, #5/b13, and maj7 of C — extremely dissonant but structured. Try D triad over C7 (9th, #11, 13th — much smoother). Map which upper structures work over dominant 7th chords.',
      },
      {
        name: 'Polytonal Comping',
        description: 'Over a Dm7 bass vamp, alternate between playing Dm7 voicings and Abmaj7 voicings (a tritone away). The Abmaj7 adds b5, b7, b9, and 4 against the Dm. Practice transitioning smoothly between "inside" and "outside" sounds.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'theory-advanced-arranging',
    tree: 'theory',
    tier: 5,
    name: 'Advanced Arranging',
    description: 'Apply horn-section voicing techniques (drop 2, drop 3, spread voicings, clusters) to solo guitar arrangements.',
    whyItMatters: 'Arranging for solo guitar is one of the hardest and most rewarding applications of theory. Translating horn voicings, bass lines, and melody to six strings requires deep understanding of voice leading, chord voicings, and prioritization.',
    prerequisites: ['theory-voice-leading', 'theory-reharmonization'],
    exercises: [
      {
        name: 'Drop 2 and Drop 3 Voicing Sets',
        description: 'Take a Cmaj7 close voicing (C-E-G-B). Drop the 2nd voice from the top: B-C-E-G (drop 2). Drop the 3rd voice: B-E-C-G (drop 3). Map both voicing types across all inversions on strings 1-4 and 2-5. You now have 8+ voicings for one chord.',
      },
      {
        name: 'Melody-Bass-Harmony Arrangement',
        description: 'Take "Summertime" or another simple melody. Arrange it for solo guitar: melody on top strings, bass note on beats 1 and 3, harmony voices filling the middle. Keep the melody singable and the bass walking. This is the Joe Pass / Ted Greene approach.',
      },
      {
        name: 'Cluster Voicing Application',
        description: 'Play a 3-note cluster (adjacent scale tones) on strings 1-3: e.g., A-B-C at the 5th position (A on string 3, B on string 2, C on string 1). Move this cluster diatonically through a scale. These dense voicings create a modern, orchestral texture.',
      },
      {
        name: 'Reductive Arranging',
        description: 'Take a full-band recording of a song you love. Transcribe the essential elements: melody, bass movement, key harmonic moments. Reduce it to what 6 strings can handle, making tough choices about which voices to keep. The art is in what you leave out.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'theory-coltrane-changes',
    tree: 'theory',
    tier: 5,
    name: 'Coltrane Changes',
    description: 'Navigate the harmonic substitution system used in "Giant Steps" — three tonal centers a major third apart, cycling through keys in equal intervals.',
    whyItMatters: 'Coltrane Changes are the Mount Everest of jazz harmony. They divide the octave into three equal parts (major thirds), cycling through three unrelated keys so smoothly that each transition sounds inevitable. Understanding them reshapes how you think about key relationships and dominant resolution.',
    prerequisites: ['theory-tritone-sub', 'theory-reharmonization'],
    exercises: [
      {
        name: 'The Three-Key Cycle',
        description: 'Coltrane Changes divide the octave into thirds: Bmaj7 → D7 → Gmaj7 → Bb7 → Ebmaj7 → G7 → Cmaj7. Play through this sequence slowly. Notice: the roots move by major thirds (B → G → Eb), and each major chord is preceded by its V7. The three major-third keys (B, G, Eb) form an augmented triad. Play each chord for 4 beats at 50 BPM.',
      },
      {
        name: 'Play Over a II-V Substituted with Coltrane Changes',
        description: 'Replace a static Cmaj7 (4 bars) with the Coltrane cycle: Cmaj7 (1 bar) → A7 → Dbmaj7 (1 bar) → Bb7 → Gmaj7 (1 bar) → E7 → Cmaj7 (1 bar). This is the Coltrane reharmonization of a long tonic chord. Play each chord for 1 bar at 60 BPM. Then solo over it using Lydian for major chords and Mixolydian or altered for dominant chords.',
      },
      {
        name: 'Transcribe 8 Bars of Giant Steps',
        description: 'Get the lead sheet for "Giant Steps" by John Coltrane. Transcribe 8 bars of the melody and analyze every chord: identify each tonal center, label the dominant-to-major resolutions, and notice where Coltrane uses tritone subs within the larger third-cycle. This is advanced theory in action — take it slowly. One chord per day if needed.',
      },
      {
        name: 'Solo Over a Static Chord with Coltrane Approach',
        description: 'Improvise over a simple G major backing (4 bars). Instead of staying in G Ionian, mentally impose Coltrane changes: treat the first bar as Gmaj (G Lydian), second bar as Eb7 resolution (G altered or Ab melodic minor), third bar as Ebmaj (Eb Lydian), fourth bar as return to G. Play notes that suggest these temporary key areas. This inside/outside movement is what makes this approach distinctly Coltrane.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'theory-writing-for-ensemble',
    tree: 'theory',
    tier: 5,
    name: 'Writing for Ensemble',
    description: 'Compose and arrange parts for a full band: rhythm guitar, lead guitar, bass, keys, and vocals working as a unit.',
    whyItMatters: 'A guitarist who can write for an ensemble is a bandleader, not just a player. Understanding how guitar parts fit with bass, drums, and vocals prevents you from stepping on other instruments and makes your writing sound professional.',
    prerequisites: ['theory-composition-analysis', 'theory-advanced-arranging'],
    exercises: [
      {
        name: 'Frequency Slot Assignment',
        description: 'Write a 16-bar piece where each instrument occupies its own frequency range: bass guitar (low), rhythm guitar (low-mid, no rumble), keys (mid), lead guitar (upper-mid), vocals (mid-high). Record or notate each part. Avoid frequency clashes by adjusting voicing registers.',
      },
      {
        name: 'Call and Response Arrangement',
        description: 'Write a 12-bar arrangement where the vocal melody and lead guitar never play at the same time. The guitar fills between vocal phrases, responds to the melody, and echoes key motifs. This is classic blues/soul arranging — listen to B.B. King for the gold standard.',
      },
      {
        name: 'Rhythm Section Interlocking',
        description: 'Write a funk groove where the rhythm guitar plays on the "and" of beats (upbeats), the bass locks with the kick drum on beats 1 and 3, and a second guitar plays percussive muted 16th notes. Each part is simple alone; together they create a tight groove.',
      },
      {
        name: 'Score a Short Scene',
        description: 'Pick a 60-second film clip (muted). Write guitar-led music for it with at least 3 parts: a melodic theme, a harmonic bed (arpeggiated or pad-like), and a rhythmic element. Match the emotional arc of the scene with harmonic tension and release.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
];
