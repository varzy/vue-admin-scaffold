<template>
  <!-- start: submenu -->
  <el-submenu
    v-if="route.children && route.children.length > 0"
    :popper-append-to-body="false"
    :key="route.name"
    :index="route.name"
  >
    <!-- title -->
    <span slot="title">{{ getTitle(route) }}</span>

    <!-- items -->
    <template v-for="child in route.children">
      <navigation-item
        v-if="child.children && child.children.length > 0"
        :key="child.name"
        :route="child"
        @node-click="parentClick"
      >
      </navigation-item>

      <el-menu-item v-else :key="child.name" :index="child.name" @click="nodeClick(child)">
        {{ getTitle(child) }}
      </el-menu-item>
    </template>
  </el-submenu>
  <!-- end: submenu -->

  <!-- start: menu-item -->
  <el-menu-item v-else :index="route.name" @click="nodeClick(route)">
    {{ getTitle(route) }}
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
    }
  },

  methods: {
    getTitle(route) {
      return (route.meta && route.meta.title) || '未命名';
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
