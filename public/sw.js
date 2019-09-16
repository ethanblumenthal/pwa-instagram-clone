self.addEventListener('install', event => {
  console.log('[Service Worker] installing service worker...', event);
});

self.addEventListener('activate', event => {
  console.log('[Service Worker] activating service worker...', event);
  return self.clients.claim();
});

self.addEventListener('fetch', event => {
  console.log('[Service Worker] fetching something...', event);
  event.respondWith(fetch(event.request));
});
