import{l as z,n as Y,E as K,b as r,p as W,q as $,u as q,v as N,R as s,B as G,T as p}from"./Toast-OISi9GcT.js";import{m as X,D as J,d as Q,R as Z,e as ee,N as te,f as ne,b as ae,a as re,g as ie,u as se}from"./index-wUg-ar-9.js";import{b as oe,R as le,A as ce,a as ue}from"./buttonThemes-kb01FGMI.js";import{h as U}from"./moment-WSJ9un1t.js";import{l as de}from"./helper-C5G82HV9.js";import{I as F}from"./iconBase-pjIET6RN.js";/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function k(){return k=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},k.apply(this,arguments)}function fe(e,n){if(e==null)return{};var t={},i=Object.keys(e),a,o;for(o=0;o<i.length;o++)a=i[o],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}function me(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function pe(e,n){return e.button===0&&(!n||n==="_self")&&!me(e)}const he=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],ve="6";try{window.__reactRouterVersion=ve}catch{}function Oe(e,n){return z({basename:n==null?void 0:n.basename,future:k({},n==null?void 0:n.future,{v7_prependBasename:!0}),history:Y({window:n==null?void 0:n.window}),hydrationData:(n==null?void 0:n.hydrationData)||we(),routes:e,mapRouteProperties:X,window:n==null?void 0:n.window}).initialize()}function we(){var e;let n=(e=window)==null?void 0:e.__staticRouterHydrationData;return n&&n.errors&&(n=k({},n,{errors:ge(n.errors)})),n}function ge(e){if(!e)return null;let n=Object.entries(e),t={};for(let[i,a]of n)if(a&&a.__type==="RouteErrorResponse")t[i]=new K(a.status,a.statusText,a.data,a.internal===!0);else if(a&&a.__type==="Error"){if(a.__subType){let o=window[a.__subType];if(typeof o=="function")try{let l=new o(a.message);l.stack="",t[i]=l}catch{}}if(t[i]==null){let o=new Error(a.message);o.stack="",t[i]=o}}else t[i]=a;return t}const Ee=r.createContext({isTransitioning:!1}),ye=r.createContext(new Map),be="startTransition",O=W[be],Ce="flushSync",M=$[Ce];function Re(e){O?O(e):e()}function P(e){M?M(e):e()}class Se{constructor(){this.status="pending",this.promise=new Promise((n,t)=>{this.resolve=i=>{this.status==="pending"&&(this.status="resolved",n(i))},this.reject=i=>{this.status==="pending"&&(this.status="rejected",t(i))}})}}function Me(e){let{fallbackElement:n,router:t,future:i}=e,[a,o]=r.useState(t.state),[l,c]=r.useState(),[f,u]=r.useState({isTransitioning:!1}),[d,g]=r.useState(),[h,S]=r.useState(),[E,_]=r.useState(),T=r.useRef(new Map),{v7_startTransition:D}=i||{},x=r.useCallback(m=>{D?Re(m):m()},[D]),v=r.useCallback((m,b)=>{let{deletedFetchers:w,unstable_flushSync:H,unstable_viewTransitionOpts:C}=b;w.forEach(R=>T.current.delete(R)),m.fetchers.forEach((R,j)=>{R.data!==void 0&&T.current.set(j,R.data)});let V=t.window==null||typeof t.window.document.startViewTransition!="function";if(!C||V){H?P(()=>o(m)):x(()=>o(m));return}if(H){P(()=>{h&&(d&&d.resolve(),h.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:C.currentLocation,nextLocation:C.nextLocation})});let R=t.window.document.startViewTransition(()=>{P(()=>o(m))});R.finished.finally(()=>{P(()=>{g(void 0),S(void 0),c(void 0),u({isTransitioning:!1})})}),P(()=>S(R));return}h?(d&&d.resolve(),h.skipTransition(),_({state:m,currentLocation:C.currentLocation,nextLocation:C.nextLocation})):(c(m),u({isTransitioning:!0,flushSync:!1,currentLocation:C.currentLocation,nextLocation:C.nextLocation}))},[t.window,h,d,T,x]);r.useLayoutEffect(()=>t.subscribe(v),[t,v]),r.useEffect(()=>{f.isTransitioning&&!f.flushSync&&g(new Se)},[f]),r.useEffect(()=>{if(d&&l&&t.window){let m=l,b=d.promise,w=t.window.document.startViewTransition(async()=>{x(()=>o(m)),await b});w.finished.finally(()=>{g(void 0),S(void 0),c(void 0),u({isTransitioning:!1})}),S(w)}},[x,l,d,t.window]),r.useEffect(()=>{d&&l&&a.location.key===l.location.key&&d.resolve()},[d,h,a.location,l]),r.useEffect(()=>{!f.isTransitioning&&E&&(c(E.state),u({isTransitioning:!0,flushSync:!1,currentLocation:E.currentLocation,nextLocation:E.nextLocation}),_(void 0))},[f.isTransitioning,E]),r.useEffect(()=>{},[]);let y=r.useMemo(()=>({createHref:t.createHref,encodeLocation:t.encodeLocation,go:m=>t.navigate(m),push:(m,b,w)=>t.navigate(m,{state:b,preventScrollReset:w==null?void 0:w.preventScrollReset}),replace:(m,b,w)=>t.navigate(m,{replace:!0,state:b,preventScrollReset:w==null?void 0:w.preventScrollReset})}),[t]),L=t.basename||"/",B=r.useMemo(()=>({router:t,navigator:y,static:!1,basename:L}),[t,y,L]);return r.createElement(r.Fragment,null,r.createElement(J.Provider,{value:B},r.createElement(Q.Provider,{value:a},r.createElement(ye.Provider,{value:T.current},r.createElement(Ee.Provider,{value:f},r.createElement(Z,{basename:L,location:a.location,navigationType:a.historyAction,navigator:y,future:{v7_relativeSplatPath:t.future.v7_relativeSplatPath}},a.initialized||t.future.v7_partialHydration?r.createElement(Te,{routes:t.routes,future:t.future,state:a}):n))))),null)}function Te(e){let{routes:n,future:t,state:i}=e;return ee(n,void 0,i,t)}const xe=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Le=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_e=r.forwardRef(function(n,t){let{onClick:i,relative:a,reloadDocument:o,replace:l,state:c,target:f,to:u,preventScrollReset:d,unstable_viewTransition:g}=n,h=fe(n,he),{basename:S}=r.useContext(te),E,_=!1;if(typeof u=="string"&&Le.test(u)&&(E=u,xe))try{let v=new URL(window.location.href),y=u.startsWith("//")?new URL(v.protocol+u):new URL(u),L=q(y.pathname,S);y.origin===v.origin&&L!=null?u=L+y.search+y.hash:_=!0}catch{}let T=ne(u,{relative:a}),D=Pe(u,{replace:l,state:c,target:f,preventScrollReset:d,relative:a,unstable_viewTransition:g});function x(v){i&&i(v),v.defaultPrevented||D(v)}return r.createElement("a",k({},h,{href:E||T,onClick:_||o?i:x,ref:t,target:f}))});var I;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(I||(I={}));var A;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(A||(A={}));function Pe(e,n){let{target:t,replace:i,state:a,preventScrollReset:o,relative:l,unstable_viewTransition:c}=n===void 0?{}:n,f=ae(),u=re(),d=ie(e,{relative:l});return r.useCallback(g=>{if(pe(g,t)){g.preventDefault();let h=i!==void 0?i:N(u)===N(d);f(e,{replace:h,state:a,preventScrollReset:o,relative:l,unstable_viewTransition:c})}},[u,f,d,i,a,t,e,o,l,c])}function Ie(){document.title="Problems List";const n=se().data,[t,i]=r.useState(0),[a,o]=r.useState([]),l=10;return r.useEffect(()=>{o(n.filter((c,f)=>f>=t*l&&f<(t+1)*l))},[t,n]),s.createElement("div",{className:"flex flex-col prose lg:prose-xl"},s.createElement("div",{className:"header flex justify-between my-4"},s.createElement("h1",{className:"my-3 font-bold"},"Problem List"),s.createElement(_e,{to:"/dashboard/problems/add"},s.createElement(G,{size:"sm",className:"me-4 w-24 h-10",theme:oe,gradientMonochrome:"success"},"Add"))),s.createElement(p,null,s.createElement(p.Head,null,s.createElement(p.HeadCell,null,"Problem Code"),s.createElement(p.HeadCell,null,"Title"),s.createElement(p.HeadCell,null,"Active Date"),s.createElement(p.HeadCell,null,"Level"),s.createElement(p.HeadCell,null,"Action")),s.createElement(p.Body,{className:"divide-y"},a.map((c,f)=>{const d=new DOMParser().parseFromString(de(c.level),"text/html");return s.createElement(p.Row,{key:f,className:"bg-white dark:border-gray-700 dark:bg-gray-800"},s.createElement(p.Cell,{className:"whitespace-nowrap font-medium text-gray-900 dark:text-white"},c.code),s.createElement(p.Cell,null,c.title),s.createElement(p.Cell,null,U(c.startDate).format("HH:mm DD-MM-YYYY")," -"," ",U(c.endDate).format("HH:mm DD-MM-YYYY")),s.createElement(p.Cell,null,s.createElement("div",{dangerouslySetInnerHTML:{__html:d.body.innerHTML}})),s.createElement(p.Cell,null,s.createElement("a",{href:`/dashboard/problems/${c.id}`,className:"font-medium hover:no-underline text-cyan-600 dark:text-cyan-500 me-2"},"Detail"),s.createElement("a",{href:`/dashboard/solutions/${c.id}`,className:"font-medium hover:no-underline text-green-600 dark:text-green-500"},"Submitions")))}))),s.createElement(le,{containerClassName:"pagination flex items-center my-4 mx-auto",pageClassName:"page-item p-2 font-semibold bg-gray-200 rounded-md mx-2 text-black",activeClassName:"active",onPageChange:c=>i(c.selected),pageCount:Math.ceil(n.length/l),breakLabel:"...",previousLabel:s.createElement(F.Provider,{value:{color:"#B8C1CC",size:"36px"}},s.createElement(ce,null)),nextLabel:s.createElement(F.Provider,{value:{color:"#B8C1CC",size:"36px"}},s.createElement(ue,null))}))}export{Ie as P,Me as R,Oe as c};