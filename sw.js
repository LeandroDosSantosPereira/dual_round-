const CACHE_NAME = 'fight-assistant-v2';
const ASSETS = [
  './',
  './index.html',
  './tailwind.min.css',
  './bell.mp3',
  './manifest.json',
  './Montserrat/Montserrat-VariableFont_wght.ttf',
  './Montserrat/Montserrat-Italic-VariableFont_wght.ttf'
];

// Instalação: Salva os arquivos no cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Ativação: Limpa caches antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
});

// Estratégia: Cache First, falling back to Network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request).catch(() => {
        // Se ambos falharem (offline e não cacheado), você pode retornar uma página de erro
      });
    })
  );
});