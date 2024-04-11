<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const state = reactive({
  circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
})
const logout = () => {
  router.push('/login')
}
</script>

<template>
  <div class="header">
    <p class="welcome">尊敬的 二哈 欢迎您登陆本系统</p>
    <div class="right">
      <!-- icon -->
      <el-icon><Message /></el-icon>
      <!-- 头像 -->
      <el-avatar :size="42" :src="state.circleUrl"></el-avatar>
      <!-- 下拉框 -->
      <el-dropdown>
        <span class="el-dropdown-link"> 设置 </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>设置账号</el-dropdown-item>
            <el-dropdown-item>更改头像</el-dropdown-item>
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
