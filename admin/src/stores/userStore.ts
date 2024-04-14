// 从 'pinia' 和 'vue' 导入必要的模块
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Ref } from 'vue'

// 定义用户接口
interface User {
  id: number
  account: string
  identity: string
  department: string | null
  name: string | null
  email: string
  avatar: string | null
  create_time: string
  sex: string | null
  status: number
  update_time: string | null
}
// 定义用户存储
export const useUserStore = defineStore({
  // 存储的id
  id: 'user',
  // 存储的状态和方法
  state: () => {
    // 用户信息，初始值为null
    const userInfo: Ref<User> = ref({
      id: 0,
      account: '',
      identity: '',
      department: null,
      name: null,
      email: '',
      avatar: null,
      create_time: '',
      sex: null,
      status: 0,
      update_time: null
    })
    // 设置用户信息的方法
    const setUserInfo = (user: User) => {
      userInfo.value = user
    }

    // 清除用户信息的方法
    const clearUserInfo = () => {
      userInfo.value = {
        id: 0,
        account: '',
        identity: '',
        department: null,
        name: null,
        email: '',
        avatar: null,
        create_time: '',
        sex: null,
        status: 0,
        update_time: null
      } // 清空用户信息
      localStorage.removeItem('user') // 清除本地存储中的用户信息
      localStorage.removeItem('token') // 清除本地存储中的token
    }

    // 返回状态和方法
    return { userInfo, setUserInfo, clearUserInfo }
  },
  // 持久化用户信息
  persist: {
    paths: ['userInfo']
  }
})
