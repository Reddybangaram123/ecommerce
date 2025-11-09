import React from "react";
import ProductGrid from "../components/Electronics/ProductGrid";

export default function Electronics() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <h2 className="text-3xl text-center font-semibold py-6 text-[#febd69]">
        Electronics
      </h2>
      <ProductGrid />
    </div>
  );
}
