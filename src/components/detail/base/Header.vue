<template>
  <div class="header">
    <router-link
      v-show="isShow"
      tag="i"
      to="/"
      class="header-goback iconfont icon-fanhui"
    >
    </router-link>
    <div class="header-fixed" v-show="!isShow" :style="opacityStyle">
      <router-link
        tag="i"
        to="/"
        class="iconfont icon-fanhui header-back"
      ></router-link>
      <h2>景点详情</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      isShow: true,
      opacityStyle: {},
    };
  },
  activated() {
    window.addEventListener("scroll", this.handleScroll);
  },
  deactivated() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  // 滚动
  methods: {
    handleScroll() {
      let top = document.documentElement.Top;
      if (top > 40) {
        this.isShow = false;
        this.opacityStyle = {
          opacity: (Top - 40) / 100,
        };
      } else {
        this.isShow = true;
      }
    },
  },
};
</script>

<style lang='less' scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1;
  .header-goback {
    position: absolute;
    left: 10px;
    top: 10px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
    text-align: center;
    background: rgba(0, 0, 0, 0.6);
  }
  .header-fixed {
    position: relative;
    line-height: 40px;
    text-align: center;
    color: #fff;
    background: #00bcd4;
    .header-back {
      position: absolute;
      // background: ;
      color: #fff;
      left: 0;
      top: 0;
      width: 40px;
    }
    h2 {
      text-align: center;
      font-size: 15px;
    }
  }
}

.header-fixed-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  text-align: center;
  font-size: 20px;
}
</style>