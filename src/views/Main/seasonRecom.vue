<template>
  <div class="seasonRecom">
    <div class="topBar">
      <span>春季</span>
      <span>万物伊始，春暖花开，郁郁葱葱！</span>
    </div>
    <div class="recomList">
      <ul>
        <li>
          <div class="img-box">
            <img src="../../assets/img/thumb (8).jpg" />
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
            <span>清水码头</span>
            <p>
              春季，是四季中的第一个季节，指立春至立夏期间，含节气有立春、雨水、惊蛰、春分、清明、谷雨。是万物复苏的季节。
              春季，是四季中的第一个季节，指立春至立夏期间，含节气有立春、雨水、惊蛰、春分、清明、谷雨。是万物复苏的季节。
              春季，是四季中的第一个季节，指立春至立夏期间，含节气有立春、雨水、惊蛰、春分、清明、谷雨。是万物复苏的季节。
              春季，是四季中的第一个季节，指立春至立夏期间，含节气有立春、雨水、惊蛰、春分、清明、谷雨。是万物复苏的季节。
              春季，是四季中的第一个季节，指立春至立夏期间，含节气有立春、雨水、惊蛰、春分、清明、谷雨。是万物复苏的季节。
            </p>
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

<script>
export default {};
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
            height: 595px;
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
          float: right;
          width: 40%;
          height: 620px;
          border: 1px solid darkcyan;
          background-color: #fff;
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
        }
      }
    }
  }
}
</style>