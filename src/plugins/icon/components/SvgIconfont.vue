<template>
  <svg
    :class="['svg_iconfont', 'svg_iconfont-' + name]"
    aria-hidden="true"
    :style="{ width: calcWidth, height: calcHeight }"
  >
    <title v-if="title">{{ title }}</title>
    <use :xlink:href="`#iconfont-${name}`" />
  </svg>
</template>

<script>
import NameAndSize from '../mixins/NameAndSize';

export default {
  name: 'IconfontSvg',

  mixins: [NameAndSize]
};
</script>

<style lang="scss">
.svg_iconfont {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
