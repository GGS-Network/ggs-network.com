if(!self.define){let s,e={};const n=(n,i)=>(n=new URL(n+".js",i).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let o={};const t=s=>n(s,r),u={module:{uri:r},exports:o,require:t};e[r]=Promise.all(i.map((s=>u[s]||t(s)))).then((s=>(l(...s),o)))}}define(["./workbox-9b32c73f"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/commonjsHelpers-oXBIWH0m.js",revision:null},{url:"assets/AboutUs-CqkfMoBq.css",revision:null},{url:"assets/AboutUs-wAF5dtjG.js",revision:null},{url:"assets/CookieConsent-D8D69uKg.css",revision:null},{url:"assets/CookieConsent-DOkd1JWK.js",revision:null},{url:"assets/Features-Dm0exFm7.js",revision:null},{url:"assets/Features-DZxcCf0N.css",revision:null},{url:"assets/Footer-C-ZgohUs.css",revision:null},{url:"assets/Footer-jDI8iNtH.js",revision:null},{url:"assets/Header-BoChgfrn.js",revision:null},{url:"assets/Header-Dz7S5B9n.css",revision:null},{url:"assets/Home-Cm3ZvT22.js",revision:null},{url:"assets/Home-vjf_mwNj.css",revision:null},{url:"assets/index-BQbj-E0A.js",revision:null},{url:"assets/index-DeVFT87w.css",revision:null},{url:"assets/NotFound-CMtHLuzg.js",revision:null},{url:"assets/NotFound-umxflO1r.css",revision:null},{url:"assets/Privacy-B8PuY9jw.css",revision:null},{url:"assets/Privacy-lnS7swOB.js",revision:null},{url:"assets/SecurityCheck-Ct9arrLx.css",revision:null},{url:"assets/SecurityCheck-DXpdmKqa.js",revision:null},{url:"assets/Services-Bo8dgkif.js",revision:null},{url:"assets/Services-CclRHnTv.css",revision:null},{url:"assets/Status-bi00YvLC.js",revision:null},{url:"assets/Status-CHF8noJ4.css",revision:null},{url:"assets/ui-Ceob_0pG.js",revision:null},{url:"assets/vendor-Dl8iSx9S.js",revision:null},{url:"assets/Vision-BLGp_RIy.js",revision:null},{url:"assets/Vision-CtafmsPz.css",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"index.html",revision:"d35e51192835cfc9c3cd92ef8dc72416"},{url:"manifest.webmanifest",revision:"349ed04f56dbfccedbd756d4f7577488"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new s.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/\.(?:png|gif|jpg|jpeg|svg|ico)$/i,new s.CacheFirst({cacheName:"images-cache",plugins:[new s.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET"),s.registerRoute(/\.(?:js|css)$/i,new s.StaleWhileRevalidate({cacheName:"static-resources",plugins:[new s.ExpirationPlugin({maxEntries:50,maxAgeSeconds:172800})]}),"GET")}));
