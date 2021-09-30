<template>
  <div class="city-travel">
    <div class="title-box">
      <div class="city-name">{{ city }}</div>
      <div class="city-describe">
        <p>
          上有天堂，下有苏杭！古称临安、钱塘，因风景秀丽，素有“人间天堂”的美誉。上有天堂，下有苏杭！古称临安、钱塘，因风景秀丽，素有“人间天堂”的美誉。上有天堂，下有苏杭！古称临安、钱塘，因风景秀丽，素有“人间天堂”的美誉。上有天堂，下有苏杭！古称临安、钱塘，因风景秀丽，素有“人间天堂”的美誉。
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
                  :src="'/src/assets/img/' + item.img_path"
                  fit="fill"
                ></el-image>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="scenery-describe">
            <span>鹤留居</span>
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
    img_path: "thumb (10).jpg",
  },
  {
    img_path: "thumb (6).jpg",
  },
]);
const route = useRoute()
const city = computed(() => route.query.city);
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