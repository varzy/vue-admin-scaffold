import _import from './importer';
import LayoutHome from '../views/layouts/Home';
import IRouteMeta from '../models/IRouteMeta';
import Virtual from '@/views/layouts/Virtual';

export const navigation = [
  {
    path: '',
    alias: ['index', 'dashboard'],
    name: 'Index',
    component: _import('index/Index'),
    meta: new IRouteMeta({ title: '首页', hideTitleInBrowserTab: true })
  },
  {
    path: 'curd',
    name: 'Curd',
    component: Virtual,
    redirect: { name: 'CurdTable' },
    meta: new IRouteMeta({ title: '增删改查' }),
    children: [
      {
        path: 'table',
        name: 'CurdTable',
        component: _import('curd/Table'),
        meta: new IRouteMeta({ title: '表格' })
      }
    ]
  },
  {
    path: 'nested',
    name: 'Nested',
    component: Virtual,
    redirect: { name: 'NestedIndex' },
    meta: new IRouteMeta({ title: '嵌套导航' }),
    children: [
      {
        path: '',
        alias: 'index',
        name: 'NestedIndex',
        component: _import('nested/Index'),
        meta: new IRouteMeta({ title: '首页' })
      },
      {
        path: 'second',
        name: 'NestedSecond',
        component: Virtual,
        redirect: { name: 'NestedSecondOne' },
        meta: new IRouteMeta({ title: '第二级' }),
        children: [
          {
            path: 'one',
            name: 'NestedSecondOne',
            component: _import('nested/second/SecondOne'),
            meta: new IRouteMeta({ title: 'nested-2-1' })
          },
          {
            path: 'two',
            name: 'NestedSecondTwo',
            component: _import('nested/second/SecondTwo'),
            meta: new IRouteMeta({ title: 'nested-2-2' })
          },
          {
            path: 'third',
            name: 'NestedSecondThird',
            component: Virtual,
            redirect: { name: 'NestedSecondThirdOne' },
            meta: new IRouteMeta({ title: '第三级' }),
            children: [
              {
                path: 'one',
                name: 'NestedSecondThirdOne',
                component: _import('nested/second/third/ThirdOne'),
                meta: new IRouteMeta({ title: 'nested-3-1' })
              },
              {
                path: 'two',
                name: 'NestedSecondThirdTwo',
                component: _import('nested/second/third/ThirdTwo'),
                meta: new IRouteMeta({ title: 'nested-3-2', hideHomeBreadcrumb: true })
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: 'error',
    name: 'Error',
    component: Virtual,
    meta: new IRouteMeta({ title: '错误' }),
    children: [
      {
        path: '404',
        name: 'Error404',
        component: _import('error/404'),
        meta: new IRouteMeta({ title: '404', hideHomeBreadcrumb: true })
      }
    ]
  },
  {
    path: '-',
    name: 'Action',
    meta: new IRouteMeta({ title: '自定义事件', action: 'SayHi' })
  }
];

export default [
  {
    path: '/',
    name: 'LayoutHome',
    redirect: { name: 'Index' },
    component: LayoutHome,
    meta: new IRouteMeta({ hideInBreadcrumb: true }),
    children: [...navigation]
  },
  {
    path: '/login',
    name: 'Login',
    component: _import('login/Index'),
    meta: new IRouteMeta({ title: '登录' })
  },
  { path: '*', redirect: { name: 'Error404' } }
];
