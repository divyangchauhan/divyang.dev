import { mono, reveal } from '../theme'

// "// LABEL" heading row with the amber-to-transparent rule line.
export default function SectionLabel({ label, meta, marginBottom = 38 }) {
  return (
    <div style={{ ...reveal(), display: 'flex', alignItems: 'center', gap: 14, marginBottom }}>
      <span style={{ fontFamily: mono, fontSize: 12, letterSpacing: '.22em', color: '#f2b441' }}>
        {label}
      </span>
      {meta && <span style={{ fontFamily: mono, fontSize: 12, color: '#6c7585' }}>{meta}</span>}
      <span
        style={{
          flex: 1,
          height: 1,
          background: 'linear-gradient(90deg,rgba(242,180,65,.35),transparent)',
        }}
      />
    </div>
  )
}
