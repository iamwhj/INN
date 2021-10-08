<template>
  <div class="community">
    <div class="community-title">
      <span class="title">分享日常</span>
      <el-divider content-position="center"
        >艺术源于生活，生活造就艺术</el-divider
      >
    </div>
    <dl>
      <dd>
        <div class="img-box">
          <img src="@/assets/img/thumb (8).jpg" alt="" />
        </div>
        <div class="img-info">
          <div class="img-story">
            <p>
              图片描述：
              “我的天空里没有太阳，总是黑夜，但并不暗，因为有东西代替了太阳，虽然没有太阳那样明亮，但对我来说已经足够，
              凭借这份亮光，我便能把黑夜当成白天，我从来没有太阳，所以不怕失去。”
              <span> ——东野圭吾《白夜行》 </span>
            </p>
          </div>
          <div class="img-tips">
            <p>
              <i class="el-icon-camera"></i>
              :
              <span>SONY ILCE-7M3C</span>
            </p>
            <p>
              <i class="el-icon-location-information"></i>
              :
              <span>莱州市渠成区</span>
            </p>
            <p>
              <i class="el-icon-chat-line-round"></i>
              <span> 263</span>
            </p>
            <p>
              <i
                ><img
                  src="@/assets/icon/praise.png"
                  alt=""
                  style="width: 22px; height: 22px; vertical-align: bottom"
              /></i>
              <span> 217</span>
            </p>
          </div>
        </div>
      </dd>
      <dd>
        <div class="img-box">
          <img src="@/assets/shareImage/22358921_m.jpg" alt="" />
        </div>
        <div class="img-info">
          <div class="img-story">
            <p>
              图片描述：
              世人总说彩虹总在风雨后，可又有多少人能熬过这狂风暴雨，看得见这绚丽彩虹呢
              <span> ——呱啦《犀牛书》 </span>
            </p>
          </div>
          <div class="img-tips">
            <p>
              <i class="el-icon-camera"></i>
              :
              <span>SONY ILCE-7M3C</span>
            </p>
            <p>
              <i class="el-icon-location-information"></i>
              :
              <span>莱州市渠成区</span>
            </p>
            <p>
              <i class="el-icon-chat-line-round"></i>
              <span> 263</span>
            </p>
            <p>
              <i
                ><img
                  src="@/assets/icon/praise.png"
                  alt=""
                  style="width: 22px; height: 22px; vertical-align: bottom"
              /></i>
              <span> 217</span>
            </p>
          </div>
        </div>
      </dd>
      <dd>
        <div class="img-box">
          <img src="@/assets/shareImage/city-6220689_1920.jpg" alt="" />
        </div>
        <div class="img-info">
          <div class="img-story">
            <p>
              图片描述：
              你说你喜欢晚霞，晚霞预示着这一天即将结束，火烧云把大地照耀的金灿灿
              <span> ——毕老弟《红宝书》 </span>
            </p>
          </div>
          <div class="img-tips">
            <p>
              <i class="el-icon-camera"></i>
              :
              <span>SONY ILCE-7M3C</span>
            </p>
            <p>
              <i class="el-icon-location-information"></i>
              :
              <span>莱州市渠成区</span>
            </p>
            <p>
              <i class="el-icon-chat-line-round"></i>
              <span> 263</span>
            </p>
            <p>
              <i
                ><img
                  src="@/assets/icon/praise.png"
                  alt=""
                  style="width: 22px; height: 22px; vertical-align: bottom"
              /></i>
              <span> 217</span>
            </p>
          </div>
        </div>
      </dd>
    </dl>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
.community {
  background: #fff;
  margin-top: 20px;
  &-title {
    text-align: center;
    padding-top: 20px;
    .title {
      font-size: 20px;
      font-weight: 400;
      color: #1f2f3d;
    }
  }
  dl {
    margin: 0;
    background: #f8f8f8;
    dd {
      margin: 0;
      padding: 20px;
      background: #fff;
      margin-top: 10px;
      box-shadow: 0px 12px 27px 0px rgba(0, 0, 0, 0.1);
      .img-box {
        img {
          width: 100%;
          height: 600px;
        }
      }
      .img-info {
        .img-story {
        }
        .img-tips {
          display: flex;
          p {
            margin-right: 40px;
          }
        }
      }
    }
  }
}
</style>