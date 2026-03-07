export const REPERTOIRE_NODES = [
  // ============================================================
  // TIER 1 — FOUNDATION
  // ============================================================
  {
    id: 'rep-001',
    tree: 'repertoire',
    tier: 1,
    name: 'Horse With No Name',
    description: 'A two-chord song that builds confidence with steady strumming and minimal chord changes.',
    whyItMatters: 'Proves you can play a real song with just two chords. Teaches you that simplicity is powerful and rhythm matters more than complexity.',
    prerequisites: [],
    exercises: [
      { name: 'Two-Chord Metronome Drill', description: 'Set metronome to 80 BPM. Strum Am for 4 bars, switch to Em/G for 4 bars. Focus on clean transitions with no dead air between chords.' },
      { name: 'Full Song Playthrough', description: 'Play the entire song start to finish (about 5 minutes). Focus on keeping the strumming pattern consistent even during chord changes.' },
      { name: 'Eyes-Closed Strumming', description: 'Play the chord progression with your eyes closed. Build muscle memory so your fretting hand finds each shape without looking.' },
    ],
    tab: `
  Am                          Em/G
  (Horse With No Name - America)

  Chord Shapes:
  Am          Em/G (or Emadd9)
  e|--0--      e|--0--
  B|--1--      B|--3--
  G|--2--      G|--0--
  D|--2--      D|--0--
  A|--0--      A|--2--
  E|--x--      E|--0--

  Strumming Pattern (each chord gets 2 bars):
  D = Downstroke, U = Upstroke

  |: D   D U   U D U | D   D U   U D U :|
     1   2 & . 3 & 4   1   2 & . 3 & 4

  Full Progression:
  |: Am          | Am          | Em/G        | Em/G        :|

  Verse & Chorus use the same two chords throughout.
  Just keep the strum steady and let the song breathe.
`,
    externalUrl: null,
  },

  {
    id: 'rep-002',
    tree: 'repertoire',
    tier: 1,
    name: "Knockin' on Heaven's Door",
    description: 'A four-chord song that introduces the G-D-Am and G-D-C progressions used in countless songs.',
    whyItMatters: 'Bob Dylan wrote one of the most covered songs in history with four open chords. Learning this unlocks the I-V-vi and I-V-IV progressions that power most of popular music.',
    prerequisites: [],
    exercises: [
      { name: 'Verse vs Chorus Progression', description: 'Practice the verse (G-D-Am) and chorus (G-D-C) as separate loops, 8 reps each. Then combine them in song order.' },
      { name: 'Strum Pattern Isolation', description: 'Mute the strings with your fretting hand and practice only the strumming rhythm for 2 minutes before adding chords back in.' },
      { name: 'Sing and Play', description: 'Add the vocal melody while strumming. Start slow — coordinating voice and hands is a separate skill.' },
    ],
    tab: `
  (Knockin' on Heaven's Door - Bob Dylan)

  Chord Shapes:
  G           D           Am          C
  e|--3--      e|--2--      e|--0--      e|--0--
  B|--0--      B|--3--      B|--1--      B|--1--
  G|--0--      G|--2--      G|--2--      G|--0--
  D|--0--      D|--0--      D|--2--      D|--2--
  A|--2--      A|--x--      A|--0--      A|--3--
  E|--3--      E|--x--      E|--x--      E|--x--

  Strumming Pattern:
  D   D U   U D U
  1   2 &   3 & 4

  Verse:
  | G           | D           | Am          | Am          |
  | G           | D           | C           | C           |

  Chorus:
  | G           | D           | Am          | Am          |
  | G           | D           | C           | C           |
    "Knock knock knockin' on heaven's door..."

  The whole song repeats these 8 bars. Simple and powerful.
`,
    externalUrl: null,
  },

  {
    id: 'rep-003',
    tree: 'repertoire',
    tier: 1,
    name: 'Wish You Were Here',
    description: 'Introduces a melodic intro riff combined with open chord strumming — your first riff-to-rhythm transition.',
    whyItMatters: 'This is where you learn that guitar is not just strumming OR riffing — it is both. The intro is one of the most recognizable melodies in rock, and the verse teaches steady rhythm guitar.',
    prerequisites: [],
    exercises: [
      { name: 'Intro Riff Slow Practice', description: 'Play the intro at 60% tempo. Every note should ring clean. Use a metronome and increase by 5 BPM only when you can play it perfectly 3 times in a row.' },
      { name: 'Riff-to-Strum Transition', description: 'Practice the last 2 bars of the intro leading into the first strummed G chord. The transition should feel seamless, not like two separate sections.' },
      { name: 'Full Intro Performance', description: 'Play the complete intro from the opening bend through to the verse entry. Record yourself and listen back for timing consistency.' },
    ],
    tab: `
  (Wish You Were Here - Pink Floyd)

  Intro Riff (simplified for 6-string):

  e|----------------------------------------------------------------------------|
  B|----------------------------------------------------------------------------|
  G|----------------------------------------------------0------0------0--------|
  D|--0--0h2--2----2--0--0h2--0----0--2--0h2--2----2----0------0------0--------|
  A|------------------------------------------3---------2------0------0--------|
  E|--------------------------------------------3-------3------0------2--------|
                                                        G      Em     Em

  e|----------------------------------------------------------------------------|
  B|----------------------------------------------------------------------------|
  G|----------------------------------------------------0------0------0--------|
  D|--0--0h2--2----2--0--0h2--0----0--2--0h2--2----2----0------0------0--------|
  A|------------------------------------------3---------2------3------0--------|
  E|--------------------------------------------3-------3------x------2--------|
                                                        G      C      Em

  (h = hammer-on)

  Verse/Chorus Chords:
  | Em          | G           | Em          | G           |
  | Em          | A7sus4      | Em          | A7sus4      |
  | C           | D           | Am          | G           |

  A7sus4
  e|--0--
  B|--3--
  G|--0--
  D|--2--
  A|--0--
  E|--x--
`,
    externalUrl: null,
  },

  {
    id: 'rep-004',
    tree: 'repertoire',
    tier: 1,
    name: 'Wonderwall',
    description: 'Teaches a signature strumming pattern with suspended chords and capo use.',
    whyItMatters: 'The strumming pattern in Wonderwall is harder than it sounds — it is syncopated and driving. Learning it trains your right hand to carry rhythm independently while your left hand holds chord shapes.',
    prerequisites: [],
    exercises: [
      { name: 'Strumming Pattern Isolation', description: 'Mute strings and practice ONLY the strumming pattern until it feels automatic. The pattern is the song — get it in your bones before adding chord shapes.' },
      { name: 'Chord Shape Memory', description: 'Place capo on fret 2. Cycle through Em7-G-Dsus4-A7sus4 slowly. Each shape shares fingers with the next — find the common anchor fingers and use them.' },
      { name: 'Performance Tempo Playthrough', description: 'Play along with the recording at full speed. If you lose the strum pattern, simplify to all downstrokes and gradually reintroduce the full pattern.' },
    ],
    tab: `
  (Wonderwall - Oasis)
  Capo 2nd Fret

  Chord Shapes (relative to capo):
  Em7         G           Dsus4       A7sus4
  e|--0--      e|--3--      e|--3--      e|--0--
  B|--3--      B|--3--      B|--3--      B|--3--
  G|--0--      G|--0--      G|--2--      G|--0--
  D|--0--      D|--0--      D|--0--      D|--2--
  A|--2--      A|--2--      A|--x--      A|--0--
  E|--0--      E|--3--      E|--x--      E|--x--

  Strumming Pattern:
  D   D U   U D U
  1   2 &   & 4 &

  This is SYNCOPATED — the "missing" downstroke on beat 3 is what
  gives it the Wonderwall feel. Your hand keeps moving down-up
  but skips the string on beat 3.

  Verse:
  | Em7         | G           | Dsus4       | A7sus4      |
  | Em7         | G           | Dsus4       | A7sus4      |

  Chorus:
  | C  (x32030) | D           | Em7         | Em7         |
  | C           | D           | G           | G           |
    "...because maybe, you're gonna be the one that saves me..."
`,
    externalUrl: null,
  },

  {
    id: 'rep-005',
    tree: 'repertoire',
    tier: 1,
    name: 'Good Riddance (Time of Your Life)',
    description: 'Your first fingerpicking song — alternating bass notes with melody over simple chords.',
    whyItMatters: 'This crosses the line from strummer to guitarist. Fingerpicking independence between thumb (bass) and fingers (melody) is the foundation of all acoustic guitar technique.',
    prerequisites: [],
    exercises: [
      { name: 'Thumb Bass Pattern', description: 'Play ONLY the bass notes with your thumb: G string 6, Cadd9 string 5, D string 4. Loop this pattern until it is automatic, then add the treble strings with index and middle fingers.' },
      { name: 'Fingerpicking Pattern Drill', description: 'Practice the intro pattern at 60 BPM. Thumb hits the bass note, then index-middle pluck strings 2-1 together. Keep your wrist still — only your fingers should move.' },
      { name: 'Song Structure Playthrough', description: 'Play verse-chorus-verse with the fingerpicking pattern throughout. The challenge is maintaining the pattern while changing chords cleanly.' },
    ],
    tab: `
  (Good Riddance / Time of Your Life - Green Day)

  Chord Shapes:
  G           Cadd9       D
  e|--3--      e|--0--      e|--2--
  B|--3--      B|--3--      B|--3--
  G|--0--      G|--0--      G|--2--
  D|--0--      D|--2--      D|--0--
  A|--2--      A|--3--      A|--x--
  E|--3--      E|--x--      E|--x--

  Fingerpicking Intro Pattern:

  G
  e|--------3-----------3---------|
  B|----------3-----------3-------|
  G|----0-------0----0-------0----|
  D|-------------------------------|
  A|-------------------------------|
  E|--3--------------3------------|
     T  i  m  i  T  i  m  i

  Cadd9
  e|--------0-----------0---------|
  B|----------3-----------3-------|
  G|----0-------0----0-------0----|
  D|-------------------------------|
  A|--3--------------3------------|
  E|-------------------------------|
     T  i  m  i  T  i  m  i

  D
  e|--------2-----------2---------|
  B|----------3-----------3-------|
  G|----2-------2----2-------2----|
  D|--0--------------0------------|
  A|-------------------------------|
  E|-------------------------------|
     T  i  m  i  T  i  m  i

  Verse Progression:
  | G              | G              | Cadd9          | D              |
  | G              | G              | Cadd9          | D              |

  Chorus:
  | Em             | G              | Em             | G              |
  | Em             | D              | G              | G              |

  T = thumb, i = index, m = middle
`,
    externalUrl: null,
  },

  // ============================================================
  // TIER 2 — DEVELOPING
  // ============================================================
  {
    id: 'rep-006',
    tree: 'repertoire',
    tier: 2,
    name: 'Santeria',
    description: 'Introduces a reggae-influenced clean riff and your first simplified guitar solo.',
    whyItMatters: 'Santeria bridges rhythm and lead guitar. The intro riff teaches you to play melodically over chords, and the solo introduces bending, slides, and pentatonic phrasing in a musical context.',
    prerequisites: ['rep-002'],
    exercises: [
      { name: 'Intro Riff Clean Tone', description: 'Play the intro riff with a clean tone, no distortion. Every note should ring clearly. Focus on the muted strums between notes — they give the riff its groove.' },
      { name: 'Simplified Solo Breakdown', description: 'Learn the solo in 4-bar chunks. Master each chunk before connecting them. Pay attention to bends — they should hit the target pitch, not just go up vaguely.' },
      { name: 'Full Song Structure', description: 'Play through the entire song: intro riff, verse chords, chorus, solo. Practice the transitions between sections as much as the sections themselves.' },
    ],
    tab: `
  (Santeria - Sublime)

  Intro Riff (Clean Tone):

  e|--------------------------------------------------------------12--10--------|
  B|--13b15--13--10------10----10h13p10------10-----10--13--10---------13--10---|
  G|------------------12----12-----------12-----12--------------------------12--|
  D|----------------------------------------------------------------------------|
  A|----------------------------------------------------------------------------|
  E|----------------------------------------------------------------------------|

  e|--------------------------------------------------------------12--10--------|
  B|--13b15--13--10------10----10h13p10------10-----10--13--10---------13--10---|
  G|------------------12----12-----------12-----12--------------------------12--|
  D|----------------------------------------------------------------------------|
  A|----------------------------------------------------------------------------|
  E|----------------------------------------------------------------------------|

  (b = bend, h = hammer-on, p = pull-off)

  Verse Chords:
  | E            | G#           | C#m          | B            |

  Simplified Solo (A major pentatonic, key phrases):

  e|--12--10---------10----12b14--12--10---------10----|
  B|----------13--10----10---------------13--10-----13-|
  G|----------------------------------------------------|
  D|----------------------------------------------------|
  A|----------------------------------------------------|
  E|----------------------------------------------------|

  e|--12--10------10------12b14r12--10----------|
  B|----------13------13---------------13--10---|
  G|----------------------------------------------12--|
  D|----------------------------------------------------|
  A|----------------------------------------------------|
  E|----------------------------------------------------|
`,
    externalUrl: null,
  },

  {
    id: 'rep-007',
    tree: 'repertoire',
    tier: 2,
    name: 'Under the Bridge',
    description: 'A clean fingerpicking intro that teaches chord embellishment and dynamic control.',
    whyItMatters: 'John Frusciante layers hammer-ons and pull-offs over chord shapes to create a flowing, almost piano-like texture. This teaches you to see chords as frameworks for melody, not static shapes.',
    prerequisites: ['rep-005'],
    exercises: [
      { name: 'Intro Chord Shapes', description: 'Learn each chord shape in the intro separately. Hold each one and let it ring for 4 beats. The shapes are unusual — some use the thumb wrapped over the neck for the low E.' },
      { name: 'Hammer-On Embellishments', description: 'Over each chord shape, practice the specific hammer-ons and pull-offs that create the melody. Start with just one chord and its embellishments before moving to the next.' },
      { name: 'Intro Flow Practice', description: 'Connect all the intro chord shapes in sequence. The goal is a smooth, unbroken flow — no pauses between chords. Play at 70% speed until it feels effortless.' },
    ],
    tab: `
  (Under the Bridge - Red Hot Chili Peppers)

  Intro (clean tone, let notes ring):

  D                              F#
  e|------2---2---2---2------|------2---2---2---2------|
  B|----3---3---3---3---3----|----2---2---2---2---2----|
  G|--2-------2-------2------|--3-------3-------3------|
  D|--0-----------0----------|--4-----------4----------|
  A|--------------------------|--------------------------|
  E|--------------------------|--2-----------2----------|

  A                              Am
  e|------0---0---0---0------|------0---0---0---0------|
  B|----2---2---2---2---2----|----1---1---1---1---1----|
  G|--2-------2-------2------|--2-------2-------2------|
  D|--2-----------2----------|--2-----------2----------|
  A|--0-----------0----------|--0-----------0----------|
  E|--------------------------|--------------------------|

  G6                             Fmaj7
  e|------0---0---0---0------|------0---0---0---0------|
  B|----0---0---0---0---0----|----1---1---1---1---1----|
  G|--0-------0-------0------|--2-------2-------2------|
  D|--0-----------0----------|--3-----------3----------|
  A|--------------------------|--------------------------|
  E|--3-----------3----------|--1-----------1----------|

  Verse Progression:
  | E              | E              | B              | C#m            |
  | G#m            | A              | E              | E              |

  The intro repeats twice before the verse kicks in.
  Keep dynamics soft — this part whispers.
`,
    externalUrl: null,
  },

  {
    id: 'rep-008',
    tree: 'repertoire',
    tier: 2,
    name: 'Come As You Are',
    description: 'A hypnotic single-note riff that teaches economy of motion and consistent alternate picking.',
    whyItMatters: 'Kurt Cobain proved that a simple riff played with conviction is worth more than a thousand notes. This riff trains alternate picking across two strings and builds your sense of groove.',
    prerequisites: ['rep-001'],
    exercises: [
      { name: 'Alternate Picking Drill', description: 'Play the riff using strict alternate picking (down-up-down-up). Start at 60 BPM. The riff crosses strings — your pick should move efficiently with minimal wasted motion.' },
      { name: 'Chorus Effect Emulation', description: 'If you have a chorus pedal, engage it. If not, add slight vibrato with your fretting hand to approximate the shimmery tone. Practice the riff focusing on sustain and evenness.' },
      { name: 'Verse-Chorus Transition', description: 'The verse riff shifts to power chords for the chorus. Practice the transition from the single-note riff to strummed power chords and back. The tempo should not waver.' },
    ],
    tab: `
  (Come As You Are - Nirvana)

  Main Riff (use alternate picking throughout):

  e|----------------------------------------------|
  B|----------------------------------------------|
  G|----------------------------------------------|
  D|----------------------------------------------|
  A|--0--0--1--1--2--2--1--1--0--0--1--1--2-------|
  E|--------------------------------------------2--|

  e|----------------------------------------------|
  B|----------------------------------------------|
  G|----------------------------------------------|
  D|----------------------------------------------|
  A|--2--2--1--1--0--0--1--1--2--2--1--1--0-------|
  E|--------------------------------------------0--|

  Alternate picking: D U D U D U D U (strict throughout)

  Chorus (power chords, palm muted then open):

  e|---------------------------------------------|
  B|---------------------------------------------|
  G|---------------------------------------------|
  D|--5--5--5--5--7--7--7--7--5--5--5--5---------|
  A|--5--5--5--5--7--7--7--7--5--5--5--5---------|
  E|--3--3--3--3--5--5--5--5--3--3--3--3---------|
     G           A           G

  Bridge:
  e|---------------------------------------------|
  B|---------------------------------------------|
  G|---------------------------------------------|
  D|--5-------7-------9-------7-----------------|
  A|--5-------7-------9-------7-----------------|
  E|--3-------5-------7-------5-----------------|
     G       A       B       A
     (let each chord ring for 2 beats)
`,
    externalUrl: null,
  },

  {
    id: 'rep-009',
    tree: 'repertoire',
    tier: 2,
    name: 'Smoke on the Water (Full Arrangement)',
    description: 'Goes beyond the famous riff to learn verse chords, rhythm guitar, and a simplified solo section.',
    whyItMatters: 'Everyone knows the riff, but learning the full arrangement teaches you how a rock song is structured. Verse rhythm, chorus dynamics, and solo phrasing — this is your first complete rock guitar performance.',
    prerequisites: ['rep-002'],
    exercises: [
      { name: 'Riff with Proper Fingering', description: 'Play the main riff using double stops (two notes, not power chords). Use fingers 1 and 3 on strings G and D. Many beginners play this wrong — the original uses parallel fourths, not fifths.' },
      { name: 'Verse Rhythm Guitar', description: 'Practice the verse rhythm part using the chord progression Gm-Bb-C (repeated). Strum with a driving eighth-note pattern. This is the part most people skip.' },
      { name: 'Solo Key Phrases', description: 'The solo is in G minor pentatonic. Learn the 3 main phrases of the solo separately, then connect them. Focus on the bends — Ritchie Blackmore bends precisely to pitch.' },
    ],
    tab: `
  (Smoke on the Water - Deep Purple)

  Main Riff (double stops on G and D strings):

  e|----------------------------------------------|
  B|----------------------------------------------|
  G|--0---3---5---0---3---6-5---0---3---5---3---0-|
  D|--0---3---5---0---3---6-5---0---3---5---3---0-|
  A|----------------------------------------------|
  E|----------------------------------------------|

  NOTE: The classic riff uses parallel fourths (two strings),
  NOT power chords. This is how Ritchie Blackmore plays it.

  Verse Chords (driving 8th note strums):
  | Gm          | Gm          | Bb          | C            |
  | Gm          | Gm          | Bb          | Db  C        |

  Gm (355333)   Bb (x13331)   C (x35553)

  Solo Section (G minor pentatonic, simplified):

  e|----------------------------------------------------------------------------|
  B|--11b13--11--8------8-----11b13r11--8------8---8h11p8--8-----8---11--8------|
  G|------------------10--10-----------------10--10----------10------10------10-|
  D|----------------------------------------------------------------------------|
  A|----------------------------------------------------------------------------|
  E|----------------------------------------------------------------------------|

  e|-------------------------------------------------------------------------|
  B|--11b13--11--8------8------11b13--13--11--8---8h11p8---8----8------------|
  G|------------------10--10---------------------------------10---10--8------|
  D|-----------------------------------------------------------------------10|
  A|-------------------------------------------------------------------------|
  E|-------------------------------------------------------------------------|
`,
    externalUrl: null,
  },

  {
    id: 'rep-010',
    tree: 'repertoire',
    tier: 2,
    name: 'Seven Nation Army',
    description: 'Teaches the octave technique and how a simple riff can drive an entire song with power.',
    whyItMatters: 'Jack White built a stadium anthem from one riff using octaves and raw energy. The octave technique (skipping a string while muting it) appears everywhere in funk, rock, and jazz guitar.',
    prerequisites: ['rep-008'],
    exercises: [
      { name: 'Octave Shape Practice', description: 'Play the root note on string A, then the octave on string G (two frets up, skip the D string). Mute the D string with the underside of your index finger. Slide this shape along the neck.' },
      { name: 'Riff with Proper Octaves', description: 'Play the main riff using octave shapes instead of single notes. The added octave gives it the full, thick sound of the recording. Keep the muted middle string silent.' },
      { name: 'Dynamic Contrast', description: 'Practice playing the riff softly for the verse, then exploding into full volume for the chorus. The song lives and dies on this dynamic contrast.' },
    ],
    tab: `
  (Seven Nation Army - The White Stripes)

  Main Riff (single-note version, standard tuning):
  The original is in Open A tuning. This is the standard tuning adaptation.

  e|--------------------------------------------|
  B|--------------------------------------------|
  G|--------------------------------------------|
  D|--------------------------------------------|
  A|--7--7--10--7--5--3--2---------------------|
  E|--------------------------------------------|

  Octave Version (for fuller sound):
  Play root on A string, octave on G string, mute D string.

  e|----------------------------------------------|
  B|----------------------------------------------|
  G|--9--9--12--9--7--5--4------------------------|
  D|--x--x--x---x--x--x--x----------------------|
  A|--7--7--10--7--5--3--2------------------------|
  E|----------------------------------------------|
     x = muted string (touch with underside of index finger)

  Verse: Riff repeats with sparse drums.

  Chorus (power chords, aggressive):

  e|----------------------------------------------|
  B|----------------------------------------------|
  G|----------------------------------------------|
  D|--9---7---5---4---2---------------------------|
  A|--7---5---3---2---0---------------------------|
  E|----------------------------------------------|
     E   D   C   B   A

  Bridge:
  e|----------------------------------------------|
  B|----------------------------------------------|
  G|----------------------------------------------|
  D|--9---9---9---9---7---7---7---7---5---5---5---|
  A|--7---7---7---7---5---5---5---5---3---3---3---|
  E|----------------------------------------------|
`,
    externalUrl: null,
  },

  // ============================================================
  // TIER 3 — INTERMEDIATE
  // ============================================================
  {
    id: 'rep-011',
    tree: 'repertoire',
    tier: 3,
    name: 'Blackbird',
    description: 'A fingerstyle piece that develops independent bass movement, melody, and rhythm simultaneously.',
    whyItMatters: 'Paul McCartney created a piece where the guitar plays bass, melody, and rhythm at the same time. Learning Blackbird is a rite of passage — it permanently changes how you see the fretboard.',
    prerequisites: ['rep-005', 'rep-007'],
    exercises: [
      { name: 'Bass Line Isolation', description: 'Play only the bass notes (thumb on strings 5 and 6) through the whole song. Memorize this line separately — it is the foundation everything else sits on.' },
      { name: 'Melody and Bass Together', description: 'Add the melody notes (index and middle fingers on strings 1 and 2) over the bass line. Start at 50% speed. The two lines should feel independent, like two separate instruments.' },
      { name: 'Chromatic Walk-Up Sections', description: 'The song features chromatic bass movement (frets ascending one at a time). Practice these transitions specifically — they are where most players stumble.' },
    ],
    tab: `
  (Blackbird - The Beatles)

  Verse 1:

  e|--0---1---3---0---1---3---0---1---3---1---0--|
  B|--1---1---1---1---3---3---1---1---1---1---1--|
  G|---------------------------------------------|
  D|---------------------------------------------|
  A|--3---3---3---0---0---0---2---2---2---0---0--|
  E|---------------------------------------------|
     T   T   T   T   T   T   T   T   T   T   T
  Fingers: Thumb on A string, index+middle pluck B+e together

  e|--3---1---0------0---1---3---0---1---3---1---0--|
  B|--3---3---3------1---1---1---1---3---3---1---1--|
  G|------------------------------------------------|
  D|------------------------------------------------|
  A|--2---2---2------3---3---3---0---0---0---2---0--|
  E|------------------------------------------------|

  "Blackbird singing in the dead of night..."

  Ascending Chromatic Section:
  e|--0-------0-------0-------0-------0--------|
  B|--1-------1-------1-------1-------1--------|
  G|--------------------------------------------|
  D|--0-------1-------2-------3-------4--------|
  A|--------------------------------------------|
  E|--------------------------------------------|
     "Take these broken wings and learn to fly"

  e|--0-------0-------0-------0-------3--------|
  B|--1-------1-------1-------1-------0--------|
  G|--0-------0-------0-------0-------0--------|
  D|--5-------6-------7-------8-------0--------|
  A|--3-------3-------3-------3-------2--------|
  E|-----------------------------------3--------|
     "All your life..."                G

  Bridge (G chord strummed):
  | G           | Am7         | G/B         | G            |
`,
    externalUrl: null,
  },

  {
    id: 'rep-012',
    tree: 'repertoire',
    tier: 3,
    name: 'Little Wing',
    description: 'Hendrix-style chord-melody intro — embellishing chords with hammer-ons, pull-offs, and slides.',
    whyItMatters: 'Hendrix invented a style where rhythm and lead guitar become one. Little Wing is the purest expression of this — every chord is alive with movement. Learning this transforms your chord playing forever.',
    prerequisites: ['rep-006', 'rep-007'],
    exercises: [
      { name: 'Chord Shapes First', description: 'Learn the bare chord shapes: Em, G, Am, Em, Bm-Bb-Am. Hold each shape and strum it. Know where your fingers are before adding any embellishments.' },
      { name: 'Embellishment Layer', description: 'Add the hammer-ons and pull-offs over each chord one at a time. Hendrix used his thumb for bass notes, freeing his fingers for melody. If your thumb cannot reach, use standard fretting and simplify.' },
      { name: 'Feel and Dynamics', description: 'The intro should breathe. Some notes are loud, others whisper. Practice playing each chord phrase with dynamic variation — this is what separates mechanical playing from music.' },
    ],
    tab: `
  (Little Wing - Jimi Hendrix)

  Intro (with embellishments):
  Use slight overdrive/clean tone. Let notes ring into each other.

  Em
  e|---0------0h3p0---0---3---0---0----------------|
  B|---0--0h2--------0---0---0---0h2p0-------------|
  G|---0-----------0---0---0---0--------2p0--------|
  D|---2-----------------------------------------2-|
  A|---2--------------------------------------------|
  E|---0--------------------------------------------|

  G                              Am
  e|---3---3----3p0----0-------0---0----0--0h2p0---|
  B|---0---0h1------3--2--0---1---1----1--1--------|
  G|---0---0-----------2--0---2---2h4p2--2---------|
  D|---0---0-----------2-----2---2---------2-------|
  A|---2---2-----------0-----0---0---------0-------|
  E|---3---3---------------------------------------|

  Em                             Bm     Bb     Am
  e|---0------0h3p0---0--3--0---|--2------1------0--|
  B|---0--0h2--------0--0--0---|--3------3------1--|
  G|---0-----------0---0---0---|--4------3------2--|
  D|---2-----------------------|--4------3------2--|
  A|---2-----------------------|--2------1------0--|
  E|---0-----------------------|--x------x------x--|

  The Bm-Bb-Am is a chromatic walk-down.
  Slide each barre chord shape down one fret at a time.

  After the intro, the verse follows the same chord changes
  with variations on the embellishments. Hendrix never played
  it exactly the same way twice — once you know the shapes,
  make it your own.
`,
    externalUrl: null,
  },

  {
    id: 'rep-013',
    tree: 'repertoire',
    tier: 3,
    name: 'Stairway to Heaven Solo',
    description: 'The most famous guitar solo in rock — teaches phrasing, bending, vibrato, and building intensity.',
    whyItMatters: 'Jimmy Page constructed a solo that starts gentle and builds to a climax. It is a masterclass in phrasing and dynamics. Every technique you have learned converges here: bends, vibrato, pentatonic runs, and taste.',
    prerequisites: ['rep-006', 'rep-009'],
    exercises: [
      { name: 'Solo in 4 Sections', description: 'Divide the solo into 4 parts: the opening melodic phrase, the ascending run, the climactic bend section, and the final descent. Master each independently before connecting them.' },
      { name: 'Bend Accuracy Training', description: 'The solo has critical whole-step and half-step bends. Use a tuner: fret the target note, hear it, then bend up to match. Page is precise on every bend — you should be too.' },
      { name: 'Building Intensity', description: 'Play the entire solo focusing on dynamics. Start at a whisper and end at full intensity. The volume and aggression should increase gradually, not jump. This is what makes it a solo and not just a collection of licks.' },
    ],
    tab: `
  (Stairway to Heaven Solo - Led Zeppelin)
  Key: Am / A minor pentatonic

  Section 1 - Opening Melodic Phrase:

  e|-----------------------------------------------5---8--5------|
  B|---5---5--8b10--8--5-----5---8---5-----5--8b10-----------8-5-|
  G|---5---5-----------------5-------5---5-----------------------|
  D|--------------------------------------------------------------|
  A|--------------------------------------------------------------|
  E|--------------------------------------------------------------|

  Section 2 - Ascending Build:

  e|------5---8--5---------5--8--5---8-5-----------------------------|
  B|--5h8-----------8-5h8-----------------8---5---5--8b10--8--5------|
  G|---5----------------------------------------------5----------7b9-|
  D|------------------------------------------------------------------|
  A|------------------------------------------------------------------|
  E|------------------------------------------------------------------|

  Section 3 - Climactic Bends:

  e|------------------------------------------------------------------|
  B|---8b10----8b10r8--5------5---8b10---10b12---10b12r10---8---------|
  G|---------------------------7------------------7-----------7--5h7---|
  D|------------------------------------------------------------------|
  A|------------------------------------------------------------------|
  E|------------------------------------------------------------------|

  Section 4 - Final Descent and Resolution:

  e|--8---5--------5------5---8---5---8---5--------------------------|
  B|--------8---5-----8-------8---5---8---5---8---5-----------------|
  G|--7---5---7---5---7---5---7---5---7---5---7---5---7--5---5------|
  D|--------------------------------------------------------------7--|
  A|------------------------------------------------------------------|
  E|------------------------------------------------------------------|

  e|----------------------------------------------------------------|
  B|-----------------------------------------------------------------|
  G|--5b7~~~~---5----5----5~~~~~~~----------------------------------|
  D|--7---------7----7----7----------------------------------------|
  A|--7---------7----7----7----------------------------------------|
  E|--5---------5----5----5----------------------------------------|
                Am chord... let ring

  (b = bend, r = release, h = hammer-on, ~ = vibrato)
  Note: This is a simplified transcription of the key phrases.
  The feel matters more than note-perfect execution.
`,
    externalUrl: null,
  },

  {
    id: 'rep-014',
    tree: 'repertoire',
    tier: 3,
    name: 'Hotel California Solo',
    description: 'The harmonized twin-guitar solo — teaches harmony in thirds and sixths and dual-guitar thinking.',
    whyItMatters: 'Don Felder and Joe Walsh created the gold standard for harmonized guitar solos. Understanding how two guitar parts interlock in thirds teaches you music theory through your fingers.',
    prerequisites: ['rep-013'],
    exercises: [
      { name: 'Learn the High Harmony', description: 'Start with the higher guitar part (Harmony 1). This is the more melodic line and easier to hear in the mix. Use the external reference to find accurate tabs.' },
      { name: 'Learn the Low Harmony', description: 'Learn the lower part (Harmony 2). Then record yourself playing one part and play the other over it. Hearing how they fit together is the real lesson.' },
      { name: 'Interval Analysis', description: 'Identify where the harmonies use thirds vs sixths. Mark these on your tab. Understanding the intervals lets you harmonize any melody, not just this one.' },
    ],
    tab: null,
    externalUrl: "Search 'Hotel California guitar solo tab' — learn both harmony parts separately, then layer them.",
  },

  {
    id: 'rep-015',
    tree: 'repertoire',
    tier: 3,
    name: 'Sultans of Swing',
    description: 'Fingerstyle electric guitar with rapid chord changes and a virtuosic final solo.',
    whyItMatters: 'Mark Knopfler plays electric guitar with his fingers, not a pick. Sultans of Swing is a clinic in clean articulation, dynamic control, and building a solo that tells a story across multiple choruses.',
    prerequisites: ['rep-011', 'rep-012'],
    exercises: [
      { name: 'Fingerstyle on Electric', description: 'Put down the pick. Practice the verse rhythm using thumb and two fingers on electric guitar. The tone difference is immediate — cleaner, more dynamic, more control.' },
      { name: 'Chord Rhythm Accuracy', description: 'The verse has rapid chord changes (Dm-C-Bb-A). Practice the changes at half speed with a metronome. Each chord must land exactly on the beat.' },
      { name: 'Final Solo Study', description: 'The outro solo is a masterclass in building tension. Use the external reference for accurate notation. Focus on the rapid-fire pentatonic runs and how Knopfler uses silence between phrases.' },
    ],
    tab: null,
    externalUrl: "Search 'Sultans of Swing guitar tab' — focus on the verse fingerstyle rhythm and the final extended solo.",
  },

  // ============================================================
  // TIER 4 — ADVANCED
  // ============================================================
  {
    id: 'rep-016',
    tree: 'repertoire',
    tier: 4,
    name: 'Classical Gas',
    description: 'A fingerstyle acoustic showpiece that demands precision, speed, and dynamic control across the full fretboard.',
    whyItMatters: 'Mason Williams wrote a piece that sounds like a full orchestra on one guitar. Learning it pushes your fingerpicking speed, position shifting, and ability to voice bass, melody, and harmony simultaneously.',
    prerequisites: ['rep-011'],
    exercises: [
      { name: 'Main Theme in Position', description: 'Learn the opening 16 bars in position (no shifting). Lock in the right-hand pattern first — the thumb drives the bass while fingers handle the rapid melody on treble strings.' },
      { name: 'Position Shift Drill', description: 'Identify every position shift in the piece. Practice each shift in isolation: play 2 bars before and 2 bars after each shift until the move is seamless.' },
      { name: 'Performance Speed Build', description: 'Start at 60% tempo and increase by 5% weekly. Record yourself each week. Classical Gas at full speed requires months of patient tempo building — there are no shortcuts.' },
    ],
    tab: `
  (Classical Gas - Mason Williams)

  Main Theme (opening 16 bars):

  Am
  e|--0-----0-----0-----0-----0-----0-----0---0---|
  B|----1-----1-----1-----1-----1-----1-----1---1-|
  G|------2-----2-----2-----2-----2-----2---------|
  D|--2-----2-----2-----2-----2-----2-----2---2---|
  A|--0-----0-----0-----0-----0-----0-----0---0---|
  E|------------------------------------------------|

  Am                              G
  e|--0--1--3--5--3--1--0------0-----3-------3--0--|
  B|--1--1--1--1--1--1--1------0-----0-------0--0--|
  G|--2--2--2--2--2--2--2------0-----0-------0--0--|
  D|--2--------------------------0-----0-------0---|
  A|--0--------------------------2---------2-------|
  E|----------------------------3-----3-------3----|

  E7                              Am
  e|--0---------0-------0------0-----0-----0-------|
  B|------0h1-----0h1-----0---1-----1-----1-------|
  G|----1-----1-----1------1--2-----2-----2-------|
  D|--2-----2-----2-----2----2-----2-----2--------|
  A|---------------------------0-----0-----0-------|
  E|--0-----0-----0-----0--------------------------|

  Dm                              Am
  e|--1---1---1---1---1---1---0-----0-----0--------|
  B|--3---3---3---3---3---3---1-----1-----1--------|
  G|--2---2---2---2---2---2---2-----2-----2--------|
  D|--0---0---0---0---0---0---2-----2-----2--------|
  A|---------------------------0-----0-----0--------|
  E|-------------------------------------------------|

  E7                              Am (resolve)
  e|--0---3---0---3---0---3---0-----------0--------|
  B|----0---0---0---0---0---0---1---1---1----------|
  G|--1---1---1---1---1---1---2---2---2---2--------|
  D|--2---2---2---2---2---2---2---2---2---2--------|
  A|-------------------------------0---0---0--------|
  E|--0---0---0---0---0---0-------------------------|

  The piece continues with variations on this theme,
  moving through different keys and positions up the neck.
  Master these 16 bars first — they contain all the core patterns.
`,
    externalUrl: null,
  },

  {
    id: 'rep-017',
    tree: 'repertoire',
    tier: 4,
    name: 'Cliffs of Dover',
    description: 'Eric Johnson\'s signature piece — teaches hybrid picking, wide intervals, and violin-like tone.',
    whyItMatters: 'Cliffs of Dover is pure melody played at blazing speed. Johnson\'s approach combines pick and fingers (hybrid picking) to achieve impossible string skips and a singing tone. This is where technique serves beauty.',
    prerequisites: ['rep-013', 'rep-006'],
    exercises: [
      { name: 'Opening Theme Slowly', description: 'The opening cascading figure uses pull-offs and hammer-ons across multiple strings. Learn it at 40% speed. Every note must sing — Johnson is obsessed with tone, and so should you be during practice.' },
      { name: 'Hybrid Picking Introduction', description: 'Hold the pick normally, use middle and ring fingers to pluck higher strings. Practice simple arpeggios with this technique before applying it to the song.' },
      { name: 'Pentatonic Cascade Pattern', description: 'The main theme uses Em pentatonic in a cascading pattern. Practice the pattern as a standalone exercise across all 5 pentatonic positions before fitting it back into the song.' },
    ],
    tab: `
  (Cliffs of Dover - Eric Johnson)

  Opening Theme / Main Riff:
  (Clean-ish tone with slight overdrive, heavy reverb)

  e|--12p0-12p0-12p0----15p0-15p0-15p0----12p0-12p0-12p0---|
  B|-----------12p0-12p0-----------15p0-15p0-----------12p0-|
  G|-------------------------------------------------------------|
  D|-------------------------------------------------------------|
  A|-------------------------------------------------------------|
  E|-------------------------------------------------------------|

  Main Melody Section:

  e|----12--15--12---12--15--12-----12--14--12---12--14--12---|
  B|--13-----------13-----------13-----------13--------------|
  G|------------------------------------------------------------|
  D|------------------------------------------------------------|
  A|------------------------------------------------------------|
  E|------------------------------------------------------------|

  e|----12--15--12---12--17--15--12---15--12------12------|
  B|--13-----------13----------------13------13-------13--|
  G|---------------------------------------------------14--|
  D|---------------------------------------------------------|
  A|---------------------------------------------------------|
  E|---------------------------------------------------------|

  Ascending Run (Em pentatonic cascade):

  e|--12--15--12--15--17--15--12--15--12----------|
  B|--12--13--12--13--15--13--12--13--12----------|
  G|--12--14--12--14--16--14--12--14--12----------|
  D|--12--14--12--14-----------------------------------|
  A|--12--14--12---------------------------------------|
  E|----------------------------------------------------|

  (p = pull-off to open string)
  Note: The cascading open-string pull-off pattern in the intro
  is Johnson's signature technique. Let the open strings ring
  while the fretted notes create the melody above them.
`,
    externalUrl: null,
  },

  {
    id: 'rep-018',
    tree: 'repertoire',
    tier: 4,
    name: 'Autumn Leaves (Jazz Standard)',
    description: 'A chord-melody arrangement of the most important jazz standard for guitarists.',
    whyItMatters: 'Autumn Leaves teaches the ii-V-I progression in both major and minor keys — the backbone of all jazz harmony. A chord-melody arrangement forces you to voice chords, play melody, and manage bass movement simultaneously.',
    prerequisites: ['rep-011', 'rep-012'],
    exercises: [
      { name: 'Learn the Changes', description: 'Memorize the chord progression: Cm7-F7-BbMaj7-EbMaj7-Am7b5-D7-Gm. Play each chord as a simple voicing, one strum per bar, with a metronome at 100 BPM. Know the progression cold before attempting chord melody.' },
      { name: 'Melody Over Changes', description: 'Play the melody as single notes while a backing track handles the chords. Internalize how the melody relates to each chord — where it is a chord tone vs. a passing tone.' },
      { name: 'Chord-Melody Construction', description: 'Combine melody on the top string with chord voicings underneath. Start with just the first 8 bars. The melody note must always be the highest voice. Use drop-2 and drop-3 voicings to keep the melody on top.' },
    ],
    tab: null,
    externalUrl: "Search 'Autumn Leaves chord melody guitar arrangement' — look for a Joe Pass or Ted Greene style arrangement. Start with a simple version before attempting full chord melody.",
  },

  {
    id: 'rep-019',
    tree: 'repertoire',
    tier: 4,
    name: 'Eruption',
    description: 'Van Halen\'s tapping showcase — introduces two-hand tapping technique and extreme legato.',
    whyItMatters: 'Eddie Van Halen changed what the guitar could do. Eruption is where tapping went from novelty to art. The technique itself opens up intervallic possibilities that are impossible with conventional playing.',
    prerequisites: ['rep-013', 'rep-017'],
    exercises: [
      { name: 'Basic Tapping Pattern', description: 'Start with the fundamental pattern: tap 12th fret with right hand, pull off to 8th fret, pull off to 5th fret. Loop this on one string. The tap must be firm and the pull-offs must ring. Use high gain.' },
      { name: 'Tapping Across Strings', description: 'Once single-string tapping is clean, move the pattern across strings. Eddie moves the fretted notes while keeping the tapping finger on fret 12. Practice the string crossing slowly.' },
      { name: 'Tremolo Bar and Harmonics Section', description: 'The opening uses dive bombs and harmonics. If you have a tremolo bar, practice controlled dives and returns to pitch. If not, focus on the tapping section exclusively.' },
    ],
    tab: null,
    externalUrl: "Search 'Eruption Van Halen guitar tab' — focus on the tapping section (middle of the piece). The opening tremolo bar section requires a Floyd Rose or similar tremolo system.",
  },

  {
    id: 'rep-020',
    tree: 'repertoire',
    tier: 4,
    name: 'Neon',
    description: 'John Mayer\'s slap-guitar technique — percussive acoustic playing that sounds like bass, drums, and guitar combined.',
    whyItMatters: 'Mayer invented a technique where the thumb slaps bass notes like a bass guitar while the fingers pluck melody. Neon proves that acoustic guitar can be a complete band. The technique is unique and will fundamentally expand your right-hand vocabulary.',
    prerequisites: ['rep-005', 'rep-011'],
    exercises: [
      { name: 'Thumb Slap Isolation', description: 'Practice slapping the low E and A strings with the side of your thumb, like a bass player. The thumb bounces off the string — do not follow through. You should hear a percussive pop followed by the note.' },
      { name: 'Slap and Pluck Coordination', description: 'Combine the thumb slap on bass strings with index/middle finger plucks on treble strings. Start with a simple pattern: slap string 6, pluck strings 2 and 1 together. Alternate between slap and pluck at 60 BPM.' },
      { name: 'Neon Main Riff Slowly', description: 'The main riff combines slapped bass, plucked chords, and muted percussive hits. Learn it at 40% speed from a reference video. This technique takes weeks to develop — patience is required.' },
    ],
    tab: null,
    externalUrl: "Search 'Neon John Mayer guitar lesson' — video tutorials are essential for this one because the right-hand technique must be seen to be understood. Look for the 'Where The Light Is' live version breakdown.",
  },

  // ============================================================
  // TIER 5 — MASTERY
  // ============================================================
  {
    id: 'rep-021',
    tree: 'repertoire',
    tier: 5,
    name: 'Build a Concert Setlist',
    description: 'Curate and polish a 30-minute setlist of 8-10 songs that flows as a complete performance.',
    whyItMatters: 'A setlist is more than a list of songs — it is pacing, dynamics, key variety, and audience engagement. Building one forces you to evaluate your repertoire honestly and polish your best material to performance standard.',
    prerequisites: ['rep-011', 'rep-012', 'rep-013', 'rep-016'],
    exercises: [
      { name: 'Song Selection and Ordering', description: 'Choose 8-10 songs you can play confidently. Order them for energy flow: start medium, build to a peak, drop to something intimate, build again, end strong. Write out the setlist with keys and tempos.' },
      { name: 'Full Runthrough with Transitions', description: 'Play the entire setlist without stopping. Time it. Practice the transitions between songs — tuning, capo changes, tone adjustments. Dead air kills momentum.' },
      { name: 'Record and Review', description: 'Record a full runthrough on video. Watch it back critically. Note where your energy drops, where transitions are clunky, where you lose confidence. Fix those spots.' },
    ],
    tab: null,
    externalUrl: null,
  },

  {
    id: 'rep-022',
    tree: 'repertoire',
    tier: 5,
    name: 'Original Composition Portfolio',
    description: 'Write and record 5 original pieces that demonstrate your musical voice across different styles.',
    whyItMatters: 'Playing other people\'s music makes you a skilled interpreter. Writing your own makes you a musician. Five compositions force you to synthesize everything you have learned into something that did not exist before you created it.',
    prerequisites: ['rep-021', 'rep-018'],
    exercises: [
      { name: 'Composition Prompts', description: 'Write one piece in each style: fingerpicking ballad, rock/blues with a solo section, jazz-influenced chord piece, percussive acoustic piece, and one wild card in any style. Give yourself a 2-week deadline per piece.' },
      { name: 'Arrangement and Polish', description: 'For each piece, write a clear structure (intro-verse-chorus-bridge-outro or equivalent). Add dynamics, articulation marks, and transitions. The arrangement should be intentional, not accidental.' },
      { name: 'Record and Produce', description: 'Record each piece with the best quality you can manage. Even a phone recording in a quiet room counts. The act of recording forces you to play at your best and reveals weaknesses that casual playing hides.' },
    ],
    tab: null,
    externalUrl: null,
  },

  {
    id: 'rep-023',
    tree: 'repertoire',
    tier: 5,
    name: 'Sight-Read a Lead Sheet',
    description: 'Pick up a jazz lead sheet you have never seen and play a competent chord-melody arrangement on the spot.',
    whyItMatters: 'Sight-reading is the ultimate test of musical knowledge. It proves you understand keys, chord symbols, melody, and voicings well enough to combine them in real time. This is freedom — you can play any song, anywhere, without preparation.',
    prerequisites: ['rep-018', 'rep-016'],
    exercises: [
      { name: 'Daily Sight-Reading Practice', description: 'Get a Real Book or iReal Pro. Every day, pick a tune you do not know. Set a timer for 5 minutes to study it, then play through it. Do not stop for mistakes — keep going. Do one new tune every day for 30 days.' },
      { name: 'Chord Symbol Fluency', description: 'Flash-card drill: see a chord symbol (Dm7b5, G7#9, CmMaj7), play the voicing instantly. You need at least 2 voicings for every common chord type. Use drop-2 voicings as your default system.' },
      { name: 'Melody Integration', description: 'Read the melody while comping chords underneath. Start by alternating: melody for 2 bars, chords for 2 bars. Gradually merge them into chord melody. Speed is not the goal — musical coherence is.' },
    ],
    tab: null,
    externalUrl: null,
  },

  {
    id: 'rep-024',
    tree: 'repertoire',
    tier: 5,
    name: 'Full Fingerstyle Arrangement',
    description: 'Arrange a well-known pop or rock song for solo fingerstyle guitar from scratch.',
    whyItMatters: 'Arranging forces you to hear all the parts — bass, chords, melody, rhythm — and figure out how to voice them on six strings. It is the deepest test of your fretboard knowledge and musical ear.',
    prerequisites: ['rep-011', 'rep-016', 'rep-018'],
    exercises: [
      { name: 'Song Selection and Analysis', description: 'Choose a song with a strong melody and clear chord progression. Transcribe the melody, bass line, and chord changes by ear (or from a lead sheet). Write each part out separately.' },
      { name: 'Voicing and Fingering', description: 'Find fingerings that allow bass, chords, and melody to coexist. The melody must always be the highest voice. Use open strings where possible to create sustain. Expect to try and reject many fingerings before finding ones that work.' },
      { name: 'Polish and Perform', description: 'Once the arrangement is playable, spend 2 weeks polishing it. Add dynamics, harmonics, percussive elements. Then perform it for someone — the arrangement is not finished until it communicates to a listener.' },
    ],
    tab: null,
    externalUrl: null,
  },

  {
    id: 'rep-025',
    tree: 'repertoire',
    tier: 5,
    name: 'Performance Under Pressure',
    description: 'Play a full 30-minute set for a live audience — friends, open mic, or strangers.',
    whyItMatters: 'Everything changes when someone is watching. Your hands sweat, your mind races, songs you know cold suddenly feel unfamiliar. Performing is a separate skill from playing, and the only way to develop it is to do it. This is where practice becomes music.',
    prerequisites: ['rep-021', 'rep-022'],
    exercises: [
      { name: 'Simulated Performance', description: 'Set up a camera, dress as if performing, and play your full setlist with no restarts. If you make a mistake, keep going — just like a real performance. Watch the recording and note where anxiety affected your playing.' },
      { name: 'Small Audience Practice', description: 'Play for 1-3 people you trust. Ask them to sit and watch, not multitask. The presence of even one attentive listener changes the pressure. Do this at least 3 times before a public performance.' },
      { name: 'Public Performance', description: 'Sign up for an open mic night or invite people over for a house concert. Play your full setlist. Afterward, write down what went well and what did not. The first one is always rough — that is normal and expected. Do it again within 2 weeks.' },
    ],
    tab: null,
    externalUrl: null,
  },
];
