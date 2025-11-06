const mongoose = require("mongoose");

const iotProductSchema = new mongoose.Schema({
  category: { type: String, default: "Toys" }, // Main category
  subCategory: { type: String, default: "Toys Components" }, 
  itemName: { type: String, required: true }, 
  description: { type: String, required: true }, // Short product description
  price: { type: Number, required: true }, // Example: 899
  imageUrl: { type: String, required: true }, // Product image link
  dateAdded: { type: Date, default: Date.now }, // Auto timestamp
});

module.exports = mongoose.model("toys-list", iotProductSchema);