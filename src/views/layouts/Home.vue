<template>
  <section class="layouts_home">
    <aside
      :class="['layouts_home-aside', { 'layouts_home-aside-collapsed': isAsideCollapsed }]"
      :style="{ backgroundColor: page.asideBgc, width: page.asideWidth + 'px' }"
    >
      <div class="logo" v-show="!isAsideCollapsed">{{ projectName }}</div>

      <el-menu
        class="menu"
        text-color="#eee"
        :background-color="page.asideBgc"
        :default-active="$route.name"
        :collapse="isAsideCollapsed"
      >
        <navigation-item
          v-for="navigation in $store.state.view.navigation"
          :key="navigation.name"
          :route="navigation"
          @node-click="handleMenuItemClick"
        >
        </navigation-item>
      </el-menu>
    </aside>

    <section class="layouts_home-body">
      <header class="layouts_home-body-header">
        <div class="left">
          <el-breadcrumb class="breadcrumb" v-show="$store.state.view.homeBreadcrumbVisible">
            <el-breadcrumb-item v-for="(breadcrumb, index) in calcBreadcrumb" :key="index">
              <router-link v-if="breadcrumb.enabled" :to="breadcrumb.route">
                {{ breadcrumb.title }}
              </router-link>
              <span v-else>{{ breadcrumb.title }}</span>
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="right">
          <div class="user">
            <el-image class="user-avatar" :src="userAvatar"></el-image>
            <el-dropdown size="medium" @command="handleDropdownCommanded">
              <span class="user-name">{{ $store.state.user.userInfo.name }}</span>
              <i class="el-icon-arrow-down el-icon--right"></i>

              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </header>

      <main class="layouts_home-body-main">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </main>
    </section>
  </section>
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
      isAsideCollapsed: false,
      menuActiveColor: PRIMARY_COLOR,
      projectName: process.env.VUE_APP_PROJECT_NAME,
      userAvatar: require('@/assets/images/default_avatar.png'),
      page: {
        asideWidth: 240,
        asideBgc: '#35363a'
      }
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
    handleDropdownCommanded(command) {
      const relation = {
        logout: this.logout()
      };

      if (relation[command]) relation[command]();
    },
    logout() {
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
  position: relative;
  height: 100vh;
  background-color: $g-color-background;
  display: flex;

  &-aside {
    overflow: auto;
    flex-shrink: 0;
    box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
    z-index: 501;

    .logo {
      height: 80px;
      line-height: 80px;
      text-align: center;
      color: #fff;
      font-weight: bold;
    }

    .menu {
      width: 100%;
      border-right: 0;
    }
  }

  &-body {
    flex: 1;
    display: flex;
    flex-direction: column;

    &-header {
      padding-left: 16px;
      padding-right: 16px;
      height: 72px;
      flex-shrink: 0;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0 2px 6px rgba(0, 21, 41, 0.08);
      z-index: 500;

      .right {
        .user {
          display: flex;
          align-items: center;

          &-avatar {
            width: 48px;
            height: 48px;
            border-radius: 50%;
          }

          &-name {
            cursor: pointer;

            font-size: 16px;
            margin-left: 16px;
          }
        }
      }
    }

    &-main {
      flex: 1;
      padding: 16px;
      overflow: auto;

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

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity $g-time-animation;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
