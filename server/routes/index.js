var express = require("express");
var router = express.Router();
var authRouter = require("./authRouter.js");
var userRouter = require("./userRouter.js");
var companyRouter = require("./companyRouter.js");
const { tokenVerify } = require("../utils/jwt");

router.use(authRouter);
router.use(tokenVerify);
router.use(companyRouter);
router.use(userRouter);
module.exports = router;
