const express = require("express");
const router = express.Router();
const furnituremodel = require("../model/furnituremodel");

// 🟢 CREATE - Add IoT Product
router.post("/add-furniture", async (req, res) => {
  try {
    const {  itemName, description, price, imageUrl } = req.body;

    // 🧹 Convert price safely to number (remove ₹ or commas)
    const numericPrice = parseFloat(price.toString().replace(/[₹,]/g, ""));

    const newProduct = new furnituremodel({
    
      itemName,
      description,
      price: numericPrice,
      imageUrl,
    });

    await newProduct.save();
    res.json({ message: "✅ furniture product added successfully!", data: newProduct });
  } catch (err) {
    console.error("❌ Error in /add-furniture:", err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
