const mongoose = require("mongoose");

const iotProductSchema = new mongoose.Schema({
  category: { type: String, default: "HomeKitchen" }, 
  subCategory: { type: String, default: "HomeKitchen Components" }, 
  itemName: { type: String, required: true }, 
  description: { type: String, required: true },
  price: { type: Number, required: true }, 
  imageUrl: { type: String, required: true }, 
  dateAdded: { type: Date, default: Date.now }, 
});

module.exports = mongoose.model("homekitchencategories", iotProductSchema);