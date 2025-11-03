import React from "react";
import ProductCard from "./ProductCard";

const groceryProducts = [
  {
    id: 901,
    title: "India Gate Basmati Rice (5kg)",
    description:
      "Premium long-grain rice with rich aroma and fluffy texture, perfect for biryanis.",
    price: "₹799",
    image: "https://m.media-amazon.com/images/I/71GBvHiwCJL._SL1500_.jpg",
  },
  {
    id: 902,
    title: "Tata Tea Gold (1kg)",
    description:
      "Strong aroma and rich taste made from handpicked tea leaves.",
    price: "₹499",
    image: "https://tse4.mm.bing.net/th/id/OIP.bHKuNn0kwbr05-i-V8FuSAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 903,
    title: "Aashirvaad Atta (10kg)",
    description:
      "Made from 100% whole wheat grains for soft and fluffy rotis.",
    price: "₹599",
    image: "https://tse1.mm.bing.net/th/id/OIP.pxpPYoH8IzZ8pQ2Ac2kScAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 904,
    title: "Fortune Sunlite Refined Oil (5L)",
    description:
      "Healthy and light refined sunflower oil, perfect for daily cooking.",
    price: "₹749",
    image: "https://tse1.mm.bing.net/th/id/OIP.XVlF8bOb3fkrgT1x6l8mqgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 905,
    title: "Tata Salt (1kg)",
    description:
      "Vacuum-evaporated iodized salt ensuring purity and essential minerals.",
    price: "₹25",
    image: "https://m.media-amazon.com/images/I/614mm2hYHyL._SL1000_.jpg",
  },
  {
    id: 906,
    title: "Nescafé Classic Coffee (500g)",
    description:
      "Rich aroma and full-bodied flavor made from 100% pure coffee beans.",
    price: "₹549",
    image: "https://tse2.mm.bing.net/th/id/OIP.mFDI7LIQAb8don2llkUcBwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 907,
    title: "Maggi 2-Minute Noodles (12 Pack)",
    description:
      "Instant classic noodles with masala flavor, ready in 2 minutes.",
    price: "₹120",
    image: "https://tse1.mm.bing.net/th/id/OIP.bD_EjcouOT7UBd9972D8JwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 908,
    title: "Amul Butter (500g)",
    description:
      "Delicious and creamy butter made from fresh cream — perfect for breakfast.",
    price: "₹280",
    image: "https://tse1.mm.bing.net/th/id/OIP.e6uCBHYndvGoe_A3RVooZAHaFH?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

export default function ProductGrid() {
  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 py-10 w-full max-w-screen-2xl">
        {groceryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
