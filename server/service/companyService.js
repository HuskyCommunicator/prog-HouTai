// 引入用户模型
const companyModel = require("../model/companyModel.js");
// 定义 companyService
const companyService = {
  //获取公司信息
  getInfo: async (id) => {
    return await companyModel.getInfo(id);
  },
  //添加公司信息
  addInfo: async ({ id, introduce, structure, strategy, leader, banner }) => {
    return await companyModel.addInfo({
      id,
      introduce,
      structure,
      strategy,
      leader,
      banner,
    });
  },
};

// 导出 authService，使其可以在其他文件中被引用
module.exports = companyService;
