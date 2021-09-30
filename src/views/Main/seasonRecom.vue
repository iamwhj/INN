<template>
  <div class="seasonRecom">
    <div class="topBar">
      <span>春季</span>
      <span
        >朝往暮息，春去春又来。春来万物生，遍野百花放！---熬过严寒迎来的便是成长。</span
      >
    </div>
    <div class="recomList">
      <ul>
        <li>
          <div class="img-box">
            <img src="../../assets/img/-1c00e8bf3da3c390.jpg" />
            <div class="buttom-box">
              <span>
                <i class="el-icon-time"></i>
                <em>2020-08-08</em>
              </span>
              <span>
                <i class="el-icon-location-information"></i>
                <em>茂名市电白区清水港18号滩</em>
              </span>
            </div>
            <div class="recommendation-box">
              <p>
                朝而往暮而归，周而复始日复一日。 兴来每独往，胜事空自知；
                行到水穷处，坐看云起时。
              </p>
              <div class="circle"></div>
            </div>
          </div>
          <div class="describe-box">
            <span>花开满枝-济南</span>
            <p>
              济南春天其实给我最大的感觉就是没有春天，但是呢我又沉醉于其中！约上三五个朋友，去南部山区挖挖荠菜，看看桃花，然后再逛逛景点，其中感觉真的不错！
              现在的春天我更感觉像一个委婉的小女子，一笑一颦。看着你不说话，让你乐在其中！还记得吗？
              春天到了，带上孩子去哪里玩？对！去黑虎泉！潺潺泉水，柳叶飘飘，一杯大碗茶，一口泉水，喝的是甘甜，品的是人生！<br />

              济南的春天能明显感受到勃勃的生机，冬天的时候一眼望去绿植基本上都是光秃秃的，严冬来临前它们就会把叶子都给褪去，减少不必要的能量消耗，其实这也是为春天做准备。
              春天一到便会满园花香，说来也是奇怪，许多的树都是先开花后长叶，光秃秃的枝丫上开满鲜花，
              看到得多了身为南方人的我也是见怪不怪了。<br />

              既然说到植物，那咱也来提一提动物了，最常见便是麻雀了，基本都是两三只结伴觅食，夏天的时候只只都鸟模鸟样，梭形的轻巧的身体，长长的羽毛，到了冬天就发生大变化了
              个个圆得跟个球一样，还有许多绒毛，这模样简直是上升了一个档次。<br />

              济南的春天也是美景趣事多多，没去过的小伙伴不妨一试。走过了千上万水，不妨来领略这勃勃的生机。
            </p>
            <div class="backgroundImage">
              <img
                src="../../assets/sun.png"
                class="backgroundImage"
                style="width: 100px; height: 100px"
              />
              <div class="backgroundImage-bottom">
                <img src="../../assets/Dandelion.png" style="width: 200px" />
                <img src="../../assets/InkGrass.png" style="width: 200px" />
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="img-box">
            <img src="../../assets/img/thumb (6).jpg" />
            <div class="buttom-box">
              <span>
                <i class="el-icon-time"></i>
                <em>2020-08-08</em>
              </span>
              <span>
                <i class="el-icon-location-information"></i>
                <em>茂名市电白区清水港18号滩</em>
              </span>
            </div>
            <div class="recommendation-box">
              <p>
                朝而往暮而归，周而复始日复一日。 兴来每独往，胜事空自知；
                行到水穷处，坐看云起时。
              </p>
              <div class="circle"></div>
            </div>
          </div>
          <div class="describe-box">
            <p>
              春季，是四季中的第一个季节，指立春至立夏期间，含节气有立春、雨水、惊蛰、春分、清明、谷雨。是万物复苏的季节。
              春季，是四季中的第一个季节，指立春至立夏期间，含节气有立春、雨水、惊蛰、春分、清明、谷雨。是万物复苏的季节。
              春季，是四季中的第一个季节，指立春至立夏期间，含节气有立春、雨水、惊蛰、春分、清明、谷雨。是万物复苏的季节。
              春季，是四季中的第一个季节，指立春至立夏期间，含节气有立春、雨水、惊蛰、春分、清明、谷雨。是万物复苏的季节。
              春季，是四季中的第一个季节，指立春至立夏期间，含节气有立春、雨水、惊蛰、春分、清明、谷雨。是万物复苏的季节。
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
.seasonRecom {
  padding: 30px 20px;
  .topBar {
    background: #eee;
    span:nth-of-type(1) {
      font-size: 26px;
      color: darkcyan;
    }
    span:nth-of-type(2) {
      font-size: 18px;
      color: #666;
      line-height: 35px;
      margin-left: 30%;
    }
  }
  .recomList {
    ul {
      list-style: none;
      margin: 10px 0 0 0;
      padding: 0;
      li {
        margin-bottom: 30px;
        .img-box {
          position: relative;
          display: inline-block;
          width: 59%;
          img {
            width: 100%;
            height: 620px;
            margin-bottom: 3px;
          }
          .buttom-box {
            text-align: center;
            margin-right: 200px;
            span {
              color: #666;
              transform: scale(1);
              transition: all 0.8s ease;
              i {
                font-size: 18px;
                transition: all 0.6s ease;
              }
              em {
                margin-left: 3px;
              }
              &:nth-of-type(2) {
                margin-left: 30px;
              }
              &:hover {
                color: rgb(90, 187, 216);
                i {
                  color: lightseagreen;
                  transform: scale(1.3);
                }
              }
            }
          }
          .recommendation-box {
            position: absolute;
            top: 40%;
            left: 40%;
            transform: translate(-50%, -50%);
            height: 200px;
            width: 200px;
            border-radius: 10px;
            background-color: rgba(0, 0, 0, 0.6);
            border: 2px solid rgb(170, 118, 97);
            transition: all 0.6s ease;
            opacity: 0;
            &::before {
              content: "";
              display: block;
              opacity: 0;
              width: 2px;
              height: 122px;
              position: absolute;
              bottom: -111px;
              right: -32px;
              background-color: rgb(224, 85, 120);
              transform: rotateZ(-30deg);
              transition: all 0.6s ease 1.2s;
            }
            &::after {
              content: "";
              display: block;
              opacity: 0;
              width: 2px;
              height: 100px;
              position: absolute;
              bottom: -154px;
              right: -112px;
              background-color: rgb(224, 85, 120);
              transform: rotateZ(90deg);
              transition: all 0.6s ease 0.8s;
            }
            p {
              margin: 0;
              padding: 5px 4px;
              color: #fff;
              font-size: 18px;
              opacity: 0;
              transition: all 1s ease 1.6s;
            }
            .circle {
              transform: rotateZ(20deg);
              position: absolute;
              bottom: -117px;
              right: -187px;
              height: 26px;
              width: 26px;
              border-radius: 50%;
              background-color: rgba(214, 140, 140, 0.6);
              transition: all 0.8s ease;
              &::before {
                content: "";
                display: block;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 4px;
                height: 4px;
                border-radius: 50%;
                z-index: 1;
                background: rgb(117, 216, 223);
              }
              &::after {
                content: "";
                display: block;
                position: absolute;
                top: 50%;
                right: 50%;
                transform: translate(0%, -1.3px);
                width: 13px;
                height: 2px;
                background: #fff;
              }
            }
          }
          @keyframes fontAction {
            0% {
              margin-top: 260px;
              opacity: 0;
            }
            70% {
              margin-top: -50px;
              opacity: 0.6;
            }
            100% {
              margin-top: 0px;
              opacity: 1;
            }
          }
          &:hover {
            .recommendation-box {
              opacity: 1;
              &::before,
              &::after {
                opacity: 1;
              }
              .circle {
                transform: rotateZ(360deg);
                background: rgba(224, 85, 120, 0.8);
              }
              p {
                opacity: 1;
                animation: fontAction 0.8s ease 1.6s;
              }
            }
          }
        }
        .describe-box {
          position: relative;
          float: right;
          width: 40%;
          height: 620px;
          // border: 1px solid darkcyan;
          background-color: #fff;
          // background: url('../../assets/way.png') no-repeat;
          span {
            font-size: 24px;
            font-weight: 600;
            letter-spacing: 2px;
            margin-left: 10px;
          }
          p {
            margin-top: 6px !important;
            margin: 0;
            padding: 0;
            text-indent: 2em;
            font-size: 18px;
            line-height: 24px;
            color: #333;
          }
          .backgroundImage {
            position: absolute;
            top: 70px;
            width: 40%;
            height: 550px;
            opacity: 0.6;
            &-bottom {
              display: flex;
              position: absolute;
              bottom: 0;
              img:nth-of-type(1) {
                margin-left: 80px;
              }
              img:nth-of-type(2) {
                margin-left: 100px;
              }
            }
          }
        }
      }
    }
  }
}
</style>