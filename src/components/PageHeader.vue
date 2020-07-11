<template>
  <div class="page_header"><slot></slot></div>
</template>

<script>
export default {
  name: 'PageHeader'
};
</script>

<style scoped lang="scss">
.page_header {
  background-color: #fff;
  margin: -16px -16px 0 -16px;
  padding: 16px;
}
</style>
