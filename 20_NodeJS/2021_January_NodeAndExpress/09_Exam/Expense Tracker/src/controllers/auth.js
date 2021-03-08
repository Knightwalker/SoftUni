"use strict";

const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const cg_validator = require("../../lib/cg_validator/index.js");
const userModel = require("../models/user.js");

const getLoginPage = (req, res) => {
  const data = {
    pageTitle: "Login",
    bUserIsAuthenticated: req.session.bUserIsAuthenticated
  }
  res.render("user/login.ejs", data);
}

const getRegisterPage = (req, res) => {
  const data = {
    pageTitle: "Register",
    bUserIsAuthenticated: req.session.bUserIsAuthenticated
  }
  res.render("user/register.ejs", data);
}

const postLogin = async (req, res) => {
  const { username, password } = req.body;

  // Stage 1. Input Data Validation
  const bUsernameFieldIsEmpty = cg_validator.isStringEmpty(username);
  const bPasswordFieldIsEmpty = cg_validator.isStringEmpty(password, {ignore_whitespace: false});
  if ((bUsernameFieldIsEmpty === true) || (bPasswordFieldIsEmpty === true)) {
    var data = { objErrors: {} }
    if (bUsernameFieldIsEmpty === true) { data.objErrors.usernameIsEmpty = {message: "Username field cannot be empty." } }
    if (bPasswordFieldIsEmpty === true) { data.objErrors.passwordIsEmpty = {message: "Password field cannot be empty." } }
    
    res.render("user/login.ejs", data);
    return;
  }

  // Stage 2. Find User
  var user = null;
  try {
    user = await userModel.findOne({username: username}).lean();
  } catch (error) {
    const data = {
      objErrors: {
        bUserDoesNotExist: { message: "Some unknown error happened."}
      }
    }
    res.render("user/login.ejs", data);
    return;
  }
 
  if (user == null) {
    const data = {
      objErrors: {
        bUserDoesNotExist: { message: "Invalid username/password combination."}
      }
    }
    res.render("user/login.ejs", data);
    return;
  }

  var salt = "keyboard cats";
  var hash = crypto.pbkdf2Sync(password, salt, 10, 512, "sha512").toString("hex");

  if (user.password != hash) {
    const data = {
      objErrors: {
        bInvalidPassword: { message: "Invalid username/password combination."}
      }
    }
    res.render("user/login.ejs", data);
    return;
  }

  const payload = {
    bUserIsAuthenticated: true,
    user_id: user._id.toString(),
    username: user.username
  }
  var token = jwt.sign(payload, "keyboard cats", {expiresIn: "2h"});

  // Stage 3. Login User
  await res.cookie("jwt", token, {httpOnly: true});
  res.redirect("/");

}

const postRegister = async (req, res) => {
  var { username, password, confirmPassword, amount } = req.body;

  // Stage 1. Input Data Validation
  const bPasswordsMatch = cg_validator.areStringsEqual(password, confirmPassword);
  const bValidatorHasErrors = (bPasswordsMatch === false);
  if (bValidatorHasErrors) {
    var data = { objErrors: {} }
    if (bPasswordsMatch === false) { data.objErrors.passwordsDoNotMatch = {message: "Passwords do not match." } }
    
    res.render("user/register.ejs", data);
    return;
  }

  //path
  if (cg_validator.isStringEmpty(amount)) { amount = 0; }
  else {amount = Number(amount); }

  // Stage 2. Model Validation (provided by mongoose)
  var user = new userModel({username: username, password: password, amount: amount});
  try {
    await user.validate();
  } catch (error) {
    var data = {
      objRegisterForm: {
        username: username,
        password: password,
        confirmPassword: confirmPassword,
        amount: amount,
      },
      objErrors: error.errors
    }
    res.render("user/register.ejs", data)
    return;
  }

  // Stage 3. Password Hashing
  var salt = "keyboard cats";
  var hash = crypto.pbkdf2Sync(password, salt, 10, 512, "sha512").toString("hex");

  // Stage 4. User Creation / We already did validations, so we can optimize
  user = new userModel({username: username, password: hash, amount: amount});
  await user.save({validateBeforeSave: false});
  //res.redirect("/");

  // Stage 5. Create Token
  const payload = {
    bUserIsAuthenticated: true,
    user_id: user._id,
    username: user.username,
  }
  var token = jwt.sign(payload, "keyboard cats", {expiresIn: "2h"});

  // Stage 6. Login User
  await res.cookie("jwt", token, {httpOnly: true});
  res.redirect("/");
  
}

const postLogout = (req, res) => {
  res.clearCookie("jwt");
  res.redirect('/');
}

module.exports = {
  getLoginPage: getLoginPage,
  getRegisterPage: getRegisterPage,
  postLogin: postLogin,
  postRegister: postRegister,
  postLogout: postLogout
}