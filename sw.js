!function(){let a=[],n="";a=["/hck.nws/index.html","/hck.nws/manifest.webmanifest","/hck.nws/hck.nws.512.adb6c4f2.png","/hck.nws/hck.nws.1440.4c50e4aa.png","/hck.nws/favicon.ab4b618d.ico","/hck.nws/index.1bff1bcb.js","/hck.nws/index.f5b0506e.css","/hck.nws/outfit-latin-400-normal.7d0adf0d.woff2","/hck.nws/outfit-all-400-normal.be2782aa.woff","/hck.nws/index.38e17b1b.js","/hck.nws/404.html"],n="94d3304f",addEventListener("install",(a=>a.waitUntil(e()))),addEventListener("activate",(a=>a.waitUntil(c()))),addEventListener("fetch",(a=>a.respondWith(t(a.request))));const e=async()=>{const e=await caches.open(n);await e.addAll(a)},c=async()=>{const a=await caches.keys();await Promise.all(a.map((a=>a!==n&&caches.delete(a))))},t=async a=>{const n=await caches.match(a);return n?.ok?n:await fetch(a)}}();
//# sourceMappingURL=sw.js.map
