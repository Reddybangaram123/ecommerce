const mongoose = require("mongoose");

const iotProductSchema = new mongoose.Schema({
  category: { type: String, default: "furniture" }, // Main category
  itemName: { type: String, required: true }, // e.g. Arduino Uno R3 Board
  description: { type: String, required: true }, // Short product description
  price: { type: Number, required: true }, // Example: 899
  imageUrl: { type: String, required: true }, // Product image link
  dateAdded: { type: Date, default: Date.now }, // Auto timestamp
});

module.exports = mongoose.model("categories", iotProductSchema);