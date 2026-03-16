(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function tc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Bs={exports:{}},_={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qn=Symbol.for("react.element"),nc=Symbol.for("react.portal"),rc=Symbol.for("react.fragment"),oc=Symbol.for("react.strict_mode"),ic=Symbol.for("react.profiler"),lc=Symbol.for("react.provider"),sc=Symbol.for("react.context"),ac=Symbol.for("react.forward_ref"),uc=Symbol.for("react.suspense"),cc=Symbol.for("react.memo"),dc=Symbol.for("react.lazy"),Gl=Symbol.iterator;function fc(e){return e===null||typeof e!="object"?null:(e=Gl&&e[Gl]||e["@@iterator"],typeof e=="function"?e:null)}var Fs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Us=Object.assign,Vs={};function on(e,t,n){this.props=e,this.context=t,this.refs=Vs,this.updater=n||Fs}on.prototype.isReactComponent={};on.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};on.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $s(){}$s.prototype=on.prototype;function ji(e,t,n){this.props=e,this.context=t,this.refs=Vs,this.updater=n||Fs}var Wi=ji.prototype=new $s;Wi.constructor=ji;Us(Wi,on.prototype);Wi.isPureReactComponent=!0;var Il=Array.isArray,qs=Object.prototype.hasOwnProperty,Oi={current:null},Ys={key:!0,ref:!0,__self:!0,__source:!0};function Ks(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)qs.call(t,r)&&!Ys.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:qn,type:e,key:i,ref:l,props:o,_owner:Oi.current}}function pc(e,t){return{$$typeof:qn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function bi(e){return typeof e=="object"&&e!==null&&e.$$typeof===qn}function hc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ll=/\/+/g;function wo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hc(""+e.key):t.toString(36)}function vr(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case qn:case nc:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+wo(l,0):r,Il(o)?(n="",e!=null&&(n=e.replace(Ll,"$&/")+"/"),vr(o,t,n,"",function(c){return c})):o!=null&&(bi(o)&&(o=pc(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Ll,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Il(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+wo(i,s);l+=vr(i,t,n,a,o)}else if(a=fc(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+wo(i,s++),l+=vr(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function tr(e,t,n){if(e==null)return e;var r=[],o=0;return vr(e,r,"","",function(i){return t.call(n,i,o++)}),r}function mc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var le={current:null},wr={transition:null},yc={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:wr,ReactCurrentOwner:Oi};function Xs(){throw Error("act(...) is not supported in production builds of React.")}_.Children={map:tr,forEach:function(e,t,n){tr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return tr(e,function(){t++}),t},toArray:function(e){return tr(e,function(t){return t})||[]},only:function(e){if(!bi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_.Component=on;_.Fragment=rc;_.Profiler=ic;_.PureComponent=ji;_.StrictMode=oc;_.Suspense=uc;_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yc;_.act=Xs;_.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Us({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Oi.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)qs.call(t,a)&&!Ys.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:qn,type:e.type,key:o,ref:i,props:r,_owner:l}};_.createContext=function(e){return e={$$typeof:sc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:lc,_context:e},e.Consumer=e};_.createElement=Ks;_.createFactory=function(e){var t=Ks.bind(null,e);return t.type=e,t};_.createRef=function(){return{current:null}};_.forwardRef=function(e){return{$$typeof:ac,render:e}};_.isValidElement=bi;_.lazy=function(e){return{$$typeof:dc,_payload:{_status:-1,_result:e},_init:mc}};_.memo=function(e,t){return{$$typeof:cc,type:e,compare:t===void 0?null:t}};_.startTransition=function(e){var t=wr.transition;wr.transition={};try{e()}finally{wr.transition=t}};_.unstable_act=Xs;_.useCallback=function(e,t){return le.current.useCallback(e,t)};_.useContext=function(e){return le.current.useContext(e)};_.useDebugValue=function(){};_.useDeferredValue=function(e){return le.current.useDeferredValue(e)};_.useEffect=function(e,t){return le.current.useEffect(e,t)};_.useId=function(){return le.current.useId()};_.useImperativeHandle=function(e,t,n){return le.current.useImperativeHandle(e,t,n)};_.useInsertionEffect=function(e,t){return le.current.useInsertionEffect(e,t)};_.useLayoutEffect=function(e,t){return le.current.useLayoutEffect(e,t)};_.useMemo=function(e,t){return le.current.useMemo(e,t)};_.useReducer=function(e,t,n){return le.current.useReducer(e,t,n)};_.useRef=function(e){return le.current.useRef(e)};_.useState=function(e){return le.current.useState(e)};_.useSyncExternalStore=function(e,t,n){return le.current.useSyncExternalStore(e,t,n)};_.useTransition=function(){return le.current.useTransition()};_.version="18.3.1";Bs.exports=_;var Ge=Bs.exports;const ko=tc(Ge);var Vo={},Zs={exports:{}},ge={},Js={exports:{}},ea={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,R){var z=E.length;E.push(R);e:for(;0<z;){var B=z-1>>>1,q=E[B];if(0<o(q,R))E[B]=R,E[z]=q,z=B;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var R=E[0],z=E.pop();if(z!==R){E[0]=z;e:for(var B=0,q=E.length,Jn=q>>>1;B<Jn;){var yt=2*(B+1)-1,vo=E[yt],gt=yt+1,er=E[gt];if(0>o(vo,z))gt<q&&0>o(er,vo)?(E[B]=er,E[gt]=z,B=gt):(E[B]=vo,E[yt]=z,B=yt);else if(gt<q&&0>o(er,z))E[B]=er,E[gt]=z,B=gt;else break e}}return R}function o(E,R){var z=E.sortIndex-R.sortIndex;return z!==0?z:E.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],c=[],y=1,m=null,p=3,w=!1,k=!1,h=!1,N=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(E){for(var R=n(c);R!==null;){if(R.callback===null)r(c);else if(R.startTime<=E)r(c),R.sortIndex=R.expirationTime,t(a,R);else break;R=n(c)}}function g(E){if(h=!1,f(E),!k)if(n(a)!==null)k=!0,yo(C);else{var R=n(c);R!==null&&go(g,R.startTime-E)}}function C(E,R){k=!1,h&&(h=!1,d(P),P=-1),w=!0;var z=p;try{for(f(R),m=n(a);m!==null&&(!(m.expirationTime>R)||E&&!Ae());){var B=m.callback;if(typeof B=="function"){m.callback=null,p=m.priorityLevel;var q=B(m.expirationTime<=R);R=e.unstable_now(),typeof q=="function"?m.callback=q:m===n(a)&&r(a),f(R)}else r(a);m=n(a)}if(m!==null)var Jn=!0;else{var yt=n(c);yt!==null&&go(g,yt.startTime-R),Jn=!1}return Jn}finally{m=null,p=z,w=!1}}var x=!1,A=null,P=-1,b=5,H=-1;function Ae(){return!(e.unstable_now()-H<b)}function an(){if(A!==null){var E=e.unstable_now();H=E;var R=!0;try{R=A(!0,E)}finally{R?un():(x=!1,A=null)}}else x=!1}var un;if(typeof u=="function")un=function(){u(an)};else if(typeof MessageChannel<"u"){var Tl=new MessageChannel,ec=Tl.port2;Tl.port1.onmessage=an,un=function(){ec.postMessage(null)}}else un=function(){N(an,0)};function yo(E){A=E,x||(x=!0,un())}function go(E,R){P=N(function(){E(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){k||w||(k=!0,yo(C))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(E){switch(p){case 1:case 2:case 3:var R=3;break;default:R=p}var z=p;p=R;try{return E()}finally{p=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,R){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var z=p;p=E;try{return R()}finally{p=z}},e.unstable_scheduleCallback=function(E,R,z){var B=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?B+z:B):z=B,E){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=z+q,E={id:y++,callback:R,priorityLevel:E,startTime:z,expirationTime:q,sortIndex:-1},z>B?(E.sortIndex=z,t(c,E),n(a)===null&&E===n(c)&&(h?(d(P),P=-1):h=!0,go(g,z-B))):(E.sortIndex=q,t(a,E),k||w||(k=!0,yo(C))),E},e.unstable_shouldYield=Ae,e.unstable_wrapCallback=function(E){var R=p;return function(){var z=p;p=R;try{return E.apply(this,arguments)}finally{p=z}}}})(ea);Js.exports=ea;var gc=Js.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vc=Ge,ye=gc;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ta=new Set,Hn={};function _t(e,t){Xt(e,t),Xt(e+"Capture",t)}function Xt(e,t){for(Hn[e]=t,e=0;e<t.length;e++)ta.add(t[e])}var Ue=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$o=Object.prototype.hasOwnProperty,wc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ql={},Ml={};function kc(e){return $o.call(Ml,e)?!0:$o.call(Ql,e)?!1:wc.test(e)?Ml[e]=!0:(Ql[e]=!0,!1)}function Cc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Sc(e,t,n,r){if(t===null||typeof t>"u"||Cc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function se(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var J={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){J[e]=new se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];J[t]=new se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){J[e]=new se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){J[e]=new se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){J[e]=new se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){J[e]=new se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){J[e]=new se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){J[e]=new se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){J[e]=new se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Bi=/[\-:]([a-z])/g;function Fi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Bi,Fi);J[t]=new se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Bi,Fi);J[t]=new se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Bi,Fi);J[t]=new se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){J[e]=new se(e,1,!1,e.toLowerCase(),null,!1,!1)});J.xlinkHref=new se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){J[e]=new se(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ui(e,t,n,r){var o=J.hasOwnProperty(t)?J[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Sc(t,n,o,r)&&(n=null),r||o===null?kc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ye=vc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nr=Symbol.for("react.element"),Tt=Symbol.for("react.portal"),Gt=Symbol.for("react.fragment"),Vi=Symbol.for("react.strict_mode"),qo=Symbol.for("react.profiler"),na=Symbol.for("react.provider"),ra=Symbol.for("react.context"),$i=Symbol.for("react.forward_ref"),Yo=Symbol.for("react.suspense"),Ko=Symbol.for("react.suspense_list"),qi=Symbol.for("react.memo"),Xe=Symbol.for("react.lazy"),oa=Symbol.for("react.offscreen"),jl=Symbol.iterator;function cn(e){return e===null||typeof e!="object"?null:(e=jl&&e[jl]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Co;function vn(e){if(Co===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Co=t&&t[1]||""}return`
`+Co+e}var So=!1;function Eo(e,t){if(!e||So)return"";So=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{So=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?vn(e):""}function Ec(e){switch(e.tag){case 5:return vn(e.type);case 16:return vn("Lazy");case 13:return vn("Suspense");case 19:return vn("SuspenseList");case 0:case 2:case 15:return e=Eo(e.type,!1),e;case 11:return e=Eo(e.type.render,!1),e;case 1:return e=Eo(e.type,!0),e;default:return""}}function Xo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gt:return"Fragment";case Tt:return"Portal";case qo:return"Profiler";case Vi:return"StrictMode";case Yo:return"Suspense";case Ko:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ra:return(e.displayName||"Context")+".Consumer";case na:return(e._context.displayName||"Context")+".Provider";case $i:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qi:return t=e.displayName||null,t!==null?t:Xo(e.type)||"Memo";case Xe:t=e._payload,e=e._init;try{return Xo(e(t))}catch{}}return null}function xc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xo(t);case 8:return t===Vi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ia(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ac(e){var t=ia(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function rr(e){e._valueTracker||(e._valueTracker=Ac(e))}function la(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ia(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function _r(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zo(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Wl(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=dt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function sa(e,t){t=t.checked,t!=null&&Ui(e,"checked",t,!1)}function Jo(e,t){sa(e,t);var n=dt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ei(e,t.type,n):t.hasOwnProperty("defaultValue")&&ei(e,t.type,dt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ol(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ei(e,t,n){(t!=="number"||_r(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wn=Array.isArray;function Ut(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ti(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(v(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function bl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(v(92));if(wn(n)){if(1<n.length)throw Error(v(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dt(n)}}function aa(e,t){var n=dt(t.value),r=dt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Bl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ua(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ni(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ua(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var or,ca=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(or=or||document.createElement("div"),or.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=or.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Sn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pc=["Webkit","ms","Moz","O"];Object.keys(Sn).forEach(function(e){Pc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Sn[t]=Sn[e]})});function da(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Sn.hasOwnProperty(e)&&Sn[e]?(""+t).trim():t+"px"}function fa(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=da(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Nc=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ri(e,t){if(t){if(Nc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(v(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(v(61))}if(t.style!=null&&typeof t.style!="object")throw Error(v(62))}}function oi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ii=null;function Yi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var li=null,Vt=null,$t=null;function Fl(e){if(e=Xn(e)){if(typeof li!="function")throw Error(v(280));var t=e.stateNode;t&&(t=oo(t),li(e.stateNode,e.type,t))}}function pa(e){Vt?$t?$t.push(e):$t=[e]:Vt=e}function ha(){if(Vt){var e=Vt,t=$t;if($t=Vt=null,Fl(e),t)for(e=0;e<t.length;e++)Fl(t[e])}}function ma(e,t){return e(t)}function ya(){}var xo=!1;function ga(e,t,n){if(xo)return e(t,n);xo=!0;try{return ma(e,t,n)}finally{xo=!1,(Vt!==null||$t!==null)&&(ya(),ha())}}function Tn(e,t){var n=e.stateNode;if(n===null)return null;var r=oo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(v(231,t,typeof n));return n}var si=!1;if(Ue)try{var dn={};Object.defineProperty(dn,"passive",{get:function(){si=!0}}),window.addEventListener("test",dn,dn),window.removeEventListener("test",dn,dn)}catch{si=!1}function Rc(e,t,n,r,o,i,l,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(y){this.onError(y)}}var En=!1,Hr=null,Dr=!1,ai=null,zc={onError:function(e){En=!0,Hr=e}};function _c(e,t,n,r,o,i,l,s,a){En=!1,Hr=null,Rc.apply(zc,arguments)}function Hc(e,t,n,r,o,i,l,s,a){if(_c.apply(this,arguments),En){if(En){var c=Hr;En=!1,Hr=null}else throw Error(v(198));Dr||(Dr=!0,ai=c)}}function Ht(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function va(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ul(e){if(Ht(e)!==e)throw Error(v(188))}function Dc(e){var t=e.alternate;if(!t){if(t=Ht(e),t===null)throw Error(v(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ul(o),e;if(i===r)return Ul(o),t;i=i.sibling}throw Error(v(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(v(189))}}if(n.alternate!==r)throw Error(v(190))}if(n.tag!==3)throw Error(v(188));return n.stateNode.current===n?e:t}function wa(e){return e=Dc(e),e!==null?ka(e):null}function ka(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ka(e);if(t!==null)return t;e=e.sibling}return null}var Ca=ye.unstable_scheduleCallback,Vl=ye.unstable_cancelCallback,Tc=ye.unstable_shouldYield,Gc=ye.unstable_requestPaint,F=ye.unstable_now,Ic=ye.unstable_getCurrentPriorityLevel,Ki=ye.unstable_ImmediatePriority,Sa=ye.unstable_UserBlockingPriority,Tr=ye.unstable_NormalPriority,Lc=ye.unstable_LowPriority,Ea=ye.unstable_IdlePriority,eo=null,Qe=null;function Qc(e){if(Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(eo,e,void 0,(e.current.flags&128)===128)}catch{}}var _e=Math.clz32?Math.clz32:Wc,Mc=Math.log,jc=Math.LN2;function Wc(e){return e>>>=0,e===0?32:31-(Mc(e)/jc|0)|0}var ir=64,lr=4194304;function kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Gr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=kn(s):(i&=l,i!==0&&(r=kn(i)))}else l=n&~o,l!==0?r=kn(l):i!==0&&(r=kn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-_e(t),o=1<<n,r|=e[n],t&=~o;return r}function Oc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-_e(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=Oc(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function ui(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xa(){var e=ir;return ir<<=1,!(ir&4194240)&&(ir=64),e}function Ao(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Yn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-_e(t),e[t]=n}function Bc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-_e(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Xi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-_e(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var T=0;function Aa(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pa,Zi,Na,Ra,za,ci=!1,sr=[],rt=null,ot=null,it=null,Gn=new Map,In=new Map,Je=[],Fc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $l(e,t){switch(e){case"focusin":case"focusout":rt=null;break;case"dragenter":case"dragleave":ot=null;break;case"mouseover":case"mouseout":it=null;break;case"pointerover":case"pointerout":Gn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":In.delete(t.pointerId)}}function fn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Xn(t),t!==null&&Zi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Uc(e,t,n,r,o){switch(t){case"focusin":return rt=fn(rt,e,t,n,r,o),!0;case"dragenter":return ot=fn(ot,e,t,n,r,o),!0;case"mouseover":return it=fn(it,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Gn.set(i,fn(Gn.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,In.set(i,fn(In.get(i)||null,e,t,n,r,o)),!0}return!1}function _a(e){var t=kt(e.target);if(t!==null){var n=Ht(t);if(n!==null){if(t=n.tag,t===13){if(t=va(n),t!==null){e.blockedOn=t,za(e.priority,function(){Na(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=di(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ii=r,n.target.dispatchEvent(r),ii=null}else return t=Xn(n),t!==null&&Zi(t),e.blockedOn=n,!1;t.shift()}return!0}function ql(e,t,n){kr(e)&&n.delete(t)}function Vc(){ci=!1,rt!==null&&kr(rt)&&(rt=null),ot!==null&&kr(ot)&&(ot=null),it!==null&&kr(it)&&(it=null),Gn.forEach(ql),In.forEach(ql)}function pn(e,t){e.blockedOn===t&&(e.blockedOn=null,ci||(ci=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,Vc)))}function Ln(e){function t(o){return pn(o,e)}if(0<sr.length){pn(sr[0],e);for(var n=1;n<sr.length;n++){var r=sr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rt!==null&&pn(rt,e),ot!==null&&pn(ot,e),it!==null&&pn(it,e),Gn.forEach(t),In.forEach(t),n=0;n<Je.length;n++)r=Je[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Je.length&&(n=Je[0],n.blockedOn===null);)_a(n),n.blockedOn===null&&Je.shift()}var qt=Ye.ReactCurrentBatchConfig,Ir=!0;function $c(e,t,n,r){var o=T,i=qt.transition;qt.transition=null;try{T=1,Ji(e,t,n,r)}finally{T=o,qt.transition=i}}function qc(e,t,n,r){var o=T,i=qt.transition;qt.transition=null;try{T=4,Ji(e,t,n,r)}finally{T=o,qt.transition=i}}function Ji(e,t,n,r){if(Ir){var o=di(e,t,n,r);if(o===null)Io(e,t,r,Lr,n),$l(e,r);else if(Uc(o,e,t,n,r))r.stopPropagation();else if($l(e,r),t&4&&-1<Fc.indexOf(e)){for(;o!==null;){var i=Xn(o);if(i!==null&&Pa(i),i=di(e,t,n,r),i===null&&Io(e,t,r,Lr,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Io(e,t,r,null,n)}}var Lr=null;function di(e,t,n,r){if(Lr=null,e=Yi(r),e=kt(e),e!==null)if(t=Ht(e),t===null)e=null;else if(n=t.tag,n===13){if(e=va(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Lr=e,null}function Ha(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ic()){case Ki:return 1;case Sa:return 4;case Tr:case Lc:return 16;case Ea:return 536870912;default:return 16}default:return 16}}var tt=null,el=null,Cr=null;function Da(){if(Cr)return Cr;var e,t=el,n=t.length,r,o="value"in tt?tt.value:tt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Cr=o.slice(e,1<r?1-r:void 0)}function Sr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ar(){return!0}function Yl(){return!1}function ve(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ar:Yl,this.isPropagationStopped=Yl,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ar)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ar)},persist:function(){},isPersistent:ar}),t}var ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=ve(ln),Kn=W({},ln,{view:0,detail:0}),Yc=ve(Kn),Po,No,hn,to=W({},Kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hn&&(hn&&e.type==="mousemove"?(Po=e.screenX-hn.screenX,No=e.screenY-hn.screenY):No=Po=0,hn=e),Po)},movementY:function(e){return"movementY"in e?e.movementY:No}}),Kl=ve(to),Kc=W({},to,{dataTransfer:0}),Xc=ve(Kc),Zc=W({},Kn,{relatedTarget:0}),Ro=ve(Zc),Jc=W({},ln,{animationName:0,elapsedTime:0,pseudoElement:0}),ed=ve(Jc),td=W({},ln,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nd=ve(td),rd=W({},ln,{data:0}),Xl=ve(rd),od={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},id={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ld={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ld[e])?!!t[e]:!1}function nl(){return sd}var ad=W({},Kn,{key:function(e){if(e.key){var t=od[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Sr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?id[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nl,charCode:function(e){return e.type==="keypress"?Sr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ud=ve(ad),cd=W({},to,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zl=ve(cd),dd=W({},Kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nl}),fd=ve(dd),pd=W({},ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),hd=ve(pd),md=W({},to,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yd=ve(md),gd=[9,13,27,32],rl=Ue&&"CompositionEvent"in window,xn=null;Ue&&"documentMode"in document&&(xn=document.documentMode);var vd=Ue&&"TextEvent"in window&&!xn,Ta=Ue&&(!rl||xn&&8<xn&&11>=xn),Jl=" ",es=!1;function Ga(e,t){switch(e){case"keyup":return gd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ia(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var It=!1;function wd(e,t){switch(e){case"compositionend":return Ia(t);case"keypress":return t.which!==32?null:(es=!0,Jl);case"textInput":return e=t.data,e===Jl&&es?null:e;default:return null}}function kd(e,t){if(It)return e==="compositionend"||!rl&&Ga(e,t)?(e=Da(),Cr=el=tt=null,It=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ta&&t.locale!=="ko"?null:t.data;default:return null}}var Cd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ts(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cd[e.type]:t==="textarea"}function La(e,t,n,r){pa(r),t=Qr(t,"onChange"),0<t.length&&(n=new tl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var An=null,Qn=null;function Sd(e){$a(e,0)}function no(e){var t=Mt(e);if(la(t))return e}function Ed(e,t){if(e==="change")return t}var Qa=!1;if(Ue){var zo;if(Ue){var _o="oninput"in document;if(!_o){var ns=document.createElement("div");ns.setAttribute("oninput","return;"),_o=typeof ns.oninput=="function"}zo=_o}else zo=!1;Qa=zo&&(!document.documentMode||9<document.documentMode)}function rs(){An&&(An.detachEvent("onpropertychange",Ma),Qn=An=null)}function Ma(e){if(e.propertyName==="value"&&no(Qn)){var t=[];La(t,Qn,e,Yi(e)),ga(Sd,t)}}function xd(e,t,n){e==="focusin"?(rs(),An=t,Qn=n,An.attachEvent("onpropertychange",Ma)):e==="focusout"&&rs()}function Ad(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return no(Qn)}function Pd(e,t){if(e==="click")return no(t)}function Nd(e,t){if(e==="input"||e==="change")return no(t)}function Rd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:Rd;function Mn(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!$o.call(t,o)||!De(e[o],t[o]))return!1}return!0}function os(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function is(e,t){var n=os(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=os(n)}}function ja(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ja(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wa(){for(var e=window,t=_r();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_r(e.document)}return t}function ol(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function zd(e){var t=Wa(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ja(n.ownerDocument.documentElement,n)){if(r!==null&&ol(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=is(n,i);var l=is(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var _d=Ue&&"documentMode"in document&&11>=document.documentMode,Lt=null,fi=null,Pn=null,pi=!1;function ls(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pi||Lt==null||Lt!==_r(r)||(r=Lt,"selectionStart"in r&&ol(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pn&&Mn(Pn,r)||(Pn=r,r=Qr(fi,"onSelect"),0<r.length&&(t=new tl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Lt)))}function ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qt={animationend:ur("Animation","AnimationEnd"),animationiteration:ur("Animation","AnimationIteration"),animationstart:ur("Animation","AnimationStart"),transitionend:ur("Transition","TransitionEnd")},Ho={},Oa={};Ue&&(Oa=document.createElement("div").style,"AnimationEvent"in window||(delete Qt.animationend.animation,delete Qt.animationiteration.animation,delete Qt.animationstart.animation),"TransitionEvent"in window||delete Qt.transitionend.transition);function ro(e){if(Ho[e])return Ho[e];if(!Qt[e])return e;var t=Qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Oa)return Ho[e]=t[n];return e}var ba=ro("animationend"),Ba=ro("animationiteration"),Fa=ro("animationstart"),Ua=ro("transitionend"),Va=new Map,ss="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pt(e,t){Va.set(e,t),_t(t,[e])}for(var Do=0;Do<ss.length;Do++){var To=ss[Do],Hd=To.toLowerCase(),Dd=To[0].toUpperCase()+To.slice(1);pt(Hd,"on"+Dd)}pt(ba,"onAnimationEnd");pt(Ba,"onAnimationIteration");pt(Fa,"onAnimationStart");pt("dblclick","onDoubleClick");pt("focusin","onFocus");pt("focusout","onBlur");pt(Ua,"onTransitionEnd");Xt("onMouseEnter",["mouseout","mouseover"]);Xt("onMouseLeave",["mouseout","mouseover"]);Xt("onPointerEnter",["pointerout","pointerover"]);Xt("onPointerLeave",["pointerout","pointerover"]);_t("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_t("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_t("onBeforeInput",["compositionend","keypress","textInput","paste"]);_t("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_t("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_t("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Td=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cn));function as(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Hc(r,t,void 0,e),e.currentTarget=null}function $a(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;as(o,s,c),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,c=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;as(o,s,c),i=a}}}if(Dr)throw e=ai,Dr=!1,ai=null,e}function I(e,t){var n=t[vi];n===void 0&&(n=t[vi]=new Set);var r=e+"__bubble";n.has(r)||(qa(t,e,2,!1),n.add(r))}function Go(e,t,n){var r=0;t&&(r|=4),qa(n,e,r,t)}var cr="_reactListening"+Math.random().toString(36).slice(2);function jn(e){if(!e[cr]){e[cr]=!0,ta.forEach(function(n){n!=="selectionchange"&&(Td.has(n)||Go(n,!1,e),Go(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cr]||(t[cr]=!0,Go("selectionchange",!1,t))}}function qa(e,t,n,r){switch(Ha(t)){case 1:var o=$c;break;case 4:o=qc;break;default:o=Ji}n=o.bind(null,t,n,e),o=void 0,!si||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Io(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=kt(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}ga(function(){var c=i,y=Yi(n),m=[];e:{var p=Va.get(e);if(p!==void 0){var w=tl,k=e;switch(e){case"keypress":if(Sr(n)===0)break e;case"keydown":case"keyup":w=ud;break;case"focusin":k="focus",w=Ro;break;case"focusout":k="blur",w=Ro;break;case"beforeblur":case"afterblur":w=Ro;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Kl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Xc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=fd;break;case ba:case Ba:case Fa:w=ed;break;case Ua:w=hd;break;case"scroll":w=Yc;break;case"wheel":w=yd;break;case"copy":case"cut":case"paste":w=nd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Zl}var h=(t&4)!==0,N=!h&&e==="scroll",d=h?p!==null?p+"Capture":null:p;h=[];for(var u=c,f;u!==null;){f=u;var g=f.stateNode;if(f.tag===5&&g!==null&&(f=g,d!==null&&(g=Tn(u,d),g!=null&&h.push(Wn(u,g,f)))),N)break;u=u.return}0<h.length&&(p=new w(p,k,null,n,y),m.push({event:p,listeners:h}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",p&&n!==ii&&(k=n.relatedTarget||n.fromElement)&&(kt(k)||k[Ve]))break e;if((w||p)&&(p=y.window===y?y:(p=y.ownerDocument)?p.defaultView||p.parentWindow:window,w?(k=n.relatedTarget||n.toElement,w=c,k=k?kt(k):null,k!==null&&(N=Ht(k),k!==N||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=c),w!==k)){if(h=Kl,g="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(h=Zl,g="onPointerLeave",d="onPointerEnter",u="pointer"),N=w==null?p:Mt(w),f=k==null?p:Mt(k),p=new h(g,u+"leave",w,n,y),p.target=N,p.relatedTarget=f,g=null,kt(y)===c&&(h=new h(d,u+"enter",k,n,y),h.target=f,h.relatedTarget=N,g=h),N=g,w&&k)t:{for(h=w,d=k,u=0,f=h;f;f=Dt(f))u++;for(f=0,g=d;g;g=Dt(g))f++;for(;0<u-f;)h=Dt(h),u--;for(;0<f-u;)d=Dt(d),f--;for(;u--;){if(h===d||d!==null&&h===d.alternate)break t;h=Dt(h),d=Dt(d)}h=null}else h=null;w!==null&&us(m,p,w,h,!1),k!==null&&N!==null&&us(m,N,k,h,!0)}}e:{if(p=c?Mt(c):window,w=p.nodeName&&p.nodeName.toLowerCase(),w==="select"||w==="input"&&p.type==="file")var C=Ed;else if(ts(p))if(Qa)C=Nd;else{C=Ad;var x=xd}else(w=p.nodeName)&&w.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=Pd);if(C&&(C=C(e,c))){La(m,C,n,y);break e}x&&x(e,p,c),e==="focusout"&&(x=p._wrapperState)&&x.controlled&&p.type==="number"&&ei(p,"number",p.value)}switch(x=c?Mt(c):window,e){case"focusin":(ts(x)||x.contentEditable==="true")&&(Lt=x,fi=c,Pn=null);break;case"focusout":Pn=fi=Lt=null;break;case"mousedown":pi=!0;break;case"contextmenu":case"mouseup":case"dragend":pi=!1,ls(m,n,y);break;case"selectionchange":if(_d)break;case"keydown":case"keyup":ls(m,n,y)}var A;if(rl)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else It?Ga(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Ta&&n.locale!=="ko"&&(It||P!=="onCompositionStart"?P==="onCompositionEnd"&&It&&(A=Da()):(tt=y,el="value"in tt?tt.value:tt.textContent,It=!0)),x=Qr(c,P),0<x.length&&(P=new Xl(P,e,null,n,y),m.push({event:P,listeners:x}),A?P.data=A:(A=Ia(n),A!==null&&(P.data=A)))),(A=vd?wd(e,n):kd(e,n))&&(c=Qr(c,"onBeforeInput"),0<c.length&&(y=new Xl("onBeforeInput","beforeinput",null,n,y),m.push({event:y,listeners:c}),y.data=A))}$a(m,t)})}function Wn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qr(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Tn(e,n),i!=null&&r.unshift(Wn(e,i,o)),i=Tn(e,t),i!=null&&r.push(Wn(e,i,o))),e=e.return}return r}function Dt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function us(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,o?(a=Tn(n,i),a!=null&&l.unshift(Wn(n,a,s))):o||(a=Tn(n,i),a!=null&&l.push(Wn(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Gd=/\r\n?/g,Id=/\u0000|\uFFFD/g;function cs(e){return(typeof e=="string"?e:""+e).replace(Gd,`
`).replace(Id,"")}function dr(e,t,n){if(t=cs(t),cs(e)!==t&&n)throw Error(v(425))}function Mr(){}var hi=null,mi=null;function yi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gi=typeof setTimeout=="function"?setTimeout:void 0,Ld=typeof clearTimeout=="function"?clearTimeout:void 0,ds=typeof Promise=="function"?Promise:void 0,Qd=typeof queueMicrotask=="function"?queueMicrotask:typeof ds<"u"?function(e){return ds.resolve(null).then(e).catch(Md)}:gi;function Md(e){setTimeout(function(){throw e})}function Lo(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Ln(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Ln(t)}function lt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function fs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var sn=Math.random().toString(36).slice(2),Le="__reactFiber$"+sn,On="__reactProps$"+sn,Ve="__reactContainer$"+sn,vi="__reactEvents$"+sn,jd="__reactListeners$"+sn,Wd="__reactHandles$"+sn;function kt(e){var t=e[Le];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ve]||n[Le]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fs(e);e!==null;){if(n=e[Le])return n;e=fs(e)}return t}e=n,n=e.parentNode}return null}function Xn(e){return e=e[Le]||e[Ve],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function oo(e){return e[On]||null}var wi=[],jt=-1;function ht(e){return{current:e}}function L(e){0>jt||(e.current=wi[jt],wi[jt]=null,jt--)}function G(e,t){jt++,wi[jt]=e.current,e.current=t}var ft={},re=ht(ft),ce=ht(!1),At=ft;function Zt(e,t){var n=e.type.contextTypes;if(!n)return ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function de(e){return e=e.childContextTypes,e!=null}function jr(){L(ce),L(re)}function ps(e,t,n){if(re.current!==ft)throw Error(v(168));G(re,t),G(ce,n)}function Ya(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(v(108,xc(e)||"Unknown",o));return W({},n,r)}function Wr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ft,At=re.current,G(re,e),G(ce,ce.current),!0}function hs(e,t,n){var r=e.stateNode;if(!r)throw Error(v(169));n?(e=Ya(e,t,At),r.__reactInternalMemoizedMergedChildContext=e,L(ce),L(re),G(re,e)):L(ce),G(ce,n)}var Oe=null,io=!1,Qo=!1;function Ka(e){Oe===null?Oe=[e]:Oe.push(e)}function Od(e){io=!0,Ka(e)}function mt(){if(!Qo&&Oe!==null){Qo=!0;var e=0,t=T;try{var n=Oe;for(T=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Oe=null,io=!1}catch(o){throw Oe!==null&&(Oe=Oe.slice(e+1)),Ca(Ki,mt),o}finally{T=t,Qo=!1}}return null}var Wt=[],Ot=0,Or=null,br=0,we=[],ke=0,Pt=null,be=1,Be="";function vt(e,t){Wt[Ot++]=br,Wt[Ot++]=Or,Or=e,br=t}function Xa(e,t,n){we[ke++]=be,we[ke++]=Be,we[ke++]=Pt,Pt=e;var r=be;e=Be;var o=32-_e(r)-1;r&=~(1<<o),n+=1;var i=32-_e(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,be=1<<32-_e(t)+o|n<<o|r,Be=i+e}else be=1<<i|n<<o|r,Be=e}function il(e){e.return!==null&&(vt(e,1),Xa(e,1,0))}function ll(e){for(;e===Or;)Or=Wt[--Ot],Wt[Ot]=null,br=Wt[--Ot],Wt[Ot]=null;for(;e===Pt;)Pt=we[--ke],we[ke]=null,Be=we[--ke],we[ke]=null,be=we[--ke],we[ke]=null}var me=null,he=null,Q=!1,ze=null;function Za(e,t){var n=Ce(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ms(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,me=e,he=lt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,me=e,he=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pt!==null?{id:be,overflow:Be}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ce(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,me=e,he=null,!0):!1;default:return!1}}function ki(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ci(e){if(Q){var t=he;if(t){var n=t;if(!ms(e,t)){if(ki(e))throw Error(v(418));t=lt(n.nextSibling);var r=me;t&&ms(e,t)?Za(r,n):(e.flags=e.flags&-4097|2,Q=!1,me=e)}}else{if(ki(e))throw Error(v(418));e.flags=e.flags&-4097|2,Q=!1,me=e}}}function ys(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;me=e}function fr(e){if(e!==me)return!1;if(!Q)return ys(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yi(e.type,e.memoizedProps)),t&&(t=he)){if(ki(e))throw Ja(),Error(v(418));for(;t;)Za(e,t),t=lt(t.nextSibling)}if(ys(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){he=lt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}he=null}}else he=me?lt(e.stateNode.nextSibling):null;return!0}function Ja(){for(var e=he;e;)e=lt(e.nextSibling)}function Jt(){he=me=null,Q=!1}function sl(e){ze===null?ze=[e]:ze.push(e)}var bd=Ye.ReactCurrentBatchConfig;function mn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(v(309));var r=n.stateNode}if(!r)throw Error(v(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(v(284));if(!n._owner)throw Error(v(290,e))}return e}function pr(e,t){throw e=Object.prototype.toString.call(t),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function gs(e){var t=e._init;return t(e._payload)}function eu(e){function t(d,u){if(e){var f=d.deletions;f===null?(d.deletions=[u],d.flags|=16):f.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function o(d,u){return d=ct(d,u),d.index=0,d.sibling=null,d}function i(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags|=2,u):f):(d.flags|=2,u)):(d.flags|=1048576,u)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,u,f,g){return u===null||u.tag!==6?(u=Fo(f,d.mode,g),u.return=d,u):(u=o(u,f),u.return=d,u)}function a(d,u,f,g){var C=f.type;return C===Gt?y(d,u,f.props.children,g,f.key):u!==null&&(u.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Xe&&gs(C)===u.type)?(g=o(u,f.props),g.ref=mn(d,u,f),g.return=d,g):(g=zr(f.type,f.key,f.props,null,d.mode,g),g.ref=mn(d,u,f),g.return=d,g)}function c(d,u,f,g){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=Uo(f,d.mode,g),u.return=d,u):(u=o(u,f.children||[]),u.return=d,u)}function y(d,u,f,g,C){return u===null||u.tag!==7?(u=xt(f,d.mode,g,C),u.return=d,u):(u=o(u,f),u.return=d,u)}function m(d,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Fo(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case nr:return f=zr(u.type,u.key,u.props,null,d.mode,f),f.ref=mn(d,null,u),f.return=d,f;case Tt:return u=Uo(u,d.mode,f),u.return=d,u;case Xe:var g=u._init;return m(d,g(u._payload),f)}if(wn(u)||cn(u))return u=xt(u,d.mode,f,null),u.return=d,u;pr(d,u)}return null}function p(d,u,f,g){var C=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return C!==null?null:s(d,u,""+f,g);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case nr:return f.key===C?a(d,u,f,g):null;case Tt:return f.key===C?c(d,u,f,g):null;case Xe:return C=f._init,p(d,u,C(f._payload),g)}if(wn(f)||cn(f))return C!==null?null:y(d,u,f,g,null);pr(d,f)}return null}function w(d,u,f,g,C){if(typeof g=="string"&&g!==""||typeof g=="number")return d=d.get(f)||null,s(u,d,""+g,C);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case nr:return d=d.get(g.key===null?f:g.key)||null,a(u,d,g,C);case Tt:return d=d.get(g.key===null?f:g.key)||null,c(u,d,g,C);case Xe:var x=g._init;return w(d,u,f,x(g._payload),C)}if(wn(g)||cn(g))return d=d.get(f)||null,y(u,d,g,C,null);pr(u,g)}return null}function k(d,u,f,g){for(var C=null,x=null,A=u,P=u=0,b=null;A!==null&&P<f.length;P++){A.index>P?(b=A,A=null):b=A.sibling;var H=p(d,A,f[P],g);if(H===null){A===null&&(A=b);break}e&&A&&H.alternate===null&&t(d,A),u=i(H,u,P),x===null?C=H:x.sibling=H,x=H,A=b}if(P===f.length)return n(d,A),Q&&vt(d,P),C;if(A===null){for(;P<f.length;P++)A=m(d,f[P],g),A!==null&&(u=i(A,u,P),x===null?C=A:x.sibling=A,x=A);return Q&&vt(d,P),C}for(A=r(d,A);P<f.length;P++)b=w(A,d,P,f[P],g),b!==null&&(e&&b.alternate!==null&&A.delete(b.key===null?P:b.key),u=i(b,u,P),x===null?C=b:x.sibling=b,x=b);return e&&A.forEach(function(Ae){return t(d,Ae)}),Q&&vt(d,P),C}function h(d,u,f,g){var C=cn(f);if(typeof C!="function")throw Error(v(150));if(f=C.call(f),f==null)throw Error(v(151));for(var x=C=null,A=u,P=u=0,b=null,H=f.next();A!==null&&!H.done;P++,H=f.next()){A.index>P?(b=A,A=null):b=A.sibling;var Ae=p(d,A,H.value,g);if(Ae===null){A===null&&(A=b);break}e&&A&&Ae.alternate===null&&t(d,A),u=i(Ae,u,P),x===null?C=Ae:x.sibling=Ae,x=Ae,A=b}if(H.done)return n(d,A),Q&&vt(d,P),C;if(A===null){for(;!H.done;P++,H=f.next())H=m(d,H.value,g),H!==null&&(u=i(H,u,P),x===null?C=H:x.sibling=H,x=H);return Q&&vt(d,P),C}for(A=r(d,A);!H.done;P++,H=f.next())H=w(A,d,P,H.value,g),H!==null&&(e&&H.alternate!==null&&A.delete(H.key===null?P:H.key),u=i(H,u,P),x===null?C=H:x.sibling=H,x=H);return e&&A.forEach(function(an){return t(d,an)}),Q&&vt(d,P),C}function N(d,u,f,g){if(typeof f=="object"&&f!==null&&f.type===Gt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case nr:e:{for(var C=f.key,x=u;x!==null;){if(x.key===C){if(C=f.type,C===Gt){if(x.tag===7){n(d,x.sibling),u=o(x,f.props.children),u.return=d,d=u;break e}}else if(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Xe&&gs(C)===x.type){n(d,x.sibling),u=o(x,f.props),u.ref=mn(d,x,f),u.return=d,d=u;break e}n(d,x);break}else t(d,x);x=x.sibling}f.type===Gt?(u=xt(f.props.children,d.mode,g,f.key),u.return=d,d=u):(g=zr(f.type,f.key,f.props,null,d.mode,g),g.ref=mn(d,u,f),g.return=d,d=g)}return l(d);case Tt:e:{for(x=f.key;u!==null;){if(u.key===x)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(d,u.sibling),u=o(u,f.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=Uo(f,d.mode,g),u.return=d,d=u}return l(d);case Xe:return x=f._init,N(d,u,x(f._payload),g)}if(wn(f))return k(d,u,f,g);if(cn(f))return h(d,u,f,g);pr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(n(d,u.sibling),u=o(u,f),u.return=d,d=u):(n(d,u),u=Fo(f,d.mode,g),u.return=d,d=u),l(d)):n(d,u)}return N}var en=eu(!0),tu=eu(!1),Br=ht(null),Fr=null,bt=null,al=null;function ul(){al=bt=Fr=null}function cl(e){var t=Br.current;L(Br),e._currentValue=t}function Si(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Yt(e,t){Fr=e,al=bt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ue=!0),e.firstContext=null)}function Ee(e){var t=e._currentValue;if(al!==e)if(e={context:e,memoizedValue:t,next:null},bt===null){if(Fr===null)throw Error(v(308));bt=e,Fr.dependencies={lanes:0,firstContext:e}}else bt=bt.next=e;return t}var Ct=null;function dl(e){Ct===null?Ct=[e]:Ct.push(e)}function nu(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,dl(t)):(n.next=o.next,o.next=n),t.interleaved=n,$e(e,r)}function $e(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ze=!1;function fl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ru(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Fe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function st(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,$e(e,n)}return o=r.interleaved,o===null?(t.next=t,dl(r)):(t.next=o.next,o.next=t),r.interleaved=t,$e(e,n)}function Er(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xi(e,n)}}function vs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ur(e,t,n,r){var o=e.updateQueue;Ze=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,c=a.next;a.next=null,l===null?i=c:l.next=c,l=a;var y=e.alternate;y!==null&&(y=y.updateQueue,s=y.lastBaseUpdate,s!==l&&(s===null?y.firstBaseUpdate=c:s.next=c,y.lastBaseUpdate=a))}if(i!==null){var m=o.baseState;l=0,y=c=a=null,s=i;do{var p=s.lane,w=s.eventTime;if((r&p)===p){y!==null&&(y=y.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,h=s;switch(p=t,w=n,h.tag){case 1:if(k=h.payload,typeof k=="function"){m=k.call(w,m,p);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=h.payload,p=typeof k=="function"?k.call(w,m,p):k,p==null)break e;m=W({},m,p);break e;case 2:Ze=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[s]:p.push(s))}else w={eventTime:w,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},y===null?(c=y=w,a=m):y=y.next=w,l|=p;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;p=s,s=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(y===null&&(a=m),o.baseState=a,o.firstBaseUpdate=c,o.lastBaseUpdate=y,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Rt|=l,e.lanes=l,e.memoizedState=m}}function ws(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(v(191,o));o.call(r)}}}var Zn={},Me=ht(Zn),bn=ht(Zn),Bn=ht(Zn);function St(e){if(e===Zn)throw Error(v(174));return e}function pl(e,t){switch(G(Bn,t),G(bn,e),G(Me,Zn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ni(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ni(t,e)}L(Me),G(Me,t)}function tn(){L(Me),L(bn),L(Bn)}function ou(e){St(Bn.current);var t=St(Me.current),n=ni(t,e.type);t!==n&&(G(bn,e),G(Me,n))}function hl(e){bn.current===e&&(L(Me),L(bn))}var M=ht(0);function Vr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Mo=[];function ml(){for(var e=0;e<Mo.length;e++)Mo[e]._workInProgressVersionPrimary=null;Mo.length=0}var xr=Ye.ReactCurrentDispatcher,jo=Ye.ReactCurrentBatchConfig,Nt=0,j=null,V=null,Y=null,$r=!1,Nn=!1,Fn=0,Bd=0;function ee(){throw Error(v(321))}function yl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!De(e[n],t[n]))return!1;return!0}function gl(e,t,n,r,o,i){if(Nt=i,j=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xr.current=e===null||e.memoizedState===null?$d:qd,e=n(r,o),Nn){i=0;do{if(Nn=!1,Fn=0,25<=i)throw Error(v(301));i+=1,Y=V=null,t.updateQueue=null,xr.current=Yd,e=n(r,o)}while(Nn)}if(xr.current=qr,t=V!==null&&V.next!==null,Nt=0,Y=V=j=null,$r=!1,t)throw Error(v(300));return e}function vl(){var e=Fn!==0;return Fn=0,e}function Ie(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Y===null?j.memoizedState=Y=e:Y=Y.next=e,Y}function xe(){if(V===null){var e=j.alternate;e=e!==null?e.memoizedState:null}else e=V.next;var t=Y===null?j.memoizedState:Y.next;if(t!==null)Y=t,V=e;else{if(e===null)throw Error(v(310));V=e,e={memoizedState:V.memoizedState,baseState:V.baseState,baseQueue:V.baseQueue,queue:V.queue,next:null},Y===null?j.memoizedState=Y=e:Y=Y.next=e}return Y}function Un(e,t){return typeof t=="function"?t(e):t}function Wo(e){var t=xe(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var r=V,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,c=i;do{var y=c.lane;if((Nt&y)===y)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:y,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=m,l=r):a=a.next=m,j.lanes|=y,Rt|=y}c=c.next}while(c!==null&&c!==i);a===null?l=r:a.next=s,De(r,t.memoizedState)||(ue=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,j.lanes|=i,Rt|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Oo(e){var t=xe(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);De(i,t.memoizedState)||(ue=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function iu(){}function lu(e,t){var n=j,r=xe(),o=t(),i=!De(r.memoizedState,o);if(i&&(r.memoizedState=o,ue=!0),r=r.queue,wl(uu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Y!==null&&Y.memoizedState.tag&1){if(n.flags|=2048,Vn(9,au.bind(null,n,r,o,t),void 0,null),K===null)throw Error(v(349));Nt&30||su(n,t,o)}return o}function su(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=j.updateQueue,t===null?(t={lastEffect:null,stores:null},j.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function au(e,t,n,r){t.value=n,t.getSnapshot=r,cu(t)&&du(e)}function uu(e,t,n){return n(function(){cu(t)&&du(e)})}function cu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!De(e,n)}catch{return!0}}function du(e){var t=$e(e,1);t!==null&&He(t,e,1,-1)}function ks(e){var t=Ie();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Un,lastRenderedState:e},t.queue=e,e=e.dispatch=Vd.bind(null,j,e),[t.memoizedState,e]}function Vn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=j.updateQueue,t===null?(t={lastEffect:null,stores:null},j.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function fu(){return xe().memoizedState}function Ar(e,t,n,r){var o=Ie();j.flags|=e,o.memoizedState=Vn(1|t,n,void 0,r===void 0?null:r)}function lo(e,t,n,r){var o=xe();r=r===void 0?null:r;var i=void 0;if(V!==null){var l=V.memoizedState;if(i=l.destroy,r!==null&&yl(r,l.deps)){o.memoizedState=Vn(t,n,i,r);return}}j.flags|=e,o.memoizedState=Vn(1|t,n,i,r)}function Cs(e,t){return Ar(8390656,8,e,t)}function wl(e,t){return lo(2048,8,e,t)}function pu(e,t){return lo(4,2,e,t)}function hu(e,t){return lo(4,4,e,t)}function mu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yu(e,t,n){return n=n!=null?n.concat([e]):null,lo(4,4,mu.bind(null,t,e),n)}function kl(){}function gu(e,t){var n=xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function vu(e,t){var n=xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function wu(e,t,n){return Nt&21?(De(n,t)||(n=xa(),j.lanes|=n,Rt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ue=!0),e.memoizedState=n)}function Fd(e,t){var n=T;T=n!==0&&4>n?n:4,e(!0);var r=jo.transition;jo.transition={};try{e(!1),t()}finally{T=n,jo.transition=r}}function ku(){return xe().memoizedState}function Ud(e,t,n){var r=ut(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Cu(e))Su(t,n);else if(n=nu(e,t,n,r),n!==null){var o=ie();He(n,e,r,o),Eu(n,t,r)}}function Vd(e,t,n){var r=ut(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cu(e))Su(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,De(s,l)){var a=t.interleaved;a===null?(o.next=o,dl(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=nu(e,t,o,r),n!==null&&(o=ie(),He(n,e,r,o),Eu(n,t,r))}}function Cu(e){var t=e.alternate;return e===j||t!==null&&t===j}function Su(e,t){Nn=$r=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Eu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xi(e,n)}}var qr={readContext:Ee,useCallback:ee,useContext:ee,useEffect:ee,useImperativeHandle:ee,useInsertionEffect:ee,useLayoutEffect:ee,useMemo:ee,useReducer:ee,useRef:ee,useState:ee,useDebugValue:ee,useDeferredValue:ee,useTransition:ee,useMutableSource:ee,useSyncExternalStore:ee,useId:ee,unstable_isNewReconciler:!1},$d={readContext:Ee,useCallback:function(e,t){return Ie().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:Cs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ar(4194308,4,mu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ar(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ar(4,2,e,t)},useMemo:function(e,t){var n=Ie();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ie();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ud.bind(null,j,e),[r.memoizedState,e]},useRef:function(e){var t=Ie();return e={current:e},t.memoizedState=e},useState:ks,useDebugValue:kl,useDeferredValue:function(e){return Ie().memoizedState=e},useTransition:function(){var e=ks(!1),t=e[0];return e=Fd.bind(null,e[1]),Ie().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=j,o=Ie();if(Q){if(n===void 0)throw Error(v(407));n=n()}else{if(n=t(),K===null)throw Error(v(349));Nt&30||su(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Cs(uu.bind(null,r,i,e),[e]),r.flags|=2048,Vn(9,au.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ie(),t=K.identifierPrefix;if(Q){var n=Be,r=be;n=(r&~(1<<32-_e(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Fn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Bd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},qd={readContext:Ee,useCallback:gu,useContext:Ee,useEffect:wl,useImperativeHandle:yu,useInsertionEffect:pu,useLayoutEffect:hu,useMemo:vu,useReducer:Wo,useRef:fu,useState:function(){return Wo(Un)},useDebugValue:kl,useDeferredValue:function(e){var t=xe();return wu(t,V.memoizedState,e)},useTransition:function(){var e=Wo(Un)[0],t=xe().memoizedState;return[e,t]},useMutableSource:iu,useSyncExternalStore:lu,useId:ku,unstable_isNewReconciler:!1},Yd={readContext:Ee,useCallback:gu,useContext:Ee,useEffect:wl,useImperativeHandle:yu,useInsertionEffect:pu,useLayoutEffect:hu,useMemo:vu,useReducer:Oo,useRef:fu,useState:function(){return Oo(Un)},useDebugValue:kl,useDeferredValue:function(e){var t=xe();return V===null?t.memoizedState=e:wu(t,V.memoizedState,e)},useTransition:function(){var e=Oo(Un)[0],t=xe().memoizedState;return[e,t]},useMutableSource:iu,useSyncExternalStore:lu,useId:ku,unstable_isNewReconciler:!1};function Ne(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ei(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var so={isMounted:function(e){return(e=e._reactInternals)?Ht(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ie(),o=ut(e),i=Fe(r,o);i.payload=t,n!=null&&(i.callback=n),t=st(e,i,o),t!==null&&(He(t,e,o,r),Er(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ie(),o=ut(e),i=Fe(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=st(e,i,o),t!==null&&(He(t,e,o,r),Er(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ie(),r=ut(e),o=Fe(n,r);o.tag=2,t!=null&&(o.callback=t),t=st(e,o,r),t!==null&&(He(t,e,r,n),Er(t,e,r))}};function Ss(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Mn(n,r)||!Mn(o,i):!0}function xu(e,t,n){var r=!1,o=ft,i=t.contextType;return typeof i=="object"&&i!==null?i=Ee(i):(o=de(t)?At:re.current,r=t.contextTypes,i=(r=r!=null)?Zt(e,o):ft),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=so,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Es(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&so.enqueueReplaceState(t,t.state,null)}function xi(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},fl(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ee(i):(i=de(t)?At:re.current,o.context=Zt(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ei(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&so.enqueueReplaceState(o,o.state,null),Ur(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function nn(e,t){try{var n="",r=t;do n+=Ec(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function bo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ai(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Kd=typeof WeakMap=="function"?WeakMap:Map;function Au(e,t,n){n=Fe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Kr||(Kr=!0,Ii=r),Ai(e,t)},n}function Pu(e,t,n){n=Fe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ai(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ai(e,t),typeof r!="function"&&(at===null?at=new Set([this]):at.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function xs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Kd;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=df.bind(null,e,t,n),t.then(e,e))}function As(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ps(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Fe(-1,1),t.tag=2,st(n,t,1))),n.lanes|=1),e)}var Xd=Ye.ReactCurrentOwner,ue=!1;function oe(e,t,n,r){t.child=e===null?tu(t,null,n,r):en(t,e.child,n,r)}function Ns(e,t,n,r,o){n=n.render;var i=t.ref;return Yt(t,o),r=gl(e,t,n,r,i,o),n=vl(),e!==null&&!ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,qe(e,t,o)):(Q&&n&&il(t),t.flags|=1,oe(e,t,r,o),t.child)}function Rs(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Rl(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Nu(e,t,i,r,o)):(e=zr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Mn,n(l,r)&&e.ref===t.ref)return qe(e,t,o)}return t.flags|=1,e=ct(i,r),e.ref=t.ref,e.return=t,t.child=e}function Nu(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Mn(i,r)&&e.ref===t.ref)if(ue=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(ue=!0);else return t.lanes=e.lanes,qe(e,t,o)}return Pi(e,t,n,r,o)}function Ru(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(Ft,pe),pe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(Ft,pe),pe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,G(Ft,pe),pe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,G(Ft,pe),pe|=r;return oe(e,t,o,n),t.child}function zu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Pi(e,t,n,r,o){var i=de(n)?At:re.current;return i=Zt(t,i),Yt(t,o),n=gl(e,t,n,r,i,o),r=vl(),e!==null&&!ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,qe(e,t,o)):(Q&&r&&il(t),t.flags|=1,oe(e,t,n,o),t.child)}function zs(e,t,n,r,o){if(de(n)){var i=!0;Wr(t)}else i=!1;if(Yt(t,o),t.stateNode===null)Pr(e,t),xu(t,n,r),xi(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ee(c):(c=de(n)?At:re.current,c=Zt(t,c));var y=n.getDerivedStateFromProps,m=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==c)&&Es(t,l,r,c),Ze=!1;var p=t.memoizedState;l.state=p,Ur(t,r,l,o),a=t.memoizedState,s!==r||p!==a||ce.current||Ze?(typeof y=="function"&&(Ei(t,n,y,r),a=t.memoizedState),(s=Ze||Ss(t,n,s,r,p,a,c))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,ru(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Ne(t.type,s),l.props=c,m=t.pendingProps,p=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ee(a):(a=de(n)?At:re.current,a=Zt(t,a));var w=n.getDerivedStateFromProps;(y=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==m||p!==a)&&Es(t,l,r,a),Ze=!1,p=t.memoizedState,l.state=p,Ur(t,r,l,o);var k=t.memoizedState;s!==m||p!==k||ce.current||Ze?(typeof w=="function"&&(Ei(t,n,w,r),k=t.memoizedState),(c=Ze||Ss(t,n,c,r,p,k,a)||!1)?(y||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,k,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,k,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),l.props=r,l.state=k,l.context=a,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Ni(e,t,n,r,i,o)}function Ni(e,t,n,r,o,i){zu(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&hs(t,n,!1),qe(e,t,i);r=t.stateNode,Xd.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=en(t,e.child,null,i),t.child=en(t,null,s,i)):oe(e,t,s,i),t.memoizedState=r.state,o&&hs(t,n,!0),t.child}function _u(e){var t=e.stateNode;t.pendingContext?ps(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ps(e,t.context,!1),pl(e,t.containerInfo)}function _s(e,t,n,r,o){return Jt(),sl(o),t.flags|=256,oe(e,t,n,r),t.child}var Ri={dehydrated:null,treeContext:null,retryLane:0};function zi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hu(e,t,n){var r=t.pendingProps,o=M.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),G(M,o&1),e===null)return Ci(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=co(l,r,0,null),e=xt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=zi(n),t.memoizedState=Ri,e):Cl(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Zd(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=ct(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=ct(s,i):(i=xt(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?zi(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Ri,r}return i=e.child,e=i.sibling,r=ct(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Cl(e,t){return t=co({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hr(e,t,n,r){return r!==null&&sl(r),en(t,e.child,null,n),e=Cl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zd(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=bo(Error(v(422))),hr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=co({mode:"visible",children:r.children},o,0,null),i=xt(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&en(t,e.child,null,l),t.child.memoizedState=zi(l),t.memoizedState=Ri,i);if(!(t.mode&1))return hr(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(v(419)),r=bo(i,r,void 0),hr(e,t,l,r)}if(s=(l&e.childLanes)!==0,ue||s){if(r=K,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,$e(e,o),He(r,e,o,-1))}return Nl(),r=bo(Error(v(421))),hr(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=ff.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,he=lt(o.nextSibling),me=t,Q=!0,ze=null,e!==null&&(we[ke++]=be,we[ke++]=Be,we[ke++]=Pt,be=e.id,Be=e.overflow,Pt=t),t=Cl(t,r.children),t.flags|=4096,t)}function Hs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Si(e.return,t,n)}function Bo(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Du(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(oe(e,t,r.children,n),r=M.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hs(e,n,t);else if(e.tag===19)Hs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(G(M,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Vr(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Bo(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Vr(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Bo(t,!0,n,null,i);break;case"together":Bo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Pr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(v(153));if(t.child!==null){for(e=t.child,n=ct(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ct(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Jd(e,t,n){switch(t.tag){case 3:_u(t),Jt();break;case 5:ou(t);break;case 1:de(t.type)&&Wr(t);break;case 4:pl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;G(Br,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(G(M,M.current&1),t.flags|=128,null):n&t.child.childLanes?Hu(e,t,n):(G(M,M.current&1),e=qe(e,t,n),e!==null?e.sibling:null);G(M,M.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Du(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),G(M,M.current),r)break;return null;case 22:case 23:return t.lanes=0,Ru(e,t,n)}return qe(e,t,n)}var Tu,_i,Gu,Iu;Tu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_i=function(){};Gu=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,St(Me.current);var i=null;switch(n){case"input":o=Zo(e,o),r=Zo(e,r),i=[];break;case"select":o=W({},o,{value:void 0}),r=W({},r,{value:void 0}),i=[];break;case"textarea":o=ti(e,o),r=ti(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Mr)}ri(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Hn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var a=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Hn.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&I("scroll",e),i||s===a||(i=[])):(i=i||[]).push(c,a))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Iu=function(e,t,n,r){n!==r&&(t.flags|=4)};function yn(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ef(e,t,n){var r=t.pendingProps;switch(ll(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(t),null;case 1:return de(t.type)&&jr(),te(t),null;case 3:return r=t.stateNode,tn(),L(ce),L(re),ml(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ze!==null&&(Mi(ze),ze=null))),_i(e,t),te(t),null;case 5:hl(t);var o=St(Bn.current);if(n=t.type,e!==null&&t.stateNode!=null)Gu(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(v(166));return te(t),null}if(e=St(Me.current),fr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Le]=t,r[On]=i,e=(t.mode&1)!==0,n){case"dialog":I("cancel",r),I("close",r);break;case"iframe":case"object":case"embed":I("load",r);break;case"video":case"audio":for(o=0;o<Cn.length;o++)I(Cn[o],r);break;case"source":I("error",r);break;case"img":case"image":case"link":I("error",r),I("load",r);break;case"details":I("toggle",r);break;case"input":Wl(r,i),I("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},I("invalid",r);break;case"textarea":bl(r,i),I("invalid",r)}ri(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&dr(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&dr(r.textContent,s,e),o=["children",""+s]):Hn.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&I("scroll",r)}switch(n){case"input":rr(r),Ol(r,i,!0);break;case"textarea":rr(r),Bl(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Mr)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ua(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Le]=t,e[On]=r,Tu(e,t,!1,!1),t.stateNode=e;e:{switch(l=oi(n,r),n){case"dialog":I("cancel",e),I("close",e),o=r;break;case"iframe":case"object":case"embed":I("load",e),o=r;break;case"video":case"audio":for(o=0;o<Cn.length;o++)I(Cn[o],e);o=r;break;case"source":I("error",e),o=r;break;case"img":case"image":case"link":I("error",e),I("load",e),o=r;break;case"details":I("toggle",e),o=r;break;case"input":Wl(e,r),o=Zo(e,r),I("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=W({},r,{value:void 0}),I("invalid",e);break;case"textarea":bl(e,r),o=ti(e,r),I("invalid",e);break;default:o=r}ri(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?fa(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&ca(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Dn(e,a):typeof a=="number"&&Dn(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Hn.hasOwnProperty(i)?a!=null&&i==="onScroll"&&I("scroll",e):a!=null&&Ui(e,i,a,l))}switch(n){case"input":rr(e),Ol(e,r,!1);break;case"textarea":rr(e),Bl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Ut(e,!!r.multiple,i,!1):r.defaultValue!=null&&Ut(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Mr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return te(t),null;case 6:if(e&&t.stateNode!=null)Iu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(v(166));if(n=St(Bn.current),St(Me.current),fr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Le]=t,(i=r.nodeValue!==n)&&(e=me,e!==null))switch(e.tag){case 3:dr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&dr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Le]=t,t.stateNode=r}return te(t),null;case 13:if(L(M),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&he!==null&&t.mode&1&&!(t.flags&128))Ja(),Jt(),t.flags|=98560,i=!1;else if(i=fr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(v(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(v(317));i[Le]=t}else Jt(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;te(t),i=!1}else ze!==null&&(Mi(ze),ze=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||M.current&1?$===0&&($=3):Nl())),t.updateQueue!==null&&(t.flags|=4),te(t),null);case 4:return tn(),_i(e,t),e===null&&jn(t.stateNode.containerInfo),te(t),null;case 10:return cl(t.type._context),te(t),null;case 17:return de(t.type)&&jr(),te(t),null;case 19:if(L(M),i=t.memoizedState,i===null)return te(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)yn(i,!1);else{if($!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Vr(e),l!==null){for(t.flags|=128,yn(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(M,M.current&1|2),t.child}e=e.sibling}i.tail!==null&&F()>rn&&(t.flags|=128,r=!0,yn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Vr(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Q)return te(t),null}else 2*F()-i.renderingStartTime>rn&&n!==1073741824&&(t.flags|=128,r=!0,yn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=F(),t.sibling=null,n=M.current,G(M,r?n&1|2:n&1),t):(te(t),null);case 22:case 23:return Pl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?pe&1073741824&&(te(t),t.subtreeFlags&6&&(t.flags|=8192)):te(t),null;case 24:return null;case 25:return null}throw Error(v(156,t.tag))}function tf(e,t){switch(ll(t),t.tag){case 1:return de(t.type)&&jr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tn(),L(ce),L(re),ml(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return hl(t),null;case 13:if(L(M),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(v(340));Jt()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(M),null;case 4:return tn(),null;case 10:return cl(t.type._context),null;case 22:case 23:return Pl(),null;case 24:return null;default:return null}}var mr=!1,ne=!1,nf=typeof WeakSet=="function"?WeakSet:Set,S=null;function Bt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){O(e,t,r)}else n.current=null}function Hi(e,t,n){try{n()}catch(r){O(e,t,r)}}var Ds=!1;function rf(e,t){if(hi=Ir,e=Wa(),ol(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,c=0,y=0,m=e,p=null;t:for(;;){for(var w;m!==n||o!==0&&m.nodeType!==3||(s=l+o),m!==i||r!==0&&m.nodeType!==3||(a=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(w=m.firstChild)!==null;)p=m,m=w;for(;;){if(m===e)break t;if(p===n&&++c===o&&(s=l),p===i&&++y===r&&(a=l),(w=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=w}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(mi={focusedElem:e,selectionRange:n},Ir=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var h=k.memoizedProps,N=k.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?h:Ne(t.type,h),N);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(g){O(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return k=Ds,Ds=!1,k}function Rn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Hi(t,n,i)}o=o.next}while(o!==r)}}function ao(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Di(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Lu(e){var t=e.alternate;t!==null&&(e.alternate=null,Lu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Le],delete t[On],delete t[vi],delete t[jd],delete t[Wd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qu(e){return e.tag===5||e.tag===3||e.tag===4}function Ts(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ti(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Mr));else if(r!==4&&(e=e.child,e!==null))for(Ti(e,t,n),e=e.sibling;e!==null;)Ti(e,t,n),e=e.sibling}function Gi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Gi(e,t,n),e=e.sibling;e!==null;)Gi(e,t,n),e=e.sibling}var X=null,Re=!1;function Ke(e,t,n){for(n=n.child;n!==null;)Mu(e,t,n),n=n.sibling}function Mu(e,t,n){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(eo,n)}catch{}switch(n.tag){case 5:ne||Bt(n,t);case 6:var r=X,o=Re;X=null,Ke(e,t,n),X=r,Re=o,X!==null&&(Re?(e=X,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):X.removeChild(n.stateNode));break;case 18:X!==null&&(Re?(e=X,n=n.stateNode,e.nodeType===8?Lo(e.parentNode,n):e.nodeType===1&&Lo(e,n),Ln(e)):Lo(X,n.stateNode));break;case 4:r=X,o=Re,X=n.stateNode.containerInfo,Re=!0,Ke(e,t,n),X=r,Re=o;break;case 0:case 11:case 14:case 15:if(!ne&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Hi(n,t,l),o=o.next}while(o!==r)}Ke(e,t,n);break;case 1:if(!ne&&(Bt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){O(n,t,s)}Ke(e,t,n);break;case 21:Ke(e,t,n);break;case 22:n.mode&1?(ne=(r=ne)||n.memoizedState!==null,Ke(e,t,n),ne=r):Ke(e,t,n);break;default:Ke(e,t,n)}}function Gs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new nf),t.forEach(function(r){var o=pf.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Pe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:X=s.stateNode,Re=!1;break e;case 3:X=s.stateNode.containerInfo,Re=!0;break e;case 4:X=s.stateNode.containerInfo,Re=!0;break e}s=s.return}if(X===null)throw Error(v(160));Mu(i,l,o),X=null,Re=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(c){O(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ju(t,e),t=t.sibling}function ju(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(t,e),Te(e),r&4){try{Rn(3,e,e.return),ao(3,e)}catch(h){O(e,e.return,h)}try{Rn(5,e,e.return)}catch(h){O(e,e.return,h)}}break;case 1:Pe(t,e),Te(e),r&512&&n!==null&&Bt(n,n.return);break;case 5:if(Pe(t,e),Te(e),r&512&&n!==null&&Bt(n,n.return),e.flags&32){var o=e.stateNode;try{Dn(o,"")}catch(h){O(e,e.return,h)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&sa(o,i),oi(s,l);var c=oi(s,i);for(l=0;l<a.length;l+=2){var y=a[l],m=a[l+1];y==="style"?fa(o,m):y==="dangerouslySetInnerHTML"?ca(o,m):y==="children"?Dn(o,m):Ui(o,y,m,c)}switch(s){case"input":Jo(o,i);break;case"textarea":aa(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?Ut(o,!!i.multiple,w,!1):p!==!!i.multiple&&(i.defaultValue!=null?Ut(o,!!i.multiple,i.defaultValue,!0):Ut(o,!!i.multiple,i.multiple?[]:"",!1))}o[On]=i}catch(h){O(e,e.return,h)}}break;case 6:if(Pe(t,e),Te(e),r&4){if(e.stateNode===null)throw Error(v(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(h){O(e,e.return,h)}}break;case 3:if(Pe(t,e),Te(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ln(t.containerInfo)}catch(h){O(e,e.return,h)}break;case 4:Pe(t,e),Te(e);break;case 13:Pe(t,e),Te(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(xl=F())),r&4&&Gs(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(ne=(c=ne)||y,Pe(t,e),ne=c):Pe(t,e),Te(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!y&&e.mode&1)for(S=e,y=e.child;y!==null;){for(m=S=y;S!==null;){switch(p=S,w=p.child,p.tag){case 0:case 11:case 14:case 15:Rn(4,p,p.return);break;case 1:Bt(p,p.return);var k=p.stateNode;if(typeof k.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(h){O(r,n,h)}}break;case 5:Bt(p,p.return);break;case 22:if(p.memoizedState!==null){Ls(m);continue}}w!==null?(w.return=p,S=w):Ls(m)}y=y.sibling}e:for(y=null,m=e;;){if(m.tag===5){if(y===null){y=m;try{o=m.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=m.stateNode,a=m.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=da("display",l))}catch(h){O(e,e.return,h)}}}else if(m.tag===6){if(y===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(h){O(e,e.return,h)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;y===m&&(y=null),m=m.return}y===m&&(y=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Pe(t,e),Te(e),r&4&&Gs(e);break;case 21:break;default:Pe(t,e),Te(e)}}function Te(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Qu(n)){var r=n;break e}n=n.return}throw Error(v(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Dn(o,""),r.flags&=-33);var i=Ts(e);Gi(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Ts(e);Ti(e,s,l);break;default:throw Error(v(161))}}catch(a){O(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function of(e,t,n){S=e,Wu(e)}function Wu(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var o=S,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||mr;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||ne;s=mr;var c=ne;if(mr=l,(ne=a)&&!c)for(S=o;S!==null;)l=S,a=l.child,l.tag===22&&l.memoizedState!==null?Qs(o):a!==null?(a.return=l,S=a):Qs(o);for(;i!==null;)S=i,Wu(i),i=i.sibling;S=o,mr=s,ne=c}Is(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,S=i):Is(e)}}function Is(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ne||ao(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ne)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ne(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ws(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ws(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var y=c.memoizedState;if(y!==null){var m=y.dehydrated;m!==null&&Ln(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}ne||t.flags&512&&Di(t)}catch(p){O(t,t.return,p)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function Ls(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Qs(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ao(4,t)}catch(a){O(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){O(t,o,a)}}var i=t.return;try{Di(t)}catch(a){O(t,i,a)}break;case 5:var l=t.return;try{Di(t)}catch(a){O(t,l,a)}}}catch(a){O(t,t.return,a)}if(t===e){S=null;break}var s=t.sibling;if(s!==null){s.return=t.return,S=s;break}S=t.return}}var lf=Math.ceil,Yr=Ye.ReactCurrentDispatcher,Sl=Ye.ReactCurrentOwner,Se=Ye.ReactCurrentBatchConfig,D=0,K=null,U=null,Z=0,pe=0,Ft=ht(0),$=0,$n=null,Rt=0,uo=0,El=0,zn=null,ae=null,xl=0,rn=1/0,We=null,Kr=!1,Ii=null,at=null,yr=!1,nt=null,Xr=0,_n=0,Li=null,Nr=-1,Rr=0;function ie(){return D&6?F():Nr!==-1?Nr:Nr=F()}function ut(e){return e.mode&1?D&2&&Z!==0?Z&-Z:bd.transition!==null?(Rr===0&&(Rr=xa()),Rr):(e=T,e!==0||(e=window.event,e=e===void 0?16:Ha(e.type)),e):1}function He(e,t,n,r){if(50<_n)throw _n=0,Li=null,Error(v(185));Yn(e,n,r),(!(D&2)||e!==K)&&(e===K&&(!(D&2)&&(uo|=n),$===4&&et(e,Z)),fe(e,r),n===1&&D===0&&!(t.mode&1)&&(rn=F()+500,io&&mt()))}function fe(e,t){var n=e.callbackNode;bc(e,t);var r=Gr(e,e===K?Z:0);if(r===0)n!==null&&Vl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Vl(n),t===1)e.tag===0?Od(Ms.bind(null,e)):Ka(Ms.bind(null,e)),Qd(function(){!(D&6)&&mt()}),n=null;else{switch(Aa(r)){case 1:n=Ki;break;case 4:n=Sa;break;case 16:n=Tr;break;case 536870912:n=Ea;break;default:n=Tr}n=qu(n,Ou.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ou(e,t){if(Nr=-1,Rr=0,D&6)throw Error(v(327));var n=e.callbackNode;if(Kt()&&e.callbackNode!==n)return null;var r=Gr(e,e===K?Z:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Zr(e,r);else{t=r;var o=D;D|=2;var i=Bu();(K!==e||Z!==t)&&(We=null,rn=F()+500,Et(e,t));do try{uf();break}catch(s){bu(e,s)}while(!0);ul(),Yr.current=i,D=o,U!==null?t=0:(K=null,Z=0,t=$)}if(t!==0){if(t===2&&(o=ui(e),o!==0&&(r=o,t=Qi(e,o))),t===1)throw n=$n,Et(e,0),et(e,r),fe(e,F()),n;if(t===6)et(e,r);else{if(o=e.current.alternate,!(r&30)&&!sf(o)&&(t=Zr(e,r),t===2&&(i=ui(e),i!==0&&(r=i,t=Qi(e,i))),t===1))throw n=$n,Et(e,0),et(e,r),fe(e,F()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(v(345));case 2:wt(e,ae,We);break;case 3:if(et(e,r),(r&130023424)===r&&(t=xl+500-F(),10<t)){if(Gr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ie(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=gi(wt.bind(null,e,ae,We),t);break}wt(e,ae,We);break;case 4:if(et(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-_e(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=F()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*lf(r/1960))-r,10<r){e.timeoutHandle=gi(wt.bind(null,e,ae,We),r);break}wt(e,ae,We);break;case 5:wt(e,ae,We);break;default:throw Error(v(329))}}}return fe(e,F()),e.callbackNode===n?Ou.bind(null,e):null}function Qi(e,t){var n=zn;return e.current.memoizedState.isDehydrated&&(Et(e,t).flags|=256),e=Zr(e,t),e!==2&&(t=ae,ae=n,t!==null&&Mi(t)),e}function Mi(e){ae===null?ae=e:ae.push.apply(ae,e)}function sf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!De(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function et(e,t){for(t&=~El,t&=~uo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-_e(t),r=1<<n;e[n]=-1,t&=~r}}function Ms(e){if(D&6)throw Error(v(327));Kt();var t=Gr(e,0);if(!(t&1))return fe(e,F()),null;var n=Zr(e,t);if(e.tag!==0&&n===2){var r=ui(e);r!==0&&(t=r,n=Qi(e,r))}if(n===1)throw n=$n,Et(e,0),et(e,t),fe(e,F()),n;if(n===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wt(e,ae,We),fe(e,F()),null}function Al(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(rn=F()+500,io&&mt())}}function zt(e){nt!==null&&nt.tag===0&&!(D&6)&&Kt();var t=D;D|=1;var n=Se.transition,r=T;try{if(Se.transition=null,T=1,e)return e()}finally{T=r,Se.transition=n,D=t,!(D&6)&&mt()}}function Pl(){pe=Ft.current,L(Ft)}function Et(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ld(n)),U!==null)for(n=U.return;n!==null;){var r=n;switch(ll(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&jr();break;case 3:tn(),L(ce),L(re),ml();break;case 5:hl(r);break;case 4:tn();break;case 13:L(M);break;case 19:L(M);break;case 10:cl(r.type._context);break;case 22:case 23:Pl()}n=n.return}if(K=e,U=e=ct(e.current,null),Z=pe=t,$=0,$n=null,El=uo=Rt=0,ae=zn=null,Ct!==null){for(t=0;t<Ct.length;t++)if(n=Ct[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Ct=null}return e}function bu(e,t){do{var n=U;try{if(ul(),xr.current=qr,$r){for(var r=j.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}$r=!1}if(Nt=0,Y=V=j=null,Nn=!1,Fn=0,Sl.current=null,n===null||n.return===null){$=1,$n=t,U=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=Z,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,y=s,m=y.tag;if(!(y.mode&1)&&(m===0||m===11||m===15)){var p=y.alternate;p?(y.updateQueue=p.updateQueue,y.memoizedState=p.memoizedState,y.lanes=p.lanes):(y.updateQueue=null,y.memoizedState=null)}var w=As(l);if(w!==null){w.flags&=-257,Ps(w,l,s,i,t),w.mode&1&&xs(i,c,t),t=w,a=c;var k=t.updateQueue;if(k===null){var h=new Set;h.add(a),t.updateQueue=h}else k.add(a);break e}else{if(!(t&1)){xs(i,c,t),Nl();break e}a=Error(v(426))}}else if(Q&&s.mode&1){var N=As(l);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Ps(N,l,s,i,t),sl(nn(a,s));break e}}i=a=nn(a,s),$!==4&&($=2),zn===null?zn=[i]:zn.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=Au(i,a,t);vs(i,d);break e;case 1:s=a;var u=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(at===null||!at.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var g=Pu(i,s,t);vs(i,g);break e}}i=i.return}while(i!==null)}Uu(n)}catch(C){t=C,U===n&&n!==null&&(U=n=n.return);continue}break}while(!0)}function Bu(){var e=Yr.current;return Yr.current=qr,e===null?qr:e}function Nl(){($===0||$===3||$===2)&&($=4),K===null||!(Rt&268435455)&&!(uo&268435455)||et(K,Z)}function Zr(e,t){var n=D;D|=2;var r=Bu();(K!==e||Z!==t)&&(We=null,Et(e,t));do try{af();break}catch(o){bu(e,o)}while(!0);if(ul(),D=n,Yr.current=r,U!==null)throw Error(v(261));return K=null,Z=0,$}function af(){for(;U!==null;)Fu(U)}function uf(){for(;U!==null&&!Tc();)Fu(U)}function Fu(e){var t=$u(e.alternate,e,pe);e.memoizedProps=e.pendingProps,t===null?Uu(e):U=t,Sl.current=null}function Uu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=tf(n,t),n!==null){n.flags&=32767,U=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$=6,U=null;return}}else if(n=ef(n,t,pe),n!==null){U=n;return}if(t=t.sibling,t!==null){U=t;return}U=t=e}while(t!==null);$===0&&($=5)}function wt(e,t,n){var r=T,o=Se.transition;try{Se.transition=null,T=1,cf(e,t,n,r)}finally{Se.transition=o,T=r}return null}function cf(e,t,n,r){do Kt();while(nt!==null);if(D&6)throw Error(v(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Bc(e,i),e===K&&(U=K=null,Z=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yr||(yr=!0,qu(Tr,function(){return Kt(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Se.transition,Se.transition=null;var l=T;T=1;var s=D;D|=4,Sl.current=null,rf(e,n),ju(n,e),zd(mi),Ir=!!hi,mi=hi=null,e.current=n,of(n),Gc(),D=s,T=l,Se.transition=i}else e.current=n;if(yr&&(yr=!1,nt=e,Xr=o),i=e.pendingLanes,i===0&&(at=null),Qc(n.stateNode),fe(e,F()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Kr)throw Kr=!1,e=Ii,Ii=null,e;return Xr&1&&e.tag!==0&&Kt(),i=e.pendingLanes,i&1?e===Li?_n++:(_n=0,Li=e):_n=0,mt(),null}function Kt(){if(nt!==null){var e=Aa(Xr),t=Se.transition,n=T;try{if(Se.transition=null,T=16>e?16:e,nt===null)var r=!1;else{if(e=nt,nt=null,Xr=0,D&6)throw Error(v(331));var o=D;for(D|=4,S=e.current;S!==null;){var i=S,l=i.child;if(S.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(S=c;S!==null;){var y=S;switch(y.tag){case 0:case 11:case 15:Rn(8,y,i)}var m=y.child;if(m!==null)m.return=y,S=m;else for(;S!==null;){y=S;var p=y.sibling,w=y.return;if(Lu(y),y===c){S=null;break}if(p!==null){p.return=w,S=p;break}S=w}}}var k=i.alternate;if(k!==null){var h=k.child;if(h!==null){k.child=null;do{var N=h.sibling;h.sibling=null,h=N}while(h!==null)}}S=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,S=l;else e:for(;S!==null;){if(i=S,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Rn(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,S=d;break e}S=i.return}}var u=e.current;for(S=u;S!==null;){l=S;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,S=f;else e:for(l=u;S!==null;){if(s=S,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ao(9,s)}}catch(C){O(s,s.return,C)}if(s===l){S=null;break e}var g=s.sibling;if(g!==null){g.return=s.return,S=g;break e}S=s.return}}if(D=o,mt(),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(eo,e)}catch{}r=!0}return r}finally{T=n,Se.transition=t}}return!1}function js(e,t,n){t=nn(n,t),t=Au(e,t,1),e=st(e,t,1),t=ie(),e!==null&&(Yn(e,1,t),fe(e,t))}function O(e,t,n){if(e.tag===3)js(e,e,n);else for(;t!==null;){if(t.tag===3){js(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(at===null||!at.has(r))){e=nn(n,e),e=Pu(t,e,1),t=st(t,e,1),e=ie(),t!==null&&(Yn(t,1,e),fe(t,e));break}}t=t.return}}function df(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ie(),e.pingedLanes|=e.suspendedLanes&n,K===e&&(Z&n)===n&&($===4||$===3&&(Z&130023424)===Z&&500>F()-xl?Et(e,0):El|=n),fe(e,t)}function Vu(e,t){t===0&&(e.mode&1?(t=lr,lr<<=1,!(lr&130023424)&&(lr=4194304)):t=1);var n=ie();e=$e(e,t),e!==null&&(Yn(e,t,n),fe(e,n))}function ff(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vu(e,n)}function pf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(v(314))}r!==null&&r.delete(t),Vu(e,n)}var $u;$u=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ce.current)ue=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ue=!1,Jd(e,t,n);ue=!!(e.flags&131072)}else ue=!1,Q&&t.flags&1048576&&Xa(t,br,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Pr(e,t),e=t.pendingProps;var o=Zt(t,re.current);Yt(t,n),o=gl(null,t,r,e,o,n);var i=vl();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,de(r)?(i=!0,Wr(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,fl(t),o.updater=so,t.stateNode=o,o._reactInternals=t,xi(t,r,e,n),t=Ni(null,t,r,!0,i,n)):(t.tag=0,Q&&i&&il(t),oe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Pr(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=mf(r),e=Ne(r,e),o){case 0:t=Pi(null,t,r,e,n);break e;case 1:t=zs(null,t,r,e,n);break e;case 11:t=Ns(null,t,r,e,n);break e;case 14:t=Rs(null,t,r,Ne(r.type,e),n);break e}throw Error(v(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ne(r,o),Pi(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ne(r,o),zs(e,t,r,o,n);case 3:e:{if(_u(t),e===null)throw Error(v(387));r=t.pendingProps,i=t.memoizedState,o=i.element,ru(e,t),Ur(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=nn(Error(v(423)),t),t=_s(e,t,r,n,o);break e}else if(r!==o){o=nn(Error(v(424)),t),t=_s(e,t,r,n,o);break e}else for(he=lt(t.stateNode.containerInfo.firstChild),me=t,Q=!0,ze=null,n=tu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jt(),r===o){t=qe(e,t,n);break e}oe(e,t,r,n)}t=t.child}return t;case 5:return ou(t),e===null&&Ci(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,yi(r,o)?l=null:i!==null&&yi(r,i)&&(t.flags|=32),zu(e,t),oe(e,t,l,n),t.child;case 6:return e===null&&Ci(t),null;case 13:return Hu(e,t,n);case 4:return pl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=en(t,null,r,n):oe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ne(r,o),Ns(e,t,r,o,n);case 7:return oe(e,t,t.pendingProps,n),t.child;case 8:return oe(e,t,t.pendingProps.children,n),t.child;case 12:return oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,G(Br,r._currentValue),r._currentValue=l,i!==null)if(De(i.value,l)){if(i.children===o.children&&!ce.current){t=qe(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Fe(-1,n&-n),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var y=c.pending;y===null?a.next=a:(a.next=y.next,y.next=a),c.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Si(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(v(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Si(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}oe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Yt(t,n),o=Ee(o),r=r(o),t.flags|=1,oe(e,t,r,n),t.child;case 14:return r=t.type,o=Ne(r,t.pendingProps),o=Ne(r.type,o),Rs(e,t,r,o,n);case 15:return Nu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ne(r,o),Pr(e,t),t.tag=1,de(r)?(e=!0,Wr(t)):e=!1,Yt(t,n),xu(t,r,o),xi(t,r,o,n),Ni(null,t,r,!0,e,n);case 19:return Du(e,t,n);case 22:return Ru(e,t,n)}throw Error(v(156,t.tag))};function qu(e,t){return Ca(e,t)}function hf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,t,n,r){return new hf(e,t,n,r)}function Rl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mf(e){if(typeof e=="function")return Rl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$i)return 11;if(e===qi)return 14}return 2}function ct(e,t){var n=e.alternate;return n===null?(n=Ce(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zr(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Rl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Gt:return xt(n.children,o,i,t);case Vi:l=8,o|=8;break;case qo:return e=Ce(12,n,t,o|2),e.elementType=qo,e.lanes=i,e;case Yo:return e=Ce(13,n,t,o),e.elementType=Yo,e.lanes=i,e;case Ko:return e=Ce(19,n,t,o),e.elementType=Ko,e.lanes=i,e;case oa:return co(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case na:l=10;break e;case ra:l=9;break e;case $i:l=11;break e;case qi:l=14;break e;case Xe:l=16,r=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return t=Ce(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function xt(e,t,n,r){return e=Ce(7,e,r,t),e.lanes=n,e}function co(e,t,n,r){return e=Ce(22,e,r,t),e.elementType=oa,e.lanes=n,e.stateNode={isHidden:!1},e}function Fo(e,t,n){return e=Ce(6,e,null,t),e.lanes=n,e}function Uo(e,t,n){return t=Ce(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function yf(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ao(0),this.expirationTimes=Ao(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ao(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function zl(e,t,n,r,o,i,l,s,a){return e=new yf(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ce(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fl(i),e}function gf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Tt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Yu(e){if(!e)return ft;e=e._reactInternals;e:{if(Ht(e)!==e||e.tag!==1)throw Error(v(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(de(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(v(171))}if(e.tag===1){var n=e.type;if(de(n))return Ya(e,n,t)}return t}function Ku(e,t,n,r,o,i,l,s,a){return e=zl(n,r,!0,e,o,i,l,s,a),e.context=Yu(null),n=e.current,r=ie(),o=ut(n),i=Fe(r,o),i.callback=t??null,st(n,i,o),e.current.lanes=o,Yn(e,o,r),fe(e,r),e}function fo(e,t,n,r){var o=t.current,i=ie(),l=ut(o);return n=Yu(n),t.context===null?t.context=n:t.pendingContext=n,t=Fe(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=st(o,t,l),e!==null&&(He(e,o,l,i),Er(e,o,l)),l}function Jr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ws(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _l(e,t){Ws(e,t),(e=e.alternate)&&Ws(e,t)}function vf(){return null}var Xu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hl(e){this._internalRoot=e}po.prototype.render=Hl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(v(409));fo(e,t,null,null)};po.prototype.unmount=Hl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zt(function(){fo(null,e,null,null)}),t[Ve]=null}};function po(e){this._internalRoot=e}po.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ra();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Je.length&&t!==0&&t<Je[n].priority;n++);Je.splice(n,0,e),n===0&&_a(e)}};function Dl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ho(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Os(){}function wf(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Jr(l);i.call(c)}}var l=Ku(t,r,e,0,null,!1,!1,"",Os);return e._reactRootContainer=l,e[Ve]=l.current,jn(e.nodeType===8?e.parentNode:e),zt(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=Jr(a);s.call(c)}}var a=zl(e,0,!1,null,null,!1,!1,"",Os);return e._reactRootContainer=a,e[Ve]=a.current,jn(e.nodeType===8?e.parentNode:e),zt(function(){fo(t,a,n,r)}),a}function mo(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=Jr(l);s.call(a)}}fo(t,l,e,o)}else l=wf(n,t,e,o,r);return Jr(l)}Pa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=kn(t.pendingLanes);n!==0&&(Xi(t,n|1),fe(t,F()),!(D&6)&&(rn=F()+500,mt()))}break;case 13:zt(function(){var r=$e(e,1);if(r!==null){var o=ie();He(r,e,1,o)}}),_l(e,1)}};Zi=function(e){if(e.tag===13){var t=$e(e,134217728);if(t!==null){var n=ie();He(t,e,134217728,n)}_l(e,134217728)}};Na=function(e){if(e.tag===13){var t=ut(e),n=$e(e,t);if(n!==null){var r=ie();He(n,e,t,r)}_l(e,t)}};Ra=function(){return T};za=function(e,t){var n=T;try{return T=e,t()}finally{T=n}};li=function(e,t,n){switch(t){case"input":if(Jo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=oo(r);if(!o)throw Error(v(90));la(r),Jo(r,o)}}}break;case"textarea":aa(e,n);break;case"select":t=n.value,t!=null&&Ut(e,!!n.multiple,t,!1)}};ma=Al;ya=zt;var kf={usingClientEntryPoint:!1,Events:[Xn,Mt,oo,pa,ha,Al]},gn={findFiberByHostInstance:kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Cf={bundleType:gn.bundleType,version:gn.version,rendererPackageName:gn.rendererPackageName,rendererConfig:gn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ye.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wa(e),e===null?null:e.stateNode},findFiberByHostInstance:gn.findFiberByHostInstance||vf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gr.isDisabled&&gr.supportsFiber)try{eo=gr.inject(Cf),Qe=gr}catch{}}ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kf;ge.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dl(t))throw Error(v(200));return gf(e,t,null,n)};ge.createRoot=function(e,t){if(!Dl(e))throw Error(v(299));var n=!1,r="",o=Xu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=zl(e,1,!1,null,null,n,!1,r,o),e[Ve]=t.current,jn(e.nodeType===8?e.parentNode:e),new Hl(t)};ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=wa(t),e=e===null?null:e.stateNode,e};ge.flushSync=function(e){return zt(e)};ge.hydrate=function(e,t,n){if(!ho(t))throw Error(v(200));return mo(null,e,t,!0,n)};ge.hydrateRoot=function(e,t,n){if(!Dl(e))throw Error(v(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Xu;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Ku(t,null,e,1,n??null,o,!1,i,l),e[Ve]=t.current,jn(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new po(t)};ge.render=function(e,t,n){if(!ho(t))throw Error(v(200));return mo(null,e,t,!1,n)};ge.unmountComponentAtNode=function(e){if(!ho(e))throw Error(v(40));return e._reactRootContainer?(zt(function(){mo(null,null,e,!1,function(){e._reactRootContainer=null,e[Ve]=null})}),!0):!1};ge.unstable_batchedUpdates=Al;ge.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ho(n))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return mo(e,t,n,!1,r)};ge.version="18.3.1-next-f1338f8080-20240426";function Zu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zu)}catch(e){console.error(e)}}Zu(),Zs.exports=ge;var Sf=Zs.exports,bs=Sf;Vo.createRoot=bs.createRoot,Vo.hydrateRoot=bs.hydrateRoot;function Ef(e){const t=e.toLowerCase(),n={one:1,two:2,three:3,multiple:99},r=t.match(/\(choose\s+(\d+|one|two|three|multiple)\)/);if(r)return Number(r[1])||n[r[1]]||1;const o=t.match(/\bwhich\s+(one|two|three)\b/);return o&&n[o[1]]||1}function xf(e){return e.replace(/\s+\(Choose [^)]+\)/i,"").trim()}function Af(e,t){const n=e.split(`
`).map(c=>c.trimEnd()),o=(n.shift().trim().match(/^Question\s+(\d+)/i)||[null,t+1])[1],i=n.join(`
`).trim().split(`
`).map(c=>c.trim()).filter(Boolean),l=i.findIndex(c=>/^[A-Z]\.\s+/.test(c)),s=l!==-1?i.slice(0,l).join(" ").trim():i[0]||"",a=l!==-1?i.slice(l).reduce((c,y)=>(/^[A-Z]\.\s+/.test(y)?c.push(y.replace(/^[A-Z]\.\s+/,"").trim()):c.length&&(c[c.length-1]+=` ${y}`),c),[]):i.slice(1);return{id:`q-${t+1}`,label:`Question ${o}`,ordinal:t+1,prompt:xf(s),choose:Ef(s),options:a}}const Pf=String.raw`Question 1
An engineer at example.com pauses a GitHub Codespace to save resources and does not commit recent edits to the repository. When they start that same codespace again later, will their uncommitted changes still be present? (Choose 1)

They will persist only if you pushed them to a remote branch before stopping
Yes, the uncommitted edits remain available when you reopen the same codespace
You must run a GitHub Actions backup workflow before stopping or the edits will be lost
No, uncommitted changes are discarded when you stop a codespace

Question 2
An engineer at scrumtuous.com is reviewing a project on GitHub and opens the Security tab for the repository. What information should they expect to find there? (Choose 1)

A catalog of all issues created for security concerns in that repository
Organization audit logs and SAML SSO configuration
A consolidated view that includes dependency vulnerability alerts along with code scanning findings and secret scanning detections
Contact details for the GitHub security team to report incidents

Question 3
You opened a pull request to the inventory service repository at example.com and the reviewer asked for several updates during code review. You want to continue the review while preserving the existing discussion and commit history. What should you do? (Choose 1)

Close the pull request and open a new one from the same branch
Apply the requested updates and push new commits to the existing pull request
Proceed without addressing the comments and try to merge as is
Abandon the pull request and create a separate change in Cloud Source Repositories

Question 4
When you are viewing an issue in a repository through the web interface, where do you initiate creating a new branch that will be linked to that issue? (Choose 1)

From the issue description area
In the Development section of the issue sidebar
From the repository settings page
From the pull request configuration page

Question 5
A team at scrumtuous.com is rolling out shared automation using GitHub Actions and wants one workflow to call a reusable workflow that resides in another location. In what situations does GitHub Actions allow this reuse to occur? (Choose 1)

If the called workflow is referenced through a repository that was renamed and GitHub redirects to the new name
When both workflows are in the same repository or the called workflow is in a public repository that your org allows or it is in a private repository with access granted
Only if the two workflows are stored in the same repository
Only if the called workflow is in a public repository

Question 6
Which capability is exclusive to GitHub Enterprise? (Choose 1)

GitHub Actions
GitHub Enterprise Support
GitHub Codespaces

Question 7
A product team at mcnz.com is drafting internal guidelines for adopting community driven tools and wants to pinpoint the single trait that truly sets open source software apart from proprietary products. Which statement describes that defining trait? (Choose 1)

Built and managed exclusively by one company
It must be distributed only through Google Cloud Marketplace
The source code is openly available to view modify and redistribute
The code remains closed and proprietary under vendor control

Question 7
A product team at mcnz.com is drafting internal guidelines for adopting community driven tools and wants to pinpoint the single trait that truly sets open source software apart from proprietary products. Which statement describes that defining trait? (Choose 1)

Built and managed exclusively by one company
It must be distributed only through Google Cloud Marketplace
The source code is openly available to view modify and redistribute
The code remains closed and proprietary under vendor control

Question 8
Priya moderates GitHub Discussions for a community repository and sees that a topic in a question and answer category has a community reply that clearly resolves the issue. What action can Priya take to make that reply stand out for others who view the thread? (Choose 1)

Convert the discussion into an issue
Pin the reply at the top of the discussion
Mark the reply as the answer to the discussion thread
Edit the original discussion post to copy that reply into it

Question 9
Marble Peak Analytics at example.com uses GitHub Team today and plans to upgrade within 90 days to meet external audit requirements. Which capability would they gain with GitHub Enterprise that goes beyond what Team provides? (Choose 1)

Only GitHub Enterprise can integrate with Google Cloud Build
It is available only as a self hosted product
It includes expanded security, compliance, and deployment governance controls
It is the only plan that is free for organizations

Question 10
A product group at Rivertown Robotics manages backlogs in GitHub across several repositories and wants to keep work visible as it grows. What is the main advantage of applying labels to issues pull requests and discussions in this situation? (Choose 1)

To create executive dashboards that summarize sprint velocity without any manual input
To group and set priority on issues pull requests and discussions so the team can manage workflow effectively
To automatically measure server uptime and CPU usage with Cloud Monitoring
To count the exact number of lines of code each contributor adds to the repository

Question 11
Which Git command removes app/secrets.txt from the index while leaving the file in the working directory so you can then add it to .gitignore? (Choose 1)

git restore --staged app/secrets.txt
git rm --cached app/secrets.txt
git rm app/secrets.txt
git update-index --assume-unchanged app/secrets.txt

Question 12
Aisha is working in the acme-analytics repository and needs a quick view of all open issues and pull requests that are assigned to her. Which search filter should she use? (Choose 1)

is:open mentions:@me
assignee:@me is:open
is:open author:@me
is:issue is:open assignee:@me

Question 13
A new engineering lead at scrumtuous.com wants to establish a collaborative culture for internal software development and the team keeps referring to InnerSource during planning. What does InnerSource mean in this situation? (Choose 1)

A cataloging tool that inventories third party open source components in codebases
Applying open source practices within a single company
Cloud Source Repositories
A personal initiative to apply open source methods to side projects

Question 14
An engineering team at mcnz.com is rolling out GitHub to support their development process and collaboration. What is the primary reason teams use GitHub in this situation? (Choose 1)

Automating test and build pipelines with GitHub Actions
Hosting a static website through GitHub Pages
Collaborating on source code with version control and pull requests
Publishing packages and artifacts with GitHub Packages

Question 15
A product design startup named Riverpine Labs plans to adopt InnerSource to speed delivery and reduce duplicated effort among its engineering teams. In this context what does InnerSource refer to? (Choose 1)

Using third-party open source packages inside the company
A specific type of open source license
Collaborative development where internal teams share and contribute to proprietary code across the company
Removing all use of open source from internal builds

Question 16
BlueSky Robotics keeps its code on GitHub and wants to improve onboarding and collaboration by adding a top level README to each repository. Which outcomes are the primary advantages of including a thorough README? (Choose 3)

Identify maintainers and typical contributor roles
Cloud Storage
Clarify what the project does and why it matters to potential users
Point people to places to ask questions or get support

Question 17
Priya maintains a shared library on GitHub for a fintech startup named HelioPay and she wants to keep third party packages current and safe across the repository. In GitHub, how can she use the dependency graph to discover what her project depends on and manage risk from those packages? (Choose 1)

She can use the dependency graph to measure unit test coverage across dependencies
She can use the dependency graph to monitor how many stars her repositories receive
She can review the dependency graph to list direct and transitive packages with version and license details and known vulnerability severity
She can rely on the dependency graph to report runtime latency and throughput for each library

Question 18
An engineering group at example.com wants to automate updates to GitHub Projects through the GraphQL API using the gh CLI and they need to sign in with a token that permits full project changes. Which gh auth login command should they run to grant the correct scope? (Choose 1)

gh auth login --scopes "repo"
gh auth login --scopes "project"
gh auth login --scopes "read:user"
gh auth login --scopes "read:project"

Question 19
Your team at Riverbend Analytics wants to move from a simple Markdown issue template to a more guided experience that requires users to provide environment details and reproduction steps. In GitHub, what is the key difference between an issue template and an issue form that supports this need? (Choose 1)

Issue templates must be created through the web UI, and issue forms can only be added by a pull request to the default branch
Issue templates are restricted to private repositories, and issue forms only work in public repositories
An issue template is Markdown content that contributors can replace with their own details, and an issue form is a YAML based form with structured fields and required inputs
Issue templates require HTML to design fields, and issue forms require a GitHub App to render the components

Question 20
You manage identity for Northbridge Labs and you want employees who are already authenticated on the corporate intranet to open example.com without entering credentials again. Which technology should you deploy to provide this seamless access? (Choose 1)

SSH keys
SAML based single sign on
Identity-Aware Proxy
Two factor authentication

Question 21
BrightByte created a new repository and plans to use only the default labels that GitHub adds so that issues can be triaged consistently. Which label listed here is not part of the standard default labels that appear in a newly created repository? (Choose 1)

Help wanted
Community contribution
Duplicate
Bug

Question 22
Riley Chen at mcnz.com needs to add a 220 MiB dataset to a GitHub repository for a machine learning workflow. What should Riley do to make sure the file is accepted by GitHub and the upload completes successfully? (Choose 1)

Split the file into several smaller chunks and commit them separately
Use Git Large File Storage to track and push the dataset
Upload the file using the GitHub web interface
Store the file in Google Cloud Storage and link to it from the repository

Question 23
At mcnz.com the product team uses GitHub Projects to plan the next three months of work and they want a view where they can place items on a time span and drag them to change start and target dates and align them to iterations. What best describes the Roadmap layout? (Choose 1)

a board view with customizable columns for moving items through stages
a spreadsheet style grid that lists issues, pull requests, and draft items with flexible fields and filters
a timeline view that maps issues, pull requests, and draft items across an adjustable time window and lets you drag to set dates and iterations
a tree layout that nests items into parent and child levels to show hierarchy

Question 24
An engineering group at scrumtuous.com uses a GitHub repository to automate deployments to Google Cloud through GitHub Actions. They want workflows to start automatically when typical collaboration tasks happen in the repository. Which activities should be configured to trigger a workflow run? (Choose 3)

Pushing new commits to any branch
Changing the repository visibility from private to public in settings
Opening a new issue in the repository
Creating a pull request that targets the main branch

Question 25
Engineers at BlueRidge Analytics rely on GitHub Copilot for code completion across languages ranging from JavaScript to Elixir. Which factor most affects how comprehensive and accurate the suggestions are for a particular language? (Choose 1)

GitHub Copilot focuses only on a shortlist of popular languages and ignores uncommon languages
Languages that appear less often in public repositories tend to receive fewer and weaker suggestions
GitHub Copilot treats every language the same regardless of how much open source code exists for it
Suggestion quality is not tied to training data size or diversity for each language

Question 26
In GitHub Projects, which Insights chart displays both completed work and total scope for the past 30 days? (Choose 1)

Lead time chart
Burn up chart
Burndown chart

Question 27
Priya, a maintainer at Riverstone Apps, needs to locate open issues in a GitHub repository that have no labels, have no assignee, and still have zero comments so she can triage them first. Which search query should she use? (Choose 1)

is:open is:issue label:none assignee:none comments:none
is:open is:issue no:label no:assignee comments:0
is:open is:issue -label:* -assignee:* -comments:*
is:open is:issue no:label is:unassigned comments:0

Question 28
A maintainer at scrumtuous.com reviews a repository and opens the Network graph to inspect recent branch activity. How many of the most recently updated branches can GitHub display in that view? (Choose 1)

Up to 75 branches
Up to 150 branches
Up to 100 branches
Up to 50 branches

Question 29
A team at Northwind Games is comparing GitHub Desktop with GitHub.com to plan their daily workflows. Which capability is available only in GitHub Desktop and not on GitHub.com? (Choose 1)

Create new repositories
Display commit and branch history in an interactive graph
Clone a repository to a local folder
View repository insights and traffic analytics

Question 30
Riverton Analytics just created a GitHub organization for its 28 person engineering group. Without granting any additional roles, which action accurately reflects the default capabilities of a regular organization member? (Choose 1)

Configure organization wide code review assignment rules
Invite people to join the organization
Create new repositories and set up project boards within the organization
Enforce branch protection and merge checks for all repositories

Question 31
Priya is contributing to a repository for mcnz.com and she wants to include an issue closing keyword in her pull request description so that the related issue links automatically when the change is merged. Which branch must be the base of her pull request for the keyword to be recognized? (Choose 1)

A branch in a fork
Any branch
The default branch
The release branch

Question 32
Solstice Data Co. has uncovered a flaw in a repository and the maintainers want to work with a small trusted group to produce a fix without revealing details in issues or pull requests, so which GitHub feature should they use to manage this privately before any public announcement? (Choose 1)

Dependabot alerts
SECURITY.md
GitHub Security Advisories
Private vulnerability reporting

Question 33
Your team at Northwind Analytics maintains a repository on GitHub and routinely reviews the Security tab to manage risks and follow compliance. Which item would not be shown or tracked on that Security tab? (Choose 1)

Security advisories for the repository
Security-related Issues opened in the repository
Code scanning findings
Security policy for the repository

Question 34
A new developer at scrumtuous.com wants to skip local setup by using GitHub Codespaces. What best describes what GitHub Codespaces provides? (Choose 1)

Cloud Workstations
A collaborative coding platform
A distributed version control system
A cloud-hosted development environment

Question 35
A developer at scrumtuous.com forks a shared repository on GitHub to propose changes. In common Git workflows what is the term for the original repository that the fork came from? (Choose 1)

source repository
downstream repository
upstream repository
origin remote

Question 36
A small engineering team at scrumtuous.com wants to interact with their repositories programmatically so they can connect internal tools and reduce repetitive tasks. What is the primary purpose of the GitHub API in this situation? (Choose 1)

Rendering change history and diffs within a repository interface
Automating workflows and creating custom integrations with GitHub
Compiling and packaging software entirely in the browser editor
Cloud Build

Question 37
Your team at Cedar Ridge Systems wants contributors from scrumtuous.com to provide consistent details when they report bugs or request features in your GitHub repository. What should you add so that a structured form and clear prompts are shown whenever a new issue is opened? (Choose 1)

Add default labels in the repository
Configure a pull request template
Create issue templates
Set up GitHub Projects

Question 38
A development team at NimbusWare operates GitHub Enterprise Server and needs to apply deployment protection rules for private and internal repositories. Which capability should they use to implement these rules? (Choose 1)

GitHub Advanced Security
GitHub Connect
GitHub Actions
GitHub Codespaces

Question 39
An engineer at Solstice Systems plans to share a code snippet using GitHub gists and wants to understand the available visibility choices. Which pair correctly identifies the two types of gist visibility on GitHub? (Choose 1)

Open and Closed
Public and Secret
Open and Hidden
Public and Private

Question 40
A developer at scrumtuous.com wants their project on GitHub to be easier for people to find and for potential contributors to locate related work. How do repository topics support this goal? (Choose 1)

Topics can only be added to public repositories and do not work on private repositories
Cloud Discovery Engine
Adding meaningful topics lets people browse and search by subject so they can find related repositories and discover projects to contribute to
GitHub allows unlimited topics and unlimited characters per topic for better search

Question 41
A small research collective at scrumtuous.com is preparing to open source several GitHub repositories and wants to know which security and analysis feature is turned on automatically without any action. Which option is enabled by default for public repositories? (Choose 1)

Secret scanning alerts for users
Private vulnerability reporting
Dependency graph
Dependabot alerts

Question 42
Priya maintains several repositories on GitHub and needs to make sure she sees important activity as it happens across her work. Which delivery methods on GitHub can she use to receive notifications about activity on GitHub.com? (Choose 3)

A Slack workspace using an app integration
The notifications inbox in the GitHub.com web interface
An email client configured with a verified email address
The notifications inbox in the GitHub Mobile app
An RSS or Atom feed subscription

Question 43
A development team at example.com plans to finish a feature branch by merging a pull request in GitHub, and they want to choose a method that shapes how the commit history will appear. Which set of actions are available to complete the pull request merge? (Choose 1)

Checkout a new branch, Commit updates, and Push to origin
Run Cloud Build, Deploy to Cloud Run, and Tag a release
Create a merge commit, Squash commits and merge, and Rebase and merge
Open a pull request, Request a review, and Close the pull request

Question 44
A software team at Skyline Analytics wants to publish detailed guides for their open source library that cover usage instructions design decisions and core principles. In GitHub, how should they create and maintain these long form documents so that contributors can collaboratively edit them? (Choose 1)

Create a new branch to store the documentation and commit the articles there
Open the repository Wiki and add a new page with the content
Add a README.md file in the repository root with all long form details
Enable Dependabot in the repository and post the documentation content there

Question 45
RivoMart runs GitHub Enterprise Cloud and needs to automatically create and retire organization-owned developer accounts for about 450 engineers while enforcing single sign-on from the start. Which GitHub capability should the administrators use to provision and centrally manage these user identities? (Choose 1)

GitHub Advanced Security
Enterprise Managed Users
Cloud Identity
GitHub Connect

Question 46
At a volunteer-run project under the example.com organization, you are reviewing open issues to choose one to contribute to, but you want to avoid duplicating someone else's effort. Which GitHub capability lets contributors clearly indicate that work on a particular issue is underway so teammates can see progress? (Choose 1)

Use the issues and pull requests search to filter by author and status
Apply an In Progress label to the issue
Link a pull request or a branch to the issue to signal active work
Cloud Build

Question 47
What is the key difference in the compute environment between GitHub.dev and GitHub Codespaces? (Choose 1)

GitHub.dev allocates more powerful CPUs and memory than GitHub Codespaces
Codespaces provides a cloud VM for build and debug while GitHub.dev has no server compute
Both run in identical cloud VMs

Question 48
A project team at scrumtuous.com is organizing work in a GitHub repository and wants to understand how to use milestones versus labels to manage issues and pull requests. What is the key distinction between milestones and labels for tracking work? (Choose 1)

Milestones manage repository permissions, while labels enforce priority levels
Milestones set target dates and measure progress for a collection of related issues or pull requests, while labels simply categorize items
Milestones are a feature of Cloud Source Repositories, while labels are available only within GitHub issues and pull requests
Milestones track individual commits, while labels group entire repositories`,Nf=String.raw`Question 49
Your developer community at mcnz.com needs to decide where to host open conversations and where to track actionable work within a public repository. Which statement accurately distinguishes GitHub Issues from GitHub Discussions? (Choose 1)

GitHub Issues and GitHub Discussions are equivalent and both are intended to be tracked on project boards
GitHub Projects replace both GitHub Issues and GitHub Discussions for all collaboration needs
GitHub Discussions are for open community conversations that do not need project board tracking and are not directly tied to code, whereas GitHub Issues are for trackable work
GitHub Issues handle unstructured community chats that do not belong on a project board, while GitHub Discussions are for actionable tasks tied to code

Question 50
In a repository discussion for the NebulaKit project, a participant posts a nested reply under an earlier comment that fully resolves the issue. Can that threaded reply be marked as the accepted answer to the discussion? (Choose 1)

Only top level comments can be marked as answers
A nested reply can be marked as the answer only after it gets at least 5 upvotes
Nested replies can be selected as the accepted answer
A threaded reply can be marked only if it is the first reply in that thread

Question 51
Within the GitHub GraphQL API for Projects, what action does the addProjectV2ItemById mutation carry out when you provide a project identifier and the node ID of an issue or a pull request? (Choose 1)

It updates the project settings such as fields or visibility
It removes an existing item from the project
It adds the referenced issue or pull request as a new item in the specified project
It creates a new project in the organization

Question 52
At Solstice Robotics a hiring manager is reviewing a candidate's public GitHub profile to know what information any visitor can see. Which elements are typically shown on a public GitHub user profile? (Choose 1)

complete comment history all forks created and file download logs
private repositories organization secret teams and deployment keys
basic profile details achievements profile README repositories pinned repositories and stars
Cloud Storage BigQuery and Cloud Run

Question 53
A technical writer at Harbor Tech is reviewing a README and wants to verify that each Markdown element is paired with the correct syntax. Which pairing is not using the proper Markdown syntax? (Choose 1)

Hyperlink paired with [Docs](https://example.com)
Bold text paired with **important**
Inline code paired with '''snippet'''
Heading paired with # Project Overview

Question 54
Riverstone Analytics manages 28 repositories that share similar build and deployment steps in GitHub Actions, and the team plans to invoke centrally maintained reusable workflows from their pipelines to standardize processes across projects. What is the most important advantage of adopting reusable workflows in this scenario? (Choose 1)

Shorter execution time for jobs
Letting a called workflow use GitHub-hosted runners from the caller repository
Reducing redundant configuration and reinforcing shared best practices
Automatic sharing of repository secrets across all workflows

Question 55
Riverline Analytics oversees several public repositories on GitHub and wants security researchers to know the correct way to disclose issues responsibly. In this context, what best describes a repository security policy on GitHub? (Choose 1)

A hub for publishing and viewing security advisories
Security Command Center
A documented process that instructs users how to privately report potential security issues to the maintainers
Settings that manage dependency vulnerability alert notifications
Organization level GitHub Advanced Security configuration

Question 56
A product team at Northwind Apps wants to evaluate GitHub Copilot to speed up delivery. What core task is GitHub Copilot primarily intended to help developers with? (Choose 1)

Running continuous integration builds using Cloud Build
Automating code compilation and producing binaries
Facilitating team collaboration and pull request workflows
Offering context aware code suggestions and generating snippets

Question 57
An engineering team at scrumtuous.com wants a central place on GitHub to keep their project files and collaborate and review the full history of changes. Which GitHub construct provides this central location and shows the project's revision history? (Choose 1)

Issue
Branch
Repository
Commit

Question 58
A documentation team at Northwind Robotics maintains a GitHub wiki and wants GitHub to automatically include a custom footer and a custom sidebar. Which filenames should they create locally in the wiki so that GitHub uses them, and what determines how those pages are rendered? (Choose 1)

Create files named footer.html and sidebar.html in the wiki root
Enable a footer and sidebar through repository settings
Create files named _Footer.ext and _Sidebar.ext and the file extension defines the rendering
Add YAML front matter to any page to mark it as the footer or sidebar

Question 59
Anika, a developer at a media analytics startup named Streammelt, is organizing a confidential project in a private GitHub repository and wants to tag it with topics that reflect the frameworks and features in use so collaborators can discover related work more easily. What is the visibility of topic names that are added to a private repository on GitHub? (Choose 1)

Topic names mirror the repository's privacy setting
Topic names for private repositories are visible to everyone
The repository owner can set topic names to public or private
Topic names in private repositories remain hidden from other users

Question 60
Neha maintains a GitHub repository for a logistics tool used by mcnz.com and a recent workflow run failed after a third party action changed versions. She needs to review which actions her workflows reference so she can audit them for security and reliability. Where should she look to see the actions referenced by the workflows in that repository? (Choose 1)

GitHub Marketplace
The dependency graph in the repository
The Actions tab of the repository
Cloud Build

Question 61
A product team at scrumtuous.com needs a shared space in GitHub to plan work, monitor issues, and connect pull requests across several repositories. What best describes a GitHub project? (Choose 1)

Git
A planning workspace that links issues and pull requests so teams can organize and track work
Cloud Source Repositories
GitHub Pages

Question 62
Engineers at scrumtuous.com use a feature branch workflow in GitHub. You finished work on a branch named feature-checkout and opened a pull request to merge it into the main branch. When is it appropriate to delete the feature branch to keep the repository tidy? (Choose 1)

Before you open the pull request
Once the pull request is merged or closed
Immediately after you create the pull request
After the first successful CI workflow run

Question 63
A small team at Nimbus Labs manages a public repository on GitHub and wants their automation to run when code is pushed, when a maintainer clicks Run workflow, on a timer every 30 minutes, and when an external service at example.com calls the REST API. Which statement best describes which events can start a GitHub Actions workflow run? (Choose 1)

Only commits to the default branch can start a workflow
Cloud Scheduler is required because GitHub Actions cannot be started by schedules or API requests
Pushes, manual runs, scheduled intervals, and REST API calls can all initiate a workflow run
Workflows can run only when an administrator manually uses the Run workflow button

Question 64
A team at scrumtuous.com wants a single area within their repository where maintainers contributors and visitors can ask questions share announcements collect feedback and make decisions without using third party tools. Which GitHub capability should they use for this purpose? (Choose 1)

Organizing tasks and milestones with Projects
Creating and controlling new repositories
Hosting community conversations like Q&A updates and feedback in one place
Reviewing code and merging pull requests

Question 65
In a repository used by the design group at scrumtuous.com you keep a .gitignore in the project root and another .gitignore inside src/mobile after a recent refactor. If both files specify conflicting patterns for the same file path located under src/mobile then which file determines whether Git ignores that path? (Choose 1)

The root .gitignore always overrides entries in deeper folders
Git combines both files and treats any path ignored by either as ignored
The .gitignore inside src/mobile overrides the root rules within that subtree
Git asks the user to choose which pattern to apply at commit time

Question 66
Which features are part of GitHub Advanced Security on GitHub.com? (Choose 3)

Secret scanning
Dependabot security updates
Dependency review
Code scanning

Question 67
At NovaSoft a cross functional team wants to improve how work items are organized in their GitHub repository. They plan to rely on labels to streamline triage and reporting. In this scenario what is an appropriate way to use labels? (Choose 1)

Applying labels to files and folders to organize the repository tree
Labeling issues and pull requests so they can be grouped and filtered during triage
Giving contributors labels that define their roles and access rights
Adding labels directly to releases so the labels appear in the release notes

Question 68
Which GitHub Actions feature allows pull requests to trigger automated tests and deploy releases from the repository? (Choose 1)

GitHub Pages
Event-driven workflows with reusable actions for CI and deployment
Project milestone tracking
Repository permission management

Question 69
Riverbend Robotics uses a free GitHub organization and is evaluating an upgrade to GitHub Team to better support its repositories and contributors. Which capability would be added by moving from the free organization plan to the GitHub Team plan? (Choose 1)

Team access controls for managing groups
A higher monthly allowance of GitHub Actions minutes along with more GitHub Packages storage
Authentication with SAML single sign on for members
GitHub Advanced Security

Question 70
At scrumtuous.com your team plans to move from Projects Classic to the updated GitHub Projects experience. Which features are unique to the new Projects when compared with Projects Classic? (Choose 2)

Projects supports columns and cards
Insights is available in the new Projects experience
Projects includes Copilot Chat within boards
The new Projects adds table and roadmap views and offers advanced customization with built in automation
Projects Classic has exclusive column presets for agile templates

Question 71
The customer success team at scrumtuous.com wants to standardize frequent responses in GitHub so that reviewers can reply consistently across many projects. They plan to rely on saved replies. Which statements correctly describe how saved replies behave and where they can be used? (Choose 3)

Saved replies can only be inserted within a single repository
Saved replies are owned by your personal account rather than a repository or organization
Saved replies are managed at the organization level and cannot be used in personal accounts
Saved replies let you quickly reuse text in issues, pull requests, and discussions
GitHub provides a "Duplicate issue" saved reply that you can use to mark duplicates

Question 72
Blue Harbor Robotics is adopting a standardized approach to automation governance and has assigned the Security Manager role to oversee GitHub Actions at the organization level. Which task can a person with this role carry out for the organization? (Choose 1)

Disable pull request reviews for every repository in the organization
Remove the branch protection rule that requires successful status checks before merging
Define which actions and reusable workflows are permitted or blocked for the whole organization
Delete all workflow runs from private repositories that are older than 120 days

Question 73
The engineering team at mcnz.com uses GitHub Enterprise Cloud and needs a repository type that lets every member of the enterprise view and contribute without making it public, while another repository type should stay limited to only the people who are invited. What is the key difference between an internal repository and a private repository in this situation? (Choose 1)

Private repositories can be viewed by anyone with a GitHub account, while internal repositories are restricted to enterprise members
Internal repositories are available to all members of the enterprise, while private repositories are limited to collaborators you explicitly add
Private repositories are visible to everyone in the organization by default, while internal repositories can only be seen by selected teams
Internal repositories are public to the internet but write restricted to enterprise members, while private repositories allow read access for outside collaborators by default

Question 74
A product team at Northwind Robotics wants a simple collaboration model that fits frequent small releases. Which description most accurately captures how GitHub Flow operates? (Choose 1)

A trunk based development approach where commits land on one shared branch many times per day and pull requests are optional
An automation pattern where every push to the main branch produces and deploys a new release
A branch based workflow where each change is developed in a dedicated branch and merged to main through a pull request after review and testing
A practice where each commit to main triggers CI and validation pipelines to test code

Question 75
Riverbend Analytics wants internal projects to be visible and reusable across 15 engineering teams while keeping the code private within the organization. Which practice should the company adopt to encourage collaboration and transparent code sharing across departments? (Choose 1)

Cloud Source Repositories
Continuous Integration
InnerSource
Open source

Question 76
A media analytics firm named Clearwave Media keeps several private repositories on GitHub and wants to stop API keys and passwords from being committed by mistake. What does the GitHub Secret scanning feature provide to address this need? (Choose 1)

Automates code scanning to detect vulnerabilities in source code
Finds exposed secrets and credentials that were committed to the repository
Tracks the volume and status of pull requests across the repository
Maps and displays the project's dependency graph and related updates

Question 77
A community manager at an open source collective wants to enable funding on GitHub to support projects. Which account types on the platform can accept sponsorships through GitHub Sponsors? (Choose 2)

Any user who has recently contributed to a public repository on GitHub
An individual developer account that has created a GitHub Sponsors developer profile
Any account with an active GitHub Pro subscription
An organization account that has set up a GitHub Sponsors organization profile

Question 78
Nia Alvarez has pushed a set of changes to a shared repository on GitHub for a logistics app at example.com. Soon after, Nia realizes that one particular commit introduced a faulty change and needs to back out just that commit while keeping the project history intact and leaving all other commits in place. What Git command should be used to achieve this? (Choose 1)

git commit --amend
git reset
git revert
git checkout

Question 79
Lena maintains a repository for scrumtuous.com and wants code owners to be requested automatically when someone opens a pull request that touches the files they own. Where does the CODEOWNERS file need to exist so that review requests trigger when the pull request is created? (Choose 1)

Inside the .git folder of the repository
In the same directory as the changed files
On the base branch targeted by the pull request
Cloud Source Repositories

Question 80
A product team at Blue Harbor Studios is reviewing GitHub's Copilot X vision and wants to identify a primary capability that goes beyond ordinary autocomplete suggestions, so which description correctly reflects one of the capabilities planned for Copilot X? (Choose 1)

Exclusive support for Visual Studio Code with no integration for other IDEs
Removal of code completion in favor of documentation search only
An IDE-native chat experience that uses GPT-4 to explain code, write tests, and suggest fixes
Always-on real time comments for every line as you type in the editor

Question 81

Which three files can a user automatically add while creating a new repository?
A. README, .gitignore, and LICENSE
B. README, .git, and DOCS
C. LICENSE, DOCS, and .gitignore
D. LICENSE, .git, and README

Question 82

What type of operations has Git been optimized for?
A. remote collaboration and real-time editing
B. web development and browser-based coding
C. local file manipulation and offline work
D. cloud-based operations and synchronization

Question 83

Which of the following default workflows are available as part of GitHub project automation? (Choose three)
A. "Pull request merged"
B. "Label added to issue"
C. "Auto-archive items"
D. "Item closed"
E. "Pull request opened"

Question 84

How can a user resume an existing Codespace that is bound to a repository? (Choose two)
A. Browse to the repository in GitHub.com, press the comma "," key and select the Codespace
B. Browse to the repository in GitHub.com and press the period "." key
C. Use the git CLI with the codespace parameter
D. Open https://github.com/codespaces in the browser and select the repository

Question 85

In GitHub flow, what is the primary operation when a pull request is approved?
A. A release issue is created
B. The changes are deployed
C. The feature branch is merged
D. A git tag is created

Question 86

For which of the following does GitHub provide hosted runners?
A. Linux, Windows, and macOS
B. Docker
C. Kubernetes
D. AWS, Azure, and GCP

Question 87

Which of the following is the best description of a Git commit?
A. a record of the most recent changes
B. a log message describing the purpose of changes
C. a snapshot of the entire repository at a specific point in time
D. a series of changes made to files

Question 88

Which of the following best describes GitHub flow?
A. branching model using feature branches + multiple primary branches
B. a lightweight workflow that allows safe experimentation
C. strategy with separate branches for each release
D. strict workflow enforcing linear development

Question 89

Which mechanisms can you use to personalize Codespaces for yourself? (Choose two)
A. operating system
B. IDE plug-ins
C. branch protections
D. dotfiles
E. settings sync
F. devcontainer

Question 90

What qualifier finds issues that mention a certain user?
A. mentioned:
B. threads:
C. mentions:
D. @mentioned:

Question 91

Why are GitHub pull request templates recommended for teams? (Choose two)
A. to provide an easy-to-fill-out form for creating pull requests
B. to automatically trigger GitHub Actions workflows
C. to automatically label or assign newly created pull requests
D. to easily coerce existing pull requests into a standardized format

Question 92

Which statement most accurately describes secret gists?
A. Secret gists require GitHub Enterprise
B. Anyone with the URL for the gist can view the gist
C. Users with assigned access can view the gist
D. Anyone can see the gist on the Discover page

Question 93

Which version control system is GitHub built on?
A. Git
B. Perforce
C. Subversion
D. Mercurial

Question 94

Which Discussion category allows a user to mark a response as the answer?
A. General
B. Ideas
C. Q&A
D. Polls

Question 95

What should a user follow to see public activity on their personal dashboard? (Choose two)
A. enterprises
B. people
C. teams
D. organizations
E. stars

Question 96

What are achievements on a GitHub user profile?
A. virtual trophies awarded for completing coding challenges
B. number of stars received
C. special recognition for significant contributions and milestones
D. number of repositories owned`,Rf=String.raw`Question 97

Which GitHub features enhance collaboration?
A. real-time collaboration via pair programming
B. git repository hosting & sharing
C. code review and discussion through issues & pull requests
D. automated testing and code quality analysis

Question 98

Who can be assigned to an issue or pull request? (Choose two)
A. anyone with write permissions to the repository
B. anyone with an enterprise GitHub account
C. anyone who has commented
D. anyone who has a personal GitHub account

Question 99

Which GitHub feature supports polling?
A. Wikis
B. Projects
C. Discussions
D. Issues

Question 100

What is the purpose of a GitHub repository?
A. to provide a collaborative space where developers can share and manage code
B. cloud hosting for documentation
C. a version control system designed for small projects
D. a folder storing project files locally

Question 101

Which of the following permissions can be enabled or disabled at the repository level? (Choose two)
A. repository naming convention
B. repository deletion and transfer
C. repository secrets
D. repository visibility change

Question 102

Which keywords are used to link a pull request to an issue? (Choose two)
A. fix
B. merge
C. join
D. closed
E. connects
F. resolves

Question 103

GitHub Copilot leverages an AI model trained on:
A. public, internal, and private repos in your GitHub account
B. public GitHub repositories
C. public + internal org repositories
D. code samples from online forums

Question 104

What are advantages of GitHub Projects over GitHub Projects (classic)? (Choose two)
A. Copilot enabled
B. Multiple layout views
C. Insights
D. Third-party tool integration

Question 105

What is the primary goal of GitHub in terms of integrating tools and services?
A. to develop proprietary tools
B. to bring developers' preferred tools together in one place
C. create a unified standardized ecosystem
D. diverse range of tools per need

Question 106

Employee needs to find all issues within org "Avocado" labeled "guacamole" containing "404 error". Which option is correct?
A. Go to org settings
B. Enter query: org:Avocado is:issue label:guacamole "404 error"
C. Go to Avocado org -> Issues
D. Enter query with incorrect formatting

Question 107

Where can a user manually link a pull request to an issue?
A. right sidebar of PR under Assignees
B. right sidebar under Development
C. in the description of the issue
D. in the comment section

Question 108

What should you append to the link to see who starred a repo?
A. stargazers
B. starwatcher
C. stars
D. starviewers

Question 109

While maintaining gist history, what is the most efficient way to create a new gist based on an existing one?
A. Fork the gist
B. Clone the gist
C. Request to be added
D. Create new and copy manually

Question 110

How are issues and pull requests used?
A. Issues are used to push bug fixes... PRs push feature requests
B. Issues are used to track ideas, document feedback, and share information
C. (duplicate of B)
D. Issues push bug fixes... PRs track ideas

Question 111

Which Insights feature allows users to view repository activity including pull requests, issues, and commits?
A. Pulse
B. Code frequency
C. Traffic
D. Activity overview

Question 112

What is a benefit of using GitHub Enterprise Cloud with Enterprise Managed Users (EMU)?
A. Automatically validates user interactions
B. Provides centralized control and streamlined management of user accounts
C. Additional collaboration features
D. Enables access to protected resources using SAML

Question 113

What template types are available when creating an issue template? (Choose three)
A. Custom template
B. Bug report
C. Security notification
D. Feature request
E. Standard template

Question 114

A centralized version control system is a system that:
A. requires developers to manually track
B. relies on a central server to store the entire project history
C. ensures each developer has local copy of history
D. stores files on cloud server

Question 115

As a repository admin, which alerts can you see in the Security tab? (Choose three)
A. Secret Scanning
B. Dependabot
C. Branch Protection
D. Push Protection Bypass
E. Code Scanning

Question 116

Without advanced search syntax, what can GitHub's basic filters show you? (Choose two)
A. everything assigned to your team
B. everything you have commented on
C. your project
D. your issues
E. everything assigned to you

Question 117

What are two recommended ways to improve repository discoverability? (Choose two)
A. Create a README file describing the repository
B. Register the repo with GitHub search
C. Add labels
D. Add topics to classify the repository

Question 118

Draft Pull Requests - which statement is true?
A. Cannot be merged; code owners not requested
B. Can be merged; code owners not requested
C. Can be merged, and code owners are automatically requested
D. Cannot be merged; code owners requested

Question 119

Which of the following are characteristics of GitHub Teams? (Choose two)
A. Teams require access to at least one repository
B. Team visibility can be visible or secret
C. Teams can be nested
D. Teams have a maximum size of 100 users

Question 120

When creating a repository from a template, what will the new repository not inherit?
A. default branch
B. contributors
C. pull requests
D. commit history

Question 121

The difference between GitHub Enterprise Server (GHES) and GitHub Enterprise Cloud (GHEC) is:
A. can be deployed on both Windows and Linux
B. is a self-hosted solution that allows organizations full control
C. cannot enable rate limiting
D. includes authentication with SAML single sign-on

Question 122

As a user, what feature can you use to merge proposed changes?
A. discussions
B. projects
C. issues
D. pull requests

Question 123

Which of the following is a key characteristic of GitHub Projects?
A. ability to import Gantt charts from MS Project
B. ability to create and customize multiple views
C. ability to enforce required fields
D. ability to visualize commit history

Question 124

What is the difference between an organization member and an outside collaborator?
A. Outside collaborators cannot be given admin role
B. Organization base permissions do not apply to outside collaborators
C. Outside collaborators do not consume paid licenses
D. 2FA is not required for outside collaborators

Question 125

Which of the following are components of GitHub Actions? (Choose multiple)
A. jobs
B. CI/CD
C. agents
D. octokit
E. JavaScript
F. steps
G. events

Question 126

Pull requests can only be created between two branches that are:
A. the same
B. authored by different users
C. different
D. authored by the same user

Question 127

What are all repository visibility options in GitHub Enterprise?
A. public, internal, and private
B. public, private
C. external, public, and private
D. external, private

Question 128

Which statement most accurately describes who can access a repository wiki?
A. Wikis are public
B. Wikis will not be visible until shared
C. Wikis are only viewable by repository admins
D. Wikis can be viewed by people with Read access

Question 129

Which of the following steps are part of the Codespaces lifecycle? (Choose three)
A. Install
B. Rollback
C. Clone
D. Rebuild
E. Delete
F. Create
G. Commit

Question 130

Which of the following attributes are on the Milestone page? (Choose two)
A. GitHub Action workflows needed for milestone
B. Summary list of Projects tagged to the milestone
C. milestone completion percentage
D. list of open/closed issues

Question 131

What is a Git remote?
A. a branch in the repository
B. a reference to a repository hosted elsewhere
C. a local copy of the repository
D. a test repository

Question 132

What steps must you follow to use GitHub Copilot? (Choose two)
A. Sign disclaimer
B. Sign up for Copilot & enable
C. Install Copilot IDE extension
D. Store projects on GitHub
E. Install Copilot App

Question 133

Which syntax is used for authoring saved replies?
A. Markdown
B. HTML
C. YAML
D. Markup

Question 134

Which of the following are counted in the contribution graph? (Choose two)
A. pull requests created
B. public repositories
C. commits made
D. issues closed
E. followers

Question 135

Workflows can reference actions in (Choose three):
A. enterprise marketplace
B. any public repository
C. Docker Hub
D. GitHub Packages
E. same repository

Question 136

Which of the following can you do to highlight a discussion?
A. Save
B. Create issue
C. Star
D. Pin

Question 137

Which of the following is a restriction for EMUs?
A. Users cannot create public repos
B. GitHub teams must link to IdP groups
C. Organization base permissions cannot apply
D. Custom roles unavailable

Question 138

Which of the following is always true about Alpha/Beta?
A. Alpha features not available to public
B. Alpha features documented
C. Alpha & Beta guarantee SLAs
D. Beta offers technical support

Question 139

New open source contributors can receive funding from GitHub Sponsors...
A. equal to 95%
B. including GitHub matching funds
C. via PayPal
D. after setting profile

Question 140

What is the difference between Git and GitHub?
A. Git is centralized; GitHub is cloud-based
B. Git is cloud hosting; GitHub distributed VCS
C. Git/GitHub same tool
D. Git tracks file changes, GitHub is a collaboration platform

Question 141

Which GitHub tool is best to quickly modify a batch of files?
A. git CLI
B. github.dev
C. GitHub Desktop
D. Codespaces
E. GitHub Mobile

Question 142

How is github.dev different than Codespaces?
A. Extensions supported fully
B. Free monthly quota
C. Codespaces provides terminal access
D. Codespaces available in browser

Question 143

Copilot for Individuals offers which features not in Copilot for Business? (Choose two)
A. multi-line suggestions
B. support personal GitHub accounts
C. org policy management
D. blocks matching public code
E. telemetry
F. VPN proxy support

Question 144

Which 2FA methods can you use? (Choose three)
A. security questions
B. security keys
C. single sign-on
D. GitHub mobile
E. authenticator app
F. SMS`,zf=[Pf,Nf,Rf].join(`

`),je=zf.split(/(?=Question\s+\d+)/g).map(e=>e.trim()).filter(Boolean).map(Af),Ju="github-quiz-studio-state-v1";function _f(){try{const e=window.localStorage.getItem(Ju);return e?JSON.parse(e):{}}catch{return{}}}function Hf(e){const t=e%10,n=e%100;return t===1&&n!==11?`${e}st`:t===2&&n!==12?`${e}nd`:t===3&&n!==13?`${e}rd`:`${e}th`}function Df(){const[e,t]=Ge.useState(_f),[n,r]=Ge.useState("all"),[o,i]=Ge.useState(""),[l,s]=Ge.useState(!1);Ge.useEffect(()=>{window.localStorage.setItem(Ju,JSON.stringify(e))},[e]);const a=Ge.useMemo(()=>je.filter(h=>(e[h.id]||[]).length>0).length,[e]),c=Ge.useMemo(()=>je.filter(h=>h.choose>1).length,[]),y=Ge.useMemo(()=>{const h=o.trim().toLowerCase();return je.filter(N=>{const u=(e[N.id]||[]).length>0,f=`${N.label} ${N.prompt} ${N.options.join(" ")}`.toLowerCase(),g=!h||f.includes(h),C=n==="all"?!0:n==="answered"?u:n==="unanswered"?!u:N.choose>1;return g&&C&&(!l||u)})},[e,l,n,o]),m=je.length?Math.round(a/je.length*100):0;function p(h,N){t(d=>{const u=new Set(d[h.id]||[]);if(h.choose===1)u.has(N)?u.clear():(u.clear(),u.add(N));else if(u.has(N))u.delete(N);else if(u.size<h.choose)u.add(N);else{const f=[...u].sort((g,C)=>g-C);u.delete(f[0]),u.add(N)}return{...d,[h.id]:[...u].sort((f,g)=>f-g)}})}function w(){t({})}function k(){var N;const h=je.find(d=>(e[d.id]||[]).length===0);h&&((N=document.getElementById(h.id))==null||N.scrollIntoView({behavior:"smooth",block:"start"}))}return React.createElement("div",{className:"shell"},React.createElement("aside",{className:"sidebar panel"},React.createElement("div",{className:"brand"},React.createElement("span",{className:"eyebrow"},"Quiz Studio"),React.createElement("h1",null,"GitHub Mastery"),React.createElement("div",{className:"lede"},"A polished React quiz experience with progress memory, search, and a fast question navigator.")),React.createElement("div",{className:"stats"},React.createElement("div",{className:"stat"},React.createElement("strong",null,je.length),React.createElement("span",{className:"muted"},"total questions")),React.createElement("div",{className:"stat"},React.createElement("strong",null,a),React.createElement("span",{className:"muted"},"answered"))),React.createElement("div",{className:"progress-wrap"},React.createElement("div",{className:"progress-meta"},React.createElement("span",null,"Progress"),React.createElement("strong",null,m,"%")),React.createElement("div",{className:"bar"},React.createElement("span",{style:{width:`${m}%`}}))),React.createElement("div",{className:"navigator"},je.map(h=>{const N=(e[h.id]||[]).length>0,d=y.some(u=>u.id===h.id);return React.createElement("button",{key:h.id,className:`nav-item ${N?"answered":""} ${d?"active":""}`,onClick:()=>{var u;return(u=document.getElementById(h.id))==null?void 0:u.scrollIntoView({behavior:"smooth",block:"start"})}},React.createElement("div",{className:"nav-topline"},React.createElement("span",null,h.label),React.createElement("span",null,h.choose>1?`Pick ${h.choose}`:"Pick 1")),React.createElement("div",{className:"nav-title"},h.prompt))})),React.createElement("div",{className:"nav-actions"},React.createElement("button",{className:"ghost",onClick:k},"First Unanswered"),React.createElement("button",{className:"ghost",onClick:w},"Reset"))),React.createElement("main",{className:"main"},React.createElement("section",{className:"hero panel"},React.createElement("div",{className:"hero-grid"},React.createElement("div",null,React.createElement("span",{className:"eyebrow hero-eyebrow"},"Interactive Review"),React.createElement("h2",null,"Study beautifully, move quickly."),React.createElement("p",null,"Every answer you choose is saved locally in your browser. Search by keyword, focus on unanswered prompts, and jump through the full question bank without losing your place.")),React.createElement("div",{className:"hero-cards"},React.createElement("div",{className:"hero-card"},React.createElement("strong",null,c),React.createElement("span",null,"multi-select questions")),React.createElement("div",{className:"hero-card"},React.createElement("strong",null,je.length-c),React.createElement("span",null,"single-select questions")),React.createElement("div",{className:"hero-card"},React.createElement("strong",null,"Auto-save"),React.createElement("span",null,"Selections persist in local storage")),React.createElement("div",{className:"hero-card"},React.createElement("strong",null,"React SPA"),React.createElement("span",null,"Component-driven, ready for Vite"))))),React.createElement("section",{className:"toolbar panel"},React.createElement("div",{className:"toolbar-top"},React.createElement("input",{className:"search",type:"search",value:o,onChange:h=>i(h.target.value),placeholder:"Search questions, topics, or answer text"}),React.createElement("button",{className:"primary",onClick:()=>s(h=>!h)},l?"Show All Results":"Show Answered Only")),React.createElement("div",{className:"filters"},[["all","All Questions"],["unanswered","Unanswered"],["answered","Answered"],["multi","Multi-select"]].map(([h,N])=>React.createElement("button",{key:h,className:`pill ${n===h?"active":""}`,onClick:()=>r(h)},N)))),React.createElement("section",{className:"questions"},y.length===0?React.createElement("div",{className:"results-empty"},"No questions match the current search and filter combination."):y.map((h,N)=>{const d=new Set(e[h.id]||[]);return React.createElement("article",{key:h.id,className:"question",id:h.id,style:{animationDelay:`${Math.min(N*18,240)}ms`}},React.createElement("div",{className:"question-head"},React.createElement("div",null,React.createElement("div",{className:"question-index"},h.label," · ",Hf(h.ordinal)," in deck"),React.createElement("h3",null,h.prompt)),React.createElement("div",{className:"choice-badge"},h.choose>1?`Choose ${h.choose}`:"Choose 1")),React.createElement("div",{className:"options"},h.options.map((u,f)=>React.createElement("label",{key:`${h.id}-${f}`,className:`option ${d.has(f)?"selected":""}`},React.createElement("input",{hidden:!0,type:h.choose>1?"checkbox":"radio",checked:d.has(f),onChange:()=>p(h,f)}),React.createElement("span",{className:"option-key"},String.fromCharCode(65+f)),React.createElement("span",{className:"option-text"},u),React.createElement("span",{className:"option-mark","aria-hidden":"true"})))),React.createElement("div",{className:"question-foot"},React.createElement("span",null,d.size?`${d.size} selected`:"No answer selected yet"),React.createElement("span",null,h.options.length," options")))}))))}Vo.createRoot(document.getElementById("root")).render(ko.createElement(ko.StrictMode,null,ko.createElement(Df,null)));
