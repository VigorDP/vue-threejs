import Vue from 'vue'
import VueRouter from 'vue-router'
// import Antd from 'ant-design-vue/es/index'
// import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import Loading from './components/loading/loading.js'

import './assets/style/reset.scss'

Vue.use(VueRouter)
Vue.use(Loading)

// Vue.use(Antd)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
