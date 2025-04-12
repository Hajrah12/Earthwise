self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('earthwise-store').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/order-confirmation.html',
        '/manifest.json',
        '/icons/icon-192.png',
        '/icons/icon-512.png',
        '/style.css', // if you separate your CSS
        // Add any other assets/scripts here
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
