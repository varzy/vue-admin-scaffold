<template>
  <div class="table">
    <el-card>
      <el-alert
        title="TODO"
        type="warning"
        description="暂时没有找到合适的接口用于演示~"
        show-icon
        :closable="false"
      >
      </el-alert>

      <el-table class="g-gap" :data="tableData"></el-table>

      <el-pagination class="g-gap"></el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Table',

  data() {
    return {
      tableData: []
    };
  }
};
</script>
