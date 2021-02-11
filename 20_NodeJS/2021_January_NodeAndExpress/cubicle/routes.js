"use strict";

const homeController = require("./src/controllers/home.js");
const accessoryController = require("./src/controllers/accessoryController.js");
const productController = require("./src/controllers/productController.js");
const authController = require("./src/controllers/authController.js");

const isAuthenticated = require("./src/middlewares/isAuthenticated.js");

const router = require("express").Router();

router.get("/products", productController.getHomePage);
router.get("/products/create", isAuthenticated, productController.getCreate);
router.post("/products/create", isAuthenticated, productController.postCreate);
router.get("/products/details/:productId", productController.getProductDetailsPage);

router.route("/products/:productId/attach")
  .get(isAuthenticated, productController.getAttachProduct)
  .post(isAuthenticated, productController.postAttachProduct);

router.get("/products/edit/:productId", productController.getEditPage);
router.post("/products/edit/:productId", productController.postEdit);
router.get("/products/delete/:productId", productController.getDeletePage);
router.post("/products/delete/:productId", productController.postDelete);

router.use("/accessories", accessoryController);

router.get("/", homeController.getHomePage);
router.get("/about", homeController.getAboutPage);

router.get("/auth/login", authController.getLoginPage);
router.get("/auth/register", authController.getRegisterPage);
router.post("/auth/login", authController.postLogin);
router.post("/auth/register", authController.postRegister);
router.get("/auth/logout", authController.logout);

router.use("*", (req, res) => {

  var data = {
    title: "Not Found"
  }
  res.render("404", data);
});

module.exports = router;