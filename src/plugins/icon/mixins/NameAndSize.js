export default {
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
