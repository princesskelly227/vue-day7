import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 全局注册自定义属性
Vue.directive('focus', {
  inserted(el) {
    el.focus();
  }
});
// 引入bootstrap.css 和字体的样式
import "bootstrap/dist/css/bootstrap.css"
import "./assets/fonts/iconfont.css"
// 全局配置axios
import axios from 'axios'
axios.defaults.baseURL = 'https://www.escook.cn'
Vue.prototype.$axios = axios
new Vue({
  render: h => h(App),
}).$mount('#app')
