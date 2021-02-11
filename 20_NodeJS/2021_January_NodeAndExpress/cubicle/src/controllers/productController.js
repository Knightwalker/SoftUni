const productService = require("../services/productService.js");
const accessoryModel = require("../models/accessory.js");

const getHomePage = async (req, res) => {
  var products = await productService.getAll(req.query);

  var data = {
    title: "Browse",
    products: products
  }
  res.render("home", data);
};

const getCreate = (req, res) => {
  var data = {
    title: "Create"
  }
  res.render("product/createPage.hbs", data);
};

const postCreate = async (req, res) => {
  const user_id = req.session.user_id;
  var name = req.body.name;
  var description = req.body.description;
  var imageUrl = req.body.imageUrl;
  var difficultyLevel = req.body.difficultyLevel;

  var data = {};

  var productData = {
    name: name,
    description: description,
    imageUrl: imageUrl,
    difficultyLevel: difficultyLevel,
  }

  // Validate Product
  var bProductDataIsValid = productService.isProductDataValid(productData);
  if (bProductDataIsValid === false) {
    data.cube = {
      id: id,
      name: name,
      description: description,
      imageUrl: imageUrl,
      difficultyLevel: difficultyLevel,
    }
    res.render(`create`, data);
    return;
  }

  // Create Product
  try {
    await productService.create(user_id, productData);
    res.redirect("/products")
  } catch (err) {
    console.log(err);
    res.send("Invalid Product")
  }
};

const getProductDetailsPage = async (req, res) => {
  var productId = req.params.productId
  var product = await productService.getOneByIdWithAccessories(productId);

  var data = {
    title: "Details",
    product: product
  }
  res.render("product/detailsPage.hbs", data);
};

const getAttachProduct = async (req, res) => {
  var productId = req.params.productId;
  var product = await productService.getOneById(productId);
  var accessories = await accessoryModel.getAllEsceptThoseByIds(product.accessories);

  var data = {
    title: "Accessories",
    product: product,
    accessories: accessories
  }
  res.render("attachAccessory.hbs", data);
}

const postAttachProduct = async (req, res) => {
  await productService.attachAccessory(req.params.productId, req.body.accessory);

  res.redirect(`/products/details/${req.params.productId}`);
}

const getEditPage = async (req, res) => {
  console.log(req.params);
  var productId = req.params.productId;

  var product = null;
  try {
    product = await productService.getOneById(productId);
  } catch (error) {
    throw error;
  }

  var data = {
    cube: {
      id: product._id,
      name: product.name,
      description: product.description,
      imageUrl: product.imageUrl,
      difficultyLevel: product.difficultyLevel
    }
  }

  res.render("product/editPage.hbs", data);
}

const postEdit = async (req, res) => {
  var id = req.params.productId;
  var name = req.body.name;
  var description = req.body.description;
  var imageUrl = req.body.imageUrl;
  var difficultyLevel = req.body.difficultyLevel;

  var data = {};

  var productData = {
    name: name,
    description: description,
    imageUrl: imageUrl,
    difficultyLevel: difficultyLevel,
  }

  // Validate Product
  var bProductDataIsValid = productService.isProductDataValid(productData);
  if (bProductDataIsValid === false) {
    data.cube = {
      id: id,
      name: name,
      description: description,
      imageUrl: imageUrl,
      difficultyLevel: difficultyLevel,
    }
    res.render(`product/editCubePage.hbs`, data);
    return;
  }

  // Create Product
  try {
    await productService.updateOneById(id, productData);
  } catch (err) {
    console.log(err);
  }

  res.redirect(`/products/details/${id}`);
}

const getDeletePage = async (req, res) => {
  // Init variables
  var userId = req.session.user_id;
  var productId = req.params.productId;
  var data = {};

  // Get Product
  var product = null;
  try {
    product = await productService.getOneById(productId);
  } catch (error) {
    throw error;
  }

  // Product can only be deleted by its creator
  // Check if user can delete a product.
  if (userId !== product.creator) {
    //res.status(401);
    res.redirect("/");
    return;
  }

  // Delete Product
  data.cube = {
    id: product._id,
    name: product.name,
    description: product.description,
    imageUrl: product.imageUrl,
    difficultyLevel: product.difficultyLevel
  }

  res.render("product/deletePage.hbs", data);
}

const postDelete = async (req, res) => {
  // Init variables
  const userId = req.session.user_id;
  const productId = req.params.productId;
  var data = {};

  // Get Product
  var product = null;
  try {
    product = await productService.getOneById(productId);
  } catch (error) {
    throw error;
  }

  // Product can only be deleted by its creator
  // Check if user can delete a product.
  if (userId !== product.creator) {
    //res.status(401);
    res.redirect("/");
    return;
  }

  await productService.deleteOneById(productId);
  res.redirect("/");
}

module.exports = {
  getHomePage: getHomePage,
  getCreate: getCreate,
  getProductDetailsPage: getProductDetailsPage,
  getAttachProduct: getAttachProduct,

  postCreate: postCreate,
  postAttachProduct: postAttachProduct,

  getEditPage: getEditPage,
  postEdit: postEdit,

  getDeletePage: getDeletePage,
  postDelete: postDelete
};