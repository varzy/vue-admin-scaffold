import ElementUI from 'element-ui';
import i18n from '@/i18n/';

// 自定义默认参数
ElementUI.Card.props.shadow.default = 'hover';

export default Vue => {
  Vue.use(ElementUI, {
    size: 'small',
    i18n: (key, value) => i18n.t(key, value)
  });
};
