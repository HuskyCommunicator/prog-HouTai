import instance from '@/utils/request'

//登录接口
export const loginAPI = ({ account, password }: { account: string; password: string }) => {
  return instance({
    url: '/user/login',
    method: 'post',
    data: {
      account,
      password
    }
  }).catch((error) => {
    return Promise.reject(error)
  })
}
//忘记密码接口
export const forgetPwdAPI = ({
  account,
  email,
  password
}: {
  account: string
  email: string
  password: string
}) => {
  return instance({
    url: '/user/forgetPwd',
    method: 'post',
    data: {
      account,
      email,
      password
    }
  }).catch((error) => {
    return Promise.reject(error)
  })
}
