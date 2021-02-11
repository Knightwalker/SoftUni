const express = require("express");
const handlebars = require("express-handlebars");
const cookieParser = require("cookie-parser");
const sessionWithJWT = require("../src/middlewares/sessionWithJWT.js");

const setupExpress = (app) => {
  app.engine("hbs", handlebars({
    extname: "hbs"
  }));
  app.set("view engine", "hbs");
  
  app.use(express.static("public"));
  app.use(express.urlencoded({extended: true}));
  app.use(cookieParser());
  app.use(sessionWithJWT(), (req, res, next) => { console.log(req.session); next() });

}

module.exports = {
  setupExpress: setupExpress
};