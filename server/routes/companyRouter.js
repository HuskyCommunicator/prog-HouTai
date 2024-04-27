// 引入express模块
var express = require("express");

// 创建一个新的路由器
var companyRouter = express.Router();

// 引入authController模块，这个模块包含了处理用户注册和登录的函数
var companyController = require("../controller/companyController.js");

// 引入valid中间件，这个中间件用于验证请求体的数据
const valid = require("../middleware/validate");
//文件上传
const multer = require("multer");
const upload = multer({ dest: "public/avatar/" });
//获取公司信息
companyRouter.get(
  "/company/getInfo",
  // valid,
  upload.single("file"),
  companyController.getInfo
);
//添加公司信息
companyRouter.post(
  "/company/addInfo",
  upload.single("file"),
  companyController.addInfo
);
//更新公司信息
companyRouter.put(
  "/company/updateInfo",
  upload.single("file"),
  companyController.updateInfo
);
module.exports = companyRouter;
