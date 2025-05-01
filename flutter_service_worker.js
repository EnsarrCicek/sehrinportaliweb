'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "db8ffc6ae2f7d33078c506f93050feee",
"assets/AssetManifest.bin.json": "29eeedb9f45530489556c449b5df6caf",
"assets/AssetManifest.json": "907804cc7def64abfe8c22ca71405d13",
"assets/assets/ayasofya.jpg": "1faa6cdcb02a5d0276418a015afd536c",
"assets/assets/beykoz.jpg": "f34410f00a405125586bbc6b4663c130",
"assets/assets/cities/ankara.jpg": "dbaa10dbaa1e1046cce3f8c7988890a1",
"assets/assets/cities/istanbul.jpg": "5520d12660d099744ad4cfe5c76eadec",
"assets/assets/sariyer.jpg": "1a06ae12b0745619923f885a7833f5fc",
"assets/assets/travel/karaman/aktekke1.jpg": "39b38e400cc36c8fb050fe9786430885",
"assets/assets/travel/karaman/aktekke2.jpg": "b2ef9f03d0c541c52f4752816bcc4305",
"assets/assets/travel/karaman/cesmeli.jpg": "b2eba45b8171acbc145fb6dd036159a0",
"assets/assets/travel/karaman/degle1.jpg": "b6665e855acb665321a770888a1b559f",
"assets/assets/travel/karaman/degle2.jpg": "7887ddc0fd03004dd7376bcb2f9dba5c",
"assets/assets/travel/karaman/ermenekbaraj.jpeg": "1cc7f19e601f8e8d6fd2f686c44ede9b",
"assets/assets/travel/karaman/fisandon.jpg": "0c6541e24b06b257632f85fdfe3cbb31",
"assets/assets/travel/karaman/gokceseki1.jpg": "287146af8b0caaea1f988ee9c07c303a",
"assets/assets/travel/karaman/gokceseki2.jpg": "0315069112e5865e284c4dbb83ee5169",
"assets/assets/travel/karaman/hatuniye1.jpg": "a642e054d4c1a08ff4a39ecf06015caf",
"assets/assets/travel/karaman/hatuniye2.jpg": "b0adfca02c02fb4b26b8a5e811183b3a",
"assets/assets/travel/karaman/hurrem1.jpg": "18469254ff3f4e96da35046107c3757b",
"assets/assets/travel/karaman/hurrem2.jpg": "e7d438fa0bab2fe2e7d75bfd57c4534a",
"assets/assets/travel/karaman/hurrem3.jpg": "3a97edc50eee430d7a05bf5019f2e1cf",
"assets/assets/travel/karaman/imaret1.jpg": "60b34ba2214341a86596d6893b001325",
"assets/assets/travel/karaman/imaret2.jpg": "91f53a3fb0fe3dce088dff635f90508a",
"assets/assets/travel/karaman/incesu1.jpg": "06178f7d302554f22ffd0b895cd7cd39",
"assets/assets/travel/karaman/incesu2.jpg": "bae4cda5322deee1ac91509b11848352",
"assets/assets/travel/karaman/incesu3.jpg": "01294afc56a2753c99220c45dd0e8e28",
"assets/assets/travel/karaman/incesu4.jpg": "e3949b2fa0b178142269fb9adcf3cb6d",
"assets/assets/travel/karaman/ismailhaci1.jpeg": "d492eb9219ef0a8fd65ed449540a2e1a",
"assets/assets/travel/karaman/ismailhaci2.jpeg": "aae41d751f72a8839445ad70cb58b702",
"assets/assets/travel/karaman/kale1.jpg": "e98249346bede43ad5dd1a1c5d62ec06",
"assets/assets/travel/karaman/kale2.jpg": "a2c72b7b252a941248b2a2e6dbfbb75d",
"assets/assets/travel/karaman/madensehir1.jpg": "d8069a2ce4d13a1a828bfb5d3e221910",
"assets/assets/travel/karaman/madensehir2.jpg": "1a8bc87ca7368bdc733391dc56fb860f",
"assets/assets/travel/karaman/mahallac1.jpg": "faa76950fb426a4eee408e4c8f7d485c",
"assets/assets/travel/karaman/mahallac2.jpg": "027091fc1ac3f9b1b657ad913ee2896e",
"assets/assets/travel/karaman/manazan1.jpg": "e3218faec744d6f8187739ffb47c3ea1",
"assets/assets/travel/karaman/manazan2.jpg": "7fc59048c1c2193c8a25107b330e2ab6",
"assets/assets/travel/karaman/museum1.jpg": "96f9c79d36bfb20009a533f13cb0bebf",
"assets/assets/travel/karaman/museum2.jpeg": "ecc5bcfabe14675be9c6fc093064c7f8",
"assets/assets/travel/karaman/museum3.jpg": "450a0758485d50da80ae8a9242fec957",
"assets/assets/travel/karaman/museum4.jpeg": "3408b82a24a931bbd3433b1b5d5ae25b",
"assets/assets/travel/karaman/tartan1.jpg": "15806d885b9b410ecc2efb4ea467baaa",
"assets/assets/travel/karaman/tartan2.jpg": "e5c4e1196ba8b436bba07fdf2f2f4153",
"assets/assets/travel/karaman/tartan3.jpg": "0f0b455b2e8919b3e9c32ac3dfb72c97",
"assets/assets/travel/karaman/tasbina.jpg": "c29a094b4b5bf93700afaf1f6b16577f",
"assets/assets/travel/karaman/taskale1.jpg": "08706e18f6ea3cd475bf093ae449b482",
"assets/assets/travel/karaman/taskale2.jpg": "bebf3c2a4de684f652e7635dc9f4979d",
"assets/assets/travel/karaman/taskale3.jpg": "9393ba336b3ecdf26ce53355cb8271cb",
"assets/assets/travel/karaman/tasmescit1.jpg": "018f843301259dba5efa6d58707fcd93",
"assets/assets/travel/karaman/tasmescit2.jpg": "e532a45e9c5488219b58c12e44997452",
"assets/assets/travel/karaman/tol1.jpg": "d3351ca19dc38ba6d9ee4ada25a1aa2a",
"assets/assets/travel/karaman/tol2.jpg": "3d55854cc42ecaad1c64a9a980920005",
"assets/assets/travel/karaman/tol3.jpg": "d660e13cdcdd1ee11b022241a39e63a1",
"assets/assets/travel/karaman/tol4.jpg": "2c083b8acd16bce7b5cb10c0d322ad8a",
"assets/assets/travel/karaman/yenidunya1.jpeg": "1e790a90ea2623291ee34dada757799e",
"assets/assets/travel/karaman/yenidunya2.jpeg": "63cc4754e03355ae3a793f2c3e41f12d",
"assets/assets/travel/karaman/yunusemrecamii1.jpg": "04b2e14bda081a9ed531def609e11d1b",
"assets/assets/travel/karaman/yunusemrecamii2.jpg": "dfff1756ba6d9a9e3e97cc92cd227a0a",
"assets/assets/travel/karaman/yunusemrecamii3.jpg": "04b2e14bda081a9ed531def609e11d1b",
"assets/assets/travel/karaman/zeyve.jpg": "829182a1aaba53e6271c33a26d3af3c8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d98da830f2c06531880623262e0cf157",
"assets/NOTICES": "1ec622b5f2ef55020c25bf9349017775",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "8b0691bb89dc850c365c85a9b1222097",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e6252070c6d9b2d59e57e7b83e812823",
"/": "e6252070c6d9b2d59e57e7b83e812823",
"main.dart.js": "1089988dc88dcd84f0fd9651c327a895",
"manifest.json": "15835d378f2e83ba8c9a519ece887e06",
"version.json": "c26f176d98500ebdd8a2066dbefe677a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
