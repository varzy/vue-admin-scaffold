<template>
  <div class="local">
    <el-card header="本地 SVG 图标">
      <svg-local class="item" name="smile" :size="32"></svg-local>
      <svg-local class="item" name="cry" :size="32"></svg-local>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Local'
};
</script>

<style scoped lang="scss">
.local {
  .item {
    margin-right: 16px;
  }
}
</style>
