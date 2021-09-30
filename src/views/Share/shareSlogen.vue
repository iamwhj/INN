<template>
  <div class="share-slogen">
    <div class="slogen-box">
      <img src="@/assets/shareImage/img/photoWall1.jpg" alt="" />
      <!-- <div class="img-box">
        <div class="mid-box">
          <img src="@/assets/shareImage/img/pz.png" alt="">
        </div>
        <div class="left-box">left</div>
        <div class="right-box">right</div>
      </div> -->
    </div>
    <div class="skew-box">
      <img src="@/assets/shareImage/skewBar2.png">
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.share-slogen {
  position: relative;
  min-height: 300px;
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 27px 0 rgba(0, 0, 0, 0.1);
  .slogen-box {
    display: flex;
    width: 1000px;
    height: 100%;
    margin: 0 auto;
    padding: 50px 0;
    // .img-box {
    //   display: flex;
    //   justify-content: space-around;
    //   width: 100%;
    //   @mixin float_img {
    //     width: 30%;
    //     height: 100%;
    //     border: 1px solid red;
    //   }
    //   .mid-box {
    //     @include float_img;
    //     width: 20%;
    //     margin: 0 -200px;
    //     display: flex;
    //     align-items: center;
    //     justify-content: space-around;
    //   }
    //   .left-box {
    //     @include float_img;
    //     order: -1;
    //   }
    //   .right-box {
    //     @include float_img
    //   }
    // }
  }
  .skew-box {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>