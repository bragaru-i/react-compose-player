import{r as i}from"./index-c013ead5.js";import{g as j}from"./_commonjsHelpers-725317a4.js";var F={exports:{}},O={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J=i,H=Symbol.for("react.element"),Q=Symbol.for("react.fragment"),Z=Object.prototype.hasOwnProperty,B=J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ee={key:!0,ref:!0,__self:!0,__source:!0};function b(e,t,n){var r,o={},s=null,u=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(u=t.ref);for(r in t)Z.call(t,r)&&!ee.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:H,type:e,key:s,ref:u,props:o,_owner:B.current}}O.Fragment=Q;O.jsx=b;O.jsxs=b;F.exports=O;var l=F.exports;const te="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4";function P(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(const[r,o]of e)if(!Object.is(o,t.get(r)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(const r of e)if(!t.has(r))return!1;return!0}const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let r=0;r<n.length;r++)if(!Object.prototype.hasOwnProperty.call(t,n[r])||!Object.is(e[n[r]],t[n[r]]))return!1;return!0}var W={exports:{}},z={},Y={exports:{}},A={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=i;function re(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ne=typeof Object.is=="function"?Object.is:re,oe=g.useState,se=g.useEffect,ue=g.useLayoutEffect,ie=g.useDebugValue;function ae(e,t){var n=t(),r=oe({inst:{value:n,getSnapshot:t}}),o=r[0].inst,s=r[1];return ue(function(){o.value=n,o.getSnapshot=t,T(o)&&s({inst:o})},[e,n,t]),se(function(){return T(o)&&s({inst:o}),e(function(){T(o)&&s({inst:o})})},[e]),ie(n),n}function T(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ne(e,n)}catch{return!0}}function ce(e,t){return t()}var le=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?ce:ae;A.useSyncExternalStore=g.useSyncExternalStore!==void 0?g.useSyncExternalStore:le;Y.exports=A;var de=Y.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=i,fe=de;function me(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pe=typeof Object.is=="function"?Object.is:me,ye=fe.useSyncExternalStore,Se=x.useRef,Ee=x.useEffect,ve=x.useMemo,ge=x.useDebugValue;z.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var s=Se(null);if(s.current===null){var u={hasValue:!1,value:null};s.current=u}else u=s.current;s=ve(function(){function c(S){if(!y){if(y=!0,a=S,S=r(S),o!==void 0&&u.hasValue){var v=u.value;if(o(v,S))return f=v}return f=S}if(v=f,pe(a,S))return v;var w=r(S);return o!==void 0&&o(v,w)?v:(a=S,f=w)}var y=!1,a,f,p=n===void 0?null:n;return[function(){return c(t())},p===null?void 0:function(){return c(p())}]},[t,n,r,o]);var d=ye(e,s[0],s[1]);return Ee(function(){u.hasValue=!0,u.value=d},[d]),ge(d),d};W.exports=z;var he=W.exports;const G=j(he),k=e=>{let t;const n=new Set,r=(c,y)=>{const a=typeof c=="function"?c(t):c;if(!Object.is(a,t)){const f=t;t=y??typeof a!="object"?a:Object.assign({},t,a),n.forEach(p=>p(t,f))}},o=()=>t,d={setState:r,getState:o,subscribe:c=>(n.add(c),()=>n.delete(c)),destroy:()=>{n.clear()}};return t=e(r,o,d),d},_e=e=>e?k(e):k,{useSyncExternalStoreWithSelector:Re}=G;function Oe(e,t=e.getState,n){const r=Re(e.subscribe,e.getState,e.getServerState||e.getState,t,n);return i.useDebugValue(r),r}function Pe(e){return{all:e=e||new Map,on:function(t,n){var r=e.get(t);r?r.push(n):e.set(t,[n])},off:function(t,n){var r=e.get(t);r&&(n?r.splice(r.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var r=e.get(t);r&&r.slice().map(function(o){o(n)}),(r=e.get("*"))&&r.slice().map(function(o){o(t,n)})}}}const m=()=>[],K={currentTime:0,duration:0,volume:1,emitter:Pe(),buffered:[],isMuted:!1,isPlaying:!1,hasPlayedOrSeeked:!1,isReady:!1},xe={mute:m,pause:m,play:m,seek:m,setVolume:m,unmute:m,setDuration:m,getListener:()=>({addEventListener:m,removeEventListener:m}),setIsReady:m,setCurrentTime:m},Te={playPromiseRef:{current:void 0},mediaContainerRef:{current:null},mediaElRef:{current:null},onStoreUpdate:m},I={...K,...xe,...Te};function E(e){return("0"+e).slice(-2)}const $=(e,t=!0)=>{const n=Math.round(e/1e3),r=Math.floor(n/60),o=n%60,s=Math.floor(r/60),u=r%60;return s?t?`${s}:${E(u)}:${E(o)}`:`${E(s)}:${E(u)}:${E(o)}`:`${t?u:E(u)}:${E(o)}`},X=i.createContext({getState:()=>I,setState:()=>I,subscribe:()=>()=>[],destroy:()=>()=>[]}),Ce=e=>(t,n)=>Oe(e,t,n),h=()=>{const e=i.useContext(X);if(!e)throw Error("useMediaStore cannot be used outside of the MediaProvider");return i.useMemo(()=>Ce(e),[])},Me=i.memo(()=>{const e=h(),[t,n,r]=e(u=>[u.play,u.pause,u.isPlaying],P),o=()=>r?n():t(),s=()=>r?"Pause":"Play";return l.jsx("button",{onClick:o,children:s()})});function De(e=!1){const[t,n]=i.useState(e),r=i.useMemo(()=>({on:()=>n(!0),off:()=>n(!1),toggle:()=>n(o=>!o)}),[]);return[t,r]}function we(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(const[r,o]of e)if(!Object.is(o,t.get(r)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(const r of e)if(!t.has(r))return!1;return!0}const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let r=0;r<n.length;r++)if(!Object.prototype.hasOwnProperty.call(t,n[r])||!Object.is(e[n[r]],t[n[r]]))return!1;return!0}const ke=()=>{const e=h(),[t,n,r]=e(o=>[o.play,o.pause,o.isPlaying],we);return i.useCallback(()=>r?n():t(),[n,t,r])},Ie=50,C=i.memo(({className:e,url:t})=>{const n=h(),[r,o,s,u,d,c]=n(a=>[a.mediaElRef,a.setIsReady,a.setCurrentTime,a.isReady,a.isPlaying,a.setDuration],P);i.useEffect(()=>(o(!0),()=>o(!1)),[]);const y=i.useMemo(()=>u&&d&&!!r.current,[d,u,r]);return i.useEffect(()=>{if(!y)return;const a=setInterval(()=>{var p;const f=(p=r.current)==null?void 0:p.currentTime;f&&s(f)},Ie);return()=>clearInterval(a)},[y,r,s]),i.useEffect(()=>{var a;(a=r.current)==null||a.addEventListener("loadedmetadata",()=>{var p;const f=(p=r.current)==null?void 0:p.duration;f&&c(f)})},[u,r,c]),l.jsx("video",{controls:!1,ref:r,src:t,className:e})});try{C.displayName="Player",C.__docgenInfo={description:"",displayName:"Player",props:{url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const M=({children:e,classes:t,url:n})=>{const r=ke(),o=h(),[s]=o(u=>[u.mediaContainerRef],P);return l.jsxs("div",{ref:s,className:t==null?void 0:t.wrapper,onClick:r,children:[l.jsx(C,{className:t==null?void 0:t.video,url:n}),e]})};try{M.displayName="MediaContainer",M.__docgenInfo={description:"",displayName:"MediaContainer",props:{classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"Classes"}},url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}}}}}catch{}const{useSyncExternalStoreWithSelector:$e}=G;function Le(e,t=e.getState,n){const r=$e(e.subscribe,e.getState,e.getServerState||e.getState,t,n);return i.useDebugValue(r),r}const L=e=>{const t=typeof e=="function"?_e(e):e,n=(r,o)=>Le(t,r,o);return Object.assign(n,t),n},Ve=e=>e?L(e):L,Ne=e=>()=>({...e}),Ue=()=>K,qe=(e,t)=>({getListener:()=>({addEventListener:t().emitter.on,removeEventListener:t().emitter.off}),mute:()=>e(n=>(n.emitter.emit("mute"),{isMuted:!0})),unmute:()=>e(n=>(n.emitter.emit("unnmute"),{isMuted:!1})),pause:()=>e(n=>{n.emitter.emit("pause");const r=n.mediaElRef.current;return r&&n.playPromiseRef.current&&n.playPromiseRef.current.then(()=>r.pause()),{isPlaying:!1}}),play:()=>e(n=>{if(!n.isReady)return console.warn("Play was called, but <Player /> is unmounted"),{isPlaying:!1};n.emitter.emit("play");const r=n.mediaElRef.current;return r&&(n.playPromiseRef.current=r.play(),r.play()),{isPlaying:!0,hasPlayedOrSeeked:!0}}),seek:n=>e(r=>{const o=r.mediaElRef.current;return!o||r.duration===void 0?{isPlaying:!1}:(n=Math.min(r.duration,Math.max(0,n)),r.emitter.emit("seeked",{diffMs:n}),o.currentTime=n,r.emitter.emit("timeupdate",{seconds:n,duration:r.duration}),{currentTime:n,hasPlayedOrSeeked:!0})}),setVolume:n=>e({volume:Math.min(Math.max(n,0),1)}),setIsReady:n=>e({isReady:n}),setDuration:n=>e(r=>{const o=n;return r.emitter.emit("durationchange",{duration:o}),r.duration===o?r:{duration:o,currentTime:0}}),setCurrentTime:n=>e({currentTime:n})}),Fe=e=>t=>(n,r,o)=>t(s=>{n(s),e==null||e(r())},r,o),be=({onStoreUpdate:e,...t})=>Ve()(Fe(e)((...n)=>({...Ue(...n),...qe(...n),...Ne(t)(...n)}))),D=i.memo(({children:e,onStoreUpdate:t})=>{const[n,r]=De(!1),o=i.useRef(),s=i.useRef(null),u=i.useRef(null),d=i.useRef(be({playPromiseRef:o,mediaContainerRef:s,onStoreUpdate:t,mediaElRef:u})),c=i.useMemo(()=>d,[n]);return i.useEffect(()=>(r.on(),()=>r.off()),[r]),l.jsx(X.Provider,{value:c.current,children:e})});try{D.displayName="MediaProvider",D.__docgenInfo={description:"",displayName:"MediaProvider",props:{onStoreUpdate:{defaultValue:null,description:"",name:"onStoreUpdate",required:!1,type:{name:"((store: MediaStore) => void)"}}}}}catch{}const R=i.memo(({children:e,classes:t,url:n})=>l.jsx(D,{children:l.jsx(M,{url:n,classes:t,children:e})}));try{R.displayName="CorePlayer",R.__docgenInfo={description:"",displayName:"CorePlayer",props:{classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"Classes"}},url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}}}}}catch{}const V=1e3,We=i.memo(()=>{const e=h(),[t,n]=e(r=>[r.currentTime,r.duration],P);return l.jsxs("div",{children:[$(t*V)," /",$(n*V)]})}),_=()=>{const[e,t]=i.useState(0);return l.jsxs(l.Fragment,{children:[l.jsxs(R,{url:te,children:[l.jsx(Me,{}),l.jsx(We,{})]}),l.jsxs("button",{onClick:()=>t(n=>n+1),children:["Count: ",e]})]})},Ae={component:R,tags:["autodocs"]};var N,U,q;_.parameters={..._.parameters,docs:{...(N=_.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const [count, setCount] = useState(0);
  return <>
      <CorePlayer url={VIDEO_URL}>
        <PlayToggleButton />
        <CurrentTime />
      </CorePlayer>
      <button onClick={() => setCount(prev => prev + 1)}>Count: {count}</button>
    </>;
}`,...(q=(U=_.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};export{_ as Primary,Ae as default};
