import React from "react";
import ProductCard from "./ProductCard";

const groceryData = {
  fruits: [
    {
      id: 501,
      title: "Fresh Apples (1kg)",
      description: "Crisp and juicy red apples — naturally sweet and healthy.",
      price: "₹149",
      image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/11525/0a5ae820-7051-4495-bcca-61bf02897472.jpg",
    },
    {
      id: 502,
      title: "Bananas (1 Dozen)",
      description: "Farm-fresh bananas rich in potassium and fiber.",
      price: "₹59",
      image: "https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG.jpg",
    },
  ],

  vegetables: [
    {
      id: 503,
      title: "Fresh Tomatoes (1kg)",
      description: "Locally grown juicy tomatoes perfect for curries and salads.",
      price: "₹49",
      image: "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-grow-tomatoes-hero.jpg",
    },
    {
      id: 504,
      title: "Organic Carrots (500g)",
      description: "Crunchy carrots rich in Vitamin A and natural sweetness.",
      price: "₹39",
      image: "https://tse3.mm.bing.net/th/id/OIP.yPrYax2aPfa8Le0J4CyofQHaHM?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ],

  beverages: [
    {
      id: 505,
      title: "Tropicana Mixed Fruit Juice (1L)",
      description: "Refreshing fruit blend — made with 100% real fruit juice.",
      price: "₹99",
      image: "https://m.media-amazon.com/images/I/714kIox4UzL._SL1500_.jpg",
    },
    {
      id: 506,
      title: "Coca-Cola Soft Drink (2L)",
      description: "Classic cola taste — perfect for parties and gatherings.",
      price: "₹95",
      image: "https://i5.walmartimages.com/asr/ba4cca23-bffa-4b06-9eeb-dea618383cae.f07705a0bdb15a233efe8054654b89a0.jpeg",
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
