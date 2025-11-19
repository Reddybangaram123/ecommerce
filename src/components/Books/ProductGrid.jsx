import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  const { type } = useParams(); // reads /books/:type when present
  const [backendBooks, setBackendBooks] = useState({}); // grouped by subcategory
  const [loading, setLoading] = useState(false);

  // helper to lowercase & trim
  const norm = (s) => (s ? String(s).trim().toLowerCase() : "");

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        // If a type is in URL, fetch only that subcategory
        if (type) {
          const sub = norm(type);
          // call backend endpoint that accepts /api/products/books/:subcategory
          const res = await fetch(`http://localhost:3001/api/products/books/${sub}`);
          if (!res.ok) throw new Error("Failed to fetch subcategory");
          const data = await res.json(); // array
          const grouped = {};
          grouped[sub] = data.map((item) => ({
            id: item._id,
            title: item.name || item.title,
            description: item.description || "",
            price: item.price ? `₹${item.price}` : item.price,
            image: item.image || "",
          }));
          setBackendBooks(grouped);
        } else {
          // fetch all books
          const res = await fetch("http://localhost:3001/api/products/books");
          if (!res.ok) throw new Error("Failed to fetch books");
          const data = await res.json(); // array
          const grouped = {};
          data.forEach((item) => {
            const sub = norm(item.subcategory) || "other";
            if (!grouped[sub]) grouped[sub] = [];
            grouped[sub].push({
              id: item._id,
              title: item.name || item.title,
              description: item.description || "",
              price: item.price ? `₹${item.price}` : item.price,
              image: item.image || "",
            });
          });
          setBackendBooks(grouped);
        }
      } catch (err) {
        console.warn("Books fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [type]);

  // merge static + backend data (preserve existing static data keys)
  const finalBooks = {};
  const allKeys = new Set([...Object.keys(booksData), ...Object.keys(backendBooks)]);

  allKeys.forEach((key) => {
    finalBooks[key] = [
      ...(booksData[key] || []),
      ...(backendBooks[key] || []),
    ];
  });

  const categoriesToShow =
    category === "all" ? Array.from(allKeys) : [category];

  return (
    <div className="w-full flex flex-col items-center">
      {loading && <p className="text-center py-4">Loading books…</p>}
      {categoriesToShow.map((key) => (
        <section key={key} className="w-full mt-10">
          <h2 className="text-2xl font-semibold text-center mb-4 text-[#febd69] capitalize">
            {key.replace("-", " ")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
            {finalBooks[key]?.length ? (
              finalBooks[key].map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="text-gray-500 italic">No products found.</p>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
