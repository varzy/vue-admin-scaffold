import _import from './importer';
import Home from '@/views/layouts/Home';
import Virtual from '@/views/layouts/Virtual';

export class Meta {
  constructor({ title, disabledInBreadcrumb = false, hideBreadcrumb = false, roles = null }) {
    this.title = title;
    this.disabledInBreadcrumb = disabledInBreadcrumb;
    this.hideBreadcrumb = hideBreadcrumb;
    this.roles = roles;
  }
}

export class NavigationMeta extends Meta {
  constructor({
    title,
    disabledInBreadcrumb = false,
    hideBreadcrumb = false,
    roles = null,
    icon = '',
    activeMenu = null,
    inNav = true
  }) {
    super({ title, disabledInBreadcrumb, hideBreadcrumb, roles });
    this.icon = icon;
    this.activeMenu = activeMenu;
    this.inNav = inNav;
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
    redirect: { name: 'CrudCharacter' },
    meta: new NavigationMeta({ title: 'CRUD', disabledInBreadcrumb: true, icon: 'control' }),
    children: [
      {
        path: 'character',
        name: 'CrudCharacter',
        component: _import('crud/Character'),
        meta: new NavigationMeta({ title: 'Character' })
      },
      {
        path: 'article',
        name: 'CrudArticle',
        component: Virtual,
        redirect: { name: 'CrudArticleList' },
        meta: new NavigationMeta({ title: 'Article', disabledInBreadcrumb: true }),
        children: [
          {
            path: 'list',
            name: 'CrudArticleList',
            component: _import('crud/article/List'),
            meta: new NavigationMeta({ title: 'Article List' })
          },
          {
            path: 'create',
            name: 'CrudArticleCreate',
            component: _import('crud/article/Create'),
            meta: new NavigationMeta({ title: 'Create Article' })
          },
          {
            path: 'edit',
            name: 'CrudArticleEdit',
            component: _import('crud/article/Edit'),
            meta: new NavigationMeta({ title: 'Edit Article', inNav: false })
          }
        ]
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
        meta: new NavigationMeta({ title: 'User', roles: ['Super'] })
      },
      {
        path: 'category',
        name: 'PermissionCategory',
        component: _import('permission/Category'),
        meta: new NavigationMeta({ title: 'Category', roles: ['Super', 'Manager'] })
      },
      {
        path: 'post',
        name: 'PermissionPost',
        component: _import('permission/Post'),
        meta: new NavigationMeta({ title: 'Post', roles: ['Super', 'Manager'] })
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
      },
      {
        path: '/404',
        name: 'Error404',
        component: _import('errors/404'),
        meta: { title: '404' }
      },
      {
        path: '/401',
        name: 'Error401',
        component: _import('errors/401'),
        meta: { title: '401' }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: _import('login/Index'),
    meta: { title: 'Login' }
  },
  { path: '*', redirect: { name: 'Error404' } }
];
