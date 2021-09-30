<template>
  <div class="city-card">
    <div class="card-box">
      <dl>
        <dd>
          <el-card shadow="hover">
            <div class="rotating" @click="picturesRotatingFlag = !picturesRotatingFlag">
              <img src="@/assets/img/thumb (5).jpg" :class="{'rotating-active' : picturesRotatingFlag}" />
              <!-- （旋转切图）一张图片正，一张图片反 -->
              <img src="@/assets/img/thumb (4).jpg" :class="{'rotating-active' : !picturesRotatingFlag}" />
            </div>
            <div class="content">
              <span class="title">开往斯里兰卡的列车</span>
              <div class="hot">
                <img src="@/assets/icon/like1.png" alt />
                <span>223</span>
              </div>
            </div>
          </el-card>
        </dd>
        <dd>
          <el-card shadow="hover">
            <div class="rotating" @click="picturesRotatingFlag = !picturesRotatingFlag">
              <img src="@/assets/img/thumb (5).jpg" :class="{'rotating-active' : picturesRotatingFlag}" />
              <img src="@/assets/img/thumb (4).jpg" :class="{'rotating-active' : !picturesRotatingFlag}" />
            </div>
            <div class="content">
              <span class="title">开往斯里兰卡的列车</span>
              <div class="hot">
                <img src="@/assets/icon/like1.png" alt />
                <span>223</span>
              </div>
            </div>
          </el-card>
        </dd>
        <dd>
          <el-card shadow="hover">
            <div class="rotating" @click="picturesRotatingFlag = !picturesRotatingFlag">
              <img src="@/assets/img/thumb (5).jpg" :class="{'rotating-active' : picturesRotatingFlag}" />
              <img src="@/assets/img/thumb (4).jpg" :class="{'rotating-active' : !picturesRotatingFlag}" />
            </div>
            <div class="content">
              <span class="title">开往斯里兰卡的列车</span>
              <div class="hot">
                <img src="@/assets/icon/like1.png" alt />
                <span>223</span>
              </div>
            </div>
          </el-card>
        </dd>
        <dd>
          <el-card shadow="hover">
            <div class="rotating" @click="picturesRotatingFlag = !picturesRotatingFlag">
              <img src="@/assets/img/thumb (5).jpg" :class="{'rotating-active' : picturesRotatingFlag}" />
              <img src="@/assets/img/thumb (4).jpg" :class="{'rotating-active' : !picturesRotatingFlag}" />
            </div>
            <div class="content">
              <span class="title">开往斯里兰卡的列车</span>
              <div class="hot">
                <img src="@/assets/icon/like1.png" alt />
                <span>223</span>
              </div>
            </div>
          </el-card>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const picturesRotatingFlag = ref(false)

const picturesRotating = () => picturesRotatingFlag.value = !picturesRotatingFlag.value
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
              transition: all .6s ease;
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
                transition: all .6s ease;
              }
              span {
                transition: all .6s ease;
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