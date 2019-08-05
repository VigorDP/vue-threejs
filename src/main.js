import Vue from 'vue'
import VueRouter from 'vue-router'
import {
  Button,
  message
} from 'ant-design-vue'
import App from './App.vue'
import router from './router'

Vue.use(VueRouter)
Vue.use(Button)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')