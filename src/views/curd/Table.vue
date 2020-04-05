<template>
  <div class="table">
    <el-card>
      <el-table :data="tableData"></el-table>
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
