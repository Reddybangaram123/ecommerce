const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const toyRoutes = require("./router/toy-router");
const app = express();
app.use(express.json());
app.use(cors());

// ✅ MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/toyDB")
  .then(() => console.log("✅ MongoDB connected successfully..."))
  .catch(err => console.log("❌ MongoDB connection error:", err));

// ✅ Use Routes
app.use("/", toyRoutes);
// ✅ Start server
app.listen(3001, () => {
  console.log("🚀 Server running on port 3001...");
});