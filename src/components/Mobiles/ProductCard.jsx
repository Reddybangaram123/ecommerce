import React from "react";
import { useCart } from "../../context/CartContext";
import axios from "axios";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = async () => {
    try {
      // ✅ Always send proper data to backend
      const payload = {
        title: product.title || "Untitled Product",
        description: product.description || "No description available",
        price: Number(product.price) || 0,
        image:
          product.image && product.image.trim() !== ""
            ? product.image
            : "https://placehold.co/300x300?text=No+Image",
      };

      const res = await axios.post(
        "http://localhost:5000/api/products/add",
        payload
      );

      console.log("✅ Product added successfully:", res.data);
      addToCart(product);
    } catch (err) {
      console.error("❌ Error adding product:", err.response?.data || err.message);
    }
  };

  return (
    <div
      className="bg-white shadow-md rounded-xl p-4 hover:scale-[1.03] transform transition duration-300
      w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto flex flex-col"
    >
      {/* ✅ Product Image with working fallback */}
      <img
        src={
          product.image && product.image.trim() !== ""
            ? product.image
            : "https://placehold.co/300x300?text=No+Image"
        }
        alt={product.title}
        className="h-36 sm:h-44 md:h-48 lg:h-56 xl:h-60 w-full object-contain mb-3 rounded-md"
        onError={(e) =>
          (e.target.src = "https://placehold.co/300x300?text=No+Image")
        }
      />

      {/* ✅ Title */}
      <h3 className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg truncate">
        {product.title || "Untitled Product"}
      </h3>

      {/* ✅ Description */}
      <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2">
        {product.description || "No description available"}
      </p>

      {/* ✅ Price + Button */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-base sm:text-lg md:text-xl font-bold text-green-600">
          ₹{product.price || 0}
        </span>

        <button
          onClick={handleAddToCart}
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 
            px-3 py-1 rounded-md font-semibold 
            text-sm transition-all duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
