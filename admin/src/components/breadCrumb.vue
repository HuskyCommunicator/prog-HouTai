<script setup lang="ts">
const props = defineProps(['item'])
</script>
<template>
  <div class="bread">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>{{ props.item.first }}</el-breadcrumb-item>
      <el-breadcrumb-item v-if="props.item.second">{{ props.item.second }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<style lang="scss" scoped>
.bread {
  height: 30px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  background-color: rgb(176, 176, 176);
}
:deep(.el-breadcrumb__item) {
  height: 30px;
  font-size: 16px;
  line-height: 30px;
}
:deep(.el-breadcrumb__inner) {
  font-weight: 500;
}
</style>
