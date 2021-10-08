<template>
  <div id="banner">
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="https://img1.qunarzz.com/p/tts1/1804/34/07e3342e8fd7bd02.jpg_r_640x420x95_5785b176.jpg" alt="" />
      <!-- <img class="banner-img" :src="sightName" alt="" /> -->
      <div class="banner-info">
        <div class="banner-title">文和友臭豆腐博物馆</div>
        <!-- <div class="banner-title">{{ sightName }}</div> -->
        <p class="banner-number">
        <div class="iconfont ico"></div>
          <!-- <i class="iconfont icon-tupian"></i>  -->
          <span>{{ gallaryImgs.length }}</span>
        </p>
      </div>
    </div>
    <common-gallary
      @close="handleBannerClose"
      v-show="isShow"
      :gallaryImgs="gallaryImgs"
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from "../../../common/Gallary.vue";
export default {
  name: "DetailBanner",
  props: ["sightName", "bannerImg", "gallaryImgs"],
  components: {
    CommonGallary,
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    handleBannerClick() {
      this.isShow = true;
    },
    handleBannerClose() {
      this.isShow = false;
    },
  },
};
</script>

<style lang='less' scoped>
.banner {
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  position: relative;
  .banner-img {
    width: 100%;
  }
  .banner-info {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    background-image: linear-gradient(
      top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
    line-height: 30px;
    color: #fff;
    .banner-title {
      flex: 1;
      font-size: 16px;
      padding: 0 10px;
    }
    .banner-number {
      padding: 0 10px;
      height: 15px;
      line-height: 15px;
      border-radius: 10px;
      background: rgba(0, 0, 0, 0.8);
      font-size: 10px;
      margin-top: 6px;
      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>