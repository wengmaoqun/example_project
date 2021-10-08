<template>
  <div class="search">
    <input
      type="text"
      class="header-input"
      placeholder="请输入城市名和拼音"
      v-model="keyword"
    />
    <div class="search-content" v-show="keyword" ref="wrapper">
      <ul>
        <li
          class="search-item boder-bottom"
          v-for="city of list"
          :key="city.id"
          @click="handleClick(city.name)"
        >
          {{ city.name }}
        </li>
        <li v-if="isShow" class="search-item boder-bottom">未匹配到数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BetterScroll from "better-scroll";
export default {
  name: "CitySearch",
  props: ["cities"],
  data() {
    return {
      keyword: "",
      list: [],
      timer: null,
    };
  },
  watch: {
    // 监听变量 keyword的变化
    keyword() {
      // 函数节流。省资源
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        const result = [];
        // 将city.json的数据迭代出来（该json有2层 第一层是字母 第二层是字母所包含的城市信息）
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            // 通过拼音或中文查找是否有匹配的数据
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    },
    // isShow() {
    //   return !this.keyword.length;
    // },
  },

  // computed: {
  //   fileterCities() {
  //     const result = [];
  //     for (let key in this.cities) {
  //       this.cities[key].forEach((city, _index) => {
  //         if (
  //           city.name.includes(this.keyword) ||
  //           city.spell.includes(this.keyword)
  //         ) {
  //           result.push(city);
  //         }
  //       });
  //     }
  //     return result;
  //   },
  //   isShow() {
  //     return !this.fileterCities.length;
  //   },
  // },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper,{
      click:true
    });
  },
  methods: {
    handleClick(city) {
      this.$store.commit("changeCity", city);

      this.$router.push("/");
    },
  },
};
</script>

<style lang='less' scoped>
ul {
  list-style-type: none;
}
.search {
  position: relative;
  height: 35px;
  padding: 5px;
  background-color: #00bcd4;
  .header-input {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    text-align: center;
  }
  .search-content {
    position: fixed;
    z-index: 1;
    overflow: hidden;
    top: 89px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #eee;
    .search-item {
      line-height: 32px;
      padding-left: 10px;
      background-color: #fff;
    }
  }
}
</style>