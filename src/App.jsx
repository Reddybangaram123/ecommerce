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
import AdminPage from "./pages/AdminPage";
import AdminProducts from "./pages/AdminProducts";
import AdminLayout from "./layouts/AdminLayout"; // ✅ Shared layout for all admin routes
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <Router>
        {/* ✅ Navbar visible only for customer routes */}
        <Routes>
          {/* 🏠 Public / E-commerce Pages */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route
            path="/mobiles"
            element={
              <>
                <Navbar />
                <Mobiles />
              </>
            }
          />
          <Route
            path="/mobiles/:type"
            element={
              <>
                <Navbar />
                <Mobiles />
              </>
            }
          />
          <Route
            path="/electronics"
            element={
              <>
                <Navbar />
                <Electronics />
              </>
            }
          />
          <Route
            path="/electronics/:type"
            element={
              <>
                <Navbar />
                <Electronics />
              </>
            }
          />
          <Route
            path="/fashion"
            element={
              <>
                <Navbar />
                <Fashion />
              </>
            }
          />
          <Route
            path="/fashion/:type"
            element={
              <>
                <Navbar />
                <Fashion />
              </>
            }
          />
          <Route
            path="/home-kitchen"
            element={
              <>
                <Navbar />
                <HomeKitchen />
              </>
            }
          />
          <Route
            path="/home-kitchen/:type"
            element={
              <>
                <Navbar />
                <HomeKitchen />
              </>
            }
          />
          <Route
            path="/furniture"
            element={
              <>
                <Navbar />
                <Furniture />
              </>
            }
          />
          <Route
            path="/furniture/:type"
            element={
              <>
                <Navbar />
                <Furniture />
              </>
            }
          />
          <Route
            path="/books"
            element={
              <>
                <Navbar />
                <Books />
              </>
            }
          />
          <Route
            path="/books/:type"
            element={
              <>
                <Navbar />
                <Books />
              </>
            }
          />
          <Route
            path="/toys"
            element={
              <>
                <Navbar />
                <Toys />
              </>
            }
          />
          <Route
            path="/toys/:type"
            element={
              <>
                <Navbar />
                <Toys />
              </>
            }
          />
          <Route
            path="/grocery"
            element={
              <>
                <Navbar />
                <Grocery />
              </>
            }
          />
          <Route
            path="/grocery/:type"
            element={
              <>
                <Navbar />
                <Grocery />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Navbar />
                <CartPage />
              </>
            }
          />
          <Route
            path="/customer-service"
            element={
              <>
                <Navbar />
                <CustomerService />
              </>
            }
          />

          {/* 👑 Admin Dashboard & Product Management (Shared Sidebar) */}
          <Route
            path="/admin"
            element={
              <AdminLayout>
                <AdminPage />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/products"
            element={
              <AdminLayout>
                <AdminProducts />
              </AdminLayout>
            }
          />
        </Routes>
      </Router>
    </CartProvider>
  );
}
