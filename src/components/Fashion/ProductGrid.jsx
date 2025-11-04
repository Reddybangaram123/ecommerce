import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const fashionProducts = [
  {
    id: 401,
    title: "Men's Casual Cotton Shirt",
    category: "men",
    description: "Slim fit, breathable cotton fabric — perfect for daily wear.",
    price: "₹1,299",
    image: "https://m.media-amazon.com/images/I/71gfw61j8HL._AC_SL1500_.jpg",
  },
  {
    id: 402,
    title: "Women's Floral Maxi Dress",
    category: "women",
    description: "Lightweight summer maxi with a beautiful floral print.",
    price: "₹1,799",
    image: "https://images-na.ssl-images-amazon.com/images/I/81nuWwh9PnL.jpg",
  },
  {
    id: 403,
    title: "Men’s Regular Fit Jeans",
    category: "men",
    description: "Classic blue denim with stretch comfort.",
    price: "₹1,499",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.Ke016z8Mmzyrr5vY-gM__QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 404,
    title: "Women's Handbag Combo",
    category: "women",
    description: "Trendy PU leather handbag, sling, and pouch combo.",
    price: "₹1,099",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/10/JE/CY/KF/157706429/hercraft-women-handbag-combo-set-of-3-1000x1000.jpg",
  },
  {
    id: 405,
    title: "Men’s Sports Running Shoes",
    category: "men",
    description: "Lightweight and durable sole for all-day comfort.",
    price: "₹1,999",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.hIOcZ2ttMd35hpxp7sYElQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 406,
    title: "Women’s Casual Sneakers",
    category: "women",
    description: "Trendy white sneakers with cushioned insole.",
    price: "₹1,699",
    image:
      "https://tse2.mm.bing.net/th/id/OIP._rSBhczcsblaycZsgWSPJQHaJE?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 407,
    title: "Analog Wrist Watch for Men",
    category: "men",
    description: "Classic design with leather strap and quartz movement.",
    price: "₹849",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.XjqWdgNTvW76t7sDEUPy5AHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 408,
    title: "Women’s Designer Earrings",
    category: "women",
    description:
      "Gold-plated stylish earrings with pearl embellishments.",
    price: "₹499",
    image:
      "https://cdn.shopify.com/s/files/1/0028/0320/4142/products/JBRCHFEB8_1_600x.jpg?v=1649398444",
  },
  {
    id: 409,
    title: "Kid’s Cartoon Printed T-Shirt",
    category: "kids",
    description: "Soft cotton T-shirt with fun cartoon print for kids.",
    price: "₹799",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.LqF1lUMX8IqlueEcKWRsxQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 410,
    title: "Kid’s Sneakers",
    category: "kids",
    description: "Lightweight, comfortable sneakers for children.",
    price: "₹999",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.VNYvP1YX2bHBMqJFmLUdBAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

export default function ProductGrid() {
  const { type } = useParams();

  // Filter products by category (men/women/kids)
  const filteredProducts = type
    ? fashionProducts.filter(
        (product) => product.category.toLowerCase() === type.toLowerCase()
      )
    : fashionProducts;

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-2xl font-semibold text-center mt-8">
        {type
          ? `${type.charAt(0).toUpperCase() + type.slice(1)}'s Fashion`
          : "All Fashion Products"}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 py-10 w-full max-w-screen-2xl">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-gray-400 text-center col-span-full">
            No products found in this category.
          </p>
        )}
      </div>
    </div>
  );
}
