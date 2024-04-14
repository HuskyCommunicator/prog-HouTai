// 引入用户模型
const authModel = require("../model/authModel.js");

//登录页-注册
const authService = {
  createUser: async ({
    account,
    password,
    identity,
    create_time,
    status,
    email,
  }) => {
    try {
      return await authModel.insertUser({
        account,
        password,
        identity,
        create_time,
        status,
        email,
      });
    } catch (err) {
      console.error("Error in create:", err);
    }
  },

  //查找用户
  findUser: async ({ account }) => {
    try {
      return await authModel.findUser(account);
    } catch (err) {
      console.error("Error in findOne:", err);
    }
  },

  //更新用户密码
  updatePwd: async ({ account, password }) => {
    try {
      return await authModel.updatePwd({
        account,
        password,
      });
    } catch (err) {
      console.error("Error in updatePwd:", err);
    }
  },
};

// 导出 authService，使其可以在其他文件中被引用
module.exports = authService;
