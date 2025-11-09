import React from "react";

export default function CustomerService() {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      <h2 className="text-3xl font-semibold text-center text-[#febd69] mb-6">
        Customer Service
      </h2>
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-4">
        <p>
          Need help? We're here for you 24/7! Reach out to our customer support
          team using the details below.
        </p>
        <ul className="space-y-2">
          <li>📞 <strong>Helpline:</strong> +91 98765 43210</li>
          <li>📧 <strong>Email:</strong> support@ecommerce.in</li>
          <li>🕒 <strong>Working Hours:</strong> 9 AM – 9 PM (IST)</li>
        </ul>
      </div>
    </div>
  );
}
