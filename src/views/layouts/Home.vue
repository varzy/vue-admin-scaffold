<template>
  <el-container class="layouts_home">
    <el-aside class="layouts_home-aside" width="200px">
      <div class="logo">{{ projectName }}</div>

      <el-menu
        class="menu"
        menu-trigger="hover"
        :active-text-color="menuActiveColor"
        :default-active="$route.name"
      >
        <navigation-item
          v-for="navigation in $store.state.view.navigation"
          :key="navigation.name"
          :route="navigation"
          @node-click="handleMenuItemClick"
        >
        </navigation-item>
      </el-menu>
    </el-aside>

    <el-container class="layouts_home-body">
      <el-header class="layouts_home-body-header">
        <div class="left">
          <el-breadcrumb v-show="$store.state.view.homeBreadcrumbVisible">
            <el-breadcrumb-item v-for="(breadcrumb, index) in calcBreadcrumb" :key="index">
              <router-link v-if="breadcrumb.enabled" :to="breadcrumb.route">
                {{ breadcrumb.title }}
              </router-link>
              <span v-else>{{ breadcrumb.title }}</span>
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="right">
          <span>{{ $store.state.user.userInfo.name }}</span>
        </div>
      </el-header>

      <el-main class="layouts_home-body-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavigationItem from '../widgets/NavigationItem';
import { PRIMARY_COLOR } from '../../config/constants';
import Permission from '../../utils/Permission';
import IBreadcrumbItem from '../../models/IBreadcrumbItem';

export default {
  name: 'LayoutHome',

  components: { NavigationItem },

  data() {
    return {
      menuActiveColor: PRIMARY_COLOR,
      projectName: process.env.VUE_APP_PROJECT_NAME
    };
  },

  computed: {
    calcBreadcrumb() {
      if (this.$store.state.view.useCustomBreadcrumb) {
        return this.$store.state.view.customBreadcrumb;
      }

      return this.$route.matched
        .filter(route => route.meta && !route.meta.hideInBreadcrumb)
        .map(
          route =>
            new IBreadcrumbItem({
              route,
              title: route.meta && route.meta.title ? route.meta.title : '未命名',
              enabled: route.meta && !route.meta.disabledInBreadcrumb
            })
        );
    }
  },

  methods: {
    handleMenuItemClick(route) {
      const routeAction = route.meta.action;

      if (!routeAction) {
        this.$router.push({ name: route.name });
        return;
      }

      const relations = {
        SayHi: this.sayHi
      };

      const willDo = relations[routeAction];
      if (willDo) {
        willDo();
      } else {
        this.$message.error('未知的自定义事件');
      }
    },
    onLogout() {
      Permission.logout();

      this.$message.success('你已退出登录');
      this.$router.push({ name: 'Login' });
    },
    sayHi() {
      this.$notify({
        title: 'hello, world',
        message: '你触发了一个自定义事件'
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.layouts_home {
  height: 100vh;
  background-color: $g-color-background;

  &-aside {
  }

  &-body {
    &-header {
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .left {
      }
    }

    &-main {
      &:after {
        content: 'for firefox';
        display: block;
        visibility: hidden;
        width: 100%;
        height: 20px;
      }
    }
  }
}
</style>
