/**
 * v-gap
 * v-gap:mt="16"
 */
export default function(el, { arg = 'mt', value = 16 }) {
  const relation = {
    mt: 'margin-top',
    mr: 'margin-right',
    mb: 'margin-bottom',
    ml: 'margin-left',
    pt: 'padding-top',
    pr: 'padding-right',
    pb: 'padding-bottom',
    pl: 'padding-left'
  };

  el.style[relation[arg]] = typeof value === 'number' ? value + 'px' : value;
}
