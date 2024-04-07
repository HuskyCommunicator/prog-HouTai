// 引入 authService
var authService = require("../service/authService.js");
// 引入数据库配置
const db = require("../db/index");
// 引入bcrypt库，用于密码加密
const bcrypt = require("bcrypt");

const authController = {
  // 注册方法
  reg: async (req, res) => {
    // 从请求体中获取账号和密码
    const { account, password } = req.body;
    // 调用authService的注册方法，并等待结果
    const result = await authService.register(account, password);
    // 将结果发送回客户端
    return res.send(result);
  },
  // 登录方法
  login: async (req, res) => {
    // 调用authService的登录方法
    await authService.login();
    // 发送成功的响应到客户端
    return res.send({
      status: 200,
      msg: "登录成功",
    });
  },
};

// 导出 authController，使其可以在其他文件中被引用
module.exports = authController;
