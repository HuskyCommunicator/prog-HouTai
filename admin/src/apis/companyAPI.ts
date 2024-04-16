import instance from '@/utils/request'

//登录接口
export const getCompanyInfoAPI = ({ id }: { id: number }) => {
  return instance({
    url: `/company/getInfo/${id}`,
    method: 'get'
  }).catch((error) => {
    return Promise.reject(error)
  })
}
