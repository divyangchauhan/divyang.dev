import { useState } from 'react'
import { mono } from '../theme'

export default function Collapsible({ label, children }) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        style={{
          cursor: 'pointer',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 11,
          background: 'rgba(14,17,22,.5)',
          border: `1px solid ${open ? 'rgba(242,180,65,.4)' : 'rgba(255,255,255,.1)'}`,
          borderRadius: 12,
          padding: '15px 18px',
          fontFamily: mono,
          fontSize: 11,
          letterSpacing: '.18em',
          textTransform: 'uppercase',
          color: open ? '#cdd3dd' : '#8a93a3',
          transition: 'all .25s ease',
          textAlign: 'left',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            color: '#f2b441',
            fontSize: 13,
            transition: 'transform .25s ease',
            transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
          }}
        >
          ▸
        </span>
        <span>{label}</span>
      </button>
      {open && <div style={{ paddingTop: 20 }}>{children}</div>}
    </div>
  )
}
