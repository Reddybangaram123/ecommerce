// ✅ src/pages/AdminPage.jsx
import React from "react";
import { FaBox, FaShoppingCart, FaUsers, FaMoneyBillWave } from "react-icons/fa";

export default function AdminPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#232f3e] mb-6">Admin Dashboard</h1>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard title="Total Orders" value="--" icon={<FaShoppingCart />} />
        <DashboardCard title="Products" value="--" icon={<FaBox />} />
        <DashboardCard title="Users" value="--" icon={<FaUsers />} />
        <DashboardCard title="Revenue" value="--" icon={<FaMoneyBillWave />} />
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4 text-[#232f3e]">Recent Orders</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-2 px-4 border-b">Order ID</th>
              <th className="py-2 px-4 border-b">Customer</th>
              <th className="py-2 px-4 border-b">Total</th>
              <th className="py-2 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="4" className="text-center py-4 text-gray-500">
                No orders yet.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* Small helper component */
function DashboardCard({ title, value, icon }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow flex items-center justify-between hover:shadow-lg transition duration-200">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h3 className="text-2xl font-semibold text-[#232f3e]">{value}</h3>
      </div>
      <div className="text-3xl text-[#febd69]">{icon}</div>
    </div>
  );
}
