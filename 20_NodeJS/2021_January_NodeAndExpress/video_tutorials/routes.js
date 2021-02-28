"use strict";

const router = require("express").Router();
const homeController = require("./src/controllers/homeController.js");
const authController = require("./src/controllers/authController.js");

router.get("/", homeController.getHomePage);
router.get("/2", homeController.getUserHomePage);

router.get("/auth/login", authController.getLoginPage);
router.get("/auth/register", authController.getRegisterPage);
router.post("/auth/login", authController.postLoginAsync);
router.post("/auth/register", authController.postRegisterAsync);

module.exports = router;