<script>
import MarkdownArticle from '../../components/MarkdownArticle';
import ReadmeDoc from '../../../README.md';
import GithubCorner from '../../components/GithubCorner';
import { PRIMARY_COLOR } from '../../config/constants';

export default {
  name: 'Index',

  components: { MarkdownArticle, GithubCorner },

  data() {
    return {
      readme: ReadmeDoc
    };
  },

  render() {
    return (
      <div class="index">
        <ElCard class="readme">
          <MarkdownArticle md={this.readme} />
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
