"use strict";

const express = require("express");
const router = express.Router();

const homeController = require("../controllers/home.js");
const userController = require("../controllers/user.js");

router.get("/", homeController.getHomePage);

router.get("/user/profile/:user_id", userController.getProfilePage);

module.exports = {
  routes: router,
};