import Vue from 'vue'
import App from './App.vue'
import VueTabulator from 'vue-tabulator';

Vue.use(VueTabulator);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
