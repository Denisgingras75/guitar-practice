/**
 * Nashville-style chord chart parser.
 *
 * Syntax:
 *   @title, @key, @tempo, @feel, @structure — metadata
 *   [A] Verse — section header (id + name)
 *   ||: ... :|| xN — repeated section (N defaults to 2)
 *   | chord / chord | — bars; / splits multiple chords in one bar
 *   % — simile (repeat previous bar)
 */

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function parseBars(barText) {
  // barText is the inner content between outer | delimiters, already trimmed.
  // Split on | to get individual bar strings.
  const rawBars = barText.split('|');
  const bars = [];

  for (let i = 0; i < rawBars.length; i++) {
    const raw = rawBars[i].trim();
    if (raw === '') continue;

    if (raw === '%') {
      bars.push({ simile: true, chords: [] });
    } else {
      const chords = raw
        .split('/')
        .map(function(c) { return c.trim(); })
        .filter(function(c) { return c.length > 0; });
      bars.push({ simile: false, chords: chords });
    }
  }

  return bars;
}

function parseRepeatLine(line) {
  // Matches: ||: ... :|| xN  or  ||: ... :||  (no xN)
  const repeatMatch = line.match(/^\|\|:\s*(.*?)\s*:\|\|\s*(?:x(\d+))?$/);
  if (repeatMatch) {
    const inner = repeatMatch[1];
    const count = repeatMatch[2] ? parseInt(repeatMatch[2], 10) : 2;
    return { bars: parseBars(inner), repeat: count };
  }
  return null;
}

function parsePlainLine(line) {
  // Matches: | chord | chord | ...
  const plainMatch = line.match(/^\|(.+)\|$/);
  if (plainMatch) {
    return { bars: parseBars(plainMatch[1]), repeat: 1 };
  }
  return null;
}

// ---------------------------------------------------------------------------
// parseChart
// ---------------------------------------------------------------------------

export function parseChart(text) {
  const lines = text.split('\n');

  const chart = {
    title: '',
    key: '',
    tempo: '',
    feel: '',
    sections: [],
    structure: [],
  };

  let currentSection = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line === '') continue;

    // Metadata
    const metaMatch = line.match(/^@(\w+)\s+(.+)$/);
    if (metaMatch) {
      const key = metaMatch[1].toLowerCase();
      const value = metaMatch[2].trim();
      if (key === 'title') { chart.title = value; continue; }
      if (key === 'key') { chart.key = value; continue; }
      if (key === 'tempo') { chart.tempo = value; continue; }
      if (key === 'feel') { chart.feel = value; continue; }
      if (key === 'structure') {
        chart.structure = value.split(/\s+/).filter(function(s) { return s.length > 0; });
        continue;
      }
    }

    // Section header: [A] Name
    const sectionMatch = line.match(/^\[([A-Z])\]\s*(.*)$/);
    if (sectionMatch) {
      currentSection = {
        id: sectionMatch[1],
        name: sectionMatch[2].trim(),
        repeat: 1,
        bars: [],
      };
      chart.sections.push(currentSection);
      continue;
    }

    // Repeat line: ||: ... :|| xN
    const repeatResult = parseRepeatLine(line);
    if (repeatResult) {
      if (currentSection) {
        currentSection.bars = currentSection.bars.concat(repeatResult.bars);
        currentSection.repeat = repeatResult.repeat;
      }
      continue;
    }

    // Plain bar line: | ... |
    const plainResult = parsePlainLine(line);
    if (plainResult) {
      if (currentSection) {
        currentSection.bars = currentSection.bars.concat(plainResult.bars);
      }
      continue;
    }
  }

  return chart;
}

// ---------------------------------------------------------------------------
// chartToText
// ---------------------------------------------------------------------------

export function chartToText(chart) {
  const lines = [];

  if (chart.title) lines.push('@title ' + chart.title);
  if (chart.key) lines.push('@key ' + chart.key);
  if (chart.tempo) lines.push('@tempo ' + chart.tempo);
  if (chart.feel) lines.push('@feel ' + chart.feel);

  if (chart.sections && chart.sections.length > 0) {
    for (let i = 0; i < chart.sections.length; i++) {
      const section = chart.sections[i];
      lines.push('');
      lines.push('[' + section.id + '] ' + section.name);

      const barStrings = section.bars.map(function(bar) {
        if (bar.simile) return '%';
        return bar.chords.join(' / ');
      });

      const barLine = barStrings.join(' | ');

      if (section.repeat > 1) {
        lines.push('||: ' + barLine + ' :|| x' + section.repeat);
      } else {
        lines.push('| ' + barLine + ' |');
      }
    }
  }

  if (chart.structure && chart.structure.length > 0) {
    lines.push('');
    lines.push('@structure ' + chart.structure.join(' '));
  }

  return lines.join('\n');
}
