<template>
  <div class="swiper" id="parent">
    <swiper :options="swiperOption" v-if="isShow">
    <!--  <swiper-slide> 轮播图插件 -->
      <swiper-slide v-for="(item, index) in swiperList" :key="index">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: ["swiperList"],
  data() {
    return {
      // 如果需要分页
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true,
        autoplay: true,
      },
    };
  },
  computed: {
    isShow() {
      return this.swiperList.length > 0;
    },
  },
};
</script>

<style lang="less" scoped>
//  让圆点变成白色 穿透轮播图   scoped
#parent.swiper-pagination-bullet-active {
  background-color: #fff;
}
.swiper {
  height: 109px;
  // container 穿透 容器高度
  .swiper-container {
    height: 100%;
    .swiper-img {
      width: 100%;
    }
  }
}
</style>