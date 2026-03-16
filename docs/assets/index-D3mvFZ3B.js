(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function oc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fl={exports:{}},to={},Ul={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yn=Symbol.for("react.element"),ic=Symbol.for("react.portal"),sc=Symbol.for("react.fragment"),lc=Symbol.for("react.strict_mode"),ac=Symbol.for("react.profiler"),uc=Symbol.for("react.provider"),cc=Symbol.for("react.context"),dc=Symbol.for("react.forward_ref"),fc=Symbol.for("react.suspense"),pc=Symbol.for("react.memo"),hc=Symbol.for("react.lazy"),Gs=Symbol.iterator;function mc(e){return e===null||typeof e!="object"?null:(e=Gs&&e[Gs]||e["@@iterator"],typeof e=="function"?e:null)}var $l={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vl=Object.assign,ql={};function sn(e,t,n){this.props=e,this.context=t,this.refs=ql,this.updater=n||$l}sn.prototype.isReactComponent={};sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Yl(){}Yl.prototype=sn.prototype;function Oi(e,t,n){this.props=e,this.context=t,this.refs=ql,this.updater=n||$l}var Wi=Oi.prototype=new Yl;Wi.constructor=Oi;Vl(Wi,sn.prototype);Wi.isPureReactComponent=!0;var Is=Array.isArray,Kl=Object.prototype.hasOwnProperty,bi={current:null},Xl={key:!0,ref:!0,__self:!0,__source:!0};function Zl(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Kl.call(t,r)&&!Xl.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];o.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:Yn,type:e,key:i,ref:s,props:o,_owner:bi.current}}function yc(e,t){return{$$typeof:Yn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Bi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yn}function gc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ls=/\/+/g;function Co(e,t){return typeof e=="object"&&e!==null&&e.key!=null?gc(""+e.key):t.toString(36)}function wr(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Yn:case ic:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+Co(s,0):r,Is(o)?(n="",e!=null&&(n=e.replace(Ls,"$&/")+"/"),wr(o,t,n,"",function(c){return c})):o!=null&&(Bi(o)&&(o=yc(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Ls,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",Is(e))for(var l=0;l<e.length;l++){i=e[l];var a=r+Co(i,l);s+=wr(i,t,n,a,o)}else if(a=mc(e),typeof a=="function")for(e=a.call(e),l=0;!(i=e.next()).done;)i=i.value,a=r+Co(i,l++),s+=wr(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function nr(e,t,n){if(e==null)return e;var r=[],o=0;return wr(e,r,"","",function(i){return t.call(n,i,o++)}),r}function vc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var le={current:null},kr={transition:null},wc={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:kr,ReactCurrentOwner:bi};function Jl(){throw Error("act(...) is not supported in production builds of React.")}j.Children={map:nr,forEach:function(e,t,n){nr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return nr(e,function(){t++}),t},toArray:function(e){return nr(e,function(t){return t})||[]},only:function(e){if(!Bi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=sn;j.Fragment=sc;j.Profiler=ac;j.PureComponent=Oi;j.StrictMode=lc;j.Suspense=fc;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wc;j.act=Jl;j.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Vl({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=bi.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)Kl.call(t,a)&&!Xl.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Yn,type:e.type,key:o,ref:i,props:r,_owner:s}};j.createContext=function(e){return e={$$typeof:cc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:uc,_context:e},e.Consumer=e};j.createElement=Zl;j.createFactory=function(e){var t=Zl.bind(null,e);return t.type=e,t};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:dc,render:e}};j.isValidElement=Bi;j.lazy=function(e){return{$$typeof:hc,_payload:{_status:-1,_result:e},_init:vc}};j.memo=function(e,t){return{$$typeof:pc,type:e,compare:t===void 0?null:t}};j.startTransition=function(e){var t=kr.transition;kr.transition={};try{e()}finally{kr.transition=t}};j.unstable_act=Jl;j.useCallback=function(e,t){return le.current.useCallback(e,t)};j.useContext=function(e){return le.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return le.current.useDeferredValue(e)};j.useEffect=function(e,t){return le.current.useEffect(e,t)};j.useId=function(){return le.current.useId()};j.useImperativeHandle=function(e,t,n){return le.current.useImperativeHandle(e,t,n)};j.useInsertionEffect=function(e,t){return le.current.useInsertionEffect(e,t)};j.useLayoutEffect=function(e,t){return le.current.useLayoutEffect(e,t)};j.useMemo=function(e,t){return le.current.useMemo(e,t)};j.useReducer=function(e,t,n){return le.current.useReducer(e,t,n)};j.useRef=function(e){return le.current.useRef(e)};j.useState=function(e){return le.current.useState(e)};j.useSyncExternalStore=function(e,t,n){return le.current.useSyncExternalStore(e,t,n)};j.useTransition=function(){return le.current.useTransition()};j.version="18.3.1";Ul.exports=j;var _e=Ul.exports;const kc=oc(_e);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cc=_e,Sc=Symbol.for("react.element"),Ec=Symbol.for("react.fragment"),xc=Object.prototype.hasOwnProperty,Ac=Cc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pc={key:!0,ref:!0,__self:!0,__source:!0};function ea(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)xc.call(t,r)&&!Pc.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Sc,type:e,key:i,ref:s,props:o,_owner:Ac.current}}to.Fragment=Ec;to.jsx=ea;to.jsxs=ea;Fl.exports=to;var C=Fl.exports,Vo={},ta={exports:{}},ve={},na={exports:{}},ra={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(x,z){var H=x.length;x.push(z);e:for(;0<H;){var F=H-1>>>1,Y=x[F];if(0<o(Y,z))x[F]=z,x[H]=Y,H=F;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var z=x[0],H=x.pop();if(H!==z){x[0]=H;e:for(var F=0,Y=x.length,er=Y>>>1;F<er;){var gt=2*(F+1)-1,ko=x[gt],vt=gt+1,tr=x[vt];if(0>o(ko,H))vt<Y&&0>o(tr,ko)?(x[F]=tr,x[vt]=H,F=vt):(x[F]=ko,x[gt]=H,F=gt);else if(vt<Y&&0>o(tr,H))x[F]=tr,x[vt]=H,F=vt;else break e}}return z}function o(x,z){var H=x.sortIndex-z.sortIndex;return H!==0?H:x.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],c=[],y=1,m=null,p=3,w=!1,k=!1,h=!1,_=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(x){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=x)r(c),z.sortIndex=z.expirationTime,t(a,z);else break;z=n(c)}}function g(x){if(h=!1,f(x),!k)if(n(a)!==null)k=!0,vo(S);else{var z=n(c);z!==null&&wo(g,z.startTime-x)}}function S(x,z){k=!1,h&&(h=!1,d(N),N=-1),w=!0;var H=p;try{for(f(z),m=n(a);m!==null&&(!(m.expirationTime>z)||x&&!Pe());){var F=m.callback;if(typeof F=="function"){m.callback=null,p=m.priorityLevel;var Y=F(m.expirationTime<=z);z=e.unstable_now(),typeof Y=="function"?m.callback=Y:m===n(a)&&r(a),f(z)}else r(a);m=n(a)}if(m!==null)var er=!0;else{var gt=n(c);gt!==null&&wo(g,gt.startTime-z),er=!1}return er}finally{m=null,p=H,w=!1}}var A=!1,P=null,N=-1,B=5,D=-1;function Pe(){return!(e.unstable_now()-D<B)}function un(){if(P!==null){var x=e.unstable_now();D=x;var z=!0;try{z=P(!0,x)}finally{z?cn():(A=!1,P=null)}}else A=!1}var cn;if(typeof u=="function")cn=function(){u(un)};else if(typeof MessageChannel<"u"){var Rs=new MessageChannel,rc=Rs.port2;Rs.port1.onmessage=un,cn=function(){rc.postMessage(null)}}else cn=function(){_(un,0)};function vo(x){P=x,A||(A=!0,cn())}function wo(x,z){N=_(function(){x(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_continueExecution=function(){k||w||(k=!0,vo(S))},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<x?Math.floor(1e3/x):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(x){switch(p){case 1:case 2:case 3:var z=3;break;default:z=p}var H=p;p=z;try{return x()}finally{p=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(x,z){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var H=p;p=x;try{return z()}finally{p=H}},e.unstable_scheduleCallback=function(x,z,H){var F=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?F+H:F):H=F,x){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=H+Y,x={id:y++,callback:z,priorityLevel:x,startTime:H,expirationTime:Y,sortIndex:-1},H>F?(x.sortIndex=H,t(c,x),n(a)===null&&x===n(c)&&(h?(d(N),N=-1):h=!0,wo(g,H-F))):(x.sortIndex=Y,t(a,x),k||w||(k=!0,vo(S))),x},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(x){var z=p;return function(){var H=p;p=z;try{return x.apply(this,arguments)}finally{p=H}}}})(ra);na.exports=ra;var Nc=na.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _c=_e,ge=Nc;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var oa=new Set,Dn={};function jt(e,t){Zt(e,t),Zt(e+"Capture",t)}function Zt(e,t){for(Dn[e]=t,e=0;e<t.length;e++)oa.add(t[e])}var $e=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qo=Object.prototype.hasOwnProperty,zc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qs={},Ms={};function Hc(e){return qo.call(Ms,e)?!0:qo.call(Qs,e)?!1:zc.test(e)?Ms[e]=!0:(Qs[e]=!0,!1)}function jc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Dc(e,t,n,r){if(t===null||typeof t>"u"||jc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ae(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fi=/[\-:]([a-z])/g;function Ui(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Fi,Ui);ee[t]=new ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Fi,Ui);ee[t]=new ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Fi,Ui);ee[t]=new ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new ae(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function $i(e,t,n,r){var o=ee.hasOwnProperty(t)?ee[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Dc(t,n,o,r)&&(n=null),r||o===null?Hc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ke=_c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rr=Symbol.for("react.element"),Rt=Symbol.for("react.portal"),Gt=Symbol.for("react.fragment"),Vi=Symbol.for("react.strict_mode"),Yo=Symbol.for("react.profiler"),ia=Symbol.for("react.provider"),sa=Symbol.for("react.context"),qi=Symbol.for("react.forward_ref"),Ko=Symbol.for("react.suspense"),Xo=Symbol.for("react.suspense_list"),Yi=Symbol.for("react.memo"),Ze=Symbol.for("react.lazy"),la=Symbol.for("react.offscreen"),Os=Symbol.iterator;function dn(e){return e===null||typeof e!="object"?null:(e=Os&&e[Os]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,So;function wn(e){if(So===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);So=t&&t[1]||""}return`
`+So+e}var Eo=!1;function xo(e,t){if(!e||Eo)return"";Eo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,l=i.length-1;1<=s&&0<=l&&o[s]!==i[l];)l--;for(;1<=s&&0<=l;s--,l--)if(o[s]!==i[l]){if(s!==1||l!==1)do if(s--,l--,0>l||o[s]!==i[l]){var a=`
`+o[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{Eo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?wn(e):""}function Tc(e){switch(e.tag){case 5:return wn(e.type);case 16:return wn("Lazy");case 13:return wn("Suspense");case 19:return wn("SuspenseList");case 0:case 2:case 15:return e=xo(e.type,!1),e;case 11:return e=xo(e.type.render,!1),e;case 1:return e=xo(e.type,!0),e;default:return""}}function Zo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gt:return"Fragment";case Rt:return"Portal";case Yo:return"Profiler";case Vi:return"StrictMode";case Ko:return"Suspense";case Xo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case sa:return(e.displayName||"Context")+".Consumer";case ia:return(e._context.displayName||"Context")+".Provider";case qi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yi:return t=e.displayName||null,t!==null?t:Zo(e.type)||"Memo";case Ze:t=e._payload,e=e._init;try{return Zo(e(t))}catch{}}return null}function Rc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zo(t);case 8:return t===Vi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function aa(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gc(e){var t=aa(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function or(e){e._valueTracker||(e._valueTracker=Gc(e))}function ua(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=aa(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function jr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jo(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ws(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ca(e,t){t=t.checked,t!=null&&$i(e,"checked",t,!1)}function ei(e,t){ca(e,t);var n=ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ti(e,t.type,n):t.hasOwnProperty("defaultValue")&&ti(e,t.type,ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function bs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ti(e,t,n){(t!=="number"||jr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var kn=Array.isArray;function $t(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ft(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ni(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(v(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Bs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(v(92));if(kn(n)){if(1<n.length)throw Error(v(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ft(n)}}function da(e,t){var n=ft(t.value),r=ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Fs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ri(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ir,pa=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ir=ir||document.createElement("div"),ir.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ir.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Tn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var En={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ic=["Webkit","ms","Moz","O"];Object.keys(En).forEach(function(e){Ic.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),En[t]=En[e]})});function ha(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||En.hasOwnProperty(e)&&En[e]?(""+t).trim():t+"px"}function ma(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=ha(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Lc=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oi(e,t){if(t){if(Lc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(v(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(v(61))}if(t.style!=null&&typeof t.style!="object")throw Error(v(62))}}function ii(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var si=null;function Ki(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var li=null,Vt=null,qt=null;function Us(e){if(e=Zn(e)){if(typeof li!="function")throw Error(v(280));var t=e.stateNode;t&&(t=so(t),li(e.stateNode,e.type,t))}}function ya(e){Vt?qt?qt.push(e):qt=[e]:Vt=e}function ga(){if(Vt){var e=Vt,t=qt;if(qt=Vt=null,Us(e),t)for(e=0;e<t.length;e++)Us(t[e])}}function va(e,t){return e(t)}function wa(){}var Ao=!1;function ka(e,t,n){if(Ao)return e(t,n);Ao=!0;try{return va(e,t,n)}finally{Ao=!1,(Vt!==null||qt!==null)&&(wa(),ga())}}function Rn(e,t){var n=e.stateNode;if(n===null)return null;var r=so(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(v(231,t,typeof n));return n}var ai=!1;if($e)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){ai=!0}}),window.addEventListener("test",fn,fn),window.removeEventListener("test",fn,fn)}catch{ai=!1}function Qc(e,t,n,r,o,i,s,l,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(y){this.onError(y)}}var xn=!1,Dr=null,Tr=!1,ui=null,Mc={onError:function(e){xn=!0,Dr=e}};function Oc(e,t,n,r,o,i,s,l,a){xn=!1,Dr=null,Qc.apply(Mc,arguments)}function Wc(e,t,n,r,o,i,s,l,a){if(Oc.apply(this,arguments),xn){if(xn){var c=Dr;xn=!1,Dr=null}else throw Error(v(198));Tr||(Tr=!0,ui=c)}}function Dt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ca(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $s(e){if(Dt(e)!==e)throw Error(v(188))}function bc(e){var t=e.alternate;if(!t){if(t=Dt(e),t===null)throw Error(v(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return $s(o),e;if(i===r)return $s(o),t;i=i.sibling}throw Error(v(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s){for(l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s)throw Error(v(189))}}if(n.alternate!==r)throw Error(v(190))}if(n.tag!==3)throw Error(v(188));return n.stateNode.current===n?e:t}function Sa(e){return e=bc(e),e!==null?Ea(e):null}function Ea(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ea(e);if(t!==null)return t;e=e.sibling}return null}var xa=ge.unstable_scheduleCallback,Vs=ge.unstable_cancelCallback,Bc=ge.unstable_shouldYield,Fc=ge.unstable_requestPaint,U=ge.unstable_now,Uc=ge.unstable_getCurrentPriorityLevel,Xi=ge.unstable_ImmediatePriority,Aa=ge.unstable_UserBlockingPriority,Rr=ge.unstable_NormalPriority,$c=ge.unstable_LowPriority,Pa=ge.unstable_IdlePriority,no=null,Qe=null;function Vc(e){if(Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(no,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:Kc,qc=Math.log,Yc=Math.LN2;function Kc(e){return e>>>=0,e===0?32:31-(qc(e)/Yc|0)|0}var sr=64,lr=4194304;function Cn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Gr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~o;l!==0?r=Cn(l):(i&=s,i!==0&&(r=Cn(i)))}else s=n&~o,s!==0?r=Cn(s):i!==0&&(r=Cn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-De(t),o=1<<n,r|=e[n],t&=~o;return r}function Xc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-De(i),l=1<<s,a=o[s];a===-1?(!(l&n)||l&r)&&(o[s]=Xc(l,t)):a<=t&&(e.expiredLanes|=l),i&=~l}}function ci(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Na(){var e=sr;return sr<<=1,!(sr&4194240)&&(sr=64),e}function Po(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Kn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-De(t),e[t]=n}function Jc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-De(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Zi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-De(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var R=0;function _a(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var za,Ji,Ha,ja,Da,di=!1,ar=[],ot=null,it=null,st=null,Gn=new Map,In=new Map,et=[],ed="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qs(e,t){switch(e){case"focusin":case"focusout":ot=null;break;case"dragenter":case"dragleave":it=null;break;case"mouseover":case"mouseout":st=null;break;case"pointerover":case"pointerout":Gn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":In.delete(t.pointerId)}}function pn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Zn(t),t!==null&&Ji(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function td(e,t,n,r,o){switch(t){case"focusin":return ot=pn(ot,e,t,n,r,o),!0;case"dragenter":return it=pn(it,e,t,n,r,o),!0;case"mouseover":return st=pn(st,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Gn.set(i,pn(Gn.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,In.set(i,pn(In.get(i)||null,e,t,n,r,o)),!0}return!1}function Ta(e){var t=Ct(e.target);if(t!==null){var n=Dt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ca(n),t!==null){e.blockedOn=t,Da(e.priority,function(){Ha(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Cr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);si=r,n.target.dispatchEvent(r),si=null}else return t=Zn(n),t!==null&&Ji(t),e.blockedOn=n,!1;t.shift()}return!0}function Ys(e,t,n){Cr(e)&&n.delete(t)}function nd(){di=!1,ot!==null&&Cr(ot)&&(ot=null),it!==null&&Cr(it)&&(it=null),st!==null&&Cr(st)&&(st=null),Gn.forEach(Ys),In.forEach(Ys)}function hn(e,t){e.blockedOn===t&&(e.blockedOn=null,di||(di=!0,ge.unstable_scheduleCallback(ge.unstable_NormalPriority,nd)))}function Ln(e){function t(o){return hn(o,e)}if(0<ar.length){hn(ar[0],e);for(var n=1;n<ar.length;n++){var r=ar[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ot!==null&&hn(ot,e),it!==null&&hn(it,e),st!==null&&hn(st,e),Gn.forEach(t),In.forEach(t),n=0;n<et.length;n++)r=et[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<et.length&&(n=et[0],n.blockedOn===null);)Ta(n),n.blockedOn===null&&et.shift()}var Yt=Ke.ReactCurrentBatchConfig,Ir=!0;function rd(e,t,n,r){var o=R,i=Yt.transition;Yt.transition=null;try{R=1,es(e,t,n,r)}finally{R=o,Yt.transition=i}}function od(e,t,n,r){var o=R,i=Yt.transition;Yt.transition=null;try{R=4,es(e,t,n,r)}finally{R=o,Yt.transition=i}}function es(e,t,n,r){if(Ir){var o=fi(e,t,n,r);if(o===null)Io(e,t,r,Lr,n),qs(e,r);else if(td(o,e,t,n,r))r.stopPropagation();else if(qs(e,r),t&4&&-1<ed.indexOf(e)){for(;o!==null;){var i=Zn(o);if(i!==null&&za(i),i=fi(e,t,n,r),i===null&&Io(e,t,r,Lr,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Io(e,t,r,null,n)}}var Lr=null;function fi(e,t,n,r){if(Lr=null,e=Ki(r),e=Ct(e),e!==null)if(t=Dt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ca(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Lr=e,null}function Ra(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Uc()){case Xi:return 1;case Aa:return 4;case Rr:case $c:return 16;case Pa:return 536870912;default:return 16}default:return 16}}var nt=null,ts=null,Sr=null;function Ga(){if(Sr)return Sr;var e,t=ts,n=t.length,r,o="value"in nt?nt.value:nt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return Sr=o.slice(e,1<r?1-r:void 0)}function Er(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ur(){return!0}function Ks(){return!1}function we(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ur:Ks,this.isPropagationStopped=Ks,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),t}var ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ns=we(ln),Xn=W({},ln,{view:0,detail:0}),id=we(Xn),No,_o,mn,ro=W({},Xn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mn&&(mn&&e.type==="mousemove"?(No=e.screenX-mn.screenX,_o=e.screenY-mn.screenY):_o=No=0,mn=e),No)},movementY:function(e){return"movementY"in e?e.movementY:_o}}),Xs=we(ro),sd=W({},ro,{dataTransfer:0}),ld=we(sd),ad=W({},Xn,{relatedTarget:0}),zo=we(ad),ud=W({},ln,{animationName:0,elapsedTime:0,pseudoElement:0}),cd=we(ud),dd=W({},ln,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fd=we(dd),pd=W({},ln,{data:0}),Zs=we(pd),hd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},md={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yd[e])?!!t[e]:!1}function rs(){return gd}var vd=W({},Xn,{key:function(e){if(e.key){var t=hd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Er(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?md[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rs,charCode:function(e){return e.type==="keypress"?Er(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Er(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wd=we(vd),kd=W({},ro,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Js=we(kd),Cd=W({},Xn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rs}),Sd=we(Cd),Ed=W({},ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),xd=we(Ed),Ad=W({},ro,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pd=we(Ad),Nd=[9,13,27,32],os=$e&&"CompositionEvent"in window,An=null;$e&&"documentMode"in document&&(An=document.documentMode);var _d=$e&&"TextEvent"in window&&!An,Ia=$e&&(!os||An&&8<An&&11>=An),el=" ",tl=!1;function La(e,t){switch(e){case"keyup":return Nd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var It=!1;function zd(e,t){switch(e){case"compositionend":return Qa(t);case"keypress":return t.which!==32?null:(tl=!0,el);case"textInput":return e=t.data,e===el&&tl?null:e;default:return null}}function Hd(e,t){if(It)return e==="compositionend"||!os&&La(e,t)?(e=Ga(),Sr=ts=nt=null,It=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ia&&t.locale!=="ko"?null:t.data;default:return null}}var jd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jd[e.type]:t==="textarea"}function Ma(e,t,n,r){ya(r),t=Qr(t,"onChange"),0<t.length&&(n=new ns("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pn=null,Qn=null;function Dd(e){Ka(e,0)}function oo(e){var t=Mt(e);if(ua(t))return e}function Td(e,t){if(e==="change")return t}var Oa=!1;if($e){var Ho;if($e){var jo="oninput"in document;if(!jo){var rl=document.createElement("div");rl.setAttribute("oninput","return;"),jo=typeof rl.oninput=="function"}Ho=jo}else Ho=!1;Oa=Ho&&(!document.documentMode||9<document.documentMode)}function ol(){Pn&&(Pn.detachEvent("onpropertychange",Wa),Qn=Pn=null)}function Wa(e){if(e.propertyName==="value"&&oo(Qn)){var t=[];Ma(t,Qn,e,Ki(e)),ka(Dd,t)}}function Rd(e,t,n){e==="focusin"?(ol(),Pn=t,Qn=n,Pn.attachEvent("onpropertychange",Wa)):e==="focusout"&&ol()}function Gd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oo(Qn)}function Id(e,t){if(e==="click")return oo(t)}function Ld(e,t){if(e==="input"||e==="change")return oo(t)}function Qd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Re=typeof Object.is=="function"?Object.is:Qd;function Mn(e,t){if(Re(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!qo.call(t,o)||!Re(e[o],t[o]))return!1}return!0}function il(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sl(e,t){var n=il(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=il(n)}}function ba(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ba(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ba(){for(var e=window,t=jr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=jr(e.document)}return t}function is(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Md(e){var t=Ba(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ba(n.ownerDocument.documentElement,n)){if(r!==null&&is(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=sl(n,i);var s=sl(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Od=$e&&"documentMode"in document&&11>=document.documentMode,Lt=null,pi=null,Nn=null,hi=!1;function ll(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hi||Lt==null||Lt!==jr(r)||(r=Lt,"selectionStart"in r&&is(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nn&&Mn(Nn,r)||(Nn=r,r=Qr(pi,"onSelect"),0<r.length&&(t=new ns("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Lt)))}function cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qt={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionend:cr("Transition","TransitionEnd")},Do={},Fa={};$e&&(Fa=document.createElement("div").style,"AnimationEvent"in window||(delete Qt.animationend.animation,delete Qt.animationiteration.animation,delete Qt.animationstart.animation),"TransitionEvent"in window||delete Qt.transitionend.transition);function io(e){if(Do[e])return Do[e];if(!Qt[e])return e;var t=Qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Fa)return Do[e]=t[n];return e}var Ua=io("animationend"),$a=io("animationiteration"),Va=io("animationstart"),qa=io("transitionend"),Ya=new Map,al="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ht(e,t){Ya.set(e,t),jt(t,[e])}for(var To=0;To<al.length;To++){var Ro=al[To],Wd=Ro.toLowerCase(),bd=Ro[0].toUpperCase()+Ro.slice(1);ht(Wd,"on"+bd)}ht(Ua,"onAnimationEnd");ht($a,"onAnimationIteration");ht(Va,"onAnimationStart");ht("dblclick","onDoubleClick");ht("focusin","onFocus");ht("focusout","onBlur");ht(qa,"onTransitionEnd");Zt("onMouseEnter",["mouseout","mouseover"]);Zt("onMouseLeave",["mouseout","mouseover"]);Zt("onPointerEnter",["pointerout","pointerover"]);Zt("onPointerLeave",["pointerout","pointerover"]);jt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jt("onBeforeInput",["compositionend","keypress","textInput","paste"]);jt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));function ul(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Wc(r,t,void 0,e),e.currentTarget=null}function Ka(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==i&&o.isPropagationStopped())break e;ul(o,l,c),i=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,c=l.currentTarget,l=l.listener,a!==i&&o.isPropagationStopped())break e;ul(o,l,c),i=a}}}if(Tr)throw e=ui,Tr=!1,ui=null,e}function I(e,t){var n=t[wi];n===void 0&&(n=t[wi]=new Set);var r=e+"__bubble";n.has(r)||(Xa(t,e,2,!1),n.add(r))}function Go(e,t,n){var r=0;t&&(r|=4),Xa(n,e,r,t)}var dr="_reactListening"+Math.random().toString(36).slice(2);function On(e){if(!e[dr]){e[dr]=!0,oa.forEach(function(n){n!=="selectionchange"&&(Bd.has(n)||Go(n,!1,e),Go(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[dr]||(t[dr]=!0,Go("selectionchange",!1,t))}}function Xa(e,t,n,r){switch(Ra(t)){case 1:var o=rd;break;case 4:o=od;break;default:o=es}n=o.bind(null,t,n,e),o=void 0,!ai||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Io(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;s=s.return}for(;l!==null;){if(s=Ct(l),s===null)return;if(a=s.tag,a===5||a===6){r=i=s;continue e}l=l.parentNode}}r=r.return}ka(function(){var c=i,y=Ki(n),m=[];e:{var p=Ya.get(e);if(p!==void 0){var w=ns,k=e;switch(e){case"keypress":if(Er(n)===0)break e;case"keydown":case"keyup":w=wd;break;case"focusin":k="focus",w=zo;break;case"focusout":k="blur",w=zo;break;case"beforeblur":case"afterblur":w=zo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Xs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=ld;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Sd;break;case Ua:case $a:case Va:w=cd;break;case qa:w=xd;break;case"scroll":w=id;break;case"wheel":w=Pd;break;case"copy":case"cut":case"paste":w=fd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Js}var h=(t&4)!==0,_=!h&&e==="scroll",d=h?p!==null?p+"Capture":null:p;h=[];for(var u=c,f;u!==null;){f=u;var g=f.stateNode;if(f.tag===5&&g!==null&&(f=g,d!==null&&(g=Rn(u,d),g!=null&&h.push(Wn(u,g,f)))),_)break;u=u.return}0<h.length&&(p=new w(p,k,null,n,y),m.push({event:p,listeners:h}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",p&&n!==si&&(k=n.relatedTarget||n.fromElement)&&(Ct(k)||k[Ve]))break e;if((w||p)&&(p=y.window===y?y:(p=y.ownerDocument)?p.defaultView||p.parentWindow:window,w?(k=n.relatedTarget||n.toElement,w=c,k=k?Ct(k):null,k!==null&&(_=Dt(k),k!==_||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=c),w!==k)){if(h=Xs,g="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(h=Js,g="onPointerLeave",d="onPointerEnter",u="pointer"),_=w==null?p:Mt(w),f=k==null?p:Mt(k),p=new h(g,u+"leave",w,n,y),p.target=_,p.relatedTarget=f,g=null,Ct(y)===c&&(h=new h(d,u+"enter",k,n,y),h.target=f,h.relatedTarget=_,g=h),_=g,w&&k)t:{for(h=w,d=k,u=0,f=h;f;f=Tt(f))u++;for(f=0,g=d;g;g=Tt(g))f++;for(;0<u-f;)h=Tt(h),u--;for(;0<f-u;)d=Tt(d),f--;for(;u--;){if(h===d||d!==null&&h===d.alternate)break t;h=Tt(h),d=Tt(d)}h=null}else h=null;w!==null&&cl(m,p,w,h,!1),k!==null&&_!==null&&cl(m,_,k,h,!0)}}e:{if(p=c?Mt(c):window,w=p.nodeName&&p.nodeName.toLowerCase(),w==="select"||w==="input"&&p.type==="file")var S=Td;else if(nl(p))if(Oa)S=Ld;else{S=Gd;var A=Rd}else(w=p.nodeName)&&w.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=Id);if(S&&(S=S(e,c))){Ma(m,S,n,y);break e}A&&A(e,p,c),e==="focusout"&&(A=p._wrapperState)&&A.controlled&&p.type==="number"&&ti(p,"number",p.value)}switch(A=c?Mt(c):window,e){case"focusin":(nl(A)||A.contentEditable==="true")&&(Lt=A,pi=c,Nn=null);break;case"focusout":Nn=pi=Lt=null;break;case"mousedown":hi=!0;break;case"contextmenu":case"mouseup":case"dragend":hi=!1,ll(m,n,y);break;case"selectionchange":if(Od)break;case"keydown":case"keyup":ll(m,n,y)}var P;if(os)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else It?La(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Ia&&n.locale!=="ko"&&(It||N!=="onCompositionStart"?N==="onCompositionEnd"&&It&&(P=Ga()):(nt=y,ts="value"in nt?nt.value:nt.textContent,It=!0)),A=Qr(c,N),0<A.length&&(N=new Zs(N,e,null,n,y),m.push({event:N,listeners:A}),P?N.data=P:(P=Qa(n),P!==null&&(N.data=P)))),(P=_d?zd(e,n):Hd(e,n))&&(c=Qr(c,"onBeforeInput"),0<c.length&&(y=new Zs("onBeforeInput","beforeinput",null,n,y),m.push({event:y,listeners:c}),y.data=P))}Ka(m,t)})}function Wn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qr(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Rn(e,n),i!=null&&r.unshift(Wn(e,i,o)),i=Rn(e,t),i!=null&&r.push(Wn(e,i,o))),e=e.return}return r}function Tt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cl(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var l=n,a=l.alternate,c=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&c!==null&&(l=c,o?(a=Rn(n,i),a!=null&&s.unshift(Wn(n,a,l))):o||(a=Rn(n,i),a!=null&&s.push(Wn(n,a,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Fd=/\r\n?/g,Ud=/\u0000|\uFFFD/g;function dl(e){return(typeof e=="string"?e:""+e).replace(Fd,`
`).replace(Ud,"")}function fr(e,t,n){if(t=dl(t),dl(e)!==t&&n)throw Error(v(425))}function Mr(){}var mi=null,yi=null;function gi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vi=typeof setTimeout=="function"?setTimeout:void 0,$d=typeof clearTimeout=="function"?clearTimeout:void 0,fl=typeof Promise=="function"?Promise:void 0,Vd=typeof queueMicrotask=="function"?queueMicrotask:typeof fl<"u"?function(e){return fl.resolve(null).then(e).catch(qd)}:vi;function qd(e){setTimeout(function(){throw e})}function Lo(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Ln(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Ln(t)}function lt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function pl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var an=Math.random().toString(36).slice(2),Le="__reactFiber$"+an,bn="__reactProps$"+an,Ve="__reactContainer$"+an,wi="__reactEvents$"+an,Yd="__reactListeners$"+an,Kd="__reactHandles$"+an;function Ct(e){var t=e[Le];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ve]||n[Le]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=pl(e);e!==null;){if(n=e[Le])return n;e=pl(e)}return t}e=n,n=e.parentNode}return null}function Zn(e){return e=e[Le]||e[Ve],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function so(e){return e[bn]||null}var ki=[],Ot=-1;function mt(e){return{current:e}}function L(e){0>Ot||(e.current=ki[Ot],ki[Ot]=null,Ot--)}function G(e,t){Ot++,ki[Ot]=e.current,e.current=t}var pt={},oe=mt(pt),de=mt(!1),Pt=pt;function Jt(e,t){var n=e.type.contextTypes;if(!n)return pt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function fe(e){return e=e.childContextTypes,e!=null}function Or(){L(de),L(oe)}function hl(e,t,n){if(oe.current!==pt)throw Error(v(168));G(oe,t),G(de,n)}function Za(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(v(108,Rc(e)||"Unknown",o));return W({},n,r)}function Wr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pt,Pt=oe.current,G(oe,e),G(de,de.current),!0}function ml(e,t,n){var r=e.stateNode;if(!r)throw Error(v(169));n?(e=Za(e,t,Pt),r.__reactInternalMemoizedMergedChildContext=e,L(de),L(oe),G(oe,e)):L(de),G(de,n)}var be=null,lo=!1,Qo=!1;function Ja(e){be===null?be=[e]:be.push(e)}function Xd(e){lo=!0,Ja(e)}function yt(){if(!Qo&&be!==null){Qo=!0;var e=0,t=R;try{var n=be;for(R=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}be=null,lo=!1}catch(o){throw be!==null&&(be=be.slice(e+1)),xa(Xi,yt),o}finally{R=t,Qo=!1}}return null}var Wt=[],bt=0,br=null,Br=0,ke=[],Ce=0,Nt=null,Be=1,Fe="";function wt(e,t){Wt[bt++]=Br,Wt[bt++]=br,br=e,Br=t}function eu(e,t,n){ke[Ce++]=Be,ke[Ce++]=Fe,ke[Ce++]=Nt,Nt=e;var r=Be;e=Fe;var o=32-De(r)-1;r&=~(1<<o),n+=1;var i=32-De(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,Be=1<<32-De(t)+o|n<<o|r,Fe=i+e}else Be=1<<i|n<<o|r,Fe=e}function ss(e){e.return!==null&&(wt(e,1),eu(e,1,0))}function ls(e){for(;e===br;)br=Wt[--bt],Wt[bt]=null,Br=Wt[--bt],Wt[bt]=null;for(;e===Nt;)Nt=ke[--Ce],ke[Ce]=null,Fe=ke[--Ce],ke[Ce]=null,Be=ke[--Ce],ke[Ce]=null}var ye=null,me=null,Q=!1,je=null;function tu(e,t){var n=Se(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function yl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ye=e,me=lt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ye=e,me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Nt!==null?{id:Be,overflow:Fe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Se(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ye=e,me=null,!0):!1;default:return!1}}function Ci(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Si(e){if(Q){var t=me;if(t){var n=t;if(!yl(e,t)){if(Ci(e))throw Error(v(418));t=lt(n.nextSibling);var r=ye;t&&yl(e,t)?tu(r,n):(e.flags=e.flags&-4097|2,Q=!1,ye=e)}}else{if(Ci(e))throw Error(v(418));e.flags=e.flags&-4097|2,Q=!1,ye=e}}}function gl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function pr(e){if(e!==ye)return!1;if(!Q)return gl(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gi(e.type,e.memoizedProps)),t&&(t=me)){if(Ci(e))throw nu(),Error(v(418));for(;t;)tu(e,t),t=lt(t.nextSibling)}if(gl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){me=lt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}me=null}}else me=ye?lt(e.stateNode.nextSibling):null;return!0}function nu(){for(var e=me;e;)e=lt(e.nextSibling)}function en(){me=ye=null,Q=!1}function as(e){je===null?je=[e]:je.push(e)}var Zd=Ke.ReactCurrentBatchConfig;function yn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(v(309));var r=n.stateNode}if(!r)throw Error(v(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var l=o.refs;s===null?delete l[i]:l[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(v(284));if(!n._owner)throw Error(v(290,e))}return e}function hr(e,t){throw e=Object.prototype.toString.call(t),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vl(e){var t=e._init;return t(e._payload)}function ru(e){function t(d,u){if(e){var f=d.deletions;f===null?(d.deletions=[u],d.flags|=16):f.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function o(d,u){return d=dt(d,u),d.index=0,d.sibling=null,d}function i(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags|=2,u):f):(d.flags|=2,u)):(d.flags|=1048576,u)}function s(d){return e&&d.alternate===null&&(d.flags|=2),d}function l(d,u,f,g){return u===null||u.tag!==6?(u=Uo(f,d.mode,g),u.return=d,u):(u=o(u,f),u.return=d,u)}function a(d,u,f,g){var S=f.type;return S===Gt?y(d,u,f.props.children,g,f.key):u!==null&&(u.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ze&&vl(S)===u.type)?(g=o(u,f.props),g.ref=yn(d,u,f),g.return=d,g):(g=Hr(f.type,f.key,f.props,null,d.mode,g),g.ref=yn(d,u,f),g.return=d,g)}function c(d,u,f,g){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=$o(f,d.mode,g),u.return=d,u):(u=o(u,f.children||[]),u.return=d,u)}function y(d,u,f,g,S){return u===null||u.tag!==7?(u=At(f,d.mode,g,S),u.return=d,u):(u=o(u,f),u.return=d,u)}function m(d,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Uo(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case rr:return f=Hr(u.type,u.key,u.props,null,d.mode,f),f.ref=yn(d,null,u),f.return=d,f;case Rt:return u=$o(u,d.mode,f),u.return=d,u;case Ze:var g=u._init;return m(d,g(u._payload),f)}if(kn(u)||dn(u))return u=At(u,d.mode,f,null),u.return=d,u;hr(d,u)}return null}function p(d,u,f,g){var S=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:l(d,u,""+f,g);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case rr:return f.key===S?a(d,u,f,g):null;case Rt:return f.key===S?c(d,u,f,g):null;case Ze:return S=f._init,p(d,u,S(f._payload),g)}if(kn(f)||dn(f))return S!==null?null:y(d,u,f,g,null);hr(d,f)}return null}function w(d,u,f,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return d=d.get(f)||null,l(u,d,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case rr:return d=d.get(g.key===null?f:g.key)||null,a(u,d,g,S);case Rt:return d=d.get(g.key===null?f:g.key)||null,c(u,d,g,S);case Ze:var A=g._init;return w(d,u,f,A(g._payload),S)}if(kn(g)||dn(g))return d=d.get(f)||null,y(u,d,g,S,null);hr(u,g)}return null}function k(d,u,f,g){for(var S=null,A=null,P=u,N=u=0,B=null;P!==null&&N<f.length;N++){P.index>N?(B=P,P=null):B=P.sibling;var D=p(d,P,f[N],g);if(D===null){P===null&&(P=B);break}e&&P&&D.alternate===null&&t(d,P),u=i(D,u,N),A===null?S=D:A.sibling=D,A=D,P=B}if(N===f.length)return n(d,P),Q&&wt(d,N),S;if(P===null){for(;N<f.length;N++)P=m(d,f[N],g),P!==null&&(u=i(P,u,N),A===null?S=P:A.sibling=P,A=P);return Q&&wt(d,N),S}for(P=r(d,P);N<f.length;N++)B=w(P,d,N,f[N],g),B!==null&&(e&&B.alternate!==null&&P.delete(B.key===null?N:B.key),u=i(B,u,N),A===null?S=B:A.sibling=B,A=B);return e&&P.forEach(function(Pe){return t(d,Pe)}),Q&&wt(d,N),S}function h(d,u,f,g){var S=dn(f);if(typeof S!="function")throw Error(v(150));if(f=S.call(f),f==null)throw Error(v(151));for(var A=S=null,P=u,N=u=0,B=null,D=f.next();P!==null&&!D.done;N++,D=f.next()){P.index>N?(B=P,P=null):B=P.sibling;var Pe=p(d,P,D.value,g);if(Pe===null){P===null&&(P=B);break}e&&P&&Pe.alternate===null&&t(d,P),u=i(Pe,u,N),A===null?S=Pe:A.sibling=Pe,A=Pe,P=B}if(D.done)return n(d,P),Q&&wt(d,N),S;if(P===null){for(;!D.done;N++,D=f.next())D=m(d,D.value,g),D!==null&&(u=i(D,u,N),A===null?S=D:A.sibling=D,A=D);return Q&&wt(d,N),S}for(P=r(d,P);!D.done;N++,D=f.next())D=w(P,d,N,D.value,g),D!==null&&(e&&D.alternate!==null&&P.delete(D.key===null?N:D.key),u=i(D,u,N),A===null?S=D:A.sibling=D,A=D);return e&&P.forEach(function(un){return t(d,un)}),Q&&wt(d,N),S}function _(d,u,f,g){if(typeof f=="object"&&f!==null&&f.type===Gt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case rr:e:{for(var S=f.key,A=u;A!==null;){if(A.key===S){if(S=f.type,S===Gt){if(A.tag===7){n(d,A.sibling),u=o(A,f.props.children),u.return=d,d=u;break e}}else if(A.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ze&&vl(S)===A.type){n(d,A.sibling),u=o(A,f.props),u.ref=yn(d,A,f),u.return=d,d=u;break e}n(d,A);break}else t(d,A);A=A.sibling}f.type===Gt?(u=At(f.props.children,d.mode,g,f.key),u.return=d,d=u):(g=Hr(f.type,f.key,f.props,null,d.mode,g),g.ref=yn(d,u,f),g.return=d,d=g)}return s(d);case Rt:e:{for(A=f.key;u!==null;){if(u.key===A)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(d,u.sibling),u=o(u,f.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=$o(f,d.mode,g),u.return=d,d=u}return s(d);case Ze:return A=f._init,_(d,u,A(f._payload),g)}if(kn(f))return k(d,u,f,g);if(dn(f))return h(d,u,f,g);hr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(n(d,u.sibling),u=o(u,f),u.return=d,d=u):(n(d,u),u=Uo(f,d.mode,g),u.return=d,d=u),s(d)):n(d,u)}return _}var tn=ru(!0),ou=ru(!1),Fr=mt(null),Ur=null,Bt=null,us=null;function cs(){us=Bt=Ur=null}function ds(e){var t=Fr.current;L(Fr),e._currentValue=t}function Ei(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Kt(e,t){Ur=e,us=Bt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ce=!0),e.firstContext=null)}function xe(e){var t=e._currentValue;if(us!==e)if(e={context:e,memoizedValue:t,next:null},Bt===null){if(Ur===null)throw Error(v(308));Bt=e,Ur.dependencies={lanes:0,firstContext:e}}else Bt=Bt.next=e;return t}var St=null;function fs(e){St===null?St=[e]:St.push(e)}function iu(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,fs(t)):(n.next=o.next,o.next=n),t.interleaved=n,qe(e,r)}function qe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Je=!1;function ps(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function su(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ue(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function at(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,T&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,qe(e,n)}return o=r.interleaved,o===null?(t.next=t,fs(r)):(t.next=o.next,o.next=t),r.interleaved=t,qe(e,n)}function xr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zi(e,n)}}function wl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $r(e,t,n,r){var o=e.updateQueue;Je=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var a=l,c=a.next;a.next=null,s===null?i=c:s.next=c,s=a;var y=e.alternate;y!==null&&(y=y.updateQueue,l=y.lastBaseUpdate,l!==s&&(l===null?y.firstBaseUpdate=c:l.next=c,y.lastBaseUpdate=a))}if(i!==null){var m=o.baseState;s=0,y=c=a=null,l=i;do{var p=l.lane,w=l.eventTime;if((r&p)===p){y!==null&&(y=y.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=e,h=l;switch(p=t,w=n,h.tag){case 1:if(k=h.payload,typeof k=="function"){m=k.call(w,m,p);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=h.payload,p=typeof k=="function"?k.call(w,m,p):k,p==null)break e;m=W({},m,p);break e;case 2:Je=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[l]:p.push(l))}else w={eventTime:w,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},y===null?(c=y=w,a=m):y=y.next=w,s|=p;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;p=l,l=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(y===null&&(a=m),o.baseState=a,o.firstBaseUpdate=c,o.lastBaseUpdate=y,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);zt|=s,e.lanes=s,e.memoizedState=m}}function kl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(v(191,o));o.call(r)}}}var Jn={},Me=mt(Jn),Bn=mt(Jn),Fn=mt(Jn);function Et(e){if(e===Jn)throw Error(v(174));return e}function hs(e,t){switch(G(Fn,t),G(Bn,e),G(Me,Jn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ri(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ri(t,e)}L(Me),G(Me,t)}function nn(){L(Me),L(Bn),L(Fn)}function lu(e){Et(Fn.current);var t=Et(Me.current),n=ri(t,e.type);t!==n&&(G(Bn,e),G(Me,n))}function ms(e){Bn.current===e&&(L(Me),L(Bn))}var M=mt(0);function Vr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Mo=[];function ys(){for(var e=0;e<Mo.length;e++)Mo[e]._workInProgressVersionPrimary=null;Mo.length=0}var Ar=Ke.ReactCurrentDispatcher,Oo=Ke.ReactCurrentBatchConfig,_t=0,O=null,V=null,K=null,qr=!1,_n=!1,Un=0,Jd=0;function te(){throw Error(v(321))}function gs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Re(e[n],t[n]))return!1;return!0}function vs(e,t,n,r,o,i){if(_t=i,O=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ar.current=e===null||e.memoizedState===null?rf:of,e=n(r,o),_n){i=0;do{if(_n=!1,Un=0,25<=i)throw Error(v(301));i+=1,K=V=null,t.updateQueue=null,Ar.current=sf,e=n(r,o)}while(_n)}if(Ar.current=Yr,t=V!==null&&V.next!==null,_t=0,K=V=O=null,qr=!1,t)throw Error(v(300));return e}function ws(){var e=Un!==0;return Un=0,e}function Ie(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return K===null?O.memoizedState=K=e:K=K.next=e,K}function Ae(){if(V===null){var e=O.alternate;e=e!==null?e.memoizedState:null}else e=V.next;var t=K===null?O.memoizedState:K.next;if(t!==null)K=t,V=e;else{if(e===null)throw Error(v(310));V=e,e={memoizedState:V.memoizedState,baseState:V.baseState,baseQueue:V.baseQueue,queue:V.queue,next:null},K===null?O.memoizedState=K=e:K=K.next=e}return K}function $n(e,t){return typeof t=="function"?t(e):t}function Wo(e){var t=Ae(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var r=V,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=s=null,a=null,c=i;do{var y=c.lane;if((_t&y)===y)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:y,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=m,s=r):a=a.next=m,O.lanes|=y,zt|=y}c=c.next}while(c!==null&&c!==i);a===null?s=r:a.next=l,Re(r,t.memoizedState)||(ce=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,O.lanes|=i,zt|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function bo(e){var t=Ae(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);Re(i,t.memoizedState)||(ce=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function au(){}function uu(e,t){var n=O,r=Ae(),o=t(),i=!Re(r.memoizedState,o);if(i&&(r.memoizedState=o,ce=!0),r=r.queue,ks(fu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||K!==null&&K.memoizedState.tag&1){if(n.flags|=2048,Vn(9,du.bind(null,n,r,o,t),void 0,null),X===null)throw Error(v(349));_t&30||cu(n,t,o)}return o}function cu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=O.updateQueue,t===null?(t={lastEffect:null,stores:null},O.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function du(e,t,n,r){t.value=n,t.getSnapshot=r,pu(t)&&hu(e)}function fu(e,t,n){return n(function(){pu(t)&&hu(e)})}function pu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Re(e,n)}catch{return!0}}function hu(e){var t=qe(e,1);t!==null&&Te(t,e,1,-1)}function Cl(e){var t=Ie();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$n,lastRenderedState:e},t.queue=e,e=e.dispatch=nf.bind(null,O,e),[t.memoizedState,e]}function Vn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=O.updateQueue,t===null?(t={lastEffect:null,stores:null},O.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function mu(){return Ae().memoizedState}function Pr(e,t,n,r){var o=Ie();O.flags|=e,o.memoizedState=Vn(1|t,n,void 0,r===void 0?null:r)}function ao(e,t,n,r){var o=Ae();r=r===void 0?null:r;var i=void 0;if(V!==null){var s=V.memoizedState;if(i=s.destroy,r!==null&&gs(r,s.deps)){o.memoizedState=Vn(t,n,i,r);return}}O.flags|=e,o.memoizedState=Vn(1|t,n,i,r)}function Sl(e,t){return Pr(8390656,8,e,t)}function ks(e,t){return ao(2048,8,e,t)}function yu(e,t){return ao(4,2,e,t)}function gu(e,t){return ao(4,4,e,t)}function vu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wu(e,t,n){return n=n!=null?n.concat([e]):null,ao(4,4,vu.bind(null,t,e),n)}function Cs(){}function ku(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cu(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Su(e,t,n){return _t&21?(Re(n,t)||(n=Na(),O.lanes|=n,zt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=n)}function ef(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var r=Oo.transition;Oo.transition={};try{e(!1),t()}finally{R=n,Oo.transition=r}}function Eu(){return Ae().memoizedState}function tf(e,t,n){var r=ct(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},xu(e))Au(t,n);else if(n=iu(e,t,n,r),n!==null){var o=se();Te(n,e,r,o),Pu(n,t,r)}}function nf(e,t,n){var r=ct(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(xu(e))Au(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,l=i(s,n);if(o.hasEagerState=!0,o.eagerState=l,Re(l,s)){var a=t.interleaved;a===null?(o.next=o,fs(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=iu(e,t,o,r),n!==null&&(o=se(),Te(n,e,r,o),Pu(n,t,r))}}function xu(e){var t=e.alternate;return e===O||t!==null&&t===O}function Au(e,t){_n=qr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zi(e,n)}}var Yr={readContext:xe,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},rf={readContext:xe,useCallback:function(e,t){return Ie().memoizedState=[e,t===void 0?null:t],e},useContext:xe,useEffect:Sl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Pr(4194308,4,vu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Pr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Pr(4,2,e,t)},useMemo:function(e,t){var n=Ie();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ie();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=tf.bind(null,O,e),[r.memoizedState,e]},useRef:function(e){var t=Ie();return e={current:e},t.memoizedState=e},useState:Cl,useDebugValue:Cs,useDeferredValue:function(e){return Ie().memoizedState=e},useTransition:function(){var e=Cl(!1),t=e[0];return e=ef.bind(null,e[1]),Ie().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=O,o=Ie();if(Q){if(n===void 0)throw Error(v(407));n=n()}else{if(n=t(),X===null)throw Error(v(349));_t&30||cu(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Sl(fu.bind(null,r,i,e),[e]),r.flags|=2048,Vn(9,du.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ie(),t=X.identifierPrefix;if(Q){var n=Fe,r=Be;n=(r&~(1<<32-De(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Un++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Jd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},of={readContext:xe,useCallback:ku,useContext:xe,useEffect:ks,useImperativeHandle:wu,useInsertionEffect:yu,useLayoutEffect:gu,useMemo:Cu,useReducer:Wo,useRef:mu,useState:function(){return Wo($n)},useDebugValue:Cs,useDeferredValue:function(e){var t=Ae();return Su(t,V.memoizedState,e)},useTransition:function(){var e=Wo($n)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:au,useSyncExternalStore:uu,useId:Eu,unstable_isNewReconciler:!1},sf={readContext:xe,useCallback:ku,useContext:xe,useEffect:ks,useImperativeHandle:wu,useInsertionEffect:yu,useLayoutEffect:gu,useMemo:Cu,useReducer:bo,useRef:mu,useState:function(){return bo($n)},useDebugValue:Cs,useDeferredValue:function(e){var t=Ae();return V===null?t.memoizedState=e:Su(t,V.memoizedState,e)},useTransition:function(){var e=bo($n)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:au,useSyncExternalStore:uu,useId:Eu,unstable_isNewReconciler:!1};function ze(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function xi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var uo={isMounted:function(e){return(e=e._reactInternals)?Dt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=se(),o=ct(e),i=Ue(r,o);i.payload=t,n!=null&&(i.callback=n),t=at(e,i,o),t!==null&&(Te(t,e,o,r),xr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=se(),o=ct(e),i=Ue(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=at(e,i,o),t!==null&&(Te(t,e,o,r),xr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=se(),r=ct(e),o=Ue(n,r);o.tag=2,t!=null&&(o.callback=t),t=at(e,o,r),t!==null&&(Te(t,e,r,n),xr(t,e,r))}};function El(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!Mn(n,r)||!Mn(o,i):!0}function Nu(e,t,n){var r=!1,o=pt,i=t.contextType;return typeof i=="object"&&i!==null?i=xe(i):(o=fe(t)?Pt:oe.current,r=t.contextTypes,i=(r=r!=null)?Jt(e,o):pt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=uo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function xl(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&uo.enqueueReplaceState(t,t.state,null)}function Ai(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},ps(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=xe(i):(i=fe(t)?Pt:oe.current,o.context=Jt(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(xi(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&uo.enqueueReplaceState(o,o.state,null),$r(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function rn(e,t){try{var n="",r=t;do n+=Tc(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Bo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Pi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var lf=typeof WeakMap=="function"?WeakMap:Map;function _u(e,t,n){n=Ue(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Xr||(Xr=!0,Ii=r),Pi(e,t)},n}function zu(e,t,n){n=Ue(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Pi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Pi(e,t),typeof r!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Al(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new lf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Cf.bind(null,e,t,n),t.then(e,e))}function Pl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Nl(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ue(-1,1),t.tag=2,at(n,t,1))),n.lanes|=1),e)}var af=Ke.ReactCurrentOwner,ce=!1;function ie(e,t,n,r){t.child=e===null?ou(t,null,n,r):tn(t,e.child,n,r)}function _l(e,t,n,r,o){n=n.render;var i=t.ref;return Kt(t,o),r=vs(e,t,n,r,i,o),n=ws(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ye(e,t,o)):(Q&&n&&ss(t),t.flags|=1,ie(e,t,r,o),t.child)}function zl(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!zs(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Hu(e,t,i,r,o)):(e=Hr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:Mn,n(s,r)&&e.ref===t.ref)return Ye(e,t,o)}return t.flags|=1,e=dt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Hu(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Mn(i,r)&&e.ref===t.ref)if(ce=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(ce=!0);else return t.lanes=e.lanes,Ye(e,t,o)}return Ni(e,t,n,r,o)}function ju(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(Ut,he),he|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(Ut,he),he|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,G(Ut,he),he|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,G(Ut,he),he|=r;return ie(e,t,o,n),t.child}function Du(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ni(e,t,n,r,o){var i=fe(n)?Pt:oe.current;return i=Jt(t,i),Kt(t,o),n=vs(e,t,n,r,i,o),r=ws(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ye(e,t,o)):(Q&&r&&ss(t),t.flags|=1,ie(e,t,n,o),t.child)}function Hl(e,t,n,r,o){if(fe(n)){var i=!0;Wr(t)}else i=!1;if(Kt(t,o),t.stateNode===null)Nr(e,t),Nu(t,n,r),Ai(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var a=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=xe(c):(c=fe(n)?Pt:oe.current,c=Jt(t,c));var y=n.getDerivedStateFromProps,m=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==c)&&xl(t,s,r,c),Je=!1;var p=t.memoizedState;s.state=p,$r(t,r,s,o),a=t.memoizedState,l!==r||p!==a||de.current||Je?(typeof y=="function"&&(xi(t,n,y,r),a=t.memoizedState),(l=Je||El(t,n,l,r,p,a,c))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=c,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,su(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:ze(t.type,l),s.props=c,m=t.pendingProps,p=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=xe(a):(a=fe(n)?Pt:oe.current,a=Jt(t,a));var w=n.getDerivedStateFromProps;(y=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==m||p!==a)&&xl(t,s,r,a),Je=!1,p=t.memoizedState,s.state=p,$r(t,r,s,o);var k=t.memoizedState;l!==m||p!==k||de.current||Je?(typeof w=="function"&&(xi(t,n,w,r),k=t.memoizedState),(c=Je||El(t,n,c,r,p,k,a)||!1)?(y||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,k,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,k,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),s.props=r,s.state=k,s.context=a,r=c):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return _i(e,t,n,r,i,o)}function _i(e,t,n,r,o,i){Du(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&ml(t,n,!1),Ye(e,t,i);r=t.stateNode,af.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=tn(t,e.child,null,i),t.child=tn(t,null,l,i)):ie(e,t,l,i),t.memoizedState=r.state,o&&ml(t,n,!0),t.child}function Tu(e){var t=e.stateNode;t.pendingContext?hl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&hl(e,t.context,!1),hs(e,t.containerInfo)}function jl(e,t,n,r,o){return en(),as(o),t.flags|=256,ie(e,t,n,r),t.child}var zi={dehydrated:null,treeContext:null,retryLane:0};function Hi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ru(e,t,n){var r=t.pendingProps,o=M.current,i=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),G(M,o&1),e===null)return Si(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=po(s,r,0,null),e=At(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Hi(n),t.memoizedState=zi,e):Ss(t,s));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return uf(e,t,s,r,l,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,l=o.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=dt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=dt(l,i):(i=At(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Hi(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=zi,r}return i=e.child,e=i.sibling,r=dt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ss(e,t){return t=po({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mr(e,t,n,r){return r!==null&&as(r),tn(t,e.child,null,n),e=Ss(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function uf(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=Bo(Error(v(422))),mr(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=po({mode:"visible",children:r.children},o,0,null),i=At(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&tn(t,e.child,null,s),t.child.memoizedState=Hi(s),t.memoizedState=zi,i);if(!(t.mode&1))return mr(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(v(419)),r=Bo(i,r,void 0),mr(e,t,s,r)}if(l=(s&e.childLanes)!==0,ce||l){if(r=X,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,qe(e,o),Te(r,e,o,-1))}return _s(),r=Bo(Error(v(421))),mr(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Sf.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,me=lt(o.nextSibling),ye=t,Q=!0,je=null,e!==null&&(ke[Ce++]=Be,ke[Ce++]=Fe,ke[Ce++]=Nt,Be=e.id,Fe=e.overflow,Nt=t),t=Ss(t,r.children),t.flags|=4096,t)}function Dl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ei(e.return,t,n)}function Fo(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Gu(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ie(e,t,r.children,n),r=M.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dl(e,n,t);else if(e.tag===19)Dl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(G(M,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Vr(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Fo(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Vr(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Fo(t,!0,n,null,i);break;case"together":Fo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Nr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ye(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(v(153));if(t.child!==null){for(e=t.child,n=dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cf(e,t,n){switch(t.tag){case 3:Tu(t),en();break;case 5:lu(t);break;case 1:fe(t.type)&&Wr(t);break;case 4:hs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;G(Fr,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(G(M,M.current&1),t.flags|=128,null):n&t.child.childLanes?Ru(e,t,n):(G(M,M.current&1),e=Ye(e,t,n),e!==null?e.sibling:null);G(M,M.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Gu(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),G(M,M.current),r)break;return null;case 22:case 23:return t.lanes=0,ju(e,t,n)}return Ye(e,t,n)}var Iu,ji,Lu,Qu;Iu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ji=function(){};Lu=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Et(Me.current);var i=null;switch(n){case"input":o=Jo(e,o),r=Jo(e,r),i=[];break;case"select":o=W({},o,{value:void 0}),r=W({},r,{value:void 0}),i=[];break;case"textarea":o=ni(e,o),r=ni(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Mr)}oi(n,r);var s;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var l=o[c];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Dn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var a=r[c];if(l=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(i||(i=[]),i.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Dn.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&I("scroll",e),i||l===a||(i=[])):(i=i||[]).push(c,a))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Qu=function(e,t,n,r){n!==r&&(t.flags|=4)};function gn(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function df(e,t,n){var r=t.pendingProps;switch(ls(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(t),null;case 1:return fe(t.type)&&Or(),ne(t),null;case 3:return r=t.stateNode,nn(),L(de),L(oe),ys(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,je!==null&&(Mi(je),je=null))),ji(e,t),ne(t),null;case 5:ms(t);var o=Et(Fn.current);if(n=t.type,e!==null&&t.stateNode!=null)Lu(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(v(166));return ne(t),null}if(e=Et(Me.current),pr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Le]=t,r[bn]=i,e=(t.mode&1)!==0,n){case"dialog":I("cancel",r),I("close",r);break;case"iframe":case"object":case"embed":I("load",r);break;case"video":case"audio":for(o=0;o<Sn.length;o++)I(Sn[o],r);break;case"source":I("error",r);break;case"img":case"image":case"link":I("error",r),I("load",r);break;case"details":I("toggle",r);break;case"input":Ws(r,i),I("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},I("invalid",r);break;case"textarea":Bs(r,i),I("invalid",r)}oi(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var l=i[s];s==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&fr(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&fr(r.textContent,l,e),o=["children",""+l]):Dn.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&I("scroll",r)}switch(n){case"input":or(r),bs(r,i,!0);break;case"textarea":or(r),Fs(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Mr)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Le]=t,e[bn]=r,Iu(e,t,!1,!1),t.stateNode=e;e:{switch(s=ii(n,r),n){case"dialog":I("cancel",e),I("close",e),o=r;break;case"iframe":case"object":case"embed":I("load",e),o=r;break;case"video":case"audio":for(o=0;o<Sn.length;o++)I(Sn[o],e);o=r;break;case"source":I("error",e),o=r;break;case"img":case"image":case"link":I("error",e),I("load",e),o=r;break;case"details":I("toggle",e),o=r;break;case"input":Ws(e,r),o=Jo(e,r),I("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=W({},r,{value:void 0}),I("invalid",e);break;case"textarea":Bs(e,r),o=ni(e,r),I("invalid",e);break;default:o=r}oi(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="style"?ma(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&pa(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Tn(e,a):typeof a=="number"&&Tn(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Dn.hasOwnProperty(i)?a!=null&&i==="onScroll"&&I("scroll",e):a!=null&&$i(e,i,a,s))}switch(n){case"input":or(e),bs(e,r,!1);break;case"textarea":or(e),Fs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ft(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?$t(e,!!r.multiple,i,!1):r.defaultValue!=null&&$t(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Mr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ne(t),null;case 6:if(e&&t.stateNode!=null)Qu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(v(166));if(n=Et(Fn.current),Et(Me.current),pr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Le]=t,(i=r.nodeValue!==n)&&(e=ye,e!==null))switch(e.tag){case 3:fr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Le]=t,t.stateNode=r}return ne(t),null;case 13:if(L(M),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&me!==null&&t.mode&1&&!(t.flags&128))nu(),en(),t.flags|=98560,i=!1;else if(i=pr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(v(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(v(317));i[Le]=t}else en(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ne(t),i=!1}else je!==null&&(Mi(je),je=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||M.current&1?q===0&&(q=3):_s())),t.updateQueue!==null&&(t.flags|=4),ne(t),null);case 4:return nn(),ji(e,t),e===null&&On(t.stateNode.containerInfo),ne(t),null;case 10:return ds(t.type._context),ne(t),null;case 17:return fe(t.type)&&Or(),ne(t),null;case 19:if(L(M),i=t.memoizedState,i===null)return ne(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)gn(i,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Vr(e),s!==null){for(t.flags|=128,gn(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(M,M.current&1|2),t.child}e=e.sibling}i.tail!==null&&U()>on&&(t.flags|=128,r=!0,gn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Vr(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),gn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Q)return ne(t),null}else 2*U()-i.renderingStartTime>on&&n!==1073741824&&(t.flags|=128,r=!0,gn(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=U(),t.sibling=null,n=M.current,G(M,r?n&1|2:n&1),t):(ne(t),null);case 22:case 23:return Ns(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?he&1073741824&&(ne(t),t.subtreeFlags&6&&(t.flags|=8192)):ne(t),null;case 24:return null;case 25:return null}throw Error(v(156,t.tag))}function ff(e,t){switch(ls(t),t.tag){case 1:return fe(t.type)&&Or(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nn(),L(de),L(oe),ys(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ms(t),null;case 13:if(L(M),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(v(340));en()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(M),null;case 4:return nn(),null;case 10:return ds(t.type._context),null;case 22:case 23:return Ns(),null;case 24:return null;default:return null}}var yr=!1,re=!1,pf=typeof WeakSet=="function"?WeakSet:Set,E=null;function Ft(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){b(e,t,r)}else n.current=null}function Di(e,t,n){try{n()}catch(r){b(e,t,r)}}var Tl=!1;function hf(e,t){if(mi=Ir,e=Ba(),is(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,l=-1,a=-1,c=0,y=0,m=e,p=null;t:for(;;){for(var w;m!==n||o!==0&&m.nodeType!==3||(l=s+o),m!==i||r!==0&&m.nodeType!==3||(a=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(w=m.firstChild)!==null;)p=m,m=w;for(;;){if(m===e)break t;if(p===n&&++c===o&&(l=s),p===i&&++y===r&&(a=s),(w=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=w}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(yi={focusedElem:e,selectionRange:n},Ir=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var h=k.memoizedProps,_=k.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?h:ze(t.type,h),_);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(g){b(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return k=Tl,Tl=!1,k}function zn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Di(t,n,i)}o=o.next}while(o!==r)}}function co(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ti(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Mu(e){var t=e.alternate;t!==null&&(e.alternate=null,Mu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Le],delete t[bn],delete t[wi],delete t[Yd],delete t[Kd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ou(e){return e.tag===5||e.tag===3||e.tag===4}function Rl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ou(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ri(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Mr));else if(r!==4&&(e=e.child,e!==null))for(Ri(e,t,n),e=e.sibling;e!==null;)Ri(e,t,n),e=e.sibling}function Gi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Gi(e,t,n),e=e.sibling;e!==null;)Gi(e,t,n),e=e.sibling}var Z=null,He=!1;function Xe(e,t,n){for(n=n.child;n!==null;)Wu(e,t,n),n=n.sibling}function Wu(e,t,n){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(no,n)}catch{}switch(n.tag){case 5:re||Ft(n,t);case 6:var r=Z,o=He;Z=null,Xe(e,t,n),Z=r,He=o,Z!==null&&(He?(e=Z,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Z.removeChild(n.stateNode));break;case 18:Z!==null&&(He?(e=Z,n=n.stateNode,e.nodeType===8?Lo(e.parentNode,n):e.nodeType===1&&Lo(e,n),Ln(e)):Lo(Z,n.stateNode));break;case 4:r=Z,o=He,Z=n.stateNode.containerInfo,He=!0,Xe(e,t,n),Z=r,He=o;break;case 0:case 11:case 14:case 15:if(!re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Di(n,t,s),o=o.next}while(o!==r)}Xe(e,t,n);break;case 1:if(!re&&(Ft(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){b(n,t,l)}Xe(e,t,n);break;case 21:Xe(e,t,n);break;case 22:n.mode&1?(re=(r=re)||n.memoizedState!==null,Xe(e,t,n),re=r):Xe(e,t,n);break;default:Xe(e,t,n)}}function Gl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new pf),t.forEach(function(r){var o=Ef.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ne(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:Z=l.stateNode,He=!1;break e;case 3:Z=l.stateNode.containerInfo,He=!0;break e;case 4:Z=l.stateNode.containerInfo,He=!0;break e}l=l.return}if(Z===null)throw Error(v(160));Wu(i,s,o),Z=null,He=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(c){b(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)bu(t,e),t=t.sibling}function bu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ne(t,e),Ge(e),r&4){try{zn(3,e,e.return),co(3,e)}catch(h){b(e,e.return,h)}try{zn(5,e,e.return)}catch(h){b(e,e.return,h)}}break;case 1:Ne(t,e),Ge(e),r&512&&n!==null&&Ft(n,n.return);break;case 5:if(Ne(t,e),Ge(e),r&512&&n!==null&&Ft(n,n.return),e.flags&32){var o=e.stateNode;try{Tn(o,"")}catch(h){b(e,e.return,h)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&ca(o,i),ii(l,s);var c=ii(l,i);for(s=0;s<a.length;s+=2){var y=a[s],m=a[s+1];y==="style"?ma(o,m):y==="dangerouslySetInnerHTML"?pa(o,m):y==="children"?Tn(o,m):$i(o,y,m,c)}switch(l){case"input":ei(o,i);break;case"textarea":da(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?$t(o,!!i.multiple,w,!1):p!==!!i.multiple&&(i.defaultValue!=null?$t(o,!!i.multiple,i.defaultValue,!0):$t(o,!!i.multiple,i.multiple?[]:"",!1))}o[bn]=i}catch(h){b(e,e.return,h)}}break;case 6:if(Ne(t,e),Ge(e),r&4){if(e.stateNode===null)throw Error(v(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(h){b(e,e.return,h)}}break;case 3:if(Ne(t,e),Ge(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ln(t.containerInfo)}catch(h){b(e,e.return,h)}break;case 4:Ne(t,e),Ge(e);break;case 13:Ne(t,e),Ge(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(As=U())),r&4&&Gl(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(re=(c=re)||y,Ne(t,e),re=c):Ne(t,e),Ge(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!y&&e.mode&1)for(E=e,y=e.child;y!==null;){for(m=E=y;E!==null;){switch(p=E,w=p.child,p.tag){case 0:case 11:case 14:case 15:zn(4,p,p.return);break;case 1:Ft(p,p.return);var k=p.stateNode;if(typeof k.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(h){b(r,n,h)}}break;case 5:Ft(p,p.return);break;case 22:if(p.memoizedState!==null){Ll(m);continue}}w!==null?(w.return=p,E=w):Ll(m)}y=y.sibling}e:for(y=null,m=e;;){if(m.tag===5){if(y===null){y=m;try{o=m.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,a=m.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=ha("display",s))}catch(h){b(e,e.return,h)}}}else if(m.tag===6){if(y===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(h){b(e,e.return,h)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;y===m&&(y=null),m=m.return}y===m&&(y=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ne(t,e),Ge(e),r&4&&Gl(e);break;case 21:break;default:Ne(t,e),Ge(e)}}function Ge(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ou(n)){var r=n;break e}n=n.return}throw Error(v(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Tn(o,""),r.flags&=-33);var i=Rl(e);Gi(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,l=Rl(e);Ri(e,l,s);break;default:throw Error(v(161))}}catch(a){b(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function mf(e,t,n){E=e,Bu(e)}function Bu(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var o=E,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||yr;if(!s){var l=o.alternate,a=l!==null&&l.memoizedState!==null||re;l=yr;var c=re;if(yr=s,(re=a)&&!c)for(E=o;E!==null;)s=E,a=s.child,s.tag===22&&s.memoizedState!==null?Ql(o):a!==null?(a.return=s,E=a):Ql(o);for(;i!==null;)E=i,Bu(i),i=i.sibling;E=o,yr=l,re=c}Il(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,E=i):Il(e)}}function Il(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:re||co(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!re)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ze(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&kl(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}kl(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var y=c.memoizedState;if(y!==null){var m=y.dehydrated;m!==null&&Ln(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}re||t.flags&512&&Ti(t)}catch(p){b(t,t.return,p)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function Ll(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function Ql(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{co(4,t)}catch(a){b(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){b(t,o,a)}}var i=t.return;try{Ti(t)}catch(a){b(t,i,a)}break;case 5:var s=t.return;try{Ti(t)}catch(a){b(t,s,a)}}}catch(a){b(t,t.return,a)}if(t===e){E=null;break}var l=t.sibling;if(l!==null){l.return=t.return,E=l;break}E=t.return}}var yf=Math.ceil,Kr=Ke.ReactCurrentDispatcher,Es=Ke.ReactCurrentOwner,Ee=Ke.ReactCurrentBatchConfig,T=0,X=null,$=null,J=0,he=0,Ut=mt(0),q=0,qn=null,zt=0,fo=0,xs=0,Hn=null,ue=null,As=0,on=1/0,We=null,Xr=!1,Ii=null,ut=null,gr=!1,rt=null,Zr=0,jn=0,Li=null,_r=-1,zr=0;function se(){return T&6?U():_r!==-1?_r:_r=U()}function ct(e){return e.mode&1?T&2&&J!==0?J&-J:Zd.transition!==null?(zr===0&&(zr=Na()),zr):(e=R,e!==0||(e=window.event,e=e===void 0?16:Ra(e.type)),e):1}function Te(e,t,n,r){if(50<jn)throw jn=0,Li=null,Error(v(185));Kn(e,n,r),(!(T&2)||e!==X)&&(e===X&&(!(T&2)&&(fo|=n),q===4&&tt(e,J)),pe(e,r),n===1&&T===0&&!(t.mode&1)&&(on=U()+500,lo&&yt()))}function pe(e,t){var n=e.callbackNode;Zc(e,t);var r=Gr(e,e===X?J:0);if(r===0)n!==null&&Vs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Vs(n),t===1)e.tag===0?Xd(Ml.bind(null,e)):Ja(Ml.bind(null,e)),Vd(function(){!(T&6)&&yt()}),n=null;else{switch(_a(r)){case 1:n=Xi;break;case 4:n=Aa;break;case 16:n=Rr;break;case 536870912:n=Pa;break;default:n=Rr}n=Xu(n,Fu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Fu(e,t){if(_r=-1,zr=0,T&6)throw Error(v(327));var n=e.callbackNode;if(Xt()&&e.callbackNode!==n)return null;var r=Gr(e,e===X?J:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Jr(e,r);else{t=r;var o=T;T|=2;var i=$u();(X!==e||J!==t)&&(We=null,on=U()+500,xt(e,t));do try{wf();break}catch(l){Uu(e,l)}while(!0);cs(),Kr.current=i,T=o,$!==null?t=0:(X=null,J=0,t=q)}if(t!==0){if(t===2&&(o=ci(e),o!==0&&(r=o,t=Qi(e,o))),t===1)throw n=qn,xt(e,0),tt(e,r),pe(e,U()),n;if(t===6)tt(e,r);else{if(o=e.current.alternate,!(r&30)&&!gf(o)&&(t=Jr(e,r),t===2&&(i=ci(e),i!==0&&(r=i,t=Qi(e,i))),t===1))throw n=qn,xt(e,0),tt(e,r),pe(e,U()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(v(345));case 2:kt(e,ue,We);break;case 3:if(tt(e,r),(r&130023424)===r&&(t=As+500-U(),10<t)){if(Gr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=vi(kt.bind(null,e,ue,We),t);break}kt(e,ue,We);break;case 4:if(tt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-De(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=U()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yf(r/1960))-r,10<r){e.timeoutHandle=vi(kt.bind(null,e,ue,We),r);break}kt(e,ue,We);break;case 5:kt(e,ue,We);break;default:throw Error(v(329))}}}return pe(e,U()),e.callbackNode===n?Fu.bind(null,e):null}function Qi(e,t){var n=Hn;return e.current.memoizedState.isDehydrated&&(xt(e,t).flags|=256),e=Jr(e,t),e!==2&&(t=ue,ue=n,t!==null&&Mi(t)),e}function Mi(e){ue===null?ue=e:ue.push.apply(ue,e)}function gf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Re(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tt(e,t){for(t&=~xs,t&=~fo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-De(t),r=1<<n;e[n]=-1,t&=~r}}function Ml(e){if(T&6)throw Error(v(327));Xt();var t=Gr(e,0);if(!(t&1))return pe(e,U()),null;var n=Jr(e,t);if(e.tag!==0&&n===2){var r=ci(e);r!==0&&(t=r,n=Qi(e,r))}if(n===1)throw n=qn,xt(e,0),tt(e,t),pe(e,U()),n;if(n===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kt(e,ue,We),pe(e,U()),null}function Ps(e,t){var n=T;T|=1;try{return e(t)}finally{T=n,T===0&&(on=U()+500,lo&&yt())}}function Ht(e){rt!==null&&rt.tag===0&&!(T&6)&&Xt();var t=T;T|=1;var n=Ee.transition,r=R;try{if(Ee.transition=null,R=1,e)return e()}finally{R=r,Ee.transition=n,T=t,!(T&6)&&yt()}}function Ns(){he=Ut.current,L(Ut)}function xt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$d(n)),$!==null)for(n=$.return;n!==null;){var r=n;switch(ls(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Or();break;case 3:nn(),L(de),L(oe),ys();break;case 5:ms(r);break;case 4:nn();break;case 13:L(M);break;case 19:L(M);break;case 10:ds(r.type._context);break;case 22:case 23:Ns()}n=n.return}if(X=e,$=e=dt(e.current,null),J=he=t,q=0,qn=null,xs=fo=zt=0,ue=Hn=null,St!==null){for(t=0;t<St.length;t++)if(n=St[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}St=null}return e}function Uu(e,t){do{var n=$;try{if(cs(),Ar.current=Yr,qr){for(var r=O.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}qr=!1}if(_t=0,K=V=O=null,_n=!1,Un=0,Es.current=null,n===null||n.return===null){q=1,qn=t,$=null;break}e:{var i=e,s=n.return,l=n,a=t;if(t=J,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,y=l,m=y.tag;if(!(y.mode&1)&&(m===0||m===11||m===15)){var p=y.alternate;p?(y.updateQueue=p.updateQueue,y.memoizedState=p.memoizedState,y.lanes=p.lanes):(y.updateQueue=null,y.memoizedState=null)}var w=Pl(s);if(w!==null){w.flags&=-257,Nl(w,s,l,i,t),w.mode&1&&Al(i,c,t),t=w,a=c;var k=t.updateQueue;if(k===null){var h=new Set;h.add(a),t.updateQueue=h}else k.add(a);break e}else{if(!(t&1)){Al(i,c,t),_s();break e}a=Error(v(426))}}else if(Q&&l.mode&1){var _=Pl(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Nl(_,s,l,i,t),as(rn(a,l));break e}}i=a=rn(a,l),q!==4&&(q=2),Hn===null?Hn=[i]:Hn.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=_u(i,a,t);wl(i,d);break e;case 1:l=a;var u=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ut===null||!ut.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var g=zu(i,l,t);wl(i,g);break e}}i=i.return}while(i!==null)}qu(n)}catch(S){t=S,$===n&&n!==null&&($=n=n.return);continue}break}while(!0)}function $u(){var e=Kr.current;return Kr.current=Yr,e===null?Yr:e}function _s(){(q===0||q===3||q===2)&&(q=4),X===null||!(zt&268435455)&&!(fo&268435455)||tt(X,J)}function Jr(e,t){var n=T;T|=2;var r=$u();(X!==e||J!==t)&&(We=null,xt(e,t));do try{vf();break}catch(o){Uu(e,o)}while(!0);if(cs(),T=n,Kr.current=r,$!==null)throw Error(v(261));return X=null,J=0,q}function vf(){for(;$!==null;)Vu($)}function wf(){for(;$!==null&&!Bc();)Vu($)}function Vu(e){var t=Ku(e.alternate,e,he);e.memoizedProps=e.pendingProps,t===null?qu(e):$=t,Es.current=null}function qu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ff(n,t),n!==null){n.flags&=32767,$=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,$=null;return}}else if(n=df(n,t,he),n!==null){$=n;return}if(t=t.sibling,t!==null){$=t;return}$=t=e}while(t!==null);q===0&&(q=5)}function kt(e,t,n){var r=R,o=Ee.transition;try{Ee.transition=null,R=1,kf(e,t,n,r)}finally{Ee.transition=o,R=r}return null}function kf(e,t,n,r){do Xt();while(rt!==null);if(T&6)throw Error(v(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Jc(e,i),e===X&&($=X=null,J=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gr||(gr=!0,Xu(Rr,function(){return Xt(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ee.transition,Ee.transition=null;var s=R;R=1;var l=T;T|=4,Es.current=null,hf(e,n),bu(n,e),Md(yi),Ir=!!mi,yi=mi=null,e.current=n,mf(n),Fc(),T=l,R=s,Ee.transition=i}else e.current=n;if(gr&&(gr=!1,rt=e,Zr=o),i=e.pendingLanes,i===0&&(ut=null),Vc(n.stateNode),pe(e,U()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Xr)throw Xr=!1,e=Ii,Ii=null,e;return Zr&1&&e.tag!==0&&Xt(),i=e.pendingLanes,i&1?e===Li?jn++:(jn=0,Li=e):jn=0,yt(),null}function Xt(){if(rt!==null){var e=_a(Zr),t=Ee.transition,n=R;try{if(Ee.transition=null,R=16>e?16:e,rt===null)var r=!1;else{if(e=rt,rt=null,Zr=0,T&6)throw Error(v(331));var o=T;for(T|=4,E=e.current;E!==null;){var i=E,s=i.child;if(E.flags&16){var l=i.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for(E=c;E!==null;){var y=E;switch(y.tag){case 0:case 11:case 15:zn(8,y,i)}var m=y.child;if(m!==null)m.return=y,E=m;else for(;E!==null;){y=E;var p=y.sibling,w=y.return;if(Mu(y),y===c){E=null;break}if(p!==null){p.return=w,E=p;break}E=w}}}var k=i.alternate;if(k!==null){var h=k.child;if(h!==null){k.child=null;do{var _=h.sibling;h.sibling=null,h=_}while(h!==null)}}E=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,E=s;else e:for(;E!==null;){if(i=E,i.flags&2048)switch(i.tag){case 0:case 11:case 15:zn(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,E=d;break e}E=i.return}}var u=e.current;for(E=u;E!==null;){s=E;var f=s.child;if(s.subtreeFlags&2064&&f!==null)f.return=s,E=f;else e:for(s=u;E!==null;){if(l=E,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:co(9,l)}}catch(S){b(l,l.return,S)}if(l===s){E=null;break e}var g=l.sibling;if(g!==null){g.return=l.return,E=g;break e}E=l.return}}if(T=o,yt(),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(no,e)}catch{}r=!0}return r}finally{R=n,Ee.transition=t}}return!1}function Ol(e,t,n){t=rn(n,t),t=_u(e,t,1),e=at(e,t,1),t=se(),e!==null&&(Kn(e,1,t),pe(e,t))}function b(e,t,n){if(e.tag===3)Ol(e,e,n);else for(;t!==null;){if(t.tag===3){Ol(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ut===null||!ut.has(r))){e=rn(n,e),e=zu(t,e,1),t=at(t,e,1),e=se(),t!==null&&(Kn(t,1,e),pe(t,e));break}}t=t.return}}function Cf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=se(),e.pingedLanes|=e.suspendedLanes&n,X===e&&(J&n)===n&&(q===4||q===3&&(J&130023424)===J&&500>U()-As?xt(e,0):xs|=n),pe(e,t)}function Yu(e,t){t===0&&(e.mode&1?(t=lr,lr<<=1,!(lr&130023424)&&(lr=4194304)):t=1);var n=se();e=qe(e,t),e!==null&&(Kn(e,t,n),pe(e,n))}function Sf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Yu(e,n)}function Ef(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(v(314))}r!==null&&r.delete(t),Yu(e,n)}var Ku;Ku=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||de.current)ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ce=!1,cf(e,t,n);ce=!!(e.flags&131072)}else ce=!1,Q&&t.flags&1048576&&eu(t,Br,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Nr(e,t),e=t.pendingProps;var o=Jt(t,oe.current);Kt(t,n),o=vs(null,t,r,e,o,n);var i=ws();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,fe(r)?(i=!0,Wr(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ps(t),o.updater=uo,t.stateNode=o,o._reactInternals=t,Ai(t,r,e,n),t=_i(null,t,r,!0,i,n)):(t.tag=0,Q&&i&&ss(t),ie(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Nr(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Af(r),e=ze(r,e),o){case 0:t=Ni(null,t,r,e,n);break e;case 1:t=Hl(null,t,r,e,n);break e;case 11:t=_l(null,t,r,e,n);break e;case 14:t=zl(null,t,r,ze(r.type,e),n);break e}throw Error(v(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ze(r,o),Ni(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ze(r,o),Hl(e,t,r,o,n);case 3:e:{if(Tu(t),e===null)throw Error(v(387));r=t.pendingProps,i=t.memoizedState,o=i.element,su(e,t),$r(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=rn(Error(v(423)),t),t=jl(e,t,r,n,o);break e}else if(r!==o){o=rn(Error(v(424)),t),t=jl(e,t,r,n,o);break e}else for(me=lt(t.stateNode.containerInfo.firstChild),ye=t,Q=!0,je=null,n=ou(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(en(),r===o){t=Ye(e,t,n);break e}ie(e,t,r,n)}t=t.child}return t;case 5:return lu(t),e===null&&Si(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,gi(r,o)?s=null:i!==null&&gi(r,i)&&(t.flags|=32),Du(e,t),ie(e,t,s,n),t.child;case 6:return e===null&&Si(t),null;case 13:return Ru(e,t,n);case 4:return hs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tn(t,null,r,n):ie(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ze(r,o),_l(e,t,r,o,n);case 7:return ie(e,t,t.pendingProps,n),t.child;case 8:return ie(e,t,t.pendingProps.children,n),t.child;case 12:return ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,G(Fr,r._currentValue),r._currentValue=s,i!==null)if(Re(i.value,s)){if(i.children===o.children&&!de.current){t=Ye(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){s=i.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Ue(-1,n&-n),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var y=c.pending;y===null?a.next=a:(a.next=y.next,y.next=a),c.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Ei(i.return,n,t),l.lanes|=n;break}a=a.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(v(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ei(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}ie(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Kt(t,n),o=xe(o),r=r(o),t.flags|=1,ie(e,t,r,n),t.child;case 14:return r=t.type,o=ze(r,t.pendingProps),o=ze(r.type,o),zl(e,t,r,o,n);case 15:return Hu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ze(r,o),Nr(e,t),t.tag=1,fe(r)?(e=!0,Wr(t)):e=!1,Kt(t,n),Nu(t,r,o),Ai(t,r,o,n),_i(null,t,r,!0,e,n);case 19:return Gu(e,t,n);case 22:return ju(e,t,n)}throw Error(v(156,t.tag))};function Xu(e,t){return xa(e,t)}function xf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Se(e,t,n,r){return new xf(e,t,n,r)}function zs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Af(e){if(typeof e=="function")return zs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qi)return 11;if(e===Yi)return 14}return 2}function dt(e,t){var n=e.alternate;return n===null?(n=Se(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Hr(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")zs(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Gt:return At(n.children,o,i,t);case Vi:s=8,o|=8;break;case Yo:return e=Se(12,n,t,o|2),e.elementType=Yo,e.lanes=i,e;case Ko:return e=Se(13,n,t,o),e.elementType=Ko,e.lanes=i,e;case Xo:return e=Se(19,n,t,o),e.elementType=Xo,e.lanes=i,e;case la:return po(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ia:s=10;break e;case sa:s=9;break e;case qi:s=11;break e;case Yi:s=14;break e;case Ze:s=16,r=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return t=Se(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function At(e,t,n,r){return e=Se(7,e,r,t),e.lanes=n,e}function po(e,t,n,r){return e=Se(22,e,r,t),e.elementType=la,e.lanes=n,e.stateNode={isHidden:!1},e}function Uo(e,t,n){return e=Se(6,e,null,t),e.lanes=n,e}function $o(e,t,n){return t=Se(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Pf(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Po(0),this.expirationTimes=Po(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Po(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Hs(e,t,n,r,o,i,s,l,a){return e=new Pf(e,t,n,l,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Se(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ps(i),e}function Nf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Zu(e){if(!e)return pt;e=e._reactInternals;e:{if(Dt(e)!==e||e.tag!==1)throw Error(v(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(v(171))}if(e.tag===1){var n=e.type;if(fe(n))return Za(e,n,t)}return t}function Ju(e,t,n,r,o,i,s,l,a){return e=Hs(n,r,!0,e,o,i,s,l,a),e.context=Zu(null),n=e.current,r=se(),o=ct(n),i=Ue(r,o),i.callback=t??null,at(n,i,o),e.current.lanes=o,Kn(e,o,r),pe(e,r),e}function ho(e,t,n,r){var o=t.current,i=se(),s=ct(o);return n=Zu(n),t.context===null?t.context=n:t.pendingContext=n,t=Ue(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=at(o,t,s),e!==null&&(Te(e,o,s,i),xr(e,o,s)),s}function eo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Wl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function js(e,t){Wl(e,t),(e=e.alternate)&&Wl(e,t)}function _f(){return null}var ec=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ds(e){this._internalRoot=e}mo.prototype.render=Ds.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(v(409));ho(e,t,null,null)};mo.prototype.unmount=Ds.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ht(function(){ho(null,e,null,null)}),t[Ve]=null}};function mo(e){this._internalRoot=e}mo.prototype.unstable_scheduleHydration=function(e){if(e){var t=ja();e={blockedOn:null,target:e,priority:t};for(var n=0;n<et.length&&t!==0&&t<et[n].priority;n++);et.splice(n,0,e),n===0&&Ta(e)}};function Ts(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function yo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bl(){}function zf(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=eo(s);i.call(c)}}var s=Ju(t,r,e,0,null,!1,!1,"",bl);return e._reactRootContainer=s,e[Ve]=s.current,On(e.nodeType===8?e.parentNode:e),Ht(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var c=eo(a);l.call(c)}}var a=Hs(e,0,!1,null,null,!1,!1,"",bl);return e._reactRootContainer=a,e[Ve]=a.current,On(e.nodeType===8?e.parentNode:e),Ht(function(){ho(t,a,n,r)}),a}function go(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var l=o;o=function(){var a=eo(s);l.call(a)}}ho(t,s,e,o)}else s=zf(n,t,e,o,r);return eo(s)}za=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Cn(t.pendingLanes);n!==0&&(Zi(t,n|1),pe(t,U()),!(T&6)&&(on=U()+500,yt()))}break;case 13:Ht(function(){var r=qe(e,1);if(r!==null){var o=se();Te(r,e,1,o)}}),js(e,1)}};Ji=function(e){if(e.tag===13){var t=qe(e,134217728);if(t!==null){var n=se();Te(t,e,134217728,n)}js(e,134217728)}};Ha=function(e){if(e.tag===13){var t=ct(e),n=qe(e,t);if(n!==null){var r=se();Te(n,e,t,r)}js(e,t)}};ja=function(){return R};Da=function(e,t){var n=R;try{return R=e,t()}finally{R=n}};li=function(e,t,n){switch(t){case"input":if(ei(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=so(r);if(!o)throw Error(v(90));ua(r),ei(r,o)}}}break;case"textarea":da(e,n);break;case"select":t=n.value,t!=null&&$t(e,!!n.multiple,t,!1)}};va=Ps;wa=Ht;var Hf={usingClientEntryPoint:!1,Events:[Zn,Mt,so,ya,ga,Ps]},vn={findFiberByHostInstance:Ct,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jf={bundleType:vn.bundleType,version:vn.version,rendererPackageName:vn.rendererPackageName,rendererConfig:vn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Sa(e),e===null?null:e.stateNode},findFiberByHostInstance:vn.findFiberByHostInstance||_f,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vr.isDisabled&&vr.supportsFiber)try{no=vr.inject(jf),Qe=vr}catch{}}ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hf;ve.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ts(t))throw Error(v(200));return Nf(e,t,null,n)};ve.createRoot=function(e,t){if(!Ts(e))throw Error(v(299));var n=!1,r="",o=ec;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Hs(e,1,!1,null,null,n,!1,r,o),e[Ve]=t.current,On(e.nodeType===8?e.parentNode:e),new Ds(t)};ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=Sa(t),e=e===null?null:e.stateNode,e};ve.flushSync=function(e){return Ht(e)};ve.hydrate=function(e,t,n){if(!yo(t))throw Error(v(200));return go(null,e,t,!0,n)};ve.hydrateRoot=function(e,t,n){if(!Ts(e))throw Error(v(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=ec;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Ju(t,null,e,1,n??null,o,!1,i,s),e[Ve]=t.current,On(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new mo(t)};ve.render=function(e,t,n){if(!yo(t))throw Error(v(200));return go(null,e,t,!1,n)};ve.unmountComponentAtNode=function(e){if(!yo(e))throw Error(v(40));return e._reactRootContainer?(Ht(function(){go(null,null,e,!1,function(){e._reactRootContainer=null,e[Ve]=null})}),!0):!1};ve.unstable_batchedUpdates=Ps;ve.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!yo(n))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return go(e,t,n,!1,r)};ve.version="18.3.1-next-f1338f8080-20240426";function tc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tc)}catch(e){console.error(e)}}tc(),ta.exports=ve;var Df=ta.exports,Bl=Df;Vo.createRoot=Bl.createRoot,Vo.hydrateRoot=Bl.hydrateRoot;function Tf(e){const t=e.toLowerCase(),n={one:1,two:2,three:3,multiple:99},r=t.match(/\(choose\s+(\d+|one|two|three|multiple)\)/);if(r)return Number(r[1])||n[r[1]]||1;const o=t.match(/\bwhich\s+(one|two|three)\b/);return o&&n[o[1]]||1}function Rf(e){return e.replace(/\s+\(Choose [^)]+\)/i,"").trim()}function Gf(e,t){const n=e.split(`
`).map(c=>c.trimEnd()),o=(n.shift().trim().match(/^Question\s+(\d+)/i)||[null,t+1])[1],i=n.join(`
`).trim().split(`
`).map(c=>c.trim()).filter(Boolean),s=i.findIndex(c=>/^[A-Z]\.\s+/.test(c)),l=s!==-1?i.slice(0,s).join(" ").trim():i[0]||"",a=s!==-1?i.slice(s).reduce((c,y)=>(/^[A-Z]\.\s+/.test(y)?c.push(y.replace(/^[A-Z]\.\s+/,"").trim()):c.length&&(c[c.length-1]+=` ${y}`),c),[]):i.slice(1);return{id:`q-${t+1}`,label:`Question ${o}`,ordinal:t+1,prompt:Rf(l),choose:Tf(l),options:a}}const If=String.raw`Question 1
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
Milestones track individual commits, while labels group entire repositories`,Lf=String.raw`Question 49
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
D. number of repositories owned`,Qf=String.raw`Question 97

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
F. SMS`,Mf=[If,Lf,Qf].join(`

`),Oe=Mf.split(/(?=Question\s+\d+)/g).map(e=>e.trim()).filter(Boolean).map(Gf),nc="github-quiz-studio-state-v1";function Of(){try{const e=window.localStorage.getItem(nc);return e?JSON.parse(e):{}}catch{return{}}}function Wf(e){const t=e%10,n=e%100;return t===1&&n!==11?`${e}st`:t===2&&n!==12?`${e}nd`:t===3&&n!==13?`${e}rd`:`${e}th`}function bf(){const[e,t]=_e.useState(Of),[n,r]=_e.useState("all"),[o,i]=_e.useState(""),[s,l]=_e.useState(!1);_e.useEffect(()=>{window.localStorage.setItem(nc,JSON.stringify(e))},[e]);const a=_e.useMemo(()=>Oe.filter(h=>(e[h.id]||[]).length>0).length,[e]),c=_e.useMemo(()=>Oe.filter(h=>h.choose>1).length,[]),y=_e.useMemo(()=>{const h=o.trim().toLowerCase();return Oe.filter(_=>{const u=(e[_.id]||[]).length>0,f=`${_.label} ${_.prompt} ${_.options.join(" ")}`.toLowerCase(),g=!h||f.includes(h),S=n==="all"?!0:n==="answered"?u:n==="unanswered"?!u:_.choose>1;return g&&S&&(!s||u)})},[e,s,n,o]),m=Oe.length?Math.round(a/Oe.length*100):0;function p(h,_){t(d=>{const u=new Set(d[h.id]||[]);if(h.choose===1)u.has(_)?u.clear():(u.clear(),u.add(_));else if(u.has(_))u.delete(_);else if(u.size<h.choose)u.add(_);else{const f=[...u].sort((g,S)=>g-S);u.delete(f[0]),u.add(_)}return{...d,[h.id]:[...u].sort((f,g)=>f-g)}})}function w(){t({})}function k(){var _;const h=Oe.find(d=>(e[d.id]||[]).length===0);h&&((_=document.getElementById(h.id))==null||_.scrollIntoView({behavior:"smooth",block:"start"}))}return C.jsxs("div",{className:"shell",children:[C.jsxs("aside",{className:"sidebar panel",children:[C.jsxs("div",{className:"brand",children:[C.jsx("span",{className:"eyebrow",children:"Quiz Studio"}),C.jsx("h1",{children:"GitHub Mastery"}),C.jsx("div",{className:"lede",children:"A polished React quiz experience with progress memory, search, and a fast question navigator."})]}),C.jsxs("div",{className:"stats",children:[C.jsxs("div",{className:"stat",children:[C.jsx("strong",{children:Oe.length}),C.jsx("span",{className:"muted",children:"total questions"})]}),C.jsxs("div",{className:"stat",children:[C.jsx("strong",{children:a}),C.jsx("span",{className:"muted",children:"answered"})]})]}),C.jsxs("div",{className:"progress-wrap",children:[C.jsxs("div",{className:"progress-meta",children:[C.jsx("span",{children:"Progress"}),C.jsxs("strong",{children:[m,"%"]})]}),C.jsx("div",{className:"bar",children:C.jsx("span",{style:{width:`${m}%`}})})]}),C.jsx("div",{className:"navigator",children:Oe.map(h=>{const _=(e[h.id]||[]).length>0,d=y.some(u=>u.id===h.id);return C.jsxs("button",{className:`nav-item ${_?"answered":""} ${d?"active":""}`,onClick:()=>{var u;return(u=document.getElementById(h.id))==null?void 0:u.scrollIntoView({behavior:"smooth",block:"start"})},children:[C.jsxs("div",{className:"nav-topline",children:[C.jsx("span",{children:h.label}),C.jsx("span",{children:h.choose>1?`Pick ${h.choose}`:"Pick 1"})]}),C.jsx("div",{className:"nav-title",children:h.prompt})]},h.id)})}),C.jsxs("div",{className:"nav-actions",children:[C.jsx("button",{className:"ghost",onClick:k,children:"First Unanswered"}),C.jsx("button",{className:"ghost",onClick:w,children:"Reset"})]})]}),C.jsxs("main",{className:"main",children:[C.jsx("section",{className:"hero panel",children:C.jsxs("div",{className:"hero-grid",children:[C.jsxs("div",{children:[C.jsx("span",{className:"eyebrow hero-eyebrow",children:"Interactive Review"}),C.jsx("h2",{children:"Study beautifully, move quickly."}),C.jsx("p",{children:"Every answer you choose is saved locally in your browser. Search by keyword, focus on unanswered prompts, and jump through the full question bank without losing your place."})]}),C.jsxs("div",{className:"hero-cards",children:[C.jsxs("div",{className:"hero-card",children:[C.jsx("strong",{children:c}),C.jsx("span",{children:"multi-select questions"})]}),C.jsxs("div",{className:"hero-card",children:[C.jsx("strong",{children:Oe.length-c}),C.jsx("span",{children:"single-select questions"})]}),C.jsxs("div",{className:"hero-card",children:[C.jsx("strong",{children:"Auto-save"}),C.jsx("span",{children:"Selections persist in local storage"})]}),C.jsxs("div",{className:"hero-card",children:[C.jsx("strong",{children:"React SPA"}),C.jsx("span",{children:"Component-driven, ready for Vite"})]})]})]})}),C.jsxs("section",{className:"toolbar panel",children:[C.jsxs("div",{className:"toolbar-top",children:[C.jsx("input",{className:"search",type:"search",value:o,onChange:h=>i(h.target.value),placeholder:"Search questions, topics, or answer text"}),C.jsx("button",{className:"primary",onClick:()=>l(h=>!h),children:s?"Show All Results":"Show Answered Only"})]}),C.jsx("div",{className:"filters",children:[["all","All Questions"],["unanswered","Unanswered"],["answered","Answered"],["multi","Multi-select"]].map(([h,_])=>C.jsx("button",{className:`pill ${n===h?"active":""}`,onClick:()=>r(h),children:_},h))})]}),C.jsx("section",{className:"questions",children:y.length===0?C.jsx("div",{className:"results-empty",children:"No questions match the current search and filter combination."}):y.map((h,_)=>{const d=new Set(e[h.id]||[]);return C.jsxs("article",{className:"question",id:h.id,style:{animationDelay:`${Math.min(_*18,240)}ms`},children:[C.jsxs("div",{className:"question-head",children:[C.jsxs("div",{children:[C.jsxs("div",{className:"question-index",children:[h.label," · ",Wf(h.ordinal)," in deck"]}),C.jsx("h3",{children:h.prompt})]}),C.jsx("div",{className:"choice-badge",children:h.choose>1?`Choose ${h.choose}`:"Choose 1"})]}),C.jsx("div",{className:"options",children:h.options.map((u,f)=>C.jsxs("label",{className:`option ${d.has(f)?"selected":""}`,children:[C.jsx("input",{hidden:!0,type:h.choose>1?"checkbox":"radio",checked:d.has(f),onChange:()=>p(h,f)}),C.jsx("span",{className:"option-key",children:String.fromCharCode(65+f)}),C.jsx("span",{className:"option-text",children:u}),C.jsx("span",{className:"option-mark","aria-hidden":"true"})]},`${h.id}-${f}`))}),C.jsxs("div",{className:"question-foot",children:[C.jsx("span",{children:d.size?`${d.size} selected`:"No answer selected yet"}),C.jsxs("span",{children:[h.options.length," options"]})]})]},h.id)})})]})]})}Vo.createRoot(document.getElementById("root")).render(C.jsx(kc.StrictMode,{children:C.jsx(bf,{})}));
