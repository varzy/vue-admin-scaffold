<template>
  <div class="readme">
    <el-card header="README">
      <el-button type="primary" @click="onOpenDocumention">{{
        $t('view.readme.documentation')
      }}</el-button>
      <iframe class="frame" frameborder="0" :src="documentAddress"></iframe>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Readme',

  data() {
    return {
      documentAddress: `https://varzy.me/vue-admin-scaffold-book/`
    };
  },

  methods: {
    onOpenDocumention() {
      window.open(this.documentAddress, '_blank');
    }
  }
};
</script>

<style scoped lang="scss">
.readme {
  .frame {
    margin-top: 24px;
    width: 100%;
    height: 600px;
    border: 1px solid #dcdfe6;
    border-radius: 8px;
  }
}
</style>
