<script setup lang="ts">
// 导入必要的组件和Vue函数
import { ref } from 'vue'
import Account from './components/account.vue'
import Company from './components/company.vue'
import Home from './components/home.vue'
import Other from './components/other.vue'

const activeName = ref('first') // 当前活动的标签页名称
</script>

<template>
  <div class="wrapper">
    <!-- 面包屑组件-->
    <el-page-header icon="" title="系统设置" content="" />

    <!-- tab -->
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane label="账号详情" name="first"><Account /></el-tab-pane>
      <el-tab-pane label="公司信息" name="second"><Company /></el-tab-pane>
      <el-tab-pane label="首页管理" name="third"><Home /></el-tab-pane>
      <el-tab-pane label="其他设置" name="fourth"><Other /></el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="scss" scoped>
// 定义样式
.wrapper {
  padding: 0 10px;
  height: calc(100vh - 100px);
}
.el-tabs__content {
  padding: 32px;
  font-size: 32px;
}
</style>
