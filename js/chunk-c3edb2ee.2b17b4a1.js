(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c3edb2ee"],{"254b":function(e,t,a){},7512:function(e,t,a){"use strict";a("254b")},"810e":function(e,t,a){"use strict";a.r(t);var n=a("7a23"),o={key:0,class:"container",style:{width:"800px","max-width":"100%"}},l={key:1,class:"container",style:{width:"800px","max-width":"100%"}},c={class:"q-pa-md text-right text-primary"},i={class:"row"},r={class:"q-px-md"},u=Object(n["j"])("div",{class:"row q-pa-md justify-center"}," Taiwan Tourguide © Code: Michael / Design: KT ",-1);function s(e,t,a,s,b,v){var d=Object(n["J"])("TrafficSelect"),f=Object(n["J"])("q-btn"),p=Object(n["J"])("q-page-container");return Object(n["C"])(),Object(n["i"])(n["a"],null,[Object(n["l"])(d),Object(n["l"])(p,null,{default:Object(n["R"])((function(){return[0===s.stopData.length?(Object(n["C"])(),Object(n["i"])("div",o,"無資料")):(Object(n["C"])(),Object(n["i"])("div",l,[Object(n["j"])("div",c,Object(n["N"])(s.timer)+" 秒後自動更新",1),Object(n["j"])("div",i,[(Object(n["C"])(!0),Object(n["i"])(n["a"],null,Object(n["H"])(s.stopData,(function(e){return Object(n["C"])(),Object(n["i"])("div",{class:"col-md-6 q-pa-md text-no-wrap",key:e.StopUID},["進站中"===e.timeText?(Object(n["C"])(),Object(n["g"])(f,{key:0,color:"primary",class:"btn-fixed-width",label:e.timeText},null,8,["label"])):e.timeText?(Object(n["C"])(),Object(n["g"])(f,{key:1,class:"btn-fixed-width",outline:"",label:e.timeText},null,8,["label"])):(Object(n["C"])(),Object(n["g"])(f,{key:2,outline:"",class:"btn-fixed-width",label:"--"})),Object(n["j"])("span",r,Object(n["N"])(e.StopName.Zh_tw),1)])})),128))])])),u]})),_:1})],64)}a("159b"),a("d81d");var b=function(e){return{all:e=e||new Map,on:function(t,a){var n=e.get(t);n?n.push(a):e.set(t,[a])},off:function(t,a){var n=e.get(t);n&&(a?n.splice(n.indexOf(a)>>>0,1):e.set(t,[]))},emit:function(t,a){var n=e.get(t);n&&n.slice().map((function(e){e(a)})),(n=e.get("*"))&&n.slice().map((function(e){e(t,a)}))}}},v=b(),d=v,f={class:"q-pb-none q-mb-none q-gutter-md drop-shadow"},p={class:"q-px-md q-pt-md q-pb-none q-mb-none"},h={class:"q-gutter-md row justify-center"},m={class:"q-px-md q-pt-md q-pb-none"},j={class:"q-gutter-y-md q-mx-auto",style:{"max-width":"600px"}},O={class:""},g=Object(n["k"])("往 "),C={class:"text-primary"},w={class:""},y=Object(n["k"])("往 "),T={class:"text-primary"};function q(e,t,a,o,l,c){var i=Object(n["J"])("Loading"),r=Object(n["J"])("q-select"),u=Object(n["J"])("q-btn"),s=Object(n["J"])("q-tab"),b=Object(n["J"])("q-tabs");return Object(n["C"])(),Object(n["i"])(n["a"],null,[Object(n["l"])(i,{active:o.isLoading},null,8,["active"]),Object(n["j"])("div",f,[Object(n["j"])("div",p,[Object(n["j"])("div",h,[Object(n["l"])(r,{"bg-color":"white",standout:"bg-white",outlined:"",modelValue:o.selectCity,"onUpdate:modelValue":[t[0]||(t[0]=function(e){return o.selectCity=e}),t[1]||(t[1]=function(e){return o.getLocalData()})],class:"col-md-3",options:o.cityData,label:"選擇縣市","emit-value":"","map-options":""},null,8,["modelValue","options"]),Object(n["l"])(r,{"bg-color":"white",standout:"bg-white",outlined:"",modelValue:o.selectRoute,"onUpdate:modelValue":t[3]||(t[3]=function(e){return o.selectRoute=e}),class:"col-md-3",options:o.routeData,label:"選擇路線"},{after:Object(n["R"])((function(){return[Object(n["l"])(u,{padding:"md",color:"primary",icon:"search",onClick:t[2]||(t[2]=Object(n["T"])((function(e){return o.getRoute()}),["prevent"]))})]})),_:1},8,["modelValue","options"])]),Object(n["j"])("div",m,[Object(n["j"])("div",j,[Object(n["l"])(b,{modelValue:o.tab,"onUpdate:modelValue":t[4]||(t[4]=function(e){return o.tab=e}),"no-caps":"","indicator-color":"primary",align:"justify",onClick:t[5]||(t[5]=Object(n["T"])((function(e){return o.getTab()}),["stop"]))},{default:Object(n["R"])((function(){return[Object(n["l"])(s,{name:"go"},{default:Object(n["R"])((function(){return[Object(n["j"])("span",O,[g,Object(n["j"])("span",C,Object(n["N"])(o.direction.go),1)])]})),_:1}),Object(n["l"])(s,{name:"back"},{default:Object(n["R"])((function(){return[Object(n["j"])("span",w,[y,Object(n["j"])("span",T,Object(n["N"])(o.direction.back),1)])]})),_:1})]})),_:1},8,["modelValue"])])])])])],64)}var _=a("2909"),x=(a("99af"),a("d3b7"),a("6062"),a("3ca3"),a("ddb0"),a("b0c0"),a("4e82"),a("4de4"),a("6c2d")),k={name:"LayoutDefault",setup:function(){var e=Object(n["p"])("axios"),t=Object(n["F"])("Taipei"),a=Object(n["F"])(null),o=Object(n["F"])([]),l=Object(n["F"])(null),c=Object(n["F"])(""),i=Object(n["F"])({}),r=Object(n["F"])({}),u=Object(n["F"])(null),s=[{label:"臺北市",value:"Taipei"},{label:"新北市",value:"NewTaipei"},{label:"桃園市",value:"Taoyuan"},{label:"臺中市",value:"Taichung"},{label:"臺南市",value:"Tainan"},{label:"高雄市",value:"Kaohsiung"},{label:"基隆市",value:"Keelung"},{label:"新竹市",value:"Hsinchu"},{label:"新竹縣",value:"HsinchuCounty"},{label:"苗栗縣",value:"MiaoliCounty"},{label:"彰化縣",value:"ChanghuaCounty"},{label:"南投縣",value:"NantouCounty"},{label:"雲林縣",value:"YunlinCounty"},{label:"嘉義縣",value:"ChiayiCounty"},{label:"嘉義市",value:"Chiayi"},{label:"屏東縣",value:"PingtungCounty"},{label:"宜蘭縣",value:"YilanCounty"},{label:"花蓮縣",value:"HualienCounty"},{label:"臺東縣",value:"TaitungCounty"},{label:"金門縣",value:"KinmenCounty"},{label:"澎湖縣",value:"PenghuCounty"},{label:"連江縣",value:"LienchiangCounty"}],b=function(){var e=(new Date).toGMTString(),t=new x["a"]("SHA-1","TEXT");t.setHMACKey("KvV_xn7i63emNGaA4EstMe4wz7c","TEXT"),t.update("x-date: ".concat(e));var a=t.getHMAC("B64"),n='hmac username="'.concat("42fc671988c54704a5a441cfed709ce5",'",algorithm="hmac-sha1", headers="x-date", signature="').concat(a,"\"'");return{Authorization:n,"X-Date":e}},v=function(){u.value=!0,e.get("https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/".concat(t.value),{headers:b()}).then((function(e){l.value=[],a.value="",i.value={},d.emit("direction",{});var t=e.data,n=[];t.forEach((function(e){n.push({id:e.RouteID,name:e.RouteName.Zh_tw})}));var c=new Set(n.map((function(e){return JSON.stringify(e)}))),r=Object(_["a"])(c);o.value=r.map((function(e){return JSON.parse(e)}));var s=[];o.value.forEach((function(e){s.push(e.name)})),l.value=s.sort(),u.value=!1}))},f=function(){e.get("https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/".concat(t.value,"/").concat(a.value),{headers:b()}).then((function(e){var t=[],n={},o=[],l=[];e.data.forEach((function(e){e.RouteName.Zh_tw===a.value&&0===e.StopStatus&&t.push(e)})),console.log("temp",t),n.go=t.filter((function(e){return e.Direction})),n.back=t.filter((function(e){return!e.Direction})),n.go.forEach((function(e){o.push({plateNumb:e.PlateNumb||"",stops:[{estimateTime:e.EstimateTime,stopUID:e.StopUID}]})})),r.value={},n.back.forEach((function(e){l.push({plateNumb:e.PlateNumb||"",stops:[{estimateTime:e.EstimateTime,stopUID:e.StopUID}]})})),r.value={goData:o,backData:l},d.emit("runBus",r.value)}))},p=function(){e.get("https://ptx.transportdata.tw/MOTC/v2/Bus/StopOfRoute/City/".concat(t.value,"/").concat(a.value,"\n        "),{headers:b()}).then((function(e){e.data.forEach((function(e){e.RouteName.Zh_tw===a.value&&(0===e.Direction?i.value.back_direction=e.Stops:i.value.go_direction=e.Stops)})),d.emit("direction",i.value),c.value="go",f(),d.emit("tab","go")}))},h=function(){e.get("https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/".concat(t.value,"/").concat(a.value,"\n        "),{headers:b()}).then((function(e){var t=e.data.filter((function(e){return e.RouteName.Zh_tw===a.value}));i.value.go=t[0].DepartureStopNameZh,i.value.back=t[0].DestinationStopNameZh,p()}))},m=function(){d.emit("tab",c.value),f()};return Object(n["z"])((function(){v()})),Object(n["Q"])(a,(function(e){""!==e&&d.on("reStart",(function(e){e&&m()}))})),{Route:o,selectCity:t,selectRoute:a,cityData:s,getLocalData:v,getRoute:h,routeData:l,tab:c,direction:i,getTab:m,upateRoute:f,runBus:r,isLoading:u}}},S=a("d959"),R=a.n(S),B=a("ddd8"),D=a("9c40"),M=a("b85c"),I=(a("a9e3"),a("caad"),a("7db0"),a("a434"),a("0016")),L=a("3980"),N=a("e292"),P=a("382e"),F=a("d882"),Q=a("cdf5"),E=a("e22d"),V=a("1b3e");function A(e,t,a){var n=!0===a?["left","right"]:["top","bottom"];return"absolute-".concat(!0===t?n[0]:n[1]).concat(e?" text-".concat(e):"")}var U=["left","center","right","justify"],J=function(){},H=Object(n["m"])({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:function(e){return U.includes(e)}},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":Function},setup:function(e,t){var a,o,l,c=t.slots,i=t.emit,r=Object(n["n"])(),u=r.proxy.$q,s=Object(N["a"])(),b=s.registerTick,v=s.prepareTick,d=Object(P["a"])(),f=d.registerTimeout,p=Object(n["F"])(null),h=Object(n["F"])(null),m=Object(n["F"])(e.modelValue),j=Object(n["F"])(!1),O=Object(n["F"])(!0),g=Object(n["F"])(!1),C=Object(n["F"])(!1),w=Object(n["e"])((function(){return!0===u.platform.is.desktop||!0===e.mobileArrows})),y=[],T=!1,q=!0===w.value?K:F["f"],_=Object(n["e"])((function(){return{activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:A(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps}})),x=Object(n["e"])((function(){var t=!0===j.value?"left":!0===C.value?"justify":e.align;return"q-tabs__content--align-".concat(t)})),k=Object(n["e"])((function(){return"q-tabs row no-wrap items-center"+" q-tabs--".concat(!0===j.value?"":"not-","scrollable")+" q-tabs--".concat(!0===e.vertical?"vertical":"horizontal")+" q-tabs__arrows--".concat(!0===w.value&&!0===e.outsideArrows?"outside":"inside")+(!0===e.dense?" q-tabs--dense":"")+(!0===e.shrink?" col-shrink":"")+(!0===e.stretch?" self-stretch":"")})),S=Object(n["e"])((function(){return"q-tabs__content row no-wrap items-center self-stretch hide-scrollbar "+x.value+(void 0!==e.contentClass?" ".concat(e.contentClass):"")+(!0===u.platform.is.mobile?" scroll":"")})),R=Object(n["e"])((function(){return!0===e.vertical?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}})),B=Object(n["e"])((function(){return!0!==e.vertical&&!0===u.lang.rtl})),D=Object(n["e"])((function(){return!1===V["a"]&&!0===B.value}));function U(t){var a=t.name,n=t.setCurrent,o=t.skipEmit,l=t.fromRoute;m.value!==a&&(!0!==o&&i("update:modelValue",a),!0!==n&&void 0!==e["onUpdate:modelValue"]||(z(m.value,a),m.value=a)),void 0!==l&&(T=l)}function H(){b((function(){!0!==r.isDeactivated&&!0!==r.isUnmounted&&W({width:p.value.offsetWidth,height:p.value.offsetHeight})})),v()}function W(t){if(void 0!==R.value&&null!==h.value){var a=t[R.value.container],o=Math.min(h.value[R.value.scroll],Array.prototype.reduce.call(h.value.children,(function(e,t){return e+t[R.value.content]}),0)),l=a>0&&o>a;j.value!==l&&(j.value=l),!0===l&&Object(n["r"])(q);var c=a<parseInt(e.breakpoint,10);C.value!==c&&(C.value=c)}}function z(t,o){var l=void 0!==t&&null!==t&&""!==t?y.find((function(e){return e.name.value===t})):null,c=void 0!==o&&null!==o&&""!==o?y.find((function(e){return e.name.value===o})):null;if(l&&c){var i=l.tabIndicatorRef.value,r=c.tabIndicatorRef.value;clearTimeout(a),i.style.transition="none",i.style.transform="none",r.style.transition="none",r.style.transform="none";var u=i.getBoundingClientRect(),s=r.getBoundingClientRect();r.style.transform=!0===e.vertical?"translate3d(0,".concat(u.top-s.top,"px,0) scale3d(1,").concat(s.height?u.height/s.height:1,",1)"):"translate3d(".concat(u.left-s.left,"px,0,0) scale3d(").concat(s.width?u.width/s.width:1,",1,1)"),Object(n["r"])((function(){a=setTimeout((function(){r.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",r.style.transform="none"}),70)}))}if(c&&!0===j.value){var b=h.value.getBoundingClientRect(),v=b.left,d=b.width,f=b.top,p=b.height,m=c.rootRef.value.getBoundingClientRect(),O=!0===e.vertical?m.top-f:m.left-v;if(O<0)return h.value[!0===e.vertical?"scrollTop":"scrollLeft"]+=Math.floor(O),void q();O+=!0===e.vertical?m.height-p:m.width-d,O>0&&(h.value[!0===e.vertical?"scrollTop":"scrollLeft"]+=Math.ceil(O),q())}}function K(){var t=h.value;if(null!==t){var a=t.getBoundingClientRect(),n=!0===e.vertical?t.scrollTop:Math.abs(t.scrollLeft);!0===B.value?(O.value=Math.ceil(n+a.width)<t.scrollWidth-1,g.value=n>0):(O.value=n>0,g.value=!0===e.vertical?Math.ceil(n+a.height)<t.scrollHeight:Math.ceil(n+a.width)<t.scrollWidth)}}function Z(e){G(),ee(e),o=setInterval((function(){!0===ee(e)&&G()}),5)}function $(){Z(!0===D.value?9999:0)}function X(){Z(!0===D.value?0:9999)}function G(){clearInterval(o)}Object(n["Q"])(B,q),Object(n["Q"])((function(){return e.modelValue}),(function(e){U({name:e,setCurrent:!0,skipEmit:!0})})),Object(n["Q"])((function(){return e.outsideArrows}),(function(){Object(n["r"])(H())})),Object(n["Q"])(w,(function(e){q=!0===e?K:F["f"],Object(n["r"])(H())}));var Y=Object(n["e"])((function(){return!0===D.value?{get:function(e){return Math.abs(e.scrollLeft)},set:function(e,t){e.scrollLeft=-t}}:!0===e.vertical?{get:function(e){return e.scrollTop},set:function(e,t){e.scrollTop=t}}:{get:function(e){return e.scrollLeft},set:function(e,t){e.scrollLeft=t}}}));function ee(e){var t=h.value,a=Y.value,n=a.get,o=a.set,l=!1,c=n(t),i=e<c?-1:1;return c+=5*i,c<0?(l=!0,c=0):(-1===i&&c<=e||1===i&&c>=e)&&(l=!0,c=e),o(t,c),q(),l}function te(){return y.filter((function(e){return void 0!==e.routerProps&&!0===e.routerProps.hasLink.value}))}function ae(){var e,t=null,a=T,n={matchedLen:0,hrefLen:0,exact:!1,found:!1},o=r.proxy.$route.hash,l=m.value,c=!0===a?J:function(e){l===e.name.value&&(a=!0,c=J)},i=te(),u=Object(M["a"])(i);try{for(u.s();!(e=u.n()).done;){var s=e.value,b=!0===s.routerProps.exact.value;if(!0!==s.routerProps[!0===b?"linkIsExactActive":"linkIsActive"].value||!0===n.exact&&!0!==b)c(s);else{var v=s.routerProps.linkRoute.value,d=v.hash;if(!0===b){if(o===d){t=s.name.value;break}if(""!==o&&""!==d){c(s);continue}}var f=v.matched.length,p=v.href.length-d.length;(f===n.matchedLen?p>n.hrefLen:f>n.matchedLen)?(t=s.name.value,Object.assign(n,{matchedLen:f,hrefLen:p,exact:b})):c(s)}}}catch(h){u.e(h)}finally{u.f()}!0!==a&&null===t||U({name:t,setCurrent:!0,fromRoute:!0})}function ne(){!0!==ce.avoidRouteWatcher&&f(ae)}function oe(e){y.push(e);var t=te();t.length>0&&(void 0===l&&(l=Object(n["Q"])((function(){return r.proxy.$route}),ne)),ne())}function le(e){if(y.splice(y.indexOf(e),1),void 0!==l){var t=te();0===t.length&&(l(),l=void 0),ne()}}var ce={currentModel:m,tabProps:_,registerTab:oe,unregisterTab:le,verifyRouteModel:ne,updateModel:U,recalculateScroll:H,avoidRouteWatcher:!1};return Object(n["D"])(E["e"],ce),Object(n["w"])((function(){clearTimeout(a),void 0!==l&&l()})),Object(n["u"])(H),function(){var t=[Object(n["o"])(L["a"],{onResize:W}),Object(n["o"])("div",{ref:h,class:S.value,onScroll:q},Object(Q["d"])(c.default))];return!0===w.value&&t.push(Object(n["o"])(I["a"],{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(!0===O.value?"":" q-tabs__arrow--faded"),name:e.leftIcon||u.iconSet.tabs[!0===e.vertical?"up":"left"],onMousedown:$,onTouchstartPassive:$,onMouseup:G,onMouseleave:G,onTouchend:G}),Object(n["o"])(I["a"],{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(!0===g.value?"":" q-tabs__arrow--faded"),name:e.rightIcon||u.iconSet.tabs[!0===e.vertical?"down":"right"],onMousedown:X,onTouchstartPassive:X,onMouseup:G,onMouseleave:G,onTouchend:G})),Object(n["o"])("div",{ref:p,class:k.value,role:"tablist"},t)}}}),W=a("5530"),z=a("714f"),K=a("dc8a"),Z=0,$=["click","keyup"],X={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:function(){return"t_".concat(Z++)}},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}},G=function(e,t,a,o){var l=Object(n["p"])(E["e"],(function(){console.error("QTab/QRouteTab component needs to be child of QTabs")})),c=Object(n["F"])(null),i=Object(n["F"])(null),r=Object(n["F"])(null),u=Object(n["e"])((function(){return!0!==e.disable&&e.ripple})),s=Object(n["e"])((function(){return l.currentModel.value===e.name})),b=Object(n["e"])((function(){return"q-tab relative-position self-stretch flex flex-center text-center"+(!0===s.value?" q-tab--active"+(l.tabProps.value.activeClass?" "+l.tabProps.value.activeClass:"")+(l.tabProps.value.activeColor?" text-".concat(l.tabProps.value.activeColor):"")+(l.tabProps.value.activeBgColor?" bg-".concat(l.tabProps.value.activeBgColor):""):" q-tab--inactive")+(e.icon&&e.label&&!1===l.tabProps.value.inlineLabel?" q-tab--full":"")+(!0===e.noCaps||!0===l.tabProps.value.noCaps?" q-tab--no-caps":"")+(!0===e.disable?" disabled":" q-focusable q-hoverable cursor-pointer")+(void 0!==o&&""!==o.linkClass.value?" ".concat(o.linkClass.value):"")})),v=Object(n["e"])((function(){return"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(!0===l.tabProps.value.inlineLabel?"row no-wrap q-tab__content--inline":"column")+(void 0!==e.contentClass?" ".concat(e.contentClass):"")})),d=Object(n["e"])((function(){return!0===e.disable||!0===s.value?-1:e.tabindex||0}));function f(t,n){if(!0!==n&&null!==c.value&&c.value.focus(),!0!==e.disable){var i;if(void 0!==o){if(!0!==o.hasLink.value)return void a("click",t);i=function(){t.__qNavigate=!0,l.avoidRouteWatcher=!0;var a=o.navigateToLink(t);!1===a?l.avoidRouteWatcher=!1:a.then((function(){l.avoidRouteWatcher=!1,l.updateModel({name:e.name,fromRoute:!0})}))}}else i=function(){l.updateModel({name:e.name,fromRoute:!1})};a("click",t,i),!0!==t.defaultPrevented&&i()}}function p(e){!0===Object(K["a"])(e,13)&&f(e,!0),a("keyup",e)}function h(){var a=l.tabProps.value.narrowIndicator,o=[],i=Object(n["o"])("div",{ref:r,class:["q-tab__indicator",l.tabProps.value.indicatorClass]});void 0!==e.icon&&o.push(Object(n["o"])(I["a"],{class:"q-tab__icon",name:e.icon})),void 0!==e.label&&o.push(Object(n["o"])("div",{class:"q-tab__label"},e.label)),!1!==e.alert&&o.push(void 0!==e.alertIcon?Object(n["o"])(I["a"],{class:"q-tab__alert-icon",color:!0!==e.alert?e.alert:void 0,name:e.alertIcon}):Object(n["o"])("div",{class:"q-tab__alert"+(!0!==e.alert?" text-".concat(e.alert):"")})),!0===a&&o.push(i);var u=[Object(n["o"])("div",{class:"q-focus-helper",tabindex:-1,ref:c}),Object(n["o"])("div",{class:v.value},Object(Q["b"])(t.default,o))];return!1===a&&u.push(i),u}var m={name:Object(n["e"])((function(){return e.name})),rootRef:i,tabIndicatorRef:r,routerProps:o};function j(t,a){var o=Object(W["a"])({ref:i,class:b.value,tabindex:d.value,role:"tab","aria-selected":s.value,"aria-disabled":!0===e.disable?"true":void 0,onClick:f,onKeyup:p},a);return Object(n["S"])(Object(n["o"])(t,o,h()),[[z["a"],u.value]])}return Object(n["w"])((function(){l.unregisterTab(m),l.recalculateScroll()})),Object(n["z"])((function(){l.registerTab(m),l.recalculateScroll()})),{renderTab:j,$tabs:l}},Y=Object(n["m"])({name:"QTab",props:X,emits:$,setup:function(e,t){var a=t.slots,n=t.emit,o=G(e,a,n),l=o.renderTab;return function(){return l("div")}}}),ee=a("93dc"),te=a.n(ee);const ae=R()(k,[["render",q]]);var ne=ae;te()(k,"components",{QSelect:B["a"],QBtn:D["a"],QTabs:H,QTab:Y});var oe={components:{TrafficSelect:ne},setup:function(){var e=Object(n["F"])({}),t=Object(n["F"])(""),a=Object(n["F"])({}),o=Object(n["F"])({}),l=Object(n["F"])(60),c=Object(n["F"])(""),i=function(){"go"===t.value?e.value.go_direction?a.value=e.value.go_direction:a.value=[]:"back"===t.value&&(e.value.back_direction?a.value=e.value.back_direction:a.value=[])},r=function(){var e=0,n=[];n="go"===t.value?o.value.goData:o.value.backData,n.forEach((function(t){a.value.map((function(a){return t.stops[0].stopUID===a.StopUID&&(e=Math.floor(t.stops[0].estimateTime/60),a.timeText=0===e?"進站中":"".concat(e," 分鐘")),a}))}))},u=function(){l.value=60,c.value=setInterval((function(){return 0===l.value&&(l.value=60,d.emit("reStart",!0)),l.value-=1,l.value}),1e3)};return d.on("direction",(function(t){a.value={},e.value=t})),d.on("tab",(function(e){t.value=e,i()})),d.on("runBus",(function(e){o.value=e,r()})),Object(n["Q"])(t,(function(e,t){e!==t&&(clearInterval(c.value),u())})),{stop:e,tab:t,stopData:a,filterData:i,runBusData:o,Count:u,timer:l,id:c}}},le=(a("7512"),a("09e3"));const ce=R()(oe,[["render",s]]);t["default"]=ce;te()(oe,"components",{QPageContainer:le["a"],QBtn:D["a"]})}}]);
//# sourceMappingURL=chunk-c3edb2ee.2b17b4a1.js.map