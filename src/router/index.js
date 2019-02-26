import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      redirect: '/index',
      component: Index
    },
    {
      path: '/index',
      name: '首页',
      component: Index
    }
  ]
})
