import React from "react";
import ProductCard from "./ProductCard";

const booksData = {
  fiction: [
    {
      id: 301,
      title: "The Alchemist",
      description: "A classic novel by Paulo Coelho about following your dreams.",
      price: "₹399",
      image: "https://m.media-amazon.com/images/I/71aFt4+OTOL._SL1500_.jpg",
    },
    {
      id: 302,
      title: "It Ends With Us",
      description: "A heart-wrenching romantic novel by Colleen Hoover.",
      price: "₹499",
      image: "https://m.media-amazon.com/images/I/81s0B6NYXML._SL1500_.jpg",
    },
  ],

  "non-fiction": [
    {
      id: 303,
      title: "Atomic Habits",
      description: "Build better habits and break bad ones by James Clear.",
      price: "₹549",
      image: "https://m.media-amazon.com/images/I/91bYsX41DVL._SL1500_.jpg",
    },
    {
      id: 304,
      title: "The Psychology of Money",
      description: "Timeless lessons on wealth, greed, and happiness.",
      price: "₹499",
      image: "https://m.media-amazon.com/images/I/81Lb75rUhLL._SL1500_.jpg",
    },
  ],

  academic: [
    {
      id: 305,
      title: "Introduction to Algorithms",
      description: "Comprehensive guide to modern algorithms — MIT Press.",
      price: "₹999",
      image: "https://www.oreilly.com/library/cover/9781836203872/1200w630h/",
    },
    {
      id: 306,
      title: "Engineering Mathematics - I",
      description: "By B.S. Grewal — essential for all engineering students.",
      price: "₹749",
      image: "https://www.schandpublishing.com/uploads/bookimages/schand-books/9789352534616.jpg",
    },
  ],
};

export default function ProductGrid({ category = "all" }) {
  const categoriesToShow =
    category === "all" ? Object.keys(booksData) : [category];

  return (
    <div className="w-full flex flex-col items-center">
      {categoriesToShow.map((key) => (
        <section key={key} className="w-full mt-10">
          <h2 className="text-2xl font-semibold text-center mb-4 text-[#febd69] capitalize">
            {key.replace("-", " ")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
            {booksData[key]?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
