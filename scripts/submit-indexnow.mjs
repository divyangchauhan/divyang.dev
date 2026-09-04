import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const siteUrl = new URL('https://www.divyang.dev')
const endpoint = 'https://api.indexnow.org/indexnow'
const keyFileUrl = new URL('/indexnow-key.txt', siteUrl)

export function urlsFromSitemap(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
}

export function createPayload({ key, sitemap }) {
  const urlList = urlsFromSitemap(sitemap)

  if (urlList.length === 0) {
    throw new Error('The sitemap contains no URLs to submit')
  }

  for (const url of urlList) {
    if (new URL(url).host !== siteUrl.host) {
      throw new Error(`Sitemap URL does not belong to ${siteUrl.host}: ${url}`)
    }
  }

  return {
    host: siteUrl.host,
    key,
    keyLocation: keyFileUrl.href,
    urlList,
  }
}

export async function submitIndexNow({ fetchImpl = fetch } = {}) {
  const publicDirectory = new URL('../public/', import.meta.url)
  const [key, sitemap] = await Promise.all([
    readFile(new URL('indexnow-key.txt', publicDirectory), 'utf8'),
    readFile(new URL('sitemap.xml', publicDirectory), 'utf8'),
  ])
  const payload = createPayload({ key: key.trim(), sitemap })

  const response = await fetchImpl(endpoint, {
    method: 'POST',
    headers: { 'content-type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(15_000),
  })

  if (!response.ok) {
    const responseBody = await response.text()
    throw new Error(
      `IndexNow rejected the submission (${response.status}): ${responseBody}`,
    )
  }

  return payload.urlList
}

const isMainModule = process.argv[1] === fileURLToPath(import.meta.url)

if (isMainModule) {
  try {
    const urls = await submitIndexNow()
    console.log(`Submitted ${urls.length} URLs to IndexNow`)
  } catch (error) {
    console.error(error.message)
    process.exitCode = 1
  }
}
