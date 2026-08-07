import { useState } from 'react'
import { caveat, color, kicker, mono } from '../theme'
import { filters, projects } from '../data/projects'

const filterBase = {
  padding: '8px 15px',
  borderRadius: 20,
  fontFamily: mono,
  fontSize: 12,
  cursor: 'pointer',
  letterSpacing: '.04em',
  transition: 'all .15s',
  whiteSpace: 'nowrap',
}

const filterOn = {
  ...filterBase,
  background: color.accent,
  color: '#fff',
  border: `1px solid ${color.accent}`,
}

const filterOff = {
  ...filterBase,
  background: color.surface,
  color: color.muted,
  border: `1px solid ${color.ruleStrong}`,
}

const toggleStyle = {
  fontFamily: mono,
  fontSize: 12,
  color: color.accent,
  background: color.tint,
  border: `1px solid ${color.ruleAccent}`,
  padding: '7px 13px',
  borderRadius: 20,
  cursor: 'pointer',
}

function CaseStudy({ study }) {
  return (
    <div
      className="bp-case"
      style={{
        marginTop: 26,
        paddingTop: 26,
        borderTop: `1px dashed ${color.ruleDashed}`,
      }}
    >
      <div>
        <div style={{ ...kicker('.12em'), color: color.accent, marginBottom: 12 }}>
          {study.heading}
        </div>
        <div className="bp-prose">{study.body}</div>
      </div>
      <div>
        <div style={{ ...kicker('.12em'), color: color.accent, marginBottom: 12 }}>
          {study.asideHeading}
        </div>
        {study.stack ? (
          <p
            style={{
              fontFamily: mono,
              fontSize: 13,
              lineHeight: 1.7,
              color: color.bodyAlt,
              margin: '0 0 16px',
            }}
          >
            {study.stack}
          </p>
        ) : null}
        <div style={{ fontFamily: mono, fontSize: 13, marginBottom: 16 }}>
          {study.metrics.map(([label, value]) => (
            <div className="bp-metric" key={label}>
              <span style={{ color: color.faint }}>{label}</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
        <div style={caveat}>{study.caveat}</div>
        {study.link ? (
          <a
            href={study.link.href}
            style={{
              display: 'inline-block',
              marginTop: 16,
              fontFamily: mono,
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            {study.link.label}
          </a>
        ) : null}
      </div>
    </div>
  )
}

function ProjectCard({ project, open, onToggle }) {
  const { featured } = project

  return (
    <article
      className="bp-card"
      style={{
        position: 'relative',
        border: featured
          ? `1.5px solid ${color.accent}`
          : `1px solid ${color.rule}`,
        borderRadius: 8,
        background: color.surface,
        marginBottom: 20,
      }}
    >
      {project.banner ? (
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
          {project.banner}
        </div>
      ) : null}

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          gap: 16,
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 14,
            flexWrap: 'wrap',
          }}
        >
          <h3
            style={{
              fontSize: featured ? 26 : 24,
              fontWeight: 700,
              letterSpacing: '-.01em',
              margin: 0,
            }}
          >
            {project.name}
          </h3>
          {project.meta ? (
            <span
              style={{ fontFamily: mono, fontSize: 12, color: color.faint }}
            >
              {project.meta}
            </span>
          ) : null}
        </div>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          style={toggleStyle}
        >
          {open ? 'Close ×' : 'Read case study →'}
        </button>
      </div>

      <p
        style={{
          fontSize: 16,
          lineHeight: 1.6,
          color: color.body,
          margin: project.chips ? '14px 0 18px' : '14px 0 0',
          maxWidth: '82ch',
        }}
      >
        {project.summary}
      </p>

      {project.chips ? (
        <div
          style={{
            display: 'flex',
            gap: 10,
            flexWrap: 'wrap',
            fontFamily: mono,
            fontSize: 12,
          }}
        >
          {project.chips.map((chip) => (
            <span
              key={chip}
              style={{
                border: `1px solid ${color.ruleStrong}`,
                padding: '5px 10px',
                borderRadius: 3,
                background: color.chip,
              }}
            >
              {chip}
            </span>
          ))}
        </div>
      ) : null}

      {open ? <CaseStudy study={project.caseStudy} /> : null}
    </article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [open, setOpen] = useState(null)

  const visible = projects.filter(
    (project) => filter === 'all' || project.tags.includes(filter),
  )

  return (
    <section
      id="work"
      className="bp-shell bp-pad"
      style={{ padding: '40px 40px 24px' }}
    >
      <div
        className="bp-sectionhead"
        style={{
          marginBottom: 20,
          borderBottom: `1px solid ${color.rule}`,
          paddingBottom: 16,
        }}
      >
        <div>
          <div style={kicker()}>FEATURED_WORK[{projects.length}]</div>
          <h2
            style={{
              fontSize: 30,
              fontWeight: 700,
              margin: 0,
              letterSpacing: '-.02em',
            }}
          >
            Four projects, built in 2026
          </h2>
        </div>
        <div
          style={{
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
          }}
        >
          {filters.map(({ key, label }) => (
            <button
              type="button"
              key={key}
              onClick={() => setFilter(key)}
              aria-pressed={filter === key}
              style={filter === key ? filterOn : filterOff}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {visible.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          open={open === project.id}
          onToggle={() =>
            setOpen((current) => (current === project.id ? null : project.id))
          }
        />
      ))}

      <p
        style={{
          fontFamily: mono,
          fontSize: 12,
          color: color.faint,
          margin: '8px 0 0',
        }}
      >
        Also: Jobsieve (job aggregator, NestJS) · Verdikt (alt. Kleros Court UI)
        · Mushak (Rust, in winget) · DiffLoom.
      </p>
    </section>
  )
}
