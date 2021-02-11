const fs = require("fs").promises;
const path = require("path");
const productsDb = require("../config/products.json");

const getAll = () => {
  return productsDb;
}

const getOneById = (id) => {
  return productsDb.find(x => x.id == id);
}

const create = (product) => {
  productsDb.push(product);
  return fs.writeFile(path.join(__dirname, "../config/products.json"), JSON.stringify(productsDb));
}

module.exports = {
  getAll: getAll,
  getOneById: getOneById,
  create: create
}