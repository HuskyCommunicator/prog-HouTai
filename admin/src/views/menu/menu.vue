<script setup lang="ts">
import Aside from './components/aside.vue'
import Header from './components/header.vue'
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <!-- 侧边栏组件 -->
        <Aside />
      </el-aside>
      <el-container>
        <el-header>
          <!-- 头部组件 -->
          <Header />
        </el-header>
        <el-main>
          <!-- 主体内容 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="scss" scoped>
.el-aside {
  height: 100vh;
  background-color: #2b303b;
  overflow: auto; /* 允许滚动 */
  scrollbar-width: none; /* 隐藏滚动条 - Firefox */
  -ms-overflow-style: none; /* 隐藏滚动条 - Internet Explorer 10+ */
}
.el-header {
  background-color: #2b303b;
}
.el-main {
  padding: 0;
  background-color: rgb(251, 251, 251);

  overflow: auto; /* 允许滚动 */
  scrollbar-width: none; /* 隐藏滚动条 - Firefox */
  -ms-overflow-style: none; /* 隐藏滚动条 - Internet Explorer 10+ */
}
</style>
