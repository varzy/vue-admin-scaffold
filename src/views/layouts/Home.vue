<template>
  <div class="home">
    <header class="home-header">
      <div class="left">
        <div class="logo">
          <div class="logo-inner" @click="$router.push({ name: 'Index' })">{{ projectName }}</div>
        </div>
      </div>
      <div class="right">
        <a-dropdown @click.stop>
          <div class="user right-item">
            <span class="user-trigger">
              <a-avatar
                class="user-trigger-avatar"
                icon="user"
                :src="$store.state.user.userInfo.avatar"
              />
              <span class="user-trigger-username">{{ $store.state.user.userInfo.name }}</span>
            </span>
          </div>
          <a-menu slot="overlay" @click="onDropdownClick">
            <a-menu-item key="profile"><a-icon type="user" />Profile</a-menu-item>
            <a-menu-item key="logout"><a-icon type="logout" />Logout</a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </header>
    <section class="home-body">
      <aside class="home-body-aside">
        <div class="menu" :style="{ width: collapsed ? '80px' : '256px' }">
          <a-menu
            :inline-collapsed="collapsed"
            class="menu-nav"
            :mode="collapsed ? 'vertical' : 'inline'"
            :selected-keys="[$route.name]"
            @click="handleMenuSelected"
          >
            <navigation-item
              v-for="route in $store.state.view.navigation"
              :key="route.name"
              :route="route"
              @node-click="handleNavigationNodeClicked"
            ></navigation-item>
          </a-menu>
        </div>
        <div class="fold">
          <a-icon
            :class="['fold-icon', { 'fold-icon-collapsed': collapsed }]"
            type="menu-fold"
            @click="collapsed = !collapsed"
          />
        </div>
      </aside>
      <main class="home-body-main">
        <transition name="fade-effect" mode="out-in">
          <a-breadcrumb class="breadcrumb" v-if="$store.state.view.breadcrumbVisible">
            <a-breadcrumb-item>
              <router-link :to="{ name: 'Index' }">
                <a-icon type="home" />
              </router-link>
            </a-breadcrumb-item>
            <a-breadcrumb-item v-for="item in calcBreadcrumb" :key="item.name">
              <router-link v-if="!item.meta.disabledInBreadcrumb" :to="{ name: item.name }">
                {{ item.meta.title }}
              </router-link>
              <span v-else>{{ item.meta.title }}</span>
            </a-breadcrumb-item>
          </a-breadcrumb>
        </transition>

        <div class="content">
          <transition name="fade-transform" mode="out-in">
            <router-view :key="$route.path" />
          </transition>
        </div>

        <page-footer class="footer"></page-footer>
      </main>
    </section>
  </div>
</template>

<script>
import NavigationItem from '../widgets/NavigationItem';
import PageFooter from '../widgets/Footer';
import Permission from '../../utils/permission';

export default {
  name: 'Home',

  components: { NavigationItem, PageFooter },

  data() {
    return {
      collapsed: false,
      projectName: process.env.VUE_APP_PROJECT_NAME
    };
  },

  computed: {
    calcBreadcrumb() {
      return this.$route.matched.slice(1).filter(route => route.meta);
    }
  },

  methods: {
    handleMenuSelected({ key }) {
      if (key === 'Custom') {
        this.$notification.info({
          message: 'You triggered a custom event~',
          description: '不是每一场相遇都有结局，也不是每一个导航菜单都要跳转到一个页面。'
        });
        return;
      }

      this.$router.push({ name: key });
    },
    onDropdownClick({ key }) {
      const relation = {
        logout: this.logout,
        profile: this.viewProfile
      };

      if (relation[key]) relation[key]();
    },
    handleNavigationNodeClicked(route) {
      console.log(route);
    },
    viewProfile() {
      this.$router.push({ name: 'Profile' });
    },
    logout() {
      Permission.logout();
      this.$message.success('您已退出登录');
      this.$router.push({ name: 'Login' });
    }
  }
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

$height-header: 56px;
$bgc-header: #fff;
$bgc-page: #f9f9f9;

.home {
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: $bgc-page;

  &-header {
    flex-shrink: 0;
    height: $height-header;
    z-index: 501;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $bgc-header;
    padding-left: 24px;
    padding-right: 24px;
    box-shadow: 0 2px 6px rgba(0, 21, 41, 0.08);

    .left {
      .logo {
        &-inner {
          font-family: 'Righteous', cursive;
          font-size: 20px;
          cursor: pointer;
        }
      }
    }

    .right {
      &-item {
        height: $height-header;
        transition: background-color 0.2s ease-in-out;
        display: flex;
        align-items: center;
        padding-left: 16px;
        padding-right: 16px;

        &:hover {
          background-color: #f9f9f9;
        }
      }

      .user {
        &-trigger {
          cursor: pointer;

          &-avatar {
            margin-right: 8px;
          }

          &-username {
            vertical-align: middle;
          }
        }
      }
    }
  }

  &-body {
    flex: 1;
    min-height: 0;
    height: 100%;
    display: flex;

    &-aside {
      height: 100%;
      display: flex;
      flex-shrink: 0;
      flex-direction: column;
      background-color: #fff;
      box-shadow: 2px 0 6px rgba(0, 21, 41, 0.08);

      .menu {
        flex: 1;
        overflow: hidden auto;
        transition: all 0.2s ease-in-out;

        &-nav {
          width: 100%;
          border-right: 0;
        }
      }

      .fold {
        border-top: 1px solid #f0f0f0;
        height: 40px;
        display: flex;
        align-items: center;
        background-color: #fff;
        padding-left: 32px;

        &-icon {
          font-size: 16px;
          transform: rotate(0deg);
          transition: all 0.2s ease-in-out;

          &-collapsed {
            transform: rotate(180deg);
          }
        }
      }
    }

    &-main {
      flex: 1;
      min-width: 0;
      min-height: 0;
      height: 100%;
      box-sizing: border-box;
      overflow: hidden auto;
      padding: 24px;

      .breadcrumb {
        margin-bottom: 24px;
      }

      .footer {
        margin-top: 36px;
        margin-bottom: 24px;
      }
    }
  }
}
</style>

<style lang="scss">
/**
 * 渐显渐隐
 */
.fade-effect-enter-active,
.fade-effect-leave-active {
  transition: opacity 0.4s ease-in-out;
}
.fade-effect-enter,
.fade-effect-leave-to {
  opacity: 0;
}

/**
 * 页面切换
 */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.4s ease-in-out;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
