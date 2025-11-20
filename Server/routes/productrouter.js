const express = require("express");
const router = express.Router();
const Product = require("../model/productmodel");

// ------------------------------------
// Helpers
// ------------------------------------
function normalizeString(s) {
  if (!s) return s;
  return String(s).trim().toLowerCase();
}

// BOOK subcategory normalization
const bookSubcategoryMap = {
  fictional: "fiction",
  educational: "academic",
  motivational: "motivational",
};

// ELECTRONICS subcategory normalization (admin → frontend)
const electronicsSubcategoryMap = {
  laptops: "laptops",
  cameras: "cameras",
  "smart tvs": "smart tvs",
  speakers: "speakers",
  appliances: "appliances",
  modules: "modules",
};

// ------------------------------------
// ADD PRODUCT (Used by Admin Panel)
// Also handles electronics auto-normalization
// ------------------------------------
router.post("/add", async (req, res) => {
  try {
    console.log("📥 Incoming POST /api/products/add");
    console.log("Payload:", req.body);

    req.body.category = normalizeString(req.body.category);
    req.body.subcategory = normalizeString(req.body.subcategory);

    // BOOKS mapping
    if (req.body.category === "books") {
      req.body.subcategory = bookSubcategoryMap[req.body.subcategory] || req.body.subcategory;
    }

    // ELECTRONICS mapping
    if (req.body.category === "electronics") {
      req.body.subcategory =
        electronicsSubcategoryMap[req.body.subcategory] || req.body.subcategory;
    }

    // clean price
    if (req.body.price) {
      req.body.price = Number(String(req.body.price).replace(/[₹,]/g, ""));
    }

    const product = await Product.create(req.body);
    res.status(201).json({ success: true, product });

  } catch (err) {
    console.log("❌ Add product error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// ------------------------------------
// ADD ELECTRONICS (from ProductCard.js)
// ------------------------------------
router.post("/add-electronics", async (req, res) => {
  try {
    const { subCategory, itemName, description, price, imageUrl } = req.body;

    const numericPrice = Number(String(price).replace(/[₹,]/g, ""));

    const newProduct = new Product({
      category: "electronics",
      subcategory: normalizeString(subCategory),
      itemName,
      title: itemName, // ensures frontend compatibility
      description,
      price: numericPrice,
      imageUrl,
      image: imageUrl,
    });

    await newProduct.save();

    res.json({
      message: "✅ Electronic product added successfully!",
      data: newProduct,
    });

  } catch (err) {
    console.error("❌ Error in /add-electronics:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// ------------------------------------
// GET ALL PRODUCTS
// ------------------------------------
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ------------------------------------
// BOOKS
// ------------------------------------
router.get("/books", async (req, res) => {
  try {
    const books = await Product.find({
      category: { $in: ["books", "Books", "BOOKS"] },
    });
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ------------------------------------
// ELECTRONICS (ALL)
// ------------------------------------
router.get("/electronics", async (req, res) => {
  try {
    const electronics = await Product.find({
      category: { $in: ["electronics", "ELECTRONICS", "Electronics"] },
    });
    res.json(electronics);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ------------------------------------
// ELECTRONICS (SUBCATEGORY)
// ------------------------------------
router.get("/electronics/:subcategory", async (req, res) => {
  try {
    const sub = normalizeString(req.params.subcategory);

    const items = await Product.find({
      category: { $in: ["electronics", "Electronics", "ELECTRONICS"] },
      subcategory: { $regex: new RegExp(`^${sub}$`, "i") },
    });

    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ------------------------------------
// ANY CATEGORY + ANY SUBCATEGORY
// ------------------------------------
router.get("/:category/:subcategory", async (req, res) => {
  try {
    let category = normalizeString(req.params.category);
    let subcategory = normalizeString(req.params.subcategory);

    if (category === "books") {
      subcategory = bookSubcategoryMap[subcategory] || subcategory;
    }
    if (category === "electronics") {
      subcategory = electronicsSubcategoryMap[subcategory] || subcategory;
    }

    const products = await Product.find({ category, subcategory });
    res.json(products);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
