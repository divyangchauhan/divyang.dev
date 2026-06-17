import { mono, sans, reveal } from '../theme'

const promptLine = (cmd) => (
  <div>
    <span style={{ color: '#4ad07f' }}>➜</span> <span style={{ color: '#6c7585' }}>~</span>{' '}
    <span style={{ color: '#e6e9ef' }}>{cmd}</span>
  </div>
)

export default function Hero() {
  return (
    <header
      id="top"
      style={{
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        gridTemplateColumns: '1.08fr .92fr',
        gap: 40,
        maxWidth: 1280,
        margin: '0 auto',
        padding: '78px 40px 96px',
        minHeight: '86vh',
        alignItems: 'center',
        scrollMarginTop: 84,
      }}
      className="dc-hero pf-pad"
    >
      <div style={reveal()}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            fontFamily: mono,
            fontSize: 12,
            letterSpacing: '.2em',
            color: '#f2b441',
            marginBottom: 26,
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
          BACKEND · SECURITY · WEB3
        </div>
        <h1
          className="pf-h1"
          style={{
            fontFamily: sans,
            fontWeight: 700,
            fontSize: 74,
            lineHeight: 1.0,
            letterSpacing: '-.025em',
            margin: '0 0 22px',
            color: '#f3f5f8',
          }}
        >
          Divyang
          <br />
          Chauhan
        </h1>
        <p
          style={{
            fontFamily: mono,
            fontSize: 14.5,
            lineHeight: 1.6,
            color: '#9aa3b2',
            margin: '0 0 26px',
            maxWidth: 470,
          }}
        >
          Backend engineer who builds systems that hold up under pressure.
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.76, color: '#c6ccd6', margin: '0 0 34px', maxWidth: 520 }}>
          I take products from prototype to production — fast, and owning the parts that are easy to
          get wrong. I gravitate toward{' '}
          <strong style={{ color: '#f2b441', fontWeight: 600 }}>early-stage teams</strong> where the
          hard problems aren't solved yet.
        </p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <a
            className="dc-btn-fill"
            href="#projects"
            style={{
              fontFamily: mono,
              fontSize: 13.5,
              fontWeight: 600,
              color: '#0a0c10',
              background: '#f2b441',
              padding: '14px 24px',
              borderRadius: 8,
              textDecoration: 'none',
            }}
          >
            View Projects →
          </a>
          <a
            className="dc-btn-outline"
            href="#contact"
            style={{
              fontFamily: mono,
              fontSize: 13.5,
              fontWeight: 500,
              color: '#e6e9ef',
              border: '1px solid rgba(255,255,255,.2)',
              padding: '14px 24px',
              borderRadius: 8,
              textDecoration: 'none',
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* hero whoami terminal */}
      <div
        className="pf-term"
        style={{
          ...reveal(0.12),
          position: 'relative',
          border: '1px solid rgba(255,255,255,.08)',
          borderRadius: 14,
          background: '#0b0e12',
          overflow: 'hidden',
          alignSelf: 'center',
          boxShadow: '0 30px 60px -34px rgba(0,0,0,.85)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '15px 18px',
            borderBottom: '1px solid rgba(255,255,255,.07)',
          }}
        >
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f56' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ffbd2e' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#27c93f' }} />
          <span style={{ fontFamily: mono, fontSize: 11, color: '#6c7585', marginLeft: 12 }}>
            ~/divyang — zsh
          </span>
          <span
            style={{
              marginLeft: 'auto',
              fontFamily: mono,
              fontSize: 10.5,
              letterSpacing: '.14em',
              color: '#6c7585',
            }}
          >
            FIG.01
          </span>
        </div>
        <div style={{ padding: '26px 26px', fontFamily: mono, fontSize: 14.5, lineHeight: 2.05 }}>
          {promptLine('whoami')}
          <div style={{ color: '#cdd3dd', paddingLeft: 2 }}>divyang_chauhan</div>
          <div style={{ marginTop: 13 }}>{promptLine('years --backend')}</div>
          <div style={{ color: '#cdd3dd' }}>5+ · founding engineer ×2</div>
          <div style={{ marginTop: 13 }}>{promptLine('built')}</div>
          <div style={{ color: '#cdd3dd' }}>multi-tenant SaaS · EVM event pipelines · serverless ETL</div>
          <div style={{ marginTop: 13 }}>{promptLine('stack --top')}</div>
          <div style={{ color: '#cdd3dd' }}>TypeScript · Python · NestJS · AWS · Kafka</div>
          <div style={{ marginTop: 13 }}>
            <span style={{ color: '#4ad07f' }}>➜</span> <span style={{ color: '#6c7585' }}>~</span>{' '}
            <span
              style={{
                display: 'inline-block',
                width: 9,
                height: 18,
                background: '#f2b441',
                verticalAlign: -3,
                animation: 'pf-caret 1.1s step-end infinite',
              }}
            />
          </div>
        </div>
      </div>
    </header>
  )
}
