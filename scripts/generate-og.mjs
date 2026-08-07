// Regenerates public/og-image.png, the 1200x630 card that Discord, X, Slack and
// LinkedIn render when the site is shared — run `pnpm og` after changing the
// hero copy or the design tokens.
//
// The card is laid out in HTML and screenshotted with Chromium via Playwright,
// so it is built from the same tokens as the site rather than traced by hand;
// the copy below is lifted verbatim from src/components/Hero.jsx. IBM Plex is
// loaded straight off disk from @fontsource, which keeps the render both
// offline and byte-identical to what the site serves.
//
// The blueprint module is doubled to 56px here. A social card is displayed at
// roughly 500px wide, so the site's 28px ruling would land near 12px and read
// as noise; at 56px it still reads as ruling once scaled down.
import { writeFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { pathToFileURL } from 'node:url'
import { chromium } from '@playwright/test'
import { color } from '../src/theme.js'

const require = createRequire(import.meta.url)

const face = (family, weight, file) => `@font-face{
  font-family:'${family}';font-style:normal;font-weight:${weight};
  src:url('${pathToFileURL(require.resolve(file)).href}') format('woff2');
}`

const fonts = [
  face(
    'IBM Plex Sans',
    600,
    '@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-600-normal.woff2',
  ),
  face(
    'IBM Plex Sans',
    700,
    '@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-700-normal.woff2',
  ),
  face(
    'IBM Plex Mono',
    600,
    '@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-600-normal.woff2',
  ),
].join('\n')

const html = `<!doctype html><meta charset="utf-8"><style>
${fonts}
*{margin:0;padding:0;box-sizing:border-box}
body{width:1200px;height:630px;overflow:hidden}
.card{
  position:relative;width:1200px;height:630px;padding:76px 80px;
  display:flex;flex-direction:column;
  background:${color.bg};
  background-image:
    linear-gradient(${color.grid} 1px,transparent 1px),
    linear-gradient(90deg,${color.grid} 1px,transparent 1px);
  background-size:56px 56px;
  font-family:'IBM Plex Sans',sans-serif;color:${color.ink};
}
/* A hairline inset frame, the way a drawing sits inside its sheet. */
.frame{position:absolute;inset:28px;border:1px solid ${color.rule};pointer-events:none}
.pill{
  align-self:flex-start;display:inline-flex;align-items:center;gap:13px;
  font-family:'IBM Plex Mono',monospace;font-weight:600;font-size:20px;
  letter-spacing:.1em;color:${color.accent};
  border:1px solid ${color.ruleAccent};background:${color.tint};
  padding:11px 22px;border-radius:32px;margin-bottom:44px;
}
.dot{width:11px;height:11px;border-radius:50%;background:${color.accent}}
h1{font-size:104px;line-height:1;font-weight:700;letter-spacing:-.035em;margin-bottom:26px}
.lede{
  font-size:41px;line-height:1.22;font-weight:600;letter-spacing:-.02em;
  color:${color.accent};max-width:23ch;text-wrap:balance;
}
footer{
  margin-top:auto;padding-top:30px;border-top:1px solid ${color.rule};
  display:flex;justify-content:space-between;align-items:baseline;
  font-family:'IBM Plex Mono',monospace;font-weight:600;font-size:22px;
  letter-spacing:.08em;
}
.url{color:${color.ink}}
.url span{color:${color.accent}}
/* One step darker than the site's faint token, which is too light to
   survive the downscale to a thumbnail. */
.meta{color:${color.muted};letter-spacing:.06em}
</style>
<div class="card">
  <div class="frame"></div>
  <div class="pill"><span class="dot"></span>BACKEND · APPLIED AI · AGENTIC SYSTEMS</div>
  <h1>Divyang Chauhan</h1>
  <div class="lede">Applied AI engineer building systems you can measure, verify, and ship.</div>
  <footer>
    <span class="url">divyang.dev<span>_</span></span>
    <span class="meta">India · remote · OSCP</span>
  </footer>
</div>`

const browser = await chromium.launch()
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
})

await page.setContent(html)
await page.evaluate(() => document.fonts.ready)

writeFileSync('public/og-image.png', await page.screenshot())
await browser.close()
console.log('wrote public/og-image.png')
