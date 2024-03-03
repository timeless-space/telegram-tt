"use strict";(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[8492],{70172:(e,t,n)=>{n.d(t,{Z:()=>C});var r=n(60748),o=n(33555),i=n(59187),a=n(83716),s=n(4463),c=n(46752),l=n(2155),d=n(33780),u=n(32340),m=n(39415),h=n(59107),f=n(25190),p=n(6202),v=n(70692),g=n(57080),w=n(99585),E=n(65979);const Z=(0,c.y)("Avatar");Z.media=Z("media"),Z.icon=Z("icon");const C=(0,r.X$)((({className:e,size:t="large",peer:n,photo:C,text:I,isSavedMessages:P,isSavedDialog:b,withVideo:y,withStory:L,forPremiumPromo:S,withStoryGap:k,withStorySolid:x,forceUnreadStorySolid:M,storyViewerOrigin:F,storyViewerMode:N="single-peer",loopIndefinitely:T,noPersonalPhoto:G,onClick:U})=>{const{openStoryViewer:O}=(0,o.Sv)(),B=(0,r.sO)(null),A=(0,r.sO)(0),$=n&&"title"in n,z=n&&!$?n:void 0,j=n&&$?n:void 0,D=z&&(0,s.NB)(z),R=n&&(0,s.pK)(n.id),V=n&&(0,s.wo)(n.id),q=j?.isForum;let J,X;const _=y&&C?.isVideo,Y="jumbo"===t;P||D||(z&&!G||j?J=(0,s.RT)(n,Y?"big":void 0):C&&(J=`photo${C.id}?size=m`,C.isVideo&&y&&(X=`videoAvatar${C.id}?size=u`)));const K=(0,r.Ye)((()=>P?b?"my-notes":"avatar-saved-messages":D?"avatar-deleted-account":R?"reply-filled":V?"author-hidden":void 0),[V,D,b,R,P]),H=(0,p.Z)(J,!1,i.IU.BlobUrl),W=(0,p.Z)(X,!_,i.IU.BlobUrl),Q=Boolean(H||W),ee=Boolean(W&&_),te=(0,v.Z)(Q),ne=(0,f.Z)((e=>{const t=e.currentTarget;W&&(T||(A.current+=1,A.current>=3&&(t.style.display="none")))})),re=(0,h.Z)();let oe;const ie=z?(0,s.Js)(z):j?(0,s.U)(re,j):I;if(K)oe=r.ZP.createElement(E.Z,{name:K,className:Z.icon,role:"img",ariaLabel:ie});else if(Q)oe=r.ZP.createElement(r.ZP.Fragment,null,r.ZP.createElement("img",{src:H,className:(0,c.Z)(Z.media,"avatar-media",te,W&&"poster"),alt:ie,decoding:"async",draggable:!1}),ee&&r.ZP.createElement(g.Z,{canPlay:!0,src:W,className:(0,c.Z)(Z.media,"avatar-media","poster"),muted:!0,loop:T,autoPlay:!0,disablePictureInPicture:!0,playsInline:!0,draggable:!1,onEnded:ne}));else if(z){const e=(0,s.Js)(z);oe=e?(0,l.Xv)(e,2):void 0}else if(j){const e=(0,s.U)(re,j);oe=e&&(0,l.Xv)(e,(0,s.YC)(j.id)?2:1)}else I&&(oe=(0,l.Xv)(I,2));const ae=q&&!((L||x)&&n?.hasStories),se=(0,c.Z)(`Avatar size-${t}`,e,(0,d.D)(n),!n&&I&&"hidden-user",P&&"saved-messages",V&&"anonymous-forwards",D&&"deleted-account",R&&"replies-bot-account",ae&&"forum",(L&&n?.hasStories||S)&&"with-story-circle",x&&n?.hasStories&&"with-story-solid",x&&(n?.hasUnreadStories||M)&&"has-unread-story",U&&"interactive",!P&&!H&&"no-photo"),ce=Boolean(P||H),{handleClick:le,handleMouseDown:de}=(0,m.m)((e=>{if(L&&"disabled"!==N&&n?.hasStories)return e.stopPropagation(),void O({peerId:n.id,isSinglePeer:"single-peer"===N,origin:F});U&&U(e,ce)}));return r.ZP.createElement("div",{ref:B,className:se,id:n?.id&&L?(0,s.qI)(n.id):void 0,"data-peer-id":n?.id,"data-test-sender-id":a.Cgt?n?.id:void 0,"aria-label":"string"==typeof oe?ie:void 0,onClick:le,onMouseDown:de},r.ZP.createElement("div",{className:"inner"},"string"==typeof oe?(0,u.Z)(oe,["jumbo"===t?"hq_emoji":"emoji"]):oe),L&&n?.hasStories&&r.ZP.createElement(w.Z,{peerId:n.id,size:t,withExtraGap:k}))}))},99585:(e,t,n)=>{n.d(t,{T:()=>I,Z:()=>C});var r=n(60748),o=n(33555),i=n(7054),a=n(46752),s=n(74399),c=n(38146);const l={micro:1.125*s.Gw,tiny:2.125*s.Gw,mini:1.625*s.Gw,small:2.25*s.Gw,"small-mobile":2.625*s.Gw,medium:2.875*s.Gw,large:3.5*s.Gw,giant:5.125*s.Gw,jumbo:7.625*s.Gw},d=["#34C578","#3CA3F3"],u=["#C9EB38","#09C167"],m=["#A667FF","#55A5FF"],h=.125*s.Gw,f=.0625*s.Gw,p=2,v=45,g=Math.PI/4,w=2*Math.PI*.1,E=g-w/2,Z=g+w/2,C=(0,r.X$)((0,o.c$)(((e,{peerId:t})=>{const n=(0,i.dyD)(e,t),r=(0,i.nST)(e,t),o=(0,i.Puy)(e);return{isCloseFriend:n?.isCloseFriend,storyIds:r?.orderedIds,lastReadId:r?.lastReadId,appTheme:o}}))((function({size:e="large",className:t,isCloseFriend:n,storyIds:o,lastReadId:i,withExtraGap:s,appTheme:d}){const u=(0,r.sO)(null),m=(0,c.Z)(),h=(0,r.Ye)((()=>(o||[]).reduce(((e,t)=>(e.total+=1,i&&t<=i&&(e.read+=1),e)),{total:0,read:0})),[i,o]);if((0,r.bt)((()=>{u.current&&I({canvas:u.current,size:l[e]*m,segmentsCount:h.total,color:n?"green":"blue",readSegmentsCount:h.read,withExtraGap:s,readSegmentColor:"dark"===d?"#737373":"#C4C9CC",dpr:m})}),[d,n,e,h.read,h.total,s,m]),!h.total)return;const f=l[e];return r.ZP.createElement("canvas",{ref:u,className:(0,a.Z)("story-circle",e,t),style:`max-width: ${f}px; max-height: ${f}px;`})})));function I({canvas:e,size:t,color:n,segmentsCount:r,readSegmentsCount:o=0,withExtraGap:i=!1,readSegmentColor:a,dpr:c}){r>v&&(o=Math.round(o*(v/r)),r=v);const g=Math.max(Math.max(t-l.large*c,0)/c/s.Gw/1.5,1)*c,w=e.getContext("2d");if(!w)return;e.width=t,e.height=t;const C=t/2,I=(t-h*g)/2,P=2*Math.PI/r,b=p/100*(2*Math.PI),y=w.createLinearGradient(0,0,Math.ceil(t*Math.cos(Math.PI/2)),Math.ceil(t*Math.sin(Math.PI/2))),L="purple"===n?m:"green"===n?u:d;L.forEach(((e,t)=>{y.addColorStop(t/(L.length-1),e)})),w.lineCap="round",w.clearRect(0,0,t,t),Array.from({length:r}).forEach(((e,t)=>{const n=t<o;let s=t*P-Math.PI/2+b/2,c=s+P-(r>1?b:0);if(w.strokeStyle=n?a:y,w.lineWidth=(n?f:h)*g,i){if(s>=E&&c<=Z)return;s<E&&c>Z?(w.beginPath(),w.arc(C,C,I,Z,c),w.stroke(),c=E):s<E&&c>E?c=E:s<Z&&c>Z&&(s=Z)}w.beginPath(),w.arc(C,C,I,s,c),w.stroke()}))}},50685:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(60748),o=n(59107);const i=(0,r.X$)((({fakeType:e})=>{const t=(0,o.Z)();return r.ZP.createElement("span",{className:"FakeIcon"},t("fake"===e?"FakeMessage":"ScamMessage"))}))},2153:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(60748),o=n(33555),i=n(83716),a=n(4463),s=n(46752),c=n(64319),l=n(3858),d=n(32340),u=n(59107),m=n(25190),h=n(96459),f=n(50685),p=n(4863);const v=()=>r.ZP.createElement("svg",{className:"VerifiedIcon",viewBox:"0 0 24 24"},r.ZP.createElement("path",{d:"M12.3 2.9c.1.1.2.1.3.2.7.6 1.3 1.1 2 1.7.3.2.6.4.9.4.9.1 1.7.2 2.6.2.5 0 .6.1.7.7.1.9.1 1.8.2 2.6 0 .4.2.7.4 1 .6.7 1.1 1.3 1.7 2 .3.4.3.5 0 .8-.5.6-1.1 1.3-1.6 1.9-.3.3-.5.7-.5 1.2-.1.8-.2 1.7-.2 2.5 0 .4-.2.5-.6.6-.8 0-1.6.1-2.5.2-.5 0-1 .2-1.4.5-.6.5-1.3 1.1-1.9 1.6-.3.3-.5.3-.8 0-.7-.6-1.4-1.2-2-1.8-.3-.2-.6-.4-.9-.4-.9-.1-1.8-.2-2.7-.2-.4 0-.5-.2-.6-.5 0-.9-.1-1.7-.2-2.6 0-.4-.2-.8-.4-1.1-.6-.6-1.1-1.3-1.6-2-.4-.4-.3-.5 0-1 .6-.6 1.1-1.3 1.7-1.9.3-.3.4-.6.4-1 0-.8.1-1.6.2-2.5 0-.5.1-.6.6-.6.9-.1 1.7-.1 2.6-.2.4 0 .7-.2 1-.4.7-.6 1.4-1.2 2.1-1.7.1-.2.3-.3.5-.2z",style:"fill: var(--color-fill)"}),r.ZP.createElement("path",{d:"M16.4 10.1l-.2.2-5.4 5.4c-.1.1-.2.2-.4 0l-2.6-2.6c-.2-.2-.1-.3 0-.4.2-.2.5-.6.7-.6.3 0 .5.4.7.6l1.1 1.1c.2.2.3.2.5 0l4.3-4.3c.2-.2.4-.3.6 0 .1.2.3.3.4.5.2 0 .3.1.3.1z",style:"fill: var(--color-checkmark)"})),g="QljEeKI5",w=(0,r.X$)((({className:e,peer:t,noVerified:n,noFake:w,withEmojiStatus:E,emojiStatusSize:Z,isSavedMessages:C,isSavedDialog:I,noLoopLimit:P,canCopyTitle:b,onEmojiStatusClick:y,observeIntersection:L})=>{const S=(0,u.Z)(),{showNotification:k}=(0,o.Sv)(),x=(0,a.YC)(t.id),M=x?(0,a.Js)(t):(0,a.U)(S,t),F=x&&t.isPremium,N=(0,m.Z)((e=>{M&&b&&((0,l.Z)(e),(0,c.TE)(M),k({message:(x?"User":"Chat")+" name was copied"}))})),T=(0,r.Ye)((()=>C?S(I?"MyNotes":"SavedMessages"):(0,a.wo)(t.id)?S("AnonymousForward"):(0,a.pK)(t.id)?S("RepliesTitle"):void 0),[I,C,S,t.id]);return T?r.ZP.createElement("div",{className:(0,s.Z)("title",g,e)},r.ZP.createElement("h3",null,T)):r.ZP.createElement("div",{className:(0,s.Z)("title",g,e)},r.ZP.createElement("h3",{dir:"auto",role:"button",className:(0,s.Z)("fullName","AS54Cntu",b&&"vr53L_9p"),onClick:N},(0,d.Z)(M||"")),!n&&t.isVerified&&r.ZP.createElement(v,null),!w&&t.fakeType&&r.ZP.createElement(f.Z,{fakeType:t.fakeType}),E&&t.emojiStatus&&r.ZP.createElement(h.Z,{documentId:t.emojiStatus.documentId,size:Z,loopLimit:P?void 0:i.y3O,observeIntersectionForLoading:L,onClick:y}),E&&!t.emojiStatus&&F&&r.ZP.createElement(p.Z,null))}))},65979:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(60748),o=n(46752);const i=({name:e,className:t,style:n,role:i,ariaLabel:a})=>r.ZP.createElement("i",{className:(0,o.Z)(`icon icon-${e}`,t),style:n,"aria-hidden":!a,"aria-label":a,role:i})},4863:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(60748),o=n(46752),i=n(27704);const a="M6.63869 12.1902L3.50621 14.1092C3.18049 14.3087 2.75468 14.2064 2.55515 13.8807C2.45769 13.7216 2.42864 13.5299 2.47457 13.3491L2.95948 11.4405C3.13452 10.7515 3.60599 10.1756 4.24682 9.86791L7.6642 8.22716C7.82352 8.15067 7.89067 7.95951 7.81418 7.80019C7.75223 7.67116 7.61214 7.59896 7.47111 7.62338L3.66713 8.28194C2.89387 8.41581 2.1009 8.20228 1.49941 7.69823L0.297703 6.69116C0.00493565 6.44581 -0.0335059 6.00958 0.211842 5.71682C0.33117 5.57442 0.502766 5.48602 0.687982 5.47153L4.35956 5.18419C4.61895 5.16389 4.845 4.99974 4.94458 4.75937L6.36101 1.3402C6.5072 0.987302 6.91179 0.819734 7.26469 0.965925C7.43413 1.03612 7.56876 1.17075 7.63896 1.3402L9.05539 4.75937C9.15496 4.99974 9.38101 5.16389 9.6404 5.18419L13.3322 5.47311C13.713 5.50291 13.9975 5.83578 13.9677 6.2166C13.9534 6.39979 13.8667 6.56975 13.7269 6.68896L10.9114 9.08928C10.7131 9.25826 10.6267 9.52425 10.6876 9.77748L11.5532 13.3733C11.6426 13.7447 11.414 14.1182 11.0427 14.2076C10.8642 14.2506 10.676 14.2208 10.5195 14.1249L7.36128 12.1902C7.13956 12.0544 6.8604 12.0544 6.63869 12.1902Z",s=(0,r.X$)((({withGradient:e,big:t,className:n,onClick:s})=>{const c=(0,i.Z)();return r.ZP.createElement("i",{onClick:s,className:(0,o.Z)("PremiumIcon",n,e&&"gradient",s&&"clickable",t&&"big"),title:"Premium"},e?r.ZP.createElement("svg",{width:"14",height:"15",viewBox:"0 0 14 15",fill:"none"},r.ZP.createElement("defs",null,r.ZP.createElement("linearGradient",{id:c,x1:"3",y1:"63.5001",x2:"84.1475",y2:"-1.32262",gradientUnits:"userSpaceOnUse"},r.ZP.createElement("stop",{"stop-color":"#6B93FF"}),r.ZP.createElement("stop",{offset:"0.439058","stop-color":"#976FFF"}),r.ZP.createElement("stop",{offset:"1","stop-color":"#E46ACE"}))),r.ZP.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:a,fill:`url(#${c})`})):r.ZP.createElement("svg",{width:"14",height:"15",viewBox:"0 0 14 15",fill:"none"},r.ZP.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:a,fill:"var(--color-fill)"})))}))},33780:(e,t,n)=>{n.d(t,{D:()=>o});var r=n(4463);function o(e,t,n){if(!e){if(!n)return;return t?"peer-color-count-1":"peer-color-0"}return t?`peer-color-count-${(0,r.EC)(e)}`:`peer-color-${(0,r.kj)(e)}`}},22275:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(60748),o=n(33555),i=n(4463),a=n(7054),s=n(32340),c=n(59107),l=n(17551);const d=(0,r.X$)((0,o.c$)(((e,{userId:t})=>{const n=(0,a.jrE)(e),r=t&&(0,a.dyD)(e,t);return{chat:n,contactName:r?(0,i.Vl)(r):void 0}}))((({isOpen:e,chat:t,userId:n,contactName:i,onClose:a})=>{const{deleteChatMember:d}=(0,o.Sv)(),u=(0,c.Z)(),m=(0,r.I4)((()=>{d({chatId:t.id,userId:n}),a()}),[t,d,a,n]);if(t&&n)return r.ZP.createElement(l.Z,{isOpen:e,onClose:a,title:u("GroupRemoved.Remove"),textParts:(0,s.Z)(u("PeerInfo.Confirm.RemovePeer",i)),confirmLabel:u("lng_box_remove"),confirmHandler:m,confirmIsDestructive:!0})})))},42431:(e,t,n)=>{n.d(t,{$5:()=>s,Bj:()=>a,GU:()=>c,Ht:()=>l,LU:()=>m,fu:()=>u,mU:()=>d});var r=n(4463),o=n(14342),i=n(86087);function a(e,t){const n=(0,o.x6)(e,t);if(n&&n.groupCallId)return s(e,n.groupCallId)}function s(e,t){return e.groupCalls.byId[t]}function c(e,t,n){return s(e,t)?.participants[n]}function l(e){const t=d(e)?.chatId;if(!t)return!1;const n=(0,o.Z1)(e,t);return!!n&&((0,r.G9)(n)&&n.isCreator||Boolean(n.adminRights?.manageCall))}function d(e){const{groupCalls:{activeGroupCallId:t}}=e;if(t)return s(e,t)}function u(e){const{phoneCall:t,currentUserId:n}=e;if(!t||!t.participantId||!t.adminId)return;const r=t.adminId===n?t.participantId:t.adminId;return(0,i.dy)(e,r)}function m(e){const t=d(e);if(!t||!t.chatId)return!1;const n=(0,o.Z1)(e,t.chatId);if(!n)return!1;if(Boolean((0,r.WS)(n)))return!0;const i=(0,o.x6)(e,n.id)?.inviteLink;return Boolean(i)}},9211:(e,t,n)=>{n.d(t,{M:()=>i,P:()=>a});var r=n(83716),o=n(86087);function i(e,t){const{appConfig:n}=e;if(!n)return r.prK[t][0];const i=(0,o.wV)(e),{limits:a}=n,s=a[t]?.[i?1:0]??r.prK[t][i?1:0];return"dialogFilters"===t?s+1:s}function a(e,t){const{appConfig:n}=e;if(!n)return r.prK[t][1];const{limits:o}=n;return o[t][1]}},17240:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(60748),o=n(31664),i=n(57710),a=n(97184),s=n(25190);function c(e){e.stopImmediatePropagation(),e.preventDefault(),e.stopPropagation()}const l=(e,t,n,l,d)=>{const[u,m]=(0,r.eJ)(!1),[h,f]=(0,r.eJ)(void 0),[p,v]=(0,r.eJ)(void 0),g=(0,s.Z)((e=>{t||2!==e.button||(0,i.WM)((()=>{(0,o.D_)(e.target,"no-selection")}))})),w=(0,s.Z)((e=>{(0,i.WM)((()=>{(0,o.mC)(e.target,"no-selection")})),t||n&&e.target.matches("a[href]")||(e.preventDefault(),e.stopPropagation(),h||(m(!0),f({x:e.clientX,y:e.clientY}),v(e.target)))})),E=(0,s.Z)((()=>{m(!1)})),Z=(0,s.Z)((()=>{f(void 0)}));return(0,r.d4)((()=>{if(t||!a.$b||l||d&&!d())return;const r=e.current;if(!r)return;let o;const i=()=>{o&&(clearTimeout(o),o=void 0)},s=e=>{t||(e.stopPropagation(),i(),o=window.setTimeout((()=>(e=>{i();const{clientX:t,clientY:r,target:o}=e.touches[0];h||n&&o.matches("a[href]")||(document.addEventListener("touchend",(e=>{a.cj&&a.fl&&setTimeout((()=>{document.removeEventListener("mousedown",c,{capture:!0}),document.removeEventListener("click",c,{capture:!0})}),100),c(e)}),{once:!0,capture:!0}),a.fl&&a.cj&&(document.addEventListener("mousedown",c,{once:!0,capture:!0}),document.addEventListener("click",c,{once:!0,capture:!0})),m(!0),f({x:t,y:r}))})(e)),200))};return r.addEventListener("touchstart",s,{passive:!0}),r.addEventListener("touchcancel",i,!0),r.addEventListener("touchend",i,!0),r.addEventListener("touchmove",i,{passive:!0}),()=>{i(),r.removeEventListener("touchstart",s),r.removeEventListener("touchcancel",i,!0),r.removeEventListener("touchend",i,!0),r.removeEventListener("touchmove",i)}}),[h,t,l,e,n,d]),{isContextMenuOpen:u,contextMenuPosition:h,contextMenuTarget:p,handleBeforeContextMenu:g,handleContextMenu:w,handleContextMenuClose:E,handleContextMenuHide:Z}}},39415:(e,t,n)=>{n.d(t,{m:()=>i});var r=n(97184),o=n(25190);function i(e){const t=(0,o.Z)((t=>{"mousedown"===t.type&&t.button!==r.tc.Main||e(t)}));return r.$b?{handleClick:e?t:void 0}:{handleMouseDown:e?t:void 0}}},27407:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(60748),o=n(91713),i=n(60782),a=n(65326),s=n(25190),c=n(87204);function l(e,t,n,r){const{length:i}=e,a=r?e.indexOf(r):0,s=t===o.Uq.Forwards?a:a+1||i,c=Math.max(0,s-n),l=s+n-1,d=e.slice(Math.max(0,c),l+1);let u,m;switch(t){case o.Uq.Forwards:u=s>=0,m=c>=0;break;case o.Uq.Backwards:u=s<i,m=l<=i-1}return{newViewportIds:d,areSomeLocal:u,areAllLocal:m,newIsOnTop:d[0]===e[0]}}const d=(e,t,n=!1,d=30)=>{const u=(0,r.sO)(),m=(0,r.sO)();if(!m.current&&t&&!n){const{newViewportIds:e,newIsOnTop:n}=l(t,o.Uq.Forwards,d,t[0]);m.current={viewportIds:e,isOnTop:n}}const h=(0,a.Z)();n&&(u.current={});const f=(0,c.Z)(t),p=(0,c.Z)(n);if(!t||n||t===f&&n===p)t||(m.current=void 0);else{const{viewportIds:e,isOnTop:n}=m.current||{},r=e&&!n?e[Math.round(e.length/2)]:void 0,a=r&&t.includes(r)?r:t[0],{offsetId:s=a,direction:c=o.Uq.Forwards}=u.current||{},{newViewportIds:h,newIsOnTop:f}=l(t,c,d,s);u.current={},e&&(0,i.et)(e,h)||(m.current={viewportIds:h,isOnTop:f})}const v=(0,s.Z)((({direction:n,noScroll:r})=>{const{viewportIds:a}=m.current||{},s=a?n===o.Uq.Backwards?a[a.length-1]:a[0]:void 0;if(!t)return void(e&&e({offsetId:s}));const{newViewportIds:c,areSomeLocal:f,areAllLocal:p,newIsOnTop:v}=l(t,n,d,s);!f||a&&(0,i.et)(a,c)||(m.current={viewportIds:c,isOnTop:v},h()),!p&&e&&(r||(u.current={...u.current,direction:n,offsetId:s}),e({offsetId:s}))}));return n?[t]:[m.current?.viewportIds,v]}},62357:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(60748);const o=function(e,t,n=!1){const o=(0,r.sO)(e);(0,r.bt)((()=>{o.current=e}),[e]),(0,r.d4)((()=>{if(void 0===t)return;const e=setInterval((()=>o.current()),t);return n||o.current(),()=>clearInterval(e)}),[t,n])}},72645:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(60748);const o=(e,t,n)=>{const o=(0,r.sO)();return(0,r.bt)((()=>{const n=o.current;return o.current=t,e(n||[])}),t,n)}},12644:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(60748);const o=16,i=12,a={width:0,left:0,height:0,top:0};function s(e,t,n,s,c){const[l,d]=(0,r.eJ)("right"),[u,m]=(0,r.eJ)("bottom"),[h,f]=(0,r.eJ)(),[p,v]=(0,r.eJ)(),[g,w]=(0,r.eJ)(!1),[E,Z]=(0,r.eJ)(""),[C,I]=(0,r.eJ)("opacity: 0;");return(0,r.d4)((()=>{const r=t();if(!e||!r)return;let{x:l,y:u}=e;const h=l,p=u,g=s(),E=n(),{extraPaddingX:C=0,extraTopPadding:P=0,extraMarginTop:b=0,topShiftY:y=0,menuElMinWidth:L=0,deltaX:S=0,shouldAvoidNegativePosition:k=!1,withPortal:x=!1,isDense:M=!1}=c?.()||{},F=g?parseInt(getComputedStyle(g).marginTop,10)+b:void 0,{offsetWidth:N,offsetHeight:T}=g||{offsetWidth:0,offsetHeight:0},G=g?{width:Math.max(N,L),height:T+F}:a,U=E?E.getBoundingClientRect():a;let O,B;M||l+G.width+C<U.width+U.left?(l+=3,O="left"):l-G.width-U.left>0?(O="right",l-=3):(O="left",l=16),d(O),l+=S;const A=u+y;M||A+G.height<U.height+U.top?(B="top",u=A):(B="bottom",u-G.height<U.top+P&&(u=U.top+U.height)),m(B);const $=r.getBoundingClientRect(),z=x?$.top:0,j=x?$.left:0,D=Math.min(l-$.left,U.width-G.width-o);let R=("left"===O?x||k?Math.max(o,D):D:l-$.left)+j,V=u-$.top+z;M&&(R=Math.min(R,U.width-G.width-o),V=Math.min(V,U.height-G.height-o));const q=L?Math.max(0,(L-N)/2):0;R-q<0&&k&&(R=q+o);const J=U.height-i-(F||0);w(J<G.height),I(`max-height: ${J}px;`),Z(`left: ${R}px; top: ${V}px`);const X=h+j-$.left-R,_=p+z-$.top-V-(F||0);f("left"===O?X:G.width+X),v("bottom"===B?G.height+_:_)}),[e,s,n,t,c]),{positionX:l,positionY:u,transformOriginX:h,transformOriginY:p,style:E,menuStyle:C,withScroll:g}}},80498:(e,t,n)=>{n.d(t,{Ar:()=>c,ZP:()=>s});var r=n(60748),o=n(73760),i=n(97184);const a=l();function s(e,t){const[n,o]=(0,r.eJ)(Boolean(a&&document[a]));return(0,r.bt)((()=>{const n=e.current,r=()=>{const e=Boolean(a&&document[a]);o(e),n.controls=e},i=()=>{o(!0)},s=()=>{o(!1),t(!1)};return document.addEventListener("fullscreenchange",r,!1),document.addEventListener("webkitfullscreenchange",r,!1),document.addEventListener("mozfullscreenchange",r,!1),n&&(n.addEventListener("webkitbeginfullscreen",i,!1),n.addEventListener("webkitendfullscreen",s,!1)),()=>{document.removeEventListener("fullscreenchange",r,!1),document.removeEventListener("webkitfullscreenchange",r,!1),document.removeEventListener("mozfullscreenchange",r,!1),n&&(n.removeEventListener("webkitbeginfullscreen",i,!1),n.removeEventListener("webkitendfullscreen",s,!1))}}),[]),a||i.cj?[n,()=>{var t;e.current&&(a||i.cj)&&((t=e.current).requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.webkitEnterFullscreen?t.webkitEnterFullscreen():t.mozRequestFullScreen&&t.mozRequestFullScreen(),o(!0))},()=>{e.current&&(document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen(),o(!1))}]:[!1]}const c=()=>{const[e,t]=(0,r.eJ)(!1);return(0,r.d4)((()=>{const e=()=>{t(function(){const e=l();return Boolean(e&&document[e])}())},n=window.electron?.on(o.I.FULLSCREEN_CHANGE,t);return window.electron?.isFullscreen().then(t),document.addEventListener("fullscreenchange",e,!1),document.addEventListener("webkitfullscreenchange",e,!1),document.addEventListener("mozfullscreenchange",e,!1),()=>{n?.(),document.removeEventListener("fullscreenchange",e,!1),document.removeEventListener("webkitfullscreenchange",e,!1),document.removeEventListener("mozfullscreenchange",e,!1)}}),[]),e};function l(){return void 0!==document.fullscreenElement?"fullscreenElement":void 0!==document.mozFullScreenElement?"mozFullScreenElement":void 0!==document.webkitFullscreenElement?"webkitFullscreenElement":""}},96264:(e,t,n)=>{n.d(t,{Z:()=>i});const r=[1,57,41,21,203,34,97,73,227,91,149,62,105,45,39,137,241,107,3,173,39,71,65,238,219,101,187,87,81,151,141,133,249,117,221,209,197,187,177,169,5,153,73,139,133,127,243,233,223,107,103,99,191,23,177,171,165,159,77,149,9,139,135,131,253,245,119,231,224,109,211,103,25,195,189,23,45,175,171,83,81,79,155,151,147,9,141,137,67,131,129,251,123,30,235,115,113,221,217,53,13,51,50,49,193,189,185,91,179,175,43,169,83,163,5,79,155,19,75,147,145,143,35,69,17,67,33,65,255,251,247,243,239,59,29,229,113,111,219,27,213,105,207,51,201,199,49,193,191,47,93,183,181,179,11,87,43,85,167,165,163,161,159,157,155,77,19,75,37,73,145,143,141,35,138,137,135,67,33,131,129,255,63,250,247,61,121,239,237,117,29,229,227,225,111,55,109,216,213,211,209,207,205,203,201,199,197,195,193,48,190,47,93,185,183,181,179,178,176,175,173,171,85,21,167,165,41,163,161,5,79,157,78,154,153,19,75,149,74,147,73,144,143,71,141,140,139,137,17,135,134,133,66,131,65,129,1],o=[0,9,10,10,14,12,14,14,16,15,16,15,16,15,15,17,18,17,12,18,16,17,17,19,19,18,19,18,18,19,19,19,20,19,20,20,20,20,20,20,15,20,19,20,20,20,21,21,21,20,20,20,21,18,21,21,21,21,20,21,17,21,21,21,22,22,21,22,22,21,22,21,19,22,22,19,20,22,22,21,21,21,22,22,22,18,22,22,21,22,22,23,22,20,23,22,22,23,23,21,19,21,21,21,23,23,23,22,23,23,21,23,22,23,18,22,23,20,22,23,23,23,21,22,20,22,21,22,24,24,24,24,24,22,21,24,23,23,24,21,24,23,24,22,24,24,22,24,24,22,23,24,24,24,20,23,22,23,24,24,24,24,24,24,24,23,21,23,22,23,24,24,24,22,24,24,24,23,22,24,24,25,23,25,25,23,24,25,25,24,22,25,25,25,24,23,24,25,25,25,25,25,25,25,25,25,25,25,25,23,25,23,24,25,25,25,25,25,25,25,25,25,24,22,25,25,23,25,25,20,24,25,24,25,25,22,24,25,24,25,24,25,25,24,25,25,25,25,22,25,25,25,24,25,24,25,18];function i(e,t,n,i,a,s,c){if(Number.isNaN(s)||s<1)return;s|=0,Number.isNaN(c)&&(c=1),(c|=0)>3&&(c=3),c<1&&(c=1);const l=e.getImageData(t,n,i,a),d=l.data;let u,m,h,f,p,v,g,w,E,Z,C,I,P=i-1,b=a-1,y=s+1,L=[],S=[],k=[],x=r[s],M=o[s],F=[],N=[];for(;c-- >0;){for(I=C=0,p=0;p<a;p++){for(u=d[I]*y,m=d[I+1]*y,h=d[I+2]*y,v=1;v<=s;v++)g=I+((v>P?P:v)<<2),u+=d[g++],m+=d[g++],h+=d[g++];for(f=0;f<i;f++)L[C]=u,S[C]=m,k[C]=h,0==p&&(F[f]=((g=f+y)<P?g:P)<<2,N[f]=(g=f-s)>0?g<<2:0),w=I+F[f],E=I+N[f],u+=d[w++]-d[E++],m+=d[w++]-d[E++],h+=d[w++]-d[E++],C++;I+=i<<2}for(f=0;f<i;f++){for(Z=f,u=L[Z]*y,m=S[Z]*y,h=k[Z]*y,v=1;v<=s;v++)Z+=v>b?0:i,u+=L[Z],m+=S[Z],h+=k[Z];for(C=f<<2,p=0;p<a;p++)d[C]=u*x>>>M,d[C+1]=m*x>>>M,d[C+2]=h*x>>>M,0==f&&(F[p]=((g=p+y)<b?g:b)*i,N[p]=(g=p-s)>0?g*i:0),w=f+F[p],E=f+N[p],u+=L[w]-L[E],m+=S[w]-S[E],h+=k[w]-k[E],C+=i<<2}}e.putImageData(l,t,n)}},73760:(e,t,n)=>{n.d(t,{I:()=>r});let r=function(e){return e.FULLSCREEN_CHANGE="fullscreen-change",e.UPDATE_ERROR="update-error",e.UPDATE_AVAILABLE="update-available",e.DEEPLINK="deeplink",e}({})},98069:(e,t,n)=>{n.d(t,{In:()=>i,l_:()=>o,wT:()=>a});let r=0;function o(){r+=1}function i(){r-=1}function a(){return r>0}},87675:(e,t,n)=>{n.d(t,{Z:()=>a,n:()=>i});var r=n(82972),o=n(97184);function i(e){e.style.display="none",(0,r.Z)(e),e.style.display=""}const a=(e,t)=>{o.cj&&(e.style.overflow="hidden"),void 0!==t&&(e.scrollTop=t),o.cj&&(e.style.overflow="")}},3858:(e,t,n)=>{n.d(t,{Z:()=>r});const r=e=>{e.stopPropagation(),e.preventDefault()}},1911:(e,t,n)=>{function r(e){function t(t){if("Tab"!==t.key)return;t.preventDefault(),t.stopPropagation();const n=Array.from(e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));if(!n.length)return;const r=n.findIndex((e=>e.isSameNode(document.activeElement)));let o=0;r>=0&&(o=t.shiftKey?r>0?r-1:n.length-1:r<n.length-1?r+1:0),n[o].focus()}return document.addEventListener("keydown",t,!1),()=>{document.removeEventListener("keydown",t,!1)}}n.d(t,{Z:()=>r})}}]);
//# sourceMappingURL=8492.b5d617b7678a64a649ad.js.map