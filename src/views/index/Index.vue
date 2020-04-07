<template>
  <div class="index">
    <el-card class="readme">
      <markdown-article :md="readme"></markdown-article>
    </el-card>

    <github-corner
      url="https://github.com/varzy/vue-admin-scaffold"
      :position="{ position: 'absolute', top: '-16px', right: '-16px' }"
      :bg-color="primaryColor"
    ></github-corner>
  </div>
</template>

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
      primaryColor: PRIMARY_COLOR,
      readme: ReadmeDoc
    };
  }
};
</script>

<style scoped lang="scss">
.index {
  position: relative;
}
</style>
