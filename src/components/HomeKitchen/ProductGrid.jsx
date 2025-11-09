import React from "react";
import ProductCard from "./ProductCard";

const homeKitchenData = {
  appliances: [
    {
      id: 901,
      title: "Philips Mixer Grinder (750W)",
      description: "Powerful motor, stainless steel jars, and pulse mode.",
      price: "₹4,299",
      image: "https://m.media-amazon.com/images/I/71etO3eRBML._SL1500_.jpg",
    },
    {
      id: 902,
      title: "Prestige Electric Kettle (1.5L)",
      description: "Auto shut-off, stainless steel body, fast boiling.",
      price: "₹1,099",
      image: "https://m.media-amazon.com/images/I/61bkkYF+YxL._SL1500_.jpg",
    },
  ],
  decor: [
    {
      id: 903,
      title: "Wall Art Frame Set",
      description: "Set of 3 modern abstract wall paintings.",
      price: "₹1,499",
      image: "https://m.media-amazon.com/images/I/71RvkMXCq4L._SL1500_.jpg",
    },
    {
      id: 904,
      title: "LED String Lights (20m)",
      description: "Warm white fairy lights for living room decor.",
      price: "₹699",
      image: "https://m.media-amazon.com/images/I/81D5R1L3A1L._SL1500_.jpg",
    },
  ],
  utensils: [
    {
      id: 905,
      title: "Non-Stick Cookware Set (5 pcs)",
      description: "Durable non-stick coating, compatible with gas stoves.",
      price: "₹2,999",
      image: "https://m.media-amazon.com/images/I/71zj5FsybwL._SL1500_.jpg",
    },
    {
      id: 906,
      title: "Stainless Steel Dinner Set (24 pcs)",
      description: "Mirror finish steel plates, bowls, and glasses.",
      price: "₹1,899",
      image: "https://m.media-amazon.com/images/I/81WUKFv4X1L._SL1500_.jpg",
    },
  ],
};

export default function ProductGrid({ category = "all" }) {
  const categoriesToShow =
    category === "all" ? Object.keys(homeKitchenData) : [category];

  return (
    <div className="w-full flex flex-col items-center">
      {categoriesToShow.map((key) => (
        <section key={key} className="w-full mt-10">
          <h2 className="text-2xl font-semibold text-center mb-4 text-[#febd69] capitalize">
            {key.replace("-", " ")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
            {homeKitchenData[key]?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
