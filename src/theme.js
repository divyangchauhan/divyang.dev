// Design tokens lifted from the design handoff (Portfolio - Blueprint.dc.html).
export const mono = "'IBM Plex Mono', monospace"
export const sans = "'IBM Plex Sans', system-ui, sans-serif"

export const color = {
  bg: '#f6f7fb',
  grid: '#e9ecf5',
  surface: '#ffffff',
  surfaceAlt: '#fafbfe',
  tint: '#eef0fb',
  chip: '#f8f9fd',
  ink: '#15171f',
  body: '#454b5c',
  bodyAlt: '#3a3f4d',
  muted: '#5a5f6e',
  faint: '#8b90a0',
  fainter: '#a4a9b8',
  accent: '#2f3ad1',
  accentDeep: '#1c249e',
  // The one warm note in the palette, for a status that went wrong. Muted
  // rather than a signal red, so it reads as a log line and not an alarm.
  negative: '#b03a4a',
  rule: '#dfe3ef',
  ruleSoft: '#edeff6',
  ruleStrong: '#d6dae8',
  ruleAccent: '#c3c9e6',
  ruleDashed: '#c9cee0',
}

// The small uppercase mono kicker that opens every section and panel column.
export const kicker = (tracking = '.14em') => ({
  fontFamily: mono,
  fontSize: 12,
  letterSpacing: tracking,
  color: color.faint,
  marginBottom: 8,
})
