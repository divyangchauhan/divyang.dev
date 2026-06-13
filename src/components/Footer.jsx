import { mono } from '../theme'

const FALLBACK_DOMAIN = 'divyang.dev'

// Show the domain the site is actually served from, falling back to divyang.dev
// for local dev, preview deployments, or anywhere without a real hostname.
function getDomain() {
  if (typeof window === 'undefined') return FALLBACK_DOMAIN
  const host = window.location.hostname.replace(/^www\./, '')
  if (!host || host === 'localhost' || /^\d{1,3}(\.\d{1,3}){3}$/.test(host) || !host.includes('.')) {
    return FALLBACK_DOMAIN
  }
  return host
}

export default function Footer() {
  const domain = getDomain()
  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: 1180,
        margin: '0 auto',
        padding: '30px 40px 50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 14,
        borderTop: '1px solid rgba(255,255,255,.06)',
      }}
    >
      <div style={{ fontFamily: mono, fontSize: 12.5, color: '#6c7585' }}>
        © 2026 Divyang Chauhan · {domain}
      </div>
      <a
        className="dc-link"
        href="#top"
        style={{ fontFamily: mono, fontSize: 12.5, color: '#8a93a3', textDecoration: 'none' }}
      >
        Back to top ↑
      </a>
    </footer>
  )
}
