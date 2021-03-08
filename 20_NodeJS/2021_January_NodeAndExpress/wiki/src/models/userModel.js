const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  id: mongoose.Types.ObjectId,
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 4,
    maxlength: 32
  },
  password: {
    type: String,
    required: true
  },
  createdArticles: {
    type: mongoose.Types.ObjectId,
    ref: "Article"
  }
});

module.exports = mongoose.model("User", UserSchema);