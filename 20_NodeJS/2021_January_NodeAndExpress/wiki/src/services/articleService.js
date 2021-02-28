"use strict";

const articleModel = require("../models/articleModel.js");

const getLatestArticles = async (req, res) => {
  
  var articles = null;
  try {
    articles = await articleModel.find({}).sort({creationDate: -1}).limit(3).lean();
  } catch (error) {
    console.log(error);
  }

  // extract first 50 words of the content
  for (let i = 0; i < articles.length; i++) {
    let words = articles[i].content.split(" ");
    let shortContent = words.slice(0, 50).join(" ");
    articles[i].shortContent = shortContent;
  }

  return articles;
}

module.exports = {
  getLatestArticles: getLatestArticles
}