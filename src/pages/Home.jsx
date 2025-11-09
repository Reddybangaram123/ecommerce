import React from "react";
import ProductGrid from "../components/ProductGrid";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="text-center py-10 bg-[#232f3e] text-white">
        <h1 className="text-3xl md:text-4xl font-bold">Welcome to E-Commerce.in</h1>
        <p className="mt-2 text-gray-300 text-sm md:text-base">
          Explore the latest products in every category
        </p>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-semibold text-center mb-6 text-[#febd69]">
          Featured Products
        </h2>
        <ProductGrid />
      </section>
    </div>
  );
}
