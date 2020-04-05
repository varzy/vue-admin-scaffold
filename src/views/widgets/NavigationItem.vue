<template>
  <!-- start: submenu -->
  <el-submenu
    v-if="route.children && route.children.length > 0"
    :popper-append-to-body="false"
    :key="route.name"
    :index="route.name"
  >
    <!-- title -->
    <template #title>
      <i v-if="calcShouldRenderIcon('submenu', route)" :class="calcIcon(route)"></i>
      <span>{{ calcTitle(route) }}</span>
    </template>

    <!-- items -->
    <template v-for="child in route.children">
      <navigation-item
        v-if="child.children && child.children.length > 0"
        :key="child.name"
        :route="child"
        :level="level + 1"
        @node-click="parentClick"
      >
      </navigation-item>

      <el-menu-item v-else :key="child.name" :index="child.name" @click="nodeClick(child)">
        <i v-if="calcShouldRenderIcon('childItem', child)" :class="calcIcon(child)"></i>
        <span>{{ calcTitle(child) }}</span>
      </el-menu-item>
    </template>
  </el-submenu>
  <!-- end: submenu -->

  <!-- start: menu-item -->
  <el-menu-item v-else :index="route.name" @click="nodeClick(route)">
    <i v-if="calcShouldRenderIcon('menuItem', route)" :class="calcIcon(route)"></i>
    <span>{{ calcTitle(route) }}</span>
  </el-menu-item>
  <!-- end: menu-item -->
</template>

<script>
export default {
  name: 'NavigationItem',

  props: {
    route: {
      type: Object,
      required: true
    },
    level: {
      type: Number,
      default: 0
    }
  },

  methods: {
    calcTitle(route) {
      if (route.meta && route.meta.title) {
        return this.$i18n.te(route.meta.title) ? this.$i18n.t(route.meta.title) : route.meta.title;
      } else {
        return this.$i18n.t('unnamed');
      }
    },
    calcShouldRenderIcon(type, route) {
      return (route.meta && route.meta.icon) || (this.level === 0 && type !== 'childItem');
    },
    calcIcon(route) {
      return route.meta && route.meta.icon ? route.meta.icon : 'el-icon-s-data';
    },
    nodeClick(route) {
      this.$emit('node-click', route);
    },
    parentClick(route) {
      this.$emit('node-click', route);
    }
  }
};
</script>

<style lang="scss">
.el-menu-item.is-active {
  background-color: $g-color-primary;
  color: #fff;

  &:hover {
    background-color: $g-color-primary;
    color: #fff;
  }
}
</style>
