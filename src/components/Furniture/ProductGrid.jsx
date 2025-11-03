import React from "react";
import ProductCard from "./ProductCard";

const furnitureProducts = [
  {
    id: 801,
    title: "Wooden Study Table",
    description: "Ergonomic and durable wooden table ideal for study or office use.",
    price: "₹6,999",
    image: "https://m.media-amazon.com/images/I/611P09KXYDL._SL1104_.jpg",
  },
  {
    id: 802,
    title: "Modern Sofa Set (3+1+1)",
    description: "Comfortable fabric sofa set with contemporary design and soft cushions.",
    price: "₹24,999",
    image: "https://mysleepyhead.com/media/catalog/product/s/o/sofa_3_1_1_seater_online.jpg",
  },
  {
    id: 803,
    title: "King Size Bed with Storage",
    description: "Spacious wooden bed with hydraulic storage and elegant finish.",
    price: "₹32,499",
    image: "https://m.media-amazon.com/images/I/91povv8zq9L._AC_SL1500_.jpg",
  },
  {
    id: 804,
    title: "Office Chair (Ergonomic Mesh)",
    description: "High-back mesh chair with adjustable height and lumbar support.",
    price: "₹7,999",
    image: "https://tse3.mm.bing.net/th/id/OIP.kSAs8anFpG7UHFpxhf2PmgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 805,
    title: "Wooden Wardrobe (3 Door)",
    description: "Spacious wardrobe with mirror and multiple shelves for clothes and storage.",
    price: "₹18,999",
    image: "https://images.woodenstreet.de/image/cache/data/wardrobe/montana-3-door-wardrobe/honey/updated/1-750x650.jpg",
  },
  {
    id: 806,
    title: "Coffee Table Set",
    description: "Elegant center table with side stools and premium finish.",
    price: "₹4,499",
    image: "https://tse2.mm.bing.net/th/id/OIP.HLfK_s-Vc4YzRNL-IEnK4AHaFG?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 807,
    title: "Bookshelf (5-Tier Wooden Rack)",
    description: "Sturdy and stylish wooden rack ideal for books and decor items.",
    price: "₹3,999",
    image: "https://m.media-amazon.com/images/I/81NL28tmWqL._AC_.jpg",
  },
  {
    id: 808,
    title: "Recliner Chair",
    description: "Single-seater recliner with soft cushioning and manual reclining system.",
    price: "₹14,999",
    image: "https://tse2.mm.bing.net/th/id/OIP.sN3A9VKXXoWkue172q5A7AHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

export default function ProductGrid() {
  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 py-10 w-full max-w-screen-2xl">
        {furnitureProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
