(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{32:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a.n(r),i=a(24),s=a.n(i),l=(a(32),a(9)),o=a.n(l),d=a(26),u=a(16),j=a(6),m=a(11),b=a(2),h=["Aceh","Bali","BangkaBelitung","Banten","Bengkulu","DIYogyakarta","DKIJakarta","Gorontalo","Jambi","JawaBarat","JawaTengah","JawaTimur","KalimantanBarat","KalimantanSelatan","KalimantanTengah","KalimantanTimur","KalimantanUtara","KepulauanRiau","Lampung","Maluku","MalukuUtara","NusaTenggaraBarat","NusaTenggaraTimur","Papua","PapuaBarat","Riau","SulawesiBarat","SulawesiSelatan","SulawesiTengah","SulawesiTenggara","SulawesiUtara","SumateraBarat","SumateraSelatan","SumateraUtara"],p={0:"Cerah",1:"Cerah Berawan",2:"Cerah Berawan",3:"Berawan",4:"Berawan Tebal",5:"Udara Kabur",100:"Cerah",101:"Cerah Berawan",102:"Cerah Berawan",103:"Berawan",104:"Berawan Tebal",10:"Asap",45:"Berkabut",60:"Hujan Ringan",61:"Hujan Sedang",63:"Hujan Lebat",80:"Hujan Lokal",95:"Hujan Petir",97:"Hujan Petir"},x={attributeNamePrefix:"",ignoreAttributes:!1,textNodeName:"name"},f="https://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-",O=a(17),v=a.n(O),g=a(22),w=function(e){var t=e.value,a=e.onClick,r=e.index,c=e.active,i=e.setHover;return Object(n.jsx)("div",{className:"result-list ".concat(c?"selected":""),onClick:function(){return a(t.id,t.cityName,t.province)},onMouseEnter:function(){return i(r)},onMouseLeave:function(){return i(void 0)},children:Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:t.province}),", ",t.cityName]})})},N=function(e){var t,a=e.locations,c=e.isLoaded,i=e.onLocationChange,s=e.dismissAll,l=Object(r.useState)(""),o=Object(j.a)(l,2),d=o[0],u=o[1],m=Object(r.useState)([]),b=Object(j.a)(m,2),h=b[0],p=b[1],x=Object(r.useState)(!1),f=Object(j.a)(x,2),O=f[0],v=f[1],N=Object(r.useRef)(null),k=Object(r.useState)(void 0),y=Object(j.a)(k,2),S=y[0],C=y[1],T=function(e,t,a){p([]),u(t),i(e,a),v(!1),C(void 0)};return Object(r.useEffect)((function(){N.current.focus()}),[]),Object(n.jsxs)("div",{className:"search ".concat(c?"":"straight"," ").concat(h.length>0||O?"straight":""),children:[Object(n.jsxs)("div",{className:"search-bar",children:[d.length>0&&Object(n.jsx)("div",{className:"pre-btn",children:Object(n.jsx)(g.b,{})}),Object(n.jsx)("input",{type:"text",value:d,placeholder:"Pencarian...",className:"input-text ".concat(0===d.length?"padding":""),ref:N,onFocus:function(e){return e.target.select()},onChange:function(e){return function(e){if(u(e),C(void 0),e.length>0&&c){var t=a.map((function(t){return t.data.filter((function(t){return void 0!==t.cityName&&t.cityName.toLowerCase().includes(e.toLowerCase())}))})).filter((function(e){return e.some((function(e){return 0!==e.length}))}));0===t.length?(v(!0),p([])):(v(!1),p(t))}else p([]),C(void 0),v(!1)}(e.target.value)},onKeyDown:function(e){return function(e){if(h.length>0){var a=document.querySelector(".result-list.selected"),n=document.querySelector(".result-popup");if(40===e.keyCode)void 0===S||t===S||-1===t?(C(0),n.scrollTo(0,0)):C(S+1),null!==a&&(a.offsetTop===n.lastElementChild.offsetTop?n.scrollTo(0,0):n.scrollTo(0,a.offsetTop-2*a.offsetHeight));else if(38===e.keyCode)C(void 0===S||0===S?t:S-1),null!==a&&(a.offsetTop===n.firstElementChild.offsetTop?n.scrollTo(0,n.lastElementChild.offsetTop):n.scrollTo(0,a.offsetTop-3*a.offsetHeight));else if(13===e.keyCode){var r=-1,c=h.map((function(e){return e.filter((function(e){return++r===S&&e}))})).filter((function(e){return e.some((function(e){return 0!==e.length}))}));void 0!==S&&(p([]),u(c[0][0].cityName),i(c[0][0].id,c[0][0].province),C(void 0),document.querySelector(".input-text").blur(),v(!1))}}}(e)}}),d.length>0&&Object(n.jsx)("button",{className:"post-btn",onClick:function(){p([]),u(""),v(!1),C(void 0),s()},children:Object(n.jsx)(g.a,{})})]}),Object(n.jsx)("div",{className:"result-popup ".concat(!c&&"show"," ").concat((h.length>0||O)&&"show"),children:h.length>0?(t=-1,h.map((function(e){return e.map((function(e){return t++,Object(n.jsx)(w,{value:e,index:t,active:t===S,setHover:C,onClick:T},t)}))}))):c&&O?Object(n.jsx)("div",{className:"result-list",children:"Lokasi tidak ditemukan"}):Object(n.jsx)("div",{className:"result-list",children:"Memuat data lokasi..."})})]})},k=function(e){var t=e.data,a=e.onClick;return Object(n.jsx)(n.Fragment,{children:t.parameter[6].timerange.map((function(e,r){return Object(n.jsxs)("div",{className:"weather-card",onClick:function(){return a(e,t.parameter[7].timerange[r],t.parameter[5].timerange[r],t.parameter[0].timerange[r],t.parameter[4].timerange.filter((function(t){return t.day===e.datetime.substr(0,8)})),t.parameter[2].timerange.filter((function(t){return t.day===e.datetime.substr(0,8)})),t.parameter[3].timerange.filter((function(t){return t.day===e.datetime.substr(0,8)})),t.parameter[1].timerange.filter((function(t){return t.day===e.datetime.substr(0,8)})),t.parameter[8].timerange[r])},children:[Object(n.jsxs)("p",{style:{fontSize:11,opacity:.7},children:[e.datetime.substr(0,4),"-",e.datetime.toString().substr(4,4).split(/(?=(?:..)*$)/gm).join("-")]}),Object(n.jsx)("p",{children:e.datetime.toString().substr(8).split(/(?=(?:..)*$)/gm).join(":")}),Object(n.jsx)("div",{className:"weather-icon small wind-dir ".concat(t.parameter[7].timerange[r].value[1].name)}),Object(n.jsx)("div",{className:"weather-icon ".concat(p[e.value.name].toLowerCase().replace(" ","-"))}),Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:p[e.value.name]}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{className:"weather-icon small inline temp"}),t.parameter[5].timerange[r].value[0].name,"\xb0",t.parameter[5].timerange[r].value[0].unit,Object(n.jsx)("span",{className:"shadow-separator"}),Object(n.jsx)("div",{className:"weather-icon small inline humid"}),t.parameter[0].timerange[r].value.name,t.parameter[0].timerange[r].value.unit,Object(n.jsx)("span",{className:"shadow-separator"})]})]},"".concat(r))}))})},y=function(e){var t=e.data,a=e.onClick;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"info-card-inner flexed loose-gap vcenter hcenter",children:[Object(n.jsx)("div",{className:"weather-icon big ".concat(p[t.weather.value.name].toLowerCase().replace(" ","-"))}),Object(n.jsxs)("div",{className:"info-card-inner2 flexed loose-gap",children:[Object(n.jsxs)("div",{className:"one",children:[Object(n.jsxs)("div",{className:"subsection-title",children:[Object(n.jsx)("h3",{style:{display:"inline"},children:"Rincian"})," - ",Object(n.jsx)("div",{className:"close-btn",onClick:a,style:{display:"inline"},children:"Tutup panel"})]}),Object(n.jsxs)("div",{className:"hourly-details grid loose-gap",children:[Object(n.jsxs)("div",{className:"mini-card floated",children:[Object(n.jsx)("b",{children:"Temperatur"}),Object(n.jsxs)("p",{children:[t.temperature.value[0].name,"\xb0",t.temperature.value[0].unit]})]}),Object(n.jsxs)("div",{className:"mini-card floated",children:[Object(n.jsx)("b",{children:"Kelembaban"}),Object(n.jsxs)("p",{children:[t.humidity.value.name,t.humidity.value.unit]})]}),Object(n.jsxs)("div",{className:"mini-card floated",children:[Object(n.jsx)("b",{children:"Arah Angin"}),Object(n.jsxs)("p",{style:{position:"relative",top:-13,left:-5},children:[Object(n.jsx)("i",{className:"weather-icon small inline wind-dir ".concat(t.windicon.value[1].name)}),t.windicon.value[0].name,"\xb0"]})]}),Object(n.jsxs)("div",{className:"mini-card floated",children:[Object(n.jsx)("b",{children:"Kecepatan Angin"}),Object(n.jsxs)("p",{children:[t.windspeed.value[2].name," km/j"]})]})]})]}),Object(n.jsxs)("div",{className:"two",children:[Object(n.jsxs)("div",{className:"subsection-title",children:[Object(n.jsx)("h3",{style:{display:"inline"},children:"Rincian Harian"})," ",Object(n.jsxs)("div",{style:{display:"inline"},children:[t.weather.datetime.substr(0,4),"-",t.weather.datetime.toString().substr(4,4).split(/(?=(?:..)*$)/gm).join("-")]})]}),Object(n.jsxs)("div",{className:"daily-details grid loose-gap vcenter",children:[Object(n.jsxs)("div",{className:"mini-card floated twice-width no-padding flexed",children:[Object(n.jsx)("div",{className:"weather-icon inline temp details-card ".concat(p.berawan)}),Object(n.jsxs)("div",{style:{width:"70%"},className:"flexed vcenter",children:[Object(n.jsxs)("p",{children:[t.tmin[0].value[0].name,"\xb0",t.tmin[0].value[0].unit]}),Object(n.jsx)("span",{className:"line-horizontal"}),Object(n.jsxs)("p",{children:[t.tmax[0].value[0].name,"\xb0",t.tmax[0].value[0].unit]})]})]}),Object(n.jsxs)("div",{className:"mini-card floated twice-width no-padding flexed",children:[Object(n.jsx)("div",{className:"weather-icon humid details-card ".concat(p.berawan)}),Object(n.jsxs)("div",{style:{width:"70%"},className:"flexed vcenter",children:[Object(n.jsxs)("p",{children:[t.hmin[0].value.name,t.hmin[0].value.unit]}),Object(n.jsx)("span",{className:"line-horizontal"}),Object(n.jsxs)("p",{children:[t.hmax[0].value.name,t.hmax[0].value.unit]})]})]})]})]})]})]})})},S=function(){return Object(n.jsx)("div",{className:"container main-content",children:Object(n.jsxs)("div",{className:"container-inned",style:{backgroundColor:"white",padding:"34px",borderRadius:"8px"},children:[Object(n.jsx)(m.b,{to:"/react-weather",children:"Kembali ke beranda"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("h3",{children:"Library yang digunakan:"}),Object(n.jsxs)("ul",{style:{padding:"8px 16px"},children:[Object(n.jsxs)("li",{children:["fast-xml-parser - ",Object(n.jsx)("a",{href:"https://github.com/NaturalIntelligence/fast-xml-parser/blob/master/LICENSE",children:"MIT License"})]}),Object(n.jsxs)("li",{children:["react-icons (Material Design Icons) - ",Object(n.jsx)("a",{href:"https://github.com/google/material-design-icons/blob/master/LICENSE",children:"Apache License Version 2.0"})]}),Object(n.jsxs)("li",{children:["Data Prakiraan Cuaca - Data Terbuka BMKG - ",Object(n.jsx)("a",{href:"https://data.bmkg.go.id/",children:"Badan Meteorologi, Klimatologi, dan Geofisika (BMKG)"})]})]})]})})};var C=function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),a=t[0],c=t[1],i=Object(r.useState)([]),s=Object(j.a)(i,2),l=s[0],p=s[1],O=Object(r.useState)(!1),g=Object(j.a)(O,2),w=g[0],C=g[1],T=Object(r.useState)(!1),B=Object(j.a)(T,2),L=B[0],K=B[1],M=Object(r.useState)({}),A=Object(j.a)(M,2),E=A[0],H=A[1],D=Object(r.useState)("0"),F=Object(j.a)(D,2),I=F[0],P=F[1];Object(r.useEffect)((function(){var e=function(){var e=Object(u.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=o.a.mark((function e(t){var a,n,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f).concat(h[t],".xml"),{method:"GET",headers:{"Content-Type":"application/xml"},mode:"cors"});case 2:return a=e.sent,e.next=5,a.text();case 5:n=e.sent,r=v.a.parse(n,x),i=r.data.forecast.area.map((function(e){return"land"===e.type&&{coordinate:e.coordinate,province:e.domain,id:e.id,cityName:e.name[1].name}})),c((function(e){return[].concat(Object(d.a)(e),[{data:i}])}));case 9:case"end":return e.stop()}}),e)})),a=0;case 2:if(!(a<h.length)){e.next=7;break}return e.delegateYield(t(a),"t0",4);case 4:a++,e.next=2;break;case 7:C(!0);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(u.a)(o.a.mark((function e(){var t,a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f,"Indonesia.xml"));case 2:return t=e.sent,e.next=5,t.text();case 5:a=e.sent,n=v.a.parse(a,x),P(n.data.forecast.issue.timestamp);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();!w&&e(),t()}),[w]);var G=function(){var e=Object(u.a)(o.a.mark((function e(t,a){var n,r,c,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="Kep. Bangka Belitung"===a?a.replace("Kep. ","").replaceAll(" ",""):a.replaceAll(" ",""),e.next=3,fetch("".concat(f).concat(n,".xml"));case 3:return r=e.sent,e.next=6,r.text();case 6:c=e.sent,i=v.a.parse(c,x,!0),s=i.data.forecast.area.filter((function(e){return e.id===t})),K(!1),H({}),p([]),p(s[0]),null!==document.querySelector(".horizontal-scroller")&&document.querySelector(".horizontal-scroller").scrollTo(0,0);case 14:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),J=function(e,t,a,n,r,c,i,s,l){H({weather:e,windicon:t,windspeed:l,temperature:a,humidity:n,tmin:r,tmax:c,hmin:i,hmax:s}),K(!0)},z=function(){K(!1),H({})},R=function(){K(!1),H({}),p([])};return Object(n.jsx)(m.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("div",{className:"background-banner"}),Object(n.jsx)(b.a,{path:"/react-weather",exact:!0,render:function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"container-inner",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)(N,{locations:w&&a,isLoaded:w,onLocationChange:G,dismissAll:R}),Object(n.jsx)("center",{className:"main-content",children:void 0!==l.parameter&&l.parameter.length>0?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"section one",children:[Object(n.jsxs)("div",{className:"section-title",children:[Object(n.jsx)("h3",{children:"Prakiraan Cuaca Tiap Jam"}),Object(n.jsxs)("p",{style:{fontSize:"0.7em"},children:["Diterbitkan: ",I.toString().substr(0,4),"-",I.toString().substr(4,4).split(/(?=(?:..)*$)/gm).join("-")," ",I.toString().substr(8).split(/(?=(?:..)*$)/gm).join(":")]})]}),Object(n.jsx)("div",{className:"horizontal-scroller",children:Object(n.jsx)(k,{data:l,onClick:J})})]}),Object(n.jsx)("div",{className:"section two hcontainer ".concat(L?"show":""),children:L&&Object(n.jsx)(y,{data:E,onClick:z})})]}):Object(n.jsx)("h3",{className:"section-title",children:"Halo! Untuk memulai, silakan masukkan lokasi Anda."})})]}),Object(n.jsx)("footer",{className:"footer",children:Object(n.jsxs)("p",{children:[Object(n.jsx)(m.b,{to:"/react-weather/about",children:"Library"})," | Gambar oleh ",Object(n.jsx)("a",{href:"https://www.unsplash.com/",target:"_blank",rel:"noreferrer",children:"Unsplash"})," | Data oleh ",Object(n.jsx)("a",{href:"https://data.bmkg.go.id/",target:"_blank",rel:"noreferrer",children:"Badan Meteorologi, Klimatologi, dan Geofisika (BMKG)"})]})})]})})})}}),Object(n.jsx)(b.a,{path:"/react-weather/about",component:S})]})})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,46)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(C,{})}),document.getElementById("root")),T()}},[[45,1,2]]]);
//# sourceMappingURL=main.4ec76c94.chunk.js.map