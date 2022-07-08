import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"
import "./assets/fonts/iconfont.css"
import axios from "axios";

axios.defaults.baseURL = "https://www.escook.cn";
Vue.prototype.$axios = axios
// 全局指令
Vue.directive("focus", {
  inserted(el){
    el.focus()
  }
})

Vue.directive('color', {
  inserted(el, binding) {
    el.style.color = binding.value
    console.log(binding);
  },
  update(el, binding) {
    el.style.color = binding.value
    console.log(binding);
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
