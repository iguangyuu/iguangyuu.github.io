'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "4054f86abb24c4574c8c01041ef06f48",
"index.html": "f83848e30b04c26e03bcb32f2c074a1c",
"/": "f83848e30b04c26e03bcb32f2c074a1c",
"main.dart.js": "8bb47c79fc257bc841343bd4436e5815",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "14ee29880bcf90ac5ea52908989a88b1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "11952b4d2d7bcfa0ced13add17f2f153",
".git/config": "b0289c019367c8e62989d563aa22a654",
".git/objects/92/8c803098c488e8e7521f5fc96be137dd149680": "97517fec8e1eaec7cce6ceed63b1f630",
".git/objects/0c/9cf5f9711d491c291d4cd9a21303fac381e3b0": "ffdb04b868cf92110364774cfffb2658",
".git/objects/0c/3797d364951996904d4f57873171ffd28ebc6c": "a6b68854f116ea32264dbea89f50f88f",
".git/objects/68/6aeecb747899641a29b9deacffdb045f5109ea": "b18236d51d6f50de42856ca41b50929c",
".git/objects/35/512ee8e0d5a3fcc7cdc4073609ee35dc5b4f89": "eaa6306778e8c6c79cf59caa6dc670d7",
".git/objects/69/bdf8a803d196a6b5dff7cf7bc2f15a9f9a4571": "00f429b5a0836431a5dcbf1b357f1c80",
".git/objects/3c/4029b2afc3885ee56c7bbbf341158934bbe8cb": "b2332908f26b7205f3b3a43c82406bde",
".git/objects/51/a6e537f3d40a9d40b98265033f8a2d38d90a04": "4cf467da3a7ddcc4155d8fc429b939fd",
".git/objects/51/05642613a4b6734e84362a61e4388d9ef162d4": "995165ca7c8a6851dab968995a41033d",
".git/objects/0b/6573479b5568167b994a249cc12c8cdae9ac2e": "23ba01d2a6b16ae3227aa6b5ada5f762",
".git/objects/5a/4908c44c3cc43d900c97c7f82e30a11b9ecaa4": "ea39d43ba3ae396c3048336d73c68b53",
".git/objects/5a/c3ef4c224033ba23ae5e4aef8fc85c11babf1c": "c956c75297b8093467513aa81273dcdb",
".git/objects/b2/a4335f5441e6c2415ce9a33f9275a81e5f754e": "a667e5416e31a08e16b8ad18ed77ae28",
".git/objects/b2/21eb8bdc570abb42206b773a17d83f75e1f419": "cca299ca604c8f943d0a04124718e2dc",
".git/objects/bb/7f42b55044d3cd19e75c570068d6db9c08bf96": "86cf176d28b1d0cf041e7d117804e83a",
".git/objects/bb/c5ffe4c5c89f3c91f0dc3ee5d45dd96c56cc12": "ef3fa4629880311af7a3b6943b9906d0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/bd285af0f6af381b576528ac3f0e16a32c95af": "3322e3075b8c5b4cbff2acea474c72cd",
".git/objects/d8/9bd9ed221d4dec07a1b54d405ec025687af289": "d0d250fe0b180b76cd13bcf7517212d9",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/cb76d653ad91f5d278ec2e2b6e69aff19082d8": "a4a072f1f9cf497c5716f45d93057d87",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/b98e8699580507dedadaee21fae725d3aa09f7": "cc70bbff237abf2b1bd7c742e7afcf99",
".git/objects/f3/3beeed309bba7133c87500ae910e7473bbaa1c": "4138f2fe0d0adcbfd9a4d5ddee8bb57c",
".git/objects/f3/130b7b768a71ce6b92d5b266fe05b014d56894": "2525140bc15f9402e5de94c5e5d61491",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/227bd536aec8c2a77e502d71ef220ce7b8e0ed": "8c3b99cd382e4b9716548ddc63993a91",
".git/objects/fd/60fa88848cf0228ba98e86edb8828f3b72393b": "c82084a8b81096bf663d0f33270e79cb",
".git/objects/f2/d865dd81039bf460a07c9aebb29cd4aa7d38d6": "08ff0b5b334a97ac679926d802434bfe",
".git/objects/f5/e74f3e846f469107a0a004e8406d51478ddf51": "08720b39f81438c13bdd653b81b4d89d",
".git/objects/c1/c646f593429af9dc2ff67cc2d7324750bafbe4": "6d60fcf8110b006a894c53a34658ded8",
".git/objects/18/ee1d68eb76e1c37b6f360826f279f0759efc28": "21aaa4df4b4028b9599832318df49544",
".git/objects/27/8ceaa36bad2675e77e002b95238e3148a19d86": "ea0e1ac38ffae0b4c5e8ce97deb6e955",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/16/b7bb62f797fc1eaf6f2fd79ef0c57c798f8e44": "5cf16e662e675c044c0f9a8480c243bb",
".git/objects/89/1c559c3e5d0f7ee81f42852f4c6e03d3d42b09": "c3b62a357770c1b8be682da2e4fd2271",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/19/37cb9a0accddb9f48b444a0a96905127dc3149": "7a517b103a70ff6cdcb4d58758b092f1",
".git/objects/26/ccc6c3827323520ef3c18e623183e30eeb139e": "639fd837ea1c200f22841210944c9120",
".git/objects/75/6803407d8521d094cf266eed9566a96d0a18a2": "80ae987a909148284ffece70e2677b01",
".git/objects/81/a4aa3646ea3849936209b3e2bc626ad8505f10": "457da88044d6439374857cb33473015f",
".git/objects/44/c70ef8f155a4510a80ef5d6a69e63df7e45e6c": "87228a9ff21e96165ce14683836ac855",
".git/objects/44/e781d9d01e43fd5f67e60e75cf4d6298a6fc54": "616ffc8ba1d3615f4922f19d0a75b2ac",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/fd6def8554eb01c6bddbf982590f92c08e45ed": "065393b6594dd72e2ec5eca433e86c4c",
".git/objects/07/e9c7b01af1f0fa9f125c93c3d82f4b4404a93a": "0e69d7625c45454bf297caef6086d0c0",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/6e/4fbe0623e1811fc695714c6855473db48e094c": "7c898301cdbd9226b55a43f60b3c7c47",
".git/objects/09/04912d471a593182b8279301da5e19deebe6b2": "e31cf6ba24ff7c486d675ece7c26ce5f",
".git/objects/54/4cf07e6aef339f4f5c1527b7f933d0c1cdfb8d": "d2c1feadafd37745e66cb023ad9cec4b",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/5e/b7ef76de45302f1fb7f009de9f65b621a4c300": "523254ca71ab178c026387ad7fe69e1b",
".git/objects/6d/6e8e5662cee7e244c562d6dafb59d9c55daf81": "dab072ceb37565489ccc917c1e4c4cfc",
".git/objects/01/60a1ed841717f4788a7efd29dcafb99104e8e3": "e32c86d6115e766c45eec49c165b3ea2",
".git/objects/39/c47eb90c82c3d5394ce6dfb62442a1ef6dbe4c": "f2bc0cf21f238a106fae23b53d31c9f7",
".git/objects/97/228bd9f291fe86ea3f0a68776d0a4f798d565b": "fe748ae38971cf4ef902367d9f575998",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/0a/429098c2654ee786000069e100211ebcb5b468": "0f37dad07c3e3fc224c3702ee00a1870",
".git/objects/d3/c6508e337f501611a06b8f2829f3b0e5505564": "bb7b565f52eb2f9e0055423b2798a6f3",
".git/objects/a7/e359c6c8cbeedfe97159deb4c0c185b909d956": "5949ca81f5f64e998ad1a24db97241c8",
".git/objects/dc/107c33e24b4358e5f34a8f0a161dd1940c44ec": "4a1cfaa39c8d97d17cace9e8d480f92c",
".git/objects/dc/7803494f2c86afd1f81f14aa2d452908b1213f": "cf37123b6b1effa2607f179889fa681c",
".git/objects/d2/18b347dfc54a9d62cbbb2b3ac839f2c51e9ec7": "c2f0c1a917201da822e3663f170bbee6",
".git/objects/d2/cc93647bfe19e87df882d4851c28395bb24f8f": "6674a50863fc653da44b3e15c259c7d2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/22fa304913053488f6d046a333f1efaf682be5": "97041d128a9f81ca12e1e45c9183fce5",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b0/022b8f0e306cfd859ce5e94d0fd2f9c31507c9": "fa472b7a6b6adcd8642fc1b6620f47d9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/025864696dc2263375db7f54525be57567f46e": "f1ea2bb7c6312901d632d3e8e74fa5ef",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/73944ac4c2007ee8ca88ec272b41c4cec02980": "1f81621d5d800555d8db90222d82a987",
".git/objects/cc/c3bd9c91943c979f0560fa49138690c1ef6c7e": "d8a63d5f713f464ac01e1f8c06f65311",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f9/19a55c1b1ce03177ee4ac033fa0c2d802e7c85": "3d0e533955b784a48235e9f9dc614b5a",
".git/objects/e8/4ec0ea89cc9741b1a3bf0523dc5744845ba0c0": "c8a9349d8804a2550ecfbe4841e2c681",
".git/objects/e8/cf8d2938af9489907601a3a9dd286f16772d1a": "871cabbdcb58bc70348df97df0377873",
".git/objects/fa/3897cf7054d83201e5057ce87da612d686bf41": "ed3974fddccee20708d0e346ba8b0f79",
".git/objects/e7/2ded047e834b39108dbd791f0aec84df7754a7": "4154decd3c9998028833de7571e1df87",
".git/objects/f8/e363026dfe69792c3943ab388aa3b8d7361531": "82ea751410a5b20f96cdb6dda0e413d6",
".git/objects/f8/28aac82ed55401a6eda4438b590d1c5ab9788d": "901a2959a5996c179317d166e766e199",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/70/8866da08a174d0391a4a3d1c64bdf8b5ffb1d8": "6fa05e1ba0bcbe72389d609dfd8cea27",
".git/objects/1e/f9a64283868843f5d089d5e3f79a85a2b97327": "a9a9bbf8559184cdcf18abb5d490dc83",
".git/objects/1e/22eb0a7d9e458e632e60e8c538c7620cf6e735": "ab4333ed2405898d14473f0371992070",
".git/objects/24/d779d16d2d64018b76d41c43dbef7f098bad56": "f004c3356165de99f8117915c3920c1a",
".git/objects/4f/fb2640613a495f940701df3e603148b3a4ed34": "7dd3b47ae44c572bbc1e3b036e7ee956",
".git/objects/8c/0e1b1810e2e22efd75fa43d444600ffe67f1ad": "91b4638bd322754cfe853a7f42579032",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/66261923ba13873389ee3612fe629583e7ae31": "f290b17fdec30481fe24d0c489a2f6c3",
".git/objects/8b/cf99f8a48ab095d0b55d8fad1cb9b47493413e": "662ab72cc445278724706aeb5115566d",
".git/objects/7f/ae283eb58205caa9a4bc99fb04adb88c36dba0": "445ce9df08ebcf29a75ebe1bd4281a97",
".git/objects/7f/595a0eadf7461b25a687a1444002e7f9af7936": "8042a091cb05abea82f0ae5a9c7f09fe",
".git/objects/22/1714dd347682bd67bc08b66e3b84e1a2815c29": "5797b635ff92943cadd04011f7e9bf99",
".git/objects/22/34351a5926e04d5087c452d89277cfdcf5cb3e": "c3b937cb46e10d9c6a25a48b099cdd00",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "907336000e7635a3308780ec94c67011",
".git/logs/refs/heads/main": "907336000e7635a3308780ec94c67011",
".git/logs/refs/remotes/origin/main": "fce6ccc390e05ab95ec5ca51622b7706",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "813e5b39ee32f287532f476e596372db",
".git/refs/remotes/origin/main": "813e5b39ee32f287532f476e596372db",
".git/index": "c07ad1e6e91c7724a8fc416956c658e8",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "0e72fe0e83f666d37c2c8371b7a861e8",
".git/FETCH_HEAD": "4174d5af6d4a001644306d7df7b46264",
"assets/AssetManifest.json": "91bf751438f1034facce8ef743fbb305",
"assets/NOTICES": "cdc35aea866bc6504d63ba7160c475f2",
"assets/FontManifest.json": "536f94795b1bf31327361e29bd5a6939",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "4bf74a7ad10100b3bb880290b1714e33",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/RiveAssets/house.riv": "3ac77437a4c56b5143d6ceca83dd61d9",
"assets/assets/RiveAssets/printing.riv": "80656afe9c56ef3e4cf817606ade5481",
"assets/assets/RiveAssets/tree_demo.riv": "082c0e6ca896d681c60faa534413d1ad",
"assets/assets/RiveAssets/confetti.riv": "ad0d13cbea799085305316f0e8118274",
"assets/assets/RiveAssets/paper.riv": "10159bbada5664c5304a38c89644f277",
"assets/assets/RiveAssets/check.riv": "14f9269423eabd7e2e10cafdc6ad4d41",
"assets/assets/RiveAssets/menu_button.riv": "f8fdfd9fd8dc7873dfac6f005f3233c1",
"assets/assets/RiveAssets/shapes.riv": "8839d67714d5e9c52b3e0dbb2b1e89c1",
"assets/assets/RiveAssets/button.riv": "c8ffe2900d31d8236247928cd7c2b5f3",
"assets/assets/RiveAssets/wait.riv": "2ca3485fd6b7c15f968b67217dd2b862",
"assets/assets/RiveAssets/success.riv": "b86728124c353d5d8be1b0b34e26eb59",
"assets/assets/RiveAssets/share.riv": "7b86c9072000ed630633791ea072df8d",
"assets/assets/RiveAssets/icons.riv": "3d29f9acebef13f01f371b59e84e664b",
"assets/assets/Backgrounds/Spline.png": "ff232f0cf3ebd732ca4383c381450714",
"assets/assets/Backgrounds/myfiles.jpg": "4c1025c5f6d3e7d69bd94375efcc8933",
"assets/assets/icons/User.svg": "5eb1b43b454f1e763da0928d4841c138",
"assets/assets/icons/profile_img.png": "bdd25e977a6858b7413f720188f721c3",
"assets/assets/icons/code.svg": "516c08c5e685a49b79fa87d0cc2f7641",
"assets/assets/icons/email.svg": "1ae885eb1fdb247400ac0400112ddefb",
"assets/assets/icons/Arrow%2520Right.svg": "82b7f5520958b35402d7576d20fb5186",
"assets/assets/icons/apple_box.svg": "3f634f4f80414d88ada3193069b4f961",
"assets/assets/icons/email_box.svg": "a09e0cb77621a100cfe8c98593b9f422",
"assets/assets/icons/google_box.svg": "9f643ad1c6e2731879c4eb501357d784",
"assets/assets/icons/ios.svg": "45b815957b353fc2c4b56e2e3779d6f3",
"assets/assets/icons/password.svg": "64a726ac604a3e6228987eeb9c10bc71",
"assets/assets/avaters/Avatar%25206.jpg": "57b1f154ef47c7a76a78544e9e6af44f",
"assets/assets/avaters/Avatar%2520Default.jpg": "fe9d7eaf1b437a1e6c84f1e6fdb77dcf",
"assets/assets/avaters/Avatar%25204.jpg": "95617f142e8dcfa6547ea80557eee016",
"assets/assets/avaters/Avatar%25205.jpg": "405a74c93f4806312fcd25e7722d9f90",
"assets/assets/avaters/Avatar%25201.jpg": "60f969aae689291e30cffc6deafd1ec2",
"assets/assets/avaters/Avatar%25202.jpg": "9eecb4a8f2da90198bf8c4f8c3e8c527",
"assets/assets/avaters/Avatar%25203.jpg": "4431bc261ac4f57a09dc1e041b32b4d1",
"assets/assets/Fonts/Inter-Regular.ttf": "eba360005eef21ac6807e45dc8422042",
"assets/assets/Fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/Fonts/Inter-SemiBold.ttf": "3e87064b7567bef4ecd2ba977ce028bc",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
