import Vue from 'vue'
import vueRouter from 'vue-router'

// 引入页面级组件
import Home from '@/components/home/base/Home.vue'
import City from '@/components/city/City.vue'
import Detail from '@/components/detail/Detail.vue'

Vue.use(vueRouter)

export default new vueRouter({
  routes: [{
    // 引入路径
    path: "/", component: Home
  },
  {
    path: "/city", component: City
  }, 
  {
    path: "/detail/:id", name: "detaillink", component: Detail
  },
  ]
})
