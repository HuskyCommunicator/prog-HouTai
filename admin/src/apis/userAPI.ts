import instance from '@/utils/request'

//获取用户信息接口
export const getUserInfoAPI = ({ account }: { account: String }) => {
  return instance({
    url: '/user/getUserInfo',
    method: 'get',
    data: {
      account
    }
  }).catch((error) => {
    return Promise.reject(error)
  })
}
