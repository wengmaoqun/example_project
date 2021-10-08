<template>
  <div class="weekend">
    <h3 class="title">周末去哪</h3>
    <ul class="ul">
      <li class="item" v-for="(item, index) in weekendList" :key="index">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <h4>{{ item.title }}</h4>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
  </div>
</template>
<script>
export default {
  name: "HomeWeekend",
  props: ["weekendList"],
};
</script>
<style lang='less' scoped>
.ul{
  list-style-type:none;
  width: 100%;
}
.title {
  margin: 0 -7px;
  line-height: 40px;
  background: #ddd;
  text-indent: 10px;
  font-size: 15px;
}
  .item-img {
    width: 100%;
    height: 200px;
  }
  .item-info {
    // flex: 1;
    padding: 50px;
    margin-left: 50px;
    min-width: 0;
    h4 {
      line-height: 30px;
      font-size: 15px;
      margin: -52px 0px 0px -84px;
    }
    .item-desc {
      font-size: 15px;
      line-height: 20px;
      margin: 3px -83px;
    }
  }
</style>