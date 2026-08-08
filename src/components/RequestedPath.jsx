'use client'

import { useSyncExternalStore } from 'react'
import { color } from '../theme'

// Next prerenders the not-found page once, as /_not-found, and serves that one
// document for every unmatched URL — so the server has no idea which path the
// visitor actually asked for, and renders this placeholder instead.
const fallback = '/the-page-you-wanted'

// Long enough for any real path worth showing, short enough that a hostile or
// absurd URL cannot push the "→ 404" verdict off the end of the line.
const maxLength = 40

// Nothing to subscribe to: the path cannot change while this page is on screen,
// because navigating anywhere unmounts it.
const subscribe = () => () => {}

function readPath() {
  let path
  try {
    path = decodeURIComponent(window.location.pathname)
  } catch {
    // A malformed percent-escape throws rather than round-tripping; the raw
    // form is still more useful to the visitor than the placeholder.
    path = window.location.pathname
  }
  if (!path || path === '/') {
    return fallback
  }
  return path.length > maxLength ? `${path.slice(0, maxLength)}…` : path
}

// useSyncExternalStore rather than an effect: it renders the server snapshot
// during SSR *and* hydration, then swaps in the client one — which is what
// keeps reading a browser-only value from being a hydration mismatch.
export default function RequestedPath() {
  const path = useSyncExternalStore(subscribe, readPath, () => fallback)

  return <span style={{ color: color.ink }}>{path}</span>
}
