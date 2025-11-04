import React from "react";
import ProductCard from "./ProductCard";

const homeKitchenProducts = {
  appliances: [
    {
      id: 101,
      title: "Prestige Electric Kettle 1.5L",
      description: "Auto shut-off, stainless steel body, 1500W fast boiling.",
      price: "₹1,299",
      image: "https://www.sathya.store/img/product/bcxztEXFYFpk3J0M.jpg",
    },
    {
      id: 102,
      title: "Philips Air Fryer HD9200",
      description: "Rapid Air Technology for healthy frying with 90% less fat.",
      price: "₹7,499",
      image: "https://tse4.mm.bing.net/th/id/OIP.V61qg1_gJhXCIVnQzu_viwHaHY?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ],

  cookware: [
    {
      id: 103,
      title: "Solimo Non-Stick Cookware Set",
      description: "Set of 3 – frying pan, kadhai, and tawa with glass lid.",
      price: "₹1,999",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/10/354094586/RG/JE/TW/201070351/kitc-500x500.jpg",
    },
    {
      id: 104,
      title: "Pigeon Pressure Cooker 5L",
      description: "Aluminium body, precision weight valve, 5-year warranty.",
      price: "₹1,499",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/7/329767640/YW/SX/GO/99324633/yes-amelia-5-l-induction-bottom-hard-anodized-pressure-cooker-original-imag2qyhm7bkefd6-500x500.jpeg",
    },
  ],

  decor: [
    {
      id: 105,
      title: "Home Centre Ceramic Vase",
      description: "Elegant decorative vase – perfect for living room decor.",
      price: "₹799",
      image: "https://tse1.mm.bing.net/th/id/OIP.HnclU_-pbGqXZdV_6Jx1_gHaIP?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 106,
      title: "LED Fairy Lights 10m",
      description: "Warm white lights for home decoration.",
      price: "₹399",
      image: "https://tse4.mm.bing.net/th/id/OIP.B4J3W7M8QVezRXEYMV1gKQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ],

  // 🍽️ UTENSILS (added)
  utensils: [
    {
      id: 107,
      title: "Milton Stainless Steel Spoon Set (6 pcs)",
      description: "Durable mirror-finish spoons ideal for daily use.",
      price: "₹299",
      image: "https://m.media-amazon.com/images/I/61nsqGSNU1L._SL1500_.jpg",
    },
    {
      id: 108,
      title: "Butterfly Stainless Steel Kitchen Utensil Set",
      description: "Set of ladle, skimmer, turner, and spatula with hanging hooks.",
      price: "₹899",
      image: "https://m.media-amazon.com/images/I/81XtAYUCFpL._AC_SL1500_.jpg",
    },
  ],
};

export default function ProductGrid({ category = "all" }) {
  const categoriesToShow =
    category === "all" ? Object.keys(homeKitchenProducts) : [category];

  return (
    <div className="w-full flex flex-col items-center">
      {categoriesToShow.map((key) => (
        <section key={key} className="w-full mt-10">
          <h2 className="text-2xl font-semibold text-center mb-4 text-[#febd69] capitalize">
            {key}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
            {homeKitchenProducts[key]?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
