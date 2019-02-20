import Vue from 'vue'
import VueRouter from 'vue-router'
import 'es6-promise/auto'
import { store } from './store/index'

import App from './App.vue'
import { routes } from './routes'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
