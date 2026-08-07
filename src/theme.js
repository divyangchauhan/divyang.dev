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
  note: '#f4f5fa',
  ink: '#15171f',
  body: '#454b5c',
  bodyAlt: '#3a3f4d',
  muted: '#5a5f6e',
  faint: '#8b90a0',
  fainter: '#a4a9b8',
  accent: '#2f3ad1',
  accentDeep: '#1c249e',
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

// Caveat block: what a project deliberately does not claim.
export const caveat = {
  fontSize: 13,
  lineHeight: 1.55,
  color: '#6b7080',
  background: color.note,
  borderLeft: `2px solid ${color.ruleAccent}`,
  padding: '10px 14px',
}
