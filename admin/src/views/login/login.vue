<script setup></script>
<template>
  <div class="common-layout">
    <el-container>
      <!-- Header -->
      <el-header class="header-wrapper">
        <div class="header-content">
          <h3>通用后台管理系统</h3>
          <span class="welcome">欢迎登录</span>
        </div>
      </el-header>
      <!-- Main -->
      <el-main>
        <div class="login-wrapper">
          <el-card class="box-card"> </el-card>
        </div>
      </el-main>
      <!-- Footer -->
      <el-footer class="footer-wrapper">
        <div class="footer-content">
          <div class="title">
            <span>博客页面</span> | <span>博客页面</span> | <span>博客页面</span> |
            <spa>博客页面</spa>
          </div>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>
<style lang="scss" scoped>
// 头部外壳
.header-wrapper {
  //头部内容
  .header-content {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    .welcome {
      font-size: 16px;
      font-weight: bold;
    }
  }
}
// 主体外壳
.el-main {
  background-image: url('../../assets/1.png');
  height: 600px;
  background-size: cover;
  background-position: center;
  .login-wrapper {
    width: 1200px;
    margin: 0 auto;
    height: 600px;
  }
  .box-card {
    width: 350px;
    height: 375px;
    float: right;
    position: relative;
    top: 14%;
  }
}
// 页脚外壳
.footer-wrapper {
  margin-top: 8px;
  //页脚内容
  .footer-content {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .title {
      color: #666;
    }
    span {
      margin: 0 4px;
    }
  }
}
</style>
