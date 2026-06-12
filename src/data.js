// Content for Direction B — Systems Log

export const NAV = [
  { label: './about', section: 'about' },
  { label: './projects', section: 'projects' },
  { label: './skills', section: 'skills' },
  { label: './contact', section: 'contact' },
]

export const ASSURE_STATS = [
  { value: '$200K', label: 'Infrastructure cost saved / year' },
  { value: '90%', label: 'Reduction in system downtime' },
  { value: '80%', label: 'Faster deployments via IaC' },
  { value: '+40%', label: 'Revenue opportunity from tenancy model' },
  { value: '0', label: 'Critical security vulnerabilities shipped' },
  { value: '9', label: 'Cross-functional team members led' },
]

export const ASSURE_BUILT = [
  {
    title: 'ETL pipeline',
    body: 'Kafka-triggered AWS Lambda pipeline that parses raw security scan data into vulnerability datasets, exploit intelligence, typosquatted domain data, and exposed asset inventory.',
  },
  {
    title: 'Multi-tenant architecture',
    body: 'three-level tenancy (master → supertenant → tenant) with per-tenant subscription gating and data residency controls at the storage level.',
  },
  {
    title: 'Runtime white-labeling',
    body: 'every supertenant gets a fully branded portal without a new build; resolves at runtime from a single deployed Angular app on CloudFront.',
  },
  {
    title: 'Authenticated-only frontend',
    body: 'no HTML, CSS, or JS served to the browser without authentication, enforced via standalone login Lambda + Cognito session cookie.',
  },
  {
    title: 'Complex authorization',
    body: 'CASL.js attribute-based policies enforcing fine-grained access scoped simultaneously by supertenant, tenant, and project across a single shared API.',
  },
  {
    title: 'Backoffice impersonation',
    body: "admins can scope into any tenant's customer portal without creating a new user or separate session.",
  },
]

export const ASSURE_STACK = [
  { key: 'backend:', value: 'NestJS · AWS Lambda · MongoDB · CASL.js' },
  { key: 'frontend:', value: 'Angular · AWS CloudFront · CloudFront Functions' },
  { key: 'auth:', value: 'AWS Cognito + custom Lambda triggers' },
  { key: 'etl:', value: 'AWS Lambda pipeline · Apache Kafka' },
  {
    key: 'infrastructure:',
    value: 'AWS (Lambda, ECS, S3, CloudFront, Cognito) · Terraform',
  },
  { key: 'testing:', value: 'Cypress (E2E)' },
]

export const SKILLS = [
  { key: 'languages:', value: 'TypeScript · JavaScript · Python · SQL · OutSystems' },
  {
    key: 'frameworks_libraries:',
    value:
      'NestJS · Django · Django REST Framework · Express · Angular · React · Next.js · GraphQL · CASL.js · TypeORM',
  },
  { key: 'databases:', value: 'PostgreSQL · MongoDB · MySQL' },
  {
    key: 'infrastructure_cloud:',
    value: 'AWS Lambda · AWS ECS · S3 · RDS · CloudFront · Cognito · Docker · Terraform',
  },
  {
    key: 'tools_practices:',
    value:
      'Git · CI/CD · Apache Kafka · Celery · Microservices · REST APIs · Event-Driven Architecture · Cypress',
  },
  { key: 'web3:', value: 'Ethers.js · Viem · The Graph · Multi-chain Integration' },
]

// Assembled at runtime so serving-layer email obfuscation can't rewrite it.
export const EMAIL = 'divyang' + '@' + 'divyang.dev'
export const MAILTO = 'mai' + 'lto:' + EMAIL
