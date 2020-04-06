<template>
  <div class="index">
    <el-card class="readme">
      <markdown-article :md="readme"></markdown-article>
    </el-card>
  </div>
</template>

<script>
import MarkdownArticle from '../../components/MarkdownArticle';
import ReadmeDoc from '../../../README.md';

export default {
  name: 'Index',

  components: { MarkdownArticle },

  data() {
    return {
      readme: ReadmeDoc
    };
  }
};
</script>
