import { mono } from '../theme'

const code = { fontFamily: mono, fontSize: 13 }

// Four featured projects, in the order the handoff presents them. `tags` drive
// the filter chips; `caseStudy` is what the "Read case study" toggle reveals.
export const projects = [
  {
    id: 'pramana',
    name: 'Pramana',
    tags: ['ai', 'security'],
    featured: true,
    banner: 'CENTERPIECE',
    meta: 'multi-agent smart-contract auditor · Python',
    summary:
      'A three-agent auditor built on one thesis: a finding counts as real only when a proof-of-concept exploit actually executes. For every hypothesized vulnerability the system writes a Foundry test that triggers the exploit and runs it — if the test doesn’t pass, the finding doesn’t ship. False-positive rate becomes a mechanical outcome, not a judgment call.',
    chips: [
      '13/14 true positives',
      '0 false positives',
      'structural context isolation',
      'offline CI corpus',
    ],
    caseStudy: {
      heading: 'HOW IT WORKS',
      body: (
        <>
          <p>
            Three agents with Sanskrit names — <strong>Anumana</strong> finds,{' '}
            <strong>Khandana</strong> verifies, <strong>Nirnaya</strong>{' '}
            reports. Context isolation is structural, not prompted: each agent
            invocation builds a fresh message list, and the verifier is seeded
            with only a bare claim — contract, location, vulnerability class,
            hypothesis. It never sees the finder&rsquo;s reasoning or severity
            guess, so it can&rsquo;t be primed into agreeing and can&rsquo;t
            confirm anything it didn&rsquo;t execute.
          </p>
          <p>
            Provider neutrality is a protocol, not a promise: an{' '}
            <code style={code}>LLMAdapter</code> interface with adapters for
            Anthropic, OpenAI, and Kimi, and an agent loop that imports no
            vendor SDK. Slither supplies static-analysis leads; Foundry runs the
            proofs.
          </p>
          <p>
            The harness commits its baselines rather than summarizing them, and
            CI executes the whole corpus offline with no API key. The discipline
            once caught a real artifact in its own scoring — one bug counted
            twice under two class names — which is the kind of thing that only
            surfaces when the measurement is taken as seriously as the system.
          </p>
        </>
      ),
      asideHeading: 'BY THE NUMBERS',
      metrics: [
        ['Eval corpus', '14 vulns · 11 classes'],
        ['Fixtures', '9 + patched twins'],
        ['Best run', '13/14 · 0 FP'],
        ['Unit tests', '19 offline files'],
        ['Scale', '~5.2K LOC · 43 commits'],
      ],
      link: {
        href: 'https://github.com/divyangchauhan/Pramana',
        label: '→ github.com/divyangchauhan/Pramana',
      },
    },
  },
  {
    id: 'clinchcv',
    name: 'ClinchCV',
    tags: ['ai', 'shipped'],
    meta: 'shipped · live',
    summary:
      'A deployed Next.js app that turns a resume PDF into structured feedback: rubric-based scoring, ATS checks, job-fit analysis against a pasted description, bullet rewrites and cover letters. Every LLM response is schema-validated with retry-on-invalid and model fallback, and the whole thing is covered by 649 tests in CI that run against real infrastructure rather than mocks.',
    caseStudy: {
      heading: 'THE ENGINEERING STORY',
      body: (
        <>
          <p>
            Resume parsing is where most of the difficulty lives. Real resumes
            arrive as multi-column layouts, tables, and scans, so extraction
            falls back through several strategies and the pipeline rejects what
            it can&rsquo;t read — an image-only PDF or a .txt file — instead of
            passing garbage to the model. Every LLM call is a forced schema with
            validation, retry-on-invalid, and provider fallback, so a malformed
            response never reaches the UI.
          </p>
          <p>
            Paid quota is enforced in the database, not the application. A
            single Postgres RPC locks the user and resume rows, treats an
            already-unlocked resume as idempotent, and increments the counter in
            one transaction — two simultaneous requests can&rsquo;t both
            succeed, every AI feature on a resume draws from one slot, and no
            caller can unlock a resume they don&rsquo;t own. CI runs lint,
            typecheck, Vitest and Playwright on every push, with browser tests
            hitting real Supabase and R2.
          </p>
        </>
      ),
      asideHeading: 'STACK & SCALE',
      stack:
        'Next.js 16 · React 19 · TypeScript · Supabase (Postgres, no ORM) · Cloudflare R2 · Anthropic · Razorpay · Sentry · Vercel',
      metrics: [
        ['Commits', '193 · Apr–Aug 2026'],
        ['Tests', '649 · 62 files · CI'],
      ],
      // Closed source — the live product stands in for a repo link.
      link: {
        href: 'https://clinchcv.com/',
        label: '→ clinchcv.com',
      },
    },
  },
  {
    id: 'tarpan',
    name: 'Tarpan',
    tags: ['ai', 'distributed'],
    meta: 'distributed · TS + Python',
    summary:
      'Reads a death certificate and produces the notification letters an executor has to send — sixteen institution types, from Social Security and the IRS down to streaming subscriptions, each with its own required format and enclosures. Four services across an async queue boundary, with SSNs encrypted at the application layer before they ever reach storage.',
    caseStudy: {
      heading: 'THE ASYNC BOUNDARY',
      body: (
        <>
          <p>
            The browser uploads straight to S3 through a presigned URL, so
            document bytes never pass through the API. The API records the case
            and drops an SQS job; a containerized Python Lambda reads the
            certificate — extracting text where it can, rasterizing and using
            vision where it can&rsquo;t — calls the model with a forced tool
            schema so the output shape is fixed, validates with Pydantic, and
            calls back. Letter generation runs the same way on a second queue.
          </p>
          <p>
            Both queue paths share one container image: they need the same heavy
            Python dependencies for image and PDF work, so splitting them would
            duplicate the container without buying isolation. Social Security
            numbers carry a further layer — AES-256-GCM applied in the
            application before anything is written, so the database never holds
            them in the clear. Ten CDK stacks define the whole topology, with
            241 tests running across both languages in CI.
          </p>
        </>
      ),
      asideHeading: 'BY THE NUMBERS',
      metrics: [
        ['Components', '4 · 2 languages'],
        ['CDK stacks', '10 · synth clean'],
        ['Templates', '16 institutions'],
        ['Tests', '241 · CI both langs'],
        ['Commits', '200 · Mar–Jun 2026'],
      ],
      link: {
        href: 'https://github.com/divyangchauhan/Tarpan',
        label: '→ github.com/divyangchauhan/Tarpan',
      },
    },
  },
  {
    id: 'shruti',
    name: 'Shruti',
    tags: ['ai', 'platform', 'shipped'],
    meta: 'platform · C# / .NET 8',
    summary:
      'Windows-native dictation that runs entirely on the machine. A global hotkey captures microphone audio, a bundled whisper.cpp build transcribes it with no network call, and the text lands in whichever window was focused before recording started. That last step is the hard one: inserting text reliably into arbitrary third-party applications, each with its own idea of how input arrives.',
    caseStudy: {
      heading: 'TEXT INSERTION',
      body: (
        <>
          <p>
            Shruti records which window held focus before recording began, then
            picks an insertion strategy for that target: simulated keystrokes
            where they work, clipboard paste where they don&rsquo;t, and
            different key combinations for terminals than for editors. Modifier
            keys are cleared first, because the hotkey could overlap a Windows
            shortcut and could swallow the input.
          </p>
          <p>
            A compatibility matrix is committed alongside the code and covers
            the applications and strategies verified against it. Most of the
            platform code and manual QA went there, not into transcription.
          </p>
        </>
      ),
      asideHeading: 'STACK & SCALE',
      stack:
        'C# / .NET 8 · WinUI 3 · C++ shim over whisper.cpp · NAudio · SQLite · CPU / GPU (Vulkan, CUDA) / NPU inference',
      metrics: [
        ['Model', 'whisper tiny.en +'],
        ['Commits', '94 · from Jun 2026'],
      ],
      link: {
        href: 'https://github.com/divyangchauhan/Shruti',
        label: '→ github.com/divyangchauhan/Shruti',
      },
    },
  },
]

// Filter chips, in handoff order. `all` matches everything.
export const filters = [
  { key: 'all', label: 'All' },
  { key: 'ai', label: 'Applied AI' },
  { key: 'distributed', label: 'Distributed' },
  { key: 'security', label: 'Security' },
  { key: 'shipped', label: 'Shipped' },
  { key: 'platform', label: 'Platform' },
]
