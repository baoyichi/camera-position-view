<template>
  <div id="app">
    <nav-header></nav-header>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';

@Component({
  components: {
    'nav-header': Header
  }
})
export default class App extends Vue {}
</script>
<style lang="scss">

</style>
