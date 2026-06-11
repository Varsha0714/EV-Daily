/* ══════════════════════════════════════════════
   EV Engineering Dashboard — Service Worker
   Enables offline access & PWA installation
   ══════════════════════════════════════════════ */

const CACHE_NAME = 'ev-dashboard-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/assets/css/style.css',
  '/assets/css/roadmap.css',
  '/assets/js/app.js',
  '/assets/js/companies.js',
  '/assets/js/data.js',
  '/assets/js/flashcards.js',
  '/assets/js/germany.js',
  '/assets/js/report.js',
  '/assets/js/roadmap.js',
  '/assets/js/skills.js',
  '/assets/js/sources.js',
  '/assets/js/weekly.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap'
];

/* ── Install: cache all static assets ── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE.filter(url => !url.startsWith('http')));
    })
  );
  self.skipWaiting();
});

/* ── Activate: clean up old caches ── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

/* ── Fetch: serve from cache, fallback to network ── */
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type === 'opaque') return response;
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        return response;
      }).catch(() => caches.match('/index.html'));
    })
  );
});
