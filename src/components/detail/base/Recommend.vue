<template>
  <div class="recommend">
    <!-- <slot><slot> -->
    <div class="recommend-info border-bottom" v-for="item of recommendinfo">
      <div class="recommend-left">
        <h4 class="recommend-title">{{ item.type }}</h4>
        <span class="border">随时退</span>
      </div>
      <div class="recommend-right">
        <span>￥{{ item.price }}</span>
        <div class="recommend-button">{{ item.type }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailRecommend",
  // props:[recommendinfo]
};
</script>

<style lang='less' scoped>
.border-bottom {
  padding: 0 4px;
}
.recommend {
  padding: 0 4px;
  border-bottom: 4px solid #f5f5f5;
}
h3 {
  line-height: 50px;
  font-size: 15px;
}
.recommend-info {
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
  .recommend-left {
    width: 286px;
    color: #616161;
    h4 {
      // display: -webkit-box;
      overflow: hidden;
      line-height: 30px;
      font-size: 15px;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    p {
      line-height: 25px;
      font-size: 10px;
    }
    span {
      color: #00afc7;
      font-size: 10px;
    }
  }
  .recommend-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90px;
    text-align: center;
    span {
      color: #ff9852;
      font-size: 17px;
      font-weight: 400;
    }
    .recommend-button {
      height: 30px;
      color: #fff;
      background-image: linear-gradient(130deg, #6d5733 37%, #ffab1e);
      line-height: 30px;
      border-radius: 5px;
    }
  }
}
</style>