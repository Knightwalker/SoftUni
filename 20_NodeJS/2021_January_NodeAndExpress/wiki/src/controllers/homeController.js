"use strict";

const articleService = require("../services/articleService.js");

const getHomePage = async (req, res) => {
  
  const articles = await articleService.getLatestArticles();
  var data = {
    articles: articles
  }
  res.render("home/home.ejs", data);
}

module.exports = {
  getHomePage: getHomePage,
}