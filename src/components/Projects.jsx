import { useState } from 'react'

function AssureCard() {
  const [open, setOpen] = useState(false)

  return (
    <div className="project-card" id="assure">
      <div className="project-meta">
        <span className="project-title">NST Cyber Assure</span>
        <span className="project-role">Founding Engineer &amp; Team Lead</span>
        <span className="project-period">Mar 2021 – Feb 2024</span>
      </div>

      <p className="project-description">
        A multi-tenant SaaS platform that gives enterprises a real-time view
        of their external attack surface — vulnerabilities, exploitable weaknesses,
        exposed internet assets, and the threat actors most likely to target them.
        I was the founding engineer, contributed ~70% of the production codebase,
        and eventually led a cross-functional team of 9.
      </p>

      <div className="impact-grid" role="list" aria-label="Impact metrics">
        {[
          { number: '$200K', label: 'Infrastructure cost saved / year' },
          { number: '90%',   label: 'Reduction in system downtime' },
          { number: '80%',   label: 'Faster deployments via IaC' },
          { number: '+40%',  label: 'Revenue opportunity from tenancy model' },
          { number: '0',     label: 'Critical security vulnerabilities shipped' },
          { number: '9',     label: 'Cross-functional team members led' },
        ].map(({ number, label }) => (
          <div className="impact-item" role="listitem" key={label}>
            <span className="impact-number">{number}</span>
            <span className="impact-label">{label}</span>
          </div>
        ))}
      </div>

      <button
        className={`toggle-detail${open ? ' open' : ''}`}
        aria-expanded={open}
        aria-controls="assure-detail"
        aria-label="Toggle technical detail for NST Cyber Assure"
        onClick={() => setOpen((o) => !o)}
      >
        <span>Technical detail</span>
        <span className="arrow" aria-hidden="true">↓</span>
      </button>

      <div className={`collapsible${open ? ' open' : ''}`} id="assure-detail" aria-hidden={!open}>
        <div className="collapsible-inner">

          <div className="detail-section">
            <p className="detail-heading">Context</p>
            <p className="detail-text">
              A third-party studio was contracted to build Assure over 6 months. Their delivery was
              buggy and unusable. I was brought in, rebuilt it from scratch in OutSystems in 3 months
              (<strong>Assure v1</strong>), then led a full rewrite in TypeScript on serverless AWS
              (<strong>Assure v2</strong>) when OutSystems hit hard architectural ceilings.
            </p>
          </div>

          <div className="detail-section">
            <p className="detail-heading">What I built</p>
            <ul className="detail-list">
              <li><strong>ETL pipeline</strong> — Kafka-triggered AWS Lambda pipeline that parses raw security scan data into vulnerability datasets, exploit intelligence, typosquatted domain data, and exposed asset inventory.</li>
              <li><strong>Multi-tenant architecture</strong> — three-level tenancy (master → supertenant → tenant) with per-tenant subscription gating and data residency controls at the storage level.</li>
              <li><strong>Runtime white-labeling</strong> — every supertenant gets a fully branded portal without a new build; resolves at runtime from a single deployed Angular app on CloudFront.</li>
              <li><strong>Authenticated-only frontend</strong> — no HTML, CSS, or JS served to the browser without authentication, enforced via standalone login Lambda + Cognito session cookie.</li>
              <li><strong>Complex authorization</strong> — CASL.js attribute-based policies enforcing fine-grained access scoped simultaneously by supertenant, tenant, and project across a single shared API.</li>
              <li><strong>Backoffice impersonation</strong> — admins can scope into any tenant's customer portal without creating a new user or separate session.</li>
            </ul>
          </div>

          <div className="detail-section">
            <p className="detail-heading">v2 Tech Stack</p>
            <table className="stack-table" aria-label="v2 Technology stack">
              <tbody>
                {[
                  ['Backend',        'NestJS, AWS Lambda, MongoDB, CASL.js'],
                  ['Frontend',       'Angular, AWS CloudFront, CloudFront Functions'],
                  ['Auth',           'AWS Cognito + custom Lambda triggers'],
                  ['ETL',            'AWS Lambda pipeline, Apache Kafka'],
                  ['Infrastructure', 'AWS (Lambda, ECS, S3, CloudFront, Cognito), Terraform'],
                  ['Testing',        'Cypress (E2E)'],
                ].map(([layer, tech]) => (
                  <tr key={layer}>
                    <td>{layer}</td>
                    <td>{tech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="security-note" role="note">
            <strong>Security record:</strong> Assure was penetration tested before every release — appropriate for a platform sold to banks and enterprises. Across my entire tenure, no pentest ever uncovered data leakage, cross-tenant exposure, or access control bypasses.
          </div>

        </div>
      </div>

      <div className="project-links">
        <a
          className="project-link"
          href="https://www.nstcyber.ai"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="NST Cyber website (opens in new tab)"
        >
          nstcyber.ai <span className="arrow-ext" aria-hidden="true">↗</span>
        </a>
        <span className="project-link" style={{ cursor: 'default', pointerEvents: 'none' }}>
          codebase: private
        </span>
      </div>
    </div>
  )
}

function SecondaryCard({ id, status, title, role, period, description, stack, linkHref, linkLabel, linkText }) {
  return (
    <div className="project-card secondary" id={id}>
      <span className={`project-status ${status}`}>
        {status === 'completed' ? (
          <><span className="status-check" aria-hidden="true">✓</span>Completed</>
        ) : 'Building'}
      </span>
      <div className="project-meta">
        <span className="project-title">{title}</span>
        <span className="project-role">{role}</span>
        <span className="project-period">{period}</span>
      </div>
      <p className="project-description">{description}</p>
      <div className="project-mini-stack">
        {stack.map((tag) => (
          <span className="skill-tag" key={tag}>{tag}</span>
        ))}
      </div>
      <div className="project-links" style={{ marginTop: '1.1rem' }}>
        {linkHref ? (
          <a
            className="project-link"
            href={linkHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={linkLabel}
          >
            {linkText} <span className="arrow-ext" aria-hidden="true">↗</span>
          </a>
        ) : (
          <span
            className="project-link"
            style={{ cursor: 'default', pointerEvents: 'none', fontStyle: 'italic', color: 'var(--text-muted)' }}
          >
            {linkText}
          </span>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <p className="section-label">02 / Projects</p>
        <h2 id="projects-heading" className="sr-only">Projects</h2>

        <div className="projects-list">
          <AssureCard />

          <SecondaryCard
            id="tarpan"
            status="completed"
            title="Tarpan"
            role="Solo · Open Source"
            period="2025 – present"
            description="A SaaS that helps families handle the administrative aftermath of a death. Upload a death certificate and a Python Lambda processes it through the Claude API to extract the legal data; a NestJS backend orchestrates the workflow while a React dashboard tracks notifications to fifteen institutions — Social Security, banks, the DMV, and more. Built end-to-end on AWS CDK as a complete, deployable codebase."
            stack={['Python Lambda', 'NestJS', 'React', 'AWS CDK', 'Claude API']}
            linkHref="https://github.com/divyangchauhan/Tarpan"
            linkLabel="Tarpan on GitHub (opens in new tab)"
            linkText="github.com/divyangchauhan/Tarpan"
          />

          <SecondaryCard
            id="resumeforge"
            status="building"
            title="ResumeForge"
            role="Solo · Side Project"
            period="2024 – present"
            description="An AI-powered resume intelligence tool that helps job seekers tailor their resume for specific roles. Analyzes job descriptions, scores resume fit, and suggests targeted edits — built because job hunting deserved better tooling."
            stack={['Next.js', 'OpenAI API', 'PostgreSQL', 'Stripe']}
            linkText="Link coming soon"
          />
        </div>
      </div>
    </section>
  )
}
