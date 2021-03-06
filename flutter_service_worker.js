'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".firebase/hosting..cache": "b0f40f439821e7614750638a994059bd",
".git/COMMIT_EDITMSG": "21b90b36b5d1b3bfbd1dd43046721d98",
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
".git/index": "b952754cfd529fca87e9be7d0c45074f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b239fe1239e8b369c23ee5534e41f1c8",
".git/logs/refs/heads/master": "b239fe1239e8b369c23ee5534e41f1c8",
".git/logs/refs/remotes/origin/HEAD": "0191ce93cf63acef5e63c6d54087bd76",
".git/logs/refs/remotes/origin/master": "a91e0752dc6608378cb6eaa5d402d3aa",
".git/objects/04/f85e5d5a5ebfd87ee2bf049bf25fe4573a2d04": "04dac43bc45a8ada2feb86cce7664599",
".git/objects/07/a037cc83cd61570ccdb4da1d5bad44c7c910ba": "027256f62a5263fa69416bd205e82724",
".git/objects/0e/932c6ba72113cc9bcec38b8b0d1e63837f8eeb": "6be38f7c5d487af65f1b8fe2e6355484",
".git/objects/0e/a2d209617754822f47ec7aea40d9f4a0c4a6db": "dbb201f08d0744db1a0393d77886913d",
".git/objects/11/f78b94c96234325dd482bc8c6306130af2b0fc": "8ab97e03af1d9e0bbfc4514ed9c46374",
".git/objects/17/34b0a6a90176652f518bafbbca5f4a91138e07": "e89c2aabf710108c1bb80c5215208809",
".git/objects/1c/c675a0b0d090e17ad70141a97524281a50efbe": "200c026a99a640d47fa14ba08342eaf0",
".git/objects/2b/5234bc2c99b465fd44338491b4201bc102808f": "3c4e03250f59eb6222f15c2439a806d6",
".git/objects/31/26c114e0fb8bba39047179cc8b808c7de57fc6": "153700269c3617e8d8926c112ef9fce1",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/39/dfb566123e46d4ab2c8cdc79372fbca1d2c22b": "b3dc930d04776c06143d47655dd4d774",
".git/objects/3e/12d2d5fada757277d0bcc2bfae587babddfbd7": "ebd36b9c52401e820de4f3fb1de3dac8",
".git/objects/40/733f2aa98d2b7342d83a46100075e144b48d51": "73d08b78a93a553348970179d4e0ab16",
".git/objects/42/7cabab6e54b00ec45a1a0db8c3567e66c2d19b": "5471ed429363775926498b1e070c7b27",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/be0fc61ebe4174f7fc0e32a866bb65f572b8ed": "436586556bad828341a10c22cbe90124",
".git/objects/49/a9ce1deab598430aef885289038e52461d854b": "bb408ea44264388d58a823cb7e54e6e8",
".git/objects/4e/42ea0b006b352a3d8e374953208a5abbe6e6f5": "55eb6c79663a65ae7d7d18bfce405c71",
".git/objects/52/44afb50bf6f08b4717c0b31f90866f29f6b4f8": "b1beda0f14ed4b4f183975183c32d09f",
".git/objects/53/0331441305a93ff43012d7559259e9dbc397bc": "ee6f2b3a0c5a9706f79f49d335461705",
".git/objects/56/99cedf75887dad5dff7f849d3079fba7e902ba": "5cda418d6097e8e6a8a534b5d40b53ef",
".git/objects/5e/19530394db1d5cb40b8f14ff342987b41adc65": "e117465d9cdcd950e7d351392e6241d1",
".git/objects/5f/c758719dc7012edf5aa19b3f9b2acb27d2745e": "d0b10bb61d4906448a55eb6605e69a32",
".git/objects/65/9b7f0f9ba7c1d09fe50f3044ced36576941729": "9aeed0ca4f9c97e111ff0912b60f64f4",
".git/objects/68/c4da5489e32f1d6d3188f08c2668d6244c9ab2": "3d4146875b2d4612ff62d135cd014320",
".git/objects/6f/39daf3fa8c72a19c8fa81a5254d903366ec564": "6eddb255dd8dd4a547a8091f38f3771a",
".git/objects/72/fc03fe54cd1e7207cfa26ec011020fbc93f832": "f139d5cd261a3998e897e92f509459c3",
".git/objects/73/2016d74bba653f79a763ae2aafedd496f12867": "133cd62e347e6cc22c62628b50c6046b",
".git/objects/78/e4c49ad9d5e8e24b64e24a15534e3665cb8960": "ba3587c231d92f38fc52289115259087",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/3082f7326a719f821e6353baea2a743d2e21e2": "4ff5b1fd6d7d92ad1fd84d1623ed8f2f",
".git/objects/7b/adb77bf3ec9b7717f1a8a8480c97eef3056ba6": "b095123cc851adbde9b3eaf25d6fb230",
".git/objects/87/36750d1cb71e91b1c304d17b5fb98ca46d3f37": "ff94fc4be89f1af0558ce5ab81ebed60",
".git/objects/88/f035016c5144777c2aabd77f59beb31fac679a": "142deeb78f73cda3bb5daeef2111a38c",
".git/objects/8b/dfee93b82c75a4499beba6e9bd7d6c2978e992": "dab0f8324038cbe1cd9347721b4cc5a7",
".git/objects/93/38706d129e02330138779903dbb701888dcece": "4f45a5473a427c96f3cff0d93a408bfc",
".git/objects/94/f2a65a491af8de73505f7a18547260552134a2": "088b6eda8a5bdbcad1e450315a49acb7",
".git/objects/99/2e869606d4dbe3170b3deebdd84cc12861ef69": "5654ab3609f956c50b08b1407ebf831c",
".git/objects/9b/371e72000ac07318d9406b88dc485fb44d514c": "fb0fcd8576a244a66d3737960ab7744a",
".git/objects/9b/9720db01aa2f443b0a9a375d51ce78f0b000ec": "ce0e9d48d8b931e260415e7a6617e7c1",
".git/objects/9d/9b20cd8f5b087e4d5274ff2e42d1889e27f414": "70e99da40d6092e59881745bb8d5749b",
".git/objects/9e/5d3a4a93de8a4cf3d2c0c8c086cb9c1473ae54": "b9ee7ce6a9ef3acd7db75ee50b2a12b9",
".git/objects/a0/c845bc8005c4a1765279f1460f2fa284ec41ad": "ca9f6fa81aa18334de5c36cdaafdbeb0",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/ccdefd965218af454d0dda5f19796b37216234": "591779ce90d5e021c593346137100724",
".git/objects/a6/177446ad101803878feb272726ea7fa8d46478": "594f24377597250d3225914d30ddee82",
".git/objects/a8/0a809126ddbddde6a7bfb61db2c6a5bed5c946": "ae1a1350b83b0587238be99cd73fa69d",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/c04231e1d82bda2a26498220caf060b1a66b42": "fc461ae8feebcce3b9a48b524f293969",
".git/objects/af/d780f7090969a45708c863eb07db2de215f7a9": "6ffc1cd5d054ac8ac2edff27d2cfd029",
".git/objects/b0/6f34020da87a896c8c4ccf0ed9f36724a8779f": "64ef5b315fcf860efe923aa7d0671963",
".git/objects/b3/a5ba87699cba65ceac1cd5ee5bf9d56e34acf8": "14358cd9e1f6e5fe9cbed91b6bd56b21",
".git/objects/b7/4cc918e6bbbe5513df375dcae5a5afc8673098": "23ecf85a3cff62573b39159cd8708698",
".git/objects/b8/1be0451071d2ffe4ef0558cb3511864652d725": "2dcc6d64b21267f534fe91dfeb7f40f8",
".git/objects/b8/abc1cec2a7dd958d7d110ae4d2587403470766": "15455c20d080ee60c36a47121fe05af9",
".git/objects/bb/a7c9e8fc804830aebb2b0965361d28d1b19627": "db957455322ecde3f0a91d95dc34c81a",
".git/objects/be/8362d96eb0401db0b491ae8b8c33a80104ec62": "c9e22af6e76b9c50d09970f3effd2021",
".git/objects/c2/2193f7beef65f8deae3c667ad06f58195afece": "dd6abfc2b9b0f3117c54a7b7077f5d05",
".git/objects/c4/cfdd1d61da949458b3aba6eefa69d9c21764e7": "dc2c2506227a3e9bcabc0d3b3706680f",
".git/objects/cb/dab6beef37caec9ed9057f1e9a0ab24231abf8": "3d5aa0b0d893894511d1944a968130aa",
".git/objects/d3/11a34610b54ae5ce96f1a59b7e3609f600a7a4": "844208ff745e44f6946361e39dafefeb",
".git/objects/da/6cb399d2cb55fbbbd1fb0202bc2ffc51c7f69b": "d9b75140ab758251be36b59866d7997b",
".git/objects/db/b58ffbfa3c0d813911938b50b946c8eac0c9e4": "b51b7dc588315ca3de6735899fdb79f3",
".git/objects/df/adaf0f7cd8ead018ff8036fcf960bfab92ea8e": "4f9875377616537a14ff6b9750a943e4",
".git/objects/e0/9e693e9fc15f4f6e841679b91eeda61cdb7062": "426b3c2889db83326feca400e929189b",
".git/objects/e1/81bc4106bf3e82787e1e3777ab0029da828ded": "e744c53232cc84771016a450a0e25c5a",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/8ea49890bd8d492d85ec83278d887345fccd5f": "193f9d5251c0e77fc01e89147aa4314f",
".git/objects/ee/5146d57b402e5f3ee2aebc54b688b47834763d": "d9a0d70d35412c485c424357d13cbe01",
".git/objects/f0/079e01a83305e38cb5b769bf744de2092c76e6": "35f5ba533f6b801fe20449040eab584e",
".git/objects/f3/2b208778ec8795c261a4f78e8836726dfcd6a0": "c18c237ea4fc7f87521ed299236cf9b9",
".git/objects/f5/b8ec6300525365dc30b47cc4b968e9f0cd19f5": "0ba0279084ad96d2d2fe69f0ac3cb134",
".git/objects/f6/0c88a9294826957f55851ed540e6c4847f6c1e": "622b7e7b6785193bcca649fc6e807ba7",
".git/objects/ff/926dfad9f3e4b9621d898c3feff8501a7a5d13": "5ba6c54619f8847e9137c0c67872906a",
".git/objects/pack/pack-8771bcb15386bb657c2aef7f15511c47a293eee6.idx": "89732efd9765ffe4db14d7f9d1d7e420",
".git/objects/pack/pack-8771bcb15386bb657c2aef7f15511c47a293eee6.pack": "c03b167b5202f389e4b69e3d7f4c733f",
".git/packed-refs": "a405bbfbe3e5156399d352c7e2e445e4",
".git/refs/heads/master": "e332be77ef572b7e2897048bd5d24209",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "e332be77ef572b7e2897048bd5d24209",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "bb927d87f2ef5ef62c361c68930b9008",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase.json": "6bcf42ed79fb26c537250453f0bdd183",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "fec77aeccc2e209f10c61a9919e24399",
"/": "fec77aeccc2e209f10c61a9919e24399",
"main.dart.js": "977601174da28d9aac6b1d856eb73a3a",
"manifest.json": "9b8356cb7231cf627086b5e56badea39",
"version.json": "47a5c493e83170f87eefd94c311a237c"
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
