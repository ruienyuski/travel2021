(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0be09f"],{"2f0e":function(t,e,c){"use strict";c.r(e);var a=c("7a23"),n={class:"row container"},r={class:"q-pa-md col-md-12 q-gutter-md"},l=Object(a["k"])("熱門美食"),s={class:"q-pa-md"},i={class:"row justify-between items-start q-gutter-x-xs q-gutter-y-xl q-mb-lg"},u={class:"column col bg-white q-pa-md"},o={class:"text-subtitle2"},j={class:"text-accent"},b=Object(a["k"])("推薦住宿"),d={class:"q-pa-md"},O={class:"row justify-between items-start q-gutter-x-xs q-gutter-y-xl q-mb-lg"},f={class:"column col bg-white q-pa-md"},m={class:"text-subtitle2"},p={class:"text-accent"};function v(t,e,c,v,h,g){var x=Object(a["J"])("Loading"),w=Object(a["J"])("q-icon"),y=Object(a["J"])("q-item-section"),q=Object(a["J"])("q-item"),C=Object(a["J"])("q-img"),R=Object(a["J"])("q-page-container");return Object(a["C"])(),Object(a["i"])(a["a"],null,[Object(a["l"])(x,{active:v.isLoading},null,8,["active"]),Object(a["l"])(R,{class:"bg-info"},{default:Object(a["R"])((function(){return[Object(a["j"])("div",n,[Object(a["j"])("div",r,[Object(a["l"])(q,null,{default:Object(a["R"])((function(){return[Object(a["l"])(y,{side:""},{default:Object(a["R"])((function(){return[Object(a["l"])(w,{name:"square",class:"text-secondary"})]})),_:1}),Object(a["l"])(y,{class:"text-h6"},{default:Object(a["R"])((function(){return[l]})),_:1})]})),_:1}),Object(a["j"])("div",s,[Object(a["j"])("div",i,[(Object(a["C"])(!0),Object(a["i"])(a["a"],null,Object(a["H"])(v.fooddata,(function(t){return Object(a["C"])(),Object(a["i"])("div",{class:"drop-shadow column my-card col-md-2 justify-between",style:{height:"243px"},key:t.ID},[Object(a["l"])(C,{src:t.Picture.PictureUrl1,alt:t.RestaurantName,style:{height:"137px",border:"12px solid #fff"},fit:"cover"},null,8,["src","alt"]),Object(a["j"])("div",u,[Object(a["j"])("div",null,Object(a["N"])(t.RestaurantName),1),Object(a["j"])("div",o,[Object(a["l"])(w,{name:"place",class:"text-primary"}),Object(a["j"])("span",j,Object(a["N"])(t.City),1)])])])})),128))])]),Object(a["l"])(q,null,{default:Object(a["R"])((function(){return[Object(a["l"])(y,{side:""},{default:Object(a["R"])((function(){return[Object(a["l"])(w,{name:"square",class:"text-secondary"})]})),_:1}),Object(a["l"])(y,{class:"text-h6"},{default:Object(a["R"])((function(){return[b]})),_:1})]})),_:1}),Object(a["j"])("div",d,[Object(a["j"])("div",O,[(Object(a["C"])(!0),Object(a["i"])(a["a"],null,Object(a["H"])(v.hoteldata,(function(t){return Object(a["C"])(),Object(a["i"])("div",{class:"drop-shadow column my-card col-md-2 justify-between",style:{height:"243px"},key:t.ID},[Object(a["l"])(C,{src:t.Picture.PictureUrl1,alt:t.RestaurantName,style:{height:"137px",border:"12px solid #fff"},fit:"cover"},null,8,["src","alt"]),Object(a["j"])("div",f,[Object(a["j"])("div",null,Object(a["N"])(t.HotelName),1),Object(a["j"])("div",m,[Object(a["l"])(w,{name:"place",class:"text-primary"}),Object(a["j"])("span",p,Object(a["N"])(t.City),1)])])])})),128))])])])])]})),_:1})],64)}c("99af"),c("4de4"),c("4e82"),c("fb6a");var h=c("6c2d"),g={setup:function(){var t=Object(a["F"])({}),e=Object(a["F"])({}),c=Object(a["F"])(null),n=Object(a["F"])(null),r=Object(a["p"])("axios"),l=function(){var t=(new Date).toGMTString(),e=new h["a"]("SHA-1","TEXT");e.setHMACKey("KvV_xn7i63emNGaA4EstMe4wz7c","TEXT"),e.update("x-date: ".concat(t));var c=e.getHMAC("B64"),a='hmac username="'.concat("42fc671988c54704a5a441cfed709ce5",'",algorithm="hmac-sha1", headers="x-date", signature="').concat(c,"\"'");return{Authorization:a,"X-Date":t}},s=function(){n.value=!0,r.get("https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel",{headers:l()}).then((function(t){var c=t.data.filter((function(t){return t.Picture.PictureUrl1})),a=c.sort((function(){return Math.random()-.5})),r=a.slice(0,10);e.value=r,n.value=!1}))},i=function(){r.get("https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant",{headers:l()}).then((function(e){console.log(e);var c=e.data.filter((function(t){return t.Picture.PictureUrl1})),a=c.sort((function(){return Math.random()-.5})),n=a.slice(0,10);t.value=n}))};return Object(a["z"])((function(){s(),i()})),{hoteldata:e,fooddata:t,category:c,isLoading:n}}},x=c("d959"),w=c.n(x),y=c("09e3"),q=c("66e5"),C=c("4074"),R=c("0016"),N=c("068f"),P=c("93dc"),T=c.n(P);const J=w()(g,[["render",v]]);e["default"]=J;T()(g,"components",{QPageContainer:y["a"],QItem:q["a"],QItemSection:C["a"],QIcon:R["a"],QImg:N["a"]})}}]);
//# sourceMappingURL=chunk-2d0be09f.b55fca23.js.map