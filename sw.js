if(!self.define){let e,i={};const l=(l,n)=>(l=new URL(l+".js",n).href,i[l]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=i,document.head.appendChild(e)}else e=l,importScripts(l),i()})).then((()=>{let e=i[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(n,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let u={};const c=e=>l(e,r),a={module:{uri:r},exports:u,require:c};i[r]=Promise.all(n.map((e=>a[e]||c(e)))).then((e=>(s(...e),u)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"7e8f7e894711e534767aa333fbe7b201"},{url:"android-chrome-512x512.png",revision:"029aed6e0f87c77ed7c6b3a02b698380"},{url:"apple-touch-icon.png",revision:"624fb68cc13f29852c33061abe95f50c"},{url:"favicon-16x16.png",revision:"703030c6eb129869b937dc95487c55a3"},{url:"favicon-32x32.png",revision:"8774595d11a537696386d381ea7b712f"},{url:"favicon.ico",revision:"6f95b0efa7f86468f6d99ae731957b15"},{url:"index.html",revision:"0d747ebc3c50d99d86a76290999abc5f"},{url:"public/alarm-47fbbbce.mp3",revision:null},{url:"public/ame01-3e9a573d.gif",revision:null},{url:"public/ame02-90858f0b.gif",revision:null},{url:"public/ame03-3b494dc5.gif",revision:null},{url:"public/ame04-d1976229.gif",revision:null},{url:"public/appBar-447e1a10.jpg",revision:null},{url:"public/bg1-cb677ce3.jpg",revision:null},{url:"public/bg2-9f77e331.jpg",revision:null},{url:"public/bg3-ec137d4a.jpg",revision:null},{url:"public/bg4-8f859675.jpg",revision:null},{url:"public/Home-c77f1541.js",revision:null},{url:"public/index-a5527696.js",revision:null},{url:"public/index-e8ad3bf0.css",revision:null},{url:"public/kangel01-8db95c51.gif",revision:null},{url:"public/kangel02-ac7ac319.gif",revision:null},{url:"public/kangel03-3840cbf1.gif",revision:null},{url:"public/kangel04-9f282d4e.gif",revision:null},{url:"public/List-1ce4fd96.css",revision:null},{url:"public/list-24295613.js",revision:null},{url:"public/List-2e119b81.js",revision:null},{url:"public/materialdesignicons-webfont-48d3eec6.woff",revision:null},{url:"public/materialdesignicons-webfont-861aea05.eot",revision:null},{url:"public/materialdesignicons-webfont-bd725a7a.ttf",revision:null},{url:"public/materialdesignicons-webfont-e52d60f6.woff2",revision:null},{url:"public/Settings-94a18da4.css",revision:null},{url:"public/Settings-b59ee74b.js",revision:null},{url:"public/settings-dfeb61a6.js",revision:null},{url:"public/VInput-65469cae.js",revision:null},{url:"public/VInput-917a9d1b.css",revision:null},{url:"public/webfontloader-523643f5.js",revision:null},{url:"public/yay-ca7f6c55.mp3",revision:null},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"splashscreens/ipad_splash.png",revision:"d318042a51b335b6cd6cb65d9ec2382b"},{url:"splashscreens/ipadpro1_splash.png",revision:"47b183024a7ef89831564c776288eb64"},{url:"splashscreens/ipadpro2_splash.png",revision:"fe5c512116f1180d1a95bab16829f6f1"},{url:"splashscreens/ipadpro3_splash.png",revision:"56365a8633f3fce4120fa4d6882c5e81"},{url:"splashscreens/iphone5_splash.png",revision:"f860a8e082da2dff657d047afdc8806b"},{url:"splashscreens/iphone6_splash.png",revision:"d46a2f385d94714e572ae1583e2cd53f"},{url:"splashscreens/iphoneplus_splash.png",revision:"29eed37d4efda03a26ef682ecd57a656"},{url:"splashscreens/iphonex_splash.png",revision:"8e187f351d819ccce1d8d4cc5db9d62d"},{url:"splashscreens/iphonexr_splash.png",revision:"e6a37615a6f3eb291c77cd539b7a8512"},{url:"splashscreens/iphonexsmax_splash.png",revision:"cbf89ffb6c03e75bd3ce41fa1d6329f5"},{url:"tomato.png",revision:"7afda7886c0497ac08a512ae86c06b5f"},{url:"./android-chrome-192x192.png",revision:"7e8f7e894711e534767aa333fbe7b201"},{url:"./android-chrome-512x512.png",revision:"029aed6e0f87c77ed7c6b3a02b698380"},{url:"manifest.webmanifest",revision:"96f632aac95a1f3dd3b850e02b765e8f"}],{ignoreURLParametersMatching:[/^[0-9a-zA-Z]*$/]}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
