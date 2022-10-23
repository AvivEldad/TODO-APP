const express = require("express"),
  logicRoutes = require("./logic"),
  { body } = require("express-validator");

let router = express.Router();

router.post(
  "/register",
  body("username").notEmpty().isAlphanumeric("en-US", { ignore: " -:,'\"" }),
  body("password").notEmpty(),
  logicRoutes.registerUser
);


module.exports = router;