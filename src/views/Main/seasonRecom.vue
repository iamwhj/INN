<template>
  <div class="seasonRecom">
    <div class="topBar">
      <span>春季</span>
      <span
        >朝往暮息，春去春又来。春来万物生，遍野百花放！---熬过严寒迎来的便是成长。</span
      >
    </div>
    <div class="recomList">
      <ul>
        <li v-for="(view, index) in recomList" :key="index">
          <div class="img-box">
            <img :src="'/src/assets/recommend/spring/' + view.imgSrc" />
            <div class="buttom-box">
              <span>
                <i class="el-icon-time"></i>
                <em>{{ view.shootTime }}</em>
              </span>
              <span>
                <i class="el-icon-location-information"></i>
                <em>{{ view.shootAdress }}</em>
              </span>
            </div>
            <div class="recommendation-box">
              <p>{{ view.phrase }}</p>
              <div class="circle"></div>
            </div>
          </div>
          <div class="describe-box">
            <span>{{ view.name }}</span>
            <p v-html="view.content"></p>
            <div class="backgroundImage">
              <img
                src="../../assets/sun.png"
                class="backgroundImage"
                style="width: 100px; height: 100px"
              />
              <div class="backgroundImage-bottom">
                <img src="../../assets/Dandelion.png" style="width: 200px" />
                <img src="../../assets/InkGrass.png" style="width: 200px" />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const recomList = [
    {
    name: '红花玉兰-武汉',
    content: `关于玉兰花的传说，其中贯穿着中国传统的民间故事色彩。故事讲的是很久以前在一处深山里住着三个姐妹，大姐叫红玉兰，二姐叫白玉兰，小妹叫黄玉兰。一天她们下山游玩，发现村子里冷水秋烟，一片死寂，三姐妹十分惊异，于是，向村子里的人问讯后得知，原来秦始皇赶山填海，杀死了龙虾公主，从此，龙王爷就跟张家界成了仇家，龙王锁了盐库，不让张家界的人吃盐，终于导致了瘟疫发生，死了好多人。三姐妹十分同情他们，于是决定帮大家讨盐。然而这又何等容易？在遭到龙王多次拒绝以后，三姐妹只得从看守盐仓的蟹将军入手，用自己酿制的花香迷倒了蟹将军，趁机将盐仓凿穿，把所有的盐都浸入海水中。村子里的人得救了，三姐妹却被龙王变作了花树。后来，人们为了纪念她们，就将那种花树称作“玉兰花”，而她们酿造的花香也变成了她们自己的香味。故事很简单，也很唯美，却也反映了人们对美好事物的追求、对完美的向往。<br />
    玉兰花外形极像莲花，但并不同。盛开时，花瓣展向四方，使庭院青白片片，白光耀眼，具有很高的观赏价值；再加上清香阵阵，沁人心脾，实为美化庭院之理想花卉。花开时异常惊艳，满树花香，花叶舒展而饱满，但花期短暂，但开放之时特别绚烂，代表一种一往无前的孤寒气和决绝的孤勇，优雅而款款大方。`,
    imgSrc: 'magnolia-2199922_1920.jpg',
    shootTime: '2020-08-08',
    shootAdress: '湖北省武汉市武昌区洪山公园',
    phrase: '池烟径柳漫黄埃，苦为辛夷酹一杯；如此高花白于雪，年年偏是斗风开。'
  },
  {
    name: '春起海棠-济南',
    content: `济南春天其实给我最大的感觉就是没有春天，但是呢我又沉醉于其中！约上三五个朋友，去南部山区挖挖荠菜，看看桃花，然后再逛逛景点，其中感觉真的不错！
              现在的春天我更感觉像一个委婉的小女子，一笑一颦。看着你不说话，让你乐在其中！还记得吗？
              春天到了，带上孩子去哪里玩？对！去黑虎泉！潺潺泉水，柳叶飘飘，一杯大碗茶，一口泉水，喝的是甘甜，品的是人生！<br />

              济南的春天能明显感受到勃勃的生机，冬天的时候一眼望去绿植基本上都是光秃秃的，严冬来临前它们就会把叶子都给褪去，减少不必要的能量消耗，其实这也是为春天做准备。
              春天一到便会满园花香，说来也是奇怪，许多的树都是先开花后长叶，光秃秃的枝丫上开满鲜花，
              看到得多了身为南方人的我也是见怪不怪了。<br />

              既然说到植物，那咱也来提一提动物了，最常见便是麻雀了，基本都是两三只结伴觅食，夏天的时候只只都鸟模鸟样，梭形的轻巧的身体，长长的羽毛，到了冬天就发生大变化了
              个个圆得跟个球一样，还有许多绒毛，这模样简直是上升了一个档次。<br />

              济南的春天也是美景趣事多多，没去过的小伙伴不妨一试。走过了千上万水，不妨来领略这勃勃的生机。`,
    imgSrc: '-1c00e8bf3da3c390.jpg',
    shootTime: '2019-05-10',
    shootAdress: '山东省济南市历城区经十路',
    phrase: '朝而往暮而归，周而复始日复一日。 兴来每独往，胜事空自知；行到水穷处，坐看云起时。'
  },
  {
    name: '树梢嫩芽-烟台',
    content: `烟台山景区是亚洲现存的最大的近代领事馆建筑群。建筑群建筑风格各异，时代气息浓郁，保存完好。有亚洲现存最早的英国在其殖民地“外廊式”建筑，有古典式、中西合璧式、英国早期公寓式等建筑，堪称近代建筑的宝库。烟台山近代建筑群汇集了不同国家的不同历史文化特色，是中国半殖民地半封建社会的缩影和见证，已成为研究中国近代建筑史、中西文化交流史和中国近代社会发展史珍贵的实物资料，具有重要的历史、艺术和科学研究价值。烟台山近代建筑群是历史文化的载体，在烟台乃至整个中国近代发展史上占有举足轻重的地位，是烟台市历史文化名城的重要组成部分。山上山下，那一幢幢外国领事馆、官邸、建筑群，记录了烟台作为山东第一个开埠通商口岸的特殊历史；记录了烟台至胶东广大人民忠烈保国的民族主义精神和振兴华夏的志向。<br />
    此外，烟台山还是一个置山临海风光旖旎的旅游佳地，她以幽雅而著称，山上树木葱茏，红楼青舍，参差隐现，美丽如画，早在康熙年间，烟台山就被誉为“福山八景之首”。在山上，有以“龙王庙”、“忠烈祠”、“狼烟台”为代表的民俗建筑群，又有“燕台石”、“造化奇观”、“盟情崖”、“太白石”、“母子龟”等神奇景点；有高人、墨客的题诗，刻石勒碑，还有美丽动人的神话传说，让人思绪万千，回味无穷。`,
    imgSrc: 'spring-2179367_1920.jpg',
    shootTime: '2021-03-20',
    shootAdress: '山东省烟台市烟台山',
    phrase: '初登烟台山，探险一线天；左手击海浪,右手峭壁攀。 人来鱼不惊，海欧几度闲； 举头望前路，峭壁入云端。'
  },
  {
    name: '静谧幽瀑-上饶',
    content: `江岭，位于婺源县东北部，距县城45公里，总面积38平方公里，每当春暖花开时，置身于江岭万亩梯田中，黄灿灿的油菜花与远山、近水、粉墙、黛瓦相映成趣，构成一幅天人合一的画卷，在这里您可以尽情的释放，让心灵自由飞翔。每当春暖花开时，置身于江岭万亩梯田中，黄灿灿的油菜花与远山、近水、粉墙、黛瓦相映成趣，构成一幅天人合一的画卷，在这里您可以尽情的释放，让心灵自由飞翔。<br />
    黄灿灿的十万亩梯田油菜花，使江岭成为婺源春天的宠儿，同时这里也是全国较具视觉冲击力的油菜花观赏地。 这里是婺源田园风光的代表。从江岭开始，公路始终在山间盘旋，从江岭向下看，只见层层梯田，曲折的线条，山谷盆地中的小河，河边聚集的三两个村庄，四周围绕着青山，构成了一幅极美的婺源农村风光画卷。<br />
    “江岭风光”不仅是世界级摄影基地，由于古树、河流、梯田、农舍、农作物合理布局，更是体现了人与自然的亲近、和谐，“天人合一”在这里得以完美展示。尤其是山顶人家成了江岭风光的大背景，远眺粉墙黛瓦掩在黄花绿树间，阵阵云雾飘来，恍若天上人间，被誉为中国“四大花海”之一。`,
    imgSrc: 'waterfalls-1144130_1920.jpg',
    shootTime: '2020-09-15',
    shootAdress: '江西省上尧市婺源江岭',
    phrase: '沿山一棹婺溪行，山色苍苍溪水清。拟到黄州说风景，小茅篷底浪花声'
  }
]

</script>

<style lang="scss">
.seasonRecom {
  padding: 30px 20px;
  .topBar {
    background: #eee;
    span:nth-of-type(1) {
      font-size: 26px;
      color: darkcyan;
    }
    span:nth-of-type(2) {
      font-size: 18px;
      color: #666;
      line-height: 35px;
      margin-left: 30%;
    }
  }
  .recomList {
    ul {
      list-style: none;
      margin: 10px 0 0 0;
      padding: 0;
      li {
        margin-bottom: 30px;
        .img-box {
          position: relative;
          display: inline-block;
          width: 59%;
          img {
            width: 100%;
            height: 620px;
            margin-bottom: 3px;
          }
          .buttom-box {
            text-align: center;
            margin-right: 200px;
            span {
              color: #666;
              transform: scale(1);
              transition: all 0.8s ease;
              i {
                font-size: 18px;
                transition: all 0.6s ease;
              }
              em {
                margin-left: 3px;
              }
              &:nth-of-type(2) {
                margin-left: 30px;
              }
              &:hover {
                color: rgb(90, 187, 216);
                i {
                  color: lightseagreen;
                  transform: scale(1.3);
                }
              }
            }
          }
          .recommendation-box {
            position: absolute;
            top: 40%;
            left: 40%;
            transform: translate(-50%, -50%);
            height: 200px;
            width: 200px;
            border-radius: 10px;
            background-color: rgba(0, 0, 0, 0.6);
            border: 2px solid rgb(170, 118, 97);
            transition: all 0.6s ease;
            opacity: 0;
            &::before {
              content: "";
              display: block;
              opacity: 0;
              width: 2px;
              height: 122px;
              position: absolute;
              bottom: -111px;
              right: -32px;
              background-color: rgb(224, 85, 120);
              transform: rotateZ(-30deg);
              transition: all 0.6s ease 1.2s;
            }
            &::after {
              content: "";
              display: block;
              opacity: 0;
              width: 2px;
              height: 100px;
              position: absolute;
              bottom: -154px;
              right: -112px;
              background-color: rgb(224, 85, 120);
              transform: rotateZ(90deg);
              transition: all 0.6s ease 0.8s;
            }
            p {
              margin: 0;
              padding: 5px 4px;
              color: #fff;
              font-size: 18px;
              opacity: 0;
              transition: all 1s ease 1.6s;
            }
            .circle {
              transform: rotateZ(20deg);
              position: absolute;
              bottom: -117px;
              right: -187px;
              height: 26px;
              width: 26px;
              border-radius: 50%;
              background-color: rgba(214, 140, 140, 0.6);
              transition: all 0.8s ease;
              &::before {
                content: "";
                display: block;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 4px;
                height: 4px;
                border-radius: 50%;
                z-index: 1;
                background: rgb(117, 216, 223);
              }
              &::after {
                content: "";
                display: block;
                position: absolute;
                top: 50%;
                right: 50%;
                transform: translate(0%, -1.3px);
                width: 13px;
                height: 2px;
                background: #fff;
              }
            }
          }
          @keyframes fontAction {
            0% {
              margin-top: 260px;
              opacity: 0;
            }
            70% {
              margin-top: -50px;
              opacity: 0.6;
            }
            100% {
              margin-top: 0px;
              opacity: 1;
            }
          }
          &:hover {
            .recommendation-box {
              opacity: 1;
              &::before,
              &::after {
                opacity: 1;
              }
              .circle {
                transform: rotateZ(360deg);
                background: rgba(224, 85, 120, 0.8);
              }
              p {
                opacity: 1;
                animation: fontAction 0.8s ease 1.6s;
              }
            }
          }
        }
        .describe-box {
          position: relative;
          float: right;
          width: 40%;
          height: 620px;
          // border: 1px solid darkcyan;
          background-color: #fff;
          // background: url('../../assets/way.png') no-repeat;
          span {
            font-size: 24px;
            font-weight: 600;
            letter-spacing: 2px;
            margin-left: 10px;
          }
          p {
            margin-top: 6px !important;
            margin: 0;
            padding: 0;
            // text-indent: 2em;
            font-size: 18px;
            line-height: 24px;
            color: #333;
          }
          .backgroundImage {
            position: absolute;
            top: 70px;
            width: 40%;
            height: 550px;
            opacity: 0.6;
            &-bottom {
              display: flex;
              position: absolute;
              bottom: 0;
              img:nth-of-type(1) {
                margin-left: 80px;
              }
              img:nth-of-type(2) {
                margin-left: 20px;
              }
            }
          }
        }
      }
    }
  }
}
</style>