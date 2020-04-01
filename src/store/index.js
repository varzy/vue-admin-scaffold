import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import view from './modules/view';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: { user, view }
});
