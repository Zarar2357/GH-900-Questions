(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function dc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xl={exports:{}},uo={},Zl={exports:{}},b={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nr=Symbol.for("react.element"),fc=Symbol.for("react.portal"),pc=Symbol.for("react.fragment"),hc=Symbol.for("react.strict_mode"),mc=Symbol.for("react.profiler"),gc=Symbol.for("react.provider"),yc=Symbol.for("react.context"),vc=Symbol.for("react.forward_ref"),wc=Symbol.for("react.suspense"),kc=Symbol.for("react.memo"),Cc=Symbol.for("react.lazy"),Os=Symbol.iterator;function Sc(e){return e===null||typeof e!="object"?null:(e=Os&&e[Os]||e["@@iterator"],typeof e=="function"?e:null)}var Jl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ea=Object.assign,ta={};function fn(e,t,n){this.props=e,this.context=t,this.refs=ta,this.updater=n||Jl}fn.prototype.isReactComponent={};fn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function na(){}na.prototype=fn.prototype;function qi(e,t,n){this.props=e,this.context=t,this.refs=ta,this.updater=n||Jl}var Yi=qi.prototype=new na;Yi.constructor=qi;ea(Yi,fn.prototype);Yi.isPureReactComponent=!0;var Ws=Array.isArray,ra=Object.prototype.hasOwnProperty,Ki={current:null},oa={key:!0,ref:!0,__self:!0,__source:!0};function ia(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)ra.call(t,r)&&!oa.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];o.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:nr,type:e,key:i,ref:s,props:o,_owner:Ki.current}}function xc(e,t){return{$$typeof:nr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Xi(e){return typeof e=="object"&&e!==null&&e.$$typeof===nr}function Ec(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Fs=/\/+/g;function jo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ec(""+e.key):t.toString(36)}function Nr(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case nr:case fc:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+jo(s,0):r,Ws(o)?(n="",e!=null&&(n=e.replace(Fs,"$&/")+"/"),Nr(o,t,n,"",function(c){return c})):o!=null&&(Xi(o)&&(o=xc(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Fs,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",Ws(e))for(var l=0;l<e.length;l++){i=e[l];var a=r+jo(i,l);s+=Nr(i,t,n,a,o)}else if(a=Sc(e),typeof a=="function")for(e=a.call(e),l=0;!(i=e.next()).done;)i=i.value,a=r+jo(i,l++),s+=Nr(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function ar(e,t,n){if(e==null)return e;var r=[],o=0;return Nr(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Ac(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},jr={transition:null},Nc={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:jr,ReactCurrentOwner:Ki};function sa(){throw Error("act(...) is not supported in production builds of React.")}b.Children={map:ar,forEach:function(e,t,n){ar(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ar(e,function(){t++}),t},toArray:function(e){return ar(e,function(t){return t})||[]},only:function(e){if(!Xi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};b.Component=fn;b.Fragment=pc;b.Profiler=mc;b.PureComponent=qi;b.StrictMode=hc;b.Suspense=wc;b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nc;b.act=sa;b.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ea({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=Ki.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)ra.call(t,a)&&!oa.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:nr,type:e.type,key:o,ref:i,props:r,_owner:s}};b.createContext=function(e){return e={$$typeof:yc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:gc,_context:e},e.Consumer=e};b.createElement=ia;b.createFactory=function(e){var t=ia.bind(null,e);return t.type=e,t};b.createRef=function(){return{current:null}};b.forwardRef=function(e){return{$$typeof:vc,render:e}};b.isValidElement=Xi;b.lazy=function(e){return{$$typeof:Cc,_payload:{_status:-1,_result:e},_init:Ac}};b.memo=function(e,t){return{$$typeof:kc,type:e,compare:t===void 0?null:t}};b.startTransition=function(e){var t=jr.transition;jr.transition={};try{e()}finally{jr.transition=t}};b.unstable_act=sa;b.useCallback=function(e,t){return de.current.useCallback(e,t)};b.useContext=function(e){return de.current.useContext(e)};b.useDebugValue=function(){};b.useDeferredValue=function(e){return de.current.useDeferredValue(e)};b.useEffect=function(e,t){return de.current.useEffect(e,t)};b.useId=function(){return de.current.useId()};b.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};b.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};b.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};b.useMemo=function(e,t){return de.current.useMemo(e,t)};b.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};b.useRef=function(e){return de.current.useRef(e)};b.useState=function(e){return de.current.useState(e)};b.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};b.useTransition=function(){return de.current.useTransition()};b.version="18.3.1";Zl.exports=b;var te=Zl.exports;const jc=dc(te);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pc=te,_c=Symbol.for("react.element"),zc=Symbol.for("react.fragment"),Dc=Object.prototype.hasOwnProperty,Hc=Pc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bc={key:!0,ref:!0,__self:!0,__source:!0};function la(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Dc.call(t,r)&&!bc.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:_c,type:e,key:i,ref:s,props:o,_owner:Hc.current}}uo.Fragment=zc;uo.jsx=la;uo.jsxs=la;Xl.exports=uo;var p=Xl.exports,ti={},aa={exports:{}},xe={},ua={exports:{}},ca={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(k,_){var z=k.length;k.push(_);e:for(;0<z;){var T=z-1>>>1,V=k[T];if(0<o(V,_))k[T]=_,k[z]=V,z=T;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var _=k[0],z=k.pop();if(z!==_){k[0]=z;e:for(var T=0,V=k.length,It=V>>>1;T<It;){var St=2*(T+1)-1,No=k[St],xt=St+1,lr=k[xt];if(0>o(No,z))xt<V&&0>o(lr,No)?(k[T]=lr,k[xt]=z,T=xt):(k[T]=No,k[St]=z,T=St);else if(xt<V&&0>o(lr,z))k[T]=lr,k[xt]=z,T=xt;else break e}}return _}function o(k,_){var z=k.sortIndex-_.sortIndex;return z!==0?z:k.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],c=[],g=1,m=null,h=3,C=!1,v=!1,x=!1,I=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(k){for(var _=n(c);_!==null;){if(_.callback===null)r(c);else if(_.startTime<=k)r(c),_.sortIndex=_.expirationTime,t(a,_);else break;_=n(c)}}function y(k){if(x=!1,f(k),!v)if(n(a)!==null)v=!0,D(E);else{var _=n(c);_!==null&&$(y,_.startTime-k)}}function E(k,_){v=!1,x&&(x=!1,d(P),P=-1),C=!0;var z=h;try{for(f(_),m=n(a);m!==null&&(!(m.expirationTime>_)||k&&!ve());){var T=m.callback;if(typeof T=="function"){m.callback=null,h=m.priorityLevel;var V=T(m.expirationTime<=_);_=e.unstable_now(),typeof V=="function"?m.callback=V:m===n(a)&&r(a),f(_)}else r(a);m=n(a)}if(m!==null)var It=!0;else{var St=n(c);St!==null&&$(y,St.startTime-_),It=!1}return It}finally{m=null,h=z,C=!1}}var j=!1,N=null,P=-1,O=5,H=-1;function ve(){return!(e.unstable_now()-H<O)}function et(){if(N!==null){var k=e.unstable_now();H=k;var _=!0;try{_=N(!0,k)}finally{_?Ct():(j=!1,N=null)}}else j=!1}var Ct;if(typeof u=="function")Ct=function(){u(et)};else if(typeof MessageChannel<"u"){var mn=new MessageChannel,S=mn.port2;mn.port1.onmessage=et,Ct=function(){S.postMessage(null)}}else Ct=function(){I(et,0)};function D(k){N=k,j||(j=!0,Ct())}function $(k,_){P=I(function(){k(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){v||C||(v=!0,D(E))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(k){switch(h){case 1:case 2:case 3:var _=3;break;default:_=h}var z=h;h=_;try{return k()}finally{h=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,_){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var z=h;h=k;try{return _()}finally{h=z}},e.unstable_scheduleCallback=function(k,_,z){var T=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?T+z:T):z=T,k){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=z+V,k={id:g++,callback:_,priorityLevel:k,startTime:z,expirationTime:V,sortIndex:-1},z>T?(k.sortIndex=z,t(c,k),n(a)===null&&k===n(c)&&(x?(d(P),P=-1):x=!0,$(y,z-T))):(k.sortIndex=V,t(a,k),v||C||(v=!0,D(E))),k},e.unstable_shouldYield=ve,e.unstable_wrapCallback=function(k){var _=h;return function(){var z=h;h=_;try{return k.apply(this,arguments)}finally{h=z}}}})(ca);ua.exports=ca;var Tc=ua.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rc=te,Se=Tc;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,In={};function Lt(e,t){on(e,t),on(e+"Capture",t)}function on(e,t){for(In[e]=t,e=0;e<t.length;e++)da.add(t[e])}var Ye=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ni=Object.prototype.hasOwnProperty,Lc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Us={},$s={};function Gc(e){return ni.call($s,e)?!0:ni.call(Us,e)?!1:Lc.test(e)?$s[e]=!0:(Us[e]=!0,!1)}function Ic(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Bc(e,t,n,r){if(t===null||typeof t>"u"||Ic(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function fe(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];oe[t]=new fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){oe[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){oe[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){oe[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Zi=/[\-:]([a-z])/g;function Ji(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Zi,Ji);oe[t]=new fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Zi,Ji);oe[t]=new fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Zi,Ji);oe[t]=new fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});oe.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){oe[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function es(e,t,n,r){var o=oe.hasOwnProperty(t)?oe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Bc(t,n,o,r)&&(n=null),r||o===null?Gc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Je=Rc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ur=Symbol.for("react.element"),Qt=Symbol.for("react.portal"),Mt=Symbol.for("react.fragment"),ts=Symbol.for("react.strict_mode"),ri=Symbol.for("react.profiler"),fa=Symbol.for("react.provider"),pa=Symbol.for("react.context"),ns=Symbol.for("react.forward_ref"),oi=Symbol.for("react.suspense"),ii=Symbol.for("react.suspense_list"),rs=Symbol.for("react.memo"),nt=Symbol.for("react.lazy"),ha=Symbol.for("react.offscreen"),Vs=Symbol.iterator;function gn(e){return e===null||typeof e!="object"?null:(e=Vs&&e[Vs]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,Po;function An(e){if(Po===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Po=t&&t[1]||""}return`
`+Po+e}var _o=!1;function zo(e,t){if(!e||_o)return"";_o=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,l=i.length-1;1<=s&&0<=l&&o[s]!==i[l];)l--;for(;1<=s&&0<=l;s--,l--)if(o[s]!==i[l]){if(s!==1||l!==1)do if(s--,l--,0>l||o[s]!==i[l]){var a=`
`+o[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{_o=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?An(e):""}function Qc(e){switch(e.tag){case 5:return An(e.type);case 16:return An("Lazy");case 13:return An("Suspense");case 19:return An("SuspenseList");case 0:case 2:case 15:return e=zo(e.type,!1),e;case 11:return e=zo(e.type.render,!1),e;case 1:return e=zo(e.type,!0),e;default:return""}}function si(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mt:return"Fragment";case Qt:return"Portal";case ri:return"Profiler";case ts:return"StrictMode";case oi:return"Suspense";case ii:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pa:return(e.displayName||"Context")+".Consumer";case fa:return(e._context.displayName||"Context")+".Provider";case ns:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case rs:return t=e.displayName||null,t!==null?t:si(e.type)||"Memo";case nt:t=e._payload,e=e._init;try{return si(e(t))}catch{}}return null}function Mc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return si(t);case 8:return t===ts?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ma(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Oc(e){var t=ma(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function cr(e){e._valueTracker||(e._valueTracker=Oc(e))}function ga(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ma(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function li(e,t){var n=t.checked;return U({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function qs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ya(e,t){t=t.checked,t!=null&&es(e,"checked",t,!1)}function ai(e,t){ya(e,t);var n=gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ui(e,t.type,n):t.hasOwnProperty("defaultValue")&&ui(e,t.type,gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ys(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ui(e,t,n){(t!=="number"||Br(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Nn=Array.isArray;function Zt(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ci(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return U({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ks(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(Nn(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gt(n)}}function va(e,t){var n=gt(t.value),r=gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Xs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function wa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function di(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?wa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var dr,ka=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(dr=dr||document.createElement("div"),dr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=dr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Bn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _n={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wc=["Webkit","ms","Moz","O"];Object.keys(_n).forEach(function(e){Wc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_n[t]=_n[e]})});function Ca(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_n.hasOwnProperty(e)&&_n[e]?(""+t).trim():t+"px"}function Sa(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ca(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Fc=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fi(e,t){if(t){if(Fc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function pi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hi=null;function os(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mi=null,Jt=null,en=null;function Zs(e){if(e=ir(e)){if(typeof mi!="function")throw Error(w(280));var t=e.stateNode;t&&(t=mo(t),mi(e.stateNode,e.type,t))}}function xa(e){Jt?en?en.push(e):en=[e]:Jt=e}function Ea(){if(Jt){var e=Jt,t=en;if(en=Jt=null,Zs(e),t)for(e=0;e<t.length;e++)Zs(t[e])}}function Aa(e,t){return e(t)}function Na(){}var Do=!1;function ja(e,t,n){if(Do)return e(t,n);Do=!0;try{return Aa(e,t,n)}finally{Do=!1,(Jt!==null||en!==null)&&(Na(),Ea())}}function Qn(e,t){var n=e.stateNode;if(n===null)return null;var r=mo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var gi=!1;if(Ye)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){gi=!0}}),window.addEventListener("test",yn,yn),window.removeEventListener("test",yn,yn)}catch{gi=!1}function Uc(e,t,n,r,o,i,s,l,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var zn=!1,Qr=null,Mr=!1,yi=null,$c={onError:function(e){zn=!0,Qr=e}};function Vc(e,t,n,r,o,i,s,l,a){zn=!1,Qr=null,Uc.apply($c,arguments)}function qc(e,t,n,r,o,i,s,l,a){if(Vc.apply(this,arguments),zn){if(zn){var c=Qr;zn=!1,Qr=null}else throw Error(w(198));Mr||(Mr=!0,yi=c)}}function Gt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Pa(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Js(e){if(Gt(e)!==e)throw Error(w(188))}function Yc(e){var t=e.alternate;if(!t){if(t=Gt(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Js(o),e;if(i===r)return Js(o),t;i=i.sibling}throw Error(w(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s){for(l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function _a(e){return e=Yc(e),e!==null?za(e):null}function za(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=za(e);if(t!==null)return t;e=e.sibling}return null}var Da=Se.unstable_scheduleCallback,el=Se.unstable_cancelCallback,Kc=Se.unstable_shouldYield,Xc=Se.unstable_requestPaint,Y=Se.unstable_now,Zc=Se.unstable_getCurrentPriorityLevel,is=Se.unstable_ImmediatePriority,Ha=Se.unstable_UserBlockingPriority,Or=Se.unstable_NormalPriority,Jc=Se.unstable_LowPriority,ba=Se.unstable_IdlePriority,co=null,Oe=null;function ed(e){if(Oe&&typeof Oe.onCommitFiberRoot=="function")try{Oe.onCommitFiberRoot(co,e,void 0,(e.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:rd,td=Math.log,nd=Math.LN2;function rd(e){return e>>>=0,e===0?32:31-(td(e)/nd|0)|0}var fr=64,pr=4194304;function jn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~o;l!==0?r=jn(l):(i&=s,i!==0&&(r=jn(i)))}else s=n&~o,s!==0?r=jn(s):i!==0&&(r=jn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Le(t),o=1<<n,r|=e[n],t&=~o;return r}function od(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function id(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Le(i),l=1<<s,a=o[s];a===-1?(!(l&n)||l&r)&&(o[s]=od(l,t)):a<=t&&(e.expiredLanes|=l),i&=~l}}function vi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ta(){var e=fr;return fr<<=1,!(fr&4194240)&&(fr=64),e}function Ho(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Le(t),e[t]=n}function sd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Le(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ss(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Le(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var L=0;function Ra(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var La,ls,Ga,Ia,Ba,wi=!1,hr=[],at=null,ut=null,ct=null,Mn=new Map,On=new Map,ot=[],ld="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tl(e,t){switch(e){case"focusin":case"focusout":at=null;break;case"dragenter":case"dragleave":ut=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":Mn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":On.delete(t.pointerId)}}function vn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=ir(t),t!==null&&ls(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function ad(e,t,n,r,o){switch(t){case"focusin":return at=vn(at,e,t,n,r,o),!0;case"dragenter":return ut=vn(ut,e,t,n,r,o),!0;case"mouseover":return ct=vn(ct,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Mn.set(i,vn(Mn.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,On.set(i,vn(On.get(i)||null,e,t,n,r,o)),!0}return!1}function Qa(e){var t=Nt(e.target);if(t!==null){var n=Gt(t);if(n!==null){if(t=n.tag,t===13){if(t=Pa(n),t!==null){e.blockedOn=t,Ba(e.priority,function(){Ga(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ki(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);hi=r,n.target.dispatchEvent(r),hi=null}else return t=ir(n),t!==null&&ls(t),e.blockedOn=n,!1;t.shift()}return!0}function nl(e,t,n){Pr(e)&&n.delete(t)}function ud(){wi=!1,at!==null&&Pr(at)&&(at=null),ut!==null&&Pr(ut)&&(ut=null),ct!==null&&Pr(ct)&&(ct=null),Mn.forEach(nl),On.forEach(nl)}function wn(e,t){e.blockedOn===t&&(e.blockedOn=null,wi||(wi=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,ud)))}function Wn(e){function t(o){return wn(o,e)}if(0<hr.length){wn(hr[0],e);for(var n=1;n<hr.length;n++){var r=hr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(at!==null&&wn(at,e),ut!==null&&wn(ut,e),ct!==null&&wn(ct,e),Mn.forEach(t),On.forEach(t),n=0;n<ot.length;n++)r=ot[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ot.length&&(n=ot[0],n.blockedOn===null);)Qa(n),n.blockedOn===null&&ot.shift()}var tn=Je.ReactCurrentBatchConfig,Fr=!0;function cd(e,t,n,r){var o=L,i=tn.transition;tn.transition=null;try{L=1,as(e,t,n,r)}finally{L=o,tn.transition=i}}function dd(e,t,n,r){var o=L,i=tn.transition;tn.transition=null;try{L=4,as(e,t,n,r)}finally{L=o,tn.transition=i}}function as(e,t,n,r){if(Fr){var o=ki(e,t,n,r);if(o===null)Oo(e,t,r,Ur,n),tl(e,r);else if(ad(o,e,t,n,r))r.stopPropagation();else if(tl(e,r),t&4&&-1<ld.indexOf(e)){for(;o!==null;){var i=ir(o);if(i!==null&&La(i),i=ki(e,t,n,r),i===null&&Oo(e,t,r,Ur,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Oo(e,t,r,null,n)}}var Ur=null;function ki(e,t,n,r){if(Ur=null,e=os(r),e=Nt(e),e!==null)if(t=Gt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Pa(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ur=e,null}function Ma(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zc()){case is:return 1;case Ha:return 4;case Or:case Jc:return 16;case ba:return 536870912;default:return 16}default:return 16}}var st=null,us=null,_r=null;function Oa(){if(_r)return _r;var e,t=us,n=t.length,r,o="value"in st?st.value:st.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return _r=o.slice(e,1<r?1-r:void 0)}function zr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mr(){return!0}function rl(){return!1}function Ee(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?mr:rl,this.isPropagationStopped=rl,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mr)},persist:function(){},isPersistent:mr}),t}var pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cs=Ee(pn),or=U({},pn,{view:0,detail:0}),fd=Ee(or),bo,To,kn,fo=U({},or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ds,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kn&&(kn&&e.type==="mousemove"?(bo=e.screenX-kn.screenX,To=e.screenY-kn.screenY):To=bo=0,kn=e),bo)},movementY:function(e){return"movementY"in e?e.movementY:To}}),ol=Ee(fo),pd=U({},fo,{dataTransfer:0}),hd=Ee(pd),md=U({},or,{relatedTarget:0}),Ro=Ee(md),gd=U({},pn,{animationName:0,elapsedTime:0,pseudoElement:0}),yd=Ee(gd),vd=U({},pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wd=Ee(vd),kd=U({},pn,{data:0}),il=Ee(kd),Cd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ed(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xd[e])?!!t[e]:!1}function ds(){return Ed}var Ad=U({},or,{key:function(e){if(e.key){var t=Cd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ds,charCode:function(e){return e.type==="keypress"?zr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nd=Ee(Ad),jd=U({},fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sl=Ee(jd),Pd=U({},or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ds}),_d=Ee(Pd),zd=U({},pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dd=Ee(zd),Hd=U({},fo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bd=Ee(Hd),Td=[9,13,27,32],fs=Ye&&"CompositionEvent"in window,Dn=null;Ye&&"documentMode"in document&&(Dn=document.documentMode);var Rd=Ye&&"TextEvent"in window&&!Dn,Wa=Ye&&(!fs||Dn&&8<Dn&&11>=Dn),ll=" ",al=!1;function Fa(e,t){switch(e){case"keyup":return Td.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ua(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ot=!1;function Ld(e,t){switch(e){case"compositionend":return Ua(t);case"keypress":return t.which!==32?null:(al=!0,ll);case"textInput":return e=t.data,e===ll&&al?null:e;default:return null}}function Gd(e,t){if(Ot)return e==="compositionend"||!fs&&Fa(e,t)?(e=Oa(),_r=us=st=null,Ot=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wa&&t.locale!=="ko"?null:t.data;default:return null}}var Id={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ul(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Id[e.type]:t==="textarea"}function $a(e,t,n,r){xa(r),t=$r(t,"onChange"),0<t.length&&(n=new cs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Hn=null,Fn=null;function Bd(e){ru(e,0)}function po(e){var t=Ut(e);if(ga(t))return e}function Qd(e,t){if(e==="change")return t}var Va=!1;if(Ye){var Lo;if(Ye){var Go="oninput"in document;if(!Go){var cl=document.createElement("div");cl.setAttribute("oninput","return;"),Go=typeof cl.oninput=="function"}Lo=Go}else Lo=!1;Va=Lo&&(!document.documentMode||9<document.documentMode)}function dl(){Hn&&(Hn.detachEvent("onpropertychange",qa),Fn=Hn=null)}function qa(e){if(e.propertyName==="value"&&po(Fn)){var t=[];$a(t,Fn,e,os(e)),ja(Bd,t)}}function Md(e,t,n){e==="focusin"?(dl(),Hn=t,Fn=n,Hn.attachEvent("onpropertychange",qa)):e==="focusout"&&dl()}function Od(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return po(Fn)}function Wd(e,t){if(e==="click")return po(t)}function Fd(e,t){if(e==="input"||e==="change")return po(t)}function Ud(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ie=typeof Object.is=="function"?Object.is:Ud;function Un(e,t){if(Ie(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ni.call(t,o)||!Ie(e[o],t[o]))return!1}return!0}function fl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pl(e,t){var n=fl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fl(n)}}function Ya(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ya(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ka(){for(var e=window,t=Br();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Br(e.document)}return t}function ps(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function $d(e){var t=Ka(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ya(n.ownerDocument.documentElement,n)){if(r!==null&&ps(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=pl(n,i);var s=pl(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vd=Ye&&"documentMode"in document&&11>=document.documentMode,Wt=null,Ci=null,bn=null,Si=!1;function hl(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Si||Wt==null||Wt!==Br(r)||(r=Wt,"selectionStart"in r&&ps(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bn&&Un(bn,r)||(bn=r,r=$r(Ci,"onSelect"),0<r.length&&(t=new cs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Wt)))}function gr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ft={animationend:gr("Animation","AnimationEnd"),animationiteration:gr("Animation","AnimationIteration"),animationstart:gr("Animation","AnimationStart"),transitionend:gr("Transition","TransitionEnd")},Io={},Xa={};Ye&&(Xa=document.createElement("div").style,"AnimationEvent"in window||(delete Ft.animationend.animation,delete Ft.animationiteration.animation,delete Ft.animationstart.animation),"TransitionEvent"in window||delete Ft.transitionend.transition);function ho(e){if(Io[e])return Io[e];if(!Ft[e])return e;var t=Ft[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Xa)return Io[e]=t[n];return e}var Za=ho("animationend"),Ja=ho("animationiteration"),eu=ho("animationstart"),tu=ho("transitionend"),nu=new Map,ml="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vt(e,t){nu.set(e,t),Lt(t,[e])}for(var Bo=0;Bo<ml.length;Bo++){var Qo=ml[Bo],qd=Qo.toLowerCase(),Yd=Qo[0].toUpperCase()+Qo.slice(1);vt(qd,"on"+Yd)}vt(Za,"onAnimationEnd");vt(Ja,"onAnimationIteration");vt(eu,"onAnimationStart");vt("dblclick","onDoubleClick");vt("focusin","onFocus");vt("focusout","onBlur");vt(tu,"onTransitionEnd");on("onMouseEnter",["mouseout","mouseover"]);on("onMouseLeave",["mouseout","mouseover"]);on("onPointerEnter",["pointerout","pointerover"]);on("onPointerLeave",["pointerout","pointerover"]);Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pn));function gl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,qc(r,t,void 0,e),e.currentTarget=null}function ru(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==i&&o.isPropagationStopped())break e;gl(o,l,c),i=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,c=l.currentTarget,l=l.listener,a!==i&&o.isPropagationStopped())break e;gl(o,l,c),i=a}}}if(Mr)throw e=yi,Mr=!1,yi=null,e}function B(e,t){var n=t[ji];n===void 0&&(n=t[ji]=new Set);var r=e+"__bubble";n.has(r)||(ou(t,e,2,!1),n.add(r))}function Mo(e,t,n){var r=0;t&&(r|=4),ou(n,e,r,t)}var yr="_reactListening"+Math.random().toString(36).slice(2);function $n(e){if(!e[yr]){e[yr]=!0,da.forEach(function(n){n!=="selectionchange"&&(Kd.has(n)||Mo(n,!1,e),Mo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[yr]||(t[yr]=!0,Mo("selectionchange",!1,t))}}function ou(e,t,n,r){switch(Ma(t)){case 1:var o=cd;break;case 4:o=dd;break;default:o=as}n=o.bind(null,t,n,e),o=void 0,!gi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Oo(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;s=s.return}for(;l!==null;){if(s=Nt(l),s===null)return;if(a=s.tag,a===5||a===6){r=i=s;continue e}l=l.parentNode}}r=r.return}ja(function(){var c=i,g=os(n),m=[];e:{var h=nu.get(e);if(h!==void 0){var C=cs,v=e;switch(e){case"keypress":if(zr(n)===0)break e;case"keydown":case"keyup":C=Nd;break;case"focusin":v="focus",C=Ro;break;case"focusout":v="blur",C=Ro;break;case"beforeblur":case"afterblur":C=Ro;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=ol;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=hd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=_d;break;case Za:case Ja:case eu:C=yd;break;case tu:C=Dd;break;case"scroll":C=fd;break;case"wheel":C=bd;break;case"copy":case"cut":case"paste":C=wd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=sl}var x=(t&4)!==0,I=!x&&e==="scroll",d=x?h!==null?h+"Capture":null:h;x=[];for(var u=c,f;u!==null;){f=u;var y=f.stateNode;if(f.tag===5&&y!==null&&(f=y,d!==null&&(y=Qn(u,d),y!=null&&x.push(Vn(u,y,f)))),I)break;u=u.return}0<x.length&&(h=new C(h,v,null,n,g),m.push({event:h,listeners:x}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",h&&n!==hi&&(v=n.relatedTarget||n.fromElement)&&(Nt(v)||v[Ke]))break e;if((C||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,C?(v=n.relatedTarget||n.toElement,C=c,v=v?Nt(v):null,v!==null&&(I=Gt(v),v!==I||v.tag!==5&&v.tag!==6)&&(v=null)):(C=null,v=c),C!==v)){if(x=ol,y="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(x=sl,y="onPointerLeave",d="onPointerEnter",u="pointer"),I=C==null?h:Ut(C),f=v==null?h:Ut(v),h=new x(y,u+"leave",C,n,g),h.target=I,h.relatedTarget=f,y=null,Nt(g)===c&&(x=new x(d,u+"enter",v,n,g),x.target=f,x.relatedTarget=I,y=x),I=y,C&&v)t:{for(x=C,d=v,u=0,f=x;f;f=Bt(f))u++;for(f=0,y=d;y;y=Bt(y))f++;for(;0<u-f;)x=Bt(x),u--;for(;0<f-u;)d=Bt(d),f--;for(;u--;){if(x===d||d!==null&&x===d.alternate)break t;x=Bt(x),d=Bt(d)}x=null}else x=null;C!==null&&yl(m,h,C,x,!1),v!==null&&I!==null&&yl(m,I,v,x,!0)}}e:{if(h=c?Ut(c):window,C=h.nodeName&&h.nodeName.toLowerCase(),C==="select"||C==="input"&&h.type==="file")var E=Qd;else if(ul(h))if(Va)E=Fd;else{E=Od;var j=Md}else(C=h.nodeName)&&C.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=Wd);if(E&&(E=E(e,c))){$a(m,E,n,g);break e}j&&j(e,h,c),e==="focusout"&&(j=h._wrapperState)&&j.controlled&&h.type==="number"&&ui(h,"number",h.value)}switch(j=c?Ut(c):window,e){case"focusin":(ul(j)||j.contentEditable==="true")&&(Wt=j,Ci=c,bn=null);break;case"focusout":bn=Ci=Wt=null;break;case"mousedown":Si=!0;break;case"contextmenu":case"mouseup":case"dragend":Si=!1,hl(m,n,g);break;case"selectionchange":if(Vd)break;case"keydown":case"keyup":hl(m,n,g)}var N;if(fs)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Ot?Fa(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Wa&&n.locale!=="ko"&&(Ot||P!=="onCompositionStart"?P==="onCompositionEnd"&&Ot&&(N=Oa()):(st=g,us="value"in st?st.value:st.textContent,Ot=!0)),j=$r(c,P),0<j.length&&(P=new il(P,e,null,n,g),m.push({event:P,listeners:j}),N?P.data=N:(N=Ua(n),N!==null&&(P.data=N)))),(N=Rd?Ld(e,n):Gd(e,n))&&(c=$r(c,"onBeforeInput"),0<c.length&&(g=new il("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:c}),g.data=N))}ru(m,t)})}function Vn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $r(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Qn(e,n),i!=null&&r.unshift(Vn(e,i,o)),i=Qn(e,t),i!=null&&r.push(Vn(e,i,o))),e=e.return}return r}function Bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yl(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var l=n,a=l.alternate,c=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&c!==null&&(l=c,o?(a=Qn(n,i),a!=null&&s.unshift(Vn(n,a,l))):o||(a=Qn(n,i),a!=null&&s.push(Vn(n,a,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Xd=/\r\n?/g,Zd=/\u0000|\uFFFD/g;function vl(e){return(typeof e=="string"?e:""+e).replace(Xd,`
`).replace(Zd,"")}function vr(e,t,n){if(t=vl(t),vl(e)!==t&&n)throw Error(w(425))}function Vr(){}var xi=null,Ei=null;function Ai(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ni=typeof setTimeout=="function"?setTimeout:void 0,Jd=typeof clearTimeout=="function"?clearTimeout:void 0,wl=typeof Promise=="function"?Promise:void 0,ef=typeof queueMicrotask=="function"?queueMicrotask:typeof wl<"u"?function(e){return wl.resolve(null).then(e).catch(tf)}:Ni;function tf(e){setTimeout(function(){throw e})}function Wo(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Wn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Wn(t)}function dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function kl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var hn=Math.random().toString(36).slice(2),Me="__reactFiber$"+hn,qn="__reactProps$"+hn,Ke="__reactContainer$"+hn,ji="__reactEvents$"+hn,nf="__reactListeners$"+hn,rf="__reactHandles$"+hn;function Nt(e){var t=e[Me];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ke]||n[Me]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=kl(e);e!==null;){if(n=e[Me])return n;e=kl(e)}return t}e=n,n=e.parentNode}return null}function ir(e){return e=e[Me]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ut(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function mo(e){return e[qn]||null}var Pi=[],$t=-1;function wt(e){return{current:e}}function Q(e){0>$t||(e.current=Pi[$t],Pi[$t]=null,$t--)}function G(e,t){$t++,Pi[$t]=e.current,e.current=t}var yt={},ae=wt(yt),me=wt(!1),Dt=yt;function sn(e,t){var n=e.type.contextTypes;if(!n)return yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ge(e){return e=e.childContextTypes,e!=null}function qr(){Q(me),Q(ae)}function Cl(e,t,n){if(ae.current!==yt)throw Error(w(168));G(ae,t),G(me,n)}function iu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(w(108,Mc(e)||"Unknown",o));return U({},n,r)}function Yr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yt,Dt=ae.current,G(ae,e),G(me,me.current),!0}function Sl(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=iu(e,t,Dt),r.__reactInternalMemoizedMergedChildContext=e,Q(me),Q(ae),G(ae,e)):Q(me),G(me,n)}var Ue=null,go=!1,Fo=!1;function su(e){Ue===null?Ue=[e]:Ue.push(e)}function of(e){go=!0,su(e)}function kt(){if(!Fo&&Ue!==null){Fo=!0;var e=0,t=L;try{var n=Ue;for(L=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ue=null,go=!1}catch(o){throw Ue!==null&&(Ue=Ue.slice(e+1)),Da(is,kt),o}finally{L=t,Fo=!1}}return null}var Vt=[],qt=0,Kr=null,Xr=0,Ne=[],je=0,Ht=null,$e=1,Ve="";function Et(e,t){Vt[qt++]=Xr,Vt[qt++]=Kr,Kr=e,Xr=t}function lu(e,t,n){Ne[je++]=$e,Ne[je++]=Ve,Ne[je++]=Ht,Ht=e;var r=$e;e=Ve;var o=32-Le(r)-1;r&=~(1<<o),n+=1;var i=32-Le(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,$e=1<<32-Le(t)+o|n<<o|r,Ve=i+e}else $e=1<<i|n<<o|r,Ve=e}function hs(e){e.return!==null&&(Et(e,1),lu(e,1,0))}function ms(e){for(;e===Kr;)Kr=Vt[--qt],Vt[qt]=null,Xr=Vt[--qt],Vt[qt]=null;for(;e===Ht;)Ht=Ne[--je],Ne[je]=null,Ve=Ne[--je],Ne[je]=null,$e=Ne[--je],Ne[je]=null}var Ce=null,ke=null,M=!1,Re=null;function au(e,t){var n=Pe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function xl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ce=e,ke=dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ce=e,ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ht!==null?{id:$e,overflow:Ve}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Pe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ce=e,ke=null,!0):!1;default:return!1}}function _i(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zi(e){if(M){var t=ke;if(t){var n=t;if(!xl(e,t)){if(_i(e))throw Error(w(418));t=dt(n.nextSibling);var r=Ce;t&&xl(e,t)?au(r,n):(e.flags=e.flags&-4097|2,M=!1,Ce=e)}}else{if(_i(e))throw Error(w(418));e.flags=e.flags&-4097|2,M=!1,Ce=e}}}function El(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ce=e}function wr(e){if(e!==Ce)return!1;if(!M)return El(e),M=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ai(e.type,e.memoizedProps)),t&&(t=ke)){if(_i(e))throw uu(),Error(w(418));for(;t;)au(e,t),t=dt(t.nextSibling)}if(El(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ke=dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ke=null}}else ke=Ce?dt(e.stateNode.nextSibling):null;return!0}function uu(){for(var e=ke;e;)e=dt(e.nextSibling)}function ln(){ke=Ce=null,M=!1}function gs(e){Re===null?Re=[e]:Re.push(e)}var sf=Je.ReactCurrentBatchConfig;function Cn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var l=o.refs;s===null?delete l[i]:l[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function kr(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Al(e){var t=e._init;return t(e._payload)}function cu(e){function t(d,u){if(e){var f=d.deletions;f===null?(d.deletions=[u],d.flags|=16):f.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function o(d,u){return d=mt(d,u),d.index=0,d.sibling=null,d}function i(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags|=2,u):f):(d.flags|=2,u)):(d.flags|=1048576,u)}function s(d){return e&&d.alternate===null&&(d.flags|=2),d}function l(d,u,f,y){return u===null||u.tag!==6?(u=Xo(f,d.mode,y),u.return=d,u):(u=o(u,f),u.return=d,u)}function a(d,u,f,y){var E=f.type;return E===Mt?g(d,u,f.props.children,y,f.key):u!==null&&(u.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===nt&&Al(E)===u.type)?(y=o(u,f.props),y.ref=Cn(d,u,f),y.return=d,y):(y=Gr(f.type,f.key,f.props,null,d.mode,y),y.ref=Cn(d,u,f),y.return=d,y)}function c(d,u,f,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=Zo(f,d.mode,y),u.return=d,u):(u=o(u,f.children||[]),u.return=d,u)}function g(d,u,f,y,E){return u===null||u.tag!==7?(u=zt(f,d.mode,y,E),u.return=d,u):(u=o(u,f),u.return=d,u)}function m(d,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Xo(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case ur:return f=Gr(u.type,u.key,u.props,null,d.mode,f),f.ref=Cn(d,null,u),f.return=d,f;case Qt:return u=Zo(u,d.mode,f),u.return=d,u;case nt:var y=u._init;return m(d,y(u._payload),f)}if(Nn(u)||gn(u))return u=zt(u,d.mode,f,null),u.return=d,u;kr(d,u)}return null}function h(d,u,f,y){var E=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return E!==null?null:l(d,u,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ur:return f.key===E?a(d,u,f,y):null;case Qt:return f.key===E?c(d,u,f,y):null;case nt:return E=f._init,h(d,u,E(f._payload),y)}if(Nn(f)||gn(f))return E!==null?null:g(d,u,f,y,null);kr(d,f)}return null}function C(d,u,f,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(f)||null,l(u,d,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ur:return d=d.get(y.key===null?f:y.key)||null,a(u,d,y,E);case Qt:return d=d.get(y.key===null?f:y.key)||null,c(u,d,y,E);case nt:var j=y._init;return C(d,u,f,j(y._payload),E)}if(Nn(y)||gn(y))return d=d.get(f)||null,g(u,d,y,E,null);kr(u,y)}return null}function v(d,u,f,y){for(var E=null,j=null,N=u,P=u=0,O=null;N!==null&&P<f.length;P++){N.index>P?(O=N,N=null):O=N.sibling;var H=h(d,N,f[P],y);if(H===null){N===null&&(N=O);break}e&&N&&H.alternate===null&&t(d,N),u=i(H,u,P),j===null?E=H:j.sibling=H,j=H,N=O}if(P===f.length)return n(d,N),M&&Et(d,P),E;if(N===null){for(;P<f.length;P++)N=m(d,f[P],y),N!==null&&(u=i(N,u,P),j===null?E=N:j.sibling=N,j=N);return M&&Et(d,P),E}for(N=r(d,N);P<f.length;P++)O=C(N,d,P,f[P],y),O!==null&&(e&&O.alternate!==null&&N.delete(O.key===null?P:O.key),u=i(O,u,P),j===null?E=O:j.sibling=O,j=O);return e&&N.forEach(function(ve){return t(d,ve)}),M&&Et(d,P),E}function x(d,u,f,y){var E=gn(f);if(typeof E!="function")throw Error(w(150));if(f=E.call(f),f==null)throw Error(w(151));for(var j=E=null,N=u,P=u=0,O=null,H=f.next();N!==null&&!H.done;P++,H=f.next()){N.index>P?(O=N,N=null):O=N.sibling;var ve=h(d,N,H.value,y);if(ve===null){N===null&&(N=O);break}e&&N&&ve.alternate===null&&t(d,N),u=i(ve,u,P),j===null?E=ve:j.sibling=ve,j=ve,N=O}if(H.done)return n(d,N),M&&Et(d,P),E;if(N===null){for(;!H.done;P++,H=f.next())H=m(d,H.value,y),H!==null&&(u=i(H,u,P),j===null?E=H:j.sibling=H,j=H);return M&&Et(d,P),E}for(N=r(d,N);!H.done;P++,H=f.next())H=C(N,d,P,H.value,y),H!==null&&(e&&H.alternate!==null&&N.delete(H.key===null?P:H.key),u=i(H,u,P),j===null?E=H:j.sibling=H,j=H);return e&&N.forEach(function(et){return t(d,et)}),M&&Et(d,P),E}function I(d,u,f,y){if(typeof f=="object"&&f!==null&&f.type===Mt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case ur:e:{for(var E=f.key,j=u;j!==null;){if(j.key===E){if(E=f.type,E===Mt){if(j.tag===7){n(d,j.sibling),u=o(j,f.props.children),u.return=d,d=u;break e}}else if(j.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===nt&&Al(E)===j.type){n(d,j.sibling),u=o(j,f.props),u.ref=Cn(d,j,f),u.return=d,d=u;break e}n(d,j);break}else t(d,j);j=j.sibling}f.type===Mt?(u=zt(f.props.children,d.mode,y,f.key),u.return=d,d=u):(y=Gr(f.type,f.key,f.props,null,d.mode,y),y.ref=Cn(d,u,f),y.return=d,d=y)}return s(d);case Qt:e:{for(j=f.key;u!==null;){if(u.key===j)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(d,u.sibling),u=o(u,f.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=Zo(f,d.mode,y),u.return=d,d=u}return s(d);case nt:return j=f._init,I(d,u,j(f._payload),y)}if(Nn(f))return v(d,u,f,y);if(gn(f))return x(d,u,f,y);kr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(n(d,u.sibling),u=o(u,f),u.return=d,d=u):(n(d,u),u=Xo(f,d.mode,y),u.return=d,d=u),s(d)):n(d,u)}return I}var an=cu(!0),du=cu(!1),Zr=wt(null),Jr=null,Yt=null,ys=null;function vs(){ys=Yt=Jr=null}function ws(e){var t=Zr.current;Q(Zr),e._currentValue=t}function Di(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function nn(e,t){Jr=e,ys=Yt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(he=!0),e.firstContext=null)}function ze(e){var t=e._currentValue;if(ys!==e)if(e={context:e,memoizedValue:t,next:null},Yt===null){if(Jr===null)throw Error(w(308));Yt=e,Jr.dependencies={lanes:0,firstContext:e}}else Yt=Yt.next=e;return t}var jt=null;function ks(e){jt===null?jt=[e]:jt.push(e)}function fu(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ks(t)):(n.next=o.next,o.next=n),t.interleaved=n,Xe(e,r)}function Xe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var rt=!1;function Cs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Xe(e,n)}return o=r.interleaved,o===null?(t.next=t,ks(r)):(t.next=o.next,o.next=t),r.interleaved=t,Xe(e,n)}function Dr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ss(e,n)}}function Nl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function eo(e,t,n,r){var o=e.updateQueue;rt=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var a=l,c=a.next;a.next=null,s===null?i=c:s.next=c,s=a;var g=e.alternate;g!==null&&(g=g.updateQueue,l=g.lastBaseUpdate,l!==s&&(l===null?g.firstBaseUpdate=c:l.next=c,g.lastBaseUpdate=a))}if(i!==null){var m=o.baseState;s=0,g=c=a=null,l=i;do{var h=l.lane,C=l.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:C,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,x=l;switch(h=t,C=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){m=v.call(C,m,h);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,h=typeof v=="function"?v.call(C,m,h):v,h==null)break e;m=U({},m,h);break e;case 2:rt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[l]:h.push(l))}else C={eventTime:C,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},g===null?(c=g=C,a=m):g=g.next=C,s|=h;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;h=l,l=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(g===null&&(a=m),o.baseState=a,o.firstBaseUpdate=c,o.lastBaseUpdate=g,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Tt|=s,e.lanes=s,e.memoizedState=m}}function jl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(w(191,o));o.call(r)}}}var sr={},We=wt(sr),Yn=wt(sr),Kn=wt(sr);function Pt(e){if(e===sr)throw Error(w(174));return e}function Ss(e,t){switch(G(Kn,t),G(Yn,e),G(We,sr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:di(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=di(t,e)}Q(We),G(We,t)}function un(){Q(We),Q(Yn),Q(Kn)}function hu(e){Pt(Kn.current);var t=Pt(We.current),n=di(t,e.type);t!==n&&(G(Yn,e),G(We,n))}function xs(e){Yn.current===e&&(Q(We),Q(Yn))}var W=wt(0);function to(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Uo=[];function Es(){for(var e=0;e<Uo.length;e++)Uo[e]._workInProgressVersionPrimary=null;Uo.length=0}var Hr=Je.ReactCurrentDispatcher,$o=Je.ReactCurrentBatchConfig,bt=0,F=null,X=null,J=null,no=!1,Tn=!1,Xn=0,lf=0;function ie(){throw Error(w(321))}function As(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ie(e[n],t[n]))return!1;return!0}function Ns(e,t,n,r,o,i){if(bt=i,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Hr.current=e===null||e.memoizedState===null?df:ff,e=n(r,o),Tn){i=0;do{if(Tn=!1,Xn=0,25<=i)throw Error(w(301));i+=1,J=X=null,t.updateQueue=null,Hr.current=pf,e=n(r,o)}while(Tn)}if(Hr.current=ro,t=X!==null&&X.next!==null,bt=0,J=X=F=null,no=!1,t)throw Error(w(300));return e}function js(){var e=Xn!==0;return Xn=0,e}function Qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?F.memoizedState=J=e:J=J.next=e,J}function De(){if(X===null){var e=F.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=J===null?F.memoizedState:J.next;if(t!==null)J=t,X=e;else{if(e===null)throw Error(w(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},J===null?F.memoizedState=J=e:J=J.next=e}return J}function Zn(e,t){return typeof t=="function"?t(e):t}function Vo(e){var t=De(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=X,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=s=null,a=null,c=i;do{var g=c.lane;if((bt&g)===g)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=m,s=r):a=a.next=m,F.lanes|=g,Tt|=g}c=c.next}while(c!==null&&c!==i);a===null?s=r:a.next=l,Ie(r,t.memoizedState)||(he=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,F.lanes|=i,Tt|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function qo(e){var t=De(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);Ie(i,t.memoizedState)||(he=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function mu(){}function gu(e,t){var n=F,r=De(),o=t(),i=!Ie(r.memoizedState,o);if(i&&(r.memoizedState=o,he=!0),r=r.queue,Ps(wu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,Jn(9,vu.bind(null,n,r,o,t),void 0,null),ee===null)throw Error(w(349));bt&30||yu(n,t,o)}return o}function yu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=F.updateQueue,t===null?(t={lastEffect:null,stores:null},F.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vu(e,t,n,r){t.value=n,t.getSnapshot=r,ku(t)&&Cu(e)}function wu(e,t,n){return n(function(){ku(t)&&Cu(e)})}function ku(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ie(e,n)}catch{return!0}}function Cu(e){var t=Xe(e,1);t!==null&&Ge(t,e,1,-1)}function Pl(e){var t=Qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zn,lastRenderedState:e},t.queue=e,e=e.dispatch=cf.bind(null,F,e),[t.memoizedState,e]}function Jn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=F.updateQueue,t===null?(t={lastEffect:null,stores:null},F.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Su(){return De().memoizedState}function br(e,t,n,r){var o=Qe();F.flags|=e,o.memoizedState=Jn(1|t,n,void 0,r===void 0?null:r)}function yo(e,t,n,r){var o=De();r=r===void 0?null:r;var i=void 0;if(X!==null){var s=X.memoizedState;if(i=s.destroy,r!==null&&As(r,s.deps)){o.memoizedState=Jn(t,n,i,r);return}}F.flags|=e,o.memoizedState=Jn(1|t,n,i,r)}function _l(e,t){return br(8390656,8,e,t)}function Ps(e,t){return yo(2048,8,e,t)}function xu(e,t){return yo(4,2,e,t)}function Eu(e,t){return yo(4,4,e,t)}function Au(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nu(e,t,n){return n=n!=null?n.concat([e]):null,yo(4,4,Au.bind(null,t,e),n)}function _s(){}function ju(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&As(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Pu(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&As(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function _u(e,t,n){return bt&21?(Ie(n,t)||(n=Ta(),F.lanes|=n,Tt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=n)}function af(e,t){var n=L;L=n!==0&&4>n?n:4,e(!0);var r=$o.transition;$o.transition={};try{e(!1),t()}finally{L=n,$o.transition=r}}function zu(){return De().memoizedState}function uf(e,t,n){var r=ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Du(e))Hu(t,n);else if(n=fu(e,t,n,r),n!==null){var o=ce();Ge(n,e,r,o),bu(n,t,r)}}function cf(e,t,n){var r=ht(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Du(e))Hu(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,l=i(s,n);if(o.hasEagerState=!0,o.eagerState=l,Ie(l,s)){var a=t.interleaved;a===null?(o.next=o,ks(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=fu(e,t,o,r),n!==null&&(o=ce(),Ge(n,e,r,o),bu(n,t,r))}}function Du(e){var t=e.alternate;return e===F||t!==null&&t===F}function Hu(e,t){Tn=no=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ss(e,n)}}var ro={readContext:ze,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},df={readContext:ze,useCallback:function(e,t){return Qe().memoizedState=[e,t===void 0?null:t],e},useContext:ze,useEffect:_l,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,br(4194308,4,Au.bind(null,t,e),n)},useLayoutEffect:function(e,t){return br(4194308,4,e,t)},useInsertionEffect:function(e,t){return br(4,2,e,t)},useMemo:function(e,t){var n=Qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Qe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=uf.bind(null,F,e),[r.memoizedState,e]},useRef:function(e){var t=Qe();return e={current:e},t.memoizedState=e},useState:Pl,useDebugValue:_s,useDeferredValue:function(e){return Qe().memoizedState=e},useTransition:function(){var e=Pl(!1),t=e[0];return e=af.bind(null,e[1]),Qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=F,o=Qe();if(M){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),ee===null)throw Error(w(349));bt&30||yu(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,_l(wu.bind(null,r,i,e),[e]),r.flags|=2048,Jn(9,vu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Qe(),t=ee.identifierPrefix;if(M){var n=Ve,r=$e;n=(r&~(1<<32-Le(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Xn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=lf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ff={readContext:ze,useCallback:ju,useContext:ze,useEffect:Ps,useImperativeHandle:Nu,useInsertionEffect:xu,useLayoutEffect:Eu,useMemo:Pu,useReducer:Vo,useRef:Su,useState:function(){return Vo(Zn)},useDebugValue:_s,useDeferredValue:function(e){var t=De();return _u(t,X.memoizedState,e)},useTransition:function(){var e=Vo(Zn)[0],t=De().memoizedState;return[e,t]},useMutableSource:mu,useSyncExternalStore:gu,useId:zu,unstable_isNewReconciler:!1},pf={readContext:ze,useCallback:ju,useContext:ze,useEffect:Ps,useImperativeHandle:Nu,useInsertionEffect:xu,useLayoutEffect:Eu,useMemo:Pu,useReducer:qo,useRef:Su,useState:function(){return qo(Zn)},useDebugValue:_s,useDeferredValue:function(e){var t=De();return X===null?t.memoizedState=e:_u(t,X.memoizedState,e)},useTransition:function(){var e=qo(Zn)[0],t=De().memoizedState;return[e,t]},useMutableSource:mu,useSyncExternalStore:gu,useId:zu,unstable_isNewReconciler:!1};function be(e,t){if(e&&e.defaultProps){t=U({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Hi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:U({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var vo={isMounted:function(e){return(e=e._reactInternals)?Gt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),o=ht(e),i=qe(r,o);i.payload=t,n!=null&&(i.callback=n),t=ft(e,i,o),t!==null&&(Ge(t,e,o,r),Dr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),o=ht(e),i=qe(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=ft(e,i,o),t!==null&&(Ge(t,e,o,r),Dr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=ht(e),o=qe(n,r);o.tag=2,t!=null&&(o.callback=t),t=ft(e,o,r),t!==null&&(Ge(t,e,r,n),Dr(t,e,r))}};function zl(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!Un(n,r)||!Un(o,i):!0}function Tu(e,t,n){var r=!1,o=yt,i=t.contextType;return typeof i=="object"&&i!==null?i=ze(i):(o=ge(t)?Dt:ae.current,r=t.contextTypes,i=(r=r!=null)?sn(e,o):yt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=vo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Dl(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&vo.enqueueReplaceState(t,t.state,null)}function bi(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Cs(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=ze(i):(i=ge(t)?Dt:ae.current,o.context=sn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Hi(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&vo.enqueueReplaceState(o,o.state,null),eo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function cn(e,t){try{var n="",r=t;do n+=Qc(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Yo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ti(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hf=typeof WeakMap=="function"?WeakMap:Map;function Ru(e,t,n){n=qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){io||(io=!0,Fi=r),Ti(e,t)},n}function Lu(e,t,n){n=qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ti(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ti(e,t),typeof r!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Hl(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new hf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Pf.bind(null,e,t,n),t.then(e,e))}function bl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Tl(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=qe(-1,1),t.tag=2,ft(n,t,1))),n.lanes|=1),e)}var mf=Je.ReactCurrentOwner,he=!1;function ue(e,t,n,r){t.child=e===null?du(t,null,n,r):an(t,e.child,n,r)}function Rl(e,t,n,r,o){n=n.render;var i=t.ref;return nn(t,o),r=Ns(e,t,n,r,i,o),n=js(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ze(e,t,o)):(M&&n&&hs(t),t.flags|=1,ue(e,t,r,o),t.child)}function Ll(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Gs(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Gu(e,t,i,r,o)):(e=Gr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:Un,n(s,r)&&e.ref===t.ref)return Ze(e,t,o)}return t.flags|=1,e=mt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Gu(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Un(i,r)&&e.ref===t.ref)if(he=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(he=!0);else return t.lanes=e.lanes,Ze(e,t,o)}return Ri(e,t,n,r,o)}function Iu(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(Xt,we),we|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(Xt,we),we|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,G(Xt,we),we|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,G(Xt,we),we|=r;return ue(e,t,o,n),t.child}function Bu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ri(e,t,n,r,o){var i=ge(n)?Dt:ae.current;return i=sn(t,i),nn(t,o),n=Ns(e,t,n,r,i,o),r=js(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ze(e,t,o)):(M&&r&&hs(t),t.flags|=1,ue(e,t,n,o),t.child)}function Gl(e,t,n,r,o){if(ge(n)){var i=!0;Yr(t)}else i=!1;if(nn(t,o),t.stateNode===null)Tr(e,t),Tu(t,n,r),bi(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var a=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=ze(c):(c=ge(n)?Dt:ae.current,c=sn(t,c));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==c)&&Dl(t,s,r,c),rt=!1;var h=t.memoizedState;s.state=h,eo(t,r,s,o),a=t.memoizedState,l!==r||h!==a||me.current||rt?(typeof g=="function"&&(Hi(t,n,g,r),a=t.memoizedState),(l=rt||zl(t,n,l,r,h,a,c))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=c,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,pu(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:be(t.type,l),s.props=c,m=t.pendingProps,h=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=ze(a):(a=ge(n)?Dt:ae.current,a=sn(t,a));var C=n.getDerivedStateFromProps;(g=typeof C=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==m||h!==a)&&Dl(t,s,r,a),rt=!1,h=t.memoizedState,s.state=h,eo(t,r,s,o);var v=t.memoizedState;l!==m||h!==v||me.current||rt?(typeof C=="function"&&(Hi(t,n,C,r),v=t.memoizedState),(c=rt||zl(t,n,c,r,h,v,a)||!1)?(g||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=a,r=c):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Li(e,t,n,r,i,o)}function Li(e,t,n,r,o,i){Bu(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&Sl(t,n,!1),Ze(e,t,i);r=t.stateNode,mf.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=an(t,e.child,null,i),t.child=an(t,null,l,i)):ue(e,t,l,i),t.memoizedState=r.state,o&&Sl(t,n,!0),t.child}function Qu(e){var t=e.stateNode;t.pendingContext?Cl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Cl(e,t.context,!1),Ss(e,t.containerInfo)}function Il(e,t,n,r,o){return ln(),gs(o),t.flags|=256,ue(e,t,n,r),t.child}var Gi={dehydrated:null,treeContext:null,retryLane:0};function Ii(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mu(e,t,n){var r=t.pendingProps,o=W.current,i=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),G(W,o&1),e===null)return zi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Co(s,r,0,null),e=zt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ii(n),t.memoizedState=Gi,e):zs(t,s));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return gf(e,t,s,r,l,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,l=o.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=mt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=mt(l,i):(i=zt(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Ii(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Gi,r}return i=e.child,e=i.sibling,r=mt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function zs(e,t){return t=Co({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Cr(e,t,n,r){return r!==null&&gs(r),an(t,e.child,null,n),e=zs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gf(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=Yo(Error(w(422))),Cr(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Co({mode:"visible",children:r.children},o,0,null),i=zt(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&an(t,e.child,null,s),t.child.memoizedState=Ii(s),t.memoizedState=Gi,i);if(!(t.mode&1))return Cr(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(w(419)),r=Yo(i,r,void 0),Cr(e,t,s,r)}if(l=(s&e.childLanes)!==0,he||l){if(r=ee,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Xe(e,o),Ge(r,e,o,-1))}return Ls(),r=Yo(Error(w(421))),Cr(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=_f.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,ke=dt(o.nextSibling),Ce=t,M=!0,Re=null,e!==null&&(Ne[je++]=$e,Ne[je++]=Ve,Ne[je++]=Ht,$e=e.id,Ve=e.overflow,Ht=t),t=zs(t,r.children),t.flags|=4096,t)}function Bl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Di(e.return,t,n)}function Ko(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Ou(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ue(e,t,r.children,n),r=W.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bl(e,n,t);else if(e.tag===19)Bl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(G(W,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&to(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ko(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&to(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ko(t,!0,n,null,i);break;case"together":Ko(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Tr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ze(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Tt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function yf(e,t,n){switch(t.tag){case 3:Qu(t),ln();break;case 5:hu(t);break;case 1:ge(t.type)&&Yr(t);break;case 4:Ss(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;G(Zr,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(G(W,W.current&1),t.flags|=128,null):n&t.child.childLanes?Mu(e,t,n):(G(W,W.current&1),e=Ze(e,t,n),e!==null?e.sibling:null);G(W,W.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ou(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),G(W,W.current),r)break;return null;case 22:case 23:return t.lanes=0,Iu(e,t,n)}return Ze(e,t,n)}var Wu,Bi,Fu,Uu;Wu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bi=function(){};Fu=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Pt(We.current);var i=null;switch(n){case"input":o=li(e,o),r=li(e,r),i=[];break;case"select":o=U({},o,{value:void 0}),r=U({},r,{value:void 0}),i=[];break;case"textarea":o=ci(e,o),r=ci(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vr)}fi(n,r);var s;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var l=o[c];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(In.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var a=r[c];if(l=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(i||(i=[]),i.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(In.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&B("scroll",e),i||l===a||(i=[])):(i=i||[]).push(c,a))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Uu=function(e,t,n,r){n!==r&&(t.flags|=4)};function Sn(e,t){if(!M)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vf(e,t,n){var r=t.pendingProps;switch(ms(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return ge(t.type)&&qr(),se(t),null;case 3:return r=t.stateNode,un(),Q(me),Q(ae),Es(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(wr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Re!==null&&(Vi(Re),Re=null))),Bi(e,t),se(t),null;case 5:xs(t);var o=Pt(Kn.current);if(n=t.type,e!==null&&t.stateNode!=null)Fu(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return se(t),null}if(e=Pt(We.current),wr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Me]=t,r[qn]=i,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(o=0;o<Pn.length;o++)B(Pn[o],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":qs(r,i),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},B("invalid",r);break;case"textarea":Ks(r,i),B("invalid",r)}fi(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var l=i[s];s==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&vr(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&vr(r.textContent,l,e),o=["children",""+l]):In.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&B("scroll",r)}switch(n){case"input":cr(r),Ys(r,i,!0);break;case"textarea":cr(r),Xs(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Vr)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Me]=t,e[qn]=r,Wu(e,t,!1,!1),t.stateNode=e;e:{switch(s=pi(n,r),n){case"dialog":B("cancel",e),B("close",e),o=r;break;case"iframe":case"object":case"embed":B("load",e),o=r;break;case"video":case"audio":for(o=0;o<Pn.length;o++)B(Pn[o],e);o=r;break;case"source":B("error",e),o=r;break;case"img":case"image":case"link":B("error",e),B("load",e),o=r;break;case"details":B("toggle",e),o=r;break;case"input":qs(e,r),o=li(e,r),B("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=U({},r,{value:void 0}),B("invalid",e);break;case"textarea":Ks(e,r),o=ci(e,r),B("invalid",e);break;default:o=r}fi(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="style"?Sa(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&ka(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Bn(e,a):typeof a=="number"&&Bn(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(In.hasOwnProperty(i)?a!=null&&i==="onScroll"&&B("scroll",e):a!=null&&es(e,i,a,s))}switch(n){case"input":cr(e),Ys(e,r,!1);break;case"textarea":cr(e),Xs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Zt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Zt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Vr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)Uu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=Pt(Kn.current),Pt(We.current),wr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Me]=t,(i=r.nodeValue!==n)&&(e=Ce,e!==null))switch(e.tag){case 3:vr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Me]=t,t.stateNode=r}return se(t),null;case 13:if(Q(W),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(M&&ke!==null&&t.mode&1&&!(t.flags&128))uu(),ln(),t.flags|=98560,i=!1;else if(i=wr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(w(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(w(317));i[Me]=t}else ln(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),i=!1}else Re!==null&&(Vi(Re),Re=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||W.current&1?Z===0&&(Z=3):Ls())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return un(),Bi(e,t),e===null&&$n(t.stateNode.containerInfo),se(t),null;case 10:return ws(t.type._context),se(t),null;case 17:return ge(t.type)&&qr(),se(t),null;case 19:if(Q(W),i=t.memoizedState,i===null)return se(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Sn(i,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=to(e),s!==null){for(t.flags|=128,Sn(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(W,W.current&1|2),t.child}e=e.sibling}i.tail!==null&&Y()>dn&&(t.flags|=128,r=!0,Sn(i,!1),t.lanes=4194304)}else{if(!r)if(e=to(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Sn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!M)return se(t),null}else 2*Y()-i.renderingStartTime>dn&&n!==1073741824&&(t.flags|=128,r=!0,Sn(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Y(),t.sibling=null,n=W.current,G(W,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return Rs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?we&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function wf(e,t){switch(ms(t),t.tag){case 1:return ge(t.type)&&qr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return un(),Q(me),Q(ae),Es(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xs(t),null;case 13:if(Q(W),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));ln()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(W),null;case 4:return un(),null;case 10:return ws(t.type._context),null;case 22:case 23:return Rs(),null;case 24:return null;default:return null}}var Sr=!1,le=!1,kf=typeof WeakSet=="function"?WeakSet:Set,A=null;function Kt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function Qi(e,t,n){try{n()}catch(r){q(e,t,r)}}var Ql=!1;function Cf(e,t){if(xi=Fr,e=Ka(),ps(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,l=-1,a=-1,c=0,g=0,m=e,h=null;t:for(;;){for(var C;m!==n||o!==0&&m.nodeType!==3||(l=s+o),m!==i||r!==0&&m.nodeType!==3||(a=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(C=m.firstChild)!==null;)h=m,m=C;for(;;){if(m===e)break t;if(h===n&&++c===o&&(l=s),h===i&&++g===r&&(a=s),(C=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=C}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ei={focusedElem:e,selectionRange:n},Fr=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,I=v.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?x:be(t.type,x),I);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(y){q(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return v=Ql,Ql=!1,v}function Rn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Qi(t,n,i)}o=o.next}while(o!==r)}}function wo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Mi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function $u(e){var t=e.alternate;t!==null&&(e.alternate=null,$u(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Me],delete t[qn],delete t[ji],delete t[nf],delete t[rf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vu(e){return e.tag===5||e.tag===3||e.tag===4}function Ml(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vr));else if(r!==4&&(e=e.child,e!==null))for(Oi(e,t,n),e=e.sibling;e!==null;)Oi(e,t,n),e=e.sibling}function Wi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Wi(e,t,n),e=e.sibling;e!==null;)Wi(e,t,n),e=e.sibling}var ne=null,Te=!1;function tt(e,t,n){for(n=n.child;n!==null;)qu(e,t,n),n=n.sibling}function qu(e,t,n){if(Oe&&typeof Oe.onCommitFiberUnmount=="function")try{Oe.onCommitFiberUnmount(co,n)}catch{}switch(n.tag){case 5:le||Kt(n,t);case 6:var r=ne,o=Te;ne=null,tt(e,t,n),ne=r,Te=o,ne!==null&&(Te?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Te?(e=ne,n=n.stateNode,e.nodeType===8?Wo(e.parentNode,n):e.nodeType===1&&Wo(e,n),Wn(e)):Wo(ne,n.stateNode));break;case 4:r=ne,o=Te,ne=n.stateNode.containerInfo,Te=!0,tt(e,t,n),ne=r,Te=o;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Qi(n,t,s),o=o.next}while(o!==r)}tt(e,t,n);break;case 1:if(!le&&(Kt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){q(n,t,l)}tt(e,t,n);break;case 21:tt(e,t,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,tt(e,t,n),le=r):tt(e,t,n);break;default:tt(e,t,n)}}function Ol(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new kf),t.forEach(function(r){var o=zf.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function He(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:ne=l.stateNode,Te=!1;break e;case 3:ne=l.stateNode.containerInfo,Te=!0;break e;case 4:ne=l.stateNode.containerInfo,Te=!0;break e}l=l.return}if(ne===null)throw Error(w(160));qu(i,s,o),ne=null,Te=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(c){q(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Yu(t,e),t=t.sibling}function Yu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(He(t,e),Be(e),r&4){try{Rn(3,e,e.return),wo(3,e)}catch(x){q(e,e.return,x)}try{Rn(5,e,e.return)}catch(x){q(e,e.return,x)}}break;case 1:He(t,e),Be(e),r&512&&n!==null&&Kt(n,n.return);break;case 5:if(He(t,e),Be(e),r&512&&n!==null&&Kt(n,n.return),e.flags&32){var o=e.stateNode;try{Bn(o,"")}catch(x){q(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&ya(o,i),pi(l,s);var c=pi(l,i);for(s=0;s<a.length;s+=2){var g=a[s],m=a[s+1];g==="style"?Sa(o,m):g==="dangerouslySetInnerHTML"?ka(o,m):g==="children"?Bn(o,m):es(o,g,m,c)}switch(l){case"input":ai(o,i);break;case"textarea":va(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var C=i.value;C!=null?Zt(o,!!i.multiple,C,!1):h!==!!i.multiple&&(i.defaultValue!=null?Zt(o,!!i.multiple,i.defaultValue,!0):Zt(o,!!i.multiple,i.multiple?[]:"",!1))}o[qn]=i}catch(x){q(e,e.return,x)}}break;case 6:if(He(t,e),Be(e),r&4){if(e.stateNode===null)throw Error(w(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(x){q(e,e.return,x)}}break;case 3:if(He(t,e),Be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wn(t.containerInfo)}catch(x){q(e,e.return,x)}break;case 4:He(t,e),Be(e);break;case 13:He(t,e),Be(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(bs=Y())),r&4&&Ol(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(le=(c=le)||g,He(t,e),le=c):He(t,e),Be(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(A=e,g=e.child;g!==null;){for(m=A=g;A!==null;){switch(h=A,C=h.child,h.tag){case 0:case 11:case 14:case 15:Rn(4,h,h.return);break;case 1:Kt(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){q(r,n,x)}}break;case 5:Kt(h,h.return);break;case 22:if(h.memoizedState!==null){Fl(m);continue}}C!==null?(C.return=h,A=C):Fl(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{o=m.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,a=m.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Ca("display",s))}catch(x){q(e,e.return,x)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(x){q(e,e.return,x)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:He(t,e),Be(e),r&4&&Ol(e);break;case 21:break;default:He(t,e),Be(e)}}function Be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vu(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Bn(o,""),r.flags&=-33);var i=Ml(e);Wi(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,l=Ml(e);Oi(e,l,s);break;default:throw Error(w(161))}}catch(a){q(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sf(e,t,n){A=e,Ku(e)}function Ku(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var o=A,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||Sr;if(!s){var l=o.alternate,a=l!==null&&l.memoizedState!==null||le;l=Sr;var c=le;if(Sr=s,(le=a)&&!c)for(A=o;A!==null;)s=A,a=s.child,s.tag===22&&s.memoizedState!==null?Ul(o):a!==null?(a.return=s,A=a):Ul(o);for(;i!==null;)A=i,Ku(i),i=i.sibling;A=o,Sr=l,le=c}Wl(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,A=i):Wl(e)}}function Wl(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||wo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!le)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:be(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&jl(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}jl(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&Wn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}le||t.flags&512&&Mi(t)}catch(h){q(t,t.return,h)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function Fl(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function Ul(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{wo(4,t)}catch(a){q(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){q(t,o,a)}}var i=t.return;try{Mi(t)}catch(a){q(t,i,a)}break;case 5:var s=t.return;try{Mi(t)}catch(a){q(t,s,a)}}}catch(a){q(t,t.return,a)}if(t===e){A=null;break}var l=t.sibling;if(l!==null){l.return=t.return,A=l;break}A=t.return}}var xf=Math.ceil,oo=Je.ReactCurrentDispatcher,Ds=Je.ReactCurrentOwner,_e=Je.ReactCurrentBatchConfig,R=0,ee=null,K=null,re=0,we=0,Xt=wt(0),Z=0,er=null,Tt=0,ko=0,Hs=0,Ln=null,pe=null,bs=0,dn=1/0,Fe=null,io=!1,Fi=null,pt=null,xr=!1,lt=null,so=0,Gn=0,Ui=null,Rr=-1,Lr=0;function ce(){return R&6?Y():Rr!==-1?Rr:Rr=Y()}function ht(e){return e.mode&1?R&2&&re!==0?re&-re:sf.transition!==null?(Lr===0&&(Lr=Ta()),Lr):(e=L,e!==0||(e=window.event,e=e===void 0?16:Ma(e.type)),e):1}function Ge(e,t,n,r){if(50<Gn)throw Gn=0,Ui=null,Error(w(185));rr(e,n,r),(!(R&2)||e!==ee)&&(e===ee&&(!(R&2)&&(ko|=n),Z===4&&it(e,re)),ye(e,r),n===1&&R===0&&!(t.mode&1)&&(dn=Y()+500,go&&kt()))}function ye(e,t){var n=e.callbackNode;id(e,t);var r=Wr(e,e===ee?re:0);if(r===0)n!==null&&el(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&el(n),t===1)e.tag===0?of($l.bind(null,e)):su($l.bind(null,e)),ef(function(){!(R&6)&&kt()}),n=null;else{switch(Ra(r)){case 1:n=is;break;case 4:n=Ha;break;case 16:n=Or;break;case 536870912:n=ba;break;default:n=Or}n=oc(n,Xu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Xu(e,t){if(Rr=-1,Lr=0,R&6)throw Error(w(327));var n=e.callbackNode;if(rn()&&e.callbackNode!==n)return null;var r=Wr(e,e===ee?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=lo(e,r);else{t=r;var o=R;R|=2;var i=Ju();(ee!==e||re!==t)&&(Fe=null,dn=Y()+500,_t(e,t));do try{Nf();break}catch(l){Zu(e,l)}while(!0);vs(),oo.current=i,R=o,K!==null?t=0:(ee=null,re=0,t=Z)}if(t!==0){if(t===2&&(o=vi(e),o!==0&&(r=o,t=$i(e,o))),t===1)throw n=er,_t(e,0),it(e,r),ye(e,Y()),n;if(t===6)it(e,r);else{if(o=e.current.alternate,!(r&30)&&!Ef(o)&&(t=lo(e,r),t===2&&(i=vi(e),i!==0&&(r=i,t=$i(e,i))),t===1))throw n=er,_t(e,0),it(e,r),ye(e,Y()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:At(e,pe,Fe);break;case 3:if(it(e,r),(r&130023424)===r&&(t=bs+500-Y(),10<t)){if(Wr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ni(At.bind(null,e,pe,Fe),t);break}At(e,pe,Fe);break;case 4:if(it(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-Le(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xf(r/1960))-r,10<r){e.timeoutHandle=Ni(At.bind(null,e,pe,Fe),r);break}At(e,pe,Fe);break;case 5:At(e,pe,Fe);break;default:throw Error(w(329))}}}return ye(e,Y()),e.callbackNode===n?Xu.bind(null,e):null}function $i(e,t){var n=Ln;return e.current.memoizedState.isDehydrated&&(_t(e,t).flags|=256),e=lo(e,t),e!==2&&(t=pe,pe=n,t!==null&&Vi(t)),e}function Vi(e){pe===null?pe=e:pe.push.apply(pe,e)}function Ef(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Ie(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function it(e,t){for(t&=~Hs,t&=~ko,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Le(t),r=1<<n;e[n]=-1,t&=~r}}function $l(e){if(R&6)throw Error(w(327));rn();var t=Wr(e,0);if(!(t&1))return ye(e,Y()),null;var n=lo(e,t);if(e.tag!==0&&n===2){var r=vi(e);r!==0&&(t=r,n=$i(e,r))}if(n===1)throw n=er,_t(e,0),it(e,t),ye(e,Y()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,At(e,pe,Fe),ye(e,Y()),null}function Ts(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(dn=Y()+500,go&&kt())}}function Rt(e){lt!==null&&lt.tag===0&&!(R&6)&&rn();var t=R;R|=1;var n=_e.transition,r=L;try{if(_e.transition=null,L=1,e)return e()}finally{L=r,_e.transition=n,R=t,!(R&6)&&kt()}}function Rs(){we=Xt.current,Q(Xt)}function _t(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Jd(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(ms(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qr();break;case 3:un(),Q(me),Q(ae),Es();break;case 5:xs(r);break;case 4:un();break;case 13:Q(W);break;case 19:Q(W);break;case 10:ws(r.type._context);break;case 22:case 23:Rs()}n=n.return}if(ee=e,K=e=mt(e.current,null),re=we=t,Z=0,er=null,Hs=ko=Tt=0,pe=Ln=null,jt!==null){for(t=0;t<jt.length;t++)if(n=jt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}jt=null}return e}function Zu(e,t){do{var n=K;try{if(vs(),Hr.current=ro,no){for(var r=F.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}no=!1}if(bt=0,J=X=F=null,Tn=!1,Xn=0,Ds.current=null,n===null||n.return===null){Z=1,er=t,K=null;break}e:{var i=e,s=n.return,l=n,a=t;if(t=re,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,g=l,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var C=bl(s);if(C!==null){C.flags&=-257,Tl(C,s,l,i,t),C.mode&1&&Hl(i,c,t),t=C,a=c;var v=t.updateQueue;if(v===null){var x=new Set;x.add(a),t.updateQueue=x}else v.add(a);break e}else{if(!(t&1)){Hl(i,c,t),Ls();break e}a=Error(w(426))}}else if(M&&l.mode&1){var I=bl(s);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Tl(I,s,l,i,t),gs(cn(a,l));break e}}i=a=cn(a,l),Z!==4&&(Z=2),Ln===null?Ln=[i]:Ln.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=Ru(i,a,t);Nl(i,d);break e;case 1:l=a;var u=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(pt===null||!pt.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=Lu(i,l,t);Nl(i,y);break e}}i=i.return}while(i!==null)}tc(n)}catch(E){t=E,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function Ju(){var e=oo.current;return oo.current=ro,e===null?ro:e}function Ls(){(Z===0||Z===3||Z===2)&&(Z=4),ee===null||!(Tt&268435455)&&!(ko&268435455)||it(ee,re)}function lo(e,t){var n=R;R|=2;var r=Ju();(ee!==e||re!==t)&&(Fe=null,_t(e,t));do try{Af();break}catch(o){Zu(e,o)}while(!0);if(vs(),R=n,oo.current=r,K!==null)throw Error(w(261));return ee=null,re=0,Z}function Af(){for(;K!==null;)ec(K)}function Nf(){for(;K!==null&&!Kc();)ec(K)}function ec(e){var t=rc(e.alternate,e,we);e.memoizedProps=e.pendingProps,t===null?tc(e):K=t,Ds.current=null}function tc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=wf(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,K=null;return}}else if(n=vf(n,t,we),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Z===0&&(Z=5)}function At(e,t,n){var r=L,o=_e.transition;try{_e.transition=null,L=1,jf(e,t,n,r)}finally{_e.transition=o,L=r}return null}function jf(e,t,n,r){do rn();while(lt!==null);if(R&6)throw Error(w(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(sd(e,i),e===ee&&(K=ee=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xr||(xr=!0,oc(Or,function(){return rn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=_e.transition,_e.transition=null;var s=L;L=1;var l=R;R|=4,Ds.current=null,Cf(e,n),Yu(n,e),$d(Ei),Fr=!!xi,Ei=xi=null,e.current=n,Sf(n),Xc(),R=l,L=s,_e.transition=i}else e.current=n;if(xr&&(xr=!1,lt=e,so=o),i=e.pendingLanes,i===0&&(pt=null),ed(n.stateNode),ye(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(io)throw io=!1,e=Fi,Fi=null,e;return so&1&&e.tag!==0&&rn(),i=e.pendingLanes,i&1?e===Ui?Gn++:(Gn=0,Ui=e):Gn=0,kt(),null}function rn(){if(lt!==null){var e=Ra(so),t=_e.transition,n=L;try{if(_e.transition=null,L=16>e?16:e,lt===null)var r=!1;else{if(e=lt,lt=null,so=0,R&6)throw Error(w(331));var o=R;for(R|=4,A=e.current;A!==null;){var i=A,s=i.child;if(A.flags&16){var l=i.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for(A=c;A!==null;){var g=A;switch(g.tag){case 0:case 11:case 15:Rn(8,g,i)}var m=g.child;if(m!==null)m.return=g,A=m;else for(;A!==null;){g=A;var h=g.sibling,C=g.return;if($u(g),g===c){A=null;break}if(h!==null){h.return=C,A=h;break}A=C}}}var v=i.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var I=x.sibling;x.sibling=null,x=I}while(x!==null)}}A=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,A=s;else e:for(;A!==null;){if(i=A,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Rn(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,A=d;break e}A=i.return}}var u=e.current;for(A=u;A!==null;){s=A;var f=s.child;if(s.subtreeFlags&2064&&f!==null)f.return=s,A=f;else e:for(s=u;A!==null;){if(l=A,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:wo(9,l)}}catch(E){q(l,l.return,E)}if(l===s){A=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,A=y;break e}A=l.return}}if(R=o,kt(),Oe&&typeof Oe.onPostCommitFiberRoot=="function")try{Oe.onPostCommitFiberRoot(co,e)}catch{}r=!0}return r}finally{L=n,_e.transition=t}}return!1}function Vl(e,t,n){t=cn(n,t),t=Ru(e,t,1),e=ft(e,t,1),t=ce(),e!==null&&(rr(e,1,t),ye(e,t))}function q(e,t,n){if(e.tag===3)Vl(e,e,n);else for(;t!==null;){if(t.tag===3){Vl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pt===null||!pt.has(r))){e=cn(n,e),e=Lu(t,e,1),t=ft(t,e,1),e=ce(),t!==null&&(rr(t,1,e),ye(t,e));break}}t=t.return}}function Pf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(re&n)===n&&(Z===4||Z===3&&(re&130023424)===re&&500>Y()-bs?_t(e,0):Hs|=n),ye(e,t)}function nc(e,t){t===0&&(e.mode&1?(t=pr,pr<<=1,!(pr&130023424)&&(pr=4194304)):t=1);var n=ce();e=Xe(e,t),e!==null&&(rr(e,t,n),ye(e,n))}function _f(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),nc(e,n)}function zf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),nc(e,n)}var rc;rc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)he=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return he=!1,yf(e,t,n);he=!!(e.flags&131072)}else he=!1,M&&t.flags&1048576&&lu(t,Xr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Tr(e,t),e=t.pendingProps;var o=sn(t,ae.current);nn(t,n),o=Ns(null,t,r,e,o,n);var i=js();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(r)?(i=!0,Yr(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Cs(t),o.updater=vo,t.stateNode=o,o._reactInternals=t,bi(t,r,e,n),t=Li(null,t,r,!0,i,n)):(t.tag=0,M&&i&&hs(t),ue(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Tr(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Hf(r),e=be(r,e),o){case 0:t=Ri(null,t,r,e,n);break e;case 1:t=Gl(null,t,r,e,n);break e;case 11:t=Rl(null,t,r,e,n);break e;case 14:t=Ll(null,t,r,be(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:be(r,o),Ri(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:be(r,o),Gl(e,t,r,o,n);case 3:e:{if(Qu(t),e===null)throw Error(w(387));r=t.pendingProps,i=t.memoizedState,o=i.element,pu(e,t),eo(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=cn(Error(w(423)),t),t=Il(e,t,r,n,o);break e}else if(r!==o){o=cn(Error(w(424)),t),t=Il(e,t,r,n,o);break e}else for(ke=dt(t.stateNode.containerInfo.firstChild),Ce=t,M=!0,Re=null,n=du(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ln(),r===o){t=Ze(e,t,n);break e}ue(e,t,r,n)}t=t.child}return t;case 5:return hu(t),e===null&&zi(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,Ai(r,o)?s=null:i!==null&&Ai(r,i)&&(t.flags|=32),Bu(e,t),ue(e,t,s,n),t.child;case 6:return e===null&&zi(t),null;case 13:return Mu(e,t,n);case 4:return Ss(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=an(t,null,r,n):ue(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:be(r,o),Rl(e,t,r,o,n);case 7:return ue(e,t,t.pendingProps,n),t.child;case 8:return ue(e,t,t.pendingProps.children,n),t.child;case 12:return ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,G(Zr,r._currentValue),r._currentValue=s,i!==null)if(Ie(i.value,s)){if(i.children===o.children&&!me.current){t=Ze(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){s=i.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=qe(-1,n&-n),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?a.next=a:(a.next=g.next,g.next=a),c.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Di(i.return,n,t),l.lanes|=n;break}a=a.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(w(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Di(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}ue(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,nn(t,n),o=ze(o),r=r(o),t.flags|=1,ue(e,t,r,n),t.child;case 14:return r=t.type,o=be(r,t.pendingProps),o=be(r.type,o),Ll(e,t,r,o,n);case 15:return Gu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:be(r,o),Tr(e,t),t.tag=1,ge(r)?(e=!0,Yr(t)):e=!1,nn(t,n),Tu(t,r,o),bi(t,r,o,n),Li(null,t,r,!0,e,n);case 19:return Ou(e,t,n);case 22:return Iu(e,t,n)}throw Error(w(156,t.tag))};function oc(e,t){return Da(e,t)}function Df(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(e,t,n,r){return new Df(e,t,n,r)}function Gs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hf(e){if(typeof e=="function")return Gs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ns)return 11;if(e===rs)return 14}return 2}function mt(e,t){var n=e.alternate;return n===null?(n=Pe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Gr(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")Gs(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Mt:return zt(n.children,o,i,t);case ts:s=8,o|=8;break;case ri:return e=Pe(12,n,t,o|2),e.elementType=ri,e.lanes=i,e;case oi:return e=Pe(13,n,t,o),e.elementType=oi,e.lanes=i,e;case ii:return e=Pe(19,n,t,o),e.elementType=ii,e.lanes=i,e;case ha:return Co(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fa:s=10;break e;case pa:s=9;break e;case ns:s=11;break e;case rs:s=14;break e;case nt:s=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Pe(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function zt(e,t,n,r){return e=Pe(7,e,r,t),e.lanes=n,e}function Co(e,t,n,r){return e=Pe(22,e,r,t),e.elementType=ha,e.lanes=n,e.stateNode={isHidden:!1},e}function Xo(e,t,n){return e=Pe(6,e,null,t),e.lanes=n,e}function Zo(e,t,n){return t=Pe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function bf(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ho(0),this.expirationTimes=Ho(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ho(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Is(e,t,n,r,o,i,s,l,a){return e=new bf(e,t,n,l,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Pe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cs(i),e}function Tf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ic(e){if(!e)return yt;e=e._reactInternals;e:{if(Gt(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(ge(n))return iu(e,n,t)}return t}function sc(e,t,n,r,o,i,s,l,a){return e=Is(n,r,!0,e,o,i,s,l,a),e.context=ic(null),n=e.current,r=ce(),o=ht(n),i=qe(r,o),i.callback=t??null,ft(n,i,o),e.current.lanes=o,rr(e,o,r),ye(e,r),e}function So(e,t,n,r){var o=t.current,i=ce(),s=ht(o);return n=ic(n),t.context===null?t.context=n:t.pendingContext=n,t=qe(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ft(o,t,s),e!==null&&(Ge(e,o,s,i),Dr(e,o,s)),s}function ao(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ql(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bs(e,t){ql(e,t),(e=e.alternate)&&ql(e,t)}function Rf(){return null}var lc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qs(e){this._internalRoot=e}xo.prototype.render=Qs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));So(e,t,null,null)};xo.prototype.unmount=Qs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rt(function(){So(null,e,null,null)}),t[Ke]=null}};function xo(e){this._internalRoot=e}xo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ia();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ot.length&&t!==0&&t<ot[n].priority;n++);ot.splice(n,0,e),n===0&&Qa(e)}};function Ms(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Eo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yl(){}function Lf(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=ao(s);i.call(c)}}var s=sc(t,r,e,0,null,!1,!1,"",Yl);return e._reactRootContainer=s,e[Ke]=s.current,$n(e.nodeType===8?e.parentNode:e),Rt(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var c=ao(a);l.call(c)}}var a=Is(e,0,!1,null,null,!1,!1,"",Yl);return e._reactRootContainer=a,e[Ke]=a.current,$n(e.nodeType===8?e.parentNode:e),Rt(function(){So(t,a,n,r)}),a}function Ao(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var l=o;o=function(){var a=ao(s);l.call(a)}}So(t,s,e,o)}else s=Lf(n,t,e,o,r);return ao(s)}La=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=jn(t.pendingLanes);n!==0&&(ss(t,n|1),ye(t,Y()),!(R&6)&&(dn=Y()+500,kt()))}break;case 13:Rt(function(){var r=Xe(e,1);if(r!==null){var o=ce();Ge(r,e,1,o)}}),Bs(e,1)}};ls=function(e){if(e.tag===13){var t=Xe(e,134217728);if(t!==null){var n=ce();Ge(t,e,134217728,n)}Bs(e,134217728)}};Ga=function(e){if(e.tag===13){var t=ht(e),n=Xe(e,t);if(n!==null){var r=ce();Ge(n,e,t,r)}Bs(e,t)}};Ia=function(){return L};Ba=function(e,t){var n=L;try{return L=e,t()}finally{L=n}};mi=function(e,t,n){switch(t){case"input":if(ai(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=mo(r);if(!o)throw Error(w(90));ga(r),ai(r,o)}}}break;case"textarea":va(e,n);break;case"select":t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}};Aa=Ts;Na=Rt;var Gf={usingClientEntryPoint:!1,Events:[ir,Ut,mo,xa,Ea,Ts]},xn={findFiberByHostInstance:Nt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},If={bundleType:xn.bundleType,version:xn.version,rendererPackageName:xn.rendererPackageName,rendererConfig:xn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Je.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_a(e),e===null?null:e.stateNode},findFiberByHostInstance:xn.findFiberByHostInstance||Rf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Er=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Er.isDisabled&&Er.supportsFiber)try{co=Er.inject(If),Oe=Er}catch{}}xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gf;xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ms(t))throw Error(w(200));return Tf(e,t,null,n)};xe.createRoot=function(e,t){if(!Ms(e))throw Error(w(299));var n=!1,r="",o=lc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Is(e,1,!1,null,null,n,!1,r,o),e[Ke]=t.current,$n(e.nodeType===8?e.parentNode:e),new Qs(t)};xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=_a(t),e=e===null?null:e.stateNode,e};xe.flushSync=function(e){return Rt(e)};xe.hydrate=function(e,t,n){if(!Eo(t))throw Error(w(200));return Ao(null,e,t,!0,n)};xe.hydrateRoot=function(e,t,n){if(!Ms(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=lc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=sc(t,null,e,1,n??null,o,!1,i,s),e[Ke]=t.current,$n(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new xo(t)};xe.render=function(e,t,n){if(!Eo(t))throw Error(w(200));return Ao(null,e,t,!1,n)};xe.unmountComponentAtNode=function(e){if(!Eo(e))throw Error(w(40));return e._reactRootContainer?(Rt(function(){Ao(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};xe.unstable_batchedUpdates=Ts;xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Eo(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Ao(e,t,n,!1,r)};xe.version="18.3.1-next-f1338f8080-20240426";function ac(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ac)}catch(e){console.error(e)}}ac(),aa.exports=xe;var Bf=aa.exports,Kl=Bf;ti.createRoot=Kl.createRoot,ti.hydrateRoot=Kl.hydrateRoot;const Qf={1:["B"],2:["C"],3:["B"],4:["B"],5:["B"],6:["B"],7:["C"],8:["C"],9:["C"],10:["B"],11:["B"],12:["B"],13:["B"],14:["C"],15:["C"],16:["A","C","D"],17:["C"],18:["B"],19:["C"],20:["B"],21:["B"],22:["B"],23:["C"],24:["A","C","D"],25:["B"],26:["B"],27:["B"],28:["C"],29:["B"],30:["C"],31:["C"],32:["C"],33:["B"],34:["D"],35:["C"],36:["B"],37:["C"],38:["C"],39:["B"],40:["C"],41:["C"],42:["B","C","D"],43:["C"],44:["B"],45:["B"],46:["C"],47:["B"],48:["B"],49:["C"],50:["C"],51:["C"],52:["C"],53:["C"],54:["C"],55:["C"],56:["D"],57:["C"],58:["C"],59:["A"],60:["B"],61:["B"],62:["B"],63:["C"],64:["C"],65:["C"],66:["A","C","D"],67:["B"],68:["B"],69:["B"],70:["B","D"],71:["B","D","E"],72:["C"],73:["B"],74:["C"],75:["C"],76:["B"],77:["B","D"],78:["C"],79:["C"],80:["C"],81:["A"],82:["C"],83:["A","C","D"],84:["A","D"],85:["C"],86:["A"],87:["C"],88:["B"],89:["D","E"],90:["C"],91:["A","D"],92:["B"],93:["A"],94:["C"],95:["B","D"],96:["C"],97:["C"],98:["A","C"],99:["C"],100:["A"],101:["B","D"],102:["A","F"],103:["B"],104:["B","C"],105:["B"],106:["B"],107:["B"],108:["A"],109:["A"],110:["B"],111:["A"],112:["B"],113:["A","B","D"],114:["B"],115:["A","B","E"],116:["D","E"],117:["A","D"],118:["A"],119:["B","C"],120:["D"],121:["B"],122:["D"],123:["B"],124:["B"],125:["A","F","G"],126:["C"],127:["A"],128:["D"],129:["D","E","F"],130:["C","D"],131:["B"],132:["B","C"],133:["A"],134:["A","C"],135:["B","C","E"],136:["D"],137:["A"],138:["A"],139:["D"],140:["D"],141:["B"],142:["C"],143:["B","E"],144:["B","D","E"]},Mf=new Set([91,129,141,143,144]);function Of(e){return e.map(t=>t.charCodeAt(0)-65)}function Wf(e){return e<=6?e:e===7||e===8?7:e-1}function uc(e){const t={};for(let n=1;n<=145;n+=1){const r=Wf(n);!e&&Mf.has(r)||(t[`q-${n}`]=Of(Qf[r]))}return t}uc(!0);const tr=uc(!1),Jo=[{questionNumber:91,reason:"The second selected choice is weakly worded and reads more like standardization intent than a direct documented behavior."},{questionNumber:129,reason:"'Codespaces lifecycle' is broad in GitHub Docs, and the provided answer options mix lifecycle concepts with implementation actions."},{questionNumber:141,reason:"The 'best' tool for quickly modifying a batch of files is subjective between github.dev and local tooling."},{questionNumber:143,reason:"Copilot plan comparisons have changed over time, so older training material does not cleanly map to current plan docs."},{questionNumber:144,reason:"Current GitHub docs support more than three listed 2FA-related methods depending on how the question interprets GitHub Mobile and SMS."}],En=Object.keys(tr).length;function Ff(e){const t=e.toLowerCase(),n={one:1,two:2,three:3,multiple:99},r=t.match(/\(choose\s+(\d+|one|two|three|multiple)\)/);if(r)return Number(r[1])||n[r[1]]||1;const o=t.match(/\bwhich\s+(one|two|three)\b/);return o&&n[o[1]]||1}function Uf(e){return e.replace(/\s+\(Choose [^)]+\)/i,"").trim()}function $f(e,t){const n=e.split(`
`).map(c=>c.trimEnd()),o=(n.shift().trim().match(/^Question\s+(\d+)/i)||[null,t+1])[1],i=n.join(`
`).trim().split(`
`).map(c=>c.trim()).filter(Boolean),s=i.findIndex(c=>/^[A-Z]\.\s+/.test(c)),l=s!==-1?i.slice(0,s).join(" ").trim():i[0]||"",a=s!==-1?i.slice(s).reduce((c,g)=>(/^[A-Z]\.\s+/.test(g)?c.push(g.replace(/^[A-Z]\.\s+/,"").trim()):c.length&&(c[c.length-1]+=` ${g}`),c),[]):i.slice(1);return{id:`q-${t+1}`,label:`Question ${o}`,ordinal:t+1,prompt:Uf(l),choose:Ff(l),options:a}}const Vf=String.raw`Question 1
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
Milestones track individual commits, while labels group entire repositories`,qf=String.raw`Question 49
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
D. number of repositories owned`,Yf=String.raw`Question 97

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
F. SMS`,Kf=[Vf,qf,Yf].join(`

`),Ae=Kf.split(/(?=Question\s+\d+)/g).map(e=>e.trim()).filter(Boolean).map($f),cc="github-quiz-studio-state-v4",Ir=90*60;function Xf(){try{const e=window.localStorage.getItem(cc);if(!e)return{answers:{},flagged:{},submitted:!1,timeLeft:Ir,startedAt:Date.now(),submittedAt:null};const t=JSON.parse(e);return{answers:t.answers||{},flagged:t.flagged||{},submitted:!!t.submitted,timeLeft:typeof t.timeLeft=="number"?t.timeLeft:Ir,startedAt:t.startedAt||Date.now(),submittedAt:t.submittedAt||null}}catch{return{answers:{},flagged:{},submitted:!1,timeLeft:Ir,startedAt:Date.now(),submittedAt:null}}}function Zf(e){const t=e%10,n=e%100;return t===1&&n!==11?`${e}st`:t===2&&n!==12?`${e}nd`:t===3&&n!==13?`${e}rd`:`${e}th`}function Jf(e){const t=String(Math.floor(e/3600)).padStart(2,"0"),n=String(Math.floor(e%3600/60)).padStart(2,"0"),r=String(e%60).padStart(2,"0");return`${t}:${n}:${r}`}function ep(e=[],t=[]){if(e.length!==t.length)return!1;const n=[...e].sort((o,i)=>o-i),r=[...t].sort((o,i)=>o-i);return n.every((o,i)=>o===r[i])}function ei(e,t,n){const r=t[e.id]||[];return n[e.id]&&r.length>0?"flagged-answered":n[e.id]?"flagged":r.length>0?"answered":"unanswered"}function Ar(e,t){const n=t[e]||[],r=tr[e];return r?n.length?ep(n,r)?"correct":"incorrect":"unanswered":"excluded"}function tp(e,t,n){const r=tr[e];if(!r)return"neutral";const o=(n[e]||[]).includes(t),i=r.includes(t);return i&&o?"correct-selected":i?"correct":o?"incorrect-selected":"neutral"}function np(e){return e.label.replace("Question ","")}function rp(){const[e,t]=te.useState(Xf),[n,r]=te.useState("all"),[o,i]=te.useState(""),[s,l]=te.useState(!1),[a,c]=te.useState(!1),[g,m]=te.useState(!1),{answers:h,flagged:C,submitted:v,timeLeft:x,submittedAt:I}=e;te.useEffect(()=>{window.localStorage.setItem(cc,JSON.stringify(e))},[e]),te.useEffect(()=>{if(v)return;const S=window.setInterval(()=>{t(D=>D.submitted?D:D.timeLeft<=1?{...D,timeLeft:0,submitted:!0,submittedAt:Date.now()}:{...D,timeLeft:D.timeLeft-1})},1e3);return()=>window.clearInterval(S)},[v]),te.useEffect(()=>{v&&(m(!0),c(!1))},[v]);const d=te.useMemo(()=>Ae.filter(S=>(h[S.id]||[]).length>0).length,[h]),u=te.useMemo(()=>Object.values(C).filter(Boolean).length,[C]),f=te.useMemo(()=>Ae.filter(S=>S.choose>1).length,[]),y=te.useMemo(()=>{const S=o.trim().toLowerCase();return Ae.filter(D=>{const k=(h[D.id]||[]).length>0,_=!!C[D.id],z=!tr[D.id],T=`${D.label} ${D.prompt} ${D.options.join(" ")}`.toLowerCase(),V=!S||T.includes(S),It=n==="all"?!0:n==="answered"?k:n==="unanswered"?!k:n==="flagged"?_:n==="excluded"?z:D.choose>1;return V&&It})},[h,C,n,o]),E=Ae.length?Math.round(d/Ae.length*100):0,j=Ae.length-d,N=te.useMemo(()=>{let S=0,D=0,$=0,k=0;Ae.forEach(z=>{const T=Ar(z.id,h);T==="correct"?S+=1:T==="incorrect"?D+=1:T==="unanswered"?$+=1:k+=1});const _=En?Math.round(S/En*100):0;return{correct:S,incorrect:D,blank:$,excluded:k,percent:_}},[h]);function P(S,D){v||t($=>{const k=new Set($.answers[S.id]||[]);if(S.choose===1)k.has(D)?k.clear():(k.clear(),k.add(D));else if(k.has(D))k.delete(D);else if(k.size<S.choose)k.add(D);else{const _=[...k].sort((z,T)=>z-T);k.delete(_[0]),k.add(D)}return{...$,answers:{...$.answers,[S.id]:[...k].sort((_,z)=>_-z)}}})}function O(S){v||t(D=>({...D,flagged:{...D.flagged,[S]:!D.flagged[S]}}))}function H(){v||t(S=>({...S,answers:{},flagged:{}}))}function ve(){t({answers:{},flagged:{},submitted:!1,timeLeft:Ir,startedAt:Date.now(),submittedAt:null}),m(!1),c(!1),l(!1),r("all"),i("")}function et(){var D;const S=Ae.find($=>(h[$.id]||[]).length===0);S&&((D=document.getElementById(S.id))==null||D.scrollIntoView({behavior:"smooth",block:"start"}))}function Ct(){t(S=>({...S,submitted:!0,submittedAt:Date.now()}))}function mn(S){var D;(D=document.getElementById(S))==null||D.scrollIntoView({behavior:"smooth",block:"start"})}return p.jsxs("div",{className:`app-shell ${s?"focus-mode":""}`,children:[p.jsxs("header",{className:"exam-topbar panel",children:[p.jsxs("div",{className:"topbar-group",children:[p.jsxs("div",{children:[p.jsx("div",{className:"eyebrow",children:"High-Confidence Exam Mode"}),p.jsx("h1",{className:"topbar-title",children:"GitHub Certification Simulator"})]}),p.jsx("p",{className:"topbar-copy",children:"This stricter pass scores only high-confidence questions. Ambiguous items are still visible for practice, but they are excluded from the final score."})]}),p.jsxs("div",{className:"topbar-actions",children:[p.jsxs("div",{className:`time-card ${x<600?"time-low":""}`,children:[p.jsx("span",{className:"time-label",children:"Time Left"}),p.jsx("strong",{children:Jf(x)})]}),p.jsxs("div",{className:"time-card subtle",children:[p.jsx("span",{className:"time-label",children:"Strict Score"}),p.jsx("strong",{children:v?`${N.percent}%`:`${E}%`})]}),p.jsx("button",{className:"ghost",onClick:()=>l(S=>!S),children:s?"Exit Focus":"Focus Mode"}),p.jsx("button",{className:"primary submit-button",onClick:()=>c(!0),children:"Submit Exam"})]})]}),p.jsxs("div",{className:"shell",children:[p.jsxs("aside",{className:"sidebar panel",children:[p.jsxs("div",{className:"brand",children:[p.jsx("span",{className:"eyebrow",children:"Exam Dashboard"}),p.jsx("h2",{className:"sidebar-title",children:"Attempt Overview"}),p.jsx("div",{className:"lede",children:"Navigate quickly, flag questions for review, and submit once you are satisfied with your attempt."})]}),p.jsxs("div",{className:"stats stats-three",children:[p.jsxs("div",{className:"stat",children:[p.jsx("strong",{children:Ae.length}),p.jsx("span",{className:"muted",children:"questions"})]}),p.jsxs("div",{className:"stat",children:[p.jsx("strong",{children:d}),p.jsx("span",{className:"muted",children:"answered"})]}),p.jsxs("div",{className:"stat",children:[p.jsx("strong",{children:N.excluded}),p.jsx("span",{className:"muted",children:"excluded"})]})]}),p.jsxs("div",{className:"progress-wrap",children:[p.jsxs("div",{className:"progress-meta",children:[p.jsx("span",{children:"Attempt Completion"}),p.jsxs("strong",{children:[E,"%"]})]}),p.jsx("div",{className:"bar",children:p.jsx("span",{style:{width:`${E}%`}})})]}),p.jsxs("div",{className:"legend-grid",children:[p.jsx("span",{className:"legend-chip answered",children:"Answered"}),p.jsx("span",{className:"legend-chip unanswered",children:"Unanswered"}),p.jsx("span",{className:"legend-chip flagged",children:"Flagged"}),p.jsx("span",{className:"legend-chip flagged-answered",children:"Flagged + answered"}),v&&p.jsx("span",{className:"legend-chip correct",children:"Correct"}),v&&p.jsx("span",{className:"legend-chip incorrect",children:"Incorrect"}),v&&p.jsx("span",{className:"legend-chip excluded",children:"Excluded"})]}),p.jsx("div",{className:"question-palette",children:Ae.map((S,D)=>{const $=v?Ar(S.id,h):ei(S,h,C);return p.jsx("button",{className:`palette-item ${$}`,onClick:()=>mn(S.id),children:D+1},S.id)})}),p.jsx("div",{className:"navigator",children:Ae.map(S=>{const D=v?Ar(S.id,h):ei(S,h,C),$=y.some(k=>k.id===S.id);return p.jsxs("button",{className:`nav-item ${D} ${$?"active":""}`,onClick:()=>mn(S.id),children:[p.jsxs("div",{className:"nav-topline",children:[p.jsx("span",{children:S.label}),p.jsx("span",{children:S.choose>1?`Pick ${S.choose}`:"Pick 1"})]}),p.jsx("div",{className:"nav-title",children:S.prompt})]},S.id)})}),p.jsxs("div",{className:"nav-actions",children:[p.jsx("button",{className:"ghost",onClick:et,children:"First Unanswered"}),p.jsx("button",{className:"ghost",onClick:H,children:"Clear Attempt"})]})]}),p.jsxs("main",{className:"main",children:[p.jsx("section",{className:"hero panel exam-hero",children:p.jsxs("div",{className:"hero-grid",children:[p.jsxs("div",{children:[p.jsx("span",{className:"eyebrow hero-eyebrow",children:"Strict Scoring"}),p.jsx("h2",{children:"Practice hard, score carefully."}),p.jsx("p",{children:"Only high-confidence answers count toward the final score. Ambiguous legacy questions are still shown for study, but they are reported separately instead of affecting your grade."})]}),p.jsxs("div",{className:"hero-cards",children:[p.jsxs("div",{className:"hero-card",children:[p.jsx("strong",{children:En}),p.jsx("span",{children:"strictly scored entries"})]}),p.jsxs("div",{className:"hero-card",children:[p.jsx("strong",{children:Jo.length}),p.jsx("span",{children:"ambiguous question numbers"})]}),p.jsxs("div",{className:"hero-card",children:[p.jsx("strong",{children:f}),p.jsx("span",{children:"multi-select prompts"})]}),p.jsxs("div",{className:"hero-card",children:[p.jsx("strong",{children:u}),p.jsx("span",{children:"flagged right now"})]})]})]})}),p.jsxs("section",{className:"toolbar panel",children:[p.jsxs("div",{className:"toolbar-top",children:[p.jsx("input",{className:"search",type:"search",value:o,onChange:S=>i(S.target.value),placeholder:"Search questions, keywords, or answer text"}),p.jsx("button",{className:"primary",onClick:()=>m(S=>!S),children:g?"Hide Results":"Show Results"})]}),p.jsx("div",{className:"filters",children:[["all","All Questions"],["unanswered","Unanswered"],["answered","Answered"],["flagged","Flagged"],["excluded","Excluded"],["multi","Multi-select"]].map(([S,D])=>p.jsx("button",{className:`pill ${n===S?"active":""}`,onClick:()=>r(S),children:D},S))})]}),g&&p.jsxs("section",{className:"results-panel panel",children:[p.jsxs("div",{className:"results-head",children:[p.jsxs("div",{children:[p.jsx("span",{className:"eyebrow",children:"Strict Result"}),p.jsx("h2",{className:"results-title",children:"High-Confidence Score"})]}),p.jsxs("div",{className:"result-score-ring",children:[p.jsx("span",{children:v?`${N.percent}%`:`${E}%`}),p.jsx("small",{children:v?"strict score":"progress"})]})]}),p.jsxs("div",{className:"results-grid",children:[p.jsxs("div",{className:"result-card accent",children:[p.jsx("strong",{children:N.correct}),p.jsx("span",{children:"correct"})]}),p.jsxs("div",{className:"result-card",children:[p.jsx("strong",{children:N.incorrect}),p.jsx("span",{children:"incorrect"})]}),p.jsxs("div",{className:"result-card",children:[p.jsx("strong",{children:N.blank}),p.jsx("span",{children:"blank scored items"})]}),p.jsxs("div",{className:"result-card",children:[p.jsx("strong",{children:N.excluded}),p.jsx("span",{children:"excluded entries"})]})]}),p.jsxs("div",{className:"results-note",children:["Strict score is based on ",En," high-confidence entries. Questions tied to ambiguous or outdated wording are excluded from scoring."]}),p.jsxs("div",{className:"ambiguity-panel",children:[p.jsx("h3",{className:"ambiguity-title",children:"Excluded Question Numbers"}),p.jsx("div",{className:"ambiguity-list",children:Jo.map(S=>p.jsxs("div",{className:"ambiguity-item",children:[p.jsxs("strong",{children:["Question ",S.questionNumber]}),p.jsx("span",{children:S.reason})]},S.questionNumber))})]}),p.jsxs("div",{className:"results-actions",children:[p.jsx("button",{className:"ghost",onClick:ve,children:"Restart Exam"}),p.jsx("button",{className:"ghost",onClick:et,children:"Jump to Unanswered"})]})]}),p.jsx("section",{className:"questions",children:y.length===0?p.jsx("div",{className:"results-empty",children:"No questions match the current search and filter combination."}):y.map((S,D)=>{const $=new Set(h[S.id]||[]),k=v?Ar(S.id,h):ei(S,h,C),_=!tr[S.id];return p.jsxs("article",{className:`question ${v?"locked":""} ${k}`,id:S.id,style:{animationDelay:`${Math.min(D*18,240)}ms`},children:[p.jsxs("div",{className:"question-head",children:[p.jsxs("div",{children:[p.jsxs("div",{className:"question-index",children:[S.label," � ",Zf(S.ordinal)," in deck"]}),p.jsx("h3",{children:S.prompt})]}),p.jsxs("div",{className:"question-actions",children:[p.jsx("button",{className:`flag-button ${C[S.id]?"active":""}`,onClick:()=>O(S.id),disabled:v,children:C[S.id]?"Flagged":"Flag for review"}),p.jsx("div",{className:"choice-badge",children:S.choose>1?`Choose ${S.choose}`:"Choose 1"})]})]}),p.jsx("div",{className:"options",children:S.options.map((z,T)=>{const V=v?tp(S.id,T,h):"neutral";return p.jsxs("label",{className:`option ${$.has(T)?"selected":""} review-${V}`,children:[p.jsx("input",{hidden:!0,disabled:v,type:S.choose>1?"checkbox":"radio",checked:$.has(T),onChange:()=>P(S,T)}),p.jsx("span",{className:"option-key",children:String.fromCharCode(65+T)}),p.jsx("span",{className:"option-text",children:z}),p.jsx("span",{className:"option-mark","aria-hidden":"true"})]},`${S.id}-${T}`)})}),p.jsxs("div",{className:"question-foot",children:[p.jsx("span",{children:$.size?`${$.size} selected`:"No answer selected yet"}),p.jsx("span",{children:v?_?`Excluded from strict score � source Question ${np(S)}`:k==="correct"?"Marked correct":k==="incorrect"?"Marked incorrect":"Unanswered":C[S.id]?"Marked for review":`${S.options.length} options`})]})]},S.id)})})]})]}),a&&!v&&p.jsx("div",{className:"modal-backdrop",onClick:()=>c(!1),children:p.jsxs("div",{className:"modal-card panel",onClick:S=>S.stopPropagation(),children:[p.jsx("span",{className:"eyebrow",children:"Submit Attempt"}),p.jsx("h2",{className:"modal-title",children:"Ready to finish your exam?"}),p.jsxs("p",{className:"modal-copy",children:["You have answered ",d," of ",Ae.length," entries. Your final strict score will ignore ",Jo.length," ambiguous question numbers."]}),p.jsxs("div",{className:"modal-grid",children:[p.jsxs("div",{className:"result-card accent",children:[p.jsx("strong",{children:d}),p.jsx("span",{children:"answered"})]}),p.jsxs("div",{className:"result-card",children:[p.jsx("strong",{children:j}),p.jsx("span",{children:"unanswered"})]}),p.jsxs("div",{className:"result-card",children:[p.jsx("strong",{children:En}),p.jsx("span",{children:"strictly scored"})]})]}),p.jsxs("div",{className:"modal-actions",children:[p.jsx("button",{className:"ghost",onClick:()=>c(!1),children:"Keep Reviewing"}),p.jsx("button",{className:"primary submit-button",onClick:Ct,children:"Confirm Submit"})]})]})})]})}ti.createRoot(document.getElementById("root")).render(p.jsx(jc.StrictMode,{children:p.jsx(rp,{})}));
