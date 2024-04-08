import instance from "@/utils/request";

//登录接口
export const loginAPI = ({ account, password }: { account: string; password: string }) => {
   return instance({
    url:"/user/login",
    method:"post",
    data:{
      account,
      password
    }
   }).catch(error => {
    console.log(error);
    return Promise.reject(error);
   });
};
