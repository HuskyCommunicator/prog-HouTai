const Joi = require("joi");

Joi.objectId = require("joi-objectid")(Joi);

const sendRes = require("../utils/sendRes.js");

// 验证数据中间件
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
    sendRes(res, 500, "数据验证失败 请检查输入的数据");
  }
};

// 定义数据验证函数
const validate = (body) => {
  const schema = Joi.object({
    id: Joi.number().integer(),
    account: Joi.string().max(255),
    password: Joi.string().max(255),
    identity: Joi.string().max(255),
    department: Joi.string().max(255),
    name: Joi.string().max(255),
    email: Joi.string().max(255).email(),
    create_time: Joi.string().max(255),
    sex: Joi.string().valid("男", "女"),
    status: Joi.number().integer(),
    avatar: Joi.string().max(255),
  });
  return schema.validate(body);
};

module.exports = valid;
