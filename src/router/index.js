import Router from './router';
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });

Router.beforeEach(async (to, from, next) => {
  if (to.meta && !to.meta.hideProgress) {
    NProgress.start();
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
