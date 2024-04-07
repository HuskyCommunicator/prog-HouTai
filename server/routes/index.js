var express = require("express");
var router = express.Router();
var authRouter = require("./authRouter.js");

// /* GET home page. */
// router.get("/", function (req, res, next) {
//   res.send("helloworld");
// });
router.use(authRouter);
module.exports = router;
