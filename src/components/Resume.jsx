import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { mono, sans, color } from '../theme'

function SectionLabel({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 30 }}>
      <span style={{ fontFamily: mono, fontSize: 12, letterSpacing: '.22em', color: color.amber }}>
        {children}
      </span>
      <span style={{ flex: 1, height: 1, background: 'linear-gradient(90deg,rgba(242,180,65,.35),transparent)' }} />
    </div>
  )
}

function SkillPill({ children }) {
  return (
    <span style={{ fontFamily: mono, fontSize: 12.5, color: '#cdd3dd', border: '1px solid rgba(255,255,255,.12)', padding: '6px 11px', borderRadius: 7 }}>
      {children}
    </span>
  )
}

function BulletItem({ children }) {
  return (
    <li style={{ display: 'flex', gap: 11, fontSize: 15, lineHeight: 1.62, color: '#c1c8d2' }}>
      <span style={{ color: color.amber, flexShrink: 0 }}>▸</span>
      <span>{children}</span>
    </li>
  )
}

export default function Resume() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    els.forEach((el) => {
      const d = parseFloat(el.getAttribute('data-reveal-delay') || '0')
      el.style.animation = `rz-riseT .7s cubic-bezier(.2,.7,.2,1) ${d}s both`
    })
  }, [])

  return (
    <div
      id="dc-resume"
      style={{ background: color.bg, color: color.text, fontFamily: sans, minHeight: '100vh', position: 'relative', overflow: 'hidden' }}
    >
      {/* ambient grid */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, backgroundImage: 'linear-gradient(rgba(130,150,180,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(130,150,180,.045) 1px,transparent 1px)', backgroundSize: '42px 42px' }} />
      <div style={{ position: 'fixed', top: '-10%', right: '-5%', width: '55%', height: '60%', pointerEvents: 'none', zIndex: 0, background: 'radial-gradient(circle,rgba(242,180,65,.07),transparent 62%)' }} />

      {/* NAV */}
      <nav
        className="rz-pad"
        style={{ position: 'sticky', top: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 40px', background: 'rgba(10,12,16,.72)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,.06)' }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <span style={{ display: 'inline-grid', placeItems: 'center', width: 32, height: 32, border: '1px solid #f2b441', color: color.amber, borderRadius: 7, fontFamily: mono, fontWeight: 600, fontSize: 13 }}>DC</span>
          <span className="rz-brand-tag" style={{ fontFamily: mono, fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', color: color.dim }}>backend engineer</span>
        </Link>
        <div className="rz-navlinks" style={{ display: 'flex', alignItems: 'center', gap: 30, fontFamily: mono, fontSize: 13 }}>
          <Link className="dc-link" to="/" style={{ color: '#aab2c0', textDecoration: 'none' }}>← Home</Link>
          <a
            className="dc-btn-fill"
            href="/assets/Divyang-Chauhan-Resume.pdf"
            download
            style={{ color: '#0a0c10', background: color.amber, textDecoration: 'none', padding: '9px 16px', borderRadius: 7, fontWeight: 600 }}
          >
            Download PDF ↓
          </a>
        </div>
      </nav>

      {/* HEADER */}
      <header
        className="rz-head rz-pad"
        style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'end', maxWidth: 980, margin: '0 auto', padding: '64px 40px 36px' }}
      >
        <div data-reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: mono, fontSize: 12, letterSpacing: '.2em', color: color.amber, marginBottom: 22 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: color.amber, animation: 'rz-blink 1.8s ease-in-out infinite' }} />
            RÉSUMÉ
          </div>
          <h1 className="rz-name" style={{ fontFamily: sans, fontWeight: 700, fontSize: 62, lineHeight: 1.0, letterSpacing: '-.025em', margin: '0 0 8px', color: color.heading }}>
            Divyang Chauhan
          </h1>
          <div style={{ fontFamily: mono, fontSize: 15, color: color.muted, marginBottom: 22 }}>Backend Engineer · Distributed Systems</div>
          <div className="rz-contactline" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 14, fontFamily: mono, fontSize: 13 }}>
            <a className="dc-link" href="mailto:divyang@divyang.dev" style={{ color: '#cdd3dd', textDecoration: 'none' }}>divyang@divyang.dev</a>
            <span style={{ color: '#3a4150' }}>·</span>
            <a className="dc-link" href="https://github.com/divyangchauhan" target="_blank" rel="noopener" style={{ color: '#cdd3dd', textDecoration: 'none' }}>github.com/divyangchauhan ↗</a>
            <span style={{ color: '#3a4150' }}>·</span>
            <a className="dc-link" href="https://www.linkedin.com/in/divyangchauhan" target="_blank" rel="noopener" style={{ color: '#cdd3dd', textDecoration: 'none' }}>linkedin.com/in/divyangchauhan ↗</a>
          </div>
        </div>
      </header>

      {/* SUMMARY */}
      <section className="rz-pad" style={{ position: 'relative', zIndex: 1, maxWidth: 980, margin: '0 auto', padding: '20px 40px 8px' }}>
        <div data-reveal style={{ border: '1px solid rgba(255,255,255,.08)', borderRadius: 14, background: 'rgba(14,17,22,.5)', padding: '26px 30px' }}>
          <p style={{ fontSize: 17, lineHeight: 1.72, color: '#d4d9e1', margin: 0 }}>
            Backend engineer with 5+ years building distributed systems and blockchain infrastructure. Led a 9-person team building a bank-grade security platform under ISO 27001 at NST Cyber, and worked on EVM event-ingestion, notifications and bot infrastructure at Kleros. Strong end-to-end ownership backed by a security background <strong style={{ color: color.amber, fontWeight: 600 }}>(OSCP)</strong>.
          </p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="rz-pad" style={{ position: 'relative', zIndex: 1, maxWidth: 980, margin: '0 auto', padding: '46px 40px 10px' }}>
        <div data-reveal><SectionLabel>// EXPERIENCE</SectionLabel></div>

        {/* Kleros */}
        <article data-reveal className="rz-exp-row" style={{ display: 'grid', gridTemplateColumns: '230px 1fr', gap: 30, marginBottom: 34 }}>
          <div className="rz-exp-meta">
            <div style={{ fontFamily: sans, fontWeight: 700, fontSize: 21, color: color.heading, marginBottom: 4 }}>Kleros</div>
            <div style={{ fontFamily: mono, fontSize: 12.5, color: color.muted, marginBottom: 10 }}>Remote</div>
            <div style={{ fontFamily: mono, fontSize: 12, color: color.amber }}>Feb 2024 – May 2026</div>
          </div>
          <div style={{ borderLeft: '1px solid rgba(255,255,255,.1)', paddingLeft: 26, position: 'relative' }}>
            <span style={{ position: 'absolute', left: -5, top: 6, width: 9, height: 9, borderRadius: '50%', background: color.amber }} />
            <div style={{ fontFamily: mono, fontSize: 14.5, color: color.text, fontWeight: 500, marginBottom: 16 }}>Backend Engineer</div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 13 }}>
              <BulletItem>Split a monolithic app to resolve a scaling conflict between bots and APIs. Initiated the architectural discussion, led monorepo setup and the full split with production data migration preserving user state.</BulletItem>
              <BulletItem>Found 4 medium-severity issues in the Kleros v2 arbitration contract during security reviews using manual analysis, formal verification (Halmos), and stateful fuzzing (Echidna).</BulletItem>
              <BulletItem>Built Kleros v1's multi-network automation bot (dispute progression, juror staking, with transaction simulation to prevent reverts, batched calls to cut gas) and the full-lifecycle juror notification system.</BulletItem>
              <BulletItem>Architected a NestJS-based blockchain event ingestion service for EVM chains, with runtime-configurable chains and contracts; emits events for async downstream processing.</BulletItem>
            </ul>
          </div>
        </article>

        {/* NST Cyber */}
        <article data-reveal className="rz-exp-row" style={{ display: 'grid', gridTemplateColumns: '230px 1fr', gap: 30, marginBottom: 10 }}>
          <div className="rz-exp-meta">
            <div style={{ fontFamily: sans, fontWeight: 700, fontSize: 21, color: color.heading, marginBottom: 4 }}>NST Cyber</div>
            <div style={{ fontFamily: mono, fontSize: 12.5, color: color.muted, marginBottom: 10 }}>Remote</div>
            <div style={{ fontFamily: mono, fontSize: 12, color: color.amber }}>Mar 2021 – Feb 2024</div>
          </div>
          <div style={{ borderLeft: '1px solid rgba(255,255,255,.1)', paddingLeft: 26, position: 'relative' }}>
            <span style={{ position: 'absolute', left: -5, top: 6, width: 9, height: 9, borderRadius: '50%', background: color.amber }} />
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
              <div style={{ fontFamily: mono, fontSize: 14.5, color: color.text, fontWeight: 500 }}>Software Engineer · Team Lead</div>
              <div style={{ fontFamily: mono, fontSize: 12, color: color.faint }}>Jan 2023 – Feb 2024</div>
            </div>
            <ul style={{ margin: '0 0 24px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 13 }}>
              <BulletItem>Led a team of 9 building a vulnerability triage and threat intelligence platform for banks under ISO 27001 compliance.</BulletItem>
              <BulletItem>Owned design and development of Assure v2 — chose the stack, learned it while building, wrote ~70% of backend code, shipped in 6 months. Replaced a $200K/year low-code platform that couldn't support 3-level tenancy, data residency, isolation modes, or white-labeling.</BulletItem>
              <BulletItem>Initiated and developed Terraform IaC from scratch covering the full serverless stack (Lambda, VPC/NAT, S3, CloudFront, CloudFront Functions), replacing a manual ~2-hour deploy with a repeatable 10–15-minute one.</BulletItem>
              <BulletItem>Replaced auto-triggering on S3 uploads with explicit Kafka-message triggers for the Tigress-Assure ingestion Lambda; deployed MSK on AWS to unblock production rollout.</BulletItem>
              <BulletItem>Created a database connection-pool library for the Assure v2 backend, simplifying queries and connections across logical and physical databases and eliminating connection overhead and slow API responses.</BulletItem>
            </ul>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
              <div style={{ fontFamily: mono, fontSize: 14.5, color: color.text, fontWeight: 500 }}>Software Engineer</div>
              <div style={{ fontFamily: mono, fontSize: 12, color: color.faint }}>Mar 2021 – Jan 2023</div>
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 13 }}>
              <BulletItem>Built Assure v1 in OutSystems in ~3 months, writing ~70% of production code (frontend and backend). Ran in production until platform limits triggered the v2 rebuild.</BulletItem>
              <BulletItem>Developed the Tigress backend in Django REST Framework. Owned 100% of the database design, authored most of the core API, and designed a serializer abstraction adopted across most endpoints that reduced duplication.</BulletItem>
              <BulletItem>Resolved a distributed-task bottleneck in the Tigress scanning engine by restructuring Celery dispatch for cross-instance execution, reducing scan time and compute/memory footprint.</BulletItem>
              <BulletItem>Created an asset discovery and vulnerability scanning tool in Bash with client-ready reports; its structure later informed the tool-orchestration design of the Tigress scanning engine.</BulletItem>
            </ul>
          </div>
        </article>
      </section>

      {/* EDUCATION & CERTIFICATES */}
      <section className="rz-pad" style={{ position: 'relative', zIndex: 1, maxWidth: 980, margin: '0 auto', padding: '46px 40px 10px' }}>
        <div data-reveal><SectionLabel>// EDUCATION &amp; CERTIFICATES</SectionLabel></div>
        <div data-reveal className="rz-edu-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div style={{ border: '1px solid rgba(242,180,65,.22)', borderRadius: 13, background: 'rgba(242,180,65,.04)', padding: '22px 24px' }}>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: color.amber, marginBottom: 12 }}>Certificate</div>
            <div style={{ fontSize: 17, fontWeight: 600, color: color.heading, marginBottom: 6, lineHeight: 1.3 }}>Offensive Security Certified Professional (OSCP)</div>
            <div style={{ fontFamily: mono, fontSize: 13, color: color.muted }}>OffSec · Feb 2017</div>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,.08)', borderRadius: 13, background: 'rgba(14,17,22,.5)', padding: '22px 24px' }}>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: color.dim, marginBottom: 12 }}>Education</div>
            <div style={{ fontSize: 17, fontWeight: 600, color: color.heading, marginBottom: 6, lineHeight: 1.3 }}>IIT Bombay, India</div>
            <div style={{ fontSize: 14, color: '#aeb5c0', lineHeight: 1.55, marginBottom: 6 }}>Coursework in Metallurgical Engineering &amp; Material Science</div>
            <div style={{ fontFamily: mono, fontSize: 13, color: color.muted }}>Jul 2011 – Apr 2016</div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="rz-pad" style={{ position: 'relative', zIndex: 1, maxWidth: 980, margin: '0 auto', padding: '46px 40px 20px' }}>
        <div data-reveal><SectionLabel>// SKILLS</SectionLabel></div>
        <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="rz-skill-row" style={{ display: 'grid', gridTemplateColumns: '230px 1fr', gap: 20, alignItems: 'start', border: '1px solid rgba(255,255,255,.08)', borderRadius: 13, background: 'rgba(14,17,22,.45)', padding: '20px 22px' }}>
            <div style={{ fontFamily: mono, fontSize: 11.5, letterSpacing: '.1em', textTransform: 'uppercase', color: color.amber, paddingTop: 5 }}>Languages &amp; Databases</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['TypeScript', 'Python', 'JavaScript', 'Solidity', 'PostgreSQL', 'MongoDB', 'MySQL'].map(s => <SkillPill key={s}>{s}</SkillPill>)}
            </div>
          </div>
          <div className="rz-skill-row" style={{ display: 'grid', gridTemplateColumns: '230px 1fr', gap: 20, alignItems: 'start', border: '1px solid rgba(255,255,255,.08)', borderRadius: 13, background: 'rgba(14,17,22,.45)', padding: '20px 22px' }}>
            <div style={{ fontFamily: mono, fontSize: 11.5, letterSpacing: '.1em', textTransform: 'uppercase', color: color.amber, paddingTop: 5 }}>Frameworks</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['NestJS', 'Django REST Framework', 'Express', 'Angular', 'React', 'Next.js', 'GraphQL', 'Viem', 'Ethers.js'].map(s => <SkillPill key={s}>{s}</SkillPill>)}
            </div>
          </div>
          <div className="rz-skill-row" style={{ display: 'grid', gridTemplateColumns: '230px 1fr', gap: 20, alignItems: 'start', border: '1px solid rgba(255,255,255,.08)', borderRadius: 13, background: 'rgba(14,17,22,.45)', padding: '20px 22px' }}>
            <div style={{ fontFamily: mono, fontSize: 11.5, letterSpacing: '.1em', textTransform: 'uppercase', color: color.amber, paddingTop: 5 }}>Infrastructure &amp; Platform</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['AWS (Lambda · ECS · S3 · RDS)', 'Docker', 'Terraform', 'Kafka', 'Celery', 'OutSystems'].map(s => <SkillPill key={s}>{s}</SkillPill>)}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rz-pad" style={{ position: 'relative', zIndex: 1, maxWidth: 980, margin: '0 auto', padding: '34px 40px 10px' }}>
        <div data-reveal style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 18, border: '1px solid rgba(255,255,255,.1)', borderRadius: 16, background: 'linear-gradient(160deg,rgba(20,24,31,.8),rgba(10,12,16,.5))', padding: '26px 30px', position: 'relative', overflow: 'hidden' }}>
          <div className="pf-glow" style={{ position: 'absolute', top: '-40%', right: '-4%', width: '40%', height: '180%', background: 'radial-gradient(circle,rgba(242,180,65,.1),transparent 64%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ fontSize: 18, fontWeight: 600, color: color.heading, marginBottom: 4 }}>Want a copy to keep?</div>
            <div style={{ fontFamily: mono, fontSize: 13, color: color.muted }}>Grab the PDF version of this résumé.</div>
          </div>
          <a
            className="dc-btn-fill"
            href="/assets/Divyang-Chauhan-Resume.pdf"
            download
            style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 12, fontFamily: mono, fontSize: 13.5, fontWeight: 600, color: '#0a0c10', background: color.amber, padding: '14px 22px', borderRadius: 9, textDecoration: 'none' }}
          >
            <span style={{ display: 'inline-grid', placeItems: 'center', width: 18, height: 18, border: '1.6px solid #0a0c10', borderRadius: 5, fontSize: 11 }}>↓</span>
            Download PDF
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="rz-pad"
        style={{ position: 'relative', zIndex: 1, maxWidth: 980, margin: '24px auto 0', padding: '30px 40px 50px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 14, borderTop: '1px solid rgba(255,255,255,.06)' }}
      >
        <div style={{ fontFamily: mono, fontSize: 12.5, color: color.faint }}>© 2026 Divyang Chauhan · divyang.dev</div>
        <Link className="dc-link" to="/" style={{ fontFamily: mono, fontSize: 12.5, color: color.dim, textDecoration: 'none' }}>← Back to portfolio</Link>
      </footer>
    </div>
  )
}
