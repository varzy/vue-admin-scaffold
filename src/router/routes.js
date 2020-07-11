import _import from './importer';
import Home from '@/views/layouts/Home';
import IRouteMeta from '@/models/IRouteMeta';
import Virtual from '@/views/layouts/Virtual';

export const navigation = [
  {
    path: '',
    alias: ['index', 'dashboard'],
    name: 'Index',
    component: _import('index/Index'),
    meta: new IRouteMeta({
      title: 'Dashboard',
      hideBreadcrumb: true,
      hideTitleInBrowserTab: true,
      icon: 'home'
    })
  },
  {
    path: 'crud',
    name: 'Crud',
    component: Virtual,
    redirect: { name: 'CrudTable' },
    meta: new IRouteMeta({ title: 'CRUD', disabledInBreadcrumb: true, icon: 'control' }),
    children: [
      {
        path: 'table',
        name: 'CrudTable',
        component: _import('crud/Table'),
        meta: new IRouteMeta({ title: 'Table' })
      }
    ]
  },
  {
    path: 'chart',
    name: 'Chart',
    component: Virtual,
    redirect: { name: 'ChartSimple' },
    meta: new IRouteMeta({ title: 'Chart', disabledInBreadcrumb: true, icon: 'bar-chart' }),
    children: [
      {
        path: 'simple',
        name: 'ChartSimple',
        component: _import('chart/Simple'),
        meta: new IRouteMeta({ title: 'Simple' })
      }
    ]
  }
];

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: { name: 'Index' },
    children: [...navigation]
  },
  {
    path: '/login',
    name: 'Login',
    component: _import('login/Index'),
    meta: { title: '登录' }
  },
  {
    path: '/404',
    name: 'Error404',
    component: _import('errors/404'),
    meta: { title: '404' }
  },
  { path: '*', redirect: { name: 'Error404' } }
];
