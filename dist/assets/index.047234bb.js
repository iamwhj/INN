import{r as g,o as _,c as S,a as c,b as e,d as l,w as p,p as $,e as w,f as T,g as O,F as h,h as k,t as m,i as I,j as L,k as E,l as M,m as A}from"./vendor.56f4d408.js";const C=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}};C();const z={setup(n){return(r,s)=>{const o=g("router-view");return _(),S(o)}}},B="modulepreload",b={},P="./",u=function(r,s){return!s||s.length===0?r():Promise.all(s.map(o=>{if(o=`${P}${o}`,o in b)return;b[o]=!0;const t=o.endsWith(".css"),i=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const a=document.createElement("link");if(a.rel=t?"stylesheet":B,t||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),t)return new Promise((v,j)=>{a.addEventListener("load",v),a.addEventListener("error",j)})})).then(()=>r())};var D="./assets/logo7.c344575a.png";var f=(n,r)=>{for(const[s,o]of r)n[s]=o;return n};const R={},d=n=>($("data-v-3a2a8b7e"),n=n(),w(),n),V={class:"nav-bar"},N={class:"logo-box"},q=d(()=>e("div",{class:"wave-box"},[e("div",{class:"circle"})],-1)),F={class:"img-box"},H=d(()=>e("img",{src:D,alt:""},null,-1)),G={class:"nav-list"},U=d(()=>e("li",null,[e("span",null,"\u9996\u9875")],-1)),W=d(()=>e("li",null,[e("span",null,"\u65C5\u884C")],-1)),K=d(()=>e("li",null,[e("span",null,"\u793E\u533A")],-1)),J=d(()=>e("li",null,[e("span",null,"\u8BF4\u660E")],-1)),Q=d(()=>e("div",{class:"login-box"},[e("span",null,[e("i",{class:"el-icon-s-custom"}),e("em",null,"hello Daw")])],-1));function X(n,r){const s=g("router-link");return _(),c("div",V,[e("div",N,[q,e("div",F,[l(s,{to:"/"},{default:p(()=>[H]),_:1})])]),e("div",G,[e("ul",null,[l(s,{to:"/"},{default:p(()=>[U]),_:1}),l(s,{to:"/Travel"},{default:p(()=>[W]),_:1}),l(s,{to:"/Community"},{default:p(()=>[K]),_:1}),l(s,{to:"/Statement"},{default:p(()=>[J]),_:1})])]),Q])}var Y=f(R,[["render",X],["__scopeId","data-v-3a2a8b7e"]]);const Z={},ee={class:"footer"},te=T('<div class="divide" data-v-232c0faa></div><div class="footer-content" data-v-232c0faa><div class="left" data-v-232c0faa><div class="left-box" data-v-232c0faa><p data-v-232c0faa>\u4E00\u4EFD\u5C5E\u4E8E\u9752\u6625\u7684\u5947\u601D\u5999\u60F3</p><p data-v-232c0faa>\u65E2\u7136\u9009\u62E9\u4E86\u82B1\u54E8\uFF0C\u90A3\u5C31\u5C06\u5176\u8FDB\u884C\u5230\u5E95\u3002</p><p data-v-232c0faa>\u65E2\u7136\u9009\u62E9\u4E86\u8FDC\u65B9\uFF0C\u90A3\u4FBF\u53EA\u987E\u98CE\u96E8\u517C\u7A0B\u3002</p><p data-v-232c0faa>\u4F5C\u8005\uFF1ADaw</p></div></div><div class="right" data-v-232c0faa><p data-v-232c0faa>\u56FE\u7247\u5747\u6765\u6E90\u7F51\u4E0A\uFF0C\u4FB5\u6743\u8BF7\u8054\u7CFB\u6211\u5220\u9664</p><p data-v-232c0faa>Email: 962983053@qq.com</p></div></div>',2),se=[te];function oe(n,r){return _(),c("div",ee,se)}var ae=f(Z,[["render",oe],["__scopeId","data-v-232c0faa"]]);const ne={class:"layout"},re={setup(n){return(r,s)=>{const o=g("router-view");return _(),c("div",ne,[l(Y),l(o),l(ae)])}}};var y="./assets/thumb11.2b6c7938.jpg",st=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:y}),x="./assets/thumb12.5664fc0a.jpg",ot=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:x});const ie={},le={class:"axis"},_e=e("div",{class:"avatar"},[e("div",{class:"left"},[e("svg",{id:"left1",height:"49%",width:"100%"},[e("polygon",{points:"0 0, 1300 0, 1100 392, 0 392, 0 0",fill:"transparent"})]),e("div",{class:"divider"}),e("svg",{id:"left2",height:"49%",width:"100%"},[e("polygon",{points:"0 0, 1090 0, 900 392, 0 392, 0 0",fill:"transparent"})])]),e("div",{class:"right"},[e("div",{class:"right-box"},[e("svg",{class:"right1",height:"49%",width:"100%",style:{overflow:"visible"}},[e("pattern",{id:"avatar1",width:"100%",height:"100%",patternContentUnits:"objectBoundingBox"},[e("image",{width:"1.5",height:"1","xlink:href":y})]),e("polygon",{points:"200 0, 850 0, 850 392, 0 392",fill:"url(#avatar1)"})]),e("div",{class:"divider",style:{width:"110%"}}),e("svg",{class:"right2",height:"49%",width:"100%",style:{overflow:"visible"}},[e("pattern",{id:"avatar2",width:"100%",height:"100%",patternContentUnits:"objectBoundingBox"},[e("image",{width:"1.5",height:"1.1","xlink:href":x})]),e("polygon",{points:"200 0, 1050 0, 1050 392, 0 392",fill:"url(#avatar2)"})])])])],-1),ce={class:"flutter"},de={class:"flutter-box"},pe=e("span",null,"\u4E16\u754C\u8FA3\u4E48\u5927\uFF0C\u6211\u4E5F\u60F3\u53BB\u770B\u770B",-1),ue=O("GO AGAIN!");function ge(n,r){const s=g("router-link");return _(),c("div",le,[_e,e("div",ce,[e("div",de,[pe,l(s,{to:"/Travel/cityCard",class:"pan-btn tiffany-btn"},{default:p(()=>[ue]),_:1})])])])}var me=f(ie,[["render",ge]]),ve="./assets/-1c00e8bf3da3c390.16354c84.jpg",fe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ve}),he="./assets/-62a33989d2c6391c.c2111844.jpg",be=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:he}),ye="./assets/4703873_m.cbcae0d9.jpg",xe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ye}),je="./assets/dahlia-6154889_1920.e1349ff7.jpg",Se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:je}),$e="./assets/flower-348814_1920.158b5664.jpg",we=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$e}),Te="./assets/magnolia-2199922_1920.f8a60102.jpg",Oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Te}),ke="./assets/snow-white-spring-1364413.d16a4a1b.jpg",Ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ke}),Le="./assets/spring-2179367_1920.21f566bb.jpg",Ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Le}),Me="./assets/waterfalls-1144130_1920.6b7f9861.jpg",Ae=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Me}),Ce="./assets/sun.af7dd2d6.png",ze="./assets/Dandelion.d1a1506d.png",Be="./assets/InkGrass.cf03f405.png";const Pe={class:"seasonRecom"},De=e("div",{class:"topBar"},[e("span",null,"\u6625\u5B63"),e("span",null,"\u671D\u5F80\u66AE\u606F\uFF0C\u6625\u53BB\u6625\u53C8\u6765\u3002\u6625\u6765\u4E07\u7269\u751F\uFF0C\u904D\u91CE\u767E\u82B1\u653E\uFF01---\u71AC\u8FC7\u4E25\u5BD2\u8FCE\u6765\u7684\u4FBF\u662F\u6210\u957F\u3002")],-1),Re={class:"recomList"},Ve={class:"img-box"},Ne=["src"],qe={class:"buttom-box"},Fe=e("i",{class:"el-icon-time"},null,-1),He=e("i",{class:"el-icon-location-information"},null,-1),Ge={class:"recommendation-box"},Ue=e("div",{class:"circle"},null,-1),We={class:"describe-box"},Ke=["innerHTML"],Je=e("div",{class:"backgroundImage"},[e("img",{src:Ce,class:"backgroundImage",style:{width:"100px",height:"100px"}}),e("div",{class:"backgroundImage-bottom"},[e("img",{src:ze,style:{width:"200px"}}),e("img",{src:Be,style:{width:"200px"}})])],-1),Qe={setup(n){const r=[{name:"\u7EA2\u82B1\u7389\u5170-\u6B66\u6C49",content:`\u5173\u4E8E\u7389\u5170\u82B1\u7684\u4F20\u8BF4\uFF0C\u5176\u4E2D\u8D2F\u7A7F\u7740\u4E2D\u56FD\u4F20\u7EDF\u7684\u6C11\u95F4\u6545\u4E8B\u8272\u5F69\u3002\u6545\u4E8B\u8BB2\u7684\u662F\u5F88\u4E45\u4EE5\u524D\u5728\u4E00\u5904\u6DF1\u5C71\u91CC\u4F4F\u7740\u4E09\u4E2A\u59D0\u59B9\uFF0C\u5927\u59D0\u53EB\u7EA2\u7389\u5170\uFF0C\u4E8C\u59D0\u53EB\u767D\u7389\u5170\uFF0C\u5C0F\u59B9\u53EB\u9EC4\u7389\u5170\u3002\u4E00\u5929\u5979\u4EEC\u4E0B\u5C71\u6E38\u73A9\uFF0C\u53D1\u73B0\u6751\u5B50\u91CC\u51B7\u6C34\u79CB\u70DF\uFF0C\u4E00\u7247\u6B7B\u5BC2\uFF0C\u4E09\u59D0\u59B9\u5341\u5206\u60CA\u5F02\uFF0C\u4E8E\u662F\uFF0C\u5411\u6751\u5B50\u91CC\u7684\u4EBA\u95EE\u8BAF\u540E\u5F97\u77E5\uFF0C\u539F\u6765\u79E6\u59CB\u7687\u8D76\u5C71\u586B\u6D77\uFF0C\u6740\u6B7B\u4E86\u9F99\u867E\u516C\u4E3B\uFF0C\u4ECE\u6B64\uFF0C\u9F99\u738B\u7237\u5C31\u8DDF\u5F20\u5BB6\u754C\u6210\u4E86\u4EC7\u5BB6\uFF0C\u9F99\u738B\u9501\u4E86\u76D0\u5E93\uFF0C\u4E0D\u8BA9\u5F20\u5BB6\u754C\u7684\u4EBA\u5403\u76D0\uFF0C\u7EC8\u4E8E\u5BFC\u81F4\u4E86\u761F\u75AB\u53D1\u751F\uFF0C\u6B7B\u4E86\u597D\u591A\u4EBA\u3002\u4E09\u59D0\u59B9\u5341\u5206\u540C\u60C5\u4ED6\u4EEC\uFF0C\u4E8E\u662F\u51B3\u5B9A\u5E2E\u5927\u5BB6\u8BA8\u76D0\u3002\u7136\u800C\u8FD9\u53C8\u4F55\u7B49\u5BB9\u6613\uFF1F\u5728\u906D\u5230\u9F99\u738B\u591A\u6B21\u62D2\u7EDD\u4EE5\u540E\uFF0C\u4E09\u59D0\u59B9\u53EA\u5F97\u4ECE\u770B\u5B88\u76D0\u4ED3\u7684\u87F9\u5C06\u519B\u5165\u624B\uFF0C\u7528\u81EA\u5DF1\u917F\u5236\u7684\u82B1\u9999\u8FF7\u5012\u4E86\u87F9\u5C06\u519B\uFF0C\u8D81\u673A\u5C06\u76D0\u4ED3\u51FF\u7A7F\uFF0C\u628A\u6240\u6709\u7684\u76D0\u90FD\u6D78\u5165\u6D77\u6C34\u4E2D\u3002\u6751\u5B50\u91CC\u7684\u4EBA\u5F97\u6551\u4E86\uFF0C\u4E09\u59D0\u59B9\u5374\u88AB\u9F99\u738B\u53D8\u4F5C\u4E86\u82B1\u6811\u3002\u540E\u6765\uFF0C\u4EBA\u4EEC\u4E3A\u4E86\u7EAA\u5FF5\u5979\u4EEC\uFF0C\u5C31\u5C06\u90A3\u79CD\u82B1\u6811\u79F0\u4F5C\u201C\u7389\u5170\u82B1\u201D\uFF0C\u800C\u5979\u4EEC\u917F\u9020\u7684\u82B1\u9999\u4E5F\u53D8\u6210\u4E86\u5979\u4EEC\u81EA\u5DF1\u7684\u9999\u5473\u3002\u6545\u4E8B\u5F88\u7B80\u5355\uFF0C\u4E5F\u5F88\u552F\u7F8E\uFF0C\u5374\u4E5F\u53CD\u6620\u4E86\u4EBA\u4EEC\u5BF9\u7F8E\u597D\u4E8B\u7269\u7684\u8FFD\u6C42\u3001\u5BF9\u5B8C\u7F8E\u7684\u5411\u5F80\u3002<br />
    \u7389\u5170\u82B1\u5916\u5F62\u6781\u50CF\u83B2\u82B1\uFF0C\u4F46\u5E76\u4E0D\u540C\u3002\u76DB\u5F00\u65F6\uFF0C\u82B1\u74E3\u5C55\u5411\u56DB\u65B9\uFF0C\u4F7F\u5EAD\u9662\u9752\u767D\u7247\u7247\uFF0C\u767D\u5149\u8000\u773C\uFF0C\u5177\u6709\u5F88\u9AD8\u7684\u89C2\u8D4F\u4EF7\u503C\uFF1B\u518D\u52A0\u4E0A\u6E05\u9999\u9635\u9635\uFF0C\u6C81\u4EBA\u5FC3\u813E\uFF0C\u5B9E\u4E3A\u7F8E\u5316\u5EAD\u9662\u4E4B\u7406\u60F3\u82B1\u5349\u3002\u82B1\u5F00\u65F6\u5F02\u5E38\u60CA\u8273\uFF0C\u6EE1\u6811\u82B1\u9999\uFF0C\u82B1\u53F6\u8212\u5C55\u800C\u9971\u6EE1\uFF0C\u4F46\u82B1\u671F\u77ED\u6682\uFF0C\u4F46\u5F00\u653E\u4E4B\u65F6\u7279\u522B\u7EDA\u70C2\uFF0C\u4EE3\u8868\u4E00\u79CD\u4E00\u5F80\u65E0\u524D\u7684\u5B64\u5BD2\u6C14\u548C\u51B3\u7EDD\u7684\u5B64\u52C7\uFF0C\u4F18\u96C5\u800C\u6B3E\u6B3E\u5927\u65B9\u3002`,imgSrc:"magnolia-2199922_1920.jpg",shootTime:"2020-08-08",shootAdress:"\u6E56\u5317\u7701\u6B66\u6C49\u5E02\u6B66\u660C\u533A\u6D2A\u5C71\u516C\u56ED",phrase:"\u6C60\u70DF\u5F84\u67F3\u6F2B\u9EC4\u57C3\uFF0C\u82E6\u4E3A\u8F9B\u5937\u9179\u4E00\u676F\uFF1B\u5982\u6B64\u9AD8\u82B1\u767D\u4E8E\u96EA\uFF0C\u5E74\u5E74\u504F\u662F\u6597\u98CE\u5F00\u3002"},{name:"\u6625\u8D77\u6D77\u68E0-\u6D4E\u5357",content:`\u6D4E\u5357\u6625\u5929\u5176\u5B9E\u7ED9\u6211\u6700\u5927\u7684\u611F\u89C9\u5C31\u662F\u6CA1\u6709\u6625\u5929\uFF0C\u4F46\u662F\u5462\u6211\u53C8\u6C89\u9189\u4E8E\u5176\u4E2D\uFF01\u7EA6\u4E0A\u4E09\u4E94\u4E2A\u670B\u53CB\uFF0C\u53BB\u5357\u90E8\u5C71\u533A\u6316\u6316\u8360\u83DC\uFF0C\u770B\u770B\u6843\u82B1\uFF0C\u7136\u540E\u518D\u901B\u901B\u666F\u70B9\uFF0C\u5176\u4E2D\u611F\u89C9\u771F\u7684\u4E0D\u9519\uFF01
              \u73B0\u5728\u7684\u6625\u5929\u6211\u66F4\u611F\u89C9\u50CF\u4E00\u4E2A\u59D4\u5A49\u7684\u5C0F\u5973\u5B50\uFF0C\u4E00\u7B11\u4E00\u98A6\u3002\u770B\u7740\u4F60\u4E0D\u8BF4\u8BDD\uFF0C\u8BA9\u4F60\u4E50\u5728\u5176\u4E2D\uFF01\u8FD8\u8BB0\u5F97\u5417\uFF1F
              \u6625\u5929\u5230\u4E86\uFF0C\u5E26\u4E0A\u5B69\u5B50\u53BB\u54EA\u91CC\u73A9\uFF1F\u5BF9\uFF01\u53BB\u9ED1\u864E\u6CC9\uFF01\u6F7A\u6F7A\u6CC9\u6C34\uFF0C\u67F3\u53F6\u98D8\u98D8\uFF0C\u4E00\u676F\u5927\u7897\u8336\uFF0C\u4E00\u53E3\u6CC9\u6C34\uFF0C\u559D\u7684\u662F\u7518\u751C\uFF0C\u54C1\u7684\u662F\u4EBA\u751F\uFF01<br />

              \u6D4E\u5357\u7684\u6625\u5929\u80FD\u660E\u663E\u611F\u53D7\u5230\u52C3\u52C3\u7684\u751F\u673A\uFF0C\u51AC\u5929\u7684\u65F6\u5019\u4E00\u773C\u671B\u53BB\u7EFF\u690D\u57FA\u672C\u4E0A\u90FD\u662F\u5149\u79C3\u79C3\u7684\uFF0C\u4E25\u51AC\u6765\u4E34\u524D\u5B83\u4EEC\u5C31\u4F1A\u628A\u53F6\u5B50\u90FD\u7ED9\u892A\u53BB\uFF0C\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u80FD\u91CF\u6D88\u8017\uFF0C\u5176\u5B9E\u8FD9\u4E5F\u662F\u4E3A\u6625\u5929\u505A\u51C6\u5907\u3002
              \u6625\u5929\u4E00\u5230\u4FBF\u4F1A\u6EE1\u56ED\u82B1\u9999\uFF0C\u8BF4\u6765\u4E5F\u662F\u5947\u602A\uFF0C\u8BB8\u591A\u7684\u6811\u90FD\u662F\u5148\u5F00\u82B1\u540E\u957F\u53F6\uFF0C\u5149\u79C3\u79C3\u7684\u679D\u4E2B\u4E0A\u5F00\u6EE1\u9C9C\u82B1\uFF0C
              \u770B\u5230\u5F97\u591A\u4E86\u8EAB\u4E3A\u5357\u65B9\u4EBA\u7684\u6211\u4E5F\u662F\u89C1\u602A\u4E0D\u602A\u4E86\u3002<br />

              \u65E2\u7136\u8BF4\u5230\u690D\u7269\uFF0C\u90A3\u54B1\u4E5F\u6765\u63D0\u4E00\u63D0\u52A8\u7269\u4E86\uFF0C\u6700\u5E38\u89C1\u4FBF\u662F\u9EBB\u96C0\u4E86\uFF0C\u57FA\u672C\u90FD\u662F\u4E24\u4E09\u53EA\u7ED3\u4F34\u89C5\u98DF\uFF0C\u590F\u5929\u7684\u65F6\u5019\u53EA\u53EA\u90FD\u9E1F\u6A21\u9E1F\u6837\uFF0C\u68AD\u5F62\u7684\u8F7B\u5DE7\u7684\u8EAB\u4F53\uFF0C\u957F\u957F\u7684\u7FBD\u6BDB\uFF0C\u5230\u4E86\u51AC\u5929\u5C31\u53D1\u751F\u5927\u53D8\u5316\u4E86
              \u4E2A\u4E2A\u5706\u5F97\u8DDF\u4E2A\u7403\u4E00\u6837\uFF0C\u8FD8\u6709\u8BB8\u591A\u7ED2\u6BDB\uFF0C\u8FD9\u6A21\u6837\u7B80\u76F4\u662F\u4E0A\u5347\u4E86\u4E00\u4E2A\u6863\u6B21\u3002<br />

              \u6D4E\u5357\u7684\u6625\u5929\u4E5F\u662F\u7F8E\u666F\u8DA3\u4E8B\u591A\u591A\uFF0C\u6CA1\u53BB\u8FC7\u7684\u5C0F\u4F19\u4F34\u4E0D\u59A8\u4E00\u8BD5\u3002\u8D70\u8FC7\u4E86\u5343\u4E0A\u4E07\u6C34\uFF0C\u4E0D\u59A8\u6765\u9886\u7565\u8FD9\u52C3\u52C3\u7684\u751F\u673A\u3002`,imgSrc:"-1c00e8bf3da3c390.jpg",shootTime:"2019-05-10",shootAdress:"\u5C71\u4E1C\u7701\u6D4E\u5357\u5E02\u5386\u57CE\u533A\u7ECF\u5341\u8DEF",phrase:"\u671D\u800C\u5F80\u66AE\u800C\u5F52\uFF0C\u5468\u800C\u590D\u59CB\u65E5\u590D\u4E00\u65E5\u3002 \u5174\u6765\u6BCF\u72EC\u5F80\uFF0C\u80DC\u4E8B\u7A7A\u81EA\u77E5\uFF1B\u884C\u5230\u6C34\u7A77\u5904\uFF0C\u5750\u770B\u4E91\u8D77\u65F6\u3002"},{name:"\u6811\u68A2\u5AE9\u82BD-\u70DF\u53F0",content:`\u70DF\u53F0\u5C71\u666F\u533A\u662F\u4E9A\u6D32\u73B0\u5B58\u7684\u6700\u5927\u7684\u8FD1\u4EE3\u9886\u4E8B\u9986\u5EFA\u7B51\u7FA4\u3002\u5EFA\u7B51\u7FA4\u5EFA\u7B51\u98CE\u683C\u5404\u5F02\uFF0C\u65F6\u4EE3\u6C14\u606F\u6D53\u90C1\uFF0C\u4FDD\u5B58\u5B8C\u597D\u3002\u6709\u4E9A\u6D32\u73B0\u5B58\u6700\u65E9\u7684\u82F1\u56FD\u5728\u5176\u6B96\u6C11\u5730\u201C\u5916\u5ECA\u5F0F\u201D\u5EFA\u7B51\uFF0C\u6709\u53E4\u5178\u5F0F\u3001\u4E2D\u897F\u5408\u74A7\u5F0F\u3001\u82F1\u56FD\u65E9\u671F\u516C\u5BD3\u5F0F\u7B49\u5EFA\u7B51\uFF0C\u582A\u79F0\u8FD1\u4EE3\u5EFA\u7B51\u7684\u5B9D\u5E93\u3002\u70DF\u53F0\u5C71\u8FD1\u4EE3\u5EFA\u7B51\u7FA4\u6C47\u96C6\u4E86\u4E0D\u540C\u56FD\u5BB6\u7684\u4E0D\u540C\u5386\u53F2\u6587\u5316\u7279\u8272\uFF0C\u662F\u4E2D\u56FD\u534A\u6B96\u6C11\u5730\u534A\u5C01\u5EFA\u793E\u4F1A\u7684\u7F29\u5F71\u548C\u89C1\u8BC1\uFF0C\u5DF2\u6210\u4E3A\u7814\u7A76\u4E2D\u56FD\u8FD1\u4EE3\u5EFA\u7B51\u53F2\u3001\u4E2D\u897F\u6587\u5316\u4EA4\u6D41\u53F2\u548C\u4E2D\u56FD\u8FD1\u4EE3\u793E\u4F1A\u53D1\u5C55\u53F2\u73CD\u8D35\u7684\u5B9E\u7269\u8D44\u6599\uFF0C\u5177\u6709\u91CD\u8981\u7684\u5386\u53F2\u3001\u827A\u672F\u548C\u79D1\u5B66\u7814\u7A76\u4EF7\u503C\u3002\u70DF\u53F0\u5C71\u8FD1\u4EE3\u5EFA\u7B51\u7FA4\u662F\u5386\u53F2\u6587\u5316\u7684\u8F7D\u4F53\uFF0C\u5728\u70DF\u53F0\u4E43\u81F3\u6574\u4E2A\u4E2D\u56FD\u8FD1\u4EE3\u53D1\u5C55\u53F2\u4E0A\u5360\u6709\u4E3E\u8DB3\u8F7B\u91CD\u7684\u5730\u4F4D\uFF0C\u662F\u70DF\u53F0\u5E02\u5386\u53F2\u6587\u5316\u540D\u57CE\u7684\u91CD\u8981\u7EC4\u6210\u90E8\u5206\u3002\u5C71\u4E0A\u5C71\u4E0B\uFF0C\u90A3\u4E00\u5E62\u5E62\u5916\u56FD\u9886\u4E8B\u9986\u3001\u5B98\u90B8\u3001\u5EFA\u7B51\u7FA4\uFF0C\u8BB0\u5F55\u4E86\u70DF\u53F0\u4F5C\u4E3A\u5C71\u4E1C\u7B2C\u4E00\u4E2A\u5F00\u57E0\u901A\u5546\u53E3\u5CB8\u7684\u7279\u6B8A\u5386\u53F2\uFF1B\u8BB0\u5F55\u4E86\u70DF\u53F0\u81F3\u80F6\u4E1C\u5E7F\u5927\u4EBA\u6C11\u5FE0\u70C8\u4FDD\u56FD\u7684\u6C11\u65CF\u4E3B\u4E49\u7CBE\u795E\u548C\u632F\u5174\u534E\u590F\u7684\u5FD7\u5411\u3002<br />
    \u6B64\u5916\uFF0C\u70DF\u53F0\u5C71\u8FD8\u662F\u4E00\u4E2A\u7F6E\u5C71\u4E34\u6D77\u98CE\u5149\u65D6\u65CE\u7684\u65C5\u6E38\u4F73\u5730\uFF0C\u5979\u4EE5\u5E7D\u96C5\u800C\u8457\u79F0\uFF0C\u5C71\u4E0A\u6811\u6728\u8471\u830F\uFF0C\u7EA2\u697C\u9752\u820D\uFF0C\u53C2\u5DEE\u9690\u73B0\uFF0C\u7F8E\u4E3D\u5982\u753B\uFF0C\u65E9\u5728\u5EB7\u7199\u5E74\u95F4\uFF0C\u70DF\u53F0\u5C71\u5C31\u88AB\u8A89\u4E3A\u201C\u798F\u5C71\u516B\u666F\u4E4B\u9996\u201D\u3002\u5728\u5C71\u4E0A\uFF0C\u6709\u4EE5\u201C\u9F99\u738B\u5E99\u201D\u3001\u201C\u5FE0\u70C8\u7960\u201D\u3001\u201C\u72FC\u70DF\u53F0\u201D\u4E3A\u4EE3\u8868\u7684\u6C11\u4FD7\u5EFA\u7B51\u7FA4\uFF0C\u53C8\u6709\u201C\u71D5\u53F0\u77F3\u201D\u3001\u201C\u9020\u5316\u5947\u89C2\u201D\u3001\u201C\u76DF\u60C5\u5D16\u201D\u3001\u201C\u592A\u767D\u77F3\u201D\u3001\u201C\u6BCD\u5B50\u9F9F\u201D\u7B49\u795E\u5947\u666F\u70B9\uFF1B\u6709\u9AD8\u4EBA\u3001\u58A8\u5BA2\u7684\u9898\u8BD7\uFF0C\u523B\u77F3\u52D2\u7891\uFF0C\u8FD8\u6709\u7F8E\u4E3D\u52A8\u4EBA\u7684\u795E\u8BDD\u4F20\u8BF4\uFF0C\u8BA9\u4EBA\u601D\u7EEA\u4E07\u5343\uFF0C\u56DE\u5473\u65E0\u7A77\u3002`,imgSrc:"spring-2179367_1920.jpg",shootTime:"2021-03-20",shootAdress:"\u5C71\u4E1C\u7701\u70DF\u53F0\u5E02\u70DF\u53F0\u5C71",phrase:"\u521D\u767B\u70DF\u53F0\u5C71\uFF0C\u63A2\u9669\u4E00\u7EBF\u5929\uFF1B\u5DE6\u624B\u51FB\u6D77\u6D6A,\u53F3\u624B\u5CED\u58C1\u6500\u3002 \u4EBA\u6765\u9C7C\u4E0D\u60CA\uFF0C\u6D77\u6B27\u51E0\u5EA6\u95F2\uFF1B \u4E3E\u5934\u671B\u524D\u8DEF\uFF0C\u5CED\u58C1\u5165\u4E91\u7AEF\u3002"},{name:"\u9759\u8C27\u5E7D\u7011-\u4E0A\u9976",content:`\u6C5F\u5CAD\uFF0C\u4F4D\u4E8E\u5A7A\u6E90\u53BF\u4E1C\u5317\u90E8\uFF0C\u8DDD\u53BF\u57CE45\u516C\u91CC\uFF0C\u603B\u9762\u79EF38\u5E73\u65B9\u516C\u91CC\uFF0C\u6BCF\u5F53\u6625\u6696\u82B1\u5F00\u65F6\uFF0C\u7F6E\u8EAB\u4E8E\u6C5F\u5CAD\u4E07\u4EA9\u68AF\u7530\u4E2D\uFF0C\u9EC4\u707F\u707F\u7684\u6CB9\u83DC\u82B1\u4E0E\u8FDC\u5C71\u3001\u8FD1\u6C34\u3001\u7C89\u5899\u3001\u9EDB\u74E6\u76F8\u6620\u6210\u8DA3\uFF0C\u6784\u6210\u4E00\u5E45\u5929\u4EBA\u5408\u4E00\u7684\u753B\u5377\uFF0C\u5728\u8FD9\u91CC\u60A8\u53EF\u4EE5\u5C3D\u60C5\u7684\u91CA\u653E\uFF0C\u8BA9\u5FC3\u7075\u81EA\u7531\u98DE\u7FD4\u3002\u6BCF\u5F53\u6625\u6696\u82B1\u5F00\u65F6\uFF0C\u7F6E\u8EAB\u4E8E\u6C5F\u5CAD\u4E07\u4EA9\u68AF\u7530\u4E2D\uFF0C\u9EC4\u707F\u707F\u7684\u6CB9\u83DC\u82B1\u4E0E\u8FDC\u5C71\u3001\u8FD1\u6C34\u3001\u7C89\u5899\u3001\u9EDB\u74E6\u76F8\u6620\u6210\u8DA3\uFF0C\u6784\u6210\u4E00\u5E45\u5929\u4EBA\u5408\u4E00\u7684\u753B\u5377\uFF0C\u5728\u8FD9\u91CC\u60A8\u53EF\u4EE5\u5C3D\u60C5\u7684\u91CA\u653E\uFF0C\u8BA9\u5FC3\u7075\u81EA\u7531\u98DE\u7FD4\u3002<br />
    \u9EC4\u707F\u707F\u7684\u5341\u4E07\u4EA9\u68AF\u7530\u6CB9\u83DC\u82B1\uFF0C\u4F7F\u6C5F\u5CAD\u6210\u4E3A\u5A7A\u6E90\u6625\u5929\u7684\u5BA0\u513F\uFF0C\u540C\u65F6\u8FD9\u91CC\u4E5F\u662F\u5168\u56FD\u8F83\u5177\u89C6\u89C9\u51B2\u51FB\u529B\u7684\u6CB9\u83DC\u82B1\u89C2\u8D4F\u5730\u3002 \u8FD9\u91CC\u662F\u5A7A\u6E90\u7530\u56ED\u98CE\u5149\u7684\u4EE3\u8868\u3002\u4ECE\u6C5F\u5CAD\u5F00\u59CB\uFF0C\u516C\u8DEF\u59CB\u7EC8\u5728\u5C71\u95F4\u76D8\u65CB\uFF0C\u4ECE\u6C5F\u5CAD\u5411\u4E0B\u770B\uFF0C\u53EA\u89C1\u5C42\u5C42\u68AF\u7530\uFF0C\u66F2\u6298\u7684\u7EBF\u6761\uFF0C\u5C71\u8C37\u76C6\u5730\u4E2D\u7684\u5C0F\u6CB3\uFF0C\u6CB3\u8FB9\u805A\u96C6\u7684\u4E09\u4E24\u4E2A\u6751\u5E84\uFF0C\u56DB\u5468\u56F4\u7ED5\u7740\u9752\u5C71\uFF0C\u6784\u6210\u4E86\u4E00\u5E45\u6781\u7F8E\u7684\u5A7A\u6E90\u519C\u6751\u98CE\u5149\u753B\u5377\u3002<br />
    \u201C\u6C5F\u5CAD\u98CE\u5149\u201D\u4E0D\u4EC5\u662F\u4E16\u754C\u7EA7\u6444\u5F71\u57FA\u5730\uFF0C\u7531\u4E8E\u53E4\u6811\u3001\u6CB3\u6D41\u3001\u68AF\u7530\u3001\u519C\u820D\u3001\u519C\u4F5C\u7269\u5408\u7406\u5E03\u5C40\uFF0C\u66F4\u662F\u4F53\u73B0\u4E86\u4EBA\u4E0E\u81EA\u7136\u7684\u4EB2\u8FD1\u3001\u548C\u8C10\uFF0C\u201C\u5929\u4EBA\u5408\u4E00\u201D\u5728\u8FD9\u91CC\u5F97\u4EE5\u5B8C\u7F8E\u5C55\u793A\u3002\u5C24\u5176\u662F\u5C71\u9876\u4EBA\u5BB6\u6210\u4E86\u6C5F\u5CAD\u98CE\u5149\u7684\u5927\u80CC\u666F\uFF0C\u8FDC\u773A\u7C89\u5899\u9EDB\u74E6\u63A9\u5728\u9EC4\u82B1\u7EFF\u6811\u95F4\uFF0C\u9635\u9635\u4E91\u96FE\u98D8\u6765\uFF0C\u604D\u82E5\u5929\u4E0A\u4EBA\u95F4\uFF0C\u88AB\u8A89\u4E3A\u4E2D\u56FD\u201C\u56DB\u5927\u82B1\u6D77\u201D\u4E4B\u4E00\u3002`,imgSrc:"waterfalls-1144130_1920.jpg",shootTime:"2020-09-15",shootAdress:"\u6C5F\u897F\u7701\u4E0A\u5C27\u5E02\u5A7A\u6E90\u6C5F\u5CAD",phrase:"\u6CBF\u5C71\u4E00\u68F9\u5A7A\u6EAA\u884C\uFF0C\u5C71\u8272\u82CD\u82CD\u6EAA\u6C34\u6E05\u3002\u62DF\u5230\u9EC4\u5DDE\u8BF4\u98CE\u666F\uFF0C\u5C0F\u8305\u7BF7\u5E95\u6D6A\u82B1\u58F0"}],s={"../../assets/recommend/spring/-1c00e8bf3da3c390.jpg":fe,"../../assets/recommend/spring/-62a33989d2c6391c.jpg":be,"../../assets/recommend/spring/4703873_m.jpg":xe,"../../assets/recommend/spring/dahlia-6154889_1920.jpg":Se,"../../assets/recommend/spring/flower-348814_1920.jpg":we,"../../assets/recommend/spring/magnolia-2199922_1920.jpg":Oe,"../../assets/recommend/spring/snow-white-spring-1364413.jpg":Ie,"../../assets/recommend/spring/spring-2179367_1920.jpg":Ee,"../../assets/recommend/spring/waterfalls-1144130_1920.jpg":Ae},o=t=>s[t].default;return(t,i)=>(_(),c("div",Pe,[De,e("div",Re,[e("ul",null,[(_(),c(h,null,k(r,(a,v)=>e("li",{key:v},[e("div",Ve,[e("img",{src:o("../../assets/recommend/spring/"+a.imgSrc)},null,8,Ne),e("div",qe,[e("span",null,[Fe,e("em",null,m(a.shootTime),1)]),e("span",null,[He,e("em",null,m(a.shootAdress),1)])]),e("div",Ge,[e("p",null,m(a.phrase),1),Ue])]),e("div",We,[e("span",null,m(a.name),1),e("p",{innerHTML:a.content},null,8,Ke),Je])])),64))])])]))}},Xe={setup(n){return(r,s)=>(_(),c(h,null,[l(me),l(Qe)],64))}},Ye=[{path:"/",component:re,redirect:"/Main",children:[{path:"/Main",component:Xe},{path:"/Travel",component:()=>u(()=>import("./index.99b8008c.js"),["assets/index.99b8008c.js","assets/index.8348a1a9.css","assets/vendor.56f4d408.js"]),redirect:"/Travel/cityCard",children:[{path:"cityCard",component:()=>u(()=>import("./cityCard.0d383727.js"),["assets/cityCard.0d383727.js","assets/cityCard.0b6d09ad.css","assets/vendor.56f4d408.js"])},{path:"cityTravel",component:()=>u(()=>import("./cityTravel.065e1067.js"),["assets/cityTravel.065e1067.js","assets/cityTravel.a277d786.css","assets/thumb8.03357996.js","assets/vendor.56f4d408.js"])}]},{path:"/Community",component:()=>u(()=>import("./index.895b9fde.js"),["assets/index.895b9fde.js","assets/index.0cee62e8.css","assets/vendor.56f4d408.js","assets/thumb8.03357996.js"])},{path:"/Statement",component:()=>u(()=>import("./index.68b63e22.js"),["assets/index.68b63e22.js","assets/index.7ff7ea53.css","assets/vendor.56f4d408.js"])}]}],Ze=I({history:L(),routes:Ye}),et=E({state:{counter:1},mutations:{add(n){n.counter++}},actions:{}});M(z).use(Ze).use(et).use(A).mount("#app");export{f as _,st as a,ot as b};