import { color, sans } from '../theme'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import HashScroll from './hash-scroll'
import {
  openGraphImages,
  siteDescription,
  siteUrl,
  twitterCard,
} from './site-metadata'

const title = 'Divyang Chauhan — Principal Software Engineer'

export const metadata = {
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Divyang Chauhan',
    url: '/',
    title,
    description: siteDescription,
    images: openGraphImages,
  },
  twitter: { ...twitterCard, title, description: siteDescription },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Divyang Chauhan',
  url: siteUrl,
  email: 'mailto:divyang@divyang.dev',
  jobTitle: 'Principal Software Engineer',
  worksFor: { '@type': 'Organization', name: 'NST Cyber' },
  description: siteDescription,
  sameAs: [
    'https://github.com/divyangchauhan',
    'https://www.linkedin.com/in/divyangchauhan',
  ],
  knowsAbout: [
    'Applied artificial intelligence',
    'AI agent systems',
    'Evaluation harnesses',
    'Backend engineering',
    'Cloud infrastructure',
    'Application security',
    'Smart contract security',
  ],
}

export default function Home() {
  return (
    <div
      id="dc-portfolio"
      style={{
        background: color.bg,
        // blueprint grid: 28px ruling drawn straight onto the page ground
        backgroundImage: `linear-gradient(${color.grid} 1px,transparent 1px),linear-gradient(90deg,${color.grid} 1px,transparent 1px)`,
        backgroundSize: '28px 28px',
        color: color.ink,
        fontFamily: sans,
        minHeight: '100vh',
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <HashScroll />
      <Nav />
      <Hero />
      <main>
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
