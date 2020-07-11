<template>
  <section class="layouts_home">
    <header class="layouts_home-header">
      <div class="left">
        <div class="logo">
          <span class="logo-inner" @click="$router.push({ name: 'Index' })">{{ projectName }}</span>
        </div>
      </div>

      <div class="right">
        <el-image class="avatar" :src="userAvatar"></el-image>
        <div class="user">
          <el-dropdown size="medium" :show-timeout="0" @command="handleDropdownCommanded">
            <span class="user-label">{{ $store.state.user.userInfo.name }}</span>
            <i class="el-icon-arrow-down el-icon--right"></i>

            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="logout">{{ $t('logout') }}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="locale">
          <language-selector label-color="#fff"></language-selector>
        </div>
      </div>
    </header>

    <section class="layouts_home-body">
      <aside class="layouts_home-body-aside">
        <el-menu class="menu" :default-active="$route.name" :collapse="isAsideCollapsed">
          <navigation-item
            v-for="navigation in $store.state.view.navigation"
            :key="navigation.name"
            :route="navigation"
            @node-click="handleMenuItemClick"
          >
          </navigation-item>
        </el-menu>

        <div class="collapse">
          <i
            :class="[
              'el-icon-s-fold',
              'collapse-icon',
              { 'collapse-icon-collapsed': isAsideCollapsed }
            ]"
            @click="isAsideCollapsed = !isAsideCollapsed"
          ></i>
        </div>
      </aside>

      <main class="layouts_home-body-main">
        <el-breadcrumb class="breadcrumb" v-show="$store.state.view.homeBreadcrumbVisible">
          <el-breadcrumb-item :to="{ name: 'Index' }">
            {{ $t('navigation.index') }}
          </el-breadcrumb-item>
          <el-breadcrumb-item v-for="(breadcrumb, index) in calcBreadcrumb" :key="index">
            <router-link v-if="breadcrumb.enabled" :to="breadcrumb.route">
              {{ calcBreadcrumbTitle(breadcrumb.title) }}
            </router-link>
            <span v-else>{{ calcBreadcrumbTitle(breadcrumb.title) }}</span>
          </el-breadcrumb-item>
        </el-breadcrumb>

        <div class="container">
          <transition name="fade" mode="out-in">
            <router-view />
          </transition>
        </div>

        <page-footer class="footer"></page-footer>
      </main>
    </section>
  </section>
</template>

<script>
import NavigationItem from '../widgets/NavigationItem';
import LanguageSelector from '../widgets/LanguageSelector';
import PageFooter from '../widgets/Footer';
import { PRIMARY_COLOR } from '../../config/constants';
import Permission from '../../utils/Permission';
import IBreadcrumbItem from '../../models/IBreadcrumbItem';

export default {
  name: 'LayoutHome',

  components: { NavigationItem, LanguageSelector, PageFooter },

  data() {
    return {
      menuActiveColor: PRIMARY_COLOR,
      projectName: process.env.VUE_APP_PROJECT_NAME,
      userAvatar: require('@/assets/images/default_avatar.png'),
      isAsideCollapsed: false
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
              title: route.meta && route.meta.title ? route.meta.title : 'unnamed',
              enabled: route.meta && !route.meta.disabledInBreadcrumb
            })
        );
    }
  },

  methods: {
    calcBreadcrumbTitle(title) {
      return this.$i18n.te(title) ? this.$i18n.t(title) : title;
    },
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
        this.$message.error(this.$i18n.t('view.layout.home.unknown_action'));
      }
    },
    handleDropdownCommanded(command) {
      const relation = {
        logout: () => this.logout()
      };

      if (relation[command]) relation[command]();
    },
    logout() {
      Permission.logout();

      this.$message.success(this.$i18n.t('view.layout.home.logout'));
      this.$router.push({ name: 'Login' });
    },
    sayHi() {
      this.$notify({
        title: 'hello, world',
        message: this.$i18n.t('view.layout.home.you_triggered_an_action')
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Gotu&display=swap');

$bgc-aside: #283646;
$bgc-header: #fff;
$height-header: 56px;
$width-aside: 232px;

.layouts_home {
  position: relative;
  height: 100vh;
  background-color: $g-color-background;

  &-header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: $height-header;
    z-index: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $bgc-header;
    padding-left: 24px;
    padding-right: 24px;
    box-shadow: 0 2px 6px rgba(0, 21, 41, 0.08);

    .left {
      display: flex;
      align-items: center;

      .logo {
        &-inner {
          cursor: pointer;
        }
      }
    }

    .right {
      display: flex;
      align-items: center;

      .avatar {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 1px solid #ddd;
      }

      .user {
        margin-left: 16px;
        cursor: pointer;
      }

      .locale {
        margin-left: 16px;
        cursor: pointer;
      }
    }
  }

  &-body {
    box-sizing: border-box;
    padding-top: $height-header;
    height: 100%;
    display: flex;

    &-aside {
      height: 100%;
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      box-shadow: 2px 0 6px rgba(0, 21, 41, 0.08);

      .menu {
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
        border-right: 0;

        &:not(.el-menu--collapse) {
          width: $width-aside;
        }
      }

      .collapse {
        border-top: 1px solid #f0f0f0;
        height: 40px;
        display: flex;
        align-items: center;
        background-color: #fff;
        padding-left: 20px;

        &-icon {
          font-size: 20px;
          color: #909399;
          transition: all 0.2s ease-in-out;
          transform: rotate(0deg);

          &-collapsed {
            transform: rotate(180deg);
          }
        }
      }
    }

    &-main {
      box-sizing: border-box;
      height: 100%;
      flex: 1;
      overflow-y: auto;
      padding: 16px;

      .breadcrumb {
        margin-bottom: 16px;
      }

      .footer {
        margin-top: 64px;
      }
    }
  }
}
</style>

<style lang="scss">
/**
 * 侧边导航菜单
 */
$bgc-aside: #fff;
$bgc-not-root: #f9f9f9;
$color-inactive: #333;
$color-hover: $g-color-primary;
$color-active: #fff;

.layouts_home-body-aside .menu.el-menu {
  .el-menu-item,
  .el-submenu .el-submenu__title {
    color: $color-inactive;
    background-color: $bgc-not-root;

    &:hover {
      color: $color-hover;
    }
  }

  > .el-menu-item,
  > .el-submenu > .el-submenu__title {
    background-color: $bgc-aside;
  }

  .el-menu-item.is-active {
    color: $color-active;
    background-color: $g-color-primary;
  }
}
</style>

<style lang="scss">
/**
 * 过渡动画
 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity $g-time-animation;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
