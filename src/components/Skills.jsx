import SectionHeading from './SectionHeading.jsx'
import { SKILLS } from '../data.js'

const styles = {
  section: { marginTop: '28px' },
  row: {
    display: 'grid',
    gridTemplateColumns: '230px 1fr',
    gap: '20px',
    padding: '13px 0',
    borderBottom: '1px solid #141C24',
    fontSize: '13px',
  },
  rowLast: {
    display: 'grid',
    gridTemplateColumns: '230px 1fr',
    gap: '20px',
    padding: '13px 0',
    fontSize: '13px',
  },
  key: { color: '#71818D' },
  value: { color: '#A7B6C0', lineHeight: 1.7 },
}

export default function Skills() {
  return (
    <>
      <SectionHeading id="skills" label="03 · Skills" />
      <section style={styles.section}>
        {SKILLS.map((row, i) => (
          <div key={row.key} style={i < SKILLS.length - 1 ? styles.row : styles.rowLast}>
            <span style={styles.key}>{row.key}</span>
            <span style={styles.value}>{row.value}</span>
          </div>
        ))}
      </section>
    </>
  )
}
