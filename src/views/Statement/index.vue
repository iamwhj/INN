<template>
  <div class="statement">
    <div class="left">
      <img src="@/assets/statement-img/smoke.png" alt="" />
      <div class="img-origin">
        <h3>图片来源（找啊找）：</h3>
        <ul>
          <li>
            <el-link
              type="primary"
              target="_blank"
              href="https://www.freeimages.com/cn"
              >FreeImgages</el-link
            >
          </li>
          <li>
            <el-link
              type="danger"
              target="_blank"
              href="https://image.baidu.com/"
              >百度图片(当然是度娘)</el-link
            >
          </li>
          <li>
            <el-link
              type="primary"
              target="_blank"
              href="https://www.1001freedownloads.com/"
              >1001Freedownloads</el-link
            >
          </li>
          <li>
            <el-link
              type="success"
              target="_blank"
              href="https://silhouette-ac.com/en/search-result?&keyword=view&orderBy=popular&shape=all"
              >Free Vector Silhouettes</el-link
            >
          </li>
          <li>
            <el-link
              type="warning"
              target="_blank"
              href="https://www.photocome.com/"
              >图来网</el-link
            >
          </li>
          <li>
            <el-link
              type="primary"
              target="_blank"
              href="https://www.aigei.com/design/pic"
              >爱给网</el-link
            >
          </li>
          <li>
            <el-link
              type="danger"
              target="_blank"
              href="https://pixabay.com/?from=xiaomark.com"
              >Pixabay</el-link
            >
          </li>
        </ul>
        <h3>额外推荐：</h3>
        <ul>
          <li>
            <el-link
              type="success"
              target="_blank"
              href="https://uigradients.com/#MoonlitAsteroid"
              >Uigradients(渐变色)</el-link
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="divide">
      <img src="@/assets/statement-img/striped1.png" alt="" />
    </div>
    <div class="right">
      <div class="content">
        <p>
          从有这个想法到设计实现，中间花了挺长时间的，断断续续起码半年吧。最开始只在本子上画了几张草图，不知道该怎么做的时候就去看看别人的作品，
          从中找找属于自己的感觉，或者沉寂一段时间再做，构思会突如其来。图片也很重要，有时找不到合适的，只能去接受Photoshop的毒打了。最花时间的
          是图片（找和处理，有时候能玩一天的图）、实现（做前已经考虑这块功能的今生前世，以后往哪方面更新）、动画（CSS3，一天调一个，一个调一天，开玩笑）。
        </p>
        <p>
          网站还有很多不足的地方，后面在逐步整。我觉得现在最明显的是首屏加载和动画了吧，动画都是用CSS3撸的没有用CSS库，不用动画库的理由是找不到合适的库，
          况且好不容易下定决心做个东西，我想有更多属于自己的部分。我觉得架构师与普通猿的一个区别是大佬做前就着手优化了吧，而对于工作经验浅薄的我
          只能先做完，再考虑着手优化了吧，不过在优化过程中也能收获优化相关知识呀。
        </p>
        <p style="color: #500">
          希望大佬你能给个start呀，非常感谢！ <a href="https://github.com/iamwhj/INN" target="_blank">github地址</a>
        </p>
        <p>
          <span style="float: right; margin-right: 20px">2021-01-06</span>
        </p>
      </div>
      <div class="img-box">
        <img src="@/assets/statement-img/landscape.jpg" alt="" />
        <img src="@/assets/statement-img/chargefish3.gif" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.statement {
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;
  min-height: 860px;
  img {
    width: 100%;
  }
  .left {
    position: relative;
    width: 55%;
    .img-origin {
      position: absolute;
      top: 560px;
      left: 100px;
      ul {
        list-style: decimal;
        li {
          v-deep .el-link {
            font-size: 18px;
          }
        }
      }
    }
  }
  .divide {
    width: 10%;
    background: #fff;
    img {
      height: 100%;
    }
  }
  .right {
    position: relative;
    width: 35%;
    background: #fff;
    .content {
      z-index: 10;
      p {
        font-size: 16px;
        line-height: 26px;
        text-indent: 2em;
        color: #666;
        z-index: 11;
      }
    }
    .img-box {
      position: absolute;
      bottom: 0;
      img:nth-of-type(1) {
        height: 400px;
      }
      img:nth-of-type(2) {
        position: absolute;
        bottom: -22px;
        left: 0;
        height: 120px;
      }
    }
  }
}
</style>