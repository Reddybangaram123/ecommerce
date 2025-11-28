const express = require("express");
const router = express.Router();
const Product = require("../model/productmodel");

// ------------------------------------------------------------
// Helper: Normalize strings
// ------------------------------------------------------------
const normalize = (text) => {
  if (!text) return "";
  return String(text).trim().toLowerCase();
};

// ------------------------------------------------------------
// CATEGORY–SUBCATEGORY MAPS (AUTO NORMALIZING)
// ------------------------------------------------------------

// MOBILES
const mobileMap = {
  iphone: "iphone",
  iphones: "iphone",
  "i phone": "iphone",
  android: "android phones",
  androids: "android phones",
  "android phones": "android phones",
  accessories: "mobile accessories",
  accessory: "mobile accessories",
  "mobile accessories": "mobile accessories",
  smartwatch: "smart watches",
  "smart watch": "smart watches",
  "smart watches": "smart watches",
  powerbank: "power banks",
  "power bank": "power banks",
  "power banks": "power banks",
};

// ELECTRONICS
const electronicsMap = {
  laptop: "laptops",
  laptops: "laptops",
  camera: "cameras",
  cameras: "cameras",
  tv: "smart tvs",
  "smart tv": "smart tvs",
  "smart tvs": "smart tvs",
  headphone: "headphones",
  headphones: "headphones",
  speaker: "speakers",
  speakers: "speakers",
};

// FASHION
const fashionMap = {
  men: "men",
  "men clothing": "men",
  women: "women",
  "women clothing": "women",
  footwear: "footwear",
  shoes: "footwear",
  jewellery: "jewellery",
  watches: "watches",
};

// HOME & KITCHEN
const homeKitchenMap = {
  furniture: "furniture",
  appliances: "appliances",
  decor: "decor",
  lighting: "lighting",
  storage: "storage & organizers",
  organizers: "storage & organizers",
  "storage & organizers": "storage & organizers",
};

// BOOKS
const bookMap = {
  fiction: "fiction",
  fictional: "fiction",
  educational: "educational",
  academics: "educational",
  motivational: "motivational",
  biography: "biographies",
  biographies: "biographies",
  comics: "comics",
};

// TOYS
const toyMap = {
  "action figures": "action figures",
  "soft toys": "soft toys",
  "board games": "board games",
  "outdoor play": "outdoor play",
  "educational toys": "educational toys",
};

// GROCERY
const groceryMap = {
  fruits: "fruits & vegetables",
  vegetables: "fruits & vegetables",
  snacks: "snacks & beverages",
  beverages: "snacks & beverages",
  essentials: "cooking essentials",
  "cooking essentials": "cooking essentials",
  household: "household items",
  "household items": "household items",
  personal: "personal care",
  "personal care": "personal care",
};

// MASTER CATEGORY MAP
const categoryMap = {
  mobiles: mobileMap,
  electronics: electronicsMap,
  fashion: fashionMap,
  "home & kitchen": homeKitchenMap,
  books: bookMap,
  toys: toyMap,
  grocery: groceryMap,
  furniture: homeKitchenMap,
};

// ------------------------------------------------------------
// MASTER NORMALIZER FUNCTION
// ------------------------------------------------------------
function normalizeCategoryAndSub(category, subcategory) {
  const cat = normalize(category);
  let sub = normalize(subcategory);

  if (categoryMap[cat]) {
    sub = categoryMap[cat][sub] || sub;
  }

  return { category: cat, subcategory: sub };
}

// ------------------------------------------------------------
// ADD PRODUCT (ADMIN PANEL)
// ------------------------------------------------------------
router.post("/add", async (req, res) => {
  try {
    console.log("📥 Incoming POST /api/products/add");
    console.log("Payload:", req.body);

    const { category, subcategory } = normalizeCategoryAndSub(
      req.body.category,
      req.body.subcategory
    );

    // Clean price
    let price = req.body.price;
    if (price) {
      price = Number(String(price).replace(/[₹,]/g, ""));
    }

    const newProduct = await Product.create({
      ...req.body,
      category,
      subcategory,
      price,
    });

    res.status(201).json({
      success: true,
      message: "Product added successfully!",
      product: newProduct,
    });
  } catch (err) {
    console.log("❌ Add product error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// ------------------------------------------------------------
// ADD ELECTRONICS DIRECT (PRODUCT CARD FORM)
// ------------------------------------------------------------
router.post("/add-electronics", async (req, res) => {
  try {
    const { subCategory, itemName, description, price, imageUrl } = req.body;

    const mappedSub = electronicsMap[normalize(subCategory)] || normalize(subCategory);
    const numPrice = Number(String(price).replace(/[₹,]/g, ""));

    const saved = await Product.create({
      category: "electronics",
      subcategory: mappedSub,
      name: itemName,
      description,
      price: numPrice,
      image: imageUrl,
      imageUrl,
    });

    res.json({
      message: "📦 Electronic product added!",
      product: saved,
    });
  } catch (err) {
    console.error("❌ /add-electronics ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

// ------------------------------------------------------------
// GET ALL PRODUCTS
// ------------------------------------------------------------
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ success: true, products });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ------------------------------------------------------------
// GET BY CATEGORY (ANY)
// ------------------------------------------------------------
router.get("/:category", async (req, res) => {
  try {
    const category = normalize(req.params.category);

    const data = await Product.find({ category });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ------------------------------------------------------------
// GET BY CATEGORY + SUBCATEGORY (AUTO-MAPPED)
// ------------------------------------------------------------
router.get("/:category/:subcategory", async (req, res) => {
  try {
    const { category, subcategory } = normalizeCategoryAndSub(
      req.params.category,
      req.params.subcategory
    );

    const products = await Product.find({
      category,
      subcategory,
    });

    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

