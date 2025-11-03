import React, { createContext, useContext, useState, useMemo } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // ✅ Add item to cart (prevent duplicates)
  const addToCart = (product) => {
    setCart((prev) => {
      const alreadyInCart = prev.some((item) => item.id === product.id);
      if (alreadyInCart) {
        console.log("⚠️ Item already in cart:", product.title);
        return prev; // Do not add duplicate
      }
      console.log("🟢 Adding to cart:", product);
      return [...prev, product];
    });
  };

  // ✅ Remove a specific item
  const removeFromCart = (id) => {
    console.log("❌ Removing item with ID:", id);
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ Clear all items
  const clearCart = () => {
    console.log("🧹 Clearing cart");
    setCart([]);
  };

  // ✅ Calculate total price (assumes price is like "₹79,999")
  const totalPrice = useMemo(() => {
    return cart.reduce((sum, item) => {
      const numericPrice = parseInt(item.price.replace(/[₹,]/g, "")) || 0;
      return sum + numericPrice;
    }, 0);
  }, [cart]);

  // ✅ Useful computed count
  const cartCount = cart.length;

  console.log("🛒 Cart contents:", cart);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        totalPrice,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
