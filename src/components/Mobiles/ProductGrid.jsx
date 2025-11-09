import React from "react";
import ProductCard from "./ProductCard";

const mobilesData = {
  iphone: [
    {
      id: 1001,
      title: "Apple iPhone 15 Pro Max",
      description: "A17 Pro chip, Titanium body, 48MP camera, 120Hz display.",
      price: "₹1,49,999",
      image: "https://m.media-amazon.com/images/I/81Os1SDWpcL._SL1500_.jpg",
    },
    {
      id: 1002,
      title: "Apple iPhone 14",
      description: "A15 Bionic, Super Retina XDR Display, 12MP dual camera.",
      price: "₹69,999",
      image: "https://m.media-amazon.com/images/I/71d7rfSl0wL._SL1500_.jpg",
    },
  ],
  android: [
    {
      id: 1003,
      title: "Samsung Galaxy S23 Ultra",
      description: "200MP camera, Snapdragon 8 Gen 2, 120Hz AMOLED display.",
      price: "₹1,24,999",
      image: "https://m.media-amazon.com/images/I/61j99uUfXNL._SL1500_.jpg",
    },
    {
      id: 1004,
      title: "OnePlus 12",
      description: "Snapdragon 8 Gen 3, 50MP main camera, 120Hz LTPO OLED.",
      price: "₹64,999",
      image: "https://m.media-amazon.com/images/I/71JpM3rGOSL._SL1500_.jpg",
    },
    {
      id: 1005,
      title: "Google Pixel 8 Pro",
      description: "Tensor G3 chip, best-in-class AI camera, pure Android 14.",
      price: "₹1,06,999",
      image: "https://m.media-amazon.com/images/I/61Qxw0O0bWL._SL1500_.jpg",
    },
  ],
};

export default function ProductGrid({ category = "all" }) {
  const categoriesToShow =
    category === "all" ? Object.keys(mobilesData) : [category];

  return (
    <div className="w-full flex flex-col items-center">
      {categoriesToShow.map((key) => (
        <section key={key} className="w-full mt-10">
          <h2 className="text-2xl font-semibold text-center mb-4 text-[#febd69] capitalize">
            {key}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
            {mobilesData[key]?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
