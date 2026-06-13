import { mono, reveal } from '../theme'
import SectionLabel from './SectionLabel'

const groups = [
  {
    title: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'OutSystems'],
  },
  {
    title: 'Frameworks & Libraries',
    items: [
      'NestJS',
      'Django',
      'Django REST',
      'Express',
      'Angular',
      'React',
      'Next.js',
      'GraphQL',
      'CASL.js',
      'TypeORM',
    ],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    title: 'Infrastructure & Cloud',
    items: ['AWS Lambda', 'AWS ECS', 'S3', 'RDS', 'CloudFront', 'Cognito', 'Docker', 'Terraform'],
  },
  {
    title: 'Tools & Practices',
    items: [
      'Git',
      'CI/CD',
      'Apache Kafka',
      'Celery',
      'Microservices',
      'REST APIs',
      'Event-Driven Architecture',
      'Cypress',
    ],
  },
  {
    title: 'Web3',
    items: ['Ethers.js', 'Viem', 'The Graph', 'Multi-chain Integration'],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: 1180,
        margin: '0 auto',
        padding: '70px 40px 40px',
        scrollMarginTop: 84,
      }}
    >
      <SectionLabel label="// SKILLS" />
      <div
        className="dc-skills"
        style={{ ...reveal(), display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}
      >
        {groups.map((g) => (
          <div
            key={g.title}
            style={{
              border: '1px solid rgba(255,255,255,.08)',
              borderRadius: 13,
              background: 'rgba(14,17,22,.45)',
              padding: '20px 22px',
            }}
          >
            <div
              style={{
                fontFamily: mono,
                fontSize: 11,
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                color: '#f2b441',
                marginBottom: 14,
              }}
            >
              {g.title}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {g.items.map((i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: mono,
                    fontSize: 12.5,
                    color: '#cdd3dd',
                    border: '1px solid rgba(255,255,255,.12)',
                    padding: '6px 11px',
                    borderRadius: 7,
                  }}
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
