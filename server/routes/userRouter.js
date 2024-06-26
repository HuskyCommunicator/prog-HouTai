// 引入express模块
var express = require("express");

// 创建一个新的路由器
var userRouter = express.Router();

// 引入authController模块，这个模块包含了处理用户注册和登录的函数
var userController = require("../controller/userController.js");

// 引入valid中间件，这个中间件用于验证请求体的数据
const valid = require("../middleware/validate");
//文件上传
const multer = require("multer");
const upload = multer({ dest: "public/avatar/" });
//获取用户信息
userRouter.get("/user/getUserInfo/:account", userController.getUserInfo);

//更新用户信息
userRouter.put(
  "/user/updateUserInfo",
  valid,
  upload.single("file"),
  userController.updateUserInfo
);

module.exports = userRouter;
