import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// ✅ POST /api/products/add → Add new product
router.post("/add", async (req, res) => {
  try {
    const { title, description, price, image } = req.body;
    const newProduct = new Product({ title, description, price, image });
    const savedProduct = await newProduct.save();
    res.status(201).json({ message: "✅ Product added successfully", product: savedProduct });
  } catch (error) {
    console.error("❌ Error adding product:", error);
    res.status(400).json({ message: error.message });
  }
});

// ✅ GET /api/products → Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;


