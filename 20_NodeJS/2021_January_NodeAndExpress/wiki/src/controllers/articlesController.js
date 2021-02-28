"use strict";

const articleModel = require("../models/articleModel.js");
const articleService = require("../services/articleService.js");

const getArticlesPage = async (req, res) => {
  var articles = await articleModel.find({}).lean();
  var data = {
    articles: articles
  }
  res.render("articles/all-articles.ejs", data);
}

const getCreatePage = (req, res) => {
  res.render("articles/create.ejs");
}

const getArticleDetailsPage = async (req, res) => {
  var id = req.params.articleId;

  var article = await articleModel.findById({_id: id}).lean();
  var data = {
    article: article
  }
  res.render("articles/article.ejs", data);
}

const getArticleEditPage = async (req, res) => {
  var id = req.params.articleId;

  var article = await articleModel.findById({_id: id}).lean();
  var data = {
    article: article
  }
  res.render("articles/edit.ejs", data);
}

const postCreate = async (req, res) => {
  var title = req.body.title;
  var content = req.body.content;

  const article = new articleModel({
    title: title,
    content: content
  });

  try {
    var result = await article.save();
  } catch (error) {
    var data = {
      objRegisterErrors: {
        modelValidationError: error.message,
      }
    }
    res.render("articles/create.ejs", data);
    return;
  }

  res.redirect("/");

}

const postEdit = async (req, res) => {
  var id = req.params.articleId;
  var title = req.body.title;
  var content = req.body.content;
  
  try {
    var article = new articleModel({id: id, title: title, content: content});
    await article.validate();
    var result = await articleModel.findOneAndUpdate({_id: id}, {title: title, content: content});
  } catch (error) {
    var data = {
      article: {
        id: id,
        title: title,
        content: content
      },
      objRegisterErrors: {
        modelValidationError: error.message,
      }
    }
    res.render("articles/edit.ejs", data);
    return;
  }

  res.redirect(`/articles/details/${id}`);
}

module.exports = {
  getArticlesPage: getArticlesPage,
  getCreatePage: getCreatePage,
  getArticleDetailsPage: getArticleDetailsPage,
  getArticleEditPage: getArticleEditPage,
  postCreate: postCreate,
  postEdit: postEdit
}