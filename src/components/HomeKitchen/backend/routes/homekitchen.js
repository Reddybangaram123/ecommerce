
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const homeKitchenModelsModel = require("../models/homeKitchenModels");


// 🟢 CREATE - Add Home Kitchen Product to Cart
router.post("/homekitchencategory", async (req, res) => {
  console.log("📥 POST /homekitchencategory - Request received");
  console.log("📦 Request body:", JSON.stringify(req.body, null, 2));
  
  try {
    // Check MongoDB connection
    if (mongoose.connection.readyState !== 1) {
      console.error("❌ MongoDB not connected. Connection state:", mongoose.connection.readyState);
      return res.status(503).json({ 
        error: "Database connection not available. Please check MongoDB connection." 
      });
    }

    const { subCategory, itemName, description, price, imageUrl } = req.body;

    console.log("🔍 Validating fields...");
    console.log("  - itemName:", itemName);
    console.log("  - description:", description);
    console.log("  - price:", price);
    console.log("  - imageUrl:", imageUrl);
    console.log("  - subCategory:", subCategory);

    // Validate required fields
    if (!itemName || !description || !price || !imageUrl) {
      console.error("❌ Validation failed: Missing required fields");
      return res.status(400).json({ 
        error: "Missing required fields: itemName, description, price, and imageUrl are required",
        received: { itemName, description, price, imageUrl, subCategory }
      });
    }

    // 🧹 Convert price safely to number (remove ₹ or commas)
    const numericPrice = parseFloat(price.toString().replace(/[₹,]/g, ""));
    console.log("💰 Price conversion: '" + price + "' -> " + numericPrice);

    // Validate price conversion
    if (isNaN(numericPrice) || numericPrice <= 0) {
      console.error("❌ Invalid price:", numericPrice);
      return res.status(400).json({ 
        error: "Invalid price format. Price must be a valid positive number.",
        receivedPrice: price,
        convertedPrice: numericPrice
      });
    }

    const productData = {
      subCategory: subCategory || "homekitchen",
      itemName,
      description,
      price: numericPrice,
      imageUrl,
    };

    console.log("📝 Creating product with data:", JSON.stringify(productData, null, 2));

    const newProduct = new homeKitchenModelsModel(productData);

    console.log("💾 Attempting to save to MongoDB...");
    console.log("📊 Database:", mongoose.connection.db.databaseName);
    console.log("📊 Collection name:", homeKitchenModelsModel.collection.name);

    const savedProduct = await newProduct.save();
    
    console.log("✅ Home Kitchen product saved successfully!");
    console.log("📄 Saved product ID:", savedProduct._id);
    console.log("📄 Saved product:", JSON.stringify(savedProduct.toObject(), null, 2));

    res.json({ 
      message: "✅ Home Kitchen product added to cart successfully!", 
      data: savedProduct,
      success: true
    });
  } catch (err) {
    console.error("❌ Error in /homekitchencategory:");
    console.error("   Error name:", err.name);
    console.error("   Error message:", err.message);
    console.error("   Error stack:", err.stack);
    
    // Handle validation errors
    if (err.name === "ValidationError") {
      const validationErrors = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({ 
        error: "Validation error",
        details: validationErrors,
        fullError: err.message
      });
    }

    // Handle duplicate key errors
    if (err.code === 11000) {
      return res.status(400).json({ 
        error: "Duplicate entry",
        message: "This product already exists in the database"
      });
    }

    res.status(500).json({ 
      error: "Internal server error",
      message: err.message,
      type: err.name
    });
  }
});

module.exports = router;