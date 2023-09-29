(()=>{"use strict";var e,t,r={34680:(e,t,r)=>{var a=r(35802);const i=("undefined"!=typeof window&&window.innerHeight,Math.round(450),new Set(["newMessage","newScheduledMessage","deleteMessages","deleteScheduledMessages","deleteHistory"]),new Set(["image/png","image/jpeg","image/gif"])),o=new Set(["video/mp4","video/quicktime"]);new Set(["audio/mp3","audio/ogg","audio/wav","audio/mpeg","audio/flac","audio/aac","audio/m4a","audio/mp4","audio/x-m4a"]),new Set([...i,...o]),new Set(["t.me","web.t.me","a.t.me","k.t.me","z.t.me"]),new Set(["AU","BD","CA","CO","EG","HN","IE","IN","JO","MX","MY","NI","NZ","PH","PK","SA","SV","US"]);const s=new Map,n=function(){const e=new Set;function t(t){e.delete(t)}return{runCallbacks:function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];e.forEach((e=>{e(...r)}))},addCallback:function(r){return e.add(r),()=>{t(r)}},removeCallback:t,hasCallbacks:function(){return Boolean(e.size)}}}();function c(e,t){function r(e,r){e.channel=t,r?postMessage(e,r):postMessage(e)}!function(e){self.onerror=t=>{console.error(t),e({type:"unhandledError",error:{message:t.error.message||"Uncaught exception in worker"}})},self.addEventListener("unhandledrejection",(t=>{console.error(t),e({type:"unhandledError",error:{message:t.reason.message||"Uncaught rejection in worker"}})}))}(r),n.addCallback((a=>{a.data?.channel===t&&async function(e,t,r,a){switch(a||(a=e=>{r({type:"update",update:e})}),t.type){case"init":{const{args:r}=t,i="function"==typeof e?e("init",a,...r):e.init?.(a,...r);await i;break}case"callMethod":{const{messageId:a,name:i,args:o,withCallback:n}=t;try{if("function"!=typeof e&&!e[i])return;if(a&&n){const e=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];const o=t[t.length-1];var s;r({type:"methodCallback",messageId:a,callbackArgs:t},(s=o)instanceof ArrayBuffer||s instanceof ImageBitmap?[o]:void 0)};s.set(a,e),o.push(e)}const t="function"==typeof e?await e(i,...o):await e[i](...o),{arrayBuffer:c}="object"==typeof t&&"arrayBuffer"in t&&t||{};a&&r({type:"methodResponse",messageId:a,response:t},c?[c]:void 0)}catch(e){a&&r({type:"methodResponse",messageId:a,error:{message:e.message}})}a&&s.delete(a);break}case"cancelProgress":{const e=s.get(t.messageId);e&&(e.isCanceled=!0);break}}}(e,a.data,r)}))}let l;onmessage=n.runCallbacks,importScripts(new URL(r(4269),r.b));const d=new Promise((e=>{Module.onRuntimeInitialized=()=>{l={init:Module.cwrap("lottie_init","",[]),destroy:Module.cwrap("lottie_destroy","",["number"]),resize:Module.cwrap("lottie_resize","",["number","number","number"]),buffer:Module.cwrap("lottie_buffer","number",["number"]),render:Module.cwrap("lottie_render","",["number","number"]),loadFromData:Module.cwrap("lottie_load_from_data","number",["number","number"])},e()}})),u=new Map;async function f(e){const t=await fetch(e),r=t.headers.get("Content-Type");if(r?.startsWith("text/"))return t.text();const i=await t.arrayBuffer();return(0,a.inflate)(i,{to:"string"})}function m(e,t,r){const a=t?30:60,i=JSON.parse(e).fr||a,o=i%a==0?i/a:1;return{reduceFactor:o,msPerFrame:1e3/(i/o),reducedFramesCount:Math.ceil(r/o)}}c({"rlottie:init":async function(e,t,r,a,i,o){l||await d;const s=await f(t),n=allocate(intArrayFromString(s),"i8",0),c=l.init(),h=l.loadFromData(c,n);l.resize(c,r,r);const p=new ImageData(r,r),{reduceFactor:g,msPerFrame:w,reducedFramesCount:v}=m(s,a,h);u.set(e,{imgSize:r,reduceFactor:g,handle:c,imageData:p,customColor:i}),o(g,w,v)},"rlottie:changeData":async function(e,t,r,a){l||await d;const i=await f(t),o=allocate(intArrayFromString(i),"i8",0),{handle:s}=u.get(e),n=l.loadFromData(s,o),{reduceFactor:c,msPerFrame:h,reducedFramesCount:p}=m(i,r,n);a(c,h,p)},"rlottie:renderFrames":async function(e,t,r){l||await d;const{imgSize:a,reduceFactor:i,handle:o,imageData:s,customColor:n}=u.get(e),c=t*i;l.render(o,c);const f=l.buffer(o),m=Module.HEAPU8.subarray(f,f+a*a*4);if(n){const e=new Uint8ClampedArray(m);!function(e,t){for(let r=0;r<e.length;r+=4)e[r]=t[0],e[r+1]=t[1],e[r+2]=t[2]}(e,n),s.data.set(e)}else s.data.set(m);r(t,await createImageBitmap(s))},"rlottie:destroy":function e(t){let r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{const e=u.get(t);l.destroy(e.handle),u.delete(t)}catch(a){r||setTimeout((()=>e(t,!0)),1e3)}}});var h=r(32041);const p=new Map;function g(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,"string");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}self.addEventListener("message",(e=>{const{type:t,messageId:r,result:a}=e.data;if("partResponse"===t){const e=p.get(r);e&&e.resolve(a)}}));const w=1024;var v=function(e){return e.loading="loading",e.ready="ready",e.closed="closed",e}(v||{});class y{constructor(e,t){let{onConfig:r,onChunk:a,stepOffset:i,stepMultiplier:o,isPolyfill:s,maxFrames:n}=t;g(this,"url",void 0),g(this,"file",void 0),g(this,"status",v.loading),g(this,"stepOffset",void 0),g(this,"stepMultiplier",void 0),g(this,"maxFrames",void 0),g(this,"isPolyfill",void 0),g(this,"decodedSamples",new Set),g(this,"lastSample",0),g(this,"onConfig",void 0),g(this,"onChunk",void 0),this.url=e,this.stepOffset=i,this.stepMultiplier=o,this.maxFrames=n,this.isPolyfill=s,this.onConfig=r,this.onChunk=a,this.file=h.createFile(),this.file.onError=e=>{console.error(e)},this.file.onReady=this.onReady.bind(this),this.file.onSamples=this.onSamples.bind(this),this.loadMetadata()}async loadMetadata(){let e=0;for(;void 0!==e;){try{e=await this.requestPart(e,131072)}catch(e){console.error(e)}if(this.status===v.ready)break}}async loadNextFrames(e,t,r){let a=e*this.stepOffset,i=0,o=this.file.seek(a,!0);for(;this.status!==v.closed;)try{if(await this.requestPart(o.offset,r),a>t)break;this.lastSample>1&&i<this.lastSample&&(a+=e*this.stepMultiplier,i=this.lastSample),o=this.file.seek(a,!0)}catch(e){console.error(e)}this.file.flush()}async requestPart(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const a=e%w,i=e-a,o=i+t-1;let s=await function(e){const t=Date.now().toString(36)+Math.random().toString(36).slice(2),r={};let a=!1;const i=Promise.race([new Promise((e=>{setTimeout((()=>e()),3e4)})).then((()=>a?void 0:Promise.reject(new Error("ERROR_PART_TIMEOUT")))),new Promise(((e,t)=>{Object.assign(r,{resolve:e,reject:t})}))]);return p.set(t,r),i.catch((()=>{})).finally((()=>{p.delete(t),a=!0})),postMessage({type:"requestPart",messageId:t,params:e}),i}({url:this.url,start:i,end:o});if(!s)return;a&&(s=s.slice(a)),s.fileStart=e;const n=this.file.appendBuffer(s);return r?n:e+s.byteLength}description(e){const t=this.file.getTrackById(e.id);for(const e of t.mdia.minf.stbl.stsd.entries)if(e.avcC||e.hvcC||e.av1C){const t=new h.DataStream(void 0,0,h.DataStream.BIG_ENDIAN);return e.avcC?e.avcC.write(t):e.hvcC?e.hvcC.write(t):e.av1C&&e.av1C.write(t),new Uint8Array(t.buffer,8)}throw new Error("avcC, hvcC ro av1C not found")}onReady(e){const t=e.videoTracks[0];let r=t.codec;r.startsWith("avc1")&&(r="avc1.4d001f"),this.onConfig({codec:r,codedHeight:t.video.height,codedWidth:t.video.width,description:this.description(t)});const a=e.duration/e.timescale,i=this.isPolyfill?24:12,o=(s=t.bitrate/i)+w-s%w;var s;const n=function(e,t){return Math.round((e+t)/t)}(a,this.maxFrames);this.file.setExtractionOptions(t.id,void 0,{nbSamples:1}),this.file.start(),this.status=v.ready,this.loadNextFrames(n,a,o)}onSamples(e,t,r){if(this.status===v.ready)for(const t of r){const r=t.cts/t.timescale,a=t.is_sync?"key":"delta",i=`${a}${t.number}`;this.decodedSamples.has(i)||(this.onChunk(new EncodedVideoChunk({type:a,timestamp:1e6*r,duration:1e6*t.duration/t.timescale,data:t.data})),this.decodedSamples.add(i),this.lastSample=parseInt(t.number,10),t.is_sync&&this.file.releaseUsedSamples(e,t.number))}}close(){this.file.flush(),this.file.stop(),this.status=v.closed}}let b,S,C;c({"video-preview:init":function(e,t,r,a,i){const o="VideoDecoder"in globalThis;if(!o)return console.log("[Video Preview] WebCodecs not supported"),new Promise((e=>{C=e}));const s=new Set;return b=new VideoDecoder({async output(e){const t=e.timestamp/1e6,r=Math.floor(t);if(!s.has(r)){const t=await createImageBitmap(e);s.add(r),i(r,t)}e.close()},error(e){console.error("[Video Preview] error",e)}}),S=new y(e,{stepOffset:r,stepMultiplier:a,isPolyfill:!o,maxFrames:t,onConfig(e){b?.configure(e)},onChunk(e){"configured"===b?.state&&b?.decode(e)}}),new Promise((e=>{C=e}))},"video-preview:destroy":function(){try{b?.close(),S?.close()}catch{}b=void 0,S=void 0,C?.()}})},4269:(e,t,r)=>{e.exports=r.p+"rlottie-wasm.5e3833cedb8fb71c8d8e.js"}},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var o=a[e]={exports:{}};return r[e].call(o.exports,o,o.exports,i),o.exports}i.m=r,i.x=()=>{var e=i.O(void 0,[5802,2041],(()=>i(34680)));return i.O(e)},e=[],i.O=(t,r,a,o)=>{if(!r){var s=1/0;for(d=0;d<e.length;d++){for(var[r,a,o]=e[d],n=!0,c=0;c<r.length;c++)(!1&o||s>=o)&&Object.keys(i.O).every((e=>i.O[e](r[c])))?r.splice(c--,1):(n=!1,o<s&&(s=o));if(n){e.splice(d--,1);var l=a();void 0!==l&&(t=l)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,a,o]},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>e+"."+{2041:"5fe028b52e13d7a937b4",5802:"36a9971f58c808c4a974"}[e]+".js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{i.b=self.location+"";var e={4680:1};i.f.i=(t,r)=>{e[t]||importScripts(i.p+i.u(t))};var t=self.webpackChunktelegram_t=self.webpackChunktelegram_t||[],r=t.push.bind(t);t.push=t=>{var[a,o,s]=t;for(var n in o)i.o(o,n)&&(i.m[n]=o[n]);for(s&&s(i);a.length;)e[a.pop()]=1;r(t)}})(),t=i.x,i.x=()=>Promise.all([i.e(5802),i.e(2041)]).then(t),i.x()})();
//# sourceMappingURL=4680.8779cd933dc0bb67e40f.js.map