<template>
  <div id="gallary" @click="handleBannerClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) in gallaryImgs" :key="index">
          <img class="gallery-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonGallary",
  props: ["gallaryImgs"],
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        observeParents: true,
        observe: true,
      },
    };
  },
  methods: {
    handleBannerClick() {
      this.$emit("close");
    },
  },
};
</script>

<style lang='less' scoped>
.gallary {
  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #000;
  .wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 0;
    width: 100%;
    padding-bottom: 62.5;
    background: #fff;
  }
  .gallery-img {
    width: 100%;
  }
  .swiper-pagination {
    color: #fff;
    bottom: -5px;
    color: #fff;
  }
}
</style>