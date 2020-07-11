<template functional>
  <a-menu-item v-if="!props.route.children" :key="props.route.name">
    <a-icon v-if="props.route.meta.icon" :type="props.route.meta.icon" />
    <span>{{ props.route.meta.title }}</span>
  </a-menu-item>

  <a-sub-menu v-else :key="props.route.name">
    <template #title>
      <a-icon v-if="props.route.meta.icon" :type="props.route.meta.icon" />
      <span>{{ props.route.meta.title }}</span>
    </template>

    <template v-for="child in props.route.children">
      <a-menu-item v-if="!child.children" :key="child.name">
        <a-icon v-if="child.meta.icon" :type="child.meta.icon" />
        <span>{{ child.meta.title }}</span>
      </a-menu-item>
      <navigation-item v-else :key="child.key" :route="child" />
    </template>
  </a-sub-menu>
</template>

<script>
export default {
  functional: true,

  name: 'NavigationItem',

  props: {
    route: { type: Object, required: true }
  }
};
</script>
