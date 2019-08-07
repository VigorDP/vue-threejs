import VueRouter from 'vue-router'
import Drawer from './components/drawer/index.vue'

const routes = [
  {
    path: '/',
    component: Drawer
  }
]

export default new VueRouter({
  routes
})
