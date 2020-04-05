import elementZh from 'element-ui/lib/locale/lang/zh-CN';

export default {
  ...elementZh,

  hello: '你好',
  login: '登录',
  logout: '退出登录',
  unnamed: '未命名',
  username: '用户名',
  password: '密码',

  // navigation
  'navigation.index': '首页',
  'navigation.readme': 'README',
  'navigation.crud': '增删改查',
  'navigation.crud.table': '表格风格',
  'navigation.chart': '图表',
  'navigation.icon': '图标',
  'navigation.icon.iconfont': 'Iconfont 图标',
  'navigation.icon.local': '本地图标',
  'navigation.nested': '嵌套 & 面包屑',
  'navigation.error': '错误',
  'navigation.custom_action': '自定义事件',

  // validator
  'validator.required': '{field}必填',

  // view
  view: {
    layout: {
      home: {
        unknown_action: '未知的自定义事件',
        you_triggered_an_action: '你触发了一个自定义事件',
        logout: '你已退出登录'
      }
    },
    login: {
      login_fail: '登录失败。请检查你的用户名和密码。'
    },
    index: {
      i18n_welcome: '你好，世界'
    },
    readme: {
      documentation: '完整文档'
    }
  }
};
