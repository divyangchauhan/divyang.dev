import { expect, test } from '@playwright/test'

const viewports = [
  { name: 'desktop', width: 1440, height: 1000 },
  { name: 'laptop', width: 1280, height: 720 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile-414', width: 414, height: 896 },
  { name: 'mobile-375', width: 375, height: 812 },
  { name: 'mobile-320', width: 320, height: 720 },
]

// IBM Plex is bundled from @fontsource, so there is no font CDN to stub out or
// to make these assertions flaky. `fonts are self-hosted` guards that.
async function loadPortfolio(page) {
  await page.goto('/', { waitUntil: 'domcontentloaded' })
  await page.locator('#work').waitFor()
}

const cards = (page) => page.locator('#work article')
const cardTitles = (page) => page.locator('#work article h3')

for (const viewport of viewports) {
  test(`${viewport.name} layout has no overflow or console errors`, async ({
    page,
  }) => {
    const errors = []
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text())
    })
    page.on('pageerror', (error) => errors.push(error.message))

    await page.setViewportSize(viewport)
    await loadPortfolio(page)

    // Expand the widest case study — the two-column grid is the likeliest
    // source of horizontal overflow on narrow screens.
    await cards(page)
      .first()
      .getByRole('button', { name: 'Read case study →' })
      .click()
    await expect(page.getByText('HOW IT WORKS')).toBeVisible()

    const dimensions = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }))

    expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth)
    expect(errors).toEqual([])
  })
}

test('work filters narrow the card list by tag', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 })
  await loadPortfolio(page)

  await expect(cardTitles(page)).toHaveText([
    'Pramana',
    'ClinchCV',
    'Tarpan',
    'Shruti',
  ])

  await page.getByRole('button', { name: 'Security' }).click()
  await expect(cardTitles(page)).toHaveText(['Pramana'])

  await page.getByRole('button', { name: 'Distributed' }).click()
  await expect(cardTitles(page)).toHaveText(['Tarpan'])

  await page.getByRole('button', { name: 'Shipped' }).click()
  await expect(cardTitles(page)).toHaveText(['ClinchCV', 'Shruti'])

  await page.getByRole('button', { name: 'Applied AI' }).click()
  await expect(cardTitles(page)).toHaveCount(4)

  const allButton = page.getByRole('button', { name: 'All', exact: true })
  await allButton.click()
  await expect(allButton).toHaveAttribute('aria-pressed', 'true')
  await expect(cardTitles(page)).toHaveCount(4)
})

test('case studies expand one at a time', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 })
  await loadPortfolio(page)

  const pramana = cards(page).first()
  const tarpan = cards(page).nth(2)
  const pramanaToggle = pramana.getByRole('button')
  const tarpanToggle = tarpan.getByRole('button')

  await expect(pramanaToggle).toHaveAttribute('aria-expanded', 'false')
  await expect(page.getByText('HOW IT WORKS')).toHaveCount(0)

  await pramanaToggle.click()
  await expect(pramanaToggle).toHaveAttribute('aria-expanded', 'true')
  await expect(pramanaToggle).toHaveText('Close ×')
  await expect(pramana.getByText('BY THE NUMBERS')).toBeVisible()
  await expect(pramana.getByText('Eval corpus')).toBeVisible()

  // Opening another card closes the first.
  await tarpanToggle.click()
  await expect(tarpanToggle).toHaveAttribute('aria-expanded', 'true')
  await expect(pramanaToggle).toHaveAttribute('aria-expanded', 'false')
  await expect(page.getByText('THE ASYNC BOUNDARY')).toBeVisible()

  await tarpanToggle.click()
  await expect(tarpanToggle).toHaveAttribute('aria-expanded', 'false')
  await expect(page.getByText('THE ASYNC BOUNDARY')).toHaveCount(0)
})

test('copy, anchors, outbound links, and metadata are correct', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await loadPortfolio(page)

  await expect(page).toHaveTitle('Divyang Chauhan — Applied AI Engineer')
  await expect(
    page.getByRole('heading', { level: 1, name: 'Divyang Chauhan' }),
  ).toBeVisible()
  await expect(
    page.getByText(
      'Applied AI engineer building systems you can measure, verify, and ship.',
      { exact: true },
    ),
  ).toBeVisible()

  await page.getByRole('link', { name: 'View the work →' }).click()
  await expect(page).toHaveURL(/#work$/)
  await expect(page.locator('#work')).toBeInViewport()

  await page.locator('#work article').first().getByRole('button').click()
  await expect(
    page.getByRole('link', { name: /github\.com\/divyangchauhan\/Pramana/ }),
  ).toHaveAttribute('href', 'https://github.com/divyangchauhan/Pramana')

  // ClinchCV is closed source, so its case study links to the live product.
  await page.locator('#work article').nth(1).getByRole('button').click()
  await expect(
    page.getByRole('link', { name: /clinchcv\.com/ }),
  ).toHaveAttribute('href', 'https://clinchcv.com/')

  await expect(
    page.getByRole('link', { name: 'divyang@divyang.dev →' }),
  ).toHaveAttribute('href', 'mailto:divyang@divyang.dev')
  const contact = page.locator('#contact')
  await expect(contact.getByRole('link', { name: /^GitHub/ })).toHaveAttribute(
    'href',
    'https://github.com/divyangchauhan',
  )
  await expect(
    contact.getByRole('link', { name: /^LinkedIn/ }),
  ).toHaveAttribute('href', 'https://linkedin.com/in/divyangchauhan')
  await expect(
    contact.getByRole('link', { name: /^Twitter \/ X/ }),
  ).toHaveAttribute('href', 'https://x.com/divyangjchauhan')
  await expect(contact.getByRole('link', { name: /^Résumé/ })).toHaveAttribute(
    'href',
    '/resume',
  )

  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    'content',
    'Divyang Chauhan — applied AI engineer building tool-using agent systems with executable verification, reproducible evals, and production backend infrastructure.',
  )
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://www.divyang.dev',
  )

  await expect(page.locator('meta[name="theme-color"]')).toHaveAttribute(
    'content',
    '#f6f7fb',
  )
})

test('icons, manifest, and crawler files are served and consistent', async ({
  page,
}) => {
  await loadPortfolio(page)

  // Every icon the head and the manifest promise must actually exist —
  // regenerating the mark has broken these before.
  const assets = [
    '/favicon.svg',
    '/favicon-32.png',
    '/favicon.ico',
    '/apple-touch-icon.png',
    '/icon-192.png',
    '/icon-512.png',
    '/icon-maskable-512.png',
    '/site.webmanifest',
    '/robots.txt',
    '/sitemap.xml',
    '/og-image.png',
    '/assets/Divyang-Chauhan-Resume.pdf',
  ]

  for (const asset of assets) {
    const response = await page.request.get(asset)
    expect(response.status(), asset).toBe(200)
  }

  // The favicon must carry its letter as a <path>: a favicon cannot fetch a
  // webfont, so a <text> element would render in a different face per platform.
  const favicon = await (await page.request.get('/favicon.svg')).text()
  // Comments are stripped first — favicon.svg documents this very rule, and the
  // note itself mentions <text>.
  const faviconMarkup = favicon.replace(/<!--[\s\S]*?-->/g, '')
  expect(faviconMarkup).toContain('<path')
  expect(faviconMarkup).not.toContain('<text')

  const manifest = await (await page.request.get('/site.webmanifest')).json()
  expect(manifest.start_url).toBe('/')
  expect(manifest.theme_color).toBe('#f6f7fb')
  expect(manifest.icons.some((icon) => icon.purpose === 'maskable')).toBe(true)

  for (const icon of manifest.icons) {
    const response = await page.request.get(icon.src)
    expect(response.status(), icon.src).toBe(200)
  }

  // Sitemap and robots have to agree with the routes the app actually serves.
  const sitemap = await (await page.request.get('/sitemap.xml')).text()
  expect(sitemap).toContain('<loc>https://www.divyang.dev</loc>')
  expect(sitemap).toContain('<loc>https://www.divyang.dev/resume</loc>')
  expect(sitemap).toMatch(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/)

  const robots = await (await page.request.get('/robots.txt')).text()
  expect(robots).toContain('Sitemap: https://www.divyang.dev/sitemap.xml')
})

// Social scrapers and crawlers do not run JavaScript, so everything below is
// asserted against the raw HTML the server sends — not the hydrated DOM. As an
// SPA this could not pass: every route returned the same index.html.
test('each route serves its own metadata in the raw HTML', async ({
  request,
}) => {
  const head = async (path) => {
    const html = await (await request.get(path)).text()
    const meta = {}
    for (const [, key, value] of html.matchAll(
      /<meta (?:property|name)="((?:og|twitter):[a-z:_]+)" content="([^"]*)"/g,
    )) {
      meta[key] ??= value
    }
    return {
      title: html.match(/<title>([^<]*)<\/title>/)?.[1],
      canonical: html.match(/<link rel="canonical" href="([^"]*)"/)?.[1],
      meta,
    }
  }

  const home = await head('/')
  const resume = await head('/resume')

  expect(home.title).toBe('Divyang Chauhan — Applied AI Engineer')
  expect(home.canonical).toBe('https://www.divyang.dev')
  expect(home.meta['og:url']).toBe('https://www.divyang.dev')

  // The bug this migration fixes: /resume used to serve the homepage's title
  // and claim the homepage as its canonical, while sitemap.xml submitted it as
  // its own URL — a self-contradiction that drops it from the index.
  expect(resume.title).toBe('Résumé — Divyang Chauhan')
  expect(resume.canonical).toBe('https://www.divyang.dev/resume')
  expect(resume.meta['og:url']).toBe('https://www.divyang.dev/resume')
  expect(resume.meta['og:title']).toBe('Résumé — Divyang Chauhan')
  expect(resume.meta['og:description']).not.toBe(home.meta['og:description'])

  // Next merges metadata shallowly, so a page that declares its own openGraph
  // or twitter object silently drops the site-wide card image unless it spreads
  // it back in. Both routes must still carry a full large-summary card.
  for (const [name, route] of [
    ['home', home],
    ['resume', resume],
  ]) {
    expect(route.meta['og:image'], name).toBe(
      'https://www.divyang.dev/og-image.png',
    )
    expect(route.meta['og:image:width'], name).toBe('1200')
    expect(route.meta['og:image:height'], name).toBe('630')
    expect(route.meta['og:site_name'], name).toBe('Divyang Chauhan')
    expect(route.meta['twitter:card'], name).toBe('summary_large_image')
    expect(route.meta['twitter:image'], name).toBe(
      'https://www.divyang.dev/og-image.png',
    )
  }

  // The résumé body has to be in the HTML too, not just its metadata — it is
  // the page a recruiter is most likely to be sent a link to.
  const resumeHtml = await (await request.get('/resume')).text()
  expect(resumeHtml).toContain('PROFESSIONAL EXPERIENCE')
  expect(resumeHtml).toContain('Kleros, Remote')
})

test('fonts are self-hosted, with no request to a font CDN', async ({
  page,
}) => {
  const thirdParty = []
  page.on('request', (request) => {
    if (/fonts\.(googleapis|gstatic)\.com/.test(request.url())) {
      thirdParty.push(request.url())
    }
  })

  await loadPortfolio(page)
  await page.evaluate(() => document.fonts.ready)

  expect(thirdParty).toEqual([])

  // Every weight the design uses has to have actually loaded, or the page
  // silently falls back to system-ui and the whole layout shifts. This list is
  // the contract with the imports in src/main.jsx — the app sets only 600 and
  // 700, and inherits 400 for body copy.
  const missing = await page.evaluate(() =>
    [
      '400 16px "IBM Plex Sans"',
      '600 16px "IBM Plex Sans"',
      '700 16px "IBM Plex Sans"',
      '400 16px "IBM Plex Mono"',
      '600 16px "IBM Plex Mono"',
    ].filter((face) => !document.fonts.check(face)),
  )
  expect(missing).toEqual([])

  // The woff2 files must be served from this origin, not merely declared.
  const faces = await page.evaluate(() =>
    [...document.fonts].map((font) => font.family),
  )
  expect(new Set(faces)).toEqual(new Set(['IBM Plex Sans', 'IBM Plex Mono']))
})

test('the social card matches the dimensions its meta tags declare', async ({
  page,
}) => {
  await loadPortfolio(page)

  const response = await page.request.get('/og-image.png')
  expect(response.headers()['content-type']).toBe('image/png')

  // Width and height live in the PNG's IHDR chunk, bytes 16-23.
  const bytes = await response.body()
  const width = bytes.readUInt32BE(16)
  const height = bytes.readUInt32BE(20)

  await expect(page.locator('meta[property="og:image:width"]')).toHaveAttribute(
    'content',
    String(width),
  )
  await expect(
    page.locator('meta[property="og:image:height"]'),
  ).toHaveAttribute('content', String(height))
  expect({ width, height }).toEqual({ width: 1200, height: 630 })

  // The card this replaced was 679 KB of the previous design. Keep it small
  // enough that a scraper on a slow fetch budget still gets it.
  expect(bytes.length).toBeLessThan(250 * 1024)
})

// The nav is sticky, so a raw anchor jump parks the section heading underneath
// it. Landings have to clear the nav at every width, including the narrow ones
// where the links wrap and the nav grows taller.
for (const viewport of [
  { name: 'desktop', width: 1280, height: 900 },
  { name: 'mobile', width: 375, height: 812 },
]) {
  test(`${viewport.name} nav links land sections clear of the sticky nav`, async ({
    page,
  }) => {
    await page.setViewportSize(viewport)

    for (const [label, id] of [
      ['projects', 'work'],
      ['skills', 'skills'],
    ]) {
      await loadPortfolio(page)
      await page.locator(`.bp-navlinks a[href="#${id}"]`).click()

      await expect(async () => {
        const gap = await page.evaluate((sectionId) => {
          const navBottom = document
            .querySelector('.bp-nav')
            .getBoundingClientRect().bottom
          const heading = document.querySelector(`#${sectionId} h2`)
          // The kicker sits above the h2 and is the first thing clipped.
          const kicker = heading.parentElement.firstElementChild
          return kicker.getBoundingClientRect().top - navBottom
        }, id)

        // Below the nav, and not so far below that the section looks unanchored.
        expect(gap, `${label} clearance`).toBeGreaterThanOrEqual(0)
        expect(gap, `${label} clearance`).toBeLessThan(120)
      }).toPass({ timeout: 5000 })
    }
  })
}

test('résumé route renders, links back, and strips chrome for print', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1280, height: 900 })
  await page.goto('/', { waitUntil: 'domcontentloaded' })

  await page.getByRole('link', { name: 'resume' }).click()
  await expect(page).toHaveURL(/\/resume$/)
  await expect(
    page.getByRole('heading', { level: 1, name: 'Divyang Chauhan' }),
  ).toBeVisible()
  await expect(page.getByText('PROFESSIONAL EXPERIENCE')).toBeVisible()
  await expect(page.getByText('Kleros, Remote')).toBeVisible()

  // "Download PDF" serves the maintained file, not a window.print() dialog.
  const download = page.getByRole('link', { name: '↓ Download PDF' })
  await expect(download).toHaveAttribute(
    'href',
    '/assets/Divyang-Chauhan-Resume.pdf',
  )
  await expect(download).toHaveAttribute('download', '')
  expect(
    (await page.request.get('/assets/Divyang-Chauhan-Resume.pdf')).status(),
  ).toBe(200)

  const toolbar = page.locator('.bp-no-print')
  await expect(toolbar).toBeVisible()
  await page.emulateMedia({ media: 'print' })
  await expect(toolbar).toBeHidden()
  await page.emulateMedia({ media: 'screen' })

  const overflow = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }))
  expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.clientWidth)

  await page.getByRole('link', { name: '← back to site' }).click()
  await expect(page).toHaveURL(/\/$/)
  await expect(page.locator('#work')).toHaveCount(1)
})

test('a missing URL gets a real 404 that reports the path and offers a way out', async ({
  page,
}) => {
  // The status matters as much as the page. The old SPA rewrote every unmatched
  // URL to index.html and answered 200, which invites crawlers to index each
  // typo as a duplicate of the home page.
  expect((await page.request.get('/no-such-page')).status()).toBe(404)

  await page.setViewportSize({ width: 1280, height: 900 })
  await page.goto('/no-such-page', { waitUntil: 'domcontentloaded' })

  await expect(page).toHaveTitle('Page not found — Divyang Chauhan')
  // Next emits its own noindex here, and the root layout emits the site-wide
  // rule — so what matters is not the tag count but that no tag among them
  // tells a crawler to index this page.
  const robots = await page
    .locator('meta[name="robots"]')
    .evaluateAll((tags) => tags.map((tag) => tag.content))
  expect(robots.length).toBeGreaterThan(0)
  expect(robots.every((rule) => rule.startsWith('noindex'))).toBe(true)
  await expect(
    page.getByRole('heading', { level: 1, name: /drawing set/ }),
  ).toBeVisible()
  await expect(page.getByText('SHEET NOT FOUND')).toBeVisible()

  // One document is prerendered for every unmatched URL, so the path can only
  // be filled in on the client — it starts as a placeholder.
  const request = page.locator('.bp-404-req')
  await expect(request).toHaveText('GET /no-such-page → 404▌')

  // Every nav fragment belongs to a section of the home page, so from here they
  // have to travel there first rather than point at nothing on this document.
  for (const [name, hash] of [
    ['projects', '#work'],
    ['skills', '#skills'],
  ]) {
    await expect(page.getByRole('link', { name, exact: true })).toHaveAttribute(
      'href',
      `/${hash}`,
    )
  }

  const suggestions = page.getByRole('navigation', { name: 'Suggested pages' })
  await expect(suggestions.getByRole('link')).toHaveCount(3)
  await suggestions.getByRole('link', { name: /Projects/ }).click()
  await expect(page).toHaveURL(/\/#work$/)
  await expect(page.locator('#work')).toHaveCount(1)
})

test('the 404 keeps the failed request legible at 320px', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 })
  await page.goto('/no-such-page', { waitUntil: 'domcontentloaded' })

  const overflow = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }))
  expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.clientWidth)

  // The "→ 404" verdict is the point of that line, so at this width it wraps
  // rather than being clipped by the ellipsis that serves wider screens.
  const clipped = await page.locator('.bp-404-req').evaluate((el) => ({
    scrollWidth: el.scrollWidth,
    clientWidth: el.clientWidth,
  }))
  expect(clipped.scrollWidth).toBeLessThanOrEqual(clipped.clientWidth)
})
