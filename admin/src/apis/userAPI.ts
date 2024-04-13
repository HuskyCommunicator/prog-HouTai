import instance from '@/utils/request'

//获取用户信息接口
export const getUserInfoAPI = () => {
  return instance({
    url: '/user/getUserInfo',
    method: 'get'
  }).catch((error) => {
    return Promise.reject(error)
  })
}
