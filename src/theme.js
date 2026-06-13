// Shared design tokens lifted from the design handoff (Divyang Chauhan.dc.html).
export const mono = "'IBM Plex Mono', monospace"
export const sans = "'IBM Plex Sans', system-ui, sans-serif"

export const color = {
  bg: '#0a0c10',
  panel: '#0b0e12',
  amber: '#f2b441',
  amberHi: '#f6c45f',
  text: '#e6e9ef',
  heading: '#f3f5f8',
  body: '#c6ccd6',
  muted: '#9aa3b2',
  faint: '#6c7585',
  dim: '#8a93a3',
}

// Transform-only entrance animation, matching the prototype's applyEntrance():
// content is always visible (opacity is never gated), only position animates.
export const reveal = (delay = 0) => ({
  animation: `pf-riseT .7s cubic-bezier(.2,.7,.2,1) ${delay}s both`,
})
