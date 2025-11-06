import React from "react";
import ProductCard from "./ProductCard";

const toysData = {
  kids: [
    {
      id: 1101,
      title: "Lego Classic Bricks Set (500 pcs)",
      description: "Colorful Lego bricks for kids aged 5+.",
      price: "₹2,499",
      image: "https://m.media-amazon.com/images/I/81aWz7PxDUL._SL1500_.jpg",
    },
    {
      id: 1102,
      title: "Barbie Dreamhouse Doll Set",
      description: "Multi-floor Barbie house with furniture and lights.",
      price: "₹9,999",
      image: "https://m.media-amazon.com/images/I/81Mi2F6gMPL._SL1500_.jpg",
    },
  ],
  educational: [
    {
      id: 1103,
      title: "STEM Robot Building Kit",
      description: "DIY educational robot kit for hands-on learning.",
      price: "₹1,899",
      image: "https://m.media-amazon.com/images/I/71l6fH+2mwL._SL1500_.jpg",
    },
    {
      id: 1104,
      title: "Magnetic Building Blocks Set",
      description: "Enhances creativity and problem-solving skills.",
      price: "₹1,299",
      image: "https://m.media-amazon.com/images/I/81CQeAYRseL._SL1500_.jpg",
    },
  ],
  electronic: [
    {
      id: 1105,
      title: "Remote Control Car",
      description: "High-speed racing car with rechargeable battery.",
      price: "₹2,499",
      image: "https://m.media-amazon.com/images/I/71dM1f4a4NL._SL1500_.jpg",
    },
    {
      id: 1106,
      title: "RC Drone (Mini Quad)",
      description: "Compact drone with 360° flip and altitude hold.",
      price: "₹3,999",
      image: "https://m.media-amazon.com/images/I/61oFzGdfkZL._SL1500_.jpg",
    },
  ],
};

export default function ProductGrid({ category = "all" }) {
  const categoriesToShow =
    category === "all" ? Object.keys(toysData) : [category];

  return (
    <div className="w-full flex flex-col items-center">
      {categoriesToShow.map((key) => (
        <section key={key} className="w-full mt-10">
          <h2 className="text-2xl font-semibold text-center mb-4 text-[#febd69] capitalize">
            {key}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
            {toysData[key]?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
