// 从 'pinia' 和 'vue' 导入必要的模块
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Ref } from 'vue'

// 定义用户接口
interface User {
  account: string
  name: string | null
  email: string
  avatar: string | null
  sex: string | null
}
// 定义用户存储
export const useUserStore = defineStore({
  // 存储的id
  id: 'user',
  // 存储的状态和方法
  state: () => {
    // 用户信息，初始值为null
    const userInfo: Ref<User> = ref({
      account: '',
      name: null,
      email: '',
      avatar: null,
      sex: null
    })
    const isRouterConfig = ref(false)
    const changeRouterConfig = (value: boolean) => {
      isRouterConfig.value = value
    }
    // 设置用户信息的方法
    const setUserInfo = (user: User) => {
      if (user.avatar) {
        userInfo.value = user
      } else {
        const { avatar, ...userWithoutAvatar } = user
        userInfo.value = { ...userInfo.value, ...userWithoutAvatar }
      }
    }

    // 清除用户信息的方法
    const clearUserInfo = () => {
      userInfo.value = { account: '', name: null, email: '', avatar: null, sex: null }
      localStorage.removeItem('token') // 清除本地存储中的token
      changeRouterConfig(false)
    }

    // 返回状态和方法
    return { userInfo, setUserInfo, clearUserInfo, isRouterConfig, changeRouterConfig }
  },
  // 持久化用户信息
  persist: {
    paths: ['userInfo']
  }
})
