<template>
  <div class="city-card">
    <div class="card-box">
      <dl>
        <dd v-for="(card, index) in cardList" :key="index">
          <el-card shadow="hover">
            <div
              class="rotating"
              @click="picturesRotatingFlag = !picturesRotatingFlag"
            >
              <img
                :src="getImgUrl('../../assets/card/' + card.positiveSrc)"
                :class="{ 'rotating-active': picturesRotatingFlag }"
              />
              <!-- （旋转切图）一张图片正，一张图片反 -->
              <img
                :src="getImgUrl('../../assets/card/' + card.negativeSrc)"
                :class="{ 'rotating-active': !picturesRotatingFlag }"
              />
            </div>
            <div class="content">
              <span class="title">{{ card.name }}</span>
              <div class="hot">
                <img src="@/assets/icon/like1.png" alt />
                <span>{{ card.like }}</span>
              </div>
            </div>
          </el-card>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const picturesRotatingFlag = ref(true);

const picturesRotating = () =>
  (picturesRotatingFlag.value = !picturesRotatingFlag.value);

const loading = ref(false);

const cardList = [
  {
    name: '差点火候的风火轮',
    positiveSrc: 'city-6599328_1280.jpg',
    negativeSrc: 'thumb4.jpg',
    like: '223'
  }, 
  {
    name: '皎洁斑驳的欧式房',
    positiveSrc: 'bremen-6557996_1280.jpg',
    negativeSrc: 'thumb4.jpg',
    like: '266'
  },
  {
    name: '是但不完全是的路牌',
    positiveSrc: 'signpost-6609445_1280.jpg',
    negativeSrc: 'thumb4.jpg',
    like: '168'
  },
    {
    name: '你打哈的样子真像只喵',
    positiveSrc: 'cat-6492741_1280.jpg',
    negativeSrc: 'thumb4.jpg',
    like: '307'
  },
  {
    name: '这是只鹰...鹰头吧',
    positiveSrc: 'bald-eagle-6481346_1280.jpg',
    negativeSrc: 'thumb4.jpg',
    like: '156'
  },
  {
    name: '不知道什么鸟的羽毛',
    positiveSrc: 'parrot-feathers-6686170_1280.jpg',
    negativeSrc: 'thumb4.jpg',
    like: '257'
  },
  {
    name: '发光了就是宝莲灯',
    positiveSrc: 'lotus-6474572_1280.jpg',
    negativeSrc: 'thumb4.jpg',
    like: '182'
  },
  {
    name: '红枫树下你和我',
    positiveSrc: 'road-5710320_1280.jpg',
    negativeSrc: 'thumb4.jpg',
    like: '132'
  },
  {
    name: 'PUBG草垛大差不离',
    positiveSrc: 'farming-6682584_1280.jpg',
    negativeSrc: 'thumb4.jpg',
    like: '198'
  },
]

const imgModule = import.meta.globEager('../../assets/card/*')
const getImgUrl = (imgPath) => imgModule[imgPath].default || ''

</script>

<style lang="scss">
.city-card {
  padding: 20px;
  .card-box {
    dl {
      display: flex;
      flex-flow: row wrap;
      dd {
        flex: 1 2 30%;
        max-width: 30%;
        min-width: 300px;
        margin-bottom: 30px;
        margin-left: 20px;
        .el-card {
          .el-card__body {
            padding: 10px;
          }
          .rotating {
            position: relative;
            img {
              opacity: 0;
              width: 100%;
              height: 100%;
              transition: all 0.6s ease;
            }
            img:nth-of-type(1) {
              position: absolute;
              top: 0;
              left: 0;
              z-index: 1;
            }
            img:nth-of-type(2) {
              transform: rotateY(180deg);
            }
          }
          .content {
            margin-top: 12px;
            .title {
              display: inline-block;
              font-weight: 600;
              margin-left: 5px;
              width: 260px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .hot {
              display: flex;
              float: right;
              img {
                width: 26px;
                height: 26px;
                transition: all 0.6s ease;
              }
              span {
                transition: all 0.6s ease;
                margin-left: 5px;
                font-size: 18px;
                color: #aaa;
              }
            }
          }
        }
        // TODO点击图片旋转换图 （捣鼓了一下午，好难啊，下次一定！！）
        .rotating-active {
          // animation: picturesRotating 2s ease;
          opacity: 1 !important;
        }
        @keyframes picturesRotating {
          0% {
            transform: rotateY(0deg);
            opacity: 1;
            // transform: scale(1.1);
          }
          100% {
            transform: rotateY(180deg);
            opacity: 0;
          }
        }
      }
    }
    dd:hover {
      .el-card {
        .rotating {
          img {
            // transform: scale(1.1);
          }
        }
        .content {
          .hot {
            img {
              transform: scale(1);
              background: #707070;
              // background: #d81e06;
            }
            span {
              color: #333;
            }
          }
        }
      }
    }
  }
}
</style>