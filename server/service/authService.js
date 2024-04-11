// 引入用户模型
const userModel = require("../model/userModel.js");

//添加用户
const authService = {
  //创建用户
  create: async ({
    account,
    password,
    identity,
    create_time,
    status,
    email,
  }) => {
    if (email) {
      return await userModel.insertUser({
        account,
        password,
        identity,
        create_time,
        status,
        email,
      });
    } else {
      return await userModel.insertUser({
        account,
        password,
        identity,
        create_time,
        status,
      });
    }
  },

  //查找用户
  findOne: async ({ account }) => {
    return userModel.findUserByAccount(account);
  },

  //更新用户
  update: async ({ account, password }) => {
    return await userModel.updateUser({
      account,
      password,
    });
  },
};

// 导出 authService，使其可以在其他文件中被引用
module.exports = authService;
