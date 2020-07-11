import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import Icon from 'ant-design-vue/lib/icon/';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
});

export default Vue => {
  Vue.use(Antd);
  Vue.use('IconFont', IconFont);
};
