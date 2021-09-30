<template>
  <div class="footer">
    <div class="divide"></div>
    <div class="footer-content">
      <div class="left">
        <div class="left-box">
          <p>一份属于青春的奇思妙想</p>
          <p>既然选择了花哨，那就将其进行到底。</p>
          <p>既然选择了远方，那便只顾风雨兼程。</p>
          <p>作者：Daw</p>
        </div>
      </div>
      <div class="right">
        <p>图片均来源网上，侵权请联系我删除</p>
        <p>Email: 962983053@qq.com</p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 200px;
  background: rgba(0, 0, 0, 0.9);
  .divide {
    height: 6px;
    background: linear-gradient(to right, #c9d6ff, #e2e2e2);
  }
  .footer-content {
    position: relative;
    font-size: 18px;
    color: #fff;
    .left {
      width: 60%;
      &-box {
        width: 320px;
        margin-left: 220px;
      }
    }
    .right {
      position: absolute;
      top: 0;
      right: 0;
      width: 40%;
      padding: 20px;
      border-left: 2px solid #fff;
    }
  }
}
</style>