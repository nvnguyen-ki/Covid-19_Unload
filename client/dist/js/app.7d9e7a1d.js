(function(t){function e(e){for(var s,i,o=e[0],c=e[1],l=e[2],u=0,p=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},r=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"2c61":function(t,e,a){},4269:function(t,e,a){},"45e3":function(t,e,a){},"47fd":function(t,e,a){"use strict";var s=a("4269"),n=a.n(s);n.a},"54e0":function(t,e,a){"use strict";var s=a("2c61"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("link",{attrs:{href:"https://emoji-css.afeld.me/emoji.css",rel:"stylesheet"}}),a("link",{attrs:{href:"https://fonts.googleapis.com/css2?family=Inconsolata&display=swap",rel:"stylesheet"}}),a("link",{attrs:{href:"https://fonts.googleapis.com/css2?family=Montserrat+Subrayada&display=swap",rel:"stylesheet"}}),a("link",{attrs:{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",integrity:"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",crossorigin:"anonymous"}}),a("router-view")],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[t._m(0),a("h5",[a("router-link",{attrs:{to:"/search"}},[t._v("Search U.S.A "),a("i",{staticClass:"em em-mag_right",attrs:{"aria-role":"presentation","aria-label":"RIGHT-POINTING MAGNIFYING GLASS"}})])],1),t._m(1)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h5",[a("a",{attrs:{href:"/"}},[t._v("CoVID19 UnloaD "),a("i",{staticClass:"em em-mask",attrs:{"aria-role":"presentation","aria-label":"FACE WITH MEDICAL MASK"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"github-b"},[s("a",{attrs:{href:"https://github.com/nvnguyen-ki/Covid-19_Unload",target:"_blank"}},[t._v(" github "),s("img",{attrs:{src:a("fd4f"),width:"28",alt:"Github"}})])])}],c={name:"PageHeader"},l=c,d=(a("47fd"),a("0c7c")),u=Object(d["a"])(l,i,o,!1,null,"2371e9c2",null),p=u.exports,h={name:"App",components:{Header:p}},f=h,m=(a("54e0"),Object(d["a"])(f,n,r,!1,null,"31d2bb27",null)),v=m.exports,_=a("8c4f"),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page",staticStyle:{"margin-top":"20px"}},[a("static-data",{attrs:{id:"components"}})],1)},b=[],g=a("8a5d"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page",staticStyle:{"text-align":"justify"}},[a("h5",{attrs:{id:"lastUpdated"}},[t._v(" "+t._s(t.lastUpdated))]),a("div",{staticClass:"worldData",attrs:{"data-aos":"fade-down"}},[t._m(0),t._m(1),a("h5",{attrs:{id:"data"}},[a("span",{attrs:{id:"numbers"}},[t._v(t._s(t.TotalWorld)+" ")]),t._v(" "),t._m(2)]),a("h5",{attrs:{id:"data"}},[a("span",{attrs:{id:"numbers"}},[t._v(t._s(t.TotalDeath)+" ")]),t._v(" "),t._m(3)])]),a("div",{staticClass:"usaData",attrs:{"data-aos":"fade-down"}},[t._m(4),t._m(5),a("h5",{attrs:{id:"data"}},[a("span",{attrs:{id:"numbers"}},[t._v(t._s(t.UsaTotal)+" ")]),t._v(" "),t._m(6)]),a("h5",{attrs:{id:"data"}},[a("span",{attrs:{id:"numbers"}},[t._v(t._s(t.UsaDeath)+" ")]),t._v(" "),t._m(7)])])])},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",[t._v("/01/ "),a("span",{},[t._v(" Latest World updates "),a("i",{staticClass:"em em-earth_americas",attrs:{"aria-role":"presentation","aria-label":"EARTH GLOBE AMERICAS"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"CountryUpdates",attrs:{"data-aos":"fade-down"}},[a("span",{attrs:{id:"newCountryUpdates","data-aos":"fade-down"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{attrs:{id:"sub"}},[a("br"),t._v(" total cases around the World ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{attrs:{id:"sub"}},[a("br"),t._v(" total deaths around the World ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",[t._v("/02/ "),a("span",{},[t._v("Latest U.S updates "),a("i",{staticClass:"em em-flag-um",attrs:{"aria-role":"presentation","aria-label":"U.S. Outlying Islands Flag"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dailyUpdates",attrs:{"data-aos":"fade-down"}},[a("span",{attrs:{id:"newUpdate","data-aos":"fade-down"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{attrs:{id:"sub"}},[a("br"),t._v(" total cases in U.S ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{attrs:{id:"sub"}},[a("br"),t._v(" total deaths in U.S ")])}],D=a("bc3a"),U=a.n(D),I=()=>U.a.create({baseURL:"https://covid-19-unload.herokuapp.com/"}),E={scrape(t){return I().post("scrape",t)},searchData(t,e){return I().post("searchData",t,e)},WorldData(){return I().post("WorldData")},LatestUpdate(){return I().post("LatestUpdate")},countriesDaily(){return I().post("countriesDaily")}},x=["","k","M","G","T","P","E"],S={AbbreviateNum(t){var e=Math.log10(t)/3|0;if(0===e)return t;var a=x[e],s=Math.pow(10,3*e),n=t/s;return n.toFixed(1)+a},dateToHowManyAgo(t){var e=new Date,a=e.getTime()-new Date(t).getTime(),s=a/1e3;if(s<60)return parseInt(s)+" second"+(parseInt(s)>1?"s":"")+" ago";var n=s/60;if(n<60)return parseInt(n)+" minute"+(parseInt(n)>1?"s":"")+" ago";var r=n/60;if(r<24)return parseInt(r)+" hour"+(parseInt(r)>1?"s":"")+" ago";var i=r/24;if(i<30)return parseInt(i)+" day"+(parseInt(i)>1?"s":"")+" ago";var o=i/30;if(o<12)return parseInt(o)+" month"+(parseInt(o)>1?"s":"")+" ago";var c=o/12;return parseInt(c)+" year"+(parseInt(c)>1?"s":"")+" ago"}},T={mounted(){this.WorldData(),this.LatestUpdate(),this.countriesDaily(),this.interval=setInterval(()=>this.LatestUpdate(),28e4),this.interval=setInterval(()=>this.countriesDaily(),108e4)},data(){return{error:null,TotalWorld:"",TotalDeath:"",UsaTotal:"",UsaDeath:"",lastUpdated:"",latest:{date:"",newCases:"",state:"",text:"",timeSince:""}}},methods:{async WorldData(){const t=await E.WorldData();this.UsaTotal=S.AbbreviateNum(t.data[0].usaConfirmed),this.UsaDeath=S.AbbreviateNum(t.data[0].usaDeaths),this.TotalWorld=S.AbbreviateNum(t.data[0].total_in_world),this.TotalDeath=S.AbbreviateNum(t.data[0].total_death_in_world),this.lastUpdated=S.dateToHowManyAgo(t.data[0].lastUpdate)},async LatestUpdate(){const t=await E.LatestUpdate();var e=0;for(e=0;e<t.data.length;e++){this.latest.date=t.data[e].lastUpdateEt;const a=t.data[e].positiveIncrease,s=t.data[e].state,n="<br>+"+a+" new cases in "+s+".";setTimeout((async function(){document.getElementById("newUpdate").innerHTML=n,document.getElementById("newUpdate").style.opacity=1,setTimeout((async function(){document.getElementById("newUpdate").style.opacity=0}),3900)}),5e3*e)}},async countriesDaily(){const t=await E.countriesDaily();for(let e=0;e<t.data.length-11;e++){null===t.data[e].cases.new&&(t.data[e].cases.new=0);const a=t.data[e].country,s=t.data[e].cases.new,n=s+" new cases in "+a+".";setTimeout((async function(){document.getElementById("newCountryUpdates").innerHTML="<br/>"+n,document.getElementById("newCountryUpdates").style.opacity=1,setTimeout((async function(){document.getElementById("newCountryUpdates").style.opacity=0}),3900)}),5e3*e)}}}},A=T,N=(a("91f1"),Object(d["a"])(A,w,C,!1,null,"0b7d3088",null)),O=N.exports,k={name:"app",data(){return{prefixes:["","K","M","G","T","P","E"]}},components:{PulseLoader:g["a"],staticData:O}},P=k,j=(a("809a"),Object(d["a"])(P,y,b,!1,null,"f9ab1e12",null)),M=j.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("div",{staticClass:"box"},[a("v-btn",{staticClass:"ma-2",attrs:{medium:"",outlined:"",color:"indigo"},on:{click:function(e){t.isHidden=!t.isHidden}}},[t._v("Search U.S Cities")]),a("transition",{attrs:{name:"fade"}},[t.isHidden?a("div",{attrs:{id:"inputbox"}},[a("v-container",[a("v-text-field",{attrs:{label:"State",required:"",dense:""},model:{value:t.regionProvince,callback:function(e){t.regionProvince=e},expression:"regionProvince"}}),a("v-text-field",{attrs:{label:"City Name",required:""},model:{value:t.CityName,callback:function(e){t.CityName=e},expression:"CityName"}}),a("v-btn",{staticClass:"ma-2",staticStyle:{"font-size":"12px"},attrs:{outlined:"",color:"indigo",text:"",small:""},on:{click:function(e){t.searchData(),t.display()}}},[t._v("search")]),a("div",{attrs:{id:"infobox"}},[a("transition",{attrs:{name:"fade"}},[t.show?a("p",{attrs:{id:"info"}},[t._v(" "+t._s(this.time)+" "+t._s(this.cityCase)+" "+t._s(this.cityDeath)+" "),a("br"),t._v(" "+t._s(this.stateCase)+" "+t._s(this.stateDeath)+" "+t._s(this.error)+" ")]):t._e()])],1)],1)],1):t._e()])],1)])},L=[],$={data(){return{isHidden:!1,CityName:"",regionProvince:"",text:"",error:null,updated:"",show:!1,cityCase:"",cityDeath:"",stateCase:"",stateDeath:""}},methods:{async display(){this.show=!this.show},async searchData(){const t=await E.searchData({region_province:this.regionProvince,city_name:this.CityName});try{this.error="";const e=S.AbbreviateNum(t.data[0].today_confirmed_in_city),a=S.AbbreviateNum(t.data[0].total_confirmed_in_state),s=S.AbbreviateNum(t.data[0].death_in_city),n=S.AbbreviateNum(t.data[0].total_death);this.cityCase=e+" new cases with ",this.cityDeath=s+" deaths today in the city.",this.stateCase=a+" total cases with ",this.stateDeath=n+" deaths within the state."}catch(e){this.cityCase="",this.cityDeath="",this.stateCase="",this.stateDeath="",this.text="",this.error=t.data.error}}}},W=$,G=(a("6021"),Object(d["a"])(W,H,L,!1,null,"1ee2bf81",null)),B=G.exports;s["default"].use(_["a"]);var F=new _["a"]({routes:[{path:"/",name:"Home",component:M},{path:"/Search",name:"Search",component:B}]}),R=a("ce5b"),K=a.n(R),Y=(a("bf40"),a("f5af")),q=a.n(Y);a("e829");s["default"].config.productionTip=!1,s["default"].use(K.a),new s["default"]({created(){q.a.init()},el:"#app",router:F,AOS:q.a,PulseLoader:g["a"],components:{App:v},template:"<App/>",render:t=>t(v)}).$mount("#app")},6021:function(t,e,a){"use strict";var s=a("45e3"),n=a.n(s);n.a},"6b0c":function(t,e,a){},"809a":function(t,e,a){"use strict";var s=a("6b0c"),n=a.n(s);n.a},"91f1":function(t,e,a){"use strict";var s=a("cd42"),n=a.n(s);n.a},cd42:function(t,e,a){},fd4f:function(t,e,a){t.exports=a.p+"img/github_2.718d6810.webp"}});
//# sourceMappingURL=app.7d9e7a1d.js.map