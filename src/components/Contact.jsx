import SectionHeading from './SectionHeading.jsx'
import { EMAIL, MAILTO } from '../data.js'

const styles = {
  section: { padding: '36px 0 72px' },
  lede: {
    margin: 0,
    fontSize: '16px',
    lineHeight: 1.75,
    color: '#A7B6C0',
    maxWidth: '660px',
    textWrap: 'pretty',
  },
  list: { marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '12px' },
  row: {
    display: 'grid',
    gridTemplateColumns: '110px 1fr',
    gap: '16px',
    fontSize: '14px',
    alignItems: 'baseline',
  },
  key: { color: '#71818D' },
  link: { color: '#B9C7D1', textDecoration: 'none' },
  emailLink: { color: '#4ADE80', textDecoration: 'none', fontSize: '16px' },
}

export default function Contact() {
  return (
    <>
      <SectionHeading id="contact" label="04 · Contact" />
      <section style={styles.section}>
        <p style={styles.lede}>
          If you're building something interesting and need a backend engineer who can move fast and
          own large parts of the stack — let's talk.
        </p>
        <div style={styles.list}>
          <div style={styles.row}>
            <span style={styles.key}>email →</span>
            <a href={MAILTO} style={styles.emailLink}>
              {EMAIL}
            </a>
          </div>
          <div style={styles.row}>
            <span style={styles.key}>github →</span>
            <a
              href="https://github.com/divyangchauhan"
              target="_blank"
              rel="noopener"
              className="b-contact-link"
              style={styles.link}
            >
              divyangchauhan ↗
            </a>
          </div>
          <div style={styles.row}>
            <span style={styles.key}>linkedin →</span>
            <a
              href="https://www.linkedin.com/in/divyangchauhan"
              target="_blank"
              rel="noopener"
              className="b-contact-link"
              style={styles.link}
            >
              divyangchauhan ↗
            </a>
          </div>
          <div style={styles.row}>
            <span style={styles.key}>resume →</span>
            <a
              href="/assets/Divyang-Chauhan-Resume.pdf"
              download="Divyang-Chauhan-Resume.pdf"
              className="b-contact-link"
              style={styles.link}
            >
              download PDF ↓
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
