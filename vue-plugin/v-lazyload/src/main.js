import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from "vue-lazyload"

Vue.config.productionTip = false
Vue.use(VueLazyload, {
// preLoad: 1,
    error: '/static/img/error.png', //图片加载失败后显示的图片
    loading: '/static/img/loading.gif',// 图片加载中显示的图片
    attempt: 3 //尝试次数
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
