export const CREATIVITY_NODES = [
  // ============================================================
  // TIER 1 — Foundation
  // ============================================================
  {
    id: 'create-pentatonic-improv',
    tree: 'creativity',
    tier: 1,
    name: 'Pentatonic Improv',
    description: 'Noodle with feel over a backing track using the pentatonic scale.',
    whyItMatters:
      'The pentatonic scale is your safety net — five notes that always sound good. Learning to improvise with them builds the bridge between playing other people\'s music and making your own.',
    prerequisites: [],
    exercises: [
      {
        name: 'One-String Storytelling',
        description:
          'Put on a slow blues backing track in A minor. Solo using only the high E string (frets 5, 8, 10, 12, 15). Focus on bends, vibrato, and rhythm — not speed. Record a 2-minute take.',
      },
      {
        name: 'Three-Note Jam',
        description:
          'Pick any three notes from the A minor pentatonic. Set a timer for 5 minutes and improvise using ONLY those three notes over a backing track. Discover how much music lives in rhythm and phrasing alone.',
      },
      {
        name: 'Eyes-Closed Improv',
        description:
          'Play a pentatonic solo with your eyes closed for 3 minutes. Let your ear guide your fingers instead of visual patterns. Notice which phrases you gravitate toward — those are the seeds of your style.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [
      { title: 'How to Improvise with the Pentatonic Scale', channel: 'Justin Guitar', url: 'https://www.youtube.com/watch?v=4s7B6OyLCvw' },
      { title: 'Pentatonic Scale — Sound Like a Pro Immediately', channel: 'Paul Davids', url: 'https://www.youtube.com/watch?v=5ywxkPYKDyU' },
    ],
  },
  {
    id: 'create-write-chord-progression',
    tree: 'creativity',
    tier: 1,
    name: 'Write a Chord Progression',
    description: 'Pick 4 chords that sound good together and own them.',
    whyItMatters:
      'Every song you love started as a chord progression somebody chose on purpose. Learning to craft your own frees you from always playing covers and gives you something personal to build on.',
    prerequisites: [],
    exercises: [
      {
        name: 'The Four-Chord Discovery',
        description:
          'Start with any open chord you like. Play random chords after it until you find one that feels right. Repeat until you have four. Strum the loop for 5 minutes and let it sink into your muscle memory.',
      },
      {
        name: 'Steal and Twist',
        description:
          'Take a chord progression from a song you love. Change one chord to something unexpected — swap a major for a minor, move a chord up a fret. Play both versions back to back and notice how the vibe shifts.',
      },
      {
        name: 'Mood Board Progressions',
        description:
          'Write three 4-chord progressions: one that sounds happy, one that sounds sad, one that sounds mysterious. Label them and keep them in a notebook — this is the start of your personal chord library.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [
      { title: 'How to Write a Chord Progression', channel: 'Signals Music Studio', url: 'https://www.youtube.com/watch?v=RYvtNFZlDAs' },
    ],
  },
  {
    id: 'create-record-yourself',
    tree: 'creativity',
    tier: 1,
    name: 'Record Yourself',
    description: 'Record your playing and listen back critically.',
    whyItMatters:
      'You can\'t hear yourself clearly while you\'re playing — your brain is too busy with motor tasks. Recording reveals timing issues, tone choices, and happy accidents you\'d otherwise miss. It\'s the fastest feedback loop in music.',
    prerequisites: [],
    exercises: [
      {
        name: 'Phone Demo Session',
        description:
          'Record yourself playing something you know well using your phone. Listen back with headphones. Write down one thing that sounds better than expected and one thing to fix. Do this weekly.',
      },
      {
        name: 'Before/After Snapshot',
        description:
          'Record yourself playing a piece you\'re currently learning. Practice it for 20 minutes, then record again. Compare the two takes — hearing your own improvement in real time is powerful motivation.',
      },
      {
        name: 'The Honest Playback',
        description:
          'Record a 3-minute freestyle jam. Wait 24 hours, then listen back as if a stranger sent it to you. Rate your timing, tone, and feel on a 1-10 scale. No ego — just data.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'create-dynamics',
    tree: 'creativity',
    tier: 1,
    name: 'Playing with Dynamics',
    description: 'Control loud and soft as an expressive tool.',
    whyItMatters:
      'Dynamics are what separate a guitarist who plays notes from a guitarist who plays music. A whisper before a scream hits harder than screaming the whole time. This is how you make people feel something.',
    prerequisites: [],
    exercises: [
      {
        name: 'Whisper to Roar',
        description:
          'Play a simple chord progression and gradually increase your strumming intensity over 16 bars from barely audible to full power. Then reverse it. Practice the smooth ramp — no sudden jumps.',
      },
      {
        name: 'Dynamic Contrast Solo',
        description:
          'Over a backing track, alternate between 4 bars of soft, delicate playing and 4 bars of aggressive, loud playing. Make the contrast dramatic. Feel how the energy shifts.',
      },
      {
        name: 'Volume Knob Off',
        description:
          'Play an entire song or progression controlling dynamics purely with your picking hand — no volume knob, no pedals. Practice ghost notes (barely touching the strings) mixed with full attacks.',
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
    id: 'create-call-response',
    tree: 'creativity',
    tier: 2,
    name: 'Call and Response Soloing',
    description: 'Play a phrase, then answer it — like a musical conversation.',
    whyItMatters:
      'Call and response is the oldest musical structure on earth. It gives your solos a natural, vocal quality and prevents the "noodling in circles" trap. If your solo sounds like a monologue, this turns it into a dialogue.',
    prerequisites: ['create-pentatonic-improv'],
    exercises: [
      {
        name: 'Question and Answer',
        description:
          'Over a 12-bar blues backing track, play a 2-bar phrase that ends on a tension note (the "question"), then answer it with a 2-bar phrase that resolves. Repeat with different questions. Record and listen for the conversational flow.',
      },
      {
        name: 'Copy the Singer',
        description:
          'Play along with a vocal track you love. After each vocal line, immediately play a guitar phrase that "responds" to what the singer just said. Match their energy and emotion, not their exact notes.',
      },
      {
        name: 'Two-Position Dialogue',
        description:
          'Play your "call" phrases in one pentatonic position and your "response" phrases in a different position on the neck. This forces melodic variety and breaks you out of box-pattern habits.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'create-writing-melody',
    tree: 'creativity',
    tier: 2,
    name: 'Writing a Melody',
    description: 'Craft a vocal-like melody over a chord progression.',
    whyItMatters:
      'A great melody is the thing people hum in the shower. It\'s what makes a song stick. Learning to write melodies transforms you from a rhythm player or soloist into someone who can actually write songs people remember.',
    prerequisites: ['create-write-chord-progression'],
    exercises: [
      {
        name: 'Sing First, Play Second',
        description:
          'Loop one of your chord progressions and hum or sing a melody over it — don\'t touch the guitar yet. Once you have something you like, find those notes on the fretboard. Melodies born from your voice are more natural than ones born from finger patterns.',
      },
      {
        name: 'The 5-Note Melody',
        description:
          'Write a melody using only 5 different notes. Repetition and rhythm matter more than note variety. Aim for something a non-musician could sing back after hearing it twice.',
      },
      {
        name: 'Melody Variation Chain',
        description:
          'Write a simple 4-bar melody. Now create three variations: change the rhythm, change 2 notes, and shift the starting note. You\'ve just written a verse, pre-chorus, and chorus hook from one idea.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'create-song-structure',
    tree: 'creativity',
    tier: 2,
    name: 'Song Structure',
    description: 'Understand verse, chorus, bridge, and how songs are built.',
    whyItMatters:
      'A great riff without structure is a cool moment. A great riff inside a song structure is something people want to hear again. Understanding form turns musical ideas into finished pieces.',
    prerequisites: ['create-write-chord-progression'],
    exercises: [
      {
        name: 'Song Mapping',
        description:
          'Pick 3 songs you love. Listen and map out their sections (intro, verse, chorus, bridge, outro) on paper with timestamps. Notice patterns — most songs share surprisingly similar blueprints.',
      },
      {
        name: 'A-B-A Sketch',
        description:
          'Write a simple song using just two sections: an A section (verse) and a B section (chorus) with different chord progressions. Arrange them A-B-A-B and play through the whole thing. Congratulations — that\'s a song.',
      },
      {
        name: 'The Bridge Challenge',
        description:
          'Take your A-B sketch and add a C section (bridge) that contrasts both — different chords, different rhythm, different energy. Insert it after the second chorus. Notice how it creates tension that makes the final chorus feel like a release.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [
      { title: 'Song Structure Explained — Verse, Chorus, Bridge', channel: 'Signals Music Studio', url: 'https://www.youtube.com/watch?v=1xhz4BdCEzk' },
    ],
  },
  {
    id: 'create-rhythm-creativity',
    tree: 'creativity',
    tier: 2,
    name: 'Rhythm Guitar Creativity',
    description: 'Move beyond basic strumming into rhythmic expression.',
    whyItMatters:
      'Most of your time as a guitarist will be spent on rhythm, not soloing. Creative rhythm playing is what makes people want to play with you. It\'s the difference between strumming along and actually grooving.',
    prerequisites: ['create-dynamics'],
    exercises: [
      {
        name: 'Muted Funk Groove',
        description:
          'Take any chord and add percussive muted strums (chuck the strings with your fretting hand) between the chord hits. Start with a simple pattern, then vary it. Put on a funk or R&B backing track and lock in with the groove.',
      },
      {
        name: 'Syncopation Flip',
        description:
          'Take a song you normally strum on the downbeats. Now shift the accents to the "and" beats (the offbeats). Play along with the original and feel how the groove transforms from stiff to funky.',
      },
      {
        name: 'Arpeggio Rhythm',
        description:
          'Instead of strumming a chord progression, fingerpick or hybrid-pick it as arpeggios. Vary the picking pattern every 4 bars. Notice how the same chords tell a completely different story when you break them apart.',
      },
      {
        name: 'Rest as Rhythm',
        description:
          'Play a strumming pattern but replace one strum per bar with a deliberate stop — a gap of silence. Move the gap to different beats each time. The silence becomes the most interesting part of the groove.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },

  {
    id: 'create-riff-writing',
    tree: 'creativity',
    tier: 2,
    name: 'Writing a Riff',
    description: 'Compose a short, repeating instrumental hook — 2 to 4 bars — that stands on its own.',
    whyItMatters:
      'Riffs are the atomic unit of rock, blues, and funk. A great riff is more valuable than a full song with a forgettable hook. Writing riffs trains your ear for rhythm, space, and melodic repetition in their most concentrated form.',
    prerequisites: ['create-record-yourself', 'create-dynamics'],
    exercises: [
      {
        name: 'Two-Bar Loop Riff',
        description:
          'Set a looper pedal or use your phone to record. Play a 2-bar rhythmic idea on guitar. Loop it. Now listen and decide: does it groove? Does it make you want to move? If yes, write it down. If no, tweak one element — the rhythm, the starting note, the space — until it does.',
      },
      {
        name: 'Riff from a Rhythm',
        description:
          'Tap a rhythm on your knee first — no guitar. When you have something you like, bring it to the guitar and find notes that fit the rhythm. Starting from rhythm instead of notes produces tighter, more physical riffs.',
      },
      {
        name: 'Three-Note Riff Challenge',
        description:
          'Write a riff using exactly three different pitches. No more. "Smoke on the Water," "Day Tripper," and "Iron Man" all use three notes or fewer as their core. Simplicity in pitch forces creativity in rhythm and feel.',
      },
      {
        name: 'Riff Variation Drill',
        description:
          'Take a riff you wrote and create two variations: one with a different ending note (change the resolution), and one with a different rhythm (same pitches, different timing). You now have a verse riff and a chorus riff from the same idea.',
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
    id: 'create-motivic-development',
    tree: 'creativity',
    tier: 3,
    name: 'Motivic Development',
    description: 'Build an entire solo from a tiny 3-note idea.',
    whyItMatters:
      'The best solos aren\'t random flurries of notes — they develop a theme. Hendrix, Gilmour, B.B. King all built solos from small motifs. This skill turns your solos into stories with a beginning, middle, and end.',
    prerequisites: ['create-call-response'],
    exercises: [
      {
        name: 'Three-Note Solo',
        description:
          'Choose exactly 3 notes. Solo for 2 minutes over a backing track using only those notes. Develop the motif by changing rhythm, octave, dynamics, and articulation (hammer-ons, bends, slides). Record it — you\'ll be surprised how complete it sounds.',
      },
      {
        name: 'The Motif Journey',
        description:
          'Start with a short 4-note phrase. Over a 12-bar blues, play the motif in bar 1, then slightly alter it each time it appears — move one note, change the rhythm, add a bend. By bar 12, the motif should have evolved but still be recognizable.',
      },
      {
        name: 'Steal a Motif, Build a Solo',
        description:
          'Take the first 3-4 notes of any famous melody (a movie theme, a riff, anything). Use it as your motif and develop a full solo around it over a backing track. The source material becomes unrecognizable — now it\'s yours.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [
      { title: 'Motivic Development — How Great Solos Are Built', channel: 'Paul Davids', url: 'https://www.youtube.com/watch?v=8bGTJFJGbWE' },
    ],
  },
  {
    id: 'create-different-feels',
    tree: 'creativity',
    tier: 3,
    name: 'Writing in Different Feels',
    description: 'Compose in shuffle, swing, straight, and 6/8 feels.',
    whyItMatters:
      'Feel is the invisible ingredient that defines genre. The same chord progression in straight 8ths sounds like rock, in shuffle it\'s blues, in 6/8 it\'s a ballad. Mastering different feels multiplies your creative range overnight.',
    prerequisites: ['create-song-structure'],
    exercises: [
      {
        name: 'One Progression, Four Feels',
        description:
          'Take a 4-chord progression and play it four ways: straight rock, swing/shuffle, 6/8 ballad, and a Latin-style bossa feel. Record all four. Pick the one that sounds best and develop it into a full section.',
      },
      {
        name: 'Shuffle Songwriting',
        description:
          'Write a short piece entirely in a shuffle feel. Think Stevie Ray Vaughan, think early Fleetwood Mac. The triplet swing should infect every part — strumming, fills, and any melodic lines.',
      },
      {
        name: '6/8 Slow Burn',
        description:
          'Write a 6/8 ballad — count "ONE two three FOUR five six." Use arpeggiated chords and let notes ring together. Think of it as writing for a rainy night. Record a full take with a verse and chorus.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'create-solo-arrangement',
    tree: 'creativity',
    tier: 3,
    name: 'Solo Guitar Arrangement',
    description: 'Arrange a complete song for one guitar — bass, chords, and melody.',
    whyItMatters:
      'When you can play bass, chords, and melody simultaneously, you don\'t need a band to sound complete. This deepens your understanding of harmony and voice leading more than any theory book ever could.',
    prerequisites: ['create-writing-melody'],
    exercises: [
      {
        name: 'Bass + Chord Sketch',
        description:
          'Take a simple song (Happy Birthday, a folk tune, anything). Play the bass notes with your thumb on beats 1 and 3, and strum partial chords on beats 2 and 4. Get the foundation locked in before adding melody.',
      },
      {
        name: 'Add the Melody',
        description:
          'Once your bass + chord arrangement is solid, add the melody on the top two strings. It won\'t be perfect — simplify where you need to. The goal is to suggest all three voices, not play them perfectly.',
      },
      {
        name: 'Fingerstyle Cover',
        description:
          'Arrange a song you love for solo fingerstyle guitar. Start with something simple — a Beatles tune, a folk song, a pop ballad. Record a polished take and share it with someone.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'create-tension-release',
    tree: 'creativity',
    tier: 3,
    name: 'Building Tension and Release',
    description: 'Deliberately create and resolve musical tension through note choice, rhythm, and dynamics.',
    whyItMatters:
      'Tension and release is what makes music feel inevitable — like the resolution was exactly what the listener needed. Without tension, music is pleasant but forgettable. Without release, it is exhausting. Learning to control both is what makes solos feel like stories.',
    prerequisites: ['create-motivic-development', 'create-space-silence'],
    exercises: [
      {
        name: 'Dissonance to Consonance',
        description:
          'Over a G major chord, bend the 3rd (B) up a half step to C (a dissonant b4th). Hold the bend. Let the tension build. Then release it back to B and let the chord ring. The release feels ten times more satisfying after the tension. Practice this setup/payoff structure as a foundational phrase.',
      },
      {
        name: 'Rhythmic Tension with Silence',
        description:
          'Over a steady 4/4 backing track, play short bursts of fast notes and then drop into complete silence for 2 full bars. The silence after speed creates enormous anticipation. Practice controlling exactly when you drop out and when you re-enter to maximize impact.',
      },
      {
        name: 'Melodic Climb and Peak',
        description:
          'Write a 12-bar solo that peaks at bar 9 (the highest note) and descends into the final 3 bars. The climb creates tension; the peak and descent provide release. Record it and listen to whether the emotional arc feels natural or forced.',
      },
      {
        name: 'Tension Map',
        description:
          'Listen to "Comfortably Numb" by Pink Floyd (the second solo) and draw a tension graph — a line that goes up when tension increases and down when it releases. Mark the exact moments: a held bend, an ascending run, a sustained note, a resolution. Then play your own solo aiming for the same arc.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'create-space-silence',
    tree: 'creativity',
    tier: 3,
    name: 'Using Space and Silence',
    description: 'Make the notes you don\'t play as powerful as the ones you do.',
    whyItMatters:
      'Miles Davis said "It\'s not the notes you play, it\'s the notes you don\'t play." Space gives listeners time to feel what just happened. Without it, even great playing becomes wallpaper.',
    prerequisites: ['create-call-response', 'create-dynamics'],
    exercises: [
      {
        name: 'The Half-Solo',
        description:
          'Solo over a 12-bar blues, but rest for half of every 4-bar phrase. Play for 2 bars, rest for 2 bars. Make your playing so intentional that the silence feels charged, not empty.',
      },
      {
        name: 'One Note per Bar',
        description:
          'Over a slow backing track, play exactly one note per bar for 12 bars. Choose each note carefully — make every single one count. Vary the timing within the bar (beat 1, beat 3, the "and" of 2). Record it and notice how much tension the space creates.',
      },
      {
        name: 'Breathe Like a Singer',
        description:
          'Play a solo and physically breathe between phrases, just like a singer would. If you run out of breath, your phrase was too long. This naturally introduces musical space and makes your phrasing more human.',
      },
      {
        name: 'Dramatic Pause Solo',
        description:
          'Build a solo to a climactic bend or high note, then stop completely for 2 full bars. Let the silence hang. Then re-enter softly. Practice this "cliff edge" moment until it feels natural and devastating.',
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
    id: 'create-style-blending',
    tree: 'creativity',
    tier: 4,
    name: 'Style Blending',
    description: 'Intentionally mix two or more genres into something new.',
    whyItMatters:
      'Every interesting guitarist lives at the intersection of genres. Hendrix mixed blues and psychedelia. Mark Knopfler mixed country and rock. Your unique blend of influences IS your style — learn to combine them on purpose.',
    prerequisites: ['create-different-feels'],
    exercises: [
      {
        name: 'Genre Mashup Jam',
        description:
          'Pick two genres you love (blues + funk, country + jazz, rock + bossa nova). Write a 16-bar piece that starts in one genre and transitions into the other. Find the common ground where they overlap naturally.',
      },
      {
        name: 'Foreign Technique Transplant',
        description:
          'Take a technique from a genre you don\'t normally play (jazz chord voicings, country chicken pickin\', flamenco rasgueado) and apply it to a song in your home genre. Record the result — the "wrong" technique often sounds fresh.',
      },
      {
        name: 'The Influence Blend Solo',
        description:
          'Solo over a standard 12-bar blues. For the first 4 bars, channel one guitarist you admire. For the next 4, channel a completely different one. For the final 4, blend both approaches. That blend is a piece of your voice.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'create-composing-modes',
    tree: 'creativity',
    tier: 4,
    name: 'Composing with Modes',
    description: 'Use modal sounds to create specific colors and moods in your writing.',
    whyItMatters:
      'Modes give you a palette beyond just "major = happy, minor = sad." Dorian sounds soulful, Mixolydian sounds triumphant, Lydian sounds dreamy. Composing with modes is how you write music that sounds like nowhere else.',
    prerequisites: ['create-motivic-development'],
    exercises: [
      {
        name: 'Modal Mood Pieces',
        description:
          'Write a short 8-bar piece in Dorian (minor with a raised 6th) and another in Mixolydian (major with a flat 7th). Lean into the characteristic note of each mode — that\'s where the flavor lives. Record both.',
      },
      {
        name: 'Lydian Dreamscape',
        description:
          'Write an atmospheric piece in Lydian mode (major scale with a raised 4th). Use open strings and let notes ring. The raised 4th creates a floating, otherworldly quality — perfect for intros and interludes. Think "Flying in a Blue Dream" by Satriani.',
      },
      {
        name: 'Modal Interchange Composition',
        description:
          'Write a piece that shifts between two modes over the same root note — for example, A Dorian for the verse and A Mixolydian for the chorus. The root stays the same but the color changes. This is how Radiohead and Steely Dan create harmonic interest.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [
      { title: 'How to Compose with Modes — Practical Guitar Songwriting', channel: 'Signals Music Studio', url: 'https://www.youtube.com/watch?v=RlNqFHIRFck' },
    ],
  },
  {
    id: 'create-loop-pedal-composition',
    tree: 'creativity',
    tier: 4,
    name: 'Loop Pedal Composition',
    description: 'Use a loop pedal (or looper app) to build full multi-layer compositions in real time — one layer at a time.',
    whyItMatters:
      'A looper turns you into a one-person band and forces you to think compositionally in real time. You have to commit to each layer before you hear the full picture. It is the most honest test of whether your musical ideas actually work together.',
    prerequisites: ['create-rhythm-creativity', 'create-motivic-development'],
    exercises: [
      {
        name: 'Three-Layer Foundation',
        description:
          'Build a loop in three layers: first a bass riff (low strings, steady rhythm), then a chord layer (rhythm guitar, middle strings), then a melody or lead layer on top. Each layer must lock in perfectly before adding the next. Record the final result and listen for balance.',
      },
      {
        name: 'Rhythmic Offset Layers',
        description:
          'Create a loop where two layers are rhythmically offset — not both hitting on the downbeat. Try a bass line on beats 1 and 3, and a percussive strum on beats 2 and 4. The interlock between layers is what makes a loop feel like a groove instead of noise.',
      },
      {
        name: 'Build and Strip',
        description:
          'Build a 4-layer loop. Then unmute layers one by one to create a breakdown, and bring them back in for a rebuild. This structure — full band, strip to one, build back — is the backbone of electronic music and works just as well on guitar.',
      },
      {
        name: 'Live Composition Set',
        description:
          'Set a 5-minute timer and compose a complete piece using only a looper — no preparation, no do-overs. Start with nothing, build to a full arrangement, strip it back, end. Record it. Do this weekly and compare recordings over time. Your instincts will sharpen rapidly.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'create-writing-multi-instrument',
    tree: 'creativity',
    tier: 4,
    name: 'Writing for Multiple Instruments',
    description: 'Compose parts for guitar, bass, drums, and more — thinking beyond your instrument.',
    whyItMatters:
      'If you only write guitar parts, you\'ll always sound like a guitarist noodling. Thinking about how bass, drums, keys, and vocals interact makes you a songwriter and arranger, not just a player. This is how home recordings start to sound like records.',
    prerequisites: ['create-solo-arrangement'],
    exercises: [
      {
        name: 'Guitar + Bass Duet',
        description:
          'Write a guitar part and then write a bass line that supports it — not just root notes, but a bass line with its own rhythm and movement. Record both parts (use a lower octave for bass). Listen to how they interlock.',
      },
      {
        name: 'Full Band Sketch',
        description:
          'Write a song section and hum/describe what every instrument should do: drums (kick and snare pattern), bass (rhythm and notes), rhythm guitar, lead guitar, and vocals. Even if you can\'t play them all, thinking about them changes how you write your guitar part.',
      },
      {
        name: 'Layer Recording',
        description:
          'Record a song in layers: rhythm guitar first, then add a bass line, then a lead part, then a second rhythm guitar with a different voicing. Use your phone or a free DAW. Hearing your parts stack up reveals what\'s missing and what\'s cluttered.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'create-lick-vocabulary',
    tree: 'creativity',
    tier: 4,
    name: 'Personal Lick Vocabulary',
    description: 'Build a library of signature phrases that are unmistakably yours.',
    whyItMatters:
      'Every great player has go-to phrases — licks that feel like home. B.B. King had his vibrato-drenched bends, Angus Young has his rapid pentatonic runs. Your personal vocabulary is what people recognize when they hear you play.',
    prerequisites: ['create-motivic-development', 'create-style-blending'],
    exercises: [
      {
        name: 'Lick Journal',
        description:
          'Over the next week, every time you stumble onto a phrase you love while jamming, stop and record it immediately. At the end of the week, pick your 5 favorites. Transcribe them (tab or notation) into a journal. These are YOUR licks now.',
      },
      {
        name: 'Lick Transformation',
        description:
          'Take a lick you stole from a favorite guitarist. Change the rhythm. Shift it to a different scale position. Add a bend where there wasn\'t one. Play it in a different genre context. After 4-5 transformations, it\'s no longer theirs — it\'s yours.',
      },
      {
        name: 'Vocabulary Improv',
        description:
          'Put on a backing track and solo using only licks from your personal journal. String them together, connect them with transitions. This is how licks become language — not isolated tricks, but a fluent musical vocabulary.',
      },
      {
        name: 'Signature Lick Drill',
        description:
          'Pick your single best lick. Practice inserting it into solos in 5 different keys and at 3 different tempos. A signature lick should work anywhere, anytime — like a catchphrase you can drop into any conversation.',
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
    id: 'create-personal-voice',
    tree: 'creativity',
    tier: 5,
    name: 'Identifiable Personal Voice',
    description: 'Develop a sound so distinct that people recognize you within a few notes.',
    whyItMatters:
      'This is the summit. Technical skill gets you in the door, but a personal voice is what makes people seek out YOUR music specifically. It\'s the sum of every choice you make — tone, phrasing, note selection, rhythm, dynamics — filtered through who you are.',
    prerequisites: ['create-lick-vocabulary', 'create-style-blending'],
    exercises: [
      {
        name: 'The Blindfold Test',
        description:
          'Record yourself playing 3 different genres (blues, rock, jazz — whatever you play). Give the recordings to a friend without labels. Ask if they can tell it\'s the same player. If yes, your voice is emerging. If not, identify what changes too much between styles.',
      },
      {
        name: 'Constraint Reveals Identity',
        description:
          'Solo over a backing track with severe constraints: only one string, only 4 frets, or only downstrokes. When technique is limited, personality fills the gap. Record these constrained solos — the patterns that emerge ARE your voice.',
      },
      {
        name: 'Influence Audit',
        description:
          'List your top 5 guitar influences. Record yourself playing in the style of each one. Then record yourself playing "as yourself." Listen to all 6 recordings. Your personal voice is the common thread that runs through all of them, plus the things you do that none of them do.',
      },
      {
        name: 'Voice Statement',
        description:
          'Compose a 2-minute solo guitar piece that represents YOU — no backing track, no covers, no intentional imitation. Play it for someone and ask them to describe it in 3 words. Those words are the beginning of your artistic identity.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'create-complex-composition',
    tree: 'creativity',
    tier: 5,
    name: 'Complex Composition',
    description: 'Compose with odd meters, key changes, and through-composed forms.',
    whyItMatters:
      'Once you can write a solid verse-chorus song, the next frontier is breaking the rules on purpose. Odd meters create tension, key changes create lift, through-composition creates a journey. This is where craft meets art.',
    prerequisites: ['create-composing-modes', 'create-writing-multi-instrument'],
    exercises: [
      {
        name: 'Odd Meter Riff',
        description:
          'Write a riff in 7/4 or 5/4 time. Count it out loud until it feels natural, then loop it until it grooves. Add a contrasting section in 4/4 and transition between them. The contrast makes the odd meter feel intentional, not accidental.',
      },
      {
        name: 'The Key Change Bridge',
        description:
          'Write a verse and chorus in one key. Write a bridge that modulates to a new key (try going up a half step or to the relative minor). Return to the original key for the final chorus. Practice making the transitions smooth — a good key change should feel like a gust of wind.',
      },
      {
        name: 'Through-Composed Journey',
        description:
          'Write a 3-5 minute piece where no section repeats exactly. Every part evolves into the next — A flows into B flows into C flows into D. Think of it as a short film in music. Map it out before you play: what\'s the emotional arc?',
      },
      {
        name: 'Polyrhythm Composition',
        description:
          'Write a piece where the rhythm guitar plays in 3 and the lead plays in 4 (or vice versa). They\'ll line up every 12 beats. It\'s disorienting at first and deeply satisfying when it clicks. Start slow — this is advanced, and it should be fun, not frustrating.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'create-spontaneous-arrangement',
    tree: 'creativity',
    tier: 5,
    name: 'Spontaneous Arrangement',
    description: 'Hear a song and arrange it on the fly for solo guitar in real time.',
    whyItMatters:
      'This is the ultimate party trick and the ultimate musical skill. Someone hums a tune, you play it back as a full arrangement. It combines ear training, chord knowledge, melody skills, and arrangement ability into one seamless, real-time creative act.',
    prerequisites: ['create-solo-arrangement', 'create-personal-voice'],
    exercises: [
      {
        name: 'Radio Roulette',
        description:
          'Put on a playlist on shuffle. When a song comes on, immediately start figuring out the chords and melody by ear. Within the first chorus, you should have a rough arrangement going. Don\'t worry about perfection — speed and instinct are the muscles here.',
      },
      {
        name: 'Request Night Simulation',
        description:
          'Have a friend (or a random song generator) give you song titles. You have 60 seconds to recall/figure out the tune and start playing a solo guitar version. Practice recovering when you hit wrong notes — the show doesn\'t stop.',
      },
      {
        name: 'Campfire Setlist',
        description:
          'Build a 30-minute setlist of 8-10 songs you can play as solo guitar arrangements from memory. Practice transitioning between them smoothly — the end of one song flows into the beginning of the next. This is a real-world, giggable skill.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'create-teaching-musical-ideas',
    tree: 'creativity',
    tier: 5,
    name: 'Teaching Musical Ideas',
    description: 'Explain and transmit your musical concepts clearly to other players.',
    whyItMatters:
      'Teaching forces you to understand what you know at a deeper level. If you can\'t explain why a lick works or how you build a solo, you don\'t fully understand it yet. Teaching also builds community — and every great musician was shaped by a teacher.',
    prerequisites: ['create-personal-voice', 'create-complex-composition'],
    exercises: [
      {
        name: 'Teach a Concept in 5 Minutes',
        description:
          'Pick a musical concept you understand well (call and response, motivic development, dynamics). Record a 5-minute video lesson teaching it to an imaginary beginner. Watch it back — is it clear? Would a beginner actually learn something? Revise and re-record.',
      },
      {
        name: 'Transcribe Your Own Solo',
        description:
          'Record an improvised solo you\'re proud of. Transcribe it note for note (tab or notation). Analyze it: where did you use space? Where did you develop a motif? Where did you lean on your lick vocabulary? Write annotations explaining your choices.',
      },
      {
        name: 'Jam Session Conductor',
        description:
          'In your next jam session (even if it\'s just with one other person), take a turn as musical director. Suggest a key, a feel, and a structure. Guide the other player(s) through dynamics — signal when to get loud, when to drop out, when to build. Leading a jam is teaching in real time.',
      },
      {
        name: 'Write a Practice Routine for Someone Else',
        description:
          'Think of a guitarist you know (any level). Design a 30-minute practice routine tailored to their goals and skill level. Include specific exercises with clear instructions. If it\'s good enough to hand to them and walk away, you\'ve proven you understand the material deeply.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
];
