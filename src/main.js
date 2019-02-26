// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Header from './components/header'
import Nav from './components/nav'
import 'normalize.css'

Vue.component('Header', Header);
Vue.component('Nav', Nav);

Vue.config.productionTip = false

 // 路由发生变化修改页面title
 router.beforeEach((to, from, next) => {

  if (to.name) {
    document.title = to.name;
      //如果是 iOS 设备，则使用如下 hack 的写法实现页面标题的更新
      /*if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
            const hackIframe = document.createElement('iframe');
            hackIframe.style.display = 'none';
            hackIframe.src = '/static/html/fixIosTitle.html?r=' + Math.random();
            document.body.appendChild(hackIframe);
            setTimeout(_ => {
                document.body.removeChild(hackIframe)
            }, 300)
        }*/
  }
  // let islogin = JSON.parse(localStorage.getItem('islogin'));
  // // console.log(islogin)
  // if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
  //   if (islogin) {  // 通过vuex state获取当前的token是否存在
  //     // console.log('mainjs已登录')
  //       next();
  //   }
  //   else {
  //     // console.log('mainjs未登录')
  //       next({
  //           path: '/login',
  //           query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
  //       })
  //   }
  // }
  // else {
  //   // console.log('mainjs不需要登录')
    next();
  // }


})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
