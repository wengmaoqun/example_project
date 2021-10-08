<template>
  <div class="calender">
    <ul class="calender-title border-bottom">
      <li @click="handleTicket">门票</li>
      <li @click="handleTourist">一日游</li>
    </ul>
      <div class="calender-item" v-for="(item,index) in calenderInfo" :key="index">
      <h3 class="border-bottom">{{item.calenderInfo.title}}</h3>
        <!-- <div class="calender-info border-bottom"
       @click="handleCLick(result)
       v-for="(item,index) in calenderInfo.result"
       :key="index"> -->
        <div class="calender-left">
          <h4 class="calender-title">{{result.subtitle}}</h4>
        </div>
        <div class="calender-right">
          <span>￥20<i class="iconfont icon-jiantouxiangxia"></i></span>
          <span
            >￥20<i
              class="iconfont icon-jiantouxiangxia"
              :style="result.styleObj"
            ></i
          ></span>
          <span>￥{{result.price}}<i class="iconfont icon-jiantouxiangxia"></i></span>
        </div>
      </div>
      <detail-recommend> </detail-recommend>
      <detail-recommend v-show="result.isShow"
      :recommendinfo="result.recommendinfo">
      </detail-recommend>
    </div>
  </div>
</template>

<script>
// 引入DetailRecommend组件在Calender中
import DetailRecommend from "../../detail/base/Recommend.vue";
export default {
  name: "DetailCalender",
  props:["calenderInfo"],
  components: {
    DetailRecommend,
  },
  methods: {
    handleCLick(result) {
      result.isShow = !result.isShow;
      result.styleObj.transform = `rotate(${result.isShow * 180}deg)`;
    },
    handleTicket() {
      document.documentElement.scrollTop = this.$refs.maomao[0].offsetTop - 85;
    },
    handleTourist() {
      document.documentElement.scrollTop = this.$refs.maomao[2].offsetTop - 43;
    },
  },
};
</script>


<style lang='less' scoped>
</style>