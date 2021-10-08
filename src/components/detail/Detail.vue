<template>
  <div class="detail">
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    
    >
    </detail-banner>
    <detail-header> </detail-header>
    <detail-card> </detail-card>
    <detail-recommend> 
      <!-- <h3 class="boder-bottom">去哪推荐</h3> -->
    </detail-recommend>
     <detail-calender> </detail-calender>
  </div>
</template>

<script>
import DetailBanner from "./base/Banner.vue";
import DetailHeader from "./base/Header.vue";
import DetailCard from "./base/Card.vue";
import DetailRecommend from "./base/Recommend.vue";
import DetailCalender from "./base/Calender.vue";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailCard,
    DetailRecommend,
    DetailCalender,
  },
  data() {
    return {
      sightName: "",
      bannerImg: "",
      gallaryImgs: [],
      // cardInfo:{},
      // recommendInfo:[],
      // calenderInfo:[],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      let { sightName, bannerImg} = await getDetails(this.$route.params.id);
      this.bannerImg = bannerImg;
      this.sightName = sightName;
      // this.gallaryImgs = gallaryImgs;
      // this.cardInfo = cardInfo;
      //  this.recommendInfo = recommendInfo;
      //  this.calenderInfo = calenderInfo;
    },
  },
};
</script>

<style lang='less' scoped>
.detail{
  height: 2000px;
}
</style>