import React from "react";
import ProductCard from "./ProductCard";

const toyProducts = [
  {
    id: 601,
    title: "LEGO Classic Creative Bricks Set",
    description:
      "Stimulate creativity and building skills with 500+ colorful LEGO pieces.",
    price: "₹2,499",
    image: "https://tse2.mm.bing.net/th/id/OIP.tGx-kwtLz8vNqWRMl6CHYgHaFR?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 602,
    title: "Hot Wheels 10-Car Pack",
    description:
      "Exciting assortment of die-cast cars for collectors and kids alike.",
    price: "₹1,299",
    image: "https://tse4.mm.bing.net/th/id/OIP.h-siAti9W2Ue2zKbKtripgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 603,
    title: "Barbie Dreamtopia Doll",
    description:
      "Beautiful Barbie doll with colorful gown and accessories for imaginative play.",
    price: "₹999",
    image: "https://i.pinimg.com/736x/c8/d8/b0/c8d8b0ad076d4865de7c85f5230cfcb8.jpg",
  },
  {
    id: 604,
    title: "Remote Control Racing Car",
    description:
      "Fast RC car with rechargeable battery and 2.4GHz control system.",
    price: "₹1,799",
    image: "https://www.iharttoys.com/assets/full/KTY-TY0323.jpg?20210309030342",
  },
  {
    id: 605,
    title: "Soft Teddy Bear (3ft)",
    description:
      "Cute and cuddly teddy bear made with ultra-soft plush fabric.",
    price: "₹1,099",
    image: "https://tse3.mm.bing.net/th/id/OIP.w7f3SZC1mJ24t6BSb5Qy4QHaHW?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 606,
    title: "Rubik’s Cube 3x3",
    description:
      "Classic puzzle toy that sharpens problem-solving and memory skills.",
    price: "₹249",
    image: "https://tse4.mm.bing.net/th/id/OIP.4jjUeuCZ5co19JgZRqdKXAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 607,
    title: "Play-Doh Modeling Compound Set (10 Colors)",
    description:
      "Encourage creativity with colorful, non-toxic clay for kids’ craft fun.",
    price: "₹699",
    image: "https://m.media-amazon.com/images/I/81aGbUGajNL._AC_.jpg",
  },
  {
    id: 608,
    title: "UNO Card Game",
    description:
      "The world’s favorite family card game with fun and excitement for everyone.",
    price: "₹349",
    image: "https://tse3.mm.bing.net/th/id/OIP.7dyI-rHlGd-U382pcSStjgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

export default function ProductGrid() {
  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 py-10 w-full max-w-screen-2xl">
        {toyProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
