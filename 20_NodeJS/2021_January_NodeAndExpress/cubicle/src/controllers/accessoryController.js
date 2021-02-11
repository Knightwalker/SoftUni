"use strict";

const accessoryModel = require("../models/accessory.js");

const { Router } = require("express");
const router = Router();

router.get("/create", (req, res) => {
  
  res.render("createAccessory.hbs");
});

router.post("/create", async (req, res) => {
  // TODO: Validation middleware
  // console.log(req.body);

  await accessoryModel.create(req.body);

  res.redirect("/products");
});

module.exports = router;