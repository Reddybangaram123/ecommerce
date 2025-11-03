import React from "react";
import ProductGrid from "../components/Mobiles/ProductGrid";
import ProductCard from "../components/Mobiles/ProductCard";

export default function Mobiles() {
  const mobileProducts = [];

  return (
    <div className="text-center mt-10">
      <ProductGrid>
        {mobileProducts.map((m) => (
          <ProductCard key={m.id} product={m} />
        ))}
      </ProductGrid>
    </div>
  );
}
