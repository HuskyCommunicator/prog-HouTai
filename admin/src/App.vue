<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss">
body,
html,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
// * {
//   overflow: auto; /* 允许滚动 */
//   scrollbar-width: none; /* 隐藏滚动条 - Firefox */
//   -ms-overflow-style: none; /* 隐藏滚动条 - Internet Explorer 10+ */
// }
</style>
