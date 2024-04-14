// 引入 authService，用于处理与用户认证相关的业务逻辑
var userService = require("../service/userService.js");

// 引入bcrypt库，用于对用户密码进行加密处理
const bcrypt = require("bcrypt");

// 引入sendRes模块，用于发送HTTP响应
const sendRes = require("../utils/sendRes.js");

//引入jwt模块，用于生成token
const JWT = require("../utils/jwt.js");

// 定义authController对象，用于处理与用户认证相关的HTTP请求
const userController = {
  //获取用户信息
  getUserInfo: async (req, res) => {
    const { account } = req.body;
    const user = userService.getUser({ account });
    return sendRes(res, 200, "获取成功", user);
  },
  //更新用户信息
  update: async (req, res) => {
    // 如果请求中包含文件，则设置 avatar 为文件的路径，否则设置为空字符串
    const avatar = req.file ? `/avatar/${req.file.filename}` : "";

    const { email, oldPassword, newPassword, name, sex, account } = req.body;

    // 查询数据库，检查账号是否存在
    const user = await userService.findOne({ account });

    if (!user) {
      return sendRes(res, 400, "用户不存在");
    }

    // 如果请求中包含新密码和旧密码，则进行密码验证
    let password = user.password;
    if (newPassword && oldPassword) {
      //比较密码
      const pwd = await bcrypt.compare(oldPassword, user.password);
      if (!pwd) {
        return sendRes(res, 400, "旧密码不匹配");
      }
      password = bcrypt.hashSync(newPassword, 10);
    }

    //更新用户信息
    const result = await userService.update({
      account,
      email,
      password,
      name,
      sex: sex === "男" ? "1" : "0",
      avatar,
    });

    // 发送成功的响应到客户端
    return sendRes(res, 200, "更新成功", result);
  },
};

module.exports = userController;
