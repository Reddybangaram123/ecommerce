import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isAllSidebarOpen, setIsAllSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { cart = [] } = useCart();
  const navigate = useNavigate();
  const loggedInUser = localStorage.getItem("username") || null;

  const dropdownRef = useRef(null);
  const sidebarRef = useRef(null);

  // ✅ Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAccountOpen(false);
      }
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsAllSidebarOpen(false);
      }
      if (!event.target.closest(".category-dropdown")) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleAuth = () => {
    if (loggedInUser) {
      localStorage.removeItem("username");
      window.location.reload();
    } else {
      navigate("/login");
    }
  };

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  return (
    <header className="bg-[#131921] text-white relative">
      {/* 🔹 TOP NAVBAR */}
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          E-Commerce<span className="text-[#00A8E1]">.in</span>
        </h1>

        {/* Search Bar */}
        <div className="hidden md:flex flex-grow mx-4 bg-white rounded-md overflow-hidden max-w-2xl">
          <input
            type="text"
            placeholder="Search E-Commerce.in"
            className="flex-grow px-3 py-2 text-gray-700 focus:outline-none"
          />
          <button className="bg-[#febd69] px-4">
            <FaSearch className="text-black" />
          </button>
        </div>

        {/* Account & Cart */}
        <div className="flex items-center gap-6 text-sm relative">
          {/* Account Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <div
              className="cursor-pointer flex items-center gap-1"
              onClick={() => setIsAccountOpen((prev) => !prev)}
            >
              <div>
                <p className="text-gray-300 text-xs">
                  Hello, {loggedInUser || "Sign in"}
                </p>
                <p className="font-semibold text-sm flex items-center gap-1">
                  Account & Lists{" "}
                  <FaChevronDown
                    className={`text-xs transition-transform duration-200 ${
                      isAccountOpen ? "rotate-180" : ""
                    }`}
                  />
                </p>
              </div>
            </div>

            {isAccountOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-white text-black rounded-md shadow-lg z-[9999] border">
                <ul className="p-2 text-sm">
                  {!loggedInUser ? (
                    <li
                      className="px-3 py-2 hover:bg-gray-100 text-blue-600 font-semibold cursor-pointer"
                      onClick={handleAuth}
                    >
                      Sign In
                    </li>
                  ) : (
                    <>
                      <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                        Your Account
                      </li>
                      <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                        Your Orders
                      </li>
                      <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                        Wish List
                      </li>
                      <li className="px-3 py-2 hover:bg-gray-100 text-blue-600 font-semibold">
                        <Link to="/admin">👑 Admin Dashboard</Link>
                      </li>
                      <li
                        className="px-3 py-2 hover:bg-gray-100 text-red-600 cursor-pointer"
                        onClick={handleAuth}
                      >
                        Sign Out
                      </li>
                    </>
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* Cart */}
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

      {/* 🔹 SECOND NAVBAR (ALL MENUS) */}
      <nav className="bg-[#232f3e] text-sm px-6 py-2 flex items-center gap-6 overflow-x-auto scrollbar-hide relative z-[999]">
        {/* ALL Sidebar Button */}
        <button
          onClick={() => setIsAllSidebarOpen(!isAllSidebarOpen)}
          className="flex items-center gap-2 bg-[#131921] hover:bg-[#37475a]
                     text-white px-3 py-2 rounded-md transition duration-200"
        >
          <FaBars size={18} />
          <span className="font-semibold text-sm">All</span>
        </button>

        {/* Home */}
        <Link to="/" className="hover:text-[#febd69] whitespace-nowrap">
          Home
        </Link>

        {/* ✅ Category Dropdowns */}
        {menuData.map((cat) => {
          const isOpen = openDropdown === cat.key;
          return (
            <div key={cat.key} className="relative category-dropdown">
              <button
                onClick={() => toggleDropdown(cat.key)}
                className={`flex items-center gap-1 transition-colors duration-200 ${
                  isOpen ? "text-[#febd69]" : "hover:text-[#febd69]"
                }`}
              >
                {cat.label}
                {isOpen ? (
                  <FaChevronUp className="text-xs" />
                ) : (
                  <FaChevronDown className="text-xs" />
                )}
              </button>

              {isOpen && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 rounded-md shadow-lg border border-gray-200 z-[9999] bg-white text-black w-64 animate-fadeIn"
                  style={{
                    pointerEvents: "auto",
                    overflow: "hidden",
                    transformOrigin: "top center",
                  }}
                >
                  {cat.links.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {/* Customer Service */}
        <Link
          to="/customer-service"
          className="hover:text-[#febd69] whitespace-nowrap"
        >
          Customer Service
        </Link>
      </nav>

      {/* 🟨 ALL SIDEBAR */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-screen w-80 bg-white text-black shadow-xl transform transition-transform duration-300 z-[9999] overflow-y-scroll scrollbar-hide ${
          isAllSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between bg-[#232f3e] text-white p-4 sticky top-0 z-10">
          <h2 className="font-bold text-lg">
            Hello, {loggedInUser || "Guest"}
          </h2>
          <button onClick={() => setIsAllSidebarOpen(false)}>
            <FaTimes size={20} />
          </button>
        </div>

        <div className="p-4 space-y-5 text-[15px]">
          <SidebarSection title="Shop by Category">
            {menuData.map((cat) => (
              <div key={cat.key}>
                <SidebarLink to={`/${cat.key}`}>{cat.label}</SidebarLink>
                {cat.links.map((link) => (
                  <SidebarLink key={link.to} to={link.to} sub>
                    {link.name}
                  </SidebarLink>
                ))}
              </div>
            ))}
          </SidebarSection>

          <SidebarSection title="Settings" borderTop>
            <SidebarLink to="/customer-service">Customer Service</SidebarLink>
            <SidebarLink to="/admin" className="text-blue-600 font-semibold">
              👑 Admin Dashboard
            </SidebarLink>
            <SidebarLink
              to="#"
              onClick={handleAuth}
              className="text-red-600 font-medium"
            >
              {loggedInUser ? "Sign Out" : "Sign In"}
            </SidebarLink>
          </SidebarSection>
        </div>
      </div>
    </header>
  );
}

/* ---------- Helper Components ---------- */
const SidebarSection = ({ title, children, borderTop }) => (
  <div className={borderTop ? "pt-4 border-t" : ""}>
    <h3 className="font-bold text-[#232f3e] text-sm uppercase mb-2">
      {title}
    </h3>
    <div className="space-y-1">{children}</div>
  </div>
);

const SidebarLink = ({ to, children, sub, className = "", onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`block py-1 px-2 rounded hover:bg-gray-100 ${
      sub ? "text-sm text-gray-700 pl-5" : "font-medium"
    } ${className}`}
  >
    {children}
  </Link>
);

/* ---------- Category Data ---------- */
const menuData = [
  {
    key: "mobiles",
    label: "Mobiles",
    links: [
      { name: "iPhone", to: "/mobiles/iphone" },
      { name: "Android Phones", to: "/mobiles/android" },
      { name: "Mobile Accessories", to: "/mobiles/accessories" },
      { name: "Smart Watches", to: "/mobiles/smart-watches" },
      { name: "Power Banks", to: "/mobiles/power-banks" },
    ],
  },
  {
    key: "electronics",
    label: "Electronics",
    links: [
      { name: "Laptops", to: "/electronics/laptops" },
      { name: "Cameras", to: "/electronics/cameras" },
      { name: "Smart TVs", to: "/electronics/tvs" },
      { name: "Headphones", to: "/electronics/headphones" },
      { name: "Speakers", to: "/electronics/speakers" },
    ],
  },
  {
    key: "fashion",
    label: "Fashion",
    links: [
      { name: "Men", to: "/fashion/men" },
      { name: "Women", to: "/fashion/women" },
      { name: "Footwear", to: "/fashion/footwear" },
      { name: "Watches", to: "/fashion/watches" },
      { name: "Jewellery", to: "/fashion/jewellery" },
    ],
  },
  {
    key: "home-kitchen",
    label: "Home & Kitchen",
    links: [
      { name: "Furniture", to: "/home-kitchen/furniture" },
      { name: "Appliances", to: "/home-kitchen/appliances" },
      { name: "Decor", to: "/home-kitchen/decor" },
      { name: "Lighting", to: "/home-kitchen/lighting" },
      { name: "Storage & Organizers", to: "/home-kitchen/storage" },
    ],
  },
  {
    key: "books",
    label: "Books",
    links: [
      { name: "Fiction", to: "/books/fiction" },
      { name: "Comics", to: "/books/comics" },
      { name: "Educational", to: "/books/educational" },
      { name: "Motivational", to: "/books/motivational" },
      { name: "Biographies", to: "/books/biographies" },
    ],
  },
  {
    key: "toys",
    label: "Toys",
    links: [
      { name: "Action Figures", to: "/toys/action-figures" },
      { name: "Educational Toys", to: "/toys/educational" },
      { name: "Soft Toys", to: "/toys/soft" },
      { name: "Board Games", to: "/toys/games" },
      { name: "Outdoor Play", to: "/toys/outdoor" },
    ],
  },
  {
    key: "grocery",
    label: "Grocery",
    links: [
      { name: "Fruits & Vegetables", to: "/grocery/fruits" },
      { name: "Snacks & Beverages", to: "/grocery/snacks" },
      { name: "Cooking Essentials", to: "/grocery/essentials" },
      { name: "Household Items", to: "/grocery/household" },
      { name: "Personal Care", to: "/grocery/personal-care" },
    ],
  },
  {
    key: "furniture",
    label: "Furniture",
    links: [
      { name: "Living Room", to: "/furniture/living" },
      { name: "Bedroom", to: "/furniture/bedroom" },
      { name: "Office Furniture", to: "/furniture/office" },
      { name: "Outdoor", to: "/furniture/outdoor" },
    ],
  },
];
