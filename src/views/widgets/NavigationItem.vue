<template functional>
  <a-menu-item v-if="!props.route.children" :key="props.route.name">
    <a-icon type="pie-chart" /><span>{{ props.route.meta.title }}</span>
  </a-menu-item>

  <a-sub-menu v-else :key="props.route.name">
    <template #title>
      <a-icon type="mail" /><span>{{ props.route.meta.title }}</span>
    </template>

    <template v-for="child in props.route.children">
      <a-menu-item v-if="!child.children" :key="child.name">
        <a-icon type="pie-chart" /><span>{{ child.meta.title }}</span>
      </a-menu-item>
      <navigation-item v-else :key="child.key" :route="child" />
    </template>
  </a-sub-menu>
</template>

<script>
export default {
  name: 'NavigationItem',

  props: {
    route: { type: Object, required: true }
  }
};
</script>
