const mongoose = require("mongoose");

const Accessory = mongoose.model("Accessory", {
    id: mongoose.Types.ObjectId,
    name: { type: String, required: true },
    description: {type: String, required: true, maxlength: 250},
    imageUrl: {type: String, required: true, validate: /(^https?)/}
}, "accessories");

const create = (data) => {
  let accessory = new Accessory({
    name: data.name,
    description: data.description,
    imageUrl: data.imageUrl
  });
  return accessory.save();
}

const getAll = () => {
  return Accessory.find({}).lean();
}

const getOneById = (id) => {
  return Accessory.findById(id);
}

const getAllEsceptThoseByIds = (ids) => {
  var accessories = Accessory.find({_id: {$nin: ids}}).lean();
  return accessories;
}

module.exports = {
  create: create,
  getAll: getAll,
  getOneById: getOneById,
  getAllEsceptThoseByIds: getAllEsceptThoseByIds
}