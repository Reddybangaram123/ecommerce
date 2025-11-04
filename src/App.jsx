import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Mobiles from "./pages/Mobiles";
import Electronics from "./pages/Electronics";
import Fashion from "./pages/Fashion";
import HomeKitchen from "./pages/HomeKitchen";
import Furniture from "./pages/Furniture";
import Books from "./pages/Books";
import Toys from "./pages/Toys";
import Grocery from "./pages/Grocery";
import CartPage from "./pages/CartPage";
import CustomerService from "./pages/CustomerService";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Mobiles */}
          <Route path="/mobiles" element={<Mobiles />} />
          <Route path="/mobiles/:type" element={<Mobiles />} />

          {/* Electronics */}
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/electronics/:type" element={<Electronics />} />

          {/* Fashion */}
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/fashion/:type" element={<Fashion />} />

          {/* Home & Kitchen */}
          <Route path="/home-kitchen" element={<HomeKitchen />} />
          <Route path="/home-kitchen/:type" element={<HomeKitchen />} />

          {/* Furniture */}
          <Route path="/furniture" element={<Furniture />} />
          <Route path="/furniture/:type" element={<Furniture />} />

          {/* Books */}
          <Route path="/books" element={<Books />} />
          <Route path="/books/:type" element={<Books />} />

          {/* Toys */}
          <Route path="/toys" element={<Toys />} />
          <Route path="/toys/:type" element={<Toys />} />

          {/* Grocery */}
          <Route path="/grocery" element={<Grocery />} />
          <Route path="/grocery/:type" element={<Grocery />} />

          {/* Other Pages */}
          <Route path="/cart" element={<CartPage />} />
          <Route path="/customer-service" element={<CustomerService />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}
