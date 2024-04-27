<script setup lang="ts">
// 从Vue和用户存储中导入必要的模块
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore'

// 初始化用户存储和路由器
const userStore = useUserStore()
const router = useRouter()

const avatar = computed(() =>
  userStore.userInfo.avatar
    ? 'http://127.0.0.1:3000' + userStore.userInfo.avatar
    : 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
)
// 退出函数，用于清除用户信息并导航至登录页面
const logout = () => {
  // 清除用户信息
  userStore.clearUserInfo()
  // 导航至登录页面
  router.push('/login')
}
import cs from '@/utils/tokenAna'
const changeAvatar = () => {}
</script>

<template>
  <div class="header">
    <p class="welcome">尊敬的 {{ userStore.userInfo.name }} 欢迎您登陆本系统</p>
    <div class="right">
      <!-- icon -->
      <el-icon><Message /></el-icon>
      <!-- 头像 -->
      <el-avatar :size="42" v-if="avatar" :src="avatar"></el-avatar>
      <!-- 下拉框 -->
      <el-dropdown>
        <span class="el-dropdown-link"> 设置 </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="router.push('/set')">设置账号</el-dropdown-item>
            <el-dropdown-item @click="changeAvatar">更改头像</el-dropdown-item>
            <el-dropdown-item @click="logout">退出登陆</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  .welcome {
    color: beige;
  }
  .right {
    align-items: center;
    display: flex;
    margin-left: 20px;
    font-size: 24px;
    .el-icon {
      margin-right: 10px;
    }
    .el-avatar {
      margin-right: 10px;
    }
    .el-dropdown-link {
      color: aliceblue;
    }
  }
}
</style>
