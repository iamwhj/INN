<template>
  <div class="travel">
    <slogen />
    <div class="travel-box">
      <cityNav />
      <div class="travel-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import slogen from "./slogen";
import cityNav from "./cityNav";

export default {
  components: {
    slogen,
    cityNav,
  },
};
</script>

<style lang="scss" scoped>
.travel {
  width: 100%;
  .travel-box {
    overflow: hidden;
    margin-top: 20px;
    .travel-content {
      float: right;
      width: 80%;
      height: 1200px;
      background: #fff;
    }
  }
}
</style>