import assert from 'node:assert/strict'
import test from 'node:test'

import { createPayload, submitIndexNow } from './submit-indexnow.mjs'

test('creates an IndexNow payload from the sitemap', () => {
  const payload = createPayload({
    key: 'test-indexnow-key',
    sitemap: `
      <urlset>
        <url><loc>https://www.divyang.dev</loc></url>
        <url><loc>https://www.divyang.dev/resume</loc></url>
      </urlset>
    `,
  })

  assert.deepEqual(payload, {
    host: 'www.divyang.dev',
    key: 'test-indexnow-key',
    keyLocation: 'https://www.divyang.dev/indexnow-key.txt',
    urlList: ['https://www.divyang.dev', 'https://www.divyang.dev/resume'],
  })
})

test('rejects sitemap URLs from another host', () => {
  assert.throws(
    () =>
      createPayload({
        key: 'test-indexnow-key',
        sitemap: '<urlset><url><loc>https://example.com</loc></url></urlset>',
      }),
    /does not belong/,
  )
})

test('submits the public key and every sitemap URL', async () => {
  let request
  const urls = await submitIndexNow({
    fetchImpl: async (url, options) => {
      request = { url, options }
      return new Response(null, { status: 200 })
    },
  })

  assert.equal(request.url, 'https://api.indexnow.org/indexnow')
  assert.equal(request.options.method, 'POST')
  assert.match(request.options.headers['content-type'], /application\/json/)
  assert.deepEqual(JSON.parse(request.options.body).urlList, urls)
  assert.deepEqual(urls, [
    'https://www.divyang.dev',
    'https://www.divyang.dev/resume',
  ])
})
