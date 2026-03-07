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
];
