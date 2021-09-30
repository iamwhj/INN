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

<script setup>
import slogen from "./slogen.vue";
import cityNav from "./cityNav.vue";
</script>

<style lang="scss" scoped>
.travel {
  width: 100%;
  .travel-box {
    overflow: hidden;
    margin-top: 20px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    .travel-content {
      // float: right;
      width: 80%;
      min-width: 1000px;
      min-height: 1200px;
      background: #fff;
    }
  }
}
</style>