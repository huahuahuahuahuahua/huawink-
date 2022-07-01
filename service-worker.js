/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d5210831bf6b2d21d6c33ea1b3ddedbf"
  },
  {
    "url": "6e264f2185b6afa0c275d4637d8eabb1.jpg",
    "revision": "1ce446cfe7979205675af16020fb2f83"
  },
  {
    "url": "assets/css/0.styles.199fbbe3.css",
    "revision": "ed214bc959b1efebd50fa2546925bae5"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.3a84ebb9.js",
    "revision": "788a3ed34ac691cda6497235cb2a2efc"
  },
  {
    "url": "assets/js/10.eddf6c6b.js",
    "revision": "32b82fb932015c1d7d4edad0e3ea0955"
  },
  {
    "url": "assets/js/11.1d29931b.js",
    "revision": "9d4c9f99933e4786327d3a9717c99621"
  },
  {
    "url": "assets/js/12.812baf57.js",
    "revision": "6366333d27594bd6bac23d8a5ece567c"
  },
  {
    "url": "assets/js/13.3d8a8a70.js",
    "revision": "5c816a4ff9c821bd5eb84b2a8c66a843"
  },
  {
    "url": "assets/js/14.132ed842.js",
    "revision": "1a5a6699f8fe341814c1d8e7fabab92d"
  },
  {
    "url": "assets/js/15.5eed6434.js",
    "revision": "1d26f6d68fac8f59387ff2bbafa2f114"
  },
  {
    "url": "assets/js/16.85803b52.js",
    "revision": "317b4cf02b72575df3412d6882a52eb4"
  },
  {
    "url": "assets/js/17.3ff4a893.js",
    "revision": "52b6de0b4ce9ba981000fa6ef423c033"
  },
  {
    "url": "assets/js/18.57bb1084.js",
    "revision": "8777c3b0009db49e9cadbc876fbee9e9"
  },
  {
    "url": "assets/js/19.a590910f.js",
    "revision": "257e0354c7e1433722b5723218a52645"
  },
  {
    "url": "assets/js/20.fb9c394b.js",
    "revision": "d5f17ef18df8f160432b35886a73ce72"
  },
  {
    "url": "assets/js/21.a41cb629.js",
    "revision": "ec6c42a65f168e770fb6fada3cde5049"
  },
  {
    "url": "assets/js/22.6b589ebf.js",
    "revision": "7424e202a76fc33ddb2c76d001094e1f"
  },
  {
    "url": "assets/js/23.df521f3a.js",
    "revision": "09624b132f70d0fd505d3721b186bc08"
  },
  {
    "url": "assets/js/24.885853a1.js",
    "revision": "745e1c77a1559199ae13f2b265308c41"
  },
  {
    "url": "assets/js/25.f5f0deb4.js",
    "revision": "3ce98757accf025ef68989ea844e9196"
  },
  {
    "url": "assets/js/26.209fd055.js",
    "revision": "f1ce3ca97944292e4554b88175a203d5"
  },
  {
    "url": "assets/js/27.3f29158c.js",
    "revision": "d0664828669bcf78afe9d0ee029b8e72"
  },
  {
    "url": "assets/js/28.5e990187.js",
    "revision": "b7dae0467d1926881458d17893752381"
  },
  {
    "url": "assets/js/29.f121b08d.js",
    "revision": "22152cf8124394645c37e828dccb8745"
  },
  {
    "url": "assets/js/3.ee31ba41.js",
    "revision": "e09efd20ac996c60772a7ea87873017b"
  },
  {
    "url": "assets/js/30.9ae1eb2d.js",
    "revision": "5fcb609375f1b91adb4c68611945ee66"
  },
  {
    "url": "assets/js/31.4d64d6ad.js",
    "revision": "f4f3259e2e21964d57c2b543a491b975"
  },
  {
    "url": "assets/js/32.04665432.js",
    "revision": "d67ce16c4cd0bce079587f08d65c81d4"
  },
  {
    "url": "assets/js/33.dda6d141.js",
    "revision": "e528159043d04cffc0c87ccfd5f99fb0"
  },
  {
    "url": "assets/js/4.a2c345bc.js",
    "revision": "0c499954d2f82c5ddfe3ae8526abf4eb"
  },
  {
    "url": "assets/js/5.c619cb1b.js",
    "revision": "0eaf136041d70eab8d14db8fd29c7202"
  },
  {
    "url": "assets/js/6.b0b02ed5.js",
    "revision": "84ce97e73882d1510326eed4c95612c5"
  },
  {
    "url": "assets/js/7.1fd2a429.js",
    "revision": "12d238fe8f49018dcdebd191fb083d09"
  },
  {
    "url": "assets/js/8.151b82b2.js",
    "revision": "7829760626ce9089a1c18c8d822b178c"
  },
  {
    "url": "assets/js/9.724b2d6f.js",
    "revision": "3c26fb4e280d7937702fe061360af23e"
  },
  {
    "url": "assets/js/app.3aacfd90.js",
    "revision": "b34cfde6c223e13064ca714f59953198"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "categories/2021/index.html",
    "revision": "4fd81a47684a3d61ad6979b7b0075a31"
  },
  {
    "url": "categories/2022/index.html",
    "revision": "155c1c8959b44cc360d544e091e9b924"
  },
  {
    "url": "categories/index.html",
    "revision": "f913b84efd997b3d42fcdfc1f3c43974"
  },
  {
    "url": "docs/block-chain/ethereum/index.html",
    "revision": "2bb16f9355b43a1f5f5d621e208986e9"
  },
  {
    "url": "docs/block-chain/index.html",
    "revision": "9030f49809465fd3792b6aca3f654fd6"
  },
  {
    "url": "docs/block-chain/web3/index.html",
    "revision": "b8bb15e4dddff5f3cae75b06f4799f46"
  },
  {
    "url": "docs/face-interview/git-control.html",
    "revision": "a5371b82bde426842d1e050bcfec17b8"
  },
  {
    "url": "docs/face-interview/index.html",
    "revision": "b7f21132a35004e89a463543773982b9"
  },
  {
    "url": "docs/frontback-go/Golang-stack.html",
    "revision": "c2a420f8535ebbd532688584268eb14a"
  },
  {
    "url": "docs/frontback-go/golearn.html",
    "revision": "e925396a409a35924f6a47fd7cbd305b"
  },
  {
    "url": "docs/frontback-go/index.html",
    "revision": "0feb7543c0842a175856c0ae04af3026"
  },
  {
    "url": "docs/frontend/2021/ASTTransfeRender.html",
    "revision": "52890aac28ca97c8256c19552997fcea"
  },
  {
    "url": "docs/frontend/2021/CommonJSAndES6.html",
    "revision": "039fa016d59a1f2b343b81a4df806fd6"
  },
  {
    "url": "docs/frontend/2021/CommonJSSummary.html",
    "revision": "f7d7c3074a1aa4a8caa39eda11d38cd3"
  },
  {
    "url": "docs/frontend/2021/CompositionAPI.html",
    "revision": "dd7631b8631808219815a628c2be51ee"
  },
  {
    "url": "docs/frontend/2021/createElement.html",
    "revision": "81f8678964a353d03f8fcf9adabfedd2"
  },
  {
    "url": "docs/frontend/2021/frontDesignDocument.html",
    "revision": "c565755b6bc85866785b9b41e2c50880"
  },
  {
    "url": "docs/frontend/2021/gitbookintroduction.html",
    "revision": "2cc5a133b2c8e96c800e7177238f760d"
  },
  {
    "url": "docs/frontend/2021/index.html",
    "revision": "e796fb34a4a4eae5a5729ec9173e64a1"
  },
  {
    "url": "docs/frontend/2021/ReactHouseProject.html",
    "revision": "c37249c420c70185b6e705cb152470d9"
  },
  {
    "url": "docs/frontend/2021/vueSupermallProject.html",
    "revision": "e1003531228edddcb5ed3efe05747ff7"
  },
  {
    "url": "docs/frontend/2022/index.html",
    "revision": "6d673323e2e7cd27d30118af2c28f9d6"
  },
  {
    "url": "docs/frontend/index.html",
    "revision": "87c4a5f83c37558ade5d1050b2f1fb73"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "fd6b9925e6f334fec9f2ccc6035b63cd"
  },
  {
    "url": "LOGO.jpg",
    "revision": "1ce446cfe7979205675af16020fb2f83"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "messageboard.html",
    "revision": "1c404090a8e24c94dac9e6a452b244b4"
  },
  {
    "url": "tag/git/index.html",
    "revision": "e3820e05bbf224984c65fd51ea369f4a"
  },
  {
    "url": "tag/go/index.html",
    "revision": "b0cce3ff73b34f31e32b7a2441017cc0"
  },
  {
    "url": "tag/index.html",
    "revision": "d8d51ff0ae9f08572053951b50915eff"
  },
  {
    "url": "tag/node/index.html",
    "revision": "05c7277520e4cb359db987ebe3f41d27"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "ef7f32762aa8c920b9c64cb549a1f500"
  },
  {
    "url": "tag/Vue源码解析/index.html",
    "revision": "e219010bca2f0c641b00a2baaaf00615"
  },
  {
    "url": "tag/web3/index.html",
    "revision": "127874dbf96197b831c6e27a8989d59c"
  },
  {
    "url": "tag/以太坊/index.html",
    "revision": "d34c21b63d82ec73e698ec1372aa9727"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "257389f4eb38fd5db51a0e31fc0f28e7"
  },
  {
    "url": "tag/前端/page/2/index.html",
    "revision": "76f531726592981acfee9b5b7715b55d"
  },
  {
    "url": "tag/区块链/index.html",
    "revision": "50161c5f13766aa84b5820efeb531fe9"
  },
  {
    "url": "tag/后端/index.html",
    "revision": "bcffff123e915c1b62bb2d66ff5fa2c6"
  },
  {
    "url": "tag/设计/index.html",
    "revision": "03ebd18b2a152480754c1a417b85faef"
  },
  {
    "url": "tag/项目/index.html",
    "revision": "a4afe7896797e2c13716b0016b5473b5"
  },
  {
    "url": "timeline/index.html",
    "revision": "2449902e2f6b5f71616c1eb66c0608f6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
