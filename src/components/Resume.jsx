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

function SectionLabel({ children }) {
  return <h2 className="bp-resume-section">{children}</h2>
}

function Bullets({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

const projects = [
  {
    title:
      'Pramana: Multi-agent smart-contract vulnerability scanner & evaluation harness',
    bullets: [
      'Designed provider-neutral three agent system with context isolation and tool usage that produces executable PoC',
      'Built an eval harness covering 14 labeled vulnerabilities in 11 classes with patched negative control, with baselines and cost/latency tracking. Benchmarked the agents; best runs found 13/14 vulnerabilities with 0 false positive',
    ],
  },
  {
    title: 'DiffVouch: AI code-review agent skill & CLI',
    bullets: [
      'Built a portable AI code-review Agent Skill and CLI that analyzes Git changes, produces actionable findings and weighted ratings, and can publish GitHub PR reviews',
    ],
  },
]

const skills = [
  [
    'AI Systems:',
    'agent orchestration, tool calling, structured outputs, context isolation, evaluation harnesses, regression testing',
  ],
  [
    'Languages & Databases:',
    'Python, TypeScript, JavaScript, SQL, PostgreSQL, MySQL, MongoDB',
  ],
  [
    'Frameworks:',
    'Node.js, NestJS, Django REST Framework, Pydantic, GraphQL, React, Next.js',
  ],
  [
    'Infrastructure & Messaging:',
    'AWS, Cognito, Lambda, Docker, Terraform, CI/CD, Celery, Kafka, RabbitMQ',
  ],
]

const education = [
  [
    'IIT Bombay, B.Tech coursework, Metallurgical Engineering & Materials Science',
    '2016',
  ],
]

const experience = [
  {
    company: 'Kleros, Remote',
    role: 'Backend Engineer',
    dates: 'Feb 2024 – Present',
    bullets: [
      'Led splitting of monolithic NestJS backend into horizontally scalable API and single instance automation services: established the monorepo and migrated 57K+ production events across databases with ~1 minute of downtime',
      'Built Atlas’s NestJS backend from scratch, designing runtime-configurable event ingestion across 3 production EVM chains, using Node.js EventEmitter for asynchronous downstream processing by 23+ consumers',
      'Caught an unbounded RPC hot-path dependency during code review and rebuilt the path around synchronized database reads, removing the DoS risk before production',
      'Automated dispute progression and juror staking across networks; used transaction simulation and batched calls to improve execution reliability and reduce cost by ~22%',
    ],
  },
  {
    company: 'NST Cyber, Remote',
    role: 'Software Engineer Team Lead',
    dates: 'Jan 2023 – Feb 2024',
    bullets: [
      'Led a cross-functional team of 9 building Assure v2, a multi-tenant vulnerability-triage and threat-surface management platform sold directly to multinational banks and white-labeled by cybersecurity resellers',
      'Built an AI-assisted APT attribution workflow using the OpenAI API to map threat-surface to threat actors',
      'Replatformed Assure from OutSystems, eliminating ~$200K/year in platform costs while enabling 3-level tenancy, data isolation modes, and white-labeling; authored ~70% of the backend and shipped in six months',
      'Architected Assure v2’s authorization model using CASL.js: 5-role hierarchical RBAC plus ABAC (Attribute-Based Access Control), tenant isolation, and per-user project access',
      "Wrote Terraform for Assure v2's core AWS infrastructure, reducing deployment time from ~2 hours to 10–15 minutes; introduced Cypress E2E tests, reducing full regression from hours to under 30 minutes",
    ],
  },
  {
    company: '',
    role: 'Software Engineer',
    dates: 'Mar 2021 – Jan 2023',
    bullets: [
      'Delivered Assure v1 concept to production in 3 months, authoring 80% of codebase and onboarding first 5 enterprise clients; rapid adoption exceeded platform limits, driving decision to rebuild on scalable architecture',
      "Developed Tigress's Django REST Framework backend from scratch; designed a MySQL schema supporting 10M+ records and created a serializer abstraction that reduced new endpoint development time by 60%",
      "Eliminated distributed-task bottleneck in Tigress's scanning engine by architecting cross-instance Celery dispatch, reducing scan time by 75% and scaling the platform from 10 to 100 daily scans without infrastructure changes",
    ],
  },
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
          width: '230mm',
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
        <header className="bp-resume-header">
          <h1>Divyang Chauhan</h1>
          <div className="bp-resume-contacts">
            {contactLinks.map(({ label, href }) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </div>
        </header>

        <SectionLabel>SUMMARY</SectionLabel>
        <p>
          Senior Backend Engineer with 5+ years of experience building and
          owning production backend systems, multi-tenant SaaS, cloud
          infrastructure, and platform migrations, with hands-on Applied AI
          experience across tool-using agent systems and evaluation harnesses.
          Led a 9-person team shipping security software for multinational
          banks. OSCP certified.
        </p>

        <SectionLabel>PROJECTS</SectionLabel>
        {projects.map(({ title, bullets }) => (
          <div className="bp-resume-entry bp-avoid-break" key={title}>
            <h3>{title}</h3>
            <Bullets items={bullets} />
          </div>
        ))}

        <SectionLabel>PROFESSIONAL EXPERIENCE</SectionLabel>
        {experience.map(({ company, role, dates, bullets }) => (
          <div className="bp-resume-entry bp-avoid-break" key={role}>
            {company && <h3>{company}</h3>}
            <div className="bp-resume-row">
              <h4>{role}</h4>
              <span className="bp-resume-date">{dates}</span>
            </div>
            <Bullets items={bullets} />
          </div>
        ))}

        <SectionLabel>EDUCATION</SectionLabel>
        {education.map(([label, year]) => (
          <div className="bp-resume-row bp-avoid-break" key={label}>
            <span>{label}</span>
            <span className="bp-resume-date">{year}</span>
          </div>
        ))}

        <SectionLabel>SKILLS</SectionLabel>
        <div className="bp-resume-skills bp-avoid-break">
          {skills.map(([label, body]) => (
            <p key={label}>
              <strong>{label}</strong> {body}
            </p>
          ))}
        </div>
      </article>
    </div>
  )
}
