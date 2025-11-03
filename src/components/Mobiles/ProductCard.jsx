import React from "react";
import { useCart } from "../../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div
      className="
        bg-white shadow-md rounded-xl p-4
        hover:scale-[1.03] transform transition duration-300
        w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto flex flex-col
      "
    >
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="
          h-36 sm:h-44 md:h-48 lg:h-56 xl:h-60 
          w-full object-contain mb-3 rounded-md
        "
      />

      {/* Title */}
      <h3
        className="
          font-semibold text-gray-900 
          text-sm sm:text-base md:text-lg 
          truncate
        "
      >
        {product.title}
      </h3>

      {/* Description */}
      <p
        className="
          text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2
        "
      >
        {product.description}
      </p>

      {/* Price + Add to Cart Button */}
      <div className="flex justify-between items-center mt-4">
        <span
          className="
            text-base sm:text-lg md:text-xl font-bold text-green-600
          "
        >
          {product.price}
        </span>

        <button
          onClick={() => addToCart(product)}
          className="
            bg-yellow-400 hover:bg-yellow-500 
            text-gray-900 px-2 sm:px-3 py-1 sm:py-2 
            rounded-md font-semibold 
            text-xs sm:text-sm md:text-base 
            transition-all duration-300
          "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
