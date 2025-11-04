import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const products = [
    {
      id: 1,
      title: "Apple iPhone 15",
      price: 78999,
      description: "Dynamic Island, A16 Bionic chip, and all-day battery life.",
      image: "https://m.media-amazon.com/images/I/71d7rfSl0wL._SL1500_.jpg",
    },
    {
      id: 2,
      title: "Sony WH-1000XM5 Headphones",
      price: 29999,
      description: "Industry-leading noise cancellation and premium comfort.",
      image: "https://m.media-amazon.com/images/I/61+Pzrr3fZL._SL1500_.jpg",
    },
    {
      id: 3,
      title: "Apple MacBook Air M2",
      price: 114999,
      description: "Powerful, lightweight laptop with the M2 chip.",
      image: "https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg",
    },
    
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 sm:p-6 md:p-8 w-full">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
