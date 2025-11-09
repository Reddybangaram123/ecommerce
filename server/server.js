const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const furniturerouter = require("./routes/furniturerouter");


const app = express();
app.use(express.json());
app.use(cors());

// ✅ MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/EcommerceDB")
  .then(() => console.log("✅ MongoDB connected successfully..."))
  .catch(err => console.log("❌ MongoDB connection error:", err));

// ✅ Use Routes
app.use("/", furniturerouter);


// ✅ Root endpoint
app.get("/", (req, res) => {
  res.send("Server is running... 🚀");
});

// ✅ Start server
app.listen(3001, () => {
  console.log("🚀 Server running on port 3001...");
});