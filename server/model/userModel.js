// 引入数据库模块
const db = require("../db/index.js");

const UserModel = {
  // 根据账号查找用户--获取用户
  findUserByAccount: (account) => {
    return new Promise((resolve, reject) => {
      // SQL查询语句
      const querySql = "select * from users where account = ?";
      // 执行查询
      db.query(querySql, account, (err, results) => {
        // 如果有错误，拒绝Promise
        if (err) {
          console.error(err);
          reject(err);
        }
        // 否则，解析Promise并返回结果
        else {
          console.log("success", results);
          resolve(results[0]);
        }
      });
    }).catch((err) => {
      console.error("Error in findUserByAccount:", err);
      // 在这里处理错误，而不是在外部
    });
  },
  // 插入新用户--添加用户
  insertUser: (user) => {
    return new Promise((resolve, reject) => {
      // SQL插入语句
      const insertSql = "insert into users set ?";
      // 执行插入
      db.query(insertSql, user, (err, results) => {
        // 如果有错误，拒绝Promise
        if (err) {
          console.error(err);
          reject(err);
        }
        // 否则，解析Promise并返回插入的ID
        else resolve(results.insertId);
      });
    }).catch((err) => {
      console.error("Error in insertUser:", err);
    });
  },

  // 更新用户信息--修改用户
  updateUser: ({ account, password }) => {
    return new Promise((resolve, reject) => {
      //sql语句
      const updateSql = "update users set password = ? where account = ?";
      // 执行更新
      db.query(updateSql, [password, account], (err, results) => {
        // 如果有错误，拒绝Promise
        if (err) {
          console.error(err);
          reject(err);
        }
        // 否则，解析Promise并返回结果
        else resolve(results[0]);
      });
    }).catch((err) => {
      console.error("Error in findUserByAccount:", err);
    });
  },
};

// 导出UserModel，使其可以在其他文件中被引用
module.exports = UserModel;
