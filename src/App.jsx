import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Mobiles from "./pages/Mobiles";
import Electronics from "./pages/Electronics";
import Fashion from "./pages/Fashion";
import HomeKitchen from "./pages/HomeKitchen";
import Books from "./pages/Books";
import Toys from "./pages/Toys";
import CustomerService from "./pages/CustomerService";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-6">
        <Routes>
          {/* 🏠 Default route now renders Home page */}
          <Route path="/" element={<Home />} /> 
          <Route path="/mobiles" element={<Mobiles />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/home-kitchen" element={<HomeKitchen />} />
          <Route path="/books" element={<Books />} />
          <Route path="/toys" element={<Toys />} />
          <Route path="/customer-service" element={<CustomerService />} />
        </Routes>
      </div>
    </Router>
  );
}
