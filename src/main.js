import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import 'es6-promise/auto'

import App from './App.vue'
import { routes } from './routes'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  routes,
  mode: 'history',
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
