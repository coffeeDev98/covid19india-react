(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[11],{195:function(e,t,a){"use strict";var n=function(e){return function(e){return!!e&&"object"===typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===r}(e)}(e)};var r="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function c(e,t){return!1!==t.clone&&t.isMergeableObject(e)?u((a=e,Array.isArray(a)?[]:{}),e,t):e;var a}function l(e,t,a){return e.concat(t).map((function(e){return c(e,a)}))}function i(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}(e))}function o(e,t){try{return t in e}catch(a){return!1}}function s(e,t,a){var n={};return a.isMergeableObject(e)&&i(e).forEach((function(t){n[t]=c(e[t],a)})),i(t).forEach((function(r){(function(e,t){return o(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,r)||(o(e,r)&&a.isMergeableObject(t[r])?n[r]=function(e,t){if(!t.customMerge)return u;var a=t.customMerge(e);return"function"===typeof a?a:u}(r,a)(e[r],t[r],a):n[r]=c(t[r],a))})),n}function u(e,t,a){(a=a||{}).arrayMerge=a.arrayMerge||l,a.isMergeableObject=a.isMergeableObject||n,a.cloneUnlessOtherwiseSpecified=c;var r=Array.isArray(t);return r===Array.isArray(e)?r?a.arrayMerge(e,t,a):s(e,t,a):c(t,a)}u.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,a){return u(e,a,t)}),{})};var b=u;e.exports=b},281:function(e,t,a){"use strict";a.r(t);var n=a(117),r=a(90),c=a(17),l=a(28),i=a.n(l),o=a(83),s=a(195),u=a.n(s),b=a(7),f=a.n(b),m=a(120),d=a(318),j=a(133),O=(a(156),Object(b.lazy)((function(){return Promise.all([a.e(2),a.e(4),a.e(21)]).then(a.bind(null,262))}))),h=Object(b.lazy)((function(){return Promise.all([a.e(31),a.e(14)]).then(a.bind(null,263))})),g=Object(b.lazy)((function(){return Promise.all([a.e(1),a.e(3),a.e(32),a.e(6)]).then(a.bind(null,248))})),y=Object(b.lazy)((function(){return Promise.all([a.e(2),a.e(19)]).then(a.bind(null,249))})),v=Object(b.lazy)((function(){return Promise.all([a.e(0),a.e(5),a.e(16)]).then(a.bind(null,250))})),p=Object(b.lazy)((function(){return a.e(10).then(a.bind(null,135))})),E=Object(b.lazy)((function(){return Promise.all([a.e(2),a.e(13)]).then(a.bind(null,251))}));t.default=function(e){var t=Object(b.useState)({stateCode:"TT",districtName:null}),a=Object(r.a)(t,2),l=a[0],s=a[1],T=Object(b.useState)(null),S=Object(r.a)(T,2),k=S[0],P=S[1],w=Object(b.useState)("active"),M=Object(r.a)(w,2),A=M[0],H=M[1],z=Object(o.a)(new Date,"yyyy-MM-dd"),C=Object(b.useState)(z),I=Object(r.a)(C,2),N=I[0],R=I[1],D=Object(b.useState)({}),x=Object(r.a)(D,2),F=x[0],J=x[1],V=Object(b.useState)({}),$=Object(r.a)(V,2),U=$[0],q=$[1],B=Object(d.a)().t;Object(b.useEffect)((function(){var e=i.a.get("https://api.covid19india.org/v3/min/timeseries.min.json"),t=i.a.get("https://vics-core.github.io/covid-api/predictions.json");i.a.all([e,t]).then(i.a.spread((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var n=t[0].data,r=t[1].data;for(var c in r)r.hasOwnProperty(c)&&(n[c]=r[c][z]);q(u()(r,n))})))}),[z]),Object(b.useEffect)((function(){var e={};if(N<z){var t=N===z?"":"-".concat(N);i.a.get("https://api.covid19india.org/v3/min/data".concat(t,".min.json")).then((function(t){e=t.data,J(e)}))}else{for(var a in U)U.hasOwnProperty(a)&&(e[a]=U[a][N]);J(e)}}),[N,U,z]);var G=Object(b.useRef)(),K=Object(j.useIsVisible)(G,{once:!0}),L=["TT"].concat(Object(n.a)(Object(n.a)(new Set([].concat(Object(n.a)(Object.keys(c.f).filter((function(e){return"TT"!==e}))),Object(n.a)(Object.keys(F||{}).filter((function(e){return"TT"!==e})))))).sort()));return f.a.createElement(f.a.Fragment,null,f.a.createElement(m.a,null,f.a.createElement("title",null,"Coronavirus Projections for India - seva.ml"),f.a.createElement("meta",{name:"title",content:"Coronavirus Projections for India"})),f.a.createElement("div",{className:"Home"},f.a.createElement("div",{className:"home-left"},f.a.createElement("div",{className:"header"},f.a.createElement(b.Suspense,{fallback:f.a.createElement("div",null)},f.a.createElement("div",{className:"Search"},f.a.createElement("label",null,B("COVID-19 AI Predictions")))),U.TT&&f.a.createElement(b.Suspense,{fallback:f.a.createElement("div",{style:{minHeight:"56px"}})},f.a.createElement(g,{setDate:R,dates:Object.keys(U.TT).reverse(),date:N}))),F.TT&&f.a.createElement(b.Suspense,{fallback:f.a.createElement("div",null)},f.a.createElement(E,{data:F.TT})),f.a.createElement(b.Suspense,{fallback:f.a.createElement("div",null)},U.TT&&f.a.createElement(v,Object.assign({timeseries:U.TT},{date:N}))),f.a.createElement(b.Suspense,{fallback:f.a.createElement("div",null)},F.TT&&f.a.createElement(y,{data:F,regionHighlighted:l,setRegionHighlighted:s}))),f.a.createElement("div",{className:"home-right",ref:G},K&&f.a.createElement(f.a.Fragment,null,F&&f.a.createElement(b.Suspense,{fallback:f.a.createElement("div",null)},f.a.createElement(h,Object.assign({stateCode:"TT"},{data:F},{mapStatistic:A,setMapStatistic:H},{regionHighlighted:l,setRegionHighlighted:s},{anchor:k,setAnchor:P}))),U.TT&&f.a.createElement(b.Suspense,{fallback:f.a.createElement("div",null)},f.a.createElement(O,Object.assign({timeseries:U[l.stateCode]},{date:N,stateCodes:L},{regionHighlighted:l,setRegionHighlighted:s},{anchor:k,setAnchor:P})))))),K&&f.a.createElement(b.Suspense,{fallback:f.a.createElement("div",null)},f.a.createElement(p,null)))}}}]);
//# sourceMappingURL=Home.de194a0c.chunk.js.map