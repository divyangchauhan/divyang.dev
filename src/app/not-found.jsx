import NotFound from '../components/NotFound'

// Next prerenders this once and serves it, with a 404 status, for every URL
// that matches no route. The old SPA rewrote those to index.html and answered
// 200, which invited crawlers to index every typo as a copy of the home page.
// `robots` looks redundant next to the `noindex` Next emits for this route on
// its own, but without it the root layout's `index, follow` is emitted too, and
// the page ends up carrying two meta robots tags that contradict each other.
// Restating it here makes both tags agree.
export const metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
}

export default function NotFoundPage() {
  return <NotFound />
}
