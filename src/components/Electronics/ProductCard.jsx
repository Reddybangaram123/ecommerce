import React from "react";
import { useCart } from "../../context/CartContext";
import axios from "axios";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const apiUrl = "http://localhost:3001/add-electronics"; // Correct backend port

    // Normalize data for backend
    const normalizedProduct = {
      category: "Electronics",

      subCategory:
        product.subcategory ||
        product.subCategory ||
        product.category ||
        "General",

      itemName: product.itemName || product.title || "Unnamed Product",

      description: product.description || "No description available.",

      imageUrl: product.imageUrl || product.image || "",

      price:
        typeof product.price === "number"
          ? product.price
          : Number(String(product.price).replace(/[^0-9]/g, "")),
    };

    axios
      .post(apiUrl, normalizedProduct)
      .then((res) => {
        console.log("✅ Product stored in DB:", res.data.message);
        addToCart(product);
      })
      .catch((err) => console.error("❌ Error adding electronics:", err));
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:scale-[1.03] transition duration-300 max-w-xs mx-auto flex flex-col">
      <img
        src={product.imageUrl || product.image}
        alt={product.itemName || product.title}
        className="h-48 w-full object-contain mb-3 rounded-lg"
        onError={(e) => (e.target.src = "/no-image.png")}
      />

      <h3 className="font-semibold text-gray-900 text-lg truncate">
        {product.itemName || product.title}
      </h3>

      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
        {product.description}
      </p>

      <div className="flex justify-between items-center mt-3">
        <span className="text-xl font-bold text-green-600">
          {typeof product.price === "number"
            ? `₹${product.price}`
            : product.price}
        </span>

        <button
          onClick={handleAddToCart}
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-3 py-1 rounded-md font-semibold text-sm transition-all duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
