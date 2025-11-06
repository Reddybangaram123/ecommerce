import React from "react";
import axios from "axios";
import { useCart } from "../../context/CartContext";

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
          onClick={() => {
            axios
              .post("http://localhost:3001/add-toys", {
                subCategory: product.subCategory || "Toys",
                itemName: product.itemName || product.title,
                description: product.description,
                price: product.price,
                imageUrl: product.imageUrl || product.image,
              })
              .then((res) => {
                console.log(res.data.message);
                addToCart(product);
              })
              .catch((err) => console.error("❌ Error adding product:", err));
          }}
          className="
              bg-yellow-400 hover:bg-yellow-500 text-gray-900 
              px-2 sm:px-3 py-1 rounded-md font-semibold 
              text-xs sm:text-sm md:text-base transition-all duration-300
            "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
