<template>
  <div class="city-travel">
    <div class="title-box">
      <div class="city-name">{{ city }}</div>
      <div class="city-describe">
        <p>
          {{ describe }}
        </p>
      </div>
    </div>
    <el-divider></el-divider>
    <div class="city-list">
      <ul>
        <li>
          <div class="scenery-img">
            <!-- <img src="@/assets/img/thumb (10).jpg" alt=""> -->
            <el-carousel
              height="500px"
              direction="vertical"
              :autoplay="false"
              trigger="click"
            >
              <el-carousel-item v-for="(item, index) in imgList" :key="index">
                <el-image
                  :src="getImgUrl(item.img_path)"
                  fit="fill"
                ></el-image>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="scenery-describe">
            <span>妙手白玉</span>
            <p>
              介里系图片描述，介绍景点的详细说明。介里系图片描述，介绍景点的详细说明介里系图片描述，介绍景点的详细说明介里系图片描述，介绍景点的详细说明介里系图片描述，介绍景点的详细说明
              介里系图片描述，介绍景点的详细说明。介里系图片描述，介绍景点的详细说明介里系图片描述，介绍景点的详细说明介里系图片描述，介绍景点的详细说明介里系图片描述，介绍景点的详细说明
              介里系图片描述，介绍景点的详细说明。介里系图片描述，介绍景点的详细说明介里系图片描述，介绍景点的详细说明介里系图片描述，介绍景点的详细说明介里系图片描述，介绍景点的详细说明
              介里系图片描述，介绍景点的详细说明。介里系图片描述，介绍景点的详细说明介里系图片描述，介绍景点的详细说明介里系图片描述，介绍景点的详细说明介里系图片描述，介绍景点的详细说明
              介里系图片描述，介绍景点的详细说明。介里系图片描述，介绍景点的详细说明介里系图片描述，介绍景点的详细说明介里系图片描述，介绍景点的详细说明介里系图片描述，介绍景点的详细说明
            </p>
          </div>
        </li>
        <li>
          <div class="scenery-img">
            <!-- <img src="@/assets/img/thumb (10).jpg" alt=""> -->
            <el-carousel
              height="500px"
              direction="vertical"
              :autoplay="false"
              trigger="click"
            >
              <el-carousel-item v-for="(item, index) in imgList1" :key="index">
                <el-image
                  :src="getImgUrl(item.img_path)"
                  fit="fill"
                ></el-image>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="scenery-describe">
            <span>沃土黄金</span>
            <p>
              介里系图片描述，介绍景点的详细说明。介里系图片描述，介绍景点的详细说明介里系图片描述，介绍景点的详细说明介里系图片描述，介绍景点的详细说明介里系图片描述，介绍景点的详细说明
              介里系图片描述，介绍景点的详细说明。介里系图片描述，介绍景点的详细说明介里系图片描述，介绍景点的详细说明介里系图片描述，介绍景点的详细说明介里系图片描述，介绍景点的详细说明
              介里系图片描述，介绍景点的详细说明。介里系图片描述，介绍景点的详细说明介里系图片描述，介绍景点的详细说明介里系图片描述，介绍景点的详细说明介里系图片描述，介绍景点的详细说明
              介里系图片描述，介绍景点的详细说明。介里系图片描述，介绍景点的详细说明介里系图片描述，介绍景点的详细说明介里系图片描述，介绍景点的详细说明介里系图片描述，介绍景点的详细说明
              介里系图片描述，介绍景点的详细说明。介里系图片描述，介绍景点的详细说明介里系图片描述，介绍景点的详细说明介里系图片描述，介绍景点的详细说明介里系图片描述，介绍景点的详细说明
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from 'vue-router'

const imgList = ref([
  {
    img_path: "thumb3.jpg",
  },
  {
    img_path: "thumb6.jpg",
  },
]);
const imgList1 = ref([
  {
    img_path: "-62a33989d2c6391c.jpg",
  },
  {
    img_path: "thumb10.jpg",
  },
]);
const route = useRoute()
const city = computed(() => route.query.city);

const cityList = [
  {
    name: '北京',
    describe: '北京地势西北高、东南低。西部、北部和东北部三面环山，东南部是一片缓缓向渤海倾斜的平原。境内流经的主要河流有：永定河、潮白河、北运河、拒马河等，多由西北部山地发源，穿过崇山峻岭，向东南蜿蜒流经平原地区，最后分别汇入渤海。北京的气候为暖温带半湿润半干旱季风气候，夏季高温多雨，冬季寒冷干燥，春、秋短促',
  },
  {
    name: '上海',
    describe: '上海地处中国东部、长江入海口、东临东海，北、西与江苏、浙江两省相接]  ，界于东经120°52′-122°12′，北纬30°40′-31°53′之间。战国时，上海是春申君的封邑，故别称申。晋朝时，因渔民创造捕鱼工具“扈”，江流入海处称“渎”，因此松江下游一带称为“扈渎”，后又改“沪”，故上海简称“沪”。',
  },
  {
    name: '杭州',
    describe: '杭州地处中国华东地区、钱塘江下游、东南沿海、浙江北部、京杭大运河南端，是环杭州湾大湾区核心城市  、沪嘉杭G60科创走廊中心城市  、国际重要的电子商务中心  。杭州人文古迹众多，西湖及其周边有大量的自然及人文景观遗迹，具代表性的有西湖文化、良渚文化、丝绸文化、茶文化',
  },
  {
    name: '西安',
    describe: '西安地处关中平原中部、北濒渭河、南依秦岭，八水润长安，是联合国教科文组织于1981年确定的“世界历史名城”  ，是中华文明和中华民族重要发祥地之一，丝绸之路的起点  ，历史上先后有十多个王朝在此建都  ，丰镐都城、秦阿房宫、兵马俑，汉未央宫、长乐宫，隋大兴城，唐大明宫、兴庆宫等勾勒出“长安情结”',
  },
  {
    name: '深圳',
    describe: '深圳最早的前身为广州宝安县  ，深圳之名始见史籍于明朝永乐八年（1410年），1979年成立深圳市，1980年成为中国设立的第一个经济特区，中国改革开放的窗口和新兴移民城市，创造了举世瞩目的“深圳速度”，被誉为“中国硅谷',
  },
  {
    name: '苏州',
    describe: '苏州是首批国家历史文化名城之一，有近2500年历史，是吴文化的重要发祥地，有“人间天堂”的美誉。中国私家园林的代表——苏州古典园林和中国大运河苏州段被联合国教科文组织列为世界文化遗产',
  },
  {
    name: '南京',
    describe: '南京地处中国东部、长江下游、濒江近海，是中国东部战区司令部驻地  ，是国务院规划定位的长三角辐射带动中西部地区发展的重要门户城市  ，也是东部沿海经济带与长江经济带战略交汇的重要节点城市',
  },
  {
    name: '六盘水',
    describe: '六盘水是国家西电东送的主要城市，西南乃至华南地区重要的能源原材料工业基地，煤炭、电力、冶金、建材、核桃乳、洋芋片、富硒茶、山城啤酒、矿泉水、生物制药构成了市内的重要经济发展。特产有风猪、猕猴桃、杜仲、天麻、核桃',
  },
  {
    name: '攀枝花',
    describe: '攀枝花市是全国唯一以花命名的城市，享有“花是一座城，城是一朵花”的美誉；攀枝花是万里长江上游第一城，金沙江、雅砻江在此交汇；攀枝花是四川南向门户，是四川通往南亚、东南亚的最近点；攀枝花是四川唯一的亚热带水果生产基地，盛产芒果、枇杷、莲雾、石榴、草莓、樱桃等特色水果，一年四季鲜果不断。',
  },
]
const describe = computed(() => {
  let curCity = cityList.filter(c => c.name === city.value) || []
  return curCity.length ? curCity[0].describe : ''
})

const getImgUrl = (imgPath) => new URL('../../assets/img/'+ imgPath, import.meta.url).href

</script>

<style lang="scss" scoped>
.city-travel {
  padding: 20px;
  .title-box {
    $title-size: 24px;
    .city-name {
      font-size: $title-size;
      font-weight: 600;
      color: #333;
    }
    .city-describe {
      p {
        text-indent: $title-size;
        font-size: 15px;
      }
    }
  }
  .city-list {
    ul {
      list-style: none;
      padding: 0 20px;
      li {
        width: 100%;
        height: 500px;
        margin-bottom: 30px;
        .scenery-img {
          display: inline-block;
          width: 60%;
          height: 100%;
          .el-image {
            width: 100%;
            height: 100%;
          }
          v-deep .el-carousel__indicators {
            background-color: rgba(0, 0, 0, 0.6);
            border-radius: 4px;
          }
        }
        .scenery-describe {
          float: right;
          width: 40%;
          span {
            font-size: 20px;
            font-weight: 600;
            letter-spacing: 2px;
            margin-left: 16px;
          }
          p {
            padding: 0 16px;
            text-indent: 2em;
            letter-spacing: 2px;
            line-height: 1.8em;
            color: #333;
            max-height: 400px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 14;
            overflow: hidden;
          }
        }

        v-deep .el-carousel__button {
          background-color: lightcyan;
        }
      }
    }
  }
}
</style>