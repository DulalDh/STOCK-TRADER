import Vue from 'vue'
import App from './App.vue'
import { routes } from './routes'
import store from './store/store'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.http.options.root = 'https://vuejs-stock-trader-7e4c7.firebaseio.com/';

Vue.filter('currency', (value) => {
  return "৳ " + value.toLocaleString()
})

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
