import { mono, sans, reveal } from '../theme'
import SectionLabel from './SectionLabel'
import CountUp from './CountUp'
import ArchitectureDiagram from './ArchitectureDiagram'
import Collapsible from './Collapsible'
import Kleros from './Kleros'

const Tag = ({ children, fontSize = 12, padding = '5px 10px' }) => (
  <span
    style={{
      fontFamily: mono,
      fontSize,
      color: '#cdd3dd',
      border: '1px solid rgba(255,255,255,.12)',
      padding,
      borderRadius: 6,
    }}
  >
    {children}
  </span>
)

const metrics = [
  { to: 200, prefix: '$', suffix: 'K', label: 'Infra cost saved / yr', flagship: true, delay: 0 },
  { to: 80, suffix: '%', label: 'Faster deploys via IaC', delay: 0.1 },
  { to: 40, prefix: '+', suffix: '%', label: 'Revenue from tenancy model', delay: 0.15 },
  { to: 9, label: 'Team members led', delay: 0.2 },
]

const techStack = [
  { title: 'Backend', items: ['NestJS', 'AWS Lambda', 'MongoDB', 'CASL.js'] },
  { title: 'Frontend', items: ['Angular', 'CloudFront', 'CloudFront Functions'] },
  { title: 'Auth', items: ['AWS Cognito', 'Custom Lambda triggers'] },
  { title: 'ETL', items: ['AWS Lambda pipeline', 'Apache Kafka'] },
  { title: 'Infrastructure', items: ['AWS', 'ECS', 'S3', 'Terraform'] },
  { title: 'Testing', items: ['Cypress (E2E)'] },
]

function MetricTile({ m }) {
  return (
    <div
      style={{
        ...reveal(m.delay),
        border: m.flagship ? '1px solid rgba(242,180,65,.28)' : '1px solid rgba(255,255,255,.1)',
        borderRadius: 12,
        background: m.flagship ? 'rgba(242,180,65,.05)' : 'rgba(14,17,22,.5)',
        padding: '18px 16px',
      }}
    >
      <CountUp
        to={m.to}
        prefix={m.prefix}
        suffix={m.suffix}
        style={{
          fontFamily: sans,
          fontWeight: 700,
          fontSize: 30,
          color: m.flagship ? '#f2b441' : '#f3f5f8',
          lineHeight: 1,
        }}
      />
      <div style={{ fontFamily: mono, fontSize: 10.5, lineHeight: 1.4, color: '#9aa3b2', marginTop: 9 }}>
        {m.label}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="pf-pad"
      style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: 1180,
        margin: '0 auto',
        padding: '60px 40px 30px',
        scrollMarginTop: 84,
      }}
    >
      <SectionLabel label="// SELECTED WORK" meta="04 PROJECTS" marginBottom={40} />

      {/* ===== FLAGSHIP: NST CYBER ASSURE ===== */}
      <article
        style={{
          ...reveal(),
          border: '1px solid rgba(255,255,255,.1)',
          borderRadius: 20,
          background: 'linear-gradient(180deg,rgba(16,19,25,.9),rgba(10,12,16,.6))',
          overflow: 'hidden',
          marginBottom: 30,
        }}
      >
        {/* header band */}
        <div
          style={{
            position: 'relative',
            padding: '34px 38px 30px',
            borderBottom: '1px solid rgba(255,255,255,.07)',
            overflow: 'hidden',
          }}
        >
          <div
            className="pf-glow"
            style={{
              position: 'absolute',
              top: '-30%',
              right: '-4%',
              width: '42%',
              height: '160%',
              background: 'radial-gradient(circle,rgba(242,180,65,.1),transparent 65%)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: 18,
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontFamily: mono,
                  fontSize: 11,
                  letterSpacing: '.16em',
                  textTransform: 'uppercase',
                  color: '#0a0c10',
                  background: '#f2b441',
                  padding: '4px 10px',
                  borderRadius: 5,
                  fontWeight: 600,
                  marginBottom: 18,
                }}
              >
                ★ Flagship case study
              </div>
              <h2
                style={{
                  fontFamily: sans,
                  fontWeight: 700,
                  fontSize: 40,
                  letterSpacing: '-.02em',
                  margin: '0 0 10px',
                  color: '#f3f5f8',
                }}
              >
                NST Cyber Assure
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
                <span style={{ color: '#cdd3dd' }}>Founding Engineer &amp; Team Lead</span>
                <span>·</span>
                <span>NST Cyber</span>
                <span>·</span>
                <span>Mar 2021 – Feb 2024</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a
                className="dc-btn-outline"
                href="https://www.nstcyber.ai"
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
                nstcyber.ai ↗
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
                ⊘ Codebase · private
              </span>
            </div>
          </div>
        </div>

        <div style={{ padding: '34px 38px 40px' }}>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: '#d4d9e1', margin: '0 0 34px', maxWidth: 880 }}>
            A multi-tenant SaaS platform that gives enterprises a real-time view of their external
            attack surface — vulnerabilities, exploitable weaknesses, exposed internet assets, and the
            threat actors most likely to target them. I was the founding engineer, contributed{' '}
            <strong style={{ color: '#f2b441', fontWeight: 600 }}>~70% of the production codebase</strong>,
            and eventually led a cross-functional team of 9.
          </p>

          {/* metrics */}
          <div
            className="dc-metrics"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: 14,
              marginBottom: 40,
            }}
          >
            {metrics.map((m) => (
              <MetricTile key={m.label} m={m} />
            ))}
          </div>

          {/* context: v1 -> v2 (collapsible) */}
          <div style={{ ...reveal(), marginBottom: 24 }}>
            <Collapsible label="The rebuild story">
            <p style={{ fontSize: 15.5, lineHeight: 1.74, color: '#b6bdc8', margin: '0 0 24px', maxWidth: 880 }}>
              A third-party studio was contracted to build Assure over 6 months. Their delivery was
              buggy and unusable. I was brought in, rebuilt it from scratch in OutSystems in 3 months
              (Assure v1), then led a full rewrite in TypeScript on serverless AWS (Assure v2) when
              OutSystems hit hard architectural ceilings.
            </p>
            <div style={{ display: 'flex', alignItems: 'stretch', gap: 16, flexWrap: 'wrap' }}>
              <div
                style={{
                  flex: 1,
                  minWidth: 220,
                  border: '1px solid rgba(255,255,255,.1)',
                  borderRadius: 12,
                  background: 'rgba(14,17,22,.5)',
                  padding: '18px 20px',
                }}
              >
                <div style={{ fontFamily: mono, fontSize: 12, color: '#8a93a3', marginBottom: 6 }}>
                  ASSURE v1
                </div>
                <div style={{ fontSize: 16, fontWeight: 600, color: '#e6e9ef', marginBottom: 4 }}>
                  OutSystems · 3 months
                </div>
                <div style={{ fontSize: 13, color: '#9aa3b2', lineHeight: 1.5 }}>
                  Rebuilt from scratch, shipped &amp; usable.
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: '#f2b441',
                  fontSize: 22,
                  fontFamily: mono,
                }}
              >
                →
              </div>
              <div
                style={{
                  flex: 1.4,
                  minWidth: 280,
                  border: '1px solid rgba(242,180,65,.3)',
                  borderRadius: 12,
                  background: 'rgba(242,180,65,.05)',
                  padding: '18px 20px',
                }}
              >
                <div style={{ fontFamily: mono, fontSize: 12, color: '#f2b441', marginBottom: 6 }}>
                  ASSURE v2
                </div>
                <div style={{ fontSize: 16, fontWeight: 600, color: '#f3f5f8', marginBottom: 10 }}>
                  TypeScript · serverless AWS
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <div style={{ fontFamily: mono, fontSize: 12, color: '#9aa3b2' }}>
                    ⊘ no runtime white-labeling
                  </div>
                  <div style={{ fontFamily: mono, fontSize: 12, color: '#9aa3b2' }}>
                    ⊘ no three-level tenancy
                  </div>
                  <div style={{ fontFamily: mono, fontSize: 12, color: '#9aa3b2' }}>
                    ⊘ no storage-level tenant isolation
                  </div>
                </div>
                <div style={{ fontSize: 12, color: '#6c7585', marginTop: 10, fontStyle: 'italic' }}>
                  — ceilings that forced the rewrite
                </div>
              </div>
            </div>
            </Collapsible>
          </div>

          {/* interactive architecture diagram */}
          <div style={reveal()}>
            <ArchitectureDiagram />
          </div>

          {/* tech stack (collapsible) */}
          <div style={{ ...reveal(), marginBottom: 38 }}>
            <Collapsible label="Tech stack">
            <div
              className="dc-techstack"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}
            >
              {techStack.map((group) => (
                <div
                  key={group.title}
                  style={{
                    border: '1px solid rgba(255,255,255,.08)',
                    borderRadius: 11,
                    background: 'rgba(14,17,22,.45)',
                    padding: '16px 18px',
                  }}
                >
                  <div
                    style={{
                      fontFamily: mono,
                      fontSize: 11,
                      letterSpacing: '.1em',
                      textTransform: 'uppercase',
                      color: '#f2b441',
                      marginBottom: 12,
                    }}
                  >
                    {group.title}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                    {group.items.map((i) => (
                      <Tag key={i}>{i}</Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            </Collapsible>
          </div>

          {/* security record */}
          <div
            style={{
              ...reveal(),
              border: '1px solid rgba(242,180,65,.22)',
              borderRadius: 14,
              background: 'rgba(242,180,65,.04)',
              padding: '26px 28px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                fontFamily: mono,
                fontSize: 11,
                letterSpacing: '.16em',
                textTransform: 'uppercase',
                color: '#f2b441',
                marginBottom: 14,
              }}
            >
              🛡 Security record
            </div>
            <p style={{ fontSize: 16.5, lineHeight: 1.7, color: '#d4d9e1', margin: 0, maxWidth: 900 }}>
              Assure was penetration tested before every release — appropriate for a platform sold to
              banks and enterprises. Across my entire tenure,{' '}
              <strong style={{ color: '#f2b441', fontWeight: 600 }}>
                no pentest ever uncovered data leakage, cross-tenant exposure, or access control
                bypasses.
              </strong>
            </p>
          </div>
        </div>
      </article>

      {/* ===== KLEROS ===== */}
      <Kleros />

      {/* ===== Tarpan + ResumeForge ===== */}
      <div className="dc-sidecards" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <article
          style={{
            ...reveal(),
            border: '1px solid rgba(255,255,255,.1)',
            borderRadius: 16,
            background: 'rgba(14,17,22,.5)',
            padding: '28px 28px 26px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8, marginBottom: 18 }}>
            <div style={{ display: 'flex', gap: 8 }}>
              <span
                style={{
                  fontFamily: mono,
                  fontSize: 11,
                  color: '#f2b441',
                  background: 'rgba(242,180,65,.1)',
                  border: '1px solid rgba(242,180,65,.28)',
                  padding: '4px 9px',
                  borderRadius: 5,
                }}
              >
                ● Completed
              </span>
              <span
                style={{
                  fontFamily: mono,
                  fontSize: 11,
                  color: '#9aa3b2',
                  border: '1px solid rgba(255,255,255,.14)',
                  padding: '4px 9px',
                  borderRadius: 5,
                }}
              >
                Open source
              </span>
            </div>
            <span style={{ fontFamily: mono, fontSize: 12, color: '#6c7585', marginLeft: 'auto', paddingLeft: 12 }}>2026 – present</span>
          </div>
          <h3
            style={{
              fontFamily: mono,
              fontWeight: 600,
              fontSize: 26,
              color: '#f3f5f8',
              margin: '0 0 4px',
              letterSpacing: '-.01em',
            }}
          >
            Tarpan
          </h3>
          <div style={{ fontFamily: mono, fontSize: 12.5, color: '#9aa3b2', marginBottom: 16 }}>Solo</div>
          <p style={{ fontSize: 14.5, lineHeight: 1.68, color: '#b6bdc8', margin: '0 0 20px', flex: 1 }}>
            A SaaS that helps families handle the administrative aftermath of a death. Upload a death
            certificate and a Python Lambda processes it through the Claude API to extract the legal
            data; a NestJS backend orchestrates the workflow while a React dashboard tracks
            notifications to fifteen institutions — Social Security, banks, the DMV, and more. Built
            end-to-end on AWS CDK as a complete, deployable codebase.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 20 }}>
            {['Python Lambda', 'NestJS', 'React', 'AWS CDK', 'Claude API'].map((t) => (
              <Tag key={t} fontSize={11.5} padding="5px 9px">
                {t}
              </Tag>
            ))}
          </div>
          <a
            className="dc-btn-outline"
            href="https://github.com/divyangchauhan/Tarpan"
            target="_blank"
            rel="noopener"
            style={{
              alignSelf: 'flex-start',
              fontFamily: mono,
              fontSize: 12.5,
              color: '#e6e9ef',
              border: '1px solid rgba(255,255,255,.2)',
              padding: '9px 15px',
              borderRadius: 7,
              textDecoration: 'none',
            }}
          >
            github.com/divyangchauhan/Tarpan ↗
          </a>
        </article>

        <article
          style={{
            ...reveal(0.08),
            border: '1px solid rgba(255,255,255,.1)',
            borderRadius: 16,
            background: 'rgba(14,17,22,.5)',
            padding: '28px 28px 26px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8, marginBottom: 18 }}>
            <div style={{ display: 'flex', gap: 8 }}>
              <span
                style={{
                  fontFamily: mono,
                  fontSize: 11,
                  color: '#f2b441',
                  border: '1px solid rgba(242,180,65,.4)',
                  padding: '4px 9px',
                  borderRadius: 5,
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: '#f2b441',
                    marginRight: 5,
                    verticalAlign: 'middle',
                    animation: 'pf-blink 1.6s ease-in-out infinite',
                  }}
                />
                Building
              </span>
              <span
                style={{
                  fontFamily: mono,
                  fontSize: 11,
                  color: '#9aa3b2',
                  border: '1px solid rgba(255,255,255,.14)',
                  padding: '4px 9px',
                  borderRadius: 5,
                }}
              >
                Side project
              </span>
            </div>
            <span style={{ fontFamily: mono, fontSize: 12, color: '#6c7585', marginLeft: 'auto', paddingLeft: 12 }}>2026 – present</span>
          </div>
          <h3
            style={{
              fontFamily: mono,
              fontWeight: 600,
              fontSize: 26,
              color: '#f3f5f8',
              margin: '0 0 4px',
              letterSpacing: '-.01em',
            }}
          >
            ResumeForge
          </h3>
          <div style={{ fontFamily: mono, fontSize: 12.5, color: '#9aa3b2', marginBottom: 16 }}>Solo</div>
          <p style={{ fontSize: 14.5, lineHeight: 1.68, color: '#b6bdc8', margin: '0 0 20px', flex: 1 }}>
            An AI-powered resume intelligence tool that helps job seekers tailor their resume for
            specific roles. Analyzes job descriptions, scores resume fit, and suggests targeted edits —
            built because job hunting deserved better tooling.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 20 }}>
            {['Next.js', 'Claude API', 'PostgreSQL'].map((t) => (
              <Tag key={t} fontSize={11.5} padding="5px 9px">
                {t}
              </Tag>
            ))}
          </div>
          <a
            className="dc-btn-outline"
            href="https://resume-forge-lemon.vercel.app/"
            target="_blank"
            rel="noopener"
            style={{
              alignSelf: 'flex-start',
              fontFamily: mono,
              fontSize: 12.5,
              color: '#e6e9ef',
              border: '1px solid rgba(255,255,255,.2)',
              padding: '9px 15px',
              borderRadius: 7,
              textDecoration: 'none',
            }}
          >
            resume-forge-lemon.vercel.app ↗
          </a>
        </article>
      </div>
    </section>
  )
}
