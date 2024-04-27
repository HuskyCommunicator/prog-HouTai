// 导入axios和element-plus的消息组件
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/userStore'

// 创建axios实例，并设置基础URL和超时时间
const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000
})

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前，从localStorage中获取token，并添加到请求头中
    if (!localStorage.getItem('token')) {
    }
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`

    return config
  },
  function (error) {
    // 如果请求出错，返回Promise的reject状态
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 如果响应头中包含authorization，将其保存到localStorage中
    const { authorization } = response.headers
    authorization && localStorage.setItem('token', authorization)
    return response
  },
  function (error) {
    // 如果响应出错，显示错误消息，并返回Promise的reject状态
    if (error.response) {
      const userStore = useUserStore()
      if (error.response.status === 401) {
        window.location.href = '/login'
        userStore.clearUserInfo()
      }
    }
    ElMessage.error(error.response.data.msg)

    return Promise.reject(error)
  }
)

// 导出axios实例
export default instance
