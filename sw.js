const CACHE_NAME = 'mihwar-driver-offline-v13';
const HERO_IMAGE = '/hero-image.webp';
const AUDIO_PATHS = Array.from({ length: 33 }, (_, i) => {
  const number = String(i + 1).padStart(2, '0');
  return [`/audio/question-${number}.mp3`, `/audio/answer-${number}.mp3`];
}).flat();
const WORD_AUDIO_PATHS = ['/audio/words/chunk-01.mp3', '/audio/words/chunk-02.mp3'];
const APP_SHELL = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/manus-routes.json',
  '/brand-mark.svg',
  '/src/style.css?v=13',
  '/src/accessible.css?v=13',
  '/src/content.js',
  '/src/offline-dictionary.js',
  '/src/arabic-pronunciation.js',
  '/src/interview-audio.js',
  '/src/word-audio-map.js?v=7',
  '/src/app.js?v=13',
  HERO_IMAGE,
  ...AUDIO_PATHS,
  ...WORD_AUDIO_PATHS
];

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
      .then(keys => Promise.all(keys.filter(key => key.startsWith('mihwar-driver-') && key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;

  if (url.pathname === HERO_IMAGE) {
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
      if (request.mode === 'navigate') return await caches.match('/index.html');
      return new Response('', { status: 503, statusText: 'Offline asset unavailable' });
    }
  })());
});
