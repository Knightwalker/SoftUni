const Cube = require("../models/cube.js");
const accessoryModel = require("../models/accessory.js");

const getAll = async (query) => {
  var products = await Cube.find({}).lean();

  if (query.search) {
    products = products.filter(x => x.name.toLowerCase().includes(query.search.toLowerCase()));
  }

  if (query.from) {
    products = products.filter(x => Number(x.difficultyLevel) >= Number(query.from))
  }

  if (query.to) {
    products = products.filter(x => Number(x.difficultyLevel) <= Number(query.from))
  }

  return products;
}

const getOneById = async (id) => {
  var product = await Cube.findById(id).lean();
  return product;
}

const getOneByIdWithAccessories = async (id) => {
  var product = await Cube.findById(id).populate("accessories").lean();
  return product;
}

const create = (user_id, data) => {
  var creator = user_id;

  let cube = new Cube({
    name: data.name,
    description: data.description,
    imageUrl: data.imageUrl,
    difficultyLevel: data.difficultyLevel,
    creator: creator
  });

  return cube.save();

}

const attachAccessory = async (productId, accessoryId) => {
  var product = await Cube.findById(productId);
  var accessory = await accessoryModel.getOneById(accessoryId);

  product.accessories.push(accessory);
  return product.save();
}

const updateOneById = (id, data) => {
  return Cube.updateOne({_id: id}, data);
}

const isProductDataValid = (data) => {
  var name = data.name;
  var description = data.description;
  var imageUrl = data.imageUrl;
  var difficultyLevel = data.difficultyLevel;

  let isValid = true;
  
  if (name === "" || description === "" || imageUrl === "") {
    isValid = false;
  }

  if (!isValid) {
    return false;
  } else {
    return true;
  }

} 

const deleteOneById = (id) => {
  return Cube.deleteOne({_id: id});
}

module.exports = {
  create: create,
  getAll: getAll,
  getOneById: getOneById,
  getOneByIdWithAccessories: getOneByIdWithAccessories,
  attachAccessory: attachAccessory,
  updateOneById: updateOneById,

  isProductDataValid: isProductDataValid,
  deleteOneById: deleteOneById
}