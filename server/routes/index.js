var express = require("express");
var router = express.Router();
var authRouter = require("./authRouter.js");

router.use(authRouter);
module.exports = router;
