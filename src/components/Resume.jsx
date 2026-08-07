import Link from 'next/link'
import { color, mono } from '../theme'

const contactLinks = [
  { label: 'divyang@divyang.dev', href: 'mailto:divyang@divyang.dev' },
  { label: 'divyang.dev', href: 'https://divyang.dev' },
  {
    label: 'github.com/divyangchauhan',
    href: 'https://github.com/divyangchauhan',
  },
  {
    label: 'linkedin.com/in/divyangchauhan',
    href: 'https://linkedin.com/in/divyangchauhan',
  },
]

const listStyle = {
  margin: '7px 0 0',
  paddingLeft: 18,
  fontSize: 14,
  lineHeight: 1.55,
  color: color.bodyAlt,
}

const dateStyle = {
  fontFamily: mono,
  fontSize: 12,
  color: color.faint,
  whiteSpace: 'nowrap',
}

function SectionLabel({ children, gap = 12 }) {
  return (
    <div
      style={{
        fontFamily: mono,
        fontSize: 11.5,
        letterSpacing: '.14em',
        color: color.accent,
        borderBottom: `1px solid ${color.rule}`,
        paddingBottom: 6,
        margin: `24px 0 ${gap}px`,
      }}
    >
      {children}
    </div>
  )
}

function Bullets({ items }) {
  return (
    <ul style={listStyle}>
      {items.map((item, index) => (
        <li
          key={item}
          style={{ marginBottom: index === items.length - 1 ? 0 : 5 }}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

const projects = [
  {
    title: 'Pramana: Multi-agent smart-contract vulnerability scanner',
    bullets: [
      'Built provider-neutral finder, verifier and reporter agents with context isolation and executable PoC verification',
      'Built an eval harness covering 14 labeled vulnerabilities in 11 classes plus a patched negative control, with baselines, cost/latency tracking, CI and 294 offline tests',
      'Benchmarked the finder/verifier core across Claude, GPT, and Kimi; best runs found 13/14 labeled bugs with 0 confirmed false positives on the patched control',
    ],
  },
  {
    title: 'ClinchCV: Full-stack AI resume analysis and job targeting',
    bullets: [
      'Built a full-stack AI product that parses resume PDFs and uses structured, rubric-based LLM evaluation to generate scoring, ATS checks, job-fit analysis, and contextual rewrites',
      'Enforced structured outputs with schema validation, retry-on-invalid, and model fallback; handles multi-column and table-based PDF layouts',
    ],
  },
]

const skills = [
  [
    'AI Systems:',
    'OpenAI, Anthropic, agent orchestration, tool calling, structured outputs, context isolation, evals',
  ],
  [
    'Languages & Databases:',
    'Python, TypeScript, JavaScript, Solidity, SQL, PostgreSQL, MySQL, MongoDB',
  ],
  [
    'Frameworks:',
    'Node.js, NestJS, Django REST Framework, Pydantic, GraphQL, React, Next.js, viem, Foundry, Slither',
  ],
  [
    'Infrastructure & Messaging:',
    'AWS, Docker, Terraform, Celery, Kafka, RabbitMQ',
  ],
]

const education = [
  ['Offensive Security Certified Professional, OffSec', '2017'],
  [
    'IIT Bombay, coursework in B.Tech Metallurgical Engineering & Materials Science',
    '2016',
  ],
]

export default function Resume() {
  return (
    <div
      className="bp-resume-page"
      style={{ color: color.ink, padding: '28px 20px 60px' }}
    >
      <div
        className="bp-no-print"
        style={{
          width: 816,
          maxWidth: '100%',
          margin: '0 auto 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 16,
        }}
      >
        <Link
          href="/"
          style={{ fontFamily: mono, fontSize: 13, color: color.muted }}
        >
          ← back to site
        </Link>
        {/* The maintained PDF, rather than window.print() — a recruiter gets the
            typeset original instead of whatever their print dialog produces. */}
        <a
          href="/assets/Divyang-Chauhan-Resume.pdf"
          download
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: color.accent,
            color: '#fff',
            fontWeight: 600,
            fontSize: 14,
            padding: '11px 20px',
            borderRadius: 8,
            textDecoration: 'none',
          }}
        >
          ↓ Download PDF
        </a>
      </div>

      <article className="bp-sheet">
        <header
          style={{
            textAlign: 'center',
            borderBottom: `2px solid ${color.ink}`,
            paddingBottom: 16,
          }}
        >
          <h1
            style={{
              fontSize: 34,
              fontWeight: 700,
              margin: '0 0 8px',
              letterSpacing: '-.02em',
            }}
          >
            Divyang Chauhan
          </h1>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '6px 10px',
              fontFamily: mono,
              fontSize: 12,
              color: color.body,
            }}
          >
            {contactLinks.map(({ label, href }, index) => (
              <span
                key={label}
                style={{ display: 'inline-flex', gap: '6px 10px' }}
              >
                <a href={href}>{label}</a>
                {index < contactLinks.length - 1 ? (
                  <span style={{ color: color.ruleAccent }}>•</span>
                ) : null}
              </span>
            ))}
          </div>
        </header>

        <SectionLabel>SUMMARY</SectionLabel>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            color: color.bodyAlt,
            margin: 0,
          }}
        >
          Backend &amp; Applied AI Engineer with 5+ years building event-driven
          services, distributed systems and multi-tenant platforms. Built
          provider-neutral, tool-using agent systems with context isolation,
          executable verification, and reproducible evals. Led a 9-person team
          shipping security software for multinational banks. OSCP certified.
        </p>

        <SectionLabel gap={14}>PROJECTS</SectionLabel>
        {projects.map(({ title, bullets }, index) => (
          <div
            className="bp-avoid-break"
            key={title}
            style={{ marginBottom: index === projects.length - 1 ? 0 : 16 }}
          >
            <div style={{ fontSize: 15.5, fontWeight: 700 }}>{title}</div>
            <Bullets items={bullets} />
          </div>
        ))}

        <SectionLabel gap={14}>PROFESSIONAL EXPERIENCE</SectionLabel>

        <div className="bp-avoid-break" style={{ marginBottom: 18 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              gap: 16,
            }}
          >
            <span style={{ fontSize: 16, fontWeight: 700 }}>
              Kleros, Remote
            </span>
            <span style={dateStyle}>Feb 2024 – May 2026</span>
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: color.accent,
              marginTop: 2,
            }}
          >
            Backend Engineer
          </div>
          <Bullets
            items={[
              'Decomposed a monolithic NestJS backend into independently scalable API and automation services; established the monorepo and migrated 57K+ blockchain events across databases with ~1 minute of downtime',
              'Architected a NestJS EVM event-ingestion service processing events across Ethereum, Gnosis, and Arbitrum for 23+ downstream consumers, including notification workflows serving 700+ active jurors',
              'Built multi-network automation for dispute progression and juror staking; used transaction simulation and batched calls to improve execution reliability and reduce gas usage',
            ]}
          />
        </div>

        <div className="bp-avoid-break" style={{ marginBottom: 16 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              gap: 16,
            }}
          >
            <span style={{ fontSize: 16, fontWeight: 700 }}>
              NST Cyber, Remote
            </span>
            <span style={dateStyle}>Jan 2023 – Feb 2024</span>
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: color.accent,
              marginTop: 2,
            }}
          >
            Software Engineer Team Lead
          </div>
          <Bullets
            items={[
              'Led a cross-functional team of 9 building Assure v2, a multi-tenant vulnerability-triage and threat-surface management platform sold directly to multinational banks and white-labeled by cybersecurity resellers',
              'Built an AI-assisted APT attribution workflow using the OpenAI API to map threat-surface to threat actors',
              'Replatformed Assure from OutSystems, eliminating ~$200K/year in platform costs while enabling 3-level tenancy, data isolation modes, and white-labeling; authored ~70% of the backend and shipped in six months',
              "Wrote Terraform for Assure v2's core AWS infrastructure, reducing deployment time from ~2 hours to 10–15 minutes; introduced Cypress E2E tests, reducing full regression from hours to under 30 minutes",
            ]}
          />
        </div>

        <div className="bp-avoid-break">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              gap: 16,
            }}
          >
            <span
              style={{ fontSize: 14, fontWeight: 600, color: color.accent }}
            >
              Software Engineer
            </span>
            <span style={dateStyle}>Mar 2021 – Jan 2023</span>
          </div>
          <Bullets
            items={[
              "Developed Tigress's Django REST Framework backend from scratch; designed a MySQL schema supporting 10M+ records and created a serializer abstraction that reduced new endpoint development time by 60%",
              "Eliminated distributed-task bottleneck in Tigress's scanning engine by architecting cross-instance Celery dispatch, reducing scan time by 75% and scaling the platform from 10 to 100 daily scans without infrastructure changes",
            ]}
          />
        </div>

        <SectionLabel>CERTIFICATION &amp; EDUCATION</SectionLabel>
        <div
          className="bp-avoid-break"
          style={{
            display: 'grid',
            gap: 6,
            fontSize: 14,
            lineHeight: 1.5,
            color: color.bodyAlt,
          }}
        >
          {education.map(([label, year]) => (
            <div
              key={label}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: 16,
              }}
            >
              <span>{label}</span>
              <span style={dateStyle}>{year}</span>
            </div>
          ))}
        </div>

        <SectionLabel>SKILLS</SectionLabel>
        <div
          className="bp-avoid-break"
          style={{
            display: 'grid',
            gap: 6,
            fontSize: 14,
            lineHeight: 1.55,
            color: color.bodyAlt,
          }}
        >
          {skills.map(([label, body]) => (
            <div key={label}>
              <strong style={{ color: color.ink }}>{label}</strong> {body}
            </div>
          ))}
        </div>
      </article>
    </div>
  )
}
