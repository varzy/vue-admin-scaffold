import SvgIconfont from './components/SvgIconfont';
import SvgLocal from './components/SvgLocal';

import '@/assets/icons/iconfont/iconfont.js';
import '@/assets/icons/iconfont/iconfont.css';

// requires and returns all modules that match
const requireAll = requireContext => requireContext.keys().map(requireContext);

// import all svg
const req = require.context('@/assets/icons/svg', true, /\.svg$/);
requireAll(req);

const install = Vue => {
  Vue.component('svg-iconfont', SvgIconfont);
  Vue.component('svg-local', SvgLocal);
};

export default install;
