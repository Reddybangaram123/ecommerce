const express = require("express");
const router = express.Router();
// const Toy = require('./model/toys-model');
const toysModel = require("../model/toys-model");


// 🟢 CREATE - Add toy Product
router.post("/add-toys", async (req, res) => {
  try {
    const { subCategory, itemName, description, price, imageUrl } = req.body;

    // 🧹 Convert price safely to number (remove ₹ or commas)
    const numericPrice = parseFloat(price.toString().replace(/[₹,]/g, ""));

    const newProduct = new toysModel({
      subCategory,
      itemName,
      description,
      price: numericPrice,
      imageUrl,
    });

    await newProduct.save();
    res.json({ message: "✅ Toy product added successfully!", data: newProduct });
  } catch (err) {
    console.error("❌ Error in /add-toy:", err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;