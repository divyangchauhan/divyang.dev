import { useState } from 'react'
import { mono, sans, reveal } from '../theme'

const built = [
  {
    title: 'Split a scaling monolith',
    desc: 'Led the full split of Atlas from a monolith into separate services — the monorepo setup and a production data migration that preserved user state — to resolve a scaling conflict between the bots and the APIs.',
  },
  {
    title: 'Event ingestion for EVM chains',
    desc: 'Architected a NestJS event ingestion service with runtime-configurable chains and contracts, emitting on-chain events for async downstream processing.',
  },
  {
    title: 'Bots + notifications',
    desc: "Built v1's multi-network bot infrastructure: automation (dispute progression, juror staking, with transaction simulation to prevent reverts and batched calls to cut gas) and notifications across all Kleros products.",
  },
  {
    title: 'Contract security review',
    desc: 'Reviewed the v2 arbitration contracts and surfaced four medium-severity issues.',
  },
]

const flowDetail = {
  chains: 'Multi-chain; smart contracts emit on-chain events.',
  ingest:
    'Runtime-configurable chains & contracts (add a new chain/contract without redeploying); normalizes events.',
  stream: 'Emits normalized events for async processing.',
  downstream: 'Automation Bots and Notifications consume the events.',
}

function FlowNode({ id, active, onSelect, flex, minWidth, children }) {
  const on = active === id
  return (
    <div
      onMouseEnter={() => onSelect(id)}
      onClick={() => onSelect(id)}
      style={{
        flex,
        minWidth,
        cursor: 'pointer',
        borderRadius: 10,
        background: on ? '#1a160c' : '#0e1116',
        border: `1px solid ${on ? '#f2b441' : '#3a4150'}`,
        padding: '16px 14px',
        textAlign: 'center',
        transition: 'all .3s ease',
        boxShadow: on ? '0 0 24px -6px rgba(242,180,65,.5)' : 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
  )
}

const Arrow = () => (
  <div style={{ display: 'flex', alignItems: 'center', color: '#f2b441', fontFamily: mono, fontSize: 18 }}>
    →
  </div>
)

const techTags = ['NestJS', 'TypeScript', 'EVM (multi-chain)', 'Viem', 'Solidity']

export default function Kleros() {
  const [active, setActive] = useState('ingest')

  return (
    <article
      style={{
        ...reveal(),
        border: '1px solid rgba(255,255,255,.1)',
        borderRadius: 20,
        background: 'linear-gradient(180deg,rgba(14,17,22,.7),rgba(10,12,16,.55))',
        overflow: 'hidden',
        marginBottom: 30,
      }}
    >
      {/* header band */}
      <div
        style={{
          position: 'relative',
          padding: '30px 38px 26px',
          borderBottom: '1px solid rgba(255,255,255,.07)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: 18,
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: sans,
                fontWeight: 700,
                fontSize: 30,
                letterSpacing: '-.02em',
                margin: '0 0 10px',
                color: '#f3f5f8',
              }}
            >
              Kleros{' '}
              <span style={{ color: '#6c7585', fontWeight: 500 }}>
                — decentralized arbitration protocol
              </span>
            </h2>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px 22px',
                fontFamily: mono,
                fontSize: 13,
                color: '#9aa3b2',
              }}
            >
              <span style={{ color: '#cdd3dd' }}>Full Stack Engineer</span>
              <span>·</span>
              <span>Kleros</span>
              <span>·</span>
              <span>Feb 2024 – May 2026</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a
              className="dc-btn-outline"
              href="https://kleros.io"
              target="_blank"
              rel="noopener"
              style={{
                fontFamily: mono,
                fontSize: 12.5,
                color: '#e6e9ef',
                border: '1px solid rgba(255,255,255,.2)',
                padding: '9px 15px',
                borderRadius: 7,
                textDecoration: 'none',
              }}
            >
              kleros.io ↗
            </a>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 7,
                fontFamily: mono,
                fontSize: 12.5,
                color: '#6c7585',
                border: '1px solid rgba(255,255,255,.1)',
                padding: '9px 15px',
                borderRadius: 7,
              }}
            >
              ⊘ Atlas · private
            </span>
          </div>
        </div>
      </div>

      <div style={{ padding: '30px 38px 36px' }}>
        <p style={{ fontSize: 17, lineHeight: 1.7, color: '#d4d9e1', margin: '0 0 32px', maxWidth: 880 }}>
          Kleros resolves disputes on-chain. I worked on Atlas, the backend behind Kleros v1 — the
          off-chain services connecting the Ethereum smart contracts to the products that depend on
          them.
        </p>

        {/* what I built */}
        <div style={{ ...reveal(), marginBottom: 34 }}>
          <div
            style={{
              fontFamily: mono,
              fontSize: 11,
              letterSpacing: '.18em',
              textTransform: 'uppercase',
              color: '#8a93a3',
              marginBottom: 16,
            }}
          >
            // What I built
          </div>
          <div className="dc-kl-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {built.map((b) => (
              <div
                key={b.title}
                style={{
                  border: '1px solid rgba(255,255,255,.1)',
                  borderRadius: 12,
                  background: 'rgba(14,17,22,.5)',
                  padding: '18px 20px',
                }}
              >
                <div style={{ fontSize: 15.5, fontWeight: 600, color: '#e6e9ef', marginBottom: 6 }}>
                  {b.title}
                </div>
                <div style={{ fontSize: 13.5, lineHeight: 1.6, color: '#9aa3b2' }}>{b.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* event ingestion pipeline */}
        <div
          style={{
            ...reveal(),
            border: '1px solid rgba(255,255,255,.1)',
            borderRadius: 16,
            background: 'rgba(8,10,14,.6)',
            padding: '24px 26px 26px',
            marginBottom: 32,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 10,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                fontFamily: mono,
                fontSize: 11,
                letterSpacing: '.18em',
                textTransform: 'uppercase',
                color: '#8a93a3',
              }}
            >
              // Event ingestion pipeline
            </div>
            <div style={{ fontFamily: mono, fontSize: 11, color: '#6c7585' }}>hover a stage</div>
          </div>
          <div className="dc-kl-flow" style={{ display: 'flex', alignItems: 'stretch', gap: 10, flexWrap: 'wrap' }}>
            <FlowNode id="chains" active={active} onSelect={setActive} flex={1} minWidth={130}>
              <div style={{ fontFamily: mono, fontSize: 13, color: '#cdd3dd' }}>EVM Chains</div>
            </FlowNode>
            <Arrow />
            <FlowNode id="ingest" active={active} onSelect={setActive} flex={1.3} minWidth={170}>
              <div style={{ fontFamily: mono, fontSize: 13, color: '#cdd3dd' }}>Event Ingestion Service</div>
              <div style={{ fontFamily: mono, fontSize: 11, color: '#6c7585', marginTop: 4 }}>NestJS</div>
            </FlowNode>
            <Arrow />
            <FlowNode id="stream" active={active} onSelect={setActive} flex={1} minWidth={130}>
              <div style={{ fontFamily: mono, fontSize: 13, color: '#cdd3dd' }}>Event Stream</div>
              <div style={{ fontFamily: mono, fontSize: 11, color: '#6c7585', marginTop: 4 }}>async</div>
            </FlowNode>
            <Arrow />
            <FlowNode id="downstream" active={active} onSelect={setActive} flex={1} minWidth={150}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: 5,
                }}
              >
                <div style={{ fontFamily: mono, fontSize: 12.5, color: '#cdd3dd' }}>Automation Bots</div>
                <div style={{ fontFamily: mono, fontSize: 10.5, color: '#5a6373' }}>·</div>
                <div style={{ fontFamily: mono, fontSize: 12.5, color: '#cdd3dd' }}>Notifications</div>
              </div>
            </FlowNode>
          </div>
          <div
            style={{
              marginTop: 18,
              borderTop: '1px solid rgba(255,255,255,.08)',
              paddingTop: 16,
              minHeight: 46,
            }}
          >
            <div style={{ fontSize: 14.5, lineHeight: 1.65, color: '#c6ccd6' }}>{flowDetail[active]}</div>
          </div>
        </div>

        {/* tech */}
        <div style={reveal()}>
          <div
            style={{
              fontFamily: mono,
              fontSize: 11,
              letterSpacing: '.18em',
              textTransform: 'uppercase',
              color: '#8a93a3',
              marginBottom: 14,
            }}
          >
            // Tech
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {techTags.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: mono,
                  fontSize: 12.5,
                  color: '#cdd3dd',
                  border: '1px solid rgba(255,255,255,.12)',
                  padding: '6px 11px',
                  borderRadius: 7,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
