import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'counter',
  () => {
    const userInfo = ref({})
    const clearUserInfo = () => {
      userInfo.value = {} // 清空用户信息
    }

    return { userInfo, clearUserInfo }
  },
  {
    persist: { paths: ['userInfo'] } // 持久化用户信息
  }
)
