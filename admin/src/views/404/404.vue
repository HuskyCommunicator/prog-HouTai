<script setup lang="ts">
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'
const router = useRouter()
const userStore = useUserStore()
const back = () => {
  router.push('/menu')
}
</script>
<template>
  <button @click="back">back</button>
</template>
<style lang="scss" scoped></style>
