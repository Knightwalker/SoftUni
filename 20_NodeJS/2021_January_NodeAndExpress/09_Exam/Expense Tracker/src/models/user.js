const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: mongoose.Types.ObjectId,
  username: {
    type: String,
    required: [true, "Username field cannot be empty."],
    minlength: [4, "Username must be atleast 4 characters long."],
    unique: true, // this is not a validator, it just creates an index...
    // match: [] // TODO
    validate: {
      validator: fCheckIfUsernameIsAvaliable,
      message: (props) => `Username "${props.value}" is not avaliable.`
    }
  },
  password: {
    type: String,
    required: [true, "Password field cannot be empty."],
    minlength: [4, "Password must be atleast 4 characters long."]
  },
  amount: {
    type: Number,
    required: [true, "Amount field cannot be empty."],
    default: 0
  },
  expenses: {
    type: [mongoose.Types.ObjectId],
    ref: "Expense"
  }
});

async function fCheckIfUsernameIsAvaliable(value) {
  var result = null;
  try {
    result = await this.model("User").findOne({username: value}).lean();
  } catch (error) {
    throw new Error({message: "Unknown error."});
  }

  if (result == null) {
    return Promise.resolve(true);
  } else {
    return Promise.resolve(false);
  }
}

module.exports = mongoose.model("User", userSchema);