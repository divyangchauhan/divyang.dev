import Link from 'next/link'
import Nav from './Nav'
import RequestedPath from './RequestedPath'
import { color, kicker, mono, sans } from '../theme'

// Somewhere to go next, in the order a lost visitor is most likely to want it.
const destinations = [
  {
    href: '/#work',
    label: 'Projects',
    body: 'Four systems, with the reasoning behind each.',
  },
  {
    href: '/#skills',
    label: 'Stack',
    body: 'Languages, infra, and where the depth is.',
  },
  {
    href: '/resume',
    label: 'Résumé',
    body: 'One page, print-ready.',
  },
]

const button = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  fontWeight: 600,
  fontSize: 15,
  padding: '13px 22px',
  borderRadius: 6,
}

export default function NotFound() {
  return (
    <div
      style={{
        background: color.bg,
        // blueprint grid: 28px ruling drawn straight onto the page ground
        backgroundImage: `linear-gradient(${color.grid} 1px,transparent 1px),linear-gradient(90deg,${color.grid} 1px,transparent 1px)`,
        backgroundSize: '28px 28px',
        color: color.ink,
        fontFamily: sans,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* The nav's section links are fragments of the home page, which this is
          not — so they need to travel there first. */}
      <Nav hashBase="/" />

      <main
        className="bp-pad"
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // Vertical only — the side padding is bp-pad's, which narrows on
          // small screens. An inline `padding` shorthand would outrank it.
          paddingTop: 72,
          paddingBottom: 96,
        }}
      >
        <div style={{ width: '100%', maxWidth: 860 }}>
          <div
            className="bp-404-card"
            style={{
              position: 'relative',
              border: `1.5px solid ${color.accent}`,
              borderRadius: 8,
              background: color.surface,
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: -9,
                left: 26,
                background: color.accent,
                color: '#fff',
                fontFamily: mono,
                fontSize: 11,
                padding: '2px 9px',
                borderRadius: 3,
              }}
            >
              SHEET NOT FOUND
            </div>

            <div className="bp-404-head">
              <div
                style={{
                  fontFamily: mono,
                  fontSize: 96,
                  fontWeight: 600,
                  lineHeight: 0.9,
                  letterSpacing: '-.04em',
                  color: color.accent,
                }}
              >
                404
              </div>
              <div style={{ minWidth: 0 }}>
                <h1
                  style={{
                    fontSize: 34,
                    fontWeight: 700,
                    margin: '0 0 14px',
                    letterSpacing: '-.025em',
                  }}
                >
                  This page isn&rsquo;t in the drawing set.
                </h1>
                <p
                  style={{
                    fontSize: 17,
                    lineHeight: 1.6,
                    color: color.body,
                    margin: '0 0 26px',
                    maxWidth: '56ch',
                  }}
                >
                  The URL you followed doesn&rsquo;t map to anything here. It
                  may have been renamed, or it never existed.
                </p>

                {/* Reads as the server log line for the request that just
                    failed. Its clipping rules live in bp-404-req. */}
                <div
                  className="bp-404-req"
                  style={{
                    fontFamily: mono,
                    fontSize: 13,
                    background: color.chip,
                    border: `1px solid ${color.ruleStrong}`,
                    borderRadius: 4,
                    padding: '12px 14px',
                    color: color.muted,
                    marginBottom: 30,
                  }}
                >
                  GET <RequestedPath />{' '}
                  <span style={{ color: color.negative }}>&rarr; 404</span>
                  <span
                    aria-hidden="true"
                    style={{
                      animation: 'bp-blink 1.1s steps(1) infinite',
                      color: color.accent,
                      marginLeft: 2,
                    }}
                  >
                    &#9612;
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    gap: 14,
                    flexWrap: 'wrap',
                    alignItems: 'center',
                  }}
                >
                  <Link
                    href="/"
                    style={{
                      ...button,
                      background: color.accent,
                      color: '#fff',
                    }}
                  >
                    &larr; Back to the work
                  </Link>
                  <a
                    href="mailto:divyang@divyang.dev?subject=Broken%20link%20on%20divyang.dev"
                    style={{
                      ...button,
                      border: `1px solid ${color.ruleAccent}`,
                      color: color.accent,
                      background: color.surface,
                    }}
                  >
                    Report a broken link
                  </a>
                </div>
              </div>
            </div>
          </div>

          <nav
            aria-label="Suggested pages"
            style={{
              marginTop: 26,
              border: `1px solid ${color.rule}`,
              borderRadius: 8,
              background: color.surface,
            }}
          >
            <div
              style={{
                ...kicker(),
                padding: '14px 22px',
                marginBottom: 0,
                borderBottom: `1px solid ${color.ruleSoft}`,
              }}
            >
              TRY_INSTEAD[{destinations.length}]
            </div>
            <div className="bp-grid-3-flush">
              {destinations.map(({ href, label, body }, index) => (
                <Link
                  key={href}
                  href={href}
                  style={{ padding: '20px 22px', display: 'block' }}
                >
                  <div
                    style={{
                      fontFamily: mono,
                      fontSize: 11,
                      color: color.faint,
                      marginBottom: 7,
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      color: color.ink,
                      marginBottom: 5,
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      color: color.muted,
                      lineHeight: 1.5,
                    }}
                  >
                    {body}
                  </div>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </main>

      <footer
        className="bp-pad"
        style={{
          borderTop: `1px solid ${color.rule}`,
          paddingTop: 20,
          paddingBottom: 20,
          fontFamily: mono,
          fontSize: 12,
          color: color.faint,
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <span>divyang chauhan · applied ai engineer</span>
        <span>India · remote</span>
      </footer>
    </div>
  )
}
