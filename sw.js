self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('restaurant').then(function (cache) {
            return cache.addAll([
                '/',
                'index.html',
                'restaurant.html',
                'css/details.css',
                'css/listing.css',
                'css/navigation.css',
                'css/styles.css',
                'js/dbhelper.js',
                'js/main.js',
                'js/restaurant_info.js',
                'data/restaurants.json'
            ]);
        })
    );
});

self.addEventListener('fetch', function (e) {
    // console.log('e', e);
    
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});