<script setup lang="ts">
// 导入必要的组件和Vue函数
import Bread from '@/components/breadCrumb.vue'
import { ref } from 'vue'
import Account from './components/account.vue'
import Company from './components/company.vue'
import Home from './components/home.vue'
import Other from './components/other.vue'

// 定义响应式引用
const breadCrumb = ref() // 引用面包屑组件
const item = ref({ first: '系统设置' }) // 面包屑项目
const activeName = ref('first') // 当前活动的标签页名称
</script>

<template>
  <!-- 面包屑组件-->
  <Bread ref="breadCrumb" :item="item" />
  <div class="wrapper">
    <div class="content">
      <!-- tab -->
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="账号详情" name="first"><Account /></el-tab-pane>
        <el-tab-pane label="公司信息" name="second"><Company /></el-tab-pane>
        <el-tab-pane label="首页管理" name="third"><Home /></el-tab-pane>
        <el-tab-pane label="其他设置" name="fourth"><Other /></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// 定义样式
.wrapper {
  padding: 5px 5px 0 5px;
  height: calc(100vh - 100px);
}
.content {
  padding: 0 10px;
  height: 100%;
}
.el-tabs__content {
  padding: 32px;
  font-size: 32px;
}
</style>
