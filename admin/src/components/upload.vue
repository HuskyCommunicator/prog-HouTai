<script setup lang="ts">
// 导入 Vue 的响应式函数和 Element Plus 的图标组件
import { computed, ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'

// 定义组件的 props
const props = defineProps({
  avatar: String // 用户的头像 URL
})

// 定义组件的自定义事件
const emit = defineEmits(['avatarChange']) // 当用户选择新的头像文件时触发

// 定义上传文件的接口
interface UploadFile {
  raw: File // 上传的文件对象
}

// 当用户选择新的头像文件时，触发 avatarChange 事件
const handleChange = (file: UploadFile) => {
  emit('avatarChange', file.raw)
}

// 计算上传的头像 URL，如果 props.avatar 是一个 blob URL，则使用它，否则使用空字符串
const uploadAvatar = computed(() =>
  props.avatar?.includes('blob') ? props.avatar : 'http://127.0.0.1:3000' + props.avatar
)
</script>

<template>
  <!-- 头像上传组件 -->
  <el-upload
    class="avatar-uploader"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    :show-file-list="false"
    accept="image/png,image/jpeg"
    :auto-upload="false"
    :on-change="handleChange"
  >
    <!-- 如果有上传的头像 URL，则显示头像图片，否则显示上传图标 -->
    <img v-if="uploadAvatar" :src="uploadAvatar" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
  </el-upload>
</template>

<style lang="scss"></style>
