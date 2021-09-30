<template>
  <div class="nav-bar">
    <div class="logo-box">
      <div class="wave-box">
        <div class="circle"></div>
      </div>
      <div class="img-box">
        <router-link to="/">
          <img src="@/assets/logo7.png" alt="" />
        </router-link>
      </div>
    </div>
    <div class="nav-list">
      <ul>
        <router-link to="/">
          <li><span>首页</span></li>
        </router-link>
        <router-link to="/Travel">
          <li><span>旅行</span></li>
        </router-link>
        <router-link to="/Community">
          <li><span>社区</span></li>
        </router-link>
        <router-link to="/Statement">
          <li><span>说明</span></li>
        </router-link>
      </ul>
    </div>
    <div class="login-box">
      <span>
        <i class="el-icon-s-custom"></i>
        <em>hello Daw</em>
      </span>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.nav-bar {
  height: 40px;
  background-color: rgba(0, 0, 0, 1);
  color: #fff;
  overflow: hidden;
  .logo-box {
    position: absolute;
    top: 0px;
    left: 6%;
    overflow: hidden;
    .img-box {
      width: 120px;
      height: 40px;
      background: #fff;
    }

    $wave-color: #6dd5ed;
    .wave-box {
      position: absolute;
      bottom: 0;
      width: 120px;
      height: 24px;
      background: $wave-color;
      animation: wave-action 5s ease infinite;
      @mixin wave-circle($wave-color: skyblue, $wave-bottom: 5px) {
        content: "";
        display: block;
        position: absolute;
        bottom: $wave-bottom;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: $wave-color;
      }
      &::before {
        @include wave-circle(#fff, 18px);
        left: 0;
      }
      &::after {
        @include wave-circle($wave-color);
        left: 24px;
      }
      .circle {
        @include wave-circle(#fff, 18px);
        left: 48px;
        &::after {
          @include wave-circle($wave-color, -14px);
          left: 24px;
        }
        &::before {
          @include wave-circle(#fff, 0);
          left: 48px;
        }
      }
      @keyframes wave-action {
        0% {
          margin-left: -17px;
        }
        50% {
          margin-left: 17px;
        }
        100% {
          margin-left: -17px;
        }
      }
    }
    a {
      display: block;
      img {
        position: absolute;
        width: 120px;
        height: 40px;
      }
    }
  }
  .nav-list {
    position: absolute;
    right: 36%;
    @mixin inner-border {
      display: block;
      content: "";
      position: absolute;
      transition: all 0.5s ease;
    }
    ul {
      margin: 2px 0;
      list-style: none;
      line-height: 36px;
      li {
        color: #fff;
        float: left;
        position: relative;
        height: 100%;
        padding: 0 20px;
        font-family: Arial;
        font-weight: 500;
        cursor: pointer;
        &::before {
          @include inner-border();
          left: 0;
          top: 0;
          width: 2px;
          height: 0px;
          background: red;
        }
        &::after {
          @include inner-border();
          left: 0;
          top: 0;
          width: 0px;
          height: 2px;
          background: green;
        }
        & span::after {
          @include inner-border();
          right: 0;
          bottom: 0;
          width: 2px;
          height: 0px;
          background: darkmagenta;
        }
        & span::before {
          @include inner-border();
          right: 0;
          bottom: 0;
          width: 0px;
          height: 2px;
          background: darkolivegreen;
        }
        &:hover {
          color: rgb(115, 223, 241);
        }
        &:hover::before,
        &:hover span::after {
          height: 100%;
        }
        &:hover::after,
        &:hover span::before {
          width: 100%;
        }
      }
    }
  }
  .login-box {
    position: absolute;
    right: 4%;
    line-height: 40px;
    i {
      font-size: 18px;
      margin-right: 10px;
    }
  }
}
</style>