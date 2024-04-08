// 引入 authService，用于处理与用户认证相关的业务逻辑
var authService = require("../service/authService.js");

// 引入bcrypt库，用于对用户密码进行加密处理
const bcrypt = require("bcrypt");

// 引入sendRes模块，用于发送HTTP响应
const sendRes = require("../utils/sendRes.js");

//引入jwt模块，用于生成token
const JWT = require("../utils/jwt.js");

// 定义authController对象，用于处理与用户认证相关的HTTP请求
const authController = {
  // 处理用户注册请求
  reg: async (req, res) => {
    // 从请求体中获取账号和密码
    const { account, password } = req.body;

    // 检查账号和密码是否存在
    if (!account || !password) {
      return sendRes(res, 400, "账号名或密码不能为空");
    }

    // 查询数据库，检查账号是否已存在
    const user = await authService.findOne({ account });
    if (user) {
      return sendRes(res, 400, "账号已存在");
    }

    // 对密码进行加密
    const encryptedPassword = bcrypt.hashSync(password, 10);

    // 补充其他属性
    const identity = "用户";
    const create_time = new Date();
    const status = 0;

    // 插入新用户到数据库
    const result = await authService.create({
      account,
      password: encryptedPassword,
      identity,
      create_time,
      status,
    });

    // 检查是否插入成功
    if (!result) {
      // 如果插入失败，返回400状态码和错误信息
      return sendRes(400, "注册失败");
    }

    // 将结果发送回客户端
    return sendRes(res, 200, "注册成功");
  },

  // 处理用户登录请求
  login: async (req, res) => {
    // 从请求体中获取账号和密码
    const { account, password } = req.body;

    // 查询数据库，检查账号是否存在
    const user = await authService.findOne({ account });
    if (!user) {
      return sendRes(res, 400, "账号不存在");
    }

    //比较密码
    const pwd = await bcrypt.compare(password, user.password);
    if (!pwd) {
      return sendRes(res, 400, "账号与密码不匹配");
    }

    //判定账号是否冻结
    if (user.status === 1) {
      return sendRes(res, 400, "账号已被冻结");
    }

    //生成token
    const token = JWT.generate(
      { id: user.id, account: user.account, password: user.password },
      "1d"
    );

    // 将token附带在header中
    res.header("Authorization", "Bearer " + token);

    // 发送成功的响应到客户端
    return sendRes(res, 200, "登录成功");
  },
};

module.exports = authController;
