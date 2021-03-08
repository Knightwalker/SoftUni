"use strict";

const express = require("express");
const router = express.Router();

const expenseController = require("../controllers/expense.js");
const isAuth = require("../middlewares/isAuthenticated");

router.get("/expenses", expenseController.getNewExpensePage);
router.get("/expenses/details/:id", isAuth, expenseController.getDetailsPage);

router.post("/expenses", expenseController.postNewExpense);
router.get("/expenses/delete/:id", isAuth, expenseController.deleteExpense);

module.exports = {
  routes: router,
};