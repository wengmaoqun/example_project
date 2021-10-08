<template>
  <div class="list" ref="wrapper">
    <!-- ref="wrapper" BetterScroll滚动列表父节点打上标记 -->
    <!--当前城市 -->
    <div>
      <div class="list-current">
        <h3 class="list-title border-topbottom">当前城市</h3>
        <div class="city">
          <span>{{ $store.state.city }}</span>
        </div>
      </div>
      <!-- 热门城市 -->
      <div class="list-hot">
        <h3 class="list-title border-topbottom">热门城市</h3>
        <div class="city">
          <span
            v-for="(item, index) in hotCities"
            :key="index"
            @click="handelClick(item.name)"
          >
            {{ item.name }}
          </span>
        </div>
      </div>

      <div class="list-item" v-for="(city, key) in cities" :key="key">
        <h3 class="list-title border-topbottom" ref="key">{{ key }}</h3>
        <ul>
          <li
            class="city-item boder-bottom"
            v-for="(item, i) in city"
            :key="i"
            @click="handelClick(item.name)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// BetterScroll 解决各种滚动场景需求的插件（子节点高度大于子节点，只能有一个子节点）。
import BetterScroll from "better-scroll";
export default {
  name: "CityList",
  props: ["hotCities", "cities"],
  computed: {
    letter() {
      return this.$store.state.letter;
    },
  },
  methods: {
    handelClick(city) {
      this.$store.commit("changeCity", city);

      this.$router.push("/");
    },
  },
  mounted() {
    console.log(this.$refs.wrapper);
    this.scroll = new BetterScroll(this.$refs.wrapper, {
      click: true,
    });
  },
  watch: {
    letter(value) {
      // 跳到指定的dom节点
      this.scroll.scrollToElement("this.$refs[value][0]");
    },
  },
};
</script>
<style lang="less" scoped>
.boder-bottom::before {
  border-color: #aaa;
}
ul {
  list-style-type: none;
}
.list {
  position: fixed;
  overflow: hidden;
  top: 90px;
  left: 0;
  right: 0;
  bottom: 0;
}
.list-title {
  line-height: 27px;
  background: #eee;
  padding-left: 20px;
}
.city {
  padding-left: 5px;
  span {
    display: inline-block;
    width: 28%;
    padding: 5px 10px;
    margin: 5px;
    border: 5px solid #ccc;
    text-align: center;
    box-sizing: border-box;
    border-radius: 2.5px;
  }
}
.city-item {
  line-height: 40px;
  margin: 0px -20px;
}
</style>
