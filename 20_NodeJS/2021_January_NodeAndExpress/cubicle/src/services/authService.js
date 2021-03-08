"use strict";

const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const config = require("../../config.js");
const User = require("../models/user.js");

const loginAsync = async (username, password) => {
  var user = null;

  try {
    user = await User.findOne({username: username}).lean();
  } catch (err) {
    throw err;
  }
 
  if (user == null) {
    const error = { message: "user not found" };
    throw error;
  }

  var salt = "keyboard cats";
  var hash = crypto.pbkdf2Sync(password, salt, 10, 512, "sha512").toString("hex");

  if (user.password != hash) {
    const error = { message: "password is incorrect" };
    throw error
  }

  // gen jwt token
  const payload = {
    id: user._id,
    username: user.username
  }
  const token = jwt.sign(payload, config.JWT_SECRET);
  
  return token;

}

const registerAsync = async (username, password) => {
  var salt = "keyboard cats";
  var hash = crypto.pbkdf2Sync(password, salt, 10, 512, "sha512").toString("hex");

  const user = new User({
    username: username,
    password: hash
  });

  return user.save();

}

module.exports = {
  loginAsync: loginAsync,
  registerAsync: registerAsync
}