import React from "react";
import { useParams } from "react-router-dom";
import ProductGrid from "../components/Furniture/ProductGrid";

export default function Furniture() {
  const { type } = useParams();
  return (
    <div className="min-h-screen bg-gray-50">
      <ProductGrid category={type || "all"} />
    </div>
  );
}
