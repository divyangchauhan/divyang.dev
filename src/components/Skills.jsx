import { color, kicker, mono } from '../theme'

const groups = [
  {
    label: 'LANGUAGES',
    body: 'TypeScript · Python · JavaScript · SQL · Solidity · C# · Rust',
  },
  {
    label: 'FRONTEND',
    body: 'React · Next.js · Angular · TypeScript · Tailwind CSS',
  },
  {
    label: 'BACKEND',
    body: 'NestJS · Django / DRF · Express · GraphQL · Pydantic · TypeORM',
  },
  {
    label: 'AI SYSTEMS',
    body: 'Agent orchestration · provider abstraction · forced-tool schemas · output validation · context isolation · eval harnesses · local inference',
  },
  {
    label: 'DATA & INFRA',
    body: 'PostgreSQL · MongoDB · MySQL · AWS · Terraform · CDK · Docker · Kafka · Celery',
  },
  {
    label: 'SECURITY',
    body: 'OSCP · Slither · Foundry · Halmos · Echidna · smart-contract review',
  },
]

const depth = [
  [
    'Deepest:',
    'backend system design, API design, database modeling & migrations, async processing, event-driven architectures.',
  ],
  [
    'Working breadth:',
    'React and Next.js frontends, AWS infrastructure, Docker, Terraform, the Web3 stack, Windows desktop development.',
  ],
  [
    'Weakest:',
    'CSS and pixel-level frontend — can read, debug, and ship clean UI changes; leans on AI for styling.',
  ],
  [
    'Mindset:',
    'stacks are tools. The architecture and the problem matter more than the medium.',
  ],
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="bp-shell bp-pad"
      style={{ padding: '56px 40px 24px' }}
    >
      <div
        style={{
          borderBottom: `1px solid ${color.rule}`,
          paddingBottom: 16,
          marginBottom: 28,
        }}
      >
        <div style={kicker()}>STACK &amp; DEPTH</div>
        <h2
          style={{
            fontSize: 30,
            fontWeight: 700,
            margin: 0,
            letterSpacing: '-.02em',
          }}
        >
          What I actually work in
        </h2>
      </div>

      <div className="bp-grid-3" style={{ marginBottom: 20 }}>
        {groups.map(({ label, body }) => (
          <div
            key={label}
            style={{
              border: `1px solid ${color.rule}`,
              borderRadius: 8,
              background: color.surface,
              padding: 22,
            }}
          >
            <div
              style={{
                fontFamily: mono,
                fontSize: 12,
                color: color.accent,
                marginBottom: 12,
              }}
            >
              {label}
            </div>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                margin: 0,
                color: color.bodyAlt,
              }}
            >
              {body}
            </p>
          </div>
        ))}
      </div>

      <div
        style={{
          border: `1px solid ${color.ruleAccent}`,
          borderRadius: 8,
          background: color.tint,
          padding: '26px 28px',
        }}
      >
        <div
          style={{ ...kicker('.12em'), color: color.accent, marginBottom: 14 }}
        >
          DEPTH &amp; RANGE
        </div>
        <div
          className="bp-grid-2"
          style={{ fontSize: 15, lineHeight: 1.6, color: color.bodyAlt }}
        >
          {depth.map(([label, body]) => (
            <p key={label} style={{ margin: 0 }}>
              <strong style={{ color: color.ink }}>{label}</strong> {body}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
