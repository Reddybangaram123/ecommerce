import express from "express";
import Cart from "../models/Cart.js";

const router = express.Router();

// ✅ Add item to cart
router.post("/", async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const cartItem = new Cart({ productId, quantity });
    const savedItem = await cartItem.save();

    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ Get all cart items
router.get("/", async (req, res) => {
  try {
    const cartItems = await Cart.find().populate("productId");
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
