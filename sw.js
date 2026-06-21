var CACHE='costiera-v8';
var URLS=['./', './index.html'];
self.addEventListener('install',function(e){self.skipWaiting();e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(URLS)}))});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==CACHE}).map(function(k){return caches.delete(k)}))}))});
self.addEventListener('fetch',function(e){e.respondWith(fetch(e.request).then(function(r){var c=r.clone();caches.open(CACHE).then(function(cache){cache.put(e.request,c)});return r}).catch(function(){return caches.match(e.request)}))});
