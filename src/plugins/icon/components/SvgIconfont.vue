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
export default {
  name: 'IconfontSvg',

  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: null
    },
    size: {
      type: [Number, String],
      default: 18
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    }
  },

  computed: {
    calcWidth() {
      return this.size ? this.formatSize(this.size) : this.formatSize(this.width);
    },
    calcHeight() {
      return this.size ? this.formatSize(this.size) : this.formatSize(this.height);
    }
  },

  methods: {
    formatSize(size) {
      return typeof size === 'string' ? size : size + 'px';
    }
  }
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
