var express = require("express");
var router = express.Router();
var authRouter = require("./authRouter.js");
var userRouter = require("./userRouter.js");
var companyRouter = require("./companyRouter.js");
router.use(authRouter);
router.use(companyRouter);
router.use(userRouter);
module.exports = router;
