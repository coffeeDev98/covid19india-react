(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[11],{195:function(e,t,n){"use strict";var a=function(e){return function(e){return!!e&&"object"===typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===r}(e)}(e)};var r="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function c(e,t){return!1!==t.clone&&t.isMergeableObject(e)?u((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function l(e,t,n){return e.concat(t).map((function(e){return c(e,n)}))}function i(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}(e))}function o(e,t){try{return t in e}catch(n){return!1}}function s(e,t,n){var a={};return n.isMergeableObject(e)&&i(e).forEach((function(t){a[t]=c(e[t],n)})),i(t).forEach((function(r){(function(e,t){return o(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,r)||(o(e,r)&&n.isMergeableObject(t[r])?a[r]=function(e,t){if(!t.customMerge)return u;var n=t.customMerge(e);return"function"===typeof n?n:u}(r,n)(e[r],t[r],n):a[r]=c(t[r],n))})),a}function u(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||l,n.isMergeableObject=n.isMergeableObject||a,n.cloneUnlessOtherwiseSpecified=c;var r=Array.isArray(t);return r===Array.isArray(e)?r?n.arrayMerge(e,t,n):s(e,t,n):c(t,n)}u.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return u(e,n,t)}),{})};var b=u;e.exports=b},281:function(e,t,n){"use strict";n.r(t);var a=n(117),r=n(90),c=n(17),l=n(28),i=n.n(l),o=n(83),s=n(195),u=n.n(s),b=n(7),m=n.n(b),f=n(120),d=n(318),j=n(133),O=(n(156),Object(b.lazy)((function(){return Promise.all([n.e(2),n.e(4),n.e(21)]).then(n.bind(null,262))}))),g=Object(b.lazy)((function(){return Promise.all([n.e(31),n.e(14)]).then(n.bind(null,263))})),h=Object(b.lazy)((function(){return Promise.all([n.e(1),n.e(3),n.e(32),n.e(6)]).then(n.bind(null,248))})),y=Object(b.lazy)((function(){return Promise.all([n.e(2),n.e(19)]).then(n.bind(null,249))})),p=Object(b.lazy)((function(){return Promise.all([n.e(0),n.e(5),n.e(16)]).then(n.bind(null,250))})),v=Object(b.lazy)((function(){return n.e(10).then(n.bind(null,135))})),E=Object(b.lazy)((function(){return Promise.all([n.e(2),n.e(13)]).then(n.bind(null,251))}));t.default=function(e){var t=Object(b.useState)({stateCode:"TT",districtName:null}),n=Object(r.a)(t,2),l=n[0],s=n[1],T=Object(b.useState)(null),S=Object(r.a)(T,2),k=S[0],M=S[1],P=Object(b.useState)("active"),w=Object(r.a)(P,2),A=w[0],H=w[1],z=Object(o.a)(new Date,"yyyy-MM-dd"),C=Object(b.useState)(z),I=Object(r.a)(C,2),N=I[0],R=I[1],D=Object(b.useState)({}),x=Object(r.a)(D,2),F=x[0],J=x[1],V=Object(b.useState)({}),$=Object(r.a)(V,2),U=$[0],q=$[1],B=Object(d.a)().t;Object(b.useEffect)((function(){var e=i.a.get("https://api.covid19india.org/v3/min/timeseries.min.json"),t=i.a.get("https://vics-core.github.io/covid-api/predictions.json");i.a.all([e,t]).then(i.a.spread((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];q(u()(t[1].data,t[0].data))})))}),[]),Object(b.useEffect)((function(){var e={};if(N<=z){var t=N===z?"":"-".concat(N);i.a.get("https://api.covid19india.org/v3/min/data".concat(t,".min.json")).then((function(t){e=t.data,J(e)}))}else{for(var n in U)U.hasOwnProperty(n)&&(e[n]=U[n][N]);J(e)}}),[N,U,z]);var G=Object(b.useRef)(),K=Object(j.useIsVisible)(G,{once:!0}),L=["TT"].concat(Object(a.a)(Object(a.a)(new Set([].concat(Object(a.a)(Object.keys(c.f).filter((function(e){return"TT"!==e}))),Object(a.a)(Object.keys(F||{}).filter((function(e){return"TT"!==e})))))).sort()));return m.a.createElement(m.a.Fragment,null,m.a.createElement(f.a,null,m.a.createElement("title",null,"Coronavirus Projections for India - seva.ml"),m.a.createElement("meta",{name:"title",content:"Coronavirus Projections for India"})),m.a.createElement("div",{className:"Home"},m.a.createElement("div",{className:"home-left"},m.a.createElement("div",{className:"header"},m.a.createElement(b.Suspense,{fallback:m.a.createElement("div",null)},m.a.createElement("div",{className:"Search"},m.a.createElement("label",null,B("COVID-19 AI Predictions")))),U.TT&&m.a.createElement(b.Suspense,{fallback:m.a.createElement("div",{style:{minHeight:"56px"}})},m.a.createElement(h,{setDate:R,dates:Object.keys(U.TT).reverse(),date:N}))),F.TT&&m.a.createElement(b.Suspense,{fallback:m.a.createElement("div",null)},m.a.createElement(E,{data:F.TT})),m.a.createElement(b.Suspense,{fallback:m.a.createElement("div",null)},U.TT&&m.a.createElement(p,Object.assign({timeseries:U.TT},{date:N}))),m.a.createElement(b.Suspense,{fallback:m.a.createElement("div",null)},F.TT&&m.a.createElement(y,{data:F,regionHighlighted:l,setRegionHighlighted:s}))),m.a.createElement("div",{className:"home-right",ref:G},K&&m.a.createElement(m.a.Fragment,null,F&&m.a.createElement(b.Suspense,{fallback:m.a.createElement("div",null)},m.a.createElement(g,Object.assign({stateCode:"TT"},{data:F},{mapStatistic:A,setMapStatistic:H},{regionHighlighted:l,setRegionHighlighted:s},{anchor:k,setAnchor:M}))),U.TT&&m.a.createElement(b.Suspense,{fallback:m.a.createElement("div",null)},m.a.createElement(O,Object.assign({timeseries:U[l.stateCode]},{date:N,stateCodes:L},{regionHighlighted:l,setRegionHighlighted:s},{anchor:k,setAnchor:M})))))),K&&m.a.createElement(b.Suspense,{fallback:m.a.createElement("div",null)},m.a.createElement(v,null)))}}}]);
//# sourceMappingURL=Home.77a475d2.chunk.js.map