var express = require("express");
var authRouter = express.Router();
var authController = require("../controller/authController.js");
authRouter.post("/user/reg", authController.reg);
authRouter.post("/user/login", authController.login);
module.exports = authRouter;
