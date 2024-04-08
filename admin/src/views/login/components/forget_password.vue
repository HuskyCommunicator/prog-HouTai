<script lang="ts" setup>
import { ref, reactive } from 'vue'
//表单对齐方式
const labelPosition = ref('top')
// 表单对象接口
interface formData {
  account: string
  email: string
  password?: string
  repassword?: string
}
// 表单对象
const forgetData: formData = reactive({
  account: '11',
  email: '11',
  password: '11',
  repassword: '11'
})
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
    { required: true, message: '请再次输入您的新密码', trigger: 'blur' } // 必填
  ]
})
// 控制弹窗
const state = reactive({
  forgetPwdDialog: false,
  changePwdDialog: false
})
//打开弹窗
const open = () => {
  state.forgetPwdDialog = true
}
//打开修改密码弹窗
const changePwd = () => {
  state.forgetPwdDialog = false
  state.changePwdDialog = true
}
//修改密码的取消按钮
const changeCancel = () => {
  state.changePwdDialog = false
  state.forgetPwdDialog = true
}
// 提交表单
const commit = () => {
  ;(state.forgetPwdDialog = false), (state.changePwdDialog = false)
}
// 向父组件暴露方法
defineExpose({ open })
</script>
<template>
  <!-- 忘记密码 -->
  <el-dialog v-model="state.forgetPwdDialog" title="忘记密码" width="400px">
    <el-form :label-position="labelPosition" :rules="rules">
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
    <el-form :label-position="labelPosition" :rules="rules">
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
<style lang="scss" scoped></style>
