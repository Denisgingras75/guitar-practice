export const EAR_NODES = [
  // ============================================================
  // TIER 1 — Foundation
  // ============================================================
  {
    id: 'ear-tuning-by-ear',
    tree: 'ear',
    tier: 1,
    name: 'Tuning By Ear',
    description: 'Tune your guitar without a tuner using reference pitches and string relationships.',
    whyItMatters: 'A tuner won\'t always be handy, and training your ear to hear pitch discrepancies makes you a better musician overall. This is the most practical ear skill you\'ll ever develop.',
    prerequisites: [],
    exercises: [
      {
        name: '5th Fret Method',
        description: 'Start with a reference pitch for the low E string (a piano, tuning fork, or phone app). Fret the 5th fret of the 6th string and tune the open 5th string to match. Repeat across all string pairs (use the 4th fret for the G-to-B pair). Do this daily until you can hear beats disappearing as pitches converge.',
      },
      {
        name: 'Harmonics Method',
        description: 'Lightly touch the 5th fret harmonic on the 6th string and the 7th fret harmonic on the 5th string — they should produce the same pitch. Listen for the wobble (beating) between the two notes and tune until it disappears. Repeat for each adjacent string pair.',
      },
      {
        name: 'Sing the Target Pitch',
        description: 'Before tuning each string, try to sing or hum the pitch you expect. Then play the string and see how close you were. This builds internal pitch memory over time.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [
      { title: 'How to Tune a Guitar by Ear', channel: 'Justin Guitar', url: 'https://www.youtube.com/watch?v=OjO9Uf0Z9Tg' },
    ],
  },
  {
    id: 'ear-major-minor-recognition',
    tree: 'ear',
    tier: 1,
    name: 'Major vs Minor Recognition',
    description: 'Hear the difference between major and minor chords and scales instantly.',
    whyItMatters: 'Major vs minor is the most fundamental color in music. If you can\'t hear this difference, everything built on top — chord progressions, modes, harmony — will be guesswork.',
    prerequisites: [],
    exercises: [
      {
        name: 'Chord Flashcards',
        description: 'Have a friend (or an app like Functional Ear Trainer) play random major and minor chords. Call out which one you hear before checking. Start with open chords you know well — C major vs A minor, G major vs E minor. Aim for 20 in a row with 90%+ accuracy.',
      },
      {
        name: 'Song Association',
        description: 'Build a mental library: "Here Comes the Sun" = major feel, "Losing My Religion" = minor feel. When you hear a chord, ask yourself which song vibe it matches. Write down 5 major and 5 minor songs you know well as personal reference points.',
      },
      {
        name: 'Strum and Label',
        description: 'Play through all the open chords you know. For each one, say out loud whether it\'s major or minor before checking. Then play C major followed immediately by C minor (barre chord) to hear the isolated color change with the same root.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [
      { title: 'Major vs Minor — Hear the Difference', channel: 'Rick Beato', url: 'https://www.youtube.com/watch?v=yd4NqWBfhd8' },
    ],
  },
  {
    id: 'ear-root-note-id',
    tree: 'ear',
    tier: 1,
    name: 'Root Note Identification',
    description: 'Pick out the bass note (root) when you hear a chord or a passage of music.',
    whyItMatters: 'The root is your anchor. If you can hear it, you can figure out what key you\'re in, what chord is being played, and where to put your fingers. It\'s the foundation of playing by ear.',
    prerequisites: [],
    exercises: [
      {
        name: 'Bass Note Hunting',
        description: 'Play a song you like and focus only on the lowest note in each chord. Pause the track, find that note on your low E or A string by hunting up the frets. Don\'t worry about the full chord yet — just nail the bass note. Try this with "Let It Be" (C-G-Am-F bass notes).',
      },
      {
        name: 'Sing the Root',
        description: 'Strum any chord you know. While the chord is still ringing, sing the lowest note. Then check by playing just that single bass note. Do this with 10 different chords per session.',
      },
      {
        name: 'Root vs Fifth Distinction',
        description: 'Play a power chord (root + fifth). Now play just the root, then just the fifth. Listen to how the fifth sounds "higher but related." Play along with a rock song and try to hear whether the bass is sitting on the root or the fifth of each chord.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'ear-matching-pitch',
    tree: 'ear',
    tier: 1,
    name: 'Matching Pitch Vocally',
    description: 'Hear a note and sing it back accurately.',
    whyItMatters: 'Your voice is the bridge between your ear and your instrument. If you can sing it, you can find it on the fretboard. Vocalists who play guitar learn songs 3x faster because the ear-voice-hand loop is connected.',
    prerequisites: [],
    exercises: [
      {
        name: 'Single Note Matching',
        description: 'Play a random note on your guitar (anywhere on the neck). Sing it back immediately. Then play the note again to check. If you\'re off, slide your voice up or down until it locks in. Do 15 notes per session across different octaves.',
      },
      {
        name: 'Drone and Sing',
        description: 'Let your open low E string ring (or use a drone app). Sing the same pitch. Now try singing the octave above it. Then come back down. Hold each pitch for 5 seconds and listen for the "lock" when you\'re perfectly in tune with the drone.',
      },
      {
        name: 'Melody Echo',
        description: 'Play a simple 3-note phrase on your guitar. Sing it back. Gradually increase to 4, 5, and 6 notes. Use melodies you know — the first 4 notes of "Happy Birthday," the opening of "Smoke on the Water." Sing before you verify on the fretboard.',
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
    id: 'ear-ascending-intervals',
    tree: 'ear',
    tier: 2,
    name: 'Ascending Interval Recognition',
    description: 'Identify any interval by ear when the second note is higher than the first.',
    whyItMatters: 'Intervals are the atoms of melody. Once you can name what you hear, transcribing melodies goes from impossible to methodical. Every riff you\'ve ever loved is just a sequence of intervals.',
    prerequisites: ['ear-matching-pitch'],
    exercises: [
      {
        name: 'Song-Based Interval Reference',
        description: 'Build your reference library: minor 2nd = "Jaws" theme, major 2nd = "Happy Birthday," minor 3rd = "Smoke on the Water," major 3rd = "Oh When the Saints," perfect 4th = "Here Comes the Bride," tritone = "The Simpsons," perfect 5th = "Star Wars" (main theme), minor 6th = "The Entertainer," major 6th = "My Bonnie," minor 7th = "Somewhere" (West Side Story original), major 7th = "Take On Me" (first two notes of chorus), octave = "Somewhere Over the Rainbow." Drill 5 minutes daily with an interval trainer app.',
      },
      {
        name: 'Fretboard Interval Drill',
        description: 'Play the open A string. Now play each interval ascending from A on the same string: A to Bb (minor 2nd, 1st fret), A to B (major 2nd, 2nd fret), and so on up to the octave at the 12th fret. Sing each interval before you play it. Name the interval out loud.',
      },
      {
        name: 'Random Note Pair Quiz',
        description: 'Have a friend play two notes (or use an app). Identify the interval. Start with just perfect 4ths and 5ths, then add 3rds, then fill in the rest. Work up to identifying all 12 intervals with 80%+ accuracy before moving on.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [
      { title: 'Ear Training — Interval Recognition for Guitar', channel: 'Rick Beato', url: 'https://www.youtube.com/watch?v=HkuR6FN2L3g' },
    ],
  },
  {
    id: 'ear-chord-quality-id',
    tree: 'ear',
    tier: 2,
    name: 'Chord Quality Identification',
    description: 'Distinguish between major, minor, and dominant 7th chords by ear.',
    whyItMatters: 'Most popular music uses these three chord types constantly. Being able to hear the difference means you can figure out songs on the fly at a jam session instead of looking up tabs.',
    prerequisites: ['ear-major-minor-recognition'],
    exercises: [
      {
        name: 'Three-Way Comparison',
        description: 'Play A major, A minor, and A7 in sequence. Listen to how major sounds bright, minor sounds dark, and dominant 7th sounds bluesy and unresolved. Repeat with D, E, and G roots. Shuffle the order and identify each without looking.',
      },
      {
        name: 'Blues Chord Spotting',
        description: 'Play a 12-bar blues in A (A7-D7-E7). Now replace one chord with a major or minor version. Can you hear when the dominant 7th disappears? The dominant 7th has a distinct "pull" or tension that pure major chords lack.',
      },
      {
        name: 'Real Song Analysis',
        description: 'Listen to "Wonderful Tonight" by Clapton. Every chord is either major or minor — label each one by ear. Then try "Red House" by Hendrix — it\'s all dominant 7ths. Compare how the two songs feel different because of chord quality alone.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'ear-simple-melody-transcription',
    tree: 'ear',
    tier: 2,
    name: 'Simple Melody Transcription',
    description: 'Listen to a simple melody and figure it out on the guitar by ear.',
    whyItMatters: 'This is the whole point of ear training — hearing music and being able to play it. Start simple so the process becomes natural before tackling harder material.',
    prerequisites: ['ear-ascending-intervals'],
    exercises: [
      {
        name: 'Nursery Rhyme Transcription',
        description: 'Pick melodies you already know: "Twinkle Twinkle Little Star," "Mary Had a Little Lamb," "Ode to Joy." Without looking anything up, find the melody on a single string. Use your interval knowledge: "That jump sounds like a perfect 4th." Write down the notes as you go.',
      },
      {
        name: 'Vocal Melody Lift',
        description: 'Choose a simple pop song you like. Listen to the vocal melody of just the verse. Pause after each phrase and find those notes on your guitar. Start with something repetitive like "Stand By Me" or "Knockin\' on Heaven\'s Door." One phrase at a time.',
      },
      {
        name: 'Slow It Down',
        description: 'Use a slow-down app (Amazing Slow Downer, Transcribe+, or YouTube playback speed). Take a guitar melody like the intro to "Wish You Were Here" and slow it to 50%. Transcribe note by note. Speed it back up to verify you got it right.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'ear-bass-note',
    tree: 'ear',
    tier: 2,
    name: 'Hearing the Bass Note in Chords',
    description: 'Isolate and identify the bass note in chords within a full mix.',
    whyItMatters: 'In a band context, the bass note tells you the chord root even when you can\'t hear every note clearly. This skill lets you follow along with any song in real time, even in a noisy room.',
    prerequisites: ['ear-root-note-id'],
    exercises: [
      {
        name: 'Bass Isolation Listening',
        description: 'Listen to "Another One Bites the Dust" by Queen — the bass is prominent and mostly plays root notes. Follow along on your low E string. Then try "Come Together" by The Beatles where the bass moves more. Find each bass note before looking it up.',
      },
      {
        name: 'Slash Chord Detection',
        description: 'Play C/G (C chord with G in the bass) vs a regular C chord. Hear how the character changes when the bass note isn\'t the root. Play through "Stairway to Heaven" intro — many chords have moving bass lines. Identify when the bass note differs from the chord name.',
      },
      {
        name: 'Bass Note Dictation',
        description: 'Play a song you\'ve never learned. Write down just the bass note of each chord change (letter names only, ignore chord quality for now). Check against a chord chart. If you got the bass notes right, you\'re 80% of the way to knowing the chords.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },

  {
    id: 'ear-rhythm-transcription',
    tree: 'ear',
    tier: 2,
    name: 'Rhythm Transcription',
    description: 'Hear a rhythmic pattern and write it down or play it back accurately.',
    whyItMatters: 'Pitch gets all the attention, but rhythm is half of music. Being able to transcribe a groove or strumming pattern by ear means you can learn songs without tabs and communicate rhythmic ideas precisely to other musicians.',
    prerequisites: ['ear-matching-pitch'],
    exercises: [
      {
        name: 'Clap Before You Play',
        description: 'Listen to a song and clap along with the guitar strumming or drum pattern — not the beat, the actual rhythm. Tap it out until you have it memorized. Then transfer it to muted guitar strings. This isolates rhythm from pitch.',
      },
      {
        name: 'Straight vs Shuffle',
        description: 'Play four bars of eighth notes straight (even, mechanical), then four bars shuffled (the second eighth of each pair pushed back to a triplet feel). Record both. Now listen to songs and identify which feel the guitarist is using. This is the single biggest groove distinction in popular music.',
      },
      {
        name: 'Rhythm Notation Dictation',
        description: 'Put on a simple guitar riff (e.g., "Johnny B. Goode" intro). Draw a timeline of 4 bars and mark where each note lands — on the beat, on the "and," on the "e" or "ah." You do not need formal notation — your own symbols are fine. Then play back what you drew.',
      },
      {
        name: 'Strumming Pattern Transcription',
        description: 'Pick 3 songs with different strumming patterns (try "Wonderwall," "Brown Eyed Girl," and a reggae song). For each one, mark the pattern as D (down) and U (up) and note which strokes are accented. Verify by playing along with the recording.',
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
    id: 'ear-descending-intervals',
    tree: 'ear',
    tier: 3,
    name: 'Descending Interval Recognition',
    description: 'Identify intervals when the second note is lower than the first.',
    whyItMatters: 'Melodies go down as much as they go up. Many players can hear ascending intervals but freeze on descending ones. This plugs that gap and doubles your transcription speed.',
    prerequisites: ['ear-ascending-intervals'],
    exercises: [
      {
        name: 'Reverse Your Reference Songs',
        description: 'For each ascending reference song, find a descending one: descending minor 2nd = "Fur Elise" (first two notes), descending major 2nd = "Mary Had a Little Lamb" (first two notes), descending minor 3rd = "Hey Jude" (first two notes), descending perfect 4th = "I Hear a Symphony," descending perfect 5th = "The Flintstones" theme, descending octave = "Willow Weep for Me." Drill these alongside your ascending references.',
      },
      {
        name: 'Descending Fretboard Walk',
        description: 'Start at the 12th fret on the B string. Play descending intervals: 12th fret to 11th (minor 2nd), 12th to 10th (major 2nd), and so on. Sing each interval before playing it. Compare how descending intervals feel emotionally different from ascending ones.',
      },
      {
        name: 'Mixed Direction Quiz',
        description: 'Use an interval trainer app set to both ascending and descending. The challenge now is identifying both the interval AND the direction. Start at 70% accuracy target and work up to 85% before moving on.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'ear-extended-chord-quality',
    tree: 'ear',
    tier: 3,
    name: 'Extended Chord Quality Recognition',
    description: 'Distinguish maj7, min7, diminished, and augmented chords by ear.',
    whyItMatters: 'These chord types define entire genres. Maj7 = jazz/neo-soul, min7 = R&B/funk, diminished = passing chords in jazz, augmented = Beatles-style surprise. Hearing them opens up a much richer harmonic world.',
    prerequisites: ['ear-chord-quality-id'],
    exercises: [
      {
        name: 'Four-Way A Root Comparison',
        description: 'Play Amaj7, Am7, Adim, and Aaug in sequence. Maj7 sounds dreamy and warm. Min7 sounds smooth and mellow. Diminished sounds tense and symmetrical. Augmented sounds eerie and unstable. Repeat until you can identify each one blind. Shuffle the order every round.',
      },
      {
        name: 'Genre Spotting',
        description: 'Listen to "Neon" by John Mayer — loaded with maj7 and min7 chords. Then listen to "Black Orpheus" (jazz standard) — full of min7 and diminished passing chords. Then "Oh! Darling" by The Beatles for augmented chords. Identify each chord type as it passes.',
      },
      {
        name: 'Build and Break',
        description: 'Play a C major chord. Add the major 7th (B note) — hear how it changes. Now flatten the 7th to Bb (dominant 7th). Now flatten the 3rd too (minor 7th). Now flatten the 5th (half-diminished). Each step changes one note — hear exactly what that note does to the sound.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'ear-transcribe-solo',
    tree: 'ear',
    tier: 3,
    name: 'Transcribe a Guitar Solo by Ear',
    description: 'Learn an entire guitar solo without tabs, using only your ears.',
    whyItMatters: 'This is how every great guitarist before the internet learned — by lifting solos off records. It forces deep listening, teaches you phrasing and note choice, and builds a vocabulary you actually internalize instead of just reading off a page.',
    prerequisites: ['ear-simple-melody-transcription'],
    exercises: [
      {
        name: 'The "Slow Blues Solo" Start',
        description: 'Pick a slow, expressive solo: BB King\'s "The Thrill Is Gone," Clapton\'s "Wonderful Tonight" solo, or the first solo in "Comfortably Numb." Slow it to 60% speed. Transcribe 4 bars at a time. Find each note on the fretboard, write it down, then move to the next phrase. This will take multiple sessions — that\'s normal.',
      },
      {
        name: 'Phrase by Phrase',
        description: 'Listen to a phrase 5 times without touching your guitar. Sing it. Then pick up the guitar and find it. If you can sing it accurately, you can find it. If you can\'t sing it, listen more. The voice is your checkpoint between ear and hands.',
      },
      {
        name: 'Check Against the Record',
        description: 'After transcribing a section, play along with the original at full speed. Notes that clash mean you got something wrong — zoom in on those spots. When you can play the entire solo in sync with the recording, you\'ve nailed it. Compare against a tab only as a final check.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'ear-melodic-dictation',
    tree: 'ear',
    tier: 3,
    name: 'Melodic Dictation',
    description: 'Hear a melody and write down the note names and rhythms accurately.',
    whyItMatters: 'Melodic dictation is how musicians capture music precisely — from a teacher\'s example, a bandmate\'s idea, or a melody in your own head. It closes the loop between listening and writing, which is essential for composing and session work.',
    prerequisites: ['ear-simple-melody-transcription', 'ear-ascending-intervals'],
    exercises: [
      {
        name: 'Four-Bar Single-Line Dictation',
        description: 'Have someone (or an app) play a 4-bar melody in C major, one listen only. Write down the note names in order. Then verify on your guitar. Start with stepwise motion only (adjacent notes), then add skips as you improve. Target: 80% accuracy before moving to harder material.',
      },
      {
        name: 'Sing Before Writing',
        description: 'After hearing a melody once, sing it back before writing anything. If you can sing it accurately, your notation will be accurate. If you stumble singing it, listen again. The voice is your accuracy checkpoint.',
      },
      {
        name: 'Rhythm + Pitch Together',
        description: 'Most dictation falls apart because rhythm and pitch are tracked separately. Listen to the melody once just for rhythm — mark beat placement for each note with dashes. Listen again for pitches and fill them in. Two-pass dictation is much more reliable than trying to catch everything at once.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'ear-harmonic-rhythm',
    tree: 'ear',
    tier: 3,
    name: 'Harmonic Rhythm Recognition',
    description: 'Identify when and how often chords change in a piece of music.',
    whyItMatters: 'Knowing that a chord changes is different from knowing which chord it changes to. Harmonic rhythm — the tempo of chord changes — is what gives music its momentum. Feel it wrong and your comping will never lock in.',
    prerequisites: ['ear-chord-quality-id', 'ear-root-note-id'],
    exercises: [
      {
        name: 'One-Change-Per-Bar vs Two',
        description: 'Listen to "Let It Be" by The Beatles (one chord per bar, mostly) versus "Fly Me to the Moon" in a jazz arrangement (sometimes two or more chords per bar). Tap your foot on every chord change. The density of changes is harmonic rhythm — notice how it creates different feels.',
      },
      {
        name: 'Mark the Changes',
        description: 'Put on a song you do not know well. On a piece of paper, draw a bar line every 4 beats. Every time a chord changes, make a mark. At the end, count the marks per bar. Does the song have one change per bar, two, four? Verify against a chord chart.',
      },
      {
        name: 'Slow-Down and Lock In',
        description: 'Use a slow-down app to take a song to 70% speed. Now the chord changes should be much easier to catch as they happen. Pick up guitar and try to change with the music in real time. Gradually increase speed back to 100% over multiple sessions.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'ear-chord-progression-recognition',
    tree: 'ear',
    tier: 3,
    name: 'Chord Progression Recognition',
    description: 'Hear common chord progressions (I-IV-V, I-V-vi-IV, ii-V-I) and name the numerals.',
    whyItMatters: 'Most songs use the same handful of progressions. Once you can hear "oh, that\'s a I-V-vi-IV," you can play along with thousands of songs instantly in any key. This is the single biggest unlock for playing by ear.',
    prerequisites: ['ear-chord-quality-id', 'ear-bass-note'],
    exercises: [
      {
        name: 'The Four Progressions Drill',
        description: 'In the key of G, play these four progressions and memorize their sound: I-IV-V-I (G-C-D-G — classic rock/country), I-V-vi-IV (G-D-Em-C — most pop songs ever), I-vi-IV-V (G-Em-C-D — 50s doo-wop), ii-V-I (Am-D-G — jazz foundation). Play each 10 times, then have someone play one randomly and identify it.',
      },
      {
        name: 'Song Mapping',
        description: 'Take 5 songs you know and write out the chord progression in Roman numerals. "Let It Be" = I-V-vi-IV. "Twist and Shout" = I-IV-V. "Autumn Leaves" = ii-V-I-IV-vii-III-vi. Hearing real songs as number patterns trains you to recognize them everywhere.',
      },
      {
        name: 'Random Key Transposition',
        description: 'Once you can hear a I-V-vi-IV in G, play it in D, then A, then E. The chord names change but the sound relationship stays the same. Train your ear to hear the function (I, IV, V) regardless of key. Play along with a playlist and call out the numerals in real time.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [
      { title: 'How to Hear Chord Progressions by Ear', channel: 'Rick Beato', url: 'https://www.youtube.com/watch?v=voBCbMxcDG8' },
    ],
  },

  // ============================================================
  // TIER 4 — Advanced
  // ============================================================
  {
    id: 'ear-hearing-extensions',
    tree: 'ear',
    tier: 4,
    name: 'Hearing Extensions (9ths, 11ths, 13ths)',
    description: 'Identify extended chord tones — the 9th, 11th, and 13th — within chords.',
    whyItMatters: 'Extensions are what separate a basic cowboy chord from a rich, professional sound. If you can hear them, you can add them tastefully to your own playing and understand why certain voicings sound so good.',
    prerequisites: ['ear-extended-chord-quality'],
    exercises: [
      {
        name: 'Add One Note at a Time',
        description: 'Play a C7 chord (C-E-G-Bb). Now add D on top (the 9th) — hear how it opens up. Add F (the 11th) — hear the tension increase. Add A (the 13th) — hear the jazzy sweetness. Remove each extension one at a time and notice what disappears from the sound.',
      },
      {
        name: 'Hendrix Chord Study',
        description: 'The "Hendrix chord" (7#9) is a dominant 7th with a sharp 9th. Play E7#9 (0-7-6-7-8-x). Compare it to a plain E7. Listen to "Purple Haze" — that aggressive, dissonant bite is the #9. Now try the same trick on A7#9. Train your ear to spot that specific color.',
      },
      {
        name: 'Neo-Soul Chord Spotting',
        description: 'Listen to Tom Misch, Daniel Caesar, or Mac DeMarco. These artists use 9th and 13th chords constantly. Pick one song and try to identify where extensions appear — they\'ll sound richer and more colorful than plain triads or 7th chords. Write down timestamps where you hear them.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'ear-modes-by-ear',
    tree: 'ear',
    tier: 4,
    name: 'Recognizing Modes by Ear',
    description: 'Hear the characteristic color of each mode (Dorian, Mixolydian, Lydian, etc.) without analysis.',
    whyItMatters: 'Modes give you seven different emotional colors from the same set of notes. Hearing them means you can match your soloing to any mood — Dorian for smooth minor, Mixolydian for bluesy major, Lydian for dreamy brightness.',
    prerequisites: ['ear-chord-progression-recognition'],
    exercises: [
      {
        name: 'Mode Character Notes',
        description: 'Each mode has one note that defines its color. Play a D Dorian scale over a Dm drone and land on the B natural (the natural 6th) — that\'s the Dorian sound. Play G Mixolydian over a G drone and land on the F natural (the flat 7th). Play F Lydian over an F drone and land on the B natural (the sharp 4th). Isolate the character note of each mode.',
      },
      {
        name: 'Modal Song References',
        description: 'Dorian = "So What" by Miles Davis, "Oye Como Va" by Santana. Mixolydian = "Norwegian Wood" by The Beatles, "Sweet Home Alabama." Lydian = "Flying in a Blue Dream" by Satriani, the Simpsons theme. Phrygian = "White Rabbit" by Jefferson Airplane. Listen to each and memorize the vibe.',
      },
      {
        name: 'Drone Improvisation',
        description: 'Set up a drone note (use a drone app or let an open string ring). Improvise in each mode over that drone for 2 minutes each. Focus on the emotional difference: Ionian = happy/resolved, Dorian = cool/smooth, Phrygian = dark/Spanish, Lydian = bright/floating, Mixolydian = bluesy/rock, Aeolian = sad/natural minor, Locrian = unstable/tense.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [
      { title: 'Every Mode Explained with Real Music Examples', channel: 'Signals Music Studio', url: 'https://www.youtube.com/watch?v=EerBnVd2Mkk' },
    ],
  },
  {
    id: 'ear-relative-pitch-fluency',
    tree: 'ear',
    tier: 4,
    name: 'Relative Pitch Fluency',
    description: 'Sing any interval on demand from any given starting note.',
    whyItMatters: 'This is the active version of interval recognition — not just naming what you hear, but producing what you imagine. It closes the loop between hearing music in your head and executing it on the instrument without searching.',
    prerequisites: ['ear-descending-intervals'],
    exercises: [
      {
        name: 'Interval Singing Drill',
        description: 'Play a random note on your guitar. Before touching the fretboard again, sing a perfect 5th above it. Check. Then try a major 3rd above. Then a minor 7th. Cycle through all intervals. When you can nail 10 in a row within a quarter-tone accuracy, you\'re fluent.',
      },
      {
        name: 'Sing Before You Play',
        description: 'Pick any melody you want to play. Sing the entire thing first — every note, in rhythm. Then play it. If your singing was accurate, your fingers will find the notes almost immediately. If you stumbled singing it, you don\'t actually know the melody yet.',
      },
      {
        name: 'Random Interval Chain',
        description: 'Play a starting note. Sing a major 2nd up from it. Now from that new note, sing a perfect 4th up. Then a minor 3rd down. Keep chaining random intervals for 8-10 steps, then check your final pitch on the guitar. If you\'re within a half step of where you should be, your relative pitch is solid.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'ear-relative-key-detection',
    tree: 'ear',
    tier: 4,
    name: 'Relative Key Detection',
    description: 'Hear whether music is in a major or relative minor key, and identify which one is functioning as the tonal center.',
    whyItMatters: 'Am and C major use the same notes, but they feel completely different. Many intermediate players cannot reliably tell which is the tonal center — and this confusion wrecks their ability to solo or compose over changes that shift between relative keys.',
    prerequisites: ['ear-chord-progression-recognition', 'ear-extended-chord-quality'],
    exercises: [
      {
        name: 'Home Chord Test',
        description: 'Play a major key progression (C-Am-F-G), then play a minor key progression (Am-F-C-G). The chord names overlap, but the home chord is different. Listen to how C major resolves back to C, while the same chords in A minor pull toward Am. The resolution point tells you the key.',
      },
      {
        name: 'Song Key Guessing',
        description: 'Listen to 5 songs you know well. Before looking anything up, decide: is this in a major or minor key? Write your answer and your reasoning — what chord feels like home? Check against the published key. Aim for 80% accuracy before calling this mastered.',
      },
      {
        name: 'The Parallel Comparison',
        description: 'Play C major for 30 seconds (drone a C note underneath, emphasize C, E, G in your playing). Then play A minor for 30 seconds (drone an A note, emphasize A, C, E). Same notes, opposite feelings. Train your ear to hear "where does this want to land?" as the key detection question.',
      },
      {
        name: 'Ambiguous Progression Identification',
        description: 'Play Am-F-C-G and deliberately make it sound major (start and end on C). Then play the same chords and make it sound minor (start and end on Am). Record both. Listen to a stranger and decide which version they would perceive. Your tonal emphasis — which chord you stress — defines the key.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'ear-transcribing-arrangements',
    tree: 'ear',
    tier: 4,
    name: 'Transcribing Full Arrangements',
    description: 'Transcribe not just a melody or solo, but the complete arrangement — chords, bass line, rhythm, and lead parts.',
    whyItMatters: 'This is the professional skill. Session musicians, producers, and arrangers do this daily. It develops a holistic ear that hears every layer of music simultaneously, which transforms how you play in a band.',
    prerequisites: ['ear-transcribe-solo', 'ear-chord-progression-recognition'],
    exercises: [
      {
        name: 'Layer-by-Layer Transcription',
        description: 'Choose a relatively simple arrangement — "Wish You Were Here" by Pink Floyd or "Blackbird" by The Beatles. First pass: write down just the chord progression. Second pass: transcribe the bass movement. Third pass: get the melody or lead part. Fourth pass: note the rhythm and any fills. Assemble all layers into a complete chart.',
      },
      {
        name: 'Rhythm Section Focus',
        description: 'Listen to a Motown track like "Ain\'t No Mountain High Enough." Focus exclusively on what the rhythm guitar is doing — not the melody, not the bass. Write down the strumming pattern and chord voicings. Then do a separate pass for the bass. Train yourself to isolate instruments in a dense mix.',
      },
      {
        name: 'Arrangement Comparison',
        description: 'Find two different versions of the same song — a studio version and a live version, or two different artists covering the same song. Transcribe both and note the differences: different chord voicings, added passing chords, different bass lines, altered melody. This trains you to hear arrangement choices as deliberate decisions.',
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
    id: 'ear-instant-transcription',
    tree: 'ear',
    tier: 5,
    name: 'Instant Transcription',
    description: 'Hear a musical phrase and play it back immediately on the guitar — no pausing, no hunting.',
    whyItMatters: 'This is the ultimate "hear it, play it" skill. It means your ear and hands are fully connected. You can learn songs in real time, follow other musicians effortlessly, and improvise freely because what you hear in your head comes out of your fingers.',
    prerequisites: ['ear-transcribing-arrangements'],
    exercises: [
      {
        name: 'Call and Response with Records',
        description: 'Play a song and pause it after every phrase. Immediately play back what you just heard — no time to think, just react. Start with blues (BB King, Albert King) because the phrasing is clear and pentatonic. Graduate to more complex material as your reaction time shrinks.',
      },
      {
        name: 'Live Mimicry',
        description: 'Jam with another guitarist (or use a looper). They play a 2-bar phrase, you play it back immediately. Then you play a phrase, they play it back. No stopping, no replaying. If you miss notes, move on — the goal is flow, not perfection. Accuracy comes with repetition.',
      },
      {
        name: 'Radio Roulette',
        description: 'Turn on a random radio station or playlist you\'ve never heard. Try to play along with whatever comes on — melody, chords, bass line, anything you can grab. Give yourself 4 bars to lock in. This simulates real-world musicianship where you don\'t get to prepare.',
      },
      {
        name: 'Melodic Dictation Sprint',
        description: 'Use an app or have someone play 4-bar melodies at increasing difficulty. Transcribe each one in one listen — no replays. Write it down or play it back immediately. Time yourself: under 10 seconds from hearing to playing means your ear-hand connection is fully wired.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'ear-voice-leading',
    tree: 'ear',
    tier: 5,
    name: 'Hearing Voice Leading in Real Time',
    description: 'Track how individual notes move from one chord to the next within a progression.',
    whyItMatters: 'Voice leading is what makes chord progressions sound smooth or jarring. Hearing it means you understand harmony at the deepest level — not just what chords are playing, but how each note in each chord connects to the next. This is what separates arrangers from strummers.',
    prerequisites: ['ear-hearing-extensions', 'ear-modes-by-ear'],
    exercises: [
      {
        name: 'Single Voice Tracking',
        description: 'Play a I-vi-ii-V progression in C (Cmaj7-Am7-Dm7-G7) using close voicings on the middle strings. Focus on just the top note of each chord — sing it as the chords change. Then track the second voice. Then the third. Train yourself to hear each voice independently within the chord movement.',
      },
      {
        name: 'Minimal Movement Reharmonization',
        description: 'Take a chord progression and revoice it so that each chord shares as many common tones as possible with the next. Play the "open chord" version and then the "voice-led" version back to back. Hear how smooth movement between chords creates a completely different feel — even with the same harmonic content.',
      },
      {
        name: 'Bach Chorale Listening',
        description: 'Listen to a simple Bach chorale (YouTube "Bach chorale analysis"). Follow one voice at a time — soprano, alto, tenor, bass. Bach is the master class in voice leading. After listening, try to play just the soprano line on guitar, then just the bass line. Hear how each voice makes musical sense on its own.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'ear-complex-harmony',
    tree: 'ear',
    tier: 5,
    name: 'Complex Harmony Recognition',
    description: 'Identify altered dominants, tritone substitutions, modal interchange, and other advanced harmonic devices by ear.',
    whyItMatters: 'This is the ear of a jazz musician or film composer. You can hear a chord and know not just what it is, but why it was chosen — what harmonic function it serves. It lets you understand and use the full palette of Western harmony.',
    prerequisites: ['ear-hearing-extensions'],
    exercises: [
      {
        name: 'Tritone Substitution Ear Test',
        description: 'Play a ii-V-I in C: Dm7-G7-Cmaj7. Now replace G7 with Db7 (the tritone sub): Dm7-Db7-Cmaj7. Hear how the bass moves chromatically (D-Db-C) instead of by 4th. Play both versions 10 times and learn to spot the chromatic bass movement. Listen for this in jazz recordings — it\'s everywhere once you can hear it.',
      },
      {
        name: 'Modal Interchange Spotting',
        description: 'Play a progression in C major and borrow the Ab chord from C minor (bIV). This is modal interchange — hear how the "borrowed" chord adds a moment of darkness. "Creep" by Radiohead uses this: C-E-F-Fm — the Fm is borrowed from C minor. Find 3 songs that use borrowed chords and identify them.',
      },
      {
        name: 'Altered Dominant Identification',
        description: 'Play G7, then G7#5, then G7b9, then G7#9#5. Each altered dominant has a different flavor of tension. The #5 sounds augmented and dreamy. The b9 sounds dark and urgent. The #9#5 sounds like Hendrix. Learn to name the specific alteration by ear, not just "some kind of dominant chord."',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'ear-perfect-relative-pitch',
    tree: 'ear',
    tier: 5,
    name: 'Perfect Relative Pitch',
    description: 'Identify any note, interval, chord, or progression relative to a reference pitch with near-instant accuracy.',
    whyItMatters: 'This is the pinnacle of ear training. You don\'t need perfect (absolute) pitch to function at the highest level — perfect relative pitch gets you 99% of the way there. You can hear any piece of music and immediately understand its structure, key, and content.',
    prerequisites: ['ear-instant-transcription', 'ear-relative-pitch-fluency'],
    exercises: [
      {
        name: 'Key Center Speed Test',
        description: 'Have someone play a random chord. Within 5 seconds, identify: the root, the quality (major/minor/dominant/etc.), and any extensions. Then they play a second chord — identify the interval relationship between the two roots and the second chord\'s quality. Work up to doing this with 4-chord progressions in under 15 seconds.',
      },
      {
        name: 'Blind Transcription Challenge',
        description: 'Pick a song you\'ve never heard from a genre you don\'t normally listen to. Transcribe the first 16 bars — melody, chords, and bass — in one listen per layer (3 listens total). Compare against a lead sheet or chord chart. Target: 90%+ accuracy.',
      },
      {
        name: 'The Reference Pitch Anchor',
        description: 'Memorize the pitch of one note — most people choose A440 or the open low E string (E2). Every morning, try to hum your reference pitch before checking it. Throughout the day, when you hear music, use your reference pitch to identify the key. Over months, this single anchor note becomes your internal tuning fork.',
      },
      {
        name: 'Full Harmonic Dictation',
        description: 'Listen to a jazz standard you don\'t know ("All The Things You Are" or "Stella by Starlight"). In real time, write down the chord symbols as you hear them. Pause only between sections. This combines every ear skill: root ID, chord quality, extensions, function, and voice leading. When you can do this reliably, your ear training is complete.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
];
