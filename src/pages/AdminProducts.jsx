import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AdminProducts() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  // eslint-disable-next-line
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [products, setProducts] = useState([]);

  const adminName = localStorage.getItem("username") || "Admin";

  // ✅ Category and Subcategory Data
  const menuData = [
    {
      label: "Mobiles",
      subcategories: [
        "iPhone",
        "Android Phones",
        "Smart Watches",
        "Power Banks",
        "Accessories",
      ],
    },
    {
      label: "Electronics",
      subcategories: [
        "Laptops",
        "Cameras",
        "Smart TVs",
        "Speakers",
        "Appliances",
      ],
    },
    {
      label: "Fashion",
      subcategories: [
        "Men's Clothing",
        "Women's Clothing",
        "Footwear",
        "Watches",
        "Jewellery",
      ],
    },
    {
      label: "Home & Kitchen",
      subcategories: [
        "Furniture",
        "Appliances",
        "Lighting",
        "Storage",
      ],
    },
    {
      label: "Books",
      subcategories: ["Fiction", "Educational", "Motivational"],
    },
    {
      label: "Toys",
      subcategories: ["Action Figures", "Educational Toys", "Soft Toys"],
    },
  ];

  const selectedCategory =
    menuData.find((cat) => cat.label === category) || { subcategories: [] };

  // Fetch products from backend on mount
  useEffect(() => {
    let mounted = true;
    const fetchProducts = async () => {
      try {
        // try common endpoints (robust to small backend differences)
        const tryUrls = [
  "http://localhost:3001/api/products"
];

        let res = null;
        for (const url of tryUrls) {
          try {
            res = await axios.get(url);
            if (res && (Array.isArray(res.data) || res.data.products || res.data.length)) {
              break; // got something
            }
          } catch (err) {
            // ignore & try next
          }
        }
        if (!res) return;
        // normalize response
        let list = [];
        if (Array.isArray(res.data)) list = res.data;
        else if (res.data.products) list = res.data.products;
        else if (res.data.data) list = res.data.data;
        else if (res.data.items) list = res.data.items;
        else if (res.data.length) list = res.data;
        if (mounted) setProducts(list);
      } catch (err) {
        console.error("Fetch products error:", err);
      }
    };
    fetchProducts();
    return () => { mounted = false; };
  }, []);

  // ✅ Handle Image Upload (unchanged)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(file);
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // ✅ Add Product — now sends to backend and falls back to local state if backend fails
  const handleAddProduct = async (e) => {
    e.preventDefault();

    if (!productName || !price || !category || !subcategory) {
      alert("⚠️ Please fill all fields before adding a product!");
      return;
    }

    // create product object same shape as before + minimal fields backend expects
    const newProductLocal = {
      id: Date.now(),
      name: productName,
      price,
      category,
      subcategory,
      image: preview,
      addedBy: adminName,
      date: new Date().toLocaleString(),
    };

    // optimistic UI: add locally first so admin sees immediate result
    setProducts((prev) => [...prev, newProductLocal]);

    // clear inputs right away (keeps original UX)
    setProductName("");
    setPrice("");
    setCategory("");
    setSubcategory("");
    setImage(null);
    setPreview("");

    // Try to persist to backend (try a couple common endpoints)
    const payload = {
  name: newProductLocal.name,
  price: Number(newProductLocal.price),
  category: newProductLocal.category,
  subcategory: newProductLocal.subcategory,
  image: newProductLocal.image || ""
};


    const postUrls = [
  "http://localhost:3001/api/products/add"
];
    let saved = null;
    for (const url of postUrls) {
      try {
        const res = await axios.post(url, payload);
        // expect res.data.product or res.data or res.data._id
        if (res && res.data) {
          saved = res.data.product || res.data || null;
          break;
        }
      } catch (err) {
        // try next url
      }
    }

    if (saved) {
      // replace the optimistic local item with returned item when possible
      setProducts((prev) =>
        prev.map((p) =>
          p.id === newProductLocal.id ? (saved._id ? { ...saved } : { ...saved, id: newProductLocal.id }) : p
        )
      );
      console.log("Product saved to backend:", saved);
    } else {
      // backend failed — keep local copy but notify
      alert("⚠️ Product was added locally but failed to save to server. Check server or network.");
      console.warn("Failed to persist product to backend; kept local-only product.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Manage Products</h1>

      {/* 🔹 Add New Product */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">Add New Product</h2>

        <form
          onSubmit={handleAddProduct}
          className="flex flex-wrap gap-4 items-center"
        >
          {/* Product Name */}
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="border rounded-md px-3 py-2 w-full md:w-1/5 focus:ring-2 focus:ring-blue-500"
          />

          {/* Price */}
          <input
            type="number"
            placeholder="Price (₹)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border rounded-md px-3 py-2 w-full md:w-1/5 focus:ring-2 focus:ring-blue-500"
          />

          {/* Category */}
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setSubcategory("");
            }}
            className="border rounded-md px-3 py-2 w-full md:w-1/5 bg-white focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Category</option>
            {menuData.map((cat) => (
              <option key={cat.label} value={cat.label}>
                {cat.label}
              </option>
            ))}
          </select>

          {/* Subcategory */}
          <select
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
            disabled={!category}
            className={`border rounded-md px-3 py-2 w-full md:w-1/5 bg-white focus:ring-2 ${
              category ? "focus:ring-blue-500" : "bg-gray-100 text-gray-500"
            }`}
          >
            <option value="">
              {category ? "Select Subcategory" : "Select Category First"}
            </option>
            {selectedCategory.subcategories.map((sub) => (
              <option key={sub} value={sub}>
                {sub}
              </option>
            ))}
          </select>

          {/* ✅ Image Upload */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border rounded-md px-3 py-2 w-full md:w-1/5 bg-white focus:ring-2 focus:ring-blue-500"
          />

          {/* Add Button */}
          <button
            type="submit"
            className="bg-[#131921] hover:bg-[#232f3e] text-white px-5 py-2 rounded-md font-medium transition w-full md:w-auto"
          >
            Add Product
          </button>
        </form>

        {/* ✅ Preview Image */}
        {preview && (
          <div className="mt-4">
            <p className="font-medium mb-1">Preview:</p>
            <img
              src={preview}
              alt="Preview"
              className="w-32 h-32 object-cover rounded border"
            />
          </div>
        )}
      </div>

      {/* 🔹 Added Products */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Added Products</h2>

        {products.length === 0 ? (
          <p className="text-gray-500 italic">No products added yet.</p>
        ) : (
          <table className="min-w-full border-collapse border border-gray-200 text-sm">
            <thead className="bg-[#232f3e] text-white">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Image
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Product Name
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Price (₹)
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Category
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Subcategory
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Added By
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Date & Time
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id || p._id || (p.name + Math.random())} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-gray-200 flex items-center justify-center text-gray-500 rounded">
                        N/A
                      </div>
                    )}
                  </td>
                  <td className="border px-4 py-2">{p.name}</td>
                  <td className="border px-4 py-2">₹{p.price}</td>
                  <td className="border px-4 py-2">{p.category}</td>
                  <td className="border px-4 py-2">{p.subcategory}</td>
                  <td className="border px-4 py-2 text-blue-600 font-semibold">
                    {p.addedBy || p.meta?.addedBy || adminName}
                  </td>
                  <td className="border px-4 py-2 text-gray-600">{p.date || p.meta?.date || ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
