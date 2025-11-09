import React from "react";
import ProductGrid from "../components/Mobiles/ProductGrid";

export default function Mobiles() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <h2 className="text-3xl text-center font-semibold py-6 text-[#febd69]">
        Mobiles
      </h2>
      <ProductGrid />
    </div>
  );
}
