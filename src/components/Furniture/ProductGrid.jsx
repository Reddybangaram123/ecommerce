import React from "react";
import ProductCard from "./ProductCard";

const furnitureData = {
  sofa: [
    {
      id: 701,
      title: "L-Shaped Fabric Sofa",
      description: "Spacious 6-seater sofa with high-quality fabric finish.",
      price: "₹28,999",
      image: "https://m.media-amazon.com/images/I/81ZfUO2NizL._SL1500_.jpg",
    },
    {
      id: 702,
      title: "Recliner Sofa Chair",
      description: "Single-seater recliner with plush cushioning and handle.",
      price: "₹15,499",
      image: "https://m.media-amazon.com/images/I/61TT7bIKrHL._SL1500_.jpg",
    },
  ],
  tables: [
    {
      id: 703,
      title: "Wooden Coffee Table",
      description: "Solid sheesham wood table with natural matte finish.",
      price: "₹5,499",
      image: "https://m.media-amazon.com/images/I/81cMtn0T3rL._SL1500_.jpg",
    },
    {
      id: 704,
      title: "Dining Table Set (4 Chairs)",
      description: "Compact dining table set for modern apartments.",
      price: "₹17,999",
      image: "https://m.media-amazon.com/images/I/81a6BPsqIoL._SL1500_.jpg",
    },
  ],
  beds: [
    {
      id: 705,
      title: "Queen Size Bed with Storage",
      description: "Hydraulic lift storage bed, engineered wood build.",
      price: "₹22,999",
      image: "https://m.media-amazon.com/images/I/71JwYJvnZRL._SL1500_.jpg",
    },
    {
      id: 706,
      title: "King Size Wooden Bed",
      description: "Teak finish solid wood bed frame, durable and stylish.",
      price: "₹31,999",
      image: "https://m.media-amazon.com/images/I/81LQh9smq2L._SL1500_.jpg",
    },
  ],
};

export default function ProductGrid({ category = "all" }) {
  const categoriesToShow =
    category === "all" ? Object.keys(furnitureData) : [category];

  return (
    <div className="w-full flex flex-col items-center">
      {categoriesToShow.map((key) => (
        <section key={key} className="w-full mt-10">
          <h2 className="text-2xl font-semibold text-center mb-4 text-[#febd69] capitalize">
            {key}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
            {furnitureData[key]?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
