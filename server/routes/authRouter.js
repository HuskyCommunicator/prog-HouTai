// 引入express模块
var express = require("express");

// 创建一个新的路由器
var authRouter = express.Router();

// 引入authController模块，这个模块包含了处理用户注册和登录的函数
var authController = require("../controller/authController.js");

// 引入valid中间件，这个中间件用于验证请求体的数据
const valid = require("../middleware/validate");
//文件上传
const multer = require("multer");
const upload = multer({ dest: "public/avatar/" });

// 注册
authRouter.post("/user/reg", valid, authController.reg);

// 登录
authRouter.post("/user/login", valid, authController.login);

//忘记密码
authRouter.post("/user/forgetPwd", authController.forgetPwd);

//更新
authRouter.put(
  "/user/update",
  valid,
  upload.single("file"),
  authController.update
);

module.exports = authRouter;
