// Nashville-style chord charts
// Syntax:
//   @title, @key, @tempo, @feel  — metadata
//   [A] Verse, [B] Chorus, [C] Bridge, [D] Solo, [E] Outro — sections
//   ||: ... :|| x4  — repeat
//   | separates bars (4 bars per line typical)
//   / splits a bar: Am / G = 2 beats each
//   % = simile (repeat previous bar)
//   @structure A B A B C B — end of chart

export const STARTER_CHARTS = [
  // ─── GOOSE ────────────────────────────────────────────────────────────────

  {
    id: 'hungersite',
    artist: 'Goose',
    genre: 'jam',
    level: 'intermediate',
    text: `@title Hungersite
@key Eb
@tempo 140
@feel Driving Jam Rock — Eb Mixolydian groove

[A] Intro / Main Riff
||: Eb | Db | Eb | Db :|| x4

[B] Verse
| Eb | Db | Eb | Db |
| Eb | Db | Bb | Bb |

[C] Chorus
| Ab | Bb | Eb | Db |
| Ab | Bb | Eb | Eb |

[D] Jam / Solo (Eb Mixolydian)
||: Eb | Db | Ab | Bb :|| open

[E] Outro
||: Eb | Db | Eb | Db :|| x4 fade

@structure A B C B D B E`,
  },

  {
    id: 'arcadia',
    artist: 'Goose',
    genre: 'jam',
    level: 'intermediate',
    text: `@title Arcadia
@key Db
@tempo 92
@feel Slow Burn Psychedelic Rock

[A] Intro
||: Db | Ab | Bbm | Gb :|| x4

[B] Verse
| Db | Ab | Bbm | Gb |
| Db | Ab | Gb  | Gb |

[C] Chorus
| Gb | Ab | Db | Db |
| Gb | Ab | Bbm | Ab |

[D] Bridge
| Bbm | Ab | Gb | Ab |
| Bbm | Ab | Db | Db |

[E] Solo (Db major / Bb minor)
||: Db | Ab | Bbm | Gb :|| open

@structure A B C B C D E C`,
  },

  {
    id: 'tumble',
    artist: 'Goose',
    genre: 'jam',
    level: 'intermediate',
    text: `@title Tumble
@key F
@tempo 130
@feel Uptempo Funk-Rock Groove

[A] Intro
||: F | Bb | Eb | Eb :|| x4

[B] Verse
| F | Bb | Eb | Eb |
| F | Bb | F  | F  |

[C] Chorus
| Bb | F | Eb | Bb |
| Bb | F | Eb | F  |

[D] Jam (F Mixolydian)
||: F | Eb | Bb | F :|| open

[E] Outro
||: F | Bb | Eb | F :|| x4 fade

@structure A B C B C D B E`,
  },

  // ─── STURGILL SIMPSON ─────────────────────────────────────────────────────

  {
    id: 'turtles-all-the-way-down',
    artist: 'Sturgill Simpson',
    genre: 'country',
    level: 'intermediate',
    text: `@title Turtles All The Way Down
@key E
@tempo 91
@feel Fingerpicked Psychedelic Country Waltz (3/4)

[A] Intro / Verse
||: E | A | E | B7 :|| x4

[B] Pre-Chorus
| A | A | E | E |
| B7 | B7 | E | E |

[C] Chorus
| A | E | A | E |
| B7 | B7 | E | E |

[D] Interlude
| E | Esus4 | A | Asus4 |
| E | B7 | E | E |

@structure A A B C A B C D A C`,
    videos: [
      { title: 'Turtles All The Way Down — Guitar Lesson', channel: 'Marty Music', url: 'https://www.youtube.com/watch?v=ZfBj4xvs-5s' },
    ],
  },

  {
    id: 'living-the-dream',
    artist: 'Sturgill Simpson',
    genre: 'country',
    level: 'intermediate',
    text: `@title Living the Dream
@key F
@tempo 77
@feel Honky-Tonk Shuffle — Capo 1 optional (sounds in E shape)

[A] Intro
||: F | C | Bb | F :|| x2

[B] Verse
| F | F | C | C |
| Bb | Bb | F | C |
| F | F | C | C |
| Bb | Bb | F | F |

[C] Chorus
| Bb | F | C | F |
| Bb | F | C | F |

[D] Solo (F major pentatonic)
| F | C | Bb | F |
| F | C | F  | F |

@structure A B C B C D B C`,
  },

  {
    id: 'in-bloom',
    artist: 'Sturgill Simpson',
    genre: 'country',
    level: 'intermediate',
    text: `@title In Bloom (Nirvana cover)
@key Bb
@tempo 92
@feel Country-Twang reimagining of Nirvana — capo 3 (G shapes)

[A] Intro
||: Bb | Bb | F | Ab |
| Db | Db | Eb | Eb :|| x2

[B] Verse
| Bb | F | Ab | Db |
| Eb | Eb | Bb | Bb |

[C] Pre-Chorus
| Gb | Db | Ab | Eb |
| Gb | Db | Eb | Eb |

[D] Chorus
| Eb | Ab | Db | Gb |
| Eb | Ab | Db | Eb |

@structure A B C D B C D A D`,
  },

  // ─── LED ZEPPELIN ─────────────────────────────────────────────────────────

  {
    id: 'black-dog',
    artist: 'Led Zeppelin',
    genre: 'rock',
    level: 'advanced',
    text: `@title Black Dog
@key A
@tempo 172
@feel Hard Rock — odd-meter riff (no drums on riff), straight 4/4 on chorus

[A] Main Riff (unaccompanied, 5/4 feel)
||: A | A | D / A | A :|| x4

[B] Verse (call & response — silence between vocal phrases)
| A5 | A5 | A5 | A5 |
| A5 | A5 | A5 | A5 |

[C] Chorus
| A | D | E | A |
| A | D | E | A |

[D] Bridge
| D | D | A | A |
| D | D | E | E |

[E] Solo (A minor pentatonic)
| A | D | A | E |
| A | D | E | A |

@structure A B C A B C D E A B C`,
    videos: [
      { title: 'Black Dog Guitar Lesson — How to Play', channel: 'Marty Music', url: 'https://www.youtube.com/watch?v=L0M2F1hpxiI' },
    ],
  },

  {
    id: 'going-to-california',
    artist: 'Led Zeppelin',
    genre: 'classic-rock',
    level: 'intermediate',
    text: `@title Going to California
@key D
@tempo 70
@feel Acoustic Fingerpicking — DADGAD tuning, open and airy

[A] Intro / Verse (DADGAD)
||: Dm | Dm | C | G :|| x4

[B] Verse 2
| Dm | Dm | Am | Am |
| G  | G  | C  | C  |

[C] Chorus
| F | C | G | Dm |
| F | C | G | G  |

[D] Bridge
| Am | Am | G | G |
| F  | C  | G | G |

[E] Outro
||: Dm | C | G | Dm :|| fade

@structure A B C A B C D C E`,
    videos: [
      { title: 'Going to California — Acoustic Guitar Lesson', channel: 'Marty Music', url: 'https://www.youtube.com/watch?v=oRcCHZCLFsk' },
    ],
  },

  {
    id: 'the-ocean',
    artist: 'Led Zeppelin',
    genre: 'rock',
    level: 'advanced',
    text: `@title The Ocean
@key A
@tempo 112
@feel Heavy Groove — 4/4 with intro bar of 15/8 (count 4+4+4+3)

[A] Intro Riff (15/8 then 4/4)
| A5 % % % / A5 | A5 | D5 | A5 |

[B] Main Riff
||: A5 | D5 | A5 | G5 / D5 :|| x4

[C] Verse
| A5 | D5 | A5 | G5 |
| A5 | D5 | E5 | A5 |

[D] Chorus
| D | A | D | A |
| E | E | A | A |

[E] Outro Swing Section (half-time feel)
| A7 | D9 | A7 | E7 |
| A7 | D9 | E7 | A7 |

@structure A B C D B C D E`,
  },

  // ─── TRACY CHAPMAN ────────────────────────────────────────────────────────

  {
    id: 'fast-car',
    artist: 'Tracy Chapman',
    genre: 'folk',
    level: 'intermediate',
    text: `@title Fast Car
@key C
@tempo 104
@feel Fingerpicking Folk — capo 2 for original key (D)

[A] Intro / Riff
||: C | G | Em | D :|| x4

[B] Verse
| C | G | Em | D |
| C | G | Em | D |
| C | G | Em | D |
| C | G | Em | D |

[C] Chorus
| C | G | Em | D |
| C | G | Em | D |

[D] Outro
||: C | G | Em | D :|| fade

@structure A B C B C B C D`,
    videos: [
      { title: 'Fast Car — Easy Guitar Lesson', channel: 'Justin Guitar', url: 'https://www.youtube.com/watch?v=2EsxQJfHTEA' },
    ],
  },

  {
    id: 'give-me-one-reason',
    artist: 'Tracy Chapman',
    genre: 'blues',
    level: 'intermediate',
    text: `@title Give Me One Reason
@key F#
@tempo 116
@feel 12-Bar Blues Shuffle — barre chords, electric vibe

[A] Main 12-Bar Blues
| F#7 | F#7 | F#7 | F#7 |
| B7  | B7  | F#7 | F#7 |
| C#7 | B7  | F#7 | C#7 |

[B] Verse (same 12-bar, vocal over)
| F#7 | F#7 | F#7 | F#7 |
| B7  | B7  | F#7 | F#7 |
| C#7 | B7  | F#7 | C#7 |

[C] Solo (F# blues scale)
| F#7 | F#7 | F#7 | F#7 |
| B7  | B7  | F#7 | F#7 |
| C#7 | B7  | F#7 | F#7 |

@structure A B A B C B B`,
  },

  {
    id: 'talkin-bout-a-revolution',
    artist: 'Tracy Chapman',
    genre: 'folk',
    level: 'easy',
    text: `@title Talkin' Bout a Revolution
@key G
@tempo 110
@feel Strummed Folk — capo 4 for original key (B)

[A] Intro
||: G | Cadd9 | Em7 | D :|| x2

[B] Verse
| G | Cadd9 | Em7 | D |
| G | Cadd9 | Em7 | D |

[C] Chorus
| Em7 | Cadd9 | G | D |
| Em7 | Cadd9 | G | D |

[D] Bridge
| Cadd9 | G | D | D |
| Cadd9 | G | D | D |

@structure A B C B C D B C`,
  },

  // ─── PSYCHEDELIC PORN CRUMPETS ────────────────────────────────────────────

  {
    id: 'found-god-in-a-tomato',
    artist: 'Psychedelic Porn Crumpets',
    genre: 'psychedelic',
    level: 'easy',
    text: `@title Found God in a Tomato
@key C
@tempo 82
@feel Slow Psychedelic Fuzz — droning riff, loose groove

[A] Main Riff / Verse
||: C | G | Am | F :|| x4

[B] Pre-Chorus
| F | G | Am | Am |
| F | G | C  | C  |

[C] Chorus
| C | F | G | Am |
| C | F | G | C  |

[D] Psych Breakdown
||: Am | Am | F | G :|| x4

[E] Solo (A natural minor / C major)
| Am | F | C | G |
| Am | F | G | G |

@structure A B C A B C D E C`,
  },

  {
    id: 'cornflake',
    artist: 'Psychedelic Porn Crumpets',
    genre: 'psychedelic',
    level: 'intermediate',
    text: `@title Cornflake
@key E
@tempo 120
@feel Fuzzed Psych-Rock — E mixolydian, wah-heavy

[A] Intro Riff
||: E5 | D5 | A5 | E5 :|| x4

[B] Verse
| E5 | D5 | A5 | A5 |
| E5 | D5 | B5 | B5 |

[C] Chorus
| A | E | D | A |
| A | E | D | E |

[D] Bridge / Psych Section
||: E | D | G | A :|| x4

[E] Solo (E pentatonic minor / mixolydian)
| E5 | D5 | A5 | E5 |
| E5 | D5 | B5 | E5 |

@structure A B C B C D E C`,
  },

  // ─── BLUES ────────────────────────────────────────────────────────────────

  {
    id: 'the-thrill-is-gone',
    artist: 'B.B. King',
    genre: 'blues',
    level: 'intermediate',
    text: `@title The Thrill Is Gone
@key Bm
@tempo 70
@feel Slow Minor Blues — behind-the-beat, horn feel

[A] Main 12-Bar Minor Blues
| Bm  | Bm  | Bm  | Bm  |
| Em  | Em  | Bm  | Bm  |
| G   | F#7 | Bm  | F#7 |

[B] Verse (same changes)
| Bm  | Bm  | Bm  | Bm  |
| Em  | Em  | Bm  | Bm  |
| G   | F#7 | Bm  | F#7 |

[C] Solo (B minor pentatonic / B blues scale)
| Bm  | Bm  | Bm  | Bm  |
| Em  | Em  | Bm  | Bm  |
| G   | F#7 | Bm  | F#7 |

@structure A B A B C B B`,
    videos: [
      { title: 'The Thrill Is Gone — Guitar Lesson BB King Style', channel: 'GuitarLessons365', url: 'https://www.youtube.com/watch?v=c-4I6Cq1M3Y' },
    ],
  },

  {
    id: 'pride-and-joy',
    artist: 'Stevie Ray Vaughan',
    genre: 'blues',
    level: 'advanced',
    text: `@title Pride and Joy
@key E
@tempo 118
@feel Texas Shuffle Blues — SRV double-stop swing, slight swing 8ths

[A] Intro
||: E7 | E7 | A7 | E7 :|| x2

[B] 12-Bar Shuffle
| E7 | E7 | E7 | E7 |
| A7 | A7 | E7 | E7 |
| B7 | A7 | E7 | B7 |

[C] Verse (same shuffle)
| E7 | E7 | E7 | E7 |
| A7 | A7 | E7 | E7 |
| B7 | A7 | E7 | B7 |

[D] Solo (E minor pentatonic + major 6th)
| E7 | E7 | E7 | E7 |
| A7 | A7 | E7 | E7 |
| B7 | A7 | E7 | E7 |

@structure A B C B C D B`,
    videos: [
      { title: 'Pride and Joy — SRV Style Guitar Lesson', channel: 'GuitarLessons365', url: 'https://www.youtube.com/watch?v=bYsHJBKp-1A' },
    ],
  },

  {
    id: 'red-house',
    artist: 'Jimi Hendrix',
    genre: 'blues',
    level: 'intermediate',
    text: `@title Red House
@key Bb
@tempo 66
@feel Slow Blues — deep pocket, string bends, Hendrix vibrato

[A] Intro Lick (Bb blues scale)
| Bb7 | Bb7 | Bb7 | Bb7 |

[B] 12-Bar Slow Blues
| Bb7 | Bb7 | Bb7 | Bb7 |
| Eb7 | Eb7 | Bb7 | Bb7 |
| F7  | Eb7 | Bb7 | F7  |

[C] Verse
| Bb7 | Bb7 | Bb7 | Bb7 |
| Eb7 | Eb7 | Bb7 | Bb7 |
| F7  | Eb7 | Bb7 | F7  |

[D] Solo (Bb blues scale — extended)
| Bb7 | Bb7 | Bb7 | Bb7 |
| Eb7 | Eb7 | Bb7 | Bb7 |
| F7  | Eb7 | Bb7 | Bb7 |

@structure A B C B C D C D`,
    videos: [
      { title: 'Red House — Jimi Hendrix Guitar Lesson', channel: 'GuitarLessons365', url: 'https://www.youtube.com/watch?v=Hzo-tBqcm3k' },
    ],
  },

  // ─── CLASSICS ─────────────────────────────────────────────────────────────

  {
    id: 'wish-you-were-here',
    artist: 'Pink Floyd',
    genre: 'classic-rock',
    level: 'intermediate',
    text: `@title Wish You Were Here
@key C (G shapes / open)
@tempo 66
@feel Fingerpicked Folk-Rock — iconic 12-string intro, emotional

[A] Intro / Riff (fingerpick arpeggios)
||: Em7 | G | Em7 | G :||
| Em7 | A7sus4 | Em7 | A7sus4 |

[B] Verse
| C | D | Am | G |
| C | D | Am | Am |
| G | G | C | D |
| Am | Am | G | G |

[C] Chorus
| C | Am | G | D/F# |
| C | Am | G | G |

@structure A A B C B C B C`,
    videos: [
      { title: 'Wish You Were Here — Complete Guitar Lesson', channel: 'Justin Guitar', url: 'https://www.youtube.com/watch?v=Jcxih8DLAP0' },
    ],
  },

  {
    id: 'blackbird',
    artist: 'The Beatles',
    genre: 'classic-rock',
    level: 'advanced',
    text: `@title Blackbird
@key G
@tempo 96
@feel Fingerstyle Solo Guitar — Travis-pick + melody, Paul McCartney style

[A] Intro / Verse
| G  | Am7 | G/B | G  |
| C  | C#dim7 | D  | Dsus4 |
| D  | Dsus2 | G  | G  |

[B] Verse 2
| G  | Am7 | G/B | G  |
| C  | C#dim7 | D  | Dsus4 |
| D  | Dsus2 | Em | Cm |
| G/B | A7sus4 | D7 | G |

[C] Bridge
| F  | C/E | Dm | C  |
| Bb | C   | G  | A7 |
| D7sus4 | D7 | G | G |

@structure A B C A B`,
    videos: [
      { title: 'Blackbird — Guitar Lesson', channel: 'Justin Guitar', url: 'https://www.youtube.com/watch?v=BVjgbMOxQDQ' },
    ],
  },

  {
    id: 'little-wing',
    artist: 'Jimi Hendrix',
    genre: 'classic-rock',
    level: 'advanced',
    text: `@title Little Wing
@key Em
@tempo 60
@feel Slow Ballad — chord melody, thumb bass + finger melody à la Hendrix

[A] Intro / Main Theme
| Em  | G    | Am  | Em  |
| Bm  | Bb   | Am  | C   |
| G   | F    | C   | D   |
| Em  | %    | %   | %   |

[B] Verse
| Em  | G    | Am  | Em  |
| Bm  | Bb   | Am  | C   |
| G   | F    | C   | D   |
| Em  | %    | %   | %   |

[C] Solo (E natural minor / E blues)
| Em  | G    | Am  | C   |
| G   | F    | C   | D   |
| Em  | Em   | Em  | Em  |

@structure A B A B C`,
    videos: [
      { title: 'Little Wing — Hendrix Lesson (Chord Melody Breakdown)', channel: 'Paul Davids', url: 'https://www.youtube.com/watch?v=OmSyglHMdno' },
    ],
  },

  {
    id: 'comfortably-numb',
    artist: 'Pink Floyd',
    genre: 'classic-rock',
    level: 'intermediate',
    text: `@title Comfortably Numb
@key B
@tempo 63
@feel Epic Slow Rock — Bm verse, D major chorus, legendary solos

[A] Intro
| Bm | Bm | Bm | Bm |

[B] Verse
| Bm  | Bm  | A   | A   |
| G   | G   | Bm  | Bm  |
| Bm  | Bm  | A   | A   |
| G   | G   | Bm  | Bm  |
| Em  | Em  | A   | A   |
| Bm  | Bm  | Bm  | Bm  |

[C] Chorus
| D  | A  | C  | G  |
| D  | A  | C  | G  |
| D  | %  | %  | %  |

[D] First Solo (B minor pentatonic)
| Bm | A | G | G |
| Bm | A | G | G |

[E] Second Solo — Extended (iconic outro)
| D  | A  | C  | G  |
| D  | A  | C  | G  |
||: D | A | C | G :|| fade

@structure A B C B C D B C E`,
    videos: [
      { title: 'Comfortably Numb — Full Guitar Lesson', channel: 'Marty Music', url: 'https://www.youtube.com/watch?v=NuMBhYHu0b4' },
    ],
  },

  // ─── EXTRAS ───────────────────────────────────────────────────────────────

  {
    id: 'house-of-the-rising-sun',
    artist: 'The Animals',
    genre: 'classic-rock',
    level: 'easy',
    text: `@title House of the Rising Sun
@key Am
@tempo 77
@feel Fingerpicked Arpeggio — 6/8 feel, Am-C-D-F pattern

[A] Intro / Verse
||: Am | C | D | F |
| Am | C | E | E :|| x4

[B] Chorus
| Am | C | D | F |
| Am | E | Am | E |

[C] Solo (A natural minor)
| Am | C | D | F |
| Am | C | E | E |

@structure A B A B C A B`,
    videos: [
      { title: 'House of the Rising Sun — Beginner Guitar Lesson', channel: 'Justin Guitar', url: 'https://www.youtube.com/watch?v=ZeJPIBfNgYE' },
    ],
  },

  {
    id: 'have-you-ever-seen-the-rain',
    artist: 'Creedence Clearwater Revival',
    genre: 'rock',
    level: 'easy',
    text: `@title Have You Ever Seen the Rain
@key C
@tempo 116
@feel Strummed Folk-Rock — steady downstroke feel

[A] Intro
| C | C | G | G |

[B] Verse
| C | C | G | G |
| C | C | G | G |
| Am | F | C | G |
| Am | F | C | C |

[C] Chorus
| G | G | C | C |
| G | G | C | C |

[D] Solo
| F | C | G | C |

@structure A B C B C D B C`,
    videos: [
      { title: 'Have You Ever Seen the Rain — Guitar Lesson', channel: 'Justin Guitar', url: 'https://www.youtube.com/watch?v=jKkJ3V-FiQo' },
    ],
  },

  {
    id: 'sittin-on-the-dock-of-the-bay',
    artist: 'Otis Redding',
    genre: 'soul',
    level: 'easy',
    text: `@title (Sittin' On) The Dock of the Bay
@key G
@tempo 101
@feel Laid-Back Soul — steady rhythmic strum, whistle outro

[A] Intro
| G | G | B7 | B7 |
| C | A | G  | G  |

[B] Verse
| G  | B7 | C  | A  |
| G  | B7 | C  | A  |
| G  | E  | G  | E  |

[C] Chorus
| G  | G  | E  | E  |
| G  | G  | A  | A  |

[D] Bridge
| G  | G  | F  | F  |
| D  | D  | C  | C  |
| G  | G  | F  | F  |
| D  | D  | D  | D  |

[E] Outro (whistle over Verse changes)
||: G | B7 | C | A :|| fade

@structure A B C B C D B C E`,
    videos: [
      { title: "Sittin' On the Dock of the Bay — Guitar Lesson", channel: 'Marty Music', url: 'https://www.youtube.com/watch?v=r-ZGMDMvQEk' },
    ],
  },

  // ─── MORE CLASSICS ──────────────────────────────────────────────────────────

  {
    id: 'stairway-to-heaven',
    artist: 'Led Zeppelin',
    genre: 'classic-rock',
    level: 'advanced',
    text: `@title Stairway to Heaven
@key Am
@tempo 72
@feel Epic Progressive Folk-Rock — fingerpick intro, electric climax

[A] Intro (fingerpicked)
| Am | E+/G# | C/G | D/F# |
| Fmaj7 | G | Am | Am |

[B] Verse
| Am | E+/G# | C/G | D/F# |
| Fmaj7 | G | Am | Am |
| C | D | Fmaj7 | Am |

[C] Interlude
| Am7 | Dsus4 | Am7 | Dsus4 |
| Am7 | Em | D | C | D |

[D] Fanfare / Building
| C | G/B | Am | Am |
| C | G/B | Fmaj7 | Fmaj7 |

[E] Solo (Am pentatonic / A minor)
||: Am | G | F | G :|| x4

[F] Outro (a capella feel)
| Am | G | F | G |
| Am | Am | Am | Am |

@structure A A B A B C D E D F`,
    videos: [
      { title: 'Stairway to Heaven — Complete Guitar Lesson', channel: 'Marty Music', url: 'https://www.youtube.com/watch?v=rMOWvSj2mZo' },
    ],
  },

  {
    id: 'hotel-california',
    artist: 'Eagles',
    genre: 'classic-rock',
    level: 'intermediate',
    text: `@title Hotel California
@key Bm
@tempo 74
@feel Fingerpicked Rock Ballad — 12-string arpeggios, iconic dual solo

[A] Intro / Verse
| Bm | F# | A | E |
| G | D | Em | F# |

[B] Chorus
| G | D | F# | Bm |
| G | D | Em | F# |

[C] Solo (B harmonic minor / B dorian)
| Bm | F# | A | E |
| G | D | Em | F# |
| Bm | F# | A | E |
| G | D | Em | F# |

@structure A A B A A B C`,
    videos: [
      { title: 'Hotel California — Full Guitar Lesson', channel: 'Marty Music', url: 'https://www.youtube.com/watch?v=_4IRMYwFfi4' },
    ],
  },

  {
    id: 'sultans-of-swing',
    artist: 'Dire Straits',
    genre: 'classic-rock',
    level: 'advanced',
    text: `@title Sultans of Swing
@key Dm
@tempo 148
@feel Fingerstyle Rock — clean Strat tone, Knopfler picking

[A] Intro
||: Dm | C | Bb | A :|| x2

[B] Verse
| Dm | C | Bb | A |
| Dm | C | Bb | A |
| F | C | Bb | Bb |

[C] Chorus
| Bb | Bb | Dm | Dm |
| Bb | C | Dm | A |

[D] Solo (D dorian / D minor pentatonic)
| Dm | C | Bb | A |
| Dm | C | Bb | A |
| F | C | Bb | A |
| Dm | Dm | Dm | Dm |

@structure A B C B C D B C`,
    videos: [
      { title: 'Sultans of Swing — Guitar Lesson', channel: 'Justin Guitar', url: 'https://www.youtube.com/watch?v=F_sudqxIJQg' },
    ],
  },

  {
    id: 'dust-in-the-wind',
    artist: 'Kansas',
    genre: 'classic-rock',
    level: 'intermediate',
    text: `@title Dust in the Wind
@key C
@tempo 90
@feel Travis Picking Ballad — fingerstyle, steady alternating bass

[A] Intro / Verse
| C | Cmaj7 | Cadd9 | C |
| Am | Asus2 | Asus4 | Am |
| C | Cmaj7 | Cadd9 | C |
| Am | Am | G/B | G |

[B] Chorus
| D/F# | G | Am | Am |
| D/F# | G | Am | G/B |

@structure A B A B A B`,
    videos: [
      { title: 'Dust in the Wind — Fingerpicking Lesson', channel: 'Justin Guitar', url: 'https://www.youtube.com/watch?v=HGMx0YkeTFQ' },
    ],
  },

  {
    id: 'wonderwall',
    artist: 'Oasis',
    genre: 'rock',
    level: 'easy',
    text: `@title Wonderwall
@key F#m (Capo 2)
@tempo 87
@feel Brit-Pop Strumming — capo 2, distinctive strum pattern

[A] Intro / Verse
| Em7 | G | Dsus4 | A7sus4 |
| Em7 | G | Dsus4 | A7sus4 |

[B] Pre-Chorus
| C | D | Em | Em |
| C | D | Em | Em |

[C] Chorus
| A7sus4 | Em | G | Em |
| A7sus4 | Em | G | Em |

@structure A A B C A A B C C`,
    videos: [
      { title: 'Wonderwall — Guitar Lesson', channel: 'Marty Music', url: 'https://www.youtube.com/watch?v=6p9v4SD5IIE' },
    ],
  },

  {
    id: 'purple-rain',
    artist: 'Prince',
    genre: 'rock',
    level: 'intermediate',
    text: `@title Purple Rain
@key Bb
@tempo 58
@feel Power Ballad — slow build, emotional bends, arena rock

[A] Intro
||: Bb | Gm | Eb | F :|| x4

[B] Verse
| Bb | Gm | Eb | F |
| Bb | Gm | Eb | F |

[C] Chorus
| Eb | Bb | Gm | F |
| Eb | Bb | F  | F |

[D] Solo (Bb major pentatonic)
||: Bb | Gm | Eb | F :|| x4

@structure A B C B C D C`,
    videos: [
      { title: 'Purple Rain — Guitar Lesson', channel: 'Marty Music', url: 'https://www.youtube.com/watch?v=jQiMOB4xzjE' },
    ],
  },

  {
    id: 'while-my-guitar-gently-weeps',
    artist: 'The Beatles',
    genre: 'classic-rock',
    level: 'intermediate',
    text: `@title While My Guitar Gently Weeps
@key Am
@tempo 116
@feel Rock Ballad — descending bass line, Clapton solo

[A] Intro
| Am | Am/G | Am/F# | Fmaj7 |
| Am | G | D | E |

[B] Verse
| Am | Am/G | Am/F# | Fmaj7 |
| Am | G | D | E |

[C] Chorus
| A | C#m | F#m | C#m |
| Bm | E | A | E |

[D] Solo (A minor pentatonic)
| Am | Am/G | Am/F# | Fmaj7 |
| Am | G | D | E |

@structure A B C B C D B C`,
    videos: [
      { title: 'While My Guitar Gently Weeps — Lesson', channel: 'Marty Music', url: 'https://www.youtube.com/watch?v=MZh3dwE7U4s' },
    ],
  },

  {
    id: 'hallelujah',
    artist: 'Leonard Cohen',
    genre: 'folk',
    level: 'easy',
    text: `@title Hallelujah
@key C
@tempo 56
@feel Fingerpicked Ballad — 6/8 feel, arpeggiated chords

[A] Verse
| C | Am | C | Am |
| F | G | C | G |

[B] Chorus
| F | F | Am | Am |
| F | F | C | G |
| C | C | C | C |

@structure A B A B A B A B`,
    videos: [
      { title: 'Hallelujah — Fingerstyle Guitar Lesson', channel: 'Justin Guitar', url: 'https://www.youtube.com/watch?v=U3rOkV8UMfQ' },
    ],
  },

  {
    id: 'layla-unplugged',
    artist: 'Eric Clapton',
    genre: 'blues',
    level: 'intermediate',
    text: `@title Layla (Unplugged)
@key Dm
@tempo 95
@feel Acoustic Blues — shuffle feel, slide guitar intro

[A] Intro / Riff
||: Dm | Bb | C | Dm :|| x2

[B] Verse
| Dm | Bb | C | Dm |
| Dm | Bb | C | A |

[C] Chorus
| Dm | Bb | C | C |
| Dm | Bb | C | Dm |

[D] Coda (piano part arranged for guitar)
| C | C/B | Am | Am |
| C | F | Bb | C |

@structure A B C B C A B C D D`,
    videos: [
      { title: 'Layla Unplugged — Acoustic Guitar Lesson', channel: 'GuitarLessons365', url: 'https://www.youtube.com/watch?v=Bwzrp8aDCgI' },
    ],
  },

  {
    id: 'knockin-on-heavens-door',
    artist: 'Bob Dylan',
    genre: 'folk',
    level: 'easy',
    text: `@title Knockin' on Heaven's Door
@key G
@tempo 69
@feel Slow Folk Strum — 4 chords, feel over technique

[A] Verse / Chorus (same progression throughout)
| G | D | Am | Am |
| G | D | C  | C  |

@structure A A A A A A`,
    videos: [
      { title: "Knockin' on Heaven's Door — Beginner Guitar Lesson", channel: 'Marty Music', url: 'https://www.youtube.com/watch?v=gSzknDiO1cA' },
    ],
  },

  {
    id: 'hey-joe',
    artist: 'Jimi Hendrix',
    genre: 'blues',
    level: 'easy',
    text: `@title Hey Joe
@key E
@tempo 80
@feel Blues Rock — descending bass walk, Hendrix chord voicings

[A] Main Progression
| C | G | D | A |
| E | E | E | E |

[B] Verse (same changes, vocal over)
| C | G | D | A |
| E | E | E | E |

[C] Solo (E minor pentatonic)
| C | G | D | A |
| E | E | E | E |

@structure A B A B C B B`,
    videos: [
      { title: 'Hey Joe — Hendrix Guitar Lesson', channel: 'Marty Music', url: 'https://www.youtube.com/watch?v=Nxz4JAJXIFY' },
    ],
  },

  {
    id: 'behind-blue-eyes',
    artist: 'The Who',
    genre: 'classic-rock',
    level: 'intermediate',
    text: `@title Behind Blue Eyes
@key Em
@tempo 60
@feel Acoustic Ballad — gentle arpeggios, explosive bridge

[A] Verse (fingerpicked)
| Em | G | D | C |
| A | Asus4 | A | A |

[B] Verse 2
| Em | G | D | C |
| A | Asus4 | A | A |

[C] Chorus (power chords, full band)
| E5 | B5 | A5 | E5 |
| E5 | B5 | A5 | E5 |

[D] Bridge
| B | B | A | A |
| E | E | B | A |

@structure A B C D A B C`,
    videos: [
      { title: 'Behind Blue Eyes — Guitar Lesson', channel: 'Marty Music', url: 'https://www.youtube.com/watch?v=hLiIUn1GKn0' },
    ],
  },

  {
    id: 'simple-man',
    artist: 'Lynyrd Skynyrd',
    genre: 'classic-rock',
    level: 'easy',
    text: `@title Simple Man
@key Am
@tempo 60
@feel Slow Southern Rock — arpeggiated intro, soulful solo

[A] Intro / Verse
| C | G | Am | Am |
| C | G | Am | Am |

[B] Chorus
| C | G | Am | Am |
| C | G | Am | Am |

[C] Solo (A minor pentatonic)
| C | G | Am | Am |
| C | G | Am | Am |

@structure A A B A A B C B`,
    videos: [
      { title: 'Simple Man — Guitar Lesson', channel: 'Marty Music', url: 'https://www.youtube.com/watch?v=sJoPSJaiMK4' },
    ],
  },

  // ─── SANTANA ──────────────────────────────────────────────────────────────

  {
    id: 'oye-como-va',
    artist: 'Santana',
    genre: 'rock',
    level: 'easy',
    text: `@title Oye Como Va
@key Am
@tempo 126
@feel Latin Rock Groove — two chords, infectious rhythm

[A] Main Groove
||: Am7 | Am7 | D9 | D9 :|| x4

[B] Organ Solo (same changes)
||: Am7 | Am7 | D9 | D9 :|| open

[C] Guitar Solo (same changes)
||: Am7 | Am7 | D9 | D9 :|| open

@structure A B A C A`,
  },

  {
    id: 'evil-ways',
    artist: 'Santana',
    genre: 'rock',
    level: 'easy',
    text: `@title Evil Ways
@key Gm
@tempo 120
@feel Latin Rock — two-chord groove, organ stabs

[A] Main Groove / Verse
||: Gm7 | C7 | Gm7 | C7 :|| x4

[B] Bridge
| Gm7 | D7 | Gm7 | C7 |
| Gm7 | D7 | Gm7 | C7 |

[C] Solo (G minor pentatonic)
||: Gm7 | C7 | Gm7 | C7 :|| open

@structure A B A C A B A`,
  },

  {
    id: 'black-magic-woman',
    artist: 'Santana',
    genre: 'rock',
    level: 'intermediate',
    text: `@title Black Magic Woman
@key Dm
@tempo 130
@feel Latin Blues Rock — minor key, hypnotic groove

[A] Intro / Verse
| Dm | Am7 | Dm | Am7 |
| Dm | Gm7 | A7 | Dm |

[B] Chorus
| Dm | Bb | A7 | Dm |
| Gm | A7 | Dm | Dm |

[C] Solo (D minor pentatonic / D blues)
||: Dm | Gm7 | Dm | A7 :|| open

@structure A A B A A B C A B`,
    videos: [
      { title: 'Black Magic Woman — Guitar Lesson', channel: 'Marty Music', url: 'https://www.youtube.com/watch?v=t7UE-gj0PtA' },
    ],
  },

  {
    id: 'smooth',
    artist: 'Santana',
    genre: 'rock',
    level: 'intermediate',
    text: `@title Smooth
@key Am
@tempo 116
@feel Latin Pop-Rock — Rob Thomas vocals, Santana lead

[A] Verse
| Am | F | E7 | E7 |
| Am | F | E7 | E7 |

[B] Pre-Chorus
| Dm7 | Dm7 | E7 | E7 |

[C] Chorus
| Am | F | E7 | E7 |
| Am | F | E7 | E7 |

[D] Solo (A minor pentatonic / A harmonic minor)
||: Am | F | E7 | E7 :|| open

@structure A B C A B C D C`,
  },

  {
    id: 'maria-maria',
    artist: 'Santana',
    genre: 'rock',
    level: 'intermediate',
    text: `@title Maria Maria
@key Am
@tempo 96
@feel Latin Hip-Hop Rock — melodic, rhythmic groove

[A] Intro / Verse
| Am | Dm | E7 | Am |
| Am | Dm | E7 | Am |

[B] Chorus
| F | G | Am | Am |
| F | G | E7 | E7 |

[C] Solo (A minor / A harmonic minor)
||: Am | Dm | E7 | Am :|| open

@structure A A B A A B C B`,
  },

  {
    id: 'samba-pa-ti',
    artist: 'Santana',
    genre: 'rock',
    level: 'advanced',
    text: `@title Samba Pa Ti
@key G
@tempo 72
@feel Slow Latin Instrumental — emotional bends, sustain

[A] Theme
| Am | Bm | C | D |
| G | C | Am | D |

[B] Build
| Am | D | G | Em |
| C | D | G | G |

[C] Climax
| Am | D | G | C |
| Am | D | Em | Em |

[D] Solo (A minor pentatonic / G major)
||: Am | D | G | C :|| open

@structure A A B A B C D A`,
  },

  {
    id: 'europa',
    artist: 'Santana',
    genre: 'rock',
    level: 'advanced',
    text: `@title Europa (Earth's Cry Heaven's Smile)
@key Cm
@tempo 66
@feel Slow Latin Jazz-Rock Instrumental — soaring melody, jazz changes

[A] Intro (rubato feel)
| Cm | Fm7 | Bb7 | Ebmaj7 |
| Abmaj7 | Dm7b5 | G7 | Cm |

[B] Theme
| Cm | Fm7 | Bb7 | Ebmaj7 |
| Abmaj7 | Dm7b5 | G7 | Cm |

[C] Bridge
| Fm | Fm | Cm | Cm |
| Dm7b5 | G7 | Cm | Cm |

[D] Solo (C harmonic minor / C minor pentatonic)
||: Cm | Fm7 | Bb7 | Ebmaj7 :|| open

@structure A B C B D B C`,
  },

  // ─── MORE GOOSE ─────────────────────────────────────────────────────────

  {
    id: 'rockdale',
    artist: 'Goose',
    genre: 'jam',
    level: 'intermediate',
    text: `@title Rockdale
@key A
@tempo 138
@feel Driving Jam Rock — A major groove, extended jams

[A] Intro / Main Riff
||: A | A | D | D :|| x4

[B] Verse
| A | A | D | D |
| A | A | E | D |

[C] Chorus
| D | A | E | A |
| D | A | E | E |

[D] Jam (A Mixolydian)
||: A | D | E | A :|| open

@structure A B C B C D B C`,
  },

  {
    id: 'butter-rum',
    artist: 'Goose',
    genre: 'jam',
    level: 'intermediate',
    text: `@title Butter Rum
@key C
@tempo 108
@feel Mellow Funk-Rock Groove — laid-back pocket

[A] Intro / Verse
| C | F | Am | G |
| C | F | G | G |

[B] Chorus
| Am | F | C | G |
| Am | F | G | G |

[C] Jam (C major / A minor pentatonic)
||: C | F | Am | G :|| open

@structure A A B A A B C B`,
  },

  {
    id: 'hot-tea',
    artist: 'Goose',
    genre: 'jam',
    level: 'easy',
    text: `@title Hot Tea
@key D
@tempo 118
@feel Feel-Good Groove — open chords, upbeat

[A] Main Groove
||: D | G | D | A :|| x4

[B] Verse
| D | G | D | A |
| D | G | A | A |

[C] Chorus
| G | A | D | D |
| G | A | Bm | A |

[D] Jam (D major)
||: D | G | A | D :|| open

@structure A B C B C D C`,
  },

  {
    id: 'so-ready',
    artist: 'Goose',
    genre: 'jam',
    level: 'easy',
    text: `@title So Ready
@key G
@tempo 124
@feel Upbeat Rock — anthemic, crowd singalong

[A] Verse
| G | C | G | D |
| G | C | D | D |

[B] Chorus
| Em | C | G | D |
| Em | C | D | D |

[C] Jam (G major / E minor)
||: G | C | D | Em :|| open

@structure A B A B C B`,
  },

  {
    id: 'seekers-on-the-ridge',
    artist: 'Goose',
    genre: 'jam',
    level: 'intermediate',
    text: `@title Seekers on the Ridge
@key Dm
@tempo 100
@feel Dark Groove — minor key, building intensity

[A] Intro / Verse
| Dm | Am | C | G |
| Dm | Am | F | F |

[B] Build
| Bb | F | C | Dm |
| Bb | F | Am | Am |

[C] Chorus
| Dm | F | C | Am |
| Dm | F | Bb | A7 |

[D] Jam (D minor / D dorian)
||: Dm | Am | F | G :|| open

@structure A B C A B C D C`,
  },

  {
    id: 'borne',
    artist: 'Goose',
    genre: 'jam',
    level: 'intermediate',
    text: `@title Borne
@key Bb
@tempo 132
@feel Soaring Jam Rock — Bb major, big build

[A] Intro
||: Bb | Eb | F | Bb :|| x4

[B] Verse
| Bb | Eb | Cm | F |
| Bb | Eb | F | F |

[C] Chorus
| Eb | F | Bb | Gm |
| Eb | F | Bb | Bb |

[D] Jam (Bb major / Bb Mixolydian)
||: Bb | Eb | F | Bb :|| open

@structure A B C B C D C`,
  },

  {
    id: 'arrow',
    artist: 'Goose',
    genre: 'jam',
    level: 'intermediate',
    text: `@title Arrow
@key E
@tempo 144
@feel High-Energy Jam — E major, driving rhythm

[A] Main Riff
||: E | A | B | E :|| x4

[B] Verse
| E | A | C#m | B |
| E | A | B | B |

[C] Chorus
| A | B | E | C#m |
| A | B | E | E |

[D] Jam (E major / C# minor)
||: E | A | B | C#m :|| open

@structure A B C B C D C`,
  },

  // ─── MORE LED ZEPPELIN ──────────────────────────────────────────────────

  {
    id: 'whole-lotta-love',
    artist: 'Led Zeppelin',
    genre: 'rock',
    level: 'intermediate',
    text: `@title Whole Lotta Love
@key E
@tempo 90
@feel Heavy Blues Rock — iconic riff, theramin break

[A] Main Riff
||: E5 | E5 | E5 | E5 :|| x4

[B] Verse
| E5 | E5 | E5 | E5 |
| D5 | E5 | D5 | E5 |

[C] Pre-Chorus
| E5 | D5 | E5 | E5 |

[D] Theramin Break (free)
| E (free) | % | % | % |

[E] Solo (E minor pentatonic / E blues)
||: E5 | D5 | E5 | E5 :|| open

@structure A B C A B C D E A B C`,
    videos: [
      { title: 'Whole Lotta Love — Riff Guitar Lesson', channel: 'Marty Music', url: 'https://www.youtube.com/watch?v=HIdCiK7OczY' },
    ],
  },

  {
    id: 'kashmir',
    artist: 'Led Zeppelin',
    genre: 'rock',
    level: 'advanced',
    text: `@title Kashmir
@key D
@tempo 80
@feel Epic Eastern Rock — DADGAD tuning, orchestral

[A] Main Riff (DADGAD tuning)
||: D5 | D5 | D5 | D5 :|| x4

[B] Verse
| D5 | D5 | D5 | D5 |
| D5 | D5 | D5 | D5 |

[C] Orchestral Section
| G | A | Bm | Bm |
| G | A | D | D |

[D] Bridge
| Gm | Gm | D | D |
| Gm | Gm | A | A |

@structure A B C A B C D A B C A`,
    videos: [
      { title: 'Kashmir — Guitar Lesson', channel: 'Marty Music', url: 'https://www.youtube.com/watch?v=AKnb8VFiVnI' },
    ],
  },

  {
    id: 'rock-and-roll',
    artist: 'Led Zeppelin',
    genre: 'rock',
    level: 'intermediate',
    text: `@title Rock and Roll
@key A
@tempo 170
@feel Fast 12-Bar Rock — straight-ahead, full throttle

[A] Intro
| A | A | A | A |

[B] Verse (12-bar)
| A | A | A | A |
| D | D | A | A |
| E | D | A | E |

[C] Solo (A minor pentatonic)
| A | A | A | A |
| D | D | A | A |
| E | D | A | E |

@structure A B B C B B`,
    videos: [
      { title: 'Rock and Roll — Guitar Lesson', channel: 'Marty Music', url: 'https://www.youtube.com/watch?v=uQmFhRFtJQo' },
    ],
  },

  {
    id: 'immigrant-song',
    artist: 'Led Zeppelin',
    genre: 'rock',
    level: 'intermediate',
    text: `@title Immigrant Song
@key F#m
@tempo 112
@feel Viking Metal Proto — relentless riff, war cry intro

[A] Main Riff
||: F#m | F#m | A | A :|| x4

[B] Verse
| F#m | F#m | A | A |
| F#m | F#m | A | A |

[C] Break
| F#m | F#m | B | B |
| E | D | A | A |

@structure A B A B C A B`,
    videos: [
      { title: 'Immigrant Song — Guitar Lesson', channel: 'Marty Music', url: 'https://www.youtube.com/watch?v=H0dEX5xFp68' },
    ],
  },

  {
    id: 'ramble-on',
    artist: 'Led Zeppelin',
    genre: 'classic-rock',
    level: 'intermediate',
    text: `@title Ramble On
@key E
@tempo 132
@feel Folk-Rock Fingerpicking to Heavy Chorus

[A] Verse (fingerpicked)
||: E | E | A | E :|| x4

[B] Pre-Chorus
| C#m | C#m | F#m | F#m |
| A | A | B | B |

[C] Chorus (strummed, heavy)
| A | A | Am | Am |
| E | E | A | Am |

@structure A A B C A A B C`,
  },

  {
    id: 'over-the-hills',
    artist: 'Led Zeppelin',
    genre: 'classic-rock',
    level: 'intermediate',
    text: `@title Over the Hills and Far Away
@key D
@tempo 98
@feel Acoustic Intro to Electric Rock — dynamic range

[A] Intro (acoustic picked)
||: D | D | G/D | D :|| x2

[B] Verse (electric)
| G | D | A | G |
| D | A | G | A |

[C] Chorus
| C | G | D | D |
| C | G | D | D |

[D] Solo (D major pentatonic / D Mixolydian)
| G | D | A | G |
| G | D | A | A |

@structure A B C B C D B C`,
    videos: [
      { title: 'Over the Hills and Far Away — Guitar Lesson', channel: 'Marty Music', url: 'https://www.youtube.com/watch?v=mwUmqNJi-3E' },
    ],
  },

  {
    id: 'dazed-and-confused',
    artist: 'Led Zeppelin',
    genre: 'rock',
    level: 'advanced',
    text: `@title Dazed and Confused
@key E
@tempo 82
@feel Psychedelic Blues — descending chromatic bass, bow section

[A] Main Riff (chromatic descent)
| E | E | E | E |
| E | Eb | D | Db |

[B] Verse
| E | E | E | E |
| A | A | E | E |

[C] Middle Section
| A | A | E | E |
| B | A | E | E |

[D] Bow / Psychedelic Section (free)
||: E | E | E | E :|| open

[E] Fast Section
| E | D | E | D |
| A | G | E | E |

@structure A B A B C D E A B`,
  },

  {
    id: 'babe-im-gonna-leave-you',
    artist: 'Led Zeppelin',
    genre: 'classic-rock',
    level: 'intermediate',
    text: `@title Babe I'm Gonna Leave You
@key Am
@tempo 134
@feel Acoustic Ballad to Heavy Rock — extreme dynamics

[A] Verse (fingerpicked, descending bass)
| Am | Am/G | D7/F# | F |
| E7 | E7 | Am | Am |

[B] Build
| Am | Am | F | G |
| Am | Am | F | E7 |

[C] Heavy Section (strummed)
| Am | D | Am | D |
| F | E7 | Am | Am |

@structure A A B C A A B C`,
    videos: [
      { title: 'Babe Im Gonna Leave You — Guitar Lesson', channel: 'Marty Music', url: 'https://www.youtube.com/watch?v=nBGJbkqrNAE' },
    ],
  },

  {
    id: 'thank-you',
    artist: 'Led Zeppelin',
    genre: 'classic-rock',
    level: 'easy',
    text: `@title Thank You
@key D
@tempo 102
@feel Gentle Rock Ballad — organ-driven, simple and beautiful

[A] Verse
| D | C/D | G/D | D |
| D | C/D | G/D | D |

[B] Chorus
| G | A | Bm | A |
| G | F#m | Em | A |

[C] Bridge
| D | C | G | D |
| D | C | G | A |

@structure A B A B C A B`,
  },

  {
    id: 'no-quarter',
    artist: 'Led Zeppelin',
    genre: 'rock',
    level: 'advanced',
    text: `@title No Quarter
@key C#m
@tempo 60
@feel Dark Atmospheric Rock — slow, heavy, keyboard-driven

[A] Intro (atmospheric)
||: C#m | C#m | C#m | C#m :|| x4

[B] Verse
| C#m | E | C#m | E |
| A | A | C#m | C#m |

[C] Chorus
| F#m | C#m | E | B |
| F#m | C#m | A | A |

[D] Solo (C# minor / C# blues)
||: C#m | E | A | B :|| open

@structure A B C A B C D B C`,
  },

  // ─── NEIL YOUNG ─────────────────────────────────────────────────────────

  {
    id: 'heart-of-gold',
    artist: 'Neil Young',
    genre: 'folk',
    level: 'easy',
    text: `@title Heart of Gold
@key Em
@tempo 98
@feel Folk-Rock — harmonica intro, steady strum

[A] Intro
| Em | C | D | G |

[B] Verse
| Em | C | D | G |
| Em | C | D | G |
| Em | D | Em | Em |

[C] Chorus
| C | D | G | G |
| Em | Em | C | D |

@structure A B C B C`,
    videos: [
      { title: 'Heart of Gold — Guitar Lesson', channel: 'Marty Music', url: 'https://www.youtube.com/watch?v=7UXsYouLXGY' },
    ],
  },

  {
    id: 'old-man',
    artist: 'Neil Young',
    genre: 'folk',
    level: 'intermediate',
    text: `@title Old Man
@key D
@tempo 142
@feel Folk-Rock — banjo-style picking, drop D tuning option

[A] Intro / Riff
| Dm | D | F | C |
| Dm | D | F | C |

[B] Verse
| D | F | C | G |
| D | F | C | C |

[C] Chorus
| F | C | G | D |
| F | C | G | D |

@structure A B C B C A`,
    videos: [
      { title: 'Old Man — Guitar Lesson', channel: 'Justin Guitar', url: 'https://www.youtube.com/watch?v=K-BBXM5w1O0' },
    ],
  },

  // ─── TOM PETTY ──────────────────────────────────────────────────────────

  {
    id: 'free-fallin',
    artist: 'Tom Petty',
    genre: 'rock',
    level: 'easy',
    text: `@title Free Fallin'
@key F
@tempo 84
@feel Laid-Back Rock — Capo 3, D and Asus4 shapes

[A] Verse
||: D | Dsus4 | D | Asus4 :|| x4

[B] Chorus
||: D | Dsus4 | D | Asus4 :|| x4

@structure A A B A A B B`,
    videos: [
      { title: 'Free Fallin — Guitar Lesson', channel: 'Marty Music', url: 'https://www.youtube.com/watch?v=V0GELSp2Ihc' },
    ],
  },

  {
    id: 'runnin-down-a-dream',
    artist: 'Tom Petty',
    genre: 'rock',
    level: 'intermediate',
    text: `@title Runnin' Down a Dream
@key E
@tempo 170
@feel Driving Rock — palm muted verse, open chorus

[A] Intro Riff
||: E | E | E | E :|| x2

[B] Verse
| E | E | E | E |
| G | A | E | E |

[C] Chorus
| G | A | E | E |
| G | A | E | E |

[D] Solo (E minor pentatonic)
||: E | G | A | E :|| open

@structure A B C B C D B C`,
  },

  // ─── ALLMAN BROTHERS ────────────────────────────────────────────────────

  {
    id: 'midnight-rider',
    artist: 'The Allman Brothers Band',
    genre: 'rock',
    level: 'easy',
    text: `@title Midnight Rider
@key D
@tempo 108
@feel Southern Rock Groove — simple and soulful

[A] Verse
| D | D | D | D |
| Gm | Gm | D | D |

[B] Chorus
| Bb | C | D | D |
| Bb | C | D | D |

@structure A B A B A B`,
    videos: [
      { title: 'Midnight Rider — Guitar Lesson', channel: 'Marty Music', url: 'https://www.youtube.com/watch?v=f0-p3-i7mHs' },
    ],
  },

  {
    id: 'whipping-post',
    artist: 'The Allman Brothers Band',
    genre: 'rock',
    level: 'advanced',
    text: `@title Whipping Post
@key A
@tempo 102
@feel Epic Southern Blues-Rock — 11/8 time signature intro

[A] Intro Riff (11/8 feel: 3+3+3+2)
||: A | Bm | C :|| x4

[B] Verse
| A | A | D | D |
| A | A | E | E |

[C] Chorus
| F | G | A | A |
| F | G | A | A |

[D] Solo (A minor pentatonic / A blues)
||: A | D | E | A :|| open

@structure A B C B C D B C`,
    videos: [
      { title: 'Whipping Post — Guitar Lesson', channel: 'GuitarLessons365', url: 'https://www.youtube.com/watch?v=T-tXRfVTnsE' },
    ],
  },

  // ─── GRATEFUL DEAD ──────────────────────────────────────────────────────

  {
    id: 'friend-of-the-devil',
    artist: 'Grateful Dead',
    genre: 'folk',
    level: 'easy',
    text: `@title Friend of the Devil
@key G
@tempo 120
@feel Uptempo Folk — major key, walking bass feel

[A] Verse
| G | C | G | C |
| G | D | D | G |

[B] Chorus
| Am | Am | Em | Em |
| Am | Em | D | D |

@structure A B A B A B`,
    videos: [
      { title: 'Friend of the Devil — Guitar Lesson', channel: 'Marty Music', url: 'https://www.youtube.com/watch?v=zPHGz-AsCXk' },
    ],
  },

  {
    id: 'ripple',
    artist: 'Grateful Dead',
    genre: 'folk',
    level: 'easy',
    text: `@title Ripple
@key G
@tempo 100
@feel Gentle Folk — fingerpicking or light strum, peaceful

[A] Verse
| G | G | C | C |
| G | G | D | D |

[B] Chorus
| Am | D | G | C |
| Am | D | G | G |

[C] Bridge
| Am | G | C | G |
| Am | G | D | D |

@structure A B A B C A B`,
    videos: [
      { title: 'Ripple — Guitar Lesson', channel: 'Marty Music', url: 'https://www.youtube.com/watch?v=6FAYZoEBi9k' },
    ],
  },

  // ─── JOHN MAYER ─────────────────────────────────────────────────────────

  {
    id: 'gravity',
    artist: 'John Mayer',
    genre: 'blues',
    level: 'intermediate',
    text: `@title Gravity
@key G
@tempo 70
@feel Slow Blues-Pop — Hendrix-influenced, feel over speed

[A] Intro / Verse
| G | C | G | C |
| G | C | G | C |

[B] Chorus
| Am7 | D7 | G | Em |
| Am7 | D7 | G | G |

[C] Bridge
| Gm | Gm | C | C |
| Eb | D | D | D |

[D] Solo (G major / G minor pentatonic)
||: G | C | Am7 | D7 :|| open

@structure A B A B C D B`,
    videos: [
      { title: 'Gravity — Guitar Lesson', channel: 'Justin Guitar', url: 'https://www.youtube.com/watch?v=NZrDpqiovMo' },
    ],
  },

  // ─── CREAM ──────────────────────────────────────────────────────────────

  {
    id: 'sunshine-of-your-love',
    artist: 'Cream',
    genre: 'rock',
    level: 'intermediate',
    text: `@title Sunshine of Your Love
@key D
@tempo 114
@feel Psychedelic Blues-Rock — iconic riff, Clapton solo

[A] Intro / Riff
||: D5 | D5 | D5 | D5 :|| x2

[B] Verse
| D5 | D5 | D5 | D5 |
| G5 | G5 | D5 | D5 |

[C] Chorus
| A | C/G | G | A |
| A | C/G | G | A |

[D] Solo (D minor pentatonic / D blues)
||: D5 | G5 | A | D5 :|| open

@structure A B C B C D C`,
    videos: [
      { title: 'Sunshine of Your Love — Guitar Lesson', channel: 'Marty Music', url: 'https://www.youtube.com/watch?v=MsQ4MKHCyhI' },
    ],
  },

  // ─── FLEETWOOD MAC ──────────────────────────────────────────────────────

  {
    id: 'the-chain',
    artist: 'Fleetwood Mac',
    genre: 'rock',
    level: 'intermediate',
    text: `@title The Chain
@key Am
@tempo 152
@feel Rock — dynamic build, legendary bass outro

[A] Verse
| Am | Am | G | G |
| Am | Am | G | G |

[B] Pre-Chorus
| C | Am | G | G |
| C | F | Am | Am |

[C] Chorus
| Em | Am | Em | Am |
| C | Am | G | G |

[D] Bass Outro (iconic riff)
||: Am | Am | Am | Am :|| x4

@structure A B C A B C D`,
  },

  // ─── EAGLES ─────────────────────────────────────────────────────────────

  {
    id: 'take-it-easy',
    artist: 'Eagles',
    genre: 'classic-rock',
    level: 'easy',
    text: `@title Take It Easy
@key G
@tempo 138
@feel Country-Rock — open chords, feel-good

[A] Intro
| G | G | D | C |

[B] Verse
| G | G | D | C |
| G | G | Am | C |
| Em | D | C | G |

[C] Chorus
| Em | C | G | Am |
| C | G | D | G |

@structure A B C B C`,
    videos: [
      { title: 'Take It Easy — Guitar Lesson', channel: 'Marty Music', url: 'https://www.youtube.com/watch?v=SrO_BNldW2Y' },
    ],
  },

  // ─── BLACK SABBATH ──────────────────────────────────────────────────────

  {
    id: 'paranoid',
    artist: 'Black Sabbath',
    genre: 'rock',
    level: 'easy',
    text: `@title Paranoid
@key E
@tempo 164
@feel Fast Metal Riff — palm muted, power chords

[A] Main Riff
||: E5 | E5 | D5 | G5 / D5 :|| x2

[B] Verse
| E5 | E5 | D5 | G5 / D5 |
| E5 | E5 | D5 | G5 / D5 |

[C] Bridge
| B5 | E5 | B5 | E5 |
| B5 | D5 | E5 | E5 |

[D] Solo (E minor pentatonic)
||: E5 | D5 | G5 | E5 :|| open

@structure A B A B C D A B`,
    videos: [
      { title: 'Paranoid — Guitar Lesson', channel: 'Marty Music', url: 'https://www.youtube.com/watch?v=QjifTaC0smo' },
    ],
  },

  // ─── MORE HENDRIX ───────────────────────────────────────────────────────

  {
    id: 'voodoo-child-slight-return',
    artist: 'Jimi Hendrix',
    genre: 'blues',
    level: 'advanced',
    text: `@title Voodoo Child (Slight Return)
@key E
@tempo 88
@feel Heavy Psychedelic Blues — wah-wah, Hendrix chord (E7#9)

[A] Intro / Main Riff
||: E7#9 | E7#9 | E7#9 | E7#9 :|| x4

[B] Verse
| E7#9 | E7#9 | D | E |
| E7#9 | E7#9 | D | E |

[C] Turnaround
| G | F | E7#9 | E7#9 |

[D] Solo (E minor pentatonic / E blues)
||: E7#9 | D | E | E7#9 :|| open

@structure A B C A B C D B C`,
    videos: [
      { title: 'Voodoo Child — Guitar Lesson', channel: 'GuitarLessons365', url: 'https://www.youtube.com/watch?v=FdKJ_bB1qYA' },
    ],
  },

  // ─── MORE SRV ───────────────────────────────────────────────────────────

  {
    id: 'texas-flood',
    artist: 'Stevie Ray Vaughan',
    genre: 'blues',
    level: 'advanced',
    text: `@title Texas Flood
@key G
@tempo 60
@feel Slow Texas Blues — deep feel, heavy string bending

[A] 12-Bar Slow Blues
| G7 | G7 | G7 | G7 |
| C7 | C7 | G7 | G7 |
| D7 | C7 | G7 | D7 |

[B] Verse (same 12-bar)
| G7 | G7 | G7 | G7 |
| C7 | C7 | G7 | G7 |
| D7 | C7 | G7 | D7 |

[C] Solo (G minor pentatonic / G blues)
| G7 | G7 | G7 | G7 |
| C7 | C7 | G7 | G7 |
| D7 | C7 | G7 | G7 |

@structure A B A B C B B`,
    videos: [
      { title: 'Texas Flood — SRV Guitar Lesson', channel: 'GuitarLessons365', url: 'https://www.youtube.com/watch?v=b9AvF5j3pFw' },
    ],
  },

  // ─── DEREK & THE DOMINOS ────────────────────────────────────────────────

  {
    id: 'bell-bottom-blues',
    artist: 'Derek and the Dominos',
    genre: 'blues',
    level: 'intermediate',
    text: `@title Bell Bottom Blues
@key C
@tempo 72
@feel Slow Rock Ballad — Clapton's most emotional vocal

[A] Verse
| C | E7/B | Am | C/G |
| F | F | G | G |

[B] Pre-Chorus
| Am | Em/G | F | G |
| Am | Em/G | D | D |

[C] Chorus
| A | A | E | E |
| Dm | Dm | E7 | E7 |

@structure A B C A B C A`,
    videos: [
      { title: 'Bell Bottom Blues — Guitar Lesson', channel: 'Marty Music', url: 'https://www.youtube.com/watch?v=bqJUhJL-kds' },
    ],
  },
];
