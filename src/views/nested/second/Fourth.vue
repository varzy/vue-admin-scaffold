<template>
  <div class="second_fourth">
    <el-card header="SecondFourth">
      除了自动维护，你亦可 <del>赛艇</del> 对面包屑导航栏为所欲为。
    </el-card>
  </div>
</template>

<script>
import IBreadcrumbItem from '../../../models/IBreadcrumbItem';
import { randomStr } from '../../../utils/helpers';

export default {
  name: 'SecondFourth',

  created() {
    this.setCustomBreadcrumb();
  },

  methods: {
    setCustomBreadcrumb() {
      this.$store.commit('view/STORE_CUSTOM_BREADCRUMB', [
        new IBreadcrumbItem({ title: 'Whatever', enabled: false }),
        new IBreadcrumbItem({ title: +new Date(), enabled: false }),
        new IBreadcrumbItem({ title: randomStr(), enabled: false }),
        new IBreadcrumbItem({ title: 'NestedFirst', route: { name: 'NestedFirst' } }),
        new IBreadcrumbItem({ title: 'NestedSecondFourth', route: this.$route })
      ]);
    }
  }
};
</script>
