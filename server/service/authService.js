// 引入数据库模块
const db = require("../db/index.js");
// 引入bcrypt模块，用于密码加密
const bcrypt = require("bcrypt");
// 引入用户模型
const userModel = require("../model/userModel.js");
const sendRes = require("../utils/sendRes.js");
const authService = {
  // 注册方法
  register: async (account, password) => {
    // 检查账号和密码是否存在
    if (!account || !password) {
      return sendRes(400, "账号名或密码不能为空");
    }

    // 查询数据库，检查账号是否已存在
    const user = await userModel.findUserByAccount(account);
    if (user) {
      return sendRes(400, "账号已存在");
    }

    // 对密码进行加密
    password = bcrypt.hashSync(password, 10);
    const identity = "用户";
    const create_time = new Date();
    const status = 0;

    // 插入新用户到数据库
    const newUser = await userModel.insertUser({
      account,
      password,
      identity,
      create_time,
      status,
    });

    // 检查是否插入成功
    if (newUser) {
      return sendRes(200, "注册成功");
    } else {
      return sendRes(400, "注册失败");
    }
  },
  // 登录方法
  login: async () => {
    // 这里应该包含登录逻辑，目前返回1
    return 1;
  },
};

// 导出 authService，使其可以在其他文件中被引用
module.exports = authService;
