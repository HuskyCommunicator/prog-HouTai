<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { getCompanyInfoAPI, updateCompanyInfoAPI } from '@/apis/companyAPI'
import { ElMessage } from 'element-plus'

// 定义公司信息的类型
type CompanyFormType = {
  content: string
  name: string
  introduce: string
  structure: string
  strategy: string
  leader: string
  [key: string]: string // 允许使用字符串索引访问对象的属性
}

// 创建响应式变量来存储公司信息
const companyForm = reactive<CompanyFormType>({
  content: '',
  name: '',
  introduce: '',
  structure: '',
  strategy: '',
  leader: ''
})

// 创建响应式变量来控制编辑器的可见性和编辑类型
const visible = ref(false)
const editingType = ref('')

// 获取公司信息的函数
const getCompanyInfo = async () => {
  const res = await getCompanyInfoAPI()
  Object.assign(companyForm, res!.data.data)
  // 在这里处理获取到的公司信息
}

// 在组件挂载后获取公司信息
onMounted(() => getCompanyInfo())

// 打开编辑器并设置当前编辑类型和内容
const openEditor = (type: string) => {
  editingType.value = type
  companyForm.content = companyForm[type]
  visible.value = true
}

// 提交编辑器内容并更新对应字段
const submitContent = () => {
  companyForm[editingType.value] = companyForm.content
  visible.value = false
}

// 关闭对话框并重置内容和编辑类型
const closeDialog = () => {
  companyForm.content = ''
  editingType.value = ''
  visible.value = false
}

// 表单验证规则
const companyFormRules = {
  name: [{ required: true, message: '请输入公司名称', trigger: 'blur' }],
  introduce: [
    { required: true, message: '请输入公司介绍', trigger: 'blur' },
    { min: 2, max: 200, message: '长度在 2 到 200 个字符', trigger: 'blur' }
  ],
  structure: [
    { required: true, message: '请输入公司结构', trigger: 'blur' },
    { min: 2, max: 200, message: '长度在 2 到 200 个字符', trigger: 'blur' }
  ],
  strategy: [
    { required: true, message: '请输入公司战略', trigger: 'blur' },
    { min: 2, max: 200, message: '长度在 2 到 200 个字符', trigger: 'blur' }
  ],
  leader: [
    { required: true, message: '请输入现任高层', trigger: 'blur' },
    { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
  ]
}

// 提交表单的函数
const submitForm = async () => {
  // 在这里处理表单提交
  const res = await updateCompanyInfoAPI(companyForm)

  getCompanyInfo()
  ElMessage.success(res!.data.msg)
}
</script>

<template>
  <el-form
    ref="companyFormRef"
    :model="companyForm"
    :rules="companyFormRules"
    label-width="120px"
    class="demo-ruleForm"
    status-icon
  >
    <el-form-item label="公司名称" prop="name">
      <el-input v-model="companyForm.name" class="name-input" />
    </el-form-item>
    <el-form-item label="公司介绍" prop="introduce">
      <el-button type="primary" round @click="openEditor('introduce')">编辑公司介绍</el-button>
    </el-form-item>
    <el-form-item label="公司架构" prop="structure">
      <el-button type="primary" round @click="openEditor('structure')">编辑公司架构</el-button>
    </el-form-item>
    <el-form-item label="公司战略" prop="strategy">
      <el-button type="primary" round @click="openEditor('strategy')">编辑公司战略</el-button>
    </el-form-item>
    <el-form-item label="现任高层" prop="leader">
      <el-button type="primary" round @click="openEditor('leader')">编辑现任高层</el-button>
    </el-form-item>
    <el-dialog v-model="visible" :title="editingType" @close="closeDialog">
      <el-input
        v-model="companyForm.content"
        :autosize="{ minRows: 4, maxRows: 8 }"
        type="textarea"
        placeholder="请输入内容"
      />
      <br />
      <el-button type="primary" @click="submitContent()"> 提交 </el-button>
    </el-dialog>
    <el-form-item>
      <el-button type="success" @click="submitForm()">更新公司信息</el-button>
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped>
:deep(.el-dialog) {
  .el-button {
    margin-top: 20px;
  }
}
.name-input {
  width: 200px;
}
:deep(.el-textarea__inner) {
  height: 500px;
}
</style>
