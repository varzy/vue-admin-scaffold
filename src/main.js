import Vue from 'vue';
import App from './App.vue';
import router from './router/';
import store from './store/';
import VueI18n from 'vue-i18n';
import GlobalDirectives from './plugins/global-directives/';
import ElementUI from './plugins/element-ui/';
import Icon from './plugins/icon/';
import zh from './plugins/i18n/locales/zh';

// Styles
import './styles/main.scss';

Vue.use(VueI18n);
Vue.use(GlobalDirectives);
Vue.use(ElementUI);
Vue.use(Icon);

Vue.config.productionTip = false;

const i18n = new VueI18n({
  locale: 'zh',
  fallbackLocale: 'en',
  messages: { zh }
});

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
