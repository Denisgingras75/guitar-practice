export const TECHNIQUE_NODES = [
  // ============================================================
  // TIER 1 — FOUNDATION
  // ============================================================
  {
    id: 'tech-clean-fretting',
    tree: 'technique',
    tier: 1,
    name: 'Clean Fretting',
    description: 'Press strings cleanly behind the fret with minimal effort to produce buzz-free notes.',
    whyItMatters: 'Every technique you ever learn depends on clean contact between your fingertip and the string. Sloppy fretting creates buzz, dead notes, and bad habits that compound over years.',
    prerequisites: [],
    exercises: [
      {
        name: 'One-Finger Chromatic Walk',
        description: 'Using only your index finger, play frets 1-2-3-4 on the low E string, one note per beat at 60 BPM. Focus on placing your fingertip just behind the fret wire — not on top of it, not in the middle of the fret. Each note should ring clearly with no buzz. Repeat on all 6 strings. Goal: zero dead notes across all strings.',
      },
      {
        name: 'Four-Finger Chromatic (1-2-3-4)',
        description: 'Place index on fret 1, middle on fret 2, ring on fret 3, pinky on fret 4 of the low E string. Play each note slowly at 50 BPM. Keep fingers curled and press with fingertips, not pads. Move to the A string and repeat across all 6 strings. Then shift up to frets 5-6-7-8 and repeat. Goal: even volume and sustain on every note.',
      },
      {
        name: 'Pressure Test',
        description: 'Fret any note on the 3rd string, fret 5. Press hard enough to get a clean note, then slowly reduce pressure until the note buzzes. Find the minimum pressure needed for a clean tone — that is your target. Practice holding this "just enough" pressure while playing a simple 4-note pattern (frets 5-7-5-7) at 60 BPM for 2 minutes.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [
      { title: 'Guitar Technique — Clean Fretting', channel: 'Justin Guitar', url: 'https://www.youtube.com/watch?v=7A3MxwQBGf0' },
    ],
  },
  {
    id: 'tech-alternate-picking',
    tree: 'technique',
    tier: 1,
    name: 'Alternate Picking Basics',
    description: 'Strict down-up-down-up picking motion on single strings and across adjacent strings.',
    whyItMatters: 'Alternate picking is the engine behind most lead guitar. Without it, your speed ceiling is half of what it could be and your rhythm will always feel uneven.',
    prerequisites: [],
    exercises: [
      {
        name: 'Open String Metronome Drill',
        description: 'Set metronome to 60 BPM. Pick the open high E string with strict down-up alternation, one pick stroke per click. Focus on equal volume and tone between downstrokes and upstrokes. After 1 minute, bump to 80 BPM. After another minute, 100 BPM. If upstrokes start sounding weaker, slow back down.',
      },
      {
        name: 'Single-String Chromatic',
        description: 'On the B string, play frets 5-6-7-8 with alternate picking at 70 BPM (eighth notes). The pick should travel the same distance on downstrokes and upstrokes — small, controlled motions from the wrist, not the elbow. Descend 8-7-6-5 and repeat. Do this on every string.',
      },
      {
        name: 'Two-String Crossing',
        description: 'Play frets 5-7 on the G string (down-up), then frets 5-7 on the B string (down-up). Loop this 4-note pattern at 70 BPM. The string crossing should happen naturally — do not reset your pick. When clean, increase to 90 BPM. This builds the inside/outside picking motion you will use constantly.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [
      { title: 'Alternate Picking — The Right Way', channel: 'Ben Eller', url: 'https://www.youtube.com/watch?v=ra_TbQGH6wg' },
      { title: 'Alternate Picking Basics', channel: 'Justin Guitar', url: 'https://www.youtube.com/watch?v=bJLrGlw4-TM' },
    ],
  },
  {
    id: 'tech-basic-strumming',
    tree: 'technique',
    tier: 1,
    name: 'Basic Strumming',
    description: 'Controlled down and up strumming patterns across all six strings with consistent rhythm.',
    whyItMatters: 'Strumming is how most songs are played on guitar. A solid, relaxed strum with good timing makes even simple chords sound professional.',
    prerequisites: [],
    exercises: [
      {
        name: 'All Downstrokes on Open Strings',
        description: 'Strum all 6 open strings with a downstroke on every beat at 70 BPM. Keep your wrist loose — the motion comes from the wrist, not the arm. Aim for an even sound across all strings. Do this for 2 minutes straight without stopping.',
      },
      {
        name: 'Down-Up Eighth Note Strumming',
        description: 'At 60 BPM, strum down on the beat and up on the "and" (D-U-D-U-D-U-D-U per measure). Your arm should move like a pendulum — it never stops. Even when you skip a strum later, the arm keeps swinging. Practice on open strings first, then hold an Em chord.',
      },
      {
        name: 'The Missing Strum Pattern',
        description: 'Play the pattern: D - D U - U D U (where "-" means your hand swings but misses the strings). This is the most common strumming pattern in pop/rock. Start at 50 BPM with an Em chord. The key: your hand never stops its pendulum motion. The "misses" create the groove. Build to 80 BPM over a week.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'tech-open-chord-shapes',
    tree: 'technique',
    tier: 1,
    name: 'Open Chord Shapes',
    description: 'Memorize and cleanly play the six essential open chords: Em, Am, C, G, D, and E.',
    whyItMatters: 'These six chords cover hundreds of songs. Knowing them cold — with every string ringing clearly — is the gateway to actually playing music instead of just doing exercises.',
    prerequisites: ['tech-clean-fretting'],
    exercises: [
      {
        name: 'Chord Ring-Out Test',
        description: 'Form an Em chord. Pick each string individually from low E to high E. Every string should ring clearly. If any string buzzes or is muted, adjust your finger position. Repeat for Am, C, G, D, and E. Spend 30 seconds on each chord. This is diagnostic — find and fix your weak spots.',
      },
      {
        name: 'Chord Memorization Drill',
        description: 'Set a timer for 5 minutes. Cycle through Em, Am, C, G, D, E in order. Hold each chord for 4 beats at 60 BPM, strum once per beat. Between chords, lift all fingers completely off the fretboard, then place the next chord shape. No peeking at diagrams after the first pass.',
      },
      {
        name: 'Eyes-Closed Chord Formation',
        description: 'Close your eyes. Say a chord name out loud (e.g., "G"), then form it without looking. Open your eyes and check. Strum to verify it rings clean. If not, fix it with eyes open, then try again eyes-closed. Do 3 reps per chord. This builds muscle memory faster than anything.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'tech-chord-transitions',
    tree: 'technique',
    tier: 1,
    name: 'Chord Transitions',
    description: 'Move smoothly between open chord shapes without pausing or losing rhythm.',
    whyItMatters: 'Knowing chord shapes means nothing if you cannot switch between them in time. Smooth transitions are what separate someone who "knows chords" from someone who can play songs.',
    prerequisites: ['tech-open-chord-shapes'],
    exercises: [
      {
        name: 'One-Minute Changes',
        description: 'Pick two chords (start with Em to Am). Set a timer for 60 seconds. Switch back and forth as many times as you can, strumming once per chord. Count your changes. Target: 30+ clean changes in 60 seconds. Repeat for these pairs: Am-C, C-G, G-D, D-Em, Em-G. Track your numbers daily.',
      },
      {
        name: 'Pivot Finger Awareness',
        description: 'When switching Am to C, your index and middle finger stay on the same frets — only your ring finger moves. Identify these "pivot fingers" for every chord pair. Practice the transition by keeping pivot fingers planted and only moving what needs to move. Do this for Am-C, C-Am, Em-G, G-Em at 60 BPM.',
      },
      {
        name: 'Four-Chord Loop',
        description: 'Play G - Em - C - D with 4 strums per chord at 70 BPM. Loop it for 3 minutes without stopping. If you flub a transition, keep strumming — do not stop to fix it. Maintaining rhythm through mistakes is the skill here. When comfortable, try: Em - G - D - Am.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'tech-basic-rhythm',
    tree: 'technique',
    tier: 1,
    name: 'Basic Rhythm',
    description: 'Internalize quarter note and eighth note subdivisions and stay locked to a metronome.',
    whyItMatters: 'Rhythm is more important than notes. A guitarist with great timing and simple chords sounds better than a shredder who rushes and drags. This is the foundation of musicality.',
    prerequisites: ['tech-basic-strumming'],
    exercises: [
      {
        name: 'Quarter Note Foot Tap',
        description: 'Set metronome to 80 BPM. Tap your foot on every click. Now strum an Em chord on every foot tap (quarter notes). Do this for 2 minutes. Your foot is your internal clock — it should never stop. If your foot and the click drift apart, slow down to 60 BPM.',
      },
      {
        name: 'Eighth Note Counting',
        description: 'At 70 BPM, count out loud: "1-and-2-and-3-and-4-and." Strum down on the numbers, up on the "ands." Your foot taps on the numbers only. Practice with an Am chord for 2 minutes. The counting out loud forces your brain to internalize the subdivision.',
      },
      {
        name: 'Rest Practice',
        description: 'Play this pattern on a G chord at 60 BPM: strum-strum-REST-strum (quarter notes, beat 3 is silent). Mute the strings with your fretting hand on beat 3. This is harder than it sounds — rests are active, not passive. Then try: strum-REST-strum-REST. Build control over silence.',
      },
      {
        name: 'Metronome on 2 and 4',
        description: 'Set metronome to 40 BPM. Treat each click as beats 2 and 4 (the backbeat). You supply beats 1 and 3 silently in your head, strumming on all 4 beats. This forces you to internalize the pulse rather than relying on the metronome. Start with open Em. This is the single best rhythm exercise there is.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },

  // ============================================================
  // TIER 2 — DEVELOPING
  // ============================================================
  {
    id: 'tech-barre-chords',
    tree: 'technique',
    tier: 2,
    name: 'Barre Chords',
    description: 'Fret full barre chords using E-form and A-form shapes moveable across the neck.',
    whyItMatters: 'Barre chords unlock the entire fretboard. Once you can play an E-form and A-form barre, you can play any major or minor chord in any key — anywhere on the neck.',
    prerequisites: ['tech-chord-transitions'],
    exercises: [
      {
        name: 'Index Barre Isolation',
        description: 'Lay your index finger flat across all 6 strings at the 5th fret. Press firmly and pick each string individually. Every string must ring. Adjust the angle and position of your index finger — roll it slightly toward the side (toward the nut) so the bonier edge contacts the strings. Do this at frets 1, 3, 5, 7. Fret 1 is hardest.',
      },
      {
        name: 'F Major Barre (E-Form)',
        description: 'Form an F major barre chord at fret 1. Strum and check each string. Common problems: B string buzzes (press harder with index), high E is muted (index not reaching). Hold the chord for 10 seconds, release, shake out your hand, reform it. Do 10 reps. Then play F for 4 strums, lift, reform — build speed.',
      },
      {
        name: 'A-Form Barre (Bm)',
        description: 'Form a Bm chord: barre at fret 2, then add the A-minor shape with your remaining fingers. The low E string is muted (do not play it). Check each string rings clean. Practice switching between Bm and open G at 50 BPM, 4 strums each. Build to 70 BPM.',
      },
      {
        name: 'Barre Chord Slide Drill',
        description: 'Play an E-form major barre at fret 1 (F), slide to fret 3 (G), slide to fret 5 (A), slide to fret 7 (B). Strum 4 times at each position at 60 BPM. Maintain barre pressure while sliding — do not fully release and reform. This builds endurance and position familiarity.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [
      { title: 'Barre Chords — Complete Beginner Guide', channel: 'Justin Guitar', url: 'https://www.youtube.com/watch?v=Q7fM7R2vFmA' },
      { title: 'How to Play Barre Chords', channel: 'Marty Music', url: 'https://www.youtube.com/watch?v=vTWHFhY7l4U' },
    ],
  },
  {
    id: 'tech-bending',
    tree: 'technique',
    tier: 2,
    name: 'Bending',
    description: 'Bend strings accurately to reach target pitches — half step and whole step bends.',
    whyItMatters: 'Bending is the voice of electric guitar. A bend that lands slightly flat or sharp sounds amateur. Accurate bending is what makes your playing sing.',
    prerequisites: ['tech-clean-fretting'],
    exercises: [
      {
        name: 'Target Pitch Half-Step Bend',
        description: 'Play the note at the 8th fret of the B string (G). Now play the 7th fret and bend it up until it matches the 8th fret pitch. Use your ring finger to bend, supported by your middle and index fingers behind it. Alternate: play the target note, then the bend, then the target again. They should sound identical. Do this on frets 7, 9, and 12.',
      },
      {
        name: 'Whole-Step Bend with Reference',
        description: 'Play the 9th fret on the B string (C#). Now play the 7th fret and bend it a whole step to match. This is a bigger bend — push the string toward the ceiling (on the B and high E strings, push upward; on the low strings, pull downward). Support with 3 fingers. Check against the reference note constantly.',
      },
      {
        name: 'Bend and Hold',
        description: 'Bend the 10th fret of the B string up a whole step. Hold the bend for 4 beats at 60 BPM. The pitch should not waver. This builds finger strength and control. Release slowly over 2 beats. Do 8 reps, alternating between the B and G strings.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [
      { title: 'String Bending for Beginners', channel: 'Justin Guitar', url: 'https://www.youtube.com/watch?v=5Y3MIHikW5Y' },
      { title: 'How to Bend Guitar Strings in Tune', channel: 'Marty Music', url: 'https://www.youtube.com/watch?v=K-nCIIiCFCA' },
    ],
  },
  {
    id: 'tech-hammer-on-pull-off',
    tree: 'technique',
    tier: 2,
    name: 'Hammer-On & Pull-Off',
    description: 'Sound notes by hammering onto and pulling off from the fretboard without picking.',
    whyItMatters: 'Hammer-ons and pull-offs are the basis of legato playing, making your lines smooth and fluid. They also open up speed possibilities that picking alone cannot achieve.',
    prerequisites: ['tech-clean-fretting'],
    exercises: [
      {
        name: 'Single-String Hammer-Ons',
        description: 'Pick the open high E string, then hammer your index finger onto fret 1 hard enough to sound the note clearly. The hammered note should be nearly as loud as the picked note. Repeat 20 times. Then do: open to fret 3 (ring finger), open to fret 5 (pinky). The pinky hammer-on is the hardest — give it extra reps.',
      },
      {
        name: 'Pull-Off Snap Drill',
        description: 'Fret the 5th fret of the B string with your ring finger and the 3rd fret with your index finger. Pick the 5th fret, then pull your ring finger off with a slight downward snap (toward the floor). The 3rd fret note should ring clearly. The "snap" is key — do not just lift your finger straight up. Do 20 reps, then switch to the G string.',
      },
      {
        name: 'Hammer-Pull Trill',
        description: 'On the B string, pick fret 5 once, then rapidly alternate hammer-on to fret 7 and pull-off back to fret 5 — as many times as you can on one pick stroke. Start slow (eighth notes at 60 BPM), then speed up. Time yourself: can you sustain the trill for 10 seconds without the volume dying? That is your target.',
      },
      {
        name: '1-2-3-4 Legato Climb',
        description: 'On each string, pick the first note then hammer-on frets 5-6-7-8 (only the 5 is picked). Move to the next string and repeat. Ascend all 6 strings. The goal: even volume across all hammered notes. At 60 BPM, one note per eighth note. Descend using pull-offs: pick fret 8, pull off to 7, 6, 5.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'tech-palm-muting',
    tree: 'technique',
    tier: 2,
    name: 'Palm Muting',
    description: 'Rest the edge of your picking hand on the strings near the bridge to create a chunky, muted tone.',
    whyItMatters: 'Palm muting is essential for rock, punk, metal, and any genre that needs rhythmic punch. It is how you control dynamics and create contrast between muted and open sections.',
    prerequisites: ['tech-alternate-picking'],
    exercises: [
      {
        name: 'Find the Sweet Spot',
        description: 'Rest the fleshy edge of your picking hand (the pinky side) on the low E string right where it meets the bridge saddle. Pick the string. Move your hand slightly toward the neck — the sound gets deader. Move toward the bridge — less muting. Find the spot where you get a chunky "chug" with some pitch still audible. That is your palm mute position.',
      },
      {
        name: 'Chugging Eighth Notes',
        description: 'Palm mute the open low E string with alternate picking at 80 BPM, eighth notes. Every note should have the same muted tone. Keep your hand relaxed — tension kills endurance. Do this for 2 minutes straight. Then try the same on the A string. Maintain consistent mute pressure.',
      },
      {
        name: 'Mute/Open Contrast',
        description: 'Play this pattern on the low E: 3 palm-muted eighth notes, then 1 open (unmuted) eighth note. The open note should ring out dramatically against the muted ones. Loop this at 90 BPM. This contrast is used in almost every rock song. Practice it on a power chord shape (E5: frets 0-2-2-x-x-x) for a real-world application.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'tech-power-chords',
    tree: 'technique',
    tier: 2,
    name: 'Power Chords',
    description: 'Play two- and three-note power chord shapes rooted on the E and A strings.',
    whyItMatters: 'Power chords are the backbone of rock, punk, and metal. They are simple, movable, and sound massive with distortion. Knowing them cold gives you access to thousands of songs.',
    prerequisites: ['tech-palm-muting'],
    exercises: [
      {
        name: 'E-String Root Power Chords',
        description: 'Play a G5 power chord: index finger on fret 3 of the low E, ring finger on fret 5 of the A string. Only these two strings should sound — mute everything else by letting your index finger lightly touch the D string. Strum and verify only 2 strings ring. Move the shape to frets 1 (F5), 5 (A5), 7 (B5).',
      },
      {
        name: 'A-String Root Power Chords',
        description: 'Play a C5: index on fret 3 of the A string, ring finger on fret 5 of the D string. Mute the low E by lightly touching it with the tip of your index finger. Practice moving between A-string root shapes: C5, D5 (fret 5), E5 (fret 7), F5 (fret 8). 4 strums each at 80 BPM.',
      },
      {
        name: 'Power Chord Punk Progression',
        description: 'Play this classic progression with palm muting: G5 (8 muted eighth notes) - C5 (8 muted eighth notes) - D5 (4 muted + 4 open eighth notes) - C5 (8 open eighth notes). Loop at 100 BPM. The transition between muted and open sections is where the energy lives.',
      },
      {
        name: 'Quick Shifts',
        description: 'Alternate between G5 (low E, fret 3) and C5 (A string, fret 3) every 2 beats at 90 BPM. Your index finger stays at fret 3 — only your root string changes. Then try: E5 (low E open + A fret 2) to A5 (A open + D fret 2) every beat. Speed builds from efficient motion.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'tech-string-muting',
    tree: 'technique',
    tier: 2,
    name: 'String Muting & Noise Control',
    description: 'Use both hands to keep unwanted strings silent while playing.',
    whyItMatters: 'Noise control separates amateurs from pros. With distortion especially, every unmuted string adds unwanted noise. Clean players sound clean because they mute everything they are not playing.',
    prerequisites: ['tech-open-chord-shapes'],
    exercises: [
      {
        name: 'Fretting Hand Muting Audit',
        description: 'Play a note on the G string, fret 7. While it rings, check: is the D string silent? The B string? Use the underside of your fretting finger to lightly touch adjacent strings. Pick each string individually — only the G should sound. Adjust finger angle until you achieve isolation. Repeat on every string.',
      },
      {
        name: 'Picking Hand Muting',
        description: 'After picking a note on the B string, let your pick hand rest on the lower (thicker) strings to keep them quiet. Play a simple melody on the high E and B strings while keeping the G, D, A, and low E completely silent with your palm. Pick each "muted" string to verify silence. Practice this for 3 minutes.',
      },
      {
        name: 'Distortion Noise Test',
        description: 'If you have a distortion pedal or amp gain, turn it up. Play single notes on the G string at fret 5, 7, 9. Between each note, all other strings must be dead silent. If you hear sympathetic ringing or noise, your muting is not tight enough. Distortion amplifies every mistake — use it as a diagnostic tool. Clean up until the silence is truly silent.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },

  {
    id: 'tech-double-stops',
    tree: 'technique',
    tier: 2,
    name: 'Double Stops',
    description: 'Play two notes simultaneously on adjacent strings to create harmonized melodies and thick fills.',
    whyItMatters: 'Double stops are how you make a single guitar sound like two players. They are everywhere: Chuck Berry riffs, country chicken pickin, blues fills, and rock solos all rely on them. They bridge rhythm and lead playing.',
    prerequisites: ['tech-clean-fretting', 'tech-alternate-picking'],
    exercises: [
      {
        name: 'Thirds on the Top Strings',
        description: 'Play frets 5 and 7 on the B and high E strings simultaneously. Move the shape up the neck: 5-7, 7-9, 9-10, 10-12. These are diatonic thirds in the key of A. Pick both strings with one downstroke, ensuring both ring clearly. Your pick should contact both strings in one fluid motion. Do this ascending and descending at 70 BPM.',
      },
      {
        name: 'Sixths Across String Pairs',
        description: 'Play fret 5 on the G string and fret 7 on the high E string — these are a sixth apart. Move the shape: G string fret 5 + high E fret 7, G fret 7 + high E fret 9, G fret 9 + high E fret 10. Sixths produce that classic country/soul sound. Practice across all pairs (D+B, G+high E) at 80 BPM.',
      },
      {
        name: 'Chuck Berry Riff',
        description: 'Play the classic rock and roll double stop riff: on the G and B strings at fret 7 (both index finger), then bend the G string up a half step while the B holds. This is the sound of the 1950s. Then do: fret 9 on G + fret 9 on B (ring finger on both), back to 7+7. Loop this at 100 BPM. Control the muted strings — only G and B should sound.',
      },
      {
        name: 'Double Stop Slides',
        description: 'Barre frets 7 and 7 on the G and B strings, then slide up to fret 9 maintaining pressure on both strings. Both notes should sustain through the slide. Then try a reverse slide: fret 9 down to fret 7. Apply this to a blues in A: double stop slide on the IV chord (D position) for a soulful fill. At 75 BPM.',
      },
    ],
    tab: `e|--7--9--10--|
B|--7--9--10--|
G|------------|
D|------------|
A|------------|
E|------------|`,
    externalUrl: null,
    videos: [],
  },

  // ============================================================
  // TIER 3 — INTERMEDIATE
  // ============================================================
  {
    id: 'tech-vibrato',
    tree: 'technique',
    tier: 3,
    name: 'Vibrato Control',
    description: 'Add controlled pitch oscillation to sustained notes for expression and vocal quality.',
    whyItMatters: 'Vibrato is your fingerprint as a guitarist. B.B. King, Clapton, Hendrix — you can identify them by vibrato alone. Uncontrolled vibrato sounds nervous. Controlled vibrato sounds like confidence.',
    prerequisites: ['tech-bending'],
    exercises: [
      {
        name: 'Slow Wide Vibrato',
        description: 'Fret the 10th fret of the B string with your ring finger (supported by middle and index). Bend the string slightly up (about a quarter step) and release back to pitch. Do this rhythmically: one oscillation per beat at 60 BPM. Keep the oscillation even — same width each time. This is the classic blues vibrato. Do 8 reps of 4-beat vibratos.',
      },
      {
        name: 'Fast Narrow Vibrato',
        description: 'Same position, but oscillate quickly — about 4 oscillations per beat at 60 BPM — with a narrow pitch range (less than a quarter step). This is the rock/metal vibrato style. The motion comes from rotating the wrist, not shaking the finger. Practice for 2 minutes, alternating between the B and G strings.',
      },
      {
        name: 'Vibrato Speed Control',
        description: 'Play a sustained note at fret 12 on the G string. Start with no vibrato for 2 beats, then add slow vibrato for 2 beats, then speed up the vibrato over 4 beats. This "blooming" vibrato is incredibly expressive. The key: the width should stay consistent even as speed increases. Record yourself and listen back.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [
      { title: 'Guitar Vibrato — How to Sound Like a Pro', channel: 'Paul Davids', url: 'https://www.youtube.com/watch?v=B0XSj4w1OXM' },
      { title: 'Vibrato Technique for Guitar', channel: 'Ben Eller', url: 'https://www.youtube.com/watch?v=UGE1EcbFAVE' },
    ],
  },
  {
    id: 'tech-hybrid-picking',
    tree: 'technique',
    tier: 3,
    name: 'Hybrid Picking',
    description: 'Use the pick and middle/ring fingers simultaneously to pluck non-adjacent strings.',
    whyItMatters: 'Hybrid picking lets you grab strings a flatpick cannot reach efficiently. It is essential for country, rockabilly, and any style that mixes single notes with chord tones.',
    prerequisites: ['tech-alternate-picking'],
    exercises: [
      {
        name: 'Pick + Middle Finger Basics',
        description: 'Hold your pick normally. Play the D string with the pick (downstroke) and simultaneously pluck the B string with your middle finger. These two notes should sound at exactly the same time. Practice this double stop on various string pairs: A+G, D+B, A+B. Do 20 reps per pair at 70 BPM.',
      },
      {
        name: 'Banjo Roll Pattern',
        description: 'On an open G chord, play this repeating pattern: pick the D string (pick), pluck B string (middle finger), pluck high E (ring finger). Loop this triplet pattern at 80 BPM. Each note should be even in volume. This is the classic country "chicken pickin" roll. Build to 120 BPM.',
      },
      {
        name: 'Melody + Bass Separation',
        description: 'Fret a C chord. Play the bass note (A string, fret 3) with your pick on beats 1 and 3. On beats 2 and 4, pluck the B and high E strings together with your middle and ring fingers. This creates a mini fingerstyle arrangement using a pick. Practice at 60 BPM, then apply to G, Am, Em.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'tech-string-skipping',
    tree: 'technique',
    tier: 3,
    name: 'String Skipping',
    description: 'Accurately pick notes on non-adjacent strings by skipping over one or more strings.',
    whyItMatters: 'String skipping opens up wide-interval melodies and arpeggios that sound nothing like typical scale runs. It is a key tool for breaking out of "box pattern" soloing.',
    prerequisites: ['tech-alternate-picking'],
    exercises: [
      {
        name: 'Two-String Skip Pattern',
        description: 'Play fret 5 on the low E string (pick down), skip the A string, play fret 7 on the D string (pick up). Loop this two-note pattern at 60 BPM. Focus on accuracy — your pick must clear the A string without touching it. Repeat on string pairs: A+G, D+B, G+high E.',
      },
      {
        name: 'Pentatonic String Skip',
        description: 'In the Am pentatonic at fret 5: play fret 5 on the low E, skip to fret 5 on the D, skip to fret 5 on the B. Then descend. This creates wide intervals from a familiar scale. Practice at 70 BPM with alternate picking. The challenge is pick accuracy during the skips.',
      },
      {
        name: 'Arpeggio Skip Etude',
        description: 'Play a C major arpeggio using string skips: fret 3 on A string, fret 5 on G string, fret 5 on high E string, then descend. Use strict alternate picking. Start at 60 BPM. This produces a harp-like sound. When clean, try the same pattern starting on different roots (A, D, G).',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'tech-sweep-3string',
    tree: 'technique',
    tier: 3,
    name: 'Basic Sweep Picking (3-String)',
    description: 'Execute a smooth single-motion pick sweep across three adjacent strings to play arpeggios.',
    whyItMatters: 'Sweep picking is the fastest way to play arpeggios cleanly. Starting with 3 strings keeps it manageable while building the fundamental motion that scales to full sweeps later.',
    prerequisites: ['tech-alternate-picking'],
    exercises: [
      {
        name: 'The Sweep Motion (No Fretting)',
        description: 'Mute all strings with your fretting hand. With your pick, sweep down across the G, B, and high E strings in one fluid motion — like a very slow strum where each string sounds individually, not simultaneously. The pick "falls" from string to string. Do this at 50 BPM (one string per eighth note triplet). The motion is a controlled collapse, not a strum.',
      },
      {
        name: 'A Minor Triad Sweep',
        description: 'Fret: G string fret 9 (index), B string fret 10 (middle), high E string fret 12 (pinky). Sweep down across these 3 strings, one note at a time. Each note must ring individually — as you fret the next note, release pressure (not position) on the previous to stop it from ringing. Sweep up to descend. Do this at 60 BPM, triplet feel.',
      },
      {
        name: 'Three-String Sweep with Metronome',
        description: 'Using the A minor shape above, play the sweep as a triplet: 3 notes down, 3 notes up = 6 notes per beat at 60 BPM. Start painfully slow if needed (40 BPM). The number one mistake is rushing — each note needs equal time. Record yourself and check for notes bleeding into each other. Clean separation is everything.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'tech-legato-runs',
    tree: 'technique',
    tier: 3,
    name: 'Legato Runs',
    description: 'Play smooth, connected scale runs using primarily hammer-ons and pull-offs with minimal picking.',
    whyItMatters: 'Legato technique produces a smooth, fluid sound that picking cannot replicate. Players like Joe Satriani and Allan Holdsworth built entire styles around legato. It also reduces right-hand fatigue at high speeds.',
    prerequisites: ['tech-hammer-on-pull-off'],
    exercises: [
      {
        name: 'Three-Note-Per-String Legato',
        description: 'On the high E string, pick fret 5, hammer to fret 7, hammer to fret 8. Move to the B string: pick fret 5, hammer to fret 6, hammer to fret 8. Continue across all 6 strings (A minor scale, 3 notes per string). Only pick the first note on each string. All hammered notes must be audible and even. Start at 60 BPM, sixteenth notes.',
      },
      {
        name: 'Descending Legato',
        description: 'Reverse the above: on the low E string starting at fret 8, pick once then pull-off to fret 7, pull-off to fret 5. Move to the A string. The descending pull-offs are harder than ascending hammer-ons — each pull-off needs a deliberate snap. Practice the descent separately at 50 BPM before combining with the ascent.',
      },
      {
        name: 'Legato Loop',
        description: 'Pick fret 5 on the G string, hammer to 7, hammer to 9, pull-off to 7, pull-off to 5. That is one loop — 5 notes, only 1 picked. Repeat continuously for 1 minute at 70 BPM (eighth notes). Focus on even volume. Then shift the same pattern to the B and high E strings. Build speed gradually to 100 BPM.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'tech-rake',
    tree: 'technique',
    tier: 3,
    name: 'Rake Technique',
    description: 'Drag the pick across muted strings before striking the target note to create a percussive, expressive attack.',
    whyItMatters: 'The rake gives individual notes a dramatic, vocal quality — like a singer taking a breath before hitting a big note. It is a hallmark of expressive blues and rock playing. B.B. King used it constantly to give his notes weight and personality.',
    prerequisites: ['tech-string-muting', 'tech-alternate-picking'],
    exercises: [
      {
        name: 'Basic Rake Setup',
        description: 'Mute the D, A, and low E strings lightly with your fretting hand (lay the finger flat, no pressure). With your pick, drag a downstroke across these three muted strings and continue into a fretted note on the G string at fret 7. The muted strings produce a "chhhk" sound followed by a clean note. Practice this 20 times slowly — the rhythm is "chhhk-NOTE" with the muted drag and target note connected.',
      },
      {
        name: 'One-String and Two-String Rakes',
        description: 'Practice raking across just one muted string before the target, then two, then three. Each version has a different weight and feel. One-string rake is subtle; three-string rake is dramatic. On the B string at fret 12, practice: rake from G (one string), rake from D+G (two strings), rake from A+D+G (three strings). Notice the increasing sense of build-up.',
      },
      {
        name: 'Rake into Bend',
        description: 'Rake three muted strings and land on the B string at fret 10. Immediately bend it a whole step and add vibrato. This is classic blues phrasing. At 70 BPM, practice the sequence: silence (2 beats) - rake+note (beat 3) - bend+vibrato (holds through beat 4). The rest before the rake makes it more powerful. Loop over a slow blues in A.',
      },
      {
        name: 'Rake with Pull-Off',
        description: 'Rake across two muted strings and land on the G string at fret 9 (ring finger), with index finger already on fret 7. After landing, immediately pull off from 9 to 7. The phrase sounds like "chk-dah-duh" — rake, high note, pull-off lower note. This three-element phrase is a complete blues vocabulary unit. Practice at 80 BPM.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'tech-pinch-harmonics',
    tree: 'technique',
    tier: 3,
    name: 'Pinch Harmonics',
    description: 'Produce a high-pitched squeal by catching the string with the edge of your thumb immediately after the pick strikes.',
    whyItMatters: 'Pinch harmonics are one of the most dramatic sounds available on electric guitar. Players like Zakk Wylde and Billy Gibbons use them to make the guitar scream. Once you have them, you have a whole new expressive tool for fills and accents.',
    prerequisites: ['tech-alternate-picking', 'tech-palm-muting'],
    exercises: [
      {
        name: 'Finding the Squeal Zone',
        description: 'Pick the B string at fret 7 normally. Now pick it again but this time let the edge of your right thumb touch the string immediately after the pick — a fraction of a second later. You are muting a specific overtone and making another ring loudly. Move your picking position up and down the string length (toward the neck, toward the bridge) and listen for different harmonic "sweet spots." Find at least 3 distinct pitch changes from one fretted note.',
      },
      {
        name: 'Consistent Pinch on One Note',
        description: 'Fret the B string at fret 12. Practice getting a clean pinch harmonic 10 times in a row. The motion is: pick attack + immediate thumb edge contact. Too early = dead note. Too late = just a normal note. The window is tiny at first and expands with practice. Use distortion or overdrive — pinch harmonics are 10x easier with gain. Start here before trying on clean tone.',
      },
      {
        name: 'Different Strings, Different Zones',
        description: 'Practice pinch harmonics on the low E string at fret 5, G string at fret 7, and B string at fret 9. Each string has different sweet spots at different distances from the bridge. Map out where you get the harmonic on each string. The low E pinch harmonic is the deepest and most dramatic. Aim for a clean squeal on all three within 30 seconds.',
      },
      {
        name: 'Pinch + Vibrato',
        description: 'Get a pinch harmonic on the B string at fret 10, then add whammy bar vibrato or finger vibrato on the harmonic. The harmonic sustains and wavers for a truly dramatic effect. If you have a whammy bar, depress it slightly after the pinch — the pitch variation on a harmonic is extreme. Practice holding the harmonic with vibrato for 4 beats at 60 BPM.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'tech-slide-technique',
    tree: 'technique',
    tier: 3,
    name: 'Slide Technique',
    description: 'Smoothly slide between fret positions while maintaining note sustain and pitch accuracy.',
    whyItMatters: 'Slides connect notes in a way that sounds vocal and expressive. They are essential for blues, country, and any style where you want phrases to flow rather than sound mechanical.',
    prerequisites: ['tech-clean-fretting'],
    exercises: [
      {
        name: 'Basic Slide Up and Down',
        description: 'Play fret 5 on the G string, then slide your ring finger to fret 7 while maintaining pressure. The note should sustain through the slide without dying. Slide back to fret 5. The key is consistent pressure during the slide — not too hard (you will slow down), not too light (note dies). Do 20 reps. Then try longer slides: fret 3 to fret 12.',
      },
      {
        name: 'Slide into Target Note',
        description: 'From 2 frets below, slide into fret 7 on the B string. You should hear the slide approach and land precisely on fret 7. Practice landing on the beat — set metronome to 70 BPM and the target note should arrive exactly on the click. Then practice sliding into notes from above (fret 9 sliding down to fret 7).',
      },
      {
        name: 'Slide Connecting Positions',
        description: 'Play frets 5-7 on the G string, then slide from fret 7 to fret 9 and continue playing frets 9-12. The slide acts as a bridge between two scale positions. Practice this at 60 BPM, sixteenth notes. Apply this concept to move between pentatonic box positions: box 1 at fret 5 sliding up to box 2 at fret 8.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },

  // ============================================================
  // TIER 4 — ADVANCED
  // ============================================================
  {
    id: 'tech-economy-picking',
    tree: 'technique',
    tier: 4,
    name: 'Economy Picking',
    description: 'Combine alternate picking with sweep motions when crossing strings in the same direction.',
    whyItMatters: 'Economy picking eliminates wasted motion. When moving to a higher string, you sweep (down-down) instead of alternating (down-up-down). At high speeds, this efficiency becomes the difference between clean and sloppy.',
    prerequisites: ['tech-alternate-picking', 'tech-sweep-3string'],
    exercises: [
      {
        name: 'Two-String Economy Motion',
        description: 'Play frets 5-7-9 on the D string (down-up-down), then continue to frets 5-7-9 on the G string. The string change from D to G uses a continuation of the last downstroke — your pick "falls through" to the G string. So the picking is: D-U-D-D-U-D. Practice at 60 BPM, triplets. The "D-D" at the string change should feel like a mini sweep.',
      },
      {
        name: 'Three-Note-Per-String Scale (Economy)',
        description: 'Play a G major scale, 3 notes per string, using economy picking. Ascending: when moving to the next higher string, use a downstroke sweep. Descending: when moving to a lower string, use an upstroke sweep. Map out the entire picking pattern before playing. Start at 50 BPM sixteenth notes. This feels wrong at first — trust the process.',
      },
      {
        name: 'Economy vs Alternate Comparison',
        description: 'Play the same 3-note-per-string A minor scale ascending, first with strict alternate picking, then with economy picking. Note where your hand feels tension. Economy picking should feel smoother at the string changes. Practice switching between both methods at 70 BPM to train your hand to choose the right motion automatically.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'tech-legato-advanced',
    tree: 'technique',
    tier: 4,
    name: 'Advanced Legato (Multi-String)',
    description: 'Execute smooth legato passages that span multiple strings with position shifts and wide intervals.',
    whyItMatters: 'Basic legato on one string is useful but limited. Multi-string legato lets you play full scale runs, arpeggios, and complex lines with a smooth, connected sound across the entire fretboard.',
    prerequisites: ['tech-legato-runs'],
    exercises: [
      {
        name: 'Cross-String Legato (No Picking)',
        description: 'Play frets 5-7-8 on the G string (pick only fret 5, hammer the rest). Now move to the B string: hammer onto fret 5 from nowhere — your finger must hit the string hard enough to sound the note without picking. Continue hammering 6-8 on the B string. The string change hammer-on is the hard part. Practice at 50 BPM. Every note must be audible.',
      },
      {
        name: 'Holdsworth-Style Wide Legato',
        description: 'On the G string: fret 5 (pick), hammer to fret 9 (4-fret stretch), pull-off to fret 5. Move to B string: hammer fret 5, hammer fret 8, pull-off to fret 5. The wide stretches require your thumb to stay centered behind the neck. Start at 40 BPM, eighth notes. This builds both stretch and legato strength.',
      },
      {
        name: 'Full-Scale Legato Run',
        description: 'Play the A natural minor scale from the low E string to the high E string, 3 notes per string, picking only the first note of the entire run. That means 1 pick stroke for 18 notes. Each note should ring at consistent volume. Start at 40 BPM sixteenth notes. This is extremely difficult — if notes die out, slow down and build finger strength. Build to 80 BPM over weeks.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'tech-tapping',
    tree: 'technique',
    tier: 4,
    name: 'Tapping Patterns',
    description: 'Use your picking hand to tap notes on the fretboard, creating wide-interval legato patterns.',
    whyItMatters: 'Tapping extends your reach beyond what one hand can do, enabling wide arpeggios and patterns that would be impossible otherwise. Van Halen proved it could change what the guitar sounds like.',
    prerequisites: ['tech-hammer-on-pull-off'],
    exercises: [
      {
        name: 'Basic Tap-Pull Triplet',
        description: 'Fret the 5th fret of the B string with your index finger. Using your picking hand middle finger (or index), tap the 12th fret firmly, then pull off to fret 5, then pull off to the open string. That is a 3-note pattern: tap 12, pull to 5, pull to open. Loop it at 80 BPM, triplet feel. The tap must be firm — think of it as a hammer-on from the other hand.',
      },
      {
        name: 'Tapped Arpeggio Pattern',
        description: 'On the B string: fret 5 (index), fret 8 (ring finger), tap 12 (picking hand). Pattern: tap 12, pull to 8, pull to 5, hammer to 8, tap 12. This creates a flowing arpeggio. Practice at 60 BPM, sixteenth notes. Mute other strings with your fretting hand or picking hand palm. Noise control is critical with tapping.',
      },
      {
        name: 'Multi-String Tapping',
        description: 'Play the basic tap pattern (tap 12, pull to 8, pull to 5) on the high E string, then immediately do the same pattern on the B string, then the G string. Descend back up. The string changes are the challenge — your tapping finger must be accurate across strings. Start at 50 BPM. Build to playing it fluidly as one continuous phrase.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [
      { title: 'Guitar Tapping — Beginner to Advanced', channel: 'Marty Music', url: 'https://www.youtube.com/watch?v=dB-kE5fJJMg' },
    ],
  },
  {
    id: 'tech-tremolo-picking',
    tree: 'technique',
    tier: 4,
    name: 'Tremolo Picking',
    description: 'Rapidly alternate pick a single note at maximum controlled speed for sustained passages.',
    whyItMatters: 'Tremolo picking creates intensity and sustain that no other technique can match. It is essential for surf rock, metal, and classical-influenced guitar. It also serves as the ultimate test of picking efficiency.',
    prerequisites: ['tech-alternate-picking'],
    exercises: [
      {
        name: 'Burst Tremolo',
        description: 'Pick the open B string as fast as you can for exactly 2 seconds, then stop. Rest for 3 seconds. Repeat 10 times. Focus on: small wrist motion (not arm), relaxed grip, even note spacing. The notes should be a smooth stream, not a chaotic clatter. Time each burst and count approximate notes — track improvement weekly.',
      },
      {
        name: 'Metronomic Tremolo Build',
        description: 'Set metronome to 100 BPM. Play sixteenth notes (4 notes per beat) on the high E string, fret 12. Do this for 8 beats, then rest for 8 beats. Increase by 10 BPM each round until your technique breaks down. Note the BPM where it falls apart — that is your current ceiling. Practice 10 BPM below your ceiling for endurance.',
      },
      {
        name: 'Tremolo with Pitch Changes',
        description: 'Tremolo pick while fretting a simple melody on the high E string: fret 12-10-8-7 (2 beats each note) at 120 BPM sixteenth notes. Your picking hand maintains constant tremolo while your fretting hand changes notes smoothly. The transition between fretted notes should be seamless — no gap in the tremolo stream.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'tech-sweep-5string',
    tree: 'technique',
    tier: 4,
    name: 'Sweep Arpeggios (5-String)',
    description: 'Extend sweep picking across five strings for full major and minor arpeggio shapes.',
    whyItMatters: 'Five-string sweeps produce the dramatic, cascading arpeggios heard in neoclassical and progressive rock. They require everything from 3-string sweeps plus more coordination and muting discipline.',
    prerequisites: ['tech-sweep-3string'],
    exercises: [
      {
        name: 'Am Arpeggio Shape (5 Strings)',
        description: 'Fret this Am shape: A string fret 12 (index barre), D string fret 14 (ring), G string fret 14 (ring barre), B string fret 13 (middle), high E fret 12 (index). Sweep down across all 5 strings slowly — one note per beat at 40 BPM. Each note must ring alone (release pressure on the previous note). Reverse with an upstroke sweep.',
      },
      {
        name: 'Rolling Barre Technique',
        description: 'The 5-string sweep requires "rolling" your index finger across strings that share the same fret. On the Am shape above, the A string and high E are both fret 12. Practice rolling your index from the A string (tip of finger) to the high E (flat of finger) without both strings ringing simultaneously. Isolate this motion for 5 minutes.',
      },
      {
        name: 'Full Sweep at Tempo',
        description: 'Play the Am 5-string sweep as sextuplets (6 notes per beat) at 60 BPM: 5 notes down + 1 note at the top (hammer to fret 15 on high E) = 6 notes down, then 5 notes up + 1 at the bottom = 6 notes up. Loop continuously. Muting is critical — use a combination of palm muting and fretting hand finger releases. Build from 40 BPM.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'tech-advanced-bending',
    tree: 'technique',
    tier: 4,
    name: 'Advanced Bending',
    description: 'Execute compound bends, pre-bends, unison bends, and oblique bends with precision.',
    whyItMatters: 'Advanced bending techniques create some of the most expressive moments in guitar music. A pre-bend release can sound like a voice crying. Unison bends create dramatic tension. These are the techniques that make people feel something.',
    prerequisites: ['tech-bending', 'tech-vibrato'],
    exercises: [
      {
        name: 'Pre-Bend and Release',
        description: 'On the B string, fret 12: bend the string a whole step UP silently (before you pick). Then pick the note while it is already bent. Slowly release the bend back to pitch. This should sound like a note descending from above. The challenge: the pre-bend must be accurate to pitch before you pick. Check by playing fret 14 first as reference, then matching it with your silent pre-bend.',
      },
      {
        name: 'Unison Bend',
        description: 'Fret the G string at fret 7 and the B string at fret 5 simultaneously. Pick both strings. Now bend the G string up a whole step so it matches the B string pitch — you should hear one unified note with a slight chorus effect. The beating between the two notes should slow and stop when they match. Hold the unison for 4 beats. This requires very accurate bending.',
      },
      {
        name: 'Compound Bend (Bend + Bend Further)',
        description: 'On the B string fret 10: bend a half step, hold for 2 beats, then continue bending to a whole step, hold for 2 beats, then release all the way back. This two-stage bend requires careful pitch control at each stage. Use frets 11 and 12 as reference pitches. Practice at 60 BPM. The transitions between bend stages should be smooth, not jerky.',
      },
      {
        name: 'Oblique Bend',
        description: 'Fret the G string at fret 9 and the B string at fret 10. Pick both. Bend the G string up a whole step while the B string stays stationary. The two notes create a moving harmony. Apply this over an A7 chord context. This is a staple of country and blues lead guitar. Practice the bend accuracy by checking the G string bent pitch against the 11th fret.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },

  {
    id: 'tech-palm-muting-advanced',
    tree: 'technique',
    tier: 4,
    name: 'Palm Muting Precision & Dynamics',
    description: 'Control palm mute depth dynamically — transitioning fluidly between full mute, partial mute, and open in real time.',
    whyItMatters: 'Basic palm muting is binary: on or off. Advanced palm muting is a spectrum. The ability to modulate mute depth mid-phrase is what gives riffs texture and breathing room, and what separates mechanical playing from expressive playing.',
    prerequisites: ['tech-palm-muting', 'tech-power-chords'],
    exercises: [
      {
        name: 'Mute Gradient Control',
        description: 'Pick the open low E string and very slowly slide your palm forward (toward the neck). Listen as the sound transforms: full mute (percussive chunk) → partial mute (thuddy, slightly pitched) → light contact (bright but dampened) → no mute (open ring). Practice moving through this gradient in 4 stages at 80 BPM, one note per beat. The partial mute zone is where the most interesting tones live.',
      },
      {
        name: 'Dynamic Mute in a Riff',
        description: 'Play a power chord riff in E: E5 (open) - G5 (fret 3) - A5 (fret 5) - G5 (fret 3). First pass: fully palm muted throughout. Second pass: first two chords muted, last two open. Third pass: gradually release mute across all 4 chords. Fourth pass: improvise your mute depth in real time. This develops the dynamic vocabulary used in metal, punk, and rock.',
      },
      {
        name: 'Syncopated Mute Pattern',
        description: 'On the low E string, palm mute beats 1, 2, and the "and" of 3. Let beat 3 and beat 4 ring open. At 100 BPM, eighth notes: PM-PM-PM-OPEN-PM-OPEN-PM-PM. The open notes land on unexpected beats, creating rhythmic syncopation that feels dramatic. Apply this to a verse/chorus contrast — more muting in the verse, more open in the chorus.',
      },
      {
        name: 'Cross-String Mute Control',
        description: 'Play a riff that spans three strings (E, A, D) with palm muting. The challenge: your palm must maintain consistent mute contact as you pick across three different strings. Typically the low E is easiest to mute; the D is the hardest because your palm must reach further. Practice a D5 power chord (A-D strings) with tight palm muting for 2 minutes straight at 90 BPM.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'tech-tapped-harmonics',
    tree: 'technique',
    tier: 4,
    name: 'Tapped Harmonics',
    description: 'Produce harmonics by lightly tapping the string with the picking hand exactly 12 (or 7 or 5) frets above the fretted note.',
    whyItMatters: 'Tapped harmonics produce bell-like tones that sound nothing like normal guitar. They are essential for creating atmospheric, harp-like passages and for extending your melodic range into ranges above normal fretboard reach. Lenny Kravitz, Eric Johnson, and Joe Satriani use them for signature moments.',
    prerequisites: ['tech-tapping', 'tech-advanced-bending'],
    exercises: [
      {
        name: 'Octave Harmonic Basics',
        description: 'Fret the G string at fret 5 with your left hand. With your right index finger, tap lightly directly above fret 17 (exactly 12 frets higher) and immediately lift. A clear, bell-like harmonic should ring. Key: tap lightly — you are not hammering, just touching and releasing. Practice on every string: fret 5, tap 17; fret 7, tap 19; fret 9, tap 21. Get a clean bell tone 10 times in a row.',
      },
      {
        name: 'Harp Harmonic Cascade',
        description: 'Fret a C major chord shape (x-3-2-0-1-0) with your left hand. With your right hand index finger, tap 12 frets above each string in sequence: A string (tap fret 15), D (tap 14), G (tap 12), B (tap 13), high E (tap 12). This plays the notes of the C major chord as harmonics in sequence, creating a harp effect. Practice until all 5 harmonics ring clearly at 50 BPM.',
      },
      {
        name: 'Moving Tapped Harmonic Melody',
        description: 'Fret fret 5 on the B string (left hand stays). Tap fret 17 for the harmonic, then tap fret 19 for a different harmonic (fret up a step while maintaining the fret 5 anchor, or move tapping position — experiment to find which produces the cleanest tone). This lets you play a melody using only harmonics. Build a 4-note melodic phrase using tapped harmonics on the B and high E strings.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },

  // ============================================================
  // TIER 5 — MASTERY
  // ============================================================
  {
    id: 'tech-two-hand-tapping',
    tree: 'technique',
    tier: 5,
    name: 'Two-Hand Tapping Compositions',
    description: 'Use both hands on the fretboard simultaneously to play independent melodic and harmonic lines.',
    whyItMatters: 'Two-hand tapping transforms the guitar into something closer to a piano — independent voices, chords and melody simultaneously. Players like Stanley Jordan and Tosin Abasi use this to create music that sounds like two guitarists at once.',
    prerequisites: ['tech-tapping'],
    exercises: [
      {
        name: 'Independent Hand Exercise',
        description: 'Left hand: tap a steady quarter-note pulse on the A string, fret 5. Right hand: tap eighth notes on the high E string, fret 12. Both hands hammer onto the strings (no picking). Start at 40 BPM. This is like patting your head and rubbing your stomach — the independence is the challenge. Once stable, try switching which hand plays quarter vs eighth notes.',
      },
      {
        name: 'Chord Tapping',
        description: 'Left hand taps and holds frets 5, 5, 5 on the D, G, and B strings (Am chord tones). Right hand taps a melody on the high E string: frets 12-10-8-10. The chord should sustain underneath the melody. Start by tapping the chord, verifying it rings, then adding the melody. At 50 BPM. This is the basis of solo guitar tapping arrangements.',
      },
      {
        name: 'Tapped Harmonics Cascade',
        description: 'Fret the 5th fret on each string with your left hand. With your right index finger, tap directly above fret 17 (12 frets higher) on each string and immediately lift — this produces a harmonic. Cascade through all 6 strings creating a harp-like harmonic sweep. Practice the tap-and-release motion until harmonics ring clearly. Build to a fluid motion across all strings at 70 BPM.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'tech-sweep-mastery',
    tree: 'technique',
    tier: 5,
    name: 'Sweep Mastery',
    description: 'Execute sweep-picked arpeggios in all shapes, inversions, and keys fluidly across the neck.',
    whyItMatters: 'Sweep mastery means arpeggios are no longer a "technique" you deploy — they are a vocabulary you speak fluently. You can outline any chord change with a sweep in real time, in any position.',
    prerequisites: ['tech-sweep-5string'],
    exercises: [
      {
        name: 'All 5 CAGED Arpeggio Shapes',
        description: 'Learn the 5-string sweep shape for major and minor arpeggios in all 5 CAGED positions. For C major: play the C-shape sweep at fret 8, A-shape at fret 3, G-shape at fret 12, E-shape at fret 8, D-shape at fret 5. Practice each shape individually at 60 BPM sextuplets, then connect them ascending the neck.',
      },
      {
        name: 'Key Center Sweep Run',
        description: 'In the key of A minor: sweep Am at fret 5 (E-shape), slide to Dm sweep at fret 5 (A-shape), slide to Em sweep at fret 7 (E-shape), back to Am. This is a i-iv-v-i progression played entirely with sweeps. Start at 50 BPM, one full sweep per beat. Build until you can use these over a backing track.',
      },
      {
        name: 'Diminished Sweep Sequence',
        description: 'Play a diminished 7th arpeggio sweep: frets 10-13 on A, 11-14 on D, 10-13 on G, 11 on B, 10-13 on high E. Because diminished chords repeat every 3 frets, shift this shape up 3 frets and play again. Chain 4 positions ascending the neck at 60 BPM. This is the neoclassical shred staple and trains position-shifting sweeps.',
      },
      {
        name: 'Sweep into Alternate Picking',
        description: 'Play a 5-string Am sweep ascending, then immediately launch into an alternate-picked A minor scale descending run. The transition from sweep to alternate picking must be seamless — no rhythmic hiccup. Practice the join point (top of the sweep into the first picked note) in isolation at 60 BPM before running the full phrase.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'tech-speed-cleanliness',
    tree: 'technique',
    tier: 5,
    name: 'Speed & Cleanliness',
    description: 'Play complex passages at high tempos with note clarity, rhythmic precision, and zero noise.',
    whyItMatters: 'Speed without cleanliness is noise. Cleanliness without speed is limitation. This tier is about having both — playing fast and making every note count. This is what separates a great player from a good one.',
    prerequisites: ['tech-economy-picking', 'tech-legato-advanced'],
    exercises: [
      {
        name: 'Progressive Tempo Ladder',
        description: 'Pick a 16-note pattern you know well (e.g., A minor 3-note-per-string run). Play it perfectly at 80 BPM sixteenth notes. Increase by 5 BPM. Play it again. Keep going until you make a mistake. Drop back 10 BPM and play 5 perfect reps. This is your training zone. Do this daily — your ceiling will rise 5-10 BPM per week.',
      },
      {
        name: 'Record and Audit',
        description: 'Record yourself playing a fast passage (your choice — scale run, arpeggio, lick). Play it back at half speed using a DAW or slow-down app. Listen for: uneven note spacing, ghost notes, string noise between notes, rushing, dragging. Identify the weakest 2-3 notes in the passage and isolate those transitions at 60% speed. This forensic approach fixes problems faster than mindless repetition.',
      },
      {
        name: 'Burst Training',
        description: 'Take a 6-note pattern (e.g., frets 5-7-8 on B and high E strings). Play it in a "burst" — as fast as you can for just those 6 notes, then stop. Rest 3 seconds. Repeat. The burst should be short enough that your hand does not tense up. Do 20 bursts. Then extend to 12 notes. Then 18. Building speed in short bursts prevents the tension that kills speed in longer runs.',
      },
      {
        name: 'Mixed Technique Speed Test',
        description: 'Create a 2-bar phrase that includes: alternate picking, a legato hammer-pull section, a slide, and a bend with vibrato. Play it at a moderate tempo (80 BPM) first. Increase 5 BPM at a time. The goal is not maximum speed — it is maximum speed at which every technique in the phrase sounds intentional. That is your real playing speed.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'tech-dynamic-control',
    tree: 'technique',
    tier: 5,
    name: 'Dynamic Micro-Control',
    description: 'Control volume from near-silence to full attack with precision, and smoothly transition between dynamic levels.',
    whyItMatters: 'Dynamics are what make music breathe. A guitarist who plays everything at one volume is boring regardless of how many notes they play. Micro-control over dynamics is the highest expression of musicality on the instrument.',
    prerequisites: ['tech-vibrato'],
    exercises: [
      {
        name: 'Volume Gradient Scale',
        description: 'Play a one-octave A minor scale ascending (8 notes). The first note should be barely audible (pppp). Each subsequent note gets slightly louder. The 8th note should be at full volume (ffff). Then descend from full volume back to near-silence. The gradient should be smooth and even — no sudden jumps. Use a metronome at 60 BPM. This is pure pick-attack control.',
      },
      {
        name: 'Accent Patterns',
        description: 'Play steady eighth notes on the open A string at 90 BPM. Accent (play louder) every 3rd note while keeping the other notes soft. Then switch to accenting every 4th note. Then every 5th. The accented note should be roughly twice the volume of the unaccented notes. This trains independence between your rhythmic autopilot and dynamic control.',
      },
      {
        name: 'Whisper Tone Practice',
        description: 'Play a full chord progression (Am - F - C - G) with your pick barely touching the strings — the quietest you can possibly play while still producing recognizable pitch. Maintain this whisper volume for 2 minutes. This is harder than playing loud. Then, on the repeat, swell into full volume over 8 bars. The ability to play quietly with control is rarer and more impressive than playing loud.',
      },
      {
        name: 'Dynamic Phrasing Over Backing Track',
        description: 'Play a simple blues solo over a 12-bar backing track in A. Rule: during the I chord (A7), play quietly. During the IV chord (D7), play at medium volume. During the V chord (E7), play at full intensity. This forces you to match dynamics to harmonic context — the hallmark of mature musicianship. Record and listen back to verify the dynamic contrast is audible.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'tech-hybrid-mastery',
    tree: 'technique',
    tier: 5,
    name: 'Hybrid Picking Mastery',
    description: 'Combine pick, middle, ring, and pinky fingers in complex patterns to execute passages that no single-technique approach can match.',
    whyItMatters: 'True hybrid picking mastery means the right hand is a full tool — pick for attack and clarity on lower strings, fingers for simultaneous note separation and softer attack on upper strings. It is the technique that unifies flatpicking and fingerstyle into one fluid language.',
    prerequisites: ['tech-hybrid-picking', 'tech-string-skipping', 'tech-sweep-5string'],
    exercises: [
      {
        name: 'Four-Finger Roll (p-m-a-m Pattern)',
        description: 'On an open G chord: pick the low E string (pick), pluck D string (middle finger), pluck B string (ring finger), pluck high E (middle finger). Loop at 100 BPM, sixteenth notes. This is a banjo-derived roll pattern. All four elements must be even in volume — the middle finger plays twice, so develop equal strength with it. Build to 140 BPM.',
      },
      {
        name: 'Hybrid Arpeggio with String Skips',
        description: 'Fret Am chord. Pick the low E string (downstroke), skip to the G string with ring finger, then high E with pinky, then back to B string with middle finger. This is a non-adjacent arpeggio: strings 6-3-1-2. At 80 BPM. The string skips require precise right-hand placement. Then reverse the order: 2-1-3-6. Connect the two patterns for a continuous 8-note loop.',
      },
      {
        name: 'Fast Lick Hybrid',
        description: 'Play fret 7 on the A string with a pick downstroke, then simultaneously pluck fret 7 on the G string (middle) and fret 8 on the high E (ring) — a three-note chord arrived at in one motion. Then play frets 9-9-9 across A-G-E strings the same way. At 100 BPM this becomes a machine-gun chord articulation that pure flatpicking cannot match. Used heavily by Johnny Deacon and Eric Johnson.',
      },
      {
        name: 'Sustained Bass + Moving Melody',
        description: 'Pick and hold the A string at fret 5 (E note) as a sustained bass pedal — keep your pick anchored there. While it sustains, use your middle and ring fingers to play a melody on the B and high E strings: frets 9-10-12-10-9. The bass should ring throughout the melody without being re-picked. This creates a pianist-style pedal tone effect. Master this for one minute straight without the bass dying.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
  {
    id: 'tech-any-technique-on-demand',
    tree: 'technique',
    tier: 5,
    name: 'Any Technique On Demand',
    description: 'Seamlessly deploy any technique from this tree in real musical contexts without conscious thought.',
    whyItMatters: 'The final stage is not learning a new technique — it is integrating everything so deeply that you stop thinking about technique entirely. You think of a musical idea, and your hands execute it. The technique serves the music, not the other way around.',
    prerequisites: [
      'tech-economy-picking',
      'tech-legato-advanced',
      'tech-tapping',
      'tech-tremolo-picking',
      'tech-sweep-5string',
      'tech-advanced-bending',
    ],
    exercises: [
      {
        name: 'Technique Roulette',
        description: 'Write these techniques on paper: alternate picking, legato, tapping, sweep, bending, tremolo, hybrid picking, slides. Draw two at random. Improvise a 30-second phrase that uses both techniques over a backing track. Reset and draw two more. Do 10 rounds. This trains spontaneous technique selection — the real-world skill.',
      },
      {
        name: 'Transcribe and Replicate',
        description: 'Pick a solo by a guitarist you admire. Transcribe 8 bars by ear (no tabs). Identify every technique used. Learn it note-for-note and match the feel. Then improvise your own solo over the same backing using the same techniques in your own way. This closes the loop: ear to hands to musical expression.',
      },
      {
        name: 'One-Take Improvisation',
        description: 'Record a 3-minute improvisation over a chord progression you have never played over. No practice runs, no do-overs. Listen back and note: which techniques did you reach for? Which did you avoid? The avoided ones are your gaps. Spend next week focusing on integrating those neglected techniques into your improvisation vocabulary.',
      },
      {
        name: 'Teach It',
        description: 'Pick any technique from this tree and explain it to someone (or record yourself explaining it). Demonstrate it slowly, show common mistakes, and perform it at full speed. Teaching exposes gaps in your understanding. If you cannot explain it simply and demonstrate it reliably, you have not truly mastered it. Revisit until you can.',
      },
    ],
    tab: null,
    externalUrl: null,
    videos: [],
  },
];
