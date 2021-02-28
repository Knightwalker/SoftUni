const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
const ejs = require("ejs");

const config = require("./config.js");
const mongoose = require("./src/database/mongoose.js");
const routes = require("./routes.js");
const app = express();

const sessionWithJWT = require("./src/middlewares/sessionWithJWT.js");

app.set("view engine", "ejs");
app.set("views", "./src/views");

// global middlewares
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/", cookieParser());
app.use("/", sessionWithJWT(), (req, res, next) => { console.log(req.session); next() });
app.use("/", express.urlencoded({extended: true}));
app.use("/", routes);

(async () => {
  try {
    await mongoose.connect();
    console.log("Mongoose connected with MongoDB on port 27017");
  } catch (error) {
    console.log(error);
  }
  
  app.listen(config.PORT, () => { 
    console.log(`Server is running on http://localhost:${config.PORT}`)
  });
  
})(); 