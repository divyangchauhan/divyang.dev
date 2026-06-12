import SectionHeading from './SectionHeading.jsx'
import { ASSURE_STATS, ASSURE_BUILT, ASSURE_STACK } from '../data.js'

const s = {
  card: {
    marginTop: '36px',
    border: '1px solid #1C2630',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  cardHeader: {
    background: '#10161C',
    padding: '20px 28px',
    borderBottom: '1px solid #1C2630',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    flexWrap: 'wrap',
    gap: '12px',
  },
  cardTitle: {
    margin: 0,
    fontSize: '22px',
    fontWeight: 600,
    letterSpacing: '-0.01em',
    color: '#E6EDF2',
  },
  cardMeta: { fontSize: '11.5px', color: '#71818D' },
  cardBody: { padding: '28px' },
  lede: {
    margin: 0,
    fontSize: '14.5px',
    lineHeight: 1.8,
    color: '#A7B6C0',
    maxWidth: '820px',
    textWrap: 'pretty',
  },
  statGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1px',
    background: '#1C2630',
    border: '1px solid #1C2630',
    borderRadius: '6px',
    overflow: 'hidden',
    marginTop: '30px',
  },
  stat: { background: '#0E1419', padding: '18px 20px' },
  statValue: { fontSize: '28px', fontWeight: 600, color: '#4ADE80' },
  statLabel: {
    marginTop: '6px',
    fontSize: '10.5px',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#71818D',
  },
  hashHead: {
    marginTop: '32px',
    fontSize: '11.5px',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: '#4ADE80',
  },
  hashHeadFlush: {
    fontSize: '11.5px',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: '#4ADE80',
  },
  para: {
    margin: '12px 0 0',
    fontSize: '13.5px',
    lineHeight: 1.8,
    color: '#8FA1AE',
    maxWidth: '820px',
    textWrap: 'pretty',
  },
  builtList: { marginTop: '8px' },
  builtRow: {
    display: 'flex',
    gap: '14px',
    padding: '13px 0',
    borderBottom: '1px solid #141C24',
  },
  builtRowLast: { display: 'flex', gap: '14px', padding: '13px 0' },
  arrow: { color: '#4ADE80', fontSize: '13px', paddingTop: '2px' },
  builtText: { margin: 0, fontSize: '13.5px', lineHeight: 1.7, color: '#8FA1AE' },
  builtTitle: { fontWeight: 600, color: '#DCE6EC' },
  stackList: { marginTop: '14px', display: 'flex', flexDirection: 'column', gap: '8px' },
  stackRow: {
    display: 'grid',
    gridTemplateColumns: '150px 1fr',
    gap: '16px',
    fontSize: '13px',
  },
  stackKey: { color: '#71818D' },
  stackValue: { color: '#B9C7D1' },
  securityBox: {
    marginTop: '32px',
    background: 'rgba(74,222,128,0.05)',
    border: '1px solid rgba(74,222,128,0.25)',
    borderRadius: '6px',
    padding: '20px 24px',
  },
  securityText: {
    margin: '12px 0 0',
    fontSize: '13.5px',
    lineHeight: 1.8,
    color: '#A7B6C0',
    textWrap: 'pretty',
  },
  links: { display: 'flex', gap: '28px', marginTop: '24px', alignItems: 'baseline' },
  link: { fontSize: '13px', color: '#4ADE80', textDecoration: 'none' },
  privateNote: { fontSize: '12px', color: '#71818D' },

  // Secondary project cards
  twoCol: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '24px',
    marginTop: '24px',
  },
  miniCard: { border: '1px solid #1C2630', borderRadius: '8px', overflow: 'hidden' },
  miniHeader: {
    background: '#10161C',
    padding: '16px 24px',
    borderBottom: '1px solid #1C2630',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '12px',
  },
  miniTitle: { margin: 0, fontSize: '17px', fontWeight: 600, color: '#E6EDF2' },
  badgeGreen: {
    fontSize: '10px',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#4ADE80',
    border: '1px solid rgba(74,222,128,0.35)',
    borderRadius: '3px',
    padding: '4px 8px',
    whiteSpace: 'nowrap',
  },
  badgeAmber: {
    fontSize: '10px',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#E2B563',
    border: '1px solid rgba(226,181,99,0.35)',
    borderRadius: '3px',
    padding: '4px 8px',
    whiteSpace: 'nowrap',
  },
  miniBody: { padding: '22px 24px' },
  miniMeta: { fontSize: '11.5px', color: '#71818D' },
  miniText: {
    margin: '14px 0 0',
    fontSize: '13px',
    lineHeight: 1.75,
    color: '#8FA1AE',
    textWrap: 'pretty',
  },
  techRow: {
    marginTop: '16px',
    display: 'grid',
    gridTemplateColumns: '60px 1fr',
    gap: '12px',
    fontSize: '12.5px',
  },
  techKey: { color: '#71818D' },
  techValue: { color: '#B9C7D1' },
  miniLink: { display: 'inline-block', marginTop: '16px', fontSize: '12.5px', color: '#4ADE80', textDecoration: 'none' },
  comingSoon: { marginTop: '16px', fontSize: '12px', color: '#71818D' },
}

export default function Projects() {
  return (
    <>
      <SectionHeading id="projects" label="02 · Projects" />

      <article style={s.card}>
        <div style={s.cardHeader}>
          <h2 style={s.cardTitle}>NST Cyber Assure</h2>
          <span style={s.cardMeta}>
            Founding Engineer &amp; Team Lead · NST Cyber · Mar 2021 – Feb 2024
          </span>
        </div>
        <div style={s.cardBody}>
          <p style={s.lede}>
            A multi-tenant SaaS platform that gives enterprises a real-time view of their external
            attack surface — vulnerabilities, exploitable weaknesses, exposed internet assets, and
            the threat actors most likely to target them. I was the founding engineer, contributed
            ~70% of the production codebase, and eventually led a cross-functional team of 9.
          </p>

          <div style={s.statGrid}>
            {ASSURE_STATS.map((stat) => (
              <div key={stat.label} style={s.stat}>
                <div style={s.statValue}>{stat.value}</div>
                <div style={s.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div style={s.hashHead}># context</div>
          <p style={s.para}>
            A third-party studio was contracted to build Assure over 6 months. Their delivery was
            buggy and unusable. I was brought in, rebuilt it from scratch in OutSystems in 3 months
            (Assure v1), then led a full rewrite in TypeScript on serverless AWS (Assure v2) when
            OutSystems hit hard architectural ceilings — no runtime white-labeling, no three-level
            tenancy, no storage-level tenant isolation.
          </p>

          <div style={s.hashHead}># what_i_built</div>
          <div style={s.builtList}>
            {ASSURE_BUILT.map((item, i) => (
              <div key={item.title} style={i < ASSURE_BUILT.length - 1 ? s.builtRow : s.builtRowLast}>
                <span style={s.arrow}>▸</span>
                <p style={s.builtText}>
                  <span style={s.builtTitle}>{item.title}</span> — {item.body}
                </p>
              </div>
            ))}
          </div>

          <div style={s.hashHead}># stack</div>
          <div style={s.stackList}>
            {ASSURE_STACK.map((row) => (
              <div key={row.key} style={s.stackRow}>
                <span style={s.stackKey}>{row.key}</span>
                <span style={s.stackValue}>{row.value}</span>
              </div>
            ))}
          </div>

          <div style={s.securityBox}>
            <div style={s.hashHeadFlush}># security_record</div>
            <p style={s.securityText}>
              Assure was penetration tested before every release — appropriate for a platform sold
              to banks and enterprises. Across my entire tenure, no pentest ever uncovered data
              leakage, cross-tenant exposure, or access control bypasses.
            </p>
          </div>

          <div style={s.links}>
            <a
              href="https://www.nstcyber.ai"
              target="_blank"
              rel="noopener"
              className="b-underline-link"
              style={s.link}
            >
              nstcyber.ai ↗
            </a>
            <span style={s.privateNote}>codebase: private</span>
          </div>
        </div>
      </article>

      <div style={s.twoCol}>
        <article style={s.miniCard}>
          <div style={s.miniHeader}>
            <h3 style={s.miniTitle}>Tarpan</h3>
            <span style={s.badgeGreen}>Completed · Open source</span>
          </div>
          <div style={s.miniBody}>
            <div style={s.miniMeta}>Solo · 2026 – present</div>
            <p style={s.miniText}>
              A SaaS that helps families handle the administrative aftermath of a death. Upload a
              death certificate and a Python Lambda processes it through the Claude API to extract
              the legal data; a NestJS backend orchestrates the workflow while a React dashboard
              tracks notifications to fifteen institutions — Social Security, banks, the DMV, and
              more. Built end-to-end on AWS CDK as a complete, deployable codebase.
            </p>
            <div style={s.techRow}>
              <span style={s.techKey}>tech:</span>
              <span style={s.techValue}>Python Lambda · NestJS · React · AWS CDK · Claude API</span>
            </div>
            <a
              href="https://github.com/divyangchauhan/Tarpan"
              target="_blank"
              rel="noopener"
              className="b-underline-link"
              style={s.miniLink}
            >
              github.com/divyangchauhan/Tarpan ↗
            </a>
          </div>
        </article>

        <article style={s.miniCard}>
          <div style={s.miniHeader}>
            <h3 style={s.miniTitle}>ResumeForge</h3>
            <span style={s.badgeAmber}>Building</span>
          </div>
          <div style={s.miniBody}>
            <div style={s.miniMeta}>Solo · Side project · 2024 – present</div>
            <p style={s.miniText}>
              An AI-powered resume intelligence tool that helps job seekers tailor their resume for
              specific roles. Analyzes job descriptions, scores resume fit, and suggests targeted
              edits — built because job hunting deserved better tooling.
            </p>
            <div style={s.techRow}>
              <span style={s.techKey}>tech:</span>
              <span style={s.techValue}>Next.js · Claude API · PostgreSQL · Stripe</span>
            </div>
            <div style={s.comingSoon}>link coming soon</div>
          </div>
        </article>
      </div>
    </>
  )
}
