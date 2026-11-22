const CACHE_NAME = 'interview-studio-offline-v17';
const APP_BASE = new URL('.', self.registration.scope);
const asset = path => new URL(path.replace(/^\/+/, ''), APP_BASE).href;
const HERO_IMAGE = asset('/hero-image.webp');
const AUDIO_PATHS = Array.from({ length: 33 }, (_, i) => {
  const number = String(i + 1).padStart(2, '0');
  return [asset(`/audio/question-${number}.mp3`), asset(`/audio/answer-${number}.mp3`)];
}).flat();
const APP_SHELL = [
  '/', '/index.html', '/manifest.webmanifest', '/manus-routes.json', '/brand-mark.svg',
  '/icon-192.png', '/icon-512.png', '/icon-maskable-512.png',
  '/src/style.css?v=17', '/src/accessible.css?v=17', '/src/content.js',
  '/src/offline-dictionary.js', '/src/arabic-pronunciation.js?v=17',
  '/src/arabic-pronunciation-data.js?v=17', '/src/interview-audio.js',
  '/src/word-audio-map.js', '/src/app.js?v=17', '/hero-image.webp',
].map(asset).concat(AUDIO_PATHS);

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => (key.startsWith('mihwar-driver-') || key.startsWith('interview-studio-offline-')) && key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;

  if (url.pathname === new URL(HERO_IMAGE).pathname) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      try {
        const response = await fetch(request, { cache: 'reload' });
        if (response.ok) await cache.put(request, response.clone());
        return response;
      } catch (_) {
        return await cache.match(request) || new Response('', { status: 503, statusText: 'Hero image unavailable offline' });
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const cached = await caches.match(request);
    if (cached) return cached;
    try {
      const response = await fetch(request);
      if (response.ok && response.type === 'basic') {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, response.clone());
      }
      return response;
    } catch (_) {
      if (request.mode === 'navigate') return await caches.match(asset('/index.html'));
      return new Response('', { status: 503, statusText: 'Offline asset unavailable' });
    }
  })());
});
