<template>
  <div class="error_404">
    <div class="wrapper">
      <div class="header">
        <h1 class="header-title">Whoops~</h1>
        <p class="header-subtitle">It seems like U found a</p>
        <p class="header-zelda">Dead Link</p>
      </div>
      <img class="img" src="@/assets/images/404_dead_link.png" alt="404: A dead link~" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404'
};
</script>

<style lang="scss" scoped>
.error_404 {
  text-align: center;

  .header {
    &-title {
      font-weight: normal;
    }

    &-zelda {
      font-size: 40px;
      font-weight: bold;
      line-height: 1;
      margin: 0;
      padding: 0;
    }
  }

  .img {
    margin-top: 64px;
  }
}
</style>
