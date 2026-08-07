import { Link } from 'react-router-dom'
import { color, mono } from '../theme'

const link = { fontFamily: mono, fontSize: 13, color: color.muted }

export default function Nav() {
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
        href="#top"
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
        <a href="#work" style={link}>
          projects
        </a>
        <a href="#skills" style={link}>
          skills
        </a>
        <Link to="/resume" style={link}>
          resume
        </Link>
        <a
          href="#contact"
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
