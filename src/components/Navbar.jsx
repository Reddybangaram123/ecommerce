import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { useCart } from "../context/CartContext"; // ✅ Added for cart count

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { cart } = useCart(); // ✅ Access cart from context

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleAccount = () => setIsAccountOpen((prev) => !prev);

  // Simulated login name (you can replace with context or localStorage)
  const loggedInUser = localStorage.getItem("username") || "Guest";

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAccountOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-[#131921] text-white relative">
      {/* TOP NAV */}
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo and Menu */}
        <div className="flex items-center space-x-2">
          <button onClick={toggleMenu} className="text-2xl cursor-pointer">
            <FaBars />
          </button>
          <h1 className="text-2xl font-bold text-white">
            E-Commerce<span className="text-[#00A8E1]">.in</span>
          </h1>
        </div>

        {/* Search Bar */}
        <div className="flex flex-grow mx-4 bg-white rounded-md overflow-hidden max-w-2xl">
          <input
            type="text"
            placeholder="Search E-Commerce.in"
            className="flex-grow px-3 py-2 text-gray-700 focus:outline-none"
          />
          <button className="bg-[#febd69] px-4">
            <FaSearch className="text-black" />
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6 text-sm relative">
          {/* Account Dropdown */}
          <div className="hidden sm:block relative" ref={dropdownRef}>
            <div
              className="cursor-pointer flex items-center gap-1"
              onClick={toggleAccount}
            >
              <div>
                <p className="text-gray-300 text-sm">Hello, {loggedInUser}</p>
                <p className="font-semibold text-sm flex items-center gap-1">
                  Account & Lists <FaChevronDown className="text-xs" />
                </p>
              </div>
            </div>

            {isAccountOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-white text-black rounded-md shadow-lg z-50 border">
                <ul className="p-2 text-sm">
                  <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                    Your Account
                  </li>
                  <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                    Your Orders
                  </li>
                  <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                    Wish List
                  </li>
                  <li
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-red-600"
                    onClick={() => {
                      localStorage.removeItem("username");
                      window.location.reload();
                    }}
                  >
                    Sign Out
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Returns & Orders */}
          <div className="hidden sm:block">
            <p className="font-semibold">Returns</p>
            <p className="text-sm text-gray-300">& Orders</p>
          </div>

          {/* ✅ Cart with live item count */}
          <Link to="/cart" className="flex items-center cursor-pointer relative">
            <FaShoppingCart className="text-2xl" />
            <span className="ml-1 font-semibold">Cart</span>

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1.5">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* CATEGORY LINKS (DESKTOP) */}
      <nav className="hidden md:flex bg-[#232f3e] text-sm px-6 py-2 flex-wrap gap-6">
        <Link to="/" className="hover:text-[#febd69]">Home</Link>
        <Link to="/mobiles" className="hover:text-[#febd69]">Mobiles</Link>
        <Link to="/electronics" className="hover:text-[#febd69]">Electronics</Link>
        <Link to="/fashion" className="hover:text-[#febd69]">Fashion</Link>
        <Link to="/home-kitchen" className="hover:text-[#febd69]">Home & Kitchen</Link>
        <Link to="/furniture" className="hover:text-[#febd69]">Furniture</Link>
        <Link to="/books" className="hover:text-[#febd69]">Books</Link>
        <Link to="/toys" className="hover:text-[#febd69]">Toys</Link>
        <Link to="/grocery" className="hover:text-[#febd69]">Grocery</Link>
        <Link to="/customer-service" className="hover:text-[#febd69]">Customer Service</Link>
      </nav>

      {/* MOBILE SIDEBAR MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#232f3e] text-white z-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-700">
          <h2 className="text-lg font-semibold">Menu</h2>
          <FaTimes className="cursor-pointer text-xl" onClick={toggleMenu} />
        </div>

        <div className="flex flex-col space-y-4 p-4">
          <Link to="/" onClick={toggleMenu} className="hover:text-[#febd69]">Home</Link>
          <Link to="/mobiles" onClick={toggleMenu} className="hover:text-[#febd69]">Mobiles</Link>
          <Link to="/electronics" onClick={toggleMenu} className="hover:text-[#febd69]">Electronics</Link>
          <Link to="/fashion" onClick={toggleMenu} className="hover:text-[#febd69]">Fashion</Link>
          <Link to="/home-kitchen" onClick={toggleMenu} className="hover:text-[#febd69]">Home & Kitchen</Link>
          <Link to="/furniture" onClick={toggleMenu} className="hover:text-[#febd69]">Furniture</Link>
          <Link to="/books" onClick={toggleMenu} className="hover:text-[#febd69]">Books</Link>
          <Link to="/toys" onClick={toggleMenu} className="hover:text-[#febd69]">Toys</Link>
          <Link to="/grocery" onClick={toggleMenu} className="hover:text-[#febd69]">Grocery</Link>
          <Link to="/customer-service" onClick={toggleMenu} className="hover:text-[#febd69]">Customer Service</Link>
        </div>
      </div>

      {/* BACKDROP when menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
}
