<script setup lang="ts">
import { computed, ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
const props = defineProps({
  avatar: String
})
const emit = defineEmits(['avatarChange'])

//自定义文件接口
interface UploadFile {
  raw: File
}
const handleChange = (file: UploadFile) => {
  emit('avatarChange', file.raw)
}
// 计算上传的头像URL
const uploadAvatar = computed(() => (props.avatar?.includes('blob') ? props.avatar : ''))
</script>
<template>
  <el-upload
    class="avatar-uploader"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    :show-file-list="false"
    accept="image/png,image/jpeg"
    :auto-upload="false"
    :on-change="handleChange"
  >
    <img v-if="uploadAvatar" :src="uploadAvatar" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
  </el-upload>
</template>
<style lang="scss"></style>
