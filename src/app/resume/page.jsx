import Resume from '../../components/Resume'
import { openGraphImages, twitterCard } from '../site-metadata'

const title = 'Résumé — Divyang Chauhan'

const description =
  'Résumé of Divyang Chauhan — Senior Backend Engineer with 5+ years of experience building production backend systems, multi-tenant SaaS, and cloud infrastructure, with hands-on Applied AI experience. OSCP certified.'

// The reason this migration happened. As an SPA every route served the same
// index.html, so /resume claimed the homepage as its canonical while
// sitemap.xml submitted it as its own URL — and scrapers, which do not run
// JavaScript, could never see anything else.
export const metadata = {
  title: 'Résumé',
  description,
  alternates: { canonical: '/resume' },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    siteName: 'Divyang Chauhan',
    url: '/resume',
    title,
    description,
    images: openGraphImages,
  },
  twitter: { ...twitterCard, title, description },
}

export default function ResumePage() {
  return <Resume />
}
