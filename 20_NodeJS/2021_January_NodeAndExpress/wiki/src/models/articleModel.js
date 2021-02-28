const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  id: mongoose.Types.ObjectId,
  title: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
  },
  content: {
    type: String,
    required: true,
    minlength: 20
  },
  author: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  },
  creationDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Article", ArticleSchema);