import Link from 'next/link'
import { color, mono } from '../theme'

const link = { fontFamily: mono, fontSize: 13, color: color.muted }

// Every nav target except the résumé is a section of the home page, so the
// links are bare fragments there. From any other route a bare `#work` points at
// nothing on the current document — `hashBase="/"` sends them home first.
export default function Nav({ hashBase = '' }) {
  return (
    <nav
      className="bp-nav bp-pad"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        padding: '18px 40px',
        background: 'rgba(246,247,251,.9)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderBottom: `1px solid ${color.rule}`,
      }}
    >
      <a
        href={`${hashBase}#top`}
        style={{
          fontFamily: mono,
          fontSize: 15,
          fontWeight: 600,
          color: color.ink,
        }}
      >
        divyang.dev<span style={{ color: color.accent }}>_</span>
      </a>
      <div className="bp-navlinks">
        <a href={`${hashBase}#work`} style={link}>
          projects
        </a>
        <a href={`${hashBase}#skills`} style={link}>
          skills
        </a>
        <Link href="/resume" style={link}>
          resume
        </Link>
        <a
          href={`${hashBase}#contact`}
          style={{
            ...link,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 7,
            color: '#fff',
            background: color.accent,
            padding: '8px 14px',
            borderRadius: 20,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#7fe0b0',
              display: 'inline-block',
            }}
          />
          contact
        </a>
      </div>
    </nav>
  )
}
