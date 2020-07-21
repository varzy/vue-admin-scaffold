import _import from './importer';
import Home from '@/views/layouts/Home';
import Virtual from '@/views/layouts/Virtual';

export class Meta {
  constructor({ title, hideBreadcrumb = false, roles = null }) {
    this.title = title;
    this.hideBreadcrumb = hideBreadcrumb;
    this.roles = roles;
  }
}

export class NavigationMeta extends Meta {
  constructor({ title, hideBreadcrumb = false, roles = null, icon = '' }) {
    super({ title, hideBreadcrumb, roles });
    this.icon = icon;
  }
}

export const navigation = [
  {
    path: '',
    alias: ['index', 'dashboard'],
    name: 'Index',
    component: _import('index/Index'),
    meta: new NavigationMeta({
      title: 'Dashboard',
      hideBreadcrumb: true,
      icon: 'home'
    })
  },
  {
    path: 'crud',
    name: 'Crud',
    component: Virtual,
    redirect: { name: 'CrudTable' },
    meta: new NavigationMeta({ title: 'CRUD', disabledInBreadcrumb: true, icon: 'control' }),
    children: [
      {
        path: 'table',
        name: 'CrudTable',
        component: _import('crud/Table'),
        meta: new NavigationMeta({ title: 'Table' })
      }
    ]
  },
  {
    path: 'chart',
    name: 'Chart',
    component: Virtual,
    redirect: { name: 'ChartSimple' },
    meta: new NavigationMeta({ title: 'Chart', disabledInBreadcrumb: true, icon: 'bar-chart' }),
    children: [
      {
        path: 'simple',
        name: 'ChartSimple',
        component: _import('chart/Simple'),
        meta: new NavigationMeta({ title: 'Simple' })
      }
    ]
  },
  {
    path: 'permission',
    name: 'Permission',
    component: Virtual,
    meta: new NavigationMeta({
      title: 'Permission',
      disabledInBreadcrumb: true,
      icon: 'file-protect'
    }),
    children: [
      {
        path: 'user',
        name: 'PermissionUser',
        component: _import('permission/User'),
        meta: new NavigationMeta({ title: 'User' })
      },
      {
        path: 'category',
        name: 'PermissionCategory',
        component: _import('permission/Category'),
        meta: new NavigationMeta({ title: 'Category' })
      },
      {
        path: 'post',
        name: 'PermissionPost',
        component: _import('permission/Post'),
        meta: new NavigationMeta({ title: 'Post' })
      }
    ]
  },
  {
    path: 'custom',
    name: 'Custom',
    meta: new NavigationMeta({ title: 'Custom Event', icon: 'number' })
  },
  {
    path: 'setting',
    name: 'Setting',
    component: _import('setting/Index'),
    meta: new NavigationMeta({ title: 'Settings', icon: 'setting' })
  }
];

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: { name: 'Index' },
    children: [
      ...navigation,
      {
        path: 'profile',
        name: 'Profile',
        component: _import('profile/Index'),
        meta: { title: 'Profile' }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: _import('login/Index'),
    meta: { title: 'Login' }
  },
  {
    path: '/404',
    name: 'Error404',
    component: _import('errors/404'),
    meta: { title: '404' }
  },
  { path: '*', redirect: { name: 'Error404' } }
];
