import React from "react";
import ProductCard from "./ProductCard";

const electronicProducts = {
  // ⚙️ MODULES
  modules: [
    {
      id: 301,
      title: "Arduino Uno R3 Board",
      description:
        "ATmega328P microcontroller, USB interface, ideal for IoT projects.",
      price: "₹899",
      image: "https://m.media-amazon.com/images/I/61CqYq+xwNL._SL1000_.jpg",
    },
    {
      id: 302,
      title: "Raspberry Pi 4 Model B",
      description:
        "Quad-core CPU, 4GB RAM, micro-HDMI, USB 3.0 ports for embedded computing.",
      price: "₹5,999",
      image: "https://m.media-amazon.com/images/I/71Q9d6N7xkL._SL1500_.jpg",
    },
    {
      id: 303,
      title: "ESP32 WiFi + Bluetooth Module",
      description:
        "Dual-core microcontroller with built-in WiFi and BLE for IoT applications.",
      price: "₹349",
      image:
        "https://th.bing.com/th/id/OIP.MP2cA3-Zl46uGUnKdVN5IgHaHa?w=184&h=184&c=7&r=0&o=7&dpr=1.5&pid=1.7",
    },
    {
      id: 304,
      title: "IR Sensor Module",
      description:
        "Infrared proximity sensor for obstacle avoidance and detection.",
      price: "₹79",
      image:
        "https://www.circuits-diy.com/wp-content/uploads/2023/06/HW201-Infrared-IR-Sensor-Module-Datasheet.png",
    },
    {
      id: 305,
      title: "Ultrasonic Distance Sensor HC-SR04",
      description:
        "High-accuracy range detection module for robots and automation systems.",
      price: "₹99",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.b8LfUj7_h3ykBQ7qC_4BWwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 306,
      title: "Breadboard 830 Points",
      description:
        "Reusable prototyping board for testing electronic circuits without soldering.",
      price: "₹129",
      image: "https://m.media-amazon.com/images/I/615H1lKSM4L._SL1200_.jpg",
    },
    {
      id: 307,
      title: "Jumper Wires (Male to Female) – 40 pcs",
      description:
        "Pack of 40 flexible jumper wires for breadboard and Arduino connections.",
      price: "₹89",
      image:
        "https://probots.co.in/pub/media/catalog/product/cache/d8ddd0f9b0cd008b57085cd218b48832/4/0/40_pin_female_to_male_jumper_wire__79923.1571491579.jpg",
    },
    {
      id: 308,
      title: "LED Pack (50 pcs Multicolor)",
      description:
        "Assorted 5mm LEDs in red, green, blue, yellow, and white colors.",
      price: "₹149",
      image:
        "https://www.botnroll.com/1932-medium_default/3mm-led-pack-50-pcs.jpg",
    },
  ],

  // 💻 LAPTOPS
  laptops: [
    {
      id: 401,
      title: "Apple MacBook Air M2",
      description:
        "13.6-inch Retina display, M2 chip, 8GB RAM, 256GB SSD — ultra-light.",
      price: "₹1,14,999",
      image: "https://m.media-amazon.com/images/I/71f5Eu5lJSL._SL1500_.jpg",
    },
    {
      id: 402,
      title: "ASUS ROG Strix G16 Gaming Laptop",
      description:
        "Intel i7 13th Gen, RTX 4060, 16GB RAM, 1TB SSD, 165Hz display.",
      price: "₹1,49,990",
      image: "https://m.media-amazon.com/images/I/81hH5vK-MCL._SL1500_.jpg",
    },
    {
      id: 403,
      title: "HP Pavilion Plus Laptop",
      description:
        "14-inch OLED, Ryzen 7, 16GB RAM, 512GB SSD, backlit keyboard.",
      price: "₹89,999",
      image: "https://tse3.mm.bing.net/th/id/OIP.qvTEPAbVXMHVTn5f8isspAHaGU?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ],

  // 📷 CAMERAS
  cameras: [
    {
      id: 501,
      title: "Canon EOS 200D DSLR",
      description:
        "24.1MP APS-C sensor, Dual Pixel autofocus, Wi-Fi & Bluetooth.",
      price: "₹52,999",
      image: "https://m.media-amazon.com/images/I/71EWRyqzw0L._SL1500_.jpg",
    },
    {
      id: 502,
      title: "Sony Alpha ZV-E10 Mirrorless Camera",
      description:
        "24.2MP APS-C sensor, 4K video, flip screen — ideal for creators.",
      price: "₹68,990",
      image: "https://tse3.mm.bing.net/th/id/OIP.DkXEZajTHu9R1YknKadCNwHaGr?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 503,
      title: "GoPro Hero 12 Black",
      description:
        "5.3K60 UHD video, waterproof up to 10m, HyperSmooth 6.0 stabilization.",
      price: "₹45,999",
      image: "https://tse1.mm.bing.net/th/id/OIP.LyI_9PMOPsBYaAcPwOdXBQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ],
};

export default function ProductGrid({ category = "all" }) {
  const categoriesToShow =
    category === "all" ? Object.keys(electronicProducts) : [category];

  return (
    <div className="w-full flex flex-col items-center">
      {categoriesToShow.map((key) => (
        <section key={key} className="w-full mt-10">
          <h2 className="text-2xl font-semibold text-center mb-4 text-[#febd69] capitalize">
            {key}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
            {electronicProducts[key]?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
