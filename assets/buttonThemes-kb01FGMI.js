import{G as ne}from"./iconBase-pjIET6RN.js";import{b as se,x as ge,g as de}from"./Toast-OISi9GcT.js";function fe(M){return ne({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm104 316.9c0 10.2-4.9 19.9-13.2 25.9L457.4 512l145.4 105.2c8.3 6 13.2 15.6 13.2 25.9V690c0 6.5-7.4 10.3-12.7 6.5l-246-178a7.95 7.95 0 0 1 0-12.9l246-178a8 8 0 0 1 12.7 6.5v46.8z"},child:[]}]})(M)}function he(M){return ne({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm154.7 454.5l-246 178c-5.3 3.8-12.7 0-12.7-6.5v-46.9c0-10.2 4.9-19.9 13.2-25.9L566.6 512 421.2 406.8c-8.3-6-13.2-15.6-13.2-25.9V334c0-6.5 7.4-10.3 12.7-6.5l246 178c4.4 3.2 4.4 9.8 0 13z"},child:[]}]})(M)}var oe={exports:{}};(function(M,ue){(function(ee,Z){M.exports=Z(se)})(ge,ee=>(()=>{var Z={703:(c,u,k)=>{var r=k(414);function I(){}function z(){}z.resetWarningCache=I,c.exports=function(){function h(ae,E,U,F,te,J){if(J!==r){var V=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw V.name="Invariant Violation",V}}function L(){return h}h.isRequired=h;var H={array:h,bigint:h,bool:h,func:h,number:h,object:h,string:h,symbol:h,any:h,arrayOf:L,element:h,elementType:h,instanceOf:L,node:h,objectOf:L,oneOf:L,oneOfType:L,shape:L,exact:L,checkPropTypes:z,resetWarningCache:I};return H.PropTypes=H,H}},697:(c,u,k)=>{c.exports=k(703)()},414:c=>{c.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:c=>{c.exports=ee}},re={};function m(c){var u=re[c];if(u!==void 0)return u.exports;var k=re[c]={exports:{}};return Z[c](k,k.exports,m),k.exports}m.n=c=>{var u=c&&c.__esModule?()=>c.default:()=>c;return m.d(u,{a:u}),u},m.d=(c,u)=>{for(var k in u)m.o(u,k)&&!m.o(c,k)&&Object.defineProperty(c,k,{enumerable:!0,get:u[k]})},m.o=(c,u)=>Object.prototype.hasOwnProperty.call(c,u),m.r=c=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})};var Q={};return(()=>{m.r(Q),m.d(Q,{default:()=>ie});var c=m(98),u=m.n(c),k=m(697),r=m.n(k);function I(){return I=Object.assign?Object.assign.bind():function(t){for(var o=1;o<arguments.length;o++){var l=arguments[o];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s])}return t},I.apply(this,arguments)}var z=function(t){var o=t.pageClassName,l=t.pageLinkClassName,s=t.page,S=t.selected,D=t.activeClassName,N=t.activeLinkClassName,a=t.getEventListener,e=t.pageSelectedHandler,d=t.href,n=t.extraAriaContext,i=t.pageLabelBuilder,g=t.rel,b=t.ariaLabel||"Page "+s+(n?" "+n:""),v=null;return S&&(v="page",b=t.ariaLabel||"Page "+s+" is your current page",o=o!==void 0?o+" "+D:D,l!==void 0?N!==void 0&&(l=l+" "+N):l=N),u().createElement("li",{className:o},u().createElement("a",I({rel:g,role:d?void 0:"button",className:l,href:d,tabIndex:S?"-1":"0","aria-label":b,"aria-current":v,onKeyPress:e},a(e)),i(s)))};z.propTypes={pageSelectedHandler:r().func.isRequired,selected:r().bool.isRequired,pageClassName:r().string,pageLinkClassName:r().string,activeClassName:r().string,activeLinkClassName:r().string,extraAriaContext:r().string,href:r().string,ariaLabel:r().string,page:r().number.isRequired,getEventListener:r().func.isRequired,pageLabelBuilder:r().func.isRequired,rel:r().string};const h=z;function L(){return L=Object.assign?Object.assign.bind():function(t){for(var o=1;o<arguments.length;o++){var l=arguments[o];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s])}return t},L.apply(this,arguments)}var H=function(t){var o=t.breakLabel,l=t.breakAriaLabel,s=t.breakClassName,S=t.breakLinkClassName,D=t.breakHandler,N=t.getEventListener,a=s||"break";return u().createElement("li",{className:a},u().createElement("a",L({className:S,role:"button",tabIndex:"0","aria-label":l,onKeyPress:D},N(D)),o))};H.propTypes={breakLabel:r().oneOfType([r().string,r().node]),breakAriaLabel:r().string,breakClassName:r().string,breakLinkClassName:r().string,breakHandler:r().func.isRequired,getEventListener:r().func.isRequired};const ae=H;function E(t){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return t??o}function U(t){return U=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},U(t)}function F(){return F=Object.assign?Object.assign.bind():function(t){for(var o=1;o<arguments.length;o++){var l=arguments[o];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s])}return t},F.apply(this,arguments)}function te(t,o){for(var l=0;l<o.length;l++){var s=o[l];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function J(t,o){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(l,s){return l.__proto__=s,l},J(t,o)}function V(t,o){if(o&&(U(o)==="object"||typeof o=="function"))return o;if(o!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return C(t)}function C(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function G(t){return G=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},G(t)}function y(t,o,l){return o in t?Object.defineProperty(t,o,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[o]=l,t}var X=function(t){(function(a,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),e&&J(a,e)})(N,t);var o,l,s,S,D=(s=N,S=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var a,e=G(s);if(S){var d=G(this).constructor;a=Reflect.construct(e,arguments,d)}else a=e.apply(this,arguments);return V(this,a)});function N(a){var e,d;return function(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}(this,N),y(C(e=D.call(this,a)),"handlePreviousPage",function(n){var i=e.state.selected;e.handleClick(n,null,i>0?i-1:void 0,{isPrevious:!0})}),y(C(e),"handleNextPage",function(n){var i=e.state.selected,g=e.props.pageCount;e.handleClick(n,null,i<g-1?i+1:void 0,{isNext:!0})}),y(C(e),"handlePageSelected",function(n,i){if(e.state.selected===n)return e.callActiveCallback(n),void e.handleClick(i,null,void 0,{isActive:!0});e.handleClick(i,null,n)}),y(C(e),"handlePageChange",function(n){e.state.selected!==n&&(e.setState({selected:n}),e.callCallback(n))}),y(C(e),"getEventListener",function(n){return y({},e.props.eventListener,n)}),y(C(e),"handleClick",function(n,i,g){var b=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},v=b.isPrevious,O=v!==void 0&&v,q=b.isNext,K=q!==void 0&&q,_=b.isBreak,P=_!==void 0&&_,R=b.isActive,A=R!==void 0&&R;n.preventDefault?n.preventDefault():n.returnValue=!1;var T=e.state.selected,p=e.props.onClick,w=g;if(p){var x=p({index:i,selected:T,nextSelectedPage:g,event:n,isPrevious:O,isNext:K,isBreak:P,isActive:A});if(x===!1)return;Number.isInteger(x)&&(w=x)}w!==void 0&&e.handlePageChange(w)}),y(C(e),"handleBreakClick",function(n,i){var g=e.state.selected;e.handleClick(i,n,g<n?e.getForwardJump():e.getBackwardJump(),{isBreak:!0})}),y(C(e),"callCallback",function(n){e.props.onPageChange!==void 0&&typeof e.props.onPageChange=="function"&&e.props.onPageChange({selected:n})}),y(C(e),"callActiveCallback",function(n){e.props.onPageActive!==void 0&&typeof e.props.onPageActive=="function"&&e.props.onPageActive({selected:n})}),y(C(e),"getElementPageRel",function(n){var i=e.state.selected,g=e.props,b=g.nextPageRel,v=g.prevPageRel,O=g.selectedPageRel;return i-1===n?v:i===n?O:i+1===n?b:void 0}),y(C(e),"pagination",function(){var n=[],i=e.props,g=i.pageRangeDisplayed,b=i.pageCount,v=i.marginPagesDisplayed,O=i.breakLabel,q=i.breakClassName,K=i.breakLinkClassName,_=i.breakAriaLabels,P=e.state.selected;if(b<=g)for(var R=0;R<b;R++)n.push(e.getPageElement(R));else{var A=g/2,T=g-A;P>b-g/2?A=g-(T=b-P):P<g/2&&(T=g-(A=P));var p,w,x=function(j){return e.getPageElement(j)},f=[];for(p=0;p<b;p++){var W=p+1;if(W<=v)f.push({type:"page",index:p,display:x(p)});else if(W>b-v)f.push({type:"page",index:p,display:x(p)});else if(p>=P-A&&p<=P+(P===0&&g>1?T-1:T))f.push({type:"page",index:p,display:x(p)});else if(O&&f.length>0&&f[f.length-1].display!==w&&(g>0||v>0)){var $=p<P?_.backward:_.forward;w=u().createElement(ae,{key:p,breakAriaLabel:$,breakLabel:O,breakClassName:q,breakLinkClassName:K,breakHandler:e.handleBreakClick.bind(null,p),getEventListener:e.getEventListener}),f.push({type:"break",index:p,display:w})}}f.forEach(function(j,B){var Y=j;j.type==="break"&&f[B-1]&&f[B-1].type==="page"&&f[B+1]&&f[B+1].type==="page"&&f[B+1].index-f[B-1].index<=2&&(Y={type:"page",index:j.index,display:x(j.index)}),n.push(Y.display)})}return n}),a.initialPage!==void 0&&a.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(a.initialPage,") and forcePage (").concat(a.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),d=a.initialPage?a.initialPage:a.forcePage?a.forcePage:0,e.state={selected:d},e}return o=N,(l=[{key:"componentDidMount",value:function(){var a=this.props,e=a.initialPage,d=a.disableInitialCallback,n=a.extraAriaContext,i=a.pageCount,g=a.forcePage;e===void 0||d||this.callCallback(e),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(i)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(i,"). Did you forget a Math.ceil()?")),e!==void 0&&e>i-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(e," > ").concat(i-1,").")),g!==void 0&&g>i-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(g," > ").concat(i-1,")."))}},{key:"componentDidUpdate",value:function(a){this.props.forcePage!==void 0&&this.props.forcePage!==a.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(a.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var a=this.state.selected,e=this.props,d=e.pageCount,n=a+e.pageRangeDisplayed;return n>=d?d-1:n}},{key:"getBackwardJump",value:function(){var a=this.state.selected-this.props.pageRangeDisplayed;return a<0?0:a}},{key:"getElementHref",value:function(a){var e=this.props,d=e.hrefBuilder,n=e.pageCount,i=e.hrefAllControls;if(d)return i||a>=0&&a<n?d(a+1,n,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(a){var e=a===this.state.selected;if(this.props.ariaLabelBuilder&&a>=0&&a<this.props.pageCount){var d=this.props.ariaLabelBuilder(a+1,e);return this.props.extraAriaContext&&!e&&(d=d+" "+this.props.extraAriaContext),d}}},{key:"getPageElement",value:function(a){var e=this.state.selected,d=this.props,n=d.pageClassName,i=d.pageLinkClassName,g=d.activeClassName,b=d.activeLinkClassName,v=d.extraAriaContext,O=d.pageLabelBuilder;return u().createElement(h,{key:a,pageSelectedHandler:this.handlePageSelected.bind(null,a),selected:e===a,rel:this.getElementPageRel(a),pageClassName:n,pageLinkClassName:i,activeClassName:g,activeLinkClassName:b,extraAriaContext:v,href:this.getElementHref(a),ariaLabel:this.ariaLabelBuilder(a),page:a+1,pageLabelBuilder:O,getEventListener:this.getEventListener})}},{key:"render",value:function(){var a=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&a!==void 0)return a&&a(this.props);var e=this.props,d=e.disabledClassName,n=e.disabledLinkClassName,i=e.pageCount,g=e.className,b=e.containerClassName,v=e.previousLabel,O=e.previousClassName,q=e.previousLinkClassName,K=e.previousAriaLabel,_=e.prevRel,P=e.nextLabel,R=e.nextClassName,A=e.nextLinkClassName,T=e.nextAriaLabel,p=e.nextRel,w=this.state.selected,x=w===0,f=w===i-1,W="".concat(E(O)).concat(x?" ".concat(E(d)):""),$="".concat(E(R)).concat(f?" ".concat(E(d)):""),j="".concat(E(q)).concat(x?" ".concat(E(n)):""),B="".concat(E(A)).concat(f?" ".concat(E(n)):""),Y=x?"true":"false",le=f?"true":"false";return u().createElement("ul",{className:g||b,role:"navigation","aria-label":"Pagination"},u().createElement("li",{className:W},u().createElement("a",F({className:j,href:this.getElementHref(w-1),tabIndex:x?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":Y,"aria-label":K,rel:_},this.getEventListener(this.handlePreviousPage)),v)),this.pagination(),u().createElement("li",{className:$},u().createElement("a",F({className:B,href:this.getElementHref(w+1),tabIndex:f?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":le,"aria-label":T,rel:p},this.getEventListener(this.handleNextPage)),P)))}}])&&te(o.prototype,l),Object.defineProperty(o,"prototype",{writable:!1}),N}(c.Component);y(X,"propTypes",{pageCount:r().number.isRequired,pageRangeDisplayed:r().number,marginPagesDisplayed:r().number,previousLabel:r().node,previousAriaLabel:r().string,prevPageRel:r().string,prevRel:r().string,nextLabel:r().node,nextAriaLabel:r().string,nextPageRel:r().string,nextRel:r().string,breakLabel:r().oneOfType([r().string,r().node]),breakAriaLabels:r().shape({forward:r().string,backward:r().string}),hrefBuilder:r().func,hrefAllControls:r().bool,onPageChange:r().func,onPageActive:r().func,onClick:r().func,initialPage:r().number,forcePage:r().number,disableInitialCallback:r().bool,containerClassName:r().string,className:r().string,pageClassName:r().string,pageLinkClassName:r().string,pageLabelBuilder:r().func,activeClassName:r().string,activeLinkClassName:r().string,previousClassName:r().string,nextClassName:r().string,previousLinkClassName:r().string,nextLinkClassName:r().string,disabledClassName:r().string,disabledLinkClassName:r().string,breakClassName:r().string,breakLinkClassName:r().string,extraAriaContext:r().string,ariaLabelBuilder:r().func,eventListener:r().string,renderOnZeroPageCount:r().func,selectedPageRel:r().string}),y(X,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(t){return t},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const ie=X})(),Q})())})(oe);var ce=oe.exports;const ve=de(ce),me={base:"transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-xl duration-300 group flex items-stretch items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow]",fullSized:"w-full",color:{dark:"text-white bg-gray-800 border border-transparent enabled:hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:enabled:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700",failure:"text-white bg-red-700 border border-transparent enabled:hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:enabled:hover:bg-red-700 dark:focus:ring-red-900",gray:"text-gray-900 bg-white border border-gray-200 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 :ring-cyan-700 focus:text-cyan-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:enabled:hover:text-white dark:enabled:hover:bg-gray-700 focus:ring-4",info:"text-white bg-cyan-700 border border-transparent enabled:hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800",light:"text-gray-900 bg-white border border-gray-300 enabled:hover:bg-gray-100 focus:ring-4 focus:ring-cyan-300 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:enabled:hover:bg-gray-700 dark:enabled:hover:border-gray-700 dark:focus:ring-gray-700",purple:"text-white bg-purple-700 border border-transparent enabled:hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:enabled:hover:bg-purple-700 dark:focus:ring-purple-900",success:"text-white bg-green-700 border border-transparent enabled:hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:enabled:hover:bg-green-700 dark:focus:ring-green-800",warning:"text-white bg-yellow-400 border border-transparent enabled:hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900",blue:"text-white bg-blue-700 border border-transparent enabled:hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",cyan:"text-cyan-900 bg-white border border-cyan-300 enabled:hover:bg-cyan-100 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:text-white dark:border-cyan-600 dark:enabled:hover:bg-cyan-700 dark:enabled:hover:border-cyan-700 dark:focus:ring-cyan-700",green:"text-green-900 bg-white border border-green-300 enabled:hover:bg-green-100 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:text-white dark:border-green-600 dark:enabled:hover:bg-green-700 dark:enabled:hover:border-green-700 dark:focus:ring-green-700",indigo:"text-indigo-900 bg-white border border-indigo-300 enabled:hover:bg-indigo-100 focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:text-white dark:border-indigo-600 dark:enabled:hover:bg-indigo-700 dark:enabled:hover:border-indigo-700 dark:focus:ring-indigo-700",lime:"text-lime-900 bg-white border border-lime-300 enabled:hover:bg-lime-100 focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:text-white dark:border-lime-600 dark:enabled:hover:bg-lime-700 dark:enabled:hover:border-lime-700 dark:focus:ring-lime-700",pink:"text-pink-900 bg-white border border-pink-300 enabled:hover:bg-pink-100 focus:ring-4 focus:ring-pink-300 dark:bg-pink-600 dark:text-white dark:border-pink-600 dark:enabled:hover:bg-pink-700 dark:enabled:hover:border-pink-700 dark:focus:ring-pink-700",red:"text-red-900 bg-white border border-red-300 enabled:hover:bg-red-100 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:text-white dark:border-red-600 dark:enabled:hover:bg-red-700 dark:enabled:hover:border-red-700 dark:focus:ring-red-700",teal:"text-teal-900 bg-white border border-teal-300 enabled:hover:bg-teal-100 focus:ring-4 focus:ring-teal-300 dark:bg-teal-600 dark:text-white dark:border-teal-600 dark:enabled:hover:bg-teal-700 dark:enabled:hover:border-teal-700 dark:focus:ring-teal-700",yellow:"text-yellow-900 bg-white border border-yellow-300 enabled:hover:bg-yellow-100 focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-600 dark:text-white dark:border-yellow-600 dark:enabled:hover:bg-yellow-700 dark:enabled:hover:border-yellow-700 dark:focus:ring-yellow-700"},disabled:"cursor-not-allowed opacity-50",isProcessing:"cursor-wait",spinnerSlot:"absolute h-full top-0 flex items-center animate-fade-in",spinnerLeftPosition:{xs:"left-2",sm:"left-3",md:"left-4",lg:"left-5",xl:"left-6"},gradient:{cyan:"text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",failure:"text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800",info:"text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 ",lime:"text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800",pink:"text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800",purple:"text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800",success:"text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800",teal:"text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800"},gradientDuoTone:{cyanToBlue:"text-white bg-gradient-to-r from-cyan-500 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",greenToBlue:"text-white bg-gradient-to-br from-green-400 to-cyan-600 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800",pinkToOrange:"text-white bg-gradient-to-br from-pink-500 to-orange-400 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800",purpleToBlue:"text-white bg-gradient-to-br from-purple-600 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",purpleToPink:"text-white bg-gradient-to-r from-purple-500 to-pink-500 enabled:hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800",redToYellow:"text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400",tealToLime:"text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 enabled:hover:bg-gradient-to-l enabled:hover:from-teal-200 enabled:hover:to-lime-200 enabled:hover:text-gray-900 focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700"},inner:{base:"flex items-stretch items-center transition-all duration-200",position:{none:"",start:"rounded-r-none",middle:"rounded-none",end:"rounded-l-none"},outline:"border border-transparent",isProcessingPadding:{xs:"pl-8",sm:"pl-10",md:"pl-12",lg:"pl-16",xl:"pl-20"}},label:"ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cyan-200 text-xs font-semibold text-cyan-800",outline:{color:{gray:"border border-gray-900 dark:border-white",default:"border-3",light:""},off:"",on:"flex justify-center bg-white text-gray-900 transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit dark:bg-gray-900 dark:text-white w-full",pill:{off:"rounded-md",on:"rounded-full"}},pill:{off:"rounded-lg",on:"rounded-full"},size:{xs:"text-xs px-2 py-1",sm:"text-sm px-3 py-1.5",md:"text-sm px-4 py-2",lg:"text-base px-5 py-2.5",xl:"text-base px-6 py-3"}};export{fe as A,ve as R,he as a,me as b};
