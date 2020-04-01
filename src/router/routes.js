import _import from './importer';
import LayoutHome from '../views/layouts/Home';
import IRouteMeta from '../models/IRouteMeta';

export const homeNavigates = [
  {
    path: '',
    alias: 'index',
    name: 'Index',
    component: _import('index/Index'),
    meta: new IRouteMeta({
      title: '首页'
    })
  }
];

export default [
  {
    path: '/',
    name: 'LayoutHome',
    redirect: { name: 'Index' },
    component: LayoutHome,
    meta: new IRouteMeta({ hideInHomeBreadcrumb: true }),
    children: [
      ...homeNavigates,
      {
        path: '404',
        name: 'Error404',
        component: _import('errors/404'),
        meta: new IRouteMeta({ title: '404 Not Found', hideHomeBreadcrumb: true })
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: _import('login/Index'),
    meta: new IRouteMeta({ title: '登录' })
  },
  { path: '*', redirect: { name: 'Error404' } }
];
