<!-- 使用组件 -->
<template>
  <div class="home">
    <home-header></home-header>
    <div class="contaniner" ref="wrapper">
      <div>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-nav :iconList="iconList"></home-nav>
        <home-favourite :recommendList="recommendList"></home-favourite>
        <home-weekend :weekendList="weekendList"></home-weekend>
      </div>
    </div>
  </div>
</template>
<script>
// 引入axios后台交互数据
import { getHome } from "@/api/axios";
// 引入组件
import HomeHeader from "./Header.vue";
import HomeSwiper from "./Swiper.vue";
import HomeNav from "./Nav.vue";
import HomeFavourite from "./Favourite.vue";
import HomeWeekend from "./Weekend.vue";

import BetterScroll from "better-scroll";

// 注册组件
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeNav,
    HomeFavourite,
    HomeWeekend,
  },
  // index.json里data的数据
  data() {
    return {
      iconList: [],
      swiperList: [],
      recommendList: [],
      weekendList: [],
    };
  },
  created() {
    // this.getData();
  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper, {
      click: true,
    });
  },
  methods: {
    async getData() {
      // 异步请求
      let { iconList, swiperList, recommendList, weekendList } =
        await getHome();
      this.iconList = iconList;
      this.swiperList = swiperList;
      this.recommendList = recommendList;
      this.weekendList = weekendList;

      // // 同步请求
      // getHome().then(e=>{
      // // getHome().then(({data:mydata})=>{
      //   // console.log(mydata, 'mydata')
      //   // console.log(data, 'data')
      //   console.log(e, 'e')
      //   // let {iconList,swiperList,recommendList} = mydata.data
      //   let {iconList,swiperList,recommendList} = e.data.data
      //   console.log(iconList,swiperList,recommendList, 'iconList,swiperList,recommendList')
      // }).catch(error=>{
      //   console.log(error, '请求出错')
      // })
    },
  },
  // 当组件被展示触发，（动态数据）钩子函数
  activated() {
    this.getData();
  },
  // 当组件没有展示的时候触发
  deactivated() {
    this.getData();
  },
};
</script>

<style scoped lang="less">
.contaniner {
  position: fixed;
  overflow: hidden;
  left: 0;
  right: 0;
  bottom: 0;
  top: 44px;
}
</style>