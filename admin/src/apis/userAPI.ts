import instance from '@/utils/request'

//获取用户信息接口
export const getUserInfoAPI = (account: any) => {
  return instance({
    url: `/user/getUserInfo/${account}`,
    method: 'get'
  }).catch((error) => {
    return Promise.reject(error)
  })
}
