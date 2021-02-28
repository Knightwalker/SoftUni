"use strict";

const router = require("express").Router();

const homeController = require("./src/controllers/homeController.js");
const authController = require("./src/controllers/authController.js");
const articlesController = require("./src/controllers/articlesController.js");

const isAuthenticated = require("./src/middlewares/isAuthenticated.js");

router.get("/", homeController.getHomePage);

router.get("/auth/login", authController.getLoginPage);
router.get("/auth/register", authController.getRegisterPage);
router.post("/auth/login", authController.postLoginAsync);
router.post("/auth/register", authController.postRegisterAsync);
router.get("/auth/logout", authController.postLogout);

router.get("/articles", articlesController.getArticlesPage);
router.get("/articles/create", isAuthenticated, articlesController.getCreatePage);
router.get("/articles/details/:articleId", articlesController.getArticleDetailsPage);
router.get("/articles/edit/:articleId", isAuthenticated, articlesController.getArticleEditPage);
router.post("/articles/create", isAuthenticated, articlesController.postCreate);
router.post("/articles/edit/:articleId", isAuthenticated, articlesController.postEdit);
// router.use("*", (req, res) => {

//   var data = {
//     title: "Not Found"
//   }
//   res.render("404", data);
// });

module.exports = router;