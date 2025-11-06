// ✅ src/layouts/AdminLayout.jsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function AdminLayout({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* ✅ Sidebar stays here — only one copy */}
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />

      {/* ✅ This section shows AdminPage or AdminProducts */}
      <main className="flex-1 p-8 transition-all duration-300">{children}</main>
    </div>
  );
}
