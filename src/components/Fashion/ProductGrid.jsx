import React from "react";
import ProductCard from "./ProductCard";

const fashionData = {
  men: [
    {
      id: 601,
      title: "Men’s Cotton T-Shirt",
      description: "100% cotton casual wear, available in multiple colors.",
      price: "₹699",
      image: "https://m.media-amazon.com/images/I/71HmyNZ7z9L._UL1500_.jpg",
    },
    {
      id: 602,
      title: "Denim Jeans",
      description: "Slim-fit stretchable jeans, ideal for everyday wear.",
      price: "₹1,199",
      image: "https://m.media-amazon.com/images/I/61s9x4bV6DL._UL1500_.jpg",
    },
  ],
  women: [
    {
      id: 603,
      title: "Women’s Floral Kurti",
      description: "Printed rayon kurti with elegant design and soft fabric.",
      price: "₹849",
      image: "https://m.media-amazon.com/images/I/81PZKfDvhfL._UL1500_.jpg",
    },
    {
      id: 604,
      title: "Saree with Blouse Piece",
      description: "Traditional silk saree for festive occasions.",
      price: "₹1,799",
      image: "https://m.media-amazon.com/images/I/91+Lwv8NwAL._UL1500_.jpg",
    },
  ],
  kids: [
    {
      id: 605,
      title: "Boys Cotton Shorts Set",
      description: "Comfortable T-shirt and shorts combo for kids.",
      price: "₹599",
      image: "https://m.media-amazon.com/images/I/81b1oIV7TqL._UL1500_.jpg",
    },
    {
      id: 606,
      title: "Girls Party Dress",
      description: "Net frock with bow design, perfect for birthdays.",
      price: "₹1,099",
      image: "https://m.media-amazon.com/images/I/71Xo1ZY6Z8L._UL1500_.jpg",
    },
  ],
};

export default function ProductGrid({ category = "all" }) {
  const categoriesToShow =
    category === "all" ? Object.keys(fashionData) : [category];

  return (
    <div className="w-full flex flex-col items-center">
      {categoriesToShow.map((key) => (
        <section key={key} className="w-full mt-10">
          <h2 className="text-2xl font-semibold text-center mb-4 text-[#febd69] capitalize">
            {key}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
            {fashionData[key]?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
