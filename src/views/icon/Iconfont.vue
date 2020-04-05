<template>
  <div class="iconfont">
    <el-card header="Font Class 引用">
      <i class="cell iconfont iconfont-qrcode" style="font-size: 32px"></i>
      <i class="cell iconfont iconfont-cut"></i>
      <i class="cell iconfont iconfont-chart-area"></i>
      <i class="cell iconfont iconfont-chart-line"></i>
      <i class="cell iconfont iconfont-chart-bar"></i>
      <i class="cell iconfont iconfont-nail"></i>
      <i class="cell iconfont iconfont-nail-fixed"></i>
    </el-card>

    <el-card class="g-gap" header="SvgIconfont 组件引用">
      <svg-iconfont class="cell" name="qrcode" :size="32"></svg-iconfont>
      <svg-iconfont class="cell" name="cut"></svg-iconfont>
      <svg-iconfont class="cell" name="chart-area"></svg-iconfont>
      <svg-iconfont class="cell" name="chart-line"></svg-iconfont>
      <svg-iconfont class="cell" name="chart-bar"></svg-iconfont>
      <svg-iconfont class="cell" name="nail"></svg-iconfont>
      <svg-iconfont class="cell" name="nail-fixed"></svg-iconfont>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Iconfont'
};
</script>

<style scoped lang="scss">
.iconfont {
  .cell {
    margin-right: 16px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
