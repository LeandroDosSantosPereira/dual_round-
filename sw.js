/* sw.js */
const CACHE_NAME = 'fight-assistant-v2';

// Lista definitiva de arquivos para o funcionamento offline
const ASSETS = [
  './',
  './index.html',
  './tailwind.min.css',
  './bell.mp3',
  './manifest.json'
];

// Instalação: Salva os arquivos no cache físico do navegador
self.addEventListener('install', (event) => {
  // Força o Service Worker a se tornar o ativo imediatamente
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('SW: Cacheando ativos essenciais');
      return cache.addAll(ASSETS);
    })
  );
});

// Ativação: Limpa versões antigas do cache para evitar conflitos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  // Garante que o SW controle a página imediatamente sem precisar de reload
  self.clients.claim();
});

// Estratégia: Cache First (Busca no cache, se não tiver, vai na rede)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Retorna o arquivo do cache ou tenta buscar na rede
      return cachedResponse || fetch(event.request);
    }).catch(() => {
      // Fallback silencioso caso falhe (ex: mídia não cacheada)
      console.error('SW: Recurso não encontrado offline:', event.request.url);
    })
  );
});