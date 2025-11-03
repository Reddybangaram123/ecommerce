import React from "react";
import ProductGrid from "../components/Electronics/ProductGrid";
import ProductCard from "../components/Electronics/ProductCard";

export default function Electronics() {
  const electronicProducts = [

  ];

  return (
    <div className="text-center mt-10">
      <ProductGrid>
        {electronicProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </ProductGrid>
    </div>
  );
}
