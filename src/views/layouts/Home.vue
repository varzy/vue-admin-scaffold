<template>
  <div class="home">
    <header class="home-header">
      <div class="left">
        <div class="logo">
          <div class="logo-inner" @click="$router.push({ name: 'Index' })">Vue Admin Scaffold</div>
        </div>
      </div>
      <div class="right">user</div>
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
        <a-breadcrumb class="breadcrumb" v-show="$store.state.view.breadcrumbVisible">
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

        <div class="content"><router-view /></div>

        <div class="footer"><page-footer></page-footer></div>
      </main>
    </section>
  </div>
</template>

<script>
import NavigationItem from '../widgets/NavigationItem';
import PageFooter from '../widgets/Footer';

export default {
  name: 'Home',

  components: { NavigationItem, PageFooter },

  data() {
    return {
      collapsed: false
    };
  },

  computed: {
    calcBreadcrumb() {
      console.log(this.$route.matched);
      return this.$route.matched.slice(1).filter(route => route.meta);
    }
  },

  methods: {
    handleMenuSelected({ key }) {
      console.log(key);
      this.$router.push({ name: key });
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
  }

  &-body {
    flex: 1;
    min-height: 0;
    height: 100%;
    display: flex;

    &-aside {
      height: 100%;
      display: flex;
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
      min-height: 0;
      height: 100%;
      box-sizing: border-box;
      overflow-y: auto;
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
