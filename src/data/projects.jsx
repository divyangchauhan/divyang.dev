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
            <strong>Khandana</strong> verifies, <strong>Nirnaya</strong> reports.
            Context isolation is structural, not prompted: each agent invocation
            builds a fresh message list, and the verifier is seeded with only a
            bare claim — contract, location, vulnerability class, hypothesis. It
            never sees the finder&rsquo;s reasoning or severity guess, so it
            can&rsquo;t be primed into agreeing and can&rsquo;t confirm anything it
            didn&rsquo;t execute.
          </p>
          <p>
            Provider neutrality is a protocol, not a promise: an{' '}
            <code style={code}>LLMAdapter</code> interface with adapters for
            Anthropic, OpenAI, and Kimi, and an agent loop that imports no vendor
            SDK. Slither supplies static-analysis leads; Foundry runs the proofs.
          </p>
          <p>
            The harness commits its baselines rather than summarizing them, and CI
            executes the whole corpus offline with no API key. The discipline once
            caught a real artifact in its own scoring — one bug counted twice under
            two class names — which is the kind of thing that only surfaces when
            the measurement is taken as seriously as the system.
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
      caveat:
        'All evidence is synthetic fixtures with committed reference exploits — no real-world contract results are claimed.',
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
    meta: 'SHIPPED · LIVE',
    summary:
      'AI resume analysis and job targeting — the one project deployed on a real domain. An authenticated Next.js app that ingests a resume, scores it against a fixed rubric, and drives ATS, job-fit, bullet-rewriting and cover-letter flows. Sold as shipping discipline: 649 tests across three layers in CI, with browser suites running against real infrastructure.',
    caseStudy: {
      heading: 'THE ENGINEERING STORY',
      body: (
        <>
          <p>
            The strongest part is the test pyramid. GitHub Actions runs lint,
            typecheck, Vitest and Playwright on every push and PR: 62 test files,
            649 tests, all passing on a fresh run. The browser suites exercise real
            account signup, login, password reset, real PDF and DOCX uploads, and
            correct rejection of an image-only PDF and a .txt file — against real
            Supabase and R2.
          </p>
          <p>
            The most interesting decision is a concurrency-safe quota. A Postgres
            RPC locks both the user row and the resume row, makes claiming
            idempotent for an already-unlocked resume, and increments the counter
            in one transaction — so simultaneous requests can&rsquo;t both pass,
            all AI features on one resume consume one slot, and no caller can
            unlock another user&rsquo;s resume.
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
      caveat:
        'Anthropic is the only provider — no Pramana-style neutrality here. The AI features work but aren’t evaluated for output quality; the evidence is shipping discipline, not model reliability.',
    },
  },
  {
    id: 'tarpan',
    name: 'Tarpan',
    tags: ['ai', 'distributed'],
    meta: 'DISTRIBUTED · TS + PYTHON',
    summary:
      'A four-component system that reads a death certificate and generates institution-specific notification letters as PDFs — for the user to send — across sixteen institution types, from Social Security and the IRS to streaming subscriptions. The best evidence of multi-service design under solo authorship.',
    caseStudy: {
      heading: 'THE ASYNC BOUNDARY',
      body: (
        <>
          <p>
            The browser uploads straight to S3 through a presigned URL, so document
            bytes never pass through the API. The API records the case and drops an
            SQS job; a containerized Python Lambda reads the certificate —
            extracting text where it can, rasterizing and using Claude Vision where
            it can&rsquo;t — calls the model with a forced tool schema so the output
            shape is fixed, validates it with Pydantic, and calls back. Generation
            runs the same way on a second queue.
          </p>
          <p>
            Both queue paths share one container image, because both need the same
            heavy Python dependencies for image and PDF work — splitting them would
            duplicate the container without buying isolation. Getting that boundary
            right across TypeScript and Python is the substantial part of the work.
            Social Security numbers get a further layer: AES-256-GCM at the
            application level before they&rsquo;re written.
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
      caveat:
        'Generates letters for the user to send — nothing is dispatched to institutions. No OCR (Claude Vision handles scans). Never deployed; the architecture is the evidence.',
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
    meta: 'PLATFORM · C# / .NET 8',
    summary:
      'A Windows-native local dictation app: a global hotkey captures microphone audio, transcribes it locally through a bundled whisper.cpp build, and inserts the transcript into whatever window was focused before recording started. Systems engineering with a model as a dependency — not an ML credential, and honest about it.',
    caseStudy: {
      heading: 'THE HARD PART WASN’T THE AI',
      body: (
        <>
          <p>
            Speech recognition is delegated to whisper.cpp and was comparatively
            straightforward to wire in. The difficult problem is reliably delivering
            transcribed text into an arbitrary third-party Windows application:
            capture the window focused before recording started, evaluate an
            insertion policy per target, choose among paste shortcuts that differ by
            application class (terminals need different key combinations), fall back
            from simulated keystrokes to clipboard paste, and clear active modifier
            keys first because the default hotkey collides with a Windows
            input-language shortcut.
          </p>
          <p>
            There&rsquo;s a committed application-compatibility matrix behind it.
            That&rsquo;s where most of the platform code and nearly all the manual QA
            effort sit.
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
      caveat:
        'No model was trained, fine-tuned, or evaluated. The AI here is a dependency, not something built or measured.',
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
