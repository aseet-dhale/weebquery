(this.webpackJsonpanime=this.webpackJsonpanime||[]).push([[0],{111:function(e,t,a){e.exports=a.p+"static/media/blackCover.df0397b0.jpg"},125:function(e,t,a){e.exports=a(275)},274:function(e,t,a){},275:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),i=a.n(c),o=a(12),l=a(18),s=a(13),m=a(17),u=a(16),d=a(110),p=a.n(d),g=a(300),f=a(118),h=a(287),E=a(290),v=a(291),b=a(292),y=a(293),x=a(294),j=a(288),w=(a(52),a(70)),k=a(289),N=a(115),O=a.n(N),C=a(111),I=a.n(C),D=a(37),_=Object(h.a)((function(e){return{line:{height:5,backgroundColor:"black"}}})),B=function(e){for(var t=parseInt(e),a=0;0!==t;)t=parseInt(t/10),a+=1;var n=parseFloat(Math.pow(10,a));return"".concat((e/n*100).toFixed(2),"%")};function P(e){var t=e.value,a=e.precision,n=(_(),Object(D.b)({value:parseFloat(t),from:{value:0}}));Object(D.b)({width:B(t),from:{width:"0%"}});return r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a.div,{style:n},n.value.interpolate((function(e){return e.toFixed(a)}))))}var T=Object(h.a)((function(e){return{root:{flexGrow:1,display:"flex",marginBottom:e.spacing(4)},avgRating:{marginRight:e.spacing(4)},users:{marginRight:e.spacing(4)}}}));function W(e){var t=e.data,a=T(),n=t.attributes.averageRating,c=t.attributes.userCount,i=t.attributes.favoritesCount;return r.a.createElement("div",{className:"".concat(a.root," counters")},r.a.createElement("div",{className:a.avgRating},"Average Rating",r.a.createElement(P,{value:n,precision:2})),r.a.createElement("div",{className:a.users},"#Users",r.a.createElement(P,{value:c,precision:0})),r.a.createElement("div",null,"Favourite",r.a.createElement(P,{value:i,precision:0})))}function L(e){var t=e.data,a=t.attributes.titles.en_jp,n=t.attributes.titles.ja_jp,c=t.attributes.synopsis;t.attributes.startDate,t.attributes.endDate;return r.a.createElement("div",null,r.a.createElement(j.a,{variant:"h4",className:"animeName"},a,"(",n,")"),r.a.createElement(j.a,{variant:"body1"},c))}var R=Object(h.a)((function(e){return{root:{flexGrow:1},images:{display:"flex",flexWrap:"wrap",justifyContent:"center",margin:0,height:400},backButtonContainer:{position:"absolute",left:0,width:40,height:40,borderRadius:"50%",cursor:"pointer",border:"none",backgroundColor:"white",margin:e.spacing(1)},cardColor:{position:"absolute",left:0,width:"100%",minHeight:"100vh",zIndex:1,display:"block",paddingBottom:e.spacing(10)},coverImage:{position:"absolute",width:"100%",height:300,objectFit:"cover",zIndex:-1},posterImage:{marginTop:e.spacing(6),position:"absolute",display:"block",maxHeight:300,borderRadius:"2%"}}})),S=function(e,t){w.from("https://cors-anywhere.herokuapp.com/"+e).getPalette().then((function(e){document.getElementById("cards_".concat(t.id)).style.backgroundColor=e.DarkVibrant.getHex(),document.getElementById("cardsTitle_".concat(t.id)).style.color=e.LightVibrant.getHex()})).catch((function(e){return console.log(e)}))};function F(e){var t,a=e.data,n=R(),c=a.attributes.posterImage.small;try{t=a.attributes.coverImage.small}catch(i){t=I.a}return r.a.createElement("div",{id:"cards_".concat(a.id),className:n.cardColor},r.a.createElement(k.a,null,r.a.createElement("div",{className:n.root,id:"cardsTitle_".concat(a.id),onLoad:S(c,a)},r.a.createElement("div",{className:n.images},r.a.createElement("button",{className:n.backButtonContainer,onClick:function(){return e.toggle()}},r.a.createElement(O.a,null)),r.a.createElement("img",{src:t,alt:"",className:n.coverImage}),r.a.createElement("img",{src:c,alt:"",className:n.posterImage})),r.a.createElement(W,{data:a}),r.a.createElement(L,{data:a}))))}var z=Object(h.a)((function(e){return{root:{flexGrow:1,margin:e.spacing(1)},cardWidth:{minWidth:150,maxWidth:400},media:{height:250,maxWidth:400},animeName:{maxWidth:300,textAlign:"center"},contain:{display:"block",zIndex:2,top:0,left:0,width:"100%",position:"fixed"}}})),G=function(e){document.getElementById("completeCard_".concat(e.id))&&(document.documentElement.scrollTop=document.getElementById("completeCard_".concat(e.id)).offsetTop,console.log(document.getElementById("completeCard_".concat(e.id)).offsetTop)),console.log("called")};function H(e){var t=e.data,a=z(),c=t.attributes.posterImage.small,i=Object(n.useState)(!1),o=Object(f.a)(i,2),l=o[0],s=o[1];function m(){s((function(e){return!e}))}return l?r.a.createElement("div",{className:a.contain,id:"completeCard_".concat(t.id),onLoad:G(t)},r.a.createElement(F,{data:t,toggle:m})):r.a.createElement("div",{className:a.root},r.a.createElement(g.a,{display:"flex",justifyContent:"center"},r.a.createElement(E.a,{item:!0,xs:!0},r.a.createElement(v.a,{className:a.cardWidth},r.a.createElement(b.a,{onClick:function(){return m()}},r.a.createElement("div",null,r.a.createElement(y.a,{className:a.media,image:c,title:t.attributes.canonicalTitle}),r.a.createElement(g.a,{display:"flex",justifyContent:"center",alignItems:"center"},r.a.createElement(x.a,{className:a.animeName},r.a.createElement(j.a,{variant:"caption",className:"animeName",color:"inherit"},r.a.createElement("strong",null,t.attributes.titles.en_jp)," ",r.a.createElement("br",null)," (",t.attributes.titles.ja_jp,")")))))))))}var M=a(295),A=a(116),J=a.n(A),V=a(117),q=a.n(V),Q=Object(h.a)((function(e){return{root:{flexGrow:1},navWidth:{width:150,justifyContent:"space-between",display:"flex",alignItems:"center"},constSpace:{margin:e.spacing(5)}}})),U=function(e){var t=Q();return r.a.createElement("div",null,r.a.createElement("div",{className:t.constSpace}),r.a.createElement("div",{className:t.root},r.a.createElement(g.a,{display:"flex",justifyContent:"center"},r.a.createElement("div",{className:t.navWidth},r.a.createElement(M.a,{onClick:function(){e.previousPage()}},r.a.createElement(J.a,{fontSize:"large",color:"secondary"})),r.a.createElement("strong",null,Math.floor(e.currentPage/20)+1),r.a.createElement(M.a,{onClick:function(){e.nextPage()}},r.a.createElement(q.a,{fontSize:"large",color:"secondary"}))))),r.a.createElement("div",{className:t.constSpace}))},K=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).pageOffset=0,n.pageLimit=20,n.url="https://kitsu.io/api/edge/anime/?page[limit]=".concat(n.pageLimit,"&page[offset]=").concat(n.pageOffset),n.previousPage=function(){n.pageOffset>0&&(n.pageOffset=n.pageOffset-n.pageLimit,n.url="https://kitsu.io/api/edge/anime/?page[limit]=".concat(n.pageLimit,"&page[offset]=").concat(n.pageOffset),n.fetchData(),n.showData(),n.scrollTop())},n.nextPage=function(){n.pageOffset<12e3&&(n.pageOffset=n.pageOffset+n.pageLimit,n.url="https://kitsu.io/api/edge/anime/?page[limit]=".concat(n.pageLimit,"&page[offset]=").concat(n.pageOffset),n.fetchData(),n.showData(),n.scrollTop())},n.state={data:[]},n.showData=n.showData.bind(Object(s.a)(n)),n.fetchData=n.fetchData.bind(Object(s.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"scrollTop",value:function(){document.documentElement.scrollTop=0}},{key:"fetchData",value:function(){var e=this;p.a.get(this.url).then((function(t){e.setState({data:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"showData",value:function(){return this.state.data.map((function(e){return r.a.createElement(H,{loading:!0,key:e.id,data:e})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g.a,{display:"flex",flexWrap:"wrap"},this.showData()),r.a.createElement(U,{currentPage:this.pageOffset,nextPage:this.nextPage,previousPage:this.previousPage}))}}]),a}(n.Component),X=a(296),Y=a(297),Z=a(298),$=a(299),ee=(a(274),Object(h.a)((function(e){return{root:{flexGrow:1},toolbar:e.mixins.toolbar}})));function te(){var e=ee();return r.a.createElement("div",null,r.a.createElement(X.a,null,r.a.createElement(Y.a,{position:"static",className:"appBarCustom"},r.a.createElement(Z.a,{className:e.toolbar},r.a.createElement($.a,{onClick:function(){return window.location.reload()}},r.a.createElement(j.a,{align:"center",className:"weebquuery-name",variant:"h6"},r.a.createElement("strong",null,"WeebQuery")))))))}var ae=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(X.a,null,r.a.createElement(te,null),r.a.createElement(k.a,null,r.a.createElement(K,null))))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ae,null)),document.getElementById("root"))},52:function(e,t,a){}},[[125,1,2]]]);
//# sourceMappingURL=main.13a2b47b.chunk.js.map