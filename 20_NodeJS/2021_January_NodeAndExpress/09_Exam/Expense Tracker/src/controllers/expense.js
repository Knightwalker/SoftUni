"use strict";

const userModel = require("../models/user.js");
const expenseModel = require("../models/expense.js");

const getNewExpensePage = async (req, res) => {
  const data = {
    bUserIsAuthenticated: req.session.bUserIsAuthenticated,
    username: req.session.username
  }

  res.render("expenses/new-expense.ejs", data);
}

const getDetailsPage = async (req, res) => {
  var expense_id = req.params.id;

  var expense = null;
  try {
    expense = await expenseModel.findById(expense_id).lean(); 
  } catch (error) {
    let data = {
      objErrors: error.errors
    }
    res.render("home/500", data);
    return;
  }

  if (expense == null) {
    let data = {
      objErrors: error.errors
    }
    res.render("home/404-and-notifications", data);
    return;
  }

  const data = {
    bUserIsAuthenticated: req.session.bUserIsAuthenticated,
    username: req.session.username,
    expense: expense
  }

  res.render("expenses/report.ejs", data);
}

const postNewExpense = async (req, res) => {
  var merchant = req.body.merchant;
  var total = req.body.total;
  var category = req.body.category;
  var description = req.body.description;
  var report = req.body.report;

  // Stage 1. Data Validation
  if (typeof report === "undefined") {
    report = false;
  } else if (report === "on") {
    report = true;
  }

  var user_id = req.session.user_id;

  // Stage 2. Expense Validation
  var expense = new expenseModel({merchant: merchant, total: total, category: category, description: description, report: report, user: user_id});
  try {
    await expense.validate();
  } catch (error) {
    var data = {
      objErrors: error.errors
    }
    res.render("expenses/new-expense.ejs", data);
    return;
  }

  // Stage 4. Get User, Create Expense, Push Expense Creation / We already did validations, so we can optimize
  try {
    await expense.save({validateBeforeSave: false});
  } catch (error) {
    var data = {
      objErrors: error.errors
    }
    res.render("expenses/new-expense.ejs", data);
    return;
  } 

  var user = await userModel.findById({_id: user_id});
  user.expenses.push(expense);
  await user.save({validateBeforeSave: false});

  // user.expenses.push(expense);
  // await userModel.findByIdAndUpdate({_id: user_id, user});

  // Stage 5. Redirect to Homepage
  res.redirect("/");

}

const deleteExpense = async (req, res) => {
  var expense_id = req.params.id;

  var expense = null;
  try {
    expense = await expenseModel.deleteOne({_id: expense_id});
  } catch (error) {
    let data = {
      objErrors: error.errors
    }
    res.render("home/500", data);
    return;
  }

  res.redirect("/");
}

module.exports = {
  getNewExpensePage: getNewExpensePage,
  getDetailsPage: getDetailsPage,
  postNewExpense: postNewExpense,
  deleteExpense: deleteExpense
}