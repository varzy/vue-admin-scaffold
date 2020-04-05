<template>
  <div class="iconfont">
    <el-card class="by_font_class" header="使用 Font Class">
      <i class="iconfont iconfont-qrcode"></i>
      <i class="iconfont iconfont-cut"></i>
      <i class="iconfont iconfont-chart-area"></i>
      <i class="iconfont iconfont-chart-line"></i>
      <i class="iconfont iconfont-chart-bar"></i>
      <i class="iconfont iconfont-nail"></i>
      <i class="iconfont iconfont-nail-fixed"></i>
      <i class="iconfont iconfont-tubiaozhizuomoban--1"></i>
      <i class="iconfont iconfont-tubiaozhizuomoban--2"></i>
      <i class="iconfont iconfont-tubiaozhizuomoban--3 "></i>
      <i class="iconfont iconfont-tubiaozhizuomoban--4"></i>
      <i class="iconfont iconfont-tubiaozhizuomoban--5"></i>
      <i class="iconfont iconfont-tubiaozhizuomoban--6"></i>
      <i class="iconfont iconfont-tubiaozhizuomoban--7"></i>
      <i class="iconfont iconfont-tubiaozhizuomoban--8"></i>
    </el-card>

    <el-card class="by_component g-gap" header="使用 SvgIconfont 组件">
      <svg-iconfont class="item" :size="32" name="qrcode"></svg-iconfont>
      <svg-iconfont class="item" :size="32" name="cut"></svg-iconfont>
      <svg-iconfont class="item" :size="32" name="chart-area"></svg-iconfont>
      <svg-iconfont class="item" :size="32" name="chart-line"></svg-iconfont>
      <svg-iconfont class="item" :size="32" name="chart-bar"></svg-iconfont>
      <svg-iconfont class="item" :size="32" name="nail"></svg-iconfont>
      <svg-iconfont class="item" :size="32" name="nail-fixed"></svg-iconfont>
      <svg-iconfont class="item" :size="32" name="tubiaozhizuomoban--1"></svg-iconfont>
      <svg-iconfont class="item" :size="32" name="tubiaozhizuomoban--2"></svg-iconfont>
      <svg-iconfont class="item" :size="32" name="tubiaozhizuomoban--3"></svg-iconfont>
      <svg-iconfont class="item" :size="32" name="tubiaozhizuomoban--4"></svg-iconfont>
      <svg-iconfont class="item" :size="32" name="tubiaozhizuomoban--5"></svg-iconfont>
      <svg-iconfont class="item" :size="32" name="tubiaozhizuomoban--6"></svg-iconfont>
      <svg-iconfont class="item" :size="32" name="tubiaozhizuomoban--7"></svg-iconfont>
      <svg-iconfont class="item" :size="32" name="tubiaozhizuomoban--8"></svg-iconfont>
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
  .by_font_class {
    i {
      font-size: 32px;
      margin-right: 16px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .by_component {
    .item {
      font-size: 32px;
      margin-right: 16px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
