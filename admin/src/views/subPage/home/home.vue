<script setup lang="ts">
import { ref } from 'vue'

const noticeDialog = ref(false)
const messageDialog = ref(false)
</script>
<template>
  <el-page-header icon="Location" title="首页" content="" />
  <div class="wrapper">
    <!-- 轮播图 -->
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 text="2xl" justify="center">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <!-- 介绍 -->
    <el-row :gutter="4">
      <el-col :span="6"> <el-card shadow="hover">Hover</el-card></el-col>
      <el-col :span="6"> <el-card shadow="hover">Hover</el-card></el-col>
      <el-col :span="6"> <el-card shadow="hover">Hover</el-card></el-col>
      <el-col :span="6"> <el-card shadow="hover">Hover</el-card></el-col>
    </el-row>
    <!-- 通知 -->
    <el-row :gutter="4">
      <el-col :span="12">
        <el-card shadow="hover" @click="noticeDialog = true">Hover</el-card>
        <!-- 公司公告 -->
        <el-dialog v-model="noticeDialog" title="公司公告" width="800"> 公司公告 </el-dialog>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover" @click="messageDialog = true">Hover</el-card>
        <!-- 系统消息 -->
        <el-dialog v-model="messageDialog" title="系统消息" width="800"> 系统消息 </el-dialog>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  padding: 0 10px;
  height: calc(100vh - 100px);
}
//轮播图
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
//栅格布局
.el-row {
  margin: 16px 0;
  .el-col {
    border-radius: 4px;
    .el-card {
      background-color: #e0e0e0;
      height: 180px;
    }
  }
}
</style>
