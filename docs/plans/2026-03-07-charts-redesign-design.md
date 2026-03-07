# Charts Page Redesign — Embedded Videos + Genre Colors

## Summary
Upgrade the Charts page with inline YouTube video embeds, genre-based color coding, cleaner card layout, and more songs.

## Changes

### 1. Embed YouTube Videos
- Replace `<a>` video links in chart detail view with existing `VideoEmbed` component
- Video renders above the chord chart when viewing a song
- Multiple videos per song supported (lessons from different channels)

### 2. Genre Color System
- Each genre gets a color: blues=blue, rock=red, classic-rock=orange, folk=green, jam=purple, psychedelic=pink, country=amber
- Applied as: left border on song cards, colored genre pill badge
- Subtle, not overwhelming — just enough to visually scan

### 3. Song Card Redesign
- Artist name more prominent
- Genre pill badge with color
- Key badge
- Small video indicator icon if tutorials exist
- Cleaner spacing and typography

### 4. Chart Detail View
- Video embed on top, chord chart below
- Clean metadata header: artist, key, tempo, feel
- Back button in header strip

### 5. More Songs + Video Links
- Add ~10-15 more classic songs with YouTube tutorial links
- Focus on songs with good Marty Music / Justin Guitar / Paul Davids lessons

## What Stays
- Chart builder/editor unchanged
- Search functionality unchanged
- Nashville chord syntax unchanged
- Dark theme base + amber primary accent
- All other pages untouched
