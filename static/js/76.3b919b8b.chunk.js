"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(t,r,e){e.r(r),e.d(r,{default:function(){return o}});var n=e(439),a=e(791),c=e(689),s=e(390),u={castList:"Cast_castList__ARoWn",castImg:"Cast_castImg__T4WbF"},i=e(184),o=function(){var t=(0,a.useState)([]),r=(0,n.Z)(t,2),e=r[0],o=r[1],p=(0,a.useState)(),f=(0,n.Z)(p,2),m=f[0],d=f[1],h=(0,c.UO)().id;return(0,a.useEffect)((function(){(0,s.zv)(h).then((function(t){var r={item:t.cast.map((function(t){var r=t.cast_id,e=t.profile_path,n=t.name,a=t.character;return{id:r,img:e?"https://image.tmdb.org/t/p/original/".concat(e):"https://via.placeholder.com/200x300.png?text=No+Image",name:n,character:a}}))},e=Object.values(r).find((function(t){return Array.isArray(t)}));o(e)})).catch((function(t){d(t)}))}),[h]),(0,i.jsxs)(i.Fragment,{children:[m&&(0,i.jsx)("p",{children:m}),e&&e.length>0?(0,i.jsx)("ul",{className:u.castList,children:e.map((function(t){var r=t.id,e=t.img,n=t.name,a=t.character;return(0,i.jsxs)("li",{className:u.castItem,children:[(0,i.jsx)("img",{className:u.castImg,src:e,alt:n}),(0,i.jsx)("p",{children:n}),(0,i.jsxs)("p",{children:["Character: ",a]})]},r)}))}):"We do not find the cast for this movie."]})}},390:function(t,r,e){e.d(r,{Pg:function(){return o},tx:function(){return f},vw:function(){return i},wr:function(){return u},zv:function(){return p}});var n=e(861),a=e(757),c=e.n(a),s=e(912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"a20616a55c666b428048dd0d7103de62"}}),u=function(){var t=(0,n.Z)(c().mark((function t(r){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/trending/movie/day",{params:{page:r}});case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(c().mark((function t(r){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/search/movie",{params:{query:r}});case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(r){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(r),{params:{movie_id:r}});case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(r){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(r,"/credits"),{params:{movie_id:r}});case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(r){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(r,"/reviews"),{params:{movie_id:r}});case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=76.3b919b8b.chunk.js.map