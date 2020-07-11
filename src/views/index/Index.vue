<template>
  <div class="index">
    <github-corner
      url="https://github.com/varzy/vue-admin-scaffold"
      :position="{ position: 'absolute', top: '-24px', right: '-24px' }"
      :bg-color="PRIMARY_COLOR"
    ></github-corner>
  </div>
</template>

<script>
import GithubCorner from '@/components/GithubCorner';
import { PRIMARY_COLOR } from '@/config/constants';

export default {
  name: 'Index',

  components: { GithubCorner },

  data() {
    return {
      PRIMARY_COLOR
    };
  }
};
</script>

<style scoped lang="scss">
.index {
  position: relative;
  height: 2000px;
}
</style>
