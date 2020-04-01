<template>
  <div class="table">
    <el-table :data="tableData"></el-table>
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
