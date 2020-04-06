import Vue from 'vue';
import App from './App.vue';
import router from './router/';
import store from './store/';
import i18n from './i18n/';
import GlobalComponents from './plugins/global-components/';
import GlobalDirectives from './plugins/global-directives/';
import ElementUI from './plugins/element-ui/';
import Icon from './plugins/icon/';

// Styles
import './styles/main.scss';

Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(ElementUI);
Vue.use(Icon);

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
