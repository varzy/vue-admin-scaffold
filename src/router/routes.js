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
      title: 'navigation.index',
      hideTitleInBrowserTab: true,
      hideInBreadcrumb: true,
      icon: 'el-icon-s-home'
    })
  },
  {
    path: 'readme',
    name: 'Readme',
    component: _import('readme/Index'),
    meta: new IRouteMeta({ title: 'navigation.readme', icon: 'el-icon-s-management' })
  },
  {
    path: 'crud',
    name: 'Crud',
    component: Virtual,
    redirect: { name: 'CrudTable' },
    meta: new IRouteMeta({ title: 'navigation.crud', icon: 'el-icon-s-order' }),
    children: [
      {
        path: 'table',
        name: 'CrudTable',
        component: _import('curd/Table'),
        meta: new IRouteMeta({ title: 'navigation.crud.table' })
      }
    ]
  },
  {
    path: 'chart',
    name: 'Chart',
    component: _import('chart/Index'),
    meta: new IRouteMeta({ title: 'navigation.chart', icon: 'el-icon-s-marketing' })
  },
  {
    path: 'icon',
    name: 'Icon',
    component: Virtual,
    meta: new IRouteMeta({ title: 'navigation.icon', icon: 'el-icon-star-on' }),
    children: [
      {
        path: 'iconfont',
        name: 'IconIconfont',
        component: _import('icon/Iconfont'),
        meta: new IRouteMeta({ title: 'navigation.icon.iconfont' })
      },
      {
        path: 'local',
        name: 'IconLocal',
        component: _import('icon/Local'),
        meta: new IRouteMeta({ title: 'navigation.icon.local' })
      }
    ]
  },
  {
    path: 'nested',
    name: 'Nested',
    component: Virtual,
    redirect: { name: 'NestedFirst' },
    meta: new IRouteMeta({ title: 'navigation.nested', icon: 'el-icon-s-promotion' }),
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
          },
          {
            path: 'fourth',
            name: 'NestedSecondFourth',
            component: _import('nested/second/Fourth'),
            meta: new IRouteMeta({ title: 'SecondFourth' })
          }
        ]
      }
    ]
  },
  {
    path: 'error',
    name: 'Error',
    component: Virtual,
    meta: new IRouteMeta({ title: 'navigation.error', icon: 'el-icon-error' }),
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
    meta: new IRouteMeta({
      title: 'navigation.custom_action',
      action: 'SayHi',
      icon: 'el-icon-s-opportunity'
    })
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
