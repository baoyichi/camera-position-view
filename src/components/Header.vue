<template>
  <div class="nav-header">
    <div class="layout-header-wrap">
      <div class="layout-header-logo">
        <a>
          <h1>Travel Footprint</h1>
        </a>
      </div>
      <div class="layout-header-center">
        <div class="header-space-item" v-for="item in menuList" :key="item.value">
          <router-link :to="item.value" active-class="menu-active">{{ item.label }}</router-link>
        </div>
      </div>
      <div style="flex: 1 1 0"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  // logoUrl = require('@/assets/logo.png');
  menuList = [
    {
      value: '/travel',
      label: 'travel'
    },
    {
      value: 'album',
      label: 'selected work'
    }
  ];
}
</script>
<style lang="scss" scoped>
.nav-header {
  width: 100%;

  .layout-header-wrap {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 68px 48px;
    //background-color: #fece2f;

    .layout-header-logo {
      height: 100%;
      position: relative;
      overflow: hidden;

      a {
        display: flex;
        align-items: center;
        height: 100%;

        //img {
        //  height: 28px;
        //}

        h1 {
          height: 32px;
          margin: 0 0 0 12px;
          color: var(--ant-primary-color);
          font-weight: 600;
          font-size: 36px;
          line-height: 32px;
        }
      }
    }

    .layout-header-center {
      display: flex;
      height: 100%;
      margin-left: auto;
      overflow: hidden;
      padding: 0 36px;
      color: #9c9c9c !important;
      font-family: 'europa',serif;

      .header-space-item {
        align-items: center;
        justify-content: center;
        vertical-align: middle;
        transition: all 0.3s;
        padding: 0 12px;

        .menu-active {
          color: #000;
        }
      }
    }
  }
}
</style>
