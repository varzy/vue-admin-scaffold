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
    meta: new IRouteMeta({
      title: '首页',
      hideTitleInBrowserTab: true,
      icon: 'el-icon-s-home'
    })
  },
  {
    path: 'curd',
    name: 'Curd',
    component: Virtual,
    redirect: { name: 'CurdTable' },
    meta: new IRouteMeta({ title: '增删改查', icon: 'el-icon-s-management' }),
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
    redirect: { name: 'NestedFirst' },
    meta: new IRouteMeta({ title: '嵌套导航栏 & 面包屑', icon: 'el-icon-s-promotion' }),
    children: [
      {
        path: 'first',
        name: 'NestedFirst',
        component: _import('nested/First'),
        meta: new IRouteMeta({ title: 'First' })
      },
      {
        path: 'second',
        name: 'NestedSecond',
        component: Virtual,
        redirect: { name: 'NestedSecondFirst' },
        meta: new IRouteMeta({ title: 'Second' }),
        children: [
          {
            path: 'first',
            name: 'NestedSecondFirst',
            component: _import('nested/second/First'),
            meta: new IRouteMeta({ title: 'SecondFirst' })
          },
          {
            path: 'second',
            name: 'NestedSecondSecond',
            component: _import('nested/second/Second'),
            meta: new IRouteMeta({ title: 'SecondSecond' })
          },
          {
            path: 'third',
            name: 'NestedSecondThird',
            component: Virtual,
            redirect: { name: 'NestedSecondThirdFirst' },
            meta: new IRouteMeta({ title: 'SecondThird', disabledInBreadcrumb: true }),
            children: [
              {
                path: 'first',
                name: 'NestedSecondThirdFirst',
                component: _import('nested/second/third/First'),
                meta: new IRouteMeta({ title: 'SecondThirdFirst' })
              },
              {
                path: 'two',
                name: 'NestedSecondThirdTwo',
                component: _import('nested/second/third/Second'),
                meta: new IRouteMeta({ title: 'SecondThirdSecond', hideHomeBreadcrumb: true })
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
    meta: new IRouteMeta({ title: '错误', icon: 'el-icon-error' }),
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
    meta: new IRouteMeta({ title: '自定义事件', action: 'SayHi', icon: 'el-icon-s-opportunity' })
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
