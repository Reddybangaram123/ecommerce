import React from "react";
import {
  FaBox,
  FaShoppingCart,
  FaUsers,
  FaChartBar,
  FaHome,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Sidebar({ isOpen, toggle }) {
  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-20"
      } bg-[#232f3e] text-white h-screen p-4 transition-all duration-300 flex flex-col shadow-lg`}
    >
      {/* 🟨 Header / Logo Section */}
      <div className="flex items-center justify-between mb-10">
        <h2
          className={`font-bold text-xl transition-all duration-200 ${
            isOpen ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          Admin
        </h2>
        <button
          onClick={toggle}
          className="bg-[#febd69] text-black px-2 py-1 rounded text-sm hover:bg-[#f3a847] transition"
        >
          {isOpen ? "←" : "→"}
        </button>
      </div>

      {/* 🧭 Navigation Links */}
      <nav className="space-y-6">
        <SidebarLink
          to="/admin"
          icon={<FaHome />}
          text="Dashboard"
          isOpen={isOpen}
        />
        <SidebarLink
          to="/admin/products"
          icon={<FaBox />}
          text="Products"
          isOpen={isOpen}
        />
        <SidebarLink
          to="/admin/orders"
          icon={<FaShoppingCart />}
          text="Orders"
          isOpen={isOpen}
        />
        <SidebarLink
          to="/admin/users"
          icon={<FaUsers />}
          text="Users"
          isOpen={isOpen}
        />
        <SidebarLink
          to="/admin/reports"
          icon={<FaChartBar />}
          text="Reports"
          isOpen={isOpen}
        />
        <SidebarLink
          to="/admin/settings"
          icon={<FaCog />}
          text="Settings"
          isOpen={isOpen}
        />
      </nav>

      {/* 🔻 Logout Section */}
      <div className="mt-auto pt-6 border-t border-gray-600">
        <button className="flex items-center gap-3 text-gray-300 hover:text-red-400 transition w-full">
          <FaSignOutAlt className="text-lg" />
          {isOpen && <span className="text-md">Logout</span>}
        </button>
      </div>
    </aside>
  );
}

/* ✅ Reusable Sidebar Link Component */
function SidebarLink({ to, icon, text, isOpen }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-3 text-gray-200 hover:text-[#febd69] transition"
    >
      <span className="text-xl">{icon}</span>
      {isOpen && <span className="text-md font-medium">{text}</span>}
    </Link>
  );
}
