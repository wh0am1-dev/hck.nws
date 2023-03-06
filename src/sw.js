import { manifest, version } from '@parcel/service-worker'

const hn = /hacker-news\.firebaseio\.com(?!.*stories\.json).*$/g
const og = /ogaas\.vercel\.app/g
const items = 'items'

addEventListener('install', e => e.waitUntil(install()))
addEventListener('activate', e => e.waitUntil(activate()))
addEventListener('fetch', e => e.respondWith(cacheFirst(e.request)))

const install = async () => {
  const appCache = await caches.open(version)
  await appCache.addAll(manifest)
}

const activate = async () => {
  const keys = await caches.keys()
  await Promise.all(
    keys.map(key => key !== version && key !== items && caches.delete(key))
  )
}

const cacheFirst = async request => {
  const cached = await caches.match(request)
  if (cached?.ok) return cached

  const response = await fetch(request)
  if (response.ok && (request.url.match(hn) || request.url.match(og))) {
    const itemCache = await caches.open(items)
    await itemCache.put(request, response.clone())
  }

  return response
}
