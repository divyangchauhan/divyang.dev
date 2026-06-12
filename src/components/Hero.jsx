import { scrollToSection } from '../scroll.js'

const styles = {
  section: { padding: '92px 0 64px' },
  prompt: { fontSize: '13px', color: '#71818D' },
  dollar: { color: '#4ADE80' },
  h1: {
    margin: '20px 0 0',
    fontSize: '58px',
    lineHeight: 1.05,
    fontWeight: 600,
    letterSpacing: '-0.03em',
    color: '#E6EDF2',
  },
  tagline: {
    margin: '22px 0 0',
    fontSize: '16.5px',
    lineHeight: 1.65,
    color: '#8FA1AE',
    maxWidth: '660px',
  },
  card: {
    marginTop: '36px',
    maxWidth: '780px',
    background: '#10161C',
    border: '1px solid #1C2630',
    borderRadius: '6px',
    padding: '26px 30px',
  },
  cardText: {
    margin: 0,
    fontSize: '14.5px',
    lineHeight: 1.8,
    color: '#A7B6C0',
    textWrap: 'pretty',
  },
  strong: { fontWeight: 600, color: '#4ADE80' },
  actions: { display: 'flex', gap: '16px', marginTop: '34px' },
  btnPrimary: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '13.5px',
    fontWeight: 600,
    color: '#062514',
    background: '#4ADE80',
    border: '1px solid #4ADE80',
    borderRadius: '4px',
    padding: '13px 24px',
    cursor: 'pointer',
  },
  btnSecondary: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '13.5px',
    color: '#D7E2E9',
    background: '#121A21',
    border: '1px solid #2A3947',
    borderRadius: '4px',
    padding: '13px 24px',
    cursor: 'pointer',
  },
}

export default function Hero() {
  return (
    <section style={styles.section}>
      <div style={styles.prompt}>
        <span style={styles.dollar}>$</span> whoami
      </div>
      <h1 style={styles.h1}>
        Divyang Chauhan
        <span className="b-cursor" aria-hidden="true" />
      </h1>
      <p style={styles.tagline}>
        Backend engineer specializing in distributed systems, scalable APIs, and getting things
        shipped.
      </p>
      <div style={styles.card}>
        <p style={styles.cardText}>
          I build the backend systems that keep products running —{' '}
          <strong style={styles.strong}>event-driven architectures</strong>,{' '}
          <strong style={styles.strong}>serverless infrastructure</strong>, and APIs that hold up
          under real workloads. Recently shipped blockchain infrastructure at Kleros; I'm also
          building <strong style={styles.strong}>ResumeForge</strong>, a resume intelligence tool
          because job hunting deserved better tooling. Drawn to startups where the engineering
          problems are still being figured out.
        </p>
      </div>
      <div style={styles.actions}>
        <button
          type="button"
          className="b-btn-primary"
          style={styles.btnPrimary}
          onClick={() => scrollToSection('projects')}
        >
          View Projects →
        </button>
        <button
          type="button"
          className="b-btn-secondary"
          style={styles.btnSecondary}
          onClick={() => scrollToSection('contact')}
        >
          Get in Touch →
        </button>
      </div>
    </section>
  )
}
