<script setup lang="ts">
import Bread from '@/components/breadCrumb.vue'
import { ref } from 'vue'
const breadCrumb = ref()
const item = ref({ first: '系统设置' })
</script>
<template><Bread ref="breadCrumb" :item="item" />设置</template>
<style lang="scss" scoped></style>
