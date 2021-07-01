import Vue from 'vue'
import App from './App.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { router } from './router'

import './form'
import './httpCliente'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
