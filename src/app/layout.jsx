// IBM Plex, self-hosted (SIL OFL 1.1). The `latin-` entry points ship one
// @font-face per weight; the bare ones pull six subsets we never render.
// Weights here must stay in step with the faces the theme actually asks for.
import '@fontsource/ibm-plex-sans/latin-400.css'
import '@fontsource/ibm-plex-sans/latin-600.css'
import '@fontsource/ibm-plex-sans/latin-700.css'
import '@fontsource/ibm-plex-mono/latin-400.css'
import '@fontsource/ibm-plex-mono/latin-600.css'

import '../index.css'
import {
  openGraphImages,
  siteDescription,
  siteUrl,
  twitterCard,
} from './site-metadata'

// metadataBase resolves the relative URLs below, and the per-route
// `alternates.canonical` and `openGraph.url` each page declares.
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Divyang Chauhan — Applied AI Engineer',
    template: '%s — Divyang Chauhan',
  },
  description: siteDescription,
  authors: [{ name: 'Divyang Chauhan' }],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Divyang Chauhan',
    images: openGraphImages,
  },
  twitter: twitterCard,
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f6f7fb',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
