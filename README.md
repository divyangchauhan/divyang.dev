# Divyang Chauhan — Portfolio

Personal portfolio site for [divyang.dev](https://www.divyang.dev).

## Tech stack

- **Next.js 16** (App Router) + **React 19**
- **Vercel** (hosting + deploys)
- **pnpm** — the repo is pinned to a version via `packageManager`, so use it rather than npm or yarn

Every route is prerendered to static HTML at build time; nothing here needs a
server runtime. Routes are server components by default — `'use client'` marks
the few small islands that need browser state.

## Local setup

```bash
pnpm install
pnpm dev                # http://localhost:3000
pnpm build              # prerenders every route into .next/
pnpm start              # serve the production build
```

## Checks

```bash
pnpm lint               # eslint
pnpm format:check       # prettier (pnpm format to write)
pnpm test:e2e           # playwright
```

CI runs all three on every pull request, on Node 22.

`test:e2e` builds and starts the production server itself, so there is nothing
to run first — but it does need the browser once:

```bash
pnpm exec playwright install chromium
```

The suite is one spec covering layout at six widths, the case-study and filter
interactions, per-route metadata, and the icon/manifest/crawler assets.

## Generated assets

Two scripts write into `public/`. Both are run by hand and their output is
committed — neither runs at build time.

```bash
pnpm icons              # favicon + PWA icon set
pnpm og                 # the 1200x630 social card
```

Both render in Playwright — `pnpm og` draws the card from the same design
tokens the site uses — so they need the browser installed as above. The résumé
PDF at
`public/assets/` is maintained by hand and must be kept in step with the
`/resume` route.

## Deployment

Pushes to `master` deploy to production at
[divyang.dev](https://www.divyang.dev); pull requests get a preview URL.

`vercel.json` sets the framework preset. It is not optional — the Vercel
project predates the Next.js migration, and a preset set on the project wins
over auto-detection, so without it the build looks for a Vite `dist/`.

No environment variables required.

## Project structure

```
src/
  app/                  # routes, layout, and per-route metadata
  components/           # the sections each route composes
  data/                 # project copy and case studies
  theme.js              # design tokens (colours, type, the section kicker)
  index.css             # document chrome + responsive rules only
public/                 # static assets, served from the site root
scripts/                # asset generators (see above)
tests/                  # playwright spec
```

## Conventions worth knowing

**Design tokens live in `theme.js`, and component styling stays inline.** That
mirrors the Blueprint handoff the site was built from. `index.css` carries only
what inline styles cannot express: document chrome, print rules, and the
responsive layout the fixed-width handoff had no way to describe. A value that
needs to change at a breakpoint has to be in a class — an inline style outranks
any media query.

**Next merges metadata shallowly.** A page exporting its own `openGraph` or
`twitter` object replaces the layout's rather than merging into it, silently
dropping the social card. Anything a route has to restate lives in
`src/app/site-metadata.js` to be spread back in, and a test asserts every route
still carries a full card.

**The canonical URLs have no trailing slash.** Next normalises the root that
way and ignores an absolute URL that disagrees, so `public/sitemap.xml` and the
JSON-LD follow it rather than fight it.

**Fonts are self-hosted** from `@fontsource`, one `@font-face` per weight via
the `latin-` entry points. A test fails the build if anything requests a font
CDN. This is why the site does not use `next/font`: `scripts/generate-og.mjs`
reads those `.woff2` files out of `node_modules` to draw the social card.
