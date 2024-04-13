<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import type { Ref } from 'vue'
import Upload from '@/components/upload.vue'
import { getUserInfoAPI } from '@/apis/userAPI'
const userFormRef: Ref<any> = ref(null)
const dialogVisible = ref(false)
const userInfo = ref()
interface UserForm {
  avatar: string
  account: string
  oldPassword: string
  newPassword: string
  name: string
  sex: number
  role: string
  department: string
  email: string
  file: File | null
}
const userForm: UserForm = reactive<UserForm>({
  avatar: '',
  account: '',
  oldPassword: '',
  newPassword: '',
  name: '',
  sex: 1,
  role: '',
  department: '',
  email: '',
  file: null
})
interface RuleItem {
  required?: boolean
  message: string
  trigger: string
  min?: number
  max?: number
  type?: string
}

interface UserFormRules {
  password: RuleItem[]

  email: RuleItem[]
}

const userFormRules: UserFormRules = {
  password: [{ min: 1, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }],
  email: [{ type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }]
}

interface SexOption {
  label: string
  value: number
}

const sexOptions: SexOption[] = [
  { label: '男', value: 1 },
  { label: '女', value: 0 }
]
const getUserInfo = async () => {
  const res = await getUserInfoAPI()
  userInfo.value = res.data
}
onMounted(() => getUserInfo())
// 当文件被选择后，更新 userForm 的 avatar 和 file 属性
const handleChange = (file: File) => {
  userForm.avatar = URL.createObjectURL(file)
  userForm.file = file
}
// 表单提交
const submitForm = () => {
  console.log(userForm)
  userFormRef.value.validate((valid: boolean) => {
    if (valid) {
    }
  })
}
</script>

<template>
  <div class="wrapper">
    <el-form
      ref="userFormRef"
      :model="userForm"
      :rules="userFormRules"
      label-width="120px"
      class="demo-ruleForm"
      status-icon
    >
      <!-- 头像上传 -->
      <el-form-item label="用户头像" prop="avatar">
        <Upload :avatar="userForm.avatar" @avatarChange="handleChange" />
      </el-form-item>
      <!-- 账号 -->
      <el-form-item label="用户账号" prop="account">
        <el-input v-model="userForm.account" disabled />
      </el-form-item>
      <!-- 密码 -->
      <el-form-item label="用户密码" prop="password">
        <el-button type="primary" @click="dialogVisible = true">修改密码</el-button>
      </el-form-item>
      <!-- 姓名 -->
      <el-form-item label="用户姓名" prop="name">
        <el-input v-model="userForm.name" />
      </el-form-item>
      <!-- 性别 -->
      <el-form-item label="用户性别" prop="sex">
        <el-select v-model="userForm.sex" class="m-2" placeholder="Select" style="width: 100%">
          <el-option
            v-for="item in sexOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <!-- 身份 -->
      <el-form-item label="用户身份" prop="role">
        <el-input v-model="userForm.role" disabled />
      </el-form-item>
      <!-- 部门 -->
      <el-form-item label="用户部门" prop="department">
        <el-input v-model="userForm.department" disabled />
      </el-form-item>
      <!-- 邮箱 -->
      <el-form-item label="用户邮箱" prop="email">
        <el-input v-model="userForm.email" />
      </el-form-item>
      <!-- 提交 -->
      <el-form-item>
        <el-button type="primary" @click="submitForm()">提交</el-button>
      </el-form-item>
      <!-- 弹窗组件 -->
      <el-dialog v-model="dialogVisible" title="Tips" width="500">
        <span>
          <el-form-item label="新密码" prop="newPassword">
            <el-input v-model="userForm.newPassword" placeholder="请输入新密码" />
          </el-form-item>
          <el-form-item label="旧密码" prop="oldPassword">
            <el-input v-model="userForm.oldPassword" placeholder="请输入旧密码" />
          </el-form-item>
        </span>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确定</el-button>
          </div>
        </template>
      </el-dialog>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  margin-left: 40px;
  width: 50%;
}
:deep(.avatar-uploader .el-upload) {
  border: 2px dashed rgb(158, 158, 158);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

:deep(.avatar-uploader .el-upload:hover) {
  border-color: var(--el-color-primary);
}

:deep(.el-icon.avatar-uploader-icon) {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
:deep(.avatar) {
  width: 178px;
  height: 178px;
}
</style>
