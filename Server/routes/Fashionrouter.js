const express = require("express");
const router = express.Router();
const Fashionmodel = require("../model/Fashionmodel");

// 🟢 CREATE - Add IoT Product
router.post("/add-Fashion", async (req, res) => {
  try {
    const {  itemName, description, price, imageUrl } = req.body;

    // 🧹 Convert price safely to number (remove ₹ or commas)
    const numericPrice = parseFloat(price.toString().replace(/[₹,]/g, ""));

    const newProduct = new Fashionmodel({
    
      itemName,
      description,
      price: numericPrice,
      imageUrl,
    });

    await newProduct.save();
    res.json({ message: "✅ Fashion product added successfully!", data: newProduct });
  } catch (err) {
    console.error("❌ Error in /add-Fashion:", err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;