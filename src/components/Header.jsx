import { NAV } from '../data.js'
import { scrollToSection, scrollToTop, getSiteDomain } from '../scroll.js'

const styles = {
  bar: {
    position: 'sticky',
    top: 0,
    zIndex: 50,
    background: 'rgba(11,15,19,0.92)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    borderBottom: '1px solid #1C2630',
  },
  inner: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '14px 32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '12.5px',
    color: '#71818D',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    background: 'none',
    border: 'none',
    fontFamily: 'inherit',
    padding: 0,
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#4ADE80',
    display: 'inline-block',
  },
  nav: { display: 'flex', gap: '24px' },
  link: {
    fontSize: '12.5px',
    color: '#71818D',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    fontFamily: 'inherit',
    padding: 0,
  },
}

export default function Header() {
  return (
    <div style={styles.bar}>
      <div style={styles.inner}>
        <button type="button" className="b-logo" style={styles.logo} onClick={scrollToTop}>
          <span style={styles.dot} />
          {getSiteDomain()}
        </button>
        <nav style={styles.nav}>
          {NAV.map((item) => (
            <button
              key={item.section}
              type="button"
              className="b-navlink"
              style={styles.link}
              onClick={() => scrollToSection(item.section)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}
