const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const CrudSchema = mongoose.Schema(
  {
    name: String,
    age: String,
    address: String,
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

const Crud = mongoose.model("Crud", CrudSchema);

const addData = async (data) => {
  return await Crud.create(data);
};
const getAllData = async () => {
  return await Crud.find();
};
const getSingleData = async (id) => {
  return await Crud.findById(id);
};
const deleteData = async (id) => {
  return await Crud.findByIdAndDelete(id);
};
const updateData = async (id, data) => {
  return await Crud.findByIdAndUpdate(id, data);
};
module.exports = {
  addData,
  getAllData,
  getSingleData,
  deleteData,
  updateData,
};
