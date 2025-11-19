const Product = require("../model/productmodel");

// Add product
exports.addProduct = async (req, res) => {
  try {
    console.log("📥 Received add product request:", req.body);

    const product = new Product(req.body);
    await product.save();

    return res.status(201).json({
      success: true,
      message: "Product saved successfully!",
      product,
    });
  } catch (error) {
    console.error("❌ Error saving product:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to save product",
      error: error.message,
    });
  }
};

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.json({ success: true, products });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch products",
    });
  }
};
