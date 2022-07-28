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
  const cached = await caches.match(request)
  if (cached) return cached
  return await fetch(request)
}
