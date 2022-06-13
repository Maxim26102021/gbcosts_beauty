import Vue from 'vue';
import changeField from '../plugins/changeField';

import App from './App.vue';

import store from '../store/index';
import router from '../router/index';

Vue.config.productionTip = false;

Vue.use(changeField);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
