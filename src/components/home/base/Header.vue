<template>
  <div>
    <div class="header">
      <i class="iconfont icon-fanhui header-back"></i>
      <div class="header-input">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="输入城市/景点/游玩主题" />
      </div>
      <router-link to="/city" class="header-right">
        <span>{{$store.state.city}}</span><i class="iconfont icon-xiajiantou"></i>
      </router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  height: 44px;
  line-height: 44px;
  background-color: #00bcd4;
  color: #fff;
}
.header-back {
  width: 44px;
  text-align: center;
}
.header-input {
  flex: 1;
  background-color: #fff;
  line-height: 32px;
  height: 32px;
  padding-left: 5px;
  margin-top: 6px;
  border-radius: 5px;
  .icon-sousuo {
    color: #ccc;
    vertical-align: middle;
  }
  input {
    width: 80%;
    vertical-align: middle;
    font-size: 13px;
  }
}
.header-right {
  padding: 0 7px;
  color:#fff;
  .icon-xiajiantou {
    font-size: 14px;
    color:#fff;
  }
}
</style>
