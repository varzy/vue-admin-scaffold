import Vue from 'vue';
import App from './App.vue';
import router from './router/';
import store from './store/';
import GlobalDirectives from './plugins/global-directives/';
import ElementUI from './plugins/element-ui/';

// Styles
import './styles/main.scss';

Vue.use(GlobalDirectives);
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
