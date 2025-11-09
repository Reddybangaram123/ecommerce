const express = require("express");
const router = express.Router();

const electronicsmodel = require("../model/electronicsmodel");


// 🟢 CREATE - Add toy Product
router.post("/add-electronics", async (req, res) => {
  try {
    const { subCategory, itemName, description, price, imageUrl } = req.body;

    // 🧹 Convert price safely to number (remove ₹ or commas)
    const numericPrice = parseFloat(price.toString().replace(/[₹,]/g, ""));

    const newProduct = new electronicsmodel({
      subCategory,
      itemName,
      description,
      price: numericPrice,
      imageUrl,
    });

    await newProduct.save();
    res.json({ message: "✅ Electronic product added successfully!", data: newProduct });
  } catch (err) {
    console.error("❌ Error in /add-electronics:", err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;