(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),s=n(6),i=n.n(s),o=(n(13),n(2)),u=n.n(o),l=n(4),j=n(3),h=n(7),b=function(e){var t=e.value,n=e.onClick;return Object(a.jsx)("div",{className:"result-list",onClick:function(){return n(t.id)},children:Object(a.jsx)("p",{children:t.kota})})},d=function(e){var t=e.locations,n=e.onLocationChange,r=Object(c.useState)(""),s=Object(j.a)(r,2),i=s[0],o=s[1],u=Object(c.useState)([]),l=Object(j.a)(u,2),d=l[0],p=l[1],f=function(e){var a=t.filter((function(t){return t.id.match(e)}));p([]),o(a[0].kota),n(e)};return Object(a.jsxs)("div",{className:"search",children:[Object(a.jsxs)("div",{className:"search-bar",children:[i.length>0&&Object(a.jsx)("div",{class:"pre-btn",children:Object(a.jsx)(h.a,{})}),Object(a.jsx)("input",{type:"text",value:i,placeholder:"Pencarian...",className:"input-text ".concat(0===i.length&&"padding"," "),onChange:function(e){return function(e){if(o(e),e.length>3){var n=t.filter((function(t){return t.kota.toLowerCase().match(e)}));p(n)}else p([])}(e.target.value)}})]}),d.length>0&&Object(a.jsx)("div",{className:"result-popup ".concat(d.length>0&&"show"),children:d.map((function(e){return Object(a.jsx)(b,{value:e,onClick:f},e.id)}))})]})},p=function(e){var t=e.weather;return Object(a.jsx)(a.Fragment,{children:t.map((function(e){return Object(a.jsxs)("div",{className:"weather-card",children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("p",{style:{fontSize:11,opacity:.7},children:e.jamCuaca.substring(0,10)}),e.jamCuaca.substring(10,16)]}),Object(a.jsx)("div",{className:"weather-icon ".concat(e.cuaca.toLowerCase().replace(" ","-"))}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:e.cuaca}),Object(a.jsx)("br",{}),e.tempC,"\xb0C ",e.humidity,"%"]})]},e.id)}))})};var f=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)([]),i=Object(j.a)(s,2),o=i[0],h=i[1],b="https://ibnux.github.io/BMKG-importer/cuaca/";Object(c.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}));var f=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b,"/wilayah.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b,"/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,h(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("div",{className:"background-banner"}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(d,{locations:n.length>0&&n,onLocationChange:x}),Object(a.jsx)("center",{className:"main-content",children:o.length>0?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{children:"Tiap Jam"}),Object(a.jsx)("div",{className:"horizontal-scroller",children:Object(a.jsx)(p,{weather:o})})]}):Object(a.jsx)("h3",{children:"Halo! Untuk memulai, silakan masukkan lokasi Anda."})})]}),Object(a.jsx)("footer",{className:"footer",children:Object(a.jsxs)("p",{children:["Gambar oleh ",Object(a.jsx)("a",{href:"https://www.unsplash.com/",target:"_blank",rel:"noreferrer",children:"Unsplash"})," | API oleh ",Object(a.jsx)("a",{href:"https://github.com/ibnux",target:"_blank",rel:"noreferrer",children:"ibnux"})," | Data oleh ",Object(a.jsx)("a",{href:"https://data.bmkg.go.id/",target:"_blank",rel:"noreferrer",children:"Badan Meteorologi, Klimatologi dan Geofisika (BMKG)"})]})})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root")),x()}},[[15,1,2]]]);
//# sourceMappingURL=main.08d28913.chunk.js.map