import React from "react";
import { useParams } from "react-router-dom";
import ProductGrid from "../components/Mobiles/ProductGrid";

export default function Mobiles() {
  const { category } = useParams(); // iphone or android
  return (
    <div className="text-center mt-10">
      <ProductGrid category={category || "all"} />
    </div>
  );
}
