// Shared metadata values.
//
// Next merges metadata *shallowly*: a page that exports its own `openGraph` or
// `twitter` replaces the layout's object outright rather than merging into it.
// So a page that sets only `openGraph.title` silently drops the site's og:image
// and turns a large summary card into a bare link. Everything a page needs to
// re-declare therefore lives here, to be spread back in.
export const siteUrl = 'https://www.divyang.dev'

export const siteDescription =
  'Divyang Chauhan — applied AI engineer building tool-using agent systems with executable verification, reproducible evals, and production backend infrastructure.'

const imageAlt =
  'Divyang Chauhan, Applied AI Engineer and Agent Systems Developer'

export const openGraphImages = [
  { url: '/og-image.png', width: 1200, height: 630, alt: imageAlt },
]

export const twitterCard = {
  card: 'summary_large_image',
  images: [{ url: '/og-image.png', alt: imageAlt }],
}
