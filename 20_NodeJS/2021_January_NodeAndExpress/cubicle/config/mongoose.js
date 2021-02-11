const config = require("./config.js");
const mongoose = require("mongoose");

const url = config.DB_CONNECTION_URL;

const connect = (app) => {
  mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
  
  const db = mongoose.connection;
  db.on("error", (err) => {
    console.error(err);
  });
  db.once("open", () => {
    console.log("DB connected");
  });
}

module.exports = {
  connect: connect
}