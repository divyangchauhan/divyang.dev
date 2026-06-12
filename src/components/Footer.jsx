import { getSiteDomain } from '../scroll.js'

const styles = {
  footer: {
    borderTop: '1px solid #1C2630',
    padding: '22px 0 110px',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '12px',
    color: '#71818D',
  },
}

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <span>© 2026 Divyang Chauhan</span>
      <span>{getSiteDomain()}</span>
    </footer>
  )
}
