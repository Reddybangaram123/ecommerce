const express = require("express");
const router = express.Router();
const mobilemodel = require("../model/mobilemodel");

// 🟢 CREATE - Add IoT Product
router.post("/add-mobile", async (req, res) => {
  try {
    const { category,subCategory,itemName, description, price, imageUrl } = req.body;

    // 🧹 Convert price safely to number (remove ₹ or commas)
    const numericPrice = parseFloat(price.toString().replace(/[₹,]/g, ""));

    const newProduct = new mobilemodel({
      category,
      subCategory,
      itemName,
      description,
      price: numericPrice,
      imageUrl,
    });

    await newProduct.save();
    res.json({ message: "✅ mobile product added successfully!", data: newProduct });
  } catch (err) {
    console.error("❌ Error in /add-mobile:", err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;