import React from "react";
import ProductCard from "./ProductCard";

const groceryData = {
  fruits: [
    {
      id: 801,
      title: "Fresh Bananas (1 Dozen)",
      description: "Naturally ripened and rich in potassium.",
      price: "₹60",
      image: "https://m.media-amazon.com/images/I/71pT+Xiz1yL._SL1500_.jpg",
    },
    {
      id: 802,
      title: "Washington Apples (1kg)",
      description: "Crisp and juicy imported apples.",
      price: "₹220",
      image: "https://m.media-amazon.com/images/I/71bV0qWJtLL._SL1500_.jpg",
    },
  ],
  vegetables: [
    {
      id: 803,
      title: "Fresh Tomatoes (1kg)",
      description: "Farm-fresh red tomatoes, rich in Vitamin C.",
      price: "₹45",
      image: "https://m.media-amazon.com/images/I/71bQKj8h1BL._SL1500_.jpg",
    },
    {
      id: 804,
      title: "Carrots (1kg)",
      description: "Sweet and crunchy carrots, perfect for salads.",
      price: "₹40",
      image: "https://m.media-amazon.com/images/I/61gMROz5aHL._SL1500_.jpg",
    },
  ],
  beverages: [
    {
      id: 805,
      title: "Tropicana Orange Juice (1L)",
      description: "Refreshing orange juice packed with Vitamin C.",
      price: "₹110",
      image: "https://m.media-amazon.com/images/I/61h6tRrTTuL._SL1500_.jpg",
    },
    {
      id: 806,
      title: "Coca-Cola (2L)",
      description: "Classic cola soft drink to refresh your day.",
      price: "₹90",
      image: "https://m.media-amazon.com/images/I/61E+Nq+VdQL._SL1500_.jpg",
    },
  ],
};

export default function ProductGrid({ category = "all" }) {
  const categoriesToShow =
    category === "all" ? Object.keys(groceryData) : [category];

  return (
    <div className="w-full flex flex-col items-center">
      {categoriesToShow.map((key) => (
        <section key={key} className="w-full mt-10">
          <h2 className="text-2xl font-semibold text-center mb-4 text-[#febd69] capitalize">
            {key}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
            {groceryData[key]?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
