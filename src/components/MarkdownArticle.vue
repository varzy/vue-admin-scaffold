<script>
import Marked from 'marked';

export default {
  name: 'MarkdownArticle',

  props: {
    md: {
      type: String,
      required: true
    }
  },

  render() {
    return <article class="markdown_article" domPropsInnerHTML={Marked(this.md)}></article>;
  }
};
</script>
