import ElementUI from 'element-ui';

// 自定义默认参数
ElementUI.Card.props.shadow.default = 'hover';

export default Vue => {
  Vue.use(ElementUI, { size: 'small' });
};
