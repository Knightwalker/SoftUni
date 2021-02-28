"use strict";

const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const config = require("../../config.js");
const userModel = require("../models/userModel.js");

const loginAsync = async (username, password) => {
  var user = null;

  try {
    user = await userModel.findOne({username: username}).lean();
  } catch (error) {
    throw error;
  }
 
  if (user == null) {
    const error = { message: "Invalid username/password combination." };
    throw error;
  }

  var salt = "keyboard cats";
  var hash = crypto.pbkdf2Sync(password, salt, 10, 512, "sha512").toString("hex");

  if (user.password != hash) {
    const error = { message: "Invalid username/password combination." };
    throw error
  }

  // gen jwt token
  const payload = {
    id: user._id,
    username: user.username
  }
  const token = jwt.sign(payload, config.JWT_SECRET, {expiresIn: "1h"});
  
  return token;

}

const registerAsync = async (username, password) => {
  const salt = "keyboard cats";
  const hash = crypto.pbkdf2Sync(password, salt, 10, 512, "sha512").toString("hex");

  const user = new userModel({
    username: username,
    password: hash
  });

  return user.save();

}

module.exports = {
  loginAsync: loginAsync,
  registerAsync: registerAsync
}