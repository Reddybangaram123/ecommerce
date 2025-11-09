const express = require("express");
const router = express.Router();
// const Toy = require('./model/grocerymodel');
const homekitchenmodel = require("../model/homekitchenmodel");


// 🟢 CREATE - Add toy Product
router.post("/add-homekitchen", async (req, res) => {
  try {
    const { subCategory, itemName, description, price, imageUrl } = req.body;

    // 🧹 Convert price safely to number (remove ₹ or commas)
    const numericPrice = parseFloat(price.toString().replace(/[₹,]/g, ""));

    const newProduct = new homekitchenmodel({
      subCategory,
      itemName,
      description,
      price: numericPrice,
      imageUrl,
    });

    await newProduct.save();
    res.json({ message: "✅ grocery product added successfully!", data: newProduct });
  } catch (err) {
    console.error("❌ Error in /add-homekitchen:", err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;