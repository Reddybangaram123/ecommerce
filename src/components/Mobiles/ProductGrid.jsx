import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const mobileProducts = [
  // 🍎 iPhones
  {
    id: 1,
    title: "iPhone 15 Pro",
    price: "₹1,39,999",
    image: "https://m.media-amazon.com/images/I/61HHS0HrjpL._SL1500_.jpg",
    description: "Apple A17 Pro chip, titanium body, and 48MP triple camera.",
    type: "iphone",
  },

  // 🤖 Android Phones
  {
    id: 2,
    title: "Samsung Galaxy S24 Ultra",
    price: "₹1,29,999",
    image: "https://m.media-amazon.com/images/I/71RVuBs3q9L._SL1500_.jpg",
    description: "Dynamic AMOLED 2X display, Snapdragon 8 Gen 3, 200MP camera.",
    type: "android",
  },
  {
    id: 3,
    title: "OnePlus 12",
    price: "₹69,999",
    image: "https://m.media-amazon.com/images/I/61nxQ62qglL._SL1500_.jpg",
    description: "Snapdragon 8 Gen 3, 120Hz AMOLED, and 5400mAh battery.",
    type: "android",
  },
  {
    id: 4,
    title: "Google Pixel 8 Pro",
    price: "₹1,06,999",
    image: "https://m.media-amazon.com/images/I/71d7rfSl0wL._SL1500_.jpg",
    description: "Tensor G3 processor, AI photography, and 120Hz LTPO OLED.",
    type: "android",
  },
  {
    id: 5,
    title: "Redmi Note 13 Pro+ 5G",
    price: "₹29,999",
    image: "https://m.media-amazon.com/images/I/71E5zB1qbIL._SL1500_.jpg",
    description: "200MP camera, curved AMOLED display, 120W HyperCharge.",
    type: "android",
  },
  {
    id: 6,
    title: "Realme GT 6 Pro",
    price: "₹39,999",
    image: "https://m.media-amazon.com/images/I/718p48pvjPL.jpg",
    description: "Flagship performance with AI cooling and HDR display.",
    type: "android",
  },
  {
    id: 7,
    title: "Nothing Phone (2)",
    price: "₹44,999",
    image:
      "https://www.lowyat.net/wp-content/uploads/2023/07/Nothing-Phone-2-now-official-3.jpg",
    description: "Transparent design, Glyph lights, Snapdragon 8+ Gen 1.",
    type: "android",
  },
  {
    id: 8,
    title: "iQOO 12 5G",
    price: "₹54,999",
    image: "https://m.media-amazon.com/images/I/619lW2YtVhL.jpg",
    description: "Snapdragon 8 Gen 3, 144Hz display, 120W fast charging.",
    type: "android",
  },
];

export default function ProductGrid() {
  const { type } = useParams(); // iphone / android / undefined

  const filteredProducts = type
    ? mobileProducts.filter((product) => product.type === type)
    : mobileProducts;

  const heading =
    type === "iphone"
      ? "iPhone Mobiles"
      : type === "android"
      ? "Android Mobiles"
      : "All Mobiles";

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-3xl font-semibold text-[#febd69] text-center mt-8 mb-4">
        {heading}
      </h1>

      <div
        className="
          grid
          grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
          gap-6 sm:gap-8
          px-4 sm:px-6 md:px-10 py-10
          w-full max-w-screen-2xl
        "
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
