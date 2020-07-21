/**
 * v-size:w="12"
 */
export default function(el, { value, arg }) {
  if (!['width', 'height', 'w', 'h'].includes(arg)) {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line
      console.error('The directive arg muse be width, height, w or h');
    }
    return;
  }

  let size;
  if (['width', 'w'].includes(arg)) size = 'width';
  if (['height', 'h'].includes(arg)) size = 'height';

  el.style[size] = typeof value === 'number' ? value + 'px' : value;
}
