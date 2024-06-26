// 引入数据库模块
const db = require("../db/index.js");

const companyModel = {
  //获取公司信息
  getInfo: () => {
    return new Promise((resolve, reject) => {
      // SQL查询语句，选择所有字段
      const querySql = "SELECT * FROM company LIMIT 1";
      // 执行查询
      db.query(querySql, (err, results) => {
        // 如果有错误，拒绝Promise
        if (err) {
          console.error(err);
          reject(err);
        }
        // 否则，解析Promise并返回结果
        else {
          resolve(results[0]);
        }
      });
    }).catch((err) => {
      console.error("Error in findCompanyById:", err);
      // 在这里处理错误，而不是在外部
    });
  },
  // 添加公司信息
  addInfo: (company) => {
    return new Promise((resolve, reject) => {
      // SQL插入语句
      const insertSql = "INSERT INTO company set ?";
      // 执行插入
      db.query(insertSql, company, (err, results) => {
        // 如果有错误，拒绝Promise
        if (err) {
          console.error(err);
          reject(err);
        }
        // 否则，解析Promise并返回结果
        else {
          resolve(results);
        }
      });
    }).catch((err) => {
      console.error("Error in addCompany:", err);
      // 在这里处理错误，而不是在外部
    });
  },
  // 更新公司信息
  updateInfo: (company) => {
    return new Promise((resolve, reject) => {
      // SQL更新语句
      const updateSql = "UPDATE company set ?";
      // 执行更新
      db.query(updateSql, company, (err, results) => {
        // 如果有错误，拒绝Promise
        if (err) {
          console.error(err);
          reject(err);
        }
        // 否则，解析Promise并返回结果
        else {
          resolve(results);
        }
      });
    }).catch((err) => {
      console.error("Error in updateCompany:", err);
      // 在这里处理错误，而不是在外部
    });
  },
};

// 导出UserModel，使其可以在其他文件中被引用
module.exports = companyModel;
