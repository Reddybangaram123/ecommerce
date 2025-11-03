import React from "react";
import ProductCard from "./ProductCard";

const bookProducts = [
  {
    id: 501,
    title: "Atomic Habits",
    description:
      "An easy & proven way to build good habits and break bad ones by James Clear.",
    price: "₹499",
    image: "https://m.media-amazon.com/images/I/81YkqyaFVEL._SL1500_.jpg",
  },
  {
    id: 502,
    title: "The Psychology of Money",
    description:
      "Timeless lessons on wealth, greed, and happiness by Morgan Housel.",
    price: "₹349",
    image: "https://m.media-amazon.com/images/I/71g2ednj0JL._SL1500_.jpg",
  },
  {
    id: 503,
    title: "Rich Dad Poor Dad",
    description:
      "The #1 personal finance book of all time by Robert T. Kiyosaki.",
    price: "₹399",
    image: "https://m.media-amazon.com/images/I/81bsw6fnUiL._SL1500_.jpg",
  },
  {
    id: 504,
    title: "Think and Grow Rich",
    description:
      "Classic motivational book on success and financial achievement by Napoleon Hill.",
    price: "₹299",
    image: "https://m.media-amazon.com/images/I/71UypkUjStL._SL1500_.jpg",
  },
  {
    id: 505,
    title: "The Subtle Art of Not Giving a F*ck",
    description:
      "A counterintuitive approach to living a good life by Mark Manson.",
    price: "₹449",
    image: "https://m.media-amazon.com/images/I/71QKQ9mwV7L._SL1500_.jpg",
  },
  {
    id: 506,
    title: "Ikigai: The Japanese Secret to a Long and Happy Life",
    description:
      "Find purpose and joy in daily living with this international bestseller.",
    price: "₹299",
    image: "https://m.media-amazon.com/images/I/81l3rZK4lnL._SL1500_.jpg",
  },
  {
    id: 507,
    title: "Do Epic Shit",
    description:
      "Life and career insights by Ankur Warikoo, one of India’s top creators.",
    price: "₹399",
    image: "https://m.media-amazon.com/images/I/71j8damPo5L._SL1500_.jpg",
  },
  {
    id: 508,
    title: "Deep Work",
    description:
      "Rules for focused success in a distracted world by Cal Newport.",
    price: "₹499",
    image: "https://m.media-amazon.com/images/I/71din4TLubL.jpg",
  },
];

export default function ProductGrid() {
  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 py-10 w-full max-w-screen-2xl">
        {bookProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
