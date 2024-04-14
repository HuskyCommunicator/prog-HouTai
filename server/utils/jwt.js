// 定义 JWT 对象
const jsonwebtoken = require("jsonwebtoken");
const secret = "erha";
const JWT = {
  generate(value, expired) {
    return jsonwebtoken.sign(value, secret, { expiresIn: expired });
  },
  verify(token) {
    try {
      return jsonwebtoken.verify(token, secret);
    } catch (err) {
      return false;
    }
  },
};
// 定义 tokenVerify 函数
const tokenVerify = (req, res, next) => {
  // 获取 token
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    return sendResponse(res, 500, "令牌不存在 请登录");
  }
  // 验证 token 是否有效
  const validity = JWT.verify(token);
  if (!validity) {
    return sendResponse(res, 500, "令牌无效 请重新登录");
  }
  const { id, account, password } = validity;
  const newToken = JWT.generate({ id, account, password }, "1d");
  res.header("authorization", newToken);
  next();
};
module.exports = { JWT, tokenVerify };
