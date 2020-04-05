<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :class="['svg_local', 'svg_local-' + this.name]"
    :style="{ width: calcWidth, height: calcHeight }"
  >
    <title v-if="title">{{ title }}</title>
    <use :xlink:href="iconPath" xmlns:xlink="http://www.w3.org/1999/xlink" />
  </svg>
</template>

<script>
import NameAndSize from '../mixins/NameAndSize';

export default {
  name: 'SvgLocal',

  mixins: [NameAndSize],

  computed: {
    iconPath() {
      let icon = require(`@/assets/icons/svg/${this.name}.svg`);
      if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
        icon = icon.default;
      }

      return icon.url;
    }
  }
};
</script>

<style lang="scss">
.svg_local {
  fill: currentColor;
}
</style>
