const express = require("express");
const router = express.Router();
// const Toy = require('./model/grocerymodel');
const grocerymodel = require("../models/grocerymodel");


// 🟢 CREATE - Add toy Product
router.post("/add-grocery", async (req, res) => {
  try {
    const { subCategory, itemName, description, price, imageUrl } = req.body;

    // 🧹 Convert price safely to number (remove ₹ or commas)
    const numericPrice = parseFloat(price.toString().replace(/[₹,]/g, ""));

    const newProduct = new grocerymodel({
      subCategory,
      itemName,
      description,
      price: numericPrice,
      imageUrl,
    });

    await newProduct.save();
    res.json({ message: "✅ grocery product added successfully!", data: newProduct });
  } catch (err) {
    console.error("❌ Error in /add-toy:", err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;