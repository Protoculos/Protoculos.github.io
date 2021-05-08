'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b43b0d1ed24157d4a0f3d354b951a6f6",
".git/config": "6f3d67276ddcfd0f690cfd6e4451be44",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6bb07df894638f3e43beefcba7e31ab4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f667adaded8720e0babf46f83d963d72",
".git/logs/refs/heads/master": "f667adaded8720e0babf46f83d963d72",
".git/logs/refs/remotes/origin/HEAD": "0191ce93cf63acef5e63c6d54087bd76",
".git/logs/refs/remotes/origin/master": "11cdff4be36caca9cddfc0285cc252d9",
".git/objects/07/a037cc83cd61570ccdb4da1d5bad44c7c910ba": "027256f62a5263fa69416bd205e82724",
".git/objects/0e/932c6ba72113cc9bcec38b8b0d1e63837f8eeb": "6be38f7c5d487af65f1b8fe2e6355484",
".git/objects/0e/a2d209617754822f47ec7aea40d9f4a0c4a6db": "dbb201f08d0744db1a0393d77886913d",
".git/objects/1c/c675a0b0d090e17ad70141a97524281a50efbe": "200c026a99a640d47fa14ba08342eaf0",
".git/objects/2b/5234bc2c99b465fd44338491b4201bc102808f": "3c4e03250f59eb6222f15c2439a806d6",
".git/objects/31/26c114e0fb8bba39047179cc8b808c7de57fc6": "153700269c3617e8d8926c112ef9fce1",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/39/dfb566123e46d4ab2c8cdc79372fbca1d2c22b": "b3dc930d04776c06143d47655dd4d774",
".git/objects/40/733f2aa98d2b7342d83a46100075e144b48d51": "73d08b78a93a553348970179d4e0ab16",
".git/objects/42/7cabab6e54b00ec45a1a0db8c3567e66c2d19b": "5471ed429363775926498b1e070c7b27",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/52/44afb50bf6f08b4717c0b31f90866f29f6b4f8": "b1beda0f14ed4b4f183975183c32d09f",
".git/objects/56/99cedf75887dad5dff7f849d3079fba7e902ba": "5cda418d6097e8e6a8a534b5d40b53ef",
".git/objects/5f/c758719dc7012edf5aa19b3f9b2acb27d2745e": "d0b10bb61d4906448a55eb6605e69a32",
".git/objects/68/c4da5489e32f1d6d3188f08c2668d6244c9ab2": "3d4146875b2d4612ff62d135cd014320",
".git/objects/72/fc03fe54cd1e7207cfa26ec011020fbc93f832": "f139d5cd261a3998e897e92f509459c3",
".git/objects/78/e4c49ad9d5e8e24b64e24a15534e3665cb8960": "ba3587c231d92f38fc52289115259087",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/3082f7326a719f821e6353baea2a743d2e21e2": "4ff5b1fd6d7d92ad1fd84d1623ed8f2f",
".git/objects/88/f035016c5144777c2aabd77f59beb31fac679a": "142deeb78f73cda3bb5daeef2111a38c",
".git/objects/8b/dfee93b82c75a4499beba6e9bd7d6c2978e992": "dab0f8324038cbe1cd9347721b4cc5a7",
".git/objects/93/38706d129e02330138779903dbb701888dcece": "4f45a5473a427c96f3cff0d93a408bfc",
".git/objects/94/f2a65a491af8de73505f7a18547260552134a2": "088b6eda8a5bdbcad1e450315a49acb7",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/ccdefd965218af454d0dda5f19796b37216234": "591779ce90d5e021c593346137100724",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/6f34020da87a896c8c4ccf0ed9f36724a8779f": "64ef5b315fcf860efe923aa7d0671963",
".git/objects/b3/a5ba87699cba65ceac1cd5ee5bf9d56e34acf8": "14358cd9e1f6e5fe9cbed91b6bd56b21",
".git/objects/b7/4cc918e6bbbe5513df375dcae5a5afc8673098": "23ecf85a3cff62573b39159cd8708698",
".git/objects/b8/1be0451071d2ffe4ef0558cb3511864652d725": "2dcc6d64b21267f534fe91dfeb7f40f8",
".git/objects/b8/abc1cec2a7dd958d7d110ae4d2587403470766": "15455c20d080ee60c36a47121fe05af9",
".git/objects/bb/a7c9e8fc804830aebb2b0965361d28d1b19627": "db957455322ecde3f0a91d95dc34c81a",
".git/objects/db/b58ffbfa3c0d813911938b50b946c8eac0c9e4": "b51b7dc588315ca3de6735899fdb79f3",
".git/objects/e0/9e693e9fc15f4f6e841679b91eeda61cdb7062": "426b3c2889db83326feca400e929189b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/pack/pack-8771bcb15386bb657c2aef7f15511c47a293eee6.idx": "89732efd9765ffe4db14d7f9d1d7e420",
".git/objects/pack/pack-8771bcb15386bb657c2aef7f15511c47a293eee6.pack": "c03b167b5202f389e4b69e3d7f4c733f",
".git/packed-refs": "a405bbfbe3e5156399d352c7e2e445e4",
".git/refs/heads/master": "1c7949588428aad63a54abba88c54ef1",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "1c7949588428aad63a54abba88c54ef1",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "32935d0270d07d764880713113492947",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "84fc23d02d8c119d849fc4c59cf21103",
"/": "84fc23d02d8c119d849fc4c59cf21103",
"main.dart.js": "c6e4fc9b65723664739a18154cc487eb",
"manifest.json": "b3e4599c82e93482449c68dd9fde72ad",
"version.json": "dc9d6b71a10b9ba9bfed51491a5618cb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
