<script setup lang="ts">
import { reactive, ref } from 'vue'
const activeName = ref('login')
//表单数据类型
interface formData {
  account: string
  password: string
  repassword?: string
}
// 登录表单数据
const loginData: formData = reactive({
  account: '11',
  password: '11'
})
// 注册表单数据
const registerData: formData = reactive({
  account: '11',
  password: '11',
  repassword: '11'
})
</script>
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
          <el-card class="box-card">
            <el-tabs v-model="activeName" class="demo-tabs" :stretch="true">
              <!-- 登录 -->
              <el-tab-pane label="登录" name="login">
                <el-form class="login-form">
                  <!-- 账号 -->
                  <el-form-item label="账号">
                    <el-input v-model="loginData.account" placeholder="请输入账号" />
                  </el-form-item>
                  <!-- 密码 -->
                  <el-form-item label="密码">
                    <el-input v-model="loginData.password" placeholder="请输入密码" />
                  </el-form-item>
                  <!-- 底部 -->
                  <div class="footer-wrapper">
                    <!-- 忘记密码 -->
                    <div class="forget-password">
                      <span class="forget-password-button">忘记密码</span>
                    </div>
                    <!-- 登录按钮 -->
                    <div class="footer-button">
                      <el-button type="primary">登录</el-button>
                    </div>
                    <!-- 转到注册 -->
                    <div class="footer-go-register">
                      还没有账号?
                      <span class="go-register">立即注册</span>
                    </div>
                  </div>
                </el-form>
              </el-tab-pane>
              <!-- 注册 -->
              <el-tab-pane label="注册" name="register">
                <el-form class="register-form">
                  <!-- 账号 -->
                  <el-form-item label="账号">
                    <el-input v-model="registerData.account" placeholder="账号长度1-6位" />
                  </el-form-item>
                  <!-- 密码 -->
                  <el-form-item label="密码">
                    <el-input
                      v-model="registerData.password"
                      placeholder="密码长度1-6位 包括字母和数字"
                    />
                  </el-form-item>
                  <!-- 确认密码 -->
                  <el-form-item label="确认密码">
                    <el-input v-model="registerData.repassword" placeholder="请再次输入密码" />
                  </el-form-item>
                  <!-- 注册按钮 -->
                  <div class="footer-button">
                    <el-button type="primary">注册</el-button>
                  </div>
                </el-form>
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </div>
      </el-main>
      <!-- Footer -->
      <el-footer class="footer-wrapper">
        <div class="footer-content">
          <div class="title">
            <span>博客页面</span> | <span>博客页面</span> | <span>博客页面</span> |
            <span>博客页面</span>
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
    .login-form {
      //登录底部外壳
      .footer-wrapper {
        display: flex;
        flex-direction: column;
        // 忘记密码
        .forget-password {
          display: flex;
          justify-content: flex-end;
          margin: 10px;
          .forget-password-button {
            color: #409eff;
            font-size: 12px;
            cursor: pointer;
          }
        }

        // 转到注册
        .footer-go-register {
          font-size: 12px;
          margin: 12px 0;
          display: flex;
          justify-content: center;
          .go-register {
            font-size: 12px;
            color: #409eff;
            cursor: pointer;
          }
        }
      }
    }
    // 登录按钮
    .footer-button {
      width: 100%;
      display: flex;
      justify-content: center;
    }
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
//表单边距
.el-form {
  margin-top: 28px;
}
// tabs标签
:deep(.el-tabs__item) {
  color: #333;
  font-size: 16px;
}
// 输入框高度
:deep(.el-input__inner) {
  height: 40px;
}
// 输入框标签高度
:deep(.el-form-item__label) {
  height: 40px;
  line-height: 40px;
}
:deep(.el-button) {
  width: 300px;
  height: 45px;
  font-size: 16px;
}
</style>