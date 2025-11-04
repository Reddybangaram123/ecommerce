import React from "react";
import { useParams } from "react-router-dom";
import ProductGrid from "../components/Electronics/ProductGrid";

export default function Electronics() {
  const { type } = useParams(); // 👈 captures modules/laptops/cameras
  return (
    <div className="min-h-screen bg-gray-50">
      
      <ProductGrid category={type || "all"} />
    </div>
  );
}
