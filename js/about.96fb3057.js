(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{eeac:function(t,e,c){"use strict";c.r(e);var a=c("7a23"),n={class:"row container"},r={class:"q-pa-md col-md-12 q-gutter-md"},l={key:0,class:"q-pa-md row items-start q-gutter-md"},i=["src"],s={class:"ellipsis-2-lines"},u={class:"text-subtitle2"},o={class:"text-accent"},b={key:1,class:"q-pa-md row justify-start items-start q-gutter-md"},j=["src"],d={class:"ellipsis-2-lines"},O={class:"text-subtitle2"},f={class:"text-accent"},m=Object(a["j"])("div",{class:"row q-pa-md justify-center"}," Taiwan Tourguide © Code: Michael / Design: KT ",-1);function p(t,e,c,p,v,g){var y=Object(a["J"])("Loading"),h=Object(a["J"])("Headerbaner"),C=Object(a["J"])("q-icon"),x=Object(a["J"])("q-item-section"),w=Object(a["J"])("q-item"),q=Object(a["J"])("q-card-section"),N=Object(a["J"])("q-card"),R=Object(a["J"])("q-page-container");return Object(a["C"])(),Object(a["i"])(a["a"],null,[Object(a["l"])(y,{active:p.isLoading},null,8,["active"]),Object(a["l"])(h),Object(a["l"])(R,null,{default:Object(a["R"])((function(){return[Object(a["j"])("div",n,[Object(a["j"])("div",r,[Object(a["l"])(w,null,{default:Object(a["R"])((function(){return[Object(a["l"])(x,{side:""},{default:Object(a["R"])((function(){return[Object(a["l"])(C,{name:"square",class:Object(a["s"])(p.categoryColor)},null,8,["class"])]})),_:1}),Object(a["l"])(x,{class:"text-h6"},{default:Object(a["R"])((function(){return[Object(a["k"])(Object(a["N"])(p.category),1)]})),_:1})]})),_:1})]),p.resultdata.length<5?(Object(a["C"])(),Object(a["i"])("div",l,[(Object(a["C"])(!0),Object(a["i"])(a["a"],null,Object(a["H"])(p.resultdata,(function(t){return Object(a["C"])(),Object(a["g"])(N,{class:"my-card drop-shadow col",key:t.ID},{default:Object(a["R"])((function(){return[Object(a["j"])("img",{src:t.Picture.PictureUrl1,style:{height:"200px","object-fit":"cover",border:"12px solid #fff"}},null,8,i),Object(a["l"])(q,null,{default:Object(a["R"])((function(){return[Object(a["j"])("div",s,Object(a["N"])(t.HotelName||t.RestaurantName||t.ActivityName),1),Object(a["j"])("div",u,[Object(a["l"])(C,{name:"place",class:"text-primary"}),Object(a["j"])("span",o,Object(a["N"])(t.City),1)])]})),_:2},1024)]})),_:2},1024)})),128))])):(Object(a["C"])(),Object(a["i"])("div",b,[(Object(a["C"])(!0),Object(a["i"])(a["a"],null,Object(a["H"])(p.resultdata,(function(t){return Object(a["C"])(),Object(a["g"])(N,{class:"my-card drop-shadow col-md-2",style:{height:"243px"},key:t.ID},{default:Object(a["R"])((function(){return[Object(a["j"])("img",{src:t.Picture.PictureUrl1,style:{height:"137px","object-fit":"cover",border:"12px solid #fff"}},null,8,j),Object(a["l"])(q,null,{default:Object(a["R"])((function(){return[Object(a["j"])("div",d,Object(a["N"])(t.HotelName||t.RestaurantName||t.ActivityName),1),Object(a["j"])("div",O,[Object(a["l"])(C,{name:"place",class:"text-primary"}),Object(a["j"])("span",f,Object(a["N"])(t.City),1)])]})),_:2},1024)]})),_:2},1024)})),128))]))]),m]})),_:1})],64)}c("99af"),c("4de4"),c("4e82"),c("fb6a");var v=c("6c2d"),g=c("6c02"),y=c("ddef"),h={components:{Headerbaner:y["a"]},setup:function(){var t=Object(g["c"])(),e=Object(a["F"])(null),c=Object(a["F"])(null),n=Object(a["F"])({}),r=Object(a["F"])(null),l=Object(a["F"])(null),i=Object(a["F"])(null),s=Object(a["p"])("axios"),u=function(){var t=(new Date).toGMTString(),e=new v["a"]("SHA-1","TEXT");e.setHMACKey("KvV_xn7i63emNGaA4EstMe4wz7c","TEXT"),e.update("x-date: ".concat(t));var c=e.getHMAC("B64"),a='hmac username="'.concat("42fc671988c54704a5a441cfed709ce5",'",algorithm="hmac-sha1", headers="x-date", signature="').concat(c,"\"'");return{Authorization:a,"X-Date":t}},o=function(){i.value=!0,s.get("https://ptx.transportdata.tw/MOTC/v2/Tourism/".concat(t.params.item,"/").concat(t.params.city),{headers:u()}).then((function(e){switch(t.params.item){case"Restaurant":r.value="餐飲",l.value="text-accent";break;case"Hotel":r.value="住宿",l.value="text-secondary";break;case"Activity":r.value="活動",l.value="text-primary";break;default:r.value="",l.value=""}var c=e.data.filter((function(t){return t.Picture.PictureUrl1})),a=c.sort((function(){return Math.random()-.5})),s=a.slice(0,10);n.value=s,i.value=!1}))};return Object(a["Q"])(t,(function(){o()})),Object(a["z"])((function(){o()})),{getCategoryCountry:o,selectCategory:e,selectLocation:c,resultdata:n,category:r,categoryColor:l,isLoading:i}}},C=c("d959"),x=c.n(C),w=c("09e3"),q=c("66e5"),N=c("4074"),R=c("0016"),k=c("f09f"),H=c("a370"),J=c("93dc"),T=c.n(J);const _=x()(h,[["render",p]]);e["default"]=_;T()(h,"components",{QPageContainer:w["a"],QItem:q["a"],QItemSection:N["a"],QIcon:R["a"],QCard:k["a"],QCardSection:H["a"]})}}]);
//# sourceMappingURL=about.96fb3057.js.map