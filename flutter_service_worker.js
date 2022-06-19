'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "30203929bff835a9ca9f767ef0cab5d7",
"index.html": "cfb6c18a12fc130b36d0e58f1f00fb0e",
"/": "cfb6c18a12fc130b36d0e58f1f00fb0e",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/kobble.png": "825bdb126c6d503c5b010a734dc23863",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"assets/NOTICES": "44112a78f9e5d697e45e83224b8a0a17",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/assets/icons/khcard.png": "730f573f472b08c944e5d05df134826d",
"assets/assets/icons/bgCard.png": "f1a0671564f3a247fd45f87601071074",
"assets/assets/icons/global_icons/Rect_dots.png": "4870593c13f51b9f8c8365ed7cf639f8",
"assets/assets/icons/global_icons/kobble.png": "825bdb126c6d503c5b010a734dc23863",
"assets/assets/icons/global_icons/image_bg.png": "9b693039b1934d04d73f3e33eb2e9335",
"assets/assets/icons/global_icons/detailsPic.png": "d32a54f8771b4d68f6cd12e9a30c8ee7",
"assets/assets/icons/global_icons/boxcard3.png": "faffd2e5abe82ccc8b0ed5087e509673",
"assets/assets/icons/global_icons/boxcard2.png": "00f83fa6c10e145ac31cc85dbdf55409",
"assets/assets/icons/global_icons/addressPage.png": "58240a582fa536c9d5dc51340afc5cb0",
"assets/assets/icons/global_icons/profile.png": "4225bc8b83a0dcfd132971df076d7aa9",
"assets/assets/icons/global_icons/smile.png": "f02a3c2eaee76ccb1945b000aa3c26f5",
"assets/assets/icons/global_icons/o.png": "8fb14a38a6ec20ccea6e774d4aa790f5",
"assets/assets/icons/global_icons/image_border.png": "9b18695be3a87951c72a6f5c5e1fb671",
"assets/assets/icons/global_icons/selectCard.png": "c48f3ad8b7090ed5a23ce8b306e2e423",
"assets/assets/icons/global_icons/loginPic.png": "3549c9750b0f2ddbc6d559312eb65f65",
"assets/assets/icons/global_icons/arrow-right.png": "1bfc05621de4c5b5af834843a94788ee",
"assets/assets/icons/global_icons/info.png": "8b8f47d69e0dd6159168344b68e56828",
"assets/assets/icons/global_icons/square_dots.png": "2501e117c96d05546925aa65f66238ec",
"assets/assets/icons/global_icons/customCard.png": "9398a91bf0404d54676081a0eb42d443",
"assets/assets/icons/global_icons/boxcard1.png": "9f54feb64fc9f5961eb9d0abff74e635",
"assets/assets/icons/global_icons/op.png": "904d1fecb61419d07a04b2ac09a2db7c",
"assets/assets/icons/easy.png": "946bf9ccde3634cab135c44902d8eab9",
"assets/assets/icons/login_assets/back-arrow.png": "3a5fe77a96f59feb397421946a74f19f",
"assets/assets/icons/login_assets/mobile.png": "ae636b0af9aa4811228544727d990756",
"assets/assets/icons/login_assets/pic3.png": "6ef0096eff4e8900bcf2a31d7e5c9482",
"assets/assets/icons/login_assets/m_arrow-right.png": "4538f0043f473c5b67815b152ea3cf08",
"assets/assets/icons/login_assets/flag.png": "574218e2e932978f42bfc4cd2d5709aa",
"assets/assets/icons/login_assets/pic1.png": "4cf09b2a5d976fdcb706fc0f88699234",
"assets/assets/icons/login_assets/arrow-right.png": "1bfc05621de4c5b5af834843a94788ee",
"assets/assets/icons/login_assets/mail.png": "5591fab25a8cd371a5d88d3340257a23",
"assets/assets/icons/instant.png": "51ea8037002ecb39d93857d249910391",
"assets/assets/icons/easy.svg": "0a5cbd7d131da892ca8ceba02be7a17e",
"assets/assets/icons/kvcard.png": "329e1a9173dbdcc536babfa8e3c1d0bc",
"assets/assets/icons/server.png": "d4bd2cdc5c0ee355edcc5fede87f4705",
"assets/assets/icons/edit_card/step4/step4_1.png": "a1dbdca1d2b4f5837eef20b36d4532fd",
"assets/assets/icons/edit_card/step4/step4_2.png": "ada84c6c8a6b8e1bf1e5eae261b3bdc7",
"assets/assets/icons/edit_card/step4/step4_3.png": "d2d20c12f14517b3ee80dd23998391a6",
"assets/assets/icons/edit_card/step4/step4_4.png": "cdf889880d59c3d9db796ef7f98d619e",
"assets/assets/icons/edit_card/step3/step3_4.png": "d53c05327ca9ef5c513f0eccea700c0b",
"assets/assets/icons/edit_card/step3/step3_2.png": "86a19f52fe1d385fb6a9a6d30778ecf7",
"assets/assets/icons/edit_card/step3/step3_1.png": "628b797ba834d0f8f220d3b256814234",
"assets/assets/icons/edit_card/step3/step3_3.png": "c83f3221b95b89584b916d3b3450517b",
"assets/assets/icons/edit_card/step1/qrcode3.png": "41df510a718da2ed3737c27363b12b1e",
"assets/assets/icons/edit_card/step1/qrcode2.png": "a6128d288a89cb4d2f9deff38711a593",
"assets/assets/icons/edit_card/step1/qrcode1.png": "da941e619b4fbc01c9caebfa898c2c9b",
"assets/assets/icons/edit_card/step1.png": "47d2931d85758018092a8387ddae52ee",
"assets/assets/icons/bgText.png": "dd3d697674c403c19e3ca7878480d9c9",
"assets/assets/fonts/Nunito_Sans/NunitoSans-Regular.ttf": "4dac705158fb1ca226d583b3829f82a0",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/AssetManifest.json": "438e6afeda67f07cc08d44875ff91e6f",
"assets/FontManifest.json": "5bade8cbc6806254c6ac52f87017452a",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js": "b01f3a14babca30046a28f845ddfc70d",
"version.json": "31b3a09d670bab89b5c54f936195d6c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/index": "34bbf06f32c7506eacfd968f20000e14",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/config": "427a32693c74dde2dbd2e35ae5f680b5",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
