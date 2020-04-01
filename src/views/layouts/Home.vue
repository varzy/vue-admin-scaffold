<template>
  <div class="layouts_home">
    home
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'LayoutsHome'
};
</script>

<style lang="scss" scoped>
.layouts_home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: $g-color-background;

  &-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 5000;
  }

  &-body {
    flex: 1;

    &-main {
      &-not_index {
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }
  }

  &-footer {
    flex-shrink: 0;
  }
}
</style>
