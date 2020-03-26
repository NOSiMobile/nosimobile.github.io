'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/AssetManifest.json": "99d979b3677eb6d4a2d4b8cd7f957305",
"/assets/assets/cache/geo_ine.json": "e666859345cf9e987d70b80ea5016187",
"/assets/assets/fonts/Lato-Light.ttf": "2fe27d9d10cdfccb1baef28a45d5ba90",
"/assets/assets/fonts/Roboto-Bold.ttf": "dbcc2d576ca222f307fef3fedcb441ec",
"/assets/assets/images/flaga.png": "9cb99826bf069685ea8665ec565a286a",
"/assets/assets/images/flag_cv.jpeg": "8c292220773168156ea3cb5676bf72db",
"/assets/assets/images/male.png": "f2fb7dfff4d2466bba7e34c818b3f899",
"/assets/assets/images/sta_na_bo_mon.jpeg": "fa88634ad9775df684577553aa0049f8",
"/assets/assets/images/women.png": "bbe08f2c6ef7a4939920646fee964bef",
"/assets/assets/logo.png": "23277d3c776c906559e42572158f4b9c",
"/assets/assets/noticia_test.png": "6e1ada1b3afc1f2f30036e9eea632803",
"/assets/assets/otp.flr": "4ac6d7f5b922c9f28ece51d1e4b885e6",
"/assets/FontManifest.json": "7a73bb7dc0b117c99b6c880b4b63fcf1",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "f786ac1c42e6756b6890ede1727bcfd8",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/browserconfig.xml": "7ba72cf1049aff112d76bf5f8e986b37",
"/favicon.png": "fc6ffb47a86f385bdbddc388a1088dce",
"/icons/android-icon-144x144.png": "4daef09db4fba64861cf8a4dca1ddad5",
"/icons/android-icon-192x192.png": "822aee57c8abc8e39ef324beea839302",
"/icons/android-icon-36x36.png": "a4adc8c971914644a76a43ce3a162d54",
"/icons/android-icon-48x48.png": "1024012f3e19b770d440f46b68c65cd7",
"/icons/android-icon-72x72.png": "0c47351422471907e32a7bea9224d9b6",
"/icons/android-icon-96x96.png": "98bffb6a34978e8c8266ee67dc91ea7e",
"/icons/apple-icon-114x114.png": "0e322d273648283c746ad8f51a5869e7",
"/icons/apple-icon-120x120.png": "b079bae5264cc1cdbf59d59e8cf2db3f",
"/icons/apple-icon-144x144.png": "4daef09db4fba64861cf8a4dca1ddad5",
"/icons/apple-icon-152x152.png": "656d8ff585ac379183f581ef1f8a2b52",
"/icons/apple-icon-180x180.png": "5947bb4c13790d8ded1265631e56cc02",
"/icons/apple-icon-57x57.png": "1075c341b251b7b46369b5fe76345bd5",
"/icons/apple-icon-60x60.png": "8cf3d73837db9c0faa1e8943fe30d123",
"/icons/apple-icon-72x72.png": "0c47351422471907e32a7bea9224d9b6",
"/icons/apple-icon-76x76.png": "b51d5f3d204204391761acb41a32f8a0",
"/icons/apple-icon-precomposed.png": "c7ded923f0f7e3e27fc634a0a4444389",
"/icons/apple-icon.png": "c7ded923f0f7e3e27fc634a0a4444389",
"/icons/favicon-16x16.png": "fc6ffb47a86f385bdbddc388a1088dce",
"/icons/favicon-32x32.png": "502ace845232242ab0438de64d20ed11",
"/icons/favicon-96x96.png": "98bffb6a34978e8c8266ee67dc91ea7e",
"/icons/favicon.ico": "4cc33cdd42d404a17ef22218b62ae98d",
"/icons/Icon-192.png": "e19ccaca9ae57acff3d5e6370bddb608",
"/icons/Icon-512.png": "46f2a5b944447d49502ec852e5e06a46",
"/icons/ms-icon-144x144.png": "4daef09db4fba64861cf8a4dca1ddad5",
"/icons/ms-icon-150x150.png": "4f5e5f31e06598c20461f80b5ca3edb3",
"/icons/ms-icon-310x310.png": "6fc3724394c59a057eb806da1b788054",
"/icons/ms-icon-70x70.png": "19fbeafc842bca8ae0171c18a4fff90a",
"/index.html": "1f797f5d57c051f46805ce0622ce6d76",
"/main.dart.js": "f0edc77114f691f896a9407f6d8eda41",
"/manifest.json": "d29af9fadc387428b6555f27d0947abd"
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
