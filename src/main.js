// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'assets/styles/reset.css' // 样式重置
import 'assets/styles/border.css' // 移动端1px解决
import 'swiper/dist/css/swiper.css'
import 'assets/js/svg_icon.js' // svg-icon

Vue.config.productionTip = false
fastClick.attach(document.body) // 解决移动端300ms延迟
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
