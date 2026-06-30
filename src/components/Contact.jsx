import { mono, sans, reveal } from '../theme'

const ContactRow = ({ href, label, value, download, target, fill }) => (
  <a
    className={fill ? 'dc-btn-fill' : 'dc-row'}
    href={href}
    {...(download ? { download: true } : {})}
    {...(target ? { target, rel: 'noopener' } : {})}
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      textDecoration: 'none',
      border: fill ? '1px solid #f2b441' : '1px solid rgba(255,255,255,.12)',
      borderRadius: 11,
      background: fill ? '#f2b441' : 'rgba(14,17,22,.5)',
      padding: '15px 18px',
    }}
  >
    <span
      style={{
        fontFamily: mono,
        fontSize: 11,
        letterSpacing: '.12em',
        textTransform: 'uppercase',
        color: fill ? '#0a0c10' : '#8a93a3',
        fontWeight: fill ? 600 : 400,
      }}
    >
      {label}
    </span>
    <span
      style={{
        fontFamily: mono,
        fontSize: 13.5,
        color: fill ? '#0a0c10' : '#e6e9ef',
        fontWeight: fill ? 600 : 400,
      }}
    >
      {value}
    </span>
  </a>
)

export default function Contact() {
  return (
    <section
      id="contact"
      className="pf-pad"
      style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: 1180,
        margin: '0 auto',
        padding: '80px 40px 50px',
        scrollMarginTop: 84,
      }}
    >
      <div
        className="pf-contact-card"
        style={{
          ...reveal(),
          border: '1px solid rgba(255,255,255,.1)',
          borderRadius: 22,
          background: 'linear-gradient(160deg,rgba(20,24,31,.8),rgba(10,12,16,.5))',
          padding: '54px 48px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          className="pf-glow"
          style={{
            position: 'absolute',
            top: '-30%',
            right: '-6%',
            width: '46%',
            height: '170%',
            background: 'radial-gradient(circle,rgba(242,180,65,.1),transparent 64%)',
            pointerEvents: 'none',
          }}
        />
        <div
          className="dc-contact-grid"
          style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: 48,
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: mono,
                fontSize: 12,
                letterSpacing: '.2em',
                color: '#f2b441',
                marginBottom: 22,
              }}
            >
              // CONTACT
            </div>
            <h2
              style={{
                fontFamily: sans,
                fontWeight: 700,
                fontSize: 38,
                lineHeight: 1.15,
                letterSpacing: '-.02em',
                margin: '0 0 20px',
                color: '#f3f5f8',
              }}
            >
              Let's build something that holds up.
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.7, color: '#c6ccd6', margin: 0, maxWidth: 480 }}>
              If you're building something interesting and need a full stack engineer who can move fast
              and own large parts of the stack — let's talk.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <ContactRow href="mailto:divyang@divyang.dev" label="Email" value="divyang@divyang.dev" />
            <ContactRow
              href="https://github.com/divyangchauhan"
              target="_blank"
              label="GitHub"
              value="divyangchauhan ↗"
            />
            <ContactRow
              href="https://www.linkedin.com/in/divyangchauhan"
              target="_blank"
              label="LinkedIn"
              value="divyangchauhan ↗"
            />
            <ContactRow
              href="/assets/Divyang-Chauhan-Resume.pdf"
              download
              label="Résumé"
              value="Download PDF ↓"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  )
}
