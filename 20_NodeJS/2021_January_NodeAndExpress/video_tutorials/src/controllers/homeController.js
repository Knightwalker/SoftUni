"use strict";

const getHomePage = (req, res) => {

  var data = {
    bUserIsAuthenticated: req.locals
  }

  res.render("home/guest-home.ejs", data);
}

const getUserHomePage = (req, res) => {

  var data = {
    bUserIsAuthenticated: req.locals
  }

  res.render("home/user-home.ejs", data);
}

module.exports = {
  getHomePage: getHomePage,
  getUserHomePage: getUserHomePage
}