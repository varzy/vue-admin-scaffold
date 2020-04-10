<script>
import MarkdownArticle from '../../components/MarkdownArticle';
import ReadmeZh from '../../../README.md';
import ReadmeEn from '../../../README.en.md';
import GithubCorner from '../../components/GithubCorner';
import { PRIMARY_COLOR } from '../../config/constants';

export default {
  name: 'Index',

  components: { MarkdownArticle, GithubCorner },

  computed: {
    calcReadmeSource() {
      return this.$store.state.lang.chosenLang === 'en' ? ReadmeEn : ReadmeZh;
    }
  },

  render() {
    return (
      <div class="index">
        <ElCard class="readme">
          <MarkdownArticle md={this.calcReadmeSource} />
        </ElCard>

        <GithubCorner
          url="https://github.com/varzy/vue-admin-scaffold"
          position={{ position: 'absolute', top: '-16px', right: '-16px' }}
          bgColor={PRIMARY_COLOR}
        ></GithubCorner>
      </div>
    );
  }
};
</script>

<style scoped lang="scss">
.index {
  position: relative;
}
</style>
