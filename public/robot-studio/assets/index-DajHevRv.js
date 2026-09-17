(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Zx(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var lh={exports:{}},fe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sg;function Kx(){if(sg)return fe;sg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),y=Symbol.iterator;function M(O){return O===null||typeof O!="object"?null:(O=y&&O[y]||O["@@iterator"],typeof O=="function"?O:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,x={};function v(O,Y,V){this.props=O,this.context=Y,this.refs=x,this.updater=V||E}v.prototype.isReactComponent={},v.prototype.setState=function(O,Y){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Y,"setState")},v.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function B(){}B.prototype=v.prototype;function T(O,Y,V){this.props=O,this.context=Y,this.refs=x,this.updater=V||E}var L=T.prototype=new B;L.constructor=T,b(L,v.prototype),L.isPureReactComponent=!0;var w=Array.isArray;function I(){}var N={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function C(O,Y,V){var et=V.ref;return{$$typeof:r,type:O,key:Y,ref:et!==void 0?et:null,props:V}}function z(O,Y){return C(O.type,Y,O.props)}function $(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function Z(O){var Y={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(V){return Y[V]})}var ct=/\/+/g;function H(O,Y){return typeof O=="object"&&O!==null&&O.key!=null?Z(""+O.key):Y.toString(36)}function rt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(I,I):(O.status="pending",O.then(function(Y){O.status==="pending"&&(O.status="fulfilled",O.value=Y)},function(Y){O.status==="pending"&&(O.status="rejected",O.reason=Y)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function F(O,Y,V,et,Tt){var Dt=typeof O;(Dt==="undefined"||Dt==="boolean")&&(O=null);var Ut=!1;if(O===null)Ut=!0;else switch(Dt){case"bigint":case"string":case"number":Ut=!0;break;case"object":switch(O.$$typeof){case r:case t:Ut=!0;break;case g:return Ut=O._init,F(Ut(O._payload),Y,V,et,Tt)}}if(Ut)return Tt=Tt(O),Ut=et===""?"."+H(O,0):et,w(Tt)?(V="",Ut!=null&&(V=Ut.replace(ct,"$&/")+"/"),F(Tt,Y,V,"",function(_t){return _t})):Tt!=null&&($(Tt)&&(Tt=z(Tt,V+(Tt.key==null||O&&O.key===Tt.key?"":(""+Tt.key).replace(ct,"$&/")+"/")+Ut)),Y.push(Tt)),1;Ut=0;var J=et===""?".":et+":";if(w(O))for(var nt=0;nt<O.length;nt++)et=O[nt],Dt=J+H(et,nt),Ut+=F(et,Y,V,Dt,Tt);else if(nt=M(O),typeof nt=="function")for(O=nt.call(O),nt=0;!(et=O.next()).done;)et=et.value,Dt=J+H(et,nt++),Ut+=F(et,Y,V,Dt,Tt);else if(Dt==="object"){if(typeof O.then=="function")return F(rt(O),Y,V,et,Tt);throw Y=String(O),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return Ut}function W(O,Y,V){if(O==null)return O;var et=[],Tt=0;return F(O,et,"","",function(Dt){return Y.call(V,Dt,Tt++)}),et}function dt(O){if(O._status===-1){var Y=O._result;Y=Y(),Y.then(function(V){(O._status===0||O._status===-1)&&(O._status=1,O._result=V)},function(V){(O._status===0||O._status===-1)&&(O._status=2,O._result=V)}),O._status===-1&&(O._status=0,O._result=Y)}if(O._status===1)return O._result.default;throw O._result}var tt=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},vt={map:W,forEach:function(O,Y,V){W(O,function(){Y.apply(this,arguments)},V)},count:function(O){var Y=0;return W(O,function(){Y++}),Y},toArray:function(O){return W(O,function(Y){return Y})||[]},only:function(O){if(!$(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return fe.Activity=_,fe.Children=vt,fe.Component=v,fe.Fragment=i,fe.Profiler=l,fe.PureComponent=T,fe.StrictMode=a,fe.Suspense=p,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,fe.__COMPILER_RUNTIME={__proto__:null,c:function(O){return N.H.useMemoCache(O)}},fe.cache=function(O){return function(){return O.apply(null,arguments)}},fe.cacheSignal=function(){return null},fe.cloneElement=function(O,Y,V){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var et=b({},O.props),Tt=O.key;if(Y!=null)for(Dt in Y.key!==void 0&&(Tt=""+Y.key),Y)!K.call(Y,Dt)||Dt==="key"||Dt==="__self"||Dt==="__source"||Dt==="ref"&&Y.ref===void 0||(et[Dt]=Y[Dt]);var Dt=arguments.length-2;if(Dt===1)et.children=V;else if(1<Dt){for(var Ut=Array(Dt),J=0;J<Dt;J++)Ut[J]=arguments[J+2];et.children=Ut}return C(O.type,Tt,et)},fe.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},fe.createElement=function(O,Y,V){var et,Tt={},Dt=null;if(Y!=null)for(et in Y.key!==void 0&&(Dt=""+Y.key),Y)K.call(Y,et)&&et!=="key"&&et!=="__self"&&et!=="__source"&&(Tt[et]=Y[et]);var Ut=arguments.length-2;if(Ut===1)Tt.children=V;else if(1<Ut){for(var J=Array(Ut),nt=0;nt<Ut;nt++)J[nt]=arguments[nt+2];Tt.children=J}if(O&&O.defaultProps)for(et in Ut=O.defaultProps,Ut)Tt[et]===void 0&&(Tt[et]=Ut[et]);return C(O,Dt,Tt)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(O){return{$$typeof:f,render:O}},fe.isValidElement=$,fe.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:dt}},fe.memo=function(O,Y){return{$$typeof:m,type:O,compare:Y===void 0?null:Y}},fe.startTransition=function(O){var Y=N.T,V={};N.T=V;try{var et=O(),Tt=N.S;Tt!==null&&Tt(V,et),typeof et=="object"&&et!==null&&typeof et.then=="function"&&et.then(I,tt)}catch(Dt){tt(Dt)}finally{Y!==null&&V.types!==null&&(Y.types=V.types),N.T=Y}},fe.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},fe.use=function(O){return N.H.use(O)},fe.useActionState=function(O,Y,V){return N.H.useActionState(O,Y,V)},fe.useCallback=function(O,Y){return N.H.useCallback(O,Y)},fe.useContext=function(O){return N.H.useContext(O)},fe.useDebugValue=function(){},fe.useDeferredValue=function(O,Y){return N.H.useDeferredValue(O,Y)},fe.useEffect=function(O,Y){return N.H.useEffect(O,Y)},fe.useEffectEvent=function(O){return N.H.useEffectEvent(O)},fe.useId=function(){return N.H.useId()},fe.useImperativeHandle=function(O,Y,V){return N.H.useImperativeHandle(O,Y,V)},fe.useInsertionEffect=function(O,Y){return N.H.useInsertionEffect(O,Y)},fe.useLayoutEffect=function(O,Y){return N.H.useLayoutEffect(O,Y)},fe.useMemo=function(O,Y){return N.H.useMemo(O,Y)},fe.useOptimistic=function(O,Y){return N.H.useOptimistic(O,Y)},fe.useReducer=function(O,Y,V){return N.H.useReducer(O,Y,V)},fe.useRef=function(O){return N.H.useRef(O)},fe.useState=function(O){return N.H.useState(O)},fe.useSyncExternalStore=function(O,Y,V){return N.H.useSyncExternalStore(O,Y,V)},fe.useTransition=function(){return N.H.useTransition()},fe.version="19.2.0",fe}var rg;function rd(){return rg||(rg=1,lh.exports=Kx()),lh.exports}var hn=rd();const xt=Zx(hn);var ch={exports:{}},No={},uh={exports:{}},fh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var og;function Qx(){return og||(og=1,(function(r){function t(F,W){var dt=F.length;F.push(W);t:for(;0<dt;){var tt=dt-1>>>1,vt=F[tt];if(0<l(vt,W))F[tt]=W,F[dt]=vt,dt=tt;else break t}}function i(F){return F.length===0?null:F[0]}function a(F){if(F.length===0)return null;var W=F[0],dt=F.pop();if(dt!==W){F[0]=dt;t:for(var tt=0,vt=F.length,O=vt>>>1;tt<O;){var Y=2*(tt+1)-1,V=F[Y],et=Y+1,Tt=F[et];if(0>l(V,dt))et<vt&&0>l(Tt,V)?(F[tt]=Tt,F[et]=dt,tt=et):(F[tt]=V,F[Y]=dt,tt=Y);else if(et<vt&&0>l(Tt,dt))F[tt]=Tt,F[et]=dt,tt=et;else break t}}return W}function l(F,W){var dt=F.sortIndex-W.sortIndex;return dt!==0?dt:F.id-W.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,f=h.now();r.unstable_now=function(){return h.now()-f}}var p=[],m=[],g=1,_=null,y=3,M=!1,E=!1,b=!1,x=!1,v=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;function L(F){for(var W=i(m);W!==null;){if(W.callback===null)a(m);else if(W.startTime<=F)a(m),W.sortIndex=W.expirationTime,t(p,W);else break;W=i(m)}}function w(F){if(b=!1,L(F),!E)if(i(p)!==null)E=!0,I||(I=!0,Z());else{var W=i(m);W!==null&&rt(w,W.startTime-F)}}var I=!1,N=-1,K=5,C=-1;function z(){return x?!0:!(r.unstable_now()-C<K)}function $(){if(x=!1,I){var F=r.unstable_now();C=F;var W=!0;try{t:{E=!1,b&&(b=!1,B(N),N=-1),M=!0;var dt=y;try{e:{for(L(F),_=i(p);_!==null&&!(_.expirationTime>F&&z());){var tt=_.callback;if(typeof tt=="function"){_.callback=null,y=_.priorityLevel;var vt=tt(_.expirationTime<=F);if(F=r.unstable_now(),typeof vt=="function"){_.callback=vt,L(F),W=!0;break e}_===i(p)&&a(p),L(F)}else a(p);_=i(p)}if(_!==null)W=!0;else{var O=i(m);O!==null&&rt(w,O.startTime-F),W=!1}}break t}finally{_=null,y=dt,M=!1}W=void 0}}finally{W?Z():I=!1}}}var Z;if(typeof T=="function")Z=function(){T($)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,H=ct.port2;ct.port1.onmessage=$,Z=function(){H.postMessage(null)}}else Z=function(){v($,0)};function rt(F,W){N=v(function(){F(r.unstable_now())},W)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_next=function(F){switch(y){case 1:case 2:case 3:var W=3;break;default:W=y}var dt=y;y=W;try{return F()}finally{y=dt}},r.unstable_requestPaint=function(){x=!0},r.unstable_runWithPriority=function(F,W){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var dt=y;y=F;try{return W()}finally{y=dt}},r.unstable_scheduleCallback=function(F,W,dt){var tt=r.unstable_now();switch(typeof dt=="object"&&dt!==null?(dt=dt.delay,dt=typeof dt=="number"&&0<dt?tt+dt:tt):dt=tt,F){case 1:var vt=-1;break;case 2:vt=250;break;case 5:vt=1073741823;break;case 4:vt=1e4;break;default:vt=5e3}return vt=dt+vt,F={id:g++,callback:W,priorityLevel:F,startTime:dt,expirationTime:vt,sortIndex:-1},dt>tt?(F.sortIndex=dt,t(m,F),i(p)===null&&F===i(m)&&(b?(B(N),N=-1):b=!0,rt(w,dt-tt))):(F.sortIndex=vt,t(p,F),E||M||(E=!0,I||(I=!0,Z()))),F},r.unstable_shouldYield=z,r.unstable_wrapCallback=function(F){var W=y;return function(){var dt=y;y=W;try{return F.apply(this,arguments)}finally{y=dt}}}})(fh)),fh}var lg;function Jx(){return lg||(lg=1,uh.exports=Qx()),uh.exports}var hh={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cg;function $x(){if(cg)return Ln;cg=1;var r=rd();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:p,containerInfo:m,implementation:g}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Ln.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,g)},Ln.flushSync=function(p){var m=h.T,g=a.p;try{if(h.T=null,a.p=2,p)return p()}finally{h.T=m,a.p=g,a.d.f()}},Ln.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,a.d.C(p,m))},Ln.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Ln.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,_=f(g,m.crossOrigin),y=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?a.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:y,fetchPriority:M}):g==="script"&&a.d.X(p,{crossOrigin:_,integrity:y,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Ln.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=f(m.as,m.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&a.d.M(p)},Ln.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,_=f(g,m.crossOrigin);a.d.L(p,g,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Ln.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=f(m.as,m.crossOrigin);a.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else a.d.m(p)},Ln.requestFormReset=function(p){a.d.r(p)},Ln.unstable_batchedUpdates=function(p,m){return p(m)},Ln.useFormState=function(p,m,g){return h.H.useFormState(p,m,g)},Ln.useFormStatus=function(){return h.H.useHostTransitionStatus()},Ln.version="19.2.0",Ln}var ug;function tS(){if(ug)return hh.exports;ug=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),hh.exports=$x(),hh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fg;function eS(){if(fg)return No;fg=1;var r=Jx(),t=rd(),i=tS();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,s=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(s=n.return),e=n.return;while(e)}return n.tag===3?s:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function f(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(a(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(a(188));return n!==e?null:e}for(var s=e,o=n;;){var u=s.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){s=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===s)return p(u),e;if(d===o)return p(u),n;d=d.sibling}throw Error(a(188))}if(s.return!==o.return)s=u,o=d;else{for(var S=!1,R=u.child;R;){if(R===s){S=!0,s=u,o=d;break}if(R===o){S=!0,o=u,s=d;break}R=R.sibling}if(!S){for(R=d.child;R;){if(R===s){S=!0,s=d,o=u;break}if(R===o){S=!0,o=d,s=u;break}R=R.sibling}if(!S)throw Error(a(189))}}if(s.alternate!==o)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,y=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),T=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),z=Symbol.for("react.memo_cache_sentinel"),$=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=$&&e[$]||e["@@iterator"],typeof e=="function"?e:null)}var ct=Symbol.for("react.client.reference");function H(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ct?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case v:return"Profiler";case x:return"StrictMode";case w:return"Suspense";case I:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case T:return e.displayName||"Context";case B:return(e._context.displayName||"Context")+".Consumer";case L:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case N:return n=e.displayName||null,n!==null?n:H(e.type)||"Memo";case K:n=e._payload,e=e._init;try{return H(e(n))}catch{}}return null}var rt=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,dt={pending:!1,data:null,method:null,action:null},tt=[],vt=-1;function O(e){return{current:e}}function Y(e){0>vt||(e.current=tt[vt],tt[vt]=null,vt--)}function V(e,n){vt++,tt[vt]=e.current,e.current=n}var et=O(null),Tt=O(null),Dt=O(null),Ut=O(null);function J(e,n){switch(V(Dt,n),V(Tt,e),V(et,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?C0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=C0(n),e=w0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(et),V(et,e)}function nt(){Y(et),Y(Tt),Y(Dt)}function _t(e){e.memoizedState!==null&&V(Ut,e);var n=et.current,s=w0(n,e.type);n!==s&&(V(Tt,e),V(et,s))}function yt(e){Tt.current===e&&(Y(et),Y(Tt)),Ut.current===e&&(Y(Ut),wo._currentValue=dt)}var D,st;function ft(e){if(D===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);D=n&&n[1]||"",st=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+D+e+st}var Ct=!1;function Rt(e,n){if(!e||Ct)return"";Ct=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var At=function(){throw Error()};if(Object.defineProperty(At.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(At,[])}catch(mt){var ut=mt}Reflect.construct(e,[],At)}else{try{At.call()}catch(mt){ut=mt}e.call(At.prototype)}}else{try{throw Error()}catch(mt){ut=mt}(At=e())&&typeof At.catch=="function"&&At.catch(function(){})}}catch(mt){if(mt&&ut&&typeof mt.stack=="string")return[mt.stack,ut.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),S=d[0],R=d[1];if(S&&R){var G=S.split(`
`),lt=R.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<lt.length&&!lt[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===lt.length)for(o=G.length-1,u=lt.length-1;1<=o&&0<=u&&G[o]!==lt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==lt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==lt[u]){var Mt=`
`+G[o].replace(" at new "," at ");return e.displayName&&Mt.includes("<anonymous>")&&(Mt=Mt.replace("<anonymous>",e.displayName)),Mt}while(1<=o&&0<=u);break}}}finally{Ct=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?ft(s):""}function Kt(e,n){switch(e.tag){case 26:case 27:case 5:return ft(e.type);case 16:return ft("Lazy");case 13:return e.child!==n&&n!==null?ft("Suspense Fallback"):ft("Suspense");case 19:return ft("SuspenseList");case 0:case 15:return Rt(e.type,!1);case 11:return Rt(e.type.render,!1);case 1:return Rt(e.type,!0);case 31:return ft("Activity");default:return""}}function Ht(e){try{var n="",s=null;do n+=Kt(e,s),s=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var kt=Object.prototype.hasOwnProperty,te=r.unstable_scheduleCallback,le=r.unstable_cancelCallback,Te=r.unstable_shouldYield,U=r.unstable_requestPaint,A=r.unstable_now,it=r.unstable_getCurrentPriorityLevel,Ot=r.unstable_ImmediatePriority,Lt=r.unstable_UserBlockingPriority,Nt=r.unstable_NormalPriority,Qt=r.unstable_LowPriority,Bt=r.unstable_IdlePriority,Vt=r.log,X=r.unstable_setDisableYieldValue,zt=null,Et=null;function ee(e){if(typeof Vt=="function"&&X(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(zt,e)}catch{}}var Wt=Math.clz32?Math.clz32:qt,ae=Math.log,jt=Math.LN2;function qt(e){return e>>>=0,e===0?32:31-(ae(e)/jt|0)|0}var he=256,j=262144,Ft=4194304;function wt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function St(e,n,s){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?u=wt(o):(S&=R,S!==0?u=wt(S):s||(s=R&~e,s!==0&&(u=wt(s))))):(R=o&~d,R!==0?u=wt(R):S!==0?u=wt(S):s||(s=o&~e,s!==0&&(u=wt(s)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,s=n&-n,d>=s||d===32&&(s&4194048)!==0)?n:u}function Pt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ne(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pe(){var e=Ft;return Ft<<=1,(Ft&62914560)===0&&(Ft=4194304),e}function Ye(e){for(var n=[],s=0;31>s;s++)n.push(e);return n}function Ke(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ue(e,n,s,o,u,d){var S=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var R=e.entanglements,G=e.expirationTimes,lt=e.hiddenUpdates;for(s=S&~s;0<s;){var Mt=31-Wt(s),At=1<<Mt;R[Mt]=0,G[Mt]=-1;var ut=lt[Mt];if(ut!==null)for(lt[Mt]=null,Mt=0;Mt<ut.length;Mt++){var mt=ut[Mt];mt!==null&&(mt.lane&=-536870913)}s&=~At}o!==0&&gn(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(S&~n))}function gn(e,n,s){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Wt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|s&261930}function Yn(e,n){var s=e.entangledLanes|=n;for(e=e.entanglements;s;){var o=31-Wt(s),u=1<<o;u&n|e[o]&n&&(e[o]|=n),s&=~u}}function Ir(e,n){var s=n&-n;return s=(s&42)!==0?1:Fr(s),(s&(e.suspendedLanes|n))!==0?0:s}function Fr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ca(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Hr(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:J0(e.type))}function Ka(e,n){var s=W.p;try{return W.p=e,n()}finally{W.p=s}}var vi=Math.random().toString(36).slice(2),nn="__reactFiber$"+vi,Cn="__reactProps$"+vi,ua="__reactContainer$"+vi,Gr="__reactEvents$"+vi,P="__reactListeners$"+vi,at="__reactHandles$"+vi,pt="__reactResources$"+vi,gt="__reactMarker$"+vi;function ht(e){delete e[nn],delete e[Cn],delete e[Gr],delete e[P],delete e[at]}function Xt(e){var n=e[nn];if(n)return n;for(var s=e.parentNode;s;){if(n=s[ua]||s[nn]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(e=z0(e);e!==null;){if(s=e[nn])return s;e=z0(e)}return n}e=s,s=e.parentNode}return null}function Zt(e){if(e=e[nn]||e[ua]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function se(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function re(e){var n=e[pt];return n||(n=e[pt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function $t(e){e[gt]=!0}var ce=new Set,ue={};function we(e,n){an(e,n),an(e+"Capture",n)}function an(e,n){for(ue[e]=n,e=0;e<n.length;e++)ce.add(n[e])}var sn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ai={},Fe={};function ge(e){return kt.call(Fe,e)?!0:kt.call(ai,e)?!1:sn.test(e)?Fe[e]=!0:(ai[e]=!0,!1)}function fa(e,n,s){if(ge(n))if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+s)}}function Be(e,n,s){if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+s)}}function Sn(e,n,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(n,s,""+o)}}function Nn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ha(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Vr(e,n,s){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){s=""+S,d.call(this,S)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function rn(e){if(!e._valueTracker){var n=ha(e)?"checked":"value";e._valueTracker=Vr(e,n,""+e[n])}}function Ci(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var s=n.getValue(),o="";return e&&(o=ha(e)?e.checked?"true":"false":e.value),e=o,e!==s?(n.setValue(e),!0):!1}function da(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Fn=/[\n"\\]/g;function wn(e){return e.replace(Fn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function kr(e,n,s,o,u,d,S,R){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Nn(n)):e.value!==""+Nn(n)&&(e.value=""+Nn(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?nu(e,S,Nn(n)):s!=null?nu(e,S,Nn(s)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+Nn(R):e.removeAttribute("name")}function Xr(e,n,s,o,u,d,S,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){rn(e);return}s=s!=null?""+Nn(s):"",n=n!=null?""+Nn(n):s,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),rn(e)}function nu(e,n,s){n==="number"&&da(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function Ls(e,n,s,o){if(e=e.options,n){n={};for(var u=0;u<s.length;u++)n["$"+s[u]]=!0;for(s=0;s<e.length;s++)u=n.hasOwnProperty("$"+e[s].value),e[s].selected!==u&&(e[s].selected=u),u&&o&&(e[s].defaultSelected=!0)}else{for(s=""+Nn(s),n=null,u=0;u<e.length;u++){if(e[u].value===s){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ed(e,n,s){if(n!=null&&(n=""+Nn(n),n!==e.value&&(e.value=n),s==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=s!=null?""+Nn(s):""}function bd(e,n,s,o){if(n==null){if(o!=null){if(s!=null)throw Error(a(92));if(rt(o)){if(1<o.length)throw Error(a(93));o=o[0]}s=o}s==null&&(s=""),n=s}s=Nn(n),e.defaultValue=s,o=e.textContent,o===s&&o!==""&&o!==null&&(e.value=o),rn(e)}function Ds(e,n){if(n){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=n;return}}e.textContent=n}var Xv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Td(e,n,s){var o=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,s):typeof s!="number"||s===0||Xv.has(n)?n==="float"?e.cssFloat=s:e[n]=(""+s).trim():e[n]=s+"px"}function Ad(e,n,s){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&s[u]!==o&&Td(e,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Td(e,d,n[d])}function iu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function nl(e){return qv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Bi(){}var au=null;function su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Us=null,Ns=null;function Rd(e){var n=Zt(e);if(n&&(e=n.stateNode)){var s=e[Cn]||null;t:switch(e=n.stateNode,n.type){case"input":if(kr(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+wn(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var o=s[n];if(o!==e&&o.form===e.form){var u=o[Cn]||null;if(!u)throw Error(a(90));kr(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<s.length;n++)o=s[n],o.form===e.form&&Ci(o)}break t;case"textarea":Ed(e,s.value,s.defaultValue);break t;case"select":n=s.value,n!=null&&Ls(e,!!s.multiple,n,!1)}}}var ru=!1;function Cd(e,n,s){if(ru)return e(n,s);ru=!0;try{var o=e(n);return o}finally{if(ru=!1,(Us!==null||Ns!==null)&&(kl(),Us&&(n=Us,e=Ns,Ns=Us=null,Rd(n),e)))for(n=0;n<e.length;n++)Rd(e[n])}}function Wr(e,n){var s=e.stateNode;if(s===null)return null;var o=s[Cn]||null;if(o===null)return null;s=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,n,typeof s));return s}var Ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ou=!1;if(Ii)try{var qr={};Object.defineProperty(qr,"passive",{get:function(){ou=!0}}),window.addEventListener("test",qr,qr),window.removeEventListener("test",qr,qr)}catch{ou=!1}var pa=null,lu=null,il=null;function wd(){if(il)return il;var e,n=lu,s=n.length,o,u="value"in pa?pa.value:pa.textContent,d=u.length;for(e=0;e<s&&n[e]===u[e];e++);var S=s-e;for(o=1;o<=S&&n[s-o]===u[d-o];o++);return il=u.slice(e,1<o?1-o:void 0)}function al(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function sl(){return!0}function Ld(){return!1}function Hn(e){function n(s,o,u,d,S){this._reactName=s,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(s=e[R],this[R]=s?s(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?sl:Ld,this.isPropagationStopped=Ld,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),n}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rl=Hn(Qa),Yr=_({},Qa,{view:0,detail:0}),Yv=Hn(Yr),cu,uu,jr,ol=_({},Yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jr&&(jr&&e.type==="mousemove"?(cu=e.screenX-jr.screenX,uu=e.screenY-jr.screenY):uu=cu=0,jr=e),cu)},movementY:function(e){return"movementY"in e?e.movementY:uu}}),Dd=Hn(ol),jv=_({},ol,{dataTransfer:0}),Zv=Hn(jv),Kv=_({},Yr,{relatedTarget:0}),fu=Hn(Kv),Qv=_({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),Jv=Hn(Qv),$v=_({},Qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ty=Hn($v),ey=_({},Qa,{data:0}),Ud=Hn(ey),ny={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ay={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sy(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ay[e])?!!n[e]:!1}function hu(){return sy}var ry=_({},Yr,{key:function(e){if(e.key){var n=ny[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=al(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?iy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hu,charCode:function(e){return e.type==="keypress"?al(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?al(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),oy=Hn(ry),ly=_({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nd=Hn(ly),cy=_({},Yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hu}),uy=Hn(cy),fy=_({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),hy=Hn(fy),dy=_({},ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),py=Hn(dy),my=_({},Qa,{newState:0,oldState:0}),gy=Hn(my),_y=[9,13,27,32],du=Ii&&"CompositionEvent"in window,Zr=null;Ii&&"documentMode"in document&&(Zr=document.documentMode);var vy=Ii&&"TextEvent"in window&&!Zr,Od=Ii&&(!du||Zr&&8<Zr&&11>=Zr),Pd=" ",zd=!1;function Bd(e,n){switch(e){case"keyup":return _y.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Id(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Os=!1;function yy(e,n){switch(e){case"compositionend":return Id(n);case"keypress":return n.which!==32?null:(zd=!0,Pd);case"textInput":return e=n.data,e===Pd&&zd?null:e;default:return null}}function xy(e,n){if(Os)return e==="compositionend"||!du&&Bd(e,n)?(e=wd(),il=lu=pa=null,Os=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Od&&n.locale!=="ko"?null:n.data;default:return null}}var Sy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Sy[e.type]:n==="textarea"}function Hd(e,n,s,o){Us?Ns?Ns.push(o):Ns=[o]:Us=o,n=Kl(n,"onChange"),0<n.length&&(s=new rl("onChange","change",null,s,o),e.push({event:s,listeners:n}))}var Kr=null,Qr=null;function My(e){M0(e,0)}function ll(e){var n=se(e);if(Ci(n))return e}function Gd(e,n){if(e==="change")return n}var Vd=!1;if(Ii){var pu;if(Ii){var mu="oninput"in document;if(!mu){var kd=document.createElement("div");kd.setAttribute("oninput","return;"),mu=typeof kd.oninput=="function"}pu=mu}else pu=!1;Vd=pu&&(!document.documentMode||9<document.documentMode)}function Xd(){Kr&&(Kr.detachEvent("onpropertychange",Wd),Qr=Kr=null)}function Wd(e){if(e.propertyName==="value"&&ll(Qr)){var n=[];Hd(n,Qr,e,su(e)),Cd(My,n)}}function Ey(e,n,s){e==="focusin"?(Xd(),Kr=n,Qr=s,Kr.attachEvent("onpropertychange",Wd)):e==="focusout"&&Xd()}function by(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(Qr)}function Ty(e,n){if(e==="click")return ll(n)}function Ay(e,n){if(e==="input"||e==="change")return ll(n)}function Ry(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var jn=typeof Object.is=="function"?Object.is:Ry;function Jr(e,n){if(jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var s=Object.keys(e),o=Object.keys(n);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var u=s[o];if(!kt.call(n,u)||!jn(e[u],n[u]))return!1}return!0}function qd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yd(e,n){var s=qd(e);e=0;for(var o;s;){if(s.nodeType===3){if(o=e+s.textContent.length,e<=n&&o>=n)return{node:s,offset:n-e};e=o}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=qd(s)}}function jd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?jd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Zd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=da(e.document);n instanceof e.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)e=n.contentWindow;else break;n=da(e.document)}return n}function gu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Cy=Ii&&"documentMode"in document&&11>=document.documentMode,Ps=null,_u=null,$r=null,vu=!1;function Kd(e,n,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;vu||Ps==null||Ps!==da(o)||(o=Ps,"selectionStart"in o&&gu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),$r&&Jr($r,o)||($r=o,o=Kl(_u,"onSelect"),0<o.length&&(n=new rl("onSelect","select",null,n,s),e.push({event:n,listeners:o}),n.target=Ps)))}function Ja(e,n){var s={};return s[e.toLowerCase()]=n.toLowerCase(),s["Webkit"+e]="webkit"+n,s["Moz"+e]="moz"+n,s}var zs={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionrun:Ja("Transition","TransitionRun"),transitionstart:Ja("Transition","TransitionStart"),transitioncancel:Ja("Transition","TransitionCancel"),transitionend:Ja("Transition","TransitionEnd")},yu={},Qd={};Ii&&(Qd=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function $a(e){if(yu[e])return yu[e];if(!zs[e])return e;var n=zs[e],s;for(s in n)if(n.hasOwnProperty(s)&&s in Qd)return yu[e]=n[s];return e}var Jd=$a("animationend"),$d=$a("animationiteration"),tp=$a("animationstart"),wy=$a("transitionrun"),Ly=$a("transitionstart"),Dy=$a("transitioncancel"),ep=$a("transitionend"),np=new Map,xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xu.push("scrollEnd");function yi(e,n){np.set(e,n),we(n,[e])}var cl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},si=[],Bs=0,Su=0;function ul(){for(var e=Bs,n=Su=Bs=0;n<e;){var s=si[n];si[n++]=null;var o=si[n];si[n++]=null;var u=si[n];si[n++]=null;var d=si[n];if(si[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}d!==0&&ip(s,u,d)}}function fl(e,n,s,o){si[Bs++]=e,si[Bs++]=n,si[Bs++]=s,si[Bs++]=o,Su|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Mu(e,n,s,o){return fl(e,n,s,o),hl(e)}function ts(e,n){return fl(e,null,null,n),hl(e)}function ip(e,n,s){e.lanes|=s;var o=e.alternate;o!==null&&(o.lanes|=s);for(var u=!1,d=e.return;d!==null;)d.childLanes|=s,o=d.alternate,o!==null&&(o.childLanes|=s),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-Wt(s),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=s|536870912),d):null}function hl(e){if(50<Mo)throw Mo=0,Uf=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Is={};function Uy(e,n,s,o){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(e,n,s,o){return new Uy(e,n,s,o)}function Eu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fi(e,n){var s=e.alternate;return s===null?(s=Zn(e.tag,n,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=n,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,n=e.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function ap(e,n){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,n=s.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function dl(e,n,s,o,u,d){var S=0;if(o=e,typeof e=="function")Eu(e)&&(S=1);else if(typeof e=="string")S=Bx(e,s,et.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=Zn(31,s,n,u),e.elementType=C,e.lanes=d,e;case b:return es(s.children,u,d,n);case x:S=8,u|=24;break;case v:return e=Zn(12,s,n,u|2),e.elementType=v,e.lanes=d,e;case w:return e=Zn(13,s,n,u),e.elementType=w,e.lanes=d,e;case I:return e=Zn(19,s,n,u),e.elementType=I,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case T:S=10;break t;case B:S=9;break t;case L:S=11;break t;case N:S=14;break t;case K:S=16,o=null;break t}S=29,s=Error(a(130,e===null?"null":typeof e,"")),o=null}return n=Zn(S,s,n,u),n.elementType=e,n.type=o,n.lanes=d,n}function es(e,n,s,o){return e=Zn(7,e,o,n),e.lanes=s,e}function bu(e,n,s){return e=Zn(6,e,null,n),e.lanes=s,e}function sp(e){var n=Zn(18,null,null,0);return n.stateNode=e,n}function Tu(e,n,s){return n=Zn(4,e.children!==null?e.children:[],e.key,n),n.lanes=s,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var rp=new WeakMap;function ri(e,n){if(typeof e=="object"&&e!==null){var s=rp.get(e);return s!==void 0?s:(n={value:e,source:n,stack:Ht(n)},rp.set(e,n),n)}return{value:e,source:n,stack:Ht(n)}}var Fs=[],Hs=0,pl=null,to=0,oi=[],li=0,ma=null,wi=1,Li="";function Hi(e,n){Fs[Hs++]=to,Fs[Hs++]=pl,pl=e,to=n}function op(e,n,s){oi[li++]=wi,oi[li++]=Li,oi[li++]=ma,ma=e;var o=wi;e=Li;var u=32-Wt(o)-1;o&=~(1<<u),s+=1;var d=32-Wt(n)+u;if(30<d){var S=u-u%5;d=(o&(1<<S)-1).toString(32),o>>=S,u-=S,wi=1<<32-Wt(n)+u|s<<u|o,Li=d+e}else wi=1<<d|s<<u|o,Li=e}function Au(e){e.return!==null&&(Hi(e,1),op(e,1,0))}function Ru(e){for(;e===pl;)pl=Fs[--Hs],Fs[Hs]=null,to=Fs[--Hs],Fs[Hs]=null;for(;e===ma;)ma=oi[--li],oi[li]=null,Li=oi[--li],oi[li]=null,wi=oi[--li],oi[li]=null}function lp(e,n){oi[li++]=wi,oi[li++]=Li,oi[li++]=ma,wi=n.id,Li=n.overflow,ma=e}var Mn=null,He=null,Ee=!1,ga=null,ci=!1,Cu=Error(a(519));function _a(e){var n=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw eo(ri(n,e)),Cu}function cp(e){var n=e.stateNode,s=e.type,o=e.memoizedProps;switch(n[nn]=e,n[Cn]=o,s){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(s=0;s<bo.length;s++)xe(bo[s],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),Xr(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),bd(n,o.value,o.defaultValue,o.children)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||o.suppressHydrationWarning===!0||A0(n.textContent,s)?(o.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),o.onScroll!=null&&xe("scroll",n),o.onScrollEnd!=null&&xe("scrollend",n),o.onClick!=null&&(n.onclick=Bi),n=!0):n=!1,n||_a(e,!0)}function up(e){for(Mn=e.return;Mn;)switch(Mn.tag){case 5:case 31:case 13:ci=!1;return;case 27:case 3:ci=!0;return;default:Mn=Mn.return}}function Gs(e){if(e!==Mn)return!1;if(!Ee)return up(e),Ee=!0,!1;var n=e.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Yf(e.type,e.memoizedProps)),s=!s),s&&He&&_a(e),up(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));He=P0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));He=P0(e)}else n===27?(n=He,Da(e.type)?(e=Jf,Jf=null,He=e):He=n):He=Mn?fi(e.stateNode.nextSibling):null;return!0}function ns(){He=Mn=null,Ee=!1}function wu(){var e=ga;return e!==null&&(Xn===null?Xn=e:Xn.push.apply(Xn,e),ga=null),e}function eo(e){ga===null?ga=[e]:ga.push(e)}var Lu=O(null),is=null,Gi=null;function va(e,n,s){V(Lu,n._currentValue),n._currentValue=s}function Vi(e){e._currentValue=Lu.current,Y(Lu)}function Du(e,n,s){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===s)break;e=e.return}}function Uu(e,n,s,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var S=u.child;d=d.firstContext;t:for(;d!==null;){var R=d;d=u;for(var G=0;G<n.length;G++)if(R.context===n[G]){d.lanes|=s,R=d.alternate,R!==null&&(R.lanes|=s),Du(d.return,s,e),o||(S=null);break t}d=R.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(a(341));S.lanes|=s,d=S.alternate,d!==null&&(d.lanes|=s),Du(S,s,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Vs(e,n,s,o){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var R=u.type;jn(u.pendingProps.value,S.value)||(e!==null?e.push(R):e=[R])}}else if(u===Ut.current){if(S=u.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(wo):e=[wo])}u=u.return}e!==null&&Uu(n,e,s,o),n.flags|=262144}function ml(e){for(e=e.firstContext;e!==null;){if(!jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function as(e){is=e,Gi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function En(e){return fp(is,e)}function gl(e,n){return is===null&&as(e),fp(e,n)}function fp(e,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},Gi===null){if(e===null)throw Error(a(308));Gi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Gi=Gi.next=n;return s}var Ny=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(s,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(s){return s()})}},Oy=r.unstable_scheduleCallback,Py=r.unstable_NormalPriority,on={$$typeof:T,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Nu(){return{controller:new Ny,data:new Map,refCount:0}}function no(e){e.refCount--,e.refCount===0&&Oy(Py,function(){e.controller.abort()})}var io=null,Ou=0,ks=0,Xs=null;function zy(e,n){if(io===null){var s=io=[];Ou=0,ks=If(),Xs={status:"pending",value:void 0,then:function(o){s.push(o)}}}return Ou++,n.then(hp,hp),n}function hp(){if(--Ou===0&&io!==null){Xs!==null&&(Xs.status="fulfilled");var e=io;io=null,ks=0,Xs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function By(e,n){var s=[],o={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<s.length;u++)(0,s[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),o}var dp=F.S;F.S=function(e,n){Km=A(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&zy(e,n),dp!==null&&dp(e,n)};var ss=O(null);function Pu(){var e=ss.current;return e!==null?e:Ie.pooledCache}function _l(e,n){n===null?V(ss,ss.current):V(ss,n.pool)}function pp(){var e=Pu();return e===null?null:{parent:on._currentValue,pool:e}}var Ws=Error(a(460)),zu=Error(a(474)),vl=Error(a(542)),yl={then:function(){}};function mp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function gp(e,n,s){switch(s=e[s],s===void 0?e.push(n):s!==n&&(n.then(Bi,Bi),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,vp(e),e;default:if(typeof n.status=="string")n.then(Bi,Bi);else{if(e=Ie,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,vp(e),e}throw os=n,Ws}}function rs(e){try{var n=e._init;return n(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(os=s,Ws):s}}var os=null;function _p(){if(os===null)throw Error(a(459));var e=os;return os=null,e}function vp(e){if(e===Ws||e===vl)throw Error(a(483))}var qs=null,ao=0;function xl(e){var n=ao;return ao+=1,qs===null&&(qs=[]),gp(qs,e,n)}function so(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Sl(e,n){throw n.$$typeof===y?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function yp(e){function n(Q,q){if(e){var ot=Q.deletions;ot===null?(Q.deletions=[q],Q.flags|=16):ot.push(q)}}function s(Q,q){if(!e)return null;for(;q!==null;)n(Q,q),q=q.sibling;return null}function o(Q){for(var q=new Map;Q!==null;)Q.key!==null?q.set(Q.key,Q):q.set(Q.index,Q),Q=Q.sibling;return q}function u(Q,q){return Q=Fi(Q,q),Q.index=0,Q.sibling=null,Q}function d(Q,q,ot){return Q.index=ot,e?(ot=Q.alternate,ot!==null?(ot=ot.index,ot<q?(Q.flags|=67108866,q):ot):(Q.flags|=67108866,q)):(Q.flags|=1048576,q)}function S(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function R(Q,q,ot,bt){return q===null||q.tag!==6?(q=bu(ot,Q.mode,bt),q.return=Q,q):(q=u(q,ot),q.return=Q,q)}function G(Q,q,ot,bt){var ie=ot.type;return ie===b?Mt(Q,q,ot.props.children,bt,ot.key):q!==null&&(q.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===K&&rs(ie)===q.type)?(q=u(q,ot.props),so(q,ot),q.return=Q,q):(q=dl(ot.type,ot.key,ot.props,null,Q.mode,bt),so(q,ot),q.return=Q,q)}function lt(Q,q,ot,bt){return q===null||q.tag!==4||q.stateNode.containerInfo!==ot.containerInfo||q.stateNode.implementation!==ot.implementation?(q=Tu(ot,Q.mode,bt),q.return=Q,q):(q=u(q,ot.children||[]),q.return=Q,q)}function Mt(Q,q,ot,bt,ie){return q===null||q.tag!==7?(q=es(ot,Q.mode,bt,ie),q.return=Q,q):(q=u(q,ot),q.return=Q,q)}function At(Q,q,ot){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=bu(""+q,Q.mode,ot),q.return=Q,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case M:return ot=dl(q.type,q.key,q.props,null,Q.mode,ot),so(ot,q),ot.return=Q,ot;case E:return q=Tu(q,Q.mode,ot),q.return=Q,q;case K:return q=rs(q),At(Q,q,ot)}if(rt(q)||Z(q))return q=es(q,Q.mode,ot,null),q.return=Q,q;if(typeof q.then=="function")return At(Q,xl(q),ot);if(q.$$typeof===T)return At(Q,gl(Q,q),ot);Sl(Q,q)}return null}function ut(Q,q,ot,bt){var ie=q!==null?q.key:null;if(typeof ot=="string"&&ot!==""||typeof ot=="number"||typeof ot=="bigint")return ie!==null?null:R(Q,q,""+ot,bt);if(typeof ot=="object"&&ot!==null){switch(ot.$$typeof){case M:return ot.key===ie?G(Q,q,ot,bt):null;case E:return ot.key===ie?lt(Q,q,ot,bt):null;case K:return ot=rs(ot),ut(Q,q,ot,bt)}if(rt(ot)||Z(ot))return ie!==null?null:Mt(Q,q,ot,bt,null);if(typeof ot.then=="function")return ut(Q,q,xl(ot),bt);if(ot.$$typeof===T)return ut(Q,q,gl(Q,ot),bt);Sl(Q,ot)}return null}function mt(Q,q,ot,bt,ie){if(typeof bt=="string"&&bt!==""||typeof bt=="number"||typeof bt=="bigint")return Q=Q.get(ot)||null,R(q,Q,""+bt,ie);if(typeof bt=="object"&&bt!==null){switch(bt.$$typeof){case M:return Q=Q.get(bt.key===null?ot:bt.key)||null,G(q,Q,bt,ie);case E:return Q=Q.get(bt.key===null?ot:bt.key)||null,lt(q,Q,bt,ie);case K:return bt=rs(bt),mt(Q,q,ot,bt,ie)}if(rt(bt)||Z(bt))return Q=Q.get(ot)||null,Mt(q,Q,bt,ie,null);if(typeof bt.then=="function")return mt(Q,q,ot,xl(bt),ie);if(bt.$$typeof===T)return mt(Q,q,ot,gl(q,bt),ie);Sl(q,bt)}return null}function Yt(Q,q,ot,bt){for(var ie=null,Ae=null,Jt=q,me=q=0,Me=null;Jt!==null&&me<ot.length;me++){Jt.index>me?(Me=Jt,Jt=null):Me=Jt.sibling;var Re=ut(Q,Jt,ot[me],bt);if(Re===null){Jt===null&&(Jt=Me);break}e&&Jt&&Re.alternate===null&&n(Q,Jt),q=d(Re,q,me),Ae===null?ie=Re:Ae.sibling=Re,Ae=Re,Jt=Me}if(me===ot.length)return s(Q,Jt),Ee&&Hi(Q,me),ie;if(Jt===null){for(;me<ot.length;me++)Jt=At(Q,ot[me],bt),Jt!==null&&(q=d(Jt,q,me),Ae===null?ie=Jt:Ae.sibling=Jt,Ae=Jt);return Ee&&Hi(Q,me),ie}for(Jt=o(Jt);me<ot.length;me++)Me=mt(Jt,Q,me,ot[me],bt),Me!==null&&(e&&Me.alternate!==null&&Jt.delete(Me.key===null?me:Me.key),q=d(Me,q,me),Ae===null?ie=Me:Ae.sibling=Me,Ae=Me);return e&&Jt.forEach(function(za){return n(Q,za)}),Ee&&Hi(Q,me),ie}function oe(Q,q,ot,bt){if(ot==null)throw Error(a(151));for(var ie=null,Ae=null,Jt=q,me=q=0,Me=null,Re=ot.next();Jt!==null&&!Re.done;me++,Re=ot.next()){Jt.index>me?(Me=Jt,Jt=null):Me=Jt.sibling;var za=ut(Q,Jt,Re.value,bt);if(za===null){Jt===null&&(Jt=Me);break}e&&Jt&&za.alternate===null&&n(Q,Jt),q=d(za,q,me),Ae===null?ie=za:Ae.sibling=za,Ae=za,Jt=Me}if(Re.done)return s(Q,Jt),Ee&&Hi(Q,me),ie;if(Jt===null){for(;!Re.done;me++,Re=ot.next())Re=At(Q,Re.value,bt),Re!==null&&(q=d(Re,q,me),Ae===null?ie=Re:Ae.sibling=Re,Ae=Re);return Ee&&Hi(Q,me),ie}for(Jt=o(Jt);!Re.done;me++,Re=ot.next())Re=mt(Jt,Q,me,Re.value,bt),Re!==null&&(e&&Re.alternate!==null&&Jt.delete(Re.key===null?me:Re.key),q=d(Re,q,me),Ae===null?ie=Re:Ae.sibling=Re,Ae=Re);return e&&Jt.forEach(function(jx){return n(Q,jx)}),Ee&&Hi(Q,me),ie}function Pe(Q,q,ot,bt){if(typeof ot=="object"&&ot!==null&&ot.type===b&&ot.key===null&&(ot=ot.props.children),typeof ot=="object"&&ot!==null){switch(ot.$$typeof){case M:t:{for(var ie=ot.key;q!==null;){if(q.key===ie){if(ie=ot.type,ie===b){if(q.tag===7){s(Q,q.sibling),bt=u(q,ot.props.children),bt.return=Q,Q=bt;break t}}else if(q.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===K&&rs(ie)===q.type){s(Q,q.sibling),bt=u(q,ot.props),so(bt,ot),bt.return=Q,Q=bt;break t}s(Q,q);break}else n(Q,q);q=q.sibling}ot.type===b?(bt=es(ot.props.children,Q.mode,bt,ot.key),bt.return=Q,Q=bt):(bt=dl(ot.type,ot.key,ot.props,null,Q.mode,bt),so(bt,ot),bt.return=Q,Q=bt)}return S(Q);case E:t:{for(ie=ot.key;q!==null;){if(q.key===ie)if(q.tag===4&&q.stateNode.containerInfo===ot.containerInfo&&q.stateNode.implementation===ot.implementation){s(Q,q.sibling),bt=u(q,ot.children||[]),bt.return=Q,Q=bt;break t}else{s(Q,q);break}else n(Q,q);q=q.sibling}bt=Tu(ot,Q.mode,bt),bt.return=Q,Q=bt}return S(Q);case K:return ot=rs(ot),Pe(Q,q,ot,bt)}if(rt(ot))return Yt(Q,q,ot,bt);if(Z(ot)){if(ie=Z(ot),typeof ie!="function")throw Error(a(150));return ot=ie.call(ot),oe(Q,q,ot,bt)}if(typeof ot.then=="function")return Pe(Q,q,xl(ot),bt);if(ot.$$typeof===T)return Pe(Q,q,gl(Q,ot),bt);Sl(Q,ot)}return typeof ot=="string"&&ot!==""||typeof ot=="number"||typeof ot=="bigint"?(ot=""+ot,q!==null&&q.tag===6?(s(Q,q.sibling),bt=u(q,ot),bt.return=Q,Q=bt):(s(Q,q),bt=bu(ot,Q.mode,bt),bt.return=Q,Q=bt),S(Q)):s(Q,q)}return function(Q,q,ot,bt){try{ao=0;var ie=Pe(Q,q,ot,bt);return qs=null,ie}catch(Jt){if(Jt===Ws||Jt===vl)throw Jt;var Ae=Zn(29,Jt,null,Q.mode);return Ae.lanes=bt,Ae.return=Q,Ae}finally{}}}var ls=yp(!0),xp=yp(!1),ya=!1;function Bu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Iu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Sa(e,n,s){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ce&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=hl(e),ip(e,null,s),n}return fl(e,o,n,s),hl(e)}function ro(e,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,s|=o,n.lanes=s,Yn(e,s)}}function Fu(e,n){var s=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var u=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?u=d=S:d=d.next=S,s=s.next}while(s!==null);d===null?u=d=n:d=d.next=n}else u=d=n;s={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=n:e.next=n,s.lastBaseUpdate=n}var Hu=!1;function oo(){if(Hu){var e=Xs;if(e!==null)throw e}}function lo(e,n,s,o){Hu=!1;var u=e.updateQueue;ya=!1;var d=u.firstBaseUpdate,S=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var G=R,lt=G.next;G.next=null,S===null?d=lt:S.next=lt,S=G;var Mt=e.alternate;Mt!==null&&(Mt=Mt.updateQueue,R=Mt.lastBaseUpdate,R!==S&&(R===null?Mt.firstBaseUpdate=lt:R.next=lt,Mt.lastBaseUpdate=G))}if(d!==null){var At=u.baseState;S=0,Mt=lt=G=null,R=d;do{var ut=R.lane&-536870913,mt=ut!==R.lane;if(mt?(Se&ut)===ut:(o&ut)===ut){ut!==0&&ut===ks&&(Hu=!0),Mt!==null&&(Mt=Mt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Yt=e,oe=R;ut=n;var Pe=s;switch(oe.tag){case 1:if(Yt=oe.payload,typeof Yt=="function"){At=Yt.call(Pe,At,ut);break t}At=Yt;break t;case 3:Yt.flags=Yt.flags&-65537|128;case 0:if(Yt=oe.payload,ut=typeof Yt=="function"?Yt.call(Pe,At,ut):Yt,ut==null)break t;At=_({},At,ut);break t;case 2:ya=!0}}ut=R.callback,ut!==null&&(e.flags|=64,mt&&(e.flags|=8192),mt=u.callbacks,mt===null?u.callbacks=[ut]:mt.push(ut))}else mt={lane:ut,tag:R.tag,payload:R.payload,callback:R.callback,next:null},Mt===null?(lt=Mt=mt,G=At):Mt=Mt.next=mt,S|=ut;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;mt=R,R=mt.next,mt.next=null,u.lastBaseUpdate=mt,u.shared.pending=null}}while(!0);Mt===null&&(G=At),u.baseState=G,u.firstBaseUpdate=lt,u.lastBaseUpdate=Mt,d===null&&(u.shared.lanes=0),Aa|=S,e.lanes=S,e.memoizedState=At}}function Sp(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function Mp(e,n){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Sp(s[e],n)}var Ys=O(null),Ml=O(0);function Ep(e,n){e=Qi,V(Ml,e),V(Ys,n),Qi=e|n.baseLanes}function Gu(){V(Ml,Qi),V(Ys,Ys.current)}function Vu(){Qi=Ml.current,Y(Ys),Y(Ml)}var Kn=O(null),ui=null;function Ma(e){var n=e.alternate;V(Qe,Qe.current&1),V(Kn,e),ui===null&&(n===null||Ys.current!==null||n.memoizedState!==null)&&(ui=e)}function ku(e){V(Qe,Qe.current),V(Kn,e),ui===null&&(ui=e)}function bp(e){e.tag===22?(V(Qe,Qe.current),V(Kn,e),ui===null&&(ui=e)):Ea()}function Ea(){V(Qe,Qe.current),V(Kn,Kn.current)}function Qn(e){Y(Kn),ui===e&&(ui=null),Y(Qe)}var Qe=O(0);function El(e){for(var n=e;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Kf(s)||Qf(s)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ki=0,de=null,Ne=null,ln=null,bl=!1,js=!1,cs=!1,Tl=0,co=0,Zs=null,Iy=0;function je(){throw Error(a(321))}function Xu(e,n){if(n===null)return!1;for(var s=0;s<n.length&&s<e.length;s++)if(!jn(e[s],n[s]))return!1;return!0}function Wu(e,n,s,o,u,d){return ki=d,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=e===null||e.memoizedState===null?om:of,cs=!1,d=s(o,u),cs=!1,js&&(d=Ap(n,s,o,u)),Tp(e),d}function Tp(e){F.H=ho;var n=Ne!==null&&Ne.next!==null;if(ki=0,ln=Ne=de=null,bl=!1,co=0,Zs=null,n)throw Error(a(300));e===null||cn||(e=e.dependencies,e!==null&&ml(e)&&(cn=!0))}function Ap(e,n,s,o){de=e;var u=0;do{if(js&&(Zs=null),co=0,js=!1,25<=u)throw Error(a(301));if(u+=1,ln=Ne=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=lm,d=n(s,o)}while(js);return d}function Fy(){var e=F.H,n=e.useState()[0];return n=typeof n.then=="function"?uo(n):n,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(de.flags|=1024),n}function qu(){var e=Tl!==0;return Tl=0,e}function Yu(e,n,s){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s}function ju(e){if(bl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}bl=!1}ki=0,ln=Ne=de=null,js=!1,co=Tl=0,Zs=null}function On(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?de.memoizedState=ln=e:ln=ln.next=e,ln}function Je(){if(Ne===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var n=ln===null?de.memoizedState:ln.next;if(n!==null)ln=n,Ne=e;else{if(e===null)throw de.alternate===null?Error(a(467)):Error(a(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},ln===null?de.memoizedState=ln=e:ln=ln.next=e}return ln}function Al(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function uo(e){var n=co;return co+=1,Zs===null&&(Zs=[]),e=gp(Zs,e,n),n=de,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?om:of),e}function Rl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return uo(e);if(e.$$typeof===T)return En(e)}throw Error(a(438,String(e)))}function Zu(e){var n=null,s=de.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var o=de.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=Al(),de.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(e),o=0;o<e;o++)s[o]=z;return n.index++,s}function Xi(e,n){return typeof n=="function"?n(e):n}function Cl(e){var n=Je();return Ku(n,Ne,e)}function Ku(e,n,s){var o=e.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=s;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var S=u.next;u.next=d.next,d.next=S}n.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var R=S=null,G=null,lt=n,Mt=!1;do{var At=lt.lane&-536870913;if(At!==lt.lane?(Se&At)===At:(ki&At)===At){var ut=lt.revertLane;if(ut===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:lt.action,hasEagerState:lt.hasEagerState,eagerState:lt.eagerState,next:null}),At===ks&&(Mt=!0);else if((ki&ut)===ut){lt=lt.next,ut===ks&&(Mt=!0);continue}else At={lane:0,revertLane:lt.revertLane,gesture:null,action:lt.action,hasEagerState:lt.hasEagerState,eagerState:lt.eagerState,next:null},G===null?(R=G=At,S=d):G=G.next=At,de.lanes|=ut,Aa|=ut;At=lt.action,cs&&s(d,At),d=lt.hasEagerState?lt.eagerState:s(d,At)}else ut={lane:At,revertLane:lt.revertLane,gesture:lt.gesture,action:lt.action,hasEagerState:lt.hasEagerState,eagerState:lt.eagerState,next:null},G===null?(R=G=ut,S=d):G=G.next=ut,de.lanes|=At,Aa|=At;lt=lt.next}while(lt!==null&&lt!==n);if(G===null?S=d:G.next=R,!jn(d,e.memoizedState)&&(cn=!0,Mt&&(s=Xs,s!==null)))throw s;e.memoizedState=d,e.baseState=S,e.baseQueue=G,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Qu(e){var n=Je(),s=n.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var o=s.dispatch,u=s.pending,d=n.memoizedState;if(u!==null){s.pending=null;var S=u=u.next;do d=e(d,S.action),S=S.next;while(S!==u);jn(d,n.memoizedState)||(cn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),s.lastRenderedState=d}return[d,o]}function Rp(e,n,s){var o=de,u=Je(),d=Ee;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=n();var S=!jn((Ne||u).memoizedState,s);if(S&&(u.memoizedState=s,cn=!0),u=u.queue,tf(Lp.bind(null,o,u,e),[e]),u.getSnapshot!==n||S||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,Ks(9,{destroy:void 0},wp.bind(null,o,u,s,n),null),Ie===null)throw Error(a(349));d||(ki&127)!==0||Cp(o,n,s)}return s}function Cp(e,n,s){e.flags|=16384,e={getSnapshot:n,value:s},n=de.updateQueue,n===null?(n=Al(),de.updateQueue=n,n.stores=[e]):(s=n.stores,s===null?n.stores=[e]:s.push(e))}function wp(e,n,s,o){n.value=s,n.getSnapshot=o,Dp(n)&&Up(e)}function Lp(e,n,s){return s(function(){Dp(n)&&Up(e)})}function Dp(e){var n=e.getSnapshot;e=e.value;try{var s=n();return!jn(e,s)}catch{return!0}}function Up(e){var n=ts(e,2);n!==null&&Wn(n,e,2)}function Ju(e){var n=On();if(typeof e=="function"){var s=e;if(e=s(),cs){ee(!0);try{s()}finally{ee(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:e},n}function Np(e,n,s,o){return e.baseState=s,Ku(e,Ne,typeof o=="function"?o:Xi)}function Hy(e,n,s,o,u){if(Dl(e))throw Error(a(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};F.T!==null?s(!0):d.isTransition=!1,o(d),s=n.pending,s===null?(d.next=n.pending=d,Op(n,d)):(d.next=s.next,n.pending=s.next=d)}}function Op(e,n){var s=n.action,o=n.payload,u=e.state;if(n.isTransition){var d=F.T,S={};F.T=S;try{var R=s(u,o),G=F.S;G!==null&&G(S,R),Pp(e,n,R)}catch(lt){$u(e,n,lt)}finally{d!==null&&S.types!==null&&(d.types=S.types),F.T=d}}else try{d=s(u,o),Pp(e,n,d)}catch(lt){$u(e,n,lt)}}function Pp(e,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){zp(e,n,o)},function(o){return $u(e,n,o)}):zp(e,n,s)}function zp(e,n,s){n.status="fulfilled",n.value=s,Bp(n),e.state=s,n=e.pending,n!==null&&(s=n.next,s===n?e.pending=null:(s=s.next,n.next=s,Op(e,s)))}function $u(e,n,s){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=s,Bp(n),n=n.next;while(n!==o)}e.action=null}function Bp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Ip(e,n){return n}function Fp(e,n){if(Ee){var s=Ie.formState;if(s!==null){t:{var o=de;if(Ee){if(He){e:{for(var u=He,d=ci;u.nodeType!==8;){if(!d){u=null;break e}if(u=fi(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){He=fi(u.nextSibling),o=u.data==="F!";break t}}_a(o)}o=!1}o&&(n=s[0])}}return s=On(),s.memoizedState=s.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ip,lastRenderedState:n},s.queue=o,s=am.bind(null,de,o),o.dispatch=s,o=Ju(!1),d=rf.bind(null,de,!1,o.queue),o=On(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,s=Hy.bind(null,de,u,d,s),u.dispatch=s,o.memoizedState=e,[n,s,!1]}function Hp(e){var n=Je();return Gp(n,Ne,e)}function Gp(e,n,s){if(n=Ku(e,n,Ip)[0],e=Cl(Xi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=uo(n)}catch(S){throw S===Ws?vl:S}else o=n;n=Je();var u=n.queue,d=u.dispatch;return s!==n.memoizedState&&(de.flags|=2048,Ks(9,{destroy:void 0},Gy.bind(null,u,s),null)),[o,d,e]}function Gy(e,n){e.action=n}function Vp(e){var n=Je(),s=Ne;if(s!==null)return Gp(n,s,e);Je(),n=n.memoizedState,s=Je();var o=s.queue.dispatch;return s.memoizedState=e,[n,o,!1]}function Ks(e,n,s,o){return e={tag:e,create:s,deps:o,inst:n,next:null},n=de.updateQueue,n===null&&(n=Al(),de.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=e.next=e:(o=s.next,s.next=e,e.next=o,n.lastEffect=e),e}function kp(){return Je().memoizedState}function wl(e,n,s,o){var u=On();de.flags|=e,u.memoizedState=Ks(1|n,{destroy:void 0},s,o===void 0?null:o)}function Ll(e,n,s,o){var u=Je();o=o===void 0?null:o;var d=u.memoizedState.inst;Ne!==null&&o!==null&&Xu(o,Ne.memoizedState.deps)?u.memoizedState=Ks(n,d,s,o):(de.flags|=e,u.memoizedState=Ks(1|n,d,s,o))}function Xp(e,n){wl(8390656,8,e,n)}function tf(e,n){Ll(2048,8,e,n)}function Vy(e){de.flags|=4;var n=de.updateQueue;if(n===null)n=Al(),de.updateQueue=n,n.events=[e];else{var s=n.events;s===null?n.events=[e]:s.push(e)}}function Wp(e){var n=Je().memoizedState;return Vy({ref:n,nextImpl:e}),function(){if((Ce&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}function qp(e,n){return Ll(4,2,e,n)}function Yp(e,n){return Ll(4,4,e,n)}function jp(e,n){if(typeof n=="function"){e=e();var s=n(e);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Zp(e,n,s){s=s!=null?s.concat([e]):null,Ll(4,4,jp.bind(null,n,e),s)}function ef(){}function Kp(e,n){var s=Je();n=n===void 0?null:n;var o=s.memoizedState;return n!==null&&Xu(n,o[1])?o[0]:(s.memoizedState=[e,n],e)}function Qp(e,n){var s=Je();n=n===void 0?null:n;var o=s.memoizedState;if(n!==null&&Xu(n,o[1]))return o[0];if(o=e(),cs){ee(!0);try{e()}finally{ee(!1)}}return s.memoizedState=[o,n],o}function nf(e,n,s){return s===void 0||(ki&1073741824)!==0&&(Se&261930)===0?e.memoizedState=n:(e.memoizedState=s,e=Jm(),de.lanes|=e,Aa|=e,s)}function Jp(e,n,s,o){return jn(s,n)?s:Ys.current!==null?(e=nf(e,s,o),jn(e,n)||(cn=!0),e):(ki&42)===0||(ki&1073741824)!==0&&(Se&261930)===0?(cn=!0,e.memoizedState=s):(e=Jm(),de.lanes|=e,Aa|=e,n)}function $p(e,n,s,o,u){var d=W.p;W.p=d!==0&&8>d?d:8;var S=F.T,R={};F.T=R,rf(e,!1,n,s);try{var G=u(),lt=F.S;if(lt!==null&&lt(R,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var Mt=By(G,o);fo(e,n,Mt,ti(e))}else fo(e,n,o,ti(e))}catch(At){fo(e,n,{then:function(){},status:"rejected",reason:At},ti())}finally{W.p=d,S!==null&&R.types!==null&&(S.types=R.types),F.T=S}}function ky(){}function af(e,n,s,o){if(e.tag!==5)throw Error(a(476));var u=tm(e).queue;$p(e,u,n,dt,s===null?ky:function(){return em(e),s(o)})}function tm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:dt,baseState:dt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:dt},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:s},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function em(e){var n=tm(e);n.next===null&&(n=e.alternate.memoizedState),fo(e,n.next.queue,{},ti())}function sf(){return En(wo)}function nm(){return Je().memoizedState}function im(){return Je().memoizedState}function Xy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var s=ti();e=xa(s);var o=Sa(n,e,s);o!==null&&(Wn(o,n,s),ro(o,n,s)),n={cache:Nu()},e.payload=n;return}n=n.return}}function Wy(e,n,s){var o=ti();s={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Dl(e)?sm(n,s):(s=Mu(e,n,s,o),s!==null&&(Wn(s,e,o),rm(s,n,o)))}function am(e,n,s){var o=ti();fo(e,n,s,o)}function fo(e,n,s,o){var u={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Dl(e))sm(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var S=n.lastRenderedState,R=d(S,s);if(u.hasEagerState=!0,u.eagerState=R,jn(R,S))return fl(e,n,u,0),Ie===null&&ul(),!1}catch{}finally{}if(s=Mu(e,n,u,o),s!==null)return Wn(s,e,o),rm(s,n,o),!0}return!1}function rf(e,n,s,o){if(o={lane:2,revertLane:If(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Dl(e)){if(n)throw Error(a(479))}else n=Mu(e,s,o,2),n!==null&&Wn(n,e,2)}function Dl(e){var n=e.alternate;return e===de||n!==null&&n===de}function sm(e,n){js=bl=!0;var s=e.pending;s===null?n.next=n:(n.next=s.next,s.next=n),e.pending=n}function rm(e,n,s){if((s&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,s|=o,n.lanes=s,Yn(e,s)}}var ho={readContext:En,use:Rl,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useLayoutEffect:je,useInsertionEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useSyncExternalStore:je,useId:je,useHostTransitionStatus:je,useFormState:je,useActionState:je,useOptimistic:je,useMemoCache:je,useCacheRefresh:je};ho.useEffectEvent=je;var om={readContext:En,use:Rl,useCallback:function(e,n){return On().memoizedState=[e,n===void 0?null:n],e},useContext:En,useEffect:Xp,useImperativeHandle:function(e,n,s){s=s!=null?s.concat([e]):null,wl(4194308,4,jp.bind(null,n,e),s)},useLayoutEffect:function(e,n){return wl(4194308,4,e,n)},useInsertionEffect:function(e,n){wl(4,2,e,n)},useMemo:function(e,n){var s=On();n=n===void 0?null:n;var o=e();if(cs){ee(!0);try{e()}finally{ee(!1)}}return s.memoizedState=[o,n],o},useReducer:function(e,n,s){var o=On();if(s!==void 0){var u=s(n);if(cs){ee(!0);try{s(n)}finally{ee(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Wy.bind(null,de,e),[o.memoizedState,e]},useRef:function(e){var n=On();return e={current:e},n.memoizedState=e},useState:function(e){e=Ju(e);var n=e.queue,s=am.bind(null,de,n);return n.dispatch=s,[e.memoizedState,s]},useDebugValue:ef,useDeferredValue:function(e,n){var s=On();return nf(s,e,n)},useTransition:function(){var e=Ju(!1);return e=$p.bind(null,de,e.queue,!0,!1),On().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,s){var o=de,u=On();if(Ee){if(s===void 0)throw Error(a(407));s=s()}else{if(s=n(),Ie===null)throw Error(a(349));(Se&127)!==0||Cp(o,n,s)}u.memoizedState=s;var d={value:s,getSnapshot:n};return u.queue=d,Xp(Lp.bind(null,o,d,e),[e]),o.flags|=2048,Ks(9,{destroy:void 0},wp.bind(null,o,d,s,n),null),s},useId:function(){var e=On(),n=Ie.identifierPrefix;if(Ee){var s=Li,o=wi;s=(o&~(1<<32-Wt(o)-1)).toString(32)+s,n="_"+n+"R_"+s,s=Tl++,0<s&&(n+="H"+s.toString(32)),n+="_"}else s=Iy++,n="_"+n+"r_"+s.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:sf,useFormState:Fp,useActionState:Fp,useOptimistic:function(e){var n=On();n.memoizedState=n.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=rf.bind(null,de,!0,s),s.dispatch=n,[e,n]},useMemoCache:Zu,useCacheRefresh:function(){return On().memoizedState=Xy.bind(null,de)},useEffectEvent:function(e){var n=On(),s={impl:e};return n.memoizedState=s,function(){if((Ce&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},of={readContext:En,use:Rl,useCallback:Kp,useContext:En,useEffect:tf,useImperativeHandle:Zp,useInsertionEffect:qp,useLayoutEffect:Yp,useMemo:Qp,useReducer:Cl,useRef:kp,useState:function(){return Cl(Xi)},useDebugValue:ef,useDeferredValue:function(e,n){var s=Je();return Jp(s,Ne.memoizedState,e,n)},useTransition:function(){var e=Cl(Xi)[0],n=Je().memoizedState;return[typeof e=="boolean"?e:uo(e),n]},useSyncExternalStore:Rp,useId:nm,useHostTransitionStatus:sf,useFormState:Hp,useActionState:Hp,useOptimistic:function(e,n){var s=Je();return Np(s,Ne,e,n)},useMemoCache:Zu,useCacheRefresh:im};of.useEffectEvent=Wp;var lm={readContext:En,use:Rl,useCallback:Kp,useContext:En,useEffect:tf,useImperativeHandle:Zp,useInsertionEffect:qp,useLayoutEffect:Yp,useMemo:Qp,useReducer:Qu,useRef:kp,useState:function(){return Qu(Xi)},useDebugValue:ef,useDeferredValue:function(e,n){var s=Je();return Ne===null?nf(s,e,n):Jp(s,Ne.memoizedState,e,n)},useTransition:function(){var e=Qu(Xi)[0],n=Je().memoizedState;return[typeof e=="boolean"?e:uo(e),n]},useSyncExternalStore:Rp,useId:nm,useHostTransitionStatus:sf,useFormState:Vp,useActionState:Vp,useOptimistic:function(e,n){var s=Je();return Ne!==null?Np(s,Ne,e,n):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Zu,useCacheRefresh:im};lm.useEffectEvent=Wp;function lf(e,n,s,o){n=e.memoizedState,s=s(o,n),s=s==null?n:_({},n,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var cf={enqueueSetState:function(e,n,s){e=e._reactInternals;var o=ti(),u=xa(o);u.payload=n,s!=null&&(u.callback=s),n=Sa(e,u,o),n!==null&&(Wn(n,e,o),ro(n,e,o))},enqueueReplaceState:function(e,n,s){e=e._reactInternals;var o=ti(),u=xa(o);u.tag=1,u.payload=n,s!=null&&(u.callback=s),n=Sa(e,u,o),n!==null&&(Wn(n,e,o),ro(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var s=ti(),o=xa(s);o.tag=2,n!=null&&(o.callback=n),n=Sa(e,o,s),n!==null&&(Wn(n,e,s),ro(n,e,s))}};function cm(e,n,s,o,u,d,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,S):n.prototype&&n.prototype.isPureReactComponent?!Jr(s,o)||!Jr(u,d):!0}function um(e,n,s,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,o),n.state!==e&&cf.enqueueReplaceState(n,n.state,null)}function us(e,n){var s=n;if("ref"in n){s={};for(var o in n)o!=="ref"&&(s[o]=n[o])}if(e=e.defaultProps){s===n&&(s=_({},s));for(var u in e)s[u]===void 0&&(s[u]=e[u])}return s}function fm(e){cl(e)}function hm(e){console.error(e)}function dm(e){cl(e)}function Ul(e,n){try{var s=e.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function pm(e,n,s){try{var o=e.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function uf(e,n,s){return s=xa(s),s.tag=3,s.payload={element:null},s.callback=function(){Ul(e,n)},s}function mm(e){return e=xa(e),e.tag=3,e}function gm(e,n,s,o){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){pm(n,s,o)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){pm(n,s,o),typeof u!="function"&&(Ra===null?Ra=new Set([this]):Ra.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function qy(e,n,s,o,u){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=s.alternate,n!==null&&Vs(n,s,u,!0),s=Kn.current,s!==null){switch(s.tag){case 31:case 13:return ui===null?Xl():s.alternate===null&&Ze===0&&(Ze=3),s.flags&=-257,s.flags|=65536,s.lanes=u,o===yl?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([o]):n.add(o),Pf(e,o,u)),!1;case 22:return s.flags|=65536,o===yl?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([o]):s.add(o)),Pf(e,o,u)),!1}throw Error(a(435,s.tag))}return Pf(e,o,u),Xl(),!1}if(Ee)return n=Kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Cu&&(e=Error(a(422),{cause:o}),eo(ri(e,s)))):(o!==Cu&&(n=Error(a(423),{cause:o}),eo(ri(n,s))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ri(o,s),u=uf(e.stateNode,o,u),Fu(e,u),Ze!==4&&(Ze=2)),!1;var d=Error(a(520),{cause:o});if(d=ri(d,s),So===null?So=[d]:So.push(d),Ze!==4&&(Ze=2),n===null)return!0;o=ri(o,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,e=u&-u,s.lanes|=e,e=uf(s.stateNode,o,e),Fu(s,e),!1;case 1:if(n=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ra===null||!Ra.has(d))))return s.flags|=65536,u&=-u,s.lanes|=u,u=mm(u),gm(u,e,s,o),Fu(s,u),!1}s=s.return}while(s!==null);return!1}var ff=Error(a(461)),cn=!1;function bn(e,n,s,o){n.child=e===null?xp(n,null,s,o):ls(n,e.child,s,o)}function _m(e,n,s,o,u){s=s.render;var d=n.ref;if("ref"in o){var S={};for(var R in o)R!=="ref"&&(S[R]=o[R])}else S=o;return as(n),o=Wu(e,n,s,S,d,u),R=qu(),e!==null&&!cn?(Yu(e,n,u),Wi(e,n,u)):(Ee&&R&&Au(n),n.flags|=1,bn(e,n,o,u),n.child)}function vm(e,n,s,o,u){if(e===null){var d=s.type;return typeof d=="function"&&!Eu(d)&&d.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=d,ym(e,n,d,o,u)):(e=dl(s.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!yf(e,u)){var S=d.memoizedProps;if(s=s.compare,s=s!==null?s:Jr,s(S,o)&&e.ref===n.ref)return Wi(e,n,u)}return n.flags|=1,e=Fi(d,o),e.ref=n.ref,e.return=n,n.child=e}function ym(e,n,s,o,u){if(e!==null){var d=e.memoizedProps;if(Jr(d,o)&&e.ref===n.ref)if(cn=!1,n.pendingProps=o=d,yf(e,u))(e.flags&131072)!==0&&(cn=!0);else return n.lanes=e.lanes,Wi(e,n,u)}return hf(e,n,s,o,u)}function xm(e,n,s,o){var u=o.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return Sm(e,n,d,s,o)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&_l(n,d!==null?d.cachePool:null),d!==null?Ep(n,d):Gu(),bp(n);else return o=n.lanes=536870912,Sm(e,n,d!==null?d.baseLanes|s:s,s,o)}else d!==null?(_l(n,d.cachePool),Ep(n,d),Ea(),n.memoizedState=null):(e!==null&&_l(n,null),Gu(),Ea());return bn(e,n,u,s),n.child}function po(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Sm(e,n,s,o,u){var d=Pu();return d=d===null?null:{parent:on._currentValue,pool:d},n.memoizedState={baseLanes:s,cachePool:d},e!==null&&_l(n,null),Gu(),bp(n),e!==null&&Vs(e,n,o,!0),n.childLanes=u,null}function Nl(e,n){return n=Pl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Mm(e,n,s){return ls(n,e.child,null,s),e=Nl(n,n.pendingProps),e.flags|=2,Qn(n),n.memoizedState=null,e}function Yy(e,n,s){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ee){if(o.mode==="hidden")return e=Nl(n,o),n.lanes=536870912,po(null,e);if(ku(n),(e=He)?(e=O0(e,ci),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ma!==null?{id:wi,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},s=sp(e),s.return=n,n.child=s,Mn=n,He=null)):e=null,e===null)throw _a(n);return n.lanes=536870912,null}return Nl(n,o)}var d=e.memoizedState;if(d!==null){var S=d.dehydrated;if(ku(n),u)if(n.flags&256)n.flags&=-257,n=Mm(e,n,s);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(a(558));else if(cn||Vs(e,n,s,!1),u=(s&e.childLanes)!==0,cn||u){if(o=Ie,o!==null&&(S=Ir(o,s),S!==0&&S!==d.retryLane))throw d.retryLane=S,ts(e,S),Wn(o,e,S),ff;Xl(),n=Mm(e,n,s)}else e=d.treeContext,He=fi(S.nextSibling),Mn=n,Ee=!0,ga=null,ci=!1,e!==null&&lp(n,e),n=Nl(n,o),n.flags|=4096;return n}return e=Fi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ol(e,n){var s=n.ref;if(s===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(n.flags|=4194816)}}function hf(e,n,s,o,u){return as(n),s=Wu(e,n,s,o,void 0,u),o=qu(),e!==null&&!cn?(Yu(e,n,u),Wi(e,n,u)):(Ee&&o&&Au(n),n.flags|=1,bn(e,n,s,u),n.child)}function Em(e,n,s,o,u,d){return as(n),n.updateQueue=null,s=Ap(n,o,s,u),Tp(e),o=qu(),e!==null&&!cn?(Yu(e,n,d),Wi(e,n,d)):(Ee&&o&&Au(n),n.flags|=1,bn(e,n,s,d),n.child)}function bm(e,n,s,o,u){if(as(n),n.stateNode===null){var d=Is,S=s.contextType;typeof S=="object"&&S!==null&&(d=En(S)),d=new s(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=cf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Bu(n),S=s.contextType,d.context=typeof S=="object"&&S!==null?En(S):Is,d.state=n.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(lf(n,s,S,o),d.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&cf.enqueueReplaceState(d,d.state,null),lo(n,o,d,u),oo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var R=n.memoizedProps,G=us(s,R);d.props=G;var lt=d.context,Mt=s.contextType;S=Is,typeof Mt=="object"&&Mt!==null&&(S=En(Mt));var At=s.getDerivedStateFromProps;Mt=typeof At=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,Mt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||lt!==S)&&um(n,d,o,S),ya=!1;var ut=n.memoizedState;d.state=ut,lo(n,o,d,u),oo(),lt=n.memoizedState,R||ut!==lt||ya?(typeof At=="function"&&(lf(n,s,At,o),lt=n.memoizedState),(G=ya||cm(n,s,G,o,ut,lt,S))?(Mt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=lt),d.props=o,d.state=lt,d.context=S,o=G):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Iu(e,n),S=n.memoizedProps,Mt=us(s,S),d.props=Mt,At=n.pendingProps,ut=d.context,lt=s.contextType,G=Is,typeof lt=="object"&&lt!==null&&(G=En(lt)),R=s.getDerivedStateFromProps,(lt=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==At||ut!==G)&&um(n,d,o,G),ya=!1,ut=n.memoizedState,d.state=ut,lo(n,o,d,u),oo();var mt=n.memoizedState;S!==At||ut!==mt||ya||e!==null&&e.dependencies!==null&&ml(e.dependencies)?(typeof R=="function"&&(lf(n,s,R,o),mt=n.memoizedState),(Mt=ya||cm(n,s,Mt,o,ut,mt,G)||e!==null&&e.dependencies!==null&&ml(e.dependencies))?(lt||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,mt,G),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,mt,G)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&ut===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ut===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=mt),d.props=o,d.state=mt,d.context=G,o=Mt):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&ut===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ut===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,Ol(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=ls(n,e.child,null,u),n.child=ls(n,null,s,u)):bn(e,n,s,u),n.memoizedState=d.state,e=n.child):e=Wi(e,n,u),e}function Tm(e,n,s,o){return ns(),n.flags|=256,bn(e,n,s,o),n.child}var df={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pf(e){return{baseLanes:e,cachePool:pp()}}function mf(e,n,s){return e=e!==null?e.childLanes&~s:0,n&&(e|=$n),e}function Am(e,n,s){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,S;if((S=d)||(S=e!==null&&e.memoizedState===null?!1:(Qe.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ee){if(u?Ma(n):Ea(),(e=He)?(e=O0(e,ci),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ma!==null?{id:wi,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},s=sp(e),s.return=n,n.child=s,Mn=n,He=null)):e=null,e===null)throw _a(n);return Qf(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Ea(),u=n.mode,R=Pl({mode:"hidden",children:R},u),o=es(o,u,s,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=pf(s),o.childLanes=mf(e,S,s),n.memoizedState=df,po(null,o)):(Ma(n),gf(n,R))}var G=e.memoizedState;if(G!==null&&(R=G.dehydrated,R!==null)){if(d)n.flags&256?(Ma(n),n.flags&=-257,n=_f(e,n,s)):n.memoizedState!==null?(Ea(),n.child=e.child,n.flags|=128,n=null):(Ea(),R=o.fallback,u=n.mode,o=Pl({mode:"visible",children:o.children},u),R=es(R,u,s,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,ls(n,e.child,null,s),o=n.child,o.memoizedState=pf(s),o.childLanes=mf(e,S,s),n.memoizedState=df,n=po(null,o));else if(Ma(n),Qf(R)){if(S=R.nextSibling&&R.nextSibling.dataset,S)var lt=S.dgst;S=lt,o=Error(a(419)),o.stack="",o.digest=S,eo({value:o,source:null,stack:null}),n=_f(e,n,s)}else if(cn||Vs(e,n,s,!1),S=(s&e.childLanes)!==0,cn||S){if(S=Ie,S!==null&&(o=Ir(S,s),o!==0&&o!==G.retryLane))throw G.retryLane=o,ts(e,o),Wn(S,e,o),ff;Kf(R)||Xl(),n=_f(e,n,s)}else Kf(R)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,He=fi(R.nextSibling),Mn=n,Ee=!0,ga=null,ci=!1,e!==null&&lp(n,e),n=gf(n,o.children),n.flags|=4096);return n}return u?(Ea(),R=o.fallback,u=n.mode,G=e.child,lt=G.sibling,o=Fi(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,lt!==null?R=Fi(lt,R):(R=es(R,u,s,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,po(null,o),o=n.child,R=e.child.memoizedState,R===null?R=pf(s):(u=R.cachePool,u!==null?(G=on._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=pp(),R={baseLanes:R.baseLanes|s,cachePool:u}),o.memoizedState=R,o.childLanes=mf(e,S,s),n.memoizedState=df,po(e.child,o)):(Ma(n),s=e.child,e=s.sibling,s=Fi(s,{mode:"visible",children:o.children}),s.return=n,s.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=s,n.memoizedState=null,s)}function gf(e,n){return n=Pl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Pl(e,n){return e=Zn(22,e,null,n),e.lanes=0,e}function _f(e,n,s){return ls(n,e.child,null,s),e=gf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Rm(e,n,s){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Du(e.return,n,s)}function vf(e,n,s,o,u,d){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:u,treeForkCount:d}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=s,S.tailMode=u,S.treeForkCount=d)}function Cm(e,n,s){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var S=Qe.current,R=(S&2)!==0;if(R?(S=S&1|2,n.flags|=128):S&=1,V(Qe,S),bn(e,n,o,s),o=Ee?to:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rm(e,s,n);else if(e.tag===19)Rm(e,s,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(s=n.child,u=null;s!==null;)e=s.alternate,e!==null&&El(e)===null&&(u=s),s=s.sibling;s=u,s===null?(u=n.child,n.child=null):(u=s.sibling,s.sibling=null),vf(n,!1,u,s,d,o);break;case"backwards":case"unstable_legacy-backwards":for(s=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&El(e)===null){n.child=u;break}e=u.sibling,u.sibling=s,s=u,u=e}vf(n,!0,s,null,d,o);break;case"together":vf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Wi(e,n,s){if(e!==null&&(n.dependencies=e.dependencies),Aa|=n.lanes,(s&n.childLanes)===0)if(e!==null){if(Vs(e,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,s=Fi(e,e.pendingProps),n.child=s,s.return=n;e.sibling!==null;)e=e.sibling,s=s.sibling=Fi(e,e.pendingProps),s.return=n;s.sibling=null}return n.child}function yf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ml(e)))}function jy(e,n,s){switch(n.tag){case 3:J(n,n.stateNode.containerInfo),va(n,on,e.memoizedState.cache),ns();break;case 27:case 5:_t(n);break;case 4:J(n,n.stateNode.containerInfo);break;case 10:va(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ku(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ma(n),n.flags|=128,null):(s&n.child.childLanes)!==0?Am(e,n,s):(Ma(n),e=Wi(e,n,s),e!==null?e.sibling:null);Ma(n);break;case 19:var u=(e.flags&128)!==0;if(o=(s&n.childLanes)!==0,o||(Vs(e,n,s,!1),o=(s&n.childLanes)!==0),u){if(o)return Cm(e,n,s);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),V(Qe,Qe.current),o)break;return null;case 22:return n.lanes=0,xm(e,n,s,n.pendingProps);case 24:va(n,on,e.memoizedState.cache)}return Wi(e,n,s)}function wm(e,n,s){if(e!==null)if(e.memoizedProps!==n.pendingProps)cn=!0;else{if(!yf(e,s)&&(n.flags&128)===0)return cn=!1,jy(e,n,s);cn=(e.flags&131072)!==0}else cn=!1,Ee&&(n.flags&1048576)!==0&&op(n,to,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=rs(n.elementType),n.type=e,typeof e=="function")Eu(e)?(o=us(e,o),n.tag=1,n=bm(null,n,e,o,s)):(n.tag=0,n=hf(null,n,e,o,s));else{if(e!=null){var u=e.$$typeof;if(u===L){n.tag=11,n=_m(null,n,e,o,s);break t}else if(u===N){n.tag=14,n=vm(null,n,e,o,s);break t}}throw n=H(e)||e,Error(a(306,n,""))}}return n;case 0:return hf(e,n,n.type,n.pendingProps,s);case 1:return o=n.type,u=us(o,n.pendingProps),bm(e,n,o,u,s);case 3:t:{if(J(n,n.stateNode.containerInfo),e===null)throw Error(a(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Iu(e,n),lo(n,o,null,s);var S=n.memoizedState;if(o=S.cache,va(n,on,o),o!==d.cache&&Uu(n,[on],s,!0),oo(),o=S.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=Tm(e,n,o,s);break t}else if(o!==u){u=ri(Error(a(424)),n),eo(u),n=Tm(e,n,o,s);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(He=fi(e.firstChild),Mn=n,Ee=!0,ga=null,ci=!0,s=xp(n,null,o,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(ns(),o===u){n=Wi(e,n,s);break t}bn(e,n,o,s)}n=n.child}return n;case 26:return Ol(e,n),e===null?(s=H0(n.type,null,n.pendingProps,null))?n.memoizedState=s:Ee||(s=n.type,e=n.pendingProps,o=Ql(Dt.current).createElement(s),o[nn]=n,o[Cn]=e,Tn(o,s,e),$t(o),n.stateNode=o):n.memoizedState=H0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return _t(n),e===null&&Ee&&(o=n.stateNode=B0(n.type,n.pendingProps,Dt.current),Mn=n,ci=!0,u=He,Da(n.type)?(Jf=u,He=fi(o.firstChild)):He=u),bn(e,n,n.pendingProps.children,s),Ol(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ee&&((u=o=He)&&(o=bx(o,n.type,n.pendingProps,ci),o!==null?(n.stateNode=o,Mn=n,He=fi(o.firstChild),ci=!1,u=!0):u=!1),u||_a(n)),_t(n),u=n.type,d=n.pendingProps,S=e!==null?e.memoizedProps:null,o=d.children,Yf(u,d)?o=null:S!==null&&Yf(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=Wu(e,n,Fy,null,null,s),wo._currentValue=u),Ol(e,n),bn(e,n,o,s),n.child;case 6:return e===null&&Ee&&((e=s=He)&&(s=Tx(s,n.pendingProps,ci),s!==null?(n.stateNode=s,Mn=n,He=null,e=!0):e=!1),e||_a(n)),null;case 13:return Am(e,n,s);case 4:return J(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=ls(n,null,o,s):bn(e,n,o,s),n.child;case 11:return _m(e,n,n.type,n.pendingProps,s);case 7:return bn(e,n,n.pendingProps,s),n.child;case 8:return bn(e,n,n.pendingProps.children,s),n.child;case 12:return bn(e,n,n.pendingProps.children,s),n.child;case 10:return o=n.pendingProps,va(n,n.type,o.value),bn(e,n,o.children,s),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,as(n),u=En(u),o=o(u),n.flags|=1,bn(e,n,o,s),n.child;case 14:return vm(e,n,n.type,n.pendingProps,s);case 15:return ym(e,n,n.type,n.pendingProps,s);case 19:return Cm(e,n,s);case 31:return Yy(e,n,s);case 22:return xm(e,n,s,n.pendingProps);case 24:return as(n),o=En(on),e===null?(u=Pu(),u===null&&(u=Ie,d=Nu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=s),u=d),n.memoizedState={parent:o,cache:u},Bu(n),va(n,on,u)):((e.lanes&s)!==0&&(Iu(e,n),lo(n,null,null,s),oo()),u=e.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),va(n,on,o)):(o=d.cache,va(n,on,o),o!==u.cache&&Uu(n,[on],s,!0))),bn(e,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function qi(e){e.flags|=4}function xf(e,n,s,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(n0())e.flags|=8192;else throw os=yl,zu}else e.flags&=-16777217}function Lm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!W0(n))if(n0())e.flags|=8192;else throw os=yl,zu}function zl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?pe():536870912,e.lanes|=n,tr|=n)}function mo(e,n){if(!Ee)switch(e.tailMode){case"hidden":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ge(e){var n=e.alternate!==null&&e.alternate.child===e.child,s=0,o=0;if(n)for(var u=e.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=s,n}function Zy(e,n,s){var o=n.pendingProps;switch(Ru(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(n),null;case 1:return Ge(n),null;case 3:return s=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Vi(on),nt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Gs(n)?qi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,wu())),Ge(n),null;case 26:var u=n.type,d=n.memoizedState;return e===null?(qi(n),d!==null?(Ge(n),Lm(n,d)):(Ge(n),xf(n,u,null,o,s))):d?d!==e.memoizedState?(qi(n),Ge(n),Lm(n,d)):(Ge(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&qi(n),Ge(n),xf(n,u,e,o,s)),null;case 27:if(yt(n),s=Dt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&qi(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return Ge(n),null}e=et.current,Gs(n)?cp(n):(e=B0(u,o,s),n.stateNode=e,qi(n))}return Ge(n),null;case 5:if(yt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&qi(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return Ge(n),null}if(d=et.current,Gs(n))cp(n);else{var S=Ql(Dt.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}d[nn]=n,d[Cn]=o;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=d;t:switch(Tn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&qi(n)}}return Ge(n),xf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,s),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&qi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(a(166));if(e=Dt.current,Gs(n)){if(e=n.stateNode,s=n.memoizedProps,o=null,u=Mn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[nn]=n,e=!!(e.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||A0(e.nodeValue,s)),e||_a(n,!0)}else e=Ql(e).createTextNode(o),e[nn]=n,n.stateNode=e}return Ge(n),null;case 31:if(s=n.memoizedState,e===null||e.memoizedState!==null){if(o=Gs(n),s!==null){if(e===null){if(!o)throw Error(a(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[nn]=n}else ns(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ge(n),e=!1}else s=wu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return n.flags&256?(Qn(n),n):(Qn(n),null);if((n.flags&128)!==0)throw Error(a(558))}return Ge(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Gs(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(a(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[nn]=n}else ns(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ge(n),u=!1}else u=wu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Qn(n),n):(Qn(n),null)}return Qn(n),(n.flags&128)!==0?(n.lanes=s,n):(s=o!==null,e=e!==null&&e.memoizedState!==null,s&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),s!==e&&s&&(n.child.flags|=8192),zl(n,n.updateQueue),Ge(n),null);case 4:return nt(),e===null&&Vf(n.stateNode.containerInfo),Ge(n),null;case 10:return Vi(n.type),Ge(n),null;case 19:if(Y(Qe),o=n.memoizedState,o===null)return Ge(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)mo(o,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=El(e),d!==null){for(n.flags|=128,mo(o,!1),e=d.updateQueue,n.updateQueue=e,zl(n,e),n.subtreeFlags=0,e=s,s=n.child;s!==null;)ap(s,e),s=s.sibling;return V(Qe,Qe.current&1|2),Ee&&Hi(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&A()>Gl&&(n.flags|=128,u=!0,mo(o,!1),n.lanes=4194304)}else{if(!u)if(e=El(d),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,zl(n,e),mo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Ee)return Ge(n),null}else 2*A()-o.renderingStartTime>Gl&&s!==536870912&&(n.flags|=128,u=!0,mo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(e=o.last,e!==null?e.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=A(),e.sibling=null,s=Qe.current,V(Qe,u?s&1|2:s&1),Ee&&Hi(n,o.treeForkCount),e):(Ge(n),null);case 22:case 23:return Qn(n),Vu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(s&536870912)!==0&&(n.flags&128)===0&&(Ge(n),n.subtreeFlags&6&&(n.flags|=8192)):Ge(n),s=n.updateQueue,s!==null&&zl(n,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==s&&(n.flags|=2048),e!==null&&Y(ss),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Vi(on),Ge(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function Ky(e,n){switch(Ru(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Vi(on),nt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return yt(n),null;case 31:if(n.memoizedState!==null){if(Qn(n),n.alternate===null)throw Error(a(340));ns()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Qn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));ns()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Y(Qe),null;case 4:return nt(),null;case 10:return Vi(n.type),null;case 22:case 23:return Qn(n),Vu(),e!==null&&Y(ss),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Vi(on),null;case 25:return null;default:return null}}function Dm(e,n){switch(Ru(n),n.tag){case 3:Vi(on),nt();break;case 26:case 27:case 5:yt(n);break;case 4:nt();break;case 31:n.memoizedState!==null&&Qn(n);break;case 13:Qn(n);break;case 19:Y(Qe);break;case 10:Vi(n.type);break;case 22:case 23:Qn(n),Vu(),e!==null&&Y(ss);break;case 24:Vi(on)}}function go(e,n){try{var s=n.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var u=o.next;s=u;do{if((s.tag&e)===e){o=void 0;var d=s.create,S=s.inst;o=d(),S.destroy=o}s=s.next}while(s!==u)}}catch(R){De(n,n.return,R)}}function ba(e,n,s){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var S=o.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,u=n;var G=s,lt=R;try{lt()}catch(Mt){De(u,G,Mt)}}}o=o.next}while(o!==d)}}catch(Mt){De(n,n.return,Mt)}}function Um(e){var n=e.updateQueue;if(n!==null){var s=e.stateNode;try{Mp(n,s)}catch(o){De(e,e.return,o)}}}function Nm(e,n,s){s.props=us(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(o){De(e,n,o)}}function _o(e,n){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof s=="function"?e.refCleanup=s(o):s.current=o}}catch(u){De(e,n,u)}}function Di(e,n){var s=e.ref,o=e.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(u){De(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){De(e,n,u)}else s.current=null}function Om(e){var n=e.type,s=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break t;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(u){De(e,e.return,u)}}function Sf(e,n,s){try{var o=e.stateNode;vx(o,e.type,s,n),o[Cn]=n}catch(u){De(e,e.return,u)}}function Pm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Da(e.type)||e.tag===4}function Mf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Pm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Da(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ef(e,n,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(e),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=Bi));else if(o!==4&&(o===27&&Da(e.type)&&(s=e.stateNode,n=null),e=e.child,e!==null))for(Ef(e,n,s),e=e.sibling;e!==null;)Ef(e,n,s),e=e.sibling}function Bl(e,n,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?s.insertBefore(e,n):s.appendChild(e);else if(o!==4&&(o===27&&Da(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(Bl(e,n,s),e=e.sibling;e!==null;)Bl(e,n,s),e=e.sibling}function zm(e){var n=e.stateNode,s=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Tn(n,o,s),n[nn]=e,n[Cn]=s}catch(d){De(e,e.return,d)}}var Yi=!1,un=!1,bf=!1,Bm=typeof WeakSet=="function"?WeakSet:Set,_n=null;function Qy(e,n){if(e=e.containerInfo,Wf=ac,e=Zd(e),gu(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break t}var S=0,R=-1,G=-1,lt=0,Mt=0,At=e,ut=null;e:for(;;){for(var mt;At!==s||u!==0&&At.nodeType!==3||(R=S+u),At!==d||o!==0&&At.nodeType!==3||(G=S+o),At.nodeType===3&&(S+=At.nodeValue.length),(mt=At.firstChild)!==null;)ut=At,At=mt;for(;;){if(At===e)break e;if(ut===s&&++lt===u&&(R=S),ut===d&&++Mt===o&&(G=S),(mt=At.nextSibling)!==null)break;At=ut,ut=At.parentNode}At=mt}s=R===-1||G===-1?null:{start:R,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for(qf={focusedElem:e,selectionRange:s},ac=!1,_n=n;_n!==null;)if(n=_n,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,_n=e;else for(;_n!==null;){switch(n=_n,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)u=e[s],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,s=n,u=d.memoizedProps,d=d.memoizedState,o=s.stateNode;try{var Yt=us(s.type,u);e=o.getSnapshotBeforeUpdate(Yt,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(oe){De(s,s.return,oe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,s=e.nodeType,s===9)Zf(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Zf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,_n=e;break}_n=n.return}}function Im(e,n,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:Zi(e,s),o&4&&go(5,s);break;case 1:if(Zi(e,s),o&4)if(e=s.stateNode,n===null)try{e.componentDidMount()}catch(S){De(s,s.return,S)}else{var u=us(s.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){De(s,s.return,S)}}o&64&&Um(s),o&512&&_o(s,s.return);break;case 3:if(Zi(e,s),o&64&&(e=s.updateQueue,e!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{Mp(e,n)}catch(S){De(s,s.return,S)}}break;case 27:n===null&&o&4&&zm(s);case 26:case 5:Zi(e,s),n===null&&o&4&&Om(s),o&512&&_o(s,s.return);break;case 12:Zi(e,s);break;case 31:Zi(e,s),o&4&&Gm(e,s);break;case 13:Zi(e,s),o&4&&Vm(e,s),o&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=rx.bind(null,s),Ax(e,s))));break;case 22:if(o=s.memoizedState!==null||Yi,!o){n=n!==null&&n.memoizedState!==null||un,u=Yi;var d=un;Yi=o,(un=n)&&!d?Ki(e,s,(s.subtreeFlags&8772)!==0):Zi(e,s),Yi=u,un=d}break;case 30:break;default:Zi(e,s)}}function Fm(e){var n=e.alternate;n!==null&&(e.alternate=null,Fm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ht(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Xe=null,Gn=!1;function ji(e,n,s){for(s=s.child;s!==null;)Hm(e,n,s),s=s.sibling}function Hm(e,n,s){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(zt,s)}catch{}switch(s.tag){case 26:un||Di(s,n),ji(e,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:un||Di(s,n);var o=Xe,u=Gn;Da(s.type)&&(Xe=s.stateNode,Gn=!1),ji(e,n,s),Ao(s.stateNode),Xe=o,Gn=u;break;case 5:un||Di(s,n);case 6:if(o=Xe,u=Gn,Xe=null,ji(e,n,s),Xe=o,Gn=u,Xe!==null)if(Gn)try{(Xe.nodeType===9?Xe.body:Xe.nodeName==="HTML"?Xe.ownerDocument.body:Xe).removeChild(s.stateNode)}catch(d){De(s,n,d)}else try{Xe.removeChild(s.stateNode)}catch(d){De(s,n,d)}break;case 18:Xe!==null&&(Gn?(e=Xe,U0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),lr(e)):U0(Xe,s.stateNode));break;case 4:o=Xe,u=Gn,Xe=s.stateNode.containerInfo,Gn=!0,ji(e,n,s),Xe=o,Gn=u;break;case 0:case 11:case 14:case 15:ba(2,s,n),un||ba(4,s,n),ji(e,n,s);break;case 1:un||(Di(s,n),o=s.stateNode,typeof o.componentWillUnmount=="function"&&Nm(s,n,o)),ji(e,n,s);break;case 21:ji(e,n,s);break;case 22:un=(o=un)||s.memoizedState!==null,ji(e,n,s),un=o;break;default:ji(e,n,s)}}function Gm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{lr(e)}catch(s){De(n,n.return,s)}}}function Vm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{lr(e)}catch(s){De(n,n.return,s)}}function Jy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Bm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Bm),n;default:throw Error(a(435,e.tag))}}function Il(e,n){var s=Jy(e);n.forEach(function(o){if(!s.has(o)){s.add(o);var u=ox.bind(null,e,o);o.then(u,u)}})}function Vn(e,n){var s=n.deletions;if(s!==null)for(var o=0;o<s.length;o++){var u=s[o],d=e,S=n,R=S;t:for(;R!==null;){switch(R.tag){case 27:if(Da(R.type)){Xe=R.stateNode,Gn=!1;break t}break;case 5:Xe=R.stateNode,Gn=!1;break t;case 3:case 4:Xe=R.stateNode.containerInfo,Gn=!0;break t}R=R.return}if(Xe===null)throw Error(a(160));Hm(d,S,u),Xe=null,Gn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)km(n,e),n=n.sibling}var xi=null;function km(e,n){var s=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Vn(n,e),kn(e),o&4&&(ba(3,e,e.return),go(3,e),ba(5,e,e.return));break;case 1:Vn(n,e),kn(e),o&512&&(un||s===null||Di(s,s.return)),o&64&&Yi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var u=xi;if(Vn(n,e),kn(e),o&512&&(un||s===null||Di(s,s.return)),o&4){var d=s!==null?s.memoizedState:null;if(o=e.memoizedState,s===null)if(o===null)if(e.stateNode===null){t:{o=e.type,s=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[gt]||d[nn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Tn(d,o,s),d[nn]=e,$t(d),o=d;break t;case"link":var S=k0("link","href",u).get(o+(s.href||""));if(S){for(var R=0;R<S.length;R++)if(d=S[R],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(R,1);break e}}d=u.createElement(o),Tn(d,o,s),u.head.appendChild(d);break;case"meta":if(S=k0("meta","content",u).get(o+(s.content||""))){for(R=0;R<S.length;R++)if(d=S[R],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(R,1);break e}}d=u.createElement(o),Tn(d,o,s),u.head.appendChild(d);break;default:throw Error(a(468,o))}d[nn]=e,$t(d),o=d}e.stateNode=o}else X0(u,e.type,e.stateNode);else e.stateNode=V0(u,o,e.memoizedProps);else d!==o?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,o===null?X0(u,e.type,e.stateNode):V0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Sf(e,e.memoizedProps,s.memoizedProps)}break;case 27:Vn(n,e),kn(e),o&512&&(un||s===null||Di(s,s.return)),s!==null&&o&4&&Sf(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Vn(n,e),kn(e),o&512&&(un||s===null||Di(s,s.return)),e.flags&32){u=e.stateNode;try{Ds(u,"")}catch(Yt){De(e,e.return,Yt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Sf(e,u,s!==null?s.memoizedProps:u)),o&1024&&(bf=!0);break;case 6:if(Vn(n,e),kn(e),o&4){if(e.stateNode===null)throw Error(a(162));o=e.memoizedProps,s=e.stateNode;try{s.nodeValue=o}catch(Yt){De(e,e.return,Yt)}}break;case 3:if(tc=null,u=xi,xi=Jl(n.containerInfo),Vn(n,e),xi=u,kn(e),o&4&&s!==null&&s.memoizedState.isDehydrated)try{lr(n.containerInfo)}catch(Yt){De(e,e.return,Yt)}bf&&(bf=!1,Xm(e));break;case 4:o=xi,xi=Jl(e.stateNode.containerInfo),Vn(n,e),kn(e),xi=o;break;case 12:Vn(n,e),kn(e);break;case 31:Vn(n,e),kn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Il(e,o)));break;case 13:Vn(n,e),kn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Hl=A()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Il(e,o)));break;case 22:u=e.memoizedState!==null;var G=s!==null&&s.memoizedState!==null,lt=Yi,Mt=un;if(Yi=lt||u,un=Mt||G,Vn(n,e),un=Mt,Yi=lt,kn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(s===null||G||Yi||un||fs(e)),s=null,n=e;;){if(n.tag===5||n.tag===26){if(s===null){G=s=n;try{if(d=G.stateNode,u)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{R=G.stateNode;var At=G.memoizedProps.style,ut=At!=null&&At.hasOwnProperty("display")?At.display:null;R.style.display=ut==null||typeof ut=="boolean"?"":(""+ut).trim()}}catch(Yt){De(G,G.return,Yt)}}}else if(n.tag===6){if(s===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Yt){De(G,G.return,Yt)}}}else if(n.tag===18){if(s===null){G=n;try{var mt=G.stateNode;u?N0(mt,!0):N0(G.stateNode,!1)}catch(Yt){De(G,G.return,Yt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,Il(e,s))));break;case 19:Vn(n,e),kn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Il(e,o)));break;case 30:break;case 21:break;default:Vn(n,e),kn(e)}}function kn(e){var n=e.flags;if(n&2){try{for(var s,o=e.return;o!==null;){if(Pm(o)){s=o;break}o=o.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var u=s.stateNode,d=Mf(e);Bl(e,d,u);break;case 5:var S=s.stateNode;s.flags&32&&(Ds(S,""),s.flags&=-33);var R=Mf(e);Bl(e,R,S);break;case 3:case 4:var G=s.stateNode.containerInfo,lt=Mf(e);Ef(e,lt,G);break;default:throw Error(a(161))}}catch(Mt){De(e,e.return,Mt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Xm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Xm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Zi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Im(e,n.alternate,n),n=n.sibling}function fs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ba(4,n,n.return),fs(n);break;case 1:Di(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&Nm(n,n.return,s),fs(n);break;case 27:Ao(n.stateNode);case 26:case 5:Di(n,n.return),fs(n);break;case 22:n.memoizedState===null&&fs(n);break;case 30:fs(n);break;default:fs(n)}e=e.sibling}}function Ki(e,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,d=n,S=d.flags;switch(d.tag){case 0:case 11:case 15:Ki(u,d,s),go(4,d);break;case 1:if(Ki(u,d,s),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(lt){De(o,o.return,lt)}if(o=d,u=o.updateQueue,u!==null){var R=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)Sp(G[u],R)}catch(lt){De(o,o.return,lt)}}s&&S&64&&Um(d),_o(d,d.return);break;case 27:zm(d);case 26:case 5:Ki(u,d,s),s&&o===null&&S&4&&Om(d),_o(d,d.return);break;case 12:Ki(u,d,s);break;case 31:Ki(u,d,s),s&&S&4&&Gm(u,d);break;case 13:Ki(u,d,s),s&&S&4&&Vm(u,d);break;case 22:d.memoizedState===null&&Ki(u,d,s),_o(d,d.return);break;case 30:break;default:Ki(u,d,s)}n=n.sibling}}function Tf(e,n){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&no(s))}function Af(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&no(e))}function Si(e,n,s,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Wm(e,n,s,o),n=n.sibling}function Wm(e,n,s,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Si(e,n,s,o),u&2048&&go(9,n);break;case 1:Si(e,n,s,o);break;case 3:Si(e,n,s,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&no(e)));break;case 12:if(u&2048){Si(e,n,s,o),e=n.stateNode;try{var d=n.memoizedProps,S=d.id,R=d.onPostCommit;typeof R=="function"&&R(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){De(n,n.return,G)}}else Si(e,n,s,o);break;case 31:Si(e,n,s,o);break;case 13:Si(e,n,s,o);break;case 23:break;case 22:d=n.stateNode,S=n.alternate,n.memoizedState!==null?d._visibility&2?Si(e,n,s,o):vo(e,n):d._visibility&2?Si(e,n,s,o):(d._visibility|=2,Qs(e,n,s,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Tf(S,n);break;case 24:Si(e,n,s,o),u&2048&&Af(n.alternate,n);break;default:Si(e,n,s,o)}}function Qs(e,n,s,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,S=n,R=s,G=o,lt=S.flags;switch(S.tag){case 0:case 11:case 15:Qs(d,S,R,G,u),go(8,S);break;case 23:break;case 22:var Mt=S.stateNode;S.memoizedState!==null?Mt._visibility&2?Qs(d,S,R,G,u):vo(d,S):(Mt._visibility|=2,Qs(d,S,R,G,u)),u&&lt&2048&&Tf(S.alternate,S);break;case 24:Qs(d,S,R,G,u),u&&lt&2048&&Af(S.alternate,S);break;default:Qs(d,S,R,G,u)}n=n.sibling}}function vo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=e,o=n,u=o.flags;switch(o.tag){case 22:vo(s,o),u&2048&&Tf(o.alternate,o);break;case 24:vo(s,o),u&2048&&Af(o.alternate,o);break;default:vo(s,o)}n=n.sibling}}var yo=8192;function Js(e,n,s){if(e.subtreeFlags&yo)for(e=e.child;e!==null;)qm(e,n,s),e=e.sibling}function qm(e,n,s){switch(e.tag){case 26:Js(e,n,s),e.flags&yo&&e.memoizedState!==null&&Ix(s,xi,e.memoizedState,e.memoizedProps);break;case 5:Js(e,n,s);break;case 3:case 4:var o=xi;xi=Jl(e.stateNode.containerInfo),Js(e,n,s),xi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=yo,yo=16777216,Js(e,n,s),yo=o):Js(e,n,s));break;default:Js(e,n,s)}}function Ym(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function xo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var o=n[s];_n=o,Zm(o,e)}Ym(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)jm(e),e=e.sibling}function jm(e){switch(e.tag){case 0:case 11:case 15:xo(e),e.flags&2048&&ba(9,e,e.return);break;case 3:xo(e);break;case 12:xo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Fl(e)):xo(e);break;default:xo(e)}}function Fl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var o=n[s];_n=o,Zm(o,e)}Ym(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ba(8,n,n.return),Fl(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,Fl(n));break;default:Fl(n)}e=e.sibling}}function Zm(e,n){for(;_n!==null;){var s=_n;switch(s.tag){case 0:case 11:case 15:ba(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:no(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,_n=o;else t:for(s=e;_n!==null;){o=_n;var u=o.sibling,d=o.return;if(Fm(o),o===s){_n=null;break t}if(u!==null){u.return=d,_n=u;break t}_n=d}}}var $y={getCacheForType:function(e){var n=En(on),s=n.data.get(e);return s===void 0&&(s=e(),n.data.set(e,s)),s},cacheSignal:function(){return En(on).controller.signal}},tx=typeof WeakMap=="function"?WeakMap:Map,Ce=0,Ie=null,ye=null,Se=0,Le=0,Jn=null,Ta=!1,$s=!1,Rf=!1,Qi=0,Ze=0,Aa=0,hs=0,Cf=0,$n=0,tr=0,So=null,Xn=null,wf=!1,Hl=0,Km=0,Gl=1/0,Vl=null,Ra=null,dn=0,Ca=null,er=null,Ji=0,Lf=0,Df=null,Qm=null,Mo=0,Uf=null;function ti(){return(Ce&2)!==0&&Se!==0?Se&-Se:F.T!==null?If():Hr()}function Jm(){if($n===0)if((Se&536870912)===0||Ee){var e=j;j<<=1,(j&3932160)===0&&(j=262144),$n=e}else $n=536870912;return e=Kn.current,e!==null&&(e.flags|=32),$n}function Wn(e,n,s){(e===Ie&&(Le===2||Le===9)||e.cancelPendingCommit!==null)&&(nr(e,0),wa(e,Se,$n,!1)),Ke(e,s),((Ce&2)===0||e!==Ie)&&(e===Ie&&((Ce&2)===0&&(hs|=s),Ze===4&&wa(e,Se,$n,!1)),Ui(e))}function $m(e,n,s){if((Ce&6)!==0)throw Error(a(327));var o=!s&&(n&127)===0&&(n&e.expiredLanes)===0||Pt(e,n),u=o?ix(e,n):Of(e,n,!0),d=o;do{if(u===0){$s&&!o&&wa(e,n,0,!1);break}else{if(s=e.current.alternate,d&&!ex(s)){u=Of(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var R=e;u=So;var G=R.current.memoizedState.isDehydrated;if(G&&(nr(R,S).flags|=256),S=Of(R,S,!1),S!==2){if(Rf&&!G){R.errorRecoveryDisabledLanes|=d,hs|=d,u=4;break t}d=Xn,Xn=u,d!==null&&(Xn===null?Xn=d:Xn.push.apply(Xn,d))}u=S}if(d=!1,u!==2)continue}}if(u===1){nr(e,0),wa(e,n,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:wa(o,n,$n,!Ta);break t;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(u=Hl+300-A(),10<u)){if(wa(o,n,$n,!Ta),St(o,0,!0)!==0)break t;Ji=n,o.timeoutHandle=L0(t0.bind(null,o,s,Xn,Vl,wf,n,$n,hs,tr,Ta,d,"Throttled",-0,0),u);break t}t0(o,s,Xn,Vl,wf,n,$n,hs,tr,Ta,d,null,-0,0)}}break}while(!0);Ui(e)}function t0(e,n,s,o,u,d,S,R,G,lt,Mt,At,ut,mt){if(e.timeoutHandle=-1,At=n.subtreeFlags,At&8192||(At&16785408)===16785408){At={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Bi},qm(n,d,At);var Yt=(d&62914560)===d?Hl-A():(d&4194048)===d?Km-A():0;if(Yt=Fx(At,Yt),Yt!==null){Ji=d,e.cancelPendingCommit=Yt(l0.bind(null,e,n,d,s,o,u,S,R,G,Mt,At,null,ut,mt)),wa(e,d,S,!lt);return}}l0(e,n,d,s,o,u,S,R,G)}function ex(e){for(var n=e;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var u=s[o],d=u.getSnapshot;u=u.value;try{if(!jn(d(),u))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function wa(e,n,s,o){n&=~Cf,n&=~hs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var d=31-Wt(u),S=1<<d;o[d]=-1,u&=~S}s!==0&&gn(e,s,n)}function kl(){return(Ce&6)===0?(Eo(0),!1):!0}function Nf(){if(ye!==null){if(Le===0)var e=ye.return;else e=ye,Gi=is=null,ju(e),qs=null,ao=0,e=ye;for(;e!==null;)Dm(e.alternate,e),e=e.return;ye=null}}function nr(e,n){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,Sx(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Ji=0,Nf(),Ie=e,ye=s=Fi(e.current,null),Se=n,Le=0,Jn=null,Ta=!1,$s=Pt(e,n),Rf=!1,tr=$n=Cf=hs=Aa=Ze=0,Xn=So=null,wf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Wt(o),d=1<<u;n|=e[u],o&=~d}return Qi=n,ul(),s}function e0(e,n){de=null,F.H=ho,n===Ws||n===vl?(n=_p(),Le=3):n===zu?(n=_p(),Le=4):Le=n===ff?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,ye===null&&(Ze=1,Ul(e,ri(n,e.current)))}function n0(){var e=Kn.current;return e===null?!0:(Se&4194048)===Se?ui===null:(Se&62914560)===Se||(Se&536870912)!==0?e===ui:!1}function i0(){var e=F.H;return F.H=ho,e===null?ho:e}function a0(){var e=F.A;return F.A=$y,e}function Xl(){Ze=4,Ta||(Se&4194048)!==Se&&Kn.current!==null||($s=!0),(Aa&134217727)===0&&(hs&134217727)===0||Ie===null||wa(Ie,Se,$n,!1)}function Of(e,n,s){var o=Ce;Ce|=2;var u=i0(),d=a0();(Ie!==e||Se!==n)&&(Vl=null,nr(e,n)),n=!1;var S=Ze;t:do try{if(Le!==0&&ye!==null){var R=ye,G=Jn;switch(Le){case 8:Nf(),S=6;break t;case 3:case 2:case 9:case 6:Kn.current===null&&(n=!0);var lt=Le;if(Le=0,Jn=null,ir(e,R,G,lt),s&&$s){S=0;break t}break;default:lt=Le,Le=0,Jn=null,ir(e,R,G,lt)}}nx(),S=Ze;break}catch(Mt){e0(e,Mt)}while(!0);return n&&e.shellSuspendCounter++,Gi=is=null,Ce=o,F.H=u,F.A=d,ye===null&&(Ie=null,Se=0,ul()),S}function nx(){for(;ye!==null;)s0(ye)}function ix(e,n){var s=Ce;Ce|=2;var o=i0(),u=a0();Ie!==e||Se!==n?(Vl=null,Gl=A()+500,nr(e,n)):$s=Pt(e,n);t:do try{if(Le!==0&&ye!==null){n=ye;var d=Jn;e:switch(Le){case 1:Le=0,Jn=null,ir(e,n,d,1);break;case 2:case 9:if(mp(d)){Le=0,Jn=null,r0(n);break}n=function(){Le!==2&&Le!==9||Ie!==e||(Le=7),Ui(e)},d.then(n,n);break t;case 3:Le=7;break t;case 4:Le=5;break t;case 7:mp(d)?(Le=0,Jn=null,r0(n)):(Le=0,Jn=null,ir(e,n,d,7));break;case 5:var S=null;switch(ye.tag){case 26:S=ye.memoizedState;case 5:case 27:var R=ye;if(S?W0(S):R.stateNode.complete){Le=0,Jn=null;var G=R.sibling;if(G!==null)ye=G;else{var lt=R.return;lt!==null?(ye=lt,Wl(lt)):ye=null}break e}}Le=0,Jn=null,ir(e,n,d,5);break;case 6:Le=0,Jn=null,ir(e,n,d,6);break;case 8:Nf(),Ze=6;break t;default:throw Error(a(462))}}ax();break}catch(Mt){e0(e,Mt)}while(!0);return Gi=is=null,F.H=o,F.A=u,Ce=s,ye!==null?0:(Ie=null,Se=0,ul(),Ze)}function ax(){for(;ye!==null&&!Te();)s0(ye)}function s0(e){var n=wm(e.alternate,e,Qi);e.memoizedProps=e.pendingProps,n===null?Wl(e):ye=n}function r0(e){var n=e,s=n.alternate;switch(n.tag){case 15:case 0:n=Em(s,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=Em(s,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:ju(n);default:Dm(s,n),n=ye=ap(n,Qi),n=wm(s,n,Qi)}e.memoizedProps=e.pendingProps,n===null?Wl(e):ye=n}function ir(e,n,s,o){Gi=is=null,ju(n),qs=null,ao=0;var u=n.return;try{if(qy(e,u,n,s,Se)){Ze=1,Ul(e,ri(s,e.current)),ye=null;return}}catch(d){if(u!==null)throw ye=u,d;Ze=1,Ul(e,ri(s,e.current)),ye=null;return}n.flags&32768?(Ee||o===1?e=!0:$s||(Se&536870912)!==0?e=!1:(Ta=e=!0,(o===2||o===9||o===3||o===6)&&(o=Kn.current,o!==null&&o.tag===13&&(o.flags|=16384))),o0(n,e)):Wl(n)}function Wl(e){var n=e;do{if((n.flags&32768)!==0){o0(n,Ta);return}e=n.return;var s=Zy(n.alternate,n,Qi);if(s!==null){ye=s;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=e}while(n!==null);Ze===0&&(Ze=5)}function o0(e,n){do{var s=Ky(e.alternate,e);if(s!==null){s.flags&=32767,ye=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(e=e.sibling,e!==null)){ye=e;return}ye=e=s}while(e!==null);Ze=6,ye=null}function l0(e,n,s,o,u,d,S,R,G){e.cancelPendingCommit=null;do ql();while(dn!==0);if((Ce&6)!==0)throw Error(a(327));if(n!==null){if(n===e.current)throw Error(a(177));if(d=n.lanes|n.childLanes,d|=Su,Ue(e,s,d,S,R,G),e===Ie&&(ye=Ie=null,Se=0),er=n,Ca=e,Ji=s,Lf=d,Df=u,Qm=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,lx(Nt,function(){return d0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=W.p,W.p=2,S=Ce,Ce|=4;try{Qy(e,n,s)}finally{Ce=S,W.p=u,F.T=o}}dn=1,c0(),u0(),f0()}}function c0(){if(dn===1){dn=0;var e=Ca,n=er,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=F.T,F.T=null;var o=W.p;W.p=2;var u=Ce;Ce|=4;try{km(n,e);var d=qf,S=Zd(e.containerInfo),R=d.focusedElem,G=d.selectionRange;if(S!==R&&R&&R.ownerDocument&&jd(R.ownerDocument.documentElement,R)){if(G!==null&&gu(R)){var lt=G.start,Mt=G.end;if(Mt===void 0&&(Mt=lt),"selectionStart"in R)R.selectionStart=lt,R.selectionEnd=Math.min(Mt,R.value.length);else{var At=R.ownerDocument||document,ut=At&&At.defaultView||window;if(ut.getSelection){var mt=ut.getSelection(),Yt=R.textContent.length,oe=Math.min(G.start,Yt),Pe=G.end===void 0?oe:Math.min(G.end,Yt);!mt.extend&&oe>Pe&&(S=Pe,Pe=oe,oe=S);var Q=Yd(R,oe),q=Yd(R,Pe);if(Q&&q&&(mt.rangeCount!==1||mt.anchorNode!==Q.node||mt.anchorOffset!==Q.offset||mt.focusNode!==q.node||mt.focusOffset!==q.offset)){var ot=At.createRange();ot.setStart(Q.node,Q.offset),mt.removeAllRanges(),oe>Pe?(mt.addRange(ot),mt.extend(q.node,q.offset)):(ot.setEnd(q.node,q.offset),mt.addRange(ot))}}}}for(At=[],mt=R;mt=mt.parentNode;)mt.nodeType===1&&At.push({element:mt,left:mt.scrollLeft,top:mt.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<At.length;R++){var bt=At[R];bt.element.scrollLeft=bt.left,bt.element.scrollTop=bt.top}}ac=!!Wf,qf=Wf=null}finally{Ce=u,W.p=o,F.T=s}}e.current=n,dn=2}}function u0(){if(dn===2){dn=0;var e=Ca,n=er,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=F.T,F.T=null;var o=W.p;W.p=2;var u=Ce;Ce|=4;try{Im(e,n.alternate,n)}finally{Ce=u,W.p=o,F.T=s}}dn=3}}function f0(){if(dn===4||dn===3){dn=0,U();var e=Ca,n=er,s=Ji,o=Qm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?dn=5:(dn=0,er=Ca=null,h0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ra=null),ca(s),n=n.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(zt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=W.p,W.p=2,F.T=null;try{for(var d=e.onRecoverableError,S=0;S<o.length;S++){var R=o[S];d(R.value,{componentStack:R.stack})}}finally{F.T=n,W.p=u}}(Ji&3)!==0&&ql(),Ui(e),u=e.pendingLanes,(s&261930)!==0&&(u&42)!==0?e===Uf?Mo++:(Mo=0,Uf=e):Mo=0,Eo(0)}}function h0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,no(n)))}function ql(){return c0(),u0(),f0(),d0()}function d0(){if(dn!==5)return!1;var e=Ca,n=Lf;Lf=0;var s=ca(Ji),o=F.T,u=W.p;try{W.p=32>s?32:s,F.T=null,s=Df,Df=null;var d=Ca,S=Ji;if(dn=0,er=Ca=null,Ji=0,(Ce&6)!==0)throw Error(a(331));var R=Ce;if(Ce|=4,jm(d.current),Wm(d,d.current,S,s),Ce=R,Eo(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(zt,d)}catch{}return!0}finally{W.p=u,F.T=o,h0(e,n)}}function p0(e,n,s){n=ri(s,n),n=uf(e.stateNode,n,2),e=Sa(e,n,2),e!==null&&(Ke(e,2),Ui(e))}function De(e,n,s){if(e.tag===3)p0(e,e,s);else for(;n!==null;){if(n.tag===3){p0(n,e,s);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ra===null||!Ra.has(o))){e=ri(s,e),s=mm(2),o=Sa(n,s,2),o!==null&&(gm(s,o,n,e),Ke(o,2),Ui(o));break}}n=n.return}}function Pf(e,n,s){var o=e.pingCache;if(o===null){o=e.pingCache=new tx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(s)||(Rf=!0,u.add(s),e=sx.bind(null,e,n,s),n.then(e,e))}function sx(e,n,s){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Ie===e&&(Se&s)===s&&(Ze===4||Ze===3&&(Se&62914560)===Se&&300>A()-Hl?(Ce&2)===0&&nr(e,0):Cf|=s,tr===Se&&(tr=0)),Ui(e)}function m0(e,n){n===0&&(n=pe()),e=ts(e,n),e!==null&&(Ke(e,n),Ui(e))}function rx(e){var n=e.memoizedState,s=0;n!==null&&(s=n.retryLane),m0(e,s)}function ox(e,n){var s=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(s=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(n),m0(e,s)}function lx(e,n){return te(e,n)}var Yl=null,ar=null,zf=!1,jl=!1,Bf=!1,La=0;function Ui(e){e!==ar&&e.next===null&&(ar===null?Yl=ar=e:ar=ar.next=e),jl=!0,zf||(zf=!0,ux())}function Eo(e,n){if(!Bf&&jl){Bf=!0;do for(var s=!1,o=Yl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var S=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-Wt(42|e)+1)-1,d&=u&~(S&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,y0(o,d))}else d=Se,d=St(o,o===Ie?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Pt(o,d)||(s=!0,y0(o,d));o=o.next}while(s);Bf=!1}}function cx(){g0()}function g0(){jl=zf=!1;var e=0;La!==0&&xx()&&(e=La);for(var n=A(),s=null,o=Yl;o!==null;){var u=o.next,d=_0(o,n);d===0?(o.next=null,s===null?Yl=u:s.next=u,u===null&&(ar=s)):(s=o,(e!==0||(d&3)!==0)&&(jl=!0)),o=u}dn!==0&&dn!==5||Eo(e),La!==0&&(La=0)}function _0(e,n){for(var s=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var S=31-Wt(d),R=1<<S,G=u[S];G===-1?((R&s)===0||(R&o)!==0)&&(u[S]=ne(R,n)):G<=n&&(e.expiredLanes|=R),d&=~R}if(n=Ie,s=Se,s=St(e,e===n?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,s===0||e===n&&(Le===2||Le===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&le(o),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Pt(e,s)){if(n=s&-s,n===e.callbackPriority)return n;switch(o!==null&&le(o),ca(s)){case 2:case 8:s=Lt;break;case 32:s=Nt;break;case 268435456:s=Bt;break;default:s=Nt}return o=v0.bind(null,e),s=te(s,o),e.callbackPriority=n,e.callbackNode=s,n}return o!==null&&o!==null&&le(o),e.callbackPriority=2,e.callbackNode=null,2}function v0(e,n){if(dn!==0&&dn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(ql()&&e.callbackNode!==s)return null;var o=Se;return o=St(e,e===Ie?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:($m(e,o,n),_0(e,A()),e.callbackNode!=null&&e.callbackNode===s?v0.bind(null,e):null)}function y0(e,n){if(ql())return null;$m(e,n,!0)}function ux(){Mx(function(){(Ce&6)!==0?te(Ot,cx):g0()})}function If(){if(La===0){var e=ks;e===0&&(e=he,he<<=1,(he&261888)===0&&(he=256)),La=e}return La}function x0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:nl(""+e)}function S0(e,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,e.id&&s.setAttribute("form",e.id),n.parentNode.insertBefore(s,n),e=new FormData(e),s.parentNode.removeChild(s),e}function fx(e,n,s,o,u){if(n==="submit"&&s&&s.stateNode===u){var d=x0((u[Cn]||null).action),S=o.submitter;S&&(n=(n=S[Cn]||null)?x0(n.formAction):S.getAttribute("formAction"),n!==null&&(d=n,S=null));var R=new rl("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(La!==0){var G=S?S0(u,S):new FormData(u);af(s,{pending:!0,data:G,method:u.method,action:d},null,G)}}else typeof d=="function"&&(R.preventDefault(),G=S?S0(u,S):new FormData(u),af(s,{pending:!0,data:G,method:u.method,action:d},d,G))},currentTarget:u}]})}}for(var Ff=0;Ff<xu.length;Ff++){var Hf=xu[Ff],hx=Hf.toLowerCase(),dx=Hf[0].toUpperCase()+Hf.slice(1);yi(hx,"on"+dx)}yi(Jd,"onAnimationEnd"),yi($d,"onAnimationIteration"),yi(tp,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(wy,"onTransitionRun"),yi(Ly,"onTransitionStart"),yi(Dy,"onTransitionCancel"),yi(ep,"onTransitionEnd"),an("onMouseEnter",["mouseout","mouseover"]),an("onMouseLeave",["mouseout","mouseover"]),an("onPointerEnter",["pointerout","pointerover"]),an("onPointerLeave",["pointerout","pointerover"]),we("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),we("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),we("onBeforeInput",["compositionend","keypress","textInput","paste"]),we("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),we("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),we("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),px=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bo));function M0(e,n){n=(n&4)!==0;for(var s=0;s<e.length;s++){var o=e[s],u=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var S=o.length-1;0<=S;S--){var R=o[S],G=R.instance,lt=R.currentTarget;if(R=R.listener,G!==d&&u.isPropagationStopped())break t;d=R,u.currentTarget=lt;try{d(u)}catch(Mt){cl(Mt)}u.currentTarget=null,d=G}else for(S=0;S<o.length;S++){if(R=o[S],G=R.instance,lt=R.currentTarget,R=R.listener,G!==d&&u.isPropagationStopped())break t;d=R,u.currentTarget=lt;try{d(u)}catch(Mt){cl(Mt)}u.currentTarget=null,d=G}}}}function xe(e,n){var s=n[Gr];s===void 0&&(s=n[Gr]=new Set);var o=e+"__bubble";s.has(o)||(E0(n,e,2,!1),s.add(o))}function Gf(e,n,s){var o=0;n&&(o|=4),E0(s,e,o,n)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function Vf(e){if(!e[Zl]){e[Zl]=!0,ce.forEach(function(s){s!=="selectionchange"&&(px.has(s)||Gf(s,!1,e),Gf(s,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Zl]||(n[Zl]=!0,Gf("selectionchange",!1,n))}}function E0(e,n,s,o){switch(J0(n)){case 2:var u=Vx;break;case 8:u=kx;break;default:u=ih}s=u.bind(null,n,s,e),u=void 0,!ou||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,s,{capture:!0,passive:u}):e.addEventListener(n,s,!0):u!==void 0?e.addEventListener(n,s,{passive:u}):e.addEventListener(n,s,!1)}function kf(e,n,s,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var R=o.stateNode.containerInfo;if(R===u)break;if(S===4)for(S=o.return;S!==null;){var G=S.tag;if((G===3||G===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;R!==null;){if(S=Xt(R),S===null)return;if(G=S.tag,G===5||G===6||G===26||G===27){o=d=S;continue t}R=R.parentNode}}o=o.return}Cd(function(){var lt=d,Mt=su(s),At=[];t:{var ut=np.get(e);if(ut!==void 0){var mt=rl,Yt=e;switch(e){case"keypress":if(al(s)===0)break t;case"keydown":case"keyup":mt=oy;break;case"focusin":Yt="focus",mt=fu;break;case"focusout":Yt="blur",mt=fu;break;case"beforeblur":case"afterblur":mt=fu;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":mt=Dd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":mt=Zv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":mt=uy;break;case Jd:case $d:case tp:mt=Jv;break;case ep:mt=hy;break;case"scroll":case"scrollend":mt=Yv;break;case"wheel":mt=py;break;case"copy":case"cut":case"paste":mt=ty;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":mt=Nd;break;case"toggle":case"beforetoggle":mt=gy}var oe=(n&4)!==0,Pe=!oe&&(e==="scroll"||e==="scrollend"),Q=oe?ut!==null?ut+"Capture":null:ut;oe=[];for(var q=lt,ot;q!==null;){var bt=q;if(ot=bt.stateNode,bt=bt.tag,bt!==5&&bt!==26&&bt!==27||ot===null||Q===null||(bt=Wr(q,Q),bt!=null&&oe.push(To(q,bt,ot))),Pe)break;q=q.return}0<oe.length&&(ut=new mt(ut,Yt,null,s,Mt),At.push({event:ut,listeners:oe}))}}if((n&7)===0){t:{if(ut=e==="mouseover"||e==="pointerover",mt=e==="mouseout"||e==="pointerout",ut&&s!==au&&(Yt=s.relatedTarget||s.fromElement)&&(Xt(Yt)||Yt[ua]))break t;if((mt||ut)&&(ut=Mt.window===Mt?Mt:(ut=Mt.ownerDocument)?ut.defaultView||ut.parentWindow:window,mt?(Yt=s.relatedTarget||s.toElement,mt=lt,Yt=Yt?Xt(Yt):null,Yt!==null&&(Pe=c(Yt),oe=Yt.tag,Yt!==Pe||oe!==5&&oe!==27&&oe!==6)&&(Yt=null)):(mt=null,Yt=lt),mt!==Yt)){if(oe=Dd,bt="onMouseLeave",Q="onMouseEnter",q="mouse",(e==="pointerout"||e==="pointerover")&&(oe=Nd,bt="onPointerLeave",Q="onPointerEnter",q="pointer"),Pe=mt==null?ut:se(mt),ot=Yt==null?ut:se(Yt),ut=new oe(bt,q+"leave",mt,s,Mt),ut.target=Pe,ut.relatedTarget=ot,bt=null,Xt(Mt)===lt&&(oe=new oe(Q,q+"enter",Yt,s,Mt),oe.target=ot,oe.relatedTarget=Pe,bt=oe),Pe=bt,mt&&Yt)e:{for(oe=mx,Q=mt,q=Yt,ot=0,bt=Q;bt;bt=oe(bt))ot++;bt=0;for(var ie=q;ie;ie=oe(ie))bt++;for(;0<ot-bt;)Q=oe(Q),ot--;for(;0<bt-ot;)q=oe(q),bt--;for(;ot--;){if(Q===q||q!==null&&Q===q.alternate){oe=Q;break e}Q=oe(Q),q=oe(q)}oe=null}else oe=null;mt!==null&&b0(At,ut,mt,oe,!1),Yt!==null&&Pe!==null&&b0(At,Pe,Yt,oe,!0)}}t:{if(ut=lt?se(lt):window,mt=ut.nodeName&&ut.nodeName.toLowerCase(),mt==="select"||mt==="input"&&ut.type==="file")var Ae=Gd;else if(Fd(ut))if(Vd)Ae=Ay;else{Ae=by;var Jt=Ey}else mt=ut.nodeName,!mt||mt.toLowerCase()!=="input"||ut.type!=="checkbox"&&ut.type!=="radio"?lt&&iu(lt.elementType)&&(Ae=Gd):Ae=Ty;if(Ae&&(Ae=Ae(e,lt))){Hd(At,Ae,s,Mt);break t}Jt&&Jt(e,ut,lt),e==="focusout"&&lt&&ut.type==="number"&&lt.memoizedProps.value!=null&&nu(ut,"number",ut.value)}switch(Jt=lt?se(lt):window,e){case"focusin":(Fd(Jt)||Jt.contentEditable==="true")&&(Ps=Jt,_u=lt,$r=null);break;case"focusout":$r=_u=Ps=null;break;case"mousedown":vu=!0;break;case"contextmenu":case"mouseup":case"dragend":vu=!1,Kd(At,s,Mt);break;case"selectionchange":if(Cy)break;case"keydown":case"keyup":Kd(At,s,Mt)}var me;if(du)t:{switch(e){case"compositionstart":var Me="onCompositionStart";break t;case"compositionend":Me="onCompositionEnd";break t;case"compositionupdate":Me="onCompositionUpdate";break t}Me=void 0}else Os?Bd(e,s)&&(Me="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(Me="onCompositionStart");Me&&(Od&&s.locale!=="ko"&&(Os||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&Os&&(me=wd()):(pa=Mt,lu="value"in pa?pa.value:pa.textContent,Os=!0)),Jt=Kl(lt,Me),0<Jt.length&&(Me=new Ud(Me,e,null,s,Mt),At.push({event:Me,listeners:Jt}),me?Me.data=me:(me=Id(s),me!==null&&(Me.data=me)))),(me=vy?yy(e,s):xy(e,s))&&(Me=Kl(lt,"onBeforeInput"),0<Me.length&&(Jt=new Ud("onBeforeInput","beforeinput",null,s,Mt),At.push({event:Jt,listeners:Me}),Jt.data=me)),fx(At,e,lt,s,Mt)}M0(At,n)})}function To(e,n,s){return{instance:e,listener:n,currentTarget:s}}function Kl(e,n){for(var s=n+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Wr(e,s),u!=null&&o.unshift(To(e,u,d)),u=Wr(e,n),u!=null&&o.push(To(e,u,d))),e.tag===3)return o;e=e.return}return[]}function mx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function b0(e,n,s,o,u){for(var d=n._reactName,S=[];s!==null&&s!==o;){var R=s,G=R.alternate,lt=R.stateNode;if(R=R.tag,G!==null&&G===o)break;R!==5&&R!==26&&R!==27||lt===null||(G=lt,u?(lt=Wr(s,d),lt!=null&&S.unshift(To(s,lt,G))):u||(lt=Wr(s,d),lt!=null&&S.push(To(s,lt,G)))),s=s.return}S.length!==0&&e.push({event:n,listeners:S})}var gx=/\r\n?/g,_x=/\u0000|\uFFFD/g;function T0(e){return(typeof e=="string"?e:""+e).replace(gx,`
`).replace(_x,"")}function A0(e,n){return n=T0(n),T0(e)===n}function Oe(e,n,s,o,u,d){switch(s){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ds(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ds(e,""+o);break;case"className":Be(e,"class",o);break;case"tabIndex":Be(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Be(e,s,o);break;case"style":Ad(e,o,d);break;case"data":if(n!=="object"){Be(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||s!=="href")){e.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=nl(""+o),e.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(n!=="input"&&Oe(e,n,"name",u.name,u,null),Oe(e,n,"formEncType",u.formEncType,u,null),Oe(e,n,"formMethod",u.formMethod,u,null),Oe(e,n,"formTarget",u.formTarget,u,null)):(Oe(e,n,"encType",u.encType,u,null),Oe(e,n,"method",u.method,u,null),Oe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=nl(""+o),e.setAttribute(s,o);break;case"onClick":o!=null&&(e.onclick=Bi);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}s=nl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""+o):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":o===!0?e.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,o):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(s,o):e.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(s):e.setAttribute(s,o);break;case"popover":xe("beforetoggle",e),xe("toggle",e),fa(e,"popover",o);break;case"xlinkActuate":Sn(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Sn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Sn(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Sn(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Sn(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Sn(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Sn(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Sn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Sn(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":fa(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Wv.get(s)||s,fa(e,s,o))}}function Xf(e,n,s,o,u,d){switch(s){case"style":Ad(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof o=="string"?Ds(e,o):(typeof o=="number"||typeof o=="bigint")&&Ds(e,""+o);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Bi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ue.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),n=s.slice(2,u?s.length-7:void 0),d=e[Cn]||null,d=d!=null?d[s]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(n,o,u);break t}s in e?e[s]=o:o===!0?e.setAttribute(s,""):fa(e,s,o)}}}function Tn(e,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var o=!1,u=!1,d;for(d in s)if(s.hasOwnProperty(d)){var S=s[d];if(S!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Oe(e,n,d,S,s,null)}}u&&Oe(e,n,"srcSet",s.srcSet,s,null),o&&Oe(e,n,"src",s.src,s,null);return;case"input":xe("invalid",e);var R=d=S=u=null,G=null,lt=null;for(o in s)if(s.hasOwnProperty(o)){var Mt=s[o];if(Mt!=null)switch(o){case"name":u=Mt;break;case"type":S=Mt;break;case"checked":G=Mt;break;case"defaultChecked":lt=Mt;break;case"value":d=Mt;break;case"defaultValue":R=Mt;break;case"children":case"dangerouslySetInnerHTML":if(Mt!=null)throw Error(a(137,n));break;default:Oe(e,n,o,Mt,s,null)}}Xr(e,d,R,G,lt,S,u,!1);return;case"select":xe("invalid",e),o=S=d=null;for(u in s)if(s.hasOwnProperty(u)&&(R=s[u],R!=null))switch(u){case"value":d=R;break;case"defaultValue":S=R;break;case"multiple":o=R;default:Oe(e,n,u,R,s,null)}n=d,s=S,e.multiple=!!o,n!=null?Ls(e,!!o,n,!1):s!=null&&Ls(e,!!o,s,!0);return;case"textarea":xe("invalid",e),d=u=o=null;for(S in s)if(s.hasOwnProperty(S)&&(R=s[S],R!=null))switch(S){case"value":o=R;break;case"defaultValue":u=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(a(91));break;default:Oe(e,n,S,R,s,null)}bd(e,o,u,d);return;case"option":for(G in s)if(s.hasOwnProperty(G)&&(o=s[G],o!=null))switch(G){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Oe(e,n,G,o,s,null)}return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(o=0;o<bo.length;o++)xe(bo[o],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(lt in s)if(s.hasOwnProperty(lt)&&(o=s[lt],o!=null))switch(lt){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Oe(e,n,lt,o,s,null)}return;default:if(iu(n)){for(Mt in s)s.hasOwnProperty(Mt)&&(o=s[Mt],o!==void 0&&Xf(e,n,Mt,o,s,void 0));return}}for(R in s)s.hasOwnProperty(R)&&(o=s[R],o!=null&&Oe(e,n,R,o,s,null))}function vx(e,n,s,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,S=null,R=null,G=null,lt=null,Mt=null;for(mt in s){var At=s[mt];if(s.hasOwnProperty(mt)&&At!=null)switch(mt){case"checked":break;case"value":break;case"defaultValue":G=At;default:o.hasOwnProperty(mt)||Oe(e,n,mt,null,o,At)}}for(var ut in o){var mt=o[ut];if(At=s[ut],o.hasOwnProperty(ut)&&(mt!=null||At!=null))switch(ut){case"type":d=mt;break;case"name":u=mt;break;case"checked":lt=mt;break;case"defaultChecked":Mt=mt;break;case"value":S=mt;break;case"defaultValue":R=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(a(137,n));break;default:mt!==At&&Oe(e,n,ut,mt,o,At)}}kr(e,S,R,G,lt,Mt,d,u);return;case"select":mt=S=R=ut=null;for(d in s)if(G=s[d],s.hasOwnProperty(d)&&G!=null)switch(d){case"value":break;case"multiple":mt=G;default:o.hasOwnProperty(d)||Oe(e,n,d,null,o,G)}for(u in o)if(d=o[u],G=s[u],o.hasOwnProperty(u)&&(d!=null||G!=null))switch(u){case"value":ut=d;break;case"defaultValue":R=d;break;case"multiple":S=d;default:d!==G&&Oe(e,n,u,d,o,G)}n=R,s=S,o=mt,ut!=null?Ls(e,!!s,ut,!1):!!o!=!!s&&(n!=null?Ls(e,!!s,n,!0):Ls(e,!!s,s?[]:"",!1));return;case"textarea":mt=ut=null;for(R in s)if(u=s[R],s.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Oe(e,n,R,null,o,u)}for(S in o)if(u=o[S],d=s[S],o.hasOwnProperty(S)&&(u!=null||d!=null))switch(S){case"value":ut=u;break;case"defaultValue":mt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==d&&Oe(e,n,S,u,o,d)}Ed(e,ut,mt);return;case"option":for(var Yt in s)if(ut=s[Yt],s.hasOwnProperty(Yt)&&ut!=null&&!o.hasOwnProperty(Yt))switch(Yt){case"selected":e.selected=!1;break;default:Oe(e,n,Yt,null,o,ut)}for(G in o)if(ut=o[G],mt=s[G],o.hasOwnProperty(G)&&ut!==mt&&(ut!=null||mt!=null))switch(G){case"selected":e.selected=ut&&typeof ut!="function"&&typeof ut!="symbol";break;default:Oe(e,n,G,ut,o,mt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in s)ut=s[oe],s.hasOwnProperty(oe)&&ut!=null&&!o.hasOwnProperty(oe)&&Oe(e,n,oe,null,o,ut);for(lt in o)if(ut=o[lt],mt=s[lt],o.hasOwnProperty(lt)&&ut!==mt&&(ut!=null||mt!=null))switch(lt){case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(a(137,n));break;default:Oe(e,n,lt,ut,o,mt)}return;default:if(iu(n)){for(var Pe in s)ut=s[Pe],s.hasOwnProperty(Pe)&&ut!==void 0&&!o.hasOwnProperty(Pe)&&Xf(e,n,Pe,void 0,o,ut);for(Mt in o)ut=o[Mt],mt=s[Mt],!o.hasOwnProperty(Mt)||ut===mt||ut===void 0&&mt===void 0||Xf(e,n,Mt,ut,o,mt);return}}for(var Q in s)ut=s[Q],s.hasOwnProperty(Q)&&ut!=null&&!o.hasOwnProperty(Q)&&Oe(e,n,Q,null,o,ut);for(At in o)ut=o[At],mt=s[At],!o.hasOwnProperty(At)||ut===mt||ut==null&&mt==null||Oe(e,n,At,ut,o,mt)}function R0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function yx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,s=performance.getEntriesByType("resource"),o=0;o<s.length;o++){var u=s[o],d=u.transferSize,S=u.initiatorType,R=u.duration;if(d&&R&&R0(S)){for(S=0,R=u.responseEnd,o+=1;o<s.length;o++){var G=s[o],lt=G.startTime;if(lt>R)break;var Mt=G.transferSize,At=G.initiatorType;Mt&&R0(At)&&(G=G.responseEnd,S+=Mt*(G<R?1:(R-lt)/(G-lt)))}if(--o,n+=8*(d+S)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Wf=null,qf=null;function Ql(e){return e.nodeType===9?e:e.ownerDocument}function C0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function w0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Yf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var jf=null;function xx(){var e=window.event;return e&&e.type==="popstate"?e===jf?!1:(jf=e,!0):(jf=null,!1)}var L0=typeof setTimeout=="function"?setTimeout:void 0,Sx=typeof clearTimeout=="function"?clearTimeout:void 0,D0=typeof Promise=="function"?Promise:void 0,Mx=typeof queueMicrotask=="function"?queueMicrotask:typeof D0<"u"?function(e){return D0.resolve(null).then(e).catch(Ex)}:L0;function Ex(e){setTimeout(function(){throw e})}function Da(e){return e==="head"}function U0(e,n){var s=n,o=0;do{var u=s.nextSibling;if(e.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"||s==="/&"){if(o===0){e.removeChild(u),lr(n);return}o--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")o++;else if(s==="html")Ao(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,Ao(s);for(var d=s.firstChild;d;){var S=d.nextSibling,R=d.nodeName;d[gt]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=S}}else s==="body"&&Ao(e.ownerDocument.body);s=u}while(s);lr(n)}function N0(e,n){var s=e;e=0;do{var o=s.nextSibling;if(s.nodeType===1?n?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(n?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),o&&o.nodeType===8)if(s=o.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=o}while(s)}function Zf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Zf(s),ht(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function bx(e,n,s,o){for(;e.nodeType===1;){var u=s;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[gt])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=fi(e.nextSibling),e===null)break}return null}function Tx(e,n,s){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=fi(e.nextSibling),e===null))return null;return e}function O0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=fi(e.nextSibling),e===null))return null;return e}function Kf(e){return e.data==="$?"||e.data==="$~"}function Qf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ax(e,n){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||s.readyState!=="loading")n();else{var o=function(){n(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function fi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Jf=null;function P0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(n===0)return fi(e.nextSibling);n--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||n++}e=e.nextSibling}return null}function z0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(n===0)return e;n--}else s!=="/$"&&s!=="/&"||n++}e=e.previousSibling}return null}function B0(e,n,s){switch(n=Ql(s),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Ao(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ht(e)}var hi=new Map,I0=new Set;function Jl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $i=W.d;W.d={f:Rx,r:Cx,D:wx,C:Lx,L:Dx,m:Ux,X:Ox,S:Nx,M:Px};function Rx(){var e=$i.f(),n=kl();return e||n}function Cx(e){var n=Zt(e);n!==null&&n.tag===5&&n.type==="form"?em(n):$i.r(e)}var sr=typeof document>"u"?null:document;function F0(e,n,s){var o=sr;if(o&&typeof n=="string"&&n){var u=wn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),I0.has(u)||(I0.add(u),e={rel:e,crossOrigin:s,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Tn(n,"link",e),$t(n),o.head.appendChild(n)))}}function wx(e){$i.D(e),F0("dns-prefetch",e,null)}function Lx(e,n){$i.C(e,n),F0("preconnect",e,n)}function Dx(e,n,s){$i.L(e,n,s);var o=sr;if(o&&e&&n){var u='link[rel="preload"][as="'+wn(n)+'"]';n==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+wn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+wn(s.imageSizes)+'"]')):u+='[href="'+wn(e)+'"]';var d=u;switch(n){case"style":d=rr(e);break;case"script":d=or(e)}hi.has(d)||(e=_({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:e,as:n},s),hi.set(d,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Ro(d))||n==="script"&&o.querySelector(Co(d))||(n=o.createElement("link"),Tn(n,"link",e),$t(n),o.head.appendChild(n)))}}function Ux(e,n){$i.m(e,n);var s=sr;if(s&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+wn(o)+'"][href="'+wn(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=or(e)}if(!hi.has(d)&&(e=_({rel:"modulepreload",href:e},n),hi.set(d,e),s.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Co(d)))return}o=s.createElement("link"),Tn(o,"link",e),$t(o),s.head.appendChild(o)}}}function Nx(e,n,s){$i.S(e,n,s);var o=sr;if(o&&e){var u=re(o).hoistableStyles,d=rr(e);n=n||"default";var S=u.get(d);if(!S){var R={loading:0,preload:null};if(S=o.querySelector(Ro(d)))R.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},s),(s=hi.get(d))&&$f(e,s);var G=S=o.createElement("link");$t(G),Tn(G,"link",e),G._p=new Promise(function(lt,Mt){G.onload=lt,G.onerror=Mt}),G.addEventListener("load",function(){R.loading|=1}),G.addEventListener("error",function(){R.loading|=2}),R.loading|=4,$l(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:R},u.set(d,S)}}}function Ox(e,n){$i.X(e,n);var s=sr;if(s&&e){var o=re(s).hoistableScripts,u=or(e),d=o.get(u);d||(d=s.querySelector(Co(u)),d||(e=_({src:e,async:!0},n),(n=hi.get(u))&&th(e,n),d=s.createElement("script"),$t(d),Tn(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Px(e,n){$i.M(e,n);var s=sr;if(s&&e){var o=re(s).hoistableScripts,u=or(e),d=o.get(u);d||(d=s.querySelector(Co(u)),d||(e=_({src:e,async:!0,type:"module"},n),(n=hi.get(u))&&th(e,n),d=s.createElement("script"),$t(d),Tn(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function H0(e,n,s,o){var u=(u=Dt.current)?Jl(u):null;if(!u)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=rr(s.href),s=re(u).hoistableStyles,o=s.get(n),o||(o={type:"style",instance:null,count:0,state:null},s.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=rr(s.href);var d=re(u).hoistableStyles,S=d.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,S),(d=u.querySelector(Ro(e)))&&!d._p&&(S.instance=d,S.state.loading=5),hi.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},hi.set(e,s),d||zx(u,e,s,S.state))),n&&o===null)throw Error(a(528,""));return S}if(n&&o!==null)throw Error(a(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=or(s),s=re(u).hoistableScripts,o=s.get(n),o||(o={type:"script",instance:null,count:0,state:null},s.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function rr(e){return'href="'+wn(e)+'"'}function Ro(e){return'link[rel="stylesheet"]['+e+"]"}function G0(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function zx(e,n,s,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Tn(n,"link",s),$t(n),e.head.appendChild(n))}function or(e){return'[src="'+wn(e)+'"]'}function Co(e){return"script[async]"+e}function V0(e,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+wn(s.href)+'"]');if(o)return n.instance=o,$t(o),o;var u=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),$t(o),Tn(o,"style",u),$l(o,s.precedence,e),n.instance=o;case"stylesheet":u=rr(s.href);var d=e.querySelector(Ro(u));if(d)return n.state.loading|=4,n.instance=d,$t(d),d;o=G0(s),(u=hi.get(u))&&$f(o,u),d=(e.ownerDocument||e).createElement("link"),$t(d);var S=d;return S._p=new Promise(function(R,G){S.onload=R,S.onerror=G}),Tn(d,"link",o),n.state.loading|=4,$l(d,s.precedence,e),n.instance=d;case"script":return d=or(s.src),(u=e.querySelector(Co(d)))?(n.instance=u,$t(u),u):(o=s,(u=hi.get(d))&&(o=_({},s),th(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),$t(u),Tn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,$l(o,s.precedence,e));return n.instance}function $l(e,n,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,S=0;S<o.length;S++){var R=o[S];if(R.dataset.precedence===n)d=R;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(e,n.firstChild))}function $f(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function th(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var tc=null;function k0(e,n,s){if(tc===null){var o=new Map,u=tc=new Map;u.set(s,o)}else u=tc,o=u.get(s),o||(o=new Map,u.set(s,o));if(o.has(e))return o;for(o.set(e,null),s=s.getElementsByTagName(e),u=0;u<s.length;u++){var d=s[u];if(!(d[gt]||d[nn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(n)||"";S=e+S;var R=o.get(S);R?R.push(d):o.set(S,[d])}}return o}function X0(e,n,s){e=e.ownerDocument||e,e.head.insertBefore(s,n==="title"?e.querySelector("head > title"):null)}function Bx(e,n,s){if(s===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function W0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Ix(e,n,s,o){if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var u=rr(o.href),d=n.querySelector(Ro(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ec.bind(e),n.then(e,e)),s.state.loading|=4,s.instance=d,$t(d);return}d=n.ownerDocument||n,o=G0(o),(u=hi.get(u))&&$f(o,u),d=d.createElement("link"),$t(d);var S=d;S._p=new Promise(function(R,G){S.onload=R,S.onerror=G}),Tn(d,"link",o),s.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=ec.bind(e),n.addEventListener("load",s),n.addEventListener("error",s))}}var eh=0;function Fx(e,n){return e.stylesheets&&e.count===0&&ic(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var o=setTimeout(function(){if(e.stylesheets&&ic(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&eh===0&&(eh=62500*yx());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ic(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>eh?50:800)+n);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function ec(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ic(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var nc=null;function ic(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,nc=new Map,n.forEach(Hx,e),nc=null,ec.call(e))}function Hx(e,n){if(!(n.state.loading&4)){var s=nc.get(e);if(s)var o=s.get(null);else{s=new Map,nc.set(e,s);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var S=u[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),o=S)}o&&s.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),d=s.get(S)||o,d===o&&s.set(null,u),s.set(S,u),this.count++,o=ec.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var wo={$$typeof:T,Provider:null,Consumer:null,_currentValue:dt,_currentValue2:dt,_threadCount:0};function Gx(e,n,s,o,u,d,S,R,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ye(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ye(0),this.hiddenUpdates=Ye(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function q0(e,n,s,o,u,d,S,R,G,lt,Mt,At){return e=new Gx(e,n,s,S,G,lt,Mt,At,R),n=1,d===!0&&(n|=24),d=Zn(3,null,null,n),e.current=d,d.stateNode=e,n=Nu(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:s,cache:n},Bu(d),e}function Y0(e){return e?(e=Is,e):Is}function j0(e,n,s,o,u,d){u=Y0(u),o.context===null?o.context=u:o.pendingContext=u,o=xa(n),o.payload={element:s},d=d===void 0?null:d,d!==null&&(o.callback=d),s=Sa(e,o,n),s!==null&&(Wn(s,e,n),ro(s,e,n))}function Z0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<n?s:n}}function nh(e,n){Z0(e,n),(e=e.alternate)&&Z0(e,n)}function K0(e){if(e.tag===13||e.tag===31){var n=ts(e,67108864);n!==null&&Wn(n,e,67108864),nh(e,67108864)}}function Q0(e){if(e.tag===13||e.tag===31){var n=ti();n=Fr(n);var s=ts(e,n);s!==null&&Wn(s,e,n),nh(e,n)}}var ac=!0;function Vx(e,n,s,o){var u=F.T;F.T=null;var d=W.p;try{W.p=2,ih(e,n,s,o)}finally{W.p=d,F.T=u}}function kx(e,n,s,o){var u=F.T;F.T=null;var d=W.p;try{W.p=8,ih(e,n,s,o)}finally{W.p=d,F.T=u}}function ih(e,n,s,o){if(ac){var u=ah(o);if(u===null)kf(e,n,o,sc,s),$0(e,o);else if(Wx(u,e,n,s,o))o.stopPropagation();else if($0(e,o),n&4&&-1<Xx.indexOf(e)){for(;u!==null;){var d=Zt(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=wt(d.pendingLanes);if(S!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var G=1<<31-Wt(S);R.entanglements[1]|=G,S&=~G}Ui(d),(Ce&6)===0&&(Gl=A()+500,Eo(0))}}break;case 31:case 13:R=ts(d,2),R!==null&&Wn(R,d,2),kl(),nh(d,2)}if(d=ah(o),d===null&&kf(e,n,o,sc,s),d===u)break;u=d}u!==null&&o.stopPropagation()}else kf(e,n,o,null,s)}}function ah(e){return e=su(e),sh(e)}var sc=null;function sh(e){if(sc=null,e=Xt(e),e!==null){var n=c(e);if(n===null)e=null;else{var s=n.tag;if(s===13){if(e=h(n),e!==null)return e;e=null}else if(s===31){if(e=f(n),e!==null)return e;e=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return sc=e,null}function J0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(it()){case Ot:return 2;case Lt:return 8;case Nt:case Qt:return 32;case Bt:return 268435456;default:return 32}default:return 32}}var rh=!1,Ua=null,Na=null,Oa=null,Lo=new Map,Do=new Map,Pa=[],Xx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $0(e,n){switch(e){case"focusin":case"focusout":Ua=null;break;case"dragenter":case"dragleave":Na=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":Lo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(n.pointerId)}}function Uo(e,n,s,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:s,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Zt(n),n!==null&&K0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Wx(e,n,s,o,u){switch(n){case"focusin":return Ua=Uo(Ua,e,n,s,o,u),!0;case"dragenter":return Na=Uo(Na,e,n,s,o,u),!0;case"mouseover":return Oa=Uo(Oa,e,n,s,o,u),!0;case"pointerover":var d=u.pointerId;return Lo.set(d,Uo(Lo.get(d)||null,e,n,s,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Do.set(d,Uo(Do.get(d)||null,e,n,s,o,u)),!0}return!1}function tg(e){var n=Xt(e.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=h(s),n!==null){e.blockedOn=n,Ka(e.priority,function(){Q0(s)});return}}else if(n===31){if(n=f(s),n!==null){e.blockedOn=n,Ka(e.priority,function(){Q0(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var s=ah(e.nativeEvent);if(s===null){s=e.nativeEvent;var o=new s.constructor(s.type,s);au=o,s.target.dispatchEvent(o),au=null}else return n=Zt(s),n!==null&&K0(n),e.blockedOn=s,!1;n.shift()}return!0}function eg(e,n,s){rc(e)&&s.delete(n)}function qx(){rh=!1,Ua!==null&&rc(Ua)&&(Ua=null),Na!==null&&rc(Na)&&(Na=null),Oa!==null&&rc(Oa)&&(Oa=null),Lo.forEach(eg),Do.forEach(eg)}function oc(e,n){e.blockedOn===n&&(e.blockedOn=null,rh||(rh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,qx)))}var lc=null;function ng(e){lc!==e&&(lc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){lc===e&&(lc=null);for(var n=0;n<e.length;n+=3){var s=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(sh(o||s)===null)continue;break}var d=Zt(s);d!==null&&(e.splice(n,3),n-=3,af(d,{pending:!0,data:u,method:s.method,action:o},o,u))}}))}function lr(e){function n(G){return oc(G,e)}Ua!==null&&oc(Ua,e),Na!==null&&oc(Na,e),Oa!==null&&oc(Oa,e),Lo.forEach(n),Do.forEach(n);for(var s=0;s<Pa.length;s++){var o=Pa[s];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Pa.length&&(s=Pa[0],s.blockedOn===null);)tg(s),s.blockedOn===null&&Pa.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var u=s[o],d=s[o+1],S=u[Cn]||null;if(typeof d=="function")S||ng(s);else if(S){var R=null;if(d&&d.hasAttribute("formAction")){if(u=d,S=d[Cn]||null)R=S.formAction;else if(sh(u)!==null)continue}else R=S.action;typeof R=="function"?s[o+1]=R:(s.splice(o,3),o-=3),ng(s)}}}function ig(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(s,20)}function s(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(s,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function oh(e){this._internalRoot=e}cc.prototype.render=oh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var s=n.current,o=ti();j0(s,o,e,n,null,null)},cc.prototype.unmount=oh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;j0(e.current,2,null,e,null,null),kl(),n[ua]=null}};function cc(e){this._internalRoot=e}cc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Hr();e={blockedOn:null,target:e,priority:n};for(var s=0;s<Pa.length&&n!==0&&n<Pa[s].priority;s++);Pa.splice(s,0,e),s===0&&tg(e)}};var ag=t.version;if(ag!=="19.2.0")throw Error(a(527,ag,"19.2.0"));W.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=m(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Yx={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uc.isDisabled&&uc.supportsFiber)try{zt=uc.inject(Yx),Et=uc}catch{}}return No.createRoot=function(e,n){if(!l(e))throw Error(a(299));var s=!1,o="",u=fm,d=hm,S=dm;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=q0(e,1,!1,null,null,s,o,null,u,d,S,ig),e[ua]=n.current,Vf(e),new oh(n)},No.hydrateRoot=function(e,n,s){if(!l(e))throw Error(a(299));var o=!1,u="",d=fm,S=hm,R=dm,G=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(R=s.onRecoverableError),s.formState!==void 0&&(G=s.formState)),n=q0(e,1,!0,n,s??null,o,u,G,d,S,R,ig),n.context=Y0(null),s=n.current,o=ti(),o=Fr(o),u=xa(o),u.callback=null,Sa(s,u,o),s=o,n.current.lanes=s,Ke(n,s),Ui(n),e[ua]=n.current,Vf(e),new cc(n)},No.version="19.2.0",No}var hg;function nS(){if(hg)return ch.exports;hg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),ch.exports=eS(),ch.exports}var iS=nS();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Q_=(...r)=>r.filter((t,i,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var sS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=hn.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:l="",children:c,iconNode:h,...f},p)=>hn.createElement("svg",{ref:p,...sS,width:t,height:t,stroke:r,strokeWidth:a?Number(i)*24/Number(t):i,className:Q_("lucide",l),...f},[...h.map(([m,g])=>hn.createElement(m,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=(r,t)=>{const i=hn.forwardRef(({className:a,...l},c)=>hn.createElement(rS,{ref:c,iconNode:t,className:Q_(`lucide-${aS(r)}`,a),...l}));return i.displayName=`${r}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=Rn("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=Rn("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=Rn("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=Rn("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=Rn("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=Rn("Expand",[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8",key:"1c15vz"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6",key:"1fsnz2"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6",key:"hawz9i"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6",key:"u9ee12"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=Rn("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=Rn("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=Rn("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=Rn("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=Rn("Move3d",[["path",{d:"M5 3v16h16",key:"1mqmf9"}],["path",{d:"m5 19 6-6",key:"jh6hbb"}],["path",{d:"m2 6 3-3 3 3",key:"tkyvxa"}],["path",{d:"m18 16 3 3-3 3",key:"1d4glt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=Rn("Orbit",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=Rn("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=Rn("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=Rn("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=Rn("ScanLine",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=Rn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const od="159",cr={ROTATE:0,DOLLY:1,PAN:2},ur={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xS=0,_g=1,SS=2,J_=1,$_=2,sa=3,ja=0,In=1,ra=2,Wa=0,Dr=1,vg=2,yg=3,xg=4,MS=5,vs=100,ES=101,bS=102,Sg=103,Mg=104,TS=200,AS=201,RS=202,CS=203,jh=204,Zh=205,wS=206,LS=207,DS=208,US=209,NS=210,OS=211,PS=212,zS=213,BS=214,IS=0,FS=1,HS=2,Ic=3,GS=4,VS=5,kS=6,XS=7,tv=0,WS=1,qS=2,qa=0,YS=1,jS=2,ZS=3,ev=4,KS=5,nv=300,Nr=301,Or=302,Kh=303,Qh=304,Yc=306,Fc=1e3,Ai=1001,Jh=1002,Bn=1003,Eg=1004,dh=1005,mi=1006,QS=1007,jo=1008,Ya=1009,JS=1010,$S=1011,ld=1012,iv=1013,ka=1014,Xa=1015,Zo=1016,av=1017,sv=1018,xs=1020,tM=1021,Ri=1023,eM=1024,nM=1025,Ss=1026,Pr=1027,iM=1028,rv=1029,aM=1030,ov=1031,lv=1033,ph=33776,mh=33777,gh=33778,_h=33779,bg=35840,Tg=35841,Ag=35842,Rg=35843,cv=36196,Cg=37492,wg=37496,Lg=37808,Dg=37809,Ug=37810,Ng=37811,Og=37812,Pg=37813,zg=37814,Bg=37815,Ig=37816,Fg=37817,Hg=37818,Gg=37819,Vg=37820,kg=37821,vh=36492,Xg=36494,Wg=36495,sM=36283,qg=36284,Yg=36285,jg=36286,uv=3e3,Ms=3001,rM=3200,oM=3201,fv=0,lM=1,gi="",yn="srgb",la="srgb-linear",cd="display-p3",jc="display-p3-linear",Hc="linear",Ve="srgb",Gc="rec709",Vc="p3",fr=7680,Zg=519,cM=512,uM=513,fM=514,hv=515,hM=516,dM=517,pM=518,mM=519,Kg=35044,Qg="300 es",$h=1035,oa=2e3,kc=2001;class Rs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(i)===-1&&a[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const a=this._listeners;return a[t]!==void 0&&a[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const a=this._listeners[t.type];if(a!==void 0){t.target=this;const l=a.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jg=1234567;const Vo=Math.PI/180,Ko=180/Math.PI;function Cs(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[a&255]+Dn[a>>8&255]+Dn[a>>16&255]+Dn[a>>24&255]).toLowerCase()}function xn(r,t,i){return Math.max(t,Math.min(i,r))}function ud(r,t){return(r%t+t)%t}function gM(r,t,i,a,l){return a+(r-t)*(l-a)/(i-t)}function _M(r,t,i){return r!==t?(i-r)/(t-r):0}function ko(r,t,i){return(1-i)*r+i*t}function vM(r,t,i,a){return ko(r,t,1-Math.exp(-i*a))}function yM(r,t=1){return t-Math.abs(ud(r,t*2)-t)}function xM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function SM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function MM(r,t){return r+Math.floor(Math.random()*(t-r+1))}function EM(r,t){return r+Math.random()*(t-r)}function bM(r){return r*(.5-Math.random())}function TM(r){r!==void 0&&(Jg=r);let t=Jg+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function AM(r){return r*Vo}function RM(r){return r*Ko}function td(r){return(r&r-1)===0&&r!==0}function CM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Xc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function wM(r,t,i,a,l){const c=Math.cos,h=Math.sin,f=c(i/2),p=h(i/2),m=c((t+a)/2),g=h((t+a)/2),_=c((t-a)/2),y=h((t-a)/2),M=c((a-t)/2),E=h((a-t)/2);switch(l){case"XYX":r.set(f*g,p*_,p*y,f*m);break;case"YZY":r.set(p*y,f*g,p*_,f*m);break;case"ZXZ":r.set(p*_,p*y,f*g,f*m);break;case"XZX":r.set(f*g,p*E,p*M,f*m);break;case"YXY":r.set(p*M,f*g,p*E,f*m);break;case"ZYZ":r.set(p*E,p*M,f*g,f*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Cr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Pn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ni={DEG2RAD:Vo,RAD2DEG:Ko,generateUUID:Cs,clamp:xn,euclideanModulo:ud,mapLinear:gM,inverseLerp:_M,lerp:ko,damp:vM,pingpong:yM,smoothstep:xM,smootherstep:SM,randInt:MM,randFloat:EM,randFloatSpread:bM,seededRandom:TM,degToRad:AM,radToDeg:RM,isPowerOfTwo:td,ceilPowerOfTwo:CM,floorPowerOfTwo:Xc,setQuaternionFromProperEuler:wM,normalize:Pn,denormalize:Cr};class It{constructor(t=0,i=0){It.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,a=this.y,l=t.elements;return this.x=l[0]*i+l[3]*a+l[6],this.y=l[1]*i+l[4]*a+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(i,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(t)/i;return Math.acos(xn(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,a=this.y-t.y;return i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const a=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*a-h*l+t.x,this.y=c*l+h*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ve{constructor(t,i,a,l,c,h,f,p,m){ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,a,l,c,h,f,p,m)}set(t,i,a,l,c,h,f,p,m){const g=this.elements;return g[0]=t,g[1]=l,g[2]=f,g[3]=i,g[4]=c,g[5]=p,g[6]=a,g[7]=h,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,a=t.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],this}extractBasis(t,i,a){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const a=t.elements,l=i.elements,c=this.elements,h=a[0],f=a[3],p=a[6],m=a[1],g=a[4],_=a[7],y=a[2],M=a[5],E=a[8],b=l[0],x=l[3],v=l[6],B=l[1],T=l[4],L=l[7],w=l[2],I=l[5],N=l[8];return c[0]=h*b+f*B+p*w,c[3]=h*x+f*T+p*I,c[6]=h*v+f*L+p*N,c[1]=m*b+g*B+_*w,c[4]=m*x+g*T+_*I,c[7]=m*v+g*L+_*N,c[2]=y*b+M*B+E*w,c[5]=y*x+M*T+E*I,c[8]=y*v+M*L+E*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],a=t[1],l=t[2],c=t[3],h=t[4],f=t[5],p=t[6],m=t[7],g=t[8];return i*h*g-i*f*m-a*c*g+a*f*p+l*c*m-l*h*p}invert(){const t=this.elements,i=t[0],a=t[1],l=t[2],c=t[3],h=t[4],f=t[5],p=t[6],m=t[7],g=t[8],_=g*h-f*m,y=f*p-g*c,M=m*c-h*p,E=i*_+a*y+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=_*b,t[1]=(l*m-g*a)*b,t[2]=(f*a-l*h)*b,t[3]=y*b,t[4]=(g*i-l*p)*b,t[5]=(l*c-f*i)*b,t[6]=M*b,t[7]=(a*p-m*i)*b,t[8]=(h*i-a*c)*b,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,a,l,c,h,f){const p=Math.cos(c),m=Math.sin(c);return this.set(a*p,a*m,-a*(p*h+m*f)+h+t,-l*m,l*p,-l*(-m*h+p*f)+f+i,0,0,1),this}scale(t,i){return this.premultiply(yh.makeScale(t,i)),this}rotate(t){return this.premultiply(yh.makeRotation(-t)),this}translate(t,i){return this.premultiply(yh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,-a,0,a,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,a=t.elements;for(let l=0;l<9;l++)if(i[l]!==a[l])return!1;return!0}fromArray(t,i=0){for(let a=0;a<9;a++)this.elements[a]=t[a+i];return this}toArray(t=[],i=0){const a=this.elements;return t[i]=a[0],t[i+1]=a[1],t[i+2]=a[2],t[i+3]=a[3],t[i+4]=a[4],t[i+5]=a[5],t[i+6]=a[6],t[i+7]=a[7],t[i+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const yh=new ve;function dv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Wc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function LM(){const r=Wc("canvas");return r.style.display="block",r}const $g={};function Xo(r){r in $g||($g[r]=!0,console.warn(r))}const t_=new ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),e_=new ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fc={[la]:{transfer:Hc,primaries:Gc,toReference:r=>r,fromReference:r=>r},[yn]:{transfer:Ve,primaries:Gc,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[jc]:{transfer:Hc,primaries:Vc,toReference:r=>r.applyMatrix3(e_),fromReference:r=>r.applyMatrix3(t_)},[cd]:{transfer:Ve,primaries:Vc,toReference:r=>r.convertSRGBToLinear().applyMatrix3(e_),fromReference:r=>r.applyMatrix3(t_).convertLinearToSRGB()}},DM=new Set([la,jc]),ze={enabled:!0,_workingColorSpace:la,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!DM.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,i){if(this.enabled===!1||t===i||!t||!i)return r;const a=fc[t].toReference,l=fc[i].fromReference;return l(a(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return fc[r].primaries},getTransfer:function(r){return r===gi?Hc:fc[r].transfer}};function Ur(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function xh(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let hr;class pv{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{hr===void 0&&(hr=Wc("canvas")),hr.width=t.width,hr.height=t.height;const a=hr.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=hr}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Wc("canvas");i.width=t.width,i.height=t.height;const a=i.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const l=a.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ur(c[h]/255)*255;return a.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let a=0;a<i.length;a++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[a]=Math.floor(Ur(i[a]/255)*255):i[a]=Ur(i[a]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let UM=0;class mv{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=Cs(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,f=l.length;h<f;h++)l[h].isDataTexture?c.push(Sh(l[h].image)):c.push(Sh(l[h]))}else c=Sh(l);a.url=c}return i||(t.images[this.uuid]=a),a}}function Sh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?pv.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let NM=0;class qn extends Rs{constructor(t=qn.DEFAULT_IMAGE,i=qn.DEFAULT_MAPPING,a=Ai,l=Ai,c=mi,h=jo,f=Ri,p=Ya,m=qn.DEFAULT_ANISOTROPY,g=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=Cs(),this.name="",this.source=new mv(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=a,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(Xo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===Ms?yn:gi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),i||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fc:t.x=t.x-Math.floor(t.x);break;case Ai:t.x=t.x<0?0:1;break;case Jh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fc:t.y=t.y-Math.floor(t.y);break;case Ai:t.y=t.y<0?0:1;break;case Jh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Xo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===yn?Ms:uv}set encoding(t){Xo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ms?yn:gi}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=nv;qn.DEFAULT_ANISOTROPY=1;class We{constructor(t=0,i=0,a=0,l=1){We.prototype.isVector4=!0,this.x=t,this.y=i,this.z=a,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,a,l){return this.x=t,this.y=i,this.z=a,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,a=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*a+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*a+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*a+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*a+h[11]*l+h[15]*c,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,a,l,c;const p=t.elements,m=p[0],g=p[4],_=p[8],y=p[1],M=p[5],E=p[9],b=p[2],x=p[6],v=p[10];if(Math.abs(g-y)<.01&&Math.abs(_-b)<.01&&Math.abs(E-x)<.01){if(Math.abs(g+y)<.1&&Math.abs(_+b)<.1&&Math.abs(E+x)<.1&&Math.abs(m+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const T=(m+1)/2,L=(M+1)/2,w=(v+1)/2,I=(g+y)/4,N=(_+b)/4,K=(E+x)/4;return T>L&&T>w?T<.01?(a=0,l=.707106781,c=.707106781):(a=Math.sqrt(T),l=I/a,c=N/a):L>w?L<.01?(a=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),a=I/l,c=K/l):w<.01?(a=.707106781,l=.707106781,c=0):(c=Math.sqrt(w),a=N/c,l=K/c),this.set(a,l,c,i),this}let B=Math.sqrt((x-E)*(x-E)+(_-b)*(_-b)+(y-g)*(y-g));return Math.abs(B)<.001&&(B=1),this.x=(x-E)/B,this.y=(_-b)/B,this.z=(y-g)/B,this.w=Math.acos((m+M+v-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(i,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this.z=t.z+(i.z-t.z)*a,this.w=t.w+(i.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class OM extends Rs{constructor(t=1,i=1,a={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new We(0,0,t,i),this.scissorTest=!1,this.viewport=new We(0,0,t,i);const l={width:t,height:i,depth:1};a.encoding!==void 0&&(Xo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),a.colorSpace=a.encoding===Ms?yn:gi),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},a),this.texture=new qn(l,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=a.generateMipmaps,this.texture.internalFormat=a.internalFormat,this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.depthTexture=a.depthTexture,this.samples=a.samples}setSize(t,i,a=1){(this.width!==t||this.height!==i||this.depth!==a)&&(this.width=t,this.height=i,this.depth=a,this.texture.image.width=t,this.texture.image.height=i,this.texture.image.depth=a,this.dispose()),this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new mv(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bs extends OM{constructor(t=1,i=1,a={}){super(t,i,a),this.isWebGLRenderTarget=!0}}class gv extends qn{constructor(t=null,i=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:a,depth:l},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class PM extends qn{constructor(t=null,i=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:a,depth:l},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Za{constructor(t=0,i=0,a=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=a,this._w=l}static slerpFlat(t,i,a,l,c,h,f){let p=a[l+0],m=a[l+1],g=a[l+2],_=a[l+3];const y=c[h+0],M=c[h+1],E=c[h+2],b=c[h+3];if(f===0){t[i+0]=p,t[i+1]=m,t[i+2]=g,t[i+3]=_;return}if(f===1){t[i+0]=y,t[i+1]=M,t[i+2]=E,t[i+3]=b;return}if(_!==b||p!==y||m!==M||g!==E){let x=1-f;const v=p*y+m*M+g*E+_*b,B=v>=0?1:-1,T=1-v*v;if(T>Number.EPSILON){const w=Math.sqrt(T),I=Math.atan2(w,v*B);x=Math.sin(x*I)/w,f=Math.sin(f*I)/w}const L=f*B;if(p=p*x+y*L,m=m*x+M*L,g=g*x+E*L,_=_*x+b*L,x===1-f){const w=1/Math.sqrt(p*p+m*m+g*g+_*_);p*=w,m*=w,g*=w,_*=w}}t[i]=p,t[i+1]=m,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,a,l,c,h){const f=a[l],p=a[l+1],m=a[l+2],g=a[l+3],_=c[h],y=c[h+1],M=c[h+2],E=c[h+3];return t[i]=f*E+g*_+p*M-m*y,t[i+1]=p*E+g*y+m*_-f*M,t[i+2]=m*E+g*M+f*y-p*_,t[i+3]=g*E-f*_-p*y-m*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,a,l){return this._x=t,this._y=i,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i){const a=t._x,l=t._y,c=t._z,h=t._order,f=Math.cos,p=Math.sin,m=f(a/2),g=f(l/2),_=f(c/2),y=p(a/2),M=p(l/2),E=p(c/2);switch(h){case"XYZ":this._x=y*g*_+m*M*E,this._y=m*M*_-y*g*E,this._z=m*g*E+y*M*_,this._w=m*g*_-y*M*E;break;case"YXZ":this._x=y*g*_+m*M*E,this._y=m*M*_-y*g*E,this._z=m*g*E-y*M*_,this._w=m*g*_+y*M*E;break;case"ZXY":this._x=y*g*_-m*M*E,this._y=m*M*_+y*g*E,this._z=m*g*E+y*M*_,this._w=m*g*_-y*M*E;break;case"ZYX":this._x=y*g*_-m*M*E,this._y=m*M*_+y*g*E,this._z=m*g*E-y*M*_,this._w=m*g*_+y*M*E;break;case"YZX":this._x=y*g*_+m*M*E,this._y=m*M*_+y*g*E,this._z=m*g*E-y*M*_,this._w=m*g*_-y*M*E;break;case"XZY":this._x=y*g*_-m*M*E,this._y=m*M*_-y*g*E,this._z=m*g*E+y*M*_,this._w=m*g*_+y*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const a=i/2,l=Math.sin(a);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,a=i[0],l=i[4],c=i[8],h=i[1],f=i[5],p=i[9],m=i[2],g=i[6],_=i[10],y=a+f+_;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(g-p)*M,this._y=(c-m)*M,this._z=(h-l)*M}else if(a>f&&a>_){const M=2*Math.sqrt(1+a-f-_);this._w=(g-p)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+m)/M}else if(f>_){const M=2*Math.sqrt(1+f-a-_);this._w=(c-m)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(p+g)/M}else{const M=2*Math.sqrt(1+_-a-f);this._w=(h-l)/M,this._x=(c+m)/M,this._y=(p+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let a=t.dot(i)+1;return a<Number.EPSILON?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xn(this.dot(t),-1,1)))}rotateTowards(t,i){const a=this.angleTo(t);if(a===0)return this;const l=Math.min(1,i/a);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const a=t._x,l=t._y,c=t._z,h=t._w,f=i._x,p=i._y,m=i._z,g=i._w;return this._x=a*g+h*f+l*m-c*p,this._y=l*g+h*p+c*f-a*m,this._z=c*g+h*m+a*p-l*f,this._w=h*g-a*f-l*p-c*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const a=this._x,l=this._y,c=this._z,h=this._w;let f=h*t._w+a*t._x+l*t._y+c*t._z;if(f<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,f=-f):this.copy(t),f>=1)return this._w=h,this._x=a,this._y=l,this._z=c,this;const p=1-f*f;if(p<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*a+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this._onChangeCallback(),this}const m=Math.sqrt(p),g=Math.atan2(m,f),_=Math.sin((1-i)*g)/m,y=Math.sin(i*g)/m;return this._w=h*_+this._w*y,this._x=a*_+this._x*y,this._y=l*_+this._y*y,this._z=c*_+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,a){return this.copy(t).slerp(i,a)}random(){const t=Math.random(),i=Math.sqrt(1-t),a=Math.sqrt(t),l=2*Math.PI*Math.random(),c=2*Math.PI*Math.random();return this.set(i*Math.cos(l),a*Math.sin(c),a*Math.cos(c),i*Math.sin(l))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,i=0,a=0){k.prototype.isVector3=!0,this.x=t,this.y=i,this.z=a}set(t,i,a){return a===void 0&&(a=this.z),this.x=t,this.y=i,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(n_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(n_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,a=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*a+c[6]*l,this.y=c[1]*i+c[4]*a+c[7]*l,this.z=c[2]*i+c[5]*a+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,a=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*a+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*a+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*a+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*a+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,a=this.y,l=this.z,c=t.x,h=t.y,f=t.z,p=t.w,m=2*(h*l-f*a),g=2*(f*i-c*l),_=2*(c*a-h*i);return this.x=i+p*m+h*_-f*g,this.y=a+p*g+f*m-c*_,this.z=l+p*_+c*g-h*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,a=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*a+c[8]*l,this.y=c[1]*i+c[5]*a+c[9]*l,this.z=c[2]*i+c[6]*a+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(i,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this.z=t.z+(i.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const a=t.x,l=t.y,c=t.z,h=i.x,f=i.y,p=i.z;return this.x=l*p-c*f,this.y=c*h-a*p,this.z=a*f-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const a=t.dot(this)/i;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Mh.copy(this).projectOnVector(t),this.sub(Mh)}reflect(t){return this.sub(Mh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(t)/i;return Math.acos(xn(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,a=this.y-t.y,l=this.z-t.z;return i*i+a*a+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,a){const l=Math.sin(i)*t;return this.x=l*Math.sin(a),this.y=Math.cos(i)*t,this.z=l*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,a){return this.x=t*Math.sin(i),this.y=a,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=a,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,a=Math.sqrt(1-t**2);return this.x=a*Math.cos(i),this.y=a*Math.sin(i),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mh=new k,n_=new Za;class tl{constructor(t=new k(1/0,1/0,1/0),i=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,a=t.length;i<a;i+=3)this.expandByPoint(Mi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,a=t.count;i<a;i++)this.expandByPoint(Mi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,a=t.length;i<a;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const a=Mi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,f=c.count;h<f;h++)t.isMesh===!0?t.getVertexPosition(h,Mi):Mi.fromBufferAttribute(c,h),Mi.applyMatrix4(t.matrixWorld),this.expandByPoint(Mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),hc.copy(a.boundingBox)),hc.applyMatrix4(t.matrixWorld),this.union(hc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Mi),Mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,a;return t.normal.x>0?(i=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),i<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Oo),dc.subVectors(this.max,Oo),dr.subVectors(t.a,Oo),pr.subVectors(t.b,Oo),mr.subVectors(t.c,Oo),Ba.subVectors(pr,dr),Ia.subVectors(mr,pr),ds.subVectors(dr,mr);let i=[0,-Ba.z,Ba.y,0,-Ia.z,Ia.y,0,-ds.z,ds.y,Ba.z,0,-Ba.x,Ia.z,0,-Ia.x,ds.z,0,-ds.x,-Ba.y,Ba.x,0,-Ia.y,Ia.x,0,-ds.y,ds.x,0];return!Eh(i,dr,pr,mr,dc)||(i=[1,0,0,0,1,0,0,0,1],!Eh(i,dr,pr,mr,dc))?!1:(pc.crossVectors(Ba,Ia),i=[pc.x,pc.y,pc.z],Eh(i,dr,pr,mr,dc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ta),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ta=[new k,new k,new k,new k,new k,new k,new k,new k],Mi=new k,hc=new tl,dr=new k,pr=new k,mr=new k,Ba=new k,Ia=new k,ds=new k,Oo=new k,dc=new k,pc=new k,ps=new k;function Eh(r,t,i,a,l){for(let c=0,h=r.length-3;c<=h;c+=3){ps.fromArray(r,c);const f=l.x*Math.abs(ps.x)+l.y*Math.abs(ps.y)+l.z*Math.abs(ps.z),p=t.dot(ps),m=i.dot(ps),g=a.dot(ps);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>f)return!1}return!0}const zM=new tl,Po=new k,bh=new k;class fd{constructor(t=new k,i=-1){this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const a=this.center;i!==void 0?a.copy(i):zM.setFromPoints(t).getCenter(a);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const a=this.center.distanceToSquared(t);return i.copy(t),a>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Po.subVectors(t,this.center);const i=Po.lengthSq();if(i>this.radius*this.radius){const a=Math.sqrt(i),l=(a-this.radius)*.5;this.center.addScaledVector(Po,l/a),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Po.copy(t.center).add(bh)),this.expandByPoint(Po.copy(t.center).sub(bh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ea=new k,Th=new k,mc=new k,Fa=new k,Ah=new k,gc=new k,Rh=new k;class hd{constructor(t=new k,i=new k(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ea)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const a=i.dot(this.direction);return a<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ea.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ea.copy(this.origin).addScaledVector(this.direction,i),ea.distanceToSquared(t))}distanceSqToSegment(t,i,a,l){Th.copy(t).add(i).multiplyScalar(.5),mc.copy(i).sub(t).normalize(),Fa.copy(this.origin).sub(Th);const c=t.distanceTo(i)*.5,h=-this.direction.dot(mc),f=Fa.dot(this.direction),p=-Fa.dot(mc),m=Fa.lengthSq(),g=Math.abs(1-h*h);let _,y,M,E;if(g>0)if(_=h*p-f,y=h*f-p,E=c*g,_>=0)if(y>=-E)if(y<=E){const b=1/g;_*=b,y*=b,M=_*(_+h*y+2*f)+y*(h*_+y+2*p)+m}else y=c,_=Math.max(0,-(h*y+f)),M=-_*_+y*(y+2*p)+m;else y=-c,_=Math.max(0,-(h*y+f)),M=-_*_+y*(y+2*p)+m;else y<=-E?(_=Math.max(0,-(-h*c+f)),y=_>0?-c:Math.min(Math.max(-c,-p),c),M=-_*_+y*(y+2*p)+m):y<=E?(_=0,y=Math.min(Math.max(-c,-p),c),M=y*(y+2*p)+m):(_=Math.max(0,-(h*c+f)),y=_>0?c:Math.min(Math.max(-c,-p),c),M=-_*_+y*(y+2*p)+m);else y=h>0?-c:c,_=Math.max(0,-(h*y+f)),M=-_*_+y*(y+2*p)+m;return a&&a.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Th).addScaledVector(mc,y),M}intersectSphere(t,i){ea.subVectors(t.center,this.origin);const a=ea.dot(this.direction),l=ea.dot(ea)-a*a,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),f=a-h,p=a+h;return p<0?null:f<0?this.at(p,i):this.at(f,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/i;return a>=0?a:null}intersectPlane(t,i){const a=this.distanceToPlane(t);return a===null?null:this.at(a,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let a,l,c,h,f,p;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,y=this.origin;return m>=0?(a=(t.min.x-y.x)*m,l=(t.max.x-y.x)*m):(a=(t.max.x-y.x)*m,l=(t.min.x-y.x)*m),g>=0?(c=(t.min.y-y.y)*g,h=(t.max.y-y.y)*g):(c=(t.max.y-y.y)*g,h=(t.min.y-y.y)*g),a>h||c>l||((c>a||isNaN(a))&&(a=c),(h<l||isNaN(l))&&(l=h),_>=0?(f=(t.min.z-y.z)*_,p=(t.max.z-y.z)*_):(f=(t.max.z-y.z)*_,p=(t.min.z-y.z)*_),a>p||f>l)||((f>a||a!==a)&&(a=f),(p<l||l!==l)&&(l=p),l<0)?null:this.at(a>=0?a:l,i)}intersectsBox(t){return this.intersectBox(t,ea)!==null}intersectTriangle(t,i,a,l,c){Ah.subVectors(i,t),gc.subVectors(a,t),Rh.crossVectors(Ah,gc);let h=this.direction.dot(Rh),f;if(h>0){if(l)return null;f=1}else if(h<0)f=-1,h=-h;else return null;Fa.subVectors(this.origin,t);const p=f*this.direction.dot(gc.crossVectors(Fa,gc));if(p<0)return null;const m=f*this.direction.dot(Ah.cross(Fa));if(m<0||p+m>h)return null;const g=-f*Fa.dot(Rh);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(t,i,a,l,c,h,f,p,m,g,_,y,M,E,b,x){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,a,l,c,h,f,p,m,g,_,y,M,E,b,x)}set(t,i,a,l,c,h,f,p,m,g,_,y,M,E,b,x){const v=this.elements;return v[0]=t,v[4]=i,v[8]=a,v[12]=l,v[1]=c,v[5]=h,v[9]=f,v[13]=p,v[2]=m,v[6]=g,v[10]=_,v[14]=y,v[3]=M,v[7]=E,v[11]=b,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(t){const i=this.elements,a=t.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],i[9]=a[9],i[10]=a[10],i[11]=a[11],i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],this}copyPosition(t){const i=this.elements,a=t.elements;return i[12]=a[12],i[13]=a[13],i[14]=a[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,a){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,i,a){return this.set(t.x,i.x,a.x,0,t.y,i.y,a.y,0,t.z,i.z,a.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,a=t.elements,l=1/gr.setFromMatrixColumn(t,0).length(),c=1/gr.setFromMatrixColumn(t,1).length(),h=1/gr.setFromMatrixColumn(t,2).length();return i[0]=a[0]*l,i[1]=a[1]*l,i[2]=a[2]*l,i[3]=0,i[4]=a[4]*c,i[5]=a[5]*c,i[6]=a[6]*c,i[7]=0,i[8]=a[8]*h,i[9]=a[9]*h,i[10]=a[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,a=t.x,l=t.y,c=t.z,h=Math.cos(a),f=Math.sin(a),p=Math.cos(l),m=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const y=h*g,M=h*_,E=f*g,b=f*_;i[0]=p*g,i[4]=-p*_,i[8]=m,i[1]=M+E*m,i[5]=y-b*m,i[9]=-f*p,i[2]=b-y*m,i[6]=E+M*m,i[10]=h*p}else if(t.order==="YXZ"){const y=p*g,M=p*_,E=m*g,b=m*_;i[0]=y+b*f,i[4]=E*f-M,i[8]=h*m,i[1]=h*_,i[5]=h*g,i[9]=-f,i[2]=M*f-E,i[6]=b+y*f,i[10]=h*p}else if(t.order==="ZXY"){const y=p*g,M=p*_,E=m*g,b=m*_;i[0]=y-b*f,i[4]=-h*_,i[8]=E+M*f,i[1]=M+E*f,i[5]=h*g,i[9]=b-y*f,i[2]=-h*m,i[6]=f,i[10]=h*p}else if(t.order==="ZYX"){const y=h*g,M=h*_,E=f*g,b=f*_;i[0]=p*g,i[4]=E*m-M,i[8]=y*m+b,i[1]=p*_,i[5]=b*m+y,i[9]=M*m-E,i[2]=-m,i[6]=f*p,i[10]=h*p}else if(t.order==="YZX"){const y=h*p,M=h*m,E=f*p,b=f*m;i[0]=p*g,i[4]=b-y*_,i[8]=E*_+M,i[1]=_,i[5]=h*g,i[9]=-f*g,i[2]=-m*g,i[6]=M*_+E,i[10]=y-b*_}else if(t.order==="XZY"){const y=h*p,M=h*m,E=f*p,b=f*m;i[0]=p*g,i[4]=-_,i[8]=m*g,i[1]=y*_+b,i[5]=h*g,i[9]=M*_-E,i[2]=E*_-M,i[6]=f*g,i[10]=b*_+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(BM,t,IM)}lookAt(t,i,a){const l=this.elements;return ei.subVectors(t,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Ha.crossVectors(a,ei),Ha.lengthSq()===0&&(Math.abs(a.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Ha.crossVectors(a,ei)),Ha.normalize(),_c.crossVectors(ei,Ha),l[0]=Ha.x,l[4]=_c.x,l[8]=ei.x,l[1]=Ha.y,l[5]=_c.y,l[9]=ei.y,l[2]=Ha.z,l[6]=_c.z,l[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const a=t.elements,l=i.elements,c=this.elements,h=a[0],f=a[4],p=a[8],m=a[12],g=a[1],_=a[5],y=a[9],M=a[13],E=a[2],b=a[6],x=a[10],v=a[14],B=a[3],T=a[7],L=a[11],w=a[15],I=l[0],N=l[4],K=l[8],C=l[12],z=l[1],$=l[5],Z=l[9],ct=l[13],H=l[2],rt=l[6],F=l[10],W=l[14],dt=l[3],tt=l[7],vt=l[11],O=l[15];return c[0]=h*I+f*z+p*H+m*dt,c[4]=h*N+f*$+p*rt+m*tt,c[8]=h*K+f*Z+p*F+m*vt,c[12]=h*C+f*ct+p*W+m*O,c[1]=g*I+_*z+y*H+M*dt,c[5]=g*N+_*$+y*rt+M*tt,c[9]=g*K+_*Z+y*F+M*vt,c[13]=g*C+_*ct+y*W+M*O,c[2]=E*I+b*z+x*H+v*dt,c[6]=E*N+b*$+x*rt+v*tt,c[10]=E*K+b*Z+x*F+v*vt,c[14]=E*C+b*ct+x*W+v*O,c[3]=B*I+T*z+L*H+w*dt,c[7]=B*N+T*$+L*rt+w*tt,c[11]=B*K+T*Z+L*F+w*vt,c[15]=B*C+T*ct+L*W+w*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],a=t[4],l=t[8],c=t[12],h=t[1],f=t[5],p=t[9],m=t[13],g=t[2],_=t[6],y=t[10],M=t[14],E=t[3],b=t[7],x=t[11],v=t[15];return E*(+c*p*_-l*m*_-c*f*y+a*m*y+l*f*M-a*p*M)+b*(+i*p*M-i*m*y+c*h*y-l*h*M+l*m*g-c*p*g)+x*(+i*m*_-i*f*M-c*h*_+a*h*M+c*f*g-a*m*g)+v*(-l*f*g-i*p*_+i*f*y+l*h*_-a*h*y+a*p*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,a){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=a),this}invert(){const t=this.elements,i=t[0],a=t[1],l=t[2],c=t[3],h=t[4],f=t[5],p=t[6],m=t[7],g=t[8],_=t[9],y=t[10],M=t[11],E=t[12],b=t[13],x=t[14],v=t[15],B=_*x*m-b*y*m+b*p*M-f*x*M-_*p*v+f*y*v,T=E*y*m-g*x*m-E*p*M+h*x*M+g*p*v-h*y*v,L=g*b*m-E*_*m+E*f*M-h*b*M-g*f*v+h*_*v,w=E*_*p-g*b*p-E*f*y+h*b*y+g*f*x-h*_*x,I=i*B+a*T+l*L+c*w;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/I;return t[0]=B*N,t[1]=(b*y*c-_*x*c-b*l*M+a*x*M+_*l*v-a*y*v)*N,t[2]=(f*x*c-b*p*c+b*l*m-a*x*m-f*l*v+a*p*v)*N,t[3]=(_*p*c-f*y*c-_*l*m+a*y*m+f*l*M-a*p*M)*N,t[4]=T*N,t[5]=(g*x*c-E*y*c+E*l*M-i*x*M-g*l*v+i*y*v)*N,t[6]=(E*p*c-h*x*c-E*l*m+i*x*m+h*l*v-i*p*v)*N,t[7]=(h*y*c-g*p*c+g*l*m-i*y*m-h*l*M+i*p*M)*N,t[8]=L*N,t[9]=(E*_*c-g*b*c-E*a*M+i*b*M+g*a*v-i*_*v)*N,t[10]=(h*b*c-E*f*c+E*a*m-i*b*m-h*a*v+i*f*v)*N,t[11]=(g*f*c-h*_*c-g*a*m+i*_*m+h*a*M-i*f*M)*N,t[12]=w*N,t[13]=(g*b*l-E*_*l+E*a*y-i*b*y-g*a*x+i*_*x)*N,t[14]=(E*f*l-h*b*l-E*a*p+i*b*p+h*a*x-i*f*x)*N,t[15]=(h*_*l-g*f*l+g*a*p-i*_*p-h*a*y+i*f*y)*N,this}scale(t){const i=this.elements,a=t.x,l=t.y,c=t.z;return i[0]*=a,i[4]*=l,i[8]*=c,i[1]*=a,i[5]*=l,i[9]*=c,i[2]*=a,i[6]*=l,i[10]*=c,i[3]*=a,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,a,l))}makeTranslation(t,i,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,a,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,i,-a,0,0,a,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,0,a,0,0,1,0,0,-a,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,-a,0,0,a,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const a=Math.cos(i),l=Math.sin(i),c=1-a,h=t.x,f=t.y,p=t.z,m=c*h,g=c*f;return this.set(m*h+a,m*f-l*p,m*p+l*f,0,m*f+l*p,g*f+a,g*p-l*h,0,m*p-l*f,g*p+l*h,c*p*p+a,0,0,0,0,1),this}makeScale(t,i,a){return this.set(t,0,0,0,0,i,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,i,a,l,c,h){return this.set(1,a,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,a){const l=this.elements,c=i._x,h=i._y,f=i._z,p=i._w,m=c+c,g=h+h,_=f+f,y=c*m,M=c*g,E=c*_,b=h*g,x=h*_,v=f*_,B=p*m,T=p*g,L=p*_,w=a.x,I=a.y,N=a.z;return l[0]=(1-(b+v))*w,l[1]=(M+L)*w,l[2]=(E-T)*w,l[3]=0,l[4]=(M-L)*I,l[5]=(1-(y+v))*I,l[6]=(x+B)*I,l[7]=0,l[8]=(E+T)*N,l[9]=(x-B)*N,l[10]=(1-(y+b))*N,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,a){const l=this.elements;let c=gr.set(l[0],l[1],l[2]).length();const h=gr.set(l[4],l[5],l[6]).length(),f=gr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ei.copy(this);const m=1/c,g=1/h,_=1/f;return Ei.elements[0]*=m,Ei.elements[1]*=m,Ei.elements[2]*=m,Ei.elements[4]*=g,Ei.elements[5]*=g,Ei.elements[6]*=g,Ei.elements[8]*=_,Ei.elements[9]*=_,Ei.elements[10]*=_,i.setFromRotationMatrix(Ei),a.x=c,a.y=h,a.z=f,this}makePerspective(t,i,a,l,c,h,f=oa){const p=this.elements,m=2*c/(i-t),g=2*c/(a-l),_=(i+t)/(i-t),y=(a+l)/(a-l);let M,E;if(f===oa)M=-(h+c)/(h-c),E=-2*h*c/(h-c);else if(f===kc)M=-h/(h-c),E=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=m,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,a,l,c,h,f=oa){const p=this.elements,m=1/(i-t),g=1/(a-l),_=1/(h-c),y=(i+t)*m,M=(a+l)*g;let E,b;if(f===oa)E=(h+c)*_,b=-2*_;else if(f===kc)E=c*_,b=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=b,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,a=t.elements;for(let l=0;l<16;l++)if(i[l]!==a[l])return!1;return!0}fromArray(t,i=0){for(let a=0;a<16;a++)this.elements[a]=t[a+i];return this}toArray(t=[],i=0){const a=this.elements;return t[i]=a[0],t[i+1]=a[1],t[i+2]=a[2],t[i+3]=a[3],t[i+4]=a[4],t[i+5]=a[5],t[i+6]=a[6],t[i+7]=a[7],t[i+8]=a[8],t[i+9]=a[9],t[i+10]=a[10],t[i+11]=a[11],t[i+12]=a[12],t[i+13]=a[13],t[i+14]=a[14],t[i+15]=a[15],t}}const gr=new k,Ei=new tn,BM=new k(0,0,0),IM=new k(1,1,1),Ha=new k,_c=new k,ei=new k,i_=new tn,a_=new Za;class Zc{constructor(t=0,i=0,a=0,l=Zc.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=a,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,a,l=this._order){return this._x=t,this._y=i,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,a=!0){const l=t.elements,c=l[0],h=l[4],f=l[8],p=l[1],m=l[5],g=l[9],_=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(xn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(xn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-xn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(xn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-xn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,a){return i_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(i_,i,a)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return a_.setFromEuler(this),this.setFromQuaternion(a_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zc.DEFAULT_ORDER="XYZ";class dd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let FM=0;const s_=new k,_r=new Za,na=new tn,vc=new k,zo=new k,HM=new k,GM=new Za,r_=new k(1,0,0),o_=new k(0,1,0),l_=new k(0,0,1),VM={type:"added"},kM={type:"removed"};class An extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=Cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const t=new k,i=new Zc,a=new Za,l=new k(1,1,1);function c(){a.setFromEuler(i,!1)}function h(){i.setFromQuaternion(a,void 0,!1)}i._onChange(c),a._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new ve}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return _r.setFromAxisAngle(t,i),this.quaternion.multiply(_r),this}rotateOnWorldAxis(t,i){return _r.setFromAxisAngle(t,i),this.quaternion.premultiply(_r),this}rotateX(t){return this.rotateOnAxis(r_,t)}rotateY(t){return this.rotateOnAxis(o_,t)}rotateZ(t){return this.rotateOnAxis(l_,t)}translateOnAxis(t,i){return s_.copy(t).applyQuaternion(this.quaternion),this.position.add(s_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(r_,t)}translateY(t){return this.translateOnAxis(o_,t)}translateZ(t){return this.translateOnAxis(l_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(na.copy(this.matrixWorld).invert())}lookAt(t,i,a){t.isVector3?vc.copy(t):vc.set(t,i,a);const l=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?na.lookAt(zo,vc,this.up):na.lookAt(vc,zo,this.up),this.quaternion.setFromRotationMatrix(na),l&&(na.extractRotation(l.matrixWorld),_r.setFromRotationMatrix(na),this.quaternion.premultiply(_r.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(VM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(kM)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),na.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),na.multiply(t.parent.matrixWorld)),t.applyMatrix4(na),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let a=0,l=this.children.length;a<l;a++){const h=this.children[a].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,a=[]){this[t]===i&&a.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,t,HM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,GM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let a=0,l=i.length;a<l;a++){const c=i[a];(c.matrixWorldAutoUpdate===!0||t===!0)&&c.updateMatrixWorld(t)}}updateWorldMatrix(t,i){const a=this.parent;if(t===!0&&a!==null&&a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++){const f=l[c];f.matrixWorldAutoUpdate===!0&&f.updateWorldMatrix(!1,!0)}}}toJSON(t){const i=t===void 0||typeof t=="string",a={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),l.maxGeometryCount=this._maxGeometryCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const _=p[m];c(t.shapes,_)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(c(t.materials,this.material[p]));l.material=f}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let f=0;f<this.children.length;f++)l.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];l.animations.push(c(t.animations,p))}}if(i){const f=h(t.geometries),p=h(t.materials),m=h(t.textures),g=h(t.images),_=h(t.shapes),y=h(t.skeletons),M=h(t.animations),E=h(t.nodes);f.length>0&&(a.geometries=f),p.length>0&&(a.materials=p),m.length>0&&(a.textures=m),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),y.length>0&&(a.skeletons=y),M.length>0&&(a.animations=M),E.length>0&&(a.nodes=E)}return a.object=l,a;function h(f){const p=[];for(const m in f){const g=f[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let a=0;a<t.children.length;a++){const l=t.children[a];this.add(l.clone())}return this}}An.DEFAULT_UP=new k(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new k,ia=new k,Ch=new k,aa=new k,vr=new k,yr=new k,c_=new k,wh=new k,Lh=new k,Dh=new k;let yc=!1;class Ti{constructor(t=new k,i=new k,a=new k){this.a=t,this.b=i,this.c=a}static getNormal(t,i,a,l){l.subVectors(a,i),bi.subVectors(t,i),l.cross(bi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,a,l,c){bi.subVectors(l,i),ia.subVectors(a,i),Ch.subVectors(t,i);const h=bi.dot(bi),f=bi.dot(ia),p=bi.dot(Ch),m=ia.dot(ia),g=ia.dot(Ch),_=h*m-f*f;if(_===0)return c.set(-2,-1,-1);const y=1/_,M=(m*p-f*g)*y,E=(h*g-f*p)*y;return c.set(1-M-E,E,M)}static containsPoint(t,i,a,l){return this.getBarycoord(t,i,a,l,aa),aa.x>=0&&aa.y>=0&&aa.x+aa.y<=1}static getUV(t,i,a,l,c,h,f,p){return yc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),yc=!0),this.getInterpolation(t,i,a,l,c,h,f,p)}static getInterpolation(t,i,a,l,c,h,f,p){return this.getBarycoord(t,i,a,l,aa),p.setScalar(0),p.addScaledVector(c,aa.x),p.addScaledVector(h,aa.y),p.addScaledVector(f,aa.z),p}static isFrontFacing(t,i,a,l){return bi.subVectors(a,i),ia.subVectors(t,i),bi.cross(ia).dot(l)<0}set(t,i,a){return this.a.copy(t),this.b.copy(i),this.c.copy(a),this}setFromPointsAndIndices(t,i,a,l){return this.a.copy(t[i]),this.b.copy(t[a]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,a,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bi.subVectors(this.c,this.b),ia.subVectors(this.a,this.b),bi.cross(ia).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ti.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ti.getBarycoord(t,this.a,this.b,this.c,i)}getUV(t,i,a,l,c){return yc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),yc=!0),Ti.getInterpolation(t,this.a,this.b,this.c,i,a,l,c)}getInterpolation(t,i,a,l,c){return Ti.getInterpolation(t,this.a,this.b,this.c,i,a,l,c)}containsPoint(t){return Ti.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ti.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const a=this.a,l=this.b,c=this.c;let h,f;vr.subVectors(l,a),yr.subVectors(c,a),wh.subVectors(t,a);const p=vr.dot(wh),m=yr.dot(wh);if(p<=0&&m<=0)return i.copy(a);Lh.subVectors(t,l);const g=vr.dot(Lh),_=yr.dot(Lh);if(g>=0&&_<=g)return i.copy(l);const y=p*_-g*m;if(y<=0&&p>=0&&g<=0)return h=p/(p-g),i.copy(a).addScaledVector(vr,h);Dh.subVectors(t,c);const M=vr.dot(Dh),E=yr.dot(Dh);if(E>=0&&M<=E)return i.copy(c);const b=M*m-p*E;if(b<=0&&m>=0&&E<=0)return f=m/(m-E),i.copy(a).addScaledVector(yr,f);const x=g*E-M*_;if(x<=0&&_-g>=0&&M-E>=0)return c_.subVectors(c,l),f=(_-g)/(_-g+(M-E)),i.copy(l).addScaledVector(c_,f);const v=1/(x+b+y);return h=b*v,f=y*v,i.copy(a).addScaledVector(vr,h).addScaledVector(yr,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const _v={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ga={h:0,s:0,l:0},xc={h:0,s:0,l:0};function Uh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class be{constructor(t,i,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,a)}set(t,i,a){if(i===void 0&&a===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=yn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ze.toWorkingColorSpace(this,i),this}setRGB(t,i,a,l=ze.workingColorSpace){return this.r=t,this.g=i,this.b=a,ze.toWorkingColorSpace(this,l),this}setHSL(t,i,a,l=ze.workingColorSpace){if(t=ud(t,1),i=xn(i,0,1),a=xn(a,0,1),i===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+i):a+i-a*i,h=2*a-c;this.r=Uh(h,c,t+1/3),this.g=Uh(h,c,t),this.b=Uh(h,c,t-1/3)}return ze.toWorkingColorSpace(this,l),this}setStyle(t,i=yn){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],f=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=yn){const a=_v[t.toLowerCase()];return a!==void 0?this.setHex(a,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ur(t.r),this.g=Ur(t.g),this.b=Ur(t.b),this}copyLinearToSRGB(t){return this.r=xh(t.r),this.g=xh(t.g),this.b=xh(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=yn){return ze.fromWorkingColorSpace(Un.copy(this),t),Math.round(xn(Un.r*255,0,255))*65536+Math.round(xn(Un.g*255,0,255))*256+Math.round(xn(Un.b*255,0,255))}getHexString(t=yn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=ze.workingColorSpace){ze.fromWorkingColorSpace(Un.copy(this),i);const a=Un.r,l=Un.g,c=Un.b,h=Math.max(a,l,c),f=Math.min(a,l,c);let p,m;const g=(f+h)/2;if(f===h)p=0,m=0;else{const _=h-f;switch(m=g<=.5?_/(h+f):_/(2-h-f),h){case a:p=(l-c)/_+(l<c?6:0);break;case l:p=(c-a)/_+2;break;case c:p=(a-l)/_+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,i=ze.workingColorSpace){return ze.fromWorkingColorSpace(Un.copy(this),i),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=yn){ze.fromWorkingColorSpace(Un.copy(this),t);const i=Un.r,a=Un.g,l=Un.b;return t!==yn?`color(${t} ${i.toFixed(3)} ${a.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(a*255)},${Math.round(l*255)})`}offsetHSL(t,i,a){return this.getHSL(Ga),this.setHSL(Ga.h+t,Ga.s+i,Ga.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,a){return this.r=t.r+(i.r-t.r)*a,this.g=t.g+(i.g-t.g)*a,this.b=t.b+(i.b-t.b)*a,this}lerpHSL(t,i){this.getHSL(Ga),t.getHSL(xc);const a=ko(Ga.h,xc.h,i),l=ko(Ga.s,xc.s,i),c=ko(Ga.l,xc.l,i);return this.setHSL(a,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,a=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*a+c[6]*l,this.g=c[1]*i+c[4]*a+c[7]*l,this.b=c[2]*i+c[5]*a+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new be;be.NAMES=_v;let XM=0;class el extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=Cs(),this.name="",this.type="Material",this.blending=Dr,this.side=ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jh,this.blendDst=Zh,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Ic,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fr,this.stencilZFail=fr,this.stencilZPass=fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const a=t[i];if(a===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(a):l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[i]=a}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Dr&&(a.blending=this.blending),this.side!==ja&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==jh&&(a.blendSrc=this.blendSrc),this.blendDst!==Zh&&(a.blendDst=this.blendDst),this.blendEquation!==vs&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Ic&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zg&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==fr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==fr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function l(c){const h=[];for(const f in c){const p=c[f];delete p.metadata,h.push(p)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(a.textures=c),h.length>0&&(a.images=h)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let a=null;if(i!==null){const l=i.length;a=new Array(l);for(let c=0;c!==l;++c)a[c]=i[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Kc extends el{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=tv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fn=new k,Sc=new It;class Pi{constructor(t,i,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=a,this.usage=Kg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn('THREE.BufferAttribute: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,a){t*=this.itemSize,a*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[a+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,a=this.count;i<a;i++)Sc.fromBufferAttribute(this,i),Sc.applyMatrix3(t),this.setXY(i,Sc.x,Sc.y);else if(this.itemSize===3)for(let i=0,a=this.count;i<a;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let i=0,a=this.count;i<a;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let i=0,a=this.count;i<a;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let i=0,a=this.count;i<a;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let a=this.array[t*this.itemSize+i];return this.normalized&&(a=Cr(a,this.array)),a}setComponent(t,i,a){return this.normalized&&(a=Pn(a,this.array)),this.array[t*this.itemSize+i]=a,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Cr(i,this.array)),i}setX(t,i){return this.normalized&&(i=Pn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Cr(i,this.array)),i}setY(t,i){return this.normalized&&(i=Pn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Cr(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Pn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Cr(i,this.array)),i}setW(t,i){return this.normalized&&(i=Pn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,a){return t*=this.itemSize,this.normalized&&(i=Pn(i,this.array),a=Pn(a,this.array)),this.array[t+0]=i,this.array[t+1]=a,this}setXYZ(t,i,a,l){return t*=this.itemSize,this.normalized&&(i=Pn(i,this.array),a=Pn(a,this.array),l=Pn(l,this.array)),this.array[t+0]=i,this.array[t+1]=a,this.array[t+2]=l,this}setXYZW(t,i,a,l,c){return t*=this.itemSize,this.normalized&&(i=Pn(i,this.array),a=Pn(a,this.array),l=Pn(l,this.array),c=Pn(c,this.array)),this.array[t+0]=i,this.array[t+1]=a,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Kg&&(t.usage=this.usage),t}}class vv extends Pi{constructor(t,i,a){super(new Uint16Array(t),i,a)}}class yv extends Pi{constructor(t,i,a){super(new Uint32Array(t),i,a)}}class en extends Pi{constructor(t,i,a){super(new Float32Array(t),i,a)}}let WM=0;const di=new tn,Nh=new An,xr=new k,ni=new tl,Bo=new tl,vn=new k;class _i extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=Cs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dv(t)?yv:vv)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,a=0){this.groups.push({start:t,count:i,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new ve().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,i,a){return di.makeTranslation(t,i,a),this.applyMatrix4(di),this}scale(t,i,a){return di.makeScale(t,i,a),this.applyMatrix4(di),this}lookAt(t){return Nh.lookAt(t),Nh.updateMatrix(),this.applyMatrix4(Nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(t){const i=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];i.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new en(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let a=0,l=i.length;a<l;a++){const c=i[a];ni.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fd);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(t){const a=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const f=i[c];Bo.setFromBufferAttribute(f),this.morphTargetsRelative?(vn.addVectors(ni.min,Bo.min),ni.expandByPoint(vn),vn.addVectors(ni.max,Bo.max),ni.expandByPoint(vn)):(ni.expandByPoint(Bo.min),ni.expandByPoint(Bo.max))}ni.getCenter(a);let l=0;for(let c=0,h=t.count;c<h;c++)vn.fromBufferAttribute(t,c),l=Math.max(l,a.distanceToSquared(vn));if(i)for(let c=0,h=i.length;c<h;c++){const f=i[c],p=this.morphTargetsRelative;for(let m=0,g=f.count;m<g;m++)vn.fromBufferAttribute(f,m),p&&(xr.fromBufferAttribute(t,m),vn.add(xr)),l=Math.max(l,a.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=t.array,l=i.position.array,c=i.normal.array,h=i.uv.array,f=l.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*f),4));const p=this.getAttribute("tangent").array,m=[],g=[];for(let z=0;z<f;z++)m[z]=new k,g[z]=new k;const _=new k,y=new k,M=new k,E=new It,b=new It,x=new It,v=new k,B=new k;function T(z,$,Z){_.fromArray(l,z*3),y.fromArray(l,$*3),M.fromArray(l,Z*3),E.fromArray(h,z*2),b.fromArray(h,$*2),x.fromArray(h,Z*2),y.sub(_),M.sub(_),b.sub(E),x.sub(E);const ct=1/(b.x*x.y-x.x*b.y);isFinite(ct)&&(v.copy(y).multiplyScalar(x.y).addScaledVector(M,-b.y).multiplyScalar(ct),B.copy(M).multiplyScalar(b.x).addScaledVector(y,-x.x).multiplyScalar(ct),m[z].add(v),m[$].add(v),m[Z].add(v),g[z].add(B),g[$].add(B),g[Z].add(B))}let L=this.groups;L.length===0&&(L=[{start:0,count:a.length}]);for(let z=0,$=L.length;z<$;++z){const Z=L[z],ct=Z.start,H=Z.count;for(let rt=ct,F=ct+H;rt<F;rt+=3)T(a[rt+0],a[rt+1],a[rt+2])}const w=new k,I=new k,N=new k,K=new k;function C(z){N.fromArray(c,z*3),K.copy(N);const $=m[z];w.copy($),w.sub(N.multiplyScalar(N.dot($))).normalize(),I.crossVectors(K,$);const ct=I.dot(g[z])<0?-1:1;p[z*4]=w.x,p[z*4+1]=w.y,p[z*4+2]=w.z,p[z*4+3]=ct}for(let z=0,$=L.length;z<$;++z){const Z=L[z],ct=Z.start,H=Z.count;for(let rt=ct,F=ct+H;rt<F;rt+=3)C(a[rt+0]),C(a[rt+1]),C(a[rt+2])}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Pi(new Float32Array(i.count*3),3),this.setAttribute("normal",a);else for(let y=0,M=a.count;y<M;y++)a.setXYZ(y,0,0,0);const l=new k,c=new k,h=new k,f=new k,p=new k,m=new k,g=new k,_=new k;if(t)for(let y=0,M=t.count;y<M;y+=3){const E=t.getX(y+0),b=t.getX(y+1),x=t.getX(y+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,x),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),f.fromBufferAttribute(a,E),p.fromBufferAttribute(a,b),m.fromBufferAttribute(a,x),f.add(g),p.add(g),m.add(g),a.setXYZ(E,f.x,f.y,f.z),a.setXYZ(b,p.x,p.y,p.z),a.setXYZ(x,m.x,m.y,m.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),a.setXYZ(y+0,g.x,g.y,g.z),a.setXYZ(y+1,g.x,g.y,g.z),a.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,a=t.count;i<a;i++)vn.fromBufferAttribute(t,i),vn.normalize(),t.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function t(f,p){const m=f.array,g=f.itemSize,_=f.normalized,y=new m.constructor(p.length*g);let M=0,E=0;for(let b=0,x=p.length;b<x;b++){f.isInterleavedBufferAttribute?M=p[b]*f.data.stride+f.offset:M=p[b]*g;for(let v=0;v<g;v++)y[E++]=m[M++]}return new Pi(y,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new _i,a=this.index.array,l=this.attributes;for(const f in l){const p=l[f],m=t(p,a);i.setAttribute(f,m)}const c=this.morphAttributes;for(const f in c){const p=[],m=c[f];for(let g=0,_=m.length;g<_;g++){const y=m[g],M=t(y,a);p.push(M)}i.morphAttributes[f]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let f=0,p=h.length;f<p;f++){const m=h[f];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const a=this.attributes;for(const p in a){const m=a[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let _=0,y=m.length;_<y;_++){const M=m[_];g.push(M.toJSON(t.data))}g.length>0&&(l[p]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone(i));const l=t.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const c=t.morphAttributes;for(const m in c){const g=[],_=c[m];for(let y=0,M=_.length;y<M;y++)g.push(_[y].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let m=0,g=h.length;m<g;m++){const _=h[m];this.addGroup(_.start,_.count,_.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const u_=new tn,ms=new hd,Mc=new fd,f_=new k,Sr=new k,Mr=new k,Er=new k,Oh=new k,Ec=new k,bc=new It,Tc=new It,Ac=new It,h_=new k,d_=new k,p_=new k,Rc=new k,Cc=new k;class ke extends An{constructor(t=new _i,i=new Kc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const l=i[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const f=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(t,i){const a=this.geometry,l=a.attributes.position,c=a.morphAttributes.position,h=a.morphTargetsRelative;i.fromBufferAttribute(l,t);const f=this.morphTargetInfluences;if(c&&f){Ec.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=f[p],_=c[p];g!==0&&(Oh.fromBufferAttribute(_,t),h?Ec.addScaledVector(Oh,g):Ec.addScaledVector(Oh.sub(i),g))}i.add(Ec)}return i}raycast(t,i){const a=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Mc.copy(a.boundingSphere),Mc.applyMatrix4(c),ms.copy(t.ray).recast(t.near),!(Mc.containsPoint(ms.origin)===!1&&(ms.intersectSphere(Mc,f_)===null||ms.origin.distanceToSquared(f_)>(t.far-t.near)**2))&&(u_.copy(c).invert(),ms.copy(t.ray).applyMatrix4(u_),!(a.boundingBox!==null&&ms.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,i,ms)))}_computeIntersections(t,i,a){let l;const c=this.geometry,h=this.material,f=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,y=c.groups,M=c.drawRange;if(f!==null)if(Array.isArray(h))for(let E=0,b=y.length;E<b;E++){const x=y[E],v=h[x.materialIndex],B=Math.max(x.start,M.start),T=Math.min(f.count,Math.min(x.start+x.count,M.start+M.count));for(let L=B,w=T;L<w;L+=3){const I=f.getX(L),N=f.getX(L+1),K=f.getX(L+2);l=wc(this,v,t,a,m,g,_,I,N,K),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),b=Math.min(f.count,M.start+M.count);for(let x=E,v=b;x<v;x+=3){const B=f.getX(x),T=f.getX(x+1),L=f.getX(x+2);l=wc(this,h,t,a,m,g,_,B,T,L),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let E=0,b=y.length;E<b;E++){const x=y[E],v=h[x.materialIndex],B=Math.max(x.start,M.start),T=Math.min(p.count,Math.min(x.start+x.count,M.start+M.count));for(let L=B,w=T;L<w;L+=3){const I=L,N=L+1,K=L+2;l=wc(this,v,t,a,m,g,_,I,N,K),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),b=Math.min(p.count,M.start+M.count);for(let x=E,v=b;x<v;x+=3){const B=x,T=x+1,L=x+2;l=wc(this,h,t,a,m,g,_,B,T,L),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function qM(r,t,i,a,l,c,h,f){let p;if(t.side===In?p=a.intersectTriangle(h,c,l,!0,f):p=a.intersectTriangle(l,c,h,t.side===ja,f),p===null)return null;Cc.copy(f),Cc.applyMatrix4(r.matrixWorld);const m=i.ray.origin.distanceTo(Cc);return m<i.near||m>i.far?null:{distance:m,point:Cc.clone(),object:r}}function wc(r,t,i,a,l,c,h,f,p,m){r.getVertexPosition(f,Sr),r.getVertexPosition(p,Mr),r.getVertexPosition(m,Er);const g=qM(r,t,i,a,Sr,Mr,Er,Rc);if(g){l&&(bc.fromBufferAttribute(l,f),Tc.fromBufferAttribute(l,p),Ac.fromBufferAttribute(l,m),g.uv=Ti.getInterpolation(Rc,Sr,Mr,Er,bc,Tc,Ac,new It)),c&&(bc.fromBufferAttribute(c,f),Tc.fromBufferAttribute(c,p),Ac.fromBufferAttribute(c,m),g.uv1=Ti.getInterpolation(Rc,Sr,Mr,Er,bc,Tc,Ac,new It),g.uv2=g.uv1),h&&(h_.fromBufferAttribute(h,f),d_.fromBufferAttribute(h,p),p_.fromBufferAttribute(h,m),g.normal=Ti.getInterpolation(Rc,Sr,Mr,Er,h_,d_,p_,new k),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const _={a:f,b:p,c:m,normal:new k,materialIndex:0};Ti.getNormal(Sr,Mr,Er,_.normal),g.face=_}return g}class ws extends _i{constructor(t=1,i=1,a=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:a,widthSegments:l,heightSegments:c,depthSegments:h};const f=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const p=[],m=[],g=[],_=[];let y=0,M=0;E("z","y","x",-1,-1,a,i,t,h,c,0),E("z","y","x",1,-1,a,i,-t,h,c,1),E("x","z","y",1,1,t,a,i,l,h,2),E("x","z","y",1,-1,t,a,-i,l,h,3),E("x","y","z",1,-1,t,i,a,l,c,4),E("x","y","z",-1,-1,t,i,-a,l,c,5),this.setIndex(p),this.setAttribute("position",new en(m,3)),this.setAttribute("normal",new en(g,3)),this.setAttribute("uv",new en(_,2));function E(b,x,v,B,T,L,w,I,N,K,C){const z=L/N,$=w/K,Z=L/2,ct=w/2,H=I/2,rt=N+1,F=K+1;let W=0,dt=0;const tt=new k;for(let vt=0;vt<F;vt++){const O=vt*$-ct;for(let Y=0;Y<rt;Y++){const V=Y*z-Z;tt[b]=V*B,tt[x]=O*T,tt[v]=H,m.push(tt.x,tt.y,tt.z),tt[b]=0,tt[x]=0,tt[v]=I>0?1:-1,g.push(tt.x,tt.y,tt.z),_.push(Y/N),_.push(1-vt/K),W+=1}}for(let vt=0;vt<K;vt++)for(let O=0;O<N;O++){const Y=y+O+rt*vt,V=y+O+rt*(vt+1),et=y+(O+1)+rt*(vt+1),Tt=y+(O+1)+rt*vt;p.push(Y,V,Tt),p.push(V,et,Tt),dt+=6}f.addGroup(M,dt,C),M+=dt,y+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ws(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function zr(r){const t={};for(const i in r){t[i]={};for(const a in r[i]){const l=r[i][a];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][a]=null):t[i][a]=l.clone():Array.isArray(l)?t[i][a]=l.slice():t[i][a]=l}}return t}function zn(r){const t={};for(let i=0;i<r.length;i++){const a=zr(r[i]);for(const l in a)t[l]=a[l]}return t}function YM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function xv(r){return r.getRenderTarget()===null?r.outputColorSpace:ze.workingColorSpace}const jM={clone:zr,merge:zn};var ZM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,KM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ts extends el{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ZM,this.fragmentShader=KM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zr(t.uniforms),this.uniformsGroups=YM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const a={};for(const l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(i.extensions=a),i}}class Sv extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=oa}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ii extends Sv{constructor(t=50,i=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Ko*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ko*2*Math.atan(Math.tan(Vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,i,a,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Vo*.5*this.fov)/this.zoom,a=2*i,l=this.aspect*a,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;c+=h.offsetX*l/p,i-=h.offsetY*a/m,l*=h.width/p,a*=h.height/m}const f=this.filmOffset;f!==0&&(c+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-a,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const br=-90,Tr=1;class QM extends An{constructor(t,i,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ii(br,Tr,t,i);l.layers=this.layers,this.add(l);const c=new ii(br,Tr,t,i);c.layers=this.layers,this.add(c);const h=new ii(br,Tr,t,i);h.layers=this.layers,this.add(h);const f=new ii(br,Tr,t,i);f.layers=this.layers,this.add(f);const p=new ii(br,Tr,t,i);p.layers=this.layers,this.add(p);const m=new ii(br,Tr,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[a,l,c,h,f,p]=i;for(const m of i)this.remove(m);if(t===oa)a.up.set(0,1,0),a.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===kc)a.up.set(0,-1,0),a.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,f,p,m,g]=this.children,_=t.getRenderTarget(),y=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,l),t.render(i,c),t.setRenderTarget(a,1,l),t.render(i,h),t.setRenderTarget(a,2,l),t.render(i,f),t.setRenderTarget(a,3,l),t.render(i,p),t.setRenderTarget(a,4,l),t.render(i,m),a.texture.generateMipmaps=b,t.setRenderTarget(a,5,l),t.render(i,g),t.setRenderTarget(_,y,M),t.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class Mv extends qn{constructor(t,i,a,l,c,h,f,p,m,g){t=t!==void 0?t:[],i=i!==void 0?i:Nr,super(t,i,a,l,c,h,f,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class JM extends bs{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},l=[a,a,a,a,a,a];i.encoding!==void 0&&(Xo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ms?yn:gi),this.texture=new Mv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:mi}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ws(5,5,5),c=new Ts({name:"CubemapFromEquirect",uniforms:zr(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:In,blending:Wa});c.uniforms.tEquirect.value=i;const h=new ke(l,c),f=i.minFilter;return i.minFilter===jo&&(i.minFilter=mi),new QM(1,10,this).update(t,h),i.minFilter=f,h.geometry.dispose(),h.material.dispose(),this}clear(t,i,a,l){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,a,l);t.setRenderTarget(c)}}const Ph=new k,$M=new k,tE=new ve;class Va{constructor(t=new k(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,a,l){return this.normal.set(t,i,a),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,a){const l=Ph.subVectors(a,i).cross($M.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const a=t.delta(Ph),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return i<0&&a>0||a<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const a=i||tE.getNormalMatrix(t),l=this.coplanarPoint(Ph).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new fd,Lc=new k;class pd{constructor(t=new Va,i=new Va,a=new Va,l=new Va,c=new Va,h=new Va){this.planes=[t,i,a,l,c,h]}set(t,i,a,l,c,h){const f=this.planes;return f[0].copy(t),f[1].copy(i),f[2].copy(a),f[3].copy(l),f[4].copy(c),f[5].copy(h),this}copy(t){const i=this.planes;for(let a=0;a<6;a++)i[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,i=oa){const a=this.planes,l=t.elements,c=l[0],h=l[1],f=l[2],p=l[3],m=l[4],g=l[5],_=l[6],y=l[7],M=l[8],E=l[9],b=l[10],x=l[11],v=l[12],B=l[13],T=l[14],L=l[15];if(a[0].setComponents(p-c,y-m,x-M,L-v).normalize(),a[1].setComponents(p+c,y+m,x+M,L+v).normalize(),a[2].setComponents(p+h,y+g,x+E,L+B).normalize(),a[3].setComponents(p-h,y-g,x-E,L-B).normalize(),a[4].setComponents(p-f,y-_,x-b,L-T).normalize(),i===oa)a[5].setComponents(p+f,y+_,x+b,L+T).normalize();else if(i===kc)a[5].setComponents(f,_,b,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),gs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(t){return gs.center.set(0,0,0),gs.radius=.7071067811865476,gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(t){const i=this.planes,a=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(a)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let a=0;a<6;a++){const l=i[a];if(Lc.x=l.normal.x>0?t.max.x:t.min.x,Lc.y=l.normal.y>0?t.max.y:t.min.y,Lc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Lc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let a=0;a<6;a++)if(i[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ev(){let r=null,t=!1,i=null,a=null;function l(c,h){i(c,h),a=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(a=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function eE(r,t){const i=t.isWebGL2,a=new WeakMap;function l(m,g){const _=m.array,y=m.usage,M=_.byteLength,E=r.createBuffer();r.bindBuffer(g,E),r.bufferData(g,_,y),m.onUploadCallback();let b;if(_ instanceof Float32Array)b=r.FLOAT;else if(_ instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(i)b=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=r.UNSIGNED_SHORT;else if(_ instanceof Int16Array)b=r.SHORT;else if(_ instanceof Uint32Array)b=r.UNSIGNED_INT;else if(_ instanceof Int32Array)b=r.INT;else if(_ instanceof Int8Array)b=r.BYTE;else if(_ instanceof Uint8Array)b=r.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)b=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:E,type:b,bytesPerElement:_.BYTES_PER_ELEMENT,version:m.version,size:M}}function c(m,g,_){const y=g.array,M=g._updateRange,E=g.updateRanges;if(r.bindBuffer(_,m),M.count===-1&&E.length===0&&r.bufferSubData(_,0,y),E.length!==0){for(let b=0,x=E.length;b<x;b++){const v=E[b];i?r.bufferSubData(_,v.start*y.BYTES_PER_ELEMENT,y,v.start,v.count):r.bufferSubData(_,v.start*y.BYTES_PER_ELEMENT,y.subarray(v.start,v.start+v.count))}g.clearUpdateRanges()}M.count!==-1&&(i?r.bufferSubData(_,M.offset*y.BYTES_PER_ELEMENT,y,M.offset,M.count):r.bufferSubData(_,M.offset*y.BYTES_PER_ELEMENT,y.subarray(M.offset,M.offset+M.count)),M.count=-1),g.onUploadCallback()}function h(m){return m.isInterleavedBufferAttribute&&(m=m.data),a.get(m)}function f(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=a.get(m);g&&(r.deleteBuffer(g.buffer),a.delete(m))}function p(m,g){if(m.isGLBufferAttribute){const y=a.get(m);(!y||y.version<m.version)&&a.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const _=a.get(m);if(_===void 0)a.set(m,l(m,g));else if(_.version<m.version){if(_.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");c(_.buffer,m,g),_.version=m.version}}return{get:h,remove:f,update:p}}class Qc extends _i{constructor(t=1,i=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:a,heightSegments:l};const c=t/2,h=i/2,f=Math.floor(a),p=Math.floor(l),m=f+1,g=p+1,_=t/f,y=i/p,M=[],E=[],b=[],x=[];for(let v=0;v<g;v++){const B=v*y-h;for(let T=0;T<m;T++){const L=T*_-c;E.push(L,-B,0),b.push(0,0,1),x.push(T/f),x.push(1-v/p)}}for(let v=0;v<p;v++)for(let B=0;B<f;B++){const T=B+m*v,L=B+m*(v+1),w=B+1+m*(v+1),I=B+1+m*v;M.push(T,L,I),M.push(L,w,I)}this.setIndex(M),this.setAttribute("position",new en(E,3)),this.setAttribute("normal",new en(b,3)),this.setAttribute("uv",new en(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qc(t.width,t.height,t.widthSegments,t.heightSegments)}}var nE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iE=`#ifdef USE_ALPHAHASH
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
#endif`,aE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rE=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,oE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lE=`#ifdef USE_AOMAP
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
#endif`,cE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uE=`#ifdef USE_BATCHING
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
#endif`,fE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,hE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mE=`#ifdef USE_IRIDESCENCE
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
#endif`,gE=`#ifdef USE_BUMPMAP
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
#endif`,_E=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,SE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ME=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,EE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,bE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,TE=`#define PI 3.141592653589793
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
} // validated`,AE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,RE=`vec3 transformedNormal = objectNormal;
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
#endif`,CE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,LE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UE="gl_FragColor = linearToOutputTexel( gl_FragColor );",NE=`
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
}`,OE=`#ifdef USE_ENVMAP
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
#endif`,PE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zE=`#ifdef USE_ENVMAP
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
#endif`,BE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IE=`#ifdef USE_ENVMAP
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
#endif`,FE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,GE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,VE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kE=`#ifdef USE_GRADIENTMAP
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
}`,XE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,WE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jE=`uniform bool receiveShadow;
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
#endif`,ZE=`#ifdef USE_ENVMAP
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
#endif`,KE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,JE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$E=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t1=`PhysicalMaterial material;
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
#endif`,e1=`struct PhysicalMaterial {
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
}`,n1=`
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
#endif`,i1=`#if defined( RE_IndirectDiffuse )
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
#endif`,a1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,s1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,l1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,c1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,u1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,h1=`#if defined( USE_POINTS_UV )
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
#endif`,d1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,p1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g1=`#ifdef USE_MORPHNORMALS
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
#endif`,_1=`#ifdef USE_MORPHTARGETS
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
#endif`,v1=`#ifdef USE_MORPHTARGETS
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
#endif`,y1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,x1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,S1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,b1=`#ifdef USE_NORMALMAP
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
#endif`,T1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,A1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,C1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,L1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,D1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,U1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,F1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,H1=`float getShadowMask() {
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
}`,G1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,V1=`#ifdef USE_SKINNING
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
#endif`,k1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X1=`#ifdef USE_SKINNING
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
#endif`,W1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,j1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Z1=`#ifdef USE_TRANSMISSION
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
#endif`,K1=`#ifdef USE_TRANSMISSION
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
#endif`,Q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nb=`uniform sampler2D t2D;
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
}`,ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ab=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ob=`#include <common>
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
}`,lb=`#if DEPTH_PACKING == 3200
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
}`,cb=`#define DISTANCE
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
}`,ub=`#define DISTANCE
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
}`,fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,db=`uniform float scale;
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
}`,pb=`uniform vec3 diffuse;
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
}`,mb=`#include <common>
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
}`,gb=`uniform vec3 diffuse;
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
}`,_b=`#define LAMBERT
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
}`,vb=`#define LAMBERT
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
}`,yb=`#define MATCAP
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
}`,xb=`#define MATCAP
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
}`,Sb=`#define NORMAL
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
}`,Mb=`#define NORMAL
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
}`,Eb=`#define PHONG
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
}`,bb=`#define PHONG
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
}`,Tb=`#define STANDARD
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
}`,Ab=`#define STANDARD
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
}`,Rb=`#define TOON
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
}`,Cb=`#define TOON
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
}`,wb=`uniform float size;
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
}`,Lb=`uniform vec3 diffuse;
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
}`,Db=`#include <common>
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
}`,Ub=`uniform vec3 color;
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
}`,Nb=`uniform float rotation;
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
}`,Ob=`uniform vec3 diffuse;
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
}`,_e={alphahash_fragment:nE,alphahash_pars_fragment:iE,alphamap_fragment:aE,alphamap_pars_fragment:sE,alphatest_fragment:rE,alphatest_pars_fragment:oE,aomap_fragment:lE,aomap_pars_fragment:cE,batching_pars_vertex:uE,batching_vertex:fE,begin_vertex:hE,beginnormal_vertex:dE,bsdfs:pE,iridescence_fragment:mE,bumpmap_pars_fragment:gE,clipping_planes_fragment:_E,clipping_planes_pars_fragment:vE,clipping_planes_pars_vertex:yE,clipping_planes_vertex:xE,color_fragment:SE,color_pars_fragment:ME,color_pars_vertex:EE,color_vertex:bE,common:TE,cube_uv_reflection_fragment:AE,defaultnormal_vertex:RE,displacementmap_pars_vertex:CE,displacementmap_vertex:wE,emissivemap_fragment:LE,emissivemap_pars_fragment:DE,colorspace_fragment:UE,colorspace_pars_fragment:NE,envmap_fragment:OE,envmap_common_pars_fragment:PE,envmap_pars_fragment:zE,envmap_pars_vertex:BE,envmap_physical_pars_fragment:ZE,envmap_vertex:IE,fog_vertex:FE,fog_pars_vertex:HE,fog_fragment:GE,fog_pars_fragment:VE,gradientmap_pars_fragment:kE,lightmap_fragment:XE,lightmap_pars_fragment:WE,lights_lambert_fragment:qE,lights_lambert_pars_fragment:YE,lights_pars_begin:jE,lights_toon_fragment:KE,lights_toon_pars_fragment:QE,lights_phong_fragment:JE,lights_phong_pars_fragment:$E,lights_physical_fragment:t1,lights_physical_pars_fragment:e1,lights_fragment_begin:n1,lights_fragment_maps:i1,lights_fragment_end:a1,logdepthbuf_fragment:s1,logdepthbuf_pars_fragment:r1,logdepthbuf_pars_vertex:o1,logdepthbuf_vertex:l1,map_fragment:c1,map_pars_fragment:u1,map_particle_fragment:f1,map_particle_pars_fragment:h1,metalnessmap_fragment:d1,metalnessmap_pars_fragment:p1,morphcolor_vertex:m1,morphnormal_vertex:g1,morphtarget_pars_vertex:_1,morphtarget_vertex:v1,normal_fragment_begin:y1,normal_fragment_maps:x1,normal_pars_fragment:S1,normal_pars_vertex:M1,normal_vertex:E1,normalmap_pars_fragment:b1,clearcoat_normal_fragment_begin:T1,clearcoat_normal_fragment_maps:A1,clearcoat_pars_fragment:R1,iridescence_pars_fragment:C1,opaque_fragment:w1,packing:L1,premultiplied_alpha_fragment:D1,project_vertex:U1,dithering_fragment:N1,dithering_pars_fragment:O1,roughnessmap_fragment:P1,roughnessmap_pars_fragment:z1,shadowmap_pars_fragment:B1,shadowmap_pars_vertex:I1,shadowmap_vertex:F1,shadowmask_pars_fragment:H1,skinbase_vertex:G1,skinning_pars_vertex:V1,skinning_vertex:k1,skinnormal_vertex:X1,specularmap_fragment:W1,specularmap_pars_fragment:q1,tonemapping_fragment:Y1,tonemapping_pars_fragment:j1,transmission_fragment:Z1,transmission_pars_fragment:K1,uv_pars_fragment:Q1,uv_pars_vertex:J1,uv_vertex:$1,worldpos_vertex:tb,background_vert:eb,background_frag:nb,backgroundCube_vert:ib,backgroundCube_frag:ab,cube_vert:sb,cube_frag:rb,depth_vert:ob,depth_frag:lb,distanceRGBA_vert:cb,distanceRGBA_frag:ub,equirect_vert:fb,equirect_frag:hb,linedashed_vert:db,linedashed_frag:pb,meshbasic_vert:mb,meshbasic_frag:gb,meshlambert_vert:_b,meshlambert_frag:vb,meshmatcap_vert:yb,meshmatcap_frag:xb,meshnormal_vert:Sb,meshnormal_frag:Mb,meshphong_vert:Eb,meshphong_frag:bb,meshphysical_vert:Tb,meshphysical_frag:Ab,meshtoon_vert:Rb,meshtoon_frag:Cb,points_vert:wb,points_frag:Lb,shadow_vert:Db,shadow_frag:Ub,sprite_vert:Nb,sprite_frag:Ob},Gt={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ve},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0},uvTransform:{value:new ve}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}}},Oi={basic:{uniforms:zn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:zn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new be(0)}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:zn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:zn([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:zn([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new be(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:zn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:zn([Gt.points,Gt.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:zn([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:zn([Gt.common,Gt.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:zn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:zn([Gt.sprite,Gt.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distanceRGBA:{uniforms:zn([Gt.common,Gt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distanceRGBA_vert,fragmentShader:_e.distanceRGBA_frag},shadow:{uniforms:zn([Gt.lights,Gt.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};Oi.physical={uniforms:zn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ve},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ve},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ve},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ve},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ve},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ve}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};const Dc={r:0,b:0,g:0};function Pb(r,t,i,a,l,c,h){const f=new be(0);let p=c===!0?0:1,m,g,_=null,y=0,M=null;function E(x,v){let B=!1,T=v.isScene===!0?v.background:null;T&&T.isTexture&&(T=(v.backgroundBlurriness>0?i:t).get(T)),T===null?b(f,p):T&&T.isColor&&(b(T,1),B=!0);const L=r.xr.getEnvironmentBlendMode();L==="additive"?a.buffers.color.setClear(0,0,0,1,h):L==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,h),(r.autoClear||B)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),T&&(T.isCubeTexture||T.mapping===Yc)?(g===void 0&&(g=new ke(new ws(1,1,1),new Ts({name:"BackgroundCubeMaterial",uniforms:zr(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(w,I,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),g.material.uniforms.envMap.value=T,g.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,g.material.toneMapped=ze.getTransfer(T.colorSpace)!==Ve,(_!==T||y!==T.version||M!==r.toneMapping)&&(g.material.needsUpdate=!0,_=T,y=T.version,M=r.toneMapping),g.layers.enableAll(),x.unshift(g,g.geometry,g.material,0,0,null)):T&&T.isTexture&&(m===void 0&&(m=new ke(new Qc(2,2),new Ts({name:"BackgroundMaterial",uniforms:zr(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:ja,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=T,m.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,m.material.toneMapped=ze.getTransfer(T.colorSpace)!==Ve,T.matrixAutoUpdate===!0&&T.updateMatrix(),m.material.uniforms.uvTransform.value.copy(T.matrix),(_!==T||y!==T.version||M!==r.toneMapping)&&(m.material.needsUpdate=!0,_=T,y=T.version,M=r.toneMapping),m.layers.enableAll(),x.unshift(m,m.geometry,m.material,0,0,null))}function b(x,v){x.getRGB(Dc,xv(r)),a.buffers.color.setClear(Dc.r,Dc.g,Dc.b,v,h)}return{getClearColor:function(){return f},setClearColor:function(x,v=1){f.set(x),p=v,b(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(x){p=x,b(f,p)},render:E}}function zb(r,t,i,a){const l=r.getParameter(r.MAX_VERTEX_ATTRIBS),c=a.isWebGL2?null:t.get("OES_vertex_array_object"),h=a.isWebGL2||c!==null,f={},p=x(null);let m=p,g=!1;function _(H,rt,F,W,dt){let tt=!1;if(h){const vt=b(W,F,rt);m!==vt&&(m=vt,M(m.object)),tt=v(H,W,F,dt),tt&&B(H,W,F,dt)}else{const vt=rt.wireframe===!0;(m.geometry!==W.id||m.program!==F.id||m.wireframe!==vt)&&(m.geometry=W.id,m.program=F.id,m.wireframe=vt,tt=!0)}dt!==null&&i.update(dt,r.ELEMENT_ARRAY_BUFFER),(tt||g)&&(g=!1,K(H,rt,F,W),dt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,i.get(dt).buffer))}function y(){return a.isWebGL2?r.createVertexArray():c.createVertexArrayOES()}function M(H){return a.isWebGL2?r.bindVertexArray(H):c.bindVertexArrayOES(H)}function E(H){return a.isWebGL2?r.deleteVertexArray(H):c.deleteVertexArrayOES(H)}function b(H,rt,F){const W=F.wireframe===!0;let dt=f[H.id];dt===void 0&&(dt={},f[H.id]=dt);let tt=dt[rt.id];tt===void 0&&(tt={},dt[rt.id]=tt);let vt=tt[W];return vt===void 0&&(vt=x(y()),tt[W]=vt),vt}function x(H){const rt=[],F=[],W=[];for(let dt=0;dt<l;dt++)rt[dt]=0,F[dt]=0,W[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:rt,enabledAttributes:F,attributeDivisors:W,object:H,attributes:{},index:null}}function v(H,rt,F,W){const dt=m.attributes,tt=rt.attributes;let vt=0;const O=F.getAttributes();for(const Y in O)if(O[Y].location>=0){const et=dt[Y];let Tt=tt[Y];if(Tt===void 0&&(Y==="instanceMatrix"&&H.instanceMatrix&&(Tt=H.instanceMatrix),Y==="instanceColor"&&H.instanceColor&&(Tt=H.instanceColor)),et===void 0||et.attribute!==Tt||Tt&&et.data!==Tt.data)return!0;vt++}return m.attributesNum!==vt||m.index!==W}function B(H,rt,F,W){const dt={},tt=rt.attributes;let vt=0;const O=F.getAttributes();for(const Y in O)if(O[Y].location>=0){let et=tt[Y];et===void 0&&(Y==="instanceMatrix"&&H.instanceMatrix&&(et=H.instanceMatrix),Y==="instanceColor"&&H.instanceColor&&(et=H.instanceColor));const Tt={};Tt.attribute=et,et&&et.data&&(Tt.data=et.data),dt[Y]=Tt,vt++}m.attributes=dt,m.attributesNum=vt,m.index=W}function T(){const H=m.newAttributes;for(let rt=0,F=H.length;rt<F;rt++)H[rt]=0}function L(H){w(H,0)}function w(H,rt){const F=m.newAttributes,W=m.enabledAttributes,dt=m.attributeDivisors;F[H]=1,W[H]===0&&(r.enableVertexAttribArray(H),W[H]=1),dt[H]!==rt&&((a.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[a.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,rt),dt[H]=rt)}function I(){const H=m.newAttributes,rt=m.enabledAttributes;for(let F=0,W=rt.length;F<W;F++)rt[F]!==H[F]&&(r.disableVertexAttribArray(F),rt[F]=0)}function N(H,rt,F,W,dt,tt,vt){vt===!0?r.vertexAttribIPointer(H,rt,F,dt,tt):r.vertexAttribPointer(H,rt,F,W,dt,tt)}function K(H,rt,F,W){if(a.isWebGL2===!1&&(H.isInstancedMesh||W.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;T();const dt=W.attributes,tt=F.getAttributes(),vt=rt.defaultAttributeValues;for(const O in tt){const Y=tt[O];if(Y.location>=0){let V=dt[O];if(V===void 0&&(O==="instanceMatrix"&&H.instanceMatrix&&(V=H.instanceMatrix),O==="instanceColor"&&H.instanceColor&&(V=H.instanceColor)),V!==void 0){const et=V.normalized,Tt=V.itemSize,Dt=i.get(V);if(Dt===void 0)continue;const Ut=Dt.buffer,J=Dt.type,nt=Dt.bytesPerElement,_t=a.isWebGL2===!0&&(J===r.INT||J===r.UNSIGNED_INT||V.gpuType===iv);if(V.isInterleavedBufferAttribute){const yt=V.data,D=yt.stride,st=V.offset;if(yt.isInstancedInterleavedBuffer){for(let ft=0;ft<Y.locationSize;ft++)w(Y.location+ft,yt.meshPerAttribute);H.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ft=0;ft<Y.locationSize;ft++)L(Y.location+ft);r.bindBuffer(r.ARRAY_BUFFER,Ut);for(let ft=0;ft<Y.locationSize;ft++)N(Y.location+ft,Tt/Y.locationSize,J,et,D*nt,(st+Tt/Y.locationSize*ft)*nt,_t)}else{if(V.isInstancedBufferAttribute){for(let yt=0;yt<Y.locationSize;yt++)w(Y.location+yt,V.meshPerAttribute);H.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let yt=0;yt<Y.locationSize;yt++)L(Y.location+yt);r.bindBuffer(r.ARRAY_BUFFER,Ut);for(let yt=0;yt<Y.locationSize;yt++)N(Y.location+yt,Tt/Y.locationSize,J,et,Tt*nt,Tt/Y.locationSize*yt*nt,_t)}}else if(vt!==void 0){const et=vt[O];if(et!==void 0)switch(et.length){case 2:r.vertexAttrib2fv(Y.location,et);break;case 3:r.vertexAttrib3fv(Y.location,et);break;case 4:r.vertexAttrib4fv(Y.location,et);break;default:r.vertexAttrib1fv(Y.location,et)}}}}I()}function C(){Z();for(const H in f){const rt=f[H];for(const F in rt){const W=rt[F];for(const dt in W)E(W[dt].object),delete W[dt];delete rt[F]}delete f[H]}}function z(H){if(f[H.id]===void 0)return;const rt=f[H.id];for(const F in rt){const W=rt[F];for(const dt in W)E(W[dt].object),delete W[dt];delete rt[F]}delete f[H.id]}function $(H){for(const rt in f){const F=f[rt];if(F[H.id]===void 0)continue;const W=F[H.id];for(const dt in W)E(W[dt].object),delete W[dt];delete F[H.id]}}function Z(){ct(),g=!0,m!==p&&(m=p,M(m.object))}function ct(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:_,reset:Z,resetDefaultState:ct,dispose:C,releaseStatesOfGeometry:z,releaseStatesOfProgram:$,initAttributes:T,enableAttribute:L,disableUnusedAttributes:I}}function Bb(r,t,i,a){const l=a.isWebGL2;let c;function h(g){c=g}function f(g,_){r.drawArrays(c,g,_),i.update(_,c,1)}function p(g,_,y){if(y===0)return;let M,E;if(l)M=r,E="drawArraysInstanced";else if(M=t.get("ANGLE_instanced_arrays"),E="drawArraysInstancedANGLE",M===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[E](c,g,_,y),i.update(_,c,y)}function m(g,_,y){if(y===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<y;E++)this.render(g[E],_[E]);else{M.multiDrawArraysWEBGL(c,g,0,_,0,y);let E=0;for(let b=0;b<y;b++)E+=_[b];i.update(E,c,1)}}this.setMode=h,this.render=f,this.renderInstances=p,this.renderMultiDraw=m}function Ib(r,t,i){let a;function l(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");a=r.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(N){if(N==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const h=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let f=i.precision!==void 0?i.precision:"highp";const p=c(f);p!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);const m=h||t.has("WEBGL_draw_buffers"),g=i.logarithmicDepthBuffer===!0,_=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),E=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),b=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),B=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=y>0,L=h||t.has("OES_texture_float"),w=T&&L,I=h?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:h,drawBuffers:m,getMaxAnisotropy:l,getMaxPrecision:c,precision:f,logarithmicDepthBuffer:g,maxTextures:_,maxVertexTextures:y,maxTextureSize:M,maxCubemapSize:E,maxAttributes:b,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:B,vertexTextures:T,floatFragmentTextures:L,floatVertexTextures:w,maxSamples:I}}function Fb(r){const t=this;let i=null,a=0,l=!1,c=!1;const h=new Va,f=new ve,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const M=_.length!==0||y||a!==0||l;return l=y,a=_.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,y){i=g(_,y,0)},this.setState=function(_,y,M){const E=_.clippingPlanes,b=_.clipIntersection,x=_.clipShadows,v=r.get(_);if(!l||E===null||E.length===0||c&&!x)c?g(null):m();else{const B=c?0:a,T=B*4;let L=v.clippingState||null;p.value=L,L=g(E,y,T,M);for(let w=0;w!==T;++w)L[w]=i[w];v.clippingState=L,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=B}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(_,y,M,E){const b=_!==null?_.length:0;let x=null;if(b!==0){if(x=p.value,E!==!0||x===null){const v=M+b*4,B=y.matrixWorldInverse;f.getNormalMatrix(B),(x===null||x.length<v)&&(x=new Float32Array(v));for(let T=0,L=M;T!==b;++T,L+=4)h.copy(_[T]).applyMatrix4(B,f),h.normal.toArray(x,L),x[L+3]=h.constant}p.value=x,p.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,x}}function Hb(r){let t=new WeakMap;function i(h,f){return f===Kh?h.mapping=Nr:f===Qh&&(h.mapping=Or),h}function a(h){if(h&&h.isTexture){const f=h.mapping;if(f===Kh||f===Qh)if(t.has(h)){const p=t.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new JM(p.height/2);return m.fromEquirectangularTexture(r,h),t.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const f=h.target;f.removeEventListener("dispose",l);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}class bv extends Sv{constructor(t=-1,i=1,a=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=a,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,a,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=a-t,h=a+t,f=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,h=c+m*this.view.width,f-=g*this.view.offsetY,p=f-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,f,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const wr=4,m_=[.125,.215,.35,.446,.526,.582],ys=20,zh=new bv,g_=new be;let Bh=null,Ih=0,Fh=0;const _s=(1+Math.sqrt(5))/2,Ar=1/_s,__=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,_s,Ar),new k(0,_s,-Ar),new k(Ar,0,_s),new k(-Ar,0,_s),new k(_s,Ar,0),new k(-_s,Ar,0)];class ed{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,a=.1,l=100){Bh=this._renderer.getRenderTarget(),Ih=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,a,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=x_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=y_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Bh,Ih,Fh),t.scissorTest=!1,Uc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Nr||t.mapping===Or?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bh=this._renderer.getRenderTarget(),Ih=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel();const a=i||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,a={magFilter:mi,minFilter:mi,generateMipmaps:!1,type:Zo,format:Ri,colorSpace:la,depthBuffer:!1},l=v_(t,i,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=v_(t,i,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gb(c)),this._blurMaterial=Vb(c,t,i)}return l}_compileMaterial(t){const i=new ke(this._lodPlanes[0],t);this._renderer.compile(i,zh)}_sceneToCubeUV(t,i,a,l){const f=new ii(90,1,i,a),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,y=g.toneMapping;g.getClearColor(g_),g.toneMapping=qa,g.autoClear=!1;const M=new Kc({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),E=new ke(new ws,M);let b=!1;const x=t.background;x?x.isColor&&(M.color.copy(x),t.background=null,b=!0):(M.color.copy(g_),b=!0);for(let v=0;v<6;v++){const B=v%3;B===0?(f.up.set(0,p[v],0),f.lookAt(m[v],0,0)):B===1?(f.up.set(0,0,p[v]),f.lookAt(0,m[v],0)):(f.up.set(0,p[v],0),f.lookAt(0,0,m[v]));const T=this._cubeSize;Uc(l,B*T,v>2?T:0,T,T),g.setRenderTarget(l),b&&g.render(E,f),g.render(t,f)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=y,g.autoClear=_,t.background=x}_textureToCubeUV(t,i){const a=this._renderer,l=t.mapping===Nr||t.mapping===Or;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=x_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=y_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new ke(this._lodPlanes[0],c),f=c.uniforms;f.envMap.value=t;const p=this._cubeSize;Uc(i,0,0,3*p,2*p),a.setRenderTarget(i),a.render(h,zh)}_applyPMREM(t){const i=this._renderer,a=i.autoClear;i.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),h=__[(l-1)%__.length];this._blur(t,l-1,l,c,h)}i.autoClear=a}_blur(t,i,a,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,a,l,"latitudinal",c),this._halfBlur(h,t,a,a,l,"longitudinal",c)}_halfBlur(t,i,a,l,c,h,f){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new ke(this._lodPlanes[l],m),y=m.uniforms,M=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*ys-1),b=c/E,x=isFinite(c)?1+Math.floor(g*b):ys;x>ys&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ys}`);const v=[];let B=0;for(let N=0;N<ys;++N){const K=N/b,C=Math.exp(-K*K/2);v.push(C),N===0?B+=C:N<x&&(B+=2*C)}for(let N=0;N<v.length;N++)v[N]=v[N]/B;y.envMap.value=t.texture,y.samples.value=x,y.weights.value=v,y.latitudinal.value=h==="latitudinal",f&&(y.poleAxis.value=f);const{_lodMax:T}=this;y.dTheta.value=E,y.mipInt.value=T-a;const L=this._sizeLods[l],w=3*L*(l>T-wr?l-T+wr:0),I=4*(this._cubeSize-L);Uc(i,w,I,3*L,2*L),p.setRenderTarget(i),p.render(_,zh)}}function Gb(r){const t=[],i=[],a=[];let l=r;const c=r-wr+1+m_.length;for(let h=0;h<c;h++){const f=Math.pow(2,l);i.push(f);let p=1/f;h>r-wr?p=m_[h-r+wr-1]:h===0&&(p=0),a.push(p);const m=1/(f-2),g=-m,_=1+m,y=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,E=6,b=3,x=2,v=1,B=new Float32Array(b*E*M),T=new Float32Array(x*E*M),L=new Float32Array(v*E*M);for(let I=0;I<M;I++){const N=I%3*2/3-1,K=I>2?0:-1,C=[N,K,0,N+2/3,K,0,N+2/3,K+1,0,N,K,0,N+2/3,K+1,0,N,K+1,0];B.set(C,b*E*I),T.set(y,x*E*I);const z=[I,I,I,I,I,I];L.set(z,v*E*I)}const w=new _i;w.setAttribute("position",new Pi(B,b)),w.setAttribute("uv",new Pi(T,x)),w.setAttribute("faceIndex",new Pi(L,v)),t.push(w),l>wr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:a}}function v_(r,t,i){const a=new bs(r,t,i);return a.texture.mapping=Yc,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Uc(r,t,i,a,l){r.viewport.set(t,i,a,l),r.scissor.set(t,i,a,l)}function Vb(r,t,i){const a=new Float32Array(ys),l=new k(0,1,0);return new Ts({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:md(),fragmentShader:`

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
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function y_(){return new Ts({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:md(),fragmentShader:`

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
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function x_(){return new Ts({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function md(){return`

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
	`}function kb(r){let t=new WeakMap,i=null;function a(f){if(f&&f.isTexture){const p=f.mapping,m=p===Kh||p===Qh,g=p===Nr||p===Or;if(m||g)if(f.isRenderTargetTexture&&f.needsPMREMUpdate===!0){f.needsPMREMUpdate=!1;let _=t.get(f);return i===null&&(i=new ed(r)),_=m?i.fromEquirectangular(f,_):i.fromCubemap(f,_),t.set(f,_),_.texture}else{if(t.has(f))return t.get(f).texture;{const _=f.image;if(m&&_&&_.height>0||g&&_&&l(_)){i===null&&(i=new ed(r));const y=m?i.fromEquirectangular(f):i.fromCubemap(f);return t.set(f,y),f.addEventListener("dispose",c),y.texture}else return null}}}return f}function l(f){let p=0;const m=6;for(let g=0;g<m;g++)f[g]!==void 0&&p++;return p===m}function c(f){const p=f.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:h}}function Xb(r){const t={};function i(a){if(t[a]!==void 0)return t[a];let l;switch(a){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(a)}return t[a]=l,l}return{has:function(a){return i(a)!==null},init:function(a){a.isWebGL2?i("EXT_color_buffer_float"):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(a){const l=i(a);return l===null&&console.warn("THREE.WebGLRenderer: "+a+" extension not supported."),l}}}function Wb(r,t,i,a){const l={},c=new WeakMap;function h(_){const y=_.target;y.index!==null&&t.remove(y.index);for(const E in y.attributes)t.remove(y.attributes[E]);for(const E in y.morphAttributes){const b=y.morphAttributes[E];for(let x=0,v=b.length;x<v;x++)t.remove(b[x])}y.removeEventListener("dispose",h),delete l[y.id];const M=c.get(y);M&&(t.remove(M),c.delete(y)),a.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function f(_,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function p(_){const y=_.attributes;for(const E in y)t.update(y[E],r.ARRAY_BUFFER);const M=_.morphAttributes;for(const E in M){const b=M[E];for(let x=0,v=b.length;x<v;x++)t.update(b[x],r.ARRAY_BUFFER)}}function m(_){const y=[],M=_.index,E=_.attributes.position;let b=0;if(M!==null){const B=M.array;b=M.version;for(let T=0,L=B.length;T<L;T+=3){const w=B[T+0],I=B[T+1],N=B[T+2];y.push(w,I,I,N,N,w)}}else if(E!==void 0){const B=E.array;b=E.version;for(let T=0,L=B.length/3-1;T<L;T+=3){const w=T+0,I=T+1,N=T+2;y.push(w,I,I,N,N,w)}}else return;const x=new(dv(y)?yv:vv)(y,1);x.version=b;const v=c.get(_);v&&t.remove(v),c.set(_,x)}function g(_){const y=c.get(_);if(y){const M=_.index;M!==null&&y.version<M.version&&m(_)}else m(_);return c.get(_)}return{get:f,update:p,getWireframeAttribute:g}}function qb(r,t,i,a){const l=a.isWebGL2;let c;function h(M){c=M}let f,p;function m(M){f=M.type,p=M.bytesPerElement}function g(M,E){r.drawElements(c,E,f,M*p),i.update(E,c,1)}function _(M,E,b){if(b===0)return;let x,v;if(l)x=r,v="drawElementsInstanced";else if(x=t.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[v](c,E,f,M*p,b),i.update(E,c,b)}function y(M,E,b){if(b===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<b;v++)this.render(M[v]/p,E[v]);else{x.multiDrawElementsWEBGL(c,E,0,f,M,0,b);let v=0;for(let B=0;B<b;B++)v+=E[B];i.update(v,c,1)}}this.setMode=h,this.setIndex=m,this.render=g,this.renderInstances=_,this.renderMultiDraw=y}function Yb(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,h,f){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=f*(c/3);break;case r.LINES:i.lines+=f*(c/2);break;case r.LINE_STRIP:i.lines+=f*(c-1);break;case r.LINE_LOOP:i.lines+=f*c;break;case r.POINTS:i.points+=f*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:a}}function jb(r,t){return r[0]-t[0]}function Zb(r,t){return Math.abs(t[1])-Math.abs(r[1])}function Kb(r,t,i){const a={},l=new Float32Array(8),c=new WeakMap,h=new We,f=[];for(let m=0;m<8;m++)f[m]=[m,0];function p(m,g,_){const y=m.morphTargetInfluences;if(t.isWebGL2===!0){const E=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,b=E!==void 0?E.length:0;let x=c.get(g);if(x===void 0||x.count!==b){let rt=function(){ct.dispose(),c.delete(g),g.removeEventListener("dispose",rt)};var M=rt;x!==void 0&&x.texture.dispose();const T=g.morphAttributes.position!==void 0,L=g.morphAttributes.normal!==void 0,w=g.morphAttributes.color!==void 0,I=g.morphAttributes.position||[],N=g.morphAttributes.normal||[],K=g.morphAttributes.color||[];let C=0;T===!0&&(C=1),L===!0&&(C=2),w===!0&&(C=3);let z=g.attributes.position.count*C,$=1;z>t.maxTextureSize&&($=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const Z=new Float32Array(z*$*4*b),ct=new gv(Z,z,$,b);ct.type=Xa,ct.needsUpdate=!0;const H=C*4;for(let F=0;F<b;F++){const W=I[F],dt=N[F],tt=K[F],vt=z*$*4*F;for(let O=0;O<W.count;O++){const Y=O*H;T===!0&&(h.fromBufferAttribute(W,O),Z[vt+Y+0]=h.x,Z[vt+Y+1]=h.y,Z[vt+Y+2]=h.z,Z[vt+Y+3]=0),L===!0&&(h.fromBufferAttribute(dt,O),Z[vt+Y+4]=h.x,Z[vt+Y+5]=h.y,Z[vt+Y+6]=h.z,Z[vt+Y+7]=0),w===!0&&(h.fromBufferAttribute(tt,O),Z[vt+Y+8]=h.x,Z[vt+Y+9]=h.y,Z[vt+Y+10]=h.z,Z[vt+Y+11]=tt.itemSize===4?h.w:1)}}x={count:b,texture:ct,size:new It(z,$)},c.set(g,x),g.addEventListener("dispose",rt)}let v=0;for(let T=0;T<y.length;T++)v+=y[T];const B=g.morphTargetsRelative?1:1-v;_.getUniforms().setValue(r,"morphTargetBaseInfluence",B),_.getUniforms().setValue(r,"morphTargetInfluences",y),_.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),_.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}else{const E=y===void 0?0:y.length;let b=a[g.id];if(b===void 0||b.length!==E){b=[];for(let L=0;L<E;L++)b[L]=[L,0];a[g.id]=b}for(let L=0;L<E;L++){const w=b[L];w[0]=L,w[1]=y[L]}b.sort(Zb);for(let L=0;L<8;L++)L<E&&b[L][1]?(f[L][0]=b[L][0],f[L][1]=b[L][1]):(f[L][0]=Number.MAX_SAFE_INTEGER,f[L][1]=0);f.sort(jb);const x=g.morphAttributes.position,v=g.morphAttributes.normal;let B=0;for(let L=0;L<8;L++){const w=f[L],I=w[0],N=w[1];I!==Number.MAX_SAFE_INTEGER&&N?(x&&g.getAttribute("morphTarget"+L)!==x[I]&&g.setAttribute("morphTarget"+L,x[I]),v&&g.getAttribute("morphNormal"+L)!==v[I]&&g.setAttribute("morphNormal"+L,v[I]),l[L]=N,B+=N):(x&&g.hasAttribute("morphTarget"+L)===!0&&g.deleteAttribute("morphTarget"+L),v&&g.hasAttribute("morphNormal"+L)===!0&&g.deleteAttribute("morphNormal"+L),l[L]=0)}const T=g.morphTargetsRelative?1:1-B;_.getUniforms().setValue(r,"morphTargetBaseInfluence",T),_.getUniforms().setValue(r,"morphTargetInfluences",l)}}return{update:p}}function Qb(r,t,i,a){let l=new WeakMap;function c(p){const m=a.render.frame,g=p.geometry,_=t.get(p,g);if(l.get(_)!==m&&(t.update(_),l.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),l.get(p)!==m&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==m&&(y.update(),l.set(y,m))}return _}function h(){l=new WeakMap}function f(p){const m=p.target;m.removeEventListener("dispose",f),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:h}}class Tv extends qn{constructor(t,i,a,l,c,h,f,p,m,g){if(g=g!==void 0?g:Ss,g!==Ss&&g!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");a===void 0&&g===Ss&&(a=ka),a===void 0&&g===Pr&&(a=xs),super(null,l,c,h,f,p,g,a,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=f!==void 0?f:Bn,this.minFilter=p!==void 0?p:Bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const Av=new qn,Rv=new Tv(1,1);Rv.compareFunction=hv;const Cv=new gv,wv=new PM,Lv=new Mv,S_=[],M_=[],E_=new Float32Array(16),b_=new Float32Array(9),T_=new Float32Array(4);function Br(r,t,i){const a=r[0];if(a<=0||a>0)return r;const l=t*i;let c=S_[l];if(c===void 0&&(c=new Float32Array(l),S_[l]=c),t!==0){a.toArray(c,0);for(let h=1,f=0;h!==t;++h)f+=i,r[h].toArray(c,f)}return c}function pn(r,t){if(r.length!==t.length)return!1;for(let i=0,a=r.length;i<a;i++)if(r[i]!==t[i])return!1;return!0}function mn(r,t){for(let i=0,a=t.length;i<a;i++)r[i]=t[i]}function Jc(r,t){let i=M_[t];i===void 0&&(i=new Int32Array(t),M_[t]=i);for(let a=0;a!==t;++a)i[a]=r.allocateTextureUnit();return i}function Jb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function $b(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;r.uniform2fv(this.addr,t),mn(i,t)}}function tT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(pn(i,t))return;r.uniform3fv(this.addr,t),mn(i,t)}}function eT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;r.uniform4fv(this.addr,t),mn(i,t)}}function nT(r,t){const i=this.cache,a=t.elements;if(a===void 0){if(pn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,a))return;T_.set(a),r.uniformMatrix2fv(this.addr,!1,T_),mn(i,a)}}function iT(r,t){const i=this.cache,a=t.elements;if(a===void 0){if(pn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,a))return;b_.set(a),r.uniformMatrix3fv(this.addr,!1,b_),mn(i,a)}}function aT(r,t){const i=this.cache,a=t.elements;if(a===void 0){if(pn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,a))return;E_.set(a),r.uniformMatrix4fv(this.addr,!1,E_),mn(i,a)}}function sT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function rT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;r.uniform2iv(this.addr,t),mn(i,t)}}function oT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;r.uniform3iv(this.addr,t),mn(i,t)}}function lT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;r.uniform4iv(this.addr,t),mn(i,t)}}function cT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function uT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;r.uniform2uiv(this.addr,t),mn(i,t)}}function fT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;r.uniform3uiv(this.addr,t),mn(i,t)}}function hT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;r.uniform4uiv(this.addr,t),mn(i,t)}}function dT(r,t,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l);const c=this.type===r.SAMPLER_2D_SHADOW?Rv:Av;i.setTexture2D(t||c,l)}function pT(r,t,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),i.setTexture3D(t||wv,l)}function mT(r,t,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),i.setTextureCube(t||Lv,l)}function gT(r,t,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),i.setTexture2DArray(t||Cv,l)}function _T(r){switch(r){case 5126:return Jb;case 35664:return $b;case 35665:return tT;case 35666:return eT;case 35674:return nT;case 35675:return iT;case 35676:return aT;case 5124:case 35670:return sT;case 35667:case 35671:return rT;case 35668:case 35672:return oT;case 35669:case 35673:return lT;case 5125:return cT;case 36294:return uT;case 36295:return fT;case 36296:return hT;case 35678:case 36198:case 36298:case 36306:case 35682:return dT;case 35679:case 36299:case 36307:return pT;case 35680:case 36300:case 36308:case 36293:return mT;case 36289:case 36303:case 36311:case 36292:return gT}}function vT(r,t){r.uniform1fv(this.addr,t)}function yT(r,t){const i=Br(t,this.size,2);r.uniform2fv(this.addr,i)}function xT(r,t){const i=Br(t,this.size,3);r.uniform3fv(this.addr,i)}function ST(r,t){const i=Br(t,this.size,4);r.uniform4fv(this.addr,i)}function MT(r,t){const i=Br(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function ET(r,t){const i=Br(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function bT(r,t){const i=Br(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function TT(r,t){r.uniform1iv(this.addr,t)}function AT(r,t){r.uniform2iv(this.addr,t)}function RT(r,t){r.uniform3iv(this.addr,t)}function CT(r,t){r.uniform4iv(this.addr,t)}function wT(r,t){r.uniform1uiv(this.addr,t)}function LT(r,t){r.uniform2uiv(this.addr,t)}function DT(r,t){r.uniform3uiv(this.addr,t)}function UT(r,t){r.uniform4uiv(this.addr,t)}function NT(r,t,i){const a=this.cache,l=t.length,c=Jc(i,l);pn(a,c)||(r.uniform1iv(this.addr,c),mn(a,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||Av,c[h])}function OT(r,t,i){const a=this.cache,l=t.length,c=Jc(i,l);pn(a,c)||(r.uniform1iv(this.addr,c),mn(a,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||wv,c[h])}function PT(r,t,i){const a=this.cache,l=t.length,c=Jc(i,l);pn(a,c)||(r.uniform1iv(this.addr,c),mn(a,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Lv,c[h])}function zT(r,t,i){const a=this.cache,l=t.length,c=Jc(i,l);pn(a,c)||(r.uniform1iv(this.addr,c),mn(a,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Cv,c[h])}function BT(r){switch(r){case 5126:return vT;case 35664:return yT;case 35665:return xT;case 35666:return ST;case 35674:return MT;case 35675:return ET;case 35676:return bT;case 5124:case 35670:return TT;case 35667:case 35671:return AT;case 35668:case 35672:return RT;case 35669:case 35673:return CT;case 5125:return wT;case 36294:return LT;case 36295:return DT;case 36296:return UT;case 35678:case 36198:case 36298:case 36306:case 35682:return NT;case 35679:case 36299:case 36307:return OT;case 35680:case 36300:case 36308:case 36293:return PT;case 36289:case 36303:case 36311:case 36292:return zT}}class IT{constructor(t,i,a){this.id=t,this.addr=a,this.cache=[],this.type=i.type,this.setValue=_T(i.type)}}class FT{constructor(t,i,a){this.id=t,this.addr=a,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=BT(i.type)}}class HT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,a){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const f=l[c];f.setValue(t,i[f.id],a)}}}const Hh=/(\w+)(\])?(\[|\.)?/g;function A_(r,t){r.seq.push(t),r.map[t.id]=t}function GT(r,t,i){const a=r.name,l=a.length;for(Hh.lastIndex=0;;){const c=Hh.exec(a),h=Hh.lastIndex;let f=c[1];const p=c[2]==="]",m=c[3];if(p&&(f=f|0),m===void 0||m==="["&&h+2===l){A_(i,m===void 0?new IT(f,r,t):new FT(f,r,t));break}else{let _=i.map[f];_===void 0&&(_=new HT(f),A_(i,_)),i=_}}}class Bc{constructor(t,i){this.seq=[],this.map={};const a=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<a;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);GT(c,h,this)}}setValue(t,i,a,l){const c=this.map[i];c!==void 0&&c.setValue(t,a,l)}setOptional(t,i,a){const l=i[a];l!==void 0&&this.setValue(t,a,l)}static upload(t,i,a,l){for(let c=0,h=i.length;c!==h;++c){const f=i[c],p=a[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,l)}}static seqWithValue(t,i){const a=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&a.push(h)}return a}}function R_(r,t,i){const a=r.createShader(t);return r.shaderSource(a,i),r.compileShader(a),a}const VT=37297;let kT=0;function XT(r,t){const i=r.split(`
`),a=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const f=h+1;a.push(`${f===t?">":" "} ${f}: ${i[h]}`)}return a.join(`
`)}function WT(r){const t=ze.getPrimaries(ze.workingColorSpace),i=ze.getPrimaries(r);let a;switch(t===i?a="":t===Vc&&i===Gc?a="LinearDisplayP3ToLinearSRGB":t===Gc&&i===Vc&&(a="LinearSRGBToLinearDisplayP3"),r){case la:case jc:return[a,"LinearTransferOETF"];case yn:case cd:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[a,"LinearTransferOETF"]}}function C_(r,t,i){const a=r.getShaderParameter(t,r.COMPILE_STATUS),l=r.getShaderInfoLog(t).trim();if(a&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+XT(r.getShaderSource(t),h)}else return l}function qT(r,t){const i=WT(t);return`vec4 ${r}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function YT(r,t){let i;switch(t){case YS:i="Linear";break;case jS:i="Reinhard";break;case ZS:i="OptimizedCineon";break;case ev:i="ACESFilmic";break;case KS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function jT(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ho).join(`
`)}function ZT(r){const t=[];for(const i in r){const a=r[i];a!==!1&&t.push("#define "+i+" "+a)}return t.join(`
`)}function KT(r,t){const i={},a=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<a;l++){const c=r.getActiveAttrib(t,l),h=c.name;let f=1;c.type===r.FLOAT_MAT2&&(f=2),c.type===r.FLOAT_MAT3&&(f=3),c.type===r.FLOAT_MAT4&&(f=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:f}}return i}function Ho(r){return r!==""}function w_(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function L_(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const QT=/^[ \t]*#include +<([\w\d./]+)>/gm;function nd(r){return r.replace(QT,$T)}const JT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function $T(r,t){let i=_e[t];if(i===void 0){const a=JT.get(t);if(a!==void 0)i=_e[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return nd(i)}const tA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function D_(r){return r.replace(tA,eA)}function eA(r,t,i,a){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function U_(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function nA(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===J_?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===$_?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===sa&&(t="SHADOWMAP_TYPE_VSM"),t}function iA(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Nr:case Or:t="ENVMAP_TYPE_CUBE";break;case Yc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function aA(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Or:t="ENVMAP_MODE_REFRACTION";break}return t}function sA(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case tv:t="ENVMAP_BLENDING_MULTIPLY";break;case WS:t="ENVMAP_BLENDING_MIX";break;case qS:t="ENVMAP_BLENDING_ADD";break}return t}function rA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:a,maxMip:i}}function oA(r,t,i,a){const l=r.getContext(),c=i.defines;let h=i.vertexShader,f=i.fragmentShader;const p=nA(i),m=iA(i),g=aA(i),_=sA(i),y=rA(i),M=i.isWebGL2?"":jT(i),E=ZT(c),b=l.createProgram();let x,v,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ho).join(`
`),x.length>0&&(x+=`
`),v=[M,"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ho).join(`
`),v.length>0&&(v+=`
`)):(x=[U_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),v=[M,U_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qa?"#define TONE_MAPPING":"",i.toneMapping!==qa?_e.tonemapping_pars_fragment:"",i.toneMapping!==qa?YT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,qT("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ho).join(`
`)),h=nd(h),h=w_(h,i),h=L_(h,i),f=nd(f),f=w_(f,i),f=L_(f,i),h=D_(h),f=D_(f),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["precision mediump sampler2DArray;","#define varying in",i.glslVersion===Qg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Qg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const T=B+x+h,L=B+v+f,w=R_(l,l.VERTEX_SHADER,T),I=R_(l,l.FRAGMENT_SHADER,L);l.attachShader(b,w),l.attachShader(b,I),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function N($){if(r.debug.checkShaderErrors){const Z=l.getProgramInfoLog(b).trim(),ct=l.getShaderInfoLog(w).trim(),H=l.getShaderInfoLog(I).trim();let rt=!0,F=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(rt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,b,w,I);else{const W=C_(l,w,"vertex"),dt=C_(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+W+`
`+dt)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(ct===""||H==="")&&(F=!1);F&&($.diagnostics={runnable:rt,programLog:Z,vertexShader:{log:ct,prefix:x},fragmentShader:{log:H,prefix:v}})}l.deleteShader(w),l.deleteShader(I),K=new Bc(l,b),C=KT(l,b)}let K;this.getUniforms=function(){return K===void 0&&N(this),K};let C;this.getAttributes=function(){return C===void 0&&N(this),C};let z=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=l.getProgramParameter(b,VT)),z},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=kT++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=w,this.fragmentShader=I,this}let lA=0;class cA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,a=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(a),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const a of i)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let a=i.get(t);return a===void 0&&(a=new Set,i.set(t,a)),a}_getShaderStage(t){const i=this.shaderCache;let a=i.get(t);return a===void 0&&(a=new uA(t),i.set(t,a)),a}}class uA{constructor(t){this.id=lA++,this.code=t,this.usedTimes=0}}function fA(r,t,i,a,l,c,h){const f=new dd,p=new cA,m=[],g=l.isWebGL2,_=l.logarithmicDepthBuffer,y=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(C){return C===0?"uv":`uv${C}`}function x(C,z,$,Z,ct){const H=Z.fog,rt=ct.geometry,F=C.isMeshStandardMaterial?Z.environment:null,W=(C.isMeshStandardMaterial?i:t).get(C.envMap||F),dt=W&&W.mapping===Yc?W.image.height:null,tt=E[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const vt=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,O=vt!==void 0?vt.length:0;let Y=0;rt.morphAttributes.position!==void 0&&(Y=1),rt.morphAttributes.normal!==void 0&&(Y=2),rt.morphAttributes.color!==void 0&&(Y=3);let V,et,Tt,Dt;if(tt){const Ke=Oi[tt];V=Ke.vertexShader,et=Ke.fragmentShader}else V=C.vertexShader,et=C.fragmentShader,p.update(C),Tt=p.getVertexShaderID(C),Dt=p.getFragmentShaderID(C);const Ut=r.getRenderTarget(),J=ct.isInstancedMesh===!0,nt=ct.isBatchedMesh===!0,_t=!!C.map,yt=!!C.matcap,D=!!W,st=!!C.aoMap,ft=!!C.lightMap,Ct=!!C.bumpMap,Rt=!!C.normalMap,Kt=!!C.displacementMap,Ht=!!C.emissiveMap,kt=!!C.metalnessMap,te=!!C.roughnessMap,le=C.anisotropy>0,Te=C.clearcoat>0,U=C.iridescence>0,A=C.sheen>0,it=C.transmission>0,Ot=le&&!!C.anisotropyMap,Lt=Te&&!!C.clearcoatMap,Nt=Te&&!!C.clearcoatNormalMap,Qt=Te&&!!C.clearcoatRoughnessMap,Bt=U&&!!C.iridescenceMap,Vt=U&&!!C.iridescenceThicknessMap,X=A&&!!C.sheenColorMap,zt=A&&!!C.sheenRoughnessMap,Et=!!C.specularMap,ee=!!C.specularColorMap,Wt=!!C.specularIntensityMap,ae=it&&!!C.transmissionMap,jt=it&&!!C.thicknessMap,qt=!!C.gradientMap,he=!!C.alphaMap,j=C.alphaTest>0,Ft=!!C.alphaHash,wt=!!C.extensions,St=!!rt.attributes.uv1,Pt=!!rt.attributes.uv2,ne=!!rt.attributes.uv3;let pe=qa;return C.toneMapped&&(Ut===null||Ut.isXRRenderTarget===!0)&&(pe=r.toneMapping),{isWebGL2:g,shaderID:tt,shaderType:C.type,shaderName:C.name,vertexShader:V,fragmentShader:et,defines:C.defines,customVertexShaderID:Tt,customFragmentShaderID:Dt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:nt,instancing:J,instancingColor:J&&ct.instanceColor!==null,supportsVertexTextures:y,outputColorSpace:Ut===null?r.outputColorSpace:Ut.isXRRenderTarget===!0?Ut.texture.colorSpace:la,map:_t,matcap:yt,envMap:D,envMapMode:D&&W.mapping,envMapCubeUVHeight:dt,aoMap:st,lightMap:ft,bumpMap:Ct,normalMap:Rt,displacementMap:y&&Kt,emissiveMap:Ht,normalMapObjectSpace:Rt&&C.normalMapType===lM,normalMapTangentSpace:Rt&&C.normalMapType===fv,metalnessMap:kt,roughnessMap:te,anisotropy:le,anisotropyMap:Ot,clearcoat:Te,clearcoatMap:Lt,clearcoatNormalMap:Nt,clearcoatRoughnessMap:Qt,iridescence:U,iridescenceMap:Bt,iridescenceThicknessMap:Vt,sheen:A,sheenColorMap:X,sheenRoughnessMap:zt,specularMap:Et,specularColorMap:ee,specularIntensityMap:Wt,transmission:it,transmissionMap:ae,thicknessMap:jt,gradientMap:qt,opaque:C.transparent===!1&&C.blending===Dr,alphaMap:he,alphaTest:j,alphaHash:Ft,combine:C.combine,mapUv:_t&&b(C.map.channel),aoMapUv:st&&b(C.aoMap.channel),lightMapUv:ft&&b(C.lightMap.channel),bumpMapUv:Ct&&b(C.bumpMap.channel),normalMapUv:Rt&&b(C.normalMap.channel),displacementMapUv:Kt&&b(C.displacementMap.channel),emissiveMapUv:Ht&&b(C.emissiveMap.channel),metalnessMapUv:kt&&b(C.metalnessMap.channel),roughnessMapUv:te&&b(C.roughnessMap.channel),anisotropyMapUv:Ot&&b(C.anisotropyMap.channel),clearcoatMapUv:Lt&&b(C.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&b(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qt&&b(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&b(C.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&b(C.iridescenceThicknessMap.channel),sheenColorMapUv:X&&b(C.sheenColorMap.channel),sheenRoughnessMapUv:zt&&b(C.sheenRoughnessMap.channel),specularMapUv:Et&&b(C.specularMap.channel),specularColorMapUv:ee&&b(C.specularColorMap.channel),specularIntensityMapUv:Wt&&b(C.specularIntensityMap.channel),transmissionMapUv:ae&&b(C.transmissionMap.channel),thicknessMapUv:jt&&b(C.thicknessMap.channel),alphaMapUv:he&&b(C.alphaMap.channel),vertexTangents:!!rt.attributes.tangent&&(Rt||le),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,vertexUv1s:St,vertexUv2s:Pt,vertexUv3s:ne,pointsUvs:ct.isPoints===!0&&!!rt.attributes.uv&&(_t||he),fog:!!H,useFog:C.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,skinning:ct.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:Y,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&$.length>0,shadowMapType:r.shadowMap.type,toneMapping:pe,useLegacyLights:r._useLegacyLights,decodeVideoTexture:_t&&C.map.isVideoTexture===!0&&ze.getTransfer(C.map.colorSpace)===Ve,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ra,flipSided:C.side===In,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionDerivatives:wt&&C.extensions.derivatives===!0,extensionFragDepth:wt&&C.extensions.fragDepth===!0,extensionDrawBuffers:wt&&C.extensions.drawBuffers===!0,extensionShaderTextureLOD:wt&&C.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:g||a.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||a.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||a.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()}}function v(C){const z=[];if(C.shaderID?z.push(C.shaderID):(z.push(C.customVertexShaderID),z.push(C.customFragmentShaderID)),C.defines!==void 0)for(const $ in C.defines)z.push($),z.push(C.defines[$]);return C.isRawShaderMaterial===!1&&(B(z,C),T(z,C),z.push(r.outputColorSpace)),z.push(C.customProgramCacheKey),z.join()}function B(C,z){C.push(z.precision),C.push(z.outputColorSpace),C.push(z.envMapMode),C.push(z.envMapCubeUVHeight),C.push(z.mapUv),C.push(z.alphaMapUv),C.push(z.lightMapUv),C.push(z.aoMapUv),C.push(z.bumpMapUv),C.push(z.normalMapUv),C.push(z.displacementMapUv),C.push(z.emissiveMapUv),C.push(z.metalnessMapUv),C.push(z.roughnessMapUv),C.push(z.anisotropyMapUv),C.push(z.clearcoatMapUv),C.push(z.clearcoatNormalMapUv),C.push(z.clearcoatRoughnessMapUv),C.push(z.iridescenceMapUv),C.push(z.iridescenceThicknessMapUv),C.push(z.sheenColorMapUv),C.push(z.sheenRoughnessMapUv),C.push(z.specularMapUv),C.push(z.specularColorMapUv),C.push(z.specularIntensityMapUv),C.push(z.transmissionMapUv),C.push(z.thicknessMapUv),C.push(z.combine),C.push(z.fogExp2),C.push(z.sizeAttenuation),C.push(z.morphTargetsCount),C.push(z.morphAttributeCount),C.push(z.numDirLights),C.push(z.numPointLights),C.push(z.numSpotLights),C.push(z.numSpotLightMaps),C.push(z.numHemiLights),C.push(z.numRectAreaLights),C.push(z.numDirLightShadows),C.push(z.numPointLightShadows),C.push(z.numSpotLightShadows),C.push(z.numSpotLightShadowsWithMaps),C.push(z.numLightProbes),C.push(z.shadowMapType),C.push(z.toneMapping),C.push(z.numClippingPlanes),C.push(z.numClipIntersection),C.push(z.depthPacking)}function T(C,z){f.disableAll(),z.isWebGL2&&f.enable(0),z.supportsVertexTextures&&f.enable(1),z.instancing&&f.enable(2),z.instancingColor&&f.enable(3),z.matcap&&f.enable(4),z.envMap&&f.enable(5),z.normalMapObjectSpace&&f.enable(6),z.normalMapTangentSpace&&f.enable(7),z.clearcoat&&f.enable(8),z.iridescence&&f.enable(9),z.alphaTest&&f.enable(10),z.vertexColors&&f.enable(11),z.vertexAlphas&&f.enable(12),z.vertexUv1s&&f.enable(13),z.vertexUv2s&&f.enable(14),z.vertexUv3s&&f.enable(15),z.vertexTangents&&f.enable(16),z.anisotropy&&f.enable(17),z.alphaHash&&f.enable(18),z.batching&&f.enable(19),C.push(f.mask),f.disableAll(),z.fog&&f.enable(0),z.useFog&&f.enable(1),z.flatShading&&f.enable(2),z.logarithmicDepthBuffer&&f.enable(3),z.skinning&&f.enable(4),z.morphTargets&&f.enable(5),z.morphNormals&&f.enable(6),z.morphColors&&f.enable(7),z.premultipliedAlpha&&f.enable(8),z.shadowMapEnabled&&f.enable(9),z.useLegacyLights&&f.enable(10),z.doubleSided&&f.enable(11),z.flipSided&&f.enable(12),z.useDepthPacking&&f.enable(13),z.dithering&&f.enable(14),z.transmission&&f.enable(15),z.sheen&&f.enable(16),z.opaque&&f.enable(17),z.pointsUvs&&f.enable(18),z.decodeVideoTexture&&f.enable(19),C.push(f.mask)}function L(C){const z=E[C.type];let $;if(z){const Z=Oi[z];$=jM.clone(Z.uniforms)}else $=C.uniforms;return $}function w(C,z){let $;for(let Z=0,ct=m.length;Z<ct;Z++){const H=m[Z];if(H.cacheKey===z){$=H,++$.usedTimes;break}}return $===void 0&&($=new oA(r,z,C,c),m.push($)),$}function I(C){if(--C.usedTimes===0){const z=m.indexOf(C);m[z]=m[m.length-1],m.pop(),C.destroy()}}function N(C){p.remove(C)}function K(){p.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:L,acquireProgram:w,releaseProgram:I,releaseShaderCache:N,programs:m,dispose:K}}function hA(){let r=new WeakMap;function t(c){let h=r.get(c);return h===void 0&&(h={},r.set(c,h)),h}function i(c){r.delete(c)}function a(c,h,f){r.get(c)[h]=f}function l(){r=new WeakMap}return{get:t,remove:i,update:a,dispose:l}}function dA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function N_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function O_(){const r=[];let t=0;const i=[],a=[],l=[];function c(){t=0,i.length=0,a.length=0,l.length=0}function h(_,y,M,E,b,x){let v=r[t];return v===void 0?(v={id:_.id,object:_,geometry:y,material:M,groupOrder:E,renderOrder:_.renderOrder,z:b,group:x},r[t]=v):(v.id=_.id,v.object=_,v.geometry=y,v.material=M,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=b,v.group=x),t++,v}function f(_,y,M,E,b,x){const v=h(_,y,M,E,b,x);M.transmission>0?a.push(v):M.transparent===!0?l.push(v):i.push(v)}function p(_,y,M,E,b,x){const v=h(_,y,M,E,b,x);M.transmission>0?a.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function m(_,y){i.length>1&&i.sort(_||dA),a.length>1&&a.sort(y||N_),l.length>1&&l.sort(y||N_)}function g(){for(let _=t,y=r.length;_<y;_++){const M=r[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:a,transparent:l,init:c,push:f,unshift:p,finish:g,sort:m}}function pA(){let r=new WeakMap;function t(a,l){const c=r.get(a);let h;return c===void 0?(h=new O_,r.set(a,[h])):l>=c.length?(h=new O_,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function mA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new k,color:new be};break;case"SpotLight":i={position:new k,direction:new k,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new k,color:new be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new k,skyColor:new be,groundColor:new be};break;case"RectAreaLight":i={color:new be,position:new k,halfWidth:new k,halfHeight:new k};break}return r[t.id]=i,i}}}function gA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let _A=0;function vA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function yA(r,t){const i=new mA,a=gA(),l={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)l.probe.push(new k);const c=new k,h=new tn,f=new tn;function p(g,_){let y=0,M=0,E=0;for(let Z=0;Z<9;Z++)l.probe[Z].set(0,0,0);let b=0,x=0,v=0,B=0,T=0,L=0,w=0,I=0,N=0,K=0,C=0;g.sort(vA);const z=_===!0?Math.PI:1;for(let Z=0,ct=g.length;Z<ct;Z++){const H=g[Z],rt=H.color,F=H.intensity,W=H.distance,dt=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)y+=rt.r*F*z,M+=rt.g*F*z,E+=rt.b*F*z;else if(H.isLightProbe){for(let tt=0;tt<9;tt++)l.probe[tt].addScaledVector(H.sh.coefficients[tt],F);C++}else if(H.isDirectionalLight){const tt=i.get(H);if(tt.color.copy(H.color).multiplyScalar(H.intensity*z),H.castShadow){const vt=H.shadow,O=a.get(H);O.shadowBias=vt.bias,O.shadowNormalBias=vt.normalBias,O.shadowRadius=vt.radius,O.shadowMapSize=vt.mapSize,l.directionalShadow[b]=O,l.directionalShadowMap[b]=dt,l.directionalShadowMatrix[b]=H.shadow.matrix,L++}l.directional[b]=tt,b++}else if(H.isSpotLight){const tt=i.get(H);tt.position.setFromMatrixPosition(H.matrixWorld),tt.color.copy(rt).multiplyScalar(F*z),tt.distance=W,tt.coneCos=Math.cos(H.angle),tt.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),tt.decay=H.decay,l.spot[v]=tt;const vt=H.shadow;if(H.map&&(l.spotLightMap[N]=H.map,N++,vt.updateMatrices(H),H.castShadow&&K++),l.spotLightMatrix[v]=vt.matrix,H.castShadow){const O=a.get(H);O.shadowBias=vt.bias,O.shadowNormalBias=vt.normalBias,O.shadowRadius=vt.radius,O.shadowMapSize=vt.mapSize,l.spotShadow[v]=O,l.spotShadowMap[v]=dt,I++}v++}else if(H.isRectAreaLight){const tt=i.get(H);tt.color.copy(rt).multiplyScalar(F),tt.halfWidth.set(H.width*.5,0,0),tt.halfHeight.set(0,H.height*.5,0),l.rectArea[B]=tt,B++}else if(H.isPointLight){const tt=i.get(H);if(tt.color.copy(H.color).multiplyScalar(H.intensity*z),tt.distance=H.distance,tt.decay=H.decay,H.castShadow){const vt=H.shadow,O=a.get(H);O.shadowBias=vt.bias,O.shadowNormalBias=vt.normalBias,O.shadowRadius=vt.radius,O.shadowMapSize=vt.mapSize,O.shadowCameraNear=vt.camera.near,O.shadowCameraFar=vt.camera.far,l.pointShadow[x]=O,l.pointShadowMap[x]=dt,l.pointShadowMatrix[x]=H.shadow.matrix,w++}l.point[x]=tt,x++}else if(H.isHemisphereLight){const tt=i.get(H);tt.skyColor.copy(H.color).multiplyScalar(F*z),tt.groundColor.copy(H.groundColor).multiplyScalar(F*z),l.hemi[T]=tt,T++}}B>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Gt.LTC_FLOAT_1,l.rectAreaLTC2=Gt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(l.rectAreaLTC1=Gt.LTC_HALF_1,l.rectAreaLTC2=Gt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),l.ambient[0]=y,l.ambient[1]=M,l.ambient[2]=E;const $=l.hash;($.directionalLength!==b||$.pointLength!==x||$.spotLength!==v||$.rectAreaLength!==B||$.hemiLength!==T||$.numDirectionalShadows!==L||$.numPointShadows!==w||$.numSpotShadows!==I||$.numSpotMaps!==N||$.numLightProbes!==C)&&(l.directional.length=b,l.spot.length=v,l.rectArea.length=B,l.point.length=x,l.hemi.length=T,l.directionalShadow.length=L,l.directionalShadowMap.length=L,l.pointShadow.length=w,l.pointShadowMap.length=w,l.spotShadow.length=I,l.spotShadowMap.length=I,l.directionalShadowMatrix.length=L,l.pointShadowMatrix.length=w,l.spotLightMatrix.length=I+N-K,l.spotLightMap.length=N,l.numSpotLightShadowsWithMaps=K,l.numLightProbes=C,$.directionalLength=b,$.pointLength=x,$.spotLength=v,$.rectAreaLength=B,$.hemiLength=T,$.numDirectionalShadows=L,$.numPointShadows=w,$.numSpotShadows=I,$.numSpotMaps=N,$.numLightProbes=C,l.version=_A++)}function m(g,_){let y=0,M=0,E=0,b=0,x=0;const v=_.matrixWorldInverse;for(let B=0,T=g.length;B<T;B++){const L=g[B];if(L.isDirectionalLight){const w=l.directional[y];w.direction.setFromMatrixPosition(L.matrixWorld),c.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(c),w.direction.transformDirection(v),y++}else if(L.isSpotLight){const w=l.spot[E];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(v),w.direction.setFromMatrixPosition(L.matrixWorld),c.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(c),w.direction.transformDirection(v),E++}else if(L.isRectAreaLight){const w=l.rectArea[b];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(v),f.identity(),h.copy(L.matrixWorld),h.premultiply(v),f.extractRotation(h),w.halfWidth.set(L.width*.5,0,0),w.halfHeight.set(0,L.height*.5,0),w.halfWidth.applyMatrix4(f),w.halfHeight.applyMatrix4(f),b++}else if(L.isPointLight){const w=l.point[M];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(v),M++}else if(L.isHemisphereLight){const w=l.hemi[x];w.direction.setFromMatrixPosition(L.matrixWorld),w.direction.transformDirection(v),x++}}}return{setup:p,setupView:m,state:l}}function P_(r,t){const i=new yA(r,t),a=[],l=[];function c(){a.length=0,l.length=0}function h(_){a.push(_)}function f(_){l.push(_)}function p(_){i.setup(a,_)}function m(_){i.setupView(a,_)}return{init:c,state:{lightsArray:a,shadowsArray:l,lights:i},setupLights:p,setupLightsView:m,pushLight:h,pushShadow:f}}function xA(r,t){let i=new WeakMap;function a(c,h=0){const f=i.get(c);let p;return f===void 0?(p=new P_(r,t),i.set(c,[p])):h>=f.length?(p=new P_(r,t),f.push(p)):p=f[h],p}function l(){i=new WeakMap}return{get:a,dispose:l}}class SA extends el{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class MA extends el{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const EA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bA=`uniform sampler2D shadow_pass;
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
}`;function TA(r,t,i){let a=new pd;const l=new It,c=new It,h=new We,f=new SA({depthPacking:oM}),p=new MA,m={},g=i.maxTextureSize,_={[ja]:In,[In]:ja,[ra]:ra},y=new Ts({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:EA,fragmentShader:bA}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const E=new _i;E.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ke(E,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=J_;let v=this.type;this.render=function(w,I,N){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||w.length===0)return;const K=r.getRenderTarget(),C=r.getActiveCubeFace(),z=r.getActiveMipmapLevel(),$=r.state;$.setBlending(Wa),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const Z=v!==sa&&this.type===sa,ct=v===sa&&this.type!==sa;for(let H=0,rt=w.length;H<rt;H++){const F=w[H],W=F.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const dt=W.getFrameExtents();if(l.multiply(dt),c.copy(W.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/dt.x),l.x=c.x*dt.x,W.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/dt.y),l.y=c.y*dt.y,W.mapSize.y=c.y)),W.map===null||Z===!0||ct===!0){const vt=this.type!==sa?{minFilter:Bn,magFilter:Bn}:{};W.map!==null&&W.map.dispose(),W.map=new bs(l.x,l.y,vt),W.map.texture.name=F.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const tt=W.getViewportCount();for(let vt=0;vt<tt;vt++){const O=W.getViewport(vt);h.set(c.x*O.x,c.y*O.y,c.x*O.z,c.y*O.w),$.viewport(h),W.updateMatrices(F,vt),a=W.getFrustum(),L(I,N,W.camera,F,this.type)}W.isPointLightShadow!==!0&&this.type===sa&&B(W,N),W.needsUpdate=!1}v=this.type,x.needsUpdate=!1,r.setRenderTarget(K,C,z)};function B(w,I){const N=t.update(b);y.defines.VSM_SAMPLES!==w.blurSamples&&(y.defines.VSM_SAMPLES=w.blurSamples,M.defines.VSM_SAMPLES=w.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new bs(l.x,l.y)),y.uniforms.shadow_pass.value=w.map.texture,y.uniforms.resolution.value=w.mapSize,y.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(I,null,N,y,b,null),M.uniforms.shadow_pass.value=w.mapPass.texture,M.uniforms.resolution.value=w.mapSize,M.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(I,null,N,M,b,null)}function T(w,I,N,K){let C=null;const z=N.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(z!==void 0)C=z;else if(C=N.isPointLight===!0?p:f,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const $=C.uuid,Z=I.uuid;let ct=m[$];ct===void 0&&(ct={},m[$]=ct);let H=ct[Z];H===void 0&&(H=C.clone(),ct[Z]=H),C=H}if(C.visible=I.visible,C.wireframe=I.wireframe,K===sa?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:_[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,N.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const $=r.properties.get(C);$.light=N}return C}function L(w,I,N,K,C){if(w.visible===!1)return;if(w.layers.test(I.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===sa)&&(!w.frustumCulled||a.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,w.matrixWorld);const Z=t.update(w),ct=w.material;if(Array.isArray(ct)){const H=Z.groups;for(let rt=0,F=H.length;rt<F;rt++){const W=H[rt],dt=ct[W.materialIndex];if(dt&&dt.visible){const tt=T(w,dt,K,C);w.onBeforeShadow(r,w,I,N,Z,tt,W),r.renderBufferDirect(N,null,Z,tt,w,W),w.onAfterShadow(r,w,I,N,Z,tt,W)}}}else if(ct.visible){const H=T(w,ct,K,C);w.onBeforeShadow(r,w,I,N,Z,H,null),r.renderBufferDirect(N,null,Z,H,w,null),w.onAfterShadow(r,w,I,N,Z,H,null)}}const $=w.children;for(let Z=0,ct=$.length;Z<ct;Z++)L($[Z],I,N,K,C)}}function AA(r,t,i){const a=i.isWebGL2;function l(){let j=!1;const Ft=new We;let wt=null;const St=new We(0,0,0,0);return{setMask:function(Pt){wt!==Pt&&!j&&(r.colorMask(Pt,Pt,Pt,Pt),wt=Pt)},setLocked:function(Pt){j=Pt},setClear:function(Pt,ne,pe,Ye,Ke){Ke===!0&&(Pt*=Ye,ne*=Ye,pe*=Ye),Ft.set(Pt,ne,pe,Ye),St.equals(Ft)===!1&&(r.clearColor(Pt,ne,pe,Ye),St.copy(Ft))},reset:function(){j=!1,wt=null,St.set(-1,0,0,0)}}}function c(){let j=!1,Ft=null,wt=null,St=null;return{setTest:function(Pt){Pt?nt(r.DEPTH_TEST):_t(r.DEPTH_TEST)},setMask:function(Pt){Ft!==Pt&&!j&&(r.depthMask(Pt),Ft=Pt)},setFunc:function(Pt){if(wt!==Pt){switch(Pt){case IS:r.depthFunc(r.NEVER);break;case FS:r.depthFunc(r.ALWAYS);break;case HS:r.depthFunc(r.LESS);break;case Ic:r.depthFunc(r.LEQUAL);break;case GS:r.depthFunc(r.EQUAL);break;case VS:r.depthFunc(r.GEQUAL);break;case kS:r.depthFunc(r.GREATER);break;case XS:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}wt=Pt}},setLocked:function(Pt){j=Pt},setClear:function(Pt){St!==Pt&&(r.clearDepth(Pt),St=Pt)},reset:function(){j=!1,Ft=null,wt=null,St=null}}}function h(){let j=!1,Ft=null,wt=null,St=null,Pt=null,ne=null,pe=null,Ye=null,Ke=null;return{setTest:function(Ue){j||(Ue?nt(r.STENCIL_TEST):_t(r.STENCIL_TEST))},setMask:function(Ue){Ft!==Ue&&!j&&(r.stencilMask(Ue),Ft=Ue)},setFunc:function(Ue,gn,Yn){(wt!==Ue||St!==gn||Pt!==Yn)&&(r.stencilFunc(Ue,gn,Yn),wt=Ue,St=gn,Pt=Yn)},setOp:function(Ue,gn,Yn){(ne!==Ue||pe!==gn||Ye!==Yn)&&(r.stencilOp(Ue,gn,Yn),ne=Ue,pe=gn,Ye=Yn)},setLocked:function(Ue){j=Ue},setClear:function(Ue){Ke!==Ue&&(r.clearStencil(Ue),Ke=Ue)},reset:function(){j=!1,Ft=null,wt=null,St=null,Pt=null,ne=null,pe=null,Ye=null,Ke=null}}}const f=new l,p=new c,m=new h,g=new WeakMap,_=new WeakMap;let y={},M={},E=new WeakMap,b=[],x=null,v=!1,B=null,T=null,L=null,w=null,I=null,N=null,K=null,C=new be(0,0,0),z=0,$=!1,Z=null,ct=null,H=null,rt=null,F=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let dt=!1,tt=0;const vt=r.getParameter(r.VERSION);vt.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(vt)[1]),dt=tt>=1):vt.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(vt)[1]),dt=tt>=2);let O=null,Y={};const V=r.getParameter(r.SCISSOR_BOX),et=r.getParameter(r.VIEWPORT),Tt=new We().fromArray(V),Dt=new We().fromArray(et);function Ut(j,Ft,wt,St){const Pt=new Uint8Array(4),ne=r.createTexture();r.bindTexture(j,ne),r.texParameteri(j,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(j,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let pe=0;pe<wt;pe++)a&&(j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY)?r.texImage3D(Ft,0,r.RGBA,1,1,St,0,r.RGBA,r.UNSIGNED_BYTE,Pt):r.texImage2D(Ft+pe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Pt);return ne}const J={};J[r.TEXTURE_2D]=Ut(r.TEXTURE_2D,r.TEXTURE_2D,1),J[r.TEXTURE_CUBE_MAP]=Ut(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),a&&(J[r.TEXTURE_2D_ARRAY]=Ut(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),J[r.TEXTURE_3D]=Ut(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),f.setClear(0,0,0,1),p.setClear(1),m.setClear(0),nt(r.DEPTH_TEST),p.setFunc(Ic),Ht(!1),kt(_g),nt(r.CULL_FACE),Rt(Wa);function nt(j){y[j]!==!0&&(r.enable(j),y[j]=!0)}function _t(j){y[j]!==!1&&(r.disable(j),y[j]=!1)}function yt(j,Ft){return M[j]!==Ft?(r.bindFramebuffer(j,Ft),M[j]=Ft,a&&(j===r.DRAW_FRAMEBUFFER&&(M[r.FRAMEBUFFER]=Ft),j===r.FRAMEBUFFER&&(M[r.DRAW_FRAMEBUFFER]=Ft)),!0):!1}function D(j,Ft){let wt=b,St=!1;if(j)if(wt=E.get(Ft),wt===void 0&&(wt=[],E.set(Ft,wt)),j.isWebGLMultipleRenderTargets){const Pt=j.texture;if(wt.length!==Pt.length||wt[0]!==r.COLOR_ATTACHMENT0){for(let ne=0,pe=Pt.length;ne<pe;ne++)wt[ne]=r.COLOR_ATTACHMENT0+ne;wt.length=Pt.length,St=!0}}else wt[0]!==r.COLOR_ATTACHMENT0&&(wt[0]=r.COLOR_ATTACHMENT0,St=!0);else wt[0]!==r.BACK&&(wt[0]=r.BACK,St=!0);St&&(i.isWebGL2?r.drawBuffers(wt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(wt))}function st(j){return x!==j?(r.useProgram(j),x=j,!0):!1}const ft={[vs]:r.FUNC_ADD,[ES]:r.FUNC_SUBTRACT,[bS]:r.FUNC_REVERSE_SUBTRACT};if(a)ft[Sg]=r.MIN,ft[Mg]=r.MAX;else{const j=t.get("EXT_blend_minmax");j!==null&&(ft[Sg]=j.MIN_EXT,ft[Mg]=j.MAX_EXT)}const Ct={[TS]:r.ZERO,[AS]:r.ONE,[RS]:r.SRC_COLOR,[jh]:r.SRC_ALPHA,[NS]:r.SRC_ALPHA_SATURATE,[DS]:r.DST_COLOR,[wS]:r.DST_ALPHA,[CS]:r.ONE_MINUS_SRC_COLOR,[Zh]:r.ONE_MINUS_SRC_ALPHA,[US]:r.ONE_MINUS_DST_COLOR,[LS]:r.ONE_MINUS_DST_ALPHA,[OS]:r.CONSTANT_COLOR,[PS]:r.ONE_MINUS_CONSTANT_COLOR,[zS]:r.CONSTANT_ALPHA,[BS]:r.ONE_MINUS_CONSTANT_ALPHA};function Rt(j,Ft,wt,St,Pt,ne,pe,Ye,Ke,Ue){if(j===Wa){v===!0&&(_t(r.BLEND),v=!1);return}if(v===!1&&(nt(r.BLEND),v=!0),j!==MS){if(j!==B||Ue!==$){if((T!==vs||I!==vs)&&(r.blendEquation(r.FUNC_ADD),T=vs,I=vs),Ue)switch(j){case Dr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vg:r.blendFunc(r.ONE,r.ONE);break;case yg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case xg:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Dr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vg:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case yg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case xg:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}L=null,w=null,N=null,K=null,C.set(0,0,0),z=0,B=j,$=Ue}return}Pt=Pt||Ft,ne=ne||wt,pe=pe||St,(Ft!==T||Pt!==I)&&(r.blendEquationSeparate(ft[Ft],ft[Pt]),T=Ft,I=Pt),(wt!==L||St!==w||ne!==N||pe!==K)&&(r.blendFuncSeparate(Ct[wt],Ct[St],Ct[ne],Ct[pe]),L=wt,w=St,N=ne,K=pe),(Ye.equals(C)===!1||Ke!==z)&&(r.blendColor(Ye.r,Ye.g,Ye.b,Ke),C.copy(Ye),z=Ke),B=j,$=!1}function Kt(j,Ft){j.side===ra?_t(r.CULL_FACE):nt(r.CULL_FACE);let wt=j.side===In;Ft&&(wt=!wt),Ht(wt),j.blending===Dr&&j.transparent===!1?Rt(Wa):Rt(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),p.setFunc(j.depthFunc),p.setTest(j.depthTest),p.setMask(j.depthWrite),f.setMask(j.colorWrite);const St=j.stencilWrite;m.setTest(St),St&&(m.setMask(j.stencilWriteMask),m.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),m.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),le(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?nt(r.SAMPLE_ALPHA_TO_COVERAGE):_t(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(j){Z!==j&&(j?r.frontFace(r.CW):r.frontFace(r.CCW),Z=j)}function kt(j){j!==xS?(nt(r.CULL_FACE),j!==ct&&(j===_g?r.cullFace(r.BACK):j===SS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):_t(r.CULL_FACE),ct=j}function te(j){j!==H&&(dt&&r.lineWidth(j),H=j)}function le(j,Ft,wt){j?(nt(r.POLYGON_OFFSET_FILL),(rt!==Ft||F!==wt)&&(r.polygonOffset(Ft,wt),rt=Ft,F=wt)):_t(r.POLYGON_OFFSET_FILL)}function Te(j){j?nt(r.SCISSOR_TEST):_t(r.SCISSOR_TEST)}function U(j){j===void 0&&(j=r.TEXTURE0+W-1),O!==j&&(r.activeTexture(j),O=j)}function A(j,Ft,wt){wt===void 0&&(O===null?wt=r.TEXTURE0+W-1:wt=O);let St=Y[wt];St===void 0&&(St={type:void 0,texture:void 0},Y[wt]=St),(St.type!==j||St.texture!==Ft)&&(O!==wt&&(r.activeTexture(wt),O=wt),r.bindTexture(j,Ft||J[j]),St.type=j,St.texture=Ft)}function it(){const j=Y[O];j!==void 0&&j.type!==void 0&&(r.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function Ot(){try{r.compressedTexImage2D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Lt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Nt(){try{r.texSubImage2D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Qt(){try{r.texSubImage3D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Bt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Vt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function X(){try{r.texStorage2D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function zt(){try{r.texStorage3D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Et(){try{r.texImage2D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ee(){try{r.texImage3D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Wt(j){Tt.equals(j)===!1&&(r.scissor(j.x,j.y,j.z,j.w),Tt.copy(j))}function ae(j){Dt.equals(j)===!1&&(r.viewport(j.x,j.y,j.z,j.w),Dt.copy(j))}function jt(j,Ft){let wt=_.get(Ft);wt===void 0&&(wt=new WeakMap,_.set(Ft,wt));let St=wt.get(j);St===void 0&&(St=r.getUniformBlockIndex(Ft,j.name),wt.set(j,St))}function qt(j,Ft){const St=_.get(Ft).get(j);g.get(Ft)!==St&&(r.uniformBlockBinding(Ft,St,j.__bindingPointIndex),g.set(Ft,St))}function he(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),a===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),y={},O=null,Y={},M={},E=new WeakMap,b=[],x=null,v=!1,B=null,T=null,L=null,w=null,I=null,N=null,K=null,C=new be(0,0,0),z=0,$=!1,Z=null,ct=null,H=null,rt=null,F=null,Tt.set(0,0,r.canvas.width,r.canvas.height),Dt.set(0,0,r.canvas.width,r.canvas.height),f.reset(),p.reset(),m.reset()}return{buffers:{color:f,depth:p,stencil:m},enable:nt,disable:_t,bindFramebuffer:yt,drawBuffers:D,useProgram:st,setBlending:Rt,setMaterial:Kt,setFlipSided:Ht,setCullFace:kt,setLineWidth:te,setPolygonOffset:le,setScissorTest:Te,activeTexture:U,bindTexture:A,unbindTexture:it,compressedTexImage2D:Ot,compressedTexImage3D:Lt,texImage2D:Et,texImage3D:ee,updateUBOMapping:jt,uniformBlockBinding:qt,texStorage2D:X,texStorage3D:zt,texSubImage2D:Nt,texSubImage3D:Qt,compressedTexSubImage2D:Bt,compressedTexSubImage3D:Vt,scissor:Wt,viewport:ae,reset:he}}function RA(r,t,i,a,l,c,h){const f=l.isWebGL2,p=l.maxTextures,m=l.maxCubemapSize,g=l.maxTextureSize,_=l.maxSamples,y=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,M=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),E=new WeakMap;let b;const x=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function B(U,A){return v?new OffscreenCanvas(U,A):Wc("canvas")}function T(U,A,it,Ot){let Lt=1;if((U.width>Ot||U.height>Ot)&&(Lt=Ot/Math.max(U.width,U.height)),Lt<1||A===!0)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap){const Nt=A?Xc:Math.floor,Qt=Nt(Lt*U.width),Bt=Nt(Lt*U.height);b===void 0&&(b=B(Qt,Bt));const Vt=it?B(Qt,Bt):b;return Vt.width=Qt,Vt.height=Bt,Vt.getContext("2d").drawImage(U,0,0,Qt,Bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+Qt+"x"+Bt+")."),Vt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),U;return U}function L(U){return td(U.width)&&td(U.height)}function w(U){return f?!1:U.wrapS!==Ai||U.wrapT!==Ai||U.minFilter!==Bn&&U.minFilter!==mi}function I(U,A){return U.generateMipmaps&&A&&U.minFilter!==Bn&&U.minFilter!==mi}function N(U){r.generateMipmap(U)}function K(U,A,it,Ot,Lt=!1){if(f===!1)return A;if(U!==null){if(r[U]!==void 0)return r[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Nt=A;if(A===r.RED&&(it===r.FLOAT&&(Nt=r.R32F),it===r.HALF_FLOAT&&(Nt=r.R16F),it===r.UNSIGNED_BYTE&&(Nt=r.R8)),A===r.RED_INTEGER&&(it===r.UNSIGNED_BYTE&&(Nt=r.R8UI),it===r.UNSIGNED_SHORT&&(Nt=r.R16UI),it===r.UNSIGNED_INT&&(Nt=r.R32UI),it===r.BYTE&&(Nt=r.R8I),it===r.SHORT&&(Nt=r.R16I),it===r.INT&&(Nt=r.R32I)),A===r.RG&&(it===r.FLOAT&&(Nt=r.RG32F),it===r.HALF_FLOAT&&(Nt=r.RG16F),it===r.UNSIGNED_BYTE&&(Nt=r.RG8)),A===r.RGBA){const Qt=Lt?Hc:ze.getTransfer(Ot);it===r.FLOAT&&(Nt=r.RGBA32F),it===r.HALF_FLOAT&&(Nt=r.RGBA16F),it===r.UNSIGNED_BYTE&&(Nt=Qt===Ve?r.SRGB8_ALPHA8:r.RGBA8),it===r.UNSIGNED_SHORT_4_4_4_4&&(Nt=r.RGBA4),it===r.UNSIGNED_SHORT_5_5_5_1&&(Nt=r.RGB5_A1)}return(Nt===r.R16F||Nt===r.R32F||Nt===r.RG16F||Nt===r.RG32F||Nt===r.RGBA16F||Nt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Nt}function C(U,A,it){return I(U,it)===!0||U.isFramebufferTexture&&U.minFilter!==Bn&&U.minFilter!==mi?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function z(U){return U===Bn||U===Eg||U===dh?r.NEAREST:r.LINEAR}function $(U){const A=U.target;A.removeEventListener("dispose",$),ct(A),A.isVideoTexture&&E.delete(A)}function Z(U){const A=U.target;A.removeEventListener("dispose",Z),rt(A)}function ct(U){const A=a.get(U);if(A.__webglInit===void 0)return;const it=U.source,Ot=x.get(it);if(Ot){const Lt=Ot[A.__cacheKey];Lt.usedTimes--,Lt.usedTimes===0&&H(U),Object.keys(Ot).length===0&&x.delete(it)}a.remove(U)}function H(U){const A=a.get(U);r.deleteTexture(A.__webglTexture);const it=U.source,Ot=x.get(it);delete Ot[A.__cacheKey],h.memory.textures--}function rt(U){const A=U.texture,it=a.get(U),Ot=a.get(A);if(Ot.__webglTexture!==void 0&&(r.deleteTexture(Ot.__webglTexture),h.memory.textures--),U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let Lt=0;Lt<6;Lt++){if(Array.isArray(it.__webglFramebuffer[Lt]))for(let Nt=0;Nt<it.__webglFramebuffer[Lt].length;Nt++)r.deleteFramebuffer(it.__webglFramebuffer[Lt][Nt]);else r.deleteFramebuffer(it.__webglFramebuffer[Lt]);it.__webglDepthbuffer&&r.deleteRenderbuffer(it.__webglDepthbuffer[Lt])}else{if(Array.isArray(it.__webglFramebuffer))for(let Lt=0;Lt<it.__webglFramebuffer.length;Lt++)r.deleteFramebuffer(it.__webglFramebuffer[Lt]);else r.deleteFramebuffer(it.__webglFramebuffer);if(it.__webglDepthbuffer&&r.deleteRenderbuffer(it.__webglDepthbuffer),it.__webglMultisampledFramebuffer&&r.deleteFramebuffer(it.__webglMultisampledFramebuffer),it.__webglColorRenderbuffer)for(let Lt=0;Lt<it.__webglColorRenderbuffer.length;Lt++)it.__webglColorRenderbuffer[Lt]&&r.deleteRenderbuffer(it.__webglColorRenderbuffer[Lt]);it.__webglDepthRenderbuffer&&r.deleteRenderbuffer(it.__webglDepthRenderbuffer)}if(U.isWebGLMultipleRenderTargets)for(let Lt=0,Nt=A.length;Lt<Nt;Lt++){const Qt=a.get(A[Lt]);Qt.__webglTexture&&(r.deleteTexture(Qt.__webglTexture),h.memory.textures--),a.remove(A[Lt])}a.remove(A),a.remove(U)}let F=0;function W(){F=0}function dt(){const U=F;return U>=p&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+p),F+=1,U}function tt(U){const A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function vt(U,A){const it=a.get(U);if(U.isVideoTexture&&le(U),U.isRenderTargetTexture===!1&&U.version>0&&it.__version!==U.version){const Ot=U.image;if(Ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(it,U,A);return}}i.bindTexture(r.TEXTURE_2D,it.__webglTexture,r.TEXTURE0+A)}function O(U,A){const it=a.get(U);if(U.version>0&&it.__version!==U.version){nt(it,U,A);return}i.bindTexture(r.TEXTURE_2D_ARRAY,it.__webglTexture,r.TEXTURE0+A)}function Y(U,A){const it=a.get(U);if(U.version>0&&it.__version!==U.version){nt(it,U,A);return}i.bindTexture(r.TEXTURE_3D,it.__webglTexture,r.TEXTURE0+A)}function V(U,A){const it=a.get(U);if(U.version>0&&it.__version!==U.version){_t(it,U,A);return}i.bindTexture(r.TEXTURE_CUBE_MAP,it.__webglTexture,r.TEXTURE0+A)}const et={[Fc]:r.REPEAT,[Ai]:r.CLAMP_TO_EDGE,[Jh]:r.MIRRORED_REPEAT},Tt={[Bn]:r.NEAREST,[Eg]:r.NEAREST_MIPMAP_NEAREST,[dh]:r.NEAREST_MIPMAP_LINEAR,[mi]:r.LINEAR,[QS]:r.LINEAR_MIPMAP_NEAREST,[jo]:r.LINEAR_MIPMAP_LINEAR},Dt={[cM]:r.NEVER,[mM]:r.ALWAYS,[uM]:r.LESS,[hv]:r.LEQUAL,[fM]:r.EQUAL,[pM]:r.GEQUAL,[hM]:r.GREATER,[dM]:r.NOTEQUAL};function Ut(U,A,it){if(it?(r.texParameteri(U,r.TEXTURE_WRAP_S,et[A.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,et[A.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,et[A.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,Tt[A.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,Tt[A.minFilter])):(r.texParameteri(U,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(U,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(A.wrapS!==Ai||A.wrapT!==Ai)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(U,r.TEXTURE_MAG_FILTER,z(A.magFilter)),r.texParameteri(U,r.TEXTURE_MIN_FILTER,z(A.minFilter)),A.minFilter!==Bn&&A.minFilter!==mi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,Dt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const Ot=t.get("EXT_texture_filter_anisotropic");if(A.magFilter===Bn||A.minFilter!==dh&&A.minFilter!==jo||A.type===Xa&&t.has("OES_texture_float_linear")===!1||f===!1&&A.type===Zo&&t.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||a.get(A).__currentAnisotropy)&&(r.texParameterf(U,Ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),a.get(A).__currentAnisotropy=A.anisotropy)}}function J(U,A){let it=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",$));const Ot=A.source;let Lt=x.get(Ot);Lt===void 0&&(Lt={},x.set(Ot,Lt));const Nt=tt(A);if(Nt!==U.__cacheKey){Lt[Nt]===void 0&&(Lt[Nt]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,it=!0),Lt[Nt].usedTimes++;const Qt=Lt[U.__cacheKey];Qt!==void 0&&(Lt[U.__cacheKey].usedTimes--,Qt.usedTimes===0&&H(A)),U.__cacheKey=Nt,U.__webglTexture=Lt[Nt].texture}return it}function nt(U,A,it){let Ot=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Ot=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Ot=r.TEXTURE_3D);const Lt=J(U,A),Nt=A.source;i.bindTexture(Ot,U.__webglTexture,r.TEXTURE0+it);const Qt=a.get(Nt);if(Nt.version!==Qt.__version||Lt===!0){i.activeTexture(r.TEXTURE0+it);const Bt=ze.getPrimaries(ze.workingColorSpace),Vt=A.colorSpace===gi?null:ze.getPrimaries(A.colorSpace),X=A.colorSpace===gi||Bt===Vt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,X);const zt=w(A)&&L(A.image)===!1;let Et=T(A.image,zt,!1,g);Et=Te(A,Et);const ee=L(Et)||f,Wt=c.convert(A.format,A.colorSpace);let ae=c.convert(A.type),jt=K(A.internalFormat,Wt,ae,A.colorSpace,A.isVideoTexture);Ut(Ot,A,ee);let qt;const he=A.mipmaps,j=f&&A.isVideoTexture!==!0&&jt!==cv,Ft=Qt.__version===void 0||Lt===!0,wt=C(A,Et,ee);if(A.isDepthTexture)jt=r.DEPTH_COMPONENT,f?A.type===Xa?jt=r.DEPTH_COMPONENT32F:A.type===ka?jt=r.DEPTH_COMPONENT24:A.type===xs?jt=r.DEPTH24_STENCIL8:jt=r.DEPTH_COMPONENT16:A.type===Xa&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Ss&&jt===r.DEPTH_COMPONENT&&A.type!==ld&&A.type!==ka&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=ka,ae=c.convert(A.type)),A.format===Pr&&jt===r.DEPTH_COMPONENT&&(jt=r.DEPTH_STENCIL,A.type!==xs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=xs,ae=c.convert(A.type))),Ft&&(j?i.texStorage2D(r.TEXTURE_2D,1,jt,Et.width,Et.height):i.texImage2D(r.TEXTURE_2D,0,jt,Et.width,Et.height,0,Wt,ae,null));else if(A.isDataTexture)if(he.length>0&&ee){j&&Ft&&i.texStorage2D(r.TEXTURE_2D,wt,jt,he[0].width,he[0].height);for(let St=0,Pt=he.length;St<Pt;St++)qt=he[St],j?i.texSubImage2D(r.TEXTURE_2D,St,0,0,qt.width,qt.height,Wt,ae,qt.data):i.texImage2D(r.TEXTURE_2D,St,jt,qt.width,qt.height,0,Wt,ae,qt.data);A.generateMipmaps=!1}else j?(Ft&&i.texStorage2D(r.TEXTURE_2D,wt,jt,Et.width,Et.height),i.texSubImage2D(r.TEXTURE_2D,0,0,0,Et.width,Et.height,Wt,ae,Et.data)):i.texImage2D(r.TEXTURE_2D,0,jt,Et.width,Et.height,0,Wt,ae,Et.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){j&&Ft&&i.texStorage3D(r.TEXTURE_2D_ARRAY,wt,jt,he[0].width,he[0].height,Et.depth);for(let St=0,Pt=he.length;St<Pt;St++)qt=he[St],A.format!==Ri?Wt!==null?j?i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,St,0,0,0,qt.width,qt.height,Et.depth,Wt,qt.data,0,0):i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,St,jt,qt.width,qt.height,Et.depth,0,qt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?i.texSubImage3D(r.TEXTURE_2D_ARRAY,St,0,0,0,qt.width,qt.height,Et.depth,Wt,ae,qt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,St,jt,qt.width,qt.height,Et.depth,0,Wt,ae,qt.data)}else{j&&Ft&&i.texStorage2D(r.TEXTURE_2D,wt,jt,he[0].width,he[0].height);for(let St=0,Pt=he.length;St<Pt;St++)qt=he[St],A.format!==Ri?Wt!==null?j?i.compressedTexSubImage2D(r.TEXTURE_2D,St,0,0,qt.width,qt.height,Wt,qt.data):i.compressedTexImage2D(r.TEXTURE_2D,St,jt,qt.width,qt.height,0,qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?i.texSubImage2D(r.TEXTURE_2D,St,0,0,qt.width,qt.height,Wt,ae,qt.data):i.texImage2D(r.TEXTURE_2D,St,jt,qt.width,qt.height,0,Wt,ae,qt.data)}else if(A.isDataArrayTexture)j?(Ft&&i.texStorage3D(r.TEXTURE_2D_ARRAY,wt,jt,Et.width,Et.height,Et.depth),i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Wt,ae,Et.data)):i.texImage3D(r.TEXTURE_2D_ARRAY,0,jt,Et.width,Et.height,Et.depth,0,Wt,ae,Et.data);else if(A.isData3DTexture)j?(Ft&&i.texStorage3D(r.TEXTURE_3D,wt,jt,Et.width,Et.height,Et.depth),i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Wt,ae,Et.data)):i.texImage3D(r.TEXTURE_3D,0,jt,Et.width,Et.height,Et.depth,0,Wt,ae,Et.data);else if(A.isFramebufferTexture){if(Ft)if(j)i.texStorage2D(r.TEXTURE_2D,wt,jt,Et.width,Et.height);else{let St=Et.width,Pt=Et.height;for(let ne=0;ne<wt;ne++)i.texImage2D(r.TEXTURE_2D,ne,jt,St,Pt,0,Wt,ae,null),St>>=1,Pt>>=1}}else if(he.length>0&&ee){j&&Ft&&i.texStorage2D(r.TEXTURE_2D,wt,jt,he[0].width,he[0].height);for(let St=0,Pt=he.length;St<Pt;St++)qt=he[St],j?i.texSubImage2D(r.TEXTURE_2D,St,0,0,Wt,ae,qt):i.texImage2D(r.TEXTURE_2D,St,jt,Wt,ae,qt);A.generateMipmaps=!1}else j?(Ft&&i.texStorage2D(r.TEXTURE_2D,wt,jt,Et.width,Et.height),i.texSubImage2D(r.TEXTURE_2D,0,0,0,Wt,ae,Et)):i.texImage2D(r.TEXTURE_2D,0,jt,Wt,ae,Et);I(A,ee)&&N(Ot),Qt.__version=Nt.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function _t(U,A,it){if(A.image.length!==6)return;const Ot=J(U,A),Lt=A.source;i.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+it);const Nt=a.get(Lt);if(Lt.version!==Nt.__version||Ot===!0){i.activeTexture(r.TEXTURE0+it);const Qt=ze.getPrimaries(ze.workingColorSpace),Bt=A.colorSpace===gi?null:ze.getPrimaries(A.colorSpace),Vt=A.colorSpace===gi||Qt===Bt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);const X=A.isCompressedTexture||A.image[0].isCompressedTexture,zt=A.image[0]&&A.image[0].isDataTexture,Et=[];for(let St=0;St<6;St++)!X&&!zt?Et[St]=T(A.image[St],!1,!0,m):Et[St]=zt?A.image[St].image:A.image[St],Et[St]=Te(A,Et[St]);const ee=Et[0],Wt=L(ee)||f,ae=c.convert(A.format,A.colorSpace),jt=c.convert(A.type),qt=K(A.internalFormat,ae,jt,A.colorSpace),he=f&&A.isVideoTexture!==!0,j=Nt.__version===void 0||Ot===!0;let Ft=C(A,ee,Wt);Ut(r.TEXTURE_CUBE_MAP,A,Wt);let wt;if(X){he&&j&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ft,qt,ee.width,ee.height);for(let St=0;St<6;St++){wt=Et[St].mipmaps;for(let Pt=0;Pt<wt.length;Pt++){const ne=wt[Pt];A.format!==Ri?ae!==null?he?i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Pt,0,0,ne.width,ne.height,ae,ne.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Pt,qt,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):he?i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Pt,0,0,ne.width,ne.height,ae,jt,ne.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Pt,qt,ne.width,ne.height,0,ae,jt,ne.data)}}}else{wt=A.mipmaps,he&&j&&(wt.length>0&&Ft++,i.texStorage2D(r.TEXTURE_CUBE_MAP,Ft,qt,Et[0].width,Et[0].height));for(let St=0;St<6;St++)if(zt){he?i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Et[St].width,Et[St].height,ae,jt,Et[St].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,qt,Et[St].width,Et[St].height,0,ae,jt,Et[St].data);for(let Pt=0;Pt<wt.length;Pt++){const pe=wt[Pt].image[St].image;he?i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Pt+1,0,0,pe.width,pe.height,ae,jt,pe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Pt+1,qt,pe.width,pe.height,0,ae,jt,pe.data)}}else{he?i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,ae,jt,Et[St]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,qt,ae,jt,Et[St]);for(let Pt=0;Pt<wt.length;Pt++){const ne=wt[Pt];he?i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Pt+1,0,0,ae,jt,ne.image[St]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Pt+1,qt,ae,jt,ne.image[St])}}}I(A,Wt)&&N(r.TEXTURE_CUBE_MAP),Nt.__version=Lt.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function yt(U,A,it,Ot,Lt,Nt){const Qt=c.convert(it.format,it.colorSpace),Bt=c.convert(it.type),Vt=K(it.internalFormat,Qt,Bt,it.colorSpace);if(!a.get(A).__hasExternalTextures){const zt=Math.max(1,A.width>>Nt),Et=Math.max(1,A.height>>Nt);Lt===r.TEXTURE_3D||Lt===r.TEXTURE_2D_ARRAY?i.texImage3D(Lt,Nt,Vt,zt,Et,A.depth,0,Qt,Bt,null):i.texImage2D(Lt,Nt,Vt,zt,Et,0,Qt,Bt,null)}i.bindFramebuffer(r.FRAMEBUFFER,U),te(A)?y.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ot,Lt,a.get(it).__webglTexture,0,kt(A)):(Lt===r.TEXTURE_2D||Lt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Lt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Ot,Lt,a.get(it).__webglTexture,Nt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function D(U,A,it){if(r.bindRenderbuffer(r.RENDERBUFFER,U),A.depthBuffer&&!A.stencilBuffer){let Ot=f===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(it||te(A)){const Lt=A.depthTexture;Lt&&Lt.isDepthTexture&&(Lt.type===Xa?Ot=r.DEPTH_COMPONENT32F:Lt.type===ka&&(Ot=r.DEPTH_COMPONENT24));const Nt=kt(A);te(A)?y.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Nt,Ot,A.width,A.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,Nt,Ot,A.width,A.height)}else r.renderbufferStorage(r.RENDERBUFFER,Ot,A.width,A.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,U)}else if(A.depthBuffer&&A.stencilBuffer){const Ot=kt(A);it&&te(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ot,r.DEPTH24_STENCIL8,A.width,A.height):te(A)?y.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ot,r.DEPTH24_STENCIL8,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,U)}else{const Ot=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Lt=0;Lt<Ot.length;Lt++){const Nt=Ot[Lt],Qt=c.convert(Nt.format,Nt.colorSpace),Bt=c.convert(Nt.type),Vt=K(Nt.internalFormat,Qt,Bt,Nt.colorSpace),X=kt(A);it&&te(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,X,Vt,A.width,A.height):te(A)?y.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,X,Vt,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Vt,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function st(U,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!a.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),vt(A.depthTexture,0);const Ot=a.get(A.depthTexture).__webglTexture,Lt=kt(A);if(A.depthTexture.format===Ss)te(A)?y.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Ot,0,Lt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Ot,0);else if(A.depthTexture.format===Pr)te(A)?y.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Ot,0,Lt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Ot,0);else throw new Error("Unknown depthTexture format")}function ft(U){const A=a.get(U),it=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!A.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");st(A.__webglFramebuffer,U)}else if(it){A.__webglDepthbuffer=[];for(let Ot=0;Ot<6;Ot++)i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[Ot]),A.__webglDepthbuffer[Ot]=r.createRenderbuffer(),D(A.__webglDepthbuffer[Ot],U,!1)}else i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=r.createRenderbuffer(),D(A.__webglDepthbuffer,U,!1);i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ct(U,A,it){const Ot=a.get(U);A!==void 0&&yt(Ot.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),it!==void 0&&ft(U)}function Rt(U){const A=U.texture,it=a.get(U),Ot=a.get(A);U.addEventListener("dispose",Z),U.isWebGLMultipleRenderTargets!==!0&&(Ot.__webglTexture===void 0&&(Ot.__webglTexture=r.createTexture()),Ot.__version=A.version,h.memory.textures++);const Lt=U.isWebGLCubeRenderTarget===!0,Nt=U.isWebGLMultipleRenderTargets===!0,Qt=L(U)||f;if(Lt){it.__webglFramebuffer=[];for(let Bt=0;Bt<6;Bt++)if(f&&A.mipmaps&&A.mipmaps.length>0){it.__webglFramebuffer[Bt]=[];for(let Vt=0;Vt<A.mipmaps.length;Vt++)it.__webglFramebuffer[Bt][Vt]=r.createFramebuffer()}else it.__webglFramebuffer[Bt]=r.createFramebuffer()}else{if(f&&A.mipmaps&&A.mipmaps.length>0){it.__webglFramebuffer=[];for(let Bt=0;Bt<A.mipmaps.length;Bt++)it.__webglFramebuffer[Bt]=r.createFramebuffer()}else it.__webglFramebuffer=r.createFramebuffer();if(Nt)if(l.drawBuffers){const Bt=U.texture;for(let Vt=0,X=Bt.length;Vt<X;Vt++){const zt=a.get(Bt[Vt]);zt.__webglTexture===void 0&&(zt.__webglTexture=r.createTexture(),h.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(f&&U.samples>0&&te(U)===!1){const Bt=Nt?A:[A];it.__webglMultisampledFramebuffer=r.createFramebuffer(),it.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let Vt=0;Vt<Bt.length;Vt++){const X=Bt[Vt];it.__webglColorRenderbuffer[Vt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,it.__webglColorRenderbuffer[Vt]);const zt=c.convert(X.format,X.colorSpace),Et=c.convert(X.type),ee=K(X.internalFormat,zt,Et,X.colorSpace,U.isXRRenderTarget===!0),Wt=kt(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,Wt,ee,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Vt,r.RENDERBUFFER,it.__webglColorRenderbuffer[Vt])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(it.__webglDepthRenderbuffer=r.createRenderbuffer(),D(it.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Lt){i.bindTexture(r.TEXTURE_CUBE_MAP,Ot.__webglTexture),Ut(r.TEXTURE_CUBE_MAP,A,Qt);for(let Bt=0;Bt<6;Bt++)if(f&&A.mipmaps&&A.mipmaps.length>0)for(let Vt=0;Vt<A.mipmaps.length;Vt++)yt(it.__webglFramebuffer[Bt][Vt],U,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,Vt);else yt(it.__webglFramebuffer[Bt],U,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,0);I(A,Qt)&&N(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Nt){const Bt=U.texture;for(let Vt=0,X=Bt.length;Vt<X;Vt++){const zt=Bt[Vt],Et=a.get(zt);i.bindTexture(r.TEXTURE_2D,Et.__webglTexture),Ut(r.TEXTURE_2D,zt,Qt),yt(it.__webglFramebuffer,U,zt,r.COLOR_ATTACHMENT0+Vt,r.TEXTURE_2D,0),I(zt,Qt)&&N(r.TEXTURE_2D)}i.unbindTexture()}else{let Bt=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(f?Bt=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(Bt,Ot.__webglTexture),Ut(Bt,A,Qt),f&&A.mipmaps&&A.mipmaps.length>0)for(let Vt=0;Vt<A.mipmaps.length;Vt++)yt(it.__webglFramebuffer[Vt],U,A,r.COLOR_ATTACHMENT0,Bt,Vt);else yt(it.__webglFramebuffer,U,A,r.COLOR_ATTACHMENT0,Bt,0);I(A,Qt)&&N(Bt),i.unbindTexture()}U.depthBuffer&&ft(U)}function Kt(U){const A=L(U)||f,it=U.isWebGLMultipleRenderTargets===!0?U.texture:[U.texture];for(let Ot=0,Lt=it.length;Ot<Lt;Ot++){const Nt=it[Ot];if(I(Nt,A)){const Qt=U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Bt=a.get(Nt).__webglTexture;i.bindTexture(Qt,Bt),N(Qt),i.unbindTexture()}}}function Ht(U){if(f&&U.samples>0&&te(U)===!1){const A=U.isWebGLMultipleRenderTargets?U.texture:[U.texture],it=U.width,Ot=U.height;let Lt=r.COLOR_BUFFER_BIT;const Nt=[],Qt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Bt=a.get(U),Vt=U.isWebGLMultipleRenderTargets===!0;if(Vt)for(let X=0;X<A.length;X++)i.bindFramebuffer(r.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+X,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Bt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+X,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let X=0;X<A.length;X++){Nt.push(r.COLOR_ATTACHMENT0+X),U.depthBuffer&&Nt.push(Qt);const zt=Bt.__ignoreDepthValues!==void 0?Bt.__ignoreDepthValues:!1;if(zt===!1&&(U.depthBuffer&&(Lt|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&(Lt|=r.STENCIL_BUFFER_BIT)),Vt&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Bt.__webglColorRenderbuffer[X]),zt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Qt]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Qt])),Vt){const Et=a.get(A[X]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Et,0)}r.blitFramebuffer(0,0,it,Ot,0,0,it,Ot,Lt,r.NEAREST),M&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Nt)}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Vt)for(let X=0;X<A.length;X++){i.bindFramebuffer(r.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+X,r.RENDERBUFFER,Bt.__webglColorRenderbuffer[X]);const zt=a.get(A[X]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Bt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+X,r.TEXTURE_2D,zt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer)}}function kt(U){return Math.min(_,U.samples)}function te(U){const A=a.get(U);return f&&U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function le(U){const A=h.render.frame;E.get(U)!==A&&(E.set(U,A),U.update())}function Te(U,A){const it=U.colorSpace,Ot=U.format,Lt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||U.format===$h||it!==la&&it!==gi&&(ze.getTransfer(it)===Ve?f===!1?t.has("EXT_sRGB")===!0&&Ot===Ri?(U.format=$h,U.minFilter=mi,U.generateMipmaps=!1):A=pv.sRGBToLinear(A):(Ot!==Ri||Lt!==Ya)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),A}this.allocateTextureUnit=dt,this.resetTextureUnits=W,this.setTexture2D=vt,this.setTexture2DArray=O,this.setTexture3D=Y,this.setTextureCube=V,this.rebindTextures=Ct,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=te}function CA(r,t,i){const a=i.isWebGL2;function l(c,h=gi){let f;const p=ze.getTransfer(h);if(c===Ya)return r.UNSIGNED_BYTE;if(c===av)return r.UNSIGNED_SHORT_4_4_4_4;if(c===sv)return r.UNSIGNED_SHORT_5_5_5_1;if(c===JS)return r.BYTE;if(c===$S)return r.SHORT;if(c===ld)return r.UNSIGNED_SHORT;if(c===iv)return r.INT;if(c===ka)return r.UNSIGNED_INT;if(c===Xa)return r.FLOAT;if(c===Zo)return a?r.HALF_FLOAT:(f=t.get("OES_texture_half_float"),f!==null?f.HALF_FLOAT_OES:null);if(c===tM)return r.ALPHA;if(c===Ri)return r.RGBA;if(c===eM)return r.LUMINANCE;if(c===nM)return r.LUMINANCE_ALPHA;if(c===Ss)return r.DEPTH_COMPONENT;if(c===Pr)return r.DEPTH_STENCIL;if(c===$h)return f=t.get("EXT_sRGB"),f!==null?f.SRGB_ALPHA_EXT:null;if(c===iM)return r.RED;if(c===rv)return r.RED_INTEGER;if(c===aM)return r.RG;if(c===ov)return r.RG_INTEGER;if(c===lv)return r.RGBA_INTEGER;if(c===ph||c===mh||c===gh||c===_h)if(p===Ve)if(f=t.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(c===ph)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(c===mh)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(c===gh)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(c===_h)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=t.get("WEBGL_compressed_texture_s3tc"),f!==null){if(c===ph)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(c===mh)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(c===gh)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(c===_h)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(c===bg||c===Tg||c===Ag||c===Rg)if(f=t.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(c===bg)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(c===Tg)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(c===Ag)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(c===Rg)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(c===cv)return f=t.get("WEBGL_compressed_texture_etc1"),f!==null?f.COMPRESSED_RGB_ETC1_WEBGL:null;if(c===Cg||c===wg)if(f=t.get("WEBGL_compressed_texture_etc"),f!==null){if(c===Cg)return p===Ve?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(c===wg)return p===Ve?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(c===Lg||c===Dg||c===Ug||c===Ng||c===Og||c===Pg||c===zg||c===Bg||c===Ig||c===Fg||c===Hg||c===Gg||c===Vg||c===kg)if(f=t.get("WEBGL_compressed_texture_astc"),f!==null){if(c===Lg)return p===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(c===Dg)return p===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(c===Ug)return p===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(c===Ng)return p===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(c===Og)return p===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(c===Pg)return p===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(c===zg)return p===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(c===Bg)return p===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(c===Ig)return p===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(c===Fg)return p===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(c===Hg)return p===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(c===Gg)return p===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(c===Vg)return p===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(c===kg)return p===Ve?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(c===vh||c===Xg||c===Wg)if(f=t.get("EXT_texture_compression_bptc"),f!==null){if(c===vh)return p===Ve?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(c===Xg)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(c===Wg)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(c===sM||c===qg||c===Yg||c===jg)if(f=t.get("EXT_texture_compression_rgtc"),f!==null){if(c===vh)return f.COMPRESSED_RED_RGTC1_EXT;if(c===qg)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(c===Yg)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(c===jg)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return c===xs?a?r.UNSIGNED_INT_24_8:(f=t.get("WEBGL_depth_texture"),f!==null?f.UNSIGNED_INT_24_8_WEBGL:null):r[c]!==void 0?r[c]:null}return{convert:l}}class wA extends ii{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class $e extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const LA={type:"move"};class Gh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const a of t.hand.values())this._getHandJoint(i,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,a){let l=null,c=null,h=null;const f=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){h=!0;for(const b of t.hand.values()){const x=i.getJointPose(b,a),v=this._getHandJoint(m,b);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],y=g.position.distanceTo(_.position),M=.02,E=.005;m.inputState.pinching&&y>M+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&y<=M-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(l=i.getPose(t.targetRaySpace,a),l===null&&c!==null&&(l=c),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(LA)))}return f!==null&&(f.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const a=new $e;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[i.jointName]=a,t.add(a)}return t.joints[i.jointName]}}class DA extends Rs{constructor(t,i){super();const a=this;let l=null,c=1,h=null,f="local-floor",p=1,m=null,g=null,_=null,y=null,M=null,E=null;const b=i.getContextAttributes();let x=null,v=null;const B=[],T=[],L=new It;let w=null;const I=new ii;I.layers.enable(1),I.viewport=new We;const N=new ii;N.layers.enable(2),N.viewport=new We;const K=[I,N],C=new wA;C.layers.enable(1),C.layers.enable(2);let z=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let et=B[V];return et===void 0&&(et=new Gh,B[V]=et),et.getTargetRaySpace()},this.getControllerGrip=function(V){let et=B[V];return et===void 0&&(et=new Gh,B[V]=et),et.getGripSpace()},this.getHand=function(V){let et=B[V];return et===void 0&&(et=new Gh,B[V]=et),et.getHandSpace()};function Z(V){const et=T.indexOf(V.inputSource);if(et===-1)return;const Tt=B[et];Tt!==void 0&&(Tt.update(V.inputSource,V.frame,m||h),Tt.dispatchEvent({type:V.type,data:V.inputSource}))}function ct(){l.removeEventListener("select",Z),l.removeEventListener("selectstart",Z),l.removeEventListener("selectend",Z),l.removeEventListener("squeeze",Z),l.removeEventListener("squeezestart",Z),l.removeEventListener("squeezeend",Z),l.removeEventListener("end",ct),l.removeEventListener("inputsourceschange",H);for(let V=0;V<B.length;V++){const et=T[V];et!==null&&(T[V]=null,B[V].disconnect(et))}z=null,$=null,t.setRenderTarget(x),M=null,y=null,_=null,l=null,v=null,Y.stop(),a.isPresenting=!1,t.setPixelRatio(w),t.setSize(L.width,L.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){c=V,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){f=V,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(V){m=V},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(V){if(l=V,l!==null){if(x=t.getRenderTarget(),l.addEventListener("select",Z),l.addEventListener("selectstart",Z),l.addEventListener("selectend",Z),l.addEventListener("squeeze",Z),l.addEventListener("squeezestart",Z),l.addEventListener("squeezeend",Z),l.addEventListener("end",ct),l.addEventListener("inputsourceschange",H),b.xrCompatible!==!0&&await i.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(L),l.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const et={antialias:l.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,et),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),v=new bs(M.framebufferWidth,M.framebufferHeight,{format:Ri,type:Ya,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil})}else{let et=null,Tt=null,Dt=null;b.depth&&(Dt=b.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,et=b.stencil?Pr:Ss,Tt=b.stencil?xs:ka);const Ut={colorFormat:i.RGBA8,depthFormat:Dt,scaleFactor:c};_=new XRWebGLBinding(l,i),y=_.createProjectionLayer(Ut),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),v=new bs(y.textureWidth,y.textureHeight,{format:Ri,type:Ya,depthTexture:new Tv(y.textureWidth,y.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0});const J=t.properties.get(v);J.__ignoreDepthValues=y.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(f),Y.setContext(l),Y.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function H(V){for(let et=0;et<V.removed.length;et++){const Tt=V.removed[et],Dt=T.indexOf(Tt);Dt>=0&&(T[Dt]=null,B[Dt].disconnect(Tt))}for(let et=0;et<V.added.length;et++){const Tt=V.added[et];let Dt=T.indexOf(Tt);if(Dt===-1){for(let J=0;J<B.length;J++)if(J>=T.length){T.push(Tt),Dt=J;break}else if(T[J]===null){T[J]=Tt,Dt=J;break}if(Dt===-1)break}const Ut=B[Dt];Ut&&Ut.connect(Tt)}}const rt=new k,F=new k;function W(V,et,Tt){rt.setFromMatrixPosition(et.matrixWorld),F.setFromMatrixPosition(Tt.matrixWorld);const Dt=rt.distanceTo(F),Ut=et.projectionMatrix.elements,J=Tt.projectionMatrix.elements,nt=Ut[14]/(Ut[10]-1),_t=Ut[14]/(Ut[10]+1),yt=(Ut[9]+1)/Ut[5],D=(Ut[9]-1)/Ut[5],st=(Ut[8]-1)/Ut[0],ft=(J[8]+1)/J[0],Ct=nt*st,Rt=nt*ft,Kt=Dt/(-st+ft),Ht=Kt*-st;et.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ht),V.translateZ(Kt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const kt=nt+Kt,te=_t+Kt,le=Ct-Ht,Te=Rt+(Dt-Ht),U=yt*_t/te*kt,A=D*_t/te*kt;V.projectionMatrix.makePerspective(le,Te,U,A,kt,te),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function dt(V,et){et===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(et.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(l===null)return;C.near=N.near=I.near=V.near,C.far=N.far=I.far=V.far,(z!==C.near||$!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),z=C.near,$=C.far);const et=V.parent,Tt=C.cameras;dt(C,et);for(let Dt=0;Dt<Tt.length;Dt++)dt(Tt[Dt],et);Tt.length===2?W(C,I,N):C.projectionMatrix.copy(I.projectionMatrix),tt(V,C,et)};function tt(V,et,Tt){Tt===null?V.matrix.copy(et.matrixWorld):(V.matrix.copy(Tt.matrixWorld),V.matrix.invert(),V.matrix.multiply(et.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(et.projectionMatrix),V.projectionMatrixInverse.copy(et.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ko*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(y===null&&M===null))return p},this.setFoveation=function(V){p=V,y!==null&&(y.fixedFoveation=V),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=V)};let vt=null;function O(V,et){if(g=et.getViewerPose(m||h),E=et,g!==null){const Tt=g.views;M!==null&&(t.setRenderTargetFramebuffer(v,M.framebuffer),t.setRenderTarget(v));let Dt=!1;Tt.length!==C.cameras.length&&(C.cameras.length=0,Dt=!0);for(let Ut=0;Ut<Tt.length;Ut++){const J=Tt[Ut];let nt=null;if(M!==null)nt=M.getViewport(J);else{const yt=_.getViewSubImage(y,J);nt=yt.viewport,Ut===0&&(t.setRenderTargetTextures(v,yt.colorTexture,y.ignoreDepthValues?void 0:yt.depthStencilTexture),t.setRenderTarget(v))}let _t=K[Ut];_t===void 0&&(_t=new ii,_t.layers.enable(Ut),_t.viewport=new We,K[Ut]=_t),_t.matrix.fromArray(J.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(J.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(nt.x,nt.y,nt.width,nt.height),Ut===0&&(C.matrix.copy(_t.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Dt===!0&&C.cameras.push(_t)}}for(let Tt=0;Tt<B.length;Tt++){const Dt=T[Tt],Ut=B[Tt];Dt!==null&&Ut!==void 0&&Ut.update(Dt,et,m||h)}vt&&vt(V,et),et.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:et}),E=null}const Y=new Ev;Y.setAnimationLoop(O),this.setAnimationLoop=function(V){vt=V},this.dispose=function(){}}}function UA(r,t){function i(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function a(x,v){v.color.getRGB(x.fogColor.value,xv(r)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function l(x,v,B,T,L){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(x,v):v.isMeshToonMaterial?(c(x,v),_(x,v)):v.isMeshPhongMaterial?(c(x,v),g(x,v)):v.isMeshStandardMaterial?(c(x,v),y(x,v),v.isMeshPhysicalMaterial&&M(x,v,L)):v.isMeshMatcapMaterial?(c(x,v),E(x,v)):v.isMeshDepthMaterial?c(x,v):v.isMeshDistanceMaterial?(c(x,v),b(x,v)):v.isMeshNormalMaterial?c(x,v):v.isLineBasicMaterial?(h(x,v),v.isLineDashedMaterial&&f(x,v)):v.isPointsMaterial?p(x,v,B,T):v.isSpriteMaterial?m(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,i(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,i(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===In&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,i(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===In&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,i(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,i(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const B=t.get(v).envMap;if(B&&(x.envMap.value=B,x.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap){x.lightMap.value=v.lightMap;const T=r._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=v.lightMapIntensity*T,i(v.lightMap,x.lightMapTransform)}v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,x.aoMapTransform))}function h(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,i(v.map,x.mapTransform))}function f(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function p(x,v,B,T){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*B,x.scale.value=T*.5,v.map&&(x.map.value=v.map,i(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function m(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,i(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function g(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function _(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function y(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,x.roughnessMapTransform)),t.get(v).envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function M(x,v,B){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===In&&x.clearcoatNormalScale.value.negate())),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=B.texture,x.transmissionSamplerSize.value.set(B.width,B.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,v){v.matcap&&(x.matcap.value=v.matcap)}function b(x,v){const B=t.get(v).light;x.referencePosition.value.setFromMatrixPosition(B.matrixWorld),x.nearDistance.value=B.shadow.camera.near,x.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:l}}function NA(r,t,i,a){let l={},c={},h=[];const f=i.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function p(B,T){const L=T.program;a.uniformBlockBinding(B,L)}function m(B,T){let L=l[B.id];L===void 0&&(E(B),L=g(B),l[B.id]=L,B.addEventListener("dispose",x));const w=T.program;a.updateUBOMapping(B,w);const I=t.render.frame;c[B.id]!==I&&(y(B),c[B.id]=I)}function g(B){const T=_();B.__bindingPointIndex=T;const L=r.createBuffer(),w=B.__size,I=B.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,w,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,L),L}function _(){for(let B=0;B<f;B++)if(h.indexOf(B)===-1)return h.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(B){const T=l[B.id],L=B.uniforms,w=B.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let I=0,N=L.length;I<N;I++){const K=L[I];if(M(K,I,w)===!0){const C=K.__offset,z=Array.isArray(K.value)?K.value:[K.value];let $=0;for(let Z=0;Z<z.length;Z++){const ct=z[Z],H=b(ct);typeof ct=="number"?(K.__data[0]=ct,r.bufferSubData(r.UNIFORM_BUFFER,C+$,K.__data)):ct.isMatrix3?(K.__data[0]=ct.elements[0],K.__data[1]=ct.elements[1],K.__data[2]=ct.elements[2],K.__data[3]=ct.elements[0],K.__data[4]=ct.elements[3],K.__data[5]=ct.elements[4],K.__data[6]=ct.elements[5],K.__data[7]=ct.elements[0],K.__data[8]=ct.elements[6],K.__data[9]=ct.elements[7],K.__data[10]=ct.elements[8],K.__data[11]=ct.elements[0]):(ct.toArray(K.__data,$),$+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,C,K.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(B,T,L){const w=B.value;if(L[T]===void 0){if(typeof w=="number")L[T]=w;else{const I=Array.isArray(w)?w:[w],N=[];for(let K=0;K<I.length;K++)N.push(I[K].clone());L[T]=N}return!0}else if(typeof w=="number"){if(L[T]!==w)return L[T]=w,!0}else{const I=Array.isArray(L[T])?L[T]:[L[T]],N=Array.isArray(w)?w:[w];for(let K=0;K<I.length;K++){const C=I[K];if(C.equals(N[K])===!1)return C.copy(N[K]),!0}}return!1}function E(B){const T=B.uniforms;let L=0;const w=16;let I=0;for(let N=0,K=T.length;N<K;N++){const C=T[N],z={boundary:0,storage:0},$=Array.isArray(C.value)?C.value:[C.value];for(let Z=0,ct=$.length;Z<ct;Z++){const H=$[Z],rt=b(H);z.boundary+=rt.boundary,z.storage+=rt.storage}if(C.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=L,N>0){I=L%w;const Z=w-I;I!==0&&Z-z.boundary<0&&(L+=w-I,C.__offset=L)}L+=z.storage}return I=L%w,I>0&&(L+=w-I),B.__size=L,B.__cache={},this}function b(B){const T={boundary:0,storage:0};return typeof B=="number"?(T.boundary=4,T.storage=4):B.isVector2?(T.boundary=8,T.storage=8):B.isVector3||B.isColor?(T.boundary=16,T.storage=12):B.isVector4?(T.boundary=16,T.storage=16):B.isMatrix3?(T.boundary=48,T.storage=48):B.isMatrix4?(T.boundary=64,T.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),T}function x(B){const T=B.target;T.removeEventListener("dispose",x);const L=h.indexOf(T.__bindingPointIndex);h.splice(L,1),r.deleteBuffer(l[T.id]),delete l[T.id],delete c[T.id]}function v(){for(const B in l)r.deleteBuffer(l[B]);h=[],l={},c={}}return{bind:p,update:m,dispose:v}}class Dv{constructor(t={}){const{canvas:i=LM(),context:a=null,depth:l=!0,stencil:c=!0,alpha:h=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1}=t;this.isWebGLRenderer=!0;let y;a!==null?y=a.getContextAttributes().alpha:y=h;const M=new Uint32Array(4),E=new Int32Array(4);let b=null,x=null;const v=[],B=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yn,this._useLegacyLights=!1,this.toneMapping=qa,this.toneMappingExposure=1;const T=this;let L=!1,w=0,I=0,N=null,K=-1,C=null;const z=new We,$=new We;let Z=null;const ct=new be(0);let H=0,rt=i.width,F=i.height,W=1,dt=null,tt=null;const vt=new We(0,0,rt,F),O=new We(0,0,rt,F);let Y=!1;const V=new pd;let et=!1,Tt=!1,Dt=null;const Ut=new tn,J=new It,nt=new k,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function yt(){return N===null?W:1}let D=a;function st(P,at){for(let pt=0;pt<P.length;pt++){const gt=P[pt],ht=i.getContext(gt,at);if(ht!==null)return ht}return null}try{const P={alpha:!0,depth:l,stencil:c,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${od}`),i.addEventListener("webglcontextlost",he,!1),i.addEventListener("webglcontextrestored",j,!1),i.addEventListener("webglcontextcreationerror",Ft,!1),D===null){const at=["webgl2","webgl","experimental-webgl"];if(T.isWebGL1Renderer===!0&&at.shift(),D=st(at,P),D===null)throw st(at)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ft,Ct,Rt,Kt,Ht,kt,te,le,Te,U,A,it,Ot,Lt,Nt,Qt,Bt,Vt,X,zt,Et,ee,Wt,ae;function jt(){ft=new Xb(D),Ct=new Ib(D,ft,t),ft.init(Ct),ee=new CA(D,ft,Ct),Rt=new AA(D,ft,Ct),Kt=new Yb(D),Ht=new hA,kt=new RA(D,ft,Rt,Ht,Ct,ee,Kt),te=new Hb(T),le=new kb(T),Te=new eE(D,Ct),Wt=new zb(D,ft,Te,Ct),U=new Wb(D,Te,Kt,Wt),A=new Qb(D,U,Te,Kt),X=new Kb(D,Ct,kt),Qt=new Fb(Ht),it=new fA(T,te,le,ft,Ct,Wt,Qt),Ot=new UA(T,Ht),Lt=new pA,Nt=new xA(ft,Ct),Vt=new Pb(T,te,le,Rt,A,y,p),Bt=new TA(T,A,Ct),ae=new NA(D,Kt,Ct,Rt),zt=new Bb(D,ft,Kt,Ct),Et=new qb(D,ft,Kt,Ct),Kt.programs=it.programs,T.capabilities=Ct,T.extensions=ft,T.properties=Ht,T.renderLists=Lt,T.shadowMap=Bt,T.state=Rt,T.info=Kt}jt();const qt=new DA(T,D);this.xr=qt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const P=ft.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ft.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(P){P!==void 0&&(W=P,this.setSize(rt,F,!1))},this.getSize=function(P){return P.set(rt,F)},this.setSize=function(P,at,pt=!0){if(qt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}rt=P,F=at,i.width=Math.floor(P*W),i.height=Math.floor(at*W),pt===!0&&(i.style.width=P+"px",i.style.height=at+"px"),this.setViewport(0,0,P,at)},this.getDrawingBufferSize=function(P){return P.set(rt*W,F*W).floor()},this.setDrawingBufferSize=function(P,at,pt){rt=P,F=at,W=pt,i.width=Math.floor(P*pt),i.height=Math.floor(at*pt),this.setViewport(0,0,P,at)},this.getCurrentViewport=function(P){return P.copy(z)},this.getViewport=function(P){return P.copy(vt)},this.setViewport=function(P,at,pt,gt){P.isVector4?vt.set(P.x,P.y,P.z,P.w):vt.set(P,at,pt,gt),Rt.viewport(z.copy(vt).multiplyScalar(W).floor())},this.getScissor=function(P){return P.copy(O)},this.setScissor=function(P,at,pt,gt){P.isVector4?O.set(P.x,P.y,P.z,P.w):O.set(P,at,pt,gt),Rt.scissor($.copy(O).multiplyScalar(W).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(P){Rt.setScissorTest(Y=P)},this.setOpaqueSort=function(P){dt=P},this.setTransparentSort=function(P){tt=P},this.getClearColor=function(P){return P.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(P=!0,at=!0,pt=!0){let gt=0;if(P){let ht=!1;if(N!==null){const Xt=N.texture.format;ht=Xt===lv||Xt===ov||Xt===rv}if(ht){const Xt=N.texture.type,Zt=Xt===Ya||Xt===ka||Xt===ld||Xt===xs||Xt===av||Xt===sv,se=Vt.getClearColor(),re=Vt.getClearAlpha(),$t=se.r,ce=se.g,ue=se.b;Zt?(M[0]=$t,M[1]=ce,M[2]=ue,M[3]=re,D.clearBufferuiv(D.COLOR,0,M)):(E[0]=$t,E[1]=ce,E[2]=ue,E[3]=re,D.clearBufferiv(D.COLOR,0,E))}else gt|=D.COLOR_BUFFER_BIT}at&&(gt|=D.DEPTH_BUFFER_BIT),pt&&(gt|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(gt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",he,!1),i.removeEventListener("webglcontextrestored",j,!1),i.removeEventListener("webglcontextcreationerror",Ft,!1),Lt.dispose(),Nt.dispose(),Ht.dispose(),te.dispose(),le.dispose(),A.dispose(),Wt.dispose(),ae.dispose(),it.dispose(),qt.dispose(),qt.removeEventListener("sessionstart",Ke),qt.removeEventListener("sessionend",Ue),Dt&&(Dt.dispose(),Dt=null),gn.stop()};function he(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const P=Kt.autoReset,at=Bt.enabled,pt=Bt.autoUpdate,gt=Bt.needsUpdate,ht=Bt.type;jt(),Kt.autoReset=P,Bt.enabled=at,Bt.autoUpdate=pt,Bt.needsUpdate=gt,Bt.type=ht}function Ft(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function wt(P){const at=P.target;at.removeEventListener("dispose",wt),St(at)}function St(P){Pt(P),Ht.remove(P)}function Pt(P){const at=Ht.get(P).programs;at!==void 0&&(at.forEach(function(pt){it.releaseProgram(pt)}),P.isShaderMaterial&&it.releaseShaderCache(P))}this.renderBufferDirect=function(P,at,pt,gt,ht,Xt){at===null&&(at=_t);const Zt=ht.isMesh&&ht.matrixWorld.determinant()<0,se=Cn(P,at,pt,gt,ht);Rt.setMaterial(gt,Zt);let re=pt.index,$t=1;if(gt.wireframe===!0){if(re=U.getWireframeAttribute(pt),re===void 0)return;$t=2}const ce=pt.drawRange,ue=pt.attributes.position;let we=ce.start*$t,an=(ce.start+ce.count)*$t;Xt!==null&&(we=Math.max(we,Xt.start*$t),an=Math.min(an,(Xt.start+Xt.count)*$t)),re!==null?(we=Math.max(we,0),an=Math.min(an,re.count)):ue!=null&&(we=Math.max(we,0),an=Math.min(an,ue.count));const sn=an-we;if(sn<0||sn===1/0)return;Wt.setup(ht,gt,se,pt,re);let ai,Fe=zt;if(re!==null&&(ai=Te.get(re),Fe=Et,Fe.setIndex(ai)),ht.isMesh)gt.wireframe===!0?(Rt.setLineWidth(gt.wireframeLinewidth*yt()),Fe.setMode(D.LINES)):Fe.setMode(D.TRIANGLES);else if(ht.isLine){let ge=gt.linewidth;ge===void 0&&(ge=1),Rt.setLineWidth(ge*yt()),ht.isLineSegments?Fe.setMode(D.LINES):ht.isLineLoop?Fe.setMode(D.LINE_LOOP):Fe.setMode(D.LINE_STRIP)}else ht.isPoints?Fe.setMode(D.POINTS):ht.isSprite&&Fe.setMode(D.TRIANGLES);if(ht.isBatchedMesh)Fe.renderMultiDraw(ht._multiDrawStarts,ht._multiDrawCounts,ht._multiDrawCount);else if(ht.isInstancedMesh)Fe.renderInstances(we,sn,ht.count);else if(pt.isInstancedBufferGeometry){const ge=pt._maxInstanceCount!==void 0?pt._maxInstanceCount:1/0,fa=Math.min(pt.instanceCount,ge);Fe.renderInstances(we,sn,fa)}else Fe.render(we,sn)};function ne(P,at,pt){P.transparent===!0&&P.side===ra&&P.forceSinglePass===!1?(P.side=In,P.needsUpdate=!0,Ka(P,at,pt),P.side=ja,P.needsUpdate=!0,Ka(P,at,pt),P.side=ra):Ka(P,at,pt)}this.compile=function(P,at,pt=null){pt===null&&(pt=P),x=Nt.get(pt),x.init(),B.push(x),pt.traverseVisible(function(ht){ht.isLight&&ht.layers.test(at.layers)&&(x.pushLight(ht),ht.castShadow&&x.pushShadow(ht))}),P!==pt&&P.traverseVisible(function(ht){ht.isLight&&ht.layers.test(at.layers)&&(x.pushLight(ht),ht.castShadow&&x.pushShadow(ht))}),x.setupLights(T._useLegacyLights);const gt=new Set;return P.traverse(function(ht){const Xt=ht.material;if(Xt)if(Array.isArray(Xt))for(let Zt=0;Zt<Xt.length;Zt++){const se=Xt[Zt];ne(se,pt,ht),gt.add(se)}else ne(Xt,pt,ht),gt.add(Xt)}),B.pop(),x=null,gt},this.compileAsync=function(P,at,pt=null){const gt=this.compile(P,at,pt);return new Promise(ht=>{function Xt(){if(gt.forEach(function(Zt){Ht.get(Zt).currentProgram.isReady()&&gt.delete(Zt)}),gt.size===0){ht(P);return}setTimeout(Xt,10)}ft.get("KHR_parallel_shader_compile")!==null?Xt():setTimeout(Xt,10)})};let pe=null;function Ye(P){pe&&pe(P)}function Ke(){gn.stop()}function Ue(){gn.start()}const gn=new Ev;gn.setAnimationLoop(Ye),typeof self<"u"&&gn.setContext(self),this.setAnimationLoop=function(P){pe=P,qt.setAnimationLoop(P),P===null?gn.stop():gn.start()},qt.addEventListener("sessionstart",Ke),qt.addEventListener("sessionend",Ue),this.render=function(P,at){if(at!==void 0&&at.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),at.parent===null&&at.matrixWorldAutoUpdate===!0&&at.updateMatrixWorld(),qt.enabled===!0&&qt.isPresenting===!0&&(qt.cameraAutoUpdate===!0&&qt.updateCamera(at),at=qt.getCamera()),P.isScene===!0&&P.onBeforeRender(T,P,at,N),x=Nt.get(P,B.length),x.init(),B.push(x),Ut.multiplyMatrices(at.projectionMatrix,at.matrixWorldInverse),V.setFromProjectionMatrix(Ut),Tt=this.localClippingEnabled,et=Qt.init(this.clippingPlanes,Tt),b=Lt.get(P,v.length),b.init(),v.push(b),Yn(P,at,0,T.sortObjects),b.finish(),T.sortObjects===!0&&b.sort(dt,tt),this.info.render.frame++,et===!0&&Qt.beginShadows();const pt=x.state.shadowsArray;if(Bt.render(pt,P,at),et===!0&&Qt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Vt.render(b,P),x.setupLights(T._useLegacyLights),at.isArrayCamera){const gt=at.cameras;for(let ht=0,Xt=gt.length;ht<Xt;ht++){const Zt=gt[ht];Ir(b,P,Zt,Zt.viewport)}}else Ir(b,P,at);N!==null&&(kt.updateMultisampleRenderTarget(N),kt.updateRenderTargetMipmap(N)),P.isScene===!0&&P.onAfterRender(T,P,at),Wt.resetDefaultState(),K=-1,C=null,B.pop(),B.length>0?x=B[B.length-1]:x=null,v.pop(),v.length>0?b=v[v.length-1]:b=null};function Yn(P,at,pt,gt){if(P.visible===!1)return;if(P.layers.test(at.layers)){if(P.isGroup)pt=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(at);else if(P.isLight)x.pushLight(P),P.castShadow&&x.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||V.intersectsSprite(P)){gt&&nt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ut);const Zt=A.update(P),se=P.material;se.visible&&b.push(P,Zt,se,pt,nt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||V.intersectsObject(P))){const Zt=A.update(P),se=P.material;if(gt&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),nt.copy(P.boundingSphere.center)):(Zt.boundingSphere===null&&Zt.computeBoundingSphere(),nt.copy(Zt.boundingSphere.center)),nt.applyMatrix4(P.matrixWorld).applyMatrix4(Ut)),Array.isArray(se)){const re=Zt.groups;for(let $t=0,ce=re.length;$t<ce;$t++){const ue=re[$t],we=se[ue.materialIndex];we&&we.visible&&b.push(P,Zt,we,pt,nt.z,ue)}}else se.visible&&b.push(P,Zt,se,pt,nt.z,null)}}const Xt=P.children;for(let Zt=0,se=Xt.length;Zt<se;Zt++)Yn(Xt[Zt],at,pt,gt)}function Ir(P,at,pt,gt){const ht=P.opaque,Xt=P.transmissive,Zt=P.transparent;x.setupLightsView(pt),et===!0&&Qt.setGlobalState(T.clippingPlanes,pt),Xt.length>0&&Fr(ht,Xt,at,pt),gt&&Rt.viewport(z.copy(gt)),ht.length>0&&ca(ht,at,pt),Xt.length>0&&ca(Xt,at,pt),Zt.length>0&&ca(Zt,at,pt),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function Fr(P,at,pt,gt){if((pt.isScene===!0?pt.overrideMaterial:null)!==null)return;const Xt=Ct.isWebGL2;Dt===null&&(Dt=new bs(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")?Zo:Ya,minFilter:jo,samples:Xt?4:0})),T.getDrawingBufferSize(J),Xt?Dt.setSize(J.x,J.y):Dt.setSize(Xc(J.x),Xc(J.y));const Zt=T.getRenderTarget();T.setRenderTarget(Dt),T.getClearColor(ct),H=T.getClearAlpha(),H<1&&T.setClearColor(16777215,.5),T.clear();const se=T.toneMapping;T.toneMapping=qa,ca(P,pt,gt),kt.updateMultisampleRenderTarget(Dt),kt.updateRenderTargetMipmap(Dt);let re=!1;for(let $t=0,ce=at.length;$t<ce;$t++){const ue=at[$t],we=ue.object,an=ue.geometry,sn=ue.material,ai=ue.group;if(sn.side===ra&&we.layers.test(gt.layers)){const Fe=sn.side;sn.side=In,sn.needsUpdate=!0,Hr(we,pt,gt,an,sn,ai),sn.side=Fe,sn.needsUpdate=!0,re=!0}}re===!0&&(kt.updateMultisampleRenderTarget(Dt),kt.updateRenderTargetMipmap(Dt)),T.setRenderTarget(Zt),T.setClearColor(ct,H),T.toneMapping=se}function ca(P,at,pt){const gt=at.isScene===!0?at.overrideMaterial:null;for(let ht=0,Xt=P.length;ht<Xt;ht++){const Zt=P[ht],se=Zt.object,re=Zt.geometry,$t=gt===null?Zt.material:gt,ce=Zt.group;se.layers.test(pt.layers)&&Hr(se,at,pt,re,$t,ce)}}function Hr(P,at,pt,gt,ht,Xt){P.onBeforeRender(T,at,pt,gt,ht,Xt),P.modelViewMatrix.multiplyMatrices(pt.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ht.onBeforeRender(T,at,pt,gt,P,Xt),ht.transparent===!0&&ht.side===ra&&ht.forceSinglePass===!1?(ht.side=In,ht.needsUpdate=!0,T.renderBufferDirect(pt,at,gt,ht,P,Xt),ht.side=ja,ht.needsUpdate=!0,T.renderBufferDirect(pt,at,gt,ht,P,Xt),ht.side=ra):T.renderBufferDirect(pt,at,gt,ht,P,Xt),P.onAfterRender(T,at,pt,gt,ht,Xt)}function Ka(P,at,pt){at.isScene!==!0&&(at=_t);const gt=Ht.get(P),ht=x.state.lights,Xt=x.state.shadowsArray,Zt=ht.state.version,se=it.getParameters(P,ht.state,Xt,at,pt),re=it.getProgramCacheKey(se);let $t=gt.programs;gt.environment=P.isMeshStandardMaterial?at.environment:null,gt.fog=at.fog,gt.envMap=(P.isMeshStandardMaterial?le:te).get(P.envMap||gt.environment),$t===void 0&&(P.addEventListener("dispose",wt),$t=new Map,gt.programs=$t);let ce=$t.get(re);if(ce!==void 0){if(gt.currentProgram===ce&&gt.lightsStateVersion===Zt)return nn(P,se),ce}else se.uniforms=it.getUniforms(P),P.onBuild(pt,se,T),P.onBeforeCompile(se,T),ce=it.acquireProgram(se,re),$t.set(re,ce),gt.uniforms=se.uniforms;const ue=gt.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(ue.clippingPlanes=Qt.uniform),nn(P,se),gt.needsLights=Gr(P),gt.lightsStateVersion=Zt,gt.needsLights&&(ue.ambientLightColor.value=ht.state.ambient,ue.lightProbe.value=ht.state.probe,ue.directionalLights.value=ht.state.directional,ue.directionalLightShadows.value=ht.state.directionalShadow,ue.spotLights.value=ht.state.spot,ue.spotLightShadows.value=ht.state.spotShadow,ue.rectAreaLights.value=ht.state.rectArea,ue.ltc_1.value=ht.state.rectAreaLTC1,ue.ltc_2.value=ht.state.rectAreaLTC2,ue.pointLights.value=ht.state.point,ue.pointLightShadows.value=ht.state.pointShadow,ue.hemisphereLights.value=ht.state.hemi,ue.directionalShadowMap.value=ht.state.directionalShadowMap,ue.directionalShadowMatrix.value=ht.state.directionalShadowMatrix,ue.spotShadowMap.value=ht.state.spotShadowMap,ue.spotLightMatrix.value=ht.state.spotLightMatrix,ue.spotLightMap.value=ht.state.spotLightMap,ue.pointShadowMap.value=ht.state.pointShadowMap,ue.pointShadowMatrix.value=ht.state.pointShadowMatrix),gt.currentProgram=ce,gt.uniformsList=null,ce}function vi(P){if(P.uniformsList===null){const at=P.currentProgram.getUniforms();P.uniformsList=Bc.seqWithValue(at.seq,P.uniforms)}return P.uniformsList}function nn(P,at){const pt=Ht.get(P);pt.outputColorSpace=at.outputColorSpace,pt.batching=at.batching,pt.instancing=at.instancing,pt.instancingColor=at.instancingColor,pt.skinning=at.skinning,pt.morphTargets=at.morphTargets,pt.morphNormals=at.morphNormals,pt.morphColors=at.morphColors,pt.morphTargetsCount=at.morphTargetsCount,pt.numClippingPlanes=at.numClippingPlanes,pt.numIntersection=at.numClipIntersection,pt.vertexAlphas=at.vertexAlphas,pt.vertexTangents=at.vertexTangents,pt.toneMapping=at.toneMapping}function Cn(P,at,pt,gt,ht){at.isScene!==!0&&(at=_t),kt.resetTextureUnits();const Xt=at.fog,Zt=gt.isMeshStandardMaterial?at.environment:null,se=N===null?T.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:la,re=(gt.isMeshStandardMaterial?le:te).get(gt.envMap||Zt),$t=gt.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,ce=!!pt.attributes.tangent&&(!!gt.normalMap||gt.anisotropy>0),ue=!!pt.morphAttributes.position,we=!!pt.morphAttributes.normal,an=!!pt.morphAttributes.color;let sn=qa;gt.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(sn=T.toneMapping);const ai=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,Fe=ai!==void 0?ai.length:0,ge=Ht.get(gt),fa=x.state.lights;if(et===!0&&(Tt===!0||P!==C)){const Fn=P===C&&gt.id===K;Qt.setState(gt,P,Fn)}let Be=!1;gt.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==fa.state.version||ge.outputColorSpace!==se||ht.isBatchedMesh&&ge.batching===!1||!ht.isBatchedMesh&&ge.batching===!0||ht.isInstancedMesh&&ge.instancing===!1||!ht.isInstancedMesh&&ge.instancing===!0||ht.isSkinnedMesh&&ge.skinning===!1||!ht.isSkinnedMesh&&ge.skinning===!0||ht.isInstancedMesh&&ge.instancingColor===!0&&ht.instanceColor===null||ht.isInstancedMesh&&ge.instancingColor===!1&&ht.instanceColor!==null||ge.envMap!==re||gt.fog===!0&&ge.fog!==Xt||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==Qt.numPlanes||ge.numIntersection!==Qt.numIntersection)||ge.vertexAlphas!==$t||ge.vertexTangents!==ce||ge.morphTargets!==ue||ge.morphNormals!==we||ge.morphColors!==an||ge.toneMapping!==sn||Ct.isWebGL2===!0&&ge.morphTargetsCount!==Fe)&&(Be=!0):(Be=!0,ge.__version=gt.version);let Sn=ge.currentProgram;Be===!0&&(Sn=Ka(gt,at,ht));let Nn=!1,ha=!1,Vr=!1;const rn=Sn.getUniforms(),Ci=ge.uniforms;if(Rt.useProgram(Sn.program)&&(Nn=!0,ha=!0,Vr=!0),gt.id!==K&&(K=gt.id,ha=!0),Nn||C!==P){rn.setValue(D,"projectionMatrix",P.projectionMatrix),rn.setValue(D,"viewMatrix",P.matrixWorldInverse);const Fn=rn.map.cameraPosition;Fn!==void 0&&Fn.setValue(D,nt.setFromMatrixPosition(P.matrixWorld)),Ct.logarithmicDepthBuffer&&rn.setValue(D,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(gt.isMeshPhongMaterial||gt.isMeshToonMaterial||gt.isMeshLambertMaterial||gt.isMeshBasicMaterial||gt.isMeshStandardMaterial||gt.isShaderMaterial)&&rn.setValue(D,"isOrthographic",P.isOrthographicCamera===!0),C!==P&&(C=P,ha=!0,Vr=!0)}if(ht.isSkinnedMesh){rn.setOptional(D,ht,"bindMatrix"),rn.setOptional(D,ht,"bindMatrixInverse");const Fn=ht.skeleton;Fn&&(Ct.floatVertexTextures?(Fn.boneTexture===null&&Fn.computeBoneTexture(),rn.setValue(D,"boneTexture",Fn.boneTexture,kt)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ht.isBatchedMesh&&(rn.setOptional(D,ht,"batchingTexture"),rn.setValue(D,"batchingTexture",ht._matricesTexture,kt));const da=pt.morphAttributes;if((da.position!==void 0||da.normal!==void 0||da.color!==void 0&&Ct.isWebGL2===!0)&&X.update(ht,pt,Sn),(ha||ge.receiveShadow!==ht.receiveShadow)&&(ge.receiveShadow=ht.receiveShadow,rn.setValue(D,"receiveShadow",ht.receiveShadow)),gt.isMeshGouraudMaterial&&gt.envMap!==null&&(Ci.envMap.value=re,Ci.flipEnvMap.value=re.isCubeTexture&&re.isRenderTargetTexture===!1?-1:1),ha&&(rn.setValue(D,"toneMappingExposure",T.toneMappingExposure),ge.needsLights&&ua(Ci,Vr),Xt&&gt.fog===!0&&Ot.refreshFogUniforms(Ci,Xt),Ot.refreshMaterialUniforms(Ci,gt,W,F,Dt),Bc.upload(D,vi(ge),Ci,kt)),gt.isShaderMaterial&&gt.uniformsNeedUpdate===!0&&(Bc.upload(D,vi(ge),Ci,kt),gt.uniformsNeedUpdate=!1),gt.isSpriteMaterial&&rn.setValue(D,"center",ht.center),rn.setValue(D,"modelViewMatrix",ht.modelViewMatrix),rn.setValue(D,"normalMatrix",ht.normalMatrix),rn.setValue(D,"modelMatrix",ht.matrixWorld),gt.isShaderMaterial||gt.isRawShaderMaterial){const Fn=gt.uniformsGroups;for(let wn=0,kr=Fn.length;wn<kr;wn++)if(Ct.isWebGL2){const Xr=Fn[wn];ae.update(Xr,Sn),ae.bind(Xr,Sn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Sn}function ua(P,at){P.ambientLightColor.needsUpdate=at,P.lightProbe.needsUpdate=at,P.directionalLights.needsUpdate=at,P.directionalLightShadows.needsUpdate=at,P.pointLights.needsUpdate=at,P.pointLightShadows.needsUpdate=at,P.spotLights.needsUpdate=at,P.spotLightShadows.needsUpdate=at,P.rectAreaLights.needsUpdate=at,P.hemisphereLights.needsUpdate=at}function Gr(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(P,at,pt){Ht.get(P.texture).__webglTexture=at,Ht.get(P.depthTexture).__webglTexture=pt;const gt=Ht.get(P);gt.__hasExternalTextures=!0,gt.__hasExternalTextures&&(gt.__autoAllocateDepthBuffer=pt===void 0,gt.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),gt.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,at){const pt=Ht.get(P);pt.__webglFramebuffer=at,pt.__useDefaultFramebuffer=at===void 0},this.setRenderTarget=function(P,at=0,pt=0){N=P,w=at,I=pt;let gt=!0,ht=null,Xt=!1,Zt=!1;if(P){const re=Ht.get(P);re.__useDefaultFramebuffer!==void 0?(Rt.bindFramebuffer(D.FRAMEBUFFER,null),gt=!1):re.__webglFramebuffer===void 0?kt.setupRenderTarget(P):re.__hasExternalTextures&&kt.rebindTextures(P,Ht.get(P.texture).__webglTexture,Ht.get(P.depthTexture).__webglTexture);const $t=P.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Zt=!0);const ce=Ht.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ce[at])?ht=ce[at][pt]:ht=ce[at],Xt=!0):Ct.isWebGL2&&P.samples>0&&kt.useMultisampledRTT(P)===!1?ht=Ht.get(P).__webglMultisampledFramebuffer:Array.isArray(ce)?ht=ce[pt]:ht=ce,z.copy(P.viewport),$.copy(P.scissor),Z=P.scissorTest}else z.copy(vt).multiplyScalar(W).floor(),$.copy(O).multiplyScalar(W).floor(),Z=Y;if(Rt.bindFramebuffer(D.FRAMEBUFFER,ht)&&Ct.drawBuffers&&gt&&Rt.drawBuffers(P,ht),Rt.viewport(z),Rt.scissor($),Rt.setScissorTest(Z),Xt){const re=Ht.get(P.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+at,re.__webglTexture,pt)}else if(Zt){const re=Ht.get(P.texture),$t=at||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,re.__webglTexture,pt||0,$t)}K=-1},this.readRenderTargetPixels=function(P,at,pt,gt,ht,Xt,Zt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let se=Ht.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Zt!==void 0&&(se=se[Zt]),se){Rt.bindFramebuffer(D.FRAMEBUFFER,se);try{const re=P.texture,$t=re.format,ce=re.type;if($t!==Ri&&ee.convert($t)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ue=ce===Zo&&(ft.has("EXT_color_buffer_half_float")||Ct.isWebGL2&&ft.has("EXT_color_buffer_float"));if(ce!==Ya&&ee.convert(ce)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ce===Xa&&(Ct.isWebGL2||ft.has("OES_texture_float")||ft.has("WEBGL_color_buffer_float")))&&!ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}at>=0&&at<=P.width-gt&&pt>=0&&pt<=P.height-ht&&D.readPixels(at,pt,gt,ht,ee.convert($t),ee.convert(ce),Xt)}finally{const re=N!==null?Ht.get(N).__webglFramebuffer:null;Rt.bindFramebuffer(D.FRAMEBUFFER,re)}}},this.copyFramebufferToTexture=function(P,at,pt=0){const gt=Math.pow(2,-pt),ht=Math.floor(at.image.width*gt),Xt=Math.floor(at.image.height*gt);kt.setTexture2D(at,0),D.copyTexSubImage2D(D.TEXTURE_2D,pt,0,0,P.x,P.y,ht,Xt),Rt.unbindTexture()},this.copyTextureToTexture=function(P,at,pt,gt=0){const ht=at.image.width,Xt=at.image.height,Zt=ee.convert(pt.format),se=ee.convert(pt.type);kt.setTexture2D(pt,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,pt.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,pt.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,pt.unpackAlignment),at.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,gt,P.x,P.y,ht,Xt,Zt,se,at.image.data):at.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,gt,P.x,P.y,at.mipmaps[0].width,at.mipmaps[0].height,Zt,at.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,gt,P.x,P.y,Zt,se,at.image),gt===0&&pt.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Rt.unbindTexture()},this.copyTextureToTexture3D=function(P,at,pt,gt,ht=0){if(T.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Xt=P.max.x-P.min.x+1,Zt=P.max.y-P.min.y+1,se=P.max.z-P.min.z+1,re=ee.convert(gt.format),$t=ee.convert(gt.type);let ce;if(gt.isData3DTexture)kt.setTexture3D(gt,0),ce=D.TEXTURE_3D;else if(gt.isDataArrayTexture)kt.setTexture2DArray(gt,0),ce=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,gt.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,gt.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,gt.unpackAlignment);const ue=D.getParameter(D.UNPACK_ROW_LENGTH),we=D.getParameter(D.UNPACK_IMAGE_HEIGHT),an=D.getParameter(D.UNPACK_SKIP_PIXELS),sn=D.getParameter(D.UNPACK_SKIP_ROWS),ai=D.getParameter(D.UNPACK_SKIP_IMAGES),Fe=pt.isCompressedTexture?pt.mipmaps[0]:pt.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Fe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Fe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,P.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,P.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,P.min.z),pt.isDataTexture||pt.isData3DTexture?D.texSubImage3D(ce,ht,at.x,at.y,at.z,Xt,Zt,se,re,$t,Fe.data):pt.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(ce,ht,at.x,at.y,at.z,Xt,Zt,se,re,Fe.data)):D.texSubImage3D(ce,ht,at.x,at.y,at.z,Xt,Zt,se,re,$t,Fe),D.pixelStorei(D.UNPACK_ROW_LENGTH,ue),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,we),D.pixelStorei(D.UNPACK_SKIP_PIXELS,an),D.pixelStorei(D.UNPACK_SKIP_ROWS,sn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ai),ht===0&&gt.generateMipmaps&&D.generateMipmap(ce),Rt.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?kt.setTextureCube(P,0):P.isData3DTexture?kt.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?kt.setTexture2DArray(P,0):kt.setTexture2D(P,0),Rt.unbindTexture()},this.resetState=function(){w=0,I=0,N=null,Rt.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=t===cd?"display-p3":"srgb",i.unpackColorSpace=ze.workingColorSpace===jc?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===yn?Ms:uv}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ms?yn:la}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class OA extends Dv{}OA.prototype.isWebGL1Renderer=!0;class gd{constructor(t,i=1,a=1e3){this.isFog=!0,this.name="",this.color=new be(t),this.near=i,this.far=a}clone(){return new gd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Uv extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i}}class PA extends qn{constructor(t,i,a,l,c,h,f,p,m){super(t,i,a,l,c,h,f,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,i){const a=this.getUtoTmapping(t);return this.getPoint(a,i)}getPoints(t=5){const i=[];for(let a=0;a<=t;a++)i.push(this.getPoint(a/t));return i}getSpacedPoints(t=5){const i=[];for(let a=0;a<=t;a++)i.push(this.getPointAt(a/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let a,l=this.getPoint(0),c=0;i.push(0);for(let h=1;h<=t;h++)a=this.getPoint(h/t),c+=a.distanceTo(l),i.push(c),l=a;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i){const a=this.getLengths();let l=0;const c=a.length;let h;i?h=i:h=t*a[c-1];let f=0,p=c-1,m;for(;f<=p;)if(l=Math.floor(f+(p-f)/2),m=a[l]-h,m<0)f=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,a[l]===h)return l/(c-1);const g=a[l],y=a[l+1]-g,M=(h-g)/y;return(l+M)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const h=this.getPoint(l),f=this.getPoint(c),p=i||(h.isVector2?new It:new k);return p.copy(f).sub(h).normalize(),p}getTangentAt(t,i){const a=this.getUtoTmapping(t);return this.getTangent(a,i)}computeFrenetFrames(t,i){const a=new k,l=[],c=[],h=[],f=new k,p=new tn;for(let M=0;M<=t;M++){const E=M/t;l[M]=this.getTangentAt(E,new k)}c[0]=new k,h[0]=new k;let m=Number.MAX_VALUE;const g=Math.abs(l[0].x),_=Math.abs(l[0].y),y=Math.abs(l[0].z);g<=m&&(m=g,a.set(1,0,0)),_<=m&&(m=_,a.set(0,1,0)),y<=m&&a.set(0,0,1),f.crossVectors(l[0],a).normalize(),c[0].crossVectors(l[0],f),h[0].crossVectors(l[0],c[0]);for(let M=1;M<=t;M++){if(c[M]=c[M-1].clone(),h[M]=h[M-1].clone(),f.crossVectors(l[M-1],l[M]),f.length()>Number.EPSILON){f.normalize();const E=Math.acos(xn(l[M-1].dot(l[M]),-1,1));c[M].applyMatrix4(p.makeRotationAxis(f,E))}h[M].crossVectors(l[M],c[M])}if(i===!0){let M=Math.acos(xn(c[0].dot(c[t]),-1,1));M/=t,l[0].dot(f.crossVectors(c[0],c[t]))>0&&(M=-M);for(let E=1;E<=t;E++)c[E].applyMatrix4(p.makeRotationAxis(l[E],M*E)),h[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:h}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class _d extends zi{constructor(t=0,i=0,a=1,l=1,c=0,h=Math.PI*2,f=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=a,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=h,this.aClockwise=f,this.aRotation=p}getPoint(t,i){const a=i||new It,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const h=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(h?c=0:c=l),this.aClockwise===!0&&!h&&(c===l?c=-l:c=c-l);const f=this.aStartAngle+t*c;let p=this.aX+this.xRadius*Math.cos(f),m=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),y=p-this.aX,M=m-this.aY;p=y*g-M*_+this.aX,m=y*_+M*g+this.aY}return a.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class zA extends _d{constructor(t,i,a,l,c,h){super(t,i,a,a,l,c,h),this.isArcCurve=!0,this.type="ArcCurve"}}function vd(){let r=0,t=0,i=0,a=0;function l(c,h,f,p){r=c,t=f,i=-3*c+3*h-2*f-p,a=2*c-2*h+f+p}return{initCatmullRom:function(c,h,f,p,m){l(h,f,m*(f-c),m*(p-h))},initNonuniformCatmullRom:function(c,h,f,p,m,g,_){let y=(h-c)/m-(f-c)/(m+g)+(f-h)/g,M=(f-h)/g-(p-h)/(g+_)+(p-f)/_;y*=g,M*=g,l(h,f,y,M)},calc:function(c){const h=c*c,f=h*c;return r+t*c+i*h+a*f}}}const Nc=new k,Vh=new vd,kh=new vd,Xh=new vd;class Nv extends zi{constructor(t=[],i=!1,a="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=a,this.tension=l}getPoint(t,i=new k){const a=i,l=this.points,c=l.length,h=(c-(this.closed?0:1))*t;let f=Math.floor(h),p=h-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/c)+1)*c:p===0&&f===c-1&&(f=c-2,p=1);let m,g;this.closed||f>0?m=l[(f-1)%c]:(Nc.subVectors(l[0],l[1]).add(l[0]),m=Nc);const _=l[f%c],y=l[(f+1)%c];if(this.closed||f+2<c?g=l[(f+2)%c]:(Nc.subVectors(l[c-1],l[c-2]).add(l[c-1]),g=Nc),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(_),M),b=Math.pow(_.distanceToSquared(y),M),x=Math.pow(y.distanceToSquared(g),M);b<1e-4&&(b=1),E<1e-4&&(E=b),x<1e-4&&(x=b),Vh.initNonuniformCatmullRom(m.x,_.x,y.x,g.x,E,b,x),kh.initNonuniformCatmullRom(m.y,_.y,y.y,g.y,E,b,x),Xh.initNonuniformCatmullRom(m.z,_.z,y.z,g.z,E,b,x)}else this.curveType==="catmullrom"&&(Vh.initCatmullRom(m.x,_.x,y.x,g.x,this.tension),kh.initCatmullRom(m.y,_.y,y.y,g.y,this.tension),Xh.initCatmullRom(m.z,_.z,y.z,g.z,this.tension));return a.set(Vh.calc(p),kh.calc(p),Xh.calc(p)),a}copy(t){super.copy(t),this.points=[];for(let i=0,a=t.points.length;i<a;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,a=this.points.length;i<a;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,a=t.points.length;i<a;i++){const l=t.points[i];this.points.push(new k().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function z_(r,t,i,a,l){const c=(a-t)*.5,h=(l-i)*.5,f=r*r,p=r*f;return(2*i-2*a+c+h)*p+(-3*i+3*a-2*c-h)*f+c*r+i}function BA(r,t){const i=1-r;return i*i*t}function IA(r,t){return 2*(1-r)*r*t}function FA(r,t){return r*r*t}function Wo(r,t,i,a){return BA(r,t)+IA(r,i)+FA(r,a)}function HA(r,t){const i=1-r;return i*i*i*t}function GA(r,t){const i=1-r;return 3*i*i*r*t}function VA(r,t){return 3*(1-r)*r*r*t}function kA(r,t){return r*r*r*t}function qo(r,t,i,a,l){return HA(r,t)+GA(r,i)+VA(r,a)+kA(r,l)}class Ov extends zi{constructor(t=new It,i=new It,a=new It,l=new It){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=a,this.v3=l}getPoint(t,i=new It){const a=i,l=this.v0,c=this.v1,h=this.v2,f=this.v3;return a.set(qo(t,l.x,c.x,h.x,f.x),qo(t,l.y,c.y,h.y,f.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class XA extends zi{constructor(t=new k,i=new k,a=new k,l=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=a,this.v3=l}getPoint(t,i=new k){const a=i,l=this.v0,c=this.v1,h=this.v2,f=this.v3;return a.set(qo(t,l.x,c.x,h.x,f.x),qo(t,l.y,c.y,h.y,f.y),qo(t,l.z,c.z,h.z,f.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Pv extends zi{constructor(t=new It,i=new It){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new It){const a=i;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new It){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class WA extends zi{constructor(t=new k,i=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new k){const a=i;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new k){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zv extends zi{constructor(t=new It,i=new It,a=new It){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=a}getPoint(t,i=new It){const a=i,l=this.v0,c=this.v1,h=this.v2;return a.set(Wo(t,l.x,c.x,h.x),Wo(t,l.y,c.y,h.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bv extends zi{constructor(t=new k,i=new k,a=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=a}getPoint(t,i=new k){const a=i,l=this.v0,c=this.v1,h=this.v2;return a.set(Wo(t,l.x,c.x,h.x),Wo(t,l.y,c.y,h.y),Wo(t,l.z,c.z,h.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Iv extends zi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new It){const a=i,l=this.points,c=(l.length-1)*t,h=Math.floor(c),f=c-h,p=l[h===0?h:h-1],m=l[h],g=l[h>l.length-2?l.length-1:h+1],_=l[h>l.length-3?l.length-1:h+2];return a.set(z_(f,p.x,m.x,g.x,_.x),z_(f,p.y,m.y,g.y,_.y)),a}copy(t){super.copy(t),this.points=[];for(let i=0,a=t.points.length;i<a;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,a=this.points.length;i<a;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,a=t.points.length;i<a;i++){const l=t.points[i];this.points.push(new It().fromArray(l))}return this}}var qc=Object.freeze({__proto__:null,ArcCurve:zA,CatmullRomCurve3:Nv,CubicBezierCurve:Ov,CubicBezierCurve3:XA,EllipseCurve:_d,LineCurve:Pv,LineCurve3:WA,QuadraticBezierCurve:zv,QuadraticBezierCurve3:Bv,SplineCurve:Iv});class qA extends zi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),i=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(i)){const a=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qc[a](i,t))}return this}getPoint(t,i){const a=t*this.getLength(),l=this.getCurveLengths();let c=0;for(;c<l.length;){if(l[c]>=a){const h=l[c]-a,f=this.curves[c],p=f.getLength(),m=p===0?0:1-h/p;return f.getPointAt(m,i)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let i=0;for(let a=0,l=this.curves.length;a<l;a++)i+=this.curves[a].getLength(),t.push(i);return this.cacheLengths=t,t}getSpacedPoints(t=40){const i=[];for(let a=0;a<=t;a++)i.push(this.getPoint(a/t));return this.autoClose&&i.push(i[0]),i}getPoints(t=12){const i=[];let a;for(let l=0,c=this.curves;l<c.length;l++){const h=c[l],f=h.isEllipseCurve?t*2:h.isLineCurve||h.isLineCurve3?1:h.isSplineCurve?t*h.points.length:t,p=h.getPoints(f);for(let m=0;m<p.length;m++){const g=p[m];a&&a.equals(g)||(i.push(g),a=g)}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i}copy(t){super.copy(t),this.curves=[];for(let i=0,a=t.curves.length;i<a;i++){const l=t.curves[i];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let i=0,a=this.curves.length;i<a;i++){const l=this.curves[i];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let i=0,a=t.curves.length;i<a;i++){const l=t.curves[i];this.curves.push(new qc[l.type]().fromJSON(l))}return this}}class B_ extends qA{constructor(t){super(),this.type="Path",this.currentPoint=new It,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let i=1,a=t.length;i<a;i++)this.lineTo(t[i].x,t[i].y);return this}moveTo(t,i){return this.currentPoint.set(t,i),this}lineTo(t,i){const a=new Pv(this.currentPoint.clone(),new It(t,i));return this.curves.push(a),this.currentPoint.set(t,i),this}quadraticCurveTo(t,i,a,l){const c=new zv(this.currentPoint.clone(),new It(t,i),new It(a,l));return this.curves.push(c),this.currentPoint.set(a,l),this}bezierCurveTo(t,i,a,l,c,h){const f=new Ov(this.currentPoint.clone(),new It(t,i),new It(a,l),new It(c,h));return this.curves.push(f),this.currentPoint.set(c,h),this}splineThru(t){const i=[this.currentPoint.clone()].concat(t),a=new Iv(i);return this.curves.push(a),this.currentPoint.copy(t[t.length-1]),this}arc(t,i,a,l,c,h){const f=this.currentPoint.x,p=this.currentPoint.y;return this.absarc(t+f,i+p,a,l,c,h),this}absarc(t,i,a,l,c,h){return this.absellipse(t,i,a,a,l,c,h),this}ellipse(t,i,a,l,c,h,f,p){const m=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(t+m,i+g,a,l,c,h,f,p),this}absellipse(t,i,a,l,c,h,f,p){const m=new _d(t,i,a,l,c,h,f,p);if(this.curves.length>0){const _=m.getPoint(0);_.equals(this.currentPoint)||this.lineTo(_.x,_.y)}this.curves.push(m);const g=m.getPoint(1);return this.currentPoint.copy(g),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class $c extends _i{constructor(t=1,i=1,a=1,l=32,c=1,h=!1,f=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:a,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:f,thetaLength:p};const m=this;l=Math.floor(l),c=Math.floor(c);const g=[],_=[],y=[],M=[];let E=0;const b=[],x=a/2;let v=0;B(),h===!1&&(t>0&&T(!0),i>0&&T(!1)),this.setIndex(g),this.setAttribute("position",new en(_,3)),this.setAttribute("normal",new en(y,3)),this.setAttribute("uv",new en(M,2));function B(){const L=new k,w=new k;let I=0;const N=(i-t)/a;for(let K=0;K<=c;K++){const C=[],z=K/c,$=z*(i-t)+t;for(let Z=0;Z<=l;Z++){const ct=Z/l,H=ct*p+f,rt=Math.sin(H),F=Math.cos(H);w.x=$*rt,w.y=-z*a+x,w.z=$*F,_.push(w.x,w.y,w.z),L.set(rt,N,F).normalize(),y.push(L.x,L.y,L.z),M.push(ct,1-z),C.push(E++)}b.push(C)}for(let K=0;K<l;K++)for(let C=0;C<c;C++){const z=b[C][K],$=b[C+1][K],Z=b[C+1][K+1],ct=b[C][K+1];g.push(z,$,ct),g.push($,Z,ct),I+=6}m.addGroup(v,I,0),v+=I}function T(L){const w=E,I=new It,N=new k;let K=0;const C=L===!0?t:i,z=L===!0?1:-1;for(let Z=1;Z<=l;Z++)_.push(0,x*z,0),y.push(0,z,0),M.push(.5,.5),E++;const $=E;for(let Z=0;Z<=l;Z++){const H=Z/l*p+f,rt=Math.cos(H),F=Math.sin(H);N.x=C*F,N.y=x*z,N.z=C*rt,_.push(N.x,N.y,N.z),y.push(0,z,0),I.x=rt*.5+.5,I.y=F*.5*z+.5,M.push(I.x,I.y),E++}for(let Z=0;Z<l;Z++){const ct=w+Z,H=$+Z;L===!0?g.push(H,H+1,ct):g.push(H+1,H,ct),K+=3}m.addGroup(v,K,L===!0?1:2),v+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $c(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fv extends B_{constructor(t){super(t),this.uuid=Cs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const i=[];for(let a=0,l=this.holes.length;a<l;a++)i[a]=this.holes[a].getPoints(t);return i}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let i=0,a=t.holes.length;i<a;i++){const l=t.holes[i];this.holes.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let i=0,a=this.holes.length;i<a;i++){const l=this.holes[i];t.holes.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let i=0,a=t.holes.length;i<a;i++){const l=t.holes[i];this.holes.push(new B_().fromJSON(l))}return this}}const YA={triangulate:function(r,t,i=2){const a=t&&t.length,l=a?t[0]*i:r.length;let c=Hv(r,0,l,i,!0);const h=[];if(!c||c.next===c.prev)return h;let f,p,m,g,_,y,M;if(a&&(c=JA(r,t,c,i)),r.length>80*i){f=m=r[0],p=g=r[1];for(let E=i;E<l;E+=i)_=r[E],y=r[E+1],_<f&&(f=_),y<p&&(p=y),_>m&&(m=_),y>g&&(g=y);M=Math.max(m-f,g-p),M=M!==0?32767/M:0}return Qo(c,h,i,f,p,M,0),h}};function Hv(r,t,i,a,l){let c,h;if(l===c2(r,t,i,a)>0)for(c=t;c<i;c+=a)h=I_(c,r[c],r[c+1],h);else for(c=i-a;c>=t;c-=a)h=I_(c,r[c],r[c+1],h);return h&&tu(h,h.next)&&($o(h),h=h.next),h}function As(r,t){if(!r)return r;t||(t=r);let i=r,a;do if(a=!1,!i.steiner&&(tu(i,i.next)||qe(i.prev,i,i.next)===0)){if($o(i),i=t=i.prev,i===i.next)break;a=!0}else i=i.next;while(a||i!==t);return t}function Qo(r,t,i,a,l,c,h){if(!r)return;!h&&c&&i2(r,a,l,c);let f=r,p,m;for(;r.prev!==r.next;){if(p=r.prev,m=r.next,c?ZA(r,a,l,c):jA(r)){t.push(p.i/i|0),t.push(r.i/i|0),t.push(m.i/i|0),$o(r),r=m.next,f=m.next;continue}if(r=m,r===f){h?h===1?(r=KA(As(r),t,i),Qo(r,t,i,a,l,c,2)):h===2&&QA(r,t,i,a,l,c):Qo(As(r),t,i,a,l,c,1);break}}}function jA(r){const t=r.prev,i=r,a=r.next;if(qe(t,i,a)>=0)return!1;const l=t.x,c=i.x,h=a.x,f=t.y,p=i.y,m=a.y,g=l<c?l<h?l:h:c<h?c:h,_=f<p?f<m?f:m:p<m?p:m,y=l>c?l>h?l:h:c>h?c:h,M=f>p?f>m?f:m:p>m?p:m;let E=a.next;for(;E!==t;){if(E.x>=g&&E.x<=y&&E.y>=_&&E.y<=M&&Lr(l,f,c,p,h,m,E.x,E.y)&&qe(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function ZA(r,t,i,a){const l=r.prev,c=r,h=r.next;if(qe(l,c,h)>=0)return!1;const f=l.x,p=c.x,m=h.x,g=l.y,_=c.y,y=h.y,M=f<p?f<m?f:m:p<m?p:m,E=g<_?g<y?g:y:_<y?_:y,b=f>p?f>m?f:m:p>m?p:m,x=g>_?g>y?g:y:_>y?_:y,v=id(M,E,t,i,a),B=id(b,x,t,i,a);let T=r.prevZ,L=r.nextZ;for(;T&&T.z>=v&&L&&L.z<=B;){if(T.x>=M&&T.x<=b&&T.y>=E&&T.y<=x&&T!==l&&T!==h&&Lr(f,g,p,_,m,y,T.x,T.y)&&qe(T.prev,T,T.next)>=0||(T=T.prevZ,L.x>=M&&L.x<=b&&L.y>=E&&L.y<=x&&L!==l&&L!==h&&Lr(f,g,p,_,m,y,L.x,L.y)&&qe(L.prev,L,L.next)>=0))return!1;L=L.nextZ}for(;T&&T.z>=v;){if(T.x>=M&&T.x<=b&&T.y>=E&&T.y<=x&&T!==l&&T!==h&&Lr(f,g,p,_,m,y,T.x,T.y)&&qe(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;L&&L.z<=B;){if(L.x>=M&&L.x<=b&&L.y>=E&&L.y<=x&&L!==l&&L!==h&&Lr(f,g,p,_,m,y,L.x,L.y)&&qe(L.prev,L,L.next)>=0)return!1;L=L.nextZ}return!0}function KA(r,t,i){let a=r;do{const l=a.prev,c=a.next.next;!tu(l,c)&&Gv(l,a,a.next,c)&&Jo(l,c)&&Jo(c,l)&&(t.push(l.i/i|0),t.push(a.i/i|0),t.push(c.i/i|0),$o(a),$o(a.next),a=r=c),a=a.next}while(a!==r);return As(a)}function QA(r,t,i,a,l,c){let h=r;do{let f=h.next.next;for(;f!==h.prev;){if(h.i!==f.i&&r2(h,f)){let p=Vv(h,f);h=As(h,h.next),p=As(p,p.next),Qo(h,t,i,a,l,c,0),Qo(p,t,i,a,l,c,0);return}f=f.next}h=h.next}while(h!==r)}function JA(r,t,i,a){const l=[];let c,h,f,p,m;for(c=0,h=t.length;c<h;c++)f=t[c]*a,p=c<h-1?t[c+1]*a:r.length,m=Hv(r,f,p,a,!1),m===m.next&&(m.steiner=!0),l.push(s2(m));for(l.sort($A),c=0;c<l.length;c++)i=t2(l[c],i);return i}function $A(r,t){return r.x-t.x}function t2(r,t){const i=e2(r,t);if(!i)return t;const a=Vv(i,r);return As(a,a.next),As(i,i.next)}function e2(r,t){let i=t,a=-1/0,l;const c=r.x,h=r.y;do{if(h<=i.y&&h>=i.next.y&&i.next.y!==i.y){const y=i.x+(h-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(y<=c&&y>a&&(a=y,l=i.x<i.next.x?i:i.next,y===c))return l}i=i.next}while(i!==t);if(!l)return null;const f=l,p=l.x,m=l.y;let g=1/0,_;i=l;do c>=i.x&&i.x>=p&&c!==i.x&&Lr(h<m?c:a,h,p,m,h<m?a:c,h,i.x,i.y)&&(_=Math.abs(h-i.y)/(c-i.x),Jo(i,r)&&(_<g||_===g&&(i.x>l.x||i.x===l.x&&n2(l,i)))&&(l=i,g=_)),i=i.next;while(i!==f);return l}function n2(r,t){return qe(r.prev,r,t.prev)<0&&qe(t.next,r,r.next)<0}function i2(r,t,i,a){let l=r;do l.z===0&&(l.z=id(l.x,l.y,t,i,a)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==r);l.prevZ.nextZ=null,l.prevZ=null,a2(l)}function a2(r){let t,i,a,l,c,h,f,p,m=1;do{for(i=r,r=null,c=null,h=0;i;){for(h++,a=i,f=0,t=0;t<m&&(f++,a=a.nextZ,!!a);t++);for(p=m;f>0||p>0&&a;)f!==0&&(p===0||!a||i.z<=a.z)?(l=i,i=i.nextZ,f--):(l=a,a=a.nextZ,p--),c?c.nextZ=l:r=l,l.prevZ=c,c=l;i=a}c.nextZ=null,m*=2}while(h>1);return r}function id(r,t,i,a,l){return r=(r-i)*l|0,t=(t-a)*l|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function s2(r){let t=r,i=r;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==r);return i}function Lr(r,t,i,a,l,c,h,f){return(l-h)*(t-f)>=(r-h)*(c-f)&&(r-h)*(a-f)>=(i-h)*(t-f)&&(i-h)*(c-f)>=(l-h)*(a-f)}function r2(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!o2(r,t)&&(Jo(r,t)&&Jo(t,r)&&l2(r,t)&&(qe(r.prev,r,t.prev)||qe(r,t.prev,t))||tu(r,t)&&qe(r.prev,r,r.next)>0&&qe(t.prev,t,t.next)>0)}function qe(r,t,i){return(t.y-r.y)*(i.x-t.x)-(t.x-r.x)*(i.y-t.y)}function tu(r,t){return r.x===t.x&&r.y===t.y}function Gv(r,t,i,a){const l=Pc(qe(r,t,i)),c=Pc(qe(r,t,a)),h=Pc(qe(i,a,r)),f=Pc(qe(i,a,t));return!!(l!==c&&h!==f||l===0&&Oc(r,i,t)||c===0&&Oc(r,a,t)||h===0&&Oc(i,r,a)||f===0&&Oc(i,t,a))}function Oc(r,t,i){return t.x<=Math.max(r.x,i.x)&&t.x>=Math.min(r.x,i.x)&&t.y<=Math.max(r.y,i.y)&&t.y>=Math.min(r.y,i.y)}function Pc(r){return r>0?1:r<0?-1:0}function o2(r,t){let i=r;do{if(i.i!==r.i&&i.next.i!==r.i&&i.i!==t.i&&i.next.i!==t.i&&Gv(i,i.next,r,t))return!0;i=i.next}while(i!==r);return!1}function Jo(r,t){return qe(r.prev,r,r.next)<0?qe(r,t,r.next)>=0&&qe(r,r.prev,t)>=0:qe(r,t,r.prev)<0||qe(r,r.next,t)<0}function l2(r,t){let i=r,a=!1;const l=(r.x+t.x)/2,c=(r.y+t.y)/2;do i.y>c!=i.next.y>c&&i.next.y!==i.y&&l<(i.next.x-i.x)*(c-i.y)/(i.next.y-i.y)+i.x&&(a=!a),i=i.next;while(i!==r);return a}function Vv(r,t){const i=new ad(r.i,r.x,r.y),a=new ad(t.i,t.x,t.y),l=r.next,c=t.prev;return r.next=t,t.prev=r,i.next=l,l.prev=i,a.next=i,i.prev=a,c.next=a,a.prev=c,a}function I_(r,t,i,a){const l=new ad(r,t,i);return a?(l.next=a.next,l.prev=a,a.next.prev=l,a.next=l):(l.prev=l,l.next=l),l}function $o(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function ad(r,t,i){this.i=r,this.x=t,this.y=i,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function c2(r,t,i,a){let l=0;for(let c=t,h=i-a;c<i;c+=a)l+=(r[h]-r[c])*(r[c+1]+r[h+1]),h=c;return l}class Yo{static area(t){const i=t.length;let a=0;for(let l=i-1,c=0;c<i;l=c++)a+=t[l].x*t[c].y-t[c].x*t[l].y;return a*.5}static isClockWise(t){return Yo.area(t)<0}static triangulateShape(t,i){const a=[],l=[],c=[];F_(t),H_(a,t);let h=t.length;i.forEach(F_);for(let p=0;p<i.length;p++)l.push(h),h+=i[p].length,H_(a,i[p]);const f=YA.triangulate(a,l);for(let p=0;p<f.length;p+=3)c.push(f.slice(p,p+3));return c}}function F_(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function H_(r,t){for(let i=0;i<t.length;i++)r.push(t[i].x),r.push(t[i].y)}class yd extends _i{constructor(t=new Fv([new It(.5,.5),new It(-.5,.5),new It(-.5,-.5),new It(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];const a=this,l=[],c=[];for(let f=0,p=t.length;f<p;f++){const m=t[f];h(m)}this.setAttribute("position",new en(l,3)),this.setAttribute("uv",new en(c,2)),this.computeVertexNormals();function h(f){const p=[],m=i.curveSegments!==void 0?i.curveSegments:12,g=i.steps!==void 0?i.steps:1,_=i.depth!==void 0?i.depth:1;let y=i.bevelEnabled!==void 0?i.bevelEnabled:!0,M=i.bevelThickness!==void 0?i.bevelThickness:.2,E=i.bevelSize!==void 0?i.bevelSize:M-.1,b=i.bevelOffset!==void 0?i.bevelOffset:0,x=i.bevelSegments!==void 0?i.bevelSegments:3;const v=i.extrudePath,B=i.UVGenerator!==void 0?i.UVGenerator:u2;let T,L=!1,w,I,N,K;v&&(T=v.getSpacedPoints(g),L=!0,y=!1,w=v.computeFrenetFrames(g,!1),I=new k,N=new k,K=new k),y||(x=0,M=0,E=0,b=0);const C=f.extractPoints(m);let z=C.shape;const $=C.holes;if(!Yo.isClockWise(z)){z=z.reverse();for(let D=0,st=$.length;D<st;D++){const ft=$[D];Yo.isClockWise(ft)&&($[D]=ft.reverse())}}const ct=Yo.triangulateShape(z,$),H=z;for(let D=0,st=$.length;D<st;D++){const ft=$[D];z=z.concat(ft)}function rt(D,st,ft){return st||console.error("THREE.ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(st,ft)}const F=z.length,W=ct.length;function dt(D,st,ft){let Ct,Rt,Kt;const Ht=D.x-st.x,kt=D.y-st.y,te=ft.x-D.x,le=ft.y-D.y,Te=Ht*Ht+kt*kt,U=Ht*le-kt*te;if(Math.abs(U)>Number.EPSILON){const A=Math.sqrt(Te),it=Math.sqrt(te*te+le*le),Ot=st.x-kt/A,Lt=st.y+Ht/A,Nt=ft.x-le/it,Qt=ft.y+te/it,Bt=((Nt-Ot)*le-(Qt-Lt)*te)/(Ht*le-kt*te);Ct=Ot+Ht*Bt-D.x,Rt=Lt+kt*Bt-D.y;const Vt=Ct*Ct+Rt*Rt;if(Vt<=2)return new It(Ct,Rt);Kt=Math.sqrt(Vt/2)}else{let A=!1;Ht>Number.EPSILON?te>Number.EPSILON&&(A=!0):Ht<-Number.EPSILON?te<-Number.EPSILON&&(A=!0):Math.sign(kt)===Math.sign(le)&&(A=!0),A?(Ct=-kt,Rt=Ht,Kt=Math.sqrt(Te)):(Ct=Ht,Rt=kt,Kt=Math.sqrt(Te/2))}return new It(Ct/Kt,Rt/Kt)}const tt=[];for(let D=0,st=H.length,ft=st-1,Ct=D+1;D<st;D++,ft++,Ct++)ft===st&&(ft=0),Ct===st&&(Ct=0),tt[D]=dt(H[D],H[ft],H[Ct]);const vt=[];let O,Y=tt.concat();for(let D=0,st=$.length;D<st;D++){const ft=$[D];O=[];for(let Ct=0,Rt=ft.length,Kt=Rt-1,Ht=Ct+1;Ct<Rt;Ct++,Kt++,Ht++)Kt===Rt&&(Kt=0),Ht===Rt&&(Ht=0),O[Ct]=dt(ft[Ct],ft[Kt],ft[Ht]);vt.push(O),Y=Y.concat(O)}for(let D=0;D<x;D++){const st=D/x,ft=M*Math.cos(st*Math.PI/2),Ct=E*Math.sin(st*Math.PI/2)+b;for(let Rt=0,Kt=H.length;Rt<Kt;Rt++){const Ht=rt(H[Rt],tt[Rt],Ct);Ut(Ht.x,Ht.y,-ft)}for(let Rt=0,Kt=$.length;Rt<Kt;Rt++){const Ht=$[Rt];O=vt[Rt];for(let kt=0,te=Ht.length;kt<te;kt++){const le=rt(Ht[kt],O[kt],Ct);Ut(le.x,le.y,-ft)}}}const V=E+b;for(let D=0;D<F;D++){const st=y?rt(z[D],Y[D],V):z[D];L?(N.copy(w.normals[0]).multiplyScalar(st.x),I.copy(w.binormals[0]).multiplyScalar(st.y),K.copy(T[0]).add(N).add(I),Ut(K.x,K.y,K.z)):Ut(st.x,st.y,0)}for(let D=1;D<=g;D++)for(let st=0;st<F;st++){const ft=y?rt(z[st],Y[st],V):z[st];L?(N.copy(w.normals[D]).multiplyScalar(ft.x),I.copy(w.binormals[D]).multiplyScalar(ft.y),K.copy(T[D]).add(N).add(I),Ut(K.x,K.y,K.z)):Ut(ft.x,ft.y,_/g*D)}for(let D=x-1;D>=0;D--){const st=D/x,ft=M*Math.cos(st*Math.PI/2),Ct=E*Math.sin(st*Math.PI/2)+b;for(let Rt=0,Kt=H.length;Rt<Kt;Rt++){const Ht=rt(H[Rt],tt[Rt],Ct);Ut(Ht.x,Ht.y,_+ft)}for(let Rt=0,Kt=$.length;Rt<Kt;Rt++){const Ht=$[Rt];O=vt[Rt];for(let kt=0,te=Ht.length;kt<te;kt++){const le=rt(Ht[kt],O[kt],Ct);L?Ut(le.x,le.y+T[g-1].y,T[g-1].x+ft):Ut(le.x,le.y,_+ft)}}}et(),Tt();function et(){const D=l.length/3;if(y){let st=0,ft=F*st;for(let Ct=0;Ct<W;Ct++){const Rt=ct[Ct];J(Rt[2]+ft,Rt[1]+ft,Rt[0]+ft)}st=g+x*2,ft=F*st;for(let Ct=0;Ct<W;Ct++){const Rt=ct[Ct];J(Rt[0]+ft,Rt[1]+ft,Rt[2]+ft)}}else{for(let st=0;st<W;st++){const ft=ct[st];J(ft[2],ft[1],ft[0])}for(let st=0;st<W;st++){const ft=ct[st];J(ft[0]+F*g,ft[1]+F*g,ft[2]+F*g)}}a.addGroup(D,l.length/3-D,0)}function Tt(){const D=l.length/3;let st=0;Dt(H,st),st+=H.length;for(let ft=0,Ct=$.length;ft<Ct;ft++){const Rt=$[ft];Dt(Rt,st),st+=Rt.length}a.addGroup(D,l.length/3-D,1)}function Dt(D,st){let ft=D.length;for(;--ft>=0;){const Ct=ft;let Rt=ft-1;Rt<0&&(Rt=D.length-1);for(let Kt=0,Ht=g+x*2;Kt<Ht;Kt++){const kt=F*Kt,te=F*(Kt+1),le=st+Ct+kt,Te=st+Rt+kt,U=st+Rt+te,A=st+Ct+te;nt(le,Te,U,A)}}}function Ut(D,st,ft){p.push(D),p.push(st),p.push(ft)}function J(D,st,ft){_t(D),_t(st),_t(ft);const Ct=l.length/3,Rt=B.generateTopUV(a,l,Ct-3,Ct-2,Ct-1);yt(Rt[0]),yt(Rt[1]),yt(Rt[2])}function nt(D,st,ft,Ct){_t(D),_t(st),_t(Ct),_t(st),_t(ft),_t(Ct);const Rt=l.length/3,Kt=B.generateSideWallUV(a,l,Rt-6,Rt-3,Rt-2,Rt-1);yt(Kt[0]),yt(Kt[1]),yt(Kt[3]),yt(Kt[1]),yt(Kt[2]),yt(Kt[3])}function _t(D){l.push(p[D*3+0]),l.push(p[D*3+1]),l.push(p[D*3+2])}function yt(D){c.push(D.x),c.push(D.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),i=this.parameters.shapes,a=this.parameters.options;return f2(i,a,t)}static fromJSON(t,i){const a=[];for(let c=0,h=t.shapes.length;c<h;c++){const f=i[t.shapes[c]];a.push(f)}const l=t.options.extrudePath;return l!==void 0&&(t.options.extrudePath=new qc[l.type]().fromJSON(l)),new yd(a,t.options)}}const u2={generateTopUV:function(r,t,i,a,l){const c=t[i*3],h=t[i*3+1],f=t[a*3],p=t[a*3+1],m=t[l*3],g=t[l*3+1];return[new It(c,h),new It(f,p),new It(m,g)]},generateSideWallUV:function(r,t,i,a,l,c){const h=t[i*3],f=t[i*3+1],p=t[i*3+2],m=t[a*3],g=t[a*3+1],_=t[a*3+2],y=t[l*3],M=t[l*3+1],E=t[l*3+2],b=t[c*3],x=t[c*3+1],v=t[c*3+2];return Math.abs(f-g)<Math.abs(h-m)?[new It(h,1-p),new It(m,1-_),new It(y,1-E),new It(b,1-v)]:[new It(f,1-p),new It(g,1-_),new It(M,1-E),new It(x,1-v)]}};function f2(r,t,i){if(i.shapes=[],Array.isArray(r))for(let a=0,l=r.length;a<l;a++){const c=r[a];i.shapes.push(c.uuid)}else i.shapes.push(r.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}class xd extends _i{constructor(t=1,i=32,a=16,l=0,c=Math.PI*2,h=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:a,phiStart:l,phiLength:c,thetaStart:h,thetaLength:f},i=Math.max(3,Math.floor(i)),a=Math.max(2,Math.floor(a));const p=Math.min(h+f,Math.PI);let m=0;const g=[],_=new k,y=new k,M=[],E=[],b=[],x=[];for(let v=0;v<=a;v++){const B=[],T=v/a;let L=0;v===0&&h===0?L=.5/i:v===a&&p===Math.PI&&(L=-.5/i);for(let w=0;w<=i;w++){const I=w/i;_.x=-t*Math.cos(l+I*c)*Math.sin(h+T*f),_.y=t*Math.cos(h+T*f),_.z=t*Math.sin(l+I*c)*Math.sin(h+T*f),E.push(_.x,_.y,_.z),y.copy(_).normalize(),b.push(y.x,y.y,y.z),x.push(I+L,1-T),B.push(m++)}g.push(B)}for(let v=0;v<a;v++)for(let B=0;B<i;B++){const T=g[v][B+1],L=g[v][B],w=g[v+1][B],I=g[v+1][B+1];(v!==0||h>0)&&M.push(T,L,I),(v!==a-1||p<Math.PI)&&M.push(L,w,I)}this.setIndex(M),this.setAttribute("position",new en(E,3)),this.setAttribute("normal",new en(b,3)),this.setAttribute("uv",new en(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xd(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class eu extends _i{constructor(t=1,i=.4,a=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:a,tubularSegments:l,arc:c},a=Math.floor(a),l=Math.floor(l);const h=[],f=[],p=[],m=[],g=new k,_=new k,y=new k;for(let M=0;M<=a;M++)for(let E=0;E<=l;E++){const b=E/l*c,x=M/a*Math.PI*2;_.x=(t+i*Math.cos(x))*Math.cos(b),_.y=(t+i*Math.cos(x))*Math.sin(b),_.z=i*Math.sin(x),f.push(_.x,_.y,_.z),g.x=t*Math.cos(b),g.y=t*Math.sin(b),y.subVectors(_,g).normalize(),p.push(y.x,y.y,y.z),m.push(E/l),m.push(M/a)}for(let M=1;M<=a;M++)for(let E=1;E<=l;E++){const b=(l+1)*M+E-1,x=(l+1)*(M-1)+E-1,v=(l+1)*(M-1)+E,B=(l+1)*M+E;h.push(b,x,B),h.push(x,v,B)}this.setIndex(h),this.setAttribute("position",new en(f,3)),this.setAttribute("normal",new en(p,3)),this.setAttribute("uv",new en(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eu(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Sd extends _i{constructor(t=new Bv(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),i=64,a=1,l=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:a,radialSegments:l,closed:c};const h=t.computeFrenetFrames(i,c);this.tangents=h.tangents,this.normals=h.normals,this.binormals=h.binormals;const f=new k,p=new k,m=new It;let g=new k;const _=[],y=[],M=[],E=[];b(),this.setIndex(E),this.setAttribute("position",new en(_,3)),this.setAttribute("normal",new en(y,3)),this.setAttribute("uv",new en(M,2));function b(){for(let T=0;T<i;T++)x(T);x(c===!1?i:0),B(),v()}function x(T){g=t.getPointAt(T/i,g);const L=h.normals[T],w=h.binormals[T];for(let I=0;I<=l;I++){const N=I/l*Math.PI*2,K=Math.sin(N),C=-Math.cos(N);p.x=C*L.x+K*w.x,p.y=C*L.y+K*w.y,p.z=C*L.z+K*w.z,p.normalize(),y.push(p.x,p.y,p.z),f.x=g.x+a*p.x,f.y=g.y+a*p.y,f.z=g.z+a*p.z,_.push(f.x,f.y,f.z)}}function v(){for(let T=1;T<=i;T++)for(let L=1;L<=l;L++){const w=(l+1)*(T-1)+(L-1),I=(l+1)*T+(L-1),N=(l+1)*T+L,K=(l+1)*(T-1)+L;E.push(w,I,K),E.push(I,N,K)}}function B(){for(let T=0;T<=i;T++)for(let L=0;L<=l;L++)m.x=T/i,m.y=L/l,M.push(m.x,m.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Sd(new qc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Es extends el{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fv,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Md extends An{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new be(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}class h2 extends Md{constructor(t,i,a){super(t,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const Wh=new tn,G_=new k,V_=new k;class kv{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pd,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,a=this.matrix;G_.setFromMatrixPosition(t.matrixWorld),i.position.copy(G_),V_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(V_),i.updateMatrixWorld(),Wh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wh),a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Wh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const k_=new tn,Io=new k,qh=new k;class d2 extends kv{constructor(){super(new ii(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new It(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(t,i=0){const a=this.camera,l=this.matrix,c=t.distance||a.far;c!==a.far&&(a.far=c,a.updateProjectionMatrix()),Io.setFromMatrixPosition(t.matrixWorld),a.position.copy(Io),qh.copy(a.position),qh.add(this._cubeDirections[i]),a.up.copy(this._cubeUps[i]),a.lookAt(qh),a.updateMatrixWorld(),l.makeTranslation(-Io.x,-Io.y,-Io.z),k_.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(k_)}}class p2 extends Md{constructor(t,i,a=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=l,this.shadow=new d2}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class m2 extends kv{constructor(){super(new bv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class X_ extends Md{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new m2}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class g2{constructor(t,i,a=0,l=1/0){this.ray=new hd(t,i),this.near=a,this.far=l,this.camera=null,this.layers=new dd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}intersectObject(t,i=!0,a=[]){return sd(t,this,a,i),a.sort(W_),a}intersectObjects(t,i=!0,a=[]){for(let l=0,c=t.length;l<c;l++)sd(t[l],this,a,i);return a.sort(W_),a}}function W_(r,t){return r.distance-t.distance}function sd(r,t,i,a){if(r.layers.test(t.layers)&&r.raycast(t,i),a===!0){const l=r.children;for(let c=0,h=l.length;c<h;c++)sd(l[c],t,i,!0)}}class q_{constructor(t=1,i=0,a=0){return this.radius=t,this.phi=i,this.theta=a,this}set(t,i,a){return this.radius=t,this.phi=i,this.theta=a,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,a){return this.radius=Math.sqrt(t*t+i*i+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,a),this.phi=Math.acos(xn(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:od}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=od);const Y_={type:"change"},Yh={type:"start"},j_={type:"end"},zc=new hd,Z_=new Va,_2=Math.cos(70*Ni.DEG2RAD);class v2 extends Rs{constructor(t,i){super(),this.object=t,this.domElement=i,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:cr.ROTATE,MIDDLE:cr.DOLLY,RIGHT:cr.PAN},this.touches={ONE:ur.ROTATE,TWO:ur.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return f.phi},this.getAzimuthalAngle=function(){return f.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(X){X.addEventListener("keydown",A),this._domElementKeyEvents=X},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",A),this._domElementKeyEvents=null},this.saveState=function(){a.target0.copy(a.target),a.position0.copy(a.object.position),a.zoom0=a.object.zoom},this.reset=function(){a.target.copy(a.target0),a.object.position.copy(a.position0),a.object.zoom=a.zoom0,a.object.updateProjectionMatrix(),a.dispatchEvent(Y_),a.update(),c=l.NONE},this.update=(function(){const X=new k,zt=new Za().setFromUnitVectors(t.up,new k(0,1,0)),Et=zt.clone().invert(),ee=new k,Wt=new Za,ae=new k,jt=2*Math.PI;return function(he=null){const j=a.object.position;X.copy(j).sub(a.target),X.applyQuaternion(zt),f.setFromVector3(X),a.autoRotate&&c===l.NONE&&$(C(he)),a.enableDamping?(f.theta+=p.theta*a.dampingFactor,f.phi+=p.phi*a.dampingFactor):(f.theta+=p.theta,f.phi+=p.phi);let Ft=a.minAzimuthAngle,wt=a.maxAzimuthAngle;isFinite(Ft)&&isFinite(wt)&&(Ft<-Math.PI?Ft+=jt:Ft>Math.PI&&(Ft-=jt),wt<-Math.PI?wt+=jt:wt>Math.PI&&(wt-=jt),Ft<=wt?f.theta=Math.max(Ft,Math.min(wt,f.theta)):f.theta=f.theta>(Ft+wt)/2?Math.max(Ft,f.theta):Math.min(wt,f.theta)),f.phi=Math.max(a.minPolarAngle,Math.min(a.maxPolarAngle,f.phi)),f.makeSafe(),a.enableDamping===!0?a.target.addScaledVector(g,a.dampingFactor):a.target.add(g),a.target.sub(a.cursor),a.target.clampLength(a.minTargetRadius,a.maxTargetRadius),a.target.add(a.cursor),a.zoomToCursor&&I||a.object.isOrthographicCamera?f.radius=tt(f.radius):f.radius=tt(f.radius*m),X.setFromSpherical(f),X.applyQuaternion(Et),j.copy(a.target).add(X),a.object.lookAt(a.target),a.enableDamping===!0?(p.theta*=1-a.dampingFactor,p.phi*=1-a.dampingFactor,g.multiplyScalar(1-a.dampingFactor)):(p.set(0,0,0),g.set(0,0,0));let St=!1;if(a.zoomToCursor&&I){let Pt=null;if(a.object.isPerspectiveCamera){const ne=X.length();Pt=tt(ne*m);const pe=ne-Pt;a.object.position.addScaledVector(L,pe),a.object.updateMatrixWorld()}else if(a.object.isOrthographicCamera){const ne=new k(w.x,w.y,0);ne.unproject(a.object),a.object.zoom=Math.max(a.minZoom,Math.min(a.maxZoom,a.object.zoom/m)),a.object.updateProjectionMatrix(),St=!0;const pe=new k(w.x,w.y,0);pe.unproject(a.object),a.object.position.sub(pe).add(ne),a.object.updateMatrixWorld(),Pt=X.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),a.zoomToCursor=!1;Pt!==null&&(this.screenSpacePanning?a.target.set(0,0,-1).transformDirection(a.object.matrix).multiplyScalar(Pt).add(a.object.position):(zc.origin.copy(a.object.position),zc.direction.set(0,0,-1).transformDirection(a.object.matrix),Math.abs(a.object.up.dot(zc.direction))<_2?t.lookAt(a.target):(Z_.setFromNormalAndCoplanarPoint(a.object.up,a.target),zc.intersectPlane(Z_,a.target))))}else a.object.isOrthographicCamera&&(a.object.zoom=Math.max(a.minZoom,Math.min(a.maxZoom,a.object.zoom/m)),a.object.updateProjectionMatrix(),St=!0);return m=1,I=!1,St||ee.distanceToSquared(a.object.position)>h||8*(1-Wt.dot(a.object.quaternion))>h||ae.distanceToSquared(a.target)>0?(a.dispatchEvent(Y_),ee.copy(a.object.position),Wt.copy(a.object.quaternion),ae.copy(a.target),!0):!1}})(),this.dispose=function(){a.domElement.removeEventListener("contextmenu",Lt),a.domElement.removeEventListener("pointerdown",Ht),a.domElement.removeEventListener("pointercancel",te),a.domElement.removeEventListener("wheel",U),a.domElement.removeEventListener("pointermove",kt),a.domElement.removeEventListener("pointerup",te),a._domElementKeyEvents!==null&&(a._domElementKeyEvents.removeEventListener("keydown",A),a._domElementKeyEvents=null)};const a=this,l={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let c=l.NONE;const h=1e-6,f=new q_,p=new q_;let m=1;const g=new k,_=new It,y=new It,M=new It,E=new It,b=new It,x=new It,v=new It,B=new It,T=new It,L=new k,w=new It;let I=!1;const N=[],K={};function C(X){return X!==null?2*Math.PI/60*a.autoRotateSpeed*X:2*Math.PI/60/60*a.autoRotateSpeed}function z(){return Math.pow(.95,a.zoomSpeed)}function $(X){p.theta-=X}function Z(X){p.phi-=X}const ct=(function(){const X=new k;return function(Et,ee){X.setFromMatrixColumn(ee,0),X.multiplyScalar(-Et),g.add(X)}})(),H=(function(){const X=new k;return function(Et,ee){a.screenSpacePanning===!0?X.setFromMatrixColumn(ee,1):(X.setFromMatrixColumn(ee,0),X.crossVectors(a.object.up,X)),X.multiplyScalar(Et),g.add(X)}})(),rt=(function(){const X=new k;return function(Et,ee){const Wt=a.domElement;if(a.object.isPerspectiveCamera){const ae=a.object.position;X.copy(ae).sub(a.target);let jt=X.length();jt*=Math.tan(a.object.fov/2*Math.PI/180),ct(2*Et*jt/Wt.clientHeight,a.object.matrix),H(2*ee*jt/Wt.clientHeight,a.object.matrix)}else a.object.isOrthographicCamera?(ct(Et*(a.object.right-a.object.left)/a.object.zoom/Wt.clientWidth,a.object.matrix),H(ee*(a.object.top-a.object.bottom)/a.object.zoom/Wt.clientHeight,a.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),a.enablePan=!1)}})();function F(X){a.object.isPerspectiveCamera||a.object.isOrthographicCamera?m/=X:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),a.enableZoom=!1)}function W(X){a.object.isPerspectiveCamera||a.object.isOrthographicCamera?m*=X:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),a.enableZoom=!1)}function dt(X){if(!a.zoomToCursor)return;I=!0;const zt=a.domElement.getBoundingClientRect(),Et=X.clientX-zt.left,ee=X.clientY-zt.top,Wt=zt.width,ae=zt.height;w.x=Et/Wt*2-1,w.y=-(ee/ae)*2+1,L.set(w.x,w.y,1).unproject(a.object).sub(a.object.position).normalize()}function tt(X){return Math.max(a.minDistance,Math.min(a.maxDistance,X))}function vt(X){_.set(X.clientX,X.clientY)}function O(X){dt(X),v.set(X.clientX,X.clientY)}function Y(X){E.set(X.clientX,X.clientY)}function V(X){y.set(X.clientX,X.clientY),M.subVectors(y,_).multiplyScalar(a.rotateSpeed);const zt=a.domElement;$(2*Math.PI*M.x/zt.clientHeight),Z(2*Math.PI*M.y/zt.clientHeight),_.copy(y),a.update()}function et(X){B.set(X.clientX,X.clientY),T.subVectors(B,v),T.y>0?F(z()):T.y<0&&W(z()),v.copy(B),a.update()}function Tt(X){b.set(X.clientX,X.clientY),x.subVectors(b,E).multiplyScalar(a.panSpeed),rt(x.x,x.y),E.copy(b),a.update()}function Dt(X){dt(X),X.deltaY<0?W(z()):X.deltaY>0&&F(z()),a.update()}function Ut(X){let zt=!1;switch(X.code){case a.keys.UP:X.ctrlKey||X.metaKey||X.shiftKey?Z(2*Math.PI*a.rotateSpeed/a.domElement.clientHeight):rt(0,a.keyPanSpeed),zt=!0;break;case a.keys.BOTTOM:X.ctrlKey||X.metaKey||X.shiftKey?Z(-2*Math.PI*a.rotateSpeed/a.domElement.clientHeight):rt(0,-a.keyPanSpeed),zt=!0;break;case a.keys.LEFT:X.ctrlKey||X.metaKey||X.shiftKey?$(2*Math.PI*a.rotateSpeed/a.domElement.clientHeight):rt(a.keyPanSpeed,0),zt=!0;break;case a.keys.RIGHT:X.ctrlKey||X.metaKey||X.shiftKey?$(-2*Math.PI*a.rotateSpeed/a.domElement.clientHeight):rt(-a.keyPanSpeed,0),zt=!0;break}zt&&(X.preventDefault(),a.update())}function J(){if(N.length===1)_.set(N[0].pageX,N[0].pageY);else{const X=.5*(N[0].pageX+N[1].pageX),zt=.5*(N[0].pageY+N[1].pageY);_.set(X,zt)}}function nt(){if(N.length===1)E.set(N[0].pageX,N[0].pageY);else{const X=.5*(N[0].pageX+N[1].pageX),zt=.5*(N[0].pageY+N[1].pageY);E.set(X,zt)}}function _t(){const X=N[0].pageX-N[1].pageX,zt=N[0].pageY-N[1].pageY,Et=Math.sqrt(X*X+zt*zt);v.set(0,Et)}function yt(){a.enableZoom&&_t(),a.enablePan&&nt()}function D(){a.enableZoom&&_t(),a.enableRotate&&J()}function st(X){if(N.length==1)y.set(X.pageX,X.pageY);else{const Et=Vt(X),ee=.5*(X.pageX+Et.x),Wt=.5*(X.pageY+Et.y);y.set(ee,Wt)}M.subVectors(y,_).multiplyScalar(a.rotateSpeed);const zt=a.domElement;$(2*Math.PI*M.x/zt.clientHeight),Z(2*Math.PI*M.y/zt.clientHeight),_.copy(y)}function ft(X){if(N.length===1)b.set(X.pageX,X.pageY);else{const zt=Vt(X),Et=.5*(X.pageX+zt.x),ee=.5*(X.pageY+zt.y);b.set(Et,ee)}x.subVectors(b,E).multiplyScalar(a.panSpeed),rt(x.x,x.y),E.copy(b)}function Ct(X){const zt=Vt(X),Et=X.pageX-zt.x,ee=X.pageY-zt.y,Wt=Math.sqrt(Et*Et+ee*ee);B.set(0,Wt),T.set(0,Math.pow(B.y/v.y,a.zoomSpeed)),F(T.y),v.copy(B)}function Rt(X){a.enableZoom&&Ct(X),a.enablePan&&ft(X)}function Kt(X){a.enableZoom&&Ct(X),a.enableRotate&&st(X)}function Ht(X){a.enabled!==!1&&(N.length===0&&(a.domElement.setPointerCapture(X.pointerId),a.domElement.addEventListener("pointermove",kt),a.domElement.addEventListener("pointerup",te)),Nt(X),X.pointerType==="touch"?it(X):le(X))}function kt(X){a.enabled!==!1&&(X.pointerType==="touch"?Ot(X):Te(X))}function te(X){Qt(X),N.length===0&&(a.domElement.releasePointerCapture(X.pointerId),a.domElement.removeEventListener("pointermove",kt),a.domElement.removeEventListener("pointerup",te)),a.dispatchEvent(j_),c=l.NONE}function le(X){let zt;switch(X.button){case 0:zt=a.mouseButtons.LEFT;break;case 1:zt=a.mouseButtons.MIDDLE;break;case 2:zt=a.mouseButtons.RIGHT;break;default:zt=-1}switch(zt){case cr.DOLLY:if(a.enableZoom===!1)return;O(X),c=l.DOLLY;break;case cr.ROTATE:if(X.ctrlKey||X.metaKey||X.shiftKey){if(a.enablePan===!1)return;Y(X),c=l.PAN}else{if(a.enableRotate===!1)return;vt(X),c=l.ROTATE}break;case cr.PAN:if(X.ctrlKey||X.metaKey||X.shiftKey){if(a.enableRotate===!1)return;vt(X),c=l.ROTATE}else{if(a.enablePan===!1)return;Y(X),c=l.PAN}break;default:c=l.NONE}c!==l.NONE&&a.dispatchEvent(Yh)}function Te(X){switch(c){case l.ROTATE:if(a.enableRotate===!1)return;V(X);break;case l.DOLLY:if(a.enableZoom===!1)return;et(X);break;case l.PAN:if(a.enablePan===!1)return;Tt(X);break}}function U(X){a.enabled===!1||a.enableZoom===!1||c!==l.NONE||(X.preventDefault(),a.dispatchEvent(Yh),Dt(X),a.dispatchEvent(j_))}function A(X){a.enabled===!1||a.enablePan===!1||Ut(X)}function it(X){switch(Bt(X),N.length){case 1:switch(a.touches.ONE){case ur.ROTATE:if(a.enableRotate===!1)return;J(),c=l.TOUCH_ROTATE;break;case ur.PAN:if(a.enablePan===!1)return;nt(),c=l.TOUCH_PAN;break;default:c=l.NONE}break;case 2:switch(a.touches.TWO){case ur.DOLLY_PAN:if(a.enableZoom===!1&&a.enablePan===!1)return;yt(),c=l.TOUCH_DOLLY_PAN;break;case ur.DOLLY_ROTATE:if(a.enableZoom===!1&&a.enableRotate===!1)return;D(),c=l.TOUCH_DOLLY_ROTATE;break;default:c=l.NONE}break;default:c=l.NONE}c!==l.NONE&&a.dispatchEvent(Yh)}function Ot(X){switch(Bt(X),c){case l.TOUCH_ROTATE:if(a.enableRotate===!1)return;st(X),a.update();break;case l.TOUCH_PAN:if(a.enablePan===!1)return;ft(X),a.update();break;case l.TOUCH_DOLLY_PAN:if(a.enableZoom===!1&&a.enablePan===!1)return;Rt(X),a.update();break;case l.TOUCH_DOLLY_ROTATE:if(a.enableZoom===!1&&a.enableRotate===!1)return;Kt(X),a.update();break;default:c=l.NONE}}function Lt(X){a.enabled!==!1&&X.preventDefault()}function Nt(X){N.push(X)}function Qt(X){delete K[X.pointerId];for(let zt=0;zt<N.length;zt++)if(N[zt].pointerId==X.pointerId){N.splice(zt,1);return}}function Bt(X){let zt=K[X.pointerId];zt===void 0&&(zt=new It,K[X.pointerId]=zt),zt.set(X.pageX,X.pageY)}function Vt(X){const zt=X.pointerId===N[0].pointerId?N[1]:N[0];return K[zt.pointerId]}a.domElement.addEventListener("contextmenu",Lt),a.domElement.addEventListener("pointerdown",Ht),a.domElement.addEventListener("pointercancel",te),a.domElement.addEventListener("wheel",U,{passive:!1}),this.update()}}class y2 extends Uv{constructor(t=null){super();const i=new ws;i.deleteAttribute("uv");const a=new Es({side:In}),l=new Es;let c=5;t!==null&&t._useLegacyLights===!1&&(c=900);const h=new p2(16777215,c,28,2);h.position.set(.418,16.199,.3),this.add(h);const f=new ke(i,a);f.position.set(-.757,13.219,.717),f.scale.set(31.713,28.305,28.591),this.add(f);const p=new ke(i,l);p.position.set(-10.906,2.009,1.846),p.rotation.set(0,-.195,0),p.scale.set(2.328,7.905,4.651),this.add(p);const m=new ke(i,l);m.position.set(-5.607,-.754,-.758),m.rotation.set(0,.994,0),m.scale.set(1.97,1.534,3.955),this.add(m);const g=new ke(i,l);g.position.set(6.167,.857,7.803),g.rotation.set(0,.561,0),g.scale.set(3.927,6.285,3.687),this.add(g);const _=new ke(i,l);_.position.set(-2.017,.018,6.124),_.rotation.set(0,.333,0),_.scale.set(2.002,4.566,2.064),this.add(_);const y=new ke(i,l);y.position.set(2.291,-.756,-2.621),y.rotation.set(0,-.286,0),y.scale.set(1.546,1.552,1.496),this.add(y);const M=new ke(i,l);M.position.set(-2.193,-.369,-5.547),M.rotation.set(0,.516,0),M.scale.set(3.875,3.487,2.986),this.add(M);const E=new ke(i,Rr(50));E.position.set(-16.116,14.37,8.208),E.scale.set(.1,2.428,2.739),this.add(E);const b=new ke(i,Rr(50));b.position.set(-16.109,18.021,-8.207),b.scale.set(.1,2.425,2.751),this.add(b);const x=new ke(i,Rr(17));x.position.set(14.904,12.198,-1.832),x.scale.set(.15,4.265,6.331),this.add(x);const v=new ke(i,Rr(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const B=new ke(i,Rr(20));B.position.set(3.235,11.486,-12.541),B.scale.set(2.5,2,.1),this.add(B);const T=new ke(i,Rr(100));T.position.set(0,20,0),T.scale.set(1,.1,1),this.add(T)}dispose(){const t=new Set;this.traverse(i=>{i.isMesh&&(t.add(i.geometry),t.add(i.material))});for(const i of t)i.dispose()}}function Rr(r){const t=new Kc;return t.color.setScalar(r),t}const Fo=new k;function pi(r,t,i,a,l,c){const h=2*Math.PI*l/4,f=Math.max(c-2*l,0),p=Math.PI/4;Fo.copy(t),Fo[a]=0,Fo.normalize();const m=.5*h/(h+f),g=1-Fo.angleTo(r)/p;return Math.sign(Fo[i])===1?g*m:f/(h+f)+m+m*(1-g)}class x2 extends ws{constructor(t=1,i=1,a=1,l=2,c=.1){if(l=l*2+1,c=Math.min(t/2,i/2,a/2,c),super(1,1,1,l,l,l),l===1)return;const h=this.toNonIndexed();this.index=null,this.attributes.position=h.attributes.position,this.attributes.normal=h.attributes.normal,this.attributes.uv=h.attributes.uv;const f=new k,p=new k,m=new k(t,i,a).divideScalar(2).subScalar(c),g=this.attributes.position.array,_=this.attributes.normal.array,y=this.attributes.uv.array,M=g.length/6,E=new k,b=.5/l;for(let x=0,v=0;x<g.length;x+=3,v+=2)switch(f.fromArray(g,x),p.copy(f),p.x-=Math.sign(p.x)*b,p.y-=Math.sign(p.y)*b,p.z-=Math.sign(p.z)*b,p.normalize(),g[x+0]=m.x*Math.sign(f.x)+p.x*c,g[x+1]=m.y*Math.sign(f.y)+p.y*c,g[x+2]=m.z*Math.sign(f.z)+p.z*c,_[x+0]=p.x,_[x+1]=p.y,_[x+2]=p.z,Math.floor(x/M)){case 0:E.set(1,0,0),y[v+0]=pi(E,p,"z","y",c,a),y[v+1]=1-pi(E,p,"y","z",c,i);break;case 1:E.set(-1,0,0),y[v+0]=1-pi(E,p,"z","y",c,a),y[v+1]=1-pi(E,p,"y","z",c,i);break;case 2:E.set(0,1,0),y[v+0]=1-pi(E,p,"x","z",c,t),y[v+1]=pi(E,p,"z","x",c,a);break;case 3:E.set(0,-1,0),y[v+0]=1-pi(E,p,"x","z",c,t),y[v+1]=1-pi(E,p,"z","x",c,a);break;case 4:E.set(0,0,1),y[v+0]=1-pi(E,p,"x","y",c,t),y[v+1]=1-pi(E,p,"y","x",c,i);break;case 5:E.set(0,0,-1),y[v+0]=pi(E,p,"x","y",c,t),y[v+1]=1-pi(E,p,"y","x",c,i);break}}}const Go=[{id:"shell",name:"外壳与织物",en:"SHELL & TEXTILE",color:"#e8ded2",desc:"象牙白哑光外壳、鲑鱼色饰边与米色织物覆盖层。前后分体胸壳、头部环形接缝及侧面声学织物按设定图重建。",items:["象牙白聚合物外壳","鲑鱼色接缝与关节饰圈","米色织物胸背板与腿面板"],source:"外观依据设定图"},{id:"vision",name:"视觉与隐私",en:"VISION & PRIVACY",color:"#9ed6f5",desc:"额头两枚独立摄像头，每枚具有磨砂层与不透明层。分别切换开启、磨砂、关闭；红、蓝、绿灯对应各自物理遮罩状态。",items:["双摄像头与镜片组","独立双层隐私遮罩","遮罩微型减速电机 × 2","显示面板、麦克风与扬声器"],source:"外观及遮罩依据设定图；电路为概念补充"},{id:"compute",name:"计算与散热",en:"COMPUTE & THERMAL",color:"#69bba8",desc:"躯干内设置主计算板、AI 加速器、内存、存储与独立运动控制板。上方铝鳍散热器和风扇形成概念风道。",items:["主处理器 / AI 加速模块","内存、存储与接口板","运动控制 MCU / IMU","铝制散热鳍片与风扇"],source:"内部构造为概念设计，未指定真实硬件型号"},{id:"battery",name:"电池与供电",en:"BATTERY & POWER",color:"#d5b76e",desc:"低位分组圆柱电芯降低重心；独立电池管理板、保险保护和直流变换模块向计算与执行系统供电。",items:["分组圆柱电芯与固定支架","电池管理板 BMS","保险保护 / DC–DC 模块","电源汇流排与线束"],source:"概念布置；容量、电压与续航尚未验证"},{id:"arms",name:"双臂与异构手",en:"ARMS & HANDS",color:"#d9957e",desc:"机器人自身右侧为四指加拇指的五指手，左侧为双指夹爪。肩肘采用伺服减速关节，腕部和手指采用小型驱动与连杆。",items:["肩肘无刷伺服与减速机构","腕部微型伺服","右手 4 指 + 1 拇指","左手 2 指夹爪与开合机构"],source:"外形及左右手依据设定图；驱动为概念补充"},{id:"waist",name:"伸缩腰与骨架",en:"TELESCOPIC CORE",color:"#c2c9d0",desc:"三节套筒式伸缩腰连接胸腔与骨盆。内部加入步进电机、丝杠、导向杆和承载骨架，演示伸缩运动。",items:["三段伸缩套筒","步进电机与滚珠丝杠","双导向杆与轴承","躯干承载骨架"],source:"伸缩外形依据设定图；承载设计未作校核"},{id:"legs",name:"四轮腿与关节",en:"FOUR-LEG CHASSIS",color:"#b7aaa0",desc:"四条完整轮腿分别连接骨盆。上端伺服关节改变支撑宽度，折叠时整条腿向上旋转，保持连杆长度。",items:["独立髋关节伺服 × 4","腿部连杆与轴承","关节编码器与限位结构","四种站姿及折叠演示"],source:"结构外形依据设定图；姿态仅作运动学演示"},{id:"wheels",name:"轮毂驱动与轮胎",en:"WHEEL DRIVE",color:"#7b9ba9",desc:"四个黑色橡胶轮胎带有纵向胎纹，鲑鱼色轮叉与侧盖。内部用无刷轮毂电机、轴承和编码环表示独立驱动。",items:["无刷轮毂电机 × 4","定子绕组与转子磁环","轮轴、轴承与编码环","哑光黑色带纹橡胶轮胎"],source:"轮组外观依据设定图；电机为概念补充"}];function S2(){const r=new $e,t=[],i=[],a=[],l=[];let c="shell",h=!1,f=0;const p=document.createElement("canvas");p.width=p.height=256;const m=p.getContext("2d");m.fillStyle="#b7afa1",m.fillRect(0,0,256,256);let g=34;const _=()=>(g=g*16807%2147483647,g/2147483647);for(let J=0;J<18e3;J++){const nt=_()*256,_t=_()*256;m.strokeStyle=_()>.5?"rgba(239,229,211,.35)":"rgba(63,50,37,.18)",m.beginPath(),m.moveTo(nt,_t),m.lineTo(nt+(J%2?1:5),_t+(J%2?5:1)),m.stroke()}const y=new PA(p);y.wrapS=y.wrapT=Fc,y.repeat.set(3,3),y.colorSpace=yn;const M=(J,nt=0,_t=.5)=>new Es({color:J,metalness:nt,roughness:_t}),E=M("#ede7df",.08,.31),b=M("#d98b73",.3,.34),x=M("#262b2c",.5,.4),v=M("#121819",.12,.32),B=M("#181b1c",.05,.85),T=M("#8c9a9e",.85,.25),L=M("#c98146",.72,.28),w=M("#15594f",.25,.6),I=M("#6dabbd",.4,.35),N=new Es({color:"#d8cdc0",map:y,bumpMap:y,bumpScale:.015,roughness:.95}),K=new Es({color:"#9fddff",emissive:"#64b7f4",emissiveIntensity:1.1,roughness:.2,toneMapped:!1});function C(J,nt,_t,yt=[0,0,0],D){let st=new ke(J,nt.clone());return st.position.set(...yt),D&&st.scale.set(...D),_t.add(st),st.castShadow=!0,st.receiveShadow=!0,st.userData={category:c,inside:h,part:f++,base:st.position.clone(),explode:new k},t.push(st),st}const z=(J,nt,_t,yt=E,D=.035)=>C(new x2(...nt,3,D),yt,J,_t),$=(J,nt,_t,yt=E)=>C(new xd(1,32,24),yt,J,_t,nt),Z=(J,nt,_t,yt,D=T,st="y",ft=nt)=>{let Ct=C(new $c(nt,ft,_t,40),D,J,yt);return st==="x"&&(Ct.rotation.z=Math.PI/2),st==="z"&&(Ct.rotation.x=Math.PI/2),Ct},ct=(J,nt,_t,yt,D=b,st="z")=>{let ft=C(new eu(nt,_t,10,56),D,J,yt);return st==="x"&&(ft.rotation.y=Math.PI/2),st==="y"&&(ft.rotation.x=Math.PI/2),ft},H=(J,nt,_t=.01,yt=T)=>C(new Sd(new Nv(nt.map(D=>new k(...D))),24,_t,6,!1),yt,J);function rt(J,nt,_t,yt){for(let D of[-1,1])for(let st of[-1,1])Z(J,.012,.01,[D*nt,st*_t,yt],T,"z"),z(J,[.014,.003,.002],[D*nt,st*_t,yt+.007],x,.001)}function F(J,nt,_t){let yt=new $e;yt.position.set(..._t),J.add(yt),z(yt,[nt[0],nt[1],.023],[0,0,0],w,.01),z(yt,[.14,.15,.038],[0,0,.027],x,.006);for(let D=0;D<4;D++){z(yt,[.047,.077,.025],[-nt[0]/2+.055+D*.064,nt[1]/2-.06,.025],x,.004);for(let st=0;st<4;st++)z(yt,[.003,.027,.005],[-nt[0]/2+.04+D*.064+st*.01,nt[1]/2-.113,.017],T,.001)}for(let D=0;D<6;D++)H(yt,[[-nt[0]/2+.02,-nt[1]/2+.026+D*.018,.016],[.07,-nt[1]/2+.026+D*.018,.016],[.07,-.06,.016]],.0016,L);return rt(yt,nt[0]/2-.025,nt[1]/2-.025,.02),yt}function W(J,nt,_t=.075,yt=.12,D="x"){let st=new $e;st.position.set(...nt),J.add(st),D==="y"&&(st.rotation.z=Math.PI/2),D==="z"&&(st.rotation.y=Math.PI/2),Z(st,_t,yt,[0,0,0],x,"x");for(let ft=0;ft<12;ft++){let Ct=ft*Math.PI/6;$(st,[yt*.35,.014,.014],[0,Math.cos(Ct)*_t*.8,Math.sin(Ct)*_t*.8],L)}return Z(st,_t*.87,.014,[yt/2,0,0],T,"x"),Z(st,_t*.35,yt+.04,[0,0,0],T,"x"),ct(st,_t*.68,.008,[yt/2+.009,0,0],L,"x"),st}c="waist";const dt=new $e;dt.position.y=1.03,r.add(dt),$(dt,[.34,.24,.28],[0,0,0]),z(dt,[.09,.032,.012],[0,.015,.278],T,.014);const tt=new $e;tt.position.y=1.34,r.add(tt);const vt=[];for(let J=0;J<3;J++)vt.push(Z(r,.205-J*.018,.17,[0,1.18+J*.13,0],E));const O=new $e;r.add(O),h=!0,W(O,[0,1.13,0],.085,.14,"y"),Z(O,.022,.51,[0,1.43,0],T);for(let J=0;J<27;J++)ct(O,.025,.005,[0,1.22+J*.014,0],T,"y");for(let J of[-1,1])Z(O,.017,.45,[J*.12,1.4,0],T);h=!1;function Y(J,nt,_t,yt=0){let D=new Fv;D.moveTo(-.19,-.36),D.quadraticCurveTo(-.26,-.35,-.29,-.22),D.lineTo(-.38,.25),D.quadraticCurveTo(-.4,.36,-.27,.38),D.quadraticCurveTo(0,.31,.27,.38),D.quadraticCurveTo(.4,.36,.38,.25),D.lineTo(.29,-.22),D.quadraticCurveTo(.26,-.35,.19,-.36),D.closePath();let st=C(new yd(D,{depth:.055,bevelEnabled:!0,bevelThickness:.04,bevelSize:.035,bevelSegments:4,steps:1}),_t,J,[0,.51,nt]);return st.scale.setScalar(1+yt),st}c="shell",Y(tt,.16,b,.035),Y(tt,.207,N),Y(tt,-.27,b,.035),Y(tt,-.294,N);for(let J of[-1,1])z(tt,[.11,.59,.38],[J*.265,.465,0],E,.05);H(tt,[[0,.2,-.36],[0,.51,-.36],[0,.87,-.36]],.009,b),c="vision",z(tt,[.035,.22,.016],[0,.54,.316],T,.017),z(tt,[.016,.182,.015],[0,.54,.328],K,.007),z(tt,[.065,.155,.015],[0,.53,-.355],E,.029),z(tt,[.028,.115,.018],[0,.53,-.368],T,.012),c="compute",h=!0,z(tt,[.43,.64,.026],[0,.48,-.12],T),F(tt,[.39,.4],[0,.54,.02]),F(tt,[.3,.19],[0,.27,.07]);for(let J=0;J<11;J++)z(tt,[.016,.17,.1],[-.1+J*.02,.72,.07],T,.003);Z(tt,.084,.025,[0,.74,.14],x,"z");for(let J=0;J<7;J++){let nt=J*6.28/7,_t=z(tt,[.054,.019,.014],[Math.cos(nt)*.04,.74+Math.sin(nt)*.04,.16],T,.007);_t.rotation.z=nt+.6}Z(tt,.022,.035,[0,.74,.17],x,"z"),h=!1,c="battery",h=!0;for(let J=0;J<5;J++)for(let nt=0;nt<2;nt++)Z(tt,.038,.28,[-.168+J*.083,.22,-.15+nt*.083],I),Z(tt,.031,.008,[-.168+J*.083,.363,-.15+nt*.083],T);z(tt,[.45,.024,.19],[0,.07,-.1],x),F(tt,[.3,.13],[0,.16,-.206]);for(let J of[-1,1])H(tt,[[J*.2,.28,-.15],[J*.21,.45,-.04],[J*.12,.5,.01]],.009,J>0?b:x);h=!1,c="waist",Z(tt,.12,.14,[0,.99,0],x),ct(tt,.135,.016,[0,.932,0],b,"y");const V=new $e;V.position.y=1.38,tt.add(V),c="shell",$(V,[.51,.455,.425],[0,0,0],E),ct(V,.43,.025,[0,0,.125],b).scale.set(1.17,1.04,1),$(V,[.458,.351,.105],[0,-.048,.35],E),c="vision",$(V,[.417,.3,.065],[0,-.055,.417],v);for(let J of[-1,1]){let nt=new $e;nt.position.set(J*.174,-.037,.475),V.add(nt);const _t=ct(nt,.068,.008,[0,0,0],K),yt=H(nt,[[-.064,0,0],[-.043,.04,.001],[0,.054,.002],[.043,.04,.001],[.064,0,0]],.008,K),D=[];for(let st=-1;st<=1;st++)D.push(H(nt,[[J*.098,st*.046,0],[J*.12,st*.054,0]],.005,K));l.push({ring:_t,arc:yt,rays:D})}const Tt=H(V,[[-.047,-.17,.478],[0,-.184,.483],[.047,-.17,.478]],.006,K);for(let J of[-1,1]){let nt=new $e;nt.position.set(J*.171,.275,.323),V.add(nt),z(nt,[.112,.072,.033],[0,0,0],E,.026),Z(nt,.027,.023,[-.018,0,.026],x,"z"),$(nt,[.019,.019,.015],[-.018,0,.041],M("#122d4c",.7,.08));let _t=$(nt,[.012,.012,.006],[.035,0,.028],M("#91c94c")),yt=$(nt,[.027,.027,.008],[-.018,0,.052],M("#b7c7cc",.1,.65)),D=$(nt,[.027,.027,.01],[-.018,0,.058],E),st=z(nt,[.044,.021,.038],[-.018,.059,-.005],b,.008);yt.visible=D.visible=!1,a.push({frost:yt,shut:D,indicator:_t,tab:st}),h=!0,W(V,[J*.18,.28,.23],.026,.065,"y"),F(V,[.11,.14],[J*.2,.13,.21]),h=!1}for(let J of[-1,1])c="shell",Z(V,.186,.051,[J*.491,0,0],b,"x"),Z(V,.149,.057,[J*.505,0,0],N,"x"),c="vision",h=!0,W(V,[J*.404,0,0],.13,.06),h=!1;c="shell",$(V,[.27,.285,.025],[0,0,-.397],E),c="vision";for(let J=-5;J<=5;J++)for(let nt=-5;nt<=5;nt++)J*J+nt*nt<27&&Z(V,.006,.008,[J*.023,nt*.023+.035,-.428],x,"z");z(V,[.22,.046,.015],[0,-.17,-.426],T,.021),z(V,[.189,.02,.018],[0,-.17,-.437],E,.009),c="compute",h=!0,F(V,[.32,.24],[0,0,-.1]),h=!1;const Dt=[];c="arms";for(let J of[-1,1]){let nt=new $e;nt.position.set(J*.405,.72,0),tt.add(nt),nt.rotation.z=J*.56,Dt.push({shoulder:nt,s:J}),Z(nt,.137,.1,[0,0,0],x,"x"),Z(nt,.145,.045,[J*.057,0,0],b,"x"),Z(nt,.12,.05,[J*.085,0,0],E,"x"),$(nt,[.108,.22,.113],[0,-.2,0],N),Z(nt,.09,.055,[0,-.397,0],x),ct(nt,.092,.015,[0,-.37,0],b,"y");let _t=new $e;_t.position.y=-.41,_t.rotation.x=-.16,nt.add(_t),Z(_t,.104,.33,[0,-.175,0],E,"y",.081),ct(_t,.084,.018,[0,-.335,0],b,"y"),$(_t,[.068,.075,.068],[0,-.385,0],x),h=!0,W(nt,[0,0,0],.09,.115),W(nt,[0,-.39,0],.064,.105),W(_t,[0,-.17,0],.057,.13,"y"),h=!1;let yt=new $e;if(yt.position.y=-.45,_t.add(yt),J===-1){z(yt,[.168,.15,.066],[0,-.03,0],E,.031);for(let st=0;st<4;st++){let ft=new $e;ft.position.set(-.061+st*.041,-.096,0),ft.rotation.z=(st-1.5)*.15,yt.add(ft);for(let Ct=0;Ct<3;Ct++){let Rt=.047-(st===0?.006:0);$(ft,[.017,.018,.019],[0,-Ct*.062,0],x),Z(ft,.015,Rt,[0,-Ct*.062-.03,0],E),Ct===2&&$(ft,[.017,.025,.019],[0,-Ct*.062-.061,0],x)}}let D=new $e;D.position.set(.083,-.002,0),D.rotation.z=.9,yt.add(D);for(let st=0;st<2;st++)$(D,[.021,.022,.022],[0,-st*.075,0],x),Z(D,.019,.056,[0,-st*.075-.032,0],E);$(D,[.02,.026,.021],[0,-.144,0],x),h=!0;for(let st=0;st<4;st++)W(yt,[-.057+st*.038,-.022,0],.013,.066,"y");h=!1}else{Z(yt,.07,.075,[0,0,0],E);for(let D of[-1,1])H(yt,[[D*.039,-.04,0],[D*.105,-.12,0],[D*.109,-.2,0],[D*.066,-.25,0]],.035,x),H(yt,[[D*.064,-.073,.017],[D*.13,-.14,.017],[D*.112,-.217,.017]],.027,b),$(yt,[.034,.08,.018],[D*.102,-.14,.041],N);h=!0,W(yt,[0,-.04,0],.04,.095),h=!1}}for(let J of[-1,1])for(let nt of[-1,1]){c="legs";let _t=new $e;_t.position.set(J*.285,1.04,nt*.23),r.add(_t);let yt=new $e;_t.add(yt),i.push({hip:_t,leg:yt,s:J,f:nt}),Z(yt,.117,.12,[J*.03,0,0],x,"x"),Z(yt,.123,.048,[J*.09,0,0],b,"x"),Z(yt,.078,.055,[J*.115,0,0],E,"x"),z(yt,[.145,.59,.158],[0,-.325,0],b,.059),z(yt,[.138,.55,.044],[0,-.32,.084],N,.043),z(yt,[.108,.49,.076],[0,-.32,-.088],E,.035),$(yt,[.095,.105,.095],[0,-.637,0],E),h=!0,W(yt,[0,0,0],.087,.12),z(yt,[.065,.51,.055],[0,-.33,0],T,.015),Z(yt,.052,.065,[0,-.635,0],T,"x"),h=!1,c="wheels";let D=new $e;D.position.set(0,-.8,0),yt.add(D),Z(D,.189,.113,[0,0,0],B,"x");for(let st=-3;st<=3;st++)ct(D,.18,.011,[st*.015,0,0],B,"x");for(let st of[-1,1])Z(D,.141,.02,[st*.074,0,0],b,"x"),Z(D,.106,.023,[st*.087,0,0],T,"x"),z(yt,[.034,.22,.09],[st*.081,-.694,0],b,.017);h=!0,W(D,[0,0,0],.116,.11);for(let st=0;st<12;st++){let ft=st*Math.PI/6;z(D,[.08,.025,.025],[0,Math.cos(ft)*.125,Math.sin(ft)*.125],L,.006)}h=!1}for(const J of t)J.userData.category==="battery"&&J.parent===tt&&(J.position.y+=.075);r.updateMatrixWorld(!0);for(const J of t){let nt=J.getWorldPosition(new k),_t=nt.clone().sub(new k(0,1.55,0));_t.x*=1.6,_t.z*=2.6,_t.length()<.1&&_t.set(.2,.3,.8),_t.normalize().multiplyScalar(J.userData.inside?.37:.55),J.userData.category==="shell"&&(_t.z+=nt.z>=0?.35:-.35),J.userData.category==="vision"&&!J.userData.inside&&nt.y>2.4&&nt.z>.3&&(_t.z+=.6),nt.y<.65&&(_t.y=Math.max(.08,_t.y));let yt=J.parent.getWorldQuaternion(new Za).invert();J.userData.explode.copy(_t.applyQuaternion(yt)),J.userData.base.copy(J.position)}function Ut({explosion:J=0,xray:nt=!1,selected:_t=null,isolate:yt=!1,pose:D="standard",expression:st="neutral",privacy:ft=["open","open"]},Ct){const Rt=J/100,Kt=D==="raised"?.24:D==="folded"?-.12:0,Ht=D==="wide"?.66:D==="narrow"?.06:D==="folded"?2.88:.27,kt=D==="narrow"?.06:D==="folded"?.12:.18,te=D==="folded"?.28:.8*Math.cos(Ht)*Math.cos(kt)+.226;for(const U of i)U.leg.rotation.z=Ni.damp(U.leg.rotation.z,U.s*Ht,6,Ct),U.hip.position.y=Ni.damp(U.hip.position.y,te,6,Ct),U.leg.rotation.x=Ni.damp(U.leg.rotation.x,-U.f*kt,6,Ct);const le=te-1.04;dt.position.y=Ni.damp(dt.position.y,1.03+le,6,Ct),tt.position.y=Ni.damp(tt.position.y,1.34+Kt+le,6,Ct),O.position.y=Ni.damp(O.position.y,le,6,Ct),vt.forEach((U,A)=>U.userData.base.y=Ni.damp(U.userData.base.y,1.18+A*(.13+Kt/3)+le,6,Ct)),Dt.forEach(({shoulder:U,s:A})=>U.rotation.z=Ni.damp(U.rotation.z,A*(D==="narrow"?.12:D==="folded"?-.32:.56),6,Ct));for(const U of t){U.position.copy(U.userData.base).addScaledVector(U.userData.explode,Rt);let A=!_t||U.userData.category===_t;U.visible=!(yt&&_t&&!A)&&(!U.userData.inside||nt||Rt>.02||!!_t);let it=nt&&!U.userData.inside?.13:1;_t&&!A&&!yt&&(it=Math.min(it,.16)),U.material.opacity=it,U.material.transparent=it<1,U.material.depthWrite=it>.5,U.castShadow=it>.5}a.forEach((U,A)=>{let it=ft[A];U.frost.visible=it==="frosted"&&!(yt&&_t&&_t!=="vision"),U.shut.visible=it==="closed"&&!(yt&&_t&&_t!=="vision"),U.indicator.material.color.set(it==="open"?"#83d344":it==="frosted"?"#36b6ff":"#f05238"),U.indicator.material.emissive.copy(U.indicator.material.color).multiplyScalar(.4),U.tab.position.x=U.tab.userData.base.x+(it==="closed"?.018:it==="frosted"?.009:0)});const Te=!(yt&&_t&&_t!=="vision");l.forEach(U=>{const A=st==="happy"||st==="listening";U.ring.visible=Te&&!A,U.arc.visible=Te&&A,U.rays.forEach(it=>it.visible=Te&&st==="alert")}),Tt.visible=st!=="listening"&&Te}return{root:r,meshes:t,update:Ut,count:t.length,components:Go}}function M2(r,t,i){const a=new Uv;a.background=new be("#111820"),a.fog=new gd("#111820",12,29);const l=new ii(34,1,.05,60);l.position.set(4.1,2.85,6.7);const c=new Dv({antialias:!0,alpha:!1,preserveDrawingBuffer:!0});c.setPixelRatio(Math.min(window.devicePixelRatio,1.6)),c.shadowMap.enabled=!0,c.shadowMap.type=$_,c.toneMapping=ev,c.toneMappingExposure=1.3,r.appendChild(c.domElement),c.domElement.setAttribute("aria-label","可拖动旋转、滚轮缩放的 A4 机器人三维模型"),c.domElement.setAttribute("role","img");const h=new ed(c),f=new y2,p=h.fromScene(f,.04);a.environment=p.texture,f.dispose(),h.dispose();const m=new v2(l,c.domElement);m.target.set(0,1.5,0),m.enableDamping=!0,m.minDistance=2.1,m.maxDistance=12,m.maxPolarAngle=Math.PI*.88,m.autoRotateSpeed=.65,m.enablePan=!0,a.add(new h2("#d2e6ff","#746454",1.5));const g=new X_("#fff0df",3.5);g.position.set(3,7,5),g.castShadow=!0,g.shadow.mapSize.set(2048,2048),g.shadow.camera.left=-4,g.shadow.camera.right=4,g.shadow.camera.top=5,g.shadow.camera.bottom=-3,g.shadow.bias=-3e-4,g.shadow.normalBias=.025,a.add(g);const _=new X_("#a9ccff",2.3);_.position.set(-4,4,-4),a.add(_);const y=new ke(new Qc(200,200),new Es({color:"#27333f",roughness:.7,metalness:.28}));y.rotation.x=-Math.PI/2,y.position.y=-.06,y.receiveShadow=!0,a.add(y);const M=new ke(new $c(1.83,1.88,.09,120),new Es({color:"#35414a",metalness:.6,roughness:.38}));M.position.y=-.012,M.receiveShadow=!0,a.add(M);for(let ct of[1.77,1.8]){let H=new ke(new eu(ct,.0025,6,160),new Kc({color:"#7b8f9e"}));H.rotation.x=Math.PI/2,H.position.y=.036,a.add(H)}const E=S2();a.add(E.root);let b={},x=!0,v,B=performance.now(),T=0;const L=new g2,w=new It;let I,N=!1;function K(){let ct=r.clientWidth,H=r.clientHeight;const rt=ct<=760;if(rt!==N){const F=rt?1.22:.819672131147541;l.position.sub(m.target).multiplyScalar(F).add(m.target);const W=rt?-.35:.35;m.target.y+=W,l.position.y+=W,N=rt}l.aspect=ct/H,l.updateProjectionMatrix(),c.setSize(ct,H,!1)}const C=new ResizeObserver(K);C.observe(r),K();const z=ct=>I=[ct.clientX,ct.clientY],$=ct=>{if(!I||Math.hypot(ct.clientX-I[0],ct.clientY-I[1])>5)return;let H=c.domElement.getBoundingClientRect();w.set((ct.clientX-H.left)/H.width*2-1,-(ct.clientY-H.top)/H.height*2+1),L.setFromCamera(w,l);let rt=L.intersectObjects(E.meshes).filter(F=>F.object.visible&&F.object.material.opacity>.2);rt.length&&t(rt[0].object.userData.category)};c.domElement.addEventListener("pointerdown",z),c.domElement.addEventListener("pointerup",$);function Z(ct){if(!x)return;let H=Math.min((ct-B)/1e3,.05);B=ct,T=Ni.damp(T,b.explosion||0,5,H),E.update({...b,explosion:T},H),m.autoRotate=!!b.rotate,m.update(),c.render(a,l),v=requestAnimationFrame(Z)}return v=requestAnimationFrame(Z),i(E.count),{setState(ct){b=ct},zoom(ct){l.position.sub(m.target).multiplyScalar(ct).add(m.target),m.update()},view(ct){const H={front:[0,1.8,7.8],side:[7.8,1.8,0],rear:[0,1.8,-7.8],top:[0,8,.001],perspective:[4.1,2.85,6.7]};l.position.set(...H[ct]||H.perspective),m.target.set(0,1.5,0),N&&(l.position.sub(m.target).multiplyScalar(1.22).add(m.target),m.target.y-=.35,l.position.y-=.35),m.update()},capture(){c.render(a,l);const ct=document.createElement("a");ct.download="A4-robot-studio.png",ct.href=c.domElement.toDataURL("image/png"),ct.click()},dispose(){x=!1,cancelAnimationFrame(v),C.disconnect(),m.dispose(),c.domElement.removeEventListener("pointerdown",z),c.domElement.removeEventListener("pointerup",$),E.meshes.forEach(ct=>{ct.geometry.dispose(),ct.material.dispose()}),p.dispose(),c.dispose(),r.replaceChildren()}}}const K_={explosion:0,xray:!1,selected:null,isolate:!1,pose:"standard",expression:"neutral",privacy:["open","open"],rotate:!1},E2=[["standard","标准站姿"],["raised","腰部抬升"],["wide","宽距支撑"],["narrow","窄距收拢"],["folded","折叠收纳"]];function b2(){const[r,t]=hn.useState(K_),[i,a]=hn.useState(()=>window.innerWidth>760),[l,c]=hn.useState("parts"),[h,f]=hn.useState(!1),[p,m]=hn.useState(0),[g,_]=hn.useState(""),[y,M]=hn.useState(0),E=hn.useRef(),b=hn.useRef(),x=hn.useRef(),v=(w,I)=>t(N=>({...N,[w]:I}));hn.useEffect(()=>{try{b.current=M2(E.current,w=>t(I=>({...I,selected:I.selected===w?null:w})),m)}catch(w){_("三维画布无法启动。请启用浏览器硬件加速后重新打开。"),console.error(w)}return()=>{var w;return(w=b.current)==null?void 0:w.dispose()}},[]),hn.useEffect(()=>{var w;(w=b.current)==null||w.setState(r)},[r]),hn.useEffect(()=>{var w,I;h?(w=x.current)==null||w.showModal():(I=x.current)==null||I.close()},[h]),hn.useEffect(()=>{const w=document.modelContext;if(!(w!=null&&w.registerTool))return;const I=new AbortController;return Promise.resolve(w.registerTool({name:"explore_robot_component",title:"探索机器人部件",description:"选择 A4 机器人系统并更新爆炸拆解、透视与独立显示状态。只影响当前页面。",inputSchema:{type:"object",properties:{component:{type:"string",enum:Go.map(N=>N.id)},explosion:{type:"number",minimum:0,maximum:100},xray:{type:"boolean"},isolate:{type:"boolean"}},required:["component"],additionalProperties:!1},annotations:{readOnlyHint:!1,untrustedContentHint:!1},execute:async N=>{if(!N||!Go.some(K=>K.id===N.component)||Object.keys(N).some(K=>!["component","explosion","xray","isolate"].includes(K))||N.explosion!==void 0&&(!Number.isFinite(N.explosion)||N.explosion<0||N.explosion>100)||["xray","isolate"].some(K=>N[K]!==void 0&&typeof N[K]!="boolean"))throw new Error("无效的部件或拆解参数");return t(K=>({...K,selected:N.component,...N.explosion!==void 0?{explosion:N.explosion}:{},...N.xray!==void 0?{xray:N.xray}:{},...N.isolate!==void 0?{isolate:N.isolate}:{}})),await new Promise(K=>requestAnimationFrame(()=>requestAnimationFrame(K))),{selected:N.component,status:"updated"}}},{signal:I.signal})).catch(console.warn),()=>I.abort()},[]);const B=Go.find(w=>w.id===r.selected),T=()=>{var w;t({...K_,privacy:["open","open"]}),(w=b.current)==null||w.view("perspective")},L=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{_("当前浏览器不支持全屏显示。")}};return xt.createElement("main",null,xt.createElement("div",{ref:E,className:"viewport"}),g&&xt.createElement("div",{role:"alert",className:"error"},g,xt.createElement("button",{onClick:()=>_("")},"关闭")),xt.createElement("header",null,xt.createElement("div",{className:"wordmark"},xt.createElement("span",{className:"eyebrow"},"HOUSEHOLD ROBOT"),xt.createElement("h1",null,"A4 ",xt.createElement("span",null,"STUDIO"),xt.createElement("i",null,"概念研究 / 01"))),xt.createElement("div",{className:"header-right"},xt.createElement("span",{className:"edition"},"IDENTITY IN EVERY DETAIL"),xt.createElement("button",{onClick:()=>f(!0)},xt.createElement(uS,{size:15})," 设计档案 ",xt.createElement(dg,{size:13})))),xt.createElement("div",{className:"scene-caption"},xt.createElement("span",{className:"tiny-label"},"A4 / PRIVACY SHUTTERS"),xt.createElement("p",null,"亲近的外表，精密的内在。")),i&&xt.createElement("aside",{className:"panel glass"},xt.createElement("div",{className:"panel-head"},xt.createElement("span",null,"探索机器人"),xt.createElement("button",{"aria-label":"隐藏部件面板",onClick:()=>a(!1)},xt.createElement(gS,{size:16}))),xt.createElement("div",{className:"tabs"},xt.createElement("button",{className:l==="parts"?"active":"",onClick:()=>c("parts")},"部件系统"),xt.createElement("button",{className:l==="pose"?"active":"",onClick:()=>c("pose")},"姿态与表情")),l==="parts"?xt.createElement(xt.Fragment,null,xt.createElement("div",{className:"part-list"},Go.map((w,I)=>xt.createElement("button",{key:w.id,className:"part "+(r.selected===w.id?"selected":""),"aria-pressed":r.selected===w.id,onClick:()=>v("selected",r.selected===w.id?null:w.id)},xt.createElement("span",{className:"part-index"},"0",I+1),xt.createElement("span",{className:"part-name"},w.name),xt.createElement("span",{className:"swatch",style:{background:w.color}}),r.selected===w.id?xt.createElement(oS,{size:13}):xt.createElement(lS,{size:13})))),xt.createElement("div",{className:"panel-bottom"},xt.createElement("span",null,p||"—"," 个模型部件"),xt.createElement("button",{onClick:()=>{v("selected",null),v("isolate",!1)}},"取消选择"))):xt.createElement("div",{className:"pose-content"},xt.createElement("label",null,"底盘姿态"),xt.createElement("div",{className:"pose-grid"},E2.map(([w,I])=>xt.createElement("button",{key:w,className:r.pose===w?"active":"",onClick:()=>v("pose",w)},I))),xt.createElement("label",null,"面部表情"),xt.createElement("div",{className:"pose-grid"},[["neutral","平静"],["listening","聆听"],["happy","开心"],["alert","警觉"]].map(([w,I])=>xt.createElement("button",{key:w,className:r.expression===w?"active":"",onClick:()=>v("expression",w)},I))),xt.createElement("p",{className:"small-note"},"姿态为概念运动演示，未进行动力学与碰撞校核。"))),B&&xt.createElement("section",{className:"detail glass"},xt.createElement("div",{className:"detail-title"},xt.createElement("span",{className:"tiny-label",style:{color:B.color}},B.en),xt.createElement("button",{"aria-label":"关闭部件详情",onClick:()=>v("selected",null)},xt.createElement(gg,{size:16}))),xt.createElement("h2",null,B.name),xt.createElement("p",null,B.desc),xt.createElement("ul",null,B.items.map(w=>xt.createElement("li",{key:w},w))),xt.createElement("div",{className:"detail-actions"},xt.createElement("button",{className:r.isolate?"active":"",onClick:()=>v("isolate",!r.isolate)},xt.createElement(pg,{size:14})," ",r.isolate?"显示整体":"仅看此系统"),xt.createElement("button",{className:r.xray?"active":"",onClick:()=>v("xray",!r.xray)},xt.createElement(yS,{size:14})," ",r.xray?"恢复外壳":"透视内部")),xt.createElement("p",{className:"source-note"},B.source)),xt.createElement("nav",{className:"toolbar glass","aria-label":"三维视图工具"},xt.createElement("button",{title:"部件面板","aria-label":"切换部件面板","aria-pressed":i,onClick:()=>a(!i)},xt.createElement(fS,null)),xt.createElement("span",null),xt.createElement("button",{title:"放大","aria-label":"放大",onClick:()=>{var w;return(w=b.current)==null?void 0:w.zoom(.84)}},xt.createElement(_S,null)),xt.createElement("button",{title:"缩小","aria-label":"缩小",onClick:()=>{var w;return(w=b.current)==null?void 0:w.zoom(1.18)}},xt.createElement(dS,null)),xt.createElement("button",{title:"重置视图与状态","aria-label":"重置视图与状态",onClick:T},xt.createElement(vS,null)),xt.createElement("button",{className:r.rotate?"active":"",title:"自动旋转","aria-label":"自动旋转","aria-pressed":r.rotate,onClick:()=>v("rotate",!r.rotate)},xt.createElement(mS,null)),xt.createElement("span",null),xt.createElement("button",{title:"导出模型图片","aria-label":"导出模型图片",onClick:()=>{var w;return(w=b.current)==null?void 0:w.capture()}},xt.createElement(mg,null)),xt.createElement("button",{title:"全屏","aria-label":"全屏",onClick:L},xt.createElement(hS,null))),xt.createElement("div",{className:"view-presets glass","aria-label":"观察方向"},[["perspective","透视"],["front","正面"],["side","侧面"],["rear","背面"],["top","俯视"]].map(([w,I])=>xt.createElement("button",{key:w,onClick:()=>{var N;return(N=b.current)==null?void 0:N.view(w)}},I))),xt.createElement("section",{className:"privacy glass","aria-label":"独立摄像头遮罩"},xt.createElement("div",{className:"privacy-heading"},xt.createElement(mg,{size:13}),xt.createElement("span",null,"独立隐私遮罩"),xt.createElement("span",{className:"tiny-label"},"L / R")),[0,1].map(w=>xt.createElement("div",{key:w,className:"privacy-row"},xt.createElement("span",null,"机器人",w?"左":"右","眼"),xt.createElement("div",null,[["open","开启"],["frosted","磨砂"],["closed","关闭"]].map(([I,N])=>xt.createElement("button",{key:I,"aria-label":"机器人"+(w?"左":"右")+"摄像头"+N,"aria-pressed":r.privacy[w]===I,className:r.privacy[w]===I?"active "+I:"",onClick:()=>v("privacy",r.privacy.map((K,C)=>w===C?I:K))},N)))))),xt.createElement("section",{className:"assembly glass","aria-label":"拆解控制"},xt.createElement("button",{className:"assembly-action",onClick:()=>v("explosion",0)},xt.createElement(pg,{size:20}),xt.createElement("span",null,"组装")),xt.createElement("div",{className:"explode-range"},xt.createElement("label",{htmlFor:"explosion"},"爆炸拆解 ",xt.createElement("output",null,Math.round(r.explosion),xt.createElement("small",null,"%"))),xt.createElement("input",{id:"explosion",type:"range",min:"0",max:"100",step:"1",value:r.explosion,style:{"--progress":r.explosion+"%"},onChange:w=>v("explosion",Number(w.target.value))})),xt.createElement("button",{className:"assembly-action",onClick:()=>v("explosion",100)},xt.createElement(cS,{size:20}),xt.createElement("span",null,"全部拆开")),xt.createElement("div",{className:"divider"}),xt.createElement("button",{className:"xray "+(r.xray?"active":""),role:"switch","aria-checked":r.xray,onClick:()=>v("xray",!r.xray)},xt.createElement("span",{className:"toggle"},xt.createElement("i",null)),xt.createElement("span",null,"外壳透视"))),xt.createElement("footer",null,xt.createElement("span",null,xt.createElement(pS,{size:12})," 拖动旋转 · 滚轮缩放 · 点击部件探索"),xt.createElement("span",null,"4 WHEELS ",xt.createElement("b",null,"/")," 2 CAMERAS ",xt.createElement("b",null,"/")," LEFT 2 · RIGHT 5")),xt.createElement("dialog",{ref:x,onCancel:()=>f(!1),onClick:w=>{w.target===x.current&&f(!1)}},xt.createElement("div",{className:"dialog-body"},xt.createElement("button",{className:"modal-close","aria-label":"关闭设计档案",onClick:()=>f(!1)},xt.createElement(gg,null)),xt.createElement("span",{className:"tiny-label"},"A4 · DESIGN ARCHIVE"),xt.createElement("h2",null,"从设定图，到可探索的结构。"),xt.createElement("p",null,"以三张设定图为外观依据，使用 React 19、Three.js 与 OrbitControls 构建实时三维模型。沿用 Model X Studio 的部件选择、旋转观察与连续爆炸拆解方法。"),xt.createElement("div",{className:"reference-tabs"},["外观转面","姿态研究","细节锁定"].map((w,I)=>xt.createElement("button",{key:w,className:y===I?"active":"",onClick:()=>M(I)},w))),xt.createElement("a",{href:"/robot-studio/references/sheet-"+(y+1)+".png",target:"_blank",rel:"noreferrer"},xt.createElement("img",{src:"/robot-studio/references/sheet-"+(y+1)+".png",alt:["机器人正侧背面、顶视与四分之三视图","机器人抬腰、宽窄站姿和折叠设定","机器人手部、隐私遮罩、材质与表情细节"][y]})),xt.createElement("p",{className:"archive-note"},"外观为依据图片的三维近似重建；内部设备、装配方式和电机类型为补充概念，不代表已经验证的工程设计、实际尺寸或可制造方案。"),xt.createElement("a",{className:"reference-link",href:"https://model-x-studio.vercel.app/",target:"_blank",rel:"noreferrer"},"查看交互方法参考：Model X Studio ",xt.createElement(dg,{size:13})))))}iS.createRoot(document.getElementById("root")).render(xt.createElement(b2,null));
