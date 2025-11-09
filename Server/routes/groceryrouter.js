const express = require("express");
const router = express.Router();
const grocerymodel = require("../model/grocerymodel");

// 🟢 CREATE - Add IoT Product
router.post("/add-grocery", async (req, res) => {
  try {
    const {  itemName, description, price, imageUrl } = req.body;

    // 🧹 Convert price safely to number (remove ₹ or commas)
    const numericPrice = parseFloat(price.toString().replace(/[₹,]/g, ""));

    const newProduct = new grocerymodel({
    
      itemName,
      description,
      price: numericPrice,
      imageUrl,
    });

    await newProduct.save();
    res.json({ message: "✅ grocery product added successfully!", data: newProduct });
  } catch (err) {
    console.error("❌ Error in /add-grocery:", err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;