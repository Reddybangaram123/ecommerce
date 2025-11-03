import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/Mobiles/ProductCard";

export default function Home() {
  // Sample featured products from each category
  const featuredProducts = {
    mobiles: [
      {
        id: 1,
        title: "iPhone 15 Pro",
        price: "₹1,39,999",
        image: "https://m.media-amazon.com/images/I/61HHS0HrjpL._SL1500_.jpg",
      },
      {
        id: 2,
        title: "Samsung Galaxy S24 Ultra",
        price: "₹1,29,999",
        image: "https://m.media-amazon.com/images/I/71RVuBs3q9L._SL1500_.jpg",
      },
    ],
    electronics: [
      {
        id: 301,
        title: "Arduino Uno R3 Board",
        price: "₹899",
        image: "https://m.media-amazon.com/images/I/61CqYq+xwNL._SL1000_.jpg",
      },
      {
        id: 302,
        title: "Raspberry Pi 4 Model B",
        price: "₹5,999",
        image: "https://m.media-amazon.com/images/I/71U9vOB+G-L._SL1500_.jpg",
      },
    ],
    fashion: [
      {
        id: 401,
        title: "Men's Denim Jacket",
        price: "₹1,299",
        image: "https://m.media-amazon.com/images/I/81T2x7KZ0UL._SL1500_.jpg",
      },
      {
        id: 402,
        title: "Women's Kurti Set",
        price: "₹999",
        image: "https://m.media-amazon.com/images/I/71Dq0ZcMdbL._SL1500_.jpg",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
        🏠 Welcome to E-Commerce.in
      </h1>

      {/* --- CATEGORY SECTIONS --- */}
      <div className="space-y-16 px-6 md:px-16">

        {/* Mobiles Section */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">Mobiles</h2>
            <Link
              to="/mobiles"
              className="text-blue-500 hover:underline text-sm font-medium"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.mobiles.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Electronics Section */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">Electronics</h2>
            <Link
              to="/electronics"
              className="text-blue-500 hover:underline text-sm font-medium"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.electronics.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Fashion Section */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">Fashion</h2>
            <Link
              to="/fashion"
              className="text-blue-500 hover:underline text-sm font-medium"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.fashion.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
