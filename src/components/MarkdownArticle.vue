<script>
import Marked from 'marked';

export default {
  name: 'MarkdownArticle',

  props: {
    md: {
      type: String
    }
  },

  data() {
    return {
      mdHtml: ''
    };
  },

  mounted() {
    this.mdHtml = Marked(this.md);
  },

  render() {
    return <article class="markdown_article" domPropsInnerHTML={this.mdHtml}></article>;
  }
};
</script>
