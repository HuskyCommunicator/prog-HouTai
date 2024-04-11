<script setup lang="ts">
// 导入所需的库和API
import { onMounted, reactive, ref } from 'vue'
import { loginAPI } from '@/apis/authAPI'
import { ElMessage } from 'element-plus'
import Forget from './components/forget_password.vue'

// 定义表单数据的接口
interface formData {
  account: string
  password: string
  repassword?: string
}

// 初始化登录表单数据
const loginData: formData = reactive({
  account: '11',
  password: '11'
})

// 初始化注册表单数据
const registerData: formData = reactive({
  account: '11',
  password: '11',
  repassword: '11'
})

// 创建对登录表单和注册表单的引用
const loginForm = ref<HTMLFormElement | null>(null)
const registerForm = ref<HTMLFormElement | null>(null)

// 创建对忘记密码弹窗的引用
const forgetPwd = ref<InstanceType<typeof Forget> | null>(null)

// 当前活动的标签页名称
const activeName = ref<string>('login')

// 表单验证规则
const rules: Record<string, any> = ref({})

// 在组件挂载后，获取子组件的表单验证规则
onMounted(() => {
  if (forgetPwd.value) {
    rules.value = forgetPwd.value.rules
  }
})

// 打开忘记密码弹窗
const openForget = () => {
  if (forgetPwd.value) {
    forgetPwd.value.open()
  } else {
    console.log('gg')
  }
}
//
const goRegister = () => {
  activeName.value = 'register'
}
// 登录
const login = async (): Promise<void> => {
  const { account, password } = loginData
  if (loginForm.value) {
    loginForm.value.validate(async (valid: boolean) => {
      if (valid) {
        try {
          const res = await loginAPI({ account, password })
          if (res.status === 200) {
            ElMessage.success('登录成功')
          }
        } catch (err: any) {
          // 错误处理
        }
      }
    })
  }
}
</script>
<template>
  <div class="common-layout">
    <el-container>
      <!-- 头部 -->
      <el-header>
        <h3>通用后台管理系统</h3>
        <span class="welcome">欢迎登录</span>
      </el-header>
      <!-- 主体 -->
      <el-main>
        <div class="el-main-card">
          <!-- 标签页 -->
          <el-tabs v-model="activeName" :stretch="true">
            <!-- 登录 -->
            <el-tab-pane label="登录" name="login">
              <el-form class="login-form" :rules="rules" ref="loginForm" :model="loginData">
                <!-- 账号 -->
                <el-form-item label="账号" prop="account">
                  <el-input v-model="loginData.account" placeholder="请输入账号" />
                </el-form-item>
                <!-- 密码 -->
                <el-form-item label="密码" prop="password">
                  <el-input v-model="loginData.password" placeholder="请输入密码" />
                </el-form-item>
                <!-- 底部 -->
                <div class="form-footer">
                  <!-- 忘记密码 -->
                  <div class="form-footer-forget">
                    <span class="form-footer-forget-button" @click="openForget">忘记密码</span>
                  </div>
                  <!-- 登录按钮 -->
                  <div class="form-footer-login">
                    <el-button type="primary" @click="login">登录</el-button>
                  </div>
                  <!-- 转到注册 -->
                  <div class="form-footer-go">
                    还没有账号?
                    <span class="go-register" @click="goRegister">立即注册</span>
                  </div>
                </div>
              </el-form>
            </el-tab-pane>
            <!-- 注册 -->
            <el-tab-pane label="注册" name="register">
              <el-form class="register-form" ref="registerForm" :model="registerData" :rules>
                <!-- 账号 -->
                <el-form-item label="账号" prop="account">
                  <el-input v-model="registerData.account" placeholder="账号长度1-6位" />
                </el-form-item>
                <!-- 密码 -->
                <el-form-item label="密码" prop="password">
                  <el-input
                    v-model="registerData.password"
                    placeholder="密码长度1-6位 包括字母和数字"
                  />
                </el-form-item>
                <!-- 确认密码 -->
                <el-form-item label="确认密码" prop="repassword">
                  <el-input v-model="registerData.repassword" placeholder="请再次输入密码" />
                </el-form-item>
                <!-- 注册按钮 -->
                <div class="footer-button">
                  <el-button type="primary">注册</el-button>
                </div>
              </el-form>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-main>
      <!-- 底部 -->
      <el-footer>
        <div class="title">
          <span>博客页面</span> | <span>博客页面</span> | <span>博客页面</span> |
          <span>博客页面</span>
        </div>
      </el-footer>
    </el-container>
    <!-- 组件 -->
    <Forget ref="forgetPwd" />
  </div>
</template>
<style lang="scss" scoped>
$primary-color: #409eff;
$primary-font-size: 16px;
$secondary-font-size: 12px;
.el-container {
  background-image: url('../../assets/1.png');
  background-size: cover;
  background-position: center;
}
.el-header {
  display: flex;
  height: 7vh;
  align-items: center;
  justify-content: space-between;
}
.el-main {
  height: 79vh;
  position: relative;
  .el-main-card {
    right: 8%;
    top: 8%;
    width: 350px;
    height: 375px;
    position: absolute;
    .el-tabs {
      background-color: white;
      height: 100%;
      width: 100%;

      .login-form {
        margin: 30px 20px 20px 20px;
        .el-form-item {
          margin: 30px 0;
        }
        .form-footer {
          margin-top: 30px;
          height: 150px;
          display: flex;
          flex-direction: column;
          .form-footer-forget {
            .form-footer-forget-button {
              color: $primary-color;
              font-size: $secondary-font-size;
              cursor: pointer;
              float: right;
            }
          }
          .form-footer-login {
            margin: 10px 0;
            .el-button {
              width: 310px;
              height: 45px;
              margin: auto;
              font-size: $primary-font-size;
            }
          }
          .form-footer-go {
            color: $primary-color;
            font-size: $secondary-font-size;
            cursor: pointer;
          }
        }
      }
      .register-form {
        margin: 30px 20px 20px 20px;
        .el-button {
          width: 310px;
          height: 45px;
          font-size: $primary-font-size;
        }
      }
    }
  }
}
.el-footer {
  height: 14vh;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      margin: 5px;
    }
  }
}
:deep(.el-tabs__item) {
  height: 52px;
  line-height: 50px;
}
</style>
