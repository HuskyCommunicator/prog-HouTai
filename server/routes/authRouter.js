// 引入express模块
var express = require("express");

// 创建一个新的路由器
var authRouter = express.Router();

// 引入authController模块，这个模块包含了处理用户注册和登录的函数
var authController = require("../controller/authController.js");

// 引入valid中间件，这个中间件用于验证请求体的数据
var valid = require("../middleware/validate.js");

// 当收到一个指向/user/reg的POST请求时，首先调用valid中间件进行数据验证，然后调用authController.reg处理请求
authRouter.post("/user/reg", valid, authController.reg);

// 当收到一个指向/user/login的POST请求时，直接调用authController.login处理请求
authRouter.post("/user/login", valid, authController.login);

authRouter.post("/user/forgetPwd", authController.forgetPwd);
// 导出路由器，这样其他模块可以使用这个路由器
module.exports = authRouter;
