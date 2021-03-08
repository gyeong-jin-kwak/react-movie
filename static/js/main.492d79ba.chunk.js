(this["webpackJsonpreact-movie"]=this["webpackJsonpreact-movie"]||[]).push([[0],{26:function(t,e,n){t.exports=n.p+"static/media/noPosterSmall.af0862d5.png"},74:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n(1),i=n.n(a),c=n(35),o=n.n(c),s=n(16),u=n(6),l=n(3),j=n(2);function b(){var t=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 50px;\n"]);return b=function(){return t},t}function d(){var t=Object(l.a)(["\n  width: 80px;\n  height: 50px\n  text-align: center;\n  border-bottom: 5px solid ",";\n  transition: border-bottom 0.5s ease-in-out;\n"]);return d=function(){return t},t}function p(){var t=Object(l.a)(["\n  display: flex;\n"]);return p=function(){return t},t}function f(){var t=Object(l.a)(["\n  position: fixed;\n  display: flex;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  padding: 0 10px;\n  align-items: center;\n  color: white;\n  background-color: rgba(20, 20, 20, 0.8);\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n"]);return f=function(){return t},t}var g=j.c.header(f()),x=j.c.ul(p()),h=j.c.li(d(),(function(t){return t.current?"#3498db":"transparent"})),O=Object(j.c)(s.b)(b()),v=Object(u.g)((function(t){var e=t.location.pathname;return Object(r.jsx)(g,{children:Object(r.jsxs)(x,{children:[Object(r.jsx)(h,{current:"/"===e,children:Object(r.jsx)(O,{to:"/",children:"Movies"})}),Object(r.jsx)(h,{current:"/tv"===e,children:Object(r.jsx)(O,{to:"/tv",children:"TV"})}),Object(r.jsx)(h,{current:"/search"===e,children:Object(r.jsx)(O,{to:"/search",children:"Search"})})]})})})),m=n(11),_=n.n(m),y=n(14),w=n(5),S=n(13);function k(){var t=Object(l.a)(["\n    display: flex;\n    justify-content: center;\n    width: 100wh;\n    height: 100vh;\n    margin-top: 20px;\n    font-size: 28px;\n"]);return k=function(){return t},t}var R=j.c.div(k()),U=function(){return Object(r.jsx)(R,{children:Object(r.jsx)("span",{role:"img","aria-label":"Loding",children:"\ud83e\udd16"})})};function z(){var t=Object(l.a)(["\n    color: ",";\n"]);return z=function(){return t},t}function T(){var t=Object(l.a)(["\n    display: flex;\n    width: 100vw;\n    justify-content: center;\n"]);return T=function(){return t},t}var M=j.c.div(T()),F=j.c.span(z(),(function(t){return t.color})),I=function(t){var e=t.text,n=t.color;return Object(r.jsx)(M,{children:Object(r.jsx)(F,{color:n,children:e})})};function P(){var t=Object(l.a)(["\n    font-size: 10px;\n    color: rgba(255, 255, 255, 0.5)\n"]);return P=function(){return t},t}function C(){var t=Object(l.a)(["\n    display: block;\n    margin-bottom: 3px;\n    font-size: 12px;\n"]);return C=function(){return t},t}function L(){var t=Object(l.a)(["\n    position: relative;\n    margin-bottom: 5px;\n    &:hover {\n        "," {\n            opacity: 0.3;\n        }\n        "," {\n            opacity: 1;\n        }\n    }\n"]);return L=function(){return t},t}function N(){var t=Object(l.a)(["\n    position: absolute;\n    right: 5px;\n    bottom: 5px;\n    opacity: 0;\n"]);return N=function(){return t},t}function V(){var t=Object(l.a)(["\n    height: 180px;\n    margin-bottom: 10px;\n    background-image: url(",");\n    background-size: cover;\n    border-radius: 4px;\n    background-position: center center;\n    transition: opacity 0.2s linear;\n"]);return V=function(){return t},t}function E(){var t=Object(l.a)(["\n    font-size: 12px;\n"]);return E=function(){return t},t}var B=j.c.div(E()),q=j.c.div(V(),(function(t){return t.bgUrl})),A=j.c.span(N()),D=j.c.div(L(),q,A),J=j.c.span(C()),G=j.c.span(P()),H=function(t){var e=t.id,a=t.imageUrl,i=t.title,c=t.rating,o=t.year,u=t.isMovie,l=void 0!==u&&u;return Object(r.jsx)(s.b,{to:l?"/movie/".concat(e):"/show/".concat(e),children:Object(r.jsxs)(B,{children:[Object(r.jsxs)(D,{children:[Object(r.jsx)(q,{bgUrl:a?"https://image.tmdb.org/t/p/w300".concat(a):n(26)}),Object(r.jsxs)(A,{children:[Object(r.jsx)("span",{role:"img","aria-label":"rating",children:"\u2b50\ufe0f"})," ",c,"/10"]})]}),Object(r.jsx)(J,{children:i.length>15?"".concat(i.substring(0,15),"..."):i}),Object(r.jsx)(G,{children:o})]})})};function K(){var t=Object(l.a)(["\n    all: unset;\n    width: 100%;\n    font-size: 28px;\n"]);return K=function(){return t},t}function Q(){var t=Object(l.a)(["\n    width: 100%;\n    margin-bottom: 50px;\n"]);return Q=function(){return t},t}function W(){var t=Object(l.a)(["\n    padding: 0 20px;\n"]);return W=function(){return t},t}var X=j.c.div(W()),Y=j.c.form(Q()),Z=j.c.input(K()),$=function(t){var e=t.movieResults,n=t.tvResultes,a=t.searchTerm,i=t.error,c=t.loading,o=t.handleSubmit,s=t.updateTerm;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(S.a,{children:Object(r.jsx)("title",{children:"Search | Reactflix"})}),Object(r.jsxs)(X,{children:[Object(r.jsx)(Y,{onSubmit:o,children:Object(r.jsx)(Z,{onChange:s,value:a,placeholder:"Search Movies or TV show"})}),c?Object(r.jsx)(U,{}):Object(r.jsxs)(r.Fragment,{children:[e&&e.length>0&&Object(r.jsx)(ct,{title:"Movie Result",children:e.map((function(t){return Object(r.jsx)(H,{id:t.id,isMovie:!0,title:t.original_title,imageUrl:t.poster_path,year:t.release_date&&t.release_date.substring(0,4),rating:t.vote_average})}))}),n&&n.length>0&&Object(r.jsx)(ct,{title:"TV Show Result",children:n.map((function(t){return Object(r.jsx)(H,{id:t.id,title:t.original_name,imageUrl:t.poster_path,year:t.first_air_date&&t.first_air_date.substring(0,4),rating:t.vote_average})}))}),i&&Object(r.jsx)(I,{text:i,color:"#e74c3c"}),e&&n&&0===e.length&&0===n.length&&Object(r.jsx)(I,{text:"Nothing Found ",color:"#95a5a6"})]})]}),";"]})};function tt(){var t=Object(l.a)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fill, 125px);\n    grid-gap: 25px;\n    margin-top: 25px;\n"]);return tt=function(){return t},t}function et(){var t=Object(l.a)(["\n    font-size: 16px;\n    font-weight: 600;\n"]);return et=function(){return t},t}function nt(){var t=Object(l.a)(["\n    :not(:last-child) {\n        margin-bottom: 50px;\n    }\n"]);return nt=function(){return t},t}var rt=j.c.div(nt()),at=j.c.span(et()),it=j.c.div(tt()),ct=function(t){var e=t.title,n=t.children;return Object(r.jsxs)(rt,{children:[Object(r.jsx)(at,{children:e}),Object(r.jsx)(it,{children:n})]})};function ot(){var t=Object(l.a)(["\n    padding: 20px;\n"]);return ot=function(){return t},t}var st=j.c.div(ot()),ut=function(t){var e=t.nowPlaying,n=t.upcoming,a=t.popular,i=t.error,c=t.loading;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(S.a,{children:Object(r.jsx)("title",{children:"Movies | Reactflix"})}),c?Object(r.jsx)(U,{}):Object(r.jsxs)(st,{children:[e&&e.length>0&&Object(r.jsx)(ct,{title:"Now Playing",children:e.map((function(t){return Object(r.jsx)(H,{id:t.id,isMovie:!0,title:t.original_title,imageUrl:t.poster_path,year:t.release_date&&t.release_date.substring(0,4),rating:t.vote_average})}))}),n&&n.length>0&&Object(r.jsx)(ct,{title:"Upcoming Movies",children:n.map((function(t){return Object(r.jsx)(H,{id:t.id,isMovie:!0,title:t.original_title,imageUrl:t.poster_path,year:t.release_date&&t.release_date.substring(0,4),rating:t.vote_average})}))}),a&&a.length>0&&Object(r.jsx)(ct,{title:"Popular Movies",children:a.map((function(t){return Object(r.jsx)(H,{id:t.id,isMovie:!0,title:t.original_title,imageUrl:t.poster_path,year:t.release_date&&t.release_date.substring(0,4),rating:t.vote_average})}))}),i&&Object(r.jsx)(I,{text:i,color:"#e74c3c"})]})]})},lt=n(41),jt=n.n(lt).a.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"357ad6a3e1369f05856eff3e04365942",language:"en-US"}}),bt=function(){return jt.get("movie/now_playing")},dt=function(){return jt.get("movie/upcoming")},pt=function(){return jt.get("movie/popular")},ft=function(t){return jt.get("movie/".concat(t),{params:{append_to_response:"videos"}})},gt=function(t){return jt.get("search/movie",{params:{query:encodeURIComponent(t)}})},xt=function(){return jt.get("tv/popular")},ht=function(){return jt.get("tv/top_rated")},Ot=function(){return jt.get("tv/airing_today")},vt=function(t){return jt.get("tv/".concat(t),{params:{append_to_response:"videos"}})},mt=function(t){return jt.get("search/tv",{params:{query:encodeURIComponent(t)}})},_t=function(){var t=Object(a.useState)(null),e=Object(w.a)(t,2),n=e[0],i=e[1],c=Object(a.useState)(null),o=Object(w.a)(c,2),s=o[0],u=o[1],l=Object(a.useState)(null),j=Object(w.a)(l,2),b=j[0],d=j[1],p=Object(a.useState)(null),f=Object(w.a)(p,2),g=f[0],x=f[1],h=Object(a.useState)(!0),O=Object(w.a)(h,2),v=O[0],m=O[1];return Object(a.useEffect)((function(){(function(){var t=Object(y.a)(_.a.mark((function t(){var e,n,r,a,c,o;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,bt();case 3:return e=t.sent,n=e.data.results,t.next=7,dt();case 7:return r=t.sent,a=r.data.results,t.next=11,pt();case 11:c=t.sent,o=c.data.results,console.log(o),i(n),u(a),d(o),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(0),x("can't find movies information");case 22:return t.prev=22,m(!1),t.finish(22);case 25:case"end":return t.stop()}}),t,null,[[0,19,22,25]])})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(r.jsx)(ut,{nowPlaying:n,upcoming:s,popular:b,error:g,loading:v})};function yt(){var t=Object(l.a)(["\n    padding: 20px;\n"]);return yt=function(){return t},t}var wt=j.c.div(yt()),St=function(t){var e=t.popular,n=t.topRated,a=t.airingToday,i=t.error,c=t.loading;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(S.a,{children:Object(r.jsx)("title",{children:"TV Shows | Reactflix"})}),c?Object(r.jsx)(U,{}):Object(r.jsxs)(wt,{children:[n&&n.length>0&&Object(r.jsx)(ct,{title:"Top Rated Shows",children:n.map((function(t){return Object(r.jsx)(H,{id:t.id,title:t.original_name,imageUrl:t.poster_path,year:t.first_air_date&&t.first_air_date.substring(0,4),rating:t.vote_average})}))}),e&&e.length>0&&Object(r.jsx)(ct,{title:"Popular Shows",children:e.map((function(t){return Object(r.jsx)(H,{id:t.id,title:t.original_name,imageUrl:t.poster_path,year:t.first_air_date&&t.first_air_date.substring(0,4),rating:t.vote_average})}))}),a&&a.length>0&&Object(r.jsx)(ct,{title:"Airing Today",children:a.map((function(t){return Object(r.jsx)(H,{id:t.id,title:t.original_name,imageUrl:t.poster_path,year:t.first_air_date&&t.first_air_date.substring(0,4),rating:t.vote_average})}))}),i&&Object(r.jsx)(I,{text:i,color:"#e74c3c"})]})]})},kt=function(){var t=Object(a.useState)(null),e=Object(w.a)(t,2),n=e[0],i=e[1],c=Object(a.useState)(null),o=Object(w.a)(c,2),s=o[0],u=o[1],l=Object(a.useState)(null),j=Object(w.a)(l,2),b=j[0],d=j[1],p=Object(a.useState)(null),f=Object(w.a)(p,2),g=f[0],x=f[1],h=Object(a.useState)(!0),O=Object(w.a)(h,2),v=O[0],m=O[1];return Object(a.useEffect)((function(){(function(){var t=Object(y.a)(_.a.mark((function t(){var e,n,r,a,c,o;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,xt();case 3:return e=t.sent,n=e.data.results,t.next=7,ht();case 7:return r=t.sent,a=r.data.results,t.next=11,Ot();case 11:c=t.sent,o=c.data.results,i(n),u(a),d(o),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(0),x("can't find TV information");case 21:return t.prev=21,m(!1),t.finish(21);case 24:case"end":return t.stop()}}),t,null,[[0,18,21,24]])})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(r.jsx)(St,{popular:n,topRated:s,airingToday:b,error:g,loading:v})},Rt=function(){var t=Object(a.useState)(null),e=Object(w.a)(t,2),n=e[0],i=e[1],c=Object(a.useState)(null),o=Object(w.a)(c,2),s=o[0],u=o[1],l=Object(a.useState)(""),j=Object(w.a)(l,2),b=j[0],d=j[1],p=Object(a.useState)(null),f=Object(w.a)(p,2),g=f[0],x=f[1],h=Object(a.useState)(!1),O=Object(w.a)(h,2),v=O[0],m=O[1],S=function(){var t=Object(y.a)(_.a.mark((function t(){var e,n,r,a;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m(!0),t.prev=1,t.next=4,gt(b);case 4:return e=t.sent,n=e.data.results,t.next=8,mt(b);case 8:r=t.sent,a=r.data.results,i(n),u(a),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),x("can't find results");case 17:return t.prev=17,m(!1),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[1,14,17,20]])})));return function(){return t.apply(this,arguments)}}();return Object(r.jsx)($,{movieResults:n,tvResultes:s,searchTerm:b,error:g,loading:v,handleSubmit:function(t){t.preventDefault(),""!==b&&S()},updateTerm:function(t){var e=t.target.value;d(e)}})};function Ut(){var t=Object(l.a)(["\n    width: 50%;\n    margin-top: 10px;\n    font-size: 12px;\n    opacity: 0.7;\n    line-height: 1.5;\n"]);return Ut=function(){return t},t}function zt(){var t=Object(l.a)(["\n    margin: 0 10px;\n"]);return zt=function(){return t},t}function Tt(){var t=Object(l.a)(["\n"]);return Tt=function(){return t},t}function Mt(){var t=Object(l.a)(["\n    margin: 20px 0;\n"]);return Mt=function(){return t},t}function Ft(){var t=Object(l.a)(["\n    font-size: 32px;\n    margin-bottom: 10px;\n"]);return Ft=function(){return t},t}function It(){var t=Object(l.a)(["\n    width: 70%;\n    margin-left: 10px;\n"]);return It=function(){return t},t}function Pt(){var t=Object(l.a)(["\n    width: 30%;\n    height: 100%;\n    margin-right: 15px;\n    background-image: url(",");\n    background-position: center center;\n    background-size: cover;\n    border-radius: 5px;\n"]);return Pt=function(){return t},t}function Ct(){var t=Object(l.a)(["\n    position: relative;\n    display: flex;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n"]);return Ct=function(){return t},t}function Lt(){var t=Object(l.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-image: url(",");\n    background-position: center center;\n    background-size: cover;\n    filter: blur(3px);\n    opacity: 0.5;\n    z-index: 0;\n"]);return Lt=function(){return t},t}function Nt(){var t=Object(l.a)(["\n    position: relative;\n    width: 100%;\n    height: calc(100vh - 50px);\n    padding: 50px;\n"]);return Nt=function(){return t},t}var Vt=j.c.div(Nt()),Et=j.c.div(Lt(),(function(t){return t.bgImage})),Bt=j.c.div(Ct()),qt=j.c.div(Pt(),(function(t){return t.bgImage})),At=j.c.div(It()),Dt=j.c.h3(Ft()),Jt=j.c.div(Mt()),Gt=j.c.span(Tt()),Ht=j.c.span(zt()),Kt=j.c.p(Ut()),Qt=function(t){var e=t.result,a=t.error;return t.loading?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(S.a,{children:Object(r.jsx)("title",{children:"Loading | Reactflix"})}),Object(r.jsx)(U,{})]}):a?Object(r.jsx)(I,{}):Object(r.jsxs)(Vt,{children:[Object(r.jsx)(S.a,{children:Object(r.jsxs)("title",{children:[e.original_title?e.original_title:e.original_name," | Reactflix"]})}),Object(r.jsx)(Et,{bgImage:"https://image.tmdb.org/t/p/original".concat(e.backdrop_path)}),Object(r.jsxs)(Bt,{children:[Object(r.jsx)(qt,{bgImage:e.poster_path?"https://image.tmdb.org/t/p/original".concat(e.poster_path):n(26)}),Object(r.jsxs)(At,{children:[Object(r.jsx)(Dt,{children:e.original_title?e.original_title:e.original_name}),Object(r.jsxs)(Jt,{children:[Object(r.jsx)(Gt,{children:e.release_date?e.release_date.substring(0,4):e.first_air_date.substring(0,4)}),Object(r.jsx)(Ht,{children:"\u30fb"}),Object(r.jsxs)(Gt,{children:[e.runtime?e.runtime:e.episode_run_time," min"]}),Object(r.jsx)(Ht,{children:"\u30fb"}),Object(r.jsx)(Gt,{children:e.genres&&e.genres.map((function(t,n){return n===e.genres.length-1?t.name:"".concat(t.name," / ")}))}),Object(r.jsx)(Kt,{children:e.overview})]})]})]})]})},Wt=function(t){var e=t.location.pathname,n=Object(a.useState)(null),i=Object(w.a)(n,2),c=i[0],o=i[1],s=Object(a.useState)(null),u=Object(w.a)(s,2),l=u[0],j=u[1],b=Object(a.useState)(!0),d=Object(w.a)(b,2),p=d[0],f=d[1],g=e.includes("/movie/");return Object(a.useEffect)((function(){(function(){var e=Object(y.a)(_.a.mark((function e(){var n,r,a,i,c,s;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.match.params.id,r=t.history.push,a=parseInt(n),!isNaN(a)){e.next=4;break}return e.abrupt("return",r("/"));case 4:if(e.prev=4,!g){e.next=12;break}return e.next=8,ft(a);case 8:c=e.sent,i=c.data,e.next=16;break;case 12:return e.next=14,vt(a);case 14:s=e.sent,i=s.data;case 16:console.log(i),o(i),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(4),j("can't find anything");case 23:return e.prev=23,f(!1),e.finish(23);case 26:case"end":return e.stop()}}),e,null,[[4,20,23,26]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.jsx)(Qt,{result:c,error:l,loading:p})},Xt=function(){return Object(r.jsxs)(s.a,{children:[Object(r.jsx)(v,{}),Object(r.jsxs)(u.d,{children:[Object(r.jsx)(u.b,{path:"/",exact:!0,component:_t}),Object(r.jsx)(u.b,{path:"/tv",exact:!0,component:kt}),Object(r.jsx)(u.b,{path:"/tv/popular",render:function(){return Object(r.jsx)("h1",{children:"Popular"})}}),Object(r.jsx)(u.b,{path:"/search",component:Rt}),Object(r.jsx)(u.b,{path:"/movie/:id",component:Wt}),Object(r.jsx)(u.b,{path:"/show/:id",component:Wt}),Object(r.jsx)(u.a,{from:"*",to:"/"})]})]})},Yt=n(42);function Zt(){var t=Object(l.a)(["\n  ",";\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    padding-top: 50px;\n    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxgen, Ubuntu, Canta;\n    font-size: 12px;\n    color: #fff;\n    background-color: rgba(20, 20, 20, 1);\n  }\n"]);return Zt=function(){return t},t}var $t=Object(j.a)(Zt(),Yt.a);var te=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(Xt,{}),Object(r.jsx)($t,{})]})},ee=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),r(t),a(t),i(t),c(t)}))};o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(te,{})}),document.getElementById("root")),ee()}},[[74,1,2]]]);
//# sourceMappingURL=main.492d79ba.chunk.js.map