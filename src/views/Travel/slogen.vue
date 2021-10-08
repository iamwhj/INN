<template>
  <div class="slogen">
    <div class="slider-box">
      <el-carousel :interval="6000" type="card" height="400px">
        <el-carousel-item v-for="(item, index) in imgList" :key="index">
          <el-image
            :src="'/src/assets/slider-img/' + item.img_path"
            fit="fill"
          ></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const imgList = ref([
  {
    img_path: "slider1.jpg",
  },
  {
    img_path: "slider2.jpg",
  },
  {
    img_path: "slider3.jpg",
  },
  {
    img_path: "slider4.jpg",
  },
  {
    img_path: "slider5.jpg",
  },
  {
    img_path: "slider6.jpeg",
  },
]);
</script>

<style lang="scss">
.slogen {
  height: 400px;
  background: #fff;
  box-shadow: 0 2px 27px 0 rgba(0, 0, 0, 0.1);
  .slider-box {
    width: 80%;
    margin: 0 auto;
    .el-image {
      width: 100%;
      height: 100%;
      img {
        transition: all 1.2s ease;
        opacity: 0.8;
      }
    }
    .is-active {
      img {
        opacity: 1;
      }
    }
  }
}
</style>