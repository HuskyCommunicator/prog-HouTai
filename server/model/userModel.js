// 引入数据库模块
const db = require("../db/index.js");

const UserModel = {
  //获取用户
  findUserByAccount: (account) => {
    return new Promise((resolve, reject) => {
      // SQL查询语句，选择除了password以外的所有字段
      const querySql =
        "SELECT account, name, email, sex, avatar FROM users WHERE account = ?";
      // 执行查询
      db.query(querySql, account, (err, results) => {
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
      console.error("Error in findUserByAccount:", err);
      // 在这里处理错误，而不是在外部
    });
  },

  // 添加用户
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

  //更新信息
  updateUserInfo: ({ email, password, name, sex, avatar, account }) => {
    return new Promise((resolve, reject) => {
      //sql语句
      let updateSql;
      let params;

      if (avatar) {
        updateSql =
          "update users set email = ?, password = ?, name = ?, sex = ?, avatar = ? where account = ?";
        params = [email, password, name, sex, avatar, account];
      } else {
        updateSql =
          "update users set email = ?, password = ?, name = ?, sex = ? where account = ?";
        params = [email, password, name, sex, account];
      }

      // 执行更新
      db.query(updateSql, params, (err, results) => {
        // 如果有错误，拒绝Promise
        if (err) {
          console.error(err);
          reject(err);
        }
        // 否则，解析Promise并返回结果
        else resolve(results[0]);
      });
    }).catch((err) => {
      console.error("Error in updateUserInfo:", err);
    });
  },
};

// 导出UserModel，使其可以在其他文件中被引用
module.exports = UserModel;
