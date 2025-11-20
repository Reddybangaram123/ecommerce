import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

// STATIC ELECTRONICS
const electronicProducts = {
  modules: [
    { id: 301, title: "Arduino Uno R3 Board", description: "ATmega328P microcontroller, USB interface, ideal for IoT projects.", price: "₹899", image: "https://m.media-amazon.com/images/I/61CqYq+xwNL._SL1000_.jpg" },
    { id: 302, title: "Raspberry Pi 4 Model B", description: "Quad-core CPU, 4GB RAM, micro-HDMI, USB 3.0 ports.", price: "₹5,999", image: "https://m.media-amazon.com/images/I/71Q9d6N7xkL._SL1500_.jpg" },
    { id: 303, title: "ESP32 WiFi + Bluetooth Module", description: "Dual-core microcontroller with WiFi and BLE.", price: "₹349", image: "https://th.bing.com/th/id/OIP.MP2cA3-Zl46uGUnKdVN5IgHaHa?w=184&h=184&c=7&r=0&o=7&dpr=1.5&pid=1.7" },
    { id: 304, title: "IR Sensor Module", description: "Infrared proximity sensor for detection.", price: "₹79", image: "https://www.circuits-diy.com/wp-content/uploads/2023/06/HW201-Infrared-IR-Sensor-Module-Datasheet.png" },
    { id: 305, title: "Ultrasonic Distance Sensor HC-SR04", description: "High-accuracy range detection.", price: "₹99", image: "https://tse2.mm.bing.net/th/id/OIP.b8LfUj7_h3ykBQ7qC_4BWwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 306, title: "Breadboard 830 Points", description: "Prototyping board for circuits.", price: "₹129", image: "https://m.media-amazon.com/images/I/615H1lKSM4L._SL1200_.jpg" },
    { id: 307, title: "Jumper Wires – 40 pcs", description: "Flexible jumper wires for Arduino.", price: "₹89", image: "https://probots.co.in/pub/media/catalog/product/cache/d8ddd0f9b0cd008b57085cd218b48832/4/0/40_pin_female_to_male_jumper_wire__79923.1571491579.jpg" },
    { id: 308, title: "LED Pack (50 pcs)", description: "Multicolor 5mm LEDs.", price: "₹149", image: "https://www.botnroll.com/1932-medium_default/3mm-led-pack-50-pcs.jpg" },
  ],

  laptops: [
    { id: 401, title: "Apple MacBook Air M2", description: "13.6-inch Retina display, M2 chip, 8GB RAM.", price: "₹1,14,999", image: "https://m.media-amazon.com/images/I/71f5Eu5lJSL._SL1500_.jpg" },
    { id: 402, title: "ASUS ROG Strix G16", description: "Intel i7 13th Gen, RTX 4060, 16GB RAM.", price: "₹1,49,990", image: "https://m.media-amazon.com/images/I/81hH5vK-MCL._SL1500_.jpg" },
    { id: 403, title: "HP Pavilion Plus", description: "14-inch OLED, Ryzen 7.", price: "₹89,999", image: "https://tse3.mm.bing.net/th/id/OIP.qvTEPAbVXMHVTn5f8isspAHaGU?rs=1&pid=ImgDetMain&o=7&rm=3" },
  ],

  cameras: [
    { id: 501, title: "Canon EOS 200D", description: "24.1MP APS-C sensor, Wi-Fi.", price: "₹52,999", image: "https://m.media-amazon.com/images/I/71EWRyqzw0L._SL1500_.jpg" },
    { id: 502, title: "Sony ZV-E10", description: "24.2MP APS-C sensor, 4K video.", price: "₹68,990", image: "https://tse3.mm.bing.net/th/id/OIP.DkXEZajTHu9R1YknKadCNwHaGr?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 503, title: "GoPro Hero 12", description: "5.3K60 UHD, waterproof.", price: "₹45,999", image: "https://tse1.mm.bing.net/th/id/OIP.LyI_9PMOPsBYaAcPwOdXBQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
  ],
};

export default function ProductGrid({ category = "all" }) {
  const [backendProducts, setBackendProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products/electronics") // Fixed port
      .then((res) => setBackendProducts(res.data))
      .catch((err) => console.error("Error fetching electronics:", err));
  }, []);

  // Group backend items
  const dynamicGrouped = {};

  backendProducts.forEach((item) => {
    const sub = item.subcategory?.toLowerCase().trim() || "others";

    if (!dynamicGrouped[sub]) dynamicGrouped[sub] = [];
    dynamicGrouped[sub].push(item);
  });

  // Merge with static
  const finalData = { ...electronicProducts };

  Object.keys(dynamicGrouped).forEach((sub) => {
    if (!finalData[sub]) finalData[sub] = [];
    finalData[sub] = [...finalData[sub], ...dynamicGrouped[sub]];
  });

  const categoriesToShow =
    category === "all" ? Object.keys(finalData) : [category.toLowerCase()];

  return (
    <div className="w-full flex flex-col items-center">
      {categoriesToShow.map((key) => (
        <section key={key} className="w-full mt-10">
          <h2 className="text-2xl font-semibold text-center mb-4 text-[#febd69] capitalize">
            {key}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
            {finalData[key]?.map((product) => (
              <ProductCard
                key={product.id || product._id}
                product={product}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
