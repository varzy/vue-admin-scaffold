<template>
  <div class="documentation">
    <el-card>
      <el-button size="large" type="primary" @click="onOpenDocumentation">完整文档</el-button>
      <iframe class="frame" frameborder="0" :src="documentAddress"></iframe>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Documentation',

  data() {
    return {
      documentAddress: `https://varzy.me/vue-admin-scaffold-book/`
    };
  },

  methods: {
    onOpenDocumentation() {
      window.open(this.documentAddress, '_blank');
    }
  }
};
</script>

<style scoped lang="scss">
.documentation {
  .frame {
    margin-top: 24px;
    width: 100%;
    height: 600px;
    border: 1px solid #dcdfe6;
    border-radius: 8px;
  }
}
</style>
