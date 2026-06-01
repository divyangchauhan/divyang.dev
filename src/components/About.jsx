export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="container">
        <p className="section-label">01 / About</p>
        <h2 id="about-heading" className="sr-only">About</h2>
        <div className="about-body">
          <p>
            I'm a backend engineer with five years of experience building
            distributed systems, scalable APIs, and SaaS products from the
            ground up. I was a founding engineer at NST Cyber, where I built
            two products from zero — cutting infrastructure costs by{' '}
            <strong>$200K/year</strong> on the flagship platform. Now at
            Kleros, I build the integration layer between EVM chains and
            backend services.
          </p>
          <p>
            Outside of my day job, I'm genuinely excited about AI — not just
            as a buzzword but as a practical lever. I use AI tools heavily in
            my own workflow, I'm constantly turning over ideas for where AI
            can make real products more useful, and that curiosity feeds
            directly into the SaaS products I'm building on the side. I
            recently open-sourced <strong>Tarpan</strong>, an end-to-end SaaS
            built on an LLM-powered document pipeline.
          </p>
        </div>

        <div className="currently-building">
          <span className="cb-label">Currently building</span>
          <p>
            <code>ResumeForge</code> — an AI-powered resume intelligence tool that helps job seekers tailor their resume for specific roles.
            &nbsp;&nbsp;·&nbsp;&nbsp;
            <code>AI Penetration Tester</code> — automates security reconnaissance, discovers vulnerabilities, and reviews code.
          </p>
        </div>
      </div>
    </section>
  )
}
