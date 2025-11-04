import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaBars,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [dropdownsOpen, setDropdownsOpen] = useState({});
  const { cart = [] } = useCart();
  const loggedInUser = localStorage.getItem("username") || "Guest";

  const dropdownRef = useRef(null);

  // ✅ toggleDropdown fixed — independent per section
  const toggleDropdown = (name) => {
    setDropdownsOpen((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

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
        {/* Logo & Hamburger */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl cursor-pointer md:hidden"
          >
            <FaBars />
          </button>
          <h1 className="text-2xl font-bold text-white">
            E-Commerce<span className="text-[#00A8E1]">.in</span>
          </h1>
        </div>

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
        <div className="flex items-center space-x-6 text-sm relative">
          {/* Account Dropdown */}
          <div className="hidden sm:block relative" ref={dropdownRef}>
            <div
              className="cursor-pointer flex items-center gap-1"
              onClick={() => setIsAccountOpen(!isAccountOpen)}
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

      {/* CATEGORY LINKS (Desktop) */}
      <nav className="hidden md:flex bg-[#232f3e] text-sm px-6 py-2 flex-wrap gap-6">
        <Link to="/" className="hover:text-[#febd69]">
          Home
        </Link>

        <Dropdown label="Mobiles">
          <Link to="/mobiles/iphone">iPhone</Link>
          <Link to="/mobiles/android">Android</Link>
        </Dropdown>

        <Dropdown label="Electronics">
          <Link to="/electronics/modules">Modules</Link>
          <Link to="/electronics/laptops">Laptops</Link>
          <Link to="/electronics/cameras">Cameras</Link>
        </Dropdown>

        <Dropdown label="Fashion">
          <Link to="/fashion/men">Men</Link>
          <Link to="/fashion/women">Women</Link>
          <Link to="/fashion/kids">Kids</Link>
        </Dropdown>

        <Dropdown label="Home & Kitchen">
          <Link to="/home-kitchen/appliances">Appliances</Link>
          <Link to="/home-kitchen/decor">Decor</Link>
          <Link to="/home-kitchen/utensils">Utensils</Link>
        </Dropdown>

        <Dropdown label="Furniture">
          <Link to="/furniture/sofa">Sofas</Link>
          <Link to="/furniture/tables">Tables</Link>
          <Link to="/furniture/beds">Beds</Link>
        </Dropdown>

        <Dropdown label="Books">
          <Link to="/books/fiction">Fiction</Link>
          <Link to="/books/non-fiction">Non-Fiction</Link>
          <Link to="/books/academic">Academic</Link>
        </Dropdown>

        <Dropdown label="Toys">
          <Link to="/toys/kids">Kids</Link>
          <Link to="/toys/educational">Educational</Link>
          <Link to="/toys/electronic">Electronic</Link>
        </Dropdown>

        <Dropdown label="Grocery">
          <Link to="/grocery/fruits">Fruits</Link>
          <Link to="/grocery/vegetables">Vegetables</Link>
          <Link to="/grocery/beverages">Beverages</Link>
        </Dropdown>

        <Link to="/customer-service" className="hover:text-[#febd69]">
          Customer Service
        </Link>
      </nav>

      {/* ✅ MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#232f3e] px-6 py-4 space-y-3 text-sm">
          {menuData.map((cat) => (
            <div key={cat.key}>
              <button
                onClick={() => toggleDropdown(cat.key)}
                className="w-full flex justify-between items-center py-2 font-semibold text-white hover:text-[#febd69]"
              >
                {cat.label}
                {dropdownsOpen[cat.key] ? (
                  <FaChevronUp className="text-xs" />
                ) : (
                  <FaChevronDown className="text-xs" />
                )}
              </button>
              {dropdownsOpen[cat.key] && (
                <div className="pl-4 space-y-1 transition-all duration-200">
                  {cat.links.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-gray-300 hover:text-[#febd69]"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            to="/customer-service"
            className="block pt-3 hover:text-[#febd69]"
            onClick={() => setIsMenuOpen(false)}
          >
            Customer Service
          </Link>
        </div>
      )}
    </header>
  );
}

// ✅ Menu Data for Mobile
const menuData = [
  {
    key: "mobiles",
    label: "Mobiles",
    links: [
      { name: "iPhone", to: "/mobiles/iphone" },
      { name: "Android", to: "/mobiles/android" },
    ],
  },
  {
    key: "electronics",
    label: "Electronics",
    links: [
      { name: "Modules", to: "/electronics/modules" },
      { name: "Laptops", to: "/electronics/laptops" },
      { name: "Cameras", to: "/electronics/cameras" },
    ],
  },
  {
    key: "fashion",
    label: "Fashion",
    links: [
      { name: "Men", to: "/fashion/men" },
      { name: "Women", to: "/fashion/women" },
      { name: "Kids", to: "/fashion/kids" },
    ],
  },
  {
    key: "homeKitchen",
    label: "Home & Kitchen",
    links: [
      { name: "Appliances", to: "/home-kitchen/appliances" },
      { name: "Decor", to: "/home-kitchen/decor" },
      { name: "Utensils", to: "/home-kitchen/utensils" },
    ],
  },
  {
    key: "furniture",
    label: "Furniture",
    links: [
      { name: "Sofas", to: "/furniture/sofa" },
      { name: "Tables", to: "/furniture/tables" },
      { name: "Beds", to: "/furniture/beds" },
    ],
  },
  {
    key: "books",
    label: "Books",
    links: [
      { name: "Fiction", to: "/books/fiction" },
      { name: "Non-Fiction", to: "/books/non-fiction" },
      { name: "Academic", to: "/books/academic" },
    ],
  },
  {
    key: "toys",
    label: "Toys",
    links: [
      { name: "Kids", to: "/toys/kids" },
      { name: "Educational", to: "/toys/educational" },
      { name: "Electronic", to: "/toys/electronic" },
    ],
  },
  {
    key: "grocery",
    label: "Grocery",
    links: [
      { name: "Fruits", to: "/grocery/fruits" },
      { name: "Vegetables", to: "/grocery/vegetables" },
      { name: "Beverages", to: "/grocery/beverages" },
    ],
  },
];

// ✅ Dropdown for Desktop
function Dropdown({ label, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 hover:text-[#febd69]">
        {label} <FaChevronDown className="text-xs" />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 bg-white text-black rounded-md shadow-lg w-48 py-2 z-50">
          {React.Children.map(children, (child) => (
            <div className="block px-4 py-2 hover:bg-gray-100">{child}</div>
          ))}
        </div>
      )}
    </div>
  );
}
