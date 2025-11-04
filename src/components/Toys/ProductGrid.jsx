import React from "react";
import ProductCard from "./ProductCard";

const toysData = {
  kids: [
    {
      id: 401,
      title: "LEGO Classic Brick Set (500 pcs)",
      description: "Creative building set for kids aged 4+, promotes imagination.",
      price: "₹2,499",
      image: "https://www.lego.com/cdn/cs/set/assets/bltdec2ef6c0b99515a/11038_Box1_v39.png?fit=bounds&format=jpg&quality=80&width=1500&height=1500&dpr=1",
    },
    {
      id: 402,
      title: "Barbie Dream Doll",
      description: "Stylish Barbie doll with accessories and modern outfit.",
      price: "₹1,099",
      image: "https://th.bing.com/th/id/OIP.M9cf7cU2CuY8e3sQA4N9GgHaHa?w=183&h=183&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    },
  ],

  educational: [
    {
      id: 403,
      title: "Smartivity STEM Educational Kit",
      description: "DIY mechanical toy that teaches STEM concepts through fun.",
      price: "₹1,299",
      image: "https://i.ebayimg.com/images/g/A6AAAOSw2ZJk6H8k/s-l1600.jpg",
    },
    {
      id: 404,
      title: "Funskool Abacus Toy",
      description: "Colorful wooden abacus — enhances counting and math skills.",
      price: "₹499",
      image: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/18065068a.webp",
    },
  ],

  electronic: [
    {
      id: 405,
      title: "Remote Control Car",
      description: "Rechargeable RC car with high speed and LED lights.",
      price: "₹1,999",
      image: "https://m.media-amazon.com/images/I/81ap+We87nL.jpg",
    },
    {
      id: 406,
      title: "Drone with HD Camera",
      description: "Mini drone for beginners — WiFi FPV and 360° flips.",
      price: "₹3,999",
      image: "https://cdn.mos.cms.futurecdn.net/XrmDsQTYQavPH2yR36LfbG-1200-80.jpg",
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
