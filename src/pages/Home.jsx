import React from "react";
import ProductGrid from "../components/ProductGrid";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen w-full">
      {/* Banner */}
      <div className="relative w-full">
        <img
          src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
          alt="Amazon Banner"
          className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h2 className="text-white text-xl sm:text-2xl md:text-4xl font-bold text-center px-3">
            Welcome to Amazon Clone
          </h2>
        </div>
      </div>

      {/* Product Section */}
      <ProductGrid />
    </div>
  );
}
