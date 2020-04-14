/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 */

workbox.core.setCacheNameDetails({ prefix: "pwa-app-vue" });

self.addEventListener("message", event => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

const articleHandler = workbox.strategies.networkFirst({
  cacheName: "articles-cache",
  plugins: [
    new workbox.expiration.Plugin({
      maxEntries: 50,
      maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
    })
  ]
});

// When usig precaching the client files are already in the cache and will follow a cacheOnly strategy.
//
// If not using precaching or wanting to cache non-build time generated information you will need to choose a caching strategy.
//
// https://developers.google.com/web/tools/workbox/modules/workbox-strategies#network_only
//
workbox.routing.registerRoute(/http:\/\/localhost:5051\/article\/.*/, args => {
  // article\/
  return articleHandler.handle(args).then(response => {
    // if (!response) {
    //   return caches.match("pages/offline.html");
    // } else if (response.status === 404) {
    //   return caches.match("pages/404.html");
    // }
    return response;
  });
});

self.addEventListener("fetch", event => {
  const { request } = event;
  const url = new URL(request.url);

  if (url.href.startsWith("http://localhost:5051/_data/articles/")) {
    event.respondWith(
      new workbox.strategies.NetworkFirst({ cacheName: "other-cache" }).handle({
        event,
        request
      })
    );
  }
});
