import { color, mono } from '../theme'

const cta = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  fontWeight: 600,
  fontSize: 15,
  padding: '13px 22px',
  borderRadius: 6,
}

export default function Hero() {
  return (
    <header
      id="top"
      className="bp-shell bp-pad"
      style={{ padding: '88px 40px 64px' }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          fontFamily: mono,
          fontSize: 12,
          color: color.accent,
          border: `1px solid ${color.ruleAccent}`,
          background: color.tint,
          padding: '6px 12px',
          borderRadius: 20,
          marginBottom: 30,
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: color.accent,
            display: 'inline-block',
          }}
        />
        BACKEND · APPLIED AI · AGENTIC SYSTEMS
      </div>
      <h1
        style={{
          fontSize: 'clamp(42px, 8.4vw, 76px)',
          lineHeight: 1.02,
          fontWeight: 700,
          margin: '0 0 18px',
          letterSpacing: '-.035em',
        }}
      >
        Divyang Chauhan
      </h1>
      <div
        style={{
          fontSize: 'clamp(23px, 4vw, 31px)',
          lineHeight: 1.22,
          fontWeight: 600,
          color: color.accent,
          margin: '0 0 22px',
          maxWidth: '39ch',
          letterSpacing: '-.02em',
          textWrap: 'balance',
        }}
      >
        Applied AI engineer building systems you can measure, verify, and ship.
      </div>
      <p
        style={{
          fontSize: 'clamp(17px, 2.2vw, 19px)',
          lineHeight: 1.6,
          color: color.body,
          maxWidth: '66ch',
          margin: '0 0 36px',
        }}
      >
        I design agent architectures, evaluation harnesses, and LLM-backed
        products — bringing the backend, security, and infrastructure depth
        needed to make AI systems reliable beyond the demo.
      </p>
      <div
        style={{
          display: 'flex',
          gap: 14,
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <a
          href="#work"
          style={{ ...cta, background: color.accent, color: '#fff' }}
        >
          View the work →
        </a>
        <a
          href="mailto:divyang@divyang.dev"
          style={{
            ...cta,
            border: `1px solid ${color.ruleAccent}`,
            color: color.accent,
            background: color.surface,
          }}
        >
          divyang@divyang.dev
        </a>
        <span style={{ fontFamily: mono, fontSize: 13, color: color.faint }}>
          India · remote · OSCP
        </span>
      </div>
    </header>
  )
}
