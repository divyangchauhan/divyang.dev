import Link from 'next/link'
import { color, kicker, mono } from '../theme'

const rowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 16,
  padding: '16px 0',
  color: color.ink,
}

const valueStyle = { fontFamily: mono, fontSize: 12, color: color.faint }

const links = [
  {
    label: 'GitHub',
    value: 'github.com/divyangchauhan',
    href: 'https://github.com/divyangchauhan',
  },
  {
    label: 'LinkedIn',
    value: '/in/divyangchauhan',
    href: 'https://linkedin.com/in/divyangchauhan',
  },
  {
    label: 'Twitter / X',
    value: '@divyangjchauhan',
    href: 'https://x.com/divyangjchauhan',
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="bp-shell bp-pad"
      style={{ padding: '64px 40px 88px' }}
    >
      <div
        style={{
          border: `1.5px solid ${color.accent}`,
          borderRadius: 12,
          background: color.surface,
          overflow: 'hidden',
        }}
      >
        <div className="bp-contact">
          <div
            className="bp-contact-main"
            style={{
              padding: '44px 44px 40px',
              borderRight: `1px solid ${color.rule}`,
            }}
          >
            <div style={kicker()}>GET IN TOUCH</div>
            <h2
              style={{
                fontSize: 'clamp(27px, 4.4vw, 34px)',
                fontWeight: 700,
                margin: '0 0 16px',
                letterSpacing: '-.02em',
              }}
            >
              Let&rsquo;s talk about the hard part.
            </h2>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.6,
                color: color.body,
                margin: '0 0 26px',
                maxWidth: '44ch',
              }}
            >
              Backend and applied-AI roles. Based in India — working remote.
              Email is the fastest way to reach me.
            </p>
            <a
              href="mailto:divyang@divyang.dev"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: color.accent,
                color: '#fff',
                fontWeight: 600,
                fontSize: 17,
                padding: '15px 26px',
                borderRadius: 8,
              }}
            >
              divyang@divyang.dev →
            </a>
          </div>
          <div
            style={{
              padding: 44,
              display: 'flex',
              flexDirection: 'column',
              background: color.surfaceAlt,
            }}
          >
            <Link
              href="/resume"
              style={{
                ...rowStyle,
                borderBottom: `1px solid ${color.ruleSoft}`,
              }}
            >
              <span style={{ fontWeight: 600 }}>Résumé</span>
              <span style={{ ...valueStyle, color: color.accent }}>
                view + download →
              </span>
            </Link>
            {links.map(({ label, value, href }, index) => (
              <a
                key={label}
                href={href}
                style={{
                  ...rowStyle,
                  borderBottom:
                    index === links.length - 1
                      ? 'none'
                      : `1px solid ${color.ruleSoft}`,
                }}
              >
                <span style={{ fontWeight: 600 }}>{label}</span>
                <span style={valueStyle}>{value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <p
        style={{
          fontFamily: mono,
          fontSize: 12,
          color: color.fainter,
          textAlign: 'center',
          margin: '32px 0 0',
        }}
      >
        © 2026 Divyang Chauhan · built with precision, not buzzwords
      </p>
    </section>
  )
}
