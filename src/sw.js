import { manifest, version } from '@parcel/service-worker'

addEventListener('install', e => e.waitUntil(install()))
addEventListener('activate', e => e.waitUntil(activate()))
addEventListener('fetch', e => e.respondWith(cacheFirst(e.request)))

const install = async () => {
  const appCache = await caches.open(version)
  await appCache.addAll(manifest)
}

const activate = async () => {
  const keys = await caches.keys()
  await Promise.all(keys.map(key => key !== version && caches.delete(key)))
}

const cacheFirst = async request => {
  const appCache = await caches.open(version)
  const cached = await appCache.match(request)
  if (cached) return cached

  const dataCache = await caches.open(`${version}:data`)
  try {
    const response = await fetch(request)
    await dataCache.put(request, response.clone())
    return response
  } catch (error) {
    const cachedData = await dataCache.match(request)
    if (cachedData) return cachedData

    return new Response('Network Error', {
      status: 408,
      headers: { 'Content-Type': 'text/plain' }
    })
  }
}
