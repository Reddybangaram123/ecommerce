import React from "react";
import { useCart } from "../../context/CartContext";
import axios from "axios";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:scale-105 transform transition duration-300 w-full max-w-sm mx-auto">
      <img
        src={product.image}
        alt={product.title}
        className="h-56 w-full object-contain mb-3 rounded-md"
      />

      <h3 className="font-semibold text-gray-900 text-lg truncate">
        {product.title}
      </h3>
      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
        {product.description}
      </p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-bold text-green-600">{product.price}</span>
        <button
          onClick={async () => {
            try {
              console.log("🔄 Sending product to backend:", {
                subCategory: product.subCategory || "homekitchen",
                itemName: product.itemName || product.title,
                description: product.description,
                price: product.price,
                imageUrl: product.imageUrl || product.image,
              });

              const response = await axios.post("http://localhost:3001/homekitchencategory", {
                subCategory: product.subCategory || "homekitchen",
                itemName: product.itemName || product.title,
                description: product.description,
                price: product.price,
                imageUrl: product.imageUrl || product.image,
              });

              console.log("✅ Backend response:", response.data);
              console.log(response.data.message);
              addToCart(product);
            } catch (err) {
              console.error("❌ Error adding product to MongoDB:", err);
              if (err.response) {
                // Server responded with error status
                console.error("❌ Server error:", err.response.status, err.response.data);
                alert(`Failed to add to cart: ${err.response.data?.error || err.response.statusText}`);
              } else if (err.request) {
                // Request was made but no response received
                console.error("❌ No response from server. Is the backend running on port 3001?");
                alert("Failed to connect to server. Please make sure the backend server is running on port 3001.");
              } else {
                // Something else happened
                console.error("❌ Error:", err.message);
                alert(`Error: ${err.message}`);
              }
              // Still add to cart locally even if backend fails
              addToCart(product);
            }
          }}
          className="
              bg-yellow-400 hover:bg-yellow-500 text-gray-900 
              px-2 sm:px-3 py-1 rounded-md font-semibold 
              text-xs sm:text-sm md:text-base transition-all duration-300
            "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
