// 引入 authService，用于处理与用户认证相关的业务逻辑
var companyService = require("../service/companyService.js");

// 引入sendRes模块，用于发送HTTP响应
const sendRes = require("../utils/sendRes.js");

//引入jwt模块，用于生成token
const JWT = require("../utils/jwt.js");

// 定义authController对象，用于处理与用户认证相关的HTTP请求
const companyController = {
  //获取公司信息
  getInfo: async (req, res) => {
    const result = await companyService.getInfo();
    return sendRes(res, 200, "获取公司信息成功", result);
  },
  //添加公司信息
  addInfo: async (req, res) => {
    const { id, introduce, structure, strategy, leader, banner } = req.body;
    const result = { id, introduce, structure, strategy, leader, banner };
    await companyService.addInfo({
      id,
      introduce,
      structure,
      strategy,
      leader,
      banner,
    });
    return sendRes(res, 200, "添加公司信息成功", result);
  },
  //更新公司信息
  updateInfo: async (req, res) => {
    const { name, introduce, structure, strategy, leader, banner } = req.body;
    await companyService.updateInfo({
      name,
      introduce,
      structure,
      strategy,
      leader,
      banner,
    });
    return sendRes(res, 200, "更新公司信息成功");
  },
};

module.exports = companyController;
