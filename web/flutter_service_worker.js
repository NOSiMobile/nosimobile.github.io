'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/AssetManifest.json": "c227adc1938861eccfb1961c3484b911",
"/assets/assets/fonts/Lato-Light.ttf": "2fe27d9d10cdfccb1baef28a45d5ba90",
"/assets/assets/fonts/Roboto-Bold.ttf": "dbcc2d576ca222f307fef3fedcb441ec",
"/assets/assets/images/flag_cv.jpeg": "8c292220773168156ea3cb5676bf72db",
"/assets/assets/images/male.png": "f2fb7dfff4d2466bba7e34c818b3f899",
"/assets/assets/images/sta_na_bo_mon.jpeg": "fa88634ad9775df684577553aa0049f8",
"/assets/assets/images/women.png": "bbe08f2c6ef7a4939920646fee964bef",
"/assets/assets/logo.png": "d3764459cd4cd80721542ef0b0e6739a",
"/assets/assets/noticia_test.png": "6e1ada1b3afc1f2f30036e9eea632803",
"/assets/assets/otp.flr": "4ac6d7f5b922c9f28ece51d1e4b885e6",
"/assets/FontManifest.json": "7a73bb7dc0b117c99b6c880b4b63fcf1",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "ed187ecdca9621181f61da7c3ec4af6d",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "8e6a725cf96ed0eb8539e7ca169f1d47",
"/main.dart.js": "155aeedc95415778b450dc8f4464ae28",
"/manifest.json": "239729811d0c285d9ec087f5f3014c31"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
