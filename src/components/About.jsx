import { mono, reveal } from '../theme'
import SectionLabel from './SectionLabel'

const building = [
  {
    name: 'ClinchCV',
    desc: 'An AI-powered resume intelligence tool that helps job seekers tailor their resume for specific roles.',
  },
  {
    name: 'AI Penetration Tester',
    desc: 'Automates security reconnaissance, discovers vulnerabilities, and reviews code.',
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="pf-pad"
      style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: 1100,
        margin: '0 auto',
        padding: '60px 40px 70px',
        scrollMarginTop: 84,
      }}
    >
      <SectionLabel label="// ABOUT" />
      <div
        className="dc-about-grid"
        style={{ display: 'grid', gridTemplateColumns: '1.55fr 1fr', gap: 54, alignItems: 'start' }}
      >
        <div style={reveal()}>
          <p style={{ fontSize: 19, lineHeight: 1.7, color: '#d4d9e1', margin: '0 0 26px' }}>
            The throughline in my work is a security mindset applied to full stack engineering. A
            background in penetration testing taught me to look at a system the way someone trying to
            break it would — where data leaks, where access control bends, where assumptions quietly
            stop holding. That instinct shapes the architecture decisions I make early — the ones that
            are cheap to get right up front and brutally expensive to fix later.
          </p>
          <p style={{ fontSize: 16.5, lineHeight: 1.75, color: '#aeb5c0', margin: 0 }}>
            Beyond that, I'm genuinely excited about AI as a practical lever. I use AI tools heavily in
            my own workflow, and I'm constantly turning over ideas for where AI can make real products
            more useful.
          </p>
        </div>
        <div
          style={{
            ...reveal(0.1),
            border: '1px solid rgba(255,255,255,.08)',
            borderRadius: 14,
            background: 'rgba(14,17,22,.5)',
            padding: 24,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 9,
              fontFamily: mono,
              fontSize: 11,
              letterSpacing: '.16em',
              textTransform: 'uppercase',
              color: '#8a93a3',
              marginBottom: 20,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: '#f2b441',
                animation: 'pf-blink 1.8s ease-in-out infinite',
              }}
            />
            Currently building
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {building.map((b) => (
              <div key={b.name} style={{ borderTop: '1px solid rgba(255,255,255,.07)', paddingTop: 16 }}>
                <div style={{ fontFamily: mono, fontSize: 14.5, color: '#f2b441', marginBottom: 6 }}>
                  {b.name}
                </div>
                <div style={{ fontSize: 13.5, lineHeight: 1.6, color: '#9aa3b2' }}>{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
