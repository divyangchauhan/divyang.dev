// Smooth-scroll to a section, leaving room for the sticky header (matches the prototype's -64px offset).
export function scrollToSection(section) {
  const el = document.getElementById(section)
  if (!el) return
  const y = el.getBoundingClientRect().top + window.scrollY - 64
  window.scrollTo({ top: y, behavior: 'smooth' })
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// The site is hosted on both divyangchauhan.com and divyang.dev; show whichever
// domain it's actually served from. Anything else (localhost, previews, etc.)
// falls back to divyang.dev.
const KNOWN_DOMAINS = ['divyangchauhan.com', 'divyang.dev']

export function getSiteDomain() {
  if (typeof window === 'undefined') return 'divyang.dev'
  const host = window.location.hostname.replace(/^www\./, '').toLowerCase()
  return KNOWN_DOMAINS.includes(host) ? host : 'divyang.dev'
}
