/* PDF Studio service worker: caches everything so the app works offline.
   Change VERSION whenever you update any file so installed copies refresh. */
const VERSION='pdfstudio-v1';
const FILES=["./", "index.html", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "lib/fontkit.umd.min.js", "lib/jszip.min.js", "lib/mammoth.browser.min.js", "lib/pdf-lib-cantoo.min.js", "lib/pdf-lib.min.js", "lib/pdf.min.js", "lib/pdf.worker.min.js", "lib/pptxgen.bundle.js", "lib/vfs_fonts.js", "lib/xlsx.full.min.js"];
self.addEventListener('install',e=>e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==VERSION).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request)))});
