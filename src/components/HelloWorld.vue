<script>
export default {
  name: 'HelloWorld',

  props: {
    words: {
      type: String,
      default: 'hello, world'
    }
  },

  created() {
    console.log(this.words);
  },

  render() {
    return <div class="hello_world">{this.words}</div>;
  }
};
</script>

<style scoped lang="scss">
.hello_world {
  padding: 16px;
  border: 1px solid #ccc;
}
</style>
