const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Fashionrouter = require("./routes/Fashionrouter");
const bookrouter = require("./routes/bookrouter");
const mobilerouter = require("./routes/mobilerouter");
const toysrouter = require("./routes/toy-router");
const electronicsrouter = require("./routes/electronicsrouter");
const furniturerouter = require("./routes/furniturerouter");
const homekitchenrouter = require("./routes/homekitchenrouter");
const groceryrouter = require("./routes/groceryrouter");

const app = express();
app.use(express.json());
app.use(cors());

// ✅ MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/EcommerceDB")
  .then(() => console.log("✅ MongoDB connected successfully..."))
  .catch(err => console.log("❌ MongoDB connection error:", err));

// ✅ Use Routes
app.use("/", Fashionrouter);
app.use("/", bookrouter);
app.use("/", mobilerouter);
app.use("/", toysrouter);
app.use("/", electronicsrouter);
app.use("/", furniturerouter);
app.use("/", homekitchenrouter);
app.use("/", groceryrouter);

// ✅ Root endpoint
app.get("/", (req, res) => {
  res.send("Server is running... 🚀");
});

// ✅ Start server
app.listen(3001, () => {
  console.log("🚀 Server running on port 3001...");
});