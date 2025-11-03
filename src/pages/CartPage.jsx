import React from "react";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart(); // ✅ added

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, i) => (
            <div
              key={i}
              className="border p-3 mb-2 rounded-lg flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-gray-600 text-sm">{item.price}</p>
              </div>

              {/* 🗑 Remove Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
              >
                Remove
              </button>
            </div>
          ))}

          {/* 🧹 Clear Entire Cart */}
          <div className="text-right mt-4">
            <button
              onClick={clearCart}
              className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-md"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}
