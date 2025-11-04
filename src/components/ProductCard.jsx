import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:scale-105 transform transition duration-300 w-full max-w-sm mx-auto">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain mb-3"
      />
      <h3 className="font-semibold text-gray-900 text-lg truncate">{product.title}</h3>
      <p className="text-sm text-gray-600 mt-1 line-clamp-2">{product.description}</p>
      <div className="flex justify-between items-center mt-3">
        <span className="text-xl font-bold text-green-600">₹{product.price}</span>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-3 py-1 rounded-md font-semibold text-sm md:text-base">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
