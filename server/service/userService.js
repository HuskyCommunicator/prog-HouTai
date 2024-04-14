// 引入用户模型
const userModel = require("../model/userModel.js");

//登录页-注册
const userService = {
  //查找用户
  getUser: async ({ account, id }) => {
    try {
      return await userModel.findUserByAccount(account);
    } catch (err) {
      console.error("Error in findOne:", err);
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
module.exports = userService;
