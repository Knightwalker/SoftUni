"use strict";

const userModel = require("../models/user.js");
const expenseModel = require("../models/expense.js");

const getProfilePage = async (req, res) => {
  var user_id = req.params.user_id;

  // getting some data, population the old way.
  var user = null;
  var expenses = null;
  try {
    user = await userModel.findOne({_id: user_id}).lean();
    expenses = await expenseModel.find({user: user_id}).lean();
  } catch (error) {

  }
  user.expenses = expenses;

  var totalAmount = 0;
  for (const expense of expenses) {
    totalAmount += Number(expense.total);
  }

  const data = {
    bUserIsAuthenticated: req.session.bUserIsAuthenticated,
    username: req.session.username,
    userObj: user,
    totalAmount: totalAmount
  }

  res.render("user/account-info.ejs", data);
}

module.exports = {
  getProfilePage: getProfilePage,
}