<template>
  <div class="city-nav">
    <div class="city-box">
      <div class="serach-box">
        <el-input v-model="cityName" placeholder="请输入城市名称"></el-input>
        <el-button type="primary" @click="chooseCity(cityName)">
          <i class="el-icon-search"></i>
        </el-button>
      </div>
      <el-divider></el-divider>
      <div class="city-hot">
        <el-badge value="hot" class="item">
          <h4>热门城市：</h4>
        </el-badge>
        <dl @click="chooseCity">
          <dd>北京</dd>
          <dd>上海</dd>
          <dd>杭州</dd>
          <dd>西安</dd>
          <dd>深圳</dd>
          <dd>苏州</dd>
          <dd>南京</dd>
          <dd>六盘水</dd>
          <dd>攀枝花</dd>
          <!-- <dd v-for="(item, index) in cityHotList" :key="index" @click="chooseCity">{{item.name}}</dd> -->
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router'

const cityName = ref("");
const cityHotList = ref([
  { name: "北京" },
  { name: "上海" },
  { name: "杭州" },
  { name: "西安" },
]);

const router = useRouter()

const chooseCity = (e) => {
  if (typeof e !== "string") {
    router.push({
      path: "/Travel/cityTravel",
      query: {
        city: e.target.innerText,
      },
    });
  } else if (e) {
    router.push({
      path: "/Travel/cityTravel",
      query: {
        city: e,
      },
    });
  }
};
</script>

<style lang="scss" scoped>
.city-nav {
  display: inline-block;
  width: 18%;
  min-width: 220px;
  height: 1000px;
  background: #fff;
  .city-box {
    padding: 20px;
    .serach-box {
      .el-input {
        width: 60%;
        margin-right: 16px;
      }
      .el-button {
        width: 26%;
        padding: 11px 0;
        text-align: center;
        i {
          font-size: 16px;
        }
      }
    }
  }
  .city-hot {
    .el-badge {
      h4 {
        margin: 0;
      }
    }
    dl {
      dd {
        float: left;
        width: 30%;
        margin: 0;
        padding: 10px 0;
        cursor: pointer;
        text-align: center;
        user-select: none;
      }
      &::after {
        content: "";
        display: block;
        clear: both;
      }
    }
  }
}
</style>