import Router from './router';
import NProgress from 'nprogress';
import Store from '../store/';
import { navigation } from '@/router/routes';
import { cloneDeep as _cloneDeep } from 'lodash';

NProgress.configure({ showSpinner: false });

Router.beforeEach(async (to, from, next) => {
  // 开启 NProgress
  if (to.meta && !to.meta.hideProgress) {
    NProgress.start();
  }

  // 存入导航栏
  if (!Store.state.view.isNavigationSaved) {
    Store.commit('view/STORE_NAVIGATION', _cloneDeep(navigation));
  }

  const routeTitle =
    to.meta && !to.meta.hideTitleInBrowserTab && to.meta.title ? to.meta.title : null;
  document.title = routeTitle
    ? `${routeTitle} - ${process.env.VUE_APP_PROJECT_NAME}`
    : `${process.env.VUE_APP_PROJECT_NAME}`;

  next();
});

Router.afterEach(() => {
  window.scrollTo(0, 0);
  NProgress.done();
});

export default Router;
