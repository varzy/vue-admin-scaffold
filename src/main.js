import Vue from 'vue';
import App from './App.vue';
import router from './router/';
import store from './store/';
import Antd from './plugins/antd/';
import GlobalComponents from './plugins/global-components/';
import GlobalDirectives from './plugins/global-directives/';
import './mock/';

import './styles/main.scss';

Vue.use(Antd);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
