const styles = {
  row: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    paddingTop: '88px',
  },
  slashes: { fontSize: '13px', color: '#4ADE80' },
  label: {
    fontSize: '12px',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: '#E6EDF2',
  },
  rule: { flex: 1, height: '1px', background: '#1C2630' },
}

// `// 0X · Title` divider used to open each section.
export default function SectionHeading({ id, label, paddingTop }) {
  const rowStyle = paddingTop !== undefined ? { ...styles.row, paddingTop } : styles.row
  return (
    <div id={id} style={rowStyle}>
      <span style={styles.slashes}>//</span>
      <span style={styles.label}>{label}</span>
      <div style={styles.rule} />
    </div>
  )
}
