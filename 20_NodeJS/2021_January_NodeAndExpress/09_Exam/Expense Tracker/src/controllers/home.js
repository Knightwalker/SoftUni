"use strict";

const userModel = require("../models/user.js");
const expenseModel = require("../models/expense.js");

const getHomePage = async (req, res) => {
  var id = req.session.user_id;

  // getting some data, population the old way.
  var user = null;
  var expenses = null;
  try {
    user = await userModel.findOne({_id: id}).lean();
    expenses = await expenseModel.find({user: id}).lean();
  } catch (error) {

  }
  if (user) {
    user.expenses = expenses;
  }

  const data = {
    bUserIsAuthenticated: req.session.bUserIsAuthenticated,
    username: req.session.username,
    userObj: user
  }

  res.render("home/home.ejs", data);
}

module.exports = {
  getHomePage: getHomePage,
}