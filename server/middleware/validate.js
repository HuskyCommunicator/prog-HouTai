const Joi = require("joi");

Joi.objectId = require("joi-objectid")(Joi);

const sendRes = require("../utils/sendRes.js");

//定义总处理函数
const valid = async (req, res, next) => {
  try {
    //进行数据验证
    const { error, value } = validate(req.body);
    //如果验证失败，则返回错误信息
    if (error) {
      return sendRes(res, 400, error.details[0].message);
    }
    //如果验证成功，则将验证后的数据存入req.validValue中
    req.validValue = value;
    next();
  } catch (err) {
    //如果出现错误，则返回服务器错误信息
    sendRes(res, 500, "服务器错误");
  }
};

// 定义数据验证函数
const validate = (body) => {
  const schema = Joi.object({
    account: Joi.string()
      .required()
      .max(6)
      .messages({ "any.required": "缺少必选的参数username" }),
    password: Joi.string()
      .min(1)
      .required()
      .messages({ "any.required": "缺少必选的参数username" }),
  });
  return schema.validate(body);
};

module.exports = valid;
