"use strict";

const authService = require("../services/authService.js");

const getLoginPage = (req, res) => {
  res.render("auth/login.ejs");
}

const getRegisterPage = (req, res) => {
  res.render("auth/register.ejs");
}

const postLoginAsync = async (req, res) => {
  var username = req.body.username;
  var password = req.body.password;

  // Stage 1. Data Validation
  const bUsernameFieldIsEmpty = (username === "" ? true : false );
  const bPasswordFieldIsEmpty = (password === "" ? true : false );
  
  if (bUsernameFieldIsEmpty === true || bPasswordFieldIsEmpty === true) {
    var data = {
      objRegisterErrors: {
        bUsernameFieldIsEmpty: bUsernameFieldIsEmpty,
        bPasswordFieldIsEmpty: bPasswordFieldIsEmpty
      }
    }
    
    res.render("auth/login.ejs", data);
    return;
  }

  // Stage 2. Model Validation (provided by mongoose)
  var token = null;
  try {
    token = await authService.loginAsync(username, password);
  } catch (error) {
    var data = {
      objRegisterErrors: {
        modelValidationError: error.message,
      }
    }
    res.render("auth/login.ejs", data);
    return;
  }
  
  // Stage 3. Login User
  res.cookie("jwt", token, {httpOnly: true});
  res.redirect("/");

}

const postRegisterAsync = async (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  var repeatPassword = req.body.repeatPassword;

  // Stage 1. Data Validation
  const bUsernameFieldIsEmpty = (username === "" ? true : false );
  const bPasswordFieldIsEmpty = (password === "" ? true : false );
  const bPasswordsMatch = (password === repeatPassword);

  if (bUsernameFieldIsEmpty === true || bPasswordFieldIsEmpty === true || bPasswordsMatch === false) {
    var data = {
      objRegisterErrors: {
        bUsernameFieldIsEmpty: bUsernameFieldIsEmpty,
        bPasswordFieldIsEmpty: bPasswordFieldIsEmpty,
        bPasswordsMatch: bPasswordsMatch
      }
    }
    
    res.render("auth/register.ejs", data);
    return;
  }

  // Stage 2. Model Validation (provided by mongoose)
  // Stage 3. Create User
  try {
    var user = await authService.registerAsync(username, password);
  } catch (error) {
    var data = {
      objRegisterErrors: {
        modelValidationError: error.message,
      }
    }
    res.render("auth/register.ejs", data);
    return;
  }

  res.redirect("/");
}

const postLogout = (req, res) => {
  res.clearCookie("jwt");
  res.redirect('/');
}

module.exports = {
  getLoginPage: getLoginPage,
  getRegisterPage: getRegisterPage,
  postLoginAsync: postLoginAsync,
  postRegisterAsync: postRegisterAsync,
  postLogout: postLogout,
}