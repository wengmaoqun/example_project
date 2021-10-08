<template>
  <div class="city">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :hotCities="hotCities" :cities="cities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
  </div>
</template>

<script>
import { getCities } from "../../api/axios";
import CityHeader from "./base/Header.vue";
import CitySearch from "./base/Search.vue";
import CityList from "./base/List.vue";
import CityAlphabet from "./base/Alphabet.vue";

export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },
  data() {
    return {
      hotCities: [],
      cities: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      // 异步请求
      let { hotCities, cities } = await getCities();
      this.hotCities = hotCities;
      this.cities = cities;
    },
  },
};
</script>

<style lang='less' scoped>
</style>