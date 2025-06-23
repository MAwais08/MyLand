const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");
const { storeReturnTo } = require("../middleware");
const controllerUser = require("../controller/user");



//signup route
router.route("/signup")
    .get(controllerUser.signUp)
    .post(controllerUser.signUpPost);

//login route
router.route("/login")
    .get(controllerUser.login)
    .post(storeReturnTo, passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), controllerUser.loginPost);

//logout route
router.route("/logout")
    .get(controllerUser.logout);


module.exports = router;