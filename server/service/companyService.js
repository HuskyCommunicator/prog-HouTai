// 引入用户模型
const companyModel = require("../model/companyModel.js");
// 定义 companyService
const companyService = {
  getInfo: async (id) => {
    return await companyModel.getInfo(id);
  },
};

// 导出 authService，使其可以在其他文件中被引用
module.exports = companyService;
