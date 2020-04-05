<template>
  <footer class="footer">
    <span class="copyright">&copy; {{ new Date().getFullYear() }}</span>
    <el-divider direction="vertical"></el-divider>
    <a class="link" href="https://github.com/varzy/vue-admin-scaffold" target="_blank">Github </a>
    <el-divider direction="vertical"></el-divider>
    <a class="link" href="https://varzy.me" target="_blank">Aiden Zhao</a>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style lang="scss" scoped>
.footer {
  text-align: center;
  color: #666;
  font-size: 14px;

  .link {
    text-decoration: none;

    &:link,
    &:visited {
      color: #666;
    }

    &:hover,
    &:active {
      color: $g-color-primary;
    }
  }
}
</style>
