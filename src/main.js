import Vue from 'vue'

import App from './App.vue'
import VueTabulator from 'vue-tabulator';

import store from '../store/index'
import router from '../router/index'

Vue.use(VueTabulator);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
