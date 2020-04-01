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
      <el-header class="layouts_home-body-header" style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>{{ userInfo.name }}</span>
        <el-link @click="onLogout">退出登录</el-link>
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
import { mapState } from 'vuex';
import Permission from '../../utils/Permission';

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
    ...mapState({
      userInfo: state => state.user.userInfo
    })
  },

  methods: {
    handleMenuItemClick(route) {
      const routeAction = route.meta.action;

      if (!routeAction) {
        this.$router.push({ name: route.name });
        return;
      }

      const relations = {};

      const willDo = relations[routeAction];
      if (willDo) {
        willDo();
      } else {
        this.$message.error('未知错误');
      }
    },
    onLogout() {
      Permission.logout();

      this.$message.success('您已退出登录');
      this.$router.push({ name: 'Login' });
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
