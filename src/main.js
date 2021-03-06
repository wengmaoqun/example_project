// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// 引入reset.css  border.css  iconfont.css样式
// 用一个别名代替符号较长的路径方法：修改build/webpack.base.conf 的30行
import "style/reset.css"
import "style/border.css"
import "style/iconfont.css"

import App from './App'
import router from './router'
import store from './store'
// 引入轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

// 修改提交信息
// origin远程 HEAD本地当前提交 远程落后于本地
Vue.prototype.$axios = axios
import axios from 'axios'
// 使用轮播图插件
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
