var express = require("express");
var router = express.Router();
var authRouter = require("./authRouter.js");
var userRouter = require("./userRouter.js");
router.use(authRouter);
router.use(userRouter);
module.exports = router;
