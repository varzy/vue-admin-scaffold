import SvgIconfont from './components/SvgIconfont';

import '@/assets/icons/iconfont/iconfont.js';
import '@/assets/icons/iconfont/iconfont.css';

const install = Vue => {
  Vue.component('svg-iconfont', SvgIconfont);
};

export default install;
