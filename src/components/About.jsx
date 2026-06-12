import SectionHeading from './SectionHeading.jsx'

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 340px',
    gap: '48px',
    marginTop: '36px',
  },
  prose: { display: 'flex', flexDirection: 'column', gap: '22px' },
  p: {
    margin: 0,
    fontSize: '14.5px',
    lineHeight: 1.85,
    color: '#A7B6C0',
    textWrap: 'pretty',
  },
  strong: { fontWeight: 600, color: '#4ADE80' },
  aside: { border: '1px solid #1C2630', borderRadius: '6px', alignSelf: 'start' },
  asideHeader: {
    padding: '14px 20px',
    borderBottom: '1px solid #1C2630',
    fontSize: '11.5px',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: '#71818D',
  },
  item: { padding: '18px 20px' },
  itemDivider: { padding: '18px 20px', borderBottom: '1px solid #141C24' },
  itemHead: { display: 'flex', alignItems: 'center', gap: '10px' },
  dot: {
    width: '7px',
    height: '7px',
    borderRadius: '50%',
    background: '#E2B563',
    display: 'inline-block',
  },
  itemName: { fontSize: '14.5px', fontWeight: 600, color: '#E6EDF2' },
  itemBody: { margin: '10px 0 0', fontSize: '12.5px', lineHeight: 1.7, color: '#71818D' },
}

const BUILDING = [
  {
    name: 'ResumeForge',
    body: 'An AI-powered resume intelligence tool that helps job seekers tailor their resume for specific roles',
  },
  {
    name: 'AI Penetration Tester',
    body: 'Automates security reconnaissance, discovers vulnerabilities, and reviews code',
  },
]

export default function About() {
  return (
    <>
      <SectionHeading id="about" label="01 · About" paddingTop="56px" />
      <section style={styles.grid}>
        <div style={styles.prose}>
          <p style={styles.p}>
            I was a founding engineer at NST Cyber, where I built two products from zero. Cut
            infrastructure costs by $200K/year on the flagship platform. At Kleros, I built the
            integration layer between EVM chains and backend services.
          </p>
          <p style={styles.p}>
            Beyond the day-to-day, I'm genuinely excited about AI — not just as a buzzword but as a
            practical lever. I use AI tools heavily in my own workflow, I'm constantly turning over
            ideas for where AI can make real products more useful, and that curiosity feeds directly
            into the SaaS products I build. I recently open-sourced{' '}
            <strong style={styles.strong}>Tarpan</strong>, an end-to-end SaaS built on an
            LLM-powered document pipeline.
          </p>
        </div>
        <aside style={styles.aside}>
          <div style={styles.asideHeader}>currently_building</div>
          {BUILDING.map((b, i) => (
            <div key={b.name} style={i < BUILDING.length - 1 ? styles.itemDivider : styles.item}>
              <div style={styles.itemHead}>
                <span style={styles.dot} />
                <span style={styles.itemName}>{b.name}</span>
              </div>
              <p style={styles.itemBody}>{b.body}</p>
            </div>
          ))}
        </aside>
      </section>
    </>
  )
}
