const CACHE_NAME = 'quaderno-v7';

self.addEventListener('install', event => {
  self.skipWaiting(); // attiva subito il nuovo SW senza aspettare
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(['/']);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys
          .filter(key => key !== CACHE_NAME) // cancella tutto tranne la versione attuale
          .map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim(); // prende controllo delle tab aperte subito
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
