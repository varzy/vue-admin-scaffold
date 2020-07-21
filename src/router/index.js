import Router from './router';
import Store from '../store/';
import { navigation } from './routes';
import Permission from '@/utils/Permission';
import { ls } from '@/utils/storage';
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });

/**
 * 过滤路由数组得到适用于导航栏的路由
 */
// const filterNavRoutes = routes => {
//   const availableRoutes = [];
//   routes.forEach(route => {
//     if (route.meta && route.meta.inNav) {
//       if (route.children) {
//         route.children = filterNavRoutes(route.children);
//       }
//       availableRoutes.push(route);
//     }
//   });

//   return availableRoutes;
// };

Router.beforeEach((to, from, next) => {
  NProgress.start();

  /**
   * 权限
   */
  // 已登录
  if (Permission.isLogin()) {
    // 不允许已登录状态下再次进入登录页
    if (to.name === 'Login') next({ name: 'Index' });
    // 保存用户信息至 vuex
    if (!Store.state.user.userInfo.id) Store.commit('user/STORE_USER_INFO', ls.get('user'));
  }
  // 未登录
  else {
    // 强制重定向到登录页
    if (to.name !== 'Login') next({ name: 'Login' });
  }

  /**
   * 视图
   */
  // 保存导航路由至 vuex
  if (!Store.state.view.isNavigationSaved) {
    Store.commit('view/STORE_NAVIGATION', navigation);
  }
  // 更新是否显示面包屑导航栏
  Store.commit('view/UPDATE_BREADCRUMB_VISIBLE', to.meta && !to.meta.hideBreadcrumb);

  /**
   * 浏览器标签页标题
   */
  const routeTitle = to.meta && to.meta.title ? to.meta.title : null;
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
