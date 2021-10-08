<template>
  <div class="favourite">
    <h3 class="title">猜你喜欢</h3>
    <ul>
      <router-link
        class="item boder-bottom"
        v-for="(item, index) in recommendList"
        :key="index"
        tag="li"
        :to="{ name: 'detaillink', params: { id: item.id } }"
      >
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <h4>{{ item.title }}</h4>
          <div class="item-fav-info clearfix">
            <p class="item-fav-text">
              <i v-for="i in 5" class="iconfont icon-xingxing"></i>
              <!-- <span class="item-fav-star" :style="xingxingFn(item)">  -->
                <span class="item-fav-star" :style="item.score | star">
                <i v-for="i in 5" class="iconfont icon-xingxing"></i>
              </span>
            </p>
            <p class="item-text-right">
              <span>{{ item.commend }}条评论</span>
            </p>
          </div>
          <p class="item-price">{{ item.price | price }}</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeFavourite",
  props: ["recommendList"],
  // methods: {
  //   xingxingFn(score) {
  //     return {
  //       width: (score * 100) / 5 + "%",
  //     };
  //   },
  //   price(_value) {
  //     return "￥" + "value" + "元";
  //   },
  // },
  filters: {
    star(score) {
      return {
        width: (score * 100) / 5 + "%",
      };
    },
    price(value) {
      return `￥69元`;
    },
  },
};
</script>

<style lang='less' scoped>
.boder-bottom::before {
  border-color: #777;
}
.title {
  margin-top: 10px;
  line-height: 40px;
  background: #ddd;
  text-indent: 10px;
  font-size: 15px;
}
.item {
  display: flex;
  height: 100px;
  padding: 10px;
  .item-img {
    width: 110px;
    height: 110px;
  }
  .item-info {
    flex: 1;
    padding: 50px;
    margin-left: 50px;
    min-width: 0;
    h4 {
      line-height: 30px;
      font-size: 15px;
      margin: -40px 0px 0px -84px;
    }
    .item-price {
      color: #ff8300;
      font-size: 15px;
      line-height: 20px;
      margin: 42px 0px 0px -82px;
    }
    .item-fav-info {
      line-height: 30px;
      margin: 5px 0 0 -86px;
      .item-fav-text {
        position: relative;
        float: left;
        color: #ccc;
        margin-right: 25px;
        .item-fav-star {
          overflow: hidden;
          position: absolute;
          left: 0;
          top: 0;
          color: #ffb436;
        }
      }
      .item-text-right {
        float: left;
      }
    }
  }
}
</style>