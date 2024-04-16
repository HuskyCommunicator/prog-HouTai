<script setup lang="ts">
import Editor from '@/components/editor.vue'
import { onMounted, reactive, ref } from 'vue'
import { getCompanyInfoAPI } from '@/apis/companyAPI'
const companyFormRef = ref()
const visible = ref(false)
const companyForm = reactive({
  content: '',
  name: '',
  introduce: '',
  structure: '',
  strategy: '',
  leader: ''
})
//editor 内容改变时的回调函数
const editorChange = (data: string) => {
  companyForm.content = data // 更新内容
}
// 获取公司信息
const id: number = 1
// 获取公司信息

const getCompanyInfo = async () => {
  const res = await getCompanyInfoAPI({ id })
  console.log(res.data)
}
onMounted(() => getCompanyInfo())
// 提交表单
const submitForm = () => {
  console.log(companyForm)
}
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
//打开编辑器
const openEditor = (type: string) => {
  // 打开编辑器
  switch (type) {
    case companyForm.introduce:
      companyForm.content = companyForm.introduce
      break
    case companyForm.structure:
      companyForm.content = companyForm.structure
      break
    case companyForm.strategy:
      companyForm.content = companyForm.strategy
      break
    case companyForm.leader:
      companyForm.content = companyForm.leader
      break
  }
  console.log(type)
  visible.value = true
}
// 提交编辑器内容
const submitContent = () => {
  // 提交编辑器内容
  console.log('submit')
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
    <!-- 名称 -->
    <el-form-item label="公司名称" prop="name">
      <el-input v-model="companyForm.leader" />
    </el-form-item>
    <!-- 公司介绍 -->
    <el-form-item label="公司介绍" prop="introduce">
      <el-button type="primary" round @click="openEditor('introduce')">编辑公司介绍</el-button>
    </el-form-item>
    <!-- 公司架构 -->
    <el-form-item label="公司架构" prop="introduce">
      <el-button type="primary" round @click="openEditor('structure')">编辑公司架构</el-button>
    </el-form-item>
    <!-- 公司战略 -->
    <el-form-item label="公司战略" prop="strategy">
      <el-button type="primary" round @click="openEditor('strategy')">编辑公司战略</el-button>
    </el-form-item>
    <!-- 现任高层 -->
    <el-form-item label="现任高层" prop="leader">
      <el-button type="primary" round @click="openEditor('leader')">编辑现任高层</el-button>
    </el-form-item>

    <!-- 内容编辑器 -->
    <el-dialog v-model="visible" title="Tips" width="800px">
      <template #footer>
        <div class="dialog-footer">
          <Editor :content="companyForm.content" @event="editorChange" />
          <el-button type="primary" @click="submitContent()"> 提交 </el-button>
        </div>
      </template>
    </el-dialog>
    <!-- <Editor @event="editorChange" :content="newsForm.content" v-if="newsForm.content" /> -->

    <!-- 提交按钮 -->
    <el-form-item>
      <el-button type="primary" @click="submitForm()">更新新闻</el-button>
    </el-form-item>
  </el-form>
</template>
<style lang="scss" scoped></style>
