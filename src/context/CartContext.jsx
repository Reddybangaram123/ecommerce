import React, { createContext, useContext, useState, useMemo, useEffect } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // ✅ Load cart from localStorage on first render
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) {
      setCart(JSON.parse(saved));
      console.log("🧩 Loaded cart from localStorage");
    }
  }, []);

  // ✅ Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("💾 Cart saved to localStorage");
  }, [cart]);

  // ✅ Add item to cart (prevent duplicates)
  const addToCart = (product) => {
    setCart((prev) => {
      const alreadyInCart = prev.some((item) => item.id === product.id);
      if (alreadyInCart) {
        console.log("⚠️ Item already in cart:", product.title);
        return prev;
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
      const numericPrice = parseFloat(item.price.replace(/[₹,]/g, "")) || 0;
      return sum + numericPrice;
    }, 0);
  }, [cart]);

  const cartCount = cart.length;

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
