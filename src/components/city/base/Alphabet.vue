<template>
  <div class="alphabet">
    <ul>
      <li
        v-for="(city, key) in cities"
        :key="city.id"
        @click="handleClick(key)"
      >
        {{ key }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: ["cities"],
  methods: {
    handleClick(letter) {
      this.$store.commit("changeLetter", letter);
    },
  },
};
</script>

<style lang='less' scoped>
// @import "~style/varibles.sty1"
.alphabet {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  right: 0;
  top: 0;
  bottom: 0;
  width: 20px;
  li {
    line-height: 25px;
    text-align: center;
    color: blue;
    font-weight: 600;
  }
}
</style>