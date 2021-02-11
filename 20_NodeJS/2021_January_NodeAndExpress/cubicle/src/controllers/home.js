"use strict";

const getHomePage = (req, res) => {
  res.redirect("/products");
}

const getAboutPage = (req, res) => {
  var data = {
    title: "About"
  }
  res.render("about", data);
}

module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage
};