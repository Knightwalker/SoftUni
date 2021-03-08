const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  id: mongoose.Types.ObjectId,
  merchant: {
    type: String,
    required: [true, "Merchant field cannot be empty."],
    minlength: [4, "Merchant must be atleast 4 characters long."]
  },
  total: {
    type: Number,
    require: [true, "Total field cannot be empty"],
  },
  category: {
    type: String,
    required: [true, "Category field cannot be empty."],
  },
  description: {
    type: String,
    required: [true, "Description field cannot be empty"],
    minlength: [3, "Description must be between 3 and 30 characters long."],
    maxlength: [30, "Description must be between 3 and 30 characters long."],
  },
  report: {
    type: Boolean,
    required: [true, "Report field cannot be empty."],
    default: false
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Expense", expenseSchema);