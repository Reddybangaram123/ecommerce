import React from "react";
import ProductCard from "./ProductCard";

const homeProducts = [
  {
    id: 401,
    title: "Electric Kettle 1.5L",
    description: "Fast boiling stainless steel kettle with auto shut-off feature.",
    price: "₹1,299",
    image: "https://m.media-amazon.com/images/I/71PD3HugE9L._SL1500_.jpg",
  },
  {
    id: 402,
    title: "Non-Stick Cookware Set ",
    description: "Durable non-stick pans and pots with heat-resistant handles.",
    price: "₹2,499",
    image: "https://tse1.explicit.bing.net/th/id/OIP.fnLCUMmU3Gj4LDvbWapasAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 403,
    title: "Air Fryer 4L",
    description: "Oil-free cooking with touch control and temperature presets.",
    price: "₹5,999",
    image: "https://tse1.mm.bing.net/th/id/OIP.PWlfyYv8X3zFUFDH4RiYfAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 404,
    title: "Steel Water Bottle 1L",
    description: "Insulated stainless steel bottle for hot and cold beverages.",
    price: "₹699",
    image: "https://m.media-amazon.com/images/I/71UekO6nxAL._AC_SL1500_.jpg",
  },
  {
    id: 405,
    title: "Smart LED Bulb (16 Million Colors)",
    description: "WiFi-enabled color-changing bulb with voice control support.",
    price: "₹599",
    image: "https://m.media-amazon.com/images/I/61PDOloFnfL._AC_.jpghttps://m.media-amazon.com/images/I/61PDOloFnfL._AC_.jpg",
  },
  {
    id: 406,
    title: "Table Lamp with Touch Control",
    description: "Modern bedside lamp with 3 brightness levels and USB port.",
    price: "₹899",
    image: "https://tse2.mm.bing.net/th/id/OIP.h5zGo9RZu7uRiPl86psYbgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 407,
    title: "Vacuum Cleaner 1200W",
    description: "High suction power with dust filter and blower function.",
    price: "₹3,499",
    image: "https://www.appliancesdirect.co.uk/Images/COMPACTC2POWERLINE_2_supersize.jpg?v=3",
  },
  {
    id: 408,
    title: "Wall Clock Modern Design",
    description: "Minimalist silent quartz wall clock for living rooms.",
    price: "₹499",
    image: "https://i.pinimg.com/736x/d9/13/dd/d913dd29d7e53fe11da0be6ee0b2398e.jpg",
  },
];

export default function ProductGrid() {
  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 py-10 w-full max-w-screen-2xl">
        {homeProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
