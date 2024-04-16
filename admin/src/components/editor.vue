<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { onBeforeUnmount, ref, shallowRef } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

// 定义属性
const props = defineProps({
  content: String
})

// 定义发射
const emit = defineEmits(['update:modelValue'])

// 编辑器实例，必须使用 shallowRef
const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref('')

// 当组件卸载时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor: any) => {
  editorRef.value = editor // 记录编辑器实例，重要！
  // 设置初始值
  valueHtml.value = props.content ? props.content : '<p>hello</p>'
}

const handleChange = () => {
  emit('update:modelValue', valueHtml.value)
}
</script>

<template>
  <div style="border: 1px solid #ccc">
    <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" />
    <Editor
      style="height: 500px; min-height: 310px; overflow-y: hidden"
      v-model="valueHtml"
      @onCreated="handleCreated"
      @onChange="handleChange"
    />
  </div>
</template>
<style lang="scss" scoped></style>
