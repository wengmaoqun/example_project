<template>
<div class="header">
    <div>
      <router-link to="/" tag="i" class="iconfont icon-fanhui header-back"></router-link>
      <h2>城市选择</h2>
    </div>
  </div>
</template>
<script>
export default {
name: 'CityHeader'
}
</script>
<style lang='less' scoped>
.header{
  position: relative;
  background: #00bcd4;
  line-height: 40px;
  color: #fff;
  text-align: center;
  .header-back{
    position: absolute;
    left: 0;
    top: 0;
    width: 40px;
    color: #fff;
  }
  h2{
    text-align: center;
    font-size: 15px;
  }
}
</style>