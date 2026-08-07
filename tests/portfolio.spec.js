import { expect, test } from '@playwright/test'

const viewports = [
  { name: 'desktop', width: 1440, height: 1000 },
  { name: 'laptop', width: 1280, height: 720 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile-414', width: 414, height: 896 },
  { name: 'mobile-375', width: 375, height: 812 },
  { name: 'mobile-320', width: 320, height: 720 },
]

// Google Fonts is stubbed out so a slow CDN can't make layout assertions flaky.
async function stubFonts(page) {
  await page.route('https://fonts.googleapis.com/**', (route) =>
    route.fulfill({ status: 200, contentType: 'text/css', body: '' }),
  )
}

async function loadPortfolio(page) {
  await stubFonts(page)
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
    'https://www.divyang.dev/',
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
  expect(sitemap).toContain('<loc>https://www.divyang.dev/</loc>')
  expect(sitemap).toContain('<loc>https://www.divyang.dev/resume</loc>')
  expect(sitemap).toMatch(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/)

  const robots = await (await page.request.get('/robots.txt')).text()
  expect(robots).toContain('Sitemap: https://www.divyang.dev/sitemap.xml')
})

test('résumé route renders, links back, and strips chrome for print', async ({
  page,
}) => {
  await stubFonts(page)
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
