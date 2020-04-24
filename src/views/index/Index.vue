<template>
  <div class="index">
    <el-card class="readme">
      <markdown-article :md="calcReadmeSource"></markdown-article>
    </el-card>

    <github-corner
      url="https://github.com/varzy/vue-admin-scaffold"
      :position="{ position: 'absolute', top: '-16px', right: '-16px' }"
      :bg-color="PRIMARY_COLOR"
    ></github-corner>
  </div>
</template>

<script>
import MarkdownArticle from '../../components/MarkdownArticle';
import ReadmeZh from '../../../README.md';
import ReadmeEn from '../../../README.en.md';
import GithubCorner from '../../components/GithubCorner';
import { PRIMARY_COLOR } from '../../config/constants';

export default {
  name: 'Index',

  components: { MarkdownArticle, GithubCorner },

  data() {
    return {
      PRIMARY_COLOR
    };
  },

  computed: {
    calcReadmeSource() {
      return this.$store.state.lang.chosenLang === 'en' ? ReadmeEn : ReadmeZh;
    }
  }
};
</script>

<style scoped lang="scss">
.index {
  position: relative;
}
</style>
