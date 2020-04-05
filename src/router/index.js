import Router from './router';
import NProgress from 'nprogress';
import Store from '../store/';
import { navigation } from '@/router/routes';
import { cloneDeep as _cloneDeep } from 'lodash';
import Permission from '@/utils/Permission';
import { ls } from '@/utils/Storage';
import { PRIMARY_LOCALE } from '@/config/constants';
// import { loadLanguage } from '@/i18n';

NProgress.configure({ showSpinner: false });

Router.beforeEach(async (to, from, next) => {
  /**
   * NProgress
   */
  if (to.meta && !to.meta.hideProgress) {
    NProgress.start();
  }

  /**
   * 权限
   */
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

  /**
   * 视图
   */
  // 保存导航栏至 vuex
  if (!Store.state.view.isNavigationSaved) {
    Store.commit('view/STORE_NAVIGATION', _cloneDeep(navigation));
  }

  Store.commit('view/UNSET_CUSTOM_BREADCRUMB');
  Store.commit('view/UPDATE_HOME_BREADCRUMB_VISIBLE', to.meta && !to.meta.hideHomeBreadcrumb);

  /**
   * i18n
   */
  if (!ls.get('lang')) {
    ls.set('lang', PRIMARY_LOCALE);
  }
  Store.commit('lang/CHOOSE_LANGUAGE', ls.get('lang'));
  // await loadLanguage(ls.get('lang'));

  /**
   * 浏览器标签页标题
   */
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
