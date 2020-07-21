import gap from '@/directives/gap';
import size from '@/directives/size';

export default Vue => {
  Vue.directive('gap', gap);
  Vue.directive('size', size);
};
