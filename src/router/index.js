import Router from './router';
import NProgress from 'nprogress';
import Store from '../store/';
import { navigation } from '@/router/routes';
import { cloneDeep as _cloneDeep } from 'lodash';
import Permission from '@/utils/Permission';
import { ls } from '@/utils/Storage';

NProgress.configure({ showSpinner: false });

Router.beforeEach(async (to, from, next) => {
  // 开启 NProgress
  if (to.meta && !to.meta.hideProgress) {
    NProgress.start();
  }

  // 已登录
  if (Permission.isLogin()) {
    // 不允许已登录状态下再次进入登录页
    if (to.name === 'Login') {
      next({ name: 'Index' });
    }

    // 保存用户信息至 vuex
    if (!Store.state.user.userInfo.id) {
      Store.commit('user/STORE_USER_INFO', ls.get('user'));
    }
  }
  // 未登录
  else {
    // 强制重定向到登录页
    if (to.name !== 'Login') {
      next({ name: 'Login' });
    }
  }

  // 保存导航栏至 vuex
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
