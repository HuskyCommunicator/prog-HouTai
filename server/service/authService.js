// 引入用户模型
const userModel = require("../model/userModel.js");

//添加用户
const authService = {
  create: async ({ account, password, identity, create_time, status }) => {
    return await userModel.insertUser({
      account,
      password,
      identity,
      create_time,
      status,
    });
  },

  //查找用户
  findOne: async ({ account }) => {
    return userModel.findUserByAccount(account);
  },
};

// 导出 authService，使其可以在其他文件中被引用
module.exports = authService;
