<template>
  <div class="axis">
    <div class="avatar">
      <div class="left">
        <svg id="left1" height="49%" width="100%">
          <polygon
            points="0 0, 1300 0, 1100 392, 0 392, 0 0"
            fill="transparent"
          />
        </svg>
        <div class="divider"></div>
        <svg id="left2" height="49%" width="100%">
          <polygon
            points="0 0, 1090 0, 900 392, 0 392, 0 0"
            fill="transparent"
          />
        </svg>
      </div>
      <div class="right">
        <div class="right-box">
          <svg
            class="right1"
            height="49%"
            width="100%"
            style="overflow: visible"
          >
            <pattern
              id="avatar1"
              width="100%"
              height="100%"
              patternContentUnits="objectBoundingBox"
            >
              <image
                width="1.5"
                height="1"
                xlink:href="../../assets/img/thumb (11s).jpg"
              />
            </pattern>
            <polygon
              points="200 0, 850 0, 850 392, 0 392"
              fill="url(#avatar1)"
            />
          </svg>
          <div class="divider" style="width: 110%"></div>
          <svg
            class="right2"
            height="49%"
            width="100%"
            style="overflow: visible"
          >
            <pattern
              id="avatar2"
              width="100%"
              height="100%"
              patternContentUnits="objectBoundingBox"
            >
              <image
                width="1.5"
                height="1.1"
                xlink:href="../../assets/img/thumb (12).jpg"
              />
            </pattern>
            <polygon
              points="200 0, 1050 0, 1050 392, 0 392"
              fill="url(#avatar2)"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="flutter">
      <div class="flutter-box">
        <span>世界辣么大，我也想去看看</span>
        <router-link to="/Travel/cityCard" class="pan-btn tiffany-btn">GO AGAIN!</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
@import "@/style/btn.scss";

.axis {
  position: relative;
  background-color: #fff;
  .avatar {
    height: 800px;
    font-size: 0px;
    overflow: hidden;
    .divider {
      box-sizing: content-box;
      width: 100%;
      height: 1%;
      border-top: 7px solid white;
      border-bottom: 7px solid white;
      z-index: 2;
      background: red;
    }
    .left {
      position: relative;
      height: 100%;
      width: 69%;
      display: inline-block;
      @keyframes leftAction {
        0% {
          opacity: 0;
          transform: scale(1.5);
        }
        50% {
          opacity: 0.6;
          transform: scale(1);
        }
        100% {
          opacity: 1;
        }
      }
      &::after {
        position: absolute;
        top: 0;
        right: 0;
        content: "";
        display: block;
        height: 100%;
        width: 8px;
        z-index: 2;
        border-left: 7px solid white;
        border-right: 7px solid white;
        background: linear-gradient(to bottom, #00f260, #0575e6);
        transform: translateX(-199px) skewX(-26.5deg);
      }
      #left1 {
        background: url("../../assets/img/thumb (1s).jpg");
        background-position: center center;
        // animation: leftAction 2.5s ease;
      }
      #left2 {
        background: url("../../assets/img/thumb (4s).jpg");
        background-position: center center;
        // animation: leftAction 2.5s ease;
      }
    }
    .right {
      float: right;
      height: 100%;
      width: 30%;
      .right-box {
        transform: translateX(-235px);
        height: 100%;
        .right1 {
          // animation: right1Action 2.5s ease;
          @keyframes right1Action {
            0% {
              opacity: 0;
              transform: scale(1.5);
            }
            50% {
              opacity: 0.4;
              transform: scale(1);
            }
            100% {
              opacity: 1;
            }
          }
        }
        .right2 {
          // animation: right2Action 2.5s ease;
          width: 100%;
          height: 49%;
          transform: translateX(-200px);
          @keyframes right2Action {
            0% {
              opacity: 0;
              transform: scale(1.5);
            }
            50% {
              opacity: 0.6;
              transform: scale(1);
              transform: translateX(-200px);
            }
            100% {
              opacity: 1;
            }
          }
        }
        .divider {
          position: relative;
          left: 200px;
        }
      }
    }
  }
  .flutter {
    position: absolute;
    top: 40%;
    left: 40%;
    font-size: 20px;
    font-family: Arial;
    font-weight: bold;
    text-align: center;
    color: white;
    transform: translate(-10%, -50%);
    width: 260px;
    height: 100px;
    z-index: 3;
    border-right: 1px solid #fff;
    border: 1px solid #fff;
    animation: flutterAction 2s ease;
    &-box {
      margin: 6px 0;
      .pan-btn {
        margin-top: 10px;
      }
    }
    @keyframes flutterAction {
      0% {
        margin-left: 200px;
        margin-top: 200px;
        opacity: 0;
      }
      50% {
        opacity: 0.3;
      }
      100% {
        margin-left: 0;
        margin-top: 0;
        opacity: 1;
      }
    }
  }
  @media screen and (max-width: 1440px) {
    .flutter {
      background: rgba(0, 0, 0, 0.5);
    }
  }
}
</style>