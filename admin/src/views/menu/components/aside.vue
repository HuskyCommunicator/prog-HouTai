<script setup lang="ts">
import { Menu as Location } from '@element-plus/icons-vue'
import { ref } from 'vue'
</script>

<template>
  <el-menu default-active="1" class="el-menu-vertical-demo" router>
    <div class="title">用户管理系统</div>

    <el-menu-item index="/home">
      <el-icon><House /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="/home">
      <el-icon><Document /></el-icon>
      <span>系统概览</span>
    </el-menu-item>
    <el-sub-menu index="1">
      <template #title>
        <el-icon><User /></el-icon>
        <span>用户管理</span>
      </template>
      <el-menu-item-group title="管理员管理">
        <el-menu-item index="1-1">产品管理员</el-menu-item>
        <el-menu-item index="1-2">用户管理员</el-menu-item>
        <el-menu-item index="1-3">消息管理员</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="员工管理">
        <el-menu-item index="1-4">用户列表</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><TakeawayBox /></el-icon>
        <span>产品管理</span>
      </template>
      <el-menu-item-group title="入库管理">
        <el-menu-item index="2-1">产品列表</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="出库管理">
        <el-menu-item index="2-2">出库列表</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>
        <el-icon><ChatSquare /></el-icon>
        <span>消息管理</span>
      </template>
      <el-menu-item-group title="入库管理">
        <el-menu-item index="3-1">消息列表</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="出库管理">
        <el-menu-item index="3-2">回收站</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item index="/home">
      <el-icon><location /></el-icon>
      <span>合同管理</span>
    </el-menu-item>
    <el-menu-item index="/home">
      <el-icon><location /></el-icon>
      <span>操作日志</span>
    </el-menu-item>
    <el-menu-item index="/home">
      <el-icon><location /></el-icon>
      <span>登录日志</span>
    </el-menu-item>
    <el-menu-item index="/home">
      <el-icon><Tools /></el-icon>
      <span>系统设置</span>
    </el-menu-item>
  </el-menu>
</template>
<style lang="scss" scoped>
.el-menu {
  overflow: hidden;
  border: 0;
}
.el-menu-item,
.el-menu-item-group,
:deep(.el-sub-menu__title) {
  background-color: #2b303b;
  border-right: 0;
  color: aliceblue;
  text-align: center;
}
.title {
  text-align: center;
  height: 56px;
  background-color: #2b303b;
  color: aliceblue;
  line-height: 56px;
}
.el-menu-item:hover,
.el-menu-item-group:hover,
:deep(.el-sub-menu__title:hover) {
  background-color: #3a5c9d;
}
:deep(.el-menu-item-group__title) {
  text-align: left;
}
</style>
