// Regenerates every raster icon from public/favicon.svg — run `pnpm icons`
// after changing the mark.
//
// Two things are worth knowing before editing this:
//   1. No SVG rasterizer (ImageMagick, rsvg, Inkscape) is installed, so
//      Chromium via Playwright does the rendering.
//   2. favicon.svg draws its letter as a <path>, not <text>. A favicon is
//      loaded in a context that cannot fetch a webfont, so a <text> element
//      would fall back to each platform's own monospace. The glyph outline is
//      extracted from IBM Plex Mono ahead of time and inlined.
import { writeFileSync, readFileSync } from 'node:fs'
import { chromium } from '@playwright/test'

const svg = readFileSync('public/favicon.svg', 'utf8')
// iOS and Android round the corners themselves, so those icons ship square.
const squared = svg.replace(' rx="12"', '')

// Android may crop a maskable icon to any shape inside an 80%-diameter circle,
// so this variant drops the border and ruling (they'd be clipped) and shrinks
// the letter into the safe zone. The path's bounding box centre is (32.57,
// 31.74) in the 64-unit viewBox.
const glyph = svg.match(/<path d="M23\.03[^"]*"/)?.[0]
if (!glyph) {
  throw new Error('favicon.svg no longer contains the expected glyph path')
}
const maskable = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#f6f7fb"></rect><g transform="translate(32 32) scale(0.8) translate(-32.57 -31.74)">${glyph} fill="#2f3ad1"></path></g></svg>`

const targets = [
  { size: 16, out: 'ico-16', source: svg },
  { size: 32, out: 'ico-32', source: svg },
  { size: 32, out: 'public/favicon-32.png', source: svg },
  { size: 180, out: 'public/apple-touch-icon.png', source: squared },
  { size: 192, out: 'public/icon-192.png', source: squared },
  { size: 512, out: 'public/icon-512.png', source: squared },
  { size: 512, out: 'public/icon-maskable-512.png', source: maskable },
]

const browser = await chromium.launch()
const page = await browser.newPage()
const icoParts = {}

for (const { size, out, source } of targets) {
  await page.setViewportSize({ width: size, height: size })
  await page.setContent(
    `<style>html,body{margin:0;padding:0}svg{display:block}</style>${source.replace(
      '<svg ',
      `<svg width="${size}" height="${size}" `,
    )}`,
  )

  const png = await page.screenshot({ omitBackground: true })

  if (out.startsWith('ico-')) {
    icoParts[size] = png
  } else {
    writeFileSync(out, png)
    console.log('wrote', out)
  }
}

await browser.close()

// Pack 16px and 32px into an .ico. Modern browsers accept PNG-compressed
// entries inside the container, so the PNG bytes go in verbatim.
const blobs = [16, 32].map((size) => ({ size, png: icoParts[size] }))
const header = Buffer.alloc(6)
header.writeUInt16LE(0, 0) // reserved
header.writeUInt16LE(1, 2) // type: icon
header.writeUInt16LE(blobs.length, 4)

let offset = header.length + 16 * blobs.length
const directory = blobs.map(({ size, png }) => {
  const entry = Buffer.alloc(16)
  entry.writeUInt8(size, 0) // width (0 means 256)
  entry.writeUInt8(size, 1) // height
  entry.writeUInt8(0, 2) // palette size
  entry.writeUInt8(0, 3) // reserved
  entry.writeUInt16LE(1, 4) // colour planes
  entry.writeUInt16LE(32, 6) // bits per pixel
  entry.writeUInt32LE(png.length, 8)
  entry.writeUInt32LE(offset, 12)
  offset += png.length
  return entry
})

writeFileSync(
  'public/favicon.ico',
  Buffer.concat([header, ...directory, ...blobs.map((b) => b.png)]),
)
console.log('wrote public/favicon.ico')
