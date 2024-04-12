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
    try {
      return await userModel.insertUser({
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
  findOne: async ({ account, id }) => {
    try {
      return await userModel.findUserByAccount(account);
    } catch (err) {
      console.error("Error in findOne:", err);
    }
  },

  //更新用户密码
  updatePwd: async ({ account, password }) => {
    try {
      return await userModel.updateUser({
        account,
        password,
      });
    } catch (err) {
      console.error("Error in updatePwd:", err);
    }
  },
  //更新用户信息
  update: async ({ account, email, password, name, sex, avatar }) => {
    try {
      return await userModel.updateUserInfo({
        account,
        email,
        password,
        name,
        sex,
        avatar,
      });
    } catch (err) {
      console.error("Error in update:", err);
    }
  },
};

// 导出 authService，使其可以在其他文件中被引用
module.exports = authService;
