const t={};import{r as e,o as s,c as a,a as n,b as i,d as l,w as o,p as r,e as c,f as d,g as u,F as p,h as m,t as v,i as h,j as f,k as g,l as b,m as _}from"./vendor.56f4d408.js";!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver((t=>{for(const s of t)if("childList"===s.type)for(const t of s.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)})).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),"use-credentials"===t.crossorigin?e.credentials="include":"anonymous"===t.crossorigin?e.credentials="omit":e.credentials="same-origin",e}(t);fetch(t.href,e)}}();const y={setup:t=>(t,n)=>{const i=e("router-view");return s(),a(i)}},w={},x=function(t,e){return e&&0!==e.length?Promise.all(e.map((t=>{if((t=`./${t}`)in w)return;w[t]=!0;const e=t.endsWith(".css"),s=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${s}`))return;const a=document.createElement("link");return a.rel=e?"stylesheet":"modulepreload",e||(a.as="script",a.crossOrigin=""),a.href=t,document.head.appendChild(a),e?new Promise(((t,e)=>{a.addEventListener("load",t),a.addEventListener("error",e)})):void 0}))).then((()=>t())):t()};const T={},j=t=>(r("data-v-3a2a8b7e"),t=t(),c(),t),E={class:"nav-bar"},L={class:"logo-box"},k=j((()=>i("div",{class:"wave-box"},[i("div",{class:"circle"})],-1))),A={class:"img-box"},I=j((()=>i("img",{src:"./assets/logo7.c344575a.png",alt:""},null,-1))),C={class:"nav-list"},S=j((()=>i("li",null,[i("span",null,"首页")],-1))),D=j((()=>i("li",null,[i("span",null,"旅行")],-1))),O=j((()=>i("li",null,[i("span",null,"社区")],-1))),P=j((()=>i("li",null,[i("span",null,"说明")],-1))),R=j((()=>i("div",{class:"login-box"},[i("span",null,[i("i",{class:"el-icon-s-custom"}),i("em",null,"hello Daw")])],-1)));T.render=function(t,a){const r=e("router-link");return s(),n("div",E,[i("div",L,[k,i("div",A,[l(r,{to:"/"},{default:o((()=>[I])),_:1})])]),i("div",C,[i("ul",null,[l(r,{to:"/"},{default:o((()=>[S])),_:1}),l(r,{to:"/Travel"},{default:o((()=>[D])),_:1}),l(r,{to:"/Community"},{default:o((()=>[O])),_:1}),l(r,{to:"/Statement"},{default:o((()=>[P])),_:1})])]),R])},T.__scopeId="data-v-3a2a8b7e";const B={},M={class:"footer"},V=[d('<div class="divide" data-v-232c0faa></div><div class="footer-content" data-v-232c0faa><div class="left" data-v-232c0faa><div class="left-box" data-v-232c0faa><p data-v-232c0faa>一份属于青春的奇思妙想</p><p data-v-232c0faa>既然选择了花哨，那就将其进行到底。</p><p data-v-232c0faa>既然选择了远方，那便只顾风雨兼程。</p><p data-v-232c0faa>作者：Daw</p></div></div><div class="right" data-v-232c0faa><p data-v-232c0faa>图片均来源网上，侵权请联系我删除</p><p data-v-232c0faa>Email: 962983053@qq.com</p></div></div>',2)];B.render=function(t,e){return s(),n("div",M,V)},B.__scopeId="data-v-232c0faa";const q={class:"layout"},N={setup:t=>(t,a)=>{const i=e("router-view");return s(),n("div",q,[l(T),l(i),l(B)])}};const G={},U={class:"axis"},$=i("div",{class:"avatar"},[i("div",{class:"left"},[i("svg",{id:"left1",height:"49%",width:"100%"},[i("polygon",{points:"0 0, 1300 0, 1100 392, 0 392, 0 0",fill:"transparent"})]),i("div",{class:"divider"}),i("svg",{id:"left2",height:"49%",width:"100%"},[i("polygon",{points:"0 0, 1090 0, 900 392, 0 392, 0 0",fill:"transparent"})])]),i("div",{class:"right"},[i("div",{class:"right-box"},[i("svg",{class:"right1",height:"49%",width:"100%",style:{overflow:"visible"}},[i("pattern",{id:"avatar1",width:"100%",height:"100%",patternContentUnits:"objectBoundingBox"},[i("image",{width:"1.5",height:"1","xlink:href":"./assets/thumb11.2b6c7938.jpg"})]),i("polygon",{points:"200 0, 850 0, 850 392, 0 392",fill:"url(#avatar1)"})]),i("div",{class:"divider",style:{width:"110%"}}),i("svg",{class:"right2",height:"49%",width:"100%",style:{overflow:"visible"}},[i("pattern",{id:"avatar2",width:"100%",height:"100%",patternContentUnits:"objectBoundingBox"},[i("image",{width:"1.5",height:"1.1","xlink:href":"./assets/thumb12.5664fc0a.jpg"})]),i("polygon",{points:"200 0, 1050 0, 1050 392, 0 392",fill:"url(#avatar2)"})])])])],-1),H={class:"flutter"},F={class:"flutter-box"},K=i("span",null,"世界辣么大，我也想去看看",-1),W=u("GO AGAIN!");G.render=function(t,a){const r=e("router-link");return s(),n("div",U,[$,i("div",H,[i("div",F,[K,l(r,{to:"/Travel/cityCard",class:"pan-btn tiffany-btn"},{default:o((()=>[W])),_:1})])])])};const z={class:"seasonRecom"},J=i("div",{class:"topBar"},[i("span",null,"春季"),i("span",null,"朝往暮息，春去春又来。春来万物生，遍野百花放！---熬过严寒迎来的便是成长。")],-1),Q={class:"recomList"},X={class:"img-box"},Y=["src"],Z={class:"buttom-box"},tt=i("i",{class:"el-icon-time"},null,-1),et=i("i",{class:"el-icon-location-information"},null,-1),st={class:"recommendation-box"},at=i("div",{class:"circle"},null,-1),nt={class:"describe-box"},it=["innerHTML"],lt=i("div",{class:"backgroundImage"},[i("img",{src:"./assets/sun.af7dd2d6.png",class:"backgroundImage",style:{width:"100px",height:"100px"}}),i("div",{class:"backgroundImage-bottom"},[i("img",{src:"./assets/Dandelion.d1a1506d.png",style:{width:"200px"}}),i("img",{src:"./assets/InkGrass.cf03f405.png",style:{width:"200px"}})])],-1),ot={setup(e){const a=[{name:"红花玉兰-武汉",content:"关于玉兰花的传说，其中贯穿着中国传统的民间故事色彩。故事讲的是很久以前在一处深山里住着三个姐妹，大姐叫红玉兰，二姐叫白玉兰，小妹叫黄玉兰。一天她们下山游玩，发现村子里冷水秋烟，一片死寂，三姐妹十分惊异，于是，向村子里的人问讯后得知，原来秦始皇赶山填海，杀死了龙虾公主，从此，龙王爷就跟张家界成了仇家，龙王锁了盐库，不让张家界的人吃盐，终于导致了瘟疫发生，死了好多人。三姐妹十分同情他们，于是决定帮大家讨盐。然而这又何等容易？在遭到龙王多次拒绝以后，三姐妹只得从看守盐仓的蟹将军入手，用自己酿制的花香迷倒了蟹将军，趁机将盐仓凿穿，把所有的盐都浸入海水中。村子里的人得救了，三姐妹却被龙王变作了花树。后来，人们为了纪念她们，就将那种花树称作“玉兰花”，而她们酿造的花香也变成了她们自己的香味。故事很简单，也很唯美，却也反映了人们对美好事物的追求、对完美的向往。<br />\n    玉兰花外形极像莲花，但并不同。盛开时，花瓣展向四方，使庭院青白片片，白光耀眼，具有很高的观赏价值；再加上清香阵阵，沁人心脾，实为美化庭院之理想花卉。花开时异常惊艳，满树花香，花叶舒展而饱满，但花期短暂，但开放之时特别绚烂，代表一种一往无前的孤寒气和决绝的孤勇，优雅而款款大方。",imgSrc:"magnolia-2199922_1920.jpg",shootTime:"2020-08-08",shootAdress:"湖北省武汉市武昌区洪山公园",phrase:"池烟径柳漫黄埃，苦为辛夷酹一杯；如此高花白于雪，年年偏是斗风开。"},{name:"春起海棠-济南",content:"济南春天其实给我最大的感觉就是没有春天，但是呢我又沉醉于其中！约上三五个朋友，去南部山区挖挖荠菜，看看桃花，然后再逛逛景点，其中感觉真的不错！\n              现在的春天我更感觉像一个委婉的小女子，一笑一颦。看着你不说话，让你乐在其中！还记得吗？\n              春天到了，带上孩子去哪里玩？对！去黑虎泉！潺潺泉水，柳叶飘飘，一杯大碗茶，一口泉水，喝的是甘甜，品的是人生！<br />\n\n              济南的春天能明显感受到勃勃的生机，冬天的时候一眼望去绿植基本上都是光秃秃的，严冬来临前它们就会把叶子都给褪去，减少不必要的能量消耗，其实这也是为春天做准备。\n              春天一到便会满园花香，说来也是奇怪，许多的树都是先开花后长叶，光秃秃的枝丫上开满鲜花，\n              看到得多了身为南方人的我也是见怪不怪了。<br />\n\n              既然说到植物，那咱也来提一提动物了，最常见便是麻雀了，基本都是两三只结伴觅食，夏天的时候只只都鸟模鸟样，梭形的轻巧的身体，长长的羽毛，到了冬天就发生大变化了\n              个个圆得跟个球一样，还有许多绒毛，这模样简直是上升了一个档次。<br />\n\n              济南的春天也是美景趣事多多，没去过的小伙伴不妨一试。走过了千上万水，不妨来领略这勃勃的生机。",imgSrc:"-1c00e8bf3da3c390.jpg",shootTime:"2019-05-10",shootAdress:"山东省济南市历城区经十路",phrase:"朝而往暮而归，周而复始日复一日。 兴来每独往，胜事空自知；行到水穷处，坐看云起时。"},{name:"树梢嫩芽-烟台",content:"烟台山景区是亚洲现存的最大的近代领事馆建筑群。建筑群建筑风格各异，时代气息浓郁，保存完好。有亚洲现存最早的英国在其殖民地“外廊式”建筑，有古典式、中西合璧式、英国早期公寓式等建筑，堪称近代建筑的宝库。烟台山近代建筑群汇集了不同国家的不同历史文化特色，是中国半殖民地半封建社会的缩影和见证，已成为研究中国近代建筑史、中西文化交流史和中国近代社会发展史珍贵的实物资料，具有重要的历史、艺术和科学研究价值。烟台山近代建筑群是历史文化的载体，在烟台乃至整个中国近代发展史上占有举足轻重的地位，是烟台市历史文化名城的重要组成部分。山上山下，那一幢幢外国领事馆、官邸、建筑群，记录了烟台作为山东第一个开埠通商口岸的特殊历史；记录了烟台至胶东广大人民忠烈保国的民族主义精神和振兴华夏的志向。<br />\n    此外，烟台山还是一个置山临海风光旖旎的旅游佳地，她以幽雅而著称，山上树木葱茏，红楼青舍，参差隐现，美丽如画，早在康熙年间，烟台山就被誉为“福山八景之首”。在山上，有以“龙王庙”、“忠烈祠”、“狼烟台”为代表的民俗建筑群，又有“燕台石”、“造化奇观”、“盟情崖”、“太白石”、“母子龟”等神奇景点；有高人、墨客的题诗，刻石勒碑，还有美丽动人的神话传说，让人思绪万千，回味无穷。",imgSrc:"spring-2179367_1920.jpg",shootTime:"2021-03-20",shootAdress:"山东省烟台市烟台山",phrase:"初登烟台山，探险一线天；左手击海浪,右手峭壁攀。 人来鱼不惊，海欧几度闲； 举头望前路，峭壁入云端。"},{name:"静谧幽瀑-上饶",content:"江岭，位于婺源县东北部，距县城45公里，总面积38平方公里，每当春暖花开时，置身于江岭万亩梯田中，黄灿灿的油菜花与远山、近水、粉墙、黛瓦相映成趣，构成一幅天人合一的画卷，在这里您可以尽情的释放，让心灵自由飞翔。每当春暖花开时，置身于江岭万亩梯田中，黄灿灿的油菜花与远山、近水、粉墙、黛瓦相映成趣，构成一幅天人合一的画卷，在这里您可以尽情的释放，让心灵自由飞翔。<br />\n    黄灿灿的十万亩梯田油菜花，使江岭成为婺源春天的宠儿，同时这里也是全国较具视觉冲击力的油菜花观赏地。 这里是婺源田园风光的代表。从江岭开始，公路始终在山间盘旋，从江岭向下看，只见层层梯田，曲折的线条，山谷盆地中的小河，河边聚集的三两个村庄，四周围绕着青山，构成了一幅极美的婺源农村风光画卷。<br />\n    “江岭风光”不仅是世界级摄影基地，由于古树、河流、梯田、农舍、农作物合理布局，更是体现了人与自然的亲近、和谐，“天人合一”在这里得以完美展示。尤其是山顶人家成了江岭风光的大背景，远眺粉墙黛瓦掩在黄花绿树间，阵阵云雾飘来，恍若天上人间，被誉为中国“四大花海”之一。",imgSrc:"waterfalls-1144130_1920.jpg",shootTime:"2020-09-15",shootAdress:"江西省上尧市婺源江岭",phrase:"沿山一棹婺溪行，山色苍苍溪水清。拟到黄州说风景，小茅篷底浪花声"}];return(e,l)=>(s(),n("div",z,[J,i("div",Q,[i("ul",null,[(s(),n(p,null,m(a,((e,s)=>{return i("li",{key:s},[i("div",X,[i("img",{src:(a=e.imgSrc,new URL("../../assets/recommend/spring/"+a,t.url).href)},null,8,Y),i("div",Z,[i("span",null,[tt,i("em",null,v(e.shootTime),1)]),i("span",null,[et,i("em",null,v(e.shootAdress),1)])]),i("div",st,[i("p",null,v(e.phrase),1),at])]),i("div",nt,[i("span",null,v(e.name),1),i("p",{innerHTML:e.content},null,8,it),lt])]);var a})),64))])])]))}},rt=[{path:"/",component:N,redirect:"/Main",children:[{path:"/Main",component:{setup:t=>(t,e)=>(s(),n(p,null,[l(G),l(ot)],64))}},{path:"/Travel",component:()=>x((()=>import("./index.db8203ab.js")),["assets/index.db8203ab.js","assets/index.8348a1a9.css","assets/vendor.56f4d408.js"]),redirect:"/Travel/cityCard",children:[{path:"cityCard",component:()=>x((()=>import("./cityCard.f11d5289.js")),["assets/cityCard.f11d5289.js","assets/cityCard.0b6d09ad.css","assets/vendor.56f4d408.js"])},{path:"cityTravel",component:()=>x((()=>import("./cityTravel.d6a011e2.js")),["assets/cityTravel.d6a011e2.js","assets/cityTravel.81f51232.css","assets/vendor.56f4d408.js"])}]},{path:"/Community",component:()=>x((()=>import("./index.4dfa8d3a.js")),["assets/index.4dfa8d3a.js","assets/index.0cee62e8.css","assets/vendor.56f4d408.js"])},{path:"/Statement",component:()=>x((()=>import("./index.0dbe5f9b.js")),["assets/index.0dbe5f9b.js","assets/index.7ff7ea53.css","assets/vendor.56f4d408.js"])}]}],ct=h({history:f(),routes:rt}),dt=g({state:{counter:1},mutations:{add(t){t.counter++}},actions:{}});b(y).use(ct).use(dt).use(_).mount("#app");
