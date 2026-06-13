import { useState } from 'react'
import { mono, sans } from '../theme'

const caps = {
  etl: {
    title: 'ETL pipeline',
    desc: 'Kafka-triggered AWS Lambda pipeline that parses raw security scan data into vulnerability datasets, exploit intelligence, typosquatted domain data, and exposed asset inventory.',
    nodes: ['api', 'kafka', 'etl', 'mongo'],
    edges: ['e_api_kafka', 'e_kafka_etl', 'e_etl_mongo'],
  },
  tenancy: {
    title: 'Multi-tenant architecture',
    desc: 'Three-level tenancy (master → supertenant → tenant) with per-tenant subscription gating and data residency controls at the storage level.',
    nodes: ['api', 'mongo'],
    edges: ['e_api_mongo'],
  },
  whitelabel: {
    title: 'Runtime white-labeling',
    desc: 'Every supertenant gets a fully branded portal without a new build; resolves at runtime from a single deployed Angular app on CloudFront.',
    nodes: ['browser', 'cloudfront'],
    edges: ['e_browser_cf'],
  },
  authfront: {
    title: 'Authenticated-only frontend',
    desc: 'No HTML, CSS, or JS served to the browser without authentication, enforced via standalone login Lambda + Cognito session cookie.',
    nodes: ['browser', 'cloudfront', 'login'],
    edges: ['e_browser_cf', 'e_cf_login'],
  },
  authz: {
    title: 'Complex authorization',
    desc: 'CASL.js attribute-based policies enforcing fine-grained access scoped simultaneously by supertenant, tenant, and project across a single shared API.',
    nodes: ['api', 'casl'],
    edges: ['e_api_casl'],
  },
  impersonation: {
    title: 'Backoffice impersonation',
    desc: "Admins can scope into any tenant's customer portal without creating a new user or separate session.",
    nodes: ['login', 'api', 'casl'],
    edges: ['e_login_api', 'e_api_casl'],
  },
}

const tabOrder = [
  ['etl', 'ETL pipeline'],
  ['tenancy', 'Multi-tenant architecture'],
  ['whitelabel', 'Runtime white-labeling'],
  ['authfront', 'Authenticated-only frontend'],
  ['authz', 'Complex authorization'],
  ['impersonation', 'Backoffice impersonation'],
]

const edges = [
  { id: 'e_browser_cf', d: 'M120,219 C145,219 145,143 160,143' },
  { id: 'e_cf_login', d: 'M230,166 C230,208 230,208 230,250' },
  { id: 'e_login_api', d: 'M300,273 C330,273 330,208 350,208' },
  { id: 'e_api_casl', d: 'M420,185 C420,150 420,150 420,116' },
  { id: 'e_api_kafka', d: 'M490,208 C515,208 515,143 540,143' },
  { id: 'e_kafka_etl', d: 'M600,166 C600,185 600,185 600,205' },
  { id: 'e_etl_mongo', d: 'M660,228 C700,250 680,300 645,323' },
  { id: 'e_api_mongo', d: 'M420,231 C430,360 590,366 638,330' },
]

const nodes = [
  { id: 'browser', left: 10, top: 196, w: 110, fs: 12.5, label: 'Browser' },
  { id: 'cloudfront', left: 160, top: 120, w: 140, fs: 12.5, label: 'CloudFront' },
  { id: 'login', left: 160, top: 250, w: 140, fs: 11.5, label: 'Login λ · Cognito' },
  { id: 'api', left: 350, top: 185, w: 140, fs: 12.5, label: 'API · NestJS' },
  { id: 'casl', left: 350, top: 70, w: 140, fs: 12.5, label: 'CASL policies' },
  { id: 'kafka', left: 540, top: 120, w: 120, fs: 12.5, label: 'Kafka' },
  { id: 'etl', left: 540, top: 205, w: 120, fs: 12.5, label: 'ETL λ' },
  { id: 'mongo', left: 585, top: 300, w: 120, fs: 12.5, label: 'MongoDB' },
]

export default function ArchitectureDiagram() {
  const [active, setActive] = useState('etl')
  const [hover, setHover] = useState(null)
  const c = caps[active]

  return (
    <div
      style={{
        border: '1px solid rgba(255,255,255,.1)',
        borderRadius: 16,
        background: 'rgba(8,10,14,.6)',
        padding: '26px 26px 30px',
        marginBottom: 40,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 10,
          marginBottom: 8,
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
          // What I built — interactive architecture
        </div>
        <div style={{ fontFamily: mono, fontSize: 11, color: '#6c7585' }}>click a capability →</div>
      </div>

      {/* capability tabs */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9, margin: '18px 0 22px' }}>
        {tabOrder.map(([key, label]) => {
          const on = active === key
          return (
            <button
              key={key}
              onClick={() => setActive(key)}
              onMouseEnter={() => setHover(key)}
              onMouseLeave={() => setHover(null)}
              style={{
                cursor: 'pointer',
                fontFamily: mono,
                fontSize: 12.5,
                background: on ? 'rgba(242,180,65,.14)' : 'transparent',
                border: `1px solid ${
                  on ? '#f2b441' : hover === key ? 'rgba(242,180,65,.4)' : 'rgba(255,255,255,.14)'
                }`,
                color: on ? '#f2b441' : '#aab2c0',
                padding: '9px 14px',
                borderRadius: 8,
                transition: 'all .25s ease',
              }}
            >
              {label}
            </button>
          )
        })}
      </div>

      <div
        className="dc-diagram-grid"
        style={{ display: 'grid', gridTemplateColumns: '760px 1fr', gap: 24, alignItems: 'start' }}
      >
        {/* diagram canvas */}
        <div className="dc-diagram-scroll">
        <div style={{ position: 'relative', width: 760, height: 440, flexShrink: 0 }}>
          <svg
            viewBox="0 0 760 440"
            style={{
              position: 'absolute',
              inset: 0,
              width: 760,
              height: 440,
              overflow: 'visible',
              pointerEvents: 'none',
            }}
          >
            {edges.map((e) => {
              const on = c.edges.includes(e.id)
              return (
                <path
                  key={e.id}
                  d={e.d}
                  fill="none"
                  stroke={on ? '#f2b441' : '#2c3340'}
                  strokeWidth={on ? 2 : 1.4}
                  style={{
                    opacity: on ? 1 : 0.45,
                    strokeDasharray: on ? '5 6' : 'none',
                    animation: on ? 'pf-flow 1.2s linear infinite' : 'none',
                  }}
                />
              )
            })}
          </svg>
          {nodes.map((n) => {
            const on = c.nodes.includes(n.id)
            return (
              <div
                key={n.id}
                style={{
                  position: 'absolute',
                  left: n.left,
                  top: n.top,
                  width: n.w,
                  height: 46,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  borderRadius: 9,
                  background: on ? '#1a160c' : '#0e1116',
                  border: `1px solid ${on ? '#f2b441' : '#3a4150'}`,
                  color: on ? '#f2b441' : '#cdd3dd',
                  fontFamily: mono,
                  fontSize: n.fs,
                  boxShadow: on ? '0 0 24px -4px rgba(242,180,65,.55)' : 'none',
                  opacity: on ? 1 : 0.4,
                  transition: 'all .35s ease',
                }}
              >
                {n.label}
              </div>
            )
          })}
          {/* layer labels */}
          <div
            style={{
              position: 'absolute',
              left: 10,
              top: 30,
              fontFamily: mono,
              fontSize: 10,
              letterSpacing: '.14em',
              color: '#5a6373',
            }}
          >
            EDGE
          </div>
          <div
            style={{
              position: 'absolute',
              left: 350,
              top: 30,
              fontFamily: mono,
              fontSize: 10,
              letterSpacing: '.14em',
              color: '#5a6373',
            }}
          >
            APPLICATION
          </div>
          <div
            style={{
              position: 'absolute',
              left: 540,
              top: 80,
              fontFamily: mono,
              fontSize: 10,
              letterSpacing: '.14em',
              color: '#5a6373',
            }}
          >
            EVENTS · DATA
          </div>
        </div>
        </div>

        {/* detail panel */}
        <div
          className="dc-diagram-detail"
          style={{ borderLeft: '1px solid rgba(255,255,255,.1)', paddingLeft: 22, minHeight: 300 }}
        >
          <div
            style={{
              fontFamily: sans,
              fontWeight: 700,
              fontSize: 21,
              color: '#f2b441',
              marginBottom: 14,
              lineHeight: 1.2,
            }}
          >
            {c.title}
          </div>
          <div style={{ fontSize: 15, lineHeight: 1.72, color: '#c6ccd6' }}>{c.desc}</div>
        </div>
      </div>
    </div>
  )
}
