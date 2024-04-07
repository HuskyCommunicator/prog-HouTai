//导入数据库
const mysql = require("mysql2");
//创建数据库实例
const db = mysql.createPool({
  host: "localhost",
  user: "back_system",
  password: "123456",
  database: "back_system",
});
//导出数据库
module.exports = db;
