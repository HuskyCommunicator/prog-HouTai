<script setup lang="ts">
import Aside from './components/aside.vue'
import Header from './components/header.vue'
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <Aside />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="scss" scoped>
.el-aside {
  height: 100vh;
  background-color: #2b303b;
  overflow: hidden;
}
.el-header {
  background-color: #2b303b;
}
</style>
