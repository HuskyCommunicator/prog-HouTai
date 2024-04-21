<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { getCompanyInfoAPI } from '@/apis/companyAPI'

// 创建响应式变量
const visible = ref(false)
const editingType = ref('')
const companyForm = reactive({
  content: '',
  name: '',
  introduce: '',
  structure: '',
  strategy: '',
  leader: ''
})

// 获取公司信息
const getCompanyInfo = async () => {
  const res = await getCompanyInfoAPI({ id: 1 })
}

// 在组件挂载后获取公司信息
onMounted(() => getCompanyInfo())

// 表单验证规则
const companyFormRules = {
  name: [
    { required: true, message: '请输入公司名称', trigger: 'blur' },
    { min: 2, max: 50, message: '长度在 2 到 50 个字符', trigger: 'blur' }
  ],
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

// 打开编辑器并设置当前编辑类型和内容
const openEditor = (type: string) => {
  editingType.value = type
  companyForm.content = companyForm[type]
  visible.value = true
}

// 提交编辑器内容并更新对应字段
const submitContent = () => {
  companyForm[editingType.value] = companyForm.content
}

// 关闭对话框并重置内容和编辑类型
const closeDialog = () => {
  companyForm.content = ''
  editingType.value = ''
  visible.value = false
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
      <el-input v-model="companyForm.leader" />
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
    <el-dialog v-model="visible" title="Tips" @close="closeDialog">
      <template #footer>
        测试
        <el-form-item label="内容" prop="content">
          <el-input v-model="companyForm.content" />
        </el-form-item>
        <el-button type="primary" @click="submitContent()"> 提交 </el-button>
      </template>
    </el-dialog>
    <el-form-item>
      <el-button type="primary" @click="submitForm()">更新新闻</el-button>
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped>
// :deep(.el-dialog) {
//   width: 100%;
//   height: 850px;
// }
</style>
