const express = require("express");
const router = express.Router();
const Product = require("../model/productmodel");

// Subcategory mapping: map admin -> frontend subcategories for books
// Note: motivational is kept as its own subcategory (no merge with non-fiction)
const bookSubcategoryMap = {
  fictional: "fiction",
  educational: "academic",
  motivational: "motivational", // keep motivational separate
};

// Normalize helper
function normalizeString(s) {
  if (!s) return s;
  return String(s).trim().toLowerCase();
}

// ADD PRODUCT
router.post("/add", async (req, res) => {
  try {
    console.log("📥 Incoming POST /api/products/add");
    console.log("Payload:", req.body);

    // Normalize category/subcategory casing (so admin input is flexible)
    if (req.body.category) req.body.category = normalizeString(req.body.category);
    if (req.body.subcategory) req.body.subcategory = normalizeString(req.body.subcategory);

    // If category is books, map admin subcategory to frontend subcategory name
    if (req.body.category === "books") {
      req.body.subcategory = bookSubcategoryMap[req.body.subcategory] || req.body.subcategory;
    }

    const product = await Product.create(req.body);
    res.status(201).json({ success: true, product });
  } catch (err) {
    console.log("❌ Add product error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET ALL PRODUCTS
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// NEW — GET only books (all subcategories)
router.get("/books", async (req, res) => {
  try {
    const books = await Product.find({ category: { $in: ["books", "Books", "BOOKS"] } });
    res.json(books);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET BY CATEGORY + SUBCATEGORY
router.get("/:category/:subcategory", async (req, res) => {
  try {
    // Normalize incoming route params
    let category = normalizeString(req.params.category);
    let subcategory = normalizeString(req.params.subcategory);

    // If category is books, map requested subcategory via same mapping (so /books/motivational works)
    if (category === "books") {
      subcategory = bookSubcategoryMap[subcategory] || subcategory;
    }

    const products = await Product.find({ category, subcategory });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
