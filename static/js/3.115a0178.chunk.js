(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[3],{146:function(e,t,r){"use strict";var n=r(99),i=r(189),o=r.n(i);function a(e,t,r,n,i,o,a){try{var u=e[o](a),c=u.value}catch(f){return void r(f)}u.done?t(c):Promise.resolve(c).then(n,i)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function u(e){a(o,n,i,u,c,"next",e)}function c(e){a(o,n,i,u,c,"throw",e)}u(void 0)}))}}var c=r(82),f=r(7),s=r(191),l=r.n(s);function h(){return"undefined"===typeof document||"undefined"===typeof document.visibilityState||"hidden"!==document.visibilityState}function d(){return"undefined"===typeof navigator.onLine||navigator.onLine}var v=r(94),p=r(31),y=r(32),g=new WeakMap,w=0;var b=new(function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(p.a)(this,e),this.__cache=new Map(Object.entries(t)),this.__listeners=[]}return Object(y.a)(e,[{key:"get",value:function(e){var t=this.serializeKey(e),r=Object(c.a)(t,1)[0];return this.__cache.get(r)}},{key:"set",value:function(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=this.serializeKey(e),i=Object(c.a)(n,1),o=i[0];this.__cache.set(o,t),r&&D(e,t,!1),this.notify()}},{key:"keys",value:function(){return Array.from(this.__cache.keys())}},{key:"has",value:function(e){var t=this.serializeKey(e),r=Object(c.a)(t,1)[0];return this.__cache.has(r)}},{key:"clear",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e&&this.__cache.forEach((function(e){return D(e,null,!1)})),this.__cache.clear(),this.notify()}},{key:"delete",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=this.serializeKey(e),n=Object(c.a)(r,1),i=n[0];t&&D(e,null,!1),this.__cache.delete(i),this.notify()}},{key:"serializeKey",value:function(e){var t=null;if("function"===typeof e)try{e=e()}catch(r){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",r=0;r<e.length;++r){var n=void 0;null===e[r]||"object"!==typeof e[r]?n="string"===typeof e[r]?'"'+e[r]+'"':String(e[r]):g.has(e[r])?n=g.get(e[r]):(n=w,g.set(e[r],w++)),t+="@"+n}return t}(e)):e=String(e||""),[e,t,e?"err@"+e:""]}},{key:"subscribe",value:function(e){var t=this;if("function"!==typeof e)throw new Error("Expected the listener to be a function.");var r=!0;return this.__listeners.push(e),function(){if(r){r=!1;var n=t.__listeners.indexOf(e);n>-1&&(t.__listeners[n]=t.__listeners[t.__listeners.length-1],t.__listeners.length--)}}}},{key:"notify",value:function(){var e,t=Object(v.a)(this.__listeners);try{for(t.s();!(e=t.n()).done;){(0,e.value)()}}catch(r){t.e(r)}finally{t.f()}}}]),e}()),m={},x={},O={},k={},_={};var j="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),E={onLoadingSlow:function(){},onSuccess:function(){},onError:function(){},onErrorRetry:function(e,t,r,n,i){if(h()&&!(r.errorRetryCount&&i.retryCount>r.errorRetryCount)){var o=Math.min(i.retryCount||0,8),a=~~((Math.random()+.5)*(1<<o))*r.errorRetryInterval;setTimeout(n,a,i)}},errorRetryInterval:1e3*(j?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(j?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:l.a},L=!1;if("undefined"!==typeof window&&window.addEventListener&&!L){var T=function(){if(h()&&d())for(var e in O)O[e][0]&&O[e][0]()};window.addEventListener("visibilitychange",T,!1),window.addEventListener("focus",T,!1),L=!0}var R=E;function S(e,t){var r=!1;return function(){r||(r=!0,e.apply(void 0,arguments),setTimeout((function(){return r=!1}),t))}}var I=Object(f.createContext)({});I.displayName="SWRConfigContext";var C=I,V="undefined"===typeof window,P=V?f.useEffect:f.useLayoutEffect,N=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=b.serializeKey(e),n=Object(c.a)(r,3),i=n[0],o=n[2];if(i){var a=k[i];if(i&&a)for(var u=b.get(i),f=b.get(o),s=0;s<a.length;++s)a[s](t,u,f,s>0)}},z=function(e,t,r){var n=k[e];if(e&&n)for(var i=0;i<n.length;++i)n[i](!1,t,r)},D=function(){var e=u(o.a.mark((function e(t,r){var n,i,a,u,f,s,l,h,d=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=!(d.length>2&&void 0!==d[2])||d[2],i=b.serializeKey(t),a=Object(c.a)(i,1),u=a[0]){e.next=4;break}return e.abrupt("return");case 4:if("undefined"!==typeof r){e.next=6;break}return e.abrupt("return",N(t,n));case 6:if(_[u]=Date.now()-1,!r||"function"!==typeof r){e.next=19;break}return e.prev=8,e.next=11,r(b.get(u));case 11:f=e.sent,e.next=17;break;case 14:e.prev=14,e.t0=e.catch(8),s=e.t0;case 17:e.next=32;break;case 19:if(!r||"function"!==typeof r.then){e.next=31;break}return e.prev=20,e.next=23,r;case 23:f=e.sent,e.next=29;break;case 26:e.prev=26,e.t1=e.catch(20),s=e.t1;case 29:e.next=32;break;case 31:f=r;case 32:if("undefined"!==typeof f&&b.set(u,f,!1),l=k[u])for(h=0;h<l.length;++h)l[h](!!n,f,s,h>0);if(!s){e.next=37;break}throw s;case 37:return e.abrupt("return",f);case 38:case"end":return e.stop()}}),e,null,[[8,14],[20,26]])})));return function(t,r){return e.apply(this,arguments)}}();C.Provider;var F=function(){var e,t,r={};arguments.length>=1&&(e=arguments.length<=0?void 0:arguments[0]),arguments.length>2?(t=arguments.length<=1?void 0:arguments[1],r=arguments.length<=2?void 0:arguments[2]):"function"===typeof(arguments.length<=1?void 0:arguments[1])?t=arguments.length<=1?void 0:arguments[1]:"object"===typeof(arguments.length<=1?void 0:arguments[1])&&(r=arguments.length<=1?void 0:arguments[1]);var i=b.serializeKey(e),a=Object(c.a)(i,3),s=a[0],l=a[1],v=a[2];r=Object.assign({},R,Object(f.useContext)(C),r),"undefined"===typeof t&&(t=r.fetcher);var p=b.get(s)||r.initialData,y=b.get(v),g=Object(f.useRef)({data:!1,error:!1,isValidating:!1}),w=Object(f.useRef)({data:p,error:y,isValidating:!1}),j=Object(f.useState)(null)[1],E=Object(f.useCallback)((function(e){var t=!1;for(var n in e)w.current[n]=e[n],g.current[n]&&(t=!0);(t||r.suspense)&&j({})}),[]),L=Object(f.useRef)(!1),T=Object(f.useRef)(s),I=Object(f.useCallback)((function(e,t){return D(s,e,t)}),[s]),N=Object(f.useCallback)(u(o.a.mark((function e(){var i,a,u,c,f,h,d,p=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=p.length>0&&void 0!==p[0]?p[0]:{},s&&t){e.next=3;break}return e.abrupt("return",!1);case 3:if(!L.current){e.next=5;break}return e.abrupt("return",!1);case 5:if(i=Object.assign({dedupe:!1},i),a=!0,u="undefined"!==typeof m[s]&&i.dedupe,e.prev=8,E({isValidating:!0}),!u){e.next=17;break}return f=x[s],e.next=14,m[s];case 14:c=e.sent,e.next=26;break;case 17:return m[s]&&(_[s]=Date.now()-1),r.loadingTimeout&&!b.get(s)&&setTimeout((function(){a&&r.onLoadingSlow(s,r)}),r.loadingTimeout),m[s]=null!==l?t.apply(void 0,Object(n.a)(l)):t(s),x[s]=f=Date.now(),e.next=23,m[s];case 23:c=e.sent,setTimeout((function(){delete m[s],delete x[s]}),r.dedupingInterval),r.onSuccess(c,s,r);case 26:if(!(_[s]&&f<=_[s])){e.next=29;break}return E({isValidating:!1}),e.abrupt("return",!1);case 29:b.set(s,c,!1),b.set(v,void 0,!1),h={isValidating:!1},"undefined"!==typeof w.current.error&&(h.error=void 0),r.compare(w.current.data,c)||(h.data=c),E(h),u||z(s,c,void 0),e.next=46;break;case 38:e.prev=38,e.t0=e.catch(8),delete m[s],delete x[s],b.set(v,e.t0,!1),w.current.error!==e.t0&&(E({isValidating:!1,error:e.t0}),u||z(s,void 0,e.t0)),r.onError(e.t0,s,r),r.shouldRetryOnError&&(d=(i.retryCount||0)+1,r.onErrorRetry(e.t0,s,r,N,Object.assign({dedupe:!0},i,{retryCount:d})));case 46:return a=!1,e.abrupt("return",!0);case 48:case"end":return e.stop()}}),e,null,[[8,38]])}))),[s]);if(P((function(){if(s){L.current=!1;var e=w.current.data,t=b.get(s)||r.initialData;T.current===s&&r.compare(e,t)||(E({data:t}),T.current=s);var n,i=function(){return N({dedupe:!0})};(r.revalidateOnMount||!r.initialData&&void 0===r.revalidateOnMount)&&("undefined"!==typeof t&&!V&&window.requestIdleCallback?window.requestIdleCallback(i):i()),r.revalidateOnFocus&&(n=S(i,r.focusThrottleInterval),O[s]?O[s].push(n):O[s]=[n]);var o=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a={},u=!1;return"undefined"===typeof t||r.compare(w.current.data,t)||(a.data=t,u=!0),w.current.error!==n&&(a.error=n,u=!0),u&&E(a),!!e&&(o?i():N())};k[s]?k[s].push(o):k[s]=[o];var a=null;return!V&&window.addEventListener&&r.revalidateOnReconnect&&window.addEventListener("online",a=i),function(){if(E=function(){return null},L.current=!0,n&&O[s]){var e=O[s],t=e.indexOf(n);t>=0&&(e[t]=e[e.length-1],e.pop())}if(k[s]){var r=k[s],i=r.indexOf(o);i>=0&&(r[i]=r[r.length-1],r.pop())}!V&&window.removeEventListener&&null!==a&&window.removeEventListener("online",a)}}}),[s,N]),P((function(){var e=null,t=function(){var n=u(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(w.current.error||!r.refreshWhenHidden&&!h()||!r.refreshWhenOffline&&!d()){n.next=3;break}return n.next=3,N({dedupe:!0});case 3:r.refreshInterval&&(e=setTimeout(t,r.refreshInterval));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return r.refreshInterval&&(e=setTimeout(t,r.refreshInterval)),function(){e&&clearTimeout(e)}}),[r.refreshInterval,r.refreshWhenHidden,r.refreshWhenOffline,N]),r.suspense){var F=b.get(s),G=b.get(v);if("undefined"===typeof F&&"undefined"===typeof G){if(m[s]||N(),m[s]&&"function"===typeof m[s].then)throw m[s];F=m[s]}if("undefined"===typeof F&&G)throw G;return{error:G,data:F,revalidate:N,mutate:I,isValidating:w.current.isValidating}}return Object(f.useMemo)((function(){var e={revalidate:N,mutate:I};return Object.defineProperties(e,{error:{get:function(){return g.current.error=!0,T.current===s?w.current.error:y}},data:{get:function(){return g.current.data=!0,T.current===s?w.current.data:p}},isValidating:{get:function(){return g.current.isValidating=!0,w.current.isValidating}}}),e}),[N])};new Map;t.a=F},189:function(e,t,r){e.exports=r(190)},190:function(e,t,r){var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function u(e,t,r,n){var i=t&&t.prototype instanceof s?t:s,o=Object.create(i.prototype),a=new O(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return _()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var u=b(a,r);if(u){if(u===f)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=c(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(e,r,a),o}function c(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=u;var f={};function s(){}function l(){}function h(){}var d={};d[i]=function(){return this};var v=Object.getPrototypeOf,p=v&&v(v(k([])));p&&p!==t&&r.call(p,i)&&(d=p);var y=h.prototype=s.prototype=Object.create(d);function g(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function w(e,t){var n;this._invoke=function(i,o){function a(){return new t((function(n,a){!function n(i,o,a,u){var f=c(e[i],e,o);if("throw"!==f.type){var s=f.arg,l=s.value;return l&&"object"===typeof l&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,a,u)}),(function(e){n("throw",e,a,u)})):t.resolve(l).then((function(e){s.value=e,a(s)}),(function(e){return n("throw",e,a,u)}))}u(f.arg)}(i,o,n,a)}))}return n=n?n.then(a,a):a()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=c(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,f;var i=n.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function m(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(m,this),this.reset(!0)}function k(e){if(e){var t=e[i];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return l.prototype=y.constructor=h,h.constructor=l,h[a]=l.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===l||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,a in e||(e[a]="GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(w.prototype),w.prototype[o]=function(){return this},e.AsyncIterator=w,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new w(u(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},g(y),y[a]="Generator",y[i]=function(){return this},y.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=k,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var u=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;x(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:k(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}(e.exports);try{regeneratorRuntime=n}catch(i){Function("r","regeneratorRuntime = r")(n)}},191:function(e,t,r){"use strict";var n=Array.isArray,i=Object.keys,o=Object.prototype.hasOwnProperty;e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var a,u,c,f=n(t),s=n(r);if(f&&s){if((u=t.length)!=r.length)return!1;for(a=u;0!==a--;)if(!e(t[a],r[a]))return!1;return!0}if(f!=s)return!1;var l=t instanceof Date,h=r instanceof Date;if(l!=h)return!1;if(l&&h)return t.getTime()==r.getTime();var d=t instanceof RegExp,v=r instanceof RegExp;if(d!=v)return!1;if(d&&v)return t.toString()==r.toString();var p=i(t);if((u=p.length)!==i(r).length)return!1;for(a=u;0!==a--;)if(!o.call(r,p[a]))return!1;for(a=u;0!==a--;)if(!e(t[c=p[a]],r[c]))return!1;return!0}return t!==t&&r!==r}}}]);
//# sourceMappingURL=3.115a0178.chunk.js.map