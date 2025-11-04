import React from "react";
import ProductCard from "./ProductCard";

const furnitureProducts = {
  sofa: [
    {
      id: 201,
      title: "Sheesham Wood Sofa Set",
      description: "3-seater with cushions — durable and elegant finish.",
      price: "₹25,999",
      image: "https://ik.imagekit.io/2xkwa8s1i/img/npl_modified_images/MAGNUS20924/WSFAMGNN3FVDO/WSFAMGNN3FVDO_LS_1.jpg?tr=w-1200",
    },
    {
      id: 202,
      title: "Recliner Sofa Chair",
      description: "Manual recliner with cushioned armrests and plush seating.",
      price: "₹19,499",
      image: "https://ik.imagekit.io/2xkwa8s1i/img/npl_modified_images/Virelia/WRCLVRLN1FVBL/WRCLVRLN1FVBL_LS_1.jpg?tr=w-1200",
    },
  ],

  tables: [
    {
      id: 203,
      title: "Wooden Coffee Table",
      description: "Modern design with storage shelf — walnut finish.",
      price: "₹4,999",
      image: "https://tse1.mm.bing.net/th/id/OIP.lrKweR1uVBzKM2tBG43-jwHaG5?w=1000&h=931&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 204,
      title: "Dining Table Set (4 Seater)",
      description: "Solid wood dining set with cushioned chairs.",
      price: "₹18,999",
      image: "https://m.media-amazon.com/images/I/71cMHiDZWyL._SL1500_.jpg",
    },
  ],

  beds: [
    {
      id: 205,
      title: "Queen Size Bed with Storage",
      description: "Hydraulic lift bed made with engineered wood.",
      price: "₹29,999",
      image: "https://ik.imagekit.io/2xkwa8s1i/img/npl_modified_images/PETASTLEOR/Bed_WEWB7860HYSASTRA/Bed_WEWB7860HYSASTRA_1.jpg?tr=w-1200",
    },
    {
      id: 206,
      title: "King Size Teak Wood Bed",
      description: "Classic design bed with strong frame and elegant polish.",
      price: "₹38,999",
      image: "https://tse4.mm.bing.net/th/id/OIP.Ya0h00TFzK9jtDLUnWZ7KAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ],
};

export default function ProductGrid({ category = "all" }) {
  const categoriesToShow =
    category === "all" ? Object.keys(furnitureProducts) : [category];

  return (
    <div className="w-full flex flex-col items-center">
      {categoriesToShow.map((key) => (
        <section key={key} className="w-full mt-10">
          <h2 className="text-2xl font-semibold text-center mb-4 text-[#febd69] capitalize">
            {key}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
            {furnitureProducts[key]?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
