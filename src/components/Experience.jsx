import Link from 'next/link'
import { color, kicker, mono } from '../theme'

const jobs = [
  {
    company: 'Kleros',
    dates: 'FEB 2024 – PRESENT · REMOTE',
    role: 'Backend Engineer',
    stack: 'TypeScript · NestJS · PostgreSQL · EVM',
    body: 'Built and re-architected production backend systems for Kleros. Led the split of API and automation workloads into separate services and migrated 57K+ production events across databases with about one minute of downtime. Built a runtime-configurable event-ingestion service across 3 production chains feeding 23+ consumers, including a notification system serving 700+ active jurors.',
    chips: [
      '57K+ migrated events',
      '3 production chains',
      '23+ consumers',
      '700+ active jurors',
    ],
  },
  {
    company: 'NST Cyber',
    dates: 'MAR 2021 – FEB 2024 · REMOTE',
    role: 'Software Engineer → Team Lead',
    stack: 'TypeScript · NestJS · Python · AWS · Terraform',
    body: 'Progressed from founding backend engineer to leading a cross-functional team of 9. Led development of Assure v2, a multi-tenant vulnerability-triage and threat-surface-management platform used for multinational-bank customers. Authored roughly 70% of the backend, owned the database design and Terraform infrastructure, and helped replace an OutSystems platform costing about $200K/year.',
    chips: [
      '9-person team',
      '~70% backend ownership',
      '~$200K/year platform cost removed',
      'Deployments: ~2h → 10–15m',
    ],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="bp-shell bp-pad"
      style={{ padding: '56px 40px 24px' }}
    >
      <div
        className="bp-sectionhead"
        style={{
          borderBottom: `1px solid ${color.rule}`,
          paddingBottom: 16,
          marginBottom: 24,
        }}
      >
        <div>
          <div style={kicker()}>PRODUCTION EXPERIENCE</div>
          <h2
            style={{
              fontSize: 30,
              fontWeight: 700,
              margin: 0,
              letterSpacing: '-.02em',
            }}
          >
            5+ years building production systems
          </h2>
        </div>
        <Link
          href="/resume"
          style={{ fontFamily: mono, fontSize: 12, color: color.accent }}
        >
          View résumé →
        </Link>
      </div>
      <div
        style={{
          display: 'grid',
          // min() keeps the 320px floor from forcing sideways scroll on
          // viewports narrower than the floor plus the page padding.
          gridTemplateColumns:
            'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
          gap: 20,
        }}
      >
        {jobs.map((job) => (
          <article
            key={job.company}
            style={{
              border: `1px solid ${color.rule}`,
              borderRadius: 8,
              background: color.surface,
              padding: '26px 28px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                gap: 12,
                flexWrap: 'wrap',
                marginBottom: 6,
              }}
            >
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  letterSpacing: '-.01em',
                  margin: 0,
                }}
              >
                {job.company}
              </h3>
              <span
                style={{ fontFamily: mono, fontSize: 11, color: color.faint }}
              >
                {job.dates}
              </span>
            </div>
            <div
              style={{
                fontFamily: mono,
                fontSize: 12,
                color: color.accent,
                marginBottom: 10,
              }}
            >
              {job.role}
            </div>
            <div
              style={{
                fontFamily: mono,
                fontSize: 12,
                color: color.muted,
                marginBottom: 14,
              }}
            >
              {job.stack}
            </div>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.6,
                color: color.bodyAlt,
                margin: '0 0 16px',
              }}
            >
              {job.body}
            </p>
            <div
              style={{
                display: 'flex',
                gap: 8,
                flexWrap: 'wrap',
                fontFamily: mono,
                fontSize: 12,
              }}
            >
              {job.chips.map((chip) => (
                <span
                  key={chip}
                  style={{
                    border: `1px solid ${color.ruleStrong}`,
                    padding: '4px 9px',
                    borderRadius: 3,
                    background: color.chip,
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
