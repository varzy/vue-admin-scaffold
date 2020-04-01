<template>
  <div class="second_fourth">
    <el-card shadow="hover" header="自定义面包屑">
      <span>展示了自定义面包屑导航栏的能力。</span>
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
