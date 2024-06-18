"use strict";(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[3649],{21849:(e,t,n)=>{n.d(t,{A:()=>y});var o=n(84051),r=n(13439),i=n(97335),a=n(31481),s=n(59589),c=n(87357),l=n(14242),d=n(35049),u=n(4961),m=n(11217),h=n(17712),f=n(62587),p=n(37960),v=n(59030),g=n(65843),A=n(88554),w=n(18276);const E=(0,c.x)("Avatar");E.media=E("media"),E.icon=E("icon");const y=(0,o.ph)((e=>{let{className:t,size:n="large",peer:y,photo:I,webPhoto:C,text:b,isSavedMessages:k,isSavedDialog:S,withVideo:L,withStory:F,forPremiumPromo:M,withStoryGap:x,withStorySolid:P,forceFriendStorySolid:N,forceUnreadStorySolid:T,storyViewerOrigin:z,storyViewerMode:$="single-peer",loopIndefinitely:R,noPersonalPhoto:B,onClick:J}=e;const{openStoryViewer:D}=(0,r.ko)(),O=(0,o.li)(null),V=(0,o.li)(0),K=y&&"isCustomPeer"in y,_=y&&!K?y:void 0,j=_&&"title"in _,q=y&&!j?y:void 0,G=y&&j?y:void 0,U=q&&(0,s.PL)(q),Y=_&&(0,s.kE)(_.id),Q=_&&(0,s.Qe)(_.id),W=G?.isForum;let H,X;const Z=L&&I?.isVideo,ee="jumbo"===n;k||U||(q&&!B||G?H=(0,s.cP)(y,ee?"big":void 0):I?(H=`photo${I.id}?size=m`,I.isVideo&&L&&(X=`videoAvatar${I.id}?size=u`)):C&&(H=(0,s.cy)(C)));const te=(0,o.Kr)((()=>K?y.avatarIcon:k?S?"my-notes":"avatar-saved-messages":U?"avatar-deleted-account":Y?"reply-filled":Q?"author-hidden":void 0),[K,k,U,Y,Q,y,S]),ne=(0,f.A)(H,!1,i.qZ.BlobUrl),oe=(0,f.A)(X,!Z,i.qZ.BlobUrl),re=Boolean(ne||oe),ie=Boolean(oe&&Z),ae=(0,p.A)(re),se=(0,h.A)((e=>{const t=e.currentTarget;oe&&(R||(V.current+=1,V.current>=3&&(t.style.display="none")))})),ce=(0,v.A)();let le;const de=q?(0,s.Yg)(q):G?(0,s.Js)(ce,G):b;if(te)le=o.Ay.createElement(w.A,{name:te,className:E.icon,role:"img",ariaLabel:de});else if(re)le=o.Ay.createElement(o.Ay.Fragment,null,o.Ay.createElement("img",{src:ne,className:(0,c.A)(E.media,"avatar-media",ae,oe&&"poster"),alt:de,decoding:"async",draggable:!1}),ie&&o.Ay.createElement(g.A,{canPlay:!0,src:oe,className:(0,c.A)(E.media,"avatar-media","poster"),muted:!0,loop:R,autoPlay:!0,disablePictureInPicture:!0,playsInline:!0,draggable:!1,onEnded:se}));else if(q){const e=(0,s.Yg)(q);le=e?(0,l.Qh)(e,2):void 0}else if(G){const e=(0,s.Js)(ce,G);le=e&&(0,l.Qh)(e,(0,s.L8)(G.id)?2:1)}else b&&(le=(0,l.Qh)(b,2));const ue=K&&y.isAvatarSquare||W&&!((F||P)&&_?.hasStories),me=K&&y.withPremiumGradient,he=(0,c.A)(`Avatar size-${n}`,t,(0,d.y)(y),!y&&b&&"hidden-user",k&&"saved-messages",Q&&"anonymous-forwards",U&&"deleted-account",Y&&"replies-bot-account",me&&"premium-gradient-bg",ue&&"forum",(I||C)&&"force-fit",(F&&_?.hasStories||M)&&"with-story-circle",P&&_?.hasStories&&"with-story-solid",P&&N&&"close-friend",P&&(_?.hasUnreadStories||T)&&"has-unread-story",J&&"interactive",!k&&!ne&&"no-photo"),fe=Boolean(k||ne),{handleClick:pe,handleMouseDown:ve}=(0,m.Q)((e=>{if(F&&"disabled"!==$&&_?.hasStories)return e.stopPropagation(),void D({peerId:_.id,isSinglePeer:"single-peer"===$,origin:z});J&&J(e,fe)}));return o.Ay.createElement("div",{ref:O,className:he,id:_?.id&&F?(0,s.kR)(_.id):void 0,"data-peer-id":_?.id,"data-test-sender-id":a.W75?_?.id:void 0,"aria-label":"string"==typeof le?de:void 0,onClick:pe,onMouseDown:ve},o.Ay.createElement("div",{className:"inner"},"string"==typeof le?(0,u.A)(le,["jumbo"===n?"hq_emoji":"emoji"]):le),F&&_?.hasStories&&o.Ay.createElement(A.A,{peerId:_.id,size:n,withExtraGap:x}))}))},88554:(e,t,n)=>{n.d(t,{$:()=>I,A:()=>y});var o=n(84051),r=n(13439),i=n(29807),a=n(87357),s=n(76023),c=n(38691);const l={micro:1.125*s.$,tiny:2.125*s.$,mini:1.625*s.$,small:2.25*s.$,"small-mobile":2.625*s.$,medium:2.875*s.$,large:3.5*s.$,giant:5.125*s.$,jumbo:7.625*s.$},d=["#34C578","#3CA3F3"],u=["#C9EB38","#09C167"],m=["#A667FF","#55A5FF"],h=.125*s.$,f=.0625*s.$,p=2,v=45,g=Math.PI/4,A=2*Math.PI*.1,w=g-A/2,E=g+A/2,y=(0,o.ph)((0,r.EK)(((e,t)=>{let{peerId:n}=t;const o=(0,i._bp)(e,n),r=(0,i.SJA)(e);return{peerStories:o?.byId,storyIds:o?.orderedIds,lastReadId:o?.lastReadId,appTheme:r}}))((function(e){let{size:t="large",className:n,peerStories:r,storyIds:i,lastReadId:s,withExtraGap:d,appTheme:u}=e;const m=(0,o.li)(null),h=(0,c.A)(),f=(0,o.Kr)((()=>(i||[]).reduce(((e,t)=>(e.total+=1,s&&t<=s&&(e.read+=1),e)),{total:0,read:0})),[s,i]),p=(0,o.Kr)((()=>!(!r||!i?.length)&&i.some((e=>{const t=r[e];if(!t||!("isForCloseFriends"in t))return!1;const n=s&&t.id<=s;return t.isForCloseFriends&&!n}))),[s,r,i]);if((0,o.Nf)((()=>{m.current&&I({canvas:m.current,size:l[t]*h,segmentsCount:f.total,color:p?"green":"blue",readSegmentsCount:f.read,withExtraGap:d,readSegmentColor:"dark"===u?"#737373":"#C4C9CC",dpr:h})}),[u,p,t,f.read,f.total,d,h]),!f.total)return;const v=l[t];return o.Ay.createElement("canvas",{ref:m,className:(0,a.A)("story-circle",t,n),style:`max-width: ${v}px; max-height: ${v}px;`})})));function I(e){let{canvas:t,size:n,color:o,segmentsCount:r,readSegmentsCount:i=0,withExtraGap:a=!1,readSegmentColor:c,dpr:g}=e;r>v&&(i=Math.round(i*(v/r)),r=v);const A=Math.max(Math.max(n-l.large*g,0)/g/s.$/1.5,1)*g,y=t.getContext("2d");if(!y)return;t.width=n,t.height=n;const I=n/2,C=(n-h*A)/2,b=2*Math.PI/r,k=p/100*(2*Math.PI),S=y.createLinearGradient(0,0,Math.ceil(n*Math.cos(Math.PI/2)),Math.ceil(n*Math.sin(Math.PI/2))),L="purple"===o?m:"green"===o?u:d;L.forEach(((e,t)=>{S.addColorStop(t/(L.length-1),e)})),y.lineCap="round",y.clearRect(0,0,n,n),Array.from({length:r}).forEach(((e,t)=>{const n=t<i;let o=t*b-Math.PI/2+k/2,s=o+b-(r>1?k:0);if(y.strokeStyle=n?c:S,y.lineWidth=(n?f:h)*A,a){if(o>=w&&s<=E)return;o<w&&s>E?(y.beginPath(),y.arc(I,I,C,E,s),y.stroke(),s=w):o<w&&s>w?s=w:o<E&&s>E&&(o=E)}y.beginPath(),y.arc(I,I,C,o,s),y.stroke()}))}},2578:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(84051),r=n(59030);const i=(0,o.ph)((e=>{let{fakeType:t}=e;const n=(0,r.A)();return o.Ay.createElement("span",{className:"FakeIcon"},n("fake"===t?"FakeMessage":"ScamMessage"))}))},34431:(e,t,n)=>{n.d(t,{A:()=>A});var o=n(84051),r=n(13439),i=n(31481),a=n(59589),s=n(87357),c=n(85982),l=n(83868),d=n(4961),u=n(17712),m=n(59030),h=n(87412),f=n(2578),p=n(9267);const v=()=>o.Ay.createElement("svg",{className:"VerifiedIcon",viewBox:"0 0 24 24"},o.Ay.createElement("path",{d:"M12.3 2.9c.1.1.2.1.3.2.7.6 1.3 1.1 2 1.7.3.2.6.4.9.4.9.1 1.7.2 2.6.2.5 0 .6.1.7.7.1.9.1 1.8.2 2.6 0 .4.2.7.4 1 .6.7 1.1 1.3 1.7 2 .3.4.3.5 0 .8-.5.6-1.1 1.3-1.6 1.9-.3.3-.5.7-.5 1.2-.1.8-.2 1.7-.2 2.5 0 .4-.2.5-.6.6-.8 0-1.6.1-2.5.2-.5 0-1 .2-1.4.5-.6.5-1.3 1.1-1.9 1.6-.3.3-.5.3-.8 0-.7-.6-1.4-1.2-2-1.8-.3-.2-.6-.4-.9-.4-.9-.1-1.8-.2-2.7-.2-.4 0-.5-.2-.6-.5 0-.9-.1-1.7-.2-2.6 0-.4-.2-.8-.4-1.1-.6-.6-1.1-1.3-1.6-2-.4-.4-.3-.5 0-1 .6-.6 1.1-1.3 1.7-1.9.3-.3.4-.6.4-1 0-.8.1-1.6.2-2.5 0-.5.1-.6.6-.6.9-.1 1.7-.1 2.6-.2.4 0 .7-.2 1-.4.7-.6 1.4-1.2 2.1-1.7.1-.2.3-.3.5-.2z",style:"fill: var(--color-fill)"}),o.Ay.createElement("path",{d:"M16.4 10.1l-.2.2-5.4 5.4c-.1.1-.2.2-.4 0l-2.6-2.6c-.2-.2-.1-.3 0-.4.2-.2.5-.6.7-.6.3 0 .5.4.7.6l1.1 1.1c.2.2.3.2.5 0l4.3-4.3c.2-.2.4-.3.6 0 .1.2.3.3.4.5.2 0 .3.1.3.1z",style:"fill: var(--color-checkmark)"})),g="QljEeKI5",A=(0,o.ph)((e=>{let{className:t,peer:n,noVerified:A,noFake:w,withEmojiStatus:E,emojiStatusSize:y,isSavedMessages:I,isSavedDialog:C,noLoopLimit:b,canCopyTitle:k,onEmojiStatusClick:S,observeIntersection:L,iconElement:F}=e;const M=(0,m.A)(),{showNotification:x}=(0,r.ko)(),P="id"in n?n:void 0,N="isCustomPeer"in n?n:void 0,T=P&&(0,a.L8)(P.id),z=P&&(T?(0,a.Yg)(P):(0,a.Js)(M,P)),$=T&&n.isPremium,R=(0,u.A)((e=>{z&&k&&((0,l.A)(e),(0,c.eM)(z),x({message:(T?"User":"Chat")+" name was copied"}))})),B=(0,o.Kr)((()=>N?M(N.titleKey):I?M(C?"MyNotes":"SavedMessages"):(0,a.Qe)(P.id)?M("AnonymousForward"):(0,a.kE)(P.id)?M("RepliesTitle"):void 0),[N,C,I,M,P]);return B?o.Ay.createElement("div",{className:(0,s.A)("title",g,t)},o.Ay.createElement("h3",null,B)):o.Ay.createElement("div",{className:(0,s.A)("title",g,t)},o.Ay.createElement("h3",{dir:"auto",role:"button",className:(0,s.A)("fullName","AS54Cntu",k&&"vr53L_9p"),onClick:R},(0,d.A)(z||"")),!F&&n&&o.Ay.createElement(o.Ay.Fragment,null,!A&&P?.isVerified&&o.Ay.createElement(v,null),!w&&P?.fakeType&&o.Ay.createElement(f.A,{fakeType:P.fakeType}),E&&P?.emojiStatus&&o.Ay.createElement(h.A,{documentId:P.emojiStatus.documentId,size:y,loopLimit:b?void 0:i.J$1,observeIntersectionForLoading:L,onClick:S}),E&&!P?.emojiStatus&&$&&o.Ay.createElement(p.A,null)),F)}))},35049:(e,t,n)=>{n.d(t,{a:()=>i,y:()=>r});var o=n(59589);function r(e,t,n){if(!e){if(!n)return;return t?"peer-color-count-1":"peer-color-0"}if("isCustomPeer"in e){if(!e.peerColorId)return;return`peer-color-${e.peerColorId}`}return t?`peer-color-count-${(0,o.PX)(e)}`:`peer-color-${(0,o.Zg)(e)}`}function i(e){return`peer-color-${e.color}`}},285:(e,t,n)=>{n.d(t,{A:()=>d});var o=n(84051),r=n(13439),i=n(59589),a=n(29807),s=n(4961),c=n(59030),l=n(94189);const d=(0,o.ph)((0,r.EK)(((e,t)=>{let{userId:n}=t;const o=(0,a.meB)(e),r=n&&(0,a.mBe)(e,n);return{chat:o,contactName:r?(0,i.u0)(r):void 0}}))((e=>{let{isOpen:t,chat:n,userId:i,contactName:a,onClose:d}=e;const{deleteChatMember:u}=(0,r.ko)(),m=(0,c.A)(),h=(0,o.hb)((()=>{u({chatId:n.id,userId:i}),d()}),[n,u,d,i]);if(n&&i)return o.Ay.createElement(l.A,{isOpen:t,onClose:d,title:m("GroupRemoved.Remove"),textParts:(0,s.A)(m("PeerInfo.Confirm.RemovePeer",a)),confirmLabel:m("lng_box_remove"),confirmHandler:h,confirmIsDestructive:!0})})))},71331:(e,t,n)=>{n.d(t,{Ip:()=>s,O7:()=>m,iT:()=>d,mD:()=>a,n5:()=>c,qI:()=>l,uu:()=>u});var o=n(59589),r=n(21133),i=n(19926);function a(e,t){const n=(0,r.AW)(e,t);if(n&&n.groupCallId)return s(e,n.groupCallId)}function s(e,t){return e.groupCalls.byId[t]}function c(e,t,n){return s(e,t)?.participants[n]}function l(e){const t=d(e)?.chatId;if(!t)return!1;const n=(0,r.hd)(e,t);return!!n&&((0,o.yn)(n)&&n.isCreator||Boolean(n.adminRights?.manageCall))}function d(e){const{groupCalls:{activeGroupCallId:t}}=e;if(t)return s(e,t)}function u(e){const{phoneCall:t,currentUserId:n}=e;if(!t||!t.participantId||!t.adminId)return;const o=t.adminId===n?t.participantId:t.adminId;return(0,i.mB)(e,o)}function m(e){const t=d(e);if(!t||!t.chatId)return!1;const n=(0,r.hd)(e,t.chatId);if(!n)return!1;if(Boolean((0,o.Kl)(n)))return!0;const i=(0,r.AW)(e,n.id)?.inviteLink;return Boolean(i)}},64520:(e,t,n)=>{n.d(t,{B:()=>a,d:()=>i});var o=n(31481),r=n(19926);function i(e,t){const{appConfig:n}=e;if(!n)return o.dR$[t][0];const i=(0,r.g2)(e),{limits:a}=n,s=a[t]?.[i?1:0]??o.dR$[t][i?1:0];return"dialogFilters"===t?s+1:s}function a(e,t){const{appConfig:n}=e;if(!n)return o.dR$[t][1];const{limits:r}=n;return r[t][1]}},32625:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(84051),r=n(17712);const i=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const i=(0,r.A)(e);(0,o.vJ)((()=>{if(void 0===t)return;const e=setInterval((()=>i()),t);return n||i(),()=>clearInterval(e)}),[t,n])}},10722:(e,t,n)=>{n.d(t,{A:()=>l});var o=n(84051),r=n(51401),i=n(66644),a=n(82393),s=n(17712);function c(e){e.stopImmediatePropagation(),e.preventDefault(),e.stopPropagation()}const l=(e,t,n,l,d)=>{const[u,m]=(0,o.J0)(!1),[h,f]=(0,o.J0)(void 0),[p,v]=(0,o.J0)(void 0),g=(0,s.A)((e=>{t||2!==e.button||(0,i.RK)((()=>{(0,r.YM)(e.target,"no-selection")}))})),A=(0,s.A)((e=>{(0,i.RK)((()=>{(0,r.HW)(e.target,"no-selection")})),t||n&&e.target.matches("a[href]")||(e.preventDefault(),e.stopPropagation(),h||(m(!0),f({x:e.clientX,y:e.clientY}),v(e.target)))})),w=(0,s.A)((()=>{m(!1)})),E=(0,s.A)((()=>{f(void 0)}));return(0,o.vJ)((()=>{if(t||!a.TF||l||d&&!d())return;const o=e.current;if(!o)return;let r;const i=()=>{r&&(clearTimeout(r),r=void 0)},s=e=>{t||(e.stopPropagation(),i(),r=window.setTimeout((()=>(e=>{i();const{clientX:t,clientY:o,target:r}=e.touches[0];h||n&&r.matches("a[href]")||(document.addEventListener("touchend",(e=>{a.pz&&a._7&&setTimeout((()=>{document.removeEventListener("mousedown",c,{capture:!0}),document.removeEventListener("click",c,{capture:!0})}),100),c(e)}),{once:!0,capture:!0}),a._7&&a.pz&&(document.addEventListener("mousedown",c,{once:!0,capture:!0}),document.addEventListener("click",c,{once:!0,capture:!0})),m(!0),f({x:t,y:o}))})(e)),200))};return o.addEventListener("touchstart",s,{passive:!0}),o.addEventListener("touchcancel",i,!0),o.addEventListener("touchend",i,!0),o.addEventListener("touchmove",i,{passive:!0}),()=>{i(),o.removeEventListener("touchstart",s),o.removeEventListener("touchcancel",i,!0),o.removeEventListener("touchend",i,!0),o.removeEventListener("touchmove",i)}}),[h,t,l,e,n,d]),{isContextMenuOpen:u,contextMenuPosition:h,contextMenuTarget:p,handleBeforeContextMenu:g,handleContextMenu:A,handleContextMenuClose:w,handleContextMenuHide:E}}},11217:(e,t,n)=>{n.d(t,{Q:()=>i});var o=n(82393),r=n(17712);function i(e){const t=(0,r.A)((t=>{"mousedown"===t.type&&t.button!==o.w3.Main||e(t)}));return o.TF?{handleClick:e?t:void 0}:{handleMouseDown:e?t:void 0}}},96374:(e,t,n)=>{n.d(t,{A:()=>d});var o=n(84051),r=n(89925),i=n(87894),a=n(30857),s=n(17712),c=n(29886);function l(e,t,n,o){const{length:i}=e,a=o?e.indexOf(o):0,s=t===r.TN.Forwards?a:a+1||i,c=Math.max(0,s-n),l=s+n-1,d=e.slice(Math.max(0,c),l+1);let u,m;switch(t){case r.TN.Forwards:u=s>=0,m=c>=0;break;case r.TN.Backwards:u=s<i,m=l<=i-1}return{newViewportIds:d,areSomeLocal:u,areAllLocal:m,newIsOnTop:d[0]===e[0]}}const d=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:30;const u=(0,o.li)(),m=(0,o.li)();if(!m.current&&t&&!n){const{newViewportIds:e,newIsOnTop:n}=l(t,r.TN.Forwards,d,t[0]);m.current={viewportIds:e,isOnTop:n}}const h=(0,a.A)();n&&(u.current={});const f=(0,c.A)(t),p=(0,c.A)(n);if(!t||n||t===f&&n===p)t||(m.current=void 0);else{const{viewportIds:e,isOnTop:n}=m.current||{},o=e&&!n?e[Math.round(e.length/2)]:void 0,a=o&&t.includes(o)?o:t[0],{offsetId:s=a,direction:c=r.TN.Forwards}=u.current||{},{newViewportIds:h,newIsOnTop:f}=l(t,c,d,s);u.current={},e&&(0,i.k)(e,h)||(m.current={viewportIds:h,isOnTop:f})}const v=(0,s.A)((n=>{let{direction:o,noScroll:a}=n;const{viewportIds:s}=m.current||{},c=s?o===r.TN.Backwards?s[s.length-1]:s[0]:void 0;if(!t)return void(e&&e({offsetId:c}));const{newViewportIds:f,areSomeLocal:p,areAllLocal:v,newIsOnTop:g}=l(t,o,d,c);!p||s&&(0,i.k)(s,f)||(m.current={viewportIds:f,isOnTop:g},h()),!v&&e&&(a||(u.current={...u.current,direction:o,offsetId:c}),e({offsetId:c}))}));return n?[t]:[m.current?.viewportIds,v]}},37859:(e,t,n)=>{n.d(t,{A:()=>r});var o=n(84051);const r=(e,t,n)=>{const r=(0,o.li)();return(0,o.Nf)((()=>{const n=r.current;return r.current=t,e(n||[])}),t,n)}},94803:(e,t,n)=>{n.d(t,{A:()=>s});var o=n(84051);const r=16,i=12,a={width:0,left:0,height:0,top:0};function s(e,t,n,s,c){const[l,d]=(0,o.J0)("right"),[u,m]=(0,o.J0)("bottom"),[h,f]=(0,o.J0)(),[p,v]=(0,o.J0)(),[g,A]=(0,o.J0)(!1),[w,E]=(0,o.J0)(""),[y,I]=(0,o.J0)("opacity: 0;");return(0,o.vJ)((()=>{const o=t();if(!e||!o)return;let{x:l,y:u}=e;const h=l,p=u,g=s(),w=n(),{extraPaddingX:y=0,extraTopPadding:C=0,extraMarginTop:b=0,topShiftY:k=0,menuElMinWidth:S=0,deltaX:L=0,shouldAvoidNegativePosition:F=!1,withPortal:M=!1,isDense:x=!1}=c?.()||{},P=g?parseInt(getComputedStyle(g).marginTop,10)+b:void 0,{offsetWidth:N,offsetHeight:T}=g||{offsetWidth:0,offsetHeight:0},z=g?{width:Math.max(N,S),height:T+P}:a,$=w?w.getBoundingClientRect():a;let R,B;x||l+z.width+y<$.width+$.left?(l+=3,R="left"):l-z.width-$.left>0?(R="right",l-=3):(R="left",l=16),d(R),l+=L;const J=u+k;x||J+z.height<$.height+$.top?(B="top",u=J):(B="bottom",u-z.height<$.top+C&&(u=$.top+$.height)),m(B);const D=o.getBoundingClientRect(),O=M?D.top:0,V=M?D.left:0,K=Math.min(l-D.left,$.width-z.width-r);let _=("left"===R?M||F?Math.max(r,K):K:l-D.left)+V,j=u-D.top+O;x&&(_=Math.min(_,$.width-z.width-r),j=Math.min(j,$.height-z.height-r));const q=S?Math.max(0,(S-N)/2):0;_-q<0&&F&&(_=q+r);const G=$.height-i-(P||0);A(G<z.height),I(`max-height: ${G}px;`),E(`left: ${_}px; top: ${j}px`);const U=h+V-D.left-_,Y=p+O-D.top-j-(P||0);f("left"===R?U:z.width+U),v("bottom"===B?z.height+Y:Y)}),[e,s,n,t,c]),{positionX:l,positionY:u,transformOriginX:h,transformOriginY:p,style:w,menuStyle:y,withScroll:g}}},90423:(e,t,n)=>{n.d(t,{Ay:()=>s,zk:()=>c});var o=n(84051),r=n(31791),i=n(82393);const a=l();function s(e,t){const[n,r]=(0,o.J0)(Boolean(a&&document[a]));return(0,o.Nf)((()=>{const n=e.current,o=()=>{const e=Boolean(a&&document[a]);r(e),n.controls=e},i=()=>{r(!0)},s=()=>{r(!1),t(!1)};return document.addEventListener("fullscreenchange",o,!1),document.addEventListener("webkitfullscreenchange",o,!1),document.addEventListener("mozfullscreenchange",o,!1),n&&(n.addEventListener("webkitbeginfullscreen",i,!1),n.addEventListener("webkitendfullscreen",s,!1)),()=>{document.removeEventListener("fullscreenchange",o,!1),document.removeEventListener("webkitfullscreenchange",o,!1),document.removeEventListener("mozfullscreenchange",o,!1),n&&(n.removeEventListener("webkitbeginfullscreen",i,!1),n.removeEventListener("webkitendfullscreen",s,!1))}}),[]),a||i.pz?[n,()=>{var t;e.current&&(a||i.pz)&&((t=e.current).requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.webkitEnterFullscreen?t.webkitEnterFullscreen():t.mozRequestFullScreen&&t.mozRequestFullScreen(),r(!0))},()=>{e.current&&(document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen(),r(!1))}]:[!1]}const c=()=>{const[e,t]=(0,o.J0)(!1);return(0,o.vJ)((()=>{const e=()=>{t(function(){const e=l();return Boolean(e&&document[e])}())},n=window.electron?.on(r.v.FULLSCREEN_CHANGE,t);return window.electron?.isFullscreen().then(t),document.addEventListener("fullscreenchange",e,!1),document.addEventListener("webkitfullscreenchange",e,!1),document.addEventListener("mozfullscreenchange",e,!1),()=>{n?.(),document.removeEventListener("fullscreenchange",e,!1),document.removeEventListener("webkitfullscreenchange",e,!1),document.removeEventListener("mozfullscreenchange",e,!1)}}),[]),e};function l(){return void 0!==document.fullscreenElement?"fullscreenElement":void 0!==document.mozFullScreenElement?"mozFullScreenElement":void 0!==document.webkitFullscreenElement?"webkitFullscreenElement":""}},32610:(e,t,n)=>{n.d(t,{A:()=>i});const o=[1,57,41,21,203,34,97,73,227,91,149,62,105,45,39,137,241,107,3,173,39,71,65,238,219,101,187,87,81,151,141,133,249,117,221,209,197,187,177,169,5,153,73,139,133,127,243,233,223,107,103,99,191,23,177,171,165,159,77,149,9,139,135,131,253,245,119,231,224,109,211,103,25,195,189,23,45,175,171,83,81,79,155,151,147,9,141,137,67,131,129,251,123,30,235,115,113,221,217,53,13,51,50,49,193,189,185,91,179,175,43,169,83,163,5,79,155,19,75,147,145,143,35,69,17,67,33,65,255,251,247,243,239,59,29,229,113,111,219,27,213,105,207,51,201,199,49,193,191,47,93,183,181,179,11,87,43,85,167,165,163,161,159,157,155,77,19,75,37,73,145,143,141,35,138,137,135,67,33,131,129,255,63,250,247,61,121,239,237,117,29,229,227,225,111,55,109,216,213,211,209,207,205,203,201,199,197,195,193,48,190,47,93,185,183,181,179,178,176,175,173,171,85,21,167,165,41,163,161,5,79,157,78,154,153,19,75,149,74,147,73,144,143,71,141,140,139,137,17,135,134,133,66,131,65,129,1],r=[0,9,10,10,14,12,14,14,16,15,16,15,16,15,15,17,18,17,12,18,16,17,17,19,19,18,19,18,18,19,19,19,20,19,20,20,20,20,20,20,15,20,19,20,20,20,21,21,21,20,20,20,21,18,21,21,21,21,20,21,17,21,21,21,22,22,21,22,22,21,22,21,19,22,22,19,20,22,22,21,21,21,22,22,22,18,22,22,21,22,22,23,22,20,23,22,22,23,23,21,19,21,21,21,23,23,23,22,23,23,21,23,22,23,18,22,23,20,22,23,23,23,21,22,20,22,21,22,24,24,24,24,24,22,21,24,23,23,24,21,24,23,24,22,24,24,22,24,24,22,23,24,24,24,20,23,22,23,24,24,24,24,24,24,24,23,21,23,22,23,24,24,24,22,24,24,24,23,22,24,24,25,23,25,25,23,24,25,25,24,22,25,25,25,24,23,24,25,25,25,25,25,25,25,25,25,25,25,25,23,25,23,24,25,25,25,25,25,25,25,25,25,24,22,25,25,23,25,25,20,24,25,24,25,25,22,24,25,24,25,24,25,25,24,25,25,25,25,22,25,25,25,24,25,24,25,18];function i(e,t,n,i,a,s,c){if(Number.isNaN(s)||s<1)return;s|=0,Number.isNaN(c)&&(c=1),(c|=0)>3&&(c=3),c<1&&(c=1);const l=e.getImageData(t,n,i,a),d=l.data;let u,m,h,f,p,v,g,A,w,E,y,I,C=i-1,b=a-1,k=s+1,S=[],L=[],F=[],M=o[s],x=r[s],P=[],N=[];for(;c-- >0;){for(I=y=0,p=0;p<a;p++){for(u=d[I]*k,m=d[I+1]*k,h=d[I+2]*k,v=1;v<=s;v++)g=I+((v>C?C:v)<<2),u+=d[g++],m+=d[g++],h+=d[g++];for(f=0;f<i;f++)S[y]=u,L[y]=m,F[y]=h,0==p&&(P[f]=((g=f+k)<C?g:C)<<2,N[f]=(g=f-s)>0?g<<2:0),A=I+P[f],w=I+N[f],u+=d[A++]-d[w++],m+=d[A++]-d[w++],h+=d[A++]-d[w++],y++;I+=i<<2}for(f=0;f<i;f++){for(E=f,u=S[E]*k,m=L[E]*k,h=F[E]*k,v=1;v<=s;v++)E+=v>b?0:i,u+=S[E],m+=L[E],h+=F[E];for(y=f<<2,p=0;p<a;p++)d[y]=u*M>>>x,d[y+1]=m*M>>>x,d[y+2]=h*M>>>x,0==f&&(P[p]=((g=p+k)<b?g:b)*i,N[p]=(g=p-s)>0?g*i:0),A=f+P[p],w=f+N[p],u+=S[A]-S[w],m+=L[A]-L[w],h+=F[A]-F[w],y+=i<<2}}e.putImageData(l,t,n)}},31791:(e,t,n)=>{n.d(t,{v:()=>o});let o=function(e){return e.FULLSCREEN_CHANGE="fullscreen-change",e.UPDATE_ERROR="update-error",e.UPDATE_AVAILABLE="update-available",e.DEEPLINK="deeplink",e}({})},14680:(e,t,n)=>{n.d(t,{FD:()=>r,ZJ:()=>a,wb:()=>i});let o=0;function r(){o+=1}function i(){o-=1}function a(){return o>0}},9718:(e,t,n)=>{n.d(t,{A:()=>a,E:()=>i});var o=n(41402),r=n(82393);function i(e){e.style.display="none",(0,o.A)(e),e.style.display=""}const a=(e,t)=>{r.pz&&(e.style.overflow="hidden"),void 0!==t&&(e.scrollTop=t),r.pz&&(e.style.overflow="")}},83868:(e,t,n)=>{n.d(t,{A:()=>o});const o=e=>{e.stopPropagation(),e.preventDefault()}},29441:(e,t,n)=>{function o(e){function t(t){if("Tab"!==t.key)return;t.preventDefault(),t.stopPropagation();const n=Array.from(e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));if(!n.length)return;const o=n.findIndex((e=>e.isSameNode(document.activeElement)));let r=0;o>=0&&(r=t.shiftKey?o>0?o-1:n.length-1:o<n.length-1?o+1:0),n[r].focus()}return document.addEventListener("keydown",t,!1),()=>{document.removeEventListener("keydown",t,!1)}}n.d(t,{A:()=>o})}}]);
//# sourceMappingURL=3649.fbbfc9d855c008eb826d.js.map