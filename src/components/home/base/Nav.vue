<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(imgsArr, index) in filterImgs" :key="index">
      <div class="nav">
        <!-- 二维数组 表示 第一次循环的 imgsArr 是一个数组 然后继续循环 imgsArr -->
        <div class="item" v-for="(item, index) in imgsArr" :key="item.id">
          <i
            class="menpiao iconfont"
            :class="{
              ['icon-' + item.iconName]: true,
              first: item.id === '0002',
            }"
          ></i>
          <span class="item-desc">{{ item.desc }}</span>
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: "HomeNav",
  // props接受着 index.json 里iconList的数据
  props: ["iconList"],
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
  // 图标分页算法
  // 将pages变成二维数组，
  computed: {
    filterImgs() {
      const imgs = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!imgs[page]) {
          imgs[page] = [];
        }
        //filterImgs = imgs = [[],[]]
        imgs[page].push(item);
      });
      return imgs;
    },
  },
};
</script>

<style lang="less" scoped>
.nav {
  display: flex;
  flex-wrap: wrap;
  height: 185px;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    height: 50%;
    .menpiao {
      font-size: 30px;
      margin-top: 10px;
      color: rgb(70, 217, 243);
    }
    .first {
      color: red;
    }
  }
}
</style>