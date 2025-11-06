import React from "react";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, totalPrice, clearCart } = useCart();

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      <h2 className="text-3xl font-semibold text-center text-[#febd69] mb-6">
        Your Shopping Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-16 w-16 object-contain"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-green-600 font-bold">{item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-8 bg-white shadow-md rounded-lg p-4 text-right">
            <h3 className="text-xl font-semibold">
              Total:{" "}
              <span className="text-green-600 font-bold">₹{totalPrice}</span>
            </h3>
            <div className="mt-4 flex justify-end gap-4">
              <button
                onClick={clearCart}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
              >
                Clear Cart
              </button>
              <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-md font-semibold">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
