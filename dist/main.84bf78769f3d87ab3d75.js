(()=>{"use strict";var e,t={369:(e,t,r)=>{var n=r(757),a=r.n(n),c=r(137),u=r(294),o=r(935),l=r(654),i=r(329),s=r(403),p=r(879),f=r(222),d={fullscreenMap:!1},v=(0,s.oM)({name:"UI",initialState:d,reducers:{isFullscreenMapToggled:function(e){e.fullscreenMap=!e.fullscreenMap}}}),m=v.reducer,b=v.actions.isFullscreenMapToggled,h=(0,f.P1)((function(e){return e.UI.fullscreenMap}),(function(e){return e}));const w=m,O=(0,p.UY)({UI:w});var g=r(156);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var E=function(){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){(0,g.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},d)};const y=function(){return{UI:E()}};const j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,s.xC)({reducer:O,middleware:(0,i.Z)((0,s.Bx)()),preloadedState:e});return t};var k=r(699),M=(0,u.createContext)(null);const P=function(e){var t=e.children,r=(0,u.useState)({darkMode:!1}),n=(0,k.Z)(r,2),o=n[0],l=(n[1],function(){var e=(0,c.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return u.useEffect((function(){l()}),[]),u.createElement(M.Provider,{value:o},o?t:null)};var I=r(735);const Z=function(e){var t=e.webmapId,r=e.children,n=u.useRef(),o=u.useState(null),l=(0,k.Z)(o,2),i=l[0],s=l[1],p=function(){var e=(0,c.Z)(a().mark((function e(){var r,c,u,o,l;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,I.loadModules)(["esri/views/MapView","esri/WebMap"]);case 3:r=e.sent,c=(0,k.Z)(r,2),u=c[0],o=c[1],(l=new u({container:n.current,map:new o({portalItem:{id:t}})})).when((function(){s(l)})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return u.useEffect((function(){(0,I.loadCss)(),p()}),[]),u.createElement(u.Fragment,null,u.createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},ref:n}),i?u.Children.map(r,(function(e){return u.cloneElement(e,{mapView:i})})):null)};const C=function(e){var t=e.position,r=e.containerId,n=e.mapView,o=e.searchCompletedHandler,l=function(){var e=(0,c.Z)(a().mark((function e(){var c,u,l,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t||r){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,(0,I.loadModules)(["esri/widgets/Search"]);case 5:c=e.sent,u=(0,k.Z)(c,1),l=u[0],i=new l({view:n,resultGraphicEnabled:!1,popupEnabled:!1,container:r}),t&&!r&&n.ui.add(i,{position:t,index:2}),o&&i.on("search-complete",(function(e){var t;if(i.results[0]&&null!=i&&null!==(t=i.results[0])&&void 0!==t&&t.results[0]){var r=i.results[0].results[0];o(r)}})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}();return u.useEffect((function(){n&&l()}),[n]),null};var S=function(){var e=(0,l.I0)(),t=(0,l.v9)(h);return u.createElement("button",{className:"btn absolute top-2 right-2 bg-blue-500 text-white py-2 px-4 rounded",onClick:function(){e(b())}},t?"close full screen":"open full screen map")},_=function(){var e=(0,l.v9)(h);return u.createElement("div",{className:e?"fixed top-0 left-0 w-full h-full":"relative w-96 h-96 ml-auto mr-auto"},u.createElement(Z,{webmapId:"5f3b7605b3364e7bb2416c93fae00995"},u.createElement(C,{position:"top-leading"})))};const D=function(){return u.createElement(u.Fragment,null,u.createElement(_,null),u.createElement(S,null))};(0,I.setDefaultOptions)({url:"https://js.arcgis.com/next/"}),(0,c.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=y(),o.render(u.createElement(u.StrictMode,null,u.createElement(l.zt,{store:j(t)},u.createElement(P,null,u.createElement(D,null)))),document.getElementById("root"));case 2:case"end":return e.stop()}}),e)})))()}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var c=r[e]={exports:{}};return t[e].call(c.exports,c,c.exports,n),c.exports}n.m=t,e=[],n.O=(t,r,a,c)=>{if(!r){var u=1/0;for(i=0;i<e.length;i++){for(var[r,a,c]=e[i],o=!0,l=0;l<r.length;l++)(!1&c||u>=c)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(o=!1,c<u&&(u=c));o&&(e.splice(i--,1),t=a())}return t}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[r,a,c]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,c,[u,o,l]=r,i=0;for(a in o)n.o(o,a)&&(n.m[a]=o[a]);if(l)var s=l(n);for(t&&t(r);i<u.length;i++)c=u[i],n.o(e,c)&&e[c]&&e[c][0](),e[u[i]]=0;return n.O(s)},r=self.webpackChunkreact_redux_boilerplate=self.webpackChunkreact_redux_boilerplate||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=n.O(void 0,[736],(()=>n(369)));a=n.O(a)})();
//# sourceMappingURL=main.84bf78769f3d87ab3d75.js.map