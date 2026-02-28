export const GUITARISTS = [
  {
    id: 'rick-mitarotonda',
    name: 'Rick Mitarotonda',
    band: 'Goose',
    genre: ['jam band', 'psychedelic rock', 'funk'],
    description: 'Rick Mitarotonda is the guitarist and vocalist of Goose, known for extended improvisational jams that blend psychedelic textures with melodic sensibility. His playing combines modal exploration with modern effects-driven soundscapes, creating hypnotic, layered performances that build and release tension over long arcs.',
    signatureScales: ['Dorian', 'Mixolydian', 'Lydian', 'Whole Tone'],
    keyTechniques: [
      {
        name: 'Looping/Layering',
        description: 'Building textural landscapes by stacking loops in real-time, creating one-man-orchestra moments during live jams.',
      },
      {
        name: 'Volume Swell',
        description: 'Using the volume knob or pedal to fade notes in, removing the pick attack for violin-like, ambient pad textures.',
      },
      {
        name: 'Delay-Based Phrasing',
        description: 'Playing rhythmic figures that interlock with delay repeats, creating polyrhythmic patterns from simple phrases.',
      },
      {
        name: 'Tension and Release',
        description: 'Masterful control of jam dynamics — building dissonance and energy before resolving into euphoric peaks.',
      },
      {
        name: 'Modal Pivoting',
        description: 'Shifting between modes mid-solo (e.g., Dorian to Lydian) to change the emotional color without changing key.',
      },
      {
        name: 'Pedal Steel-Influenced Bends',
        description: 'Slow, behind-the-nut or multi-string bends that emulate pedal steel guitar phrasing within a rock context.',
      },
    ],
    signatureSongs: [
      {
        name: 'Tumble',
        reason: 'Showcases his looping and layering technique with extended jam sections that build from minimal motifs into full sonic landscapes.',
      },
      {
        name: 'Dripfield',
        reason: 'Features modal pivoting between Dorian and Lydian over a driving groove, with delay-based phrasing creating hypnotic patterns.',
      },
      {
        name: 'Arcadia',
        reason: 'Demonstrates tension and release mastery — long builds that resolve into triumphant melodic peaks.',
      },
      {
        name: 'Hot Tea',
        reason: 'Volume swell work and ambient textures layered over rhythmic foundations, showing his textural approach.',
      },
      {
        name: 'Empress of the Universe',
        reason: 'Epic jam vehicle combining all his techniques — loops, modal exploration, delay phrasing, and dynamic builds.',
      },
    ],
    practiceApproach: [
      {
        name: 'Dorian Modal Improv',
        description: 'Play over a Dm7 vamp. Stay in D Dorian for 5 minutes, focusing on the natural 6th (B note) as a color tone. Record yourself and listen back.',
      },
      {
        name: 'Delay Rhythm Exercise',
        description: 'Set a dotted-eighth delay at 120 BPM. Play quarter notes and let the delay fill in the gaps. Practice until your picking and the delay repeats create a seamless 16th-note pattern.',
      },
      {
        name: 'Modal Pivot Drill',
        description: 'Over a static chord (e.g., G7), play 4 bars of Mixolydian, then pivot to Lydian Dominant for 4 bars. Feel the shift from earthy to ethereal. Repeat until the pivot feels natural.',
      },
      {
        name: 'Volume Swell Pads',
        description: 'Roll your volume knob to zero, pick a chord, then slowly roll up. Practice creating smooth, attack-free swells. Layer multiple swells with a looper to build ambient textures.',
      },
      {
        name: 'Loop Station Composition',
        description: 'Build a three-layer loop: Layer 1 = chord progression, Layer 2 = bass line, Layer 3 = melodic motif. Solo over the top using Whole Tone scale for the dreamiest sound.',
      },
      {
        name: 'Tension Ramp Exercise',
        description: 'Over a simple two-chord vamp, start with slow, consonant melody. Every 30 seconds, increase rhythmic density and add more chromatic tension. At the peak, resolve back to the root in one phrase.',
      },
    ],
  },
  {
    id: 'carlos-santana',
    name: 'Carlos Santana',
    band: 'Santana',
    genre: ['Latin rock', 'blues', 'world'],
    description: 'Carlos Santana is one of the most recognizable guitar voices in history. His warm, sustained tone and melodic phrasing — rooted in Dorian mode with Latin rhythmic feel — create an instantly identifiable sound that bridges blues, rock, and Afro-Latin traditions.',
    signatureScales: ['Dorian', 'Minor Pentatonic', 'Phrygian Dominant', 'Blues'],
    keyTechniques: [
      {
        name: 'Sustain/Singing Tone',
        description: 'Using high-gain amp settings and body positioning to achieve endless sustain, making the guitar literally sing like a human voice.',
      },
      {
        name: 'Slow Wide Vibrato',
        description: 'A deliberate, wide vibrato applied to sustained notes that adds vocal-like expressiveness and emotional weight.',
      },
      {
        name: 'Expressive Bending',
        description: 'Precise, vocal-quality bends — often slow half-step or whole-step bends that cry and wail with intention.',
      },
      {
        name: 'Rhythmic Syncopation (Latin Clave)',
        description: 'Phrasing guitar lines against the clave rhythm pattern, creating tension between the melodic line and the underlying Latin groove.',
      },
      {
        name: 'Call and Response',
        description: 'Trading phrases between guitar and percussion/keyboards, a technique rooted in African musical tradition that Santana made central to his style.',
      },
    ],
    signatureSongs: [
      {
        name: 'Oye Como Va',
        reason: 'Perfect study in Dorian mode soloing over a Latin groove. The solo is a masterclass in rhythmic phrasing against the clave.',
      },
      {
        name: 'Evil Ways',
        reason: 'Demonstrates his call-and-response approach and how simple pentatonic phrases gain power through tone and timing.',
      },
      {
        name: 'Europa',
        reason: 'The ultimate Santana tone showcase — pure sustained melody with slow vibrato. Every note is placed with surgical emotional precision.',
      },
      {
        name: 'Black Magic Woman',
        reason: 'Minor pentatonic phrasing over a Latin minor groove. Shows how fewer notes with better feel beats technical complexity.',
      },
      {
        name: 'Samba Pa Ti',
        reason: 'A ballad that demonstrates his singing tone at its most beautiful — long sustained notes with wide vibrato over gentle changes.',
      },
    ],
    practiceApproach: [
      {
        name: 'Sustained Tone Exercise',
        description: 'Play a single note and hold it for 8 beats. Focus on getting maximum sustain through finger pressure, amp gain, and body positioning. Add slow vibrato on beat 5. The goal is making one note as expressive as possible.',
      },
      {
        name: 'Wide Vibrato Drill',
        description: 'Practice vibrato at different speeds: slow (quarter note), medium (eighth), and wide (whole step bend vibrato). Santana\'s vibrato is slow and wide — like a singer. Use a metronome at 60 BPM.',
      },
      {
        name: 'Dorian Phrasing Study',
        description: 'Over an Am7 vamp, play using only A Dorian. Focus on the F# (natural 6th) as your signature color tone. Phrase in short, vocal-like statements with space between each phrase.',
      },
      {
        name: 'Latin Clave Rhythm Guitar',
        description: 'Learn the son clave pattern (3-2). Play a simple chord vamp emphasizing the clave accents. Then solo over it, phrasing your melodies against the clave rhythm.',
      },
      {
        name: 'Call and Response Solo',
        description: 'Record a 2-bar phrase. Leave 2 bars of space. Record a responding phrase. Practice creating musical conversations where each phrase answers the previous one.',
      },
    ],
  },
  {
    id: 'jimmy-page',
    name: 'Jimmy Page',
    band: 'Led Zeppelin',
    genre: ['blues-rock', 'hard rock', 'folk', 'acoustic'],
    description: 'Jimmy Page is the architect of rock guitar — equal parts blues purist, folk fingerpicker, and sonic innovator. His riff writing defined hard rock, his acoustic work explored open tunings, and his studio experimentation pushed recording technology to new frontiers.',
    signatureScales: ['Minor Pentatonic', 'Blues', 'Natural Minor (Aeolian)', 'Mixolydian', 'DADGAD Modal'],
    keyTechniques: [
      {
        name: 'DADGAD Tuning',
        description: 'An open Dsus4 tuning that creates droning, modal textures. Used extensively for Celtic and Eastern-influenced acoustic work.',
      },
      {
        name: 'Bow Technique',
        description: 'Using a violin bow on electric guitar strings to create sustained, eerie drones and otherworldly textures — a signature live spectacle.',
      },
      {
        name: 'Double-Neck Guitar',
        description: 'Switching between 6-string and 12-string necks mid-song to cover both rhythm and lead parts live without changing instruments.',
      },
      {
        name: 'Studio Manipulation',
        description: 'Pioneering use of backward echo, phasing, close-miking, and ambient room recording to create massive guitar sounds on record.',
      },
      {
        name: 'Slide Guitar',
        description: 'Open tuning slide work combining Delta blues tradition with rock power, creating haunting, vocal-quality lines.',
      },
      {
        name: 'Riff Architecture',
        description: 'Constructing iconic riffs from simple pentatonic and blues scale fragments, using rhythm and dynamics to make them unforgettable.',
      },
    ],
    signatureSongs: [
      {
        name: 'Stairway to Heaven',
        reason: 'The complete Page experience — fingerpicked acoustic intro, 12-string layering, and one of the greatest pentatonic solos ever recorded.',
      },
      {
        name: 'Whole Lotta Love',
        reason: 'Demonstrates riff architecture at its finest — a simple pentatonic riff made legendary through tone, rhythm, and studio manipulation.',
      },
      {
        name: 'Bron-Y-Aur Stomp',
        reason: 'DADGAD-adjacent open tuning fingerpicking that shows his folk and acoustic mastery beyond the electric shredding.',
      },
      {
        name: 'Heartbreaker',
        reason: 'Raw pentatonic solo showcasing his aggressive, slightly loose playing style — feel over precision, energy over accuracy.',
      },
      {
        name: 'Kashmir',
        reason: 'An orchestral riff in DADGAD tuning that demonstrates how alternate tunings create sounds impossible in standard tuning.',
      },
    ],
    practiceApproach: [
      {
        name: 'DADGAD Exploration',
        description: 'Retune to DADGAD (D-A-D-G-A-D). Play open strings and discover the droning Dsus4 sound. Practice a simple melody on the top two strings while letting the open strings ring. This is Kashmir territory.',
      },
      {
        name: 'Pentatonic Aggression Drill',
        description: 'Play A minor pentatonic in position 1. Hit every note hard with conviction. Add hammer-ons and pull-offs aggressively. Page\'s style is raw — prioritize energy and feel over clean precision.',
      },
      {
        name: 'Riff Construction Workshop',
        description: 'Take 4 notes from the minor pentatonic. Create a riff using only those notes by varying the rhythm. Record it. Does it make you want to nod your head? That\'s the Page test.',
      },
      {
        name: 'Acoustic Fingerpicking',
        description: 'Learn a Travis picking pattern (alternating bass with melody on top). Apply it to an open chord progression. Page\'s acoustic work is as important as his electric playing.',
      },
      {
        name: 'Blues Scale Soloing',
        description: 'Solo over a slow 12-bar blues in A using the blues scale. Focus on bending the b5 up to the 5th — that\'s the blue note that makes everything gritty. Play behind the beat.',
      },
      {
        name: 'Dynamic Riff Playing',
        description: 'Take any riff you know. Play it at whisper volume, then at full power. Practice the contrast. Zeppelin\'s magic was in the dynamics — soft to loud, space to fury.',
      },
    ],
  },
  {
    id: 'jimi-hendrix',
    name: 'Jimi Hendrix',
    band: 'The Jimi Hendrix Experience',
    genre: ['blues', 'psychedelic rock', 'R&B'],
    description: 'Jimi Hendrix revolutionized the electric guitar. He fused blues, R&B, and psychedelia into a completely new vocabulary — playing rhythm and lead simultaneously, using feedback as a musical tool, and treating the guitar as an extension of his voice and imagination.',
    signatureScales: ['Minor Pentatonic', 'Blues', 'Mixolydian', 'Minor 6th Pentatonic'],
    keyTechniques: [
      {
        name: 'Thumb-Over Chord Voicings',
        description: 'Fretting bass notes with the thumb wrapped over the neck, freeing other fingers for embellishments and melody on top of chords.',
      },
      {
        name: 'Chord-Melody Hybrid',
        description: 'Simultaneously playing chords and single-note melodies, blurring the line between rhythm and lead guitar.',
      },
      {
        name: 'Whammy Bar',
        description: 'Expressive use of the Stratocaster tremolo bar for dive bombs, subtle vibrato, and pitch bending effects.',
      },
      {
        name: 'Hendrix Chord (7#9)',
        description: 'The dominant 7th sharp 9 voicing (e.g., E7#9) — a dissonant, crunchy chord that became synonymous with his sound.',
      },
      {
        name: 'Eb Tuning',
        description: 'Tuning all strings down a half step to Eb, creating a slightly darker, looser feel that aids bending and vibrato.',
      },
      {
        name: 'Rhythm-Lead Integration',
        description: 'Seamlessly weaving between rhythm chords and lead fills within the same phrase — never just comping, never just soloing.',
      },
      {
        name: 'Feedback Control',
        description: 'Controlling amp feedback as a musical element — using body position and volume to shape sustained, singing feedback tones.',
      },
    ],
    signatureSongs: [
      {
        name: 'Little Wing',
        reason: 'The definitive chord-melody piece. Every bar combines chords with melodic embellishments using the Minor 6th Pentatonic. A masterclass in rhythm-lead integration.',
      },
      {
        name: 'Purple Haze',
        reason: 'Introduces the Hendrix Chord (E7#9) and showcases his aggressive pentatonic soloing with whammy bar accents.',
      },
      {
        name: 'Voodoo Child (Slight Return)',
        reason: 'Wah-drenched blues-rock at its peak. Demonstrates his raw power, feedback control, and pentatonic mastery over a driving groove.',
      },
      {
        name: 'Castles Made of Sand',
        reason: 'Intricate chord-melody work with thumb-over voicings and delicate embellishments — the gentle side of his genius.',
      },
      {
        name: 'Machine Gun',
        reason: 'Extended improvisation showcasing feedback control, whammy bar abuse, and emotional intensity that pushed the instrument to its limits.',
      },
    ],
    practiceApproach: [
      {
        name: 'Eb Tuning Setup',
        description: 'Tune every string down a half step (Eb-Ab-Db-Gb-Bb-Eb). Play your normal pentatonic licks and notice how the looser string tension changes the feel. All Hendrix study should happen in this tuning.',
      },
      {
        name: 'Hendrix Chord Vocabulary',
        description: 'Learn the E7#9 voicing (020130). Move it up the neck. Practice switching between the 7#9 and regular barre chords. Add this chord to a 12-bar blues — instant Hendrix flavor.',
      },
      {
        name: 'Little Wing Chord-Melody Study',
        description: 'Learn the intro to Little Wing note-for-note. Analyze how each embellishment connects to the underlying chord. Then apply the same concept to a simple Am-G-F-E progression.',
      },
      {
        name: 'Thumb-Over Fretting',
        description: 'Practice wrapping your thumb over the low E string to fret bass notes (start with an F note, 1st fret). While the thumb holds the bass, play partial chord shapes with your remaining fingers.',
      },
      {
        name: 'Rhythm-Lead Integration',
        description: 'Play an E minor chord. Between strums, add hammer-on/pull-off fills using the minor pentatonic. The goal: never stop the rhythm to play a fill. They should be one continuous flow.',
      },
      {
        name: 'Minor 6th Pentatonic Improv',
        description: 'Over an Am7 backing track, use the Minor 6th Pentatonic (A-C-D-E-F#). Focus on the F# (natural 6th) — this is what separates Hendrix from standard minor pentatonic players. This is the Little Wing sound.',
      },
    ],
  },
  {
    id: 'sturgill-simpson',
    name: 'Sturgill Simpson',
    band: 'Solo / Sunday Valley',
    genre: ['outlaw country', 'psychedelic rock', 'honky-tonk'],
    description: 'Sturgill Simpson bridges outlaw country tradition with psychedelic experimentation. His guitar work — whether raw Telecaster twang or fuzz-soaked walls of sound — serves the song with authenticity. He channels Waylon Jennings and Jerry Garcia in equal measure.',
    signatureScales: ['Major Pentatonic', 'Major (Ionian)', 'Mixolydian', 'Minor Pentatonic', 'Blues'],
    keyTechniques: [
      {
        name: 'Chicken Pickin',
        description: 'Hybrid picking technique using pick + fingers to snap strings, creating a clucky, percussive attack characteristic of country guitar.',
      },
      {
        name: 'Pedal Steel Bending',
        description: 'Multi-string bends that simulate pedal steel guitar sounds on a standard guitar — bending one string while holding another stationary.',
      },
      {
        name: 'Melodic Lead Phrasing',
        description: 'Singing, lyrical lead lines that follow the vocal melody rather than shredding over it. The guitar tells the same story as the voice.',
      },
      {
        name: 'Volume Swell/Fuzz Wall',
        description: 'Shifting from clean country picking to massive fuzz-drenched psychedelic passages, often within the same song.',
      },
      {
        name: 'Telecaster Tone',
        description: 'Maximizing the Telecaster bridge pickup for that bright, cutting twang that defines country guitar tone.',
      },
      {
        name: 'Honky-Tonk Rhythm',
        description: 'Steady boom-chuck rhythm patterns with bass note alternation — the backbone of country music guitar accompaniment.',
      },
    ],
    signatureSongs: [
      {
        name: 'Turtles All the Way Down',
        reason: 'Where country meets psychedelia. Clean chicken pickin verses explode into fuzz-wall solos — the full Sturgill spectrum in one song.',
      },
      {
        name: 'Life of Sin',
        reason: 'Pure honky-tonk with Telecaster twang and pedal steel bends. A masterclass in traditional country guitar technique.',
      },
      {
        name: 'Welcome to Earth (Pollywog)',
        reason: 'Melodic lead phrasing at its most beautiful — the guitar solo sings the emotional core of the song.',
      },
      {
        name: 'Breakers Roar',
        reason: 'Volume swell textures and restrained playing that builds to an emotional climax. Shows his dynamic control.',
      },
      {
        name: 'Railroad of Sin',
        reason: 'Driving country rhythm with chicken pickin fills. Demonstrates how rhythm guitar can be as exciting as lead.',
      },
    ],
    practiceApproach: [
      {
        name: 'Chicken Pickin Fundamentals',
        description: 'Hold the pick normally but extend your middle and ring fingers. Practice plucking the high E string with your middle finger while picking the B string with the pick, alternating. Start slow at 80 BPM, build to 140.',
      },
      {
        name: 'Pedal Steel Simulation',
        description: 'On the B and G strings, hold a note on the B string stationary while bending the G string up a whole step. This creates the pedal steel crying sound. Practice over a G major chord — bend from the A to B on the G string while the D rings on B.',
      },
      {
        name: 'Melodic Phrasing Exercise',
        description: 'Play a vocal melody you know well on guitar (start with a simple country song). Match the phrasing exactly — where the voice breathes, you breathe. This trains you to play melodies, not licks.',
      },
      {
        name: 'Fuzz Wall Transition',
        description: 'Set up a clean tone and a heavy fuzz tone on separate channels or pedals. Practice a clean 8-bar country phrase, then stomp on the fuzz and play the same phrase. Feel how your attack needs to change for each tone.',
      },
      {
        name: 'Boom-Chuck Rhythm Mastery',
        description: 'Over a I-IV-V in G major (G-C-D), play alternating bass notes on beats 1 and 3, strum the chord on beats 2 and 4. This is the heartbeat of country guitar. Keep it metronomic at 120 BPM for 5 minutes straight.',
      },
      {
        name: 'Major Pentatonic Country Soloing',
        description: 'Solo over a G-C-D progression using only the G Major Pentatonic. Focus on landing on chord tones when the chord changes. Add slides and hammer-ons for country flavor. No bending past a whole step.',
      },
    ],
  },
];
