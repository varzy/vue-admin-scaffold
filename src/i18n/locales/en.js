import elementEn from 'element-ui/lib/locale/lang/en';

export default {
  ...elementEn,

  hello: 'Hello',
  login: 'Login',
  unnamed: 'Unnamed',
  username: 'Username',
  password: 'Password',

  // navigation
  'navigation.index': 'Dashboard',
  'navigation.readme': 'README',
  'navigation.crud': 'CRUD',
  'navigation.crud.table': 'Table Style',
  'navigation.chart': 'Charts',
  'navigation.icon': 'Icons',
  'navigation.icon.iconfont': 'Iconfont Icons',
  'navigation.icon.local': 'Local Icons',
  'navigation.nested': 'Nested & Breadcrumb',
  'navigation.error': 'Errors',
  'navigation.custom_action': 'Custom Action',

  // validator
  'validator.required': '{field} is required',

  // view
  view: {
    layout: {
      home: {
        unknown_action: 'Unknown Action',
        you_triggered_an_action: 'You triggered an Action'
      }
    },
    login: {
      login_fail: 'Login fail. Please check your username and password.'
    },
    index: {
      i18n_welcome: 'Support Vue I18n. You can change primary language at' + ' header area.'
    },
    readme: {
      documentation: 'Full Documentation'
    }
  }
};
