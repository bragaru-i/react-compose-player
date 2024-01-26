import{r as u}from"./index-c013ead5.js";import{g as H}from"./_commonjsHelpers-725317a4.js";var W={exports:{}},T={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q=u,Z=Symbol.for("react.element"),B=Symbol.for("react.fragment"),ee=Object.prototype.hasOwnProperty,te=Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,re={key:!0,ref:!0,__self:!0,__source:!0};function z(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)ee.call(t,r)&&!re.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Z,type:e,key:i,ref:s,props:o,_owner:te.current}}T.Fragment=B;T.jsx=z;T.jsxs=z;W.exports=T;var c=W.exports;const ne="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4";function _(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(const[r,o]of e)if(!Object.is(o,t.get(r)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(const r of e)if(!t.has(r))return!1;return!0}const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let r=0;r<n.length;r++)if(!Object.prototype.hasOwnProperty.call(t,n[r])||!Object.is(e[n[r]],t[n[r]]))return!1;return!0}var Y={exports:{}},A={},X={exports:{}},j={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=u;function oe(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ie=typeof Object.is=="function"?Object.is:oe,se=g.useState,ue=g.useEffect,ae=g.useLayoutEffect,ce=g.useDebugValue;function le(e,t){var n=t(),r=se({inst:{value:n,getSnapshot:t}}),o=r[0].inst,i=r[1];return ae(function(){o.value=n,o.getSnapshot=t,P(o)&&i({inst:o})},[e,n,t]),ue(function(){return P(o)&&i({inst:o}),e(function(){P(o)&&i({inst:o})})},[e]),ce(n),n}function P(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ie(e,n)}catch{return!0}}function de(e,t){return t()}var fe=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?de:le;j.useSyncExternalStore=g.useSyncExternalStore!==void 0?g.useSyncExternalStore:fe;X.exports=j;var me=X.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=u,pe=me;function ye(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Se=typeof Object.is=="function"?Object.is:ye,Ee=pe.useSyncExternalStore,ge=x.useRef,ve=x.useEffect,_e=x.useMemo,he=x.useDebugValue;A.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var i=ge(null);if(i.current===null){var s={hasValue:!1,value:null};i.current=s}else s=i.current;i=_e(function(){function a(p){if(!m){if(m=!0,d=p,p=r(p),o!==void 0&&s.hasValue){var E=s.value;if(o(E,p))return S=E}return S=p}if(E=S,Se(d,p))return E;var I=r(p);return o!==void 0&&o(E,I)?E:(d=p,S=I)}var m=!1,d,S,h=n===void 0?null:n;return[function(){return a(t())},h===null?void 0:function(){return a(h())}]},[t,n,r,o]);var l=Ee(e,i[0],i[1]);return ve(function(){s.hasValue=!0,s.value=l},[l]),he(l),l};Y.exports=A;var Re=Y.exports;const G=H(Re),k=e=>{let t;const n=new Set,r=(a,m)=>{const d=typeof a=="function"?a(t):a;if(!Object.is(d,t)){const S=t;t=m??typeof d!="object"?d:Object.assign({},t,d),n.forEach(h=>h(t,S))}},o=()=>t,l={setState:r,getState:o,subscribe:a=>(n.add(a),()=>n.delete(a)),destroy:()=>{n.clear()}};return t=e(r,o,l),l},Oe=e=>e?k(e):k,{useSyncExternalStoreWithSelector:Te}=G;function xe(e,t=e.getState,n){const r=Te(e.subscribe,e.getState,e.getServerState||e.getState,t,n);return u.useDebugValue(r),r}function Pe(e){return{all:e=e||new Map,on:function(t,n){var r=e.get(t);r?r.push(n):e.set(t,[n])},off:function(t,n){var r=e.get(t);r&&(n?r.splice(r.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var r=e.get(t);r&&r.slice().map(function(o){o(n)}),(r=e.get("*"))&&r.slice().map(function(o){o(t,n)})}}}const f=()=>[],K={currentTime:0,duration:0,volume:1,emitter:Pe(),buffered:[],isMuted:!1,isPlaying:!1,hasPlayedOrSeeked:!1,isReady:!1},Ce={mute:f,pause:f,play:f,seek:f,setVolume:f,unmute:f,setDuration:f,getListener:()=>({addEventListener:f,removeEventListener:f}),setIsReady:f,setCurrentTime:f},Me={playPromiseRef:{current:void 0},mediaContainerRef:{current:null},mediaElRef:{current:null},onStoreUpdate:f},$={...K,...Ce,...Me};function y(e){return("0"+e).slice(-2)}const N=(e,t=!0)=>{const n=Math.round(e/1e3),r=Math.floor(n/60),o=n%60,i=Math.floor(r/60),s=r%60;return i?t?`${i}:${y(s)}:${y(o)}`:`${y(i)}:${y(s)}:${y(o)}`:`${t?s:y(s)}:${y(o)}`},J=u.createContext({getState:()=>$,setState:()=>$,subscribe:()=>()=>[],destroy:()=>()=>[]}),De=e=>(t,n)=>xe(e,t,n),v=()=>{const e=u.useContext(J);if(!e)throw Error("useMediaStore cannot be used outside of the MediaProvider");return u.useMemo(()=>De(e),[])},we=u.memo(()=>{const e=v(),[t,n,r]=e(s=>[s.play,s.pause,s.isPlaying],_),o=()=>r?n():t(),i=()=>r?"Pause":"Play";return c.jsx("button",{onClick:o,children:i()})});function Ie(e=!1){const[t,n]=u.useState(e),r=u.useMemo(()=>({on:()=>n(!0),off:()=>n(!1),toggle:()=>n(o=>!o)}),[]);return[t,r]}function ke(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(const[r,o]of e)if(!Object.is(o,t.get(r)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(const r of e)if(!t.has(r))return!1;return!0}const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let r=0;r<n.length;r++)if(!Object.prototype.hasOwnProperty.call(t,n[r])||!Object.is(e[n[r]],t[n[r]]))return!1;return!0}const $e=()=>{const e=v(),[t,n,r]=e(o=>[o.play,o.pause,o.isPlaying],ke);return u.useCallback(()=>r?n():t(),[n,t,r])},Ne=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,Ve=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,V=e=>Ne.test(e)?"audio-file":Ve.test(e)?"video-file":"unknown-media",C=u.memo(({className:e,url:t})=>{const n=v(),[r,o,i,s]=n(a=>[a.mediaElRef,a.setIsReady,a.isReady,a.setDuration],_);u.useEffect(()=>(o(!0),()=>o(!1)),[]),u.useEffect(()=>{var a;(a=r.current)==null||a.addEventListener("loadedmetadata",()=>{var d;const m=(d=r.current)==null?void 0:d.duration;m&&s(m)})},[i,r,s]);const l=u.useMemo(()=>{if(V(t)==="audio-file")return"audio";if(V(t)==="video-file")return"video";throw Error(`URL: ${t} has a media file that is not supported`)},[t]);return c.jsx(l,{controls:!1,ref:r,src:t,className:e})});try{C.displayName="Player",C.__docgenInfo={description:`Component that:
- mounts video/audio tag
- set media duration`,displayName:"Player",props:{url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const M=({children:e,classes:t,url:n})=>{const r=$e(),o=v(),[i]=o(s=>[s.mediaContainerRef],_);return c.jsxs("div",{ref:i,className:t==null?void 0:t.wrapper,onClick:r,children:[c.jsx(C,{className:t==null?void 0:t.video,url:n}),e]})};try{M.displayName="MediaContainer",M.__docgenInfo={description:"",displayName:"MediaContainer",props:{classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"Classes"}},url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}}}}}catch{}const{useSyncExternalStoreWithSelector:Le}=G;function Ue(e,t=e.getState,n){const r=Le(e.subscribe,e.getState,e.getServerState||e.getState,t,n);return u.useDebugValue(r),r}const L=e=>{const t=typeof e=="function"?Oe(e):e,n=(r,o)=>Ue(t,r,o);return Object.assign(n,t),n},qe=e=>e?L(e):L,Fe=e=>()=>({...e}),be=()=>K,We=(e,t)=>({getListener:()=>({addEventListener:t().emitter.on,removeEventListener:t().emitter.off}),mute:()=>e(n=>(n.emitter.emit("mute"),{isMuted:!0})),unmute:()=>e(n=>(n.emitter.emit("unnmute"),{isMuted:!1})),pause:()=>e(n=>{n.emitter.emit("pause");const r=n.mediaElRef.current;return r&&n.playPromiseRef.current&&n.playPromiseRef.current.then(()=>r.pause()),{isPlaying:!1}}),play:()=>e(n=>{if(!n.isReady)return console.warn("Play was called, but <Player /> is unmounted"),{isPlaying:!1};n.emitter.emit("play");const r=n.mediaElRef.current;return r&&(n.playPromiseRef.current=r.play(),r.play()),{isPlaying:!0,hasPlayedOrSeeked:!0}}),seek:n=>e(r=>{const o=r.mediaElRef.current;return!o||r.duration===void 0?{isPlaying:!1}:(n=Math.min(r.duration,Math.max(0,n)),r.emitter.emit("seeked",{diffMs:n}),o.currentTime=n,r.emitter.emit("timeupdate",{seconds:n,duration:r.duration}),{currentTime:n,hasPlayedOrSeeked:!0})}),setVolume:n=>e({volume:Math.min(Math.max(n,0),1)}),setIsReady:n=>e({isReady:n}),setDuration:n=>e(r=>{const o=n;return r.emitter.emit("durationchange",{duration:o}),r.duration===o?r:{duration:o,currentTime:0}}),setCurrentTime:n=>e({currentTime:n})}),ze=e=>t=>(n,r,o)=>t(i=>{n(i),e==null||e(r())},r,o),Ye=({onStoreUpdate:e,...t})=>qe()(ze(e)((...n)=>({...be(...n),...We(...n),...Fe(t)(...n)}))),D=u.memo(({children:e,onStoreUpdate:t})=>{const[n,r]=Ie(!1),o=u.useRef(),i=u.useRef(null),s=u.useRef(null),l=u.useRef(Ye({playPromiseRef:o,mediaContainerRef:i,onStoreUpdate:t,mediaElRef:s})),a=u.useMemo(()=>l,[n]);return u.useEffect(()=>(r.on(),()=>r.off()),[r]),c.jsx(J.Provider,{value:a.current,children:e})});try{D.displayName="MediaProvider",D.__docgenInfo={description:"",displayName:"MediaProvider",props:{onStoreUpdate:{defaultValue:null,description:"",name:"onStoreUpdate",required:!1,type:{name:"((store: MediaStore) => void)"}}}}}catch{}const O=u.memo(({children:e,classes:t,url:n})=>c.jsx(D,{children:c.jsx(M,{url:n,classes:t,children:e})}));try{O.displayName="CorePlayer",O.__docgenInfo={description:"",displayName:"CorePlayer",props:{classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"Classes"}},url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}}}}}catch{}const Ae=50,w=u.memo(({progressInterval:e=Ae,children:t})=>{const n=v(),[r,o,i,s]=n(a=>[a.mediaElRef,a.setCurrentTime,a.isReady,a.isPlaying],_),l=u.useMemo(()=>i&&s&&!!r.current,[s,i,r]);return u.useEffect(()=>{if(!l)return;const a=setInterval(()=>{var d;const m=(d=r.current)==null?void 0:d.currentTime;m&&o(m)},e);return()=>clearInterval(a)},[l,r,e,o]),c.jsx(c.Fragment,{children:t})});try{w.displayName="CurrentTiming",w.__docgenInfo={description:"Component that adds current playing time to media player",displayName:"CurrentTiming",props:{progressInterval:{defaultValue:null,description:"",name:"progressInterval",required:!1,type:{name:"number"}}}}}catch{}const U=1e3,Xe=u.memo(()=>{const e=v(),[t,n]=e(r=>[r.currentTime,r.duration],_);return c.jsxs("div",{children:[N(t*U)," /",N(n*U)]})}),R=()=>{const[e,t]=u.useState(0);return c.jsxs(c.Fragment,{children:[c.jsxs(O,{url:ne,children:[c.jsx(we,{}),c.jsx(Xe,{}),c.jsx(w,{})]}),c.jsxs("button",{onClick:()=>t(n=>n+1),children:["Count: ",e]})]})},Ke={component:O,tags:["autodocs"]};var q,F,b;R.parameters={...R.parameters,docs:{...(q=R.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const [count, setCount] = useState(0);
  return <>
      <CorePlayer url={VIDEO_URL}>
        <PlayToggleButton />
        <CurrentTime />
        <CurrentTiming />
      </CorePlayer>
      <button onClick={() => setCount(prev => prev + 1)}>Count: {count}</button>
    </>;
}`,...(b=(F=R.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};export{R as Primary,Ke as default};
