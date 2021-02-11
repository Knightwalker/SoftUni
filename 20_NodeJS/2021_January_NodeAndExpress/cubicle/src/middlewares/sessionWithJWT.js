"use strict";

const jwt = require("jsonwebtoken");
const config = require("../../config/config.js");

const sessionWithJWT = (options) => {
  const cookie_key = "jwt";

  return (req, res, next) => {
    req.session = {
      bUserIsAuthenticated: false,
      username: "Guest"
    };
    res.locals = {
      bUserIsAuthenticated: false,
      username: "Guest"
    }

    if (!req.cookies[cookie_key]) {
      next();
      return;
    }

    var token = req.cookies[cookie_key];
    var payload = null;
    try {
      payload = jwt.verify(token, config.JWT_SECRET);
    } catch (err) {
      res.clearCookie(cookie_key);
      next();
      return;
    }
    
    req.session = {
      bUserIsAuthenticated: true,
      user_id: payload.id,
      username: payload.username
    }

    res.locals = {
      bUserIsAuthenticated: true,
      user_id: payload.id,
      username: payload.username
    }

    next();
  }

}

module.exports = sessionWithJWT;