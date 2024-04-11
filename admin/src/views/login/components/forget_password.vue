<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { forgetPwdAPI } from '@/apis/authAPI.js'
import { ElMessage } from 'element-plus'

// 表单对齐方式
const labelPosition = ref('top')

// 表单对象引用
const forgetFormRef = ref()
const newPwdFormRef = ref()
// 定义表单数据的接口
interface formData {
  account: string
  email: string
  password: string
  repassword: string
}

// 初始化表单数据
const forgetData: formData = reactive({
  account: '11',
  email: '11@qq.com',
  password: '11',
  repassword: '11'
})

// 控制弹窗的状态
const state = reactive({
  forgetPwdDialog: false,
  changePwdDialog: false
})

// 打开忘记密码弹窗
const open = () => {
  state.forgetPwdDialog = true
}

// 打开修改密码弹窗
const changePwd = () => {
  state.forgetPwdDialog = false
  state.changePwdDialog = true
}

// 取消修改密码，返回忘记密码弹窗
const changeCancel = () => {
  state.changePwdDialog = false
  state.forgetPwdDialog = true
}

// 验证两次输入的密码是否一致
const pwdValid = () => {
  if (forgetData.password !== forgetData.repassword) {
    ElMessage.error('两次输入的密码不一致，请重新输入')
    return false
  }
  return true
}

// 提交表单
const commit = async () => {
  // 如果密码验证失败，直接返回
  if (!pwdValid()) {
    return
  }
  // 关闭弹窗
  state.forgetPwdDialog = false
  state.changePwdDialog = false
  // 调用API修改密码
  const res = await forgetPwdAPI({
    account: forgetData.account,
    email: forgetData.email,
    password: forgetData.password
  })
  // 如果修改成功，显示成功消息
  if (res.status === 200) {
    ElMessage.success(res.data.msg)
  }
}

// 表单验证规则
const rules = reactive({
  account: [
    { required: true, message: '请输入您的注册账号', trigger: 'blur' }, // 必填
    { min: 1, max: 6, message: '账号长度在1到6个字符', trigger: 'blur' } // 长度限制
  ],
  email: [
    { required: true, message: '请输入您的个人邮箱', trigger: 'blur' }, // 必填
    { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' } // 邮箱格式
  ],
  password: [
    { required: true, message: '请输入您的新密码', trigger: 'blur' } // 必填
  ],
  repassword: [
    { required: true, message: '请再次输入您的新密码', trigger: 'blur' }, // 必填
    { validator: pwdValid, trigger: 'blur' } // 自定义验证规则
  ]
})

// 向父组件暴露方法
defineExpose({ open, rules })
</script>

<template>
  <!-- 忘记密码 -->
  <el-dialog v-model="state.forgetPwdDialog" title="忘记密码" width="400px">
    <el-form :label-position="labelPosition" :rules="rules" ref="forgetFormRef" :model="forgetData">
      <!-- 账号 -->
      <el-form-item label="输入您的注册账号" prop="account">
        <el-input v-model="forgetData.account" />
      </el-form-item>
      <!-- 邮箱 -->
      <el-form-item label="输入您的个人邮箱" prop="email">
        <el-input v-model="forgetData.email" />
      </el-form-item>
    </el-form>
    <!-- 底部内容 -->
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="state.forgetPwdDialog = false">取消</el-button>
        <el-button type="primary" @click="changePwd">下一步 </el-button>
      </div>
    </template>
  </el-dialog>
  <!-- 修改密码 -->
  <el-dialog v-model="state.changePwdDialog" title="修改密码" width="400px">
    <el-form :label-position="labelPosition" :rules="rules" ref="newPwdFormRef" :model="forgetData">
      <!-- 账号 -->
      <el-form-item label="输入您的新密码" prop="password">
        <el-input v-model="forgetData.password" />
      </el-form-item>
      <!-- 邮箱 -->
      <el-form-item label="再次确认新密码" prop="repassword">
        <el-input v-model="forgetData.repassword" />
      </el-form-item>
    </el-form>
    <!-- 底部内容 -->
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="changeCancel">取消</el-button>
        <el-button type="primary" @click="commit">确定</el-button>
      </div>
    </template>
  </el-dialog>
</template>
<style lang="scss" scoped>
.el-dialog {
  max-height: 90vh;
}
</style>
