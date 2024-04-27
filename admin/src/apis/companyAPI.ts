import instance from '@/utils/request'

//获取公司信息接口
export const getCompanyInfoAPI = () => {
  return instance({
    url: `/company/getInfo`,
    method: 'get'
  }).catch((error) => {
    // return Promise.reject(error)
  })
}
//更新攻击信息接口
export const updateCompanyInfoAPI = (companyForm: any) => {
  return instance({
    url: `/company/updateInfo`,
    method: 'put',
    data: companyForm
  }).catch((error) => {
    // return Promise.reject(error)
  })
}
