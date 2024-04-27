import instance from '@/utils/request'

//获取用户信息接口
export const getUserInfoAPI = (account: any) => {
  return instance({
    url: `/user/getUserInfo/${account}`,
    method: 'get'
  }).catch((error) => {
    //  return Promise.reject(error)
    console.log('gg')
  })
}
//更新用户信息接口
export const updateUserInfoAPI = (userForm: any) => {
  const params = new FormData()
  for (let i in userForm) {
    params.append(i, userForm[i])
  }
  return instance({
    url: '/user/updateUserInfo',
    method: 'put',
    data: params
  }).catch((error) => {
    return Promise.reject(error)
  })
}
