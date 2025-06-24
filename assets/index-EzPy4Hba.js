(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var Sx={exports:{}},ed={},Mx={exports:{}},ot={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lu=Symbol.for("react.element"),qM=Symbol.for("react.portal"),KM=Symbol.for("react.fragment"),ZM=Symbol.for("react.strict_mode"),QM=Symbol.for("react.profiler"),JM=Symbol.for("react.provider"),eE=Symbol.for("react.context"),tE=Symbol.for("react.forward_ref"),nE=Symbol.for("react.suspense"),iE=Symbol.for("react.memo"),rE=Symbol.for("react.lazy"),i0=Symbol.iterator;function sE(n){return n===null||typeof n!="object"?null:(n=i0&&n[i0]||n["@@iterator"],typeof n=="function"?n:null)}var Ex={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wx=Object.assign,Tx={};function Qa(n,e,t){this.props=n,this.context=e,this.refs=Tx,this.updater=t||Ex}Qa.prototype.isReactComponent={};Qa.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Qa.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function bx(){}bx.prototype=Qa.prototype;function Tm(n,e,t){this.props=n,this.context=e,this.refs=Tx,this.updater=t||Ex}var bm=Tm.prototype=new bx;bm.constructor=Tm;wx(bm,Qa.prototype);bm.isPureReactComponent=!0;var r0=Array.isArray,Ax=Object.prototype.hasOwnProperty,Am={current:null},Cx={key:!0,ref:!0,__self:!0,__source:!0};function Rx(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ax.call(e,i)&&!Cx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Lu,type:n,key:s,ref:o,props:r,_owner:Am.current}}function oE(n,e){return{$$typeof:Lu,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Cm(n){return typeof n=="object"&&n!==null&&n.$$typeof===Lu}function aE(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var s0=/\/+/g;function Rd(n,e){return typeof n=="object"&&n!==null&&n.key!=null?aE(""+n.key):e.toString(36)}function Vc(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Lu:case qM:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Rd(o,0):i,r0(r)?(t="",n!=null&&(t=n.replace(s0,"$&/")+"/"),Vc(r,e,t,"",function(u){return u})):r!=null&&(Cm(r)&&(r=oE(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(s0,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",r0(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Rd(s,a);o+=Vc(s,e,t,l,r)}else if(l=sE(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Rd(s,a++),o+=Vc(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Vu(n,e,t){if(n==null)return n;var i=[],r=0;return Vc(n,i,"","",function(s){return e.call(t,s,r++)}),i}function lE(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Yn={current:null},Gc={transition:null},uE={ReactCurrentDispatcher:Yn,ReactCurrentBatchConfig:Gc,ReactCurrentOwner:Am};function Px(){throw Error("act(...) is not supported in production builds of React.")}ot.Children={map:Vu,forEach:function(n,e,t){Vu(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Vu(n,function(){e++}),e},toArray:function(n){return Vu(n,function(e){return e})||[]},only:function(n){if(!Cm(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};ot.Component=Qa;ot.Fragment=KM;ot.Profiler=QM;ot.PureComponent=Tm;ot.StrictMode=ZM;ot.Suspense=nE;ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uE;ot.act=Px;ot.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=wx({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Am.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Ax.call(e,l)&&!Cx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Lu,type:n.type,key:r,ref:s,props:i,_owner:o}};ot.createContext=function(n){return n={$$typeof:eE,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:JM,_context:n},n.Consumer=n};ot.createElement=Rx;ot.createFactory=function(n){var e=Rx.bind(null,n);return e.type=n,e};ot.createRef=function(){return{current:null}};ot.forwardRef=function(n){return{$$typeof:tE,render:n}};ot.isValidElement=Cm;ot.lazy=function(n){return{$$typeof:rE,_payload:{_status:-1,_result:n},_init:lE}};ot.memo=function(n,e){return{$$typeof:iE,type:n,compare:e===void 0?null:e}};ot.startTransition=function(n){var e=Gc.transition;Gc.transition={};try{n()}finally{Gc.transition=e}};ot.unstable_act=Px;ot.useCallback=function(n,e){return Yn.current.useCallback(n,e)};ot.useContext=function(n){return Yn.current.useContext(n)};ot.useDebugValue=function(){};ot.useDeferredValue=function(n){return Yn.current.useDeferredValue(n)};ot.useEffect=function(n,e){return Yn.current.useEffect(n,e)};ot.useId=function(){return Yn.current.useId()};ot.useImperativeHandle=function(n,e,t){return Yn.current.useImperativeHandle(n,e,t)};ot.useInsertionEffect=function(n,e){return Yn.current.useInsertionEffect(n,e)};ot.useLayoutEffect=function(n,e){return Yn.current.useLayoutEffect(n,e)};ot.useMemo=function(n,e){return Yn.current.useMemo(n,e)};ot.useReducer=function(n,e,t){return Yn.current.useReducer(n,e,t)};ot.useRef=function(n){return Yn.current.useRef(n)};ot.useState=function(n){return Yn.current.useState(n)};ot.useSyncExternalStore=function(n,e,t){return Yn.current.useSyncExternalStore(n,e,t)};ot.useTransition=function(){return Yn.current.useTransition()};ot.version="18.3.1";Mx.exports=ot;var ht=Mx.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cE=ht,fE=Symbol.for("react.element"),dE=Symbol.for("react.fragment"),hE=Object.prototype.hasOwnProperty,pE=cE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mE={key:!0,ref:!0,__self:!0,__source:!0};function Lx(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)hE.call(e,i)&&!mE.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:fE,type:n,key:s,ref:o,props:r,_owner:pE.current}}ed.Fragment=dE;ed.jsx=Lx;ed.jsxs=Lx;Sx.exports=ed;var L=Sx.exports,Nx={exports:{}},Ri={},Dx={exports:{}},Ux={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(I,k){var C=I.length;I.push(k);e:for(;0<C;){var Q=C-1>>>1,te=I[Q];if(0<r(te,k))I[Q]=k,I[C]=te,C=Q;else break e}}function t(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var k=I[0],C=I.pop();if(C!==k){I[0]=C;e:for(var Q=0,te=I.length,q=te>>>1;Q<q;){var Z=2*(Q+1)-1,le=I[Z],pe=Z+1,me=I[pe];if(0>r(le,C))pe<te&&0>r(me,le)?(I[Q]=me,I[pe]=C,Q=pe):(I[Q]=le,I[Z]=C,Q=Z);else if(pe<te&&0>r(me,C))I[Q]=me,I[pe]=C,Q=pe;else break e}}return k}function r(I,k){var C=I.sortIndex-k.sortIndex;return C!==0?C:I.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,p=!1,_=!1,m=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(I){for(var k=t(u);k!==null;){if(k.callback===null)i(u);else if(k.startTime<=I)i(u),k.sortIndex=k.expirationTime,e(l,k);else break;k=t(u)}}function y(I){if(m=!1,x(I),!_)if(t(l)!==null)_=!0,Y(M);else{var k=t(u);k!==null&&F(y,k.startTime-I)}}function M(I,k){_=!1,m&&(m=!1,d(R),R=-1),p=!0;var C=h;try{for(x(k),f=t(l);f!==null&&(!(f.expirationTime>k)||I&&!z());){var Q=f.callback;if(typeof Q=="function"){f.callback=null,h=f.priorityLevel;var te=Q(f.expirationTime<=k);k=n.unstable_now(),typeof te=="function"?f.callback=te:f===t(l)&&i(l),x(k)}else i(l);f=t(l)}if(f!==null)var q=!0;else{var Z=t(u);Z!==null&&F(y,Z.startTime-k),q=!1}return q}finally{f=null,h=C,p=!1}}var w=!1,E=null,R=-1,S=5,T=-1;function z(){return!(n.unstable_now()-T<S)}function U(){if(E!==null){var I=n.unstable_now();T=I;var k=!0;try{k=E(!0,I)}finally{k?K():(w=!1,E=null)}}else w=!1}var K;if(typeof v=="function")K=function(){v(U)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,W=N.port2;N.port1.onmessage=U,K=function(){W.postMessage(null)}}else K=function(){g(U,0)};function Y(I){E=I,w||(w=!0,K())}function F(I,k){R=g(function(){I(n.unstable_now())},k)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(I){I.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,Y(M))},n.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<I?Math.floor(1e3/I):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(I){switch(h){case 1:case 2:case 3:var k=3;break;default:k=h}var C=h;h=k;try{return I()}finally{h=C}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(I,k){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var C=h;h=I;try{return k()}finally{h=C}},n.unstable_scheduleCallback=function(I,k,C){var Q=n.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?Q+C:Q):C=Q,I){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=C+te,I={id:c++,callback:k,priorityLevel:I,startTime:C,expirationTime:te,sortIndex:-1},C>Q?(I.sortIndex=C,e(u,I),t(l)===null&&I===t(u)&&(m?(d(R),R=-1):m=!0,F(y,C-Q))):(I.sortIndex=te,e(l,I),_||p||(_=!0,Y(M))),I},n.unstable_shouldYield=z,n.unstable_wrapCallback=function(I){var k=h;return function(){var C=h;h=k;try{return I.apply(this,arguments)}finally{h=C}}}})(Ux);Dx.exports=Ux;var gE=Dx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _E=ht,bi=gE;function ae(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ix=new Set,iu={};function Do(n,e){Ua(n,e),Ua(n+"Capture",e)}function Ua(n,e){for(iu[n]=e,n=0;n<e.length;n++)Ix.add(e[n])}var Gr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qh=Object.prototype.hasOwnProperty,vE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,o0={},a0={};function xE(n){return qh.call(a0,n)?!0:qh.call(o0,n)?!1:vE.test(n)?a0[n]=!0:(o0[n]=!0,!1)}function yE(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function SE(n,e,t,i){if(e===null||typeof e>"u"||yE(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Mn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Mn[n]=new qn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Mn[e]=new qn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Mn[n]=new qn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Mn[n]=new qn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Mn[n]=new qn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Mn[n]=new qn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Mn[n]=new qn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Mn[n]=new qn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Mn[n]=new qn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Rm=/[\-:]([a-z])/g;function Pm(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Rm,Pm);Mn[e]=new qn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Rm,Pm);Mn[e]=new qn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Rm,Pm);Mn[e]=new qn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Mn[n]=new qn(n,1,!1,n.toLowerCase(),null,!1,!1)});Mn.xlinkHref=new qn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Mn[n]=new qn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Lm(n,e,t,i){var r=Mn.hasOwnProperty(e)?Mn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(SE(e,t,r,i)&&(t=null),i||r===null?xE(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Kr=_E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gu=Symbol.for("react.element"),ra=Symbol.for("react.portal"),sa=Symbol.for("react.fragment"),Nm=Symbol.for("react.strict_mode"),Kh=Symbol.for("react.profiler"),Ox=Symbol.for("react.provider"),Fx=Symbol.for("react.context"),Dm=Symbol.for("react.forward_ref"),Zh=Symbol.for("react.suspense"),Qh=Symbol.for("react.suspense_list"),Um=Symbol.for("react.memo"),rs=Symbol.for("react.lazy"),kx=Symbol.for("react.offscreen"),l0=Symbol.iterator;function sl(n){return n===null||typeof n!="object"?null:(n=l0&&n[l0]||n["@@iterator"],typeof n=="function"?n:null)}var Ht=Object.assign,Pd;function Ml(n){if(Pd===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Pd=e&&e[1]||""}return`
`+Pd+n}var Ld=!1;function Nd(n,e){if(!n||Ld)return"";Ld=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ld=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ml(n):""}function ME(n){switch(n.tag){case 5:return Ml(n.type);case 16:return Ml("Lazy");case 13:return Ml("Suspense");case 19:return Ml("SuspenseList");case 0:case 2:case 15:return n=Nd(n.type,!1),n;case 11:return n=Nd(n.type.render,!1),n;case 1:return n=Nd(n.type,!0),n;default:return""}}function Jh(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case sa:return"Fragment";case ra:return"Portal";case Kh:return"Profiler";case Nm:return"StrictMode";case Zh:return"Suspense";case Qh:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Fx:return(n.displayName||"Context")+".Consumer";case Ox:return(n._context.displayName||"Context")+".Provider";case Dm:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Um:return e=n.displayName||null,e!==null?e:Jh(n.type)||"Memo";case rs:e=n._payload,n=n._init;try{return Jh(n(e))}catch{}}return null}function EE(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jh(e);case 8:return e===Nm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ls(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function zx(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function wE(n){var e=zx(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Wu(n){n._valueTracker||(n._valueTracker=wE(n))}function Bx(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=zx(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function ff(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ep(n,e){var t=e.checked;return Ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function u0(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Ls(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Hx(n,e){e=e.checked,e!=null&&Lm(n,"checked",e,!1)}function tp(n,e){Hx(n,e);var t=Ls(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?np(n,e.type,t):e.hasOwnProperty("defaultValue")&&np(n,e.type,Ls(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function c0(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function np(n,e,t){(e!=="number"||ff(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var El=Array.isArray;function ya(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Ls(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function ip(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return Ht({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function f0(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ae(92));if(El(t)){if(1<t.length)throw Error(ae(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ls(t)}}function Vx(n,e){var t=Ls(e.value),i=Ls(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function d0(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Gx(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Gx(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ju,Wx=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ju=ju||document.createElement("div"),ju.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ju.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ru(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Il={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},TE=["Webkit","ms","Moz","O"];Object.keys(Il).forEach(function(n){TE.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Il[e]=Il[n]})});function jx(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Il.hasOwnProperty(n)&&Il[n]?(""+e).trim():e+"px"}function Xx(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=jx(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var bE=Ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sp(n,e){if(e){if(bE[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function op(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ap=null;function Im(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var lp=null,Sa=null,Ma=null;function h0(n){if(n=Uu(n)){if(typeof lp!="function")throw Error(ae(280));var e=n.stateNode;e&&(e=sd(e),lp(n.stateNode,n.type,e))}}function $x(n){Sa?Ma?Ma.push(n):Ma=[n]:Sa=n}function Yx(){if(Sa){var n=Sa,e=Ma;if(Ma=Sa=null,h0(n),e)for(n=0;n<e.length;n++)h0(e[n])}}function qx(n,e){return n(e)}function Kx(){}var Dd=!1;function Zx(n,e,t){if(Dd)return n(e,t);Dd=!0;try{return qx(n,e,t)}finally{Dd=!1,(Sa!==null||Ma!==null)&&(Kx(),Yx())}}function su(n,e){var t=n.stateNode;if(t===null)return null;var i=sd(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ae(231,e,typeof t));return t}var up=!1;if(Gr)try{var ol={};Object.defineProperty(ol,"passive",{get:function(){up=!0}}),window.addEventListener("test",ol,ol),window.removeEventListener("test",ol,ol)}catch{up=!1}function AE(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Ol=!1,df=null,hf=!1,cp=null,CE={onError:function(n){Ol=!0,df=n}};function RE(n,e,t,i,r,s,o,a,l){Ol=!1,df=null,AE.apply(CE,arguments)}function PE(n,e,t,i,r,s,o,a,l){if(RE.apply(this,arguments),Ol){if(Ol){var u=df;Ol=!1,df=null}else throw Error(ae(198));hf||(hf=!0,cp=u)}}function Uo(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Qx(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function p0(n){if(Uo(n)!==n)throw Error(ae(188))}function LE(n){var e=n.alternate;if(!e){if(e=Uo(n),e===null)throw Error(ae(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return p0(r),n;if(s===i)return p0(r),e;s=s.sibling}throw Error(ae(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ae(189))}}if(t.alternate!==i)throw Error(ae(190))}if(t.tag!==3)throw Error(ae(188));return t.stateNode.current===t?n:e}function Jx(n){return n=LE(n),n!==null?ey(n):null}function ey(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=ey(n);if(e!==null)return e;n=n.sibling}return null}var ty=bi.unstable_scheduleCallback,m0=bi.unstable_cancelCallback,NE=bi.unstable_shouldYield,DE=bi.unstable_requestPaint,Xt=bi.unstable_now,UE=bi.unstable_getCurrentPriorityLevel,Om=bi.unstable_ImmediatePriority,ny=bi.unstable_UserBlockingPriority,pf=bi.unstable_NormalPriority,IE=bi.unstable_LowPriority,iy=bi.unstable_IdlePriority,td=null,vr=null;function OE(n){if(vr&&typeof vr.onCommitFiberRoot=="function")try{vr.onCommitFiberRoot(td,n,void 0,(n.current.flags&128)===128)}catch{}}var or=Math.clz32?Math.clz32:zE,FE=Math.log,kE=Math.LN2;function zE(n){return n>>>=0,n===0?32:31-(FE(n)/kE|0)|0}var Xu=64,$u=4194304;function wl(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function mf(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=wl(a):(s&=o,s!==0&&(i=wl(s)))}else o=t&~r,o!==0?i=wl(o):s!==0&&(i=wl(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-or(e),r=1<<t,i|=n[t],e&=~r;return i}function BE(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function HE(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-or(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=BE(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function fp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ry(){var n=Xu;return Xu<<=1,!(Xu&4194240)&&(Xu=64),n}function Ud(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Nu(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-or(e),n[e]=t}function VE(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-or(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Fm(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-or(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var _t=0;function sy(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var oy,km,ay,ly,uy,dp=!1,Yu=[],_s=null,vs=null,xs=null,ou=new Map,au=new Map,os=[],GE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function g0(n,e){switch(n){case"focusin":case"focusout":_s=null;break;case"dragenter":case"dragleave":vs=null;break;case"mouseover":case"mouseout":xs=null;break;case"pointerover":case"pointerout":ou.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":au.delete(e.pointerId)}}function al(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Uu(e),e!==null&&km(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function WE(n,e,t,i,r){switch(e){case"focusin":return _s=al(_s,n,e,t,i,r),!0;case"dragenter":return vs=al(vs,n,e,t,i,r),!0;case"mouseover":return xs=al(xs,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return ou.set(s,al(ou.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,au.set(s,al(au.get(s)||null,n,e,t,i,r)),!0}return!1}function cy(n){var e=ro(n.target);if(e!==null){var t=Uo(e);if(t!==null){if(e=t.tag,e===13){if(e=Qx(t),e!==null){n.blockedOn=e,uy(n.priority,function(){ay(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Wc(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=hp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);ap=i,t.target.dispatchEvent(i),ap=null}else return e=Uu(t),e!==null&&km(e),n.blockedOn=t,!1;e.shift()}return!0}function _0(n,e,t){Wc(n)&&t.delete(e)}function jE(){dp=!1,_s!==null&&Wc(_s)&&(_s=null),vs!==null&&Wc(vs)&&(vs=null),xs!==null&&Wc(xs)&&(xs=null),ou.forEach(_0),au.forEach(_0)}function ll(n,e){n.blockedOn===e&&(n.blockedOn=null,dp||(dp=!0,bi.unstable_scheduleCallback(bi.unstable_NormalPriority,jE)))}function lu(n){function e(r){return ll(r,n)}if(0<Yu.length){ll(Yu[0],n);for(var t=1;t<Yu.length;t++){var i=Yu[t];i.blockedOn===n&&(i.blockedOn=null)}}for(_s!==null&&ll(_s,n),vs!==null&&ll(vs,n),xs!==null&&ll(xs,n),ou.forEach(e),au.forEach(e),t=0;t<os.length;t++)i=os[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<os.length&&(t=os[0],t.blockedOn===null);)cy(t),t.blockedOn===null&&os.shift()}var Ea=Kr.ReactCurrentBatchConfig,gf=!0;function XE(n,e,t,i){var r=_t,s=Ea.transition;Ea.transition=null;try{_t=1,zm(n,e,t,i)}finally{_t=r,Ea.transition=s}}function $E(n,e,t,i){var r=_t,s=Ea.transition;Ea.transition=null;try{_t=4,zm(n,e,t,i)}finally{_t=r,Ea.transition=s}}function zm(n,e,t,i){if(gf){var r=hp(n,e,t,i);if(r===null)Wd(n,e,i,_f,t),g0(n,i);else if(WE(r,n,e,t,i))i.stopPropagation();else if(g0(n,i),e&4&&-1<GE.indexOf(n)){for(;r!==null;){var s=Uu(r);if(s!==null&&oy(s),s=hp(n,e,t,i),s===null&&Wd(n,e,i,_f,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Wd(n,e,i,null,t)}}var _f=null;function hp(n,e,t,i){if(_f=null,n=Im(i),n=ro(n),n!==null)if(e=Uo(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Qx(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return _f=n,null}function fy(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(UE()){case Om:return 1;case ny:return 4;case pf:case IE:return 16;case iy:return 536870912;default:return 16}default:return 16}}var ls=null,Bm=null,jc=null;function dy(){if(jc)return jc;var n,e=Bm,t=e.length,i,r="value"in ls?ls.value:ls.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return jc=r.slice(n,1<i?1-i:void 0)}function Xc(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function qu(){return!0}function v0(){return!1}function Pi(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qu:v0,this.isPropagationStopped=v0,this}return Ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=qu)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=qu)},persist:function(){},isPersistent:qu}),e}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hm=Pi(Ja),Du=Ht({},Ja,{view:0,detail:0}),YE=Pi(Du),Id,Od,ul,nd=Ht({},Du,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vm,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ul&&(ul&&n.type==="mousemove"?(Id=n.screenX-ul.screenX,Od=n.screenY-ul.screenY):Od=Id=0,ul=n),Id)},movementY:function(n){return"movementY"in n?n.movementY:Od}}),x0=Pi(nd),qE=Ht({},nd,{dataTransfer:0}),KE=Pi(qE),ZE=Ht({},Du,{relatedTarget:0}),Fd=Pi(ZE),QE=Ht({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),JE=Pi(QE),ew=Ht({},Ja,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),tw=Pi(ew),nw=Ht({},Ja,{data:0}),y0=Pi(nw),iw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ow(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=sw[n])?!!e[n]:!1}function Vm(){return ow}var aw=Ht({},Du,{key:function(n){if(n.key){var e=iw[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Xc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?rw[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vm,charCode:function(n){return n.type==="keypress"?Xc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Xc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),lw=Pi(aw),uw=Ht({},nd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),S0=Pi(uw),cw=Ht({},Du,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vm}),fw=Pi(cw),dw=Ht({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),hw=Pi(dw),pw=Ht({},nd,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),mw=Pi(pw),gw=[9,13,27,32],Gm=Gr&&"CompositionEvent"in window,Fl=null;Gr&&"documentMode"in document&&(Fl=document.documentMode);var _w=Gr&&"TextEvent"in window&&!Fl,hy=Gr&&(!Gm||Fl&&8<Fl&&11>=Fl),M0=" ",E0=!1;function py(n,e){switch(n){case"keyup":return gw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function my(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var oa=!1;function vw(n,e){switch(n){case"compositionend":return my(e);case"keypress":return e.which!==32?null:(E0=!0,M0);case"textInput":return n=e.data,n===M0&&E0?null:n;default:return null}}function xw(n,e){if(oa)return n==="compositionend"||!Gm&&py(n,e)?(n=dy(),jc=Bm=ls=null,oa=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return hy&&e.locale!=="ko"?null:e.data;default:return null}}var yw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function w0(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!yw[n.type]:e==="textarea"}function gy(n,e,t,i){$x(i),e=vf(e,"onChange"),0<e.length&&(t=new Hm("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var kl=null,uu=null;function Sw(n){Ay(n,0)}function id(n){var e=ua(n);if(Bx(e))return n}function Mw(n,e){if(n==="change")return e}var _y=!1;if(Gr){var kd;if(Gr){var zd="oninput"in document;if(!zd){var T0=document.createElement("div");T0.setAttribute("oninput","return;"),zd=typeof T0.oninput=="function"}kd=zd}else kd=!1;_y=kd&&(!document.documentMode||9<document.documentMode)}function b0(){kl&&(kl.detachEvent("onpropertychange",vy),uu=kl=null)}function vy(n){if(n.propertyName==="value"&&id(uu)){var e=[];gy(e,uu,n,Im(n)),Zx(Sw,e)}}function Ew(n,e,t){n==="focusin"?(b0(),kl=e,uu=t,kl.attachEvent("onpropertychange",vy)):n==="focusout"&&b0()}function ww(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return id(uu)}function Tw(n,e){if(n==="click")return id(e)}function bw(n,e){if(n==="input"||n==="change")return id(e)}function Aw(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var lr=typeof Object.is=="function"?Object.is:Aw;function cu(n,e){if(lr(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!qh.call(e,r)||!lr(n[r],e[r]))return!1}return!0}function A0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function C0(n,e){var t=A0(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=A0(t)}}function xy(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?xy(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function yy(){for(var n=window,e=ff();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=ff(n.document)}return e}function Wm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Cw(n){var e=yy(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&xy(t.ownerDocument.documentElement,t)){if(i!==null&&Wm(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=C0(t,s);var o=C0(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Rw=Gr&&"documentMode"in document&&11>=document.documentMode,aa=null,pp=null,zl=null,mp=!1;function R0(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;mp||aa==null||aa!==ff(i)||(i=aa,"selectionStart"in i&&Wm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),zl&&cu(zl,i)||(zl=i,i=vf(pp,"onSelect"),0<i.length&&(e=new Hm("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=aa)))}function Ku(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var la={animationend:Ku("Animation","AnimationEnd"),animationiteration:Ku("Animation","AnimationIteration"),animationstart:Ku("Animation","AnimationStart"),transitionend:Ku("Transition","TransitionEnd")},Bd={},Sy={};Gr&&(Sy=document.createElement("div").style,"AnimationEvent"in window||(delete la.animationend.animation,delete la.animationiteration.animation,delete la.animationstart.animation),"TransitionEvent"in window||delete la.transitionend.transition);function rd(n){if(Bd[n])return Bd[n];if(!la[n])return n;var e=la[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Sy)return Bd[n]=e[t];return n}var My=rd("animationend"),Ey=rd("animationiteration"),wy=rd("animationstart"),Ty=rd("transitionend"),by=new Map,P0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fs(n,e){by.set(n,e),Do(e,[n])}for(var Hd=0;Hd<P0.length;Hd++){var Vd=P0[Hd],Pw=Vd.toLowerCase(),Lw=Vd[0].toUpperCase()+Vd.slice(1);Fs(Pw,"on"+Lw)}Fs(My,"onAnimationEnd");Fs(Ey,"onAnimationIteration");Fs(wy,"onAnimationStart");Fs("dblclick","onDoubleClick");Fs("focusin","onFocus");Fs("focusout","onBlur");Fs(Ty,"onTransitionEnd");Ua("onMouseEnter",["mouseout","mouseover"]);Ua("onMouseLeave",["mouseout","mouseover"]);Ua("onPointerEnter",["pointerout","pointerover"]);Ua("onPointerLeave",["pointerout","pointerover"]);Do("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Do("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Do("onBeforeInput",["compositionend","keypress","textInput","paste"]);Do("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Do("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Do("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tl));function L0(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,PE(i,e,void 0,n),n.currentTarget=null}function Ay(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;L0(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;L0(r,a,u),s=l}}}if(hf)throw n=cp,hf=!1,cp=null,n}function Rt(n,e){var t=e[yp];t===void 0&&(t=e[yp]=new Set);var i=n+"__bubble";t.has(i)||(Cy(e,n,2,!1),t.add(i))}function Gd(n,e,t){var i=0;e&&(i|=4),Cy(t,n,i,e)}var Zu="_reactListening"+Math.random().toString(36).slice(2);function fu(n){if(!n[Zu]){n[Zu]=!0,Ix.forEach(function(t){t!=="selectionchange"&&(Nw.has(t)||Gd(t,!1,n),Gd(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Zu]||(e[Zu]=!0,Gd("selectionchange",!1,e))}}function Cy(n,e,t,i){switch(fy(e)){case 1:var r=XE;break;case 4:r=$E;break;default:r=zm}t=r.bind(null,e,t,n),r=void 0,!up||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Wd(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ro(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Zx(function(){var u=s,c=Im(t),f=[];e:{var h=by.get(n);if(h!==void 0){var p=Hm,_=n;switch(n){case"keypress":if(Xc(t)===0)break e;case"keydown":case"keyup":p=lw;break;case"focusin":_="focus",p=Fd;break;case"focusout":_="blur",p=Fd;break;case"beforeblur":case"afterblur":p=Fd;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=x0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=KE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=fw;break;case My:case Ey:case wy:p=JE;break;case Ty:p=hw;break;case"scroll":p=YE;break;case"wheel":p=mw;break;case"copy":case"cut":case"paste":p=tw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=S0}var m=(e&4)!==0,g=!m&&n==="scroll",d=m?h!==null?h+"Capture":null:h;m=[];for(var v=u,x;v!==null;){x=v;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,d!==null&&(y=su(v,d),y!=null&&m.push(du(v,y,x)))),g)break;v=v.return}0<m.length&&(h=new p(h,_,null,t,c),f.push({event:h,listeners:m}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==ap&&(_=t.relatedTarget||t.fromElement)&&(ro(_)||_[Wr]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=u,_=_?ro(_):null,_!==null&&(g=Uo(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(m=x0,y="onMouseLeave",d="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(m=S0,y="onPointerLeave",d="onPointerEnter",v="pointer"),g=p==null?h:ua(p),x=_==null?h:ua(_),h=new m(y,v+"leave",p,t,c),h.target=g,h.relatedTarget=x,y=null,ro(c)===u&&(m=new m(d,v+"enter",_,t,c),m.target=x,m.relatedTarget=g,y=m),g=y,p&&_)t:{for(m=p,d=_,v=0,x=m;x;x=Oo(x))v++;for(x=0,y=d;y;y=Oo(y))x++;for(;0<v-x;)m=Oo(m),v--;for(;0<x-v;)d=Oo(d),x--;for(;v--;){if(m===d||d!==null&&m===d.alternate)break t;m=Oo(m),d=Oo(d)}m=null}else m=null;p!==null&&N0(f,h,p,m,!1),_!==null&&g!==null&&N0(f,g,_,m,!0)}}e:{if(h=u?ua(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var M=Mw;else if(w0(h))if(_y)M=bw;else{M=ww;var w=Ew}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(M=Tw);if(M&&(M=M(n,u))){gy(f,M,t,c);break e}w&&w(n,h,u),n==="focusout"&&(w=h._wrapperState)&&w.controlled&&h.type==="number"&&np(h,"number",h.value)}switch(w=u?ua(u):window,n){case"focusin":(w0(w)||w.contentEditable==="true")&&(aa=w,pp=u,zl=null);break;case"focusout":zl=pp=aa=null;break;case"mousedown":mp=!0;break;case"contextmenu":case"mouseup":case"dragend":mp=!1,R0(f,t,c);break;case"selectionchange":if(Rw)break;case"keydown":case"keyup":R0(f,t,c)}var E;if(Gm)e:{switch(n){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else oa?py(n,t)&&(R="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(hy&&t.locale!=="ko"&&(oa||R!=="onCompositionStart"?R==="onCompositionEnd"&&oa&&(E=dy()):(ls=c,Bm="value"in ls?ls.value:ls.textContent,oa=!0)),w=vf(u,R),0<w.length&&(R=new y0(R,n,null,t,c),f.push({event:R,listeners:w}),E?R.data=E:(E=my(t),E!==null&&(R.data=E)))),(E=_w?vw(n,t):xw(n,t))&&(u=vf(u,"onBeforeInput"),0<u.length&&(c=new y0("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=E))}Ay(f,e)})}function du(n,e,t){return{instance:n,listener:e,currentTarget:t}}function vf(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=su(n,t),s!=null&&i.unshift(du(n,s,r)),s=su(n,e),s!=null&&i.push(du(n,s,r))),n=n.return}return i}function Oo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function N0(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=su(t,s),l!=null&&o.unshift(du(t,l,a))):r||(l=su(t,s),l!=null&&o.push(du(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var Dw=/\r\n?/g,Uw=/\u0000|\uFFFD/g;function D0(n){return(typeof n=="string"?n:""+n).replace(Dw,`
`).replace(Uw,"")}function Qu(n,e,t){if(e=D0(e),D0(n)!==e&&t)throw Error(ae(425))}function xf(){}var gp=null,_p=null;function vp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xp=typeof setTimeout=="function"?setTimeout:void 0,Iw=typeof clearTimeout=="function"?clearTimeout:void 0,U0=typeof Promise=="function"?Promise:void 0,Ow=typeof queueMicrotask=="function"?queueMicrotask:typeof U0<"u"?function(n){return U0.resolve(null).then(n).catch(Fw)}:xp;function Fw(n){setTimeout(function(){throw n})}function jd(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),lu(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);lu(e)}function ys(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function I0(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var el=Math.random().toString(36).slice(2),pr="__reactFiber$"+el,hu="__reactProps$"+el,Wr="__reactContainer$"+el,yp="__reactEvents$"+el,kw="__reactListeners$"+el,zw="__reactHandles$"+el;function ro(n){var e=n[pr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Wr]||t[pr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=I0(n);n!==null;){if(t=n[pr])return t;n=I0(n)}return e}n=t,t=n.parentNode}return null}function Uu(n){return n=n[pr]||n[Wr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ua(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ae(33))}function sd(n){return n[hu]||null}var Sp=[],ca=-1;function ks(n){return{current:n}}function Lt(n){0>ca||(n.current=Sp[ca],Sp[ca]=null,ca--)}function bt(n,e){ca++,Sp[ca]=n.current,n.current=e}var Ns={},Un=ks(Ns),ti=ks(!1),Mo=Ns;function Ia(n,e){var t=n.type.contextTypes;if(!t)return Ns;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function ni(n){return n=n.childContextTypes,n!=null}function yf(){Lt(ti),Lt(Un)}function O0(n,e,t){if(Un.current!==Ns)throw Error(ae(168));bt(Un,e),bt(ti,t)}function Ry(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,EE(n)||"Unknown",r));return Ht({},t,i)}function Sf(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ns,Mo=Un.current,bt(Un,n),bt(ti,ti.current),!0}function F0(n,e,t){var i=n.stateNode;if(!i)throw Error(ae(169));t?(n=Ry(n,e,Mo),i.__reactInternalMemoizedMergedChildContext=n,Lt(ti),Lt(Un),bt(Un,n)):Lt(ti),bt(ti,t)}var Nr=null,od=!1,Xd=!1;function Py(n){Nr===null?Nr=[n]:Nr.push(n)}function Bw(n){od=!0,Py(n)}function zs(){if(!Xd&&Nr!==null){Xd=!0;var n=0,e=_t;try{var t=Nr;for(_t=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Nr=null,od=!1}catch(r){throw Nr!==null&&(Nr=Nr.slice(n+1)),ty(Om,zs),r}finally{_t=e,Xd=!1}}return null}var fa=[],da=0,Mf=null,Ef=0,Ui=[],Ii=0,Eo=null,Or=1,Fr="";function qs(n,e){fa[da++]=Ef,fa[da++]=Mf,Mf=n,Ef=e}function Ly(n,e,t){Ui[Ii++]=Or,Ui[Ii++]=Fr,Ui[Ii++]=Eo,Eo=n;var i=Or;n=Fr;var r=32-or(i)-1;i&=~(1<<r),t+=1;var s=32-or(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Or=1<<32-or(e)+r|t<<r|i,Fr=s+n}else Or=1<<s|t<<r|i,Fr=n}function jm(n){n.return!==null&&(qs(n,1),Ly(n,1,0))}function Xm(n){for(;n===Mf;)Mf=fa[--da],fa[da]=null,Ef=fa[--da],fa[da]=null;for(;n===Eo;)Eo=Ui[--Ii],Ui[Ii]=null,Fr=Ui[--Ii],Ui[Ii]=null,Or=Ui[--Ii],Ui[Ii]=null}var Ei=null,Si=null,Dt=!1,nr=null;function Ny(n,e){var t=Bi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function k0(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Ei=n,Si=ys(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Ei=n,Si=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Eo!==null?{id:Or,overflow:Fr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Bi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Ei=n,Si=null,!0):!1;default:return!1}}function Mp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ep(n){if(Dt){var e=Si;if(e){var t=e;if(!k0(n,e)){if(Mp(n))throw Error(ae(418));e=ys(t.nextSibling);var i=Ei;e&&k0(n,e)?Ny(i,t):(n.flags=n.flags&-4097|2,Dt=!1,Ei=n)}}else{if(Mp(n))throw Error(ae(418));n.flags=n.flags&-4097|2,Dt=!1,Ei=n}}}function z0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Ei=n}function Ju(n){if(n!==Ei)return!1;if(!Dt)return z0(n),Dt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!vp(n.type,n.memoizedProps)),e&&(e=Si)){if(Mp(n))throw Dy(),Error(ae(418));for(;e;)Ny(n,e),e=ys(e.nextSibling)}if(z0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ae(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Si=ys(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Si=null}}else Si=Ei?ys(n.stateNode.nextSibling):null;return!0}function Dy(){for(var n=Si;n;)n=ys(n.nextSibling)}function Oa(){Si=Ei=null,Dt=!1}function $m(n){nr===null?nr=[n]:nr.push(n)}var Hw=Kr.ReactCurrentBatchConfig;function cl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ae(309));var i=t.stateNode}if(!i)throw Error(ae(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ae(284));if(!t._owner)throw Error(ae(290,n))}return n}function ec(n,e){throw n=Object.prototype.toString.call(e),Error(ae(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function B0(n){var e=n._init;return e(n._payload)}function Uy(n){function e(d,v){if(n){var x=d.deletions;x===null?(d.deletions=[v],d.flags|=16):x.push(v)}}function t(d,v){if(!n)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=ws(d,v),d.index=0,d.sibling=null,d}function s(d,v,x){return d.index=x,n?(x=d.alternate,x!==null?(x=x.index,x<v?(d.flags|=2,v):x):(d.flags|=2,v)):(d.flags|=1048576,v)}function o(d){return n&&d.alternate===null&&(d.flags|=2),d}function a(d,v,x,y){return v===null||v.tag!==6?(v=Jd(x,d.mode,y),v.return=d,v):(v=r(v,x),v.return=d,v)}function l(d,v,x,y){var M=x.type;return M===sa?c(d,v,x.props.children,y,x.key):v!==null&&(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===rs&&B0(M)===v.type)?(y=r(v,x.props),y.ref=cl(d,v,x),y.return=d,y):(y=Jc(x.type,x.key,x.props,null,d.mode,y),y.ref=cl(d,v,x),y.return=d,y)}function u(d,v,x,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=eh(x,d.mode,y),v.return=d,v):(v=r(v,x.children||[]),v.return=d,v)}function c(d,v,x,y,M){return v===null||v.tag!==7?(v=co(x,d.mode,y,M),v.return=d,v):(v=r(v,x),v.return=d,v)}function f(d,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Jd(""+v,d.mode,x),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Gu:return x=Jc(v.type,v.key,v.props,null,d.mode,x),x.ref=cl(d,null,v),x.return=d,x;case ra:return v=eh(v,d.mode,x),v.return=d,v;case rs:var y=v._init;return f(d,y(v._payload),x)}if(El(v)||sl(v))return v=co(v,d.mode,x,null),v.return=d,v;ec(d,v)}return null}function h(d,v,x,y){var M=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return M!==null?null:a(d,v,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Gu:return x.key===M?l(d,v,x,y):null;case ra:return x.key===M?u(d,v,x,y):null;case rs:return M=x._init,h(d,v,M(x._payload),y)}if(El(x)||sl(x))return M!==null?null:c(d,v,x,y,null);ec(d,x)}return null}function p(d,v,x,y,M){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(x)||null,a(v,d,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Gu:return d=d.get(y.key===null?x:y.key)||null,l(v,d,y,M);case ra:return d=d.get(y.key===null?x:y.key)||null,u(v,d,y,M);case rs:var w=y._init;return p(d,v,x,w(y._payload),M)}if(El(y)||sl(y))return d=d.get(x)||null,c(v,d,y,M,null);ec(v,y)}return null}function _(d,v,x,y){for(var M=null,w=null,E=v,R=v=0,S=null;E!==null&&R<x.length;R++){E.index>R?(S=E,E=null):S=E.sibling;var T=h(d,E,x[R],y);if(T===null){E===null&&(E=S);break}n&&E&&T.alternate===null&&e(d,E),v=s(T,v,R),w===null?M=T:w.sibling=T,w=T,E=S}if(R===x.length)return t(d,E),Dt&&qs(d,R),M;if(E===null){for(;R<x.length;R++)E=f(d,x[R],y),E!==null&&(v=s(E,v,R),w===null?M=E:w.sibling=E,w=E);return Dt&&qs(d,R),M}for(E=i(d,E);R<x.length;R++)S=p(E,d,R,x[R],y),S!==null&&(n&&S.alternate!==null&&E.delete(S.key===null?R:S.key),v=s(S,v,R),w===null?M=S:w.sibling=S,w=S);return n&&E.forEach(function(z){return e(d,z)}),Dt&&qs(d,R),M}function m(d,v,x,y){var M=sl(x);if(typeof M!="function")throw Error(ae(150));if(x=M.call(x),x==null)throw Error(ae(151));for(var w=M=null,E=v,R=v=0,S=null,T=x.next();E!==null&&!T.done;R++,T=x.next()){E.index>R?(S=E,E=null):S=E.sibling;var z=h(d,E,T.value,y);if(z===null){E===null&&(E=S);break}n&&E&&z.alternate===null&&e(d,E),v=s(z,v,R),w===null?M=z:w.sibling=z,w=z,E=S}if(T.done)return t(d,E),Dt&&qs(d,R),M;if(E===null){for(;!T.done;R++,T=x.next())T=f(d,T.value,y),T!==null&&(v=s(T,v,R),w===null?M=T:w.sibling=T,w=T);return Dt&&qs(d,R),M}for(E=i(d,E);!T.done;R++,T=x.next())T=p(E,d,R,T.value,y),T!==null&&(n&&T.alternate!==null&&E.delete(T.key===null?R:T.key),v=s(T,v,R),w===null?M=T:w.sibling=T,w=T);return n&&E.forEach(function(U){return e(d,U)}),Dt&&qs(d,R),M}function g(d,v,x,y){if(typeof x=="object"&&x!==null&&x.type===sa&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Gu:e:{for(var M=x.key,w=v;w!==null;){if(w.key===M){if(M=x.type,M===sa){if(w.tag===7){t(d,w.sibling),v=r(w,x.props.children),v.return=d,d=v;break e}}else if(w.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===rs&&B0(M)===w.type){t(d,w.sibling),v=r(w,x.props),v.ref=cl(d,w,x),v.return=d,d=v;break e}t(d,w);break}else e(d,w);w=w.sibling}x.type===sa?(v=co(x.props.children,d.mode,y,x.key),v.return=d,d=v):(y=Jc(x.type,x.key,x.props,null,d.mode,y),y.ref=cl(d,v,x),y.return=d,d=y)}return o(d);case ra:e:{for(w=x.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(d,v.sibling),v=r(v,x.children||[]),v.return=d,d=v;break e}else{t(d,v);break}else e(d,v);v=v.sibling}v=eh(x,d.mode,y),v.return=d,d=v}return o(d);case rs:return w=x._init,g(d,v,w(x._payload),y)}if(El(x))return _(d,v,x,y);if(sl(x))return m(d,v,x,y);ec(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(d,v.sibling),v=r(v,x),v.return=d,d=v):(t(d,v),v=Jd(x,d.mode,y),v.return=d,d=v),o(d)):t(d,v)}return g}var Fa=Uy(!0),Iy=Uy(!1),wf=ks(null),Tf=null,ha=null,Ym=null;function qm(){Ym=ha=Tf=null}function Km(n){var e=wf.current;Lt(wf),n._currentValue=e}function wp(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function wa(n,e){Tf=n,Ym=ha=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(ei=!0),n.firstContext=null)}function $i(n){var e=n._currentValue;if(Ym!==n)if(n={context:n,memoizedValue:e,next:null},ha===null){if(Tf===null)throw Error(ae(308));ha=n,Tf.dependencies={lanes:0,firstContext:n}}else ha=ha.next=n;return e}var so=null;function Zm(n){so===null?so=[n]:so.push(n)}function Oy(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Zm(e)):(t.next=r.next,r.next=t),e.interleaved=t,jr(n,i)}function jr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ss=!1;function Qm(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fy(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Hr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ss(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,ft&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,jr(n,t)}return r=i.interleaved,r===null?(e.next=e,Zm(i)):(e.next=r.next,r.next=e),i.interleaved=e,jr(n,t)}function $c(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Fm(n,t)}}function H0(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function bf(n,e,t,i){var r=n.updateQueue;ss=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,m=a;switch(h=e,p=t,m.tag){case 1:if(_=m.payload,typeof _=="function"){f=_.call(p,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=m.payload,h=typeof _=="function"?_.call(p,f,h):_,h==null)break e;f=Ht({},f,h);break e;case 2:ss=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);To|=o,n.lanes=o,n.memoizedState=f}}function V0(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var Iu={},xr=ks(Iu),pu=ks(Iu),mu=ks(Iu);function oo(n){if(n===Iu)throw Error(ae(174));return n}function Jm(n,e){switch(bt(mu,e),bt(pu,n),bt(xr,Iu),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:rp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=rp(e,n)}Lt(xr),bt(xr,e)}function ka(){Lt(xr),Lt(pu),Lt(mu)}function ky(n){oo(mu.current);var e=oo(xr.current),t=rp(e,n.type);e!==t&&(bt(pu,n),bt(xr,t))}function eg(n){pu.current===n&&(Lt(xr),Lt(pu))}var Ft=ks(0);function Af(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $d=[];function tg(){for(var n=0;n<$d.length;n++)$d[n]._workInProgressVersionPrimary=null;$d.length=0}var Yc=Kr.ReactCurrentDispatcher,Yd=Kr.ReactCurrentBatchConfig,wo=0,Bt=null,sn=null,hn=null,Cf=!1,Bl=!1,gu=0,Vw=0;function wn(){throw Error(ae(321))}function ng(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!lr(n[t],e[t]))return!1;return!0}function ig(n,e,t,i,r,s){if(wo=s,Bt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Yc.current=n===null||n.memoizedState===null?Xw:$w,n=t(i,r),Bl){s=0;do{if(Bl=!1,gu=0,25<=s)throw Error(ae(301));s+=1,hn=sn=null,e.updateQueue=null,Yc.current=Yw,n=t(i,r)}while(Bl)}if(Yc.current=Rf,e=sn!==null&&sn.next!==null,wo=0,hn=sn=Bt=null,Cf=!1,e)throw Error(ae(300));return n}function rg(){var n=gu!==0;return gu=0,n}function cr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?Bt.memoizedState=hn=n:hn=hn.next=n,hn}function Yi(){if(sn===null){var n=Bt.alternate;n=n!==null?n.memoizedState:null}else n=sn.next;var e=hn===null?Bt.memoizedState:hn.next;if(e!==null)hn=e,sn=n;else{if(n===null)throw Error(ae(310));sn=n,n={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},hn===null?Bt.memoizedState=hn=n:hn=hn.next=n}return hn}function _u(n,e){return typeof e=="function"?e(n):e}function qd(n){var e=Yi(),t=e.queue;if(t===null)throw Error(ae(311));t.lastRenderedReducer=n;var i=sn,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((wo&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Bt.lanes|=c,To|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,lr(i,e.memoizedState)||(ei=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Bt.lanes|=s,To|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Kd(n){var e=Yi(),t=e.queue;if(t===null)throw Error(ae(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);lr(s,e.memoizedState)||(ei=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function zy(){}function By(n,e){var t=Bt,i=Yi(),r=e(),s=!lr(i.memoizedState,r);if(s&&(i.memoizedState=r,ei=!0),i=i.queue,sg(Gy.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||hn!==null&&hn.memoizedState.tag&1){if(t.flags|=2048,vu(9,Vy.bind(null,t,i,r,e),void 0,null),pn===null)throw Error(ae(349));wo&30||Hy(t,e,r)}return r}function Hy(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Bt.updateQueue,e===null?(e={lastEffect:null,stores:null},Bt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Vy(n,e,t,i){e.value=t,e.getSnapshot=i,Wy(e)&&jy(n)}function Gy(n,e,t){return t(function(){Wy(e)&&jy(n)})}function Wy(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!lr(n,t)}catch{return!0}}function jy(n){var e=jr(n,1);e!==null&&ar(e,n,1,-1)}function G0(n){var e=cr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_u,lastRenderedState:n},e.queue=n,n=n.dispatch=jw.bind(null,Bt,n),[e.memoizedState,n]}function vu(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Bt.updateQueue,e===null?(e={lastEffect:null,stores:null},Bt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Xy(){return Yi().memoizedState}function qc(n,e,t,i){var r=cr();Bt.flags|=n,r.memoizedState=vu(1|e,t,void 0,i===void 0?null:i)}function ad(n,e,t,i){var r=Yi();i=i===void 0?null:i;var s=void 0;if(sn!==null){var o=sn.memoizedState;if(s=o.destroy,i!==null&&ng(i,o.deps)){r.memoizedState=vu(e,t,s,i);return}}Bt.flags|=n,r.memoizedState=vu(1|e,t,s,i)}function W0(n,e){return qc(8390656,8,n,e)}function sg(n,e){return ad(2048,8,n,e)}function $y(n,e){return ad(4,2,n,e)}function Yy(n,e){return ad(4,4,n,e)}function qy(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Ky(n,e,t){return t=t!=null?t.concat([n]):null,ad(4,4,qy.bind(null,e,n),t)}function og(){}function Zy(n,e){var t=Yi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&ng(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Qy(n,e){var t=Yi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&ng(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Jy(n,e,t){return wo&21?(lr(t,e)||(t=ry(),Bt.lanes|=t,To|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,ei=!0),n.memoizedState=t)}function Gw(n,e){var t=_t;_t=t!==0&&4>t?t:4,n(!0);var i=Yd.transition;Yd.transition={};try{n(!1),e()}finally{_t=t,Yd.transition=i}}function eS(){return Yi().memoizedState}function Ww(n,e,t){var i=Es(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},tS(n))nS(e,t);else if(t=Oy(n,e,t,i),t!==null){var r=Xn();ar(t,n,i,r),iS(t,e,i)}}function jw(n,e,t){var i=Es(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(tS(n))nS(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,lr(a,o)){var l=e.interleaved;l===null?(r.next=r,Zm(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Oy(n,e,r,i),t!==null&&(r=Xn(),ar(t,n,i,r),iS(t,e,i))}}function tS(n){var e=n.alternate;return n===Bt||e!==null&&e===Bt}function nS(n,e){Bl=Cf=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function iS(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Fm(n,t)}}var Rf={readContext:$i,useCallback:wn,useContext:wn,useEffect:wn,useImperativeHandle:wn,useInsertionEffect:wn,useLayoutEffect:wn,useMemo:wn,useReducer:wn,useRef:wn,useState:wn,useDebugValue:wn,useDeferredValue:wn,useTransition:wn,useMutableSource:wn,useSyncExternalStore:wn,useId:wn,unstable_isNewReconciler:!1},Xw={readContext:$i,useCallback:function(n,e){return cr().memoizedState=[n,e===void 0?null:e],n},useContext:$i,useEffect:W0,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,qc(4194308,4,qy.bind(null,e,n),t)},useLayoutEffect:function(n,e){return qc(4194308,4,n,e)},useInsertionEffect:function(n,e){return qc(4,2,n,e)},useMemo:function(n,e){var t=cr();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=cr();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=Ww.bind(null,Bt,n),[i.memoizedState,n]},useRef:function(n){var e=cr();return n={current:n},e.memoizedState=n},useState:G0,useDebugValue:og,useDeferredValue:function(n){return cr().memoizedState=n},useTransition:function(){var n=G0(!1),e=n[0];return n=Gw.bind(null,n[1]),cr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Bt,r=cr();if(Dt){if(t===void 0)throw Error(ae(407));t=t()}else{if(t=e(),pn===null)throw Error(ae(349));wo&30||Hy(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,W0(Gy.bind(null,i,s,n),[n]),i.flags|=2048,vu(9,Vy.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=cr(),e=pn.identifierPrefix;if(Dt){var t=Fr,i=Or;t=(i&~(1<<32-or(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=gu++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Vw++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},$w={readContext:$i,useCallback:Zy,useContext:$i,useEffect:sg,useImperativeHandle:Ky,useInsertionEffect:$y,useLayoutEffect:Yy,useMemo:Qy,useReducer:qd,useRef:Xy,useState:function(){return qd(_u)},useDebugValue:og,useDeferredValue:function(n){var e=Yi();return Jy(e,sn.memoizedState,n)},useTransition:function(){var n=qd(_u)[0],e=Yi().memoizedState;return[n,e]},useMutableSource:zy,useSyncExternalStore:By,useId:eS,unstable_isNewReconciler:!1},Yw={readContext:$i,useCallback:Zy,useContext:$i,useEffect:sg,useImperativeHandle:Ky,useInsertionEffect:$y,useLayoutEffect:Yy,useMemo:Qy,useReducer:Kd,useRef:Xy,useState:function(){return Kd(_u)},useDebugValue:og,useDeferredValue:function(n){var e=Yi();return sn===null?e.memoizedState=n:Jy(e,sn.memoizedState,n)},useTransition:function(){var n=Kd(_u)[0],e=Yi().memoizedState;return[n,e]},useMutableSource:zy,useSyncExternalStore:By,useId:eS,unstable_isNewReconciler:!1};function er(n,e){if(n&&n.defaultProps){e=Ht({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Tp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Ht({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var ld={isMounted:function(n){return(n=n._reactInternals)?Uo(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Xn(),r=Es(n),s=Hr(i,r);s.payload=e,t!=null&&(s.callback=t),e=Ss(n,s,r),e!==null&&(ar(e,n,r,i),$c(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Xn(),r=Es(n),s=Hr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Ss(n,s,r),e!==null&&(ar(e,n,r,i),$c(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Xn(),i=Es(n),r=Hr(t,i);r.tag=2,e!=null&&(r.callback=e),e=Ss(n,r,i),e!==null&&(ar(e,n,i,t),$c(e,n,i))}};function j0(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!cu(t,i)||!cu(r,s):!0}function rS(n,e,t){var i=!1,r=Ns,s=e.contextType;return typeof s=="object"&&s!==null?s=$i(s):(r=ni(e)?Mo:Un.current,i=e.contextTypes,s=(i=i!=null)?Ia(n,r):Ns),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ld,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function X0(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&ld.enqueueReplaceState(e,e.state,null)}function bp(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Qm(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=$i(s):(s=ni(e)?Mo:Un.current,r.context=Ia(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Tp(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ld.enqueueReplaceState(r,r.state,null),bf(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function za(n,e){try{var t="",i=e;do t+=ME(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Zd(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Ap(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var qw=typeof WeakMap=="function"?WeakMap:Map;function sS(n,e,t){t=Hr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Lf||(Lf=!0,Fp=i),Ap(n,e)},t}function oS(n,e,t){t=Hr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Ap(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Ap(n,e),typeof i!="function"&&(Ms===null?Ms=new Set([this]):Ms.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function $0(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new qw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=uT.bind(null,n,e,t),e.then(n,n))}function Y0(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function q0(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Hr(-1,1),e.tag=2,Ss(t,e,1))),t.lanes|=1),n)}var Kw=Kr.ReactCurrentOwner,ei=!1;function Bn(n,e,t,i){e.child=n===null?Iy(e,null,t,i):Fa(e,n.child,t,i)}function K0(n,e,t,i,r){t=t.render;var s=e.ref;return wa(e,r),i=ig(n,e,t,i,s,r),t=rg(),n!==null&&!ei?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Xr(n,e,r)):(Dt&&t&&jm(e),e.flags|=1,Bn(n,e,i,r),e.child)}function Z0(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!pg(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,aS(n,e,s,i,r)):(n=Jc(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:cu,t(o,i)&&n.ref===e.ref)return Xr(n,e,r)}return e.flags|=1,n=ws(s,i),n.ref=e.ref,n.return=e,e.child=n}function aS(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(cu(s,i)&&n.ref===e.ref)if(ei=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(ei=!0);else return e.lanes=n.lanes,Xr(n,e,r)}return Cp(n,e,t,i,r)}function lS(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},bt(ma,pi),pi|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,bt(ma,pi),pi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,bt(ma,pi),pi|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,bt(ma,pi),pi|=i;return Bn(n,e,r,t),e.child}function uS(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Cp(n,e,t,i,r){var s=ni(t)?Mo:Un.current;return s=Ia(e,s),wa(e,r),t=ig(n,e,t,i,s,r),i=rg(),n!==null&&!ei?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Xr(n,e,r)):(Dt&&i&&jm(e),e.flags|=1,Bn(n,e,t,r),e.child)}function Q0(n,e,t,i,r){if(ni(t)){var s=!0;Sf(e)}else s=!1;if(wa(e,r),e.stateNode===null)Kc(n,e),rS(e,t,i),bp(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=$i(u):(u=ni(t)?Mo:Un.current,u=Ia(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&X0(e,o,i,u),ss=!1;var h=e.memoizedState;o.state=h,bf(e,i,o,r),l=e.memoizedState,a!==i||h!==l||ti.current||ss?(typeof c=="function"&&(Tp(e,t,c,i),l=e.memoizedState),(a=ss||j0(e,t,a,i,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Fy(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:er(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=$i(l):(l=ni(t)?Mo:Un.current,l=Ia(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&X0(e,o,i,l),ss=!1,h=e.memoizedState,o.state=h,bf(e,i,o,r);var _=e.memoizedState;a!==f||h!==_||ti.current||ss?(typeof p=="function"&&(Tp(e,t,p,i),_=e.memoizedState),(u=ss||j0(e,t,u,i,h,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return Rp(n,e,t,i,s,r)}function Rp(n,e,t,i,r,s){uS(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&F0(e,t,!1),Xr(n,e,s);i=e.stateNode,Kw.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Fa(e,n.child,null,s),e.child=Fa(e,null,a,s)):Bn(n,e,a,s),e.memoizedState=i.state,r&&F0(e,t,!0),e.child}function cS(n){var e=n.stateNode;e.pendingContext?O0(n,e.pendingContext,e.pendingContext!==e.context):e.context&&O0(n,e.context,!1),Jm(n,e.containerInfo)}function J0(n,e,t,i,r){return Oa(),$m(r),e.flags|=256,Bn(n,e,t,i),e.child}var Pp={dehydrated:null,treeContext:null,retryLane:0};function Lp(n){return{baseLanes:n,cachePool:null,transitions:null}}function fS(n,e,t){var i=e.pendingProps,r=Ft.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),bt(Ft,r&1),n===null)return Ep(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=fd(o,i,0,null),n=co(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Lp(t),e.memoizedState=Pp,n):ag(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Zw(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ws(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ws(a,s):(s=co(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Lp(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Pp,i}return s=n.child,n=s.sibling,i=ws(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function ag(n,e){return e=fd({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function tc(n,e,t,i){return i!==null&&$m(i),Fa(e,n.child,null,t),n=ag(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Zw(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Zd(Error(ae(422))),tc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=fd({mode:"visible",children:i.children},r,0,null),s=co(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Fa(e,n.child,null,o),e.child.memoizedState=Lp(o),e.memoizedState=Pp,s);if(!(e.mode&1))return tc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ae(419)),i=Zd(s,i,void 0),tc(n,e,o,i)}if(a=(o&n.childLanes)!==0,ei||a){if(i=pn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,jr(n,r),ar(i,n,r,-1))}return hg(),i=Zd(Error(ae(421))),tc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=cT.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Si=ys(r.nextSibling),Ei=e,Dt=!0,nr=null,n!==null&&(Ui[Ii++]=Or,Ui[Ii++]=Fr,Ui[Ii++]=Eo,Or=n.id,Fr=n.overflow,Eo=e),e=ag(e,i.children),e.flags|=4096,e)}function e_(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),wp(n.return,e,t)}function Qd(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function dS(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Bn(n,e,i.children,t),i=Ft.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&e_(n,t,e);else if(n.tag===19)e_(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(bt(Ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Af(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Qd(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Af(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Qd(e,!0,t,null,s);break;case"together":Qd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Kc(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Xr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),To|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ae(153));if(e.child!==null){for(n=e.child,t=ws(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=ws(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Qw(n,e,t){switch(e.tag){case 3:cS(e),Oa();break;case 5:ky(e);break;case 1:ni(e.type)&&Sf(e);break;case 4:Jm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;bt(wf,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(bt(Ft,Ft.current&1),e.flags|=128,null):t&e.child.childLanes?fS(n,e,t):(bt(Ft,Ft.current&1),n=Xr(n,e,t),n!==null?n.sibling:null);bt(Ft,Ft.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return dS(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),bt(Ft,Ft.current),i)break;return null;case 22:case 23:return e.lanes=0,lS(n,e,t)}return Xr(n,e,t)}var hS,Np,pS,mS;hS=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Np=function(){};pS=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,oo(xr.current);var s=null;switch(t){case"input":r=ep(n,r),i=ep(n,i),s=[];break;case"select":r=Ht({},r,{value:void 0}),i=Ht({},i,{value:void 0}),s=[];break;case"textarea":r=ip(n,r),i=ip(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=xf)}sp(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(iu.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(iu.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Rt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};mS=function(n,e,t,i){t!==i&&(e.flags|=4)};function fl(n,e){if(!Dt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Tn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function Jw(n,e,t){var i=e.pendingProps;switch(Xm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(e),null;case 1:return ni(e.type)&&yf(),Tn(e),null;case 3:return i=e.stateNode,ka(),Lt(ti),Lt(Un),tg(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Ju(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,nr!==null&&(Bp(nr),nr=null))),Np(n,e),Tn(e),null;case 5:eg(e);var r=oo(mu.current);if(t=e.type,n!==null&&e.stateNode!=null)pS(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return Tn(e),null}if(n=oo(xr.current),Ju(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[pr]=e,i[hu]=s,n=(e.mode&1)!==0,t){case"dialog":Rt("cancel",i),Rt("close",i);break;case"iframe":case"object":case"embed":Rt("load",i);break;case"video":case"audio":for(r=0;r<Tl.length;r++)Rt(Tl[r],i);break;case"source":Rt("error",i);break;case"img":case"image":case"link":Rt("error",i),Rt("load",i);break;case"details":Rt("toggle",i);break;case"input":u0(i,s),Rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Rt("invalid",i);break;case"textarea":f0(i,s),Rt("invalid",i)}sp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Qu(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Qu(i.textContent,a,n),r=["children",""+a]):iu.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Rt("scroll",i)}switch(t){case"input":Wu(i),c0(i,s,!0);break;case"textarea":Wu(i),d0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=xf)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Gx(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[pr]=e,n[hu]=i,hS(n,e,!1,!1),e.stateNode=n;e:{switch(o=op(t,i),t){case"dialog":Rt("cancel",n),Rt("close",n),r=i;break;case"iframe":case"object":case"embed":Rt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Tl.length;r++)Rt(Tl[r],n);r=i;break;case"source":Rt("error",n),r=i;break;case"img":case"image":case"link":Rt("error",n),Rt("load",n),r=i;break;case"details":Rt("toggle",n),r=i;break;case"input":u0(n,i),r=ep(n,i),Rt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Ht({},i,{value:void 0}),Rt("invalid",n);break;case"textarea":f0(n,i),r=ip(n,i),Rt("invalid",n);break;default:r=i}sp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Xx(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Wx(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&ru(n,l):typeof l=="number"&&ru(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(iu.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Rt("scroll",n):l!=null&&Lm(n,s,l,o))}switch(t){case"input":Wu(n),c0(n,i,!1);break;case"textarea":Wu(n),d0(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Ls(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?ya(n,!!i.multiple,s,!1):i.defaultValue!=null&&ya(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=xf)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Tn(e),null;case 6:if(n&&e.stateNode!=null)mS(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(t=oo(mu.current),oo(xr.current),Ju(e)){if(i=e.stateNode,t=e.memoizedProps,i[pr]=e,(s=i.nodeValue!==t)&&(n=Ei,n!==null))switch(n.tag){case 3:Qu(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Qu(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[pr]=e,e.stateNode=i}return Tn(e),null;case 13:if(Lt(Ft),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Dt&&Si!==null&&e.mode&1&&!(e.flags&128))Dy(),Oa(),e.flags|=98560,s=!1;else if(s=Ju(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[pr]=e}else Oa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Tn(e),s=!1}else nr!==null&&(Bp(nr),nr=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Ft.current&1?an===0&&(an=3):hg())),e.updateQueue!==null&&(e.flags|=4),Tn(e),null);case 4:return ka(),Np(n,e),n===null&&fu(e.stateNode.containerInfo),Tn(e),null;case 10:return Km(e.type._context),Tn(e),null;case 17:return ni(e.type)&&yf(),Tn(e),null;case 19:if(Lt(Ft),s=e.memoizedState,s===null)return Tn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)fl(s,!1);else{if(an!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Af(n),o!==null){for(e.flags|=128,fl(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return bt(Ft,Ft.current&1|2),e.child}n=n.sibling}s.tail!==null&&Xt()>Ba&&(e.flags|=128,i=!0,fl(s,!1),e.lanes=4194304)}else{if(!i)if(n=Af(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),fl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Dt)return Tn(e),null}else 2*Xt()-s.renderingStartTime>Ba&&t!==1073741824&&(e.flags|=128,i=!0,fl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Xt(),e.sibling=null,t=Ft.current,bt(Ft,i?t&1|2:t&1),e):(Tn(e),null);case 22:case 23:return dg(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?pi&1073741824&&(Tn(e),e.subtreeFlags&6&&(e.flags|=8192)):Tn(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function eT(n,e){switch(Xm(e),e.tag){case 1:return ni(e.type)&&yf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return ka(),Lt(ti),Lt(Un),tg(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return eg(e),null;case 13:if(Lt(Ft),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));Oa()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Lt(Ft),null;case 4:return ka(),null;case 10:return Km(e.type._context),null;case 22:case 23:return dg(),null;case 24:return null;default:return null}}var nc=!1,Pn=!1,tT=typeof WeakSet=="function"?WeakSet:Set,Se=null;function pa(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Gt(n,e,i)}else t.current=null}function Dp(n,e,t){try{t()}catch(i){Gt(n,e,i)}}var t_=!1;function nT(n,e){if(gp=gf,n=yy(),Wm(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=n,h=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(_p={focusedElem:n,selectionRange:t},gf=!1,Se=e;Se!==null;)if(e=Se,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Se=n;else for(;Se!==null;){e=Se;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var m=_.memoizedProps,g=_.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?m:er(e.type,m),g);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(y){Gt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}return _=t_,t_=!1,_}function Hl(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Dp(e,t,s)}r=r.next}while(r!==i)}}function ud(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Up(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function gS(n){var e=n.alternate;e!==null&&(n.alternate=null,gS(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[pr],delete e[hu],delete e[yp],delete e[kw],delete e[zw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function _S(n){return n.tag===5||n.tag===3||n.tag===4}function n_(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||_S(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ip(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=xf));else if(i!==4&&(n=n.child,n!==null))for(Ip(n,e,t),n=n.sibling;n!==null;)Ip(n,e,t),n=n.sibling}function Op(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Op(n,e,t),n=n.sibling;n!==null;)Op(n,e,t),n=n.sibling}var gn=null,tr=!1;function Zr(n,e,t){for(t=t.child;t!==null;)vS(n,e,t),t=t.sibling}function vS(n,e,t){if(vr&&typeof vr.onCommitFiberUnmount=="function")try{vr.onCommitFiberUnmount(td,t)}catch{}switch(t.tag){case 5:Pn||pa(t,e);case 6:var i=gn,r=tr;gn=null,Zr(n,e,t),gn=i,tr=r,gn!==null&&(tr?(n=gn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):gn.removeChild(t.stateNode));break;case 18:gn!==null&&(tr?(n=gn,t=t.stateNode,n.nodeType===8?jd(n.parentNode,t):n.nodeType===1&&jd(n,t),lu(n)):jd(gn,t.stateNode));break;case 4:i=gn,r=tr,gn=t.stateNode.containerInfo,tr=!0,Zr(n,e,t),gn=i,tr=r;break;case 0:case 11:case 14:case 15:if(!Pn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Dp(t,e,o),r=r.next}while(r!==i)}Zr(n,e,t);break;case 1:if(!Pn&&(pa(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Gt(t,e,a)}Zr(n,e,t);break;case 21:Zr(n,e,t);break;case 22:t.mode&1?(Pn=(i=Pn)||t.memoizedState!==null,Zr(n,e,t),Pn=i):Zr(n,e,t);break;default:Zr(n,e,t)}}function i_(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new tT),e.forEach(function(i){var r=fT.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function qi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:gn=a.stateNode,tr=!1;break e;case 3:gn=a.stateNode.containerInfo,tr=!0;break e;case 4:gn=a.stateNode.containerInfo,tr=!0;break e}a=a.return}if(gn===null)throw Error(ae(160));vS(s,o,r),gn=null,tr=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Gt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)xS(e,n),e=e.sibling}function xS(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(qi(e,n),ur(n),i&4){try{Hl(3,n,n.return),ud(3,n)}catch(m){Gt(n,n.return,m)}try{Hl(5,n,n.return)}catch(m){Gt(n,n.return,m)}}break;case 1:qi(e,n),ur(n),i&512&&t!==null&&pa(t,t.return);break;case 5:if(qi(e,n),ur(n),i&512&&t!==null&&pa(t,t.return),n.flags&32){var r=n.stateNode;try{ru(r,"")}catch(m){Gt(n,n.return,m)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Hx(r,s),op(a,o);var u=op(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?Xx(r,f):c==="dangerouslySetInnerHTML"?Wx(r,f):c==="children"?ru(r,f):Lm(r,c,f,u)}switch(a){case"input":tp(r,s);break;case"textarea":Vx(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ya(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?ya(r,!!s.multiple,s.defaultValue,!0):ya(r,!!s.multiple,s.multiple?[]:"",!1))}r[hu]=s}catch(m){Gt(n,n.return,m)}}break;case 6:if(qi(e,n),ur(n),i&4){if(n.stateNode===null)throw Error(ae(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(m){Gt(n,n.return,m)}}break;case 3:if(qi(e,n),ur(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{lu(e.containerInfo)}catch(m){Gt(n,n.return,m)}break;case 4:qi(e,n),ur(n);break;case 13:qi(e,n),ur(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(cg=Xt())),i&4&&i_(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Pn=(u=Pn)||c,qi(e,n),Pn=u):qi(e,n),ur(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Se=n,c=n.child;c!==null;){for(f=Se=c;Se!==null;){switch(h=Se,p=h.child,h.tag){case 0:case 11:case 14:case 15:Hl(4,h,h.return);break;case 1:pa(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(m){Gt(i,t,m)}}break;case 5:pa(h,h.return);break;case 22:if(h.memoizedState!==null){s_(f);continue}}p!==null?(p.return=h,Se=p):s_(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=jx("display",o))}catch(m){Gt(n,n.return,m)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(m){Gt(n,n.return,m)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:qi(e,n),ur(n),i&4&&i_(n);break;case 21:break;default:qi(e,n),ur(n)}}function ur(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(_S(t)){var i=t;break e}t=t.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ru(r,""),i.flags&=-33);var s=n_(n);Op(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=n_(n);Ip(n,a,o);break;default:throw Error(ae(161))}}catch(l){Gt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function iT(n,e,t){Se=n,yS(n)}function yS(n,e,t){for(var i=(n.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||nc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Pn;a=nc;var u=Pn;if(nc=o,(Pn=l)&&!u)for(Se=r;Se!==null;)o=Se,l=o.child,o.tag===22&&o.memoizedState!==null?o_(r):l!==null?(l.return=o,Se=l):o_(r);for(;s!==null;)Se=s,yS(s),s=s.sibling;Se=r,nc=a,Pn=u}r_(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):r_(n)}}function r_(n){for(;Se!==null;){var e=Se;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Pn||ud(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Pn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:er(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&V0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}V0(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&lu(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}Pn||e.flags&512&&Up(e)}catch(h){Gt(e,e.return,h)}}if(e===n){Se=null;break}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}}function s_(n){for(;Se!==null;){var e=Se;if(e===n){Se=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Se=t;break}Se=e.return}}function o_(n){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{ud(4,e)}catch(l){Gt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Gt(e,r,l)}}var s=e.return;try{Up(e)}catch(l){Gt(e,s,l)}break;case 5:var o=e.return;try{Up(e)}catch(l){Gt(e,o,l)}}}catch(l){Gt(e,e.return,l)}if(e===n){Se=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Se=a;break}Se=e.return}}var rT=Math.ceil,Pf=Kr.ReactCurrentDispatcher,lg=Kr.ReactCurrentOwner,Wi=Kr.ReactCurrentBatchConfig,ft=0,pn=null,en=null,yn=0,pi=0,ma=ks(0),an=0,xu=null,To=0,cd=0,ug=0,Vl=null,Qn=null,cg=0,Ba=1/0,Pr=null,Lf=!1,Fp=null,Ms=null,ic=!1,us=null,Nf=0,Gl=0,kp=null,Zc=-1,Qc=0;function Xn(){return ft&6?Xt():Zc!==-1?Zc:Zc=Xt()}function Es(n){return n.mode&1?ft&2&&yn!==0?yn&-yn:Hw.transition!==null?(Qc===0&&(Qc=ry()),Qc):(n=_t,n!==0||(n=window.event,n=n===void 0?16:fy(n.type)),n):1}function ar(n,e,t,i){if(50<Gl)throw Gl=0,kp=null,Error(ae(185));Nu(n,t,i),(!(ft&2)||n!==pn)&&(n===pn&&(!(ft&2)&&(cd|=t),an===4&&as(n,yn)),ii(n,i),t===1&&ft===0&&!(e.mode&1)&&(Ba=Xt()+500,od&&zs()))}function ii(n,e){var t=n.callbackNode;HE(n,e);var i=mf(n,n===pn?yn:0);if(i===0)t!==null&&m0(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&m0(t),e===1)n.tag===0?Bw(a_.bind(null,n)):Py(a_.bind(null,n)),Ow(function(){!(ft&6)&&zs()}),t=null;else{switch(sy(i)){case 1:t=Om;break;case 4:t=ny;break;case 16:t=pf;break;case 536870912:t=iy;break;default:t=pf}t=CS(t,SS.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function SS(n,e){if(Zc=-1,Qc=0,ft&6)throw Error(ae(327));var t=n.callbackNode;if(Ta()&&n.callbackNode!==t)return null;var i=mf(n,n===pn?yn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Df(n,i);else{e=i;var r=ft;ft|=2;var s=ES();(pn!==n||yn!==e)&&(Pr=null,Ba=Xt()+500,uo(n,e));do try{aT();break}catch(a){MS(n,a)}while(!0);qm(),Pf.current=s,ft=r,en!==null?e=0:(pn=null,yn=0,e=an)}if(e!==0){if(e===2&&(r=fp(n),r!==0&&(i=r,e=zp(n,r))),e===1)throw t=xu,uo(n,0),as(n,i),ii(n,Xt()),t;if(e===6)as(n,i);else{if(r=n.current.alternate,!(i&30)&&!sT(r)&&(e=Df(n,i),e===2&&(s=fp(n),s!==0&&(i=s,e=zp(n,s))),e===1))throw t=xu,uo(n,0),as(n,i),ii(n,Xt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:Ks(n,Qn,Pr);break;case 3:if(as(n,i),(i&130023424)===i&&(e=cg+500-Xt(),10<e)){if(mf(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Xn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=xp(Ks.bind(null,n,Qn,Pr),e);break}Ks(n,Qn,Pr);break;case 4:if(as(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-or(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*rT(i/1960))-i,10<i){n.timeoutHandle=xp(Ks.bind(null,n,Qn,Pr),i);break}Ks(n,Qn,Pr);break;case 5:Ks(n,Qn,Pr);break;default:throw Error(ae(329))}}}return ii(n,Xt()),n.callbackNode===t?SS.bind(null,n):null}function zp(n,e){var t=Vl;return n.current.memoizedState.isDehydrated&&(uo(n,e).flags|=256),n=Df(n,e),n!==2&&(e=Qn,Qn=t,e!==null&&Bp(e)),n}function Bp(n){Qn===null?Qn=n:Qn.push.apply(Qn,n)}function sT(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!lr(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function as(n,e){for(e&=~ug,e&=~cd,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-or(e),i=1<<t;n[t]=-1,e&=~i}}function a_(n){if(ft&6)throw Error(ae(327));Ta();var e=mf(n,0);if(!(e&1))return ii(n,Xt()),null;var t=Df(n,e);if(n.tag!==0&&t===2){var i=fp(n);i!==0&&(e=i,t=zp(n,i))}if(t===1)throw t=xu,uo(n,0),as(n,e),ii(n,Xt()),t;if(t===6)throw Error(ae(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Ks(n,Qn,Pr),ii(n,Xt()),null}function fg(n,e){var t=ft;ft|=1;try{return n(e)}finally{ft=t,ft===0&&(Ba=Xt()+500,od&&zs())}}function bo(n){us!==null&&us.tag===0&&!(ft&6)&&Ta();var e=ft;ft|=1;var t=Wi.transition,i=_t;try{if(Wi.transition=null,_t=1,n)return n()}finally{_t=i,Wi.transition=t,ft=e,!(ft&6)&&zs()}}function dg(){pi=ma.current,Lt(ma)}function uo(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Iw(t)),en!==null)for(t=en.return;t!==null;){var i=t;switch(Xm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&yf();break;case 3:ka(),Lt(ti),Lt(Un),tg();break;case 5:eg(i);break;case 4:ka();break;case 13:Lt(Ft);break;case 19:Lt(Ft);break;case 10:Km(i.type._context);break;case 22:case 23:dg()}t=t.return}if(pn=n,en=n=ws(n.current,null),yn=pi=e,an=0,xu=null,ug=cd=To=0,Qn=Vl=null,so!==null){for(e=0;e<so.length;e++)if(t=so[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}so=null}return n}function MS(n,e){do{var t=en;try{if(qm(),Yc.current=Rf,Cf){for(var i=Bt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Cf=!1}if(wo=0,hn=sn=Bt=null,Bl=!1,gu=0,lg.current=null,t===null||t.return===null){an=1,xu=e,en=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=yn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Y0(o);if(p!==null){p.flags&=-257,q0(p,o,a,s,e),p.mode&1&&$0(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var m=new Set;m.add(l),e.updateQueue=m}else _.add(l);break e}else{if(!(e&1)){$0(s,u,e),hg();break e}l=Error(ae(426))}}else if(Dt&&a.mode&1){var g=Y0(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),q0(g,o,a,s,e),$m(za(l,a));break e}}s=l=za(l,a),an!==4&&(an=2),Vl===null?Vl=[s]:Vl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=sS(s,l,e);H0(s,d);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Ms===null||!Ms.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=oS(s,a,e);H0(s,y);break e}}s=s.return}while(s!==null)}TS(t)}catch(M){e=M,en===t&&t!==null&&(en=t=t.return);continue}break}while(!0)}function ES(){var n=Pf.current;return Pf.current=Rf,n===null?Rf:n}function hg(){(an===0||an===3||an===2)&&(an=4),pn===null||!(To&268435455)&&!(cd&268435455)||as(pn,yn)}function Df(n,e){var t=ft;ft|=2;var i=ES();(pn!==n||yn!==e)&&(Pr=null,uo(n,e));do try{oT();break}catch(r){MS(n,r)}while(!0);if(qm(),ft=t,Pf.current=i,en!==null)throw Error(ae(261));return pn=null,yn=0,an}function oT(){for(;en!==null;)wS(en)}function aT(){for(;en!==null&&!NE();)wS(en)}function wS(n){var e=AS(n.alternate,n,pi);n.memoizedProps=n.pendingProps,e===null?TS(n):en=e,lg.current=null}function TS(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=eT(t,e),t!==null){t.flags&=32767,en=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{an=6,en=null;return}}else if(t=Jw(t,e,pi),t!==null){en=t;return}if(e=e.sibling,e!==null){en=e;return}en=e=n}while(e!==null);an===0&&(an=5)}function Ks(n,e,t){var i=_t,r=Wi.transition;try{Wi.transition=null,_t=1,lT(n,e,t,i)}finally{Wi.transition=r,_t=i}return null}function lT(n,e,t,i){do Ta();while(us!==null);if(ft&6)throw Error(ae(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ae(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(VE(n,s),n===pn&&(en=pn=null,yn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ic||(ic=!0,CS(pf,function(){return Ta(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Wi.transition,Wi.transition=null;var o=_t;_t=1;var a=ft;ft|=4,lg.current=null,nT(n,t),xS(t,n),Cw(_p),gf=!!gp,_p=gp=null,n.current=t,iT(t),DE(),ft=a,_t=o,Wi.transition=s}else n.current=t;if(ic&&(ic=!1,us=n,Nf=r),s=n.pendingLanes,s===0&&(Ms=null),OE(t.stateNode),ii(n,Xt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Lf)throw Lf=!1,n=Fp,Fp=null,n;return Nf&1&&n.tag!==0&&Ta(),s=n.pendingLanes,s&1?n===kp?Gl++:(Gl=0,kp=n):Gl=0,zs(),null}function Ta(){if(us!==null){var n=sy(Nf),e=Wi.transition,t=_t;try{if(Wi.transition=null,_t=16>n?16:n,us===null)var i=!1;else{if(n=us,us=null,Nf=0,ft&6)throw Error(ae(331));var r=ft;for(ft|=4,Se=n.current;Se!==null;){var s=Se,o=s.child;if(Se.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Se=u;Se!==null;){var c=Se;switch(c.tag){case 0:case 11:case 15:Hl(8,c,s)}var f=c.child;if(f!==null)f.return=c,Se=f;else for(;Se!==null;){c=Se;var h=c.sibling,p=c.return;if(gS(c),c===u){Se=null;break}if(h!==null){h.return=p,Se=h;break}Se=p}}}var _=s.alternate;if(_!==null){var m=_.child;if(m!==null){_.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(m!==null)}}Se=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Se=o;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Hl(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Se=d;break e}Se=s.return}}var v=n.current;for(Se=v;Se!==null;){o=Se;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Se=x;else e:for(o=v;Se!==null;){if(a=Se,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ud(9,a)}}catch(M){Gt(a,a.return,M)}if(a===o){Se=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Se=y;break e}Se=a.return}}if(ft=r,zs(),vr&&typeof vr.onPostCommitFiberRoot=="function")try{vr.onPostCommitFiberRoot(td,n)}catch{}i=!0}return i}finally{_t=t,Wi.transition=e}}return!1}function l_(n,e,t){e=za(t,e),e=sS(n,e,1),n=Ss(n,e,1),e=Xn(),n!==null&&(Nu(n,1,e),ii(n,e))}function Gt(n,e,t){if(n.tag===3)l_(n,n,t);else for(;e!==null;){if(e.tag===3){l_(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ms===null||!Ms.has(i))){n=za(t,n),n=oS(e,n,1),e=Ss(e,n,1),n=Xn(),e!==null&&(Nu(e,1,n),ii(e,n));break}}e=e.return}}function uT(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Xn(),n.pingedLanes|=n.suspendedLanes&t,pn===n&&(yn&t)===t&&(an===4||an===3&&(yn&130023424)===yn&&500>Xt()-cg?uo(n,0):ug|=t),ii(n,e)}function bS(n,e){e===0&&(n.mode&1?(e=$u,$u<<=1,!($u&130023424)&&($u=4194304)):e=1);var t=Xn();n=jr(n,e),n!==null&&(Nu(n,e,t),ii(n,t))}function cT(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),bS(n,t)}function fT(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),bS(n,t)}var AS;AS=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||ti.current)ei=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return ei=!1,Qw(n,e,t);ei=!!(n.flags&131072)}else ei=!1,Dt&&e.flags&1048576&&Ly(e,Ef,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Kc(n,e),n=e.pendingProps;var r=Ia(e,Un.current);wa(e,t),r=ig(null,e,i,n,r,t);var s=rg();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ni(i)?(s=!0,Sf(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Qm(e),r.updater=ld,e.stateNode=r,r._reactInternals=e,bp(e,i,n,t),e=Rp(null,e,i,!0,s,t)):(e.tag=0,Dt&&s&&jm(e),Bn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Kc(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=hT(i),n=er(i,n),r){case 0:e=Cp(null,e,i,n,t);break e;case 1:e=Q0(null,e,i,n,t);break e;case 11:e=K0(null,e,i,n,t);break e;case 14:e=Z0(null,e,i,er(i.type,n),t);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:er(i,r),Cp(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:er(i,r),Q0(n,e,i,r,t);case 3:e:{if(cS(e),n===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Fy(n,e),bf(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=za(Error(ae(423)),e),e=J0(n,e,i,t,r);break e}else if(i!==r){r=za(Error(ae(424)),e),e=J0(n,e,i,t,r);break e}else for(Si=ys(e.stateNode.containerInfo.firstChild),Ei=e,Dt=!0,nr=null,t=Iy(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Oa(),i===r){e=Xr(n,e,t);break e}Bn(n,e,i,t)}e=e.child}return e;case 5:return ky(e),n===null&&Ep(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,vp(i,r)?o=null:s!==null&&vp(i,s)&&(e.flags|=32),uS(n,e),Bn(n,e,o,t),e.child;case 6:return n===null&&Ep(e),null;case 13:return fS(n,e,t);case 4:return Jm(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Fa(e,null,i,t):Bn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:er(i,r),K0(n,e,i,r,t);case 7:return Bn(n,e,e.pendingProps,t),e.child;case 8:return Bn(n,e,e.pendingProps.children,t),e.child;case 12:return Bn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,bt(wf,i._currentValue),i._currentValue=o,s!==null)if(lr(s.value,o)){if(s.children===r.children&&!ti.current){e=Xr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Hr(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),wp(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ae(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),wp(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Bn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,wa(e,t),r=$i(r),i=i(r),e.flags|=1,Bn(n,e,i,t),e.child;case 14:return i=e.type,r=er(i,e.pendingProps),r=er(i.type,r),Z0(n,e,i,r,t);case 15:return aS(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:er(i,r),Kc(n,e),e.tag=1,ni(i)?(n=!0,Sf(e)):n=!1,wa(e,t),rS(e,i,r),bp(e,i,r,t),Rp(null,e,i,!0,n,t);case 19:return dS(n,e,t);case 22:return lS(n,e,t)}throw Error(ae(156,e.tag))};function CS(n,e){return ty(n,e)}function dT(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bi(n,e,t,i){return new dT(n,e,t,i)}function pg(n){return n=n.prototype,!(!n||!n.isReactComponent)}function hT(n){if(typeof n=="function")return pg(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Dm)return 11;if(n===Um)return 14}return 2}function ws(n,e){var t=n.alternate;return t===null?(t=Bi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Jc(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")pg(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case sa:return co(t.children,r,s,e);case Nm:o=8,r|=8;break;case Kh:return n=Bi(12,t,e,r|2),n.elementType=Kh,n.lanes=s,n;case Zh:return n=Bi(13,t,e,r),n.elementType=Zh,n.lanes=s,n;case Qh:return n=Bi(19,t,e,r),n.elementType=Qh,n.lanes=s,n;case kx:return fd(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Ox:o=10;break e;case Fx:o=9;break e;case Dm:o=11;break e;case Um:o=14;break e;case rs:o=16,i=null;break e}throw Error(ae(130,n==null?n:typeof n,""))}return e=Bi(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function co(n,e,t,i){return n=Bi(7,n,i,e),n.lanes=t,n}function fd(n,e,t,i){return n=Bi(22,n,i,e),n.elementType=kx,n.lanes=t,n.stateNode={isHidden:!1},n}function Jd(n,e,t){return n=Bi(6,n,null,e),n.lanes=t,n}function eh(n,e,t){return e=Bi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function pT(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ud(0),this.expirationTimes=Ud(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ud(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function mg(n,e,t,i,r,s,o,a,l){return n=new pT(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qm(s),n}function mT(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ra,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function RS(n){if(!n)return Ns;n=n._reactInternals;e:{if(Uo(n)!==n||n.tag!==1)throw Error(ae(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ni(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(n.tag===1){var t=n.type;if(ni(t))return Ry(n,t,e)}return e}function PS(n,e,t,i,r,s,o,a,l){return n=mg(t,i,!0,n,r,s,o,a,l),n.context=RS(null),t=n.current,i=Xn(),r=Es(t),s=Hr(i,r),s.callback=e??null,Ss(t,s,r),n.current.lanes=r,Nu(n,r,i),ii(n,i),n}function dd(n,e,t,i){var r=e.current,s=Xn(),o=Es(r);return t=RS(t),e.context===null?e.context=t:e.pendingContext=t,e=Hr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Ss(r,e,o),n!==null&&(ar(n,r,o,s),$c(n,r,o)),o}function Uf(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function u_(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function gg(n,e){u_(n,e),(n=n.alternate)&&u_(n,e)}function gT(){return null}var LS=typeof reportError=="function"?reportError:function(n){console.error(n)};function _g(n){this._internalRoot=n}hd.prototype.render=_g.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ae(409));dd(n,e,null,null)};hd.prototype.unmount=_g.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;bo(function(){dd(null,n,null,null)}),e[Wr]=null}};function hd(n){this._internalRoot=n}hd.prototype.unstable_scheduleHydration=function(n){if(n){var e=ly();n={blockedOn:null,target:n,priority:e};for(var t=0;t<os.length&&e!==0&&e<os[t].priority;t++);os.splice(t,0,n),t===0&&cy(n)}};function vg(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function pd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function c_(){}function _T(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Uf(o);s.call(u)}}var o=PS(e,i,n,0,null,!1,!1,"",c_);return n._reactRootContainer=o,n[Wr]=o.current,fu(n.nodeType===8?n.parentNode:n),bo(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Uf(l);a.call(u)}}var l=mg(n,0,!1,null,null,!1,!1,"",c_);return n._reactRootContainer=l,n[Wr]=l.current,fu(n.nodeType===8?n.parentNode:n),bo(function(){dd(e,l,t,i)}),l}function md(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Uf(o);a.call(l)}}dd(e,o,n,r)}else o=_T(t,e,n,r,i);return Uf(o)}oy=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=wl(e.pendingLanes);t!==0&&(Fm(e,t|1),ii(e,Xt()),!(ft&6)&&(Ba=Xt()+500,zs()))}break;case 13:bo(function(){var i=jr(n,1);if(i!==null){var r=Xn();ar(i,n,1,r)}}),gg(n,1)}};km=function(n){if(n.tag===13){var e=jr(n,134217728);if(e!==null){var t=Xn();ar(e,n,134217728,t)}gg(n,134217728)}};ay=function(n){if(n.tag===13){var e=Es(n),t=jr(n,e);if(t!==null){var i=Xn();ar(t,n,e,i)}gg(n,e)}};ly=function(){return _t};uy=function(n,e){var t=_t;try{return _t=n,e()}finally{_t=t}};lp=function(n,e,t){switch(e){case"input":if(tp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=sd(i);if(!r)throw Error(ae(90));Bx(i),tp(i,r)}}}break;case"textarea":Vx(n,t);break;case"select":e=t.value,e!=null&&ya(n,!!t.multiple,e,!1)}};qx=fg;Kx=bo;var vT={usingClientEntryPoint:!1,Events:[Uu,ua,sd,$x,Yx,fg]},dl={findFiberByHostInstance:ro,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xT={bundleType:dl.bundleType,version:dl.version,rendererPackageName:dl.rendererPackageName,rendererConfig:dl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Jx(n),n===null?null:n.stateNode},findFiberByHostInstance:dl.findFiberByHostInstance||gT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{td=rc.inject(xT),vr=rc}catch{}}Ri.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vT;Ri.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vg(e))throw Error(ae(200));return mT(n,e,null,t)};Ri.createRoot=function(n,e){if(!vg(n))throw Error(ae(299));var t=!1,i="",r=LS;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=mg(n,1,!1,null,null,t,!1,i,r),n[Wr]=e.current,fu(n.nodeType===8?n.parentNode:n),new _g(e)};Ri.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ae(188)):(n=Object.keys(n).join(","),Error(ae(268,n)));return n=Jx(e),n=n===null?null:n.stateNode,n};Ri.flushSync=function(n){return bo(n)};Ri.hydrate=function(n,e,t){if(!pd(e))throw Error(ae(200));return md(null,n,e,!0,t)};Ri.hydrateRoot=function(n,e,t){if(!vg(n))throw Error(ae(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=LS;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=PS(e,null,n,1,t??null,r,!1,s,o),n[Wr]=e.current,fu(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new hd(e)};Ri.render=function(n,e,t){if(!pd(e))throw Error(ae(200));return md(null,n,e,!1,t)};Ri.unmountComponentAtNode=function(n){if(!pd(n))throw Error(ae(40));return n._reactRootContainer?(bo(function(){md(null,null,n,!1,function(){n._reactRootContainer=null,n[Wr]=null})}),!0):!1};Ri.unstable_batchedUpdates=fg;Ri.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!pd(t))throw Error(ae(200));if(n==null||n._reactInternals===void 0)throw Error(ae(38));return md(n,e,t,!1,i)};Ri.version="18.3.1-next-f1338f8080-20240426";function NS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(NS)}catch(n){console.error(n)}}NS(),Nx.exports=Ri;var yT=Nx.exports,DS,f_=yT;DS=f_.createRoot,f_.hydrateRoot;function Lr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function US(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var wi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ha={duration:.5,overwrite:!1,delay:0},xg,Sn,Ut,Hi=1e8,Mt=1/Hi,Hp=Math.PI*2,ST=Hp/4,MT=0,IS=Math.sqrt,ET=Math.cos,wT=Math.sin,mn=function(e){return typeof e=="string"},Wt=function(e){return typeof e=="function"},$r=function(e){return typeof e=="number"},yg=function(e){return typeof e>"u"},Mr=function(e){return typeof e=="object"},ri=function(e){return e!==!1},Sg=function(){return typeof window<"u"},sc=function(e){return Wt(e)||mn(e)},OS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Dn=Array.isArray,Vp=/(?:-?\.?\d|\.)+/gi,FS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ga=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,th=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,kS=/[+-]=-?[.\d]+/,zS=/[^,'"\[\]\s]+/gi,TT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,kt,fr,Gp,Mg,Ai={},If={},BS,HS=function(e){return(If=Va(e,Ai))&&ui},Eg=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},yu=function(e,t){return!t&&console.warn(e)},VS=function(e,t){return e&&(Ai[e]=t)&&If&&(If[e]=t)||Ai},Su=function(){return 0},bT={suppressEvents:!0,isStart:!0,kill:!1},ef={suppressEvents:!0,kill:!1},AT={suppressEvents:!0},wg={},Ts=[],Wp={},GS,gi={},nh={},d_=30,tf=[],Tg="",bg=function(e){var t=e[0],i,r;if(Mr(t)||Wt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=tf.length;r--&&!tf[r].targetTest(t););i=tf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new h1(e[r],i)))||e.splice(r,1);return e},fo=function(e){return e._gsap||bg(Vi(e))[0]._gsap},WS=function(e,t,i){return(i=e[t])&&Wt(i)?e[t]():yg(i)&&e.getAttribute&&e.getAttribute(t)||i},si=function(e,t){return(e=e.split(",")).forEach(t)||e},jt=function(e){return Math.round(e*1e5)/1e5||0},Jt=function(e){return Math.round(e*1e7)/1e7||0},ba=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},CT=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Of=function(){var e=Ts.length,t=Ts.slice(0),i,r;for(Wp={},Ts.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Ag=function(e){return!!(e._initted||e._startAt||e.add)},jS=function(e,t,i,r){Ts.length&&!Sn&&Of(),e.render(t,i,!!(Sn&&t<0&&Ag(e))),Ts.length&&!Sn&&Of()},XS=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(zS).length<2?t:mn(e)?e.trim():e},$S=function(e){return e},Ci=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},RT=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Va=function(e,t){for(var i in t)e[i]=t[i];return e},h_=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Mr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Ff=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Wl=function(e){var t=e.parent||kt,i=e.keyframes?RT(Dn(e.keyframes)):Ci;if(ri(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},PT=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},YS=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},gd=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Ds=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ho=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},LT=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},jp=function(e,t,i,r){return e._startAt&&(Sn?e._startAt.revert(ef):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},NT=function n(e){return!e||e._ts&&n(e.parent)},p_=function(e){return e._repeat?Ga(e._tTime,e=e.duration()+e._rDelay)*e:0},Ga=function(e,t){var i=Math.floor(e=Jt(e/t));return e&&i===e?i-1:i},kf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},_d=function(e){return e._end=Jt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Mt)||0))},vd=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Jt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),_d(e),i._dirty||ho(i,e)),e},qS=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=kf(e.rawTime(),t),(!t._dur||Ou(0,t.totalDuration(),i)-t._tTime>Mt)&&t.render(i,!0)),ho(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Mt}},mr=function(e,t,i,r){return t.parent&&Ds(t),t._start=Jt(($r(i)?i:i||e!==kt?Di(e,i,t):e._time)+t._delay),t._end=Jt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),YS(e,t,"_first","_last",e._sort?"_start":0),Xp(t)||(e._recent=t),r||qS(e,t),e._ts<0&&vd(e,e._tTime),e},KS=function(e,t){return(Ai.ScrollTrigger||Eg("scrollTrigger",t))&&Ai.ScrollTrigger.create(t,e)},ZS=function(e,t,i,r,s){if(Rg(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Sn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&GS!==xi.frame)return Ts.push(e),e._lazy=[s,r],1},DT=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Xp=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},UT=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&DT(e)&&!(!e._initted&&Xp(e))||(e._ts<0||e._dp._ts<0)&&!Xp(e))?0:1,a=e._rDelay,l=0,u,c,f;if(a&&e._repeat&&(l=Ou(0,e._tDur,t),c=Ga(l,a),e._yoyo&&c&1&&(o=1-o),c!==Ga(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Sn||r||e._zTime===Mt||!t&&e._zTime){if(!e._initted&&ZS(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?Mt:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&jp(e,t,i,!0),e._onUpdate&&!i&&Mi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Mi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ds(e,1),!i&&!Sn&&(Mi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},IT=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Wa=function(e,t,i,r){var s=e._repeat,o=Jt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Jt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&vd(e,e._tTime=e._tDur*a),e.parent&&_d(e),i||ho(e.parent,e),e},m_=function(e){return e instanceof Wn?ho(e):Wa(e,e._dur)},OT={_start:0,endTime:Su,totalDuration:Su},Di=function n(e,t,i){var r=e.labels,s=e._recent||OT,o=e.duration()>=Hi?s.endTime(!1):e._dur,a,l,u;return mn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Dn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},jl=function(e,t,i){var r=$r(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ri(l.vars.inherit)&&l.parent;o.immediateRender=ri(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Qt(t[0],o,t[s+1])},Bs=function(e,t){return e||e===0?t(e):t},Ou=function(e,t,i){return i<e?e:i>t?t:i},Ln=function(e,t){return!mn(e)||!(t=TT.exec(e))?"":t[1]},FT=function(e,t,i){return Bs(i,function(r){return Ou(e,t,r)})},$p=[].slice,QS=function(e,t){return e&&Mr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Mr(e[0]))&&!e.nodeType&&e!==fr},kT=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return mn(r)&&!t||QS(r,1)?(s=i).push.apply(s,Vi(r)):i.push(r)})||i},Vi=function(e,t,i){return Ut&&!t&&Ut.selector?Ut.selector(e):mn(e)&&!i&&(Gp||!ja())?$p.call((t||Mg).querySelectorAll(e),0):Dn(e)?kT(e,i):QS(e)?$p.call(e,0):e?[e]:[]},Yp=function(e){return e=Vi(e)[0]||yu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Vi(t,i.querySelectorAll?i:i===e?yu("Invalid scope")||Mg.createElement("div"):e)}},JS=function(e){return e.sort(function(){return .5-Math.random()})},e1=function(e){if(Wt(e))return e;var t=Mr(e)?e:{each:e},i=po(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,f=r;return mn(r)?c=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],f=r[1]),function(h,p,_){var m=(_||t).length,g=o[m],d,v,x,y,M,w,E,R,S;if(!g){if(S=t.grid==="auto"?0:(t.grid||[1,Hi])[1],!S){for(E=-Hi;E<(E=_[S++].getBoundingClientRect().left)&&S<m;);S<m&&S--}for(g=o[m]=[],d=l?Math.min(S,m)*c-.5:r%S,v=S===Hi?0:l?m*f/S-.5:r/S|0,E=0,R=Hi,w=0;w<m;w++)x=w%S-d,y=v-(w/S|0),g[w]=M=u?Math.abs(u==="y"?y:x):IS(x*x+y*y),M>E&&(E=M),M<R&&(R=M);r==="random"&&JS(g),g.max=E-R,g.min=R,g.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(S>m?m-1:u?u==="y"?m/S:S:Math.max(S,m/S))||0)*(r==="edges"?-1:1),g.b=m<0?s-m:s,g.u=Ln(t.amount||t.each)||0,i=i&&m<0?c1(i):i}return m=(g[h]-g.min)/g.max||0,Jt(g.b+(i?i(m):m)*g.v)+g.u}},qp=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Jt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+($r(i)?0:Ln(i))}},t1=function(e,t){var i=Dn(e),r,s;return!i&&Mr(e)&&(r=i=e.radius||Hi,e.values?(e=Vi(e.values),(s=!$r(e[0]))&&(r*=r)):e=qp(e.increment)),Bs(t,i?Wt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Hi,c=0,f=e.length,h,p;f--;)s?(h=e[f].x-a,p=e[f].y-l,h=h*h+p*p):h=Math.abs(e[f]-a),h<u&&(u=h,c=f);return c=!r||u<=r?e[c]:o,s||c===o||$r(o)?c:c+Ln(o)}:qp(e))},n1=function(e,t,i,r){return Bs(Dn(e)?!t:i===!0?!!(i=0):!r,function(){return Dn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},zT=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},BT=function(e,t){return function(i){return e(parseFloat(i))+(t||Ln(i))}},HT=function(e,t,i){return r1(e,t,0,1,i)},i1=function(e,t,i){return Bs(i,function(r){return e[~~t(r)]})},VT=function n(e,t,i){var r=t-e;return Dn(e)?i1(e,n(0,e.length),t):Bs(i,function(s){return(r+(s-e)%r)%r+e})},GT=function n(e,t,i){var r=t-e,s=r*2;return Dn(e)?i1(e,n(0,e.length-1),t):Bs(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Mu=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?zS:Vp),i+=e.substr(t,r-t)+n1(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},r1=function(e,t,i,r,s){var o=t-e,a=r-i;return Bs(s,function(l){return i+((l-e)/o*a||0)})},WT=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=mn(e),a={},l,u,c,f,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Dn(e)&&!Dn(t)){for(c=[],f=e.length,h=f-2,u=1;u<f;u++)c.push(n(e[u-1],e[u]));f--,s=function(_){_*=f;var m=Math.min(h,~~_);return c[m](_-m)},i=t}else r||(e=Va(Dn(e)?[]:{},e));if(!c){for(l in t)Cg.call(a,e,l,"get",t[l]);s=function(_){return Ng(_,a)||(o?e.p:e)}}}return Bs(i,s)},g_=function(e,t,i){var r=e.labels,s=Hi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Mi=function(e,t,i){var r=e.vars,s=r[t],o=Ut,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Ts.length&&Of(),a&&(Ut=a),c=l?s.apply(u,l):s.call(u),Ut=o,c},bl=function(e){return Ds(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Sn),e.progress()<1&&Mi(e,"onInterrupt"),e},_a,s1=[],o1=function(e){if(e)if(e=!e.name&&e.default||e,Sg()||e.headless){var t=e.name,i=Wt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Su,render:Ng,add:Cg,kill:ob,modifier:sb,rawVars:0},o={targetTest:0,get:0,getSetter:Lg,aliases:{},register:0};if(ja(),e!==r){if(gi[t])return;Ci(r,Ci(Ff(e,s),o)),Va(r.prototype,Va(s,Ff(e,o))),gi[r.prop=t]=r,e.targetTest&&(tf.push(r),wg[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}VS(t,r),e.register&&e.register(ui,r,oi)}else s1.push(e)},St=255,Al={aqua:[0,St,St],lime:[0,St,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,St],navy:[0,0,128],white:[St,St,St],olive:[128,128,0],yellow:[St,St,0],orange:[St,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[St,0,0],pink:[St,192,203],cyan:[0,St,St],transparent:[St,St,St,0]},ih=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*St+.5|0},a1=function(e,t,i){var r=e?$r(e)?[e>>16,e>>8&St,e&St]:0:Al.black,s,o,a,l,u,c,f,h,p,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Al[e])r=Al[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&St,r&St,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&St,e&St]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(Vp),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=ih(l+1/3,s,o),r[1]=ih(l,s,o),r[2]=ih(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(FS),i&&r.length<4&&(r[3]=1),r}else r=e.match(Vp)||Al.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/St,o=r[1]/St,a=r[2]/St,f=Math.max(s,o,a),h=Math.min(s,o,a),c=(f+h)/2,f===h?l=u=0:(p=f-h,u=c>.5?p/(2-f-h):p/(f+h),l=f===s?(o-a)/p+(o<a?6:0):f===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},l1=function(e){var t=[],i=[],r=-1;return e.split(bs).forEach(function(s){var o=s.match(ga)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},__=function(e,t,i){var r="",s=(e+r).match(bs),o=t?"hsla(":"rgba(",a=0,l,u,c,f;if(!s)return e;if(s=s.map(function(h){return(h=a1(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=l1(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(bs,"1").split(ga),f=u.length-1;a<f;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(bs),f=u.length-1;a<f;a++)r+=u[a]+s[a];return r+u[f]},bs=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Al)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),jT=/hsl[a]?\(/,u1=function(e){var t=e.join(" "),i;if(bs.lastIndex=0,bs.test(t))return i=jT.test(t),e[1]=__(e[1],i),e[0]=__(e[0],i,l1(e[1])),!0},Eu,xi=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,f,h,p,_=function m(g){var d=n()-r,v=g===!0,x,y,M,w;if((d>e||d<0)&&(i+=d-t),r+=d,M=r-i,x=M-o,(x>0||v)&&(w=++f.frame,h=M-f.time*1e3,f.time=M=M/1e3,o+=x+(x>=s?4:s-x),y=1),v||(l=u(m)),y)for(p=0;p<a.length;p++)a[p](M,h,w,g)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(g){return h/(1e3/(g||60))},wake:function(){BS&&(!Gp&&Sg()&&(fr=Gp=window,Mg=fr.document||{},Ai.gsap=ui,(fr.gsapVersions||(fr.gsapVersions=[])).push(ui.version),HS(If||fr.GreenSockGlobals||!fr.gsap&&fr||{}),s1.forEach(o1)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(g){return setTimeout(g,o-f.time*1e3+1|0)},Eu=1,_(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Eu=0,u=Su},lagSmoothing:function(g,d){e=g||1/0,t=Math.min(d||33,e)},fps:function(g){s=1e3/(g||240),o=f.time*1e3+s},add:function(g,d,v){var x=d?function(y,M,w,E){g(y,M,w,E),f.remove(x)}:g;return f.remove(g),a[v?"unshift":"push"](x),ja(),x},remove:function(g,d){~(d=a.indexOf(g))&&a.splice(d,1)&&p>=d&&p--},_listeners:a},f}(),ja=function(){return!Eu&&xi.wake()},ct={},XT=/^[\d.\-M][\d.\-,\s]/,$T=/["']/g,YT=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace($T,"").trim():+u,r=l.substr(a+1).trim();return t},qT=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},KT=function(e){var t=(e+"").split("("),i=ct[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[YT(t[1])]:qT(e).split(",").map(XS)):ct._CE&&XT.test(e)?ct._CE("",e):i},c1=function(e){return function(t){return 1-e(1-t)}},f1=function n(e,t){for(var i=e._first,r;i;)i instanceof Wn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},po=function(e,t){return e&&(Wt(e)?e:ct[e]||KT(e))||t},Io=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return si(e,function(a){ct[a]=Ai[a]=s,ct[o=a.toLowerCase()]=i;for(var l in s)ct[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ct[a+"."+l]=s[l]}),s},d1=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},rh=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Hp*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*wT((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:d1(a);return s=Hp/s,l.config=function(u,c){return n(e,u,c)},l},sh=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:d1(i);return r.config=function(s){return n(e,s)},r};si("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Io(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ct.Linear.easeNone=ct.none=ct.Linear.easeIn;Io("Elastic",rh("in"),rh("out"),rh());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Io("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Io("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Io("Circ",function(n){return-(IS(1-n*n)-1)});Io("Sine",function(n){return n===1?1:-ET(n*ST)+1});Io("Back",sh("in"),sh("out"),sh());ct.SteppedEase=ct.steps=Ai.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Mt;return function(a){return((r*Ou(0,o,a)|0)+s)*i}}};Ha.ease=ct["quad.out"];si("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Tg+=n+","+n+"Params,"});var h1=function(e,t){this.id=MT++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:WS,this.set=t?t.getSetter:Lg},wu=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Wa(this,+t.duration,1,1),this.data=t.data,Ut&&(this._ctx=Ut,Ut.data.push(this)),Eu||xi.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Wa(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(ja(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(vd(this,i),!s._dp||s.parent||qS(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&mr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Mt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),jS(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+p_(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+p_(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Ga(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Mt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?kf(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Mt?0:this._rts,this.totalTime(Ou(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),_d(this),LT(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ja(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Mt&&(this._tTime-=Mt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&mr(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ri(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?kf(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=AT);var r=Sn;return Sn=i,Ag(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Sn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,m_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,m_(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Di(this,i),ri(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ri(r)),this._dur||(this._zTime=-Mt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Mt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Mt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Mt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=Wt(i)?i:$S,a=function(){var u=r.then;r.then=null,Wt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),s(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){bl(this)},n}();Ci(wu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Mt,_prom:0,_ps:!1,_rts:1});var Wn=function(n){US(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ri(i.sortChildren),kt&&mr(i.parent||kt,Lr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&KS(Lr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return jl(0,arguments,this),this},t.from=function(r,s,o){return jl(1,arguments,this),this},t.fromTo=function(r,s,o,a){return jl(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Wl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Qt(r,s,Di(this,o),1),this},t.call=function(r,s,o){return mr(this,Qt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Qt(r,o,Di(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Wl(o).immediateRender=ri(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,f){return a.startAt=o,Wl(a).immediateRender=ri(a.immediateRender),this.staggerTo(r,s,a,l,u,c,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Jt(r),f=this._zTime<0!=r<0&&(this._initted||!u),h,p,_,m,g,d,v,x,y,M,w,E;if(this!==kt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,y=this._start,x=this._ts,d=!x,f&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,g=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(g*100+r,s,o);if(h=Jt(c%g),c===l?(m=this._repeat,h=u):(M=Jt(c/g),m=~~M,m&&m===M&&(h=u,m--),h>u&&(h=u)),M=Ga(this._tTime,g),!a&&this._tTime&&M!==m&&this._tTime-M*g-this._dur<=0&&(M=m),w&&m&1&&(h=u-h,E=1),m!==M&&!this._lock){var R=w&&M&1,S=R===(w&&m&1);if(m<M&&(R=!R),a=R?0:c%u?u:c,this._lock=1,this.render(a||(E?0:Jt(m*g)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Mi(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,S&&(this._lock=2,a=R?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;f1(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=IT(this,Jt(a),Jt(h)),v&&(c-=h-(h=v._start))),this._tTime=c,this._time=h,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&!s&&!M&&(Mi(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(p=this._first;p;){if(_=p._next,(p._act||h>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,o),h!==this._time||!this._ts&&!d){v=0,_&&(c+=this._zTime=-Mt);break}}p=_}else{p=this._last;for(var T=r<0?r:h;p;){if(_=p._prev,(p._act||T<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(T-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(T-p._start)*p._ts,s,o||Sn&&Ag(p)),h!==this._time||!this._ts&&!d){v=0,_&&(c+=this._zTime=T?-Mt:Mt);break}}p=_}}if(v&&!s&&(this.pause(),v.render(h>=a?0:-Mt)._zTime=h>=a?1:-1,this._ts))return this._start=y,_d(this),this.render(r,s,o);this._onUpdate&&!s&&Mi(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Ds(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Mi(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if($r(s)||(s=Di(this,s,r)),!(r instanceof wu)){if(Dn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(mn(r))return this.addLabel(r,s);if(Wt(r))r=Qt.delayedCall(0,r);else return this}return this!==r?mr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Hi);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Qt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return mn(r)?this.removeLabel(r):Wt(r)?this.killTweensOf(r):(r.parent===this&&gd(this,r),r===this._recent&&(this._recent=this._last),ho(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Jt(xi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Di(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Qt.delayedCall(0,s||Su,o);return a.data="isPause",this._hasPause=1,mr(this,a,Di(this,r))},t.removePause=function(r){var s=this._first;for(r=Di(this,r);s;)s._start===r&&s.data==="isPause"&&Ds(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)cs!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Vi(r),l=this._first,u=$r(s),c;l;)l instanceof Qt?CT(l._targets,a)&&(u?(!cs||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Di(o,r),l=s,u=l.startAt,c=l.onStart,f=l.onStartParams,h=l.immediateRender,p,_=Qt.to(o,Ci({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Mt,onStart:function(){if(o.pause(),!p){var g=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());_._dur!==g&&Wa(_,g,0,1).render(_._time,!0,!0),p=1}c&&c.apply(_,f||[])}},s));return h?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Ci({startAt:{time:Di(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),g_(this,Di(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),g_(this,Di(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Mt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return ho(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ho(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Hi,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,mr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Wa(o,o===kt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(kt._ts&&(jS(kt,kf(r,kt)),GS=xi.frame),xi.frame>=d_){d_+=wi.autoSleep||120;var s=kt._first;if((!s||!s._ts)&&wi.autoSleep&&xi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||xi.sleep()}}},e}(wu);Ci(Wn.prototype,{_lock:0,_hasPause:0,_forcing:0});var ZT=function(e,t,i,r,s,o,a){var l=new oi(this._pt,e,t,0,1,x1,null,s),u=0,c=0,f,h,p,_,m,g,d,v;for(l.b=i,l.e=r,i+="",r+="",(d=~r.indexOf("random("))&&(r=Mu(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),h=i.match(th)||[];f=th.exec(r);)_=f[0],m=r.substring(u,f.index),p?p=(p+1)%5:m.substr(-5)==="rgba("&&(p=1),_!==h[c++]&&(g=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:m||c===1?m:",",s:g,c:_.charAt(1)==="="?ba(g,_)-g:parseFloat(_)-g,m:p&&p<4?Math.round:0},u=th.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(kS.test(r)||d)&&(l.e=0),this._pt=l,l},Cg=function(e,t,i,r,s,o,a,l,u,c){Wt(r)&&(r=r(s||0,e,o));var f=e[t],h=i!=="get"?i:Wt(f)?u?e[t.indexOf("set")||!Wt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():f,p=Wt(f)?u?nb:_1:Pg,_;if(mn(r)&&(~r.indexOf("random(")&&(r=Mu(r)),r.charAt(1)==="="&&(_=ba(h,r)+(Ln(h)||0),(_||_===0)&&(r=_))),!c||h!==r||Kp)return!isNaN(h*r)&&r!==""?(_=new oi(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?rb:v1,0,p),u&&(_.fp=u),a&&_.modifier(a,this,e),this._pt=_):(!f&&!(t in e)&&Eg(t,r),ZT.call(this,e,t,h,r,p,l||wi.stringFilter,u))},QT=function(e,t,i,r,s){if(Wt(e)&&(e=Xl(e,s,t,i,r)),!Mr(e)||e.style&&e.nodeType||Dn(e)||OS(e))return mn(e)?Xl(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Xl(e[a],s,t,i,r);return o},p1=function(e,t,i,r,s,o){var a,l,u,c;if(gi[e]&&(a=new gi[e]).init(s,a.rawVars?t[e]:QT(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new oi(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==_a))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},cs,Kp,Rg=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,f=r.yoyoEase,h=r.keyframes,p=r.autoRevert,_=e._dur,m=e._startAt,g=e._targets,d=e.parent,v=d&&d.data==="nested"?d.vars.targets:g,x=e._overwrite==="auto"&&!xg,y=e.timeline,M,w,E,R,S,T,z,U,K,N,W,Y,F;if(y&&(!h||!s)&&(s="none"),e._ease=po(s,Ha.ease),e._yEase=f?c1(po(f===!0?s:f,Ha.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!y&&!!r.runBackwards,!y||h&&!r.stagger){if(U=g[0]?fo(g[0]).harness:0,Y=U&&r[U.prop],M=Ff(r,wg),m&&(m._zTime<0&&m.progress(1),t<0&&c&&a&&!p?m.render(-1,!0):m.revert(c&&_?ef:bT),m._lazy=0),o){if(Ds(e._startAt=Qt.set(g,Ci({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!m&&ri(l),startAt:null,delay:0,onUpdate:u&&function(){return Mi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Sn||!a&&!p)&&e._startAt.revert(ef),a&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&_&&!m){if(t&&(a=!1),E=Ci({overwrite:!1,data:"isFromStart",lazy:a&&!m&&ri(l),immediateRender:a,stagger:0,parent:d},M),Y&&(E[U.prop]=Y),Ds(e._startAt=Qt.set(g,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Sn?e._startAt.revert(ef):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Mt,Mt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&ri(l)||l&&!_,w=0;w<g.length;w++){if(S=g[w],z=S._gsap||bg(g)[w]._gsap,e._ptLookup[w]=N={},Wp[z.id]&&Ts.length&&Of(),W=v===g?w:v.indexOf(S),U&&(K=new U).init(S,Y||M,e,W,v)!==!1&&(e._pt=R=new oi(e._pt,S,K.name,0,1,K.render,K,0,K.priority),K._props.forEach(function(I){N[I]=R}),K.priority&&(T=1)),!U||Y)for(E in M)gi[E]&&(K=p1(E,M,e,W,S,v))?K.priority&&(T=1):N[E]=R=Cg.call(e,S,E,"get",M[E],W,v,0,r.stringFilter);e._op&&e._op[w]&&e.kill(S,e._op[w]),x&&e._pt&&(cs=e,kt.killTweensOf(S,N,e.globalTime(t)),F=!e.parent,cs=0),e._pt&&l&&(Wp[z.id]=1)}T&&y1(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!F,h&&t<=0&&y.render(Hi,!0,!0)},JT=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,f,h,p;if(!u)for(u=e._ptCache[t]=[],h=e._ptLookup,p=e._targets.length;p--;){if(c=h[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Kp=1,e.vars[t]="+=0",Rg(e,a),Kp=0,l?yu(t+" not eligible for reset"):1;u.push(c)}for(p=u.length;p--;)f=u[p],c=f._pt||f,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,f.e&&(f.e=jt(i)+Ln(f.e)),f.b&&(f.b=c.s+Ln(f.b))},eb=function(e,t){var i=e[0]?fo(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Va({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},tb=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Dn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Xl=function(e,t,i,r,s){return Wt(e)?e.call(t,i,r,s):mn(e)&&~e.indexOf("random(")?Mu(e):e},m1=Tg+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",g1={};si(m1+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return g1[n]=1});var Qt=function(n){US(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Wl(r))||this;var l=a.vars,u=l.duration,c=l.delay,f=l.immediateRender,h=l.stagger,p=l.overwrite,_=l.keyframes,m=l.defaults,g=l.scrollTrigger,d=l.yoyoEase,v=r.parent||kt,x=(Dn(i)||OS(i)?$r(i[0]):"length"in r)?[i]:Vi(i),y,M,w,E,R,S,T,z;if(a._targets=x.length?bg(x):yu("GSAP target "+i+" not found. https://gsap.com",!wi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,_||h||sc(u)||sc(c)){if(r=a.vars,y=a.timeline=new Wn({data:"nested",defaults:m||{},targets:v&&v.data==="nested"?v.vars.targets:x}),y.kill(),y.parent=y._dp=Lr(a),y._start=0,h||sc(u)||sc(c)){if(E=x.length,T=h&&e1(h),Mr(h))for(R in h)~m1.indexOf(R)&&(z||(z={}),z[R]=h[R]);for(M=0;M<E;M++)w=Ff(r,g1),w.stagger=0,d&&(w.yoyoEase=d),z&&Va(w,z),S=x[M],w.duration=+Xl(u,Lr(a),M,S,x),w.delay=(+Xl(c,Lr(a),M,S,x)||0)-a._delay,!h&&E===1&&w.delay&&(a._delay=c=w.delay,a._start+=c,w.delay=0),y.to(S,w,T?T(M,S,x):0),y._ease=ct.none;y.duration()?u=c=0:a.timeline=0}else if(_){Wl(Ci(y.vars.defaults,{ease:"none"})),y._ease=po(_.ease||r.ease||"none");var U=0,K,N,W;if(Dn(_))_.forEach(function(Y){return y.to(x,Y,">")}),y.duration();else{w={};for(R in _)R==="ease"||R==="easeEach"||tb(R,_[R],w,_.easeEach);for(R in w)for(K=w[R].sort(function(Y,F){return Y.t-F.t}),U=0,M=0;M<K.length;M++)N=K[M],W={ease:N.e,duration:(N.t-(M?K[M-1].t:0))/100*u},W[R]=N.v,y.to(x,W,U),U+=W.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||a.duration(u=y.duration())}else a.timeline=0;return p===!0&&!xg&&(cs=Lr(a),kt.killTweensOf(x),cs=0),mr(v,Lr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!u&&!_&&a._start===Jt(v._time)&&ri(f)&&NT(Lr(a))&&v.data!=="nested")&&(a._tTime=-Mt,a.render(Math.max(0,-c)||0)),g&&KS(Lr(a),g),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,f=r>l-Mt&&!c?l:r<Mt?0:r,h,p,_,m,g,d,v,x,y;if(!u)UT(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(h=f,x=this.timeline,this._repeat){if(m=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(m*100+r,s,o);if(h=Jt(f%m),f===l?(_=this._repeat,h=u):(g=Jt(f/m),_=~~g,_&&_===g?(h=u,_--):h>u&&(h=u)),d=this._yoyo&&_&1,d&&(y=this._yEase,h=u-h),g=Ga(this._tTime,m),h===a&&!o&&this._initted&&_===g)return this._tTime=f,this;_!==g&&(x&&this._yEase&&f1(x,d),this.vars.repeatRefresh&&!d&&!this._lock&&h!==m&&this._initted&&(this._lock=o=1,this.render(Jt(m*_),!0).invalidate()._lock=0))}if(!this._initted){if(ZS(this,c?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==g))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(y||this._ease)(h/u),this._from&&(this.ratio=v=1-v),!a&&f&&!s&&!g&&(Mi(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&jp(this,r,s,o),Mi(this,"onUpdate")),this._repeat&&_!==g&&this.vars.onRepeat&&!s&&this.parent&&Mi(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&jp(this,r,!0,!0),(r||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Ds(this,1),!s&&!(c&&!a)&&(f||a||d)&&(Mi(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Eu||xi.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Rg(this,u),c=this._ease(u/this._dur),JT(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(vd(this,0),this.parent||YS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?bl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Sn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,cs&&cs.vars.overwrite!==!0)._first||bl(this),this.parent&&o!==this.timeline.totalDuration()&&Wa(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Vi(r):a,u=this._ptLookup,c=this._pt,f,h,p,_,m,g,d;if((!s||s==="all")&&PT(a,l))return s==="all"&&(this._pt=0),bl(this);for(f=this._op=this._op||[],s!=="all"&&(mn(s)&&(m={},si(s,function(v){return m[v]=1}),s=m),s=eb(a,s)),d=a.length;d--;)if(~l.indexOf(a[d])){h=u[d],s==="all"?(f[d]=s,_=h,p={}):(p=f[d]=f[d]||{},_=s);for(m in _)g=h&&h[m],g&&((!("kill"in g.d)||g.d.kill(m)===!0)&&gd(this,g,"_pt"),delete h[m]),p!=="all"&&(p[m]=1)}return this._initted&&!this._pt&&c&&bl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return jl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return jl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return kt.killTweensOf(r,s,o)},e}(wu);Ci(Qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});si("staggerTo,staggerFrom,staggerFromTo",function(n){Qt[n]=function(){var e=new Wn,t=$p.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Pg=function(e,t,i){return e[t]=i},_1=function(e,t,i){return e[t](i)},nb=function(e,t,i,r){return e[t](r.fp,i)},ib=function(e,t,i){return e.setAttribute(t,i)},Lg=function(e,t){return Wt(e[t])?_1:yg(e[t])&&e.setAttribute?ib:Pg},v1=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},rb=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},x1=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Ng=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},sb=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},ob=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?gd(this,t,"_pt"):t.dep||(i=1),t=r;return!i},ab=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},y1=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},oi=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||v1,this.d=l||this,this.set=u||Pg,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=ab,this.m=i,this.mt=s,this.tween=r},n}();si(Tg+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return wg[n]=1});Ai.TweenMax=Ai.TweenLite=Qt;Ai.TimelineLite=Ai.TimelineMax=Wn;kt=new Wn({sortChildren:!1,defaults:Ha,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});wi.stringFilter=u1;var mo=[],nf={},lb=[],v_=0,ub=0,oh=function(e){return(nf[e]||lb).map(function(t){return t()})},Zp=function(){var e=Date.now(),t=[];e-v_>2&&(oh("matchMediaInit"),mo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=fr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),oh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),v_=e,oh("matchMedia"))},S1=function(){function n(t,i){this.selector=i&&Yp(i),this.data=[],this._r=[],this.isReverted=!1,this.id=ub++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Wt(i)&&(s=r,r=i,i=Wt);var o=this,a=function(){var u=Ut,c=o.selector,f;return u&&u!==o&&u.data.push(o),s&&(o.selector=Yp(s)),Ut=o,f=r.apply(o,arguments),Wt(f)&&o._r.push(f),Ut=u,o.selector=c,o.isReverted=!1,f};return o.last=a,i===Wt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Ut;Ut=null,i(this),Ut=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Qt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof Wn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Qt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=mo.length;o--;)mo[o].id===this.id&&mo.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),cb=function(){function n(t){this.contexts=[],this.scope=t,Ut&&Ut.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Mr(i)||(i={matches:i});var o=new S1(0,s||this.scope),a=o.conditions={},l,u,c;Ut&&!o.selector&&(o.selector=Ut.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=fr.matchMedia(i[u]),l&&(mo.indexOf(o)<0&&mo.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Zp):l.addEventListener("change",Zp)));return c&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),zf={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return o1(r)})},timeline:function(e){return new Wn(e)},getTweensOf:function(e,t){return kt.getTweensOf(e,t)},getProperty:function(e,t,i,r){mn(e)&&(e=Vi(e)[0]);var s=fo(e||{}).get,o=i?$S:XS;return i==="native"&&(i=""),e&&(t?o((gi[t]&&gi[t].get||s)(e,t,i,r)):function(a,l,u){return o((gi[a]&&gi[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Vi(e),e.length>1){var r=e.map(function(c){return ui.quickSetter(c,t,i)}),s=r.length;return function(c){for(var f=s;f--;)r[f](c)}}e=e[0]||{};var o=gi[t],a=fo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var f=new o;_a._pt=0,f.init(e,i?c+i:c,_a,0,[e]),f.render(1,f),_a._pt&&Ng(1,_a)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=ui.to(e,Ci((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return kt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=po(e.ease,Ha.ease)),h_(Ha,e||{})},config:function(e){return h_(wi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!gi[a]&&!Ai[a]&&yu(t+" effect requires "+a+" plugin.")}),nh[t]=function(a,l,u){return i(Vi(a),Ci(l||{},s),u)},o&&(Wn.prototype[t]=function(a,l,u){return this.add(nh[t](a,Mr(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){ct[e]=po(t)},parseEase:function(e,t){return arguments.length?po(e,t):ct},getById:function(e){return kt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Wn(e),r,s;for(i.smoothChildTiming=ri(e.smoothChildTiming),kt.remove(i),i._dp=0,i._time=i._tTime=kt._time,r=kt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Qt&&r.vars.onComplete===r._targets[0]))&&mr(i,r,r._start-r._delay),r=s;return mr(kt,i,0),i},context:function(e,t){return e?new S1(e,t):Ut},matchMedia:function(e){return new cb(e)},matchMediaRefresh:function(){return mo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Zp()},addEventListener:function(e,t){var i=nf[e]||(nf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=nf[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:VT,wrapYoyo:GT,distribute:e1,random:n1,snap:t1,normalize:HT,getUnit:Ln,clamp:FT,splitColor:a1,toArray:Vi,selector:Yp,mapRange:r1,pipe:zT,unitize:BT,interpolate:WT,shuffle:JS},install:HS,effects:nh,ticker:xi,updateRoot:Wn.updateRoot,plugins:gi,globalTimeline:kt,core:{PropTween:oi,globals:VS,Tween:Qt,Timeline:Wn,Animation:wu,getCache:fo,_removeLinkedListItem:gd,reverting:function(){return Sn},context:function(e){return e&&Ut&&(Ut.data.push(e),e._ctx=Ut),Ut},suppressOverwrites:function(e){return xg=e}}};si("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return zf[n]=Qt[n]});xi.add(Wn.updateRoot);_a=zf.to({},{duration:0});var fb=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},db=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=fb(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},ah=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(mn(s)&&(l={},si(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}db(a,s)}}}},ui=zf.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Sn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},ah("roundProps",qp),ah("modifiers"),ah("snap",t1))||zf;Qt.version=Wn.version=ui.version="3.13.0";BS=1;Sg()&&ja();ct.Power0;ct.Power1;ct.Power2;ct.Power3;ct.Power4;ct.Linear;ct.Quad;ct.Cubic;ct.Quart;ct.Quint;ct.Strong;ct.Elastic;ct.Back;ct.SteppedEase;ct.Bounce;ct.Sine;ct.Expo;ct.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var x_,fs,Aa,Dg,ao,y_,Ug,hb=function(){return typeof window<"u"},Yr={},Zs=180/Math.PI,Ca=Math.PI/180,Fo=Math.atan2,S_=1e8,Ig=/([A-Z])/g,pb=/(left|right|width|margin|padding|x)/i,mb=/[\s,\(]\S/,gr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Qp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},gb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},_b=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},vb=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},M1=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},E1=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},xb=function(e,t,i){return e.style[t]=i},yb=function(e,t,i){return e.style.setProperty(t,i)},Sb=function(e,t,i){return e._gsap[t]=i},Mb=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},Eb=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},wb=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},zt="transform",ai=zt+"Origin",Tb=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Yr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=gr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Dr(r,a)}):this.tfm[e]=o.x?o[e]:Dr(r,e),e===ai&&(this.tfm.zOrigin=o.zOrigin);else return gr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(zt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ai,t,"")),e=zt}(s||t)&&this.props.push(e,t,s[e])},w1=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},bb=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Ig,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Ug(),(!s||!s.isStart)&&!i[zt]&&(w1(i),r.zOrigin&&i[ai]&&(i[ai]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},T1=function(e,t){var i={target:e,props:[],revert:bb,save:Tb};return e._gsap||ui.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},b1,Jp=function(e,t){var i=fs.createElementNS?fs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):fs.createElement(e);return i&&i.style?i:fs.createElement(e)},Gi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Ig,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Xa(t)||t,1)||""},M_="O,Moz,ms,Ms,Webkit".split(","),Xa=function(e,t,i){var r=t||ao,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(M_[o]+e in s););return o<0?null:(o===3?"ms":o>=0?M_[o]:"")+e},em=function(){hb()&&window.document&&(x_=window,fs=x_.document,Aa=fs.documentElement,ao=Jp("div")||{style:{}},Jp("div"),zt=Xa(zt),ai=zt+"Origin",ao.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",b1=!!Xa("perspective"),Ug=ui.core.reverting,Dg=1)},E_=function(e){var t=e.ownerSVGElement,i=Jp("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Aa.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Aa.removeChild(i),s},w_=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},A1=function(e){var t,i;try{t=e.getBBox()}catch{t=E_(e),i=1}return t&&(t.width||t.height)||i||(t=E_(e)),t&&!t.width&&!t.x&&!t.y?{x:+w_(e,["x","cx","x1"])||0,y:+w_(e,["y","cy","y1"])||0,width:0,height:0}:t},C1=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&A1(e))},Ao=function(e,t){if(t){var i=e.style,r;t in Yr&&t!==ai&&(t=zt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Ig,"-$1").toLowerCase())):i.removeAttribute(t)}},ds=function(e,t,i,r,s,o){var a=new oi(e._pt,t,i,0,1,o?E1:M1);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},T_={deg:1,rad:1,turn:1},Ab={grid:1,flex:1},Us=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=ao.style,l=pb.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",p=r==="%",_,m,g,d;if(r===o||!s||T_[r]||T_[o])return s;if(o!=="px"&&!h&&(s=n(e,t,i,"px")),d=e.getCTM&&C1(e),(p||o==="%")&&(Yr[t]||~t.indexOf("adius")))return _=d?e.getBBox()[l?"width":"height"]:e[c],jt(p?s/_*f:s/100*_);if(a[l?"width":"height"]=f+(h?o:r),m=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,d&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===fs||!m.appendChild)&&(m=fs.body),g=m._gsap,g&&p&&g.width&&l&&g.time===xi.time&&!g.uncache)return jt(s/g.width*f);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=f+r,_=e[c],v?e.style[t]=v:Ao(e,t)}else(p||o==="%")&&!Ab[Gi(m,"display")]&&(a.position=Gi(e,"position")),m===e&&(a.position="static"),m.appendChild(ao),_=ao[c],m.removeChild(ao),a.position="absolute";return l&&p&&(g=fo(m),g.time=xi.time,g.width=m[c]),jt(h?_*s/f:_&&s?f/_*s:0)},Dr=function(e,t,i,r){var s;return Dg||em(),t in gr&&t!=="transform"&&(t=gr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Yr[t]&&t!=="transform"?(s=bu(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Hf(Gi(e,ai))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Bf[t]&&Bf[t](e,t,i)||Gi(e,t)||WS(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Us(e,t,s,i)+i:s},Cb=function(e,t,i,r){if(!i||i==="none"){var s=Xa(t,e,1),o=s&&Gi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Gi(e,"borderTopColor"))}var a=new oi(this._pt,e.style,t,0,1,x1),l=0,u=0,c,f,h,p,_,m,g,d,v,x,y,M;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Gi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(m=e.style[t],e.style[t]=r,r=Gi(e,t)||r,m?e.style[t]=m:Ao(e,t)),c=[i,r],u1(c),i=c[0],r=c[1],h=i.match(ga)||[],M=r.match(ga)||[],M.length){for(;f=ga.exec(r);)g=f[0],v=r.substring(l,f.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),g!==(m=h[u++]||"")&&(p=parseFloat(m)||0,y=m.substr((p+"").length),g.charAt(1)==="="&&(g=ba(p,g)+y),d=parseFloat(g),x=g.substr((d+"").length),l=ga.lastIndex-x.length,x||(x=x||wi.units[t]||y,l===r.length&&(r+=x,a.e+=x)),y!==x&&(p=Us(e,t,m,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:p,c:d-p,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?E1:M1;return kS.test(r)&&(a.e=0),this._pt=a,a},b_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Rb=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=b_[i]||i,t[1]=b_[r]||r,t.join(" ")},Pb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Yr[a]&&(l=1,a=a==="transformOrigin"?ai:zt),Ao(i,a);l&&(Ao(i,zt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",bu(i,1),o.uncache=1,w1(r)))}},Bf={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new oi(e._pt,t,i,0,0,Pb);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Tu=[1,0,0,1,0,0],R1={},P1=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},A_=function(e){var t=Gi(e,zt);return P1(t)?Tu:t.substr(7).match(FS).map(jt)},Og=function(e,t){var i=e._gsap||fo(e),r=e.style,s=A_(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Tu:s):(s===Tu&&!e.offsetParent&&e!==Aa&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,Aa.appendChild(e)),s=A_(e),l?r.display=l:Ao(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Aa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},tm=function(e,t,i,r,s,o){var a=e._gsap,l=s||Og(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,p=l[0],_=l[1],m=l[2],g=l[3],d=l[4],v=l[5],x=t.split(" "),y=parseFloat(x[0])||0,M=parseFloat(x[1])||0,w,E,R,S;i?l!==Tu&&(E=p*g-_*m)&&(R=y*(g/E)+M*(-m/E)+(m*v-g*d)/E,S=y*(-_/E)+M*(p/E)-(p*v-_*d)/E,y=R,M=S):(w=A1(e),y=w.x+(~x[0].indexOf("%")?y/100*w.width:y),M=w.y+(~(x[1]||x[0]).indexOf("%")?M/100*w.height:M)),r||r!==!1&&a.smooth?(d=y-u,v=M-c,a.xOffset=f+(d*p+v*m)-d,a.yOffset=h+(d*_+v*g)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=M,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[ai]="0px 0px",o&&(ds(o,a,"xOrigin",u,y),ds(o,a,"yOrigin",c,M),ds(o,a,"xOffset",f,a.xOffset),ds(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+M)},bu=function(e,t){var i=e._gsap||new h1(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Gi(e,ai)||"0",c,f,h,p,_,m,g,d,v,x,y,M,w,E,R,S,T,z,U,K,N,W,Y,F,I,k,C,Q,te,q,Z,le;return c=f=h=m=g=d=v=x=y=0,p=_=1,i.svg=!!(e.getCTM&&C1(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[zt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[zt]!=="none"?l[zt]:"")),r.scale=r.rotate=r.translate="none"),E=Og(e,i.svg),i.svg&&(i.uncache?(I=e.getBBox(),u=i.xOrigin-I.x+"px "+(i.yOrigin-I.y)+"px",F=""):F=!t&&e.getAttribute("data-svg-origin"),tm(e,F||u,!!F||i.originIsAbsolute,i.smooth!==!1,E)),M=i.xOrigin||0,w=i.yOrigin||0,E!==Tu&&(z=E[0],U=E[1],K=E[2],N=E[3],c=W=E[4],f=Y=E[5],E.length===6?(p=Math.sqrt(z*z+U*U),_=Math.sqrt(N*N+K*K),m=z||U?Fo(U,z)*Zs:0,v=K||N?Fo(K,N)*Zs+m:0,v&&(_*=Math.abs(Math.cos(v*Ca))),i.svg&&(c-=M-(M*z+w*K),f-=w-(M*U+w*N))):(le=E[6],q=E[7],C=E[8],Q=E[9],te=E[10],Z=E[11],c=E[12],f=E[13],h=E[14],R=Fo(le,te),g=R*Zs,R&&(S=Math.cos(-R),T=Math.sin(-R),F=W*S+C*T,I=Y*S+Q*T,k=le*S+te*T,C=W*-T+C*S,Q=Y*-T+Q*S,te=le*-T+te*S,Z=q*-T+Z*S,W=F,Y=I,le=k),R=Fo(-K,te),d=R*Zs,R&&(S=Math.cos(-R),T=Math.sin(-R),F=z*S-C*T,I=U*S-Q*T,k=K*S-te*T,Z=N*T+Z*S,z=F,U=I,K=k),R=Fo(U,z),m=R*Zs,R&&(S=Math.cos(R),T=Math.sin(R),F=z*S+U*T,I=W*S+Y*T,U=U*S-z*T,Y=Y*S-W*T,z=F,W=I),g&&Math.abs(g)+Math.abs(m)>359.9&&(g=m=0,d=180-d),p=jt(Math.sqrt(z*z+U*U+K*K)),_=jt(Math.sqrt(Y*Y+le*le)),R=Fo(W,Y),v=Math.abs(R)>2e-4?R*Zs:0,y=Z?1/(Z<0?-Z:Z):0),i.svg&&(F=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!P1(Gi(e,zt)),F&&e.setAttribute("transform",F))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=m<=0?180:-180,m+=m<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=jt(p),i.scaleY=jt(_),i.rotation=jt(m)+a,i.rotationX=jt(g)+a,i.rotationY=jt(d)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[ai]=Hf(u)),i.xOffset=i.yOffset=0,i.force3D=wi.force3D,i.renderTransform=i.svg?Nb:b1?L1:Lb,i.uncache=0,i},Hf=function(e){return(e=e.split(" "))[0]+" "+e[1]},lh=function(e,t,i){var r=Ln(t);return jt(parseFloat(t)+parseFloat(Us(e,"x",i+"px",r)))+r},Lb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,L1(e,t)},Gs="0deg",hl="0px",Ws=") ",L1=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,f=i.rotationX,h=i.skewX,p=i.skewY,_=i.scaleX,m=i.scaleY,g=i.transformPerspective,d=i.force3D,v=i.target,x=i.zOrigin,y="",M=d==="auto"&&e&&e!==1||d===!0;if(x&&(f!==Gs||c!==Gs)){var w=parseFloat(c)*Ca,E=Math.sin(w),R=Math.cos(w),S;w=parseFloat(f)*Ca,S=Math.cos(w),o=lh(v,o,E*S*-x),a=lh(v,a,-Math.sin(w)*-x),l=lh(v,l,R*S*-x+x)}g!==hl&&(y+="perspective("+g+Ws),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(M||o!==hl||a!==hl||l!==hl)&&(y+=l!==hl||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ws),u!==Gs&&(y+="rotate("+u+Ws),c!==Gs&&(y+="rotateY("+c+Ws),f!==Gs&&(y+="rotateX("+f+Ws),(h!==Gs||p!==Gs)&&(y+="skew("+h+", "+p+Ws),(_!==1||m!==1)&&(y+="scale("+_+", "+m+Ws),v.style[zt]=y||"translate(0, 0)"},Nb=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,f=i.scaleX,h=i.scaleY,p=i.target,_=i.xOrigin,m=i.yOrigin,g=i.xOffset,d=i.yOffset,v=i.forceCSS,x=parseFloat(o),y=parseFloat(a),M,w,E,R,S;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Ca,u*=Ca,M=Math.cos(l)*f,w=Math.sin(l)*f,E=Math.sin(l-u)*-h,R=Math.cos(l-u)*h,u&&(c*=Ca,S=Math.tan(u-c),S=Math.sqrt(1+S*S),E*=S,R*=S,c&&(S=Math.tan(c),S=Math.sqrt(1+S*S),M*=S,w*=S)),M=jt(M),w=jt(w),E=jt(E),R=jt(R)):(M=f,R=h,w=E=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=Us(p,"x",o,"px"),y=Us(p,"y",a,"px")),(_||m||g||d)&&(x=jt(x+_-(_*M+m*E)+g),y=jt(y+m-(_*w+m*R)+d)),(r||s)&&(S=p.getBBox(),x=jt(x+r/100*S.width),y=jt(y+s/100*S.height)),S="matrix("+M+","+w+","+E+","+R+","+x+","+y+")",p.setAttribute("transform",S),v&&(p.style[zt]=S)},Db=function(e,t,i,r,s){var o=360,a=mn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Zs:1),u=l-r,c=r+u+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*S_)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*S_)%o-~~(u/o)*o)),e._pt=h=new oi(e._pt,t,i,r,u,gb),h.e=c,h.u="deg",e._props.push(i),h},C_=function(e,t){for(var i in t)e[i]=t[i];return e},Ub=function(e,t,i){var r=C_({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,f,h,p,_;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[zt]=t,a=bu(i,1),Ao(i,zt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[zt],o[zt]=t,a=bu(i,1),o[zt]=u);for(l in Yr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=Ln(u),_=Ln(c),f=p!==_?Us(i,l,u,_):parseFloat(u),h=parseFloat(c),e._pt=new oi(e._pt,a,l,f,h-f,Qp),e._pt.u=_||0,e._props.push(l));C_(a,r)};si("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Bf[e>1?"border"+n:n]=function(a,l,u,c,f){var h,p;if(arguments.length<4)return h=o.map(function(_){return Dr(a,_,u)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(c+"").split(" "),p={},o.forEach(function(_,m){return p[_]=h[m]=h[m]||h[(m-1)/2|0]}),a.init(l,p,f)}});var N1={name:"css",register:em,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,f,h,p,_,m,g,d,v,x,y,M,w,E,R;Dg||em(),this.styles=this.styles||T1(e),R=this.styles.props,this.tween=i;for(m in t)if(m!=="autoRound"&&(c=t[m],!(gi[m]&&p1(m,t,i,r,e,s)))){if(p=typeof c,_=Bf[m],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Mu(c)),_)_(this,e,m,c,i)&&(E=1);else if(m.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(m)+"").trim(),c+="",bs.lastIndex=0,bs.test(u)||(g=Ln(u),d=Ln(c)),d?g!==d&&(u=Us(e,m,u,d)+d):g&&(c+=g),this.add(a,"setProperty",u,c,r,s,0,0,m),o.push(m),R.push(m,0,a[m]);else if(p!=="undefined"){if(l&&m in l?(u=typeof l[m]=="function"?l[m].call(i,r,e,s):l[m],mn(u)&&~u.indexOf("random(")&&(u=Mu(u)),Ln(u+"")||u==="auto"||(u+=wi.units[m]||Ln(Dr(e,m))||""),(u+"").charAt(1)==="="&&(u=Dr(e,m))):u=Dr(e,m),h=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),f=parseFloat(c),m in gr&&(m==="autoAlpha"&&(h===1&&Dr(e,"visibility")==="hidden"&&f&&(h=0),R.push("visibility",0,a.visibility),ds(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),m!=="scale"&&m!=="transform"&&(m=gr[m],~m.indexOf(",")&&(m=m.split(",")[0]))),x=m in Yr,x){if(this.styles.save(m),p==="string"&&c.substring(0,6)==="var(--"&&(c=Gi(e,c.substring(4,c.indexOf(")"))),f=parseFloat(c)),y||(M=e._gsap,M.renderTransform&&!t.parseTransform||bu(e,t.parseTransform),w=t.smoothOrigin!==!1&&M.smooth,y=this._pt=new oi(this._pt,a,zt,0,1,M.renderTransform,M,0,-1),y.dep=1),m==="scale")this._pt=new oi(this._pt,M,"scaleY",M.scaleY,(v?ba(M.scaleY,v+f):f)-M.scaleY||0,Qp),this._pt.u=0,o.push("scaleY",m),m+="X";else if(m==="transformOrigin"){R.push(ai,0,a[ai]),c=Rb(c),M.svg?tm(e,c,0,w,0,this):(d=parseFloat(c.split(" ")[2])||0,d!==M.zOrigin&&ds(this,M,"zOrigin",M.zOrigin,d),ds(this,a,m,Hf(u),Hf(c)));continue}else if(m==="svgOrigin"){tm(e,c,1,w,0,this);continue}else if(m in R1){Db(this,M,m,h,v?ba(h,v+c):c);continue}else if(m==="smoothOrigin"){ds(this,M,"smooth",M.smooth,c);continue}else if(m==="force3D"){M[m]=c;continue}else if(m==="transform"){Ub(this,c,e);continue}}else m in a||(m=Xa(m)||m);if(x||(f||f===0)&&(h||h===0)&&!mb.test(c)&&m in a)g=(u+"").substr((h+"").length),f||(f=0),d=Ln(c)||(m in wi.units?wi.units[m]:g),g!==d&&(h=Us(e,m,u,d)),this._pt=new oi(this._pt,x?M:a,m,h,(v?ba(h,v+f):f)-h,!x&&(d==="px"||m==="zIndex")&&t.autoRound!==!1?vb:Qp),this._pt.u=d||0,g!==d&&d!=="%"&&(this._pt.b=u,this._pt.r=_b);else if(m in a)Cb.call(this,e,m,u,v?v+c:c);else if(m in e)this.add(e,m,u||e[m],v?v+c:c,r,s);else if(m!=="parseTransform"){Eg(m,c);continue}x||(m in a?R.push(m,0,a[m]):typeof e[m]=="function"?R.push(m,2,e[m]()):R.push(m,1,u||e[m])),o.push(m)}}E&&y1(this)},render:function(e,t){if(t.tween._time||!Ug())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Dr,aliases:gr,getSetter:function(e,t,i){var r=gr[t];return r&&r.indexOf(",")<0&&(t=r),t in Yr&&t!==ai&&(e._gsap.x||Dr(e,"x"))?i&&y_===i?t==="scale"?Mb:Sb:(y_=i||{})&&(t==="scale"?Eb:wb):e.style&&!yg(e.style[t])?xb:~t.indexOf("-")?yb:Lg(e,t)},core:{_removeProperty:Ao,_getMatrix:Og}};ui.utils.checkPrefix=Xa;ui.core.getStyleSaver=T1;(function(n,e,t,i){var r=si(n+","+e+","+t,function(s){Yr[s]=1});si(e,function(s){wi.units[s]="deg",R1[s]=1}),gr[r[13]]=n+","+e,si(i,function(s){var o=s.split(":");gr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");si("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){wi.units[n]="px"});ui.registerPlugin(N1);var $t=ui.registerPlugin(N1)||ui;$t.core.Tween;function Ib(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function Ob(n,e,t){return e&&Ib(n.prototype,e),n}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var xn,rf,yi,hs,ps,Ra,D1,Qs,$l,U1,kr,Ji,I1,O1=function(){return xn||typeof window<"u"&&(xn=window.gsap)&&xn.registerPlugin&&xn},F1=1,va=[],rt=[],yr=[],Yl=Date.now,nm=function(e,t){return t},Fb=function(){var e=$l.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,rt),r.push.apply(r,yr),rt=i,yr=r,nm=function(o,a){return t[o](a)}},As=function(e,t){return~yr.indexOf(e)&&yr[yr.indexOf(e)+1][t]},ql=function(e){return!!~U1.indexOf(e)},Fn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},On=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},oc="scrollLeft",ac="scrollTop",im=function(){return kr&&kr.isPressed||rt.cache++},Vf=function(e,t){var i=function r(s){if(s||s===0){F1&&(yi.history.scrollRestoration="manual");var o=kr&&kr.isPressed;s=r.v=Math.round(s)||(kr&&kr.iOS?1:0),e(s),r.cacheID=rt.cache,o&&nm("ss",s)}else(t||rt.cache!==r.cacheID||nm("ref"))&&(r.cacheID=rt.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},jn={s:oc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Vf(function(n){return arguments.length?yi.scrollTo(n,on.sc()):yi.pageXOffset||hs[oc]||ps[oc]||Ra[oc]||0})},on={s:ac,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:jn,sc:Vf(function(n){return arguments.length?yi.scrollTo(jn.sc(),n):yi.pageYOffset||hs[ac]||ps[ac]||Ra[ac]||0})},Zn=function(e,t){return(t&&t._ctx&&t._ctx.selector||xn.utils.toArray)(e)[0]||(typeof e=="string"&&xn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},kb=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Is=function(e,t){var i=t.s,r=t.sc;ql(e)&&(e=hs.scrollingElement||ps);var s=rt.indexOf(e),o=r===on.sc?1:2;!~s&&(s=rt.push(e)-1),rt[s+o]||Fn(e,"scroll",im);var a=rt[s+o],l=a||(rt[s+o]=Vf(As(e,i),!0)||(ql(e)?r:Vf(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=xn.getProperty(e,"scrollBehavior")==="smooth"),l},rm=function(e,t,i){var r=e,s=e,o=Yl(),a=o,l=t||50,u=Math.max(500,l*3),c=function(_,m){var g=Yl();m||g-o>l?(s=r,r=_,a=o,o=g):i?r+=_:r=s+(_-s)/(g-a)*(o-a)},f=function(){s=r=i?0:r,a=o=0},h=function(_){var m=a,g=s,d=Yl();return(_||_===0)&&_!==r&&c(_),o===a||d-a>u?0:(r+(i?g:-g))/((i?d:o)-m)*1e3};return{update:c,reset:f,getVelocity:h}},pl=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},R_=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},k1=function(){$l=xn.core.globals().ScrollTrigger,$l&&$l.core&&Fb()},z1=function(e){return xn=e||O1(),!rf&&xn&&typeof document<"u"&&document.body&&(yi=window,hs=document,ps=hs.documentElement,Ra=hs.body,U1=[yi,hs,ps,Ra],xn.utils.clamp,I1=xn.core.context||function(){},Qs="onpointerenter"in Ra?"pointer":"mouse",D1=Yt.isTouch=yi.matchMedia&&yi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in yi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ji=Yt.eventTypes=("ontouchstart"in ps?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ps?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return F1=0},500),k1(),rf=1),rf};jn.op=on;rt.cache=0;var Yt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){rf||z1(xn)||console.warn("Please gsap.registerPlugin(Observer)"),$l||k1();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,f=i.onStop,h=i.onStopDelay,p=i.ignore,_=i.wheelSpeed,m=i.event,g=i.onDragStart,d=i.onDragEnd,v=i.onDrag,x=i.onPress,y=i.onRelease,M=i.onRight,w=i.onLeft,E=i.onUp,R=i.onDown,S=i.onChangeX,T=i.onChangeY,z=i.onChange,U=i.onToggleX,K=i.onToggleY,N=i.onHover,W=i.onHoverEnd,Y=i.onMove,F=i.ignoreCheck,I=i.isNormalizer,k=i.onGestureStart,C=i.onGestureEnd,Q=i.onWheel,te=i.onEnable,q=i.onDisable,Z=i.onClick,le=i.scrollSpeed,pe=i.capture,me=i.allowClicks,De=i.lockAxis,Ae=i.onLockAxis;this.target=a=Zn(a)||ps,this.vars=i,p&&(p=xn.utils.toArray(p)),r=r||1e-9,s=s||0,_=_||1,le=le||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(yi.getComputedStyle(Ra).lineHeight)||22);var ke,Ue,H,We,_e,He,Ce,j=this,Ve=0,Ge=0,st=i.passive||!c&&i.passive!==!1,Ze=Is(a,jn),yt=Is(a,on),P=Ze(),b=yt(),B=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ji[0]==="pointerdown",oe=ql(a),ee=a.ownerDocument||hs,re=[0,0,0],xe=[0,0,0],ue=0,ve=function(){return ue=Yl()},ye=function(Me,Le){return(j.event=Me)&&p&&kb(Me.target,p)||Le&&B&&Me.pointerType!=="touch"||F&&F(Me,Le)},at=function(){j._vx.reset(),j._vy.reset(),Ue.pause(),f&&f(j)},se=function(){var Me=j.deltaX=R_(re),Le=j.deltaY=R_(xe),ce=Math.abs(Me)>=r,Fe=Math.abs(Le)>=r;z&&(ce||Fe)&&z(j,Me,Le,re,xe),ce&&(M&&j.deltaX>0&&M(j),w&&j.deltaX<0&&w(j),S&&S(j),U&&j.deltaX<0!=Ve<0&&U(j),Ve=j.deltaX,re[0]=re[1]=re[2]=0),Fe&&(R&&j.deltaY>0&&R(j),E&&j.deltaY<0&&E(j),T&&T(j),K&&j.deltaY<0!=Ge<0&&K(j),Ge=j.deltaY,xe[0]=xe[1]=xe[2]=0),(We||H)&&(Y&&Y(j),H&&(g&&H===1&&g(j),v&&v(j),H=0),We=!1),He&&!(He=!1)&&Ae&&Ae(j),_e&&(Q(j),_e=!1),ke=0},ut=function(Me,Le,ce){re[ce]+=Me,xe[ce]+=Le,j._vx.update(Me),j._vy.update(Le),u?ke||(ke=requestAnimationFrame(se)):se()},je=function(Me,Le){De&&!Ce&&(j.axis=Ce=Math.abs(Me)>Math.abs(Le)?"x":"y",He=!0),Ce!=="y"&&(re[2]+=Me,j._vx.update(Me,!0)),Ce!=="x"&&(xe[2]+=Le,j._vy.update(Le,!0)),u?ke||(ke=requestAnimationFrame(se)):se()},Oe=function(Me){if(!ye(Me,1)){Me=pl(Me,c);var Le=Me.clientX,ce=Me.clientY,Fe=Le-j.x,Ie=ce-j.y,$e=j.isDragging;j.x=Le,j.y=ce,($e||(Fe||Ie)&&(Math.abs(j.startX-Le)>=s||Math.abs(j.startY-ce)>=s))&&(H=$e?2:1,$e||(j.isDragging=!0),je(Fe,Ie))}},Re=j.onPress=function(be){ye(be,1)||be&&be.button||(j.axis=Ce=null,Ue.pause(),j.isPressed=!0,be=pl(be),Ve=Ge=0,j.startX=j.x=be.clientX,j.startY=j.y=be.clientY,j._vx.reset(),j._vy.reset(),Fn(I?a:ee,Ji[1],Oe,st,!0),j.deltaX=j.deltaY=0,x&&x(j))},ne=j.onRelease=function(be){if(!ye(be,1)){On(I?a:ee,Ji[1],Oe,!0);var Me=!isNaN(j.y-j.startY),Le=j.isDragging,ce=Le&&(Math.abs(j.x-j.startX)>3||Math.abs(j.y-j.startY)>3),Fe=pl(be);!ce&&Me&&(j._vx.reset(),j._vy.reset(),c&&me&&xn.delayedCall(.08,function(){if(Yl()-ue>300&&!be.defaultPrevented){if(be.target.click)be.target.click();else if(ee.createEvent){var Ie=ee.createEvent("MouseEvents");Ie.initMouseEvent("click",!0,!0,yi,1,Fe.screenX,Fe.screenY,Fe.clientX,Fe.clientY,!1,!1,!1,!1,0,null),be.target.dispatchEvent(Ie)}}})),j.isDragging=j.isGesturing=j.isPressed=!1,f&&Le&&!I&&Ue.restart(!0),H&&se(),d&&Le&&d(j),y&&y(j,ce)}},qe=function(Me){return Me.touches&&Me.touches.length>1&&(j.isGesturing=!0)&&k(Me,j.isDragging)},D=function(){return(j.isGesturing=!1)||C(j)},he=function(Me){if(!ye(Me)){var Le=Ze(),ce=yt();ut((Le-P)*le,(ce-b)*le,1),P=Le,b=ce,f&&Ue.restart(!0)}},ie=function(Me){if(!ye(Me)){Me=pl(Me,c),Q&&(_e=!0);var Le=(Me.deltaMode===1?l:Me.deltaMode===2?yi.innerHeight:1)*_;ut(Me.deltaX*Le,Me.deltaY*Le,0),f&&!I&&Ue.restart(!0)}},J=function(Me){if(!ye(Me)){var Le=Me.clientX,ce=Me.clientY,Fe=Le-j.x,Ie=ce-j.y;j.x=Le,j.y=ce,We=!0,f&&Ue.restart(!0),(Fe||Ie)&&je(Fe,Ie)}},fe=function(Me){j.event=Me,N(j)},Ne=function(Me){j.event=Me,W(j)},Je=function(Me){return ye(Me)||pl(Me,c)&&Z(j)};Ue=j._dc=xn.delayedCall(h||.25,at).pause(),j.deltaX=j.deltaY=0,j._vx=rm(0,50,!0),j._vy=rm(0,50,!0),j.scrollX=Ze,j.scrollY=yt,j.isDragging=j.isGesturing=j.isPressed=!1,I1(this),j.enable=function(be){return j.isEnabled||(Fn(oe?ee:a,"scroll",im),o.indexOf("scroll")>=0&&Fn(oe?ee:a,"scroll",he,st,pe),o.indexOf("wheel")>=0&&Fn(a,"wheel",ie,st,pe),(o.indexOf("touch")>=0&&D1||o.indexOf("pointer")>=0)&&(Fn(a,Ji[0],Re,st,pe),Fn(ee,Ji[2],ne),Fn(ee,Ji[3],ne),me&&Fn(a,"click",ve,!0,!0),Z&&Fn(a,"click",Je),k&&Fn(ee,"gesturestart",qe),C&&Fn(ee,"gestureend",D),N&&Fn(a,Qs+"enter",fe),W&&Fn(a,Qs+"leave",Ne),Y&&Fn(a,Qs+"move",J)),j.isEnabled=!0,j.isDragging=j.isGesturing=j.isPressed=We=H=!1,j._vx.reset(),j._vy.reset(),P=Ze(),b=yt(),be&&be.type&&Re(be),te&&te(j)),j},j.disable=function(){j.isEnabled&&(va.filter(function(be){return be!==j&&ql(be.target)}).length||On(oe?ee:a,"scroll",im),j.isPressed&&(j._vx.reset(),j._vy.reset(),On(I?a:ee,Ji[1],Oe,!0)),On(oe?ee:a,"scroll",he,pe),On(a,"wheel",ie,pe),On(a,Ji[0],Re,pe),On(ee,Ji[2],ne),On(ee,Ji[3],ne),On(a,"click",ve,!0),On(a,"click",Je),On(ee,"gesturestart",qe),On(ee,"gestureend",D),On(a,Qs+"enter",fe),On(a,Qs+"leave",Ne),On(a,Qs+"move",J),j.isEnabled=j.isPressed=j.isDragging=!1,q&&q(j))},j.kill=j.revert=function(){j.disable();var be=va.indexOf(j);be>=0&&va.splice(be,1),kr===j&&(kr=0)},va.push(j),I&&ql(a)&&(kr=j),j.enable(m)},Ob(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();Yt.version="3.13.0";Yt.create=function(n){return new Yt(n)};Yt.register=z1;Yt.getAll=function(){return va.slice()};Yt.getById=function(n){return va.filter(function(e){return e.vars.id===n})[0]};O1()&&xn.registerPlugin(Yt);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ee,na,nt,Tt,_i,pt,Fg,Gf,Au,Kl,Cl,lc,Cn,xd,sm,Hn,P_,L_,ia,B1,uh,H1,zn,om,V1,G1,is,am,kg,Pa,zg,Wf,lm,ch,uc=1,Rn=Date.now,fh=Rn(),ji=0,Rl=0,N_=function(e,t,i){var r=mi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},D_=function(e,t){return t&&(!mi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},zb=function n(){return Rl&&requestAnimationFrame(n)},U_=function(){return xd=1},I_=function(){return xd=0},dr=function(e){return e},Pl=function(e){return Math.round(e*1e5)/1e5||0},W1=function(){return typeof window<"u"},j1=function(){return Ee||W1()&&(Ee=window.gsap)&&Ee.registerPlugin&&Ee},Co=function(e){return!!~Fg.indexOf(e)},X1=function(e){return(e==="Height"?zg:nt["inner"+e])||_i["client"+e]||pt["client"+e]},$1=function(e){return As(e,"getBoundingClientRect")||(Co(e)?function(){return uf.width=nt.innerWidth,uf.height=zg,uf}:function(){return Ur(e)})},Bb=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=As(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?X1(s):e["client"+s])||0}},Hb=function(e,t){return!t||~yr.indexOf(e)?$1(e):function(){return uf}},_r=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=As(e,i))?o()-$1(e)()[s]:Co(e)?(_i[i]||pt[i])-X1(r):e[i]-e["offset"+r])},cc=function(e,t){for(var i=0;i<ia.length;i+=3)(!t||~t.indexOf(ia[i+1]))&&e(ia[i],ia[i+1],ia[i+2])},mi=function(e){return typeof e=="string"},Nn=function(e){return typeof e=="function"},Ll=function(e){return typeof e=="number"},Js=function(e){return typeof e=="object"},ml=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},dh=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},ko=Math.abs,Y1="left",q1="top",Bg="right",Hg="bottom",go="width",_o="height",Zl="Right",Ql="Left",Jl="Top",eu="Bottom",Zt="padding",Oi="margin",$a="Width",Vg="Height",rn="px",Fi=function(e){return nt.getComputedStyle(e)},Vb=function(e){var t=Fi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},O_=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Ur=function(e,t){var i=t&&Fi(e)[sm]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ee.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return i&&i.progress(0).kill(),r},jf=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},K1=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},Gb=function(e){return function(t){return Ee.utils.snap(K1(e),t)}},Gg=function(e){var t=Ee.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},Wb=function(e){return function(t,i){return Gg(K1(e))(t,i.direction)}},fc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},dn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},fn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},dc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},F_={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},hc={toggleActions:"play",anticipatePin:0},Xf={top:0,left:0,center:.5,bottom:1,right:1},sf=function(e,t){if(mi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in Xf?Xf[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},pc=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,f=s.fontSize,h=s.indent,p=s.fontWeight,_=Tt.createElement("div"),m=Co(i)||As(i,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,d=m?pt:i,v=e.indexOf("start")!==-1,x=v?u:c,y="border-color:"+x+";font-size:"+f+";color:"+x+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((g||l)&&m?"fixed;":"absolute;"),(g||l||!m)&&(y+=(r===on?Bg:Hg)+":"+(o+parseFloat(h))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=v,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=y,_.innerText=t||t===0?e+"-"+t:e,d.children[0]?d.insertBefore(_,d.children[0]):d.appendChild(_),_._offset=_["offset"+r.op.d2],of(_,0,r,v),_},of=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+$a]=1,s["border"+a+$a]=0,s[i.p]=t+"px",Ee.set(e,s)},et=[],um={},Cu,k_=function(){return Rn()-ji>34&&(Cu||(Cu=requestAnimationFrame(Vr)))},zo=function(){(!zn||!zn.isPressed||zn.startX>pt.clientWidth)&&(rt.cache++,zn?Cu||(Cu=requestAnimationFrame(Vr)):Vr(),ji||Po("scrollStart"),ji=Rn())},hh=function(){G1=nt.innerWidth,V1=nt.innerHeight},Nl=function(e){rt.cache++,(e===!0||!Cn&&!H1&&!Tt.fullscreenElement&&!Tt.webkitFullscreenElement&&(!om||G1!==nt.innerWidth||Math.abs(nt.innerHeight-V1)>nt.innerHeight*.25))&&Gf.restart(!0)},Ro={},jb=[],Z1=function n(){return fn(Ke,"scrollEnd",n)||lo(!0)},Po=function(e){return Ro[e]&&Ro[e].map(function(t){return t()})||jb},hi=[],Q1=function(e){for(var t=0;t<hi.length;t+=5)(!e||hi[t+4]&&hi[t+4].query===e)&&(hi[t].style.cssText=hi[t+1],hi[t].getBBox&&hi[t].setAttribute("transform",hi[t+2]||""),hi[t+3].uncache=1)},Wg=function(e,t){var i;for(Hn=0;Hn<et.length;Hn++)i=et[Hn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Wf=!0,t&&Q1(t),t||Po("revert")},J1=function(e,t){rt.cache++,(t||!Vn)&&rt.forEach(function(i){return Nn(i)&&i.cacheID++&&(i.rec=0)}),mi(e)&&(nt.history.scrollRestoration=kg=e)},Vn,vo=0,z_,Xb=function(){if(z_!==vo){var e=z_=vo;requestAnimationFrame(function(){return e===vo&&lo(!0)})}},eM=function(){pt.appendChild(Pa),zg=!zn&&Pa.offsetHeight||nt.innerHeight,pt.removeChild(Pa)},B_=function(e){return Au(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},lo=function(e,t){if(_i=Tt.documentElement,pt=Tt.body,Fg=[nt,Tt,_i,pt],ji&&!e&&!Wf){dn(Ke,"scrollEnd",Z1);return}eM(),Vn=Ke.isRefreshing=!0,rt.forEach(function(r){return Nn(r)&&++r.cacheID&&(r.rec=r())});var i=Po("refreshInit");B1&&Ke.sort(),t||Wg(),rt.forEach(function(r){Nn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),et.slice(0).forEach(function(r){return r.refresh()}),Wf=!1,et.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),lm=1,B_(!0),et.forEach(function(r){var s=_r(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),B_(!1),lm=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),rt.forEach(function(r){Nn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),J1(kg,1),Gf.pause(),vo++,Vn=2,Vr(2),et.forEach(function(r){return Nn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Vn=Ke.isRefreshing=!1,Po("refresh")},cm=0,af=1,tu,Vr=function(e){if(e===2||!Vn&&!Wf){Ke.isUpdating=!0,tu&&tu.update(0);var t=et.length,i=Rn(),r=i-fh>=50,s=t&&et[0].scroll();if(af=cm>s?-1:1,Vn||(cm=s),r&&(ji&&!xd&&i-ji>200&&(ji=0,Po("scrollEnd")),Cl=fh,fh=i),af<0){for(Hn=t;Hn-- >0;)et[Hn]&&et[Hn].update(0,r);af=1}else for(Hn=0;Hn<t;Hn++)et[Hn]&&et[Hn].update(0,r);Ke.isUpdating=!1}Cu=0},fm=[Y1,q1,Hg,Bg,Oi+eu,Oi+Zl,Oi+Jl,Oi+Ql,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],lf=fm.concat([go,_o,"boxSizing","max"+$a,"max"+Vg,"position",Oi,Zt,Zt+Jl,Zt+Zl,Zt+eu,Zt+Ql]),$b=function(e,t,i){La(i);var r=e._gsap;if(r.spacerIsNative)La(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},ph=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=fm.length,o=t.style,a=e.style,l;s--;)l=fm[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[Hg]=a[Bg]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[go]=jf(e,jn)+rn,o[_o]=jf(e,on)+rn,o[Zt]=a[Oi]=a[q1]=a[Y1]="0",La(r),a[go]=a["max"+$a]=i[go],a[_o]=a["max"+Vg]=i[_o],a[Zt]=i[Zt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Yb=/([A-Z])/g,La=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Ee.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(Yb,"-$1").toLowerCase())}},mc=function(e){for(var t=lf.length,i=e.style,r=[],s=0;s<t;s++)r.push(lf[s],i[lf[s]]);return r.t=e,r},qb=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},uf={left:0,top:0},H_=function(e,t,i,r,s,o,a,l,u,c,f,h,p,_){Nn(e)&&(e=e(l)),mi(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?sf("0"+e.substr(3),i):0));var m=p?p.time():0,g,d,v;if(p&&p.seek(0),isNaN(e)||(e=+e),Ll(e))p&&(e=Ee.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,h,e)),a&&of(a,i,r,!0);else{Nn(t)&&(t=t(l));var x=(e||"0").split(" "),y,M,w,E;v=Zn(t,l)||pt,y=Ur(v)||{},(!y||!y.left&&!y.top)&&Fi(v).display==="none"&&(E=v.style.display,v.style.display="block",y=Ur(v),E?v.style.display=E:v.style.removeProperty("display")),M=sf(x[0],y[r.d]),w=sf(x[1]||"0",i),e=y[r.p]-u[r.p]-c+M+s-w,a&&of(a,w,r,i-w<20||a._isStart&&w>20),i-=i-w}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var R=e+i,S=o._isStart;g="scroll"+r.d2,of(o,R,r,S&&R>20||!S&&(f?Math.max(pt[g],_i[g]):o.parentNode[g])<=R+1),f&&(u=Ur(a),f&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+rn))}return p&&v&&(g=Ur(v),p.seek(h),d=Ur(v),p._caScrollDist=g[r.p]-d[r.p],e=e/p._caScrollDist*h),p&&p.seek(m),p?e:Math.round(e)},Kb=/(webkit|moz|length|cssText|inset)/i,V_=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===pt){e._stOrig=s.cssText,a=Fi(e);for(o in a)!+o&&!Kb.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Ee.core.getCache(e).uncache=1,t.appendChild(e)}},tM=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},gc=function(e,t,i){var r={};r[t.p]="+="+i,Ee.set(e,r)},G_=function(e,t){var i=Is(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,f){var h=o.tween,p=l.onComplete,_={};u=u||i();var m=tM(i,u,function(){h.kill(),o.tween=0});return f=c&&f||0,c=c||a-u,h&&h.kill(),l[r]=a,l.inherit=!1,l.modifiers=_,_[r]=function(){return m(u+c*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){rt.cache++,o.tween&&Vr()},l.onComplete=function(){o.tween=0,p&&p.call(h)},h=o.tween=Ee.to(e,l),h};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},dn(e,"wheel",i.wheelHandler),Ke.isTouch&&dn(e,"touchmove",i.wheelHandler),s},Ke=function(){function n(t,i){na||n.register(Ee)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),am(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Rl){this.update=this.refresh=this.kill=dr;return}i=O_(mi(i)||Ll(i)||i.nodeType?{trigger:i}:i,hc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,f=s.scrub,h=s.trigger,p=s.pin,_=s.pinSpacing,m=s.invalidateOnRefresh,g=s.anticipatePin,d=s.onScrubComplete,v=s.onSnapComplete,x=s.once,y=s.snap,M=s.pinReparent,w=s.pinSpacer,E=s.containerAnimation,R=s.fastScrollEnd,S=s.preventOverlaps,T=i.horizontal||i.containerAnimation&&i.horizontal!==!1?jn:on,z=!f&&f!==0,U=Zn(i.scroller||nt),K=Ee.core.getCache(U),N=Co(U),W=("pinType"in i?i.pinType:As(U,"pinType")||N&&"fixed")==="fixed",Y=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],F=z&&i.toggleActions.split(" "),I="markers"in i?i.markers:hc.markers,k=N?0:parseFloat(Fi(U)["border"+T.p2+$a])||0,C=this,Q=i.onRefreshInit&&function(){return i.onRefreshInit(C)},te=Bb(U,N,T),q=Hb(U,N),Z=0,le=0,pe=0,me=Is(U,T),De,Ae,ke,Ue,H,We,_e,He,Ce,j,Ve,Ge,st,Ze,yt,P,b,B,oe,ee,re,xe,ue,ve,ye,at,se,ut,je,Oe,Re,ne,qe,D,he,ie,J,fe,Ne;if(C._startClamp=C._endClamp=!1,C._dir=T,g*=45,C.scroller=U,C.scroll=E?E.time.bind(E):me,Ue=me(),C.vars=i,r=r||i.animation,"refreshPriority"in i&&(B1=1,i.refreshPriority===-9999&&(tu=C)),K.tweenScroll=K.tweenScroll||{top:G_(U,on),left:G_(U,jn)},C.tweenTo=De=K.tweenScroll[T.p],C.scrubDuration=function(ce){qe=Ll(ce)&&ce,qe?ne?ne.duration(ce):ne=Ee.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:qe,paused:!0,onComplete:function(){return d&&d(C)}}):(ne&&ne.progress(1).kill(),ne=0)},r&&(r.vars.lazy=!1,r._initted&&!C.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),C.animation=r.pause(),r.scrollTrigger=C,C.scrubDuration(f),Oe=0,l||(l=r.vars.id)),y&&((!Js(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in pt.style&&Ee.set(N?[pt,_i]:U,{scrollBehavior:"auto"}),rt.forEach(function(ce){return Nn(ce)&&ce.target===(N?Tt.scrollingElement||_i:U)&&(ce.smooth=!1)}),ke=Nn(y.snapTo)?y.snapTo:y.snapTo==="labels"?Gb(r):y.snapTo==="labelsDirectional"?Wb(r):y.directional!==!1?function(ce,Fe){return Gg(y.snapTo)(ce,Rn()-le<500?0:Fe.direction)}:Ee.utils.snap(y.snapTo),D=y.duration||{min:.1,max:2},D=Js(D)?Kl(D.min,D.max):Kl(D,D),he=Ee.delayedCall(y.delay||qe/2||.1,function(){var ce=me(),Fe=Rn()-le<500,Ie=De.tween;if((Fe||Math.abs(C.getVelocity())<10)&&!Ie&&!xd&&Z!==ce){var $e=(ce-We)/Ze,Ot=r&&!z?r.totalProgress():$e,tt=Fe?0:(Ot-Re)/(Rn()-Cl)*1e3||0,Et=Ee.utils.clamp(-$e,1-$e,ko(tt/2)*tt/.185),tn=$e+(y.inertia===!1?0:Et),Ct,wt,mt=y,ci=mt.onStart,A=mt.onInterrupt,O=mt.onComplete;if(Ct=ke(tn,C),Ll(Ct)||(Ct=tn),wt=Math.max(0,Math.round(We+Ct*Ze)),ce<=_e&&ce>=We&&wt!==ce){if(Ie&&!Ie._initted&&Ie.data<=ko(wt-ce))return;y.inertia===!1&&(Et=Ct-$e),De(wt,{duration:D(ko(Math.max(ko(tn-Ot),ko(Ct-Ot))*.185/tt/.05||0)),ease:y.ease||"power3",data:ko(wt-ce),onInterrupt:function(){return he.restart(!0)&&A&&A(C)},onComplete:function(){C.update(),Z=me(),r&&!z&&(ne?ne.resetTo("totalProgress",Ct,r._tTime/r._tDur):r.progress(Ct)),Oe=Re=r&&!z?r.totalProgress():C.progress,v&&v(C),O&&O(C)}},ce,Et*Ze,wt-ce-Et*Ze),ci&&ci(C,De.tween)}}else C.isActive&&Z!==ce&&he.restart(!0)}).pause()),l&&(um[l]=C),h=C.trigger=Zn(h||p!==!0&&p),Ne=h&&h._gsap&&h._gsap.stRevert,Ne&&(Ne=Ne(C)),p=p===!0?h:Zn(p),mi(a)&&(a={targets:h,className:a}),p&&(_===!1||_===Oi||(_=!_&&p.parentNode&&p.parentNode.style&&Fi(p.parentNode).display==="flex"?!1:Zt),C.pin=p,Ae=Ee.core.getCache(p),Ae.spacer?yt=Ae.pinState:(w&&(w=Zn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Ae.spacerIsNative=!!w,w&&(Ae.spacerState=mc(w))),Ae.spacer=B=w||Tt.createElement("div"),B.classList.add("pin-spacer"),l&&B.classList.add("pin-spacer-"+l),Ae.pinState=yt=mc(p)),i.force3D!==!1&&Ee.set(p,{force3D:!0}),C.spacer=B=Ae.spacer,je=Fi(p),ve=je[_+T.os2],ee=Ee.getProperty(p),re=Ee.quickSetter(p,T.a,rn),ph(p,B,je),b=mc(p)),I){Ge=Js(I)?O_(I,F_):F_,j=pc("scroller-start",l,U,T,Ge,0),Ve=pc("scroller-end",l,U,T,Ge,0,j),oe=j["offset"+T.op.d2];var Je=Zn(As(U,"content")||U);He=this.markerStart=pc("start",l,Je,T,Ge,oe,0,E),Ce=this.markerEnd=pc("end",l,Je,T,Ge,oe,0,E),E&&(fe=Ee.quickSetter([He,Ce],T.a,rn)),!W&&!(yr.length&&As(U,"fixedMarkers")===!0)&&(Vb(N?pt:U),Ee.set([j,Ve],{force3D:!0}),at=Ee.quickSetter(j,T.a,rn),ut=Ee.quickSetter(Ve,T.a,rn))}if(E){var be=E.vars.onUpdate,Me=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){C.update(0,0,1),be&&be.apply(E,Me||[])})}if(C.previous=function(){return et[et.indexOf(C)-1]},C.next=function(){return et[et.indexOf(C)+1]},C.revert=function(ce,Fe){if(!Fe)return C.kill(!0);var Ie=ce!==!1||!C.enabled,$e=Cn;Ie!==C.isReverted&&(Ie&&(ie=Math.max(me(),C.scroll.rec||0),pe=C.progress,J=r&&r.progress()),He&&[He,Ce,j,Ve].forEach(function(Ot){return Ot.style.display=Ie?"none":"block"}),Ie&&(Cn=C,C.update(Ie)),p&&(!M||!C.isActive)&&(Ie?$b(p,B,yt):ph(p,B,Fi(p),ye)),Ie||C.update(Ie),Cn=$e,C.isReverted=Ie)},C.refresh=function(ce,Fe,Ie,$e){if(!((Cn||!C.enabled)&&!Fe)){if(p&&ce&&ji){dn(n,"scrollEnd",Z1);return}!Vn&&Q&&Q(C),Cn=C,De.tween&&!Ie&&(De.tween.kill(),De.tween=0),ne&&ne.pause(),m&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren&&r.getChildren(!0,!0,!1).forEach(function(Xe){return Xe.vars.immediateRender&&Xe.render(0,!0,!0)})),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var Ot=te(),tt=q(),Et=E?E.duration():_r(U,T),tn=Ze<=.01||!Ze,Ct=0,wt=$e||0,mt=Js(Ie)?Ie.end:i.end,ci=i.endTrigger||h,A=Js(Ie)?Ie.start:i.start||(i.start===0||!h?0:p?"0 0":"0 100%"),O=C.pinnedContainer=i.pinnedContainer&&Zn(i.pinnedContainer,C),$=h&&Math.max(0,et.indexOf(C))||0,X=$,V,de,we,ze,Te,Pe,Be,Ye,Nt,nn,gt,In,vt;for(I&&Js(Ie)&&(In=Ee.getProperty(j,T.p),vt=Ee.getProperty(Ve,T.p));X-- >0;)Pe=et[X],Pe.end||Pe.refresh(0,1)||(Cn=C),Be=Pe.pin,Be&&(Be===h||Be===p||Be===O)&&!Pe.isReverted&&(nn||(nn=[]),nn.unshift(Pe),Pe.revert(!0,!0)),Pe!==et[X]&&($--,X--);for(Nn(A)&&(A=A(C)),A=N_(A,"start",C),We=H_(A,h,Ot,T,me(),He,j,C,tt,k,W,Et,E,C._startClamp&&"_startClamp")||(p?-.001:0),Nn(mt)&&(mt=mt(C)),mi(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(mi(A)?A.split(" ")[0]:"")+mt:(Ct=sf(mt.substr(2),Ot),mt=mi(A)?A:(E?Ee.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,We):We)+Ct,ci=h)),mt=N_(mt,"end",C),_e=Math.max(We,H_(mt||(ci?"100% 0":Et),ci,Ot,T,me()+Ct,Ce,Ve,C,tt,k,W,Et,E,C._endClamp&&"_endClamp"))||-.001,Ct=0,X=$;X--;)Pe=et[X],Be=Pe.pin,Be&&Pe.start-Pe._pinPush<=We&&!E&&Pe.end>0&&(V=Pe.end-(C._startClamp?Math.max(0,Pe.start):Pe.start),(Be===h&&Pe.start-Pe._pinPush<We||Be===O)&&isNaN(A)&&(Ct+=V*(1-Pe.progress)),Be===p&&(wt+=V));if(We+=Ct,_e+=Ct,C._startClamp&&(C._startClamp+=Ct),C._endClamp&&!Vn&&(C._endClamp=_e||-.001,_e=Math.min(_e,_r(U,T))),Ze=_e-We||(We-=.01)&&.001,tn&&(pe=Ee.utils.clamp(0,1,Ee.utils.normalize(We,_e,ie))),C._pinPush=wt,He&&Ct&&(V={},V[T.a]="+="+Ct,O&&(V[T.p]="-="+me()),Ee.set([He,Ce],V)),p&&!(lm&&C.end>=_r(U,T)))V=Fi(p),ze=T===on,we=me(),xe=parseFloat(ee(T.a))+wt,!Et&&_e>1&&(gt=(N?Tt.scrollingElement||_i:U).style,gt={style:gt,value:gt["overflow"+T.a.toUpperCase()]},N&&Fi(pt)["overflow"+T.a.toUpperCase()]!=="scroll"&&(gt.style["overflow"+T.a.toUpperCase()]="scroll")),ph(p,B,V),b=mc(p),de=Ur(p,!0),Ye=W&&Is(U,ze?jn:on)(),_?(ye=[_+T.os2,Ze+wt+rn],ye.t=B,X=_===Zt?jf(p,T)+Ze+wt:0,X&&(ye.push(T.d,X+rn),B.style.flexBasis!=="auto"&&(B.style.flexBasis=X+rn)),La(ye),O&&et.forEach(function(Xe){Xe.pin===O&&Xe.vars.pinSpacing!==!1&&(Xe._subPinOffset=!0)}),W&&me(ie)):(X=jf(p,T),X&&B.style.flexBasis!=="auto"&&(B.style.flexBasis=X+rn)),W&&(Te={top:de.top+(ze?we-We:Ye)+rn,left:de.left+(ze?Ye:we-We)+rn,boxSizing:"border-box",position:"fixed"},Te[go]=Te["max"+$a]=Math.ceil(de.width)+rn,Te[_o]=Te["max"+Vg]=Math.ceil(de.height)+rn,Te[Oi]=Te[Oi+Jl]=Te[Oi+Zl]=Te[Oi+eu]=Te[Oi+Ql]="0",Te[Zt]=V[Zt],Te[Zt+Jl]=V[Zt+Jl],Te[Zt+Zl]=V[Zt+Zl],Te[Zt+eu]=V[Zt+eu],Te[Zt+Ql]=V[Zt+Ql],P=qb(yt,Te,M),Vn&&me(0)),r?(Nt=r._initted,uh(1),r.render(r.duration(),!0,!0),ue=ee(T.a)-xe+Ze+wt,se=Math.abs(Ze-ue)>1,W&&se&&P.splice(P.length-2,2),r.render(0,!0,!0),Nt||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),uh(0)):ue=Ze,gt&&(gt.value?gt.style["overflow"+T.a.toUpperCase()]=gt.value:gt.style.removeProperty("overflow-"+T.a));else if(h&&me()&&!E)for(de=h.parentNode;de&&de!==pt;)de._pinOffset&&(We-=de._pinOffset,_e-=de._pinOffset),de=de.parentNode;nn&&nn.forEach(function(Xe){return Xe.revert(!1,!0)}),C.start=We,C.end=_e,Ue=H=Vn?ie:me(),!E&&!Vn&&(Ue<ie&&me(ie),C.scroll.rec=0),C.revert(!1,!0),le=Rn(),he&&(Z=-1,he.restart(!0)),Cn=0,r&&z&&(r._initted||J)&&r.progress()!==J&&r.progress(J||0,!0).render(r.time(),!0,!0),(tn||pe!==C.progress||E||m||r&&!r._initted)&&(r&&!z&&(r._initted||pe||r.vars.immediateRender!==!1)&&r.totalProgress(E&&We<-.001&&!pe?Ee.utils.normalize(We,_e,0):pe,!0),C.progress=tn||(Ue-We)/Ze===pe?0:pe),p&&_&&(B._pinOffset=Math.round(C.progress*ue)),ne&&ne.invalidate(),isNaN(In)||(In-=Ee.getProperty(j,T.p),vt-=Ee.getProperty(Ve,T.p),gc(j,T,In),gc(He,T,In-($e||0)),gc(Ve,T,vt),gc(Ce,T,vt-($e||0))),tn&&!Vn&&C.update(),c&&!Vn&&!st&&(st=!0,c(C),st=!1)}},C.getVelocity=function(){return(me()-H)/(Rn()-Cl)*1e3||0},C.endAnimation=function(){ml(C.callbackAnimation),r&&(ne?ne.progress(1):r.paused()?z||ml(r,C.direction<0,1):ml(r,r.reversed()))},C.labelToScroll=function(ce){return r&&r.labels&&(We||C.refresh()||We)+r.labels[ce]/r.duration()*Ze||0},C.getTrailing=function(ce){var Fe=et.indexOf(C),Ie=C.direction>0?et.slice(0,Fe).reverse():et.slice(Fe+1);return(mi(ce)?Ie.filter(function($e){return $e.vars.preventOverlaps===ce}):Ie).filter(function($e){return C.direction>0?$e.end<=We:$e.start>=_e})},C.update=function(ce,Fe,Ie){if(!(E&&!Ie&&!ce)){var $e=Vn===!0?ie:C.scroll(),Ot=ce?0:($e-We)/Ze,tt=Ot<0?0:Ot>1?1:Ot||0,Et=C.progress,tn,Ct,wt,mt,ci,A,O,$;if(Fe&&(H=Ue,Ue=E?me():$e,y&&(Re=Oe,Oe=r&&!z?r.totalProgress():tt)),g&&p&&!Cn&&!uc&&ji&&(!tt&&We<$e+($e-H)/(Rn()-Cl)*g?tt=1e-4:tt===1&&_e>$e+($e-H)/(Rn()-Cl)*g&&(tt=.9999)),tt!==Et&&C.enabled){if(tn=C.isActive=!!tt&&tt<1,Ct=!!Et&&Et<1,A=tn!==Ct,ci=A||!!tt!=!!Et,C.direction=tt>Et?1:-1,C.progress=tt,ci&&!Cn&&(wt=tt&&!Et?0:tt===1?1:Et===1?2:3,z&&(mt=!A&&F[wt+1]!=="none"&&F[wt+1]||F[wt],$=r&&(mt==="complete"||mt==="reset"||mt in r))),S&&(A||$)&&($||f||!r)&&(Nn(S)?S(C):C.getTrailing(S).forEach(function(we){return we.endAnimation()})),z||(ne&&!Cn&&!uc?(ne._dp._time-ne._start!==ne._time&&ne.render(ne._dp._time-ne._start),ne.resetTo?ne.resetTo("totalProgress",tt,r._tTime/r._tDur):(ne.vars.totalProgress=tt,ne.invalidate().restart())):r&&r.totalProgress(tt,!!(Cn&&(le||ce)))),p){if(ce&&_&&(B.style[_+T.os2]=ve),!W)re(Pl(xe+ue*tt));else if(ci){if(O=!ce&&tt>Et&&_e+1>$e&&$e+1>=_r(U,T),M)if(!ce&&(tn||O)){var X=Ur(p,!0),V=$e-We;V_(p,pt,X.top+(T===on?V:0)+rn,X.left+(T===on?0:V)+rn)}else V_(p,B);La(tn||O?P:b),se&&tt<1&&tn||re(xe+(tt===1&&!O?ue:0))}}y&&!De.tween&&!Cn&&!uc&&he.restart(!0),a&&(A||x&&tt&&(tt<1||!ch))&&Au(a.targets).forEach(function(we){return we.classList[tn||x?"add":"remove"](a.className)}),o&&!z&&!ce&&o(C),ci&&!Cn?(z&&($&&(mt==="complete"?r.pause().totalProgress(1):mt==="reset"?r.restart(!0).pause():mt==="restart"?r.restart(!0):r[mt]()),o&&o(C)),(A||!ch)&&(u&&A&&dh(C,u),Y[wt]&&dh(C,Y[wt]),x&&(tt===1?C.kill(!1,1):Y[wt]=0),A||(wt=tt===1?1:3,Y[wt]&&dh(C,Y[wt]))),R&&!tn&&Math.abs(C.getVelocity())>(Ll(R)?R:2500)&&(ml(C.callbackAnimation),ne?ne.progress(1):ml(r,mt==="reverse"?1:!tt,1))):z&&o&&!Cn&&o(C)}if(ut){var de=E?$e/E.duration()*(E._caScrollDist||0):$e;at(de+(j._isFlipped?1:0)),ut(de)}fe&&fe(-$e/E.duration()*(E._caScrollDist||0))}},C.enable=function(ce,Fe){C.enabled||(C.enabled=!0,dn(U,"resize",Nl),N||dn(U,"scroll",zo),Q&&dn(n,"refreshInit",Q),ce!==!1&&(C.progress=pe=0,Ue=H=Z=me()),Fe!==!1&&C.refresh())},C.getTween=function(ce){return ce&&De?De.tween:ne},C.setPositions=function(ce,Fe,Ie,$e){if(E){var Ot=E.scrollTrigger,tt=E.duration(),Et=Ot.end-Ot.start;ce=Ot.start+Et*ce/tt,Fe=Ot.start+Et*Fe/tt}C.refresh(!1,!1,{start:D_(ce,Ie&&!!C._startClamp),end:D_(Fe,Ie&&!!C._endClamp)},$e),C.update()},C.adjustPinSpacing=function(ce){if(ye&&ce){var Fe=ye.indexOf(T.d)+1;ye[Fe]=parseFloat(ye[Fe])+ce+rn,ye[1]=parseFloat(ye[1])+ce+rn,La(ye)}},C.disable=function(ce,Fe){if(C.enabled&&(ce!==!1&&C.revert(!0,!0),C.enabled=C.isActive=!1,Fe||ne&&ne.pause(),ie=0,Ae&&(Ae.uncache=1),Q&&fn(n,"refreshInit",Q),he&&(he.pause(),De.tween&&De.tween.kill()&&(De.tween=0)),!N)){for(var Ie=et.length;Ie--;)if(et[Ie].scroller===U&&et[Ie]!==C)return;fn(U,"resize",Nl),N||fn(U,"scroll",zo)}},C.kill=function(ce,Fe){C.disable(ce,Fe),ne&&!Fe&&ne.kill(),l&&delete um[l];var Ie=et.indexOf(C);Ie>=0&&et.splice(Ie,1),Ie===Hn&&af>0&&Hn--,Ie=0,et.forEach(function($e){return $e.scroller===C.scroller&&(Ie=1)}),Ie||Vn||(C.scroll.rec=0),r&&(r.scrollTrigger=null,ce&&r.revert({kill:!1}),Fe||r.kill()),He&&[He,Ce,j,Ve].forEach(function($e){return $e.parentNode&&$e.parentNode.removeChild($e)}),tu===C&&(tu=0),p&&(Ae&&(Ae.uncache=1),Ie=0,et.forEach(function($e){return $e.pin===p&&Ie++}),Ie||(Ae.spacer=0)),i.onKill&&i.onKill(C)},et.push(C),C.enable(!1,!1),Ne&&Ne(C),r&&r.add&&!Ze){var Le=C.update;C.update=function(){C.update=Le,rt.cache++,We||_e||C.refresh()},Ee.delayedCall(.01,C.update),Ze=.01,We=_e=0}else C.refresh();p&&Xb()},n.register=function(i){return na||(Ee=i||j1(),W1()&&window.document&&n.enable(),na=Rl),na},n.defaults=function(i){if(i)for(var r in i)hc[r]=i[r];return hc},n.disable=function(i,r){Rl=0,et.forEach(function(o){return o[r?"kill":"disable"](i)}),fn(nt,"wheel",zo),fn(Tt,"scroll",zo),clearInterval(lc),fn(Tt,"touchcancel",dr),fn(pt,"touchstart",dr),fc(fn,Tt,"pointerdown,touchstart,mousedown",U_),fc(fn,Tt,"pointerup,touchend,mouseup",I_),Gf.kill(),cc(fn);for(var s=0;s<rt.length;s+=3)dc(fn,rt[s],rt[s+1]),dc(fn,rt[s],rt[s+2])},n.enable=function(){if(nt=window,Tt=document,_i=Tt.documentElement,pt=Tt.body,Ee&&(Au=Ee.utils.toArray,Kl=Ee.utils.clamp,am=Ee.core.context||dr,uh=Ee.core.suppressOverwrites||dr,kg=nt.history.scrollRestoration||"auto",cm=nt.pageYOffset||0,Ee.core.globals("ScrollTrigger",n),pt)){Rl=1,Pa=document.createElement("div"),Pa.style.height="100vh",Pa.style.position="absolute",eM(),zb(),Yt.register(Ee),n.isTouch=Yt.isTouch,is=Yt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),om=Yt.isTouch===1,dn(nt,"wheel",zo),Fg=[nt,Tt,_i,pt],Ee.matchMedia?(n.matchMedia=function(u){var c=Ee.matchMedia(),f;for(f in u)c.add(f,u[f]);return c},Ee.addEventListener("matchMediaInit",function(){return Wg()}),Ee.addEventListener("matchMediaRevert",function(){return Q1()}),Ee.addEventListener("matchMedia",function(){lo(0,1),Po("matchMedia")}),Ee.matchMedia().add("(orientation: portrait)",function(){return hh(),hh})):console.warn("Requires GSAP 3.11.0 or later"),hh(),dn(Tt,"scroll",zo);var i=pt.hasAttribute("style"),r=pt.style,s=r.borderTopStyle,o=Ee.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Ur(pt),on.m=Math.round(a.top+on.sc())||0,jn.m=Math.round(a.left+jn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(pt.setAttribute("style",""),pt.removeAttribute("style")),lc=setInterval(k_,250),Ee.delayedCall(.5,function(){return uc=0}),dn(Tt,"touchcancel",dr),dn(pt,"touchstart",dr),fc(dn,Tt,"pointerdown,touchstart,mousedown",U_),fc(dn,Tt,"pointerup,touchend,mouseup",I_),sm=Ee.utils.checkPrefix("transform"),lf.push(sm),na=Rn(),Gf=Ee.delayedCall(.2,lo).pause(),ia=[Tt,"visibilitychange",function(){var u=nt.innerWidth,c=nt.innerHeight;Tt.hidden?(P_=u,L_=c):(P_!==u||L_!==c)&&Nl()},Tt,"DOMContentLoaded",lo,nt,"load",lo,nt,"resize",Nl],cc(dn),et.forEach(function(u){return u.enable(0,1)}),l=0;l<rt.length;l+=3)dc(fn,rt[l],rt[l+1]),dc(fn,rt[l],rt[l+2])}},n.config=function(i){"limitCallbacks"in i&&(ch=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(lc)||(lc=r)&&setInterval(k_,r),"ignoreMobileResize"in i&&(om=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(cc(fn)||cc(dn,i.autoRefreshEvents||"none"),H1=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=Zn(i),o=rt.indexOf(s),a=Co(s);~o&&rt.splice(o,a?6:2),r&&(a?yr.unshift(nt,r,pt,r,_i,r):yr.unshift(s,r))},n.clearMatchMedia=function(i){et.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(mi(i)?Zn(i):i).getBoundingClientRect(),a=o[s?go:_o]*r||0;return s?o.right-a>0&&o.left+a<nt.innerWidth:o.bottom-a>0&&o.top+a<nt.innerHeight},n.positionInViewport=function(i,r,s){mi(i)&&(i=Zn(i));var o=i.getBoundingClientRect(),a=o[s?go:_o],l=r==null?a/2:r in Xf?Xf[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/nt.innerWidth:(o.top+l)/nt.innerHeight},n.killAll=function(i){if(et.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Ro.killAll||[];Ro={},r.forEach(function(s){return s()})}},n}();Ke.version="3.13.0";Ke.saveStyles=function(n){return n?Au(n).forEach(function(e){if(e&&e.style){var t=hi.indexOf(e);t>=0&&hi.splice(t,5),hi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ee.core.getCache(e),am())}}):hi};Ke.revert=function(n,e){return Wg(!n,e)};Ke.create=function(n,e){return new Ke(n,e)};Ke.refresh=function(n){return n?Nl(!0):(na||Ke.register())&&lo(!0)};Ke.update=function(n){return++rt.cache&&Vr(n===!0?2:0)};Ke.clearScrollMemory=J1;Ke.maxScroll=function(n,e){return _r(n,e?jn:on)};Ke.getScrollFunc=function(n,e){return Is(Zn(n),e?jn:on)};Ke.getById=function(n){return um[n]};Ke.getAll=function(){return et.filter(function(n){return n.vars.id!=="ScrollSmoother"})};Ke.isScrolling=function(){return!!ji};Ke.snapDirectional=Gg;Ke.addEventListener=function(n,e){var t=Ro[n]||(Ro[n]=[]);~t.indexOf(e)||t.push(e)};Ke.removeEventListener=function(n,e){var t=Ro[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};Ke.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var f=[],h=[],p=Ee.delayedCall(r,function(){c(f,h),f=[],h=[]}).pause();return function(_){f.length||p.restart(!0),f.push(_.trigger),h.push(_),s<=f.length&&p.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Nn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Nn(s)&&(s=s(),dn(Ke,"refresh",function(){return s=e.batchMax()})),Au(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(Ke.create(u))}),t};var W_=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},mh=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Yt.isTouch?" pinch-zoom":""):"none",e===_i&&n(pt,t)},_c={auto:1,scroll:1},Zb=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ee.core.getCache(s),a=Rn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==pt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(_c[(l=Fi(s)).overflowY]||_c[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Co(s)&&(_c[(l=Fi(s)).overflowY]||_c[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},nM=function(e,t,i,r){return Yt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&Zb,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&dn(Tt,Yt.eventTypes[0],X_,!1,!0)},onDisable:function(){return fn(Tt,Yt.eventTypes[0],X_,!0)}})},Qb=/(input|label|select|textarea)/i,j_,X_=function(e){var t=Qb.test(e.target.tagName);(t||j_)&&(e._gsapAllow=!0,j_=t)},Jb=function(e){Js(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=Zn(e.target)||_i,c=Ee.core.globals().ScrollSmoother,f=c&&c.get(),h=is&&(e.content&&Zn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),p=Is(u,on),_=Is(u,jn),m=1,g=(Yt.isTouch&&nt.visualViewport?nt.visualViewport.scale*nt.visualViewport.width:nt.outerWidth)/nt.innerWidth,d=0,v=Nn(r)?function(){return r(a)}:function(){return r||2.8},x,y,M=nM(u,e.type,!0,s),w=function(){return y=!1},E=dr,R=dr,S=function(){l=_r(u,on),R=Kl(is?1:0,l),i&&(E=Kl(0,_r(u,jn))),x=vo},T=function(){h._gsap.y=Pl(parseFloat(h._gsap.y)+p.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},z=function(){if(y){requestAnimationFrame(w);var I=Pl(a.deltaY/2),k=R(p.v-I);if(h&&k!==p.v+p.offset){p.offset=k-p.v;var C=Pl((parseFloat(h&&h._gsap.y)||0)-p.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",h._gsap.y=C+"px",p.cacheID=rt.cache,Vr()}return!0}p.offset&&T(),y=!0},U,K,N,W,Y=function(){S(),U.isActive()&&U.vars.scrollY>l&&(p()>l?U.progress(1)&&p(l):U.resetTo("scrollY",l))};return h&&Ee.set(h,{y:"+=0"}),e.ignoreCheck=function(F){return is&&F.type==="touchmove"&&z()||m>1.05&&F.type!=="touchstart"||a.isGesturing||F.touches&&F.touches.length>1},e.onPress=function(){y=!1;var F=m;m=Pl((nt.visualViewport&&nt.visualViewport.scale||1)/g),U.pause(),F!==m&&mh(u,m>1.01?!0:i?!1:"x"),K=_(),N=p(),S(),x=vo},e.onRelease=e.onGestureStart=function(F,I){if(p.offset&&T(),!I)W.restart(!0);else{rt.cache++;var k=v(),C,Q;i&&(C=_(),Q=C+k*.05*-F.velocityX/.227,k*=W_(_,C,Q,_r(u,jn)),U.vars.scrollX=E(Q)),C=p(),Q=C+k*.05*-F.velocityY/.227,k*=W_(p,C,Q,_r(u,on)),U.vars.scrollY=R(Q),U.invalidate().duration(k).play(.01),(is&&U.vars.scrollY>=l||C>=l-1)&&Ee.to({},{onUpdate:Y,duration:k})}o&&o(F)},e.onWheel=function(){U._ts&&U.pause(),Rn()-d>1e3&&(x=0,d=Rn())},e.onChange=function(F,I,k,C,Q){if(vo!==x&&S(),I&&i&&_(E(C[2]===I?K+(F.startX-F.x):_()+I-C[1])),k){p.offset&&T();var te=Q[2]===k,q=te?N+F.startY-F.y:p()+k-Q[1],Z=R(q);te&&q!==Z&&(N+=Z-q),p(Z)}(k||I)&&Vr()},e.onEnable=function(){mh(u,i?!1:"x"),Ke.addEventListener("refresh",Y),dn(nt,"resize",Y),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=_.smooth=!1),M.enable()},e.onDisable=function(){mh(u,!0),fn(nt,"resize",Y),Ke.removeEventListener("refresh",Y),M.kill()},e.lockAxis=e.lockAxis!==!1,a=new Yt(e),a.iOS=is,is&&!p()&&p(1),is&&Ee.ticker.add(dr),W=a._dc,U=Ee.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:tM(p,p(),function(){return U.pause()})},onUpdate:Vr,onComplete:W.vars.onComplete}),a};Ke.sort=function(n){if(Nn(n))return et.sort(n);var e=nt.pageYOffset||0;return Ke.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+nt.innerHeight}),et.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};Ke.observe=function(n){return new Yt(n)};Ke.normalizeScroll=function(n){if(typeof n>"u")return zn;if(n===!0&&zn)return zn.enable();if(n===!1){zn&&zn.kill(),zn=n;return}var e=n instanceof Yt?n:Jb(n);return zn&&zn.target===e.target&&zn.kill(),Co(e.target)&&(zn=e),e};Ke.core={_getVelocityProp:rm,_inputObserver:nM,_scrollers:rt,_proxies:yr,bridge:{ss:function(){ji||Po("scrollStart"),ji=Rn()},ref:function(){return Cn}}};j1()&&Ee.registerPlugin(Ke);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jg="159",eA=0,$_=1,tA=2,iM=1,nA=2,Rr=3,Os=0,li=1,Ir=2,Cs=0,Na=1,dm=2,Y_=3,q_=4,iA=5,no=100,rA=101,sA=102,K_=103,Z_=104,oA=200,aA=201,lA=202,uA=203,hm=204,pm=205,cA=206,fA=207,dA=208,hA=209,pA=210,mA=211,gA=212,_A=213,vA=214,xA=0,yA=1,SA=2,$f=3,MA=4,EA=5,wA=6,TA=7,Xg=0,bA=1,AA=2,Rs=0,CA=1,RA=2,PA=3,LA=4,NA=5,rM=300,Ya=301,qa=302,mm=303,gm=304,yd=306,_m=1e3,rr=1001,vm=1002,Gn=1003,Q_=1004,gh=1005,ki=1006,DA=1007,Ru=1008,Ps=1009,UA=1010,IA=1011,$g=1012,sM=1013,ms=1014,gs=1015,Pu=1016,oM=1017,aM=1018,xo=1020,OA=1021,sr=1023,FA=1024,kA=1025,yo=1026,Ka=1027,zA=1028,lM=1029,BA=1030,uM=1031,cM=1033,_h=33776,vh=33777,xh=33778,yh=33779,J_=35840,ev=35841,tv=35842,nv=35843,fM=36196,iv=37492,rv=37496,sv=37808,ov=37809,av=37810,lv=37811,uv=37812,cv=37813,fv=37814,dv=37815,hv=37816,pv=37817,mv=37818,gv=37819,_v=37820,vv=37821,Sh=36492,xv=36494,yv=36495,HA=36283,Sv=36284,Mv=36285,Ev=36286,dM=3e3,So=3001,VA=3200,GA=3201,hM=0,WA=1,zi="",_n="srgb",qr="srgb-linear",Yg="display-p3",Sd="display-p3-linear",Yf="linear",Pt="srgb",qf="rec709",Kf="p3",Bo=7680,wv=519,jA=512,XA=513,$A=514,pM=515,YA=516,qA=517,KA=518,ZA=519,Tv=35044,bv="300 es",xm=1035,zr=2e3,Zf=2001;class tl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mh=Math.PI/180,ym=180/Math.PI;function Fu(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]).toLowerCase()}function Jn(n,e,t){return Math.max(e,Math.min(t,n))}function QA(n,e){return(n%e+e)%e}function Eh(n,e,t){return(1-t)*n+t*e}function Av(n){return(n&n-1)===0&&n!==0}function Sm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function gl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Kn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class dt{constructor(e=0,t=0){dt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Jn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class it{constructor(e,t,i,r,s,o,a,l,u){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],p=i[5],_=i[8],m=r[0],g=r[3],d=r[6],v=r[1],x=r[4],y=r[7],M=r[2],w=r[5],E=r[8];return s[0]=o*m+a*v+l*M,s[3]=o*g+a*x+l*w,s[6]=o*d+a*y+l*E,s[1]=u*m+c*v+f*M,s[4]=u*g+c*x+f*w,s[7]=u*d+c*y+f*E,s[2]=h*m+p*v+_*M,s[5]=h*g+p*x+_*w,s[8]=h*d+p*y+_*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,p=u*s-o*l,_=t*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/_;return e[0]=f*m,e[1]=(r*u-c*i)*m,e[2]=(a*i-r*o)*m,e[3]=h*m,e[4]=(c*t-r*l)*m,e[5]=(r*s-a*t)*m,e[6]=p*m,e[7]=(i*l-u*t)*m,e[8]=(o*t-i*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(wh.makeScale(e,t)),this}rotate(e){return this.premultiply(wh.makeRotation(-e)),this}translate(e,t){return this.premultiply(wh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wh=new it;function mM(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qf(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function JA(){const n=Qf("canvas");return n.style.display="block",n}const Cv={};function nu(n){n in Cv||(Cv[n]=!0,console.warn(n))}const Rv=new it().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Pv=new it().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),vc={[qr]:{transfer:Yf,primaries:qf,toReference:n=>n,fromReference:n=>n},[_n]:{transfer:Pt,primaries:qf,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Sd]:{transfer:Yf,primaries:Kf,toReference:n=>n.applyMatrix3(Pv),fromReference:n=>n.applyMatrix3(Rv)},[Yg]:{transfer:Pt,primaries:Kf,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Pv),fromReference:n=>n.applyMatrix3(Rv).convertLinearToSRGB()}},e2=new Set([qr,Sd]),xt={enabled:!0,_workingColorSpace:qr,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!e2.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=vc[e].toReference,r=vc[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return vc[n].primaries},getTransfer:function(n){return n===zi?Yf:vc[n].transfer}};function Da(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Th(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ho;class gM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ho===void 0&&(Ho=Qf("canvas")),Ho.width=e.width,Ho.height=e.height;const i=Ho.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ho}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qf("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Da(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Da(t[i]/255)*255):t[i]=Da(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let t2=0;class _M{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:t2++}),this.uuid=Fu(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(bh(r[o].image)):s.push(bh(r[o]))}else s=bh(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function bh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let n2=0;class Ti extends tl{constructor(e=Ti.DEFAULT_IMAGE,t=Ti.DEFAULT_MAPPING,i=rr,r=rr,s=ki,o=Ru,a=sr,l=Ps,u=Ti.DEFAULT_ANISOTROPY,c=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:n2++}),this.uuid=Fu(),this.name="",this.source=new _M(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(nu("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===So?_n:zi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _m:e.x=e.x-Math.floor(e.x);break;case rr:e.x=e.x<0?0:1;break;case vm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _m:e.y=e.y-Math.floor(e.y);break;case rr:e.y=e.y<0?0:1;break;case vm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return nu("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===_n?So:dM}set encoding(e){nu("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===So?_n:zi}}Ti.DEFAULT_IMAGE=null;Ti.DEFAULT_MAPPING=rM;Ti.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],_=l[9],m=l[2],g=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-m)<.01&&Math.abs(_-g)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+m)<.1&&Math.abs(_+g)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,y=(p+1)/2,M=(d+1)/2,w=(c+h)/4,E=(f+m)/4,R=(_+g)/4;return x>y&&x>M?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=w/i,s=E/i):y>M?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=R/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=E/s,r=R/s),this.set(i,r,s,t),this}let v=Math.sqrt((g-_)*(g-_)+(f-m)*(f-m)+(h-c)*(h-c));return Math.abs(v)<.001&&(v=1),this.x=(g-_)/v,this.y=(f-m)/v,this.z=(h-c)/v,this.w=Math.acos((u+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class i2 extends tl{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(nu("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===So?_n:zi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ki,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Ti(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new _M(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lo extends i2{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class vM extends Ti{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class r2 extends Ti{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ku{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],_=s[o+2],m=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=m;return}if(f!==m||l!==h||u!==p||c!==_){let g=1-a;const d=l*h+u*p+c*_+f*m,v=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const M=Math.sqrt(x),w=Math.atan2(M,d*v);g=Math.sin(g*w)/M,a=Math.sin(a*w)/M}const y=a*v;if(l=l*g+h*y,u=u*g+p*y,c=c*g+_*y,f=f*g+m*y,g===1-a){const M=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=M,u*=M,c*=M,f*=M}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+c*f+l*p-u*h,e[t+1]=l*_+c*h+u*f-a*p,e[t+2]=u*_+c*p+a*h-l*f,e[t+3]=c*_-a*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f-h*p*_;break;case"YXZ":this._x=h*c*f+u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f+h*p*_;break;case"ZXY":this._x=h*c*f-u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f-h*p*_;break;case"ZYX":this._x=h*c*f-u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f+h*p*_;break;case"YZX":this._x=h*c*f+u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f-h*p*_;break;case"XZY":this._x=h*c*f-u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ah.copy(this).projectOnVector(e),this.sub(Ah)}reflect(e){return this.sub(Ah.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Jn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ah=new G,Lv=new ku;class zu{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ki):Ki.fromBufferAttribute(s,o),Ki.applyMatrix4(e.matrixWorld),this.expandByPoint(Ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xc.copy(i.boundingBox)),xc.applyMatrix4(e.matrixWorld),this.union(xc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ki),Ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_l),yc.subVectors(this.max,_l),Vo.subVectors(e.a,_l),Go.subVectors(e.b,_l),Wo.subVectors(e.c,_l),Qr.subVectors(Go,Vo),Jr.subVectors(Wo,Go),js.subVectors(Vo,Wo);let t=[0,-Qr.z,Qr.y,0,-Jr.z,Jr.y,0,-js.z,js.y,Qr.z,0,-Qr.x,Jr.z,0,-Jr.x,js.z,0,-js.x,-Qr.y,Qr.x,0,-Jr.y,Jr.x,0,-js.y,js.x,0];return!Ch(t,Vo,Go,Wo,yc)||(t=[1,0,0,0,1,0,0,0,1],!Ch(t,Vo,Go,Wo,yc))?!1:(Sc.crossVectors(Qr,Jr),t=[Sc.x,Sc.y,Sc.z],Ch(t,Vo,Go,Wo,yc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wr=[new G,new G,new G,new G,new G,new G,new G,new G],Ki=new G,xc=new zu,Vo=new G,Go=new G,Wo=new G,Qr=new G,Jr=new G,js=new G,_l=new G,yc=new G,Sc=new G,Xs=new G;function Ch(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Xs.fromArray(n,s);const a=r.x*Math.abs(Xs.x)+r.y*Math.abs(Xs.y)+r.z*Math.abs(Xs.z),l=e.dot(Xs),u=t.dot(Xs),c=i.dot(Xs);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const s2=new zu,vl=new G,Rh=new G;class Md{constructor(e=new G,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):s2.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vl.subVectors(e,this.center);const t=vl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(vl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vl.copy(e.center).add(Rh)),this.expandByPoint(vl.copy(e.center).sub(Rh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tr=new G,Ph=new G,Mc=new G,es=new G,Lh=new G,Ec=new G,Nh=new G;class xM{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tr.copy(this.origin).addScaledVector(this.direction,t),Tr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ph.copy(e).add(t).multiplyScalar(.5),Mc.copy(t).sub(e).normalize(),es.copy(this.origin).sub(Ph);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Mc),a=es.dot(this.direction),l=-es.dot(Mc),u=es.lengthSq(),c=Math.abs(1-o*o);let f,h,p,_;if(c>0)if(f=o*l-a,h=o*a-l,_=s*c,f>=0)if(h>=-_)if(h<=_){const m=1/c;f*=m,h*=m,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ph).addScaledVector(Mc,h),p}intersectSphere(e,t){Tr.subVectors(e.center,this.origin);const i=Tr.dot(this.direction),r=Tr.dot(Tr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Tr)!==null}intersectTriangle(e,t,i,r,s){Lh.subVectors(t,e),Ec.subVectors(i,e),Nh.crossVectors(Lh,Ec);let o=this.direction.dot(Nh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;es.subVectors(this.origin,e);const l=a*this.direction.dot(Ec.crossVectors(es,Ec));if(l<0)return null;const u=a*this.direction.dot(Lh.cross(es));if(u<0||l+u>o)return null;const c=-a*es.dot(Nh);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,t,i,r,s,o,a,l,u,c,f,h,p,_,m,g){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,f,h,p,_,m,g)}set(e,t,i,r,s,o,a,l,u,c,f,h,p,_,m,g){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=m,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/jo.setFromMatrixColumn(e,0).length(),s=1/jo.setFromMatrixColumn(e,1).length(),o=1/jo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*f,_=a*c,m=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=p+_*u,t[5]=h-m*u,t[9]=-a*l,t[2]=m-h*u,t[6]=_+p*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*f,_=u*c,m=u*f;t[0]=h+m*a,t[4]=_*a-p,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=p*a-_,t[6]=m+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*f,_=u*c,m=u*f;t[0]=h-m*a,t[4]=-o*f,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*c,t[9]=m-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*f,_=a*c,m=a*f;t[0]=l*c,t[4]=_*u-p,t[8]=h*u+m,t[1]=l*f,t[5]=m*u+h,t[9]=p*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,_=a*l,m=a*u;t[0]=l*c,t[4]=m-h*f,t[8]=_*f+p,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*f+_,t[10]=h-m*f}else if(e.order==="XZY"){const h=o*l,p=o*u,_=a*l,m=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+m,t[5]=o*c,t[9]=p*f-_,t[2]=_*f-p,t[6]=a*c,t[10]=m*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(o2,e,a2)}lookAt(e,t,i){const r=this.elements;return fi.subVectors(e,t),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),ts.crossVectors(i,fi),ts.lengthSq()===0&&(Math.abs(i.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),ts.crossVectors(i,fi)),ts.normalize(),wc.crossVectors(fi,ts),r[0]=ts.x,r[4]=wc.x,r[8]=fi.x,r[1]=ts.y,r[5]=wc.y,r[9]=fi.y,r[2]=ts.z,r[6]=wc.z,r[10]=fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],p=i[13],_=i[2],m=i[6],g=i[10],d=i[14],v=i[3],x=i[7],y=i[11],M=i[15],w=r[0],E=r[4],R=r[8],S=r[12],T=r[1],z=r[5],U=r[9],K=r[13],N=r[2],W=r[6],Y=r[10],F=r[14],I=r[3],k=r[7],C=r[11],Q=r[15];return s[0]=o*w+a*T+l*N+u*I,s[4]=o*E+a*z+l*W+u*k,s[8]=o*R+a*U+l*Y+u*C,s[12]=o*S+a*K+l*F+u*Q,s[1]=c*w+f*T+h*N+p*I,s[5]=c*E+f*z+h*W+p*k,s[9]=c*R+f*U+h*Y+p*C,s[13]=c*S+f*K+h*F+p*Q,s[2]=_*w+m*T+g*N+d*I,s[6]=_*E+m*z+g*W+d*k,s[10]=_*R+m*U+g*Y+d*C,s[14]=_*S+m*K+g*F+d*Q,s[3]=v*w+x*T+y*N+M*I,s[7]=v*E+x*z+y*W+M*k,s[11]=v*R+x*U+y*Y+M*C,s[15]=v*S+x*K+y*F+M*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],p=e[14],_=e[3],m=e[7],g=e[11],d=e[15];return _*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*p-i*l*p)+m*(+t*l*p-t*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+g*(+t*u*f-t*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+d*(-r*a*c-t*l*f+t*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],p=e[11],_=e[12],m=e[13],g=e[14],d=e[15],v=f*g*u-m*h*u+m*l*p-a*g*p-f*l*d+a*h*d,x=_*h*u-c*g*u-_*l*p+o*g*p+c*l*d-o*h*d,y=c*m*u-_*f*u+_*a*p-o*m*p-c*a*d+o*f*d,M=_*f*l-c*m*l-_*a*h+o*m*h+c*a*g-o*f*g,w=t*v+i*x+r*y+s*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=v*E,e[1]=(m*h*s-f*g*s-m*r*p+i*g*p+f*r*d-i*h*d)*E,e[2]=(a*g*s-m*l*s+m*r*u-i*g*u-a*r*d+i*l*d)*E,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*p-i*l*p)*E,e[4]=x*E,e[5]=(c*g*s-_*h*s+_*r*p-t*g*p-c*r*d+t*h*d)*E,e[6]=(_*l*s-o*g*s-_*r*u+t*g*u+o*r*d-t*l*d)*E,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*p+t*l*p)*E,e[8]=y*E,e[9]=(_*f*s-c*m*s-_*i*p+t*m*p+c*i*d-t*f*d)*E,e[10]=(o*m*s-_*a*s+_*i*u-t*m*u-o*i*d+t*a*d)*E,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*p-t*a*p)*E,e[12]=M*E,e[13]=(c*m*r-_*f*r+_*i*h-t*m*h-c*i*g+t*f*g)*E,e[14]=(_*a*r-o*m*r-_*i*l+t*m*l+o*i*g-t*a*g)*E,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*h+t*a*h)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,h=s*u,p=s*c,_=s*f,m=o*c,g=o*f,d=a*f,v=l*u,x=l*c,y=l*f,M=i.x,w=i.y,E=i.z;return r[0]=(1-(m+d))*M,r[1]=(p+y)*M,r[2]=(_-x)*M,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(h+d))*w,r[6]=(g+v)*w,r[7]=0,r[8]=(_+x)*E,r[9]=(g-v)*E,r[10]=(1-(h+m))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=jo.set(r[0],r[1],r[2]).length();const o=jo.set(r[4],r[5],r[6]).length(),a=jo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zi.copy(this);const u=1/s,c=1/o,f=1/a;return Zi.elements[0]*=u,Zi.elements[1]*=u,Zi.elements[2]*=u,Zi.elements[4]*=c,Zi.elements[5]*=c,Zi.elements[6]*=c,Zi.elements[8]*=f,Zi.elements[9]*=f,Zi.elements[10]*=f,t.setFromRotationMatrix(Zi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=zr){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,_;if(a===zr)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Zf)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=zr){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(o-s),h=(t+e)*u,p=(i+r)*c;let _,m;if(a===zr)_=(o+s)*f,m=-2*f;else if(a===Zf)_=s*f,m=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=m,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const jo=new G,Zi=new qt,o2=new G(0,0,0),a2=new G(1,1,1),ts=new G,wc=new G,fi=new G,Nv=new qt,Dv=new ku;class Ed{constructor(e=0,t=0,i=0,r=Ed.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Jn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Jn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Jn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Jn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Jn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Jn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Nv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nv,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dv.setFromEuler(this),this.setFromQuaternion(Dv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ed.DEFAULT_ORDER="XYZ";class yM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let l2=0;const Uv=new G,Xo=new ku,br=new qt,Tc=new G,xl=new G,u2=new G,c2=new ku,Iv=new G(1,0,0),Ov=new G(0,1,0),Fv=new G(0,0,1),f2={type:"added"},d2={type:"removed"};class $n extends tl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:l2++}),this.uuid=Fu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$n.DEFAULT_UP.clone();const e=new G,t=new Ed,i=new ku,r=new G(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qt},normalMatrix:{value:new it}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=$n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xo.setFromAxisAngle(e,t),this.quaternion.multiply(Xo),this}rotateOnWorldAxis(e,t){return Xo.setFromAxisAngle(e,t),this.quaternion.premultiply(Xo),this}rotateX(e){return this.rotateOnAxis(Iv,e)}rotateY(e){return this.rotateOnAxis(Ov,e)}rotateZ(e){return this.rotateOnAxis(Fv,e)}translateOnAxis(e,t){return Uv.copy(e).applyQuaternion(this.quaternion),this.position.add(Uv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Iv,e)}translateY(e){return this.translateOnAxis(Ov,e)}translateZ(e){return this.translateOnAxis(Fv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(br.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Tc.copy(e):Tc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),xl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?br.lookAt(xl,Tc,this.up):br.lookAt(Tc,xl,this.up),this.quaternion.setFromRotationMatrix(br),r&&(br.extractRotation(r.matrixWorld),Xo.setFromRotationMatrix(br),this.quaternion.premultiply(Xo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(f2)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(d2)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),br.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),br.multiply(e.parent.matrixWorld)),e.applyMatrix4(br),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xl,e,u2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xl,c2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}$n.DEFAULT_UP=new G(0,1,0);$n.DEFAULT_MATRIX_AUTO_UPDATE=!0;$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qi=new G,Ar=new G,Dh=new G,Cr=new G,$o=new G,Yo=new G,kv=new G,Uh=new G,Ih=new G,Oh=new G;let bc=!1;class ir{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Qi.subVectors(e,t),r.cross(Qi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Qi.subVectors(r,t),Ar.subVectors(i,t),Dh.subVectors(e,t);const o=Qi.dot(Qi),a=Qi.dot(Ar),l=Qi.dot(Dh),u=Ar.dot(Ar),c=Ar.dot(Dh),f=o*u-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,p=(u*l-a*c)*h,_=(o*c-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Cr),Cr.x>=0&&Cr.y>=0&&Cr.x+Cr.y<=1}static getUV(e,t,i,r,s,o,a,l){return bc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),bc=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Cr),l.setScalar(0),l.addScaledVector(s,Cr.x),l.addScaledVector(o,Cr.y),l.addScaledVector(a,Cr.z),l}static isFrontFacing(e,t,i,r){return Qi.subVectors(i,t),Ar.subVectors(e,t),Qi.cross(Ar).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qi.subVectors(this.c,this.b),Ar.subVectors(this.a,this.b),Qi.cross(Ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ir.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ir.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return bc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),bc=!0),ir.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return ir.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ir.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ir.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;$o.subVectors(r,i),Yo.subVectors(s,i),Uh.subVectors(e,i);const l=$o.dot(Uh),u=Yo.dot(Uh);if(l<=0&&u<=0)return t.copy(i);Ih.subVectors(e,r);const c=$o.dot(Ih),f=Yo.dot(Ih);if(c>=0&&f<=c)return t.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector($o,o);Oh.subVectors(e,s);const p=$o.dot(Oh),_=Yo.dot(Oh);if(_>=0&&p<=_)return t.copy(s);const m=p*u-l*_;if(m<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(Yo,a);const g=c*_-p*f;if(g<=0&&f-c>=0&&p-_>=0)return kv.subVectors(s,r),a=(f-c)/(f-c+(p-_)),t.copy(r).addScaledVector(kv,a);const d=1/(g+m+h);return o=m*d,a=h*d,t.copy(i).addScaledVector($o,o).addScaledVector(Yo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const SM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},Ac={h:0,s:0,l:0};function Fh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class lt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=xt.workingColorSpace){if(e=QA(e,1),t=Jn(t,0,1),i=Jn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Fh(o,s,e+1/3),this.g=Fh(o,s,e),this.b=Fh(o,s,e-1/3)}return xt.toWorkingColorSpace(this,r),this}setStyle(e,t=_n){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_n){const i=SM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Da(e.r),this.g=Da(e.g),this.b=Da(e.b),this}copyLinearToSRGB(e){return this.r=Th(e.r),this.g=Th(e.g),this.b=Th(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return xt.fromWorkingColorSpace(An.copy(this),e),Math.round(Jn(An.r*255,0,255))*65536+Math.round(Jn(An.g*255,0,255))*256+Math.round(Jn(An.b*255,0,255))}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(An.copy(this),t);const i=An.r,r=An.g,s=An.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=_n){xt.fromWorkingColorSpace(An.copy(this),e);const t=An.r,i=An.g,r=An.b;return e!==_n?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ns),this.setHSL(ns.h+e,ns.s+t,ns.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ns),e.getHSL(Ac);const i=Eh(ns.h,Ac.h,t),r=Eh(ns.s,Ac.s,t),s=Eh(ns.l,Ac.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new lt;lt.NAMES=SM;let h2=0;class nl extends tl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:h2++}),this.uuid=Fu(),this.name="",this.type="Material",this.blending=Na,this.side=Os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hm,this.blendDst=pm,this.blendEquation=no,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=$f,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bo,this.stencilZFail=Bo,this.stencilZPass=Bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Na&&(i.blending=this.blending),this.side!==Os&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==hm&&(i.blendSrc=this.blendSrc),this.blendDst!==pm&&(i.blendDst=this.blendDst),this.blendEquation!==no&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$f&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Bo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Bo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class MM extends nl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new G,Cc=new dt;class Xi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Tv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=gs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.BufferAttribute: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Cc.fromBufferAttribute(this,t),Cc.applyMatrix3(e),this.setXY(t,Cc.x,Cc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=gl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gl(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gl(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gl(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),i=Kn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),i=Kn(i,this.array),r=Kn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),i=Kn(i,this.array),r=Kn(r,this.array),s=Kn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tv&&(e.usage=this.usage),e}}class EM extends Xi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class wM extends Xi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Sr extends Xi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let p2=0;const Ni=new qt,kh=new $n,qo=new G,di=new zu,yl=new zu,cn=new G;class Er extends tl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:p2++}),this.uuid=Fu(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mM(e)?wM:EM)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new it().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ni.makeRotationFromQuaternion(e),this.applyMatrix4(Ni),this}rotateX(e){return Ni.makeRotationX(e),this.applyMatrix4(Ni),this}rotateY(e){return Ni.makeRotationY(e),this.applyMatrix4(Ni),this}rotateZ(e){return Ni.makeRotationZ(e),this.applyMatrix4(Ni),this}translate(e,t,i){return Ni.makeTranslation(e,t,i),this.applyMatrix4(Ni),this}scale(e,t,i){return Ni.makeScale(e,t,i),this.applyMatrix4(Ni),this}lookAt(e){return kh.lookAt(e),kh.updateMatrix(),this.applyMatrix4(kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qo).negate(),this.translate(qo.x,qo.y,qo.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Sr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];di.setFromBufferAttribute(s),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Md);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(di.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];yl.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(di.min,yl.min),di.expandByPoint(cn),cn.addVectors(di.max,yl.max),di.expandByPoint(cn)):(di.expandByPoint(yl.min),di.expandByPoint(yl.max))}di.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)cn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(cn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)cn.fromBufferAttribute(a,u),l&&(qo.fromBufferAttribute(e,u),cn.add(qo)),r=Math.max(r,i.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let T=0;T<a;T++)u[T]=new G,c[T]=new G;const f=new G,h=new G,p=new G,_=new dt,m=new dt,g=new dt,d=new G,v=new G;function x(T,z,U){f.fromArray(r,T*3),h.fromArray(r,z*3),p.fromArray(r,U*3),_.fromArray(o,T*2),m.fromArray(o,z*2),g.fromArray(o,U*2),h.sub(f),p.sub(f),m.sub(_),g.sub(_);const K=1/(m.x*g.y-g.x*m.y);isFinite(K)&&(d.copy(h).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(K),v.copy(p).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(K),u[T].add(d),u[z].add(d),u[U].add(d),c[T].add(v),c[z].add(v),c[U].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let T=0,z=y.length;T<z;++T){const U=y[T],K=U.start,N=U.count;for(let W=K,Y=K+N;W<Y;W+=3)x(i[W+0],i[W+1],i[W+2])}const M=new G,w=new G,E=new G,R=new G;function S(T){E.fromArray(s,T*3),R.copy(E);const z=u[T];M.copy(z),M.sub(E.multiplyScalar(E.dot(z))).normalize(),w.crossVectors(R,z);const K=w.dot(c[T])<0?-1:1;l[T*4]=M.x,l[T*4+1]=M.y,l[T*4+2]=M.z,l[T*4+3]=K}for(let T=0,z=y.length;T<z;++T){const U=y[T],K=U.start,N=U.count;for(let W=K,Y=K+N;W<Y;W+=3)S(i[W+0]),S(i[W+1]),S(i[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new G,s=new G,o=new G,a=new G,l=new G,u=new G,c=new G,f=new G;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),m=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,g),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),u.fromBufferAttribute(i,g),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let p=0,_=0;for(let m=0,g=l.length;m<g;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*c;for(let d=0;d<c;d++)h[_++]=u[p++]}return new Xi(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Er,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zv=new qt,$s=new xM,Rc=new Md,Bv=new G,Ko=new G,Zo=new G,Qo=new G,zh=new G,Pc=new G,Lc=new dt,Nc=new dt,Dc=new dt,Hv=new G,Vv=new G,Gv=new G,Uc=new G,Ic=new G;class Br extends $n{constructor(e=new Er,t=new MM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Pc.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(zh.fromBufferAttribute(f,e),o?Pc.addScaledVector(zh,c):Pc.addScaledVector(zh.sub(t),c))}t.add(Pc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rc.copy(i.boundingSphere),Rc.applyMatrix4(s),$s.copy(e.ray).recast(e.near),!(Rc.containsPoint($s.origin)===!1&&($s.intersectSphere(Rc,Bv)===null||$s.origin.distanceToSquared(Bv)>(e.far-e.near)**2))&&(zv.copy(s).invert(),$s.copy(e.ray).applyMatrix4(zv),!(i.boundingBox!==null&&$s.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,$s)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,m=h.length;_<m;_++){const g=h[_],d=o[g.materialIndex],v=Math.max(g.start,p.start),x=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let y=v,M=x;y<M;y+=3){const w=a.getX(y),E=a.getX(y+1),R=a.getX(y+2);r=Oc(this,d,e,i,u,c,f,w,E,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),m=Math.min(a.count,p.start+p.count);for(let g=_,d=m;g<d;g+=3){const v=a.getX(g),x=a.getX(g+1),y=a.getX(g+2);r=Oc(this,o,e,i,u,c,f,v,x,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,m=h.length;_<m;_++){const g=h[_],d=o[g.materialIndex],v=Math.max(g.start,p.start),x=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=v,M=x;y<M;y+=3){const w=y,E=y+1,R=y+2;r=Oc(this,d,e,i,u,c,f,w,E,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),m=Math.min(l.count,p.start+p.count);for(let g=_,d=m;g<d;g+=3){const v=g,x=g+1,y=g+2;r=Oc(this,o,e,i,u,c,f,v,x,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function m2(n,e,t,i,r,s,o,a){let l;if(e.side===li?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Os,a),l===null)return null;Ic.copy(a),Ic.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Ic);return u<t.near||u>t.far?null:{distance:u,point:Ic.clone(),object:n}}function Oc(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Ko),n.getVertexPosition(l,Zo),n.getVertexPosition(u,Qo);const c=m2(n,e,t,i,Ko,Zo,Qo,Uc);if(c){r&&(Lc.fromBufferAttribute(r,a),Nc.fromBufferAttribute(r,l),Dc.fromBufferAttribute(r,u),c.uv=ir.getInterpolation(Uc,Ko,Zo,Qo,Lc,Nc,Dc,new dt)),s&&(Lc.fromBufferAttribute(s,a),Nc.fromBufferAttribute(s,l),Dc.fromBufferAttribute(s,u),c.uv1=ir.getInterpolation(Uc,Ko,Zo,Qo,Lc,Nc,Dc,new dt),c.uv2=c.uv1),o&&(Hv.fromBufferAttribute(o,a),Vv.fromBufferAttribute(o,l),Gv.fromBufferAttribute(o,u),c.normal=ir.getInterpolation(Uc,Ko,Zo,Qo,Hv,Vv,Gv,new G),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new G,materialIndex:0};ir.getNormal(Ko,Zo,Qo,f.normal),c.face=f}return c}class Bu extends Er{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Sr(u,3)),this.setAttribute("normal",new Sr(c,3)),this.setAttribute("uv",new Sr(f,2));function _(m,g,d,v,x,y,M,w,E,R,S){const T=y/E,z=M/R,U=y/2,K=M/2,N=w/2,W=E+1,Y=R+1;let F=0,I=0;const k=new G;for(let C=0;C<Y;C++){const Q=C*z-K;for(let te=0;te<W;te++){const q=te*T-U;k[m]=q*v,k[g]=Q*x,k[d]=N,u.push(k.x,k.y,k.z),k[m]=0,k[g]=0,k[d]=w>0?1:-1,c.push(k.x,k.y,k.z),f.push(te/E),f.push(1-C/R),F+=1}}for(let C=0;C<R;C++)for(let Q=0;Q<E;Q++){const te=h+Q+W*C,q=h+Q+W*(C+1),Z=h+(Q+1)+W*(C+1),le=h+(Q+1)+W*C;l.push(te,q,le),l.push(q,Z,le),I+=6}a.addGroup(p,I,S),p+=I,h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Za(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function kn(n){const e={};for(let t=0;t<n.length;t++){const i=Za(n[t]);for(const r in i)e[r]=i[r]}return e}function g2(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function TM(n){return n.getRenderTarget()===null?n.outputColorSpace:xt.workingColorSpace}const _2={clone:Za,merge:kn};var v2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,x2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class No extends nl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=v2,this.fragmentShader=x2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Za(e.uniforms),this.uniformsGroups=g2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class bM extends $n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=zr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class vi extends bM{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ym*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ym*2*Math.atan(Math.tan(Mh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mh*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Jo=-90,ea=1;class y2 extends $n{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vi(Jo,ea,e,t);r.layers=this.layers,this.add(r);const s=new vi(Jo,ea,e,t);s.layers=this.layers,this.add(s);const o=new vi(Jo,ea,e,t);o.layers=this.layers,this.add(o);const a=new vi(Jo,ea,e,t);a.layers=this.layers,this.add(a);const l=new vi(Jo,ea,e,t);l.layers=this.layers,this.add(l);const u=new vi(Jo,ea,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===zr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zf)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class AM extends Ti{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Ya,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class S2 extends Lo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(nu("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===So?_n:zi),this.texture=new AM(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ki}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Bu(5,5,5),s=new No({name:"CubemapFromEquirect",uniforms:Za(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:li,blending:Cs});s.uniforms.tEquirect.value=t;const o=new Br(r,s),a=t.minFilter;return t.minFilter===Ru&&(t.minFilter=ki),new y2(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Bh=new G,M2=new G,E2=new it;class eo{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Bh.subVectors(i,t).cross(M2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Bh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||E2.getNormalMatrix(e),r=this.coplanarPoint(Bh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ys=new Md,Fc=new G;class qg{constructor(e=new eo,t=new eo,i=new eo,r=new eo,s=new eo,o=new eo){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],p=r[8],_=r[9],m=r[10],g=r[11],d=r[12],v=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,h-u,g-p,y-d).normalize(),i[1].setComponents(l+s,h+u,g+p,y+d).normalize(),i[2].setComponents(l+o,h+c,g+_,y+v).normalize(),i[3].setComponents(l-o,h-c,g-_,y-v).normalize(),i[4].setComponents(l-a,h-f,g-m,y-x).normalize(),t===zr)i[5].setComponents(l+a,h+f,g+m,y+x).normalize();else if(t===Zf)i[5].setComponents(a,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ys)}intersectsSprite(e){return Ys.center.set(0,0,0),Ys.radius=.7071067811865476,Ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ys)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Fc.x=r.normal.x>0?e.max.x:e.min.x,Fc.y=r.normal.y>0?e.max.y:e.min.y,Fc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function CM(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function w2(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,h=u.usage,p=f.byteLength,_=n.createBuffer();n.bindBuffer(c,_),n.bufferData(c,f,h),u.onUploadCallback();let m;if(f instanceof Float32Array)m=n.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)m=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)m=n.SHORT;else if(f instanceof Uint32Array)m=n.UNSIGNED_INT;else if(f instanceof Int32Array)m=n.INT;else if(f instanceof Int8Array)m=n.BYTE;else if(f instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:m,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,c,f){const h=c.array,p=c._updateRange,_=c.updateRanges;if(n.bindBuffer(f,u),p.count===-1&&_.length===0&&n.bufferSubData(f,0,h),_.length!==0){for(let m=0,g=_.length;m<g;m++){const d=_[m];t?n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}c.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);if(f===void 0)i.set(u,r(u,c));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,u,c),f.version=u.version}}return{get:o,remove:a,update:l}}class Kg extends Er{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=t/l,p=[],_=[],m=[],g=[];for(let d=0;d<c;d++){const v=d*h-o;for(let x=0;x<u;x++){const y=x*f-s;_.push(y,-v,0),m.push(0,0,1),g.push(x/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const x=v+u*d,y=v+u*(d+1),M=v+1+u*(d+1),w=v+1+u*d;p.push(x,y,w),p.push(y,M,w)}this.setIndex(p),this.setAttribute("position",new Sr(_,3)),this.setAttribute("normal",new Sr(m,3)),this.setAttribute("uv",new Sr(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kg(e.width,e.height,e.widthSegments,e.heightSegments)}}var T2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,b2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,A2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R2=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,P2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,L2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,N2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D2=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,U2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,I2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,O2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,F2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,k2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,z2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,B2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,H2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,V2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,G2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,W2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,j2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,X2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Y2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,q2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,K2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Z2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Q2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,J2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tC="gl_FragColor = linearToOutputTexel( gl_FragColor );",nC=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,iC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sC=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,oC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dC=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hC=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,pC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_C=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,SC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,MC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,EC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wC=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,TC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,AC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CC=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RC=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PC=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,LC=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,NC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,UC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,IC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kC=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,BC=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,HC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,VC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,GC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,WC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$C=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,YC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,eR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,aR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,uR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_R=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,SR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,MR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ER=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,LR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,NR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,DR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,UR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,GR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,XR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$R=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,JR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eP=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:T2,alphahash_pars_fragment:b2,alphamap_fragment:A2,alphamap_pars_fragment:C2,alphatest_fragment:R2,alphatest_pars_fragment:P2,aomap_fragment:L2,aomap_pars_fragment:N2,batching_pars_vertex:D2,batching_vertex:U2,begin_vertex:I2,beginnormal_vertex:O2,bsdfs:F2,iridescence_fragment:k2,bumpmap_pars_fragment:z2,clipping_planes_fragment:B2,clipping_planes_pars_fragment:H2,clipping_planes_pars_vertex:V2,clipping_planes_vertex:G2,color_fragment:W2,color_pars_fragment:j2,color_pars_vertex:X2,color_vertex:$2,common:Y2,cube_uv_reflection_fragment:q2,defaultnormal_vertex:K2,displacementmap_pars_vertex:Z2,displacementmap_vertex:Q2,emissivemap_fragment:J2,emissivemap_pars_fragment:eC,colorspace_fragment:tC,colorspace_pars_fragment:nC,envmap_fragment:iC,envmap_common_pars_fragment:rC,envmap_pars_fragment:sC,envmap_pars_vertex:oC,envmap_physical_pars_fragment:vC,envmap_vertex:aC,fog_vertex:lC,fog_pars_vertex:uC,fog_fragment:cC,fog_pars_fragment:fC,gradientmap_pars_fragment:dC,lightmap_fragment:hC,lightmap_pars_fragment:pC,lights_lambert_fragment:mC,lights_lambert_pars_fragment:gC,lights_pars_begin:_C,lights_toon_fragment:xC,lights_toon_pars_fragment:yC,lights_phong_fragment:SC,lights_phong_pars_fragment:MC,lights_physical_fragment:EC,lights_physical_pars_fragment:wC,lights_fragment_begin:TC,lights_fragment_maps:bC,lights_fragment_end:AC,logdepthbuf_fragment:CC,logdepthbuf_pars_fragment:RC,logdepthbuf_pars_vertex:PC,logdepthbuf_vertex:LC,map_fragment:NC,map_pars_fragment:DC,map_particle_fragment:UC,map_particle_pars_fragment:IC,metalnessmap_fragment:OC,metalnessmap_pars_fragment:FC,morphcolor_vertex:kC,morphnormal_vertex:zC,morphtarget_pars_vertex:BC,morphtarget_vertex:HC,normal_fragment_begin:VC,normal_fragment_maps:GC,normal_pars_fragment:WC,normal_pars_vertex:jC,normal_vertex:XC,normalmap_pars_fragment:$C,clearcoat_normal_fragment_begin:YC,clearcoat_normal_fragment_maps:qC,clearcoat_pars_fragment:KC,iridescence_pars_fragment:ZC,opaque_fragment:QC,packing:JC,premultiplied_alpha_fragment:eR,project_vertex:tR,dithering_fragment:nR,dithering_pars_fragment:iR,roughnessmap_fragment:rR,roughnessmap_pars_fragment:sR,shadowmap_pars_fragment:oR,shadowmap_pars_vertex:aR,shadowmap_vertex:lR,shadowmask_pars_fragment:uR,skinbase_vertex:cR,skinning_pars_vertex:fR,skinning_vertex:dR,skinnormal_vertex:hR,specularmap_fragment:pR,specularmap_pars_fragment:mR,tonemapping_fragment:gR,tonemapping_pars_fragment:_R,transmission_fragment:vR,transmission_pars_fragment:xR,uv_pars_fragment:yR,uv_pars_vertex:SR,uv_vertex:MR,worldpos_vertex:ER,background_vert:wR,background_frag:TR,backgroundCube_vert:bR,backgroundCube_frag:AR,cube_vert:CR,cube_frag:RR,depth_vert:PR,depth_frag:LR,distanceRGBA_vert:NR,distanceRGBA_frag:DR,equirect_vert:UR,equirect_frag:IR,linedashed_vert:OR,linedashed_frag:FR,meshbasic_vert:kR,meshbasic_frag:zR,meshlambert_vert:BR,meshlambert_frag:HR,meshmatcap_vert:VR,meshmatcap_frag:GR,meshnormal_vert:WR,meshnormal_frag:jR,meshphong_vert:XR,meshphong_frag:$R,meshphysical_vert:YR,meshphysical_frag:qR,meshtoon_vert:KR,meshtoon_frag:ZR,points_vert:QR,points_frag:JR,shadow_vert:eP,shadow_frag:tP,sprite_vert:nP,sprite_frag:iP},ge={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},hr={basic:{uniforms:kn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:kn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new lt(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:kn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:kn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:kn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new lt(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:kn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:kn([ge.points,ge.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:kn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:kn([ge.common,ge.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:kn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:kn([ge.sprite,ge.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:kn([ge.common,ge.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:kn([ge.lights,ge.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};hr.physical={uniforms:kn([hr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const kc={r:0,b:0,g:0};function rP(n,e,t,i,r,s,o){const a=new lt(0);let l=s===!0?0:1,u,c,f=null,h=0,p=null;function _(g,d){let v=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x)),x===null?m(a,l):x&&x.isColor&&(m(x,1),v=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===yd)?(c===void 0&&(c=new Br(new Bu(1,1,1),new No({name:"BackgroundCubeMaterial",uniforms:Za(hr.backgroundCube.uniforms),vertexShader:hr.backgroundCube.vertexShader,fragmentShader:hr.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=xt.getTransfer(x.colorSpace)!==Pt,(f!==x||h!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,p=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new Br(new Kg(2,2),new No({name:"BackgroundMaterial",uniforms:Za(hr.background.uniforms),vertexShader:hr.background.vertexShader,fragmentShader:hr.background.fragmentShader,side:Os,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=xt.getTransfer(x.colorSpace)!==Pt,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,p=n.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function m(g,d){g.getRGB(kc,TM(n)),i.buffers.color.setClear(kc.r,kc.g,kc.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(g,d=1){a.set(g),l=d,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,m(a,l)},render:_}}function sP(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=g(null);let u=l,c=!1;function f(N,W,Y,F,I){let k=!1;if(o){const C=m(F,Y,W);u!==C&&(u=C,p(u.object)),k=d(N,F,Y,I),k&&v(N,F,Y,I)}else{const C=W.wireframe===!0;(u.geometry!==F.id||u.program!==Y.id||u.wireframe!==C)&&(u.geometry=F.id,u.program=Y.id,u.wireframe=C,k=!0)}I!==null&&t.update(I,n.ELEMENT_ARRAY_BUFFER),(k||c)&&(c=!1,R(N,W,Y,F),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(N){return i.isWebGL2?n.bindVertexArray(N):s.bindVertexArrayOES(N)}function _(N){return i.isWebGL2?n.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function m(N,W,Y){const F=Y.wireframe===!0;let I=a[N.id];I===void 0&&(I={},a[N.id]=I);let k=I[W.id];k===void 0&&(k={},I[W.id]=k);let C=k[F];return C===void 0&&(C=g(h()),k[F]=C),C}function g(N){const W=[],Y=[],F=[];for(let I=0;I<r;I++)W[I]=0,Y[I]=0,F[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:Y,attributeDivisors:F,object:N,attributes:{},index:null}}function d(N,W,Y,F){const I=u.attributes,k=W.attributes;let C=0;const Q=Y.getAttributes();for(const te in Q)if(Q[te].location>=0){const Z=I[te];let le=k[te];if(le===void 0&&(te==="instanceMatrix"&&N.instanceMatrix&&(le=N.instanceMatrix),te==="instanceColor"&&N.instanceColor&&(le=N.instanceColor)),Z===void 0||Z.attribute!==le||le&&Z.data!==le.data)return!0;C++}return u.attributesNum!==C||u.index!==F}function v(N,W,Y,F){const I={},k=W.attributes;let C=0;const Q=Y.getAttributes();for(const te in Q)if(Q[te].location>=0){let Z=k[te];Z===void 0&&(te==="instanceMatrix"&&N.instanceMatrix&&(Z=N.instanceMatrix),te==="instanceColor"&&N.instanceColor&&(Z=N.instanceColor));const le={};le.attribute=Z,Z&&Z.data&&(le.data=Z.data),I[te]=le,C++}u.attributes=I,u.attributesNum=C,u.index=F}function x(){const N=u.newAttributes;for(let W=0,Y=N.length;W<Y;W++)N[W]=0}function y(N){M(N,0)}function M(N,W){const Y=u.newAttributes,F=u.enabledAttributes,I=u.attributeDivisors;Y[N]=1,F[N]===0&&(n.enableVertexAttribArray(N),F[N]=1),I[N]!==W&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,W),I[N]=W)}function w(){const N=u.newAttributes,W=u.enabledAttributes;for(let Y=0,F=W.length;Y<F;Y++)W[Y]!==N[Y]&&(n.disableVertexAttribArray(Y),W[Y]=0)}function E(N,W,Y,F,I,k,C){C===!0?n.vertexAttribIPointer(N,W,Y,I,k):n.vertexAttribPointer(N,W,Y,F,I,k)}function R(N,W,Y,F){if(i.isWebGL2===!1&&(N.isInstancedMesh||F.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const I=F.attributes,k=Y.getAttributes(),C=W.defaultAttributeValues;for(const Q in k){const te=k[Q];if(te.location>=0){let q=I[Q];if(q===void 0&&(Q==="instanceMatrix"&&N.instanceMatrix&&(q=N.instanceMatrix),Q==="instanceColor"&&N.instanceColor&&(q=N.instanceColor)),q!==void 0){const Z=q.normalized,le=q.itemSize,pe=t.get(q);if(pe===void 0)continue;const me=pe.buffer,De=pe.type,Ae=pe.bytesPerElement,ke=i.isWebGL2===!0&&(De===n.INT||De===n.UNSIGNED_INT||q.gpuType===sM);if(q.isInterleavedBufferAttribute){const Ue=q.data,H=Ue.stride,We=q.offset;if(Ue.isInstancedInterleavedBuffer){for(let _e=0;_e<te.locationSize;_e++)M(te.location+_e,Ue.meshPerAttribute);N.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let _e=0;_e<te.locationSize;_e++)y(te.location+_e);n.bindBuffer(n.ARRAY_BUFFER,me);for(let _e=0;_e<te.locationSize;_e++)E(te.location+_e,le/te.locationSize,De,Z,H*Ae,(We+le/te.locationSize*_e)*Ae,ke)}else{if(q.isInstancedBufferAttribute){for(let Ue=0;Ue<te.locationSize;Ue++)M(te.location+Ue,q.meshPerAttribute);N.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Ue=0;Ue<te.locationSize;Ue++)y(te.location+Ue);n.bindBuffer(n.ARRAY_BUFFER,me);for(let Ue=0;Ue<te.locationSize;Ue++)E(te.location+Ue,le/te.locationSize,De,Z,le*Ae,le/te.locationSize*Ue*Ae,ke)}}else if(C!==void 0){const Z=C[Q];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(te.location,Z);break;case 3:n.vertexAttrib3fv(te.location,Z);break;case 4:n.vertexAttrib4fv(te.location,Z);break;default:n.vertexAttrib1fv(te.location,Z)}}}}w()}function S(){U();for(const N in a){const W=a[N];for(const Y in W){const F=W[Y];for(const I in F)_(F[I].object),delete F[I];delete W[Y]}delete a[N]}}function T(N){if(a[N.id]===void 0)return;const W=a[N.id];for(const Y in W){const F=W[Y];for(const I in F)_(F[I].object),delete F[I];delete W[Y]}delete a[N.id]}function z(N){for(const W in a){const Y=a[W];if(Y[N.id]===void 0)continue;const F=Y[N.id];for(const I in F)_(F[I].object),delete F[I];delete Y[N.id]}}function U(){K(),c=!0,u!==l&&(u=l,p(u.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:U,resetDefaultState:K,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:z,initAttributes:x,enableAttribute:y,disableUnusedAttributes:w}}function oP(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,f){n.drawArrays(s,c,f),t.update(f,s,1)}function l(c,f,h){if(h===0)return;let p,_;if(r)p=n,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](s,c,f,h),t.update(f,s,h)}function u(c,f,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<h;_++)this.render(c[_],f[_]);else{p.multiDrawArraysWEBGL(s,c,0,f,0,h);let _=0;for(let m=0;m<h;m++)_+=f[m];t.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function aP(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,y=o||e.has("OES_texture_float"),M=x&&y,w=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:g,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:w}}function lP(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new eo,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,m=f.clipIntersection,g=f.clipShadows,d=n.get(f);if(!r||_===null||_.length===0||s&&!g)s?c(null):u();else{const v=s?0:i,x=v*4;let y=d.clippingState||null;l.value=y,y=c(_,h,x,p);for(let M=0;M!==x;++M)y[M]=t[M];d.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,p,_){const m=f!==null?f.length:0;let g=null;if(m!==0){if(g=l.value,_!==!0||g===null){const d=p+m*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<d)&&(g=new Float32Array(d));for(let x=0,y=p;x!==m;++x,y+=4)o.copy(f[x]).applyMatrix4(v,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}}function uP(n){let e=new WeakMap;function t(o,a){return a===mm?o.mapping=Ya:a===gm&&(o.mapping=qa),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===mm||a===gm)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new S2(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class cP extends bM{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xa=4,Wv=[.125,.215,.35,.446,.526,.582],io=20,Hh=new cP,jv=new lt;let Vh=null,Gh=0,Wh=0;const to=(1+Math.sqrt(5))/2,ta=1/to,Xv=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,to,ta),new G(0,to,-ta),new G(ta,0,to),new G(-ta,0,to),new G(to,ta,0),new G(-to,ta,0)];class $v{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Vh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vh,Gh,Wh),e.scissorTest=!1,zc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ya||e.mapping===qa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ki,minFilter:ki,generateMipmaps:!1,type:Pu,format:sr,colorSpace:qr,depthBuffer:!1},r=Yv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yv(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fP(s)),this._blurMaterial=dP(s,e,t)}return r}_compileMaterial(e){const t=new Br(this._lodPlanes[0],e);this._renderer.compile(t,Hh)}_sceneToCubeUV(e,t,i,r){const a=new vi(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(jv),c.toneMapping=Rs,c.autoClear=!1;const p=new MM({name:"PMREM.Background",side:li,depthWrite:!1,depthTest:!1}),_=new Br(new Bu,p);let m=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,m=!0):(p.color.copy(jv),m=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const x=this._cubeSize;zc(r,v*x,d>2?x:0,x,x),c.setRenderTarget(r),m&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ya||e.mapping===qa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Br(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;zc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Hh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Xv[(r-1)%Xv.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Br(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*io-1),m=s/_,g=isFinite(s)?1+Math.floor(c*m):io;g>io&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${io}`);const d=[];let v=0;for(let E=0;E<io;++E){const R=E/m,S=Math.exp(-R*R/2);d.push(S),E===0?v+=S:E<g&&(v+=2*S)}for(let E=0;E<d.length;E++)d[E]=d[E]/v;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=_,h.mipInt.value=x-i;const y=this._sizeLods[r],M=3*y*(r>x-xa?r-x+xa:0),w=4*(this._cubeSize-y);zc(t,M,w,3*y,2*y),l.setRenderTarget(t),l.render(f,Hh)}}function fP(n){const e=[],t=[],i=[];let r=n;const s=n-xa+1+Wv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-xa?l=Wv[o-n+xa-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,_=6,m=3,g=2,d=1,v=new Float32Array(m*_*p),x=new Float32Array(g*_*p),y=new Float32Array(d*_*p);for(let w=0;w<p;w++){const E=w%3*2/3-1,R=w>2?0:-1,S=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];v.set(S,m*_*w),x.set(h,g*_*w);const T=[w,w,w,w,w,w];y.set(T,d*_*w)}const M=new Er;M.setAttribute("position",new Xi(v,m)),M.setAttribute("uv",new Xi(x,g)),M.setAttribute("faceIndex",new Xi(y,d)),e.push(M),r>xa&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Yv(n,e,t){const i=new Lo(n,e,t);return i.texture.mapping=yd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function dP(n,e,t){const i=new Float32Array(io),r=new G(0,1,0);return new No({name:"SphericalGaussianBlur",defines:{n:io,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Cs,depthTest:!1,depthWrite:!1})}function qv(){return new No({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Cs,depthTest:!1,depthWrite:!1})}function Kv(){return new No({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cs,depthTest:!1,depthWrite:!1})}function Zg(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hP(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===mm||l===gm,c=l===Ya||l===qa;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new $v(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){t===null&&(t=new $v(n));const h=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function pP(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function mP(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const m=h.morphAttributes[_];for(let g=0,d=m.length;g<d;g++)e.remove(m[g])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const m=p[_];for(let g=0,d=m.length;g<d;g++)e.update(m[g],n.ARRAY_BUFFER)}}function u(f){const h=[],p=f.index,_=f.attributes.position;let m=0;if(p!==null){const v=p.array;m=p.version;for(let x=0,y=v.length;x<y;x+=3){const M=v[x+0],w=v[x+1],E=v[x+2];h.push(M,w,w,E,E,M)}}else if(_!==void 0){const v=_.array;m=_.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const M=x+0,w=x+1,E=x+2;h.push(M,w,w,E,E,M)}}else return;const g=new(mM(h)?wM:EM)(h,1);g.version=m;const d=s.get(f);d&&e.remove(d),s.set(f,g)}function c(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function gP(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function c(p,_){n.drawElements(s,_,a,p*l),t.update(_,s,1)}function f(p,_,m){if(m===0)return;let g,d;if(r)g=n,d="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[d](s,_,a,p*l,m),t.update(_,s,m)}function h(p,_,m){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<m;d++)this.render(p[d]/l,_[d]);else{g.multiDrawElementsWEBGL(s,_,0,a,p,0,m);let d=0;for(let v=0;v<m;v++)d+=_[v];t.update(d,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=h}function _P(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function vP(n,e){return n[0]-e[0]}function xP(n,e){return Math.abs(e[1])-Math.abs(n[1])}function yP(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new It,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=_!==void 0?_.length:0;let g=s.get(c);if(g===void 0||g.count!==m){let W=function(){K.dispose(),s.delete(c),c.removeEventListener("dispose",W)};var p=W;g!==void 0&&g.texture.dispose();const x=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,w=c.morphAttributes.position||[],E=c.morphAttributes.normal||[],R=c.morphAttributes.color||[];let S=0;x===!0&&(S=1),y===!0&&(S=2),M===!0&&(S=3);let T=c.attributes.position.count*S,z=1;T>e.maxTextureSize&&(z=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const U=new Float32Array(T*z*4*m),K=new vM(U,T,z,m);K.type=gs,K.needsUpdate=!0;const N=S*4;for(let Y=0;Y<m;Y++){const F=w[Y],I=E[Y],k=R[Y],C=T*z*4*Y;for(let Q=0;Q<F.count;Q++){const te=Q*N;x===!0&&(o.fromBufferAttribute(F,Q),U[C+te+0]=o.x,U[C+te+1]=o.y,U[C+te+2]=o.z,U[C+te+3]=0),y===!0&&(o.fromBufferAttribute(I,Q),U[C+te+4]=o.x,U[C+te+5]=o.y,U[C+te+6]=o.z,U[C+te+7]=0),M===!0&&(o.fromBufferAttribute(k,Q),U[C+te+8]=o.x,U[C+te+9]=o.y,U[C+te+10]=o.z,U[C+te+11]=k.itemSize===4?o.w:1)}}g={count:m,texture:K,size:new dt(T,z)},s.set(c,g),c.addEventListener("dispose",W)}let d=0;for(let x=0;x<h.length;x++)d+=h[x];const v=c.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",v),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{const _=h===void 0?0:h.length;let m=i[c.id];if(m===void 0||m.length!==_){m=[];for(let y=0;y<_;y++)m[y]=[y,0];i[c.id]=m}for(let y=0;y<_;y++){const M=m[y];M[0]=y,M[1]=h[y]}m.sort(xP);for(let y=0;y<8;y++)y<_&&m[y][1]?(a[y][0]=m[y][0],a[y][1]=m[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(vP);const g=c.morphAttributes.position,d=c.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const M=a[y],w=M[0],E=M[1];w!==Number.MAX_SAFE_INTEGER&&E?(g&&c.getAttribute("morphTarget"+y)!==g[w]&&c.setAttribute("morphTarget"+y,g[w]),d&&c.getAttribute("morphNormal"+y)!==d[w]&&c.setAttribute("morphNormal"+y,d[w]),r[y]=E,v+=E):(g&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),d&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const x=c.morphTargetsRelative?1:1-v;f.getUniforms().setValue(n,"morphTargetBaseInfluence",x),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function SP(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class RM extends Ti{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:yo,c!==yo&&c!==Ka)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===yo&&(i=ms),i===void 0&&c===Ka&&(i=xo),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Gn,this.minFilter=l!==void 0?l:Gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const PM=new Ti,LM=new RM(1,1);LM.compareFunction=pM;const NM=new vM,DM=new r2,UM=new AM,Zv=[],Qv=[],Jv=new Float32Array(16),ex=new Float32Array(9),tx=new Float32Array(4);function il(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Zv[r];if(s===void 0&&(s=new Float32Array(r),Zv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function ln(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function un(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function wd(n,e){let t=Qv[e];t===void 0&&(t=new Int32Array(e),Qv[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function MP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function EP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2fv(this.addr,e),un(t,e)}}function wP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;n.uniform3fv(this.addr,e),un(t,e)}}function TP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4fv(this.addr,e),un(t,e)}}function bP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(ln(t,i))return;tx.set(i),n.uniformMatrix2fv(this.addr,!1,tx),un(t,i)}}function AP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(ln(t,i))return;ex.set(i),n.uniformMatrix3fv(this.addr,!1,ex),un(t,i)}}function CP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(ln(t,i))return;Jv.set(i),n.uniformMatrix4fv(this.addr,!1,Jv),un(t,i)}}function RP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function PP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2iv(this.addr,e),un(t,e)}}function LP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;n.uniform3iv(this.addr,e),un(t,e)}}function NP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4iv(this.addr,e),un(t,e)}}function DP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function UP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2uiv(this.addr,e),un(t,e)}}function IP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;n.uniform3uiv(this.addr,e),un(t,e)}}function OP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4uiv(this.addr,e),un(t,e)}}function FP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?LM:PM;t.setTexture2D(e||s,r)}function kP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||DM,r)}function zP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||UM,r)}function BP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||NM,r)}function HP(n){switch(n){case 5126:return MP;case 35664:return EP;case 35665:return wP;case 35666:return TP;case 35674:return bP;case 35675:return AP;case 35676:return CP;case 5124:case 35670:return RP;case 35667:case 35671:return PP;case 35668:case 35672:return LP;case 35669:case 35673:return NP;case 5125:return DP;case 36294:return UP;case 36295:return IP;case 36296:return OP;case 35678:case 36198:case 36298:case 36306:case 35682:return FP;case 35679:case 36299:case 36307:return kP;case 35680:case 36300:case 36308:case 36293:return zP;case 36289:case 36303:case 36311:case 36292:return BP}}function VP(n,e){n.uniform1fv(this.addr,e)}function GP(n,e){const t=il(e,this.size,2);n.uniform2fv(this.addr,t)}function WP(n,e){const t=il(e,this.size,3);n.uniform3fv(this.addr,t)}function jP(n,e){const t=il(e,this.size,4);n.uniform4fv(this.addr,t)}function XP(n,e){const t=il(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function $P(n,e){const t=il(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function YP(n,e){const t=il(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function qP(n,e){n.uniform1iv(this.addr,e)}function KP(n,e){n.uniform2iv(this.addr,e)}function ZP(n,e){n.uniform3iv(this.addr,e)}function QP(n,e){n.uniform4iv(this.addr,e)}function JP(n,e){n.uniform1uiv(this.addr,e)}function eL(n,e){n.uniform2uiv(this.addr,e)}function tL(n,e){n.uniform3uiv(this.addr,e)}function nL(n,e){n.uniform4uiv(this.addr,e)}function iL(n,e,t){const i=this.cache,r=e.length,s=wd(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||PM,s[o])}function rL(n,e,t){const i=this.cache,r=e.length,s=wd(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||DM,s[o])}function sL(n,e,t){const i=this.cache,r=e.length,s=wd(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||UM,s[o])}function oL(n,e,t){const i=this.cache,r=e.length,s=wd(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||NM,s[o])}function aL(n){switch(n){case 5126:return VP;case 35664:return GP;case 35665:return WP;case 35666:return jP;case 35674:return XP;case 35675:return $P;case 35676:return YP;case 5124:case 35670:return qP;case 35667:case 35671:return KP;case 35668:case 35672:return ZP;case 35669:case 35673:return QP;case 5125:return JP;case 36294:return eL;case 36295:return tL;case 36296:return nL;case 35678:case 36198:case 36298:case 36306:case 35682:return iL;case 35679:case 36299:case 36307:return rL;case 35680:case 36300:case 36308:case 36293:return sL;case 36289:case 36303:case 36311:case 36292:return oL}}class lL{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=HP(t.type)}}class uL{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=aL(t.type)}}class cL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const jh=/(\w+)(\])?(\[|\.)?/g;function nx(n,e){n.seq.push(e),n.map[e.id]=e}function fL(n,e,t){const i=n.name,r=i.length;for(jh.lastIndex=0;;){const s=jh.exec(i),o=jh.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){nx(t,u===void 0?new lL(a,n,e):new uL(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new cL(a),nx(t,f)),t=f}}}class cf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);fL(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function ix(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const dL=37297;let hL=0;function pL(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function mL(n){const e=xt.getPrimaries(xt.workingColorSpace),t=xt.getPrimaries(n);let i;switch(e===t?i="":e===Kf&&t===qf?i="LinearDisplayP3ToLinearSRGB":e===qf&&t===Kf&&(i="LinearSRGBToLinearDisplayP3"),n){case qr:case Sd:return[i,"LinearTransferOETF"];case _n:case Yg:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function rx(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+pL(n.getShaderSource(e),o)}else return r}function gL(n,e){const t=mL(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function _L(n,e){let t;switch(e){case CA:t="Linear";break;case RA:t="Reinhard";break;case PA:t="OptimizedCineon";break;case LA:t="ACESFilmic";break;case NA:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function vL(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Dl).join(`
`)}function xL(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function yL(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Dl(n){return n!==""}function sx(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ox(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mm(n){return n.replace(SL,EL)}const ML=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function EL(n,e){let t=Qe[e];if(t===void 0){const i=ML.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Mm(t)}const wL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ax(n){return n.replace(wL,TL)}function TL(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function lx(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bL(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===iM?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===nA?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Rr&&(e="SHADOWMAP_TYPE_VSM"),e}function AL(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ya:case qa:e="ENVMAP_TYPE_CUBE";break;case yd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function CL(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case qa:e="ENVMAP_MODE_REFRACTION";break}return e}function RL(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Xg:e="ENVMAP_BLENDING_MULTIPLY";break;case bA:e="ENVMAP_BLENDING_MIX";break;case AA:e="ENVMAP_BLENDING_ADD";break}return e}function PL(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function LL(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=bL(t),u=AL(t),c=CL(t),f=RL(t),h=PL(t),p=t.isWebGL2?"":vL(t),_=xL(s),m=r.createProgram();let g,d,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Dl).join(`
`),g.length>0&&(g+=`
`),d=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Dl).join(`
`),d.length>0&&(d+=`
`)):(g=[lx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dl).join(`
`),d=[p,lx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rs?"#define TONE_MAPPING":"",t.toneMapping!==Rs?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Rs?_L("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,gL("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Dl).join(`
`)),o=Mm(o),o=sx(o,t),o=ox(o,t),a=Mm(a),a=sx(a,t),a=ox(a,t),o=ax(o),a=ax(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===bv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=v+g+o,y=v+d+a,M=ix(r,r.VERTEX_SHADER,x),w=ix(r,r.FRAGMENT_SHADER,y);r.attachShader(m,M),r.attachShader(m,w),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function E(z){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(m).trim(),K=r.getShaderInfoLog(M).trim(),N=r.getShaderInfoLog(w).trim();let W=!0,Y=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,M,w);else{const F=rx(r,M,"vertex"),I=rx(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+U+`
`+F+`
`+I)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(K===""||N==="")&&(Y=!1);Y&&(z.diagnostics={runnable:W,programLog:U,vertexShader:{log:K,prefix:g},fragmentShader:{log:N,prefix:d}})}r.deleteShader(M),r.deleteShader(w),R=new cf(r,m),S=yL(r,m)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(m,dL)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hL++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=w,this}let NL=0;class DL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new UL(e),t.set(e,i)),i}}class UL{constructor(e){this.id=NL++,this.code=e,this.usedTimes=0}}function IL(n,e,t,i,r,s,o){const a=new yM,l=new DL,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return S===0?"uv":`uv${S}`}function g(S,T,z,U,K){const N=U.fog,W=K.geometry,Y=S.isMeshStandardMaterial?U.environment:null,F=(S.isMeshStandardMaterial?t:e).get(S.envMap||Y),I=F&&F.mapping===yd?F.image.height:null,k=_[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const C=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Q=C!==void 0?C.length:0;let te=0;W.morphAttributes.position!==void 0&&(te=1),W.morphAttributes.normal!==void 0&&(te=2),W.morphAttributes.color!==void 0&&(te=3);let q,Z,le,pe;if(k){const Me=hr[k];q=Me.vertexShader,Z=Me.fragmentShader}else q=S.vertexShader,Z=S.fragmentShader,l.update(S),le=l.getVertexShaderID(S),pe=l.getFragmentShaderID(S);const me=n.getRenderTarget(),De=K.isInstancedMesh===!0,Ae=K.isBatchedMesh===!0,ke=!!S.map,Ue=!!S.matcap,H=!!F,We=!!S.aoMap,_e=!!S.lightMap,He=!!S.bumpMap,Ce=!!S.normalMap,j=!!S.displacementMap,Ve=!!S.emissiveMap,Ge=!!S.metalnessMap,st=!!S.roughnessMap,Ze=S.anisotropy>0,yt=S.clearcoat>0,P=S.iridescence>0,b=S.sheen>0,B=S.transmission>0,oe=Ze&&!!S.anisotropyMap,ee=yt&&!!S.clearcoatMap,re=yt&&!!S.clearcoatNormalMap,xe=yt&&!!S.clearcoatRoughnessMap,ue=P&&!!S.iridescenceMap,ve=P&&!!S.iridescenceThicknessMap,ye=b&&!!S.sheenColorMap,at=b&&!!S.sheenRoughnessMap,se=!!S.specularMap,ut=!!S.specularColorMap,je=!!S.specularIntensityMap,Oe=B&&!!S.transmissionMap,Re=B&&!!S.thicknessMap,ne=!!S.gradientMap,qe=!!S.alphaMap,D=S.alphaTest>0,he=!!S.alphaHash,ie=!!S.extensions,J=!!W.attributes.uv1,fe=!!W.attributes.uv2,Ne=!!W.attributes.uv3;let Je=Rs;return S.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Je=n.toneMapping),{isWebGL2:c,shaderID:k,shaderType:S.type,shaderName:S.name,vertexShader:q,fragmentShader:Z,defines:S.defines,customVertexShaderID:le,customFragmentShaderID:pe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ae,instancing:De,instancingColor:De&&K.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:qr,map:ke,matcap:Ue,envMap:H,envMapMode:H&&F.mapping,envMapCubeUVHeight:I,aoMap:We,lightMap:_e,bumpMap:He,normalMap:Ce,displacementMap:h&&j,emissiveMap:Ve,normalMapObjectSpace:Ce&&S.normalMapType===WA,normalMapTangentSpace:Ce&&S.normalMapType===hM,metalnessMap:Ge,roughnessMap:st,anisotropy:Ze,anisotropyMap:oe,clearcoat:yt,clearcoatMap:ee,clearcoatNormalMap:re,clearcoatRoughnessMap:xe,iridescence:P,iridescenceMap:ue,iridescenceThicknessMap:ve,sheen:b,sheenColorMap:ye,sheenRoughnessMap:at,specularMap:se,specularColorMap:ut,specularIntensityMap:je,transmission:B,transmissionMap:Oe,thicknessMap:Re,gradientMap:ne,opaque:S.transparent===!1&&S.blending===Na,alphaMap:qe,alphaTest:D,alphaHash:he,combine:S.combine,mapUv:ke&&m(S.map.channel),aoMapUv:We&&m(S.aoMap.channel),lightMapUv:_e&&m(S.lightMap.channel),bumpMapUv:He&&m(S.bumpMap.channel),normalMapUv:Ce&&m(S.normalMap.channel),displacementMapUv:j&&m(S.displacementMap.channel),emissiveMapUv:Ve&&m(S.emissiveMap.channel),metalnessMapUv:Ge&&m(S.metalnessMap.channel),roughnessMapUv:st&&m(S.roughnessMap.channel),anisotropyMapUv:oe&&m(S.anisotropyMap.channel),clearcoatMapUv:ee&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:re&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:at&&m(S.sheenRoughnessMap.channel),specularMapUv:se&&m(S.specularMap.channel),specularColorMapUv:ut&&m(S.specularColorMap.channel),specularIntensityMapUv:je&&m(S.specularIntensityMap.channel),transmissionMapUv:Oe&&m(S.transmissionMap.channel),thicknessMapUv:Re&&m(S.thicknessMap.channel),alphaMapUv:qe&&m(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ce||Ze),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:J,vertexUv2s:fe,vertexUv3s:Ne,pointsUvs:K.isPoints===!0&&!!W.attributes.uv&&(ke||qe),fog:!!N,useFog:S.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:K.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:te,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:Je,useLegacyLights:n._useLegacyLights,decodeVideoTexture:ke&&S.map.isVideoTexture===!0&&xt.getTransfer(S.map.colorSpace)===Pt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ir,flipSided:S.side===li,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ie&&S.extensions.derivatives===!0,extensionFragDepth:ie&&S.extensions.fragDepth===!0,extensionDrawBuffers:ie&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ie&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const z in S.defines)T.push(z),T.push(S.defines[z]);return S.isRawShaderMaterial===!1&&(v(T,S),x(T,S),T.push(n.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function v(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function x(S,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const T=_[S.type];let z;if(T){const U=hr[T];z=_2.clone(U.uniforms)}else z=S.uniforms;return z}function M(S,T){let z;for(let U=0,K=u.length;U<K;U++){const N=u[U];if(N.cacheKey===T){z=N,++z.usedTimes;break}}return z===void 0&&(z=new LL(n,T,S,s),u.push(z)),z}function w(S){if(--S.usedTimes===0){const T=u.indexOf(S);u[T]=u[u.length-1],u.pop(),S.destroy()}}function E(S){l.remove(S)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:y,acquireProgram:M,releaseProgram:w,releaseShaderCache:E,programs:u,dispose:R}}function OL(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function FL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ux(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function cx(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,_,m,g){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:m,group:g},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=m,d.group=g),e++,d}function a(f,h,p,_,m,g){const d=o(f,h,p,_,m,g);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,_,m,g){const d=o(f,h,p,_,m,g);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function u(f,h){t.length>1&&t.sort(f||FL),i.length>1&&i.sort(h||ux),r.length>1&&r.sort(h||ux)}function c(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function kL(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new cx,n.set(i,[o])):r>=s.length?(o=new cx,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function zL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new lt};break;case"SpotLight":t={position:new G,direction:new G,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function BL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let HL=0;function VL(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function GL(n,e){const t=new zL,i=BL(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new G);const s=new G,o=new qt,a=new qt;function l(c,f){let h=0,p=0,_=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let m=0,g=0,d=0,v=0,x=0,y=0,M=0,w=0,E=0,R=0,S=0;c.sort(VL);const T=f===!0?Math.PI:1;for(let U=0,K=c.length;U<K;U++){const N=c[U],W=N.color,Y=N.intensity,F=N.distance,I=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=W.r*Y*T,p+=W.g*Y*T,_+=W.b*Y*T;else if(N.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(N.sh.coefficients[k],Y);S++}else if(N.isDirectionalLight){const k=t.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity*T),N.castShadow){const C=N.shadow,Q=i.get(N);Q.shadowBias=C.bias,Q.shadowNormalBias=C.normalBias,Q.shadowRadius=C.radius,Q.shadowMapSize=C.mapSize,r.directionalShadow[m]=Q,r.directionalShadowMap[m]=I,r.directionalShadowMatrix[m]=N.shadow.matrix,y++}r.directional[m]=k,m++}else if(N.isSpotLight){const k=t.get(N);k.position.setFromMatrixPosition(N.matrixWorld),k.color.copy(W).multiplyScalar(Y*T),k.distance=F,k.coneCos=Math.cos(N.angle),k.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),k.decay=N.decay,r.spot[d]=k;const C=N.shadow;if(N.map&&(r.spotLightMap[E]=N.map,E++,C.updateMatrices(N),N.castShadow&&R++),r.spotLightMatrix[d]=C.matrix,N.castShadow){const Q=i.get(N);Q.shadowBias=C.bias,Q.shadowNormalBias=C.normalBias,Q.shadowRadius=C.radius,Q.shadowMapSize=C.mapSize,r.spotShadow[d]=Q,r.spotShadowMap[d]=I,w++}d++}else if(N.isRectAreaLight){const k=t.get(N);k.color.copy(W).multiplyScalar(Y),k.halfWidth.set(N.width*.5,0,0),k.halfHeight.set(0,N.height*.5,0),r.rectArea[v]=k,v++}else if(N.isPointLight){const k=t.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity*T),k.distance=N.distance,k.decay=N.decay,N.castShadow){const C=N.shadow,Q=i.get(N);Q.shadowBias=C.bias,Q.shadowNormalBias=C.normalBias,Q.shadowRadius=C.radius,Q.shadowMapSize=C.mapSize,Q.shadowCameraNear=C.camera.near,Q.shadowCameraFar=C.camera.far,r.pointShadow[g]=Q,r.pointShadowMap[g]=I,r.pointShadowMatrix[g]=N.shadow.matrix,M++}r.point[g]=k,g++}else if(N.isHemisphereLight){const k=t.get(N);k.skyColor.copy(N.color).multiplyScalar(Y*T),k.groundColor.copy(N.groundColor).multiplyScalar(Y*T),r.hemi[x]=k,x++}}v>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=_;const z=r.hash;(z.directionalLength!==m||z.pointLength!==g||z.spotLength!==d||z.rectAreaLength!==v||z.hemiLength!==x||z.numDirectionalShadows!==y||z.numPointShadows!==M||z.numSpotShadows!==w||z.numSpotMaps!==E||z.numLightProbes!==S)&&(r.directional.length=m,r.spot.length=d,r.rectArea.length=v,r.point.length=g,r.hemi.length=x,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=w+E-R,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=R,r.numLightProbes=S,z.directionalLength=m,z.pointLength=g,z.spotLength=d,z.rectAreaLength=v,z.hemiLength=x,z.numDirectionalShadows=y,z.numPointShadows=M,z.numSpotShadows=w,z.numSpotMaps=E,z.numLightProbes=S,r.version=HL++)}function u(c,f){let h=0,p=0,_=0,m=0,g=0;const d=f.matrixWorldInverse;for(let v=0,x=c.length;v<x;v++){const y=c[v];if(y.isDirectionalLight){const M=r.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),h++}else if(y.isSpotLight){const M=r.spot[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),_++}else if(y.isRectAreaLight){const M=r.rectArea[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(d),a.identity(),o.copy(y.matrixWorld),o.premultiply(d),a.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){const M=r.point[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){const M=r.hemi[g];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(d),g++}}}return{setup:l,setupView:u,state:r}}function fx(n,e){const t=new GL(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function u(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function WL(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new fx(n,e),t.set(s,[l])):o>=a.length?(l=new fx(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class jL extends nl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=VA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class XL extends nl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $L=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qL(n,e,t){let i=new qg;const r=new dt,s=new dt,o=new It,a=new jL({depthPacking:GA}),l=new XL,u={},c=t.maxTextureSize,f={[Os]:li,[li]:Os,[Ir]:Ir},h=new No({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:$L,fragmentShader:YL}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Er;_.setAttribute("position",new Xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Br(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iM;let d=this.type;this.render=function(M,w,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;const R=n.getRenderTarget(),S=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Cs),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const U=d!==Rr&&this.type===Rr,K=d===Rr&&this.type!==Rr;for(let N=0,W=M.length;N<W;N++){const Y=M[N],F=Y.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const I=F.getFrameExtents();if(r.multiply(I),s.copy(F.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/I.x),r.x=s.x*I.x,F.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/I.y),r.y=s.y*I.y,F.mapSize.y=s.y)),F.map===null||U===!0||K===!0){const C=this.type!==Rr?{minFilter:Gn,magFilter:Gn}:{};F.map!==null&&F.map.dispose(),F.map=new Lo(r.x,r.y,C),F.map.texture.name=Y.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();const k=F.getViewportCount();for(let C=0;C<k;C++){const Q=F.getViewport(C);o.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),z.viewport(o),F.updateMatrices(Y,C),i=F.getFrustum(),y(w,E,F.camera,Y,this.type)}F.isPointLightShadow!==!0&&this.type===Rr&&v(F,E),F.needsUpdate=!1}d=this.type,g.needsUpdate=!1,n.setRenderTarget(R,S,T)};function v(M,w){const E=e.update(m);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Lo(r.x,r.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(w,null,E,h,m,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(w,null,E,p,m,null)}function x(M,w,E,R){let S=null;const T=E.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(T!==void 0)S=T;else if(S=E.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const z=S.uuid,U=w.uuid;let K=u[z];K===void 0&&(K={},u[z]=K);let N=K[U];N===void 0&&(N=S.clone(),K[U]=N),S=N}if(S.visible=w.visible,S.wireframe=w.wireframe,R===Rr?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:f[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,E.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=n.properties.get(S);z.light=E}return S}function y(M,w,E,R,S){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===Rr)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,M.matrixWorld);const U=e.update(M),K=M.material;if(Array.isArray(K)){const N=U.groups;for(let W=0,Y=N.length;W<Y;W++){const F=N[W],I=K[F.materialIndex];if(I&&I.visible){const k=x(M,I,R,S);M.onBeforeShadow(n,M,w,E,U,k,F),n.renderBufferDirect(E,null,U,k,M,F),M.onAfterShadow(n,M,w,E,U,k,F)}}}else if(K.visible){const N=x(M,K,R,S);M.onBeforeShadow(n,M,w,E,U,N,null),n.renderBufferDirect(E,null,U,N,M,null),M.onAfterShadow(n,M,w,E,U,N,null)}}const z=M.children;for(let U=0,K=z.length;U<K;U++)y(z[U],w,E,R,S)}}function KL(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const he=new It;let ie=null;const J=new It(0,0,0,0);return{setMask:function(fe){ie!==fe&&!D&&(n.colorMask(fe,fe,fe,fe),ie=fe)},setLocked:function(fe){D=fe},setClear:function(fe,Ne,Je,be,Me){Me===!0&&(fe*=be,Ne*=be,Je*=be),he.set(fe,Ne,Je,be),J.equals(he)===!1&&(n.clearColor(fe,Ne,Je,be),J.copy(he))},reset:function(){D=!1,ie=null,J.set(-1,0,0,0)}}}function s(){let D=!1,he=null,ie=null,J=null;return{setTest:function(fe){fe?Ae(n.DEPTH_TEST):ke(n.DEPTH_TEST)},setMask:function(fe){he!==fe&&!D&&(n.depthMask(fe),he=fe)},setFunc:function(fe){if(ie!==fe){switch(fe){case xA:n.depthFunc(n.NEVER);break;case yA:n.depthFunc(n.ALWAYS);break;case SA:n.depthFunc(n.LESS);break;case $f:n.depthFunc(n.LEQUAL);break;case MA:n.depthFunc(n.EQUAL);break;case EA:n.depthFunc(n.GEQUAL);break;case wA:n.depthFunc(n.GREATER);break;case TA:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ie=fe}},setLocked:function(fe){D=fe},setClear:function(fe){J!==fe&&(n.clearDepth(fe),J=fe)},reset:function(){D=!1,he=null,ie=null,J=null}}}function o(){let D=!1,he=null,ie=null,J=null,fe=null,Ne=null,Je=null,be=null,Me=null;return{setTest:function(Le){D||(Le?Ae(n.STENCIL_TEST):ke(n.STENCIL_TEST))},setMask:function(Le){he!==Le&&!D&&(n.stencilMask(Le),he=Le)},setFunc:function(Le,ce,Fe){(ie!==Le||J!==ce||fe!==Fe)&&(n.stencilFunc(Le,ce,Fe),ie=Le,J=ce,fe=Fe)},setOp:function(Le,ce,Fe){(Ne!==Le||Je!==ce||be!==Fe)&&(n.stencilOp(Le,ce,Fe),Ne=Le,Je=ce,be=Fe)},setLocked:function(Le){D=Le},setClear:function(Le){Me!==Le&&(n.clearStencil(Le),Me=Le)},reset:function(){D=!1,he=null,ie=null,J=null,fe=null,Ne=null,Je=null,be=null,Me=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let h={},p={},_=new WeakMap,m=[],g=null,d=!1,v=null,x=null,y=null,M=null,w=null,E=null,R=null,S=new lt(0,0,0),T=0,z=!1,U=null,K=null,N=null,W=null,Y=null;const F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,k=0;const C=n.getParameter(n.VERSION);C.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(C)[1]),I=k>=1):C.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),I=k>=2);let Q=null,te={};const q=n.getParameter(n.SCISSOR_BOX),Z=n.getParameter(n.VIEWPORT),le=new It().fromArray(q),pe=new It().fromArray(Z);function me(D,he,ie,J){const fe=new Uint8Array(4),Ne=n.createTexture();n.bindTexture(D,Ne),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Je=0;Je<ie;Je++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(he,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,fe):n.texImage2D(he+Je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,fe);return Ne}const De={};De[n.TEXTURE_2D]=me(n.TEXTURE_2D,n.TEXTURE_2D,1),De[n.TEXTURE_CUBE_MAP]=me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(De[n.TEXTURE_2D_ARRAY]=me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),De[n.TEXTURE_3D]=me(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ae(n.DEPTH_TEST),l.setFunc($f),Ve(!1),Ge($_),Ae(n.CULL_FACE),Ce(Cs);function Ae(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function ke(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function Ue(D,he){return p[D]!==he?(n.bindFramebuffer(D,he),p[D]=he,i&&(D===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=he),D===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=he)),!0):!1}function H(D,he){let ie=m,J=!1;if(D)if(ie=_.get(he),ie===void 0&&(ie=[],_.set(he,ie)),D.isWebGLMultipleRenderTargets){const fe=D.texture;if(ie.length!==fe.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let Ne=0,Je=fe.length;Ne<Je;Ne++)ie[Ne]=n.COLOR_ATTACHMENT0+Ne;ie.length=fe.length,J=!0}}else ie[0]!==n.COLOR_ATTACHMENT0&&(ie[0]=n.COLOR_ATTACHMENT0,J=!0);else ie[0]!==n.BACK&&(ie[0]=n.BACK,J=!0);J&&(t.isWebGL2?n.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function We(D){return g!==D?(n.useProgram(D),g=D,!0):!1}const _e={[no]:n.FUNC_ADD,[rA]:n.FUNC_SUBTRACT,[sA]:n.FUNC_REVERSE_SUBTRACT};if(i)_e[K_]=n.MIN,_e[Z_]=n.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(_e[K_]=D.MIN_EXT,_e[Z_]=D.MAX_EXT)}const He={[oA]:n.ZERO,[aA]:n.ONE,[lA]:n.SRC_COLOR,[hm]:n.SRC_ALPHA,[pA]:n.SRC_ALPHA_SATURATE,[dA]:n.DST_COLOR,[cA]:n.DST_ALPHA,[uA]:n.ONE_MINUS_SRC_COLOR,[pm]:n.ONE_MINUS_SRC_ALPHA,[hA]:n.ONE_MINUS_DST_COLOR,[fA]:n.ONE_MINUS_DST_ALPHA,[mA]:n.CONSTANT_COLOR,[gA]:n.ONE_MINUS_CONSTANT_COLOR,[_A]:n.CONSTANT_ALPHA,[vA]:n.ONE_MINUS_CONSTANT_ALPHA};function Ce(D,he,ie,J,fe,Ne,Je,be,Me,Le){if(D===Cs){d===!0&&(ke(n.BLEND),d=!1);return}if(d===!1&&(Ae(n.BLEND),d=!0),D!==iA){if(D!==v||Le!==z){if((x!==no||w!==no)&&(n.blendEquation(n.FUNC_ADD),x=no,w=no),Le)switch(D){case Na:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dm:n.blendFunc(n.ONE,n.ONE);break;case Y_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case q_:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Na:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dm:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Y_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case q_:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,M=null,E=null,R=null,S.set(0,0,0),T=0,v=D,z=Le}return}fe=fe||he,Ne=Ne||ie,Je=Je||J,(he!==x||fe!==w)&&(n.blendEquationSeparate(_e[he],_e[fe]),x=he,w=fe),(ie!==y||J!==M||Ne!==E||Je!==R)&&(n.blendFuncSeparate(He[ie],He[J],He[Ne],He[Je]),y=ie,M=J,E=Ne,R=Je),(be.equals(S)===!1||Me!==T)&&(n.blendColor(be.r,be.g,be.b,Me),S.copy(be),T=Me),v=D,z=!1}function j(D,he){D.side===Ir?ke(n.CULL_FACE):Ae(n.CULL_FACE);let ie=D.side===li;he&&(ie=!ie),Ve(ie),D.blending===Na&&D.transparent===!1?Ce(Cs):Ce(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const J=D.stencilWrite;u.setTest(J),J&&(u.setMask(D.stencilWriteMask),u.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),u.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ze(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ae(n.SAMPLE_ALPHA_TO_COVERAGE):ke(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(D){U!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),U=D)}function Ge(D){D!==eA?(Ae(n.CULL_FACE),D!==K&&(D===$_?n.cullFace(n.BACK):D===tA?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ke(n.CULL_FACE),K=D}function st(D){D!==N&&(I&&n.lineWidth(D),N=D)}function Ze(D,he,ie){D?(Ae(n.POLYGON_OFFSET_FILL),(W!==he||Y!==ie)&&(n.polygonOffset(he,ie),W=he,Y=ie)):ke(n.POLYGON_OFFSET_FILL)}function yt(D){D?Ae(n.SCISSOR_TEST):ke(n.SCISSOR_TEST)}function P(D){D===void 0&&(D=n.TEXTURE0+F-1),Q!==D&&(n.activeTexture(D),Q=D)}function b(D,he,ie){ie===void 0&&(Q===null?ie=n.TEXTURE0+F-1:ie=Q);let J=te[ie];J===void 0&&(J={type:void 0,texture:void 0},te[ie]=J),(J.type!==D||J.texture!==he)&&(Q!==ie&&(n.activeTexture(ie),Q=ie),n.bindTexture(D,he||De[D]),J.type=D,J.texture=he)}function B(){const D=te[Q];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function oe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function je(D){le.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),le.copy(D))}function Oe(D){pe.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),pe.copy(D))}function Re(D,he){let ie=f.get(he);ie===void 0&&(ie=new WeakMap,f.set(he,ie));let J=ie.get(D);J===void 0&&(J=n.getUniformBlockIndex(he,D.name),ie.set(D,J))}function ne(D,he){const J=f.get(he).get(D);c.get(he)!==J&&(n.uniformBlockBinding(he,J,D.__bindingPointIndex),c.set(he,J))}function qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Q=null,te={},p={},_=new WeakMap,m=[],g=null,d=!1,v=null,x=null,y=null,M=null,w=null,E=null,R=null,S=new lt(0,0,0),T=0,z=!1,U=null,K=null,N=null,W=null,Y=null,le.set(0,0,n.canvas.width,n.canvas.height),pe.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Ae,disable:ke,bindFramebuffer:Ue,drawBuffers:H,useProgram:We,setBlending:Ce,setMaterial:j,setFlipSided:Ve,setCullFace:Ge,setLineWidth:st,setPolygonOffset:Ze,setScissorTest:yt,activeTexture:P,bindTexture:b,unbindTexture:B,compressedTexImage2D:oe,compressedTexImage3D:ee,texImage2D:se,texImage3D:ut,updateUBOMapping:Re,uniformBlockBinding:ne,texStorage2D:ye,texStorage3D:at,texSubImage2D:re,texSubImage3D:xe,compressedTexSubImage2D:ue,compressedTexSubImage3D:ve,scissor:je,viewport:Oe,reset:qe}}function ZL(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let m;const g=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,b){return d?new OffscreenCanvas(P,b):Qf("canvas")}function x(P,b,B,oe){let ee=1;if((P.width>oe||P.height>oe)&&(ee=oe/Math.max(P.width,P.height)),ee<1||b===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const re=b?Sm:Math.floor,xe=re(ee*P.width),ue=re(ee*P.height);m===void 0&&(m=v(xe,ue));const ve=B?v(xe,ue):m;return ve.width=xe,ve.height=ue,ve.getContext("2d").drawImage(P,0,0,xe,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+xe+"x"+ue+")."),ve}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function y(P){return Av(P.width)&&Av(P.height)}function M(P){return a?!1:P.wrapS!==rr||P.wrapT!==rr||P.minFilter!==Gn&&P.minFilter!==ki}function w(P,b){return P.generateMipmaps&&b&&P.minFilter!==Gn&&P.minFilter!==ki}function E(P){n.generateMipmap(P)}function R(P,b,B,oe,ee=!1){if(a===!1)return b;if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let re=b;if(b===n.RED&&(B===n.FLOAT&&(re=n.R32F),B===n.HALF_FLOAT&&(re=n.R16F),B===n.UNSIGNED_BYTE&&(re=n.R8)),b===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(re=n.R8UI),B===n.UNSIGNED_SHORT&&(re=n.R16UI),B===n.UNSIGNED_INT&&(re=n.R32UI),B===n.BYTE&&(re=n.R8I),B===n.SHORT&&(re=n.R16I),B===n.INT&&(re=n.R32I)),b===n.RG&&(B===n.FLOAT&&(re=n.RG32F),B===n.HALF_FLOAT&&(re=n.RG16F),B===n.UNSIGNED_BYTE&&(re=n.RG8)),b===n.RGBA){const xe=ee?Yf:xt.getTransfer(oe);B===n.FLOAT&&(re=n.RGBA32F),B===n.HALF_FLOAT&&(re=n.RGBA16F),B===n.UNSIGNED_BYTE&&(re=xe===Pt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(re=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(re=n.RGB5_A1)}return(re===n.R16F||re===n.R32F||re===n.RG16F||re===n.RG32F||re===n.RGBA16F||re===n.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function S(P,b,B){return w(P,B)===!0||P.isFramebufferTexture&&P.minFilter!==Gn&&P.minFilter!==ki?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function T(P){return P===Gn||P===Q_||P===gh?n.NEAREST:n.LINEAR}function z(P){const b=P.target;b.removeEventListener("dispose",z),K(b),b.isVideoTexture&&_.delete(b)}function U(P){const b=P.target;b.removeEventListener("dispose",U),W(b)}function K(P){const b=i.get(P);if(b.__webglInit===void 0)return;const B=P.source,oe=g.get(B);if(oe){const ee=oe[b.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&N(P),Object.keys(oe).length===0&&g.delete(B)}i.remove(P)}function N(P){const b=i.get(P);n.deleteTexture(b.__webglTexture);const B=P.source,oe=g.get(B);delete oe[b.__cacheKey],o.memory.textures--}function W(P){const b=P.texture,B=i.get(P),oe=i.get(b);if(oe.__webglTexture!==void 0&&(n.deleteTexture(oe.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(B.__webglFramebuffer[ee]))for(let re=0;re<B.__webglFramebuffer[ee].length;re++)n.deleteFramebuffer(B.__webglFramebuffer[ee][re]);else n.deleteFramebuffer(B.__webglFramebuffer[ee]);B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer[ee])}else{if(Array.isArray(B.__webglFramebuffer))for(let ee=0;ee<B.__webglFramebuffer.length;ee++)n.deleteFramebuffer(B.__webglFramebuffer[ee]);else n.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&n.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ee=0;ee<B.__webglColorRenderbuffer.length;ee++)B.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(B.__webglColorRenderbuffer[ee]);B.__webglDepthRenderbuffer&&n.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ee=0,re=b.length;ee<re;ee++){const xe=i.get(b[ee]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(b[ee])}i.remove(b),i.remove(P)}let Y=0;function F(){Y=0}function I(){const P=Y;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),Y+=1,P}function k(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function C(P,b){const B=i.get(P);if(P.isVideoTexture&&Ze(P),P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){const oe=P.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(B,P,b);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+b)}function Q(P,b){const B=i.get(P);if(P.version>0&&B.__version!==P.version){Ae(B,P,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+b)}function te(P,b){const B=i.get(P);if(P.version>0&&B.__version!==P.version){Ae(B,P,b);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+b)}function q(P,b){const B=i.get(P);if(P.version>0&&B.__version!==P.version){ke(B,P,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+b)}const Z={[_m]:n.REPEAT,[rr]:n.CLAMP_TO_EDGE,[vm]:n.MIRRORED_REPEAT},le={[Gn]:n.NEAREST,[Q_]:n.NEAREST_MIPMAP_NEAREST,[gh]:n.NEAREST_MIPMAP_LINEAR,[ki]:n.LINEAR,[DA]:n.LINEAR_MIPMAP_NEAREST,[Ru]:n.LINEAR_MIPMAP_LINEAR},pe={[jA]:n.NEVER,[ZA]:n.ALWAYS,[XA]:n.LESS,[pM]:n.LEQUAL,[$A]:n.EQUAL,[KA]:n.GEQUAL,[YA]:n.GREATER,[qA]:n.NOTEQUAL};function me(P,b,B){if(B?(n.texParameteri(P,n.TEXTURE_WRAP_S,Z[b.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,Z[b.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,Z[b.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,le[b.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,le[b.minFilter])):(n.texParameteri(P,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(P,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(b.wrapS!==rr||b.wrapT!==rr)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(P,n.TEXTURE_MAG_FILTER,T(b.magFilter)),n.texParameteri(P,n.TEXTURE_MIN_FILTER,T(b.minFilter)),b.minFilter!==Gn&&b.minFilter!==ki&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,pe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const oe=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Gn||b.minFilter!==gh&&b.minFilter!==Ru||b.type===gs&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===Pu&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(n.texParameterf(P,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function De(P,b){let B=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",z));const oe=b.source;let ee=g.get(oe);ee===void 0&&(ee={},g.set(oe,ee));const re=k(b);if(re!==P.__cacheKey){ee[re]===void 0&&(ee[re]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ee[re].usedTimes++;const xe=ee[P.__cacheKey];xe!==void 0&&(ee[P.__cacheKey].usedTimes--,xe.usedTimes===0&&N(b)),P.__cacheKey=re,P.__webglTexture=ee[re].texture}return B}function Ae(P,b,B){let oe=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(oe=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(oe=n.TEXTURE_3D);const ee=De(P,b),re=b.source;t.bindTexture(oe,P.__webglTexture,n.TEXTURE0+B);const xe=i.get(re);if(re.version!==xe.__version||ee===!0){t.activeTexture(n.TEXTURE0+B);const ue=xt.getPrimaries(xt.workingColorSpace),ve=b.colorSpace===zi?null:xt.getPrimaries(b.colorSpace),ye=b.colorSpace===zi||ue===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const at=M(b)&&y(b.image)===!1;let se=x(b.image,at,!1,c);se=yt(b,se);const ut=y(se)||a,je=s.convert(b.format,b.colorSpace);let Oe=s.convert(b.type),Re=R(b.internalFormat,je,Oe,b.colorSpace,b.isVideoTexture);me(oe,b,ut);let ne;const qe=b.mipmaps,D=a&&b.isVideoTexture!==!0&&Re!==fM,he=xe.__version===void 0||ee===!0,ie=S(b,se,ut);if(b.isDepthTexture)Re=n.DEPTH_COMPONENT,a?b.type===gs?Re=n.DEPTH_COMPONENT32F:b.type===ms?Re=n.DEPTH_COMPONENT24:b.type===xo?Re=n.DEPTH24_STENCIL8:Re=n.DEPTH_COMPONENT16:b.type===gs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===yo&&Re===n.DEPTH_COMPONENT&&b.type!==$g&&b.type!==ms&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=ms,Oe=s.convert(b.type)),b.format===Ka&&Re===n.DEPTH_COMPONENT&&(Re=n.DEPTH_STENCIL,b.type!==xo&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=xo,Oe=s.convert(b.type))),he&&(D?t.texStorage2D(n.TEXTURE_2D,1,Re,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,Re,se.width,se.height,0,je,Oe,null));else if(b.isDataTexture)if(qe.length>0&&ut){D&&he&&t.texStorage2D(n.TEXTURE_2D,ie,Re,qe[0].width,qe[0].height);for(let J=0,fe=qe.length;J<fe;J++)ne=qe[J],D?t.texSubImage2D(n.TEXTURE_2D,J,0,0,ne.width,ne.height,je,Oe,ne.data):t.texImage2D(n.TEXTURE_2D,J,Re,ne.width,ne.height,0,je,Oe,ne.data);b.generateMipmaps=!1}else D?(he&&t.texStorage2D(n.TEXTURE_2D,ie,Re,se.width,se.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,je,Oe,se.data)):t.texImage2D(n.TEXTURE_2D,0,Re,se.width,se.height,0,je,Oe,se.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){D&&he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ie,Re,qe[0].width,qe[0].height,se.depth);for(let J=0,fe=qe.length;J<fe;J++)ne=qe[J],b.format!==sr?je!==null?D?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ne.width,ne.height,se.depth,je,ne.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,Re,ne.width,ne.height,se.depth,0,ne.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ne.width,ne.height,se.depth,je,Oe,ne.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,Re,ne.width,ne.height,se.depth,0,je,Oe,ne.data)}else{D&&he&&t.texStorage2D(n.TEXTURE_2D,ie,Re,qe[0].width,qe[0].height);for(let J=0,fe=qe.length;J<fe;J++)ne=qe[J],b.format!==sr?je!==null?D?t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,ne.width,ne.height,je,ne.data):t.compressedTexImage2D(n.TEXTURE_2D,J,Re,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?t.texSubImage2D(n.TEXTURE_2D,J,0,0,ne.width,ne.height,je,Oe,ne.data):t.texImage2D(n.TEXTURE_2D,J,Re,ne.width,ne.height,0,je,Oe,ne.data)}else if(b.isDataArrayTexture)D?(he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ie,Re,se.width,se.height,se.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,je,Oe,se.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,se.width,se.height,se.depth,0,je,Oe,se.data);else if(b.isData3DTexture)D?(he&&t.texStorage3D(n.TEXTURE_3D,ie,Re,se.width,se.height,se.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,je,Oe,se.data)):t.texImage3D(n.TEXTURE_3D,0,Re,se.width,se.height,se.depth,0,je,Oe,se.data);else if(b.isFramebufferTexture){if(he)if(D)t.texStorage2D(n.TEXTURE_2D,ie,Re,se.width,se.height);else{let J=se.width,fe=se.height;for(let Ne=0;Ne<ie;Ne++)t.texImage2D(n.TEXTURE_2D,Ne,Re,J,fe,0,je,Oe,null),J>>=1,fe>>=1}}else if(qe.length>0&&ut){D&&he&&t.texStorage2D(n.TEXTURE_2D,ie,Re,qe[0].width,qe[0].height);for(let J=0,fe=qe.length;J<fe;J++)ne=qe[J],D?t.texSubImage2D(n.TEXTURE_2D,J,0,0,je,Oe,ne):t.texImage2D(n.TEXTURE_2D,J,Re,je,Oe,ne);b.generateMipmaps=!1}else D?(he&&t.texStorage2D(n.TEXTURE_2D,ie,Re,se.width,se.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,je,Oe,se)):t.texImage2D(n.TEXTURE_2D,0,Re,je,Oe,se);w(b,ut)&&E(oe),xe.__version=re.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function ke(P,b,B){if(b.image.length!==6)return;const oe=De(P,b),ee=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+B);const re=i.get(ee);if(ee.version!==re.__version||oe===!0){t.activeTexture(n.TEXTURE0+B);const xe=xt.getPrimaries(xt.workingColorSpace),ue=b.colorSpace===zi?null:xt.getPrimaries(b.colorSpace),ve=b.colorSpace===zi||xe===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const ye=b.isCompressedTexture||b.image[0].isCompressedTexture,at=b.image[0]&&b.image[0].isDataTexture,se=[];for(let J=0;J<6;J++)!ye&&!at?se[J]=x(b.image[J],!1,!0,u):se[J]=at?b.image[J].image:b.image[J],se[J]=yt(b,se[J]);const ut=se[0],je=y(ut)||a,Oe=s.convert(b.format,b.colorSpace),Re=s.convert(b.type),ne=R(b.internalFormat,Oe,Re,b.colorSpace),qe=a&&b.isVideoTexture!==!0,D=re.__version===void 0||oe===!0;let he=S(b,ut,je);me(n.TEXTURE_CUBE_MAP,b,je);let ie;if(ye){qe&&D&&t.texStorage2D(n.TEXTURE_CUBE_MAP,he,ne,ut.width,ut.height);for(let J=0;J<6;J++){ie=se[J].mipmaps;for(let fe=0;fe<ie.length;fe++){const Ne=ie[fe];b.format!==sr?Oe!==null?qe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,0,0,Ne.width,Ne.height,Oe,Ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,ne,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,0,0,Ne.width,Ne.height,Oe,Re,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,ne,Ne.width,Ne.height,0,Oe,Re,Ne.data)}}}else{ie=b.mipmaps,qe&&D&&(ie.length>0&&he++,t.texStorage2D(n.TEXTURE_CUBE_MAP,he,ne,se[0].width,se[0].height));for(let J=0;J<6;J++)if(at){qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,se[J].width,se[J].height,Oe,Re,se[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ne,se[J].width,se[J].height,0,Oe,Re,se[J].data);for(let fe=0;fe<ie.length;fe++){const Je=ie[fe].image[J].image;qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,0,0,Je.width,Je.height,Oe,Re,Je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,ne,Je.width,Je.height,0,Oe,Re,Je.data)}}else{qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Oe,Re,se[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ne,Oe,Re,se[J]);for(let fe=0;fe<ie.length;fe++){const Ne=ie[fe];qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,0,0,Oe,Re,Ne.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,ne,Oe,Re,Ne.image[J])}}}w(b,je)&&E(n.TEXTURE_CUBE_MAP),re.__version=ee.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Ue(P,b,B,oe,ee,re){const xe=s.convert(B.format,B.colorSpace),ue=s.convert(B.type),ve=R(B.internalFormat,xe,ue,B.colorSpace);if(!i.get(b).__hasExternalTextures){const at=Math.max(1,b.width>>re),se=Math.max(1,b.height>>re);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,re,ve,at,se,b.depth,0,xe,ue,null):t.texImage2D(ee,re,ve,at,se,0,xe,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),st(b)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,ee,i.get(B).__webglTexture,0,Ge(b)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,oe,ee,i.get(B).__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function H(P,b,B){if(n.bindRenderbuffer(n.RENDERBUFFER,P),b.depthBuffer&&!b.stencilBuffer){let oe=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(B||st(b)){const ee=b.depthTexture;ee&&ee.isDepthTexture&&(ee.type===gs?oe=n.DEPTH_COMPONENT32F:ee.type===ms&&(oe=n.DEPTH_COMPONENT24));const re=Ge(b);st(b)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,oe,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,re,oe,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,oe,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,P)}else if(b.depthBuffer&&b.stencilBuffer){const oe=Ge(b);B&&st(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,n.DEPTH24_STENCIL8,b.width,b.height):st(b)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,P)}else{const oe=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ee=0;ee<oe.length;ee++){const re=oe[ee],xe=s.convert(re.format,re.colorSpace),ue=s.convert(re.type),ve=R(re.internalFormat,xe,ue,re.colorSpace),ye=Ge(b);B&&st(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,ve,b.width,b.height):st(b)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,ve,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,ve,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function We(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),C(b.depthTexture,0);const oe=i.get(b.depthTexture).__webglTexture,ee=Ge(b);if(b.depthTexture.format===yo)st(b)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0);else if(b.depthTexture.format===Ka)st(b)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function _e(P){const b=i.get(P),B=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");We(b.__webglFramebuffer,P)}else if(B){b.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[oe]),b.__webglDepthbuffer[oe]=n.createRenderbuffer(),H(b.__webglDepthbuffer[oe],P,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),H(b.__webglDepthbuffer,P,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(P,b,B){const oe=i.get(P);b!==void 0&&Ue(oe.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&_e(P)}function Ce(P){const b=P.texture,B=i.get(P),oe=i.get(b);P.addEventListener("dispose",U),P.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture()),oe.__version=b.version,o.memory.textures++);const ee=P.isWebGLCubeRenderTarget===!0,re=P.isWebGLMultipleRenderTargets===!0,xe=y(P)||a;if(ee){B.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(a&&b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer[ue]=[];for(let ve=0;ve<b.mipmaps.length;ve++)B.__webglFramebuffer[ue][ve]=n.createFramebuffer()}else B.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer=[];for(let ue=0;ue<b.mipmaps.length;ue++)B.__webglFramebuffer[ue]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(re)if(r.drawBuffers){const ue=P.texture;for(let ve=0,ye=ue.length;ve<ye;ve++){const at=i.get(ue[ve]);at.__webglTexture===void 0&&(at.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&st(P)===!1){const ue=re?b:[b];B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ve=0;ve<ue.length;ve++){const ye=ue[ve];B.__webglColorRenderbuffer[ve]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ve]);const at=s.convert(ye.format,ye.colorSpace),se=s.convert(ye.type),ut=R(ye.internalFormat,at,se,ye.colorSpace,P.isXRRenderTarget===!0),je=Ge(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,je,ut,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,B.__webglColorRenderbuffer[ve])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),H(B.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),me(n.TEXTURE_CUBE_MAP,b,xe);for(let ue=0;ue<6;ue++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let ve=0;ve<b.mipmaps.length;ve++)Ue(B.__webglFramebuffer[ue][ve],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ve);else Ue(B.__webglFramebuffer[ue],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);w(b,xe)&&E(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){const ue=P.texture;for(let ve=0,ye=ue.length;ve<ye;ve++){const at=ue[ve],se=i.get(at);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),me(n.TEXTURE_2D,at,xe),Ue(B.__webglFramebuffer,P,at,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,0),w(at,xe)&&E(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?ue=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ue,oe.__webglTexture),me(ue,b,xe),a&&b.mipmaps&&b.mipmaps.length>0)for(let ve=0;ve<b.mipmaps.length;ve++)Ue(B.__webglFramebuffer[ve],P,b,n.COLOR_ATTACHMENT0,ue,ve);else Ue(B.__webglFramebuffer,P,b,n.COLOR_ATTACHMENT0,ue,0);w(b,xe)&&E(ue),t.unbindTexture()}P.depthBuffer&&_e(P)}function j(P){const b=y(P)||a,B=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let oe=0,ee=B.length;oe<ee;oe++){const re=B[oe];if(w(re,b)){const xe=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ue=i.get(re).__webglTexture;t.bindTexture(xe,ue),E(xe),t.unbindTexture()}}}function Ve(P){if(a&&P.samples>0&&st(P)===!1){const b=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],B=P.width,oe=P.height;let ee=n.COLOR_BUFFER_BIT;const re=[],xe=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(P),ve=P.isWebGLMultipleRenderTargets===!0;if(ve)for(let ye=0;ye<b.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let ye=0;ye<b.length;ye++){re.push(n.COLOR_ATTACHMENT0+ye),P.depthBuffer&&re.push(xe);const at=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(at===!1&&(P.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),ve&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[ye]),at===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[xe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[xe])),ve){const se=i.get(b[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,se,0)}n.blitFramebuffer(0,0,B,oe,0,0,B,oe,ee,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ve)for(let ye=0;ye<b.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,ue.__webglColorRenderbuffer[ye]);const at=i.get(b[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,at,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function Ge(P){return Math.min(f,P.samples)}function st(P){const b=i.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ze(P){const b=o.render.frame;_.get(P)!==b&&(_.set(P,b),P.update())}function yt(P,b){const B=P.colorSpace,oe=P.format,ee=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===xm||B!==qr&&B!==zi&&(xt.getTransfer(B)===Pt?a===!1?e.has("EXT_sRGB")===!0&&oe===sr?(P.format=xm,P.minFilter=ki,P.generateMipmaps=!1):b=gM.sRGBToLinear(b):(oe!==sr||ee!==Ps)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),b}this.allocateTextureUnit=I,this.resetTextureUnits=F,this.setTexture2D=C,this.setTexture2DArray=Q,this.setTexture3D=te,this.setTextureCube=q,this.rebindTextures=He,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=st}function QL(n,e,t){const i=t.isWebGL2;function r(s,o=zi){let a;const l=xt.getTransfer(o);if(s===Ps)return n.UNSIGNED_BYTE;if(s===oM)return n.UNSIGNED_SHORT_4_4_4_4;if(s===aM)return n.UNSIGNED_SHORT_5_5_5_1;if(s===UA)return n.BYTE;if(s===IA)return n.SHORT;if(s===$g)return n.UNSIGNED_SHORT;if(s===sM)return n.INT;if(s===ms)return n.UNSIGNED_INT;if(s===gs)return n.FLOAT;if(s===Pu)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===OA)return n.ALPHA;if(s===sr)return n.RGBA;if(s===FA)return n.LUMINANCE;if(s===kA)return n.LUMINANCE_ALPHA;if(s===yo)return n.DEPTH_COMPONENT;if(s===Ka)return n.DEPTH_STENCIL;if(s===xm)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===zA)return n.RED;if(s===lM)return n.RED_INTEGER;if(s===BA)return n.RG;if(s===uM)return n.RG_INTEGER;if(s===cM)return n.RGBA_INTEGER;if(s===_h||s===vh||s===xh||s===yh)if(l===Pt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===_h)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===vh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===xh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===yh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===_h)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===vh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===xh)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===yh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===J_||s===ev||s===tv||s===nv)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===J_)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ev)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===tv)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===nv)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===fM)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===iv||s===rv)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===iv)return l===Pt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===rv)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===sv||s===ov||s===av||s===lv||s===uv||s===cv||s===fv||s===dv||s===hv||s===pv||s===mv||s===gv||s===_v||s===vv)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===sv)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ov)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===av)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===lv)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===uv)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===cv)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===fv)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===dv)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===hv)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===pv)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===mv)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===gv)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===_v)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===vv)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Sh||s===xv||s===yv)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Sh)return l===Pt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===xv)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===yv)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===HA||s===Sv||s===Mv||s===Ev)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Sh)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Sv)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Mv)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ev)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===xo?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class JL extends vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ul extends $n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const e3={type:"move"};class Xh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ul,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ul,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ul,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const m of e.hand.values()){const g=t.getJointPose(m,i),d=this._getHandJoint(u,m);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&h>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(e3)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ul;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class t3 extends tl{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,_=null;const m=t.getContextAttributes();let g=null,d=null;const v=[],x=[],y=new dt;let M=null;const w=new vi;w.layers.enable(1),w.viewport=new It;const E=new vi;E.layers.enable(2),E.viewport=new It;const R=[w,E],S=new JL;S.layers.enable(1),S.layers.enable(2);let T=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Z=v[q];return Z===void 0&&(Z=new Xh,v[q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(q){let Z=v[q];return Z===void 0&&(Z=new Xh,v[q]=Z),Z.getGripSpace()},this.getHand=function(q){let Z=v[q];return Z===void 0&&(Z=new Xh,v[q]=Z),Z.getHandSpace()};function U(q){const Z=x.indexOf(q.inputSource);if(Z===-1)return;const le=v[Z];le!==void 0&&(le.update(q.inputSource,q.frame,u||o),le.dispatchEvent({type:q.type,data:q.inputSource}))}function K(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",N);for(let q=0;q<v.length;q++){const Z=x[q];Z!==null&&(x[q]=null,v[q].disconnect(Z))}T=null,z=null,e.setRenderTarget(g),p=null,h=null,f=null,r=null,d=null,te.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",K),r.addEventListener("inputsourceschange",N),m.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new Lo(p.framebufferWidth,p.framebufferHeight,{format:sr,type:Ps,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,le=null,pe=null;m.depth&&(pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=m.stencil?Ka:yo,le=m.stencil?xo:ms);const me={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(me),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),d=new Lo(h.textureWidth,h.textureHeight,{format:sr,type:Ps,depthTexture:new RM(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const De=e.properties.get(d);De.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),te.setContext(r),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function N(q){for(let Z=0;Z<q.removed.length;Z++){const le=q.removed[Z],pe=x.indexOf(le);pe>=0&&(x[pe]=null,v[pe].disconnect(le))}for(let Z=0;Z<q.added.length;Z++){const le=q.added[Z];let pe=x.indexOf(le);if(pe===-1){for(let De=0;De<v.length;De++)if(De>=x.length){x.push(le),pe=De;break}else if(x[De]===null){x[De]=le,pe=De;break}if(pe===-1)break}const me=v[pe];me&&me.connect(le)}}const W=new G,Y=new G;function F(q,Z,le){W.setFromMatrixPosition(Z.matrixWorld),Y.setFromMatrixPosition(le.matrixWorld);const pe=W.distanceTo(Y),me=Z.projectionMatrix.elements,De=le.projectionMatrix.elements,Ae=me[14]/(me[10]-1),ke=me[14]/(me[10]+1),Ue=(me[9]+1)/me[5],H=(me[9]-1)/me[5],We=(me[8]-1)/me[0],_e=(De[8]+1)/De[0],He=Ae*We,Ce=Ae*_e,j=pe/(-We+_e),Ve=j*-We;Z.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ve),q.translateZ(j),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const Ge=Ae+j,st=ke+j,Ze=He-Ve,yt=Ce+(pe-Ve),P=Ue*ke/st*Ge,b=H*ke/st*Ge;q.projectionMatrix.makePerspective(Ze,yt,P,b,Ge,st),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function I(q,Z){Z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;S.near=E.near=w.near=q.near,S.far=E.far=w.far=q.far,(T!==S.near||z!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),T=S.near,z=S.far);const Z=q.parent,le=S.cameras;I(S,Z);for(let pe=0;pe<le.length;pe++)I(le[pe],Z);le.length===2?F(S,w,E):S.projectionMatrix.copy(w.projectionMatrix),k(q,S,Z)};function k(q,Z,le){le===null?q.matrix.copy(Z.matrixWorld):(q.matrix.copy(le.matrixWorld),q.matrix.invert(),q.matrix.multiply(Z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ym*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)};let C=null;function Q(q,Z){if(c=Z.getViewerPose(u||o),_=Z,c!==null){const le=c.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let pe=!1;le.length!==S.cameras.length&&(S.cameras.length=0,pe=!0);for(let me=0;me<le.length;me++){const De=le[me];let Ae=null;if(p!==null)Ae=p.getViewport(De);else{const Ue=f.getViewSubImage(h,De);Ae=Ue.viewport,me===0&&(e.setRenderTargetTextures(d,Ue.colorTexture,h.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(d))}let ke=R[me];ke===void 0&&(ke=new vi,ke.layers.enable(me),ke.viewport=new It,R[me]=ke),ke.matrix.fromArray(De.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(De.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),me===0&&(S.matrix.copy(ke.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),pe===!0&&S.cameras.push(ke)}}for(let le=0;le<v.length;le++){const pe=x[le],me=v[le];pe!==null&&me!==void 0&&me.update(pe,Z,u||o)}C&&C(q,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),_=null}const te=new CM;te.setAnimationLoop(Q),this.setAnimationLoop=function(q){C=q},this.dispose=function(){}}}function n3(n,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,TM(n)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,v,x,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),f(g,d)):d.isMeshPhongMaterial?(s(g,d),c(g,d)):d.isMeshStandardMaterial?(s(g,d),h(g,d),d.isMeshPhysicalMaterial&&p(g,d,y)):d.isMeshMatcapMaterial?(s(g,d),_(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),m(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,v,x):d.isSpriteMaterial?u(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===li&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===li&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const v=e.get(d).envMap;if(v&&(g.envMap.value=v,g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap){g.lightMap.value=d.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=d.lightMapIntensity*x,t(d.lightMap,g.lightMapTransform)}d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,v,x){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*v,g.scale.value=x*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),e.get(d).envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,v){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===li&&g.clearcoatNormalScale.value.negate())),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,d){d.matcap&&(g.matcap.value=d.matcap)}function m(g,d){const v=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function i3(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function u(v,x){let y=r[v.id];y===void 0&&(_(v),y=c(v),r[v.id]=y,v.addEventListener("dispose",g));const M=x.program;i.updateUBOMapping(v,M);const w=e.render.frame;s[v.id]!==w&&(h(v),s[v.id]=w)}function c(v){const x=f();v.__bindingPointIndex=x;const y=n.createBuffer(),M=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,M,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const x=r[v.id],y=v.uniforms,M=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,E=y.length;w<E;w++){const R=y[w];if(p(R,w,M)===!0){const S=R.__offset,T=Array.isArray(R.value)?R.value:[R.value];let z=0;for(let U=0;U<T.length;U++){const K=T[U],N=m(K);typeof K=="number"?(R.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,S+z,R.__data)):K.isMatrix3?(R.__data[0]=K.elements[0],R.__data[1]=K.elements[1],R.__data[2]=K.elements[2],R.__data[3]=K.elements[0],R.__data[4]=K.elements[3],R.__data[5]=K.elements[4],R.__data[6]=K.elements[5],R.__data[7]=K.elements[0],R.__data[8]=K.elements[6],R.__data[9]=K.elements[7],R.__data[10]=K.elements[8],R.__data[11]=K.elements[0]):(K.toArray(R.__data,z),z+=N.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,S,R.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,x,y){const M=v.value;if(y[x]===void 0){if(typeof M=="number")y[x]=M;else{const w=Array.isArray(M)?M:[M],E=[];for(let R=0;R<w.length;R++)E.push(w[R].clone());y[x]=E}return!0}else if(typeof M=="number"){if(y[x]!==M)return y[x]=M,!0}else{const w=Array.isArray(y[x])?y[x]:[y[x]],E=Array.isArray(M)?M:[M];for(let R=0;R<w.length;R++){const S=w[R];if(S.equals(E[R])===!1)return S.copy(E[R]),!0}}return!1}function _(v){const x=v.uniforms;let y=0;const M=16;let w=0;for(let E=0,R=x.length;E<R;E++){const S=x[E],T={boundary:0,storage:0},z=Array.isArray(S.value)?S.value:[S.value];for(let U=0,K=z.length;U<K;U++){const N=z[U],W=m(N);T.boundary+=W.boundary,T.storage+=W.storage}if(S.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=y,E>0){w=y%M;const U=M-w;w!==0&&U-T.boundary<0&&(y+=M-w,S.__offset=y)}y+=T.storage}return w=y%M,w>0&&(y+=M-w),v.__size=y,v.__cache={},this}function m(v){const x={boundary:0,storage:0};return typeof v=="number"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function g(v){const x=v.target;x.removeEventListener("dispose",g);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class IM{constructor(e={}){const{canvas:t=JA(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),_=new Int32Array(4);let m=null,g=null;const d=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_n,this._useLegacyLights=!1,this.toneMapping=Rs,this.toneMappingExposure=1;const x=this;let y=!1,M=0,w=0,E=null,R=-1,S=null;const T=new It,z=new It;let U=null;const K=new lt(0);let N=0,W=t.width,Y=t.height,F=1,I=null,k=null;const C=new It(0,0,W,Y),Q=new It(0,0,W,Y);let te=!1;const q=new qg;let Z=!1,le=!1,pe=null;const me=new qt,De=new dt,Ae=new G,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return E===null?F:1}let H=i;function We(A,O){for(let $=0;$<A.length;$++){const X=A[$],V=t.getContext(X,O);if(V!==null)return V}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jg}`),t.addEventListener("webglcontextlost",qe,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",he,!1),H===null){const O=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&O.shift(),H=We(O,A),H===null)throw We(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let _e,He,Ce,j,Ve,Ge,st,Ze,yt,P,b,B,oe,ee,re,xe,ue,ve,ye,at,se,ut,je,Oe;function Re(){_e=new pP(H),He=new aP(H,_e,e),_e.init(He),ut=new QL(H,_e,He),Ce=new KL(H,_e,He),j=new _P(H),Ve=new OL,Ge=new ZL(H,_e,Ce,Ve,He,ut,j),st=new uP(x),Ze=new hP(x),yt=new w2(H,He),je=new sP(H,_e,yt,He),P=new mP(H,yt,j,je),b=new SP(H,P,yt,j),ye=new yP(H,He,Ge),xe=new lP(Ve),B=new IL(x,st,Ze,_e,He,je,xe),oe=new n3(x,Ve),ee=new kL,re=new WL(_e,He),ve=new rP(x,st,Ze,Ce,b,h,l),ue=new qL(x,b,He),Oe=new i3(H,j,He,Ce),at=new oP(H,_e,j,He),se=new gP(H,_e,j,He),j.programs=B.programs,x.capabilities=He,x.extensions=_e,x.properties=Ve,x.renderLists=ee,x.shadowMap=ue,x.state=Ce,x.info=j}Re();const ne=new t3(x,H);this.xr=ne,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=_e.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=_e.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(A){A!==void 0&&(F=A,this.setSize(W,Y,!1))},this.getSize=function(A){return A.set(W,Y)},this.setSize=function(A,O,$=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,Y=O,t.width=Math.floor(A*F),t.height=Math.floor(O*F),$===!0&&(t.style.width=A+"px",t.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(W*F,Y*F).floor()},this.setDrawingBufferSize=function(A,O,$){W=A,Y=O,F=$,t.width=Math.floor(A*$),t.height=Math.floor(O*$),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(C)},this.setViewport=function(A,O,$,X){A.isVector4?C.set(A.x,A.y,A.z,A.w):C.set(A,O,$,X),Ce.viewport(T.copy(C).multiplyScalar(F).floor())},this.getScissor=function(A){return A.copy(Q)},this.setScissor=function(A,O,$,X){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,O,$,X),Ce.scissor(z.copy(Q).multiplyScalar(F).floor())},this.getScissorTest=function(){return te},this.setScissorTest=function(A){Ce.setScissorTest(te=A)},this.setOpaqueSort=function(A){I=A},this.setTransparentSort=function(A){k=A},this.getClearColor=function(A){return A.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(A=!0,O=!0,$=!0){let X=0;if(A){let V=!1;if(E!==null){const de=E.texture.format;V=de===cM||de===uM||de===lM}if(V){const de=E.texture.type,we=de===Ps||de===ms||de===$g||de===xo||de===oM||de===aM,ze=ve.getClearColor(),Te=ve.getClearAlpha(),Pe=ze.r,Be=ze.g,Ye=ze.b;we?(p[0]=Pe,p[1]=Be,p[2]=Ye,p[3]=Te,H.clearBufferuiv(H.COLOR,0,p)):(_[0]=Pe,_[1]=Be,_[2]=Ye,_[3]=Te,H.clearBufferiv(H.COLOR,0,_))}else X|=H.COLOR_BUFFER_BIT}O&&(X|=H.DEPTH_BUFFER_BIT),$&&(X|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",he,!1),ee.dispose(),re.dispose(),Ve.dispose(),st.dispose(),Ze.dispose(),b.dispose(),je.dispose(),Oe.dispose(),B.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Me),ne.removeEventListener("sessionend",Le),pe&&(pe.dispose(),pe=null),ce.stop()};function qe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=j.autoReset,O=ue.enabled,$=ue.autoUpdate,X=ue.needsUpdate,V=ue.type;Re(),j.autoReset=A,ue.enabled=O,ue.autoUpdate=$,ue.needsUpdate=X,ue.type=V}function he(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ie(A){const O=A.target;O.removeEventListener("dispose",ie),J(O)}function J(A){fe(A),Ve.remove(A)}function fe(A){const O=Ve.get(A).programs;O!==void 0&&(O.forEach(function($){B.releaseProgram($)}),A.isShaderMaterial&&B.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,$,X,V,de){O===null&&(O=ke);const we=V.isMesh&&V.matrixWorld.determinant()<0,ze=wt(A,O,$,X,V);Ce.setMaterial(X,we);let Te=$.index,Pe=1;if(X.wireframe===!0){if(Te=P.getWireframeAttribute($),Te===void 0)return;Pe=2}const Be=$.drawRange,Ye=$.attributes.position;let Nt=Be.start*Pe,nn=(Be.start+Be.count)*Pe;de!==null&&(Nt=Math.max(Nt,de.start*Pe),nn=Math.min(nn,(de.start+de.count)*Pe)),Te!==null?(Nt=Math.max(Nt,0),nn=Math.min(nn,Te.count)):Ye!=null&&(Nt=Math.max(Nt,0),nn=Math.min(nn,Ye.count));const gt=nn-Nt;if(gt<0||gt===1/0)return;je.setup(V,X,ze,$,Te);let In,vt=at;if(Te!==null&&(In=yt.get(Te),vt=se,vt.setIndex(In)),V.isMesh)X.wireframe===!0?(Ce.setLineWidth(X.wireframeLinewidth*Ue()),vt.setMode(H.LINES)):vt.setMode(H.TRIANGLES);else if(V.isLine){let Xe=X.linewidth;Xe===void 0&&(Xe=1),Ce.setLineWidth(Xe*Ue()),V.isLineSegments?vt.setMode(H.LINES):V.isLineLoop?vt.setMode(H.LINE_LOOP):vt.setMode(H.LINE_STRIP)}else V.isPoints?vt.setMode(H.POINTS):V.isSprite&&vt.setMode(H.TRIANGLES);if(V.isBatchedMesh)vt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)vt.renderInstances(Nt,gt,V.count);else if($.isInstancedBufferGeometry){const Xe=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Td=Math.min($.instanceCount,Xe);vt.renderInstances(Nt,gt,Td)}else vt.render(Nt,gt)};function Ne(A,O,$){A.transparent===!0&&A.side===Ir&&A.forceSinglePass===!1?(A.side=li,A.needsUpdate=!0,Et(A,O,$),A.side=Os,A.needsUpdate=!0,Et(A,O,$),A.side=Ir):Et(A,O,$)}this.compile=function(A,O,$=null){$===null&&($=A),g=re.get($),g.init(),v.push(g),$.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(g.pushLight(V),V.castShadow&&g.pushShadow(V))}),A!==$&&A.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(g.pushLight(V),V.castShadow&&g.pushShadow(V))}),g.setupLights(x._useLegacyLights);const X=new Set;return A.traverse(function(V){const de=V.material;if(de)if(Array.isArray(de))for(let we=0;we<de.length;we++){const ze=de[we];Ne(ze,$,V),X.add(ze)}else Ne(de,$,V),X.add(de)}),v.pop(),g=null,X},this.compileAsync=function(A,O,$=null){const X=this.compile(A,O,$);return new Promise(V=>{function de(){if(X.forEach(function(we){Ve.get(we).currentProgram.isReady()&&X.delete(we)}),X.size===0){V(A);return}setTimeout(de,10)}_e.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Je=null;function be(A){Je&&Je(A)}function Me(){ce.stop()}function Le(){ce.start()}const ce=new CM;ce.setAnimationLoop(be),typeof self<"u"&&ce.setContext(self),this.setAnimationLoop=function(A){Je=A,ne.setAnimationLoop(A),A===null?ce.stop():ce.start()},ne.addEventListener("sessionstart",Me),ne.addEventListener("sessionend",Le),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(O),O=ne.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,O,E),g=re.get(A,v.length),g.init(),v.push(g),me.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),q.setFromProjectionMatrix(me),le=this.localClippingEnabled,Z=xe.init(this.clippingPlanes,le),m=ee.get(A,d.length),m.init(),d.push(m),Fe(A,O,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(I,k),this.info.render.frame++,Z===!0&&xe.beginShadows();const $=g.state.shadowsArray;if(ue.render($,A,O),Z===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),ve.render(m,A),g.setupLights(x._useLegacyLights),O.isArrayCamera){const X=O.cameras;for(let V=0,de=X.length;V<de;V++){const we=X[V];Ie(m,A,we,we.viewport)}}else Ie(m,A,O);E!==null&&(Ge.updateMultisampleRenderTarget(E),Ge.updateRenderTargetMipmap(E)),A.isScene===!0&&A.onAfterRender(x,A,O),je.resetDefaultState(),R=-1,S=null,v.pop(),v.length>0?g=v[v.length-1]:g=null,d.pop(),d.length>0?m=d[d.length-1]:m=null};function Fe(A,O,$,X){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||q.intersectsSprite(A)){X&&Ae.setFromMatrixPosition(A.matrixWorld).applyMatrix4(me);const we=b.update(A),ze=A.material;ze.visible&&m.push(A,we,ze,$,Ae.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||q.intersectsObject(A))){const we=b.update(A),ze=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ae.copy(A.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ae.copy(we.boundingSphere.center)),Ae.applyMatrix4(A.matrixWorld).applyMatrix4(me)),Array.isArray(ze)){const Te=we.groups;for(let Pe=0,Be=Te.length;Pe<Be;Pe++){const Ye=Te[Pe],Nt=ze[Ye.materialIndex];Nt&&Nt.visible&&m.push(A,we,Nt,$,Ae.z,Ye)}}else ze.visible&&m.push(A,we,ze,$,Ae.z,null)}}const de=A.children;for(let we=0,ze=de.length;we<ze;we++)Fe(de[we],O,$,X)}function Ie(A,O,$,X){const V=A.opaque,de=A.transmissive,we=A.transparent;g.setupLightsView($),Z===!0&&xe.setGlobalState(x.clippingPlanes,$),de.length>0&&$e(V,de,O,$),X&&Ce.viewport(T.copy(X)),V.length>0&&Ot(V,O,$),de.length>0&&Ot(de,O,$),we.length>0&&Ot(we,O,$),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function $e(A,O,$,X){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;const de=He.isWebGL2;pe===null&&(pe=new Lo(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?Pu:Ps,minFilter:Ru,samples:de?4:0})),x.getDrawingBufferSize(De),de?pe.setSize(De.x,De.y):pe.setSize(Sm(De.x),Sm(De.y));const we=x.getRenderTarget();x.setRenderTarget(pe),x.getClearColor(K),N=x.getClearAlpha(),N<1&&x.setClearColor(16777215,.5),x.clear();const ze=x.toneMapping;x.toneMapping=Rs,Ot(A,$,X),Ge.updateMultisampleRenderTarget(pe),Ge.updateRenderTargetMipmap(pe);let Te=!1;for(let Pe=0,Be=O.length;Pe<Be;Pe++){const Ye=O[Pe],Nt=Ye.object,nn=Ye.geometry,gt=Ye.material,In=Ye.group;if(gt.side===Ir&&Nt.layers.test(X.layers)){const vt=gt.side;gt.side=li,gt.needsUpdate=!0,tt(Nt,$,X,nn,gt,In),gt.side=vt,gt.needsUpdate=!0,Te=!0}}Te===!0&&(Ge.updateMultisampleRenderTarget(pe),Ge.updateRenderTargetMipmap(pe)),x.setRenderTarget(we),x.setClearColor(K,N),x.toneMapping=ze}function Ot(A,O,$){const X=O.isScene===!0?O.overrideMaterial:null;for(let V=0,de=A.length;V<de;V++){const we=A[V],ze=we.object,Te=we.geometry,Pe=X===null?we.material:X,Be=we.group;ze.layers.test($.layers)&&tt(ze,O,$,Te,Pe,Be)}}function tt(A,O,$,X,V,de){A.onBeforeRender(x,O,$,X,V,de),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(x,O,$,X,A,de),V.transparent===!0&&V.side===Ir&&V.forceSinglePass===!1?(V.side=li,V.needsUpdate=!0,x.renderBufferDirect($,O,X,V,A,de),V.side=Os,V.needsUpdate=!0,x.renderBufferDirect($,O,X,V,A,de),V.side=Ir):x.renderBufferDirect($,O,X,V,A,de),A.onAfterRender(x,O,$,X,V,de)}function Et(A,O,$){O.isScene!==!0&&(O=ke);const X=Ve.get(A),V=g.state.lights,de=g.state.shadowsArray,we=V.state.version,ze=B.getParameters(A,V.state,de,O,$),Te=B.getProgramCacheKey(ze);let Pe=X.programs;X.environment=A.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(A.isMeshStandardMaterial?Ze:st).get(A.envMap||X.environment),Pe===void 0&&(A.addEventListener("dispose",ie),Pe=new Map,X.programs=Pe);let Be=Pe.get(Te);if(Be!==void 0){if(X.currentProgram===Be&&X.lightsStateVersion===we)return Ct(A,ze),Be}else ze.uniforms=B.getUniforms(A),A.onBuild($,ze,x),A.onBeforeCompile(ze,x),Be=B.acquireProgram(ze,Te),Pe.set(Te,Be),X.uniforms=ze.uniforms;const Ye=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ye.clippingPlanes=xe.uniform),Ct(A,ze),X.needsLights=ci(A),X.lightsStateVersion=we,X.needsLights&&(Ye.ambientLightColor.value=V.state.ambient,Ye.lightProbe.value=V.state.probe,Ye.directionalLights.value=V.state.directional,Ye.directionalLightShadows.value=V.state.directionalShadow,Ye.spotLights.value=V.state.spot,Ye.spotLightShadows.value=V.state.spotShadow,Ye.rectAreaLights.value=V.state.rectArea,Ye.ltc_1.value=V.state.rectAreaLTC1,Ye.ltc_2.value=V.state.rectAreaLTC2,Ye.pointLights.value=V.state.point,Ye.pointLightShadows.value=V.state.pointShadow,Ye.hemisphereLights.value=V.state.hemi,Ye.directionalShadowMap.value=V.state.directionalShadowMap,Ye.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ye.spotShadowMap.value=V.state.spotShadowMap,Ye.spotLightMatrix.value=V.state.spotLightMatrix,Ye.spotLightMap.value=V.state.spotLightMap,Ye.pointShadowMap.value=V.state.pointShadowMap,Ye.pointShadowMatrix.value=V.state.pointShadowMatrix),X.currentProgram=Be,X.uniformsList=null,Be}function tn(A){if(A.uniformsList===null){const O=A.currentProgram.getUniforms();A.uniformsList=cf.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function Ct(A,O){const $=Ve.get(A);$.outputColorSpace=O.outputColorSpace,$.batching=O.batching,$.instancing=O.instancing,$.instancingColor=O.instancingColor,$.skinning=O.skinning,$.morphTargets=O.morphTargets,$.morphNormals=O.morphNormals,$.morphColors=O.morphColors,$.morphTargetsCount=O.morphTargetsCount,$.numClippingPlanes=O.numClippingPlanes,$.numIntersection=O.numClipIntersection,$.vertexAlphas=O.vertexAlphas,$.vertexTangents=O.vertexTangents,$.toneMapping=O.toneMapping}function wt(A,O,$,X,V){O.isScene!==!0&&(O=ke),Ge.resetTextureUnits();const de=O.fog,we=X.isMeshStandardMaterial?O.environment:null,ze=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:qr,Te=(X.isMeshStandardMaterial?Ze:st).get(X.envMap||we),Pe=X.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Be=!!$.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ye=!!$.morphAttributes.position,Nt=!!$.morphAttributes.normal,nn=!!$.morphAttributes.color;let gt=Rs;X.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(gt=x.toneMapping);const In=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,vt=In!==void 0?In.length:0,Xe=Ve.get(X),Td=g.state.lights;if(Z===!0&&(le===!0||A!==S)){const Li=A===S&&X.id===R;xe.setState(X,A,Li)}let Vt=!1;X.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Td.state.version||Xe.outputColorSpace!==ze||V.isBatchedMesh&&Xe.batching===!1||!V.isBatchedMesh&&Xe.batching===!0||V.isInstancedMesh&&Xe.instancing===!1||!V.isInstancedMesh&&Xe.instancing===!0||V.isSkinnedMesh&&Xe.skinning===!1||!V.isSkinnedMesh&&Xe.skinning===!0||V.isInstancedMesh&&Xe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Xe.instancingColor===!1&&V.instanceColor!==null||Xe.envMap!==Te||X.fog===!0&&Xe.fog!==de||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==xe.numPlanes||Xe.numIntersection!==xe.numIntersection)||Xe.vertexAlphas!==Pe||Xe.vertexTangents!==Be||Xe.morphTargets!==Ye||Xe.morphNormals!==Nt||Xe.morphColors!==nn||Xe.toneMapping!==gt||He.isWebGL2===!0&&Xe.morphTargetsCount!==vt)&&(Vt=!0):(Vt=!0,Xe.__version=X.version);let Hs=Xe.currentProgram;Vt===!0&&(Hs=Et(X,O,V));let t0=!1,rl=!1,bd=!1;const En=Hs.getUniforms(),Vs=Xe.uniforms;if(Ce.useProgram(Hs.program)&&(t0=!0,rl=!0,bd=!0),X.id!==R&&(R=X.id,rl=!0),t0||S!==A){En.setValue(H,"projectionMatrix",A.projectionMatrix),En.setValue(H,"viewMatrix",A.matrixWorldInverse);const Li=En.map.cameraPosition;Li!==void 0&&Li.setValue(H,Ae.setFromMatrixPosition(A.matrixWorld)),He.logarithmicDepthBuffer&&En.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&En.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,rl=!0,bd=!0)}if(V.isSkinnedMesh){En.setOptional(H,V,"bindMatrix"),En.setOptional(H,V,"bindMatrixInverse");const Li=V.skeleton;Li&&(He.floatVertexTextures?(Li.boneTexture===null&&Li.computeBoneTexture(),En.setValue(H,"boneTexture",Li.boneTexture,Ge)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(En.setOptional(H,V,"batchingTexture"),En.setValue(H,"batchingTexture",V._matricesTexture,Ge));const Ad=$.morphAttributes;if((Ad.position!==void 0||Ad.normal!==void 0||Ad.color!==void 0&&He.isWebGL2===!0)&&ye.update(V,$,Hs),(rl||Xe.receiveShadow!==V.receiveShadow)&&(Xe.receiveShadow=V.receiveShadow,En.setValue(H,"receiveShadow",V.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Vs.envMap.value=Te,Vs.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),rl&&(En.setValue(H,"toneMappingExposure",x.toneMappingExposure),Xe.needsLights&&mt(Vs,bd),de&&X.fog===!0&&oe.refreshFogUniforms(Vs,de),oe.refreshMaterialUniforms(Vs,X,F,Y,pe),cf.upload(H,tn(Xe),Vs,Ge)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(cf.upload(H,tn(Xe),Vs,Ge),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&En.setValue(H,"center",V.center),En.setValue(H,"modelViewMatrix",V.modelViewMatrix),En.setValue(H,"normalMatrix",V.normalMatrix),En.setValue(H,"modelMatrix",V.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Li=X.uniformsGroups;for(let Cd=0,YM=Li.length;Cd<YM;Cd++)if(He.isWebGL2){const n0=Li[Cd];Oe.update(n0,Hs),Oe.bind(n0,Hs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hs}function mt(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function ci(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(A,O,$){Ve.get(A.texture).__webglTexture=O,Ve.get(A.depthTexture).__webglTexture=$;const X=Ve.get(A);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=$===void 0,X.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,O){const $=Ve.get(A);$.__webglFramebuffer=O,$.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,$=0){E=A,M=O,w=$;let X=!0,V=null,de=!1,we=!1;if(A){const Te=Ve.get(A);Te.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(H.FRAMEBUFFER,null),X=!1):Te.__webglFramebuffer===void 0?Ge.setupRenderTarget(A):Te.__hasExternalTextures&&Ge.rebindTextures(A,Ve.get(A.texture).__webglTexture,Ve.get(A.depthTexture).__webglTexture);const Pe=A.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(we=!0);const Be=Ve.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Be[O])?V=Be[O][$]:V=Be[O],de=!0):He.isWebGL2&&A.samples>0&&Ge.useMultisampledRTT(A)===!1?V=Ve.get(A).__webglMultisampledFramebuffer:Array.isArray(Be)?V=Be[$]:V=Be,T.copy(A.viewport),z.copy(A.scissor),U=A.scissorTest}else T.copy(C).multiplyScalar(F).floor(),z.copy(Q).multiplyScalar(F).floor(),U=te;if(Ce.bindFramebuffer(H.FRAMEBUFFER,V)&&He.drawBuffers&&X&&Ce.drawBuffers(A,V),Ce.viewport(T),Ce.scissor(z),Ce.setScissorTest(U),de){const Te=Ve.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+O,Te.__webglTexture,$)}else if(we){const Te=Ve.get(A.texture),Pe=O||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Te.__webglTexture,$||0,Pe)}R=-1},this.readRenderTargetPixels=function(A,O,$,X,V,de,we){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Ve.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(ze=ze[we]),ze){Ce.bindFramebuffer(H.FRAMEBUFFER,ze);try{const Te=A.texture,Pe=Te.format,Be=Te.type;if(Pe!==sr&&ut.convert(Pe)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ye=Be===Pu&&(_e.has("EXT_color_buffer_half_float")||He.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Be!==Ps&&ut.convert(Be)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===gs&&(He.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-X&&$>=0&&$<=A.height-V&&H.readPixels(O,$,X,V,ut.convert(Pe),ut.convert(Be),de)}finally{const Te=E!==null?Ve.get(E).__webglFramebuffer:null;Ce.bindFramebuffer(H.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(A,O,$=0){const X=Math.pow(2,-$),V=Math.floor(O.image.width*X),de=Math.floor(O.image.height*X);Ge.setTexture2D(O,0),H.copyTexSubImage2D(H.TEXTURE_2D,$,0,0,A.x,A.y,V,de),Ce.unbindTexture()},this.copyTextureToTexture=function(A,O,$,X=0){const V=O.image.width,de=O.image.height,we=ut.convert($.format),ze=ut.convert($.type);Ge.setTexture2D($,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,$.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,$.unpackAlignment),O.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,X,A.x,A.y,V,de,we,ze,O.image.data):O.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,X,A.x,A.y,O.mipmaps[0].width,O.mipmaps[0].height,we,O.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,X,A.x,A.y,we,ze,O.image),X===0&&$.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(A,O,$,X,V=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=A.max.x-A.min.x+1,we=A.max.y-A.min.y+1,ze=A.max.z-A.min.z+1,Te=ut.convert(X.format),Pe=ut.convert(X.type);let Be;if(X.isData3DTexture)Ge.setTexture3D(X,0),Be=H.TEXTURE_3D;else if(X.isDataArrayTexture)Ge.setTexture2DArray(X,0),Be=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment);const Ye=H.getParameter(H.UNPACK_ROW_LENGTH),Nt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),nn=H.getParameter(H.UNPACK_SKIP_PIXELS),gt=H.getParameter(H.UNPACK_SKIP_ROWS),In=H.getParameter(H.UNPACK_SKIP_IMAGES),vt=$.isCompressedTexture?$.mipmaps[0]:$.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,vt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,vt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,A.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,A.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,A.min.z),$.isDataTexture||$.isData3DTexture?H.texSubImage3D(Be,V,O.x,O.y,O.z,de,we,ze,Te,Pe,vt.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Be,V,O.x,O.y,O.z,de,we,ze,Te,vt.data)):H.texSubImage3D(Be,V,O.x,O.y,O.z,de,we,ze,Te,Pe,vt),H.pixelStorei(H.UNPACK_ROW_LENGTH,Ye),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Nt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,nn),H.pixelStorei(H.UNPACK_SKIP_ROWS,gt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,In),V===0&&X.generateMipmaps&&H.generateMipmap(Be),Ce.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Ge.setTextureCube(A,0):A.isData3DTexture?Ge.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ge.setTexture2DArray(A,0):Ge.setTexture2D(A,0),Ce.unbindTexture()},this.resetState=function(){M=0,w=0,E=null,Ce.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Yg?"display-p3":"srgb",t.unpackColorSpace=xt.workingColorSpace===Sd?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===_n?So:dM}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===So?_n:qr}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class r3 extends IM{}r3.prototype.isWebGL1Renderer=!0;class s3 extends $n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class OM extends nl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const dx=new qt,Em=new xM,Bc=new Md,Hc=new G;class o3 extends $n{constructor(e=new Er,t=new OM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bc.copy(i.boundingSphere),Bc.applyMatrix4(r),Bc.radius+=s,e.ray.intersectsSphere(Bc)===!1)return;dx.copy(r).invert(),Em.copy(e.ray).applyMatrix4(dx);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=h,m=p;_<m;_++){const g=u.getX(_);Hc.fromBufferAttribute(f,g),hx(Hc,g,l,r,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=h,m=p;_<m;_++)Hc.fromBufferAttribute(f,_),hx(Hc,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function hx(n,e,t,i,r,s,o){const a=Em.distanceSqToPoint(n);if(a<t){const l=new G;Em.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Qg extends Er{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new G,h=new G,p=[],_=[],m=[],g=[];for(let d=0;d<=i;d++){const v=[],x=d/i;let y=0;d===0&&o===0?y=.5/t:d===i&&l===Math.PI&&(y=-.5/t);for(let M=0;M<=t;M++){const w=M/t;f.x=-e*Math.cos(r+w*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(r+w*s)*Math.sin(o+x*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),m.push(h.x,h.y,h.z),g.push(w+y,1-x),v.push(u++)}c.push(v)}for(let d=0;d<i;d++)for(let v=0;v<t;v++){const x=c[d][v+1],y=c[d][v],M=c[d+1][v],w=c[d+1][v+1];(d!==0||o>0)&&p.push(x,y,w),(d!==i-1||l<Math.PI)&&p.push(y,M,w)}this.setIndex(p),this.setAttribute("position",new Sr(_,3)),this.setAttribute("normal",new Sr(m,3)),this.setAttribute("uv",new Sr(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qg(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class a3 extends nl{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new lt(16777215),this.specular=new lt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hM,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class FM extends $n{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const $h=new qt,px=new G,mx=new G;class l3{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qg,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;px.setFromMatrixPosition(e.matrixWorld),t.position.copy(px),mx.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mx),t.updateMatrixWorld(),$h.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($h),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply($h)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const gx=new qt,Sl=new G,Yh=new G;class u3 extends l3{constructor(){super(new vi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new It(2,1,1,1),new It(0,1,1,1),new It(3,1,1,1),new It(1,1,1,1),new It(3,0,1,1),new It(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Sl.setFromMatrixPosition(e.matrixWorld),i.position.copy(Sl),Yh.copy(i.position),Yh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Yh),i.updateMatrixWorld(),r.makeTranslation(-Sl.x,-Sl.y,-Sl.z),gx.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gx)}}class _x extends FM{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new u3}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class c3 extends FM{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jg);const f3=({isDarkMode:n})=>{const e=ht.useRef(null),t=ht.useRef(),i=ht.useRef(),r=ht.useRef(),s=ht.useRef(),o=ht.useRef();return ht.useEffect(()=>{if(!e.current)return;const a=new s3,l=new vi(75,window.innerWidth/window.innerHeight,.1,1e3),u=new IM({antialias:!0,alpha:!0});u.setSize(window.innerWidth,window.innerHeight),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.current.appendChild(u.domElement),t.current=a,i.current=u,r.current=l,l.position.z=5;const c=n?1e3:800,f=new Float32Array(c*3),h=new Float32Array(c*3);for(let R=0;R<c*3;R+=3){f[R]=(Math.random()-.5)*20,f[R+1]=(Math.random()-.5)*20,f[R+2]=(Math.random()-.5)*20;const S=new lt;n?S.setHSL(.6+Math.random()*.4,.8,.5):S.setHSL(.55+Math.random()*.3,.6,.7),h[R]=S.r,h[R+1]=S.g,h[R+2]=S.b}const p=new Er;p.setAttribute("position",new Xi(f,3)),p.setAttribute("color",new Xi(h,3));const _=new OM({size:n?.05:.03,vertexColors:!0,transparent:!0,opacity:n?.8:.6,blending:dm}),m=new o3(p,_);a.add(m),s.current=m;const g=new Ul,d=new Qg(.5,32,32);for(let R=0;R<5;R++){const S=new a3({color:n?new lt().setHSL(.6+Math.random()*.4,.8,.5):new lt().setHSL(.55+Math.random()*.3,.6,.7),transparent:!0,opacity:n?.3:.2,shininess:100}),T=new Br(d,S);T.position.set((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*10),g.add(T)}a.add(g),o.current=g;const v=new c3(n?4210752:8421504,n?.4:.6);a.add(v);const x=new _x(n?65535:4886754,n?1:.8,100);x.position.set(5,5,5),a.add(x);const y=new _x(n?16711935:10181046,n?.8:.6,100);y.position.set(-5,-5,5),a.add(y);const M=()=>{requestAnimationFrame(M),s.current&&(s.current.rotation.y+=.001,s.current.rotation.x+=5e-4),o.current&&(o.current.rotation.y+=.005,o.current.children.forEach((R,S)=>{R.rotation.x+=.01*(S+1),R.rotation.y+=.008*(S+1),R.position.y+=Math.sin(Date.now()*.001+S)*.001})),u.render(a,l)};M();const w=()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),u.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",w);const E=R=>{const S=R.clientX/window.innerWidth*2-1,T=-(R.clientY/window.innerHeight)*2+1;$t.to(l.position,{duration:2,x:S*.5,y:T*.3})};return window.addEventListener("mousemove",E),()=>{window.removeEventListener("resize",w),window.removeEventListener("mousemove",E),e.current&&u.domElement&&e.current.removeChild(u.domElement),u.dispose()}},[n]),L.jsx("div",{ref:e,className:"fixed inset-0 z-0"})};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var d3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h3=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),At=(n,e)=>{const t=ht.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...u},c)=>ht.createElement("svg",{ref:c,...d3,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${h3(n)}`,a].join(" "),...u},[...e.map(([f,h])=>ht.createElement(f,h)),...Array.isArray(l)?l:[l]]));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p3=At("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m3=At("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g3=At("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=At("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _3=At("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v3=At("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=At("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x3=At("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=At("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=At("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y3=At("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S3=At("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M3=At("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E3=At("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w3=At("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=At("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T3=At("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=At("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b3=At("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A3=At("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C3=At("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=At("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R3=At("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=At("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P3=At("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L3=At("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),N3=({isDarkMode:n,toggleTheme:e})=>{const[t,i]=ht.useState(!1),[r,s]=ht.useState(!1);ht.useEffect(()=>{const l=()=>{s(window.scrollY>50)};return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]);const o=l=>{const u=document.getElementById(l);u&&u.scrollIntoView({behavior:"smooth"}),i(!1)},a=[{name:"Home",id:"hero"},{name:"About",id:"about"},{name:"Experience",id:"experience"},{name:"Projects",id:"projects"},{name:"Contact",id:"contact"}];return L.jsx("nav",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${r?n?"bg-black/20 backdrop-blur-lg border-b border-white/10":"bg-white/20 backdrop-blur-lg border-b border-black/10":""}`,children:L.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[L.jsxs("div",{className:"flex justify-between items-center py-4",children:[L.jsx("div",{className:`text-2xl font-bold bg-gradient-to-r ${n?"from-cyan-400 to-purple-400":"from-blue-600 to-purple-600"} bg-clip-text text-transparent`,children:"RH"}),L.jsxs("div",{className:"hidden md:flex items-center space-x-8",children:[a.map(l=>L.jsxs("button",{onClick:()=>o(l.id),className:`${n?"text-white/80 hover:text-white":"text-gray-700 hover:text-gray-900"} transition-colors duration-300 relative group`,children:[l.name,L.jsx("span",{className:`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${n?"from-cyan-400 to-purple-400":"from-blue-600 to-purple-600"} transition-all duration-300 group-hover:w-full`})]},l.id)),L.jsx("button",{onClick:e,className:`p-2 rounded-full transition-all duration-300 ${n?"bg-white/10 hover:bg-white/20 text-white":"bg-black/10 hover:bg-black/20 text-gray-900"}`,children:n?L.jsx(yx,{size:20}):L.jsx(xx,{size:20})})]}),L.jsxs("div",{className:"md:hidden flex items-center space-x-2",children:[L.jsx("button",{onClick:e,className:`p-2 rounded-full transition-all duration-300 ${n?"bg-white/10 hover:bg-white/20 text-white":"bg-black/10 hover:bg-black/20 text-gray-900"}`,children:n?L.jsx(yx,{size:18}):L.jsx(xx,{size:18})}),L.jsx("button",{onClick:()=>i(!t),className:`p-2 ${n?"text-white":"text-gray-900"}`,children:t?L.jsx(L3,{size:24}):L.jsx(T3,{size:24})})]})]}),t&&L.jsx("div",{className:`md:hidden absolute top-full left-0 right-0 ${n?"bg-black/90 backdrop-blur-lg border-b border-white/10":"bg-white/90 backdrop-blur-lg border-b border-black/10"}`,children:L.jsx("div",{className:"px-4 py-6 space-y-4",children:a.map(l=>L.jsx("button",{onClick:()=>o(l.id),className:`block w-full text-left ${n?"text-white/80 hover:text-white":"text-gray-700 hover:text-gray-900"} transition-colors duration-300 py-2`,children:l.name},l.id))})})]})})},D3=({isDarkMode:n})=>{const e=ht.useRef(null),t=ht.useRef(null);ht.useEffect(()=>{const o=$t.timeline();$t.set([".hero-text",".hero-subtitle",".hero-description",".hero-buttons"],{opacity:0,y:30}),o.to(".hero-text",{duration:1,opacity:1,y:0,ease:"power3.out"}).to(".hero-subtitle",{duration:.8,opacity:1,y:0,ease:"power3.out"},"-=0.5").to(".hero-description",{duration:.8,opacity:1,y:0,ease:"power3.out"},"-=0.3").to(".hero-buttons",{duration:.8,opacity:1,y:0,ease:"power3.out"},"-=0.3"),t.current&&$t.to(t.current,{y:-10,duration:2,ease:"power2.inOut",yoyo:!0,repeat:-1})},[]);const i=()=>{const o=document.getElementById("projects");o&&o.scrollIntoView({behavior:"smooth"})},r=n?"text-white/80":"text-gray-700",s=n?"text-white/70":"text-gray-600";return L.jsxs("section",{id:"hero",ref:e,className:"min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden",children:[L.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[L.jsx("div",{ref:t,className:`mb-8 mx-auto w-48 h-48 rounded-full p-1 shadow-2xl ${n?"bg-gradient-to-br from-cyan-400/20 to-purple-600/20 backdrop-blur-sm border border-white/20":"bg-gradient-to-br from-blue-400/20 to-purple-400/20 backdrop-blur-sm border border-black/20"}`,children:L.jsx("div",{className:`w-full h-full rounded-full flex items-center justify-center text-6xl font-bold shadow-inner ${n?"bg-gradient-to-br from-gray-700 to-gray-900 text-white":"bg-gradient-to-br from-gray-100 to-gray-300 text-gray-800"}`,children:"RH"})}),L.jsx("h1",{className:"hero-text text-5xl md:text-7xl font-bold mb-4",children:L.jsx("span",{className:`bg-gradient-to-r ${n?"from-cyan-400 via-blue-500 to-purple-600":"from-blue-600 via-purple-600 to-purple-800"} bg-clip-text text-transparent`,children:"Randy Hendriyawan"})}),L.jsxs("div",{className:`hero-subtitle text-xl md:text-2xl ${r} mb-6 space-x-2`,children:[L.jsx("span",{className:`inline-block px-4 py-2 rounded-full backdrop-blur-sm border mx-1 ${n?"bg-white/10 border-white/20 glow-text":"bg-black/5 border-black/20"}`,children:"Informatics Student"}),L.jsx("span",{className:n?"text-cyan-400":"text-blue-600",children:"•"}),L.jsx("span",{className:`inline-block px-4 py-2 rounded-full backdrop-blur-sm border mx-1 ${n?"bg-white/10 border-white/20 glow-text":"bg-black/5 border-black/20"}`,children:"Developer"}),L.jsx("span",{className:n?"text-purple-400":"text-purple-600",children:"•"}),L.jsx("span",{className:`inline-block px-4 py-2 rounded-full backdrop-blur-sm border mx-1 ${n?"bg-white/10 border-white/20 glow-text":"bg-black/5 border-black/20"}`,children:"Content Writer"})]}),L.jsxs("p",{className:`hero-description text-lg md:text-xl ${s} mb-8 max-w-2xl mx-auto leading-relaxed`,children:["Passionate about technology and student leadership at"," ",L.jsx("span",{className:`font-semibold ${n?"text-cyan-400":"text-blue-600"}`,children:"Institut Teknologi Sumatera (ITERA)"})]}),L.jsxs("div",{className:"hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center",children:[L.jsxs("button",{className:`group px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2 ${n?"bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white hover:shadow-cyan-500/25":"bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white hover:shadow-blue-500/25"}`,children:[L.jsx(v3,{size:20}),"Download CV",L.jsx("div",{className:"absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),L.jsxs("button",{onClick:i,className:`group px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2 ${n?"bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white hover:shadow-purple-500/25":"bg-black/5 backdrop-blur-sm border border-black/20 hover:bg-black/10 text-gray-900 hover:shadow-purple-500/25"}`,children:["View Projects",L.jsx(p3,{size:20,className:"group-hover:translate-x-1 transition-transform duration-300"})]})]})]}),L.jsx("div",{className:"absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce",children:L.jsx("div",{className:`w-6 h-10 border-2 rounded-full flex justify-center ${n?"border-white/30":"border-black/30"}`,children:L.jsx("div",{className:`w-1 h-3 rounded-full mt-2 animate-pulse ${n?"bg-white/60":"bg-black/60"}`})})})]})},U3=({isDarkMode:n})=>{ht.useEffect(()=>{$t.registerPlugin(Ke),$t.fromTo(".about-section",{opacity:0,y:50},{opacity:1,y:0,duration:.8,stagger:.2,scrollTrigger:{trigger:"#about",start:"top 80%",end:"bottom 20%",toggleActions:"play none none reverse"}}),$t.fromTo(".progress-bar",{width:"0%"},{width:(l,u)=>u.dataset.width,duration:1.5,ease:"power2.out",stagger:.1,scrollTrigger:{trigger:".technical-skills",start:"top 80%",toggleActions:"play none none reverse"}}),$t.fromTo(".skill-badge",{opacity:0,scale:0,rotation:-10},{opacity:1,scale:1,rotation:0,duration:.6,stagger:.05,ease:"back.out(1.7)",scrollTrigger:{trigger:".tools-platforms",start:"top 80%",toggleActions:"play none none reverse"}})},[]);const e=[{name:"C++",level:85},{name:"Python",level:90},{name:"HTML/CSS",level:80},{name:"TypeScript",level:85},{name:"Node.js",level:80}],t=["WordPress","VS Code","MongoDB","Vercel","Microsoft Office","Adobe Premiere Pro"],i=["Communication","Collaboration","Time Management","Leadership"],r=`${n?"bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15":"bg-black/5 backdrop-blur-lg border-black/20 hover:bg-black/10"} rounded-2xl p-6 border transition-all duration-300`,s=n?"text-white":"text-gray-900",o=n?"text-white/80":"text-gray-700",a=n?"text-white/60":"text-gray-500";return L.jsx("section",{id:"about",className:"py-20 px-4 sm:px-6 lg:px-8 relative",children:L.jsxs("div",{className:"max-w-7xl mx-auto",children:[L.jsxs("div",{className:"text-center mb-16",children:[L.jsx("h2",{className:`text-4xl md:text-5xl font-bold bg-gradient-to-r ${n?"from-cyan-400 to-purple-400":"from-blue-600 to-purple-600"} bg-clip-text text-transparent mb-4`,children:"About Me"}),L.jsx("p",{className:`text-xl ${a} max-w-2xl mx-auto`,children:"Informatics Engineering student with a passion for technology and leadership"})]}),L.jsxs("div",{className:"grid lg:grid-cols-2 gap-8 lg:gap-12",children:[L.jsxs("div",{className:"space-y-6",children:[L.jsx("div",{className:`about-section ${r}`,children:L.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[L.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center ${n?"bg-blue-500/20 border border-blue-400/30":"bg-blue-100 border border-blue-200"}`,children:L.jsx(R3,{className:n?"text-blue-400":"text-blue-600",size:24})}),L.jsxs("div",{className:"flex-1",children:[L.jsx("h3",{className:`text-xl font-semibold ${s} mb-2`,children:"Background"}),L.jsx("p",{className:`${o} leading-relaxed text-sm lg:text-base`,children:"Active undergraduate student with experience in digital content management, website development, and organizational leadership."})]})]})}),L.jsx("div",{className:`about-section ${r}`,children:L.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[L.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center ${n?"bg-green-500/20 border border-green-400/30":"bg-green-100 border border-green-200"}`,children:L.jsx(y3,{className:n?"text-green-400":"text-green-600",size:24})}),L.jsxs("div",{className:"flex-1",children:[L.jsx("h3",{className:`text-xl font-semibold ${s} mb-2`,children:"Education"}),L.jsx("p",{className:`${o} text-sm lg:text-base`,children:"Informatics Engineering at Institut Teknologi Sumatera (ITERA), Indonesia"})]})]})}),L.jsx("div",{className:`about-section ${r}`,children:L.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[L.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center ${n?"bg-purple-500/20 border border-purple-400/30":"bg-purple-100 border border-purple-200"}`,children:L.jsx(Jg,{className:n?"text-purple-400":"text-purple-600",size:24})}),L.jsxs("div",{className:"flex-1",children:[L.jsx("h3",{className:`text-xl font-semibold ${s} mb-2`,children:"Location"}),L.jsx("p",{className:`${o} text-sm lg:text-base`,children:"Lampung, Indonesia"})]})]})})]}),L.jsxs("div",{className:"space-y-8",children:[L.jsxs("div",{className:"technical-skills about-section",children:[L.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[L.jsx(kM,{className:n?"text-cyan-400":"text-blue-600",size:24}),L.jsx("h3",{className:`text-2xl font-semibold ${s}`,children:"Technical Skills"})]}),L.jsx("div",{className:"space-y-4",children:e.map((l,u)=>L.jsxs("div",{className:"space-y-2",children:[L.jsxs("div",{className:"flex justify-between items-center",children:[L.jsx("span",{className:`${s} font-medium text-sm lg:text-base`,children:l.name}),L.jsxs("span",{className:`${n?"text-cyan-400":"text-blue-600"} font-semibold text-sm`,children:[l.level,"%"]})]}),L.jsx("div",{className:`h-2 rounded-full overflow-hidden ${n?"bg-white/10":"bg-black/10"}`,children:L.jsx("div",{className:`progress-bar h-full rounded-full ${n?"bg-gradient-to-r from-cyan-400 to-blue-500":"bg-gradient-to-r from-blue-500 to-blue-600"}`,"data-width":`${l.level}%`})})]},l.name))})]}),L.jsxs("div",{className:"tools-platforms about-section",children:[L.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[L.jsx(P3,{className:n?"text-purple-400":"text-purple-600",size:24}),L.jsx("h3",{className:`text-2xl font-semibold ${s}`,children:"Tools & Platforms"})]}),L.jsx("div",{className:"flex flex-wrap gap-2",children:t.map((l,u)=>L.jsx("span",{className:`skill-badge px-3 py-2 rounded-full text-xs lg:text-sm font-medium transition-all duration-300 cursor-default ${n?"bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-white hover:from-purple-500/30 hover:to-pink-500/30":"bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 text-purple-700 hover:from-purple-200 hover:to-pink-200"}`,children:l},l))})]}),L.jsxs("div",{className:"about-section",children:[L.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[L.jsx(zM,{className:n?"text-green-400":"text-green-600",size:24}),L.jsx("h3",{className:`text-2xl font-semibold ${s}`,children:"Soft Skills"})]}),L.jsx("div",{className:"grid grid-cols-2 gap-3",children:i.map((l,u)=>L.jsx("div",{className:`skill-badge rounded-lg p-3 text-center font-medium text-xs lg:text-sm transition-all duration-300 cursor-default ${n?"bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-400/30 text-white hover:from-green-500/30 hover:to-teal-500/30":"bg-gradient-to-r from-green-100 to-teal-100 border border-green-200 text-green-700 hover:from-green-200 hover:to-teal-200"}`,children:l},l))})]})]})]})]})})},I3=({isDarkMode:n})=>{ht.useEffect(()=>{$t.registerPlugin(Ke),$t.fromTo(".experience-card",{opacity:0,y:50,rotationY:-15},{opacity:1,y:0,rotationY:0,duration:.8,stagger:.2,scrollTrigger:{trigger:"#experience",start:"top 80%",end:"bottom 20%",toggleActions:"play none none reverse"}}),document.querySelectorAll(".experience-card").forEach(a=>{a.addEventListener("mouseenter",()=>{$t.to(a,{scale:1.02,rotationY:2,duration:.3})}),a.addEventListener("mouseleave",()=>{$t.to(a,{scale:1,rotationY:0,duration:.3})})})},[]);const e=[{title:"Assistant Practicum – C++ Programming",period:"Feb 2025 – May 2025",location:"Institut Teknologi Sumatera",icon:L.jsx(g3,{className:n?"text-cyan-400":"text-blue-600",size:24}),description:"Guide and mentor students in C++ programming fundamentals, help with debugging, and assist in practical assignments.",skills:["C++","Teaching","Mentoring","Problem Solving"]},{title:"Website Division – Public Relations",period:"Oct 2024 – Present",location:"Institut Teknologi Sumatera",icon:L.jsx(Jf,{className:n?"text-purple-400":"text-purple-600",size:24}),description:"Develop and maintain public relations websites, manage digital content, and enhance online presence.",skills:["Web Development","Content Management","Digital Marketing","UI/UX"]},{title:"Website Division – Accreditation Team",period:"May 2024 – Dec 2024",location:"Institut Teknologi Sumatera",icon:L.jsx(Jf,{className:n?"text-blue-400":"text-blue-500",size:24}),description:"Built and maintained accreditation websites, ensuring compliance with educational standards and documentation.",skills:["Web Development","Documentation","Quality Assurance","Project Management"]},{title:"Group Guide – Campus Orientation",period:"Aug 2024",location:"Institut Teknologi Sumatera",icon:L.jsx(zM,{className:n?"text-green-400":"text-green-600",size:24}),description:"Led orientation groups for new students, facilitated integration activities, and provided campus guidance.",skills:["Leadership","Communication","Event Management","Team Building"]},{title:"Content Editor – Al-Faris Organization",period:"Aug 2020 – Jul 2021",location:"Al-Faris Organization",icon:L.jsx(b3,{className:n?"text-orange-400":"text-orange-600",size:24}),description:"Managed digital content creation, edited publications, and significantly increased member engagement.",skills:["Content Creation","Editing","Social Media","Community Management"]}],t=`experience-card ${n?"bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15":"bg-white/80 backdrop-blur-lg border-black/10 hover:bg-white/90"} rounded-2xl p-6 border transition-all duration-300 cursor-pointer transform-gpu`,i=n?"text-white":"text-gray-900",r=n?"text-white/80":"text-gray-700",s=n?"text-white/70":"text-gray-600";return L.jsx("section",{id:"experience",className:"py-20 px-4 sm:px-6 lg:px-8 relative",children:L.jsxs("div",{className:"max-w-6xl mx-auto",children:[L.jsxs("div",{className:"text-center mb-16",children:[L.jsx("h2",{className:`text-4xl md:text-5xl font-bold bg-gradient-to-r ${n?"from-cyan-400 to-purple-400":"from-blue-600 to-purple-600"} bg-clip-text text-transparent mb-4`,children:"Experience"}),L.jsx("p",{className:`text-xl ${s} max-w-2xl mx-auto`,children:"Building expertise through diverse roles and responsibilities"})]}),L.jsx("div",{className:"space-y-8",children:e.map((o,a)=>L.jsx("div",{className:t,children:L.jsxs("div",{className:"flex flex-col md:flex-row gap-6",children:[L.jsx("div",{className:"flex-shrink-0",children:L.jsx("div",{className:`w-16 h-16 rounded-full flex items-center justify-center border ${n?"bg-gradient-to-br from-white/20 to-white/10 border-white/20":"bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300"}`,children:o.icon})}),L.jsxs("div",{className:"flex-grow",children:[L.jsx("div",{className:"flex flex-col md:flex-row md:items-start md:justify-between mb-4",children:L.jsxs("div",{children:[L.jsx("h3",{className:`text-xl md:text-2xl font-bold ${i} mb-2`,children:o.title}),L.jsxs("div",{className:`flex items-center gap-4 ${s} mb-2`,children:[L.jsxs("div",{className:"flex items-center gap-1",children:[L.jsx(m3,{size:16}),L.jsx("span",{className:"text-sm",children:o.period})]}),L.jsxs("div",{className:"flex items-center gap-1",children:[L.jsx(Jg,{size:16}),L.jsx("span",{className:"text-sm",children:o.location})]})]})]})}),L.jsx("p",{className:`${r} mb-4 leading-relaxed`,children:o.description}),L.jsx("div",{className:"flex flex-wrap gap-2",children:o.skills.map((l,u)=>L.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-medium ${n?"bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-400/30 text-white":"bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-700"}`,children:l},u))})]})]})},a))})]})})},O3=({isDarkMode:n})=>{const[e,t]=ht.useState(null);ht.useEffect(()=>{$t.registerPlugin(Ke),$t.fromTo(".project-card",{opacity:0,scale:.8,rotationY:-10},{opacity:1,scale:1,rotationY:0,duration:.8,stagger:.2,scrollTrigger:{trigger:"#projects",start:"top 80%",end:"bottom 20%",toggleActions:"play none none reverse"}})},[]);const i=[{title:"Too Much Pixels",description:"A captivating 2D top-down pixel-art survival game built with Python and Pygame. Features dynamic gameplay mechanics, pixel-perfect animations, and immersive survival elements.",icon:L.jsx(x3,{className:n?"text-green-400":"text-green-600",size:32}),technologies:["Python","Pygame","Pixel Art","Game Design"],github:"https://github.com/Randyh-25",details:"Developed complete game mechanics including player movement, enemy AI, resource management, and procedural level generation. Implemented custom sprite animations and sound effects for enhanced player experience."},{title:"Pic-Sorter",description:"An intelligent desktop application using Python and Tkinter that automatically organizes images based on their metadata, creation date, and file properties.",icon:L.jsx(M3,{className:n?"text-blue-400":"text-blue-600",size:32}),technologies:["Python","Tkinter","PIL","File Management"],github:"https://github.com/Randyh-25",details:"Features automatic image categorization, bulk processing capabilities, custom sorting rules, and a user-friendly GUI. Supports multiple image formats and maintains original file integrity."},{title:"CPU Scheduling Simulator",description:"A comprehensive visual simulator of various CPU scheduling algorithms built with Python, demonstrating process management and system optimization.",icon:L.jsx(_3,{className:n?"text-purple-400":"text-purple-600",size:32}),technologies:["Python","Algorithm Design","Data Visualization","System Programming"],github:"https://github.com/Randyh-25",details:"Implements FCFS, SJF, Round Robin, and Priority scheduling algorithms with real-time visualization. Includes performance metrics, Gantt chart generation, and comparative analysis tools."},{title:"Project DigiVill",description:"A comprehensive web platform built with modern technologies to promote local MSMEs and digital products, featuring e-commerce functionality and community engagement.",icon:L.jsx(Jf,{className:n?"text-cyan-400":"text-blue-500",size:32}),technologies:["TypeScript","Next.js","Express.js","MongoDB"],github:"https://github.com/Randyh-25",details:"Full-stack application with user authentication, product catalog, payment integration, and admin dashboard. Designed to support local businesses with digital transformation and online presence."}],r=u=>{t(e===u?null:u)},s=`project-card ${n?"bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15":"bg-white/80 backdrop-blur-lg border-black/10 hover:bg-white/90"} rounded-2xl p-6 border transition-all duration-300 cursor-pointer transform-gpu`,o=n?"text-white":"text-gray-900",a=n?"text-white/80":"text-gray-700",l=n?"text-white/70":"text-gray-600";return L.jsx("section",{id:"projects",className:"py-20 px-4 sm:px-6 lg:px-8 relative",children:L.jsxs("div",{className:"max-w-7xl mx-auto",children:[L.jsxs("div",{className:"text-center mb-16",children:[L.jsx("h2",{className:`text-4xl md:text-5xl font-bold bg-gradient-to-r ${n?"from-cyan-400 to-purple-400":"from-blue-600 to-purple-600"} bg-clip-text text-transparent mb-4`,children:"Projects"}),L.jsx("p",{className:`text-xl ${l} max-w-2xl mx-auto`,children:"Innovative solutions crafted with passion and precision"})]}),L.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:i.map((u,c)=>L.jsxs("div",{className:s,onClick:()=>r(c),children:[L.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[L.jsx("div",{className:`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center border ${n?"bg-gradient-to-br from-white/20 to-white/10 border-white/20":"bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300"}`,children:u.icon}),L.jsxs("div",{className:"flex-grow",children:[L.jsx("h3",{className:`text-xl md:text-2xl font-bold ${o} mb-2`,children:u.title}),L.jsx("p",{className:`${a} text-sm md:text-base leading-relaxed`,children:u.description})]})]}),L.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:u.technologies.map((f,h)=>L.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-medium ${n?"bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-400/30 text-white":"bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-700"}`,children:f},h))}),e===c&&L.jsx("div",{className:`mt-4 p-4 rounded-lg border ${n?"bg-white/5 border-white/10":"bg-black/5 border-black/10"}`,children:L.jsx("p",{className:`${a} text-sm leading-relaxed mb-4`,children:u.details})}),L.jsxs("div",{className:"flex gap-3",children:[L.jsxs("a",{href:u.github,target:"_blank",rel:"noopener noreferrer",className:`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${n?"bg-white/10 hover:bg-white/20 border border-white/20 text-white":"bg-black/5 hover:bg-black/10 border border-black/20 text-gray-900"}`,onClick:f=>f.stopPropagation(),children:[L.jsx(wm,{size:16}),L.jsx("span",{children:"GitHub"}),L.jsx(vx,{size:12,className:"group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"})]}),L.jsxs("button",{className:`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${n?"bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 border border-cyan-400/30 text-white":"bg-gradient-to-r from-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200 border border-blue-200 text-blue-700"}`,children:[L.jsx(kM,{size:16}),L.jsx("span",{children:e===c?"Less Info":"More Info"})]})]})]},c))}),L.jsx("div",{className:"text-center mt-16",children:L.jsxs("div",{className:`rounded-2xl p-8 border ${n?"bg-white/5 backdrop-blur-lg border-white/20":"bg-white/50 backdrop-blur-lg border-black/10"}`,children:[L.jsx("h3",{className:`text-2xl font-bold ${o} mb-4`,children:"Interested in collaborating?"}),L.jsx("p",{className:`${l} mb-6`,children:"I'm always excited to work on innovative projects and explore new technologies."}),L.jsxs("a",{href:"https://github.com/Randyh-25",target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 ${n?"bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white":"bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"}`,children:[L.jsx(wm,{size:20}),"View All Projects",L.jsx(vx,{size:16})]})]})})]})})};class Hu{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}const F3=()=>{if(!(typeof localStorage>"u"))return{get:n=>Promise.resolve(localStorage.getItem(n)),set:(n,e)=>Promise.resolve(localStorage.setItem(n,e)),remove:n=>Promise.resolve(localStorage.removeItem(n))}},vn={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:F3()},e0=n=>n?typeof n=="string"?{publicKey:n}:n.toString()==="[object Object]"?n:{}:{},k3=(n,e="https://api.emailjs.com")=>{if(!n)return;const t=e0(n);vn.publicKey=t.publicKey,vn.blockHeadless=t.blockHeadless,vn.storageProvider=t.storageProvider,vn.blockList=t.blockList,vn.limitRate=t.limitRate,vn.origin=t.origin||e},BM=async(n,e,t={})=>{const i=await fetch(vn.origin+n,{method:"POST",headers:t,body:e}),r=await i.text(),s=new Hu(i.status,r);if(i.ok)return s;throw s},HM=(n,e,t)=>{if(!n||typeof n!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t||typeof t!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},z3=n=>{if(n&&n.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},VM=n=>n.webdriver||!n.languages||n.languages.length===0,GM=()=>new Hu(451,"Unavailable For Headless Browser"),B3=(n,e)=>{if(!Array.isArray(n))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},H3=n=>{var e;return!((e=n.list)!=null&&e.length)||!n.watchVariable},V3=(n,e)=>n instanceof FormData?n.get(e):n[e],WM=(n,e)=>{if(H3(n))return!1;B3(n.list,n.watchVariable);const t=V3(e,n.watchVariable);return typeof t!="string"?!1:n.list.includes(t)},jM=()=>new Hu(403,"Forbidden"),G3=(n,e)=>{if(typeof n!="number"||n<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"},W3=async(n,e,t)=>{const i=Number(await t.get(n)||0);return e-Date.now()+i},XM=async(n,e,t)=>{if(!e.throttle||!t)return!1;G3(e.throttle,e.id);const i=e.id||n;return await W3(i,e.throttle,t)>0?!0:(await t.set(i,Date.now().toString()),!1)},$M=()=>new Hu(429,"Too Many Requests"),j3=async(n,e,t,i)=>{const r=e0(i),s=r.publicKey||vn.publicKey,o=r.blockHeadless||vn.blockHeadless,a=r.storageProvider||vn.storageProvider,l={...vn.blockList,...r.blockList},u={...vn.limitRate,...r.limitRate};return o&&VM(navigator)?Promise.reject(GM()):(HM(s,n,e),z3(t),t&&WM(l,t)?Promise.reject(jM()):await XM(location.pathname,u,a)?Promise.reject($M()):BM("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:s,service_id:n,template_id:e,template_params:t}),{"Content-type":"application/json"}))},X3=n=>{if(!n||n.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},$3=n=>typeof n=="string"?document.querySelector(n):n,Y3=async(n,e,t,i)=>{const r=e0(i),s=r.publicKey||vn.publicKey,o=r.blockHeadless||vn.blockHeadless,a=vn.storageProvider||r.storageProvider,l={...vn.blockList,...r.blockList},u={...vn.limitRate,...r.limitRate};if(o&&VM(navigator))return Promise.reject(GM());const c=$3(t);HM(s,n,e),X3(c);const f=new FormData(c);return WM(l,f)?Promise.reject(jM()):await XM(location.pathname,u,a)?Promise.reject($M()):(f.append("lib_version","4.4.1"),f.append("service_id",n),f.append("template_id",e),f.append("user_id",s),BM("/api/v1.0/email/send-form",f))},q3={init:k3,send:j3,sendForm:Y3,EmailJSResponseStatus:Hu},K3=({isDarkMode:n})=>{const[e,t]=ht.useState({name:"",email:"",message:""}),[i,r]=ht.useState(!1),[s,o]=ht.useState("idle");ht.useEffect(()=>{$t.registerPlugin(Ke),$t.fromTo(".contact-item",{opacity:0,y:30},{opacity:1,y:0,duration:.8,stagger:.1,scrollTrigger:{trigger:"#contact",start:"top 80%",end:"bottom 20%",toggleActions:"play none none reverse"}}),$t.fromTo(".contact-form",{opacity:0,x:50},{opacity:1,x:0,duration:1,scrollTrigger:{trigger:"#contact",start:"top 80%",toggleActions:"play none none reverse"}})},[]);const a=p=>{t({...e,[p.target.name]:p.target.value})},l=async p=>{p.preventDefault(),r(!0),o("idle");try{await q3.send("service_x795sgp","template_ce6i1r4",{from_name:e.name,from_email:e.email,message:e.message,to_name:"Randy Hendriyawan"},"RwGRlZ7bm2WBZMbIL"),o("success"),t({name:"",email:"",message:""}),$t.to(".success-message",{opacity:1,scale:1,duration:.5,ease:"back.out(1.7)"})}catch(_){console.error("Failed to send email:",_),o("error")}finally{r(!1)}},u=[{icon:L.jsx(w3,{className:n?"text-cyan-400":"text-blue-600",size:24}),label:"Email",value:"randyhendriyawan@gmail.com",link:"mailto:randyhendriyawan@gmail.com"},{icon:L.jsx(A3,{className:n?"text-green-400":"text-green-600",size:24}),label:"Phone",value:"+62 878-8173-3721",link:"tel:+6287881733721"},{icon:L.jsx(Jg,{className:n?"text-red-400":"text-red-600",size:24}),label:"Location",value:"Lampung, Indonesia",link:null}],c=[{icon:L.jsx(wm,{className:n?"text-white":"text-gray-900",size:20}),label:"GitHub",link:"https://github.com/Randyh-25"},{icon:L.jsx(E3,{className:n?"text-blue-400":"text-blue-600",size:20}),label:"LinkedIn",link:"https://linkedin.com/in/randyhendriyawan"},{icon:L.jsx(Jf,{className:n?"text-purple-400":"text-purple-600",size:20}),label:"Portfolio",link:"https://randyh-25.github.io/Portofolio"}],f=n?"text-white":"text-gray-900",h=n?"text-white/70":"text-gray-600";return L.jsx("section",{id:"contact",className:"py-20 px-4 sm:px-6 lg:px-8 relative",children:L.jsxs("div",{className:"max-w-7xl mx-auto",children:[L.jsxs("div",{className:"text-center mb-16",children:[L.jsx("h2",{className:`text-4xl md:text-5xl font-bold bg-gradient-to-r ${n?"from-cyan-400 to-purple-400":"from-blue-600 to-purple-600"} bg-clip-text text-transparent mb-4`,children:"Get In Touch"}),L.jsx("p",{className:`text-xl ${h} max-w-2xl mx-auto`,children:"Ready to collaborate or have a question? I'd love to hear from you."})]}),L.jsxs("div",{className:"grid lg:grid-cols-2 gap-12",children:[L.jsxs("div",{className:"space-y-8",children:[L.jsx("h3",{className:`text-2xl font-bold ${f} mb-6`,children:"Contact Information"}),L.jsx("div",{className:"space-y-4",children:u.map((p,_)=>L.jsxs("div",{className:"contact-item flex items-center gap-4",children:[L.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center border ${n?"bg-gradient-to-br from-white/20 to-white/10 border-white/20":"bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300"}`,children:p.icon}),L.jsxs("div",{children:[L.jsx("p",{className:`${h} text-sm`,children:p.label}),p.link?L.jsx("a",{href:p.link,className:`${f} font-medium hover:${n?"text-cyan-400":"text-blue-600"} transition-colors duration-300`,children:p.value}):L.jsx("p",{className:`${f} font-medium`,children:p.value})]})]},_))}),L.jsxs("div",{className:"contact-item",children:[L.jsx("h4",{className:`text-xl font-semibold ${f} mb-4`,children:"Connect With Me"}),L.jsx("div",{className:"flex gap-4",children:c.map((p,_)=>L.jsx("a",{href:p.link,target:"_blank",rel:"noopener noreferrer",className:`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group ${n?"bg-white/10 hover:bg-white/20 border border-white/20":"bg-black/5 hover:bg-black/10 border border-black/20"}`,children:p.icon},_))})]}),L.jsxs("div",{className:`contact-item rounded-2xl p-6 border ${n?"bg-white/5 backdrop-blur-lg border-white/20":"bg-white/50 backdrop-blur-lg border-black/10"}`,children:[L.jsx("h4",{className:`text-xl font-semibold ${f} mb-2`,children:"Availability"}),L.jsx("p",{className:h,children:"Currently available for freelance projects and collaboration opportunities. I typically respond within 24 hours."})]})]}),L.jsx("div",{className:"contact-form",children:L.jsxs("form",{onSubmit:l,className:"space-y-6",children:[L.jsxs("div",{children:[L.jsx("label",{htmlFor:"name",className:`block ${f} font-medium mb-2`,children:"Name"}),L.jsx("input",{type:"text",id:"name",name:"name",value:e.name,onChange:a,required:!0,className:`w-full px-4 py-3 rounded-xl transition-all duration-300 ${n?"bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20":"bg-white/50 backdrop-blur-sm border border-black/20 text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"} focus:outline-none`,placeholder:"Your name"})]}),L.jsxs("div",{children:[L.jsx("label",{htmlFor:"email",className:`block ${f} font-medium mb-2`,children:"Email"}),L.jsx("input",{type:"email",id:"email",name:"email",value:e.email,onChange:a,required:!0,className:`w-full px-4 py-3 rounded-xl transition-all duration-300 ${n?"bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20":"bg-white/50 backdrop-blur-sm border border-black/20 text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"} focus:outline-none`,placeholder:"your.email@example.com"})]}),L.jsxs("div",{children:[L.jsx("label",{htmlFor:"message",className:`block ${f} font-medium mb-2`,children:"Message"}),L.jsx("textarea",{id:"message",name:"message",value:e.message,onChange:a,required:!0,rows:5,className:`w-full px-4 py-3 rounded-xl transition-all duration-300 resize-none ${n?"bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20":"bg-white/50 backdrop-blur-sm border border-black/20 text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"} focus:outline-none`,placeholder:"Tell me about your project or just say hello!"})]}),L.jsx("button",{type:"submit",disabled:i,className:`w-full font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${n?"bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 disabled:from-gray-500 disabled:to-gray-600 text-white":"bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white"}`,children:i?L.jsxs(L.Fragment,{children:[L.jsx("div",{className:"animate-spin rounded-full h-5 w-5 border-b-2 border-white"}),"Sending..."]}):L.jsxs(L.Fragment,{children:[L.jsx(C3,{size:20}),"Send Message"]})}),s==="success"&&L.jsx("div",{className:"success-message opacity-0 scale-95 bg-green-500/20 border border-green-400/30 rounded-xl p-4 text-green-400 text-center",children:"Message sent successfully! I'll get back to you soon."}),s==="error"&&L.jsx("div",{className:"bg-red-500/20 border border-red-400/30 rounded-xl p-4 text-red-400 text-center",children:"Failed to send message. Please try again or contact me directly."})]})})]})]})})},Z3=({isDarkMode:n})=>{const e=n?"text-white/70":"text-gray-600",t=n?"text-white/50":"text-gray-500";return L.jsx("footer",{className:`relative z-10 py-8 px-4 sm:px-6 lg:px-8 border-t ${n?"border-white/10":"border-black/10"}`,children:L.jsx("div",{className:"max-w-7xl mx-auto",children:L.jsxs("div",{className:"text-center",children:[L.jsxs("p",{className:`${e} flex items-center justify-center gap-2 flex-wrap`,children:["© 2025 Randy Hendriyawan. Built with",L.jsx(S3,{className:"text-red-400",size:16}),"using React, TypeScript, and Tailwind CSS."]}),L.jsx("p",{className:`${t} text-sm mt-2`,children:"Powered by Three.js and GSAP for immersive experiences."})]})})})};$t.registerPlugin(Ke);function Q3(){const[n,e]=ht.useState(!0);ht.useEffect(()=>{const i=localStorage.getItem("theme");i&&e(i==="dark")},[]),ht.useEffect(()=>{localStorage.setItem("theme",n?"dark":"light"),n?(document.documentElement.classList.add("dark"),document.documentElement.classList.remove("light")):(document.documentElement.classList.add("light"),document.documentElement.classList.remove("dark"))},[n]);const t=()=>{e(!n)};return ht.useEffect(()=>{$t.to(".section",{scrollTrigger:{trigger:".section",start:"top center",end:"bottom center",toggleActions:"play none none reverse"},opacity:1,y:0,duration:1,stagger:.2})},[]),L.jsxs("div",{className:`relative min-h-screen overflow-x-hidden transition-colors duration-500 ${n?"bg-black":"bg-gray-50"}`,children:[L.jsx(f3,{isDarkMode:n}),L.jsx(N3,{isDarkMode:n,toggleTheme:t}),L.jsxs("main",{className:"relative z-10",children:[L.jsx(D3,{isDarkMode:n}),L.jsx(U3,{isDarkMode:n}),L.jsx(I3,{isDarkMode:n}),L.jsx(O3,{isDarkMode:n}),L.jsx(K3,{isDarkMode:n})]}),L.jsx(Z3,{isDarkMode:n})]})}DS(document.getElementById("root")).render(L.jsx(ht.StrictMode,{children:L.jsx(Q3,{})}));
