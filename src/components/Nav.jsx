import { mono } from '../theme'

export default function Nav() {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 40px',
        background: 'rgba(10,12,16,.72)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,.06)',
      }}
    >
      <a
        href="#top"
        style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}
      >
        <span
          style={{
            display: 'inline-grid',
            placeItems: 'center',
            width: 32,
            height: 32,
            border: '1px solid #f2b441',
            color: '#f2b441',
            borderRadius: 7,
            fontFamily: mono,
            fontWeight: 600,
            fontSize: 13,
          }}
        >
          DC
        </span>
        <span
          style={{
            fontFamily: mono,
            fontSize: 12,
            letterSpacing: '.16em',
            textTransform: 'uppercase',
            color: '#8a93a3',
          }}
        >
          backend engineer
        </span>
      </a>
      <div style={{ display: 'flex', alignItems: 'center', gap: 30, fontFamily: mono, fontSize: 13 }}>
        <a className="dc-link" href="#projects" style={{ color: '#aab2c0', textDecoration: 'none' }}>
          Work
        </a>
        <a className="dc-link" href="#about" style={{ color: '#aab2c0', textDecoration: 'none' }}>
          About
        </a>
        <a className="dc-link" href="#skills" style={{ color: '#aab2c0', textDecoration: 'none' }}>
          Skills
        </a>
        <a
          className="dc-btn-fill"
          href="#contact"
          style={{
            color: '#0a0c10',
            background: '#f2b441',
            textDecoration: 'none',
            padding: '9px 16px',
            borderRadius: 7,
            fontWeight: 600,
          }}
        >
          Get in Touch
        </a>
      </div>
    </nav>
  )
}
