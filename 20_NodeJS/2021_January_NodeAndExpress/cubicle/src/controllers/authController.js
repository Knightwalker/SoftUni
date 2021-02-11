"use strict"

const authService = require("../services/authService.js");

const getLoginPage = (req, res) => {
  res.render("auth/loginPage.hbs");
}

const getRegisterPage = (req, res) => {
  res.render("auth/registerPage.hbs");
}

const postLogin = async (req, res) => {
  var username = req.body.username;
  var password = req.body.password;

  try {
    var token = await authService.loginAsync(username, password);
    res.cookie("jwt", token, {httpOnly: true});
    res.redirect("/products");
  } catch (error) {
    res.render("auth/loginPage.hbs", {error: error});
    return;
  }

}

const postRegister = async (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  var repeatPassword = req.body.repeatPassword;

  // Step 1 - Validate Data
  if (password !== repeatPassword) {
    res.render("auth/registerPage.hbs", {message: "Password missmatch"});
    return;
  }

  try {
    var user = await authService.registerAsync(username, password);
  } catch (error) {
    res.render("auth/registerPage.hbs", {error: error});
    return;
  }

  res.redirect("/products");
}

const logout = (req, res) => {
  res.clearCookie("jwt");
  res.redirect('/');
}

module.exports = {
  getLoginPage: getLoginPage,
  getRegisterPage: getRegisterPage,
  postLogin: postLogin,
  postRegister: postRegister,
  logout: logout
}