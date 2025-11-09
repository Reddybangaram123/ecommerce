const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");        // ✅ require dotenv
const ElectronicRoutes = require("./routes/ElectronicRoute");

// ✅ Load env variables
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// ✅ MongoDB connection using env
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully..."))
  .catch(err => console.log("❌ MongoDB connection error:", err));

// ✅ Use Routes
app.use("/", ElectronicRoutes);

// ✅ Start server using env port or default 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}...`);
});
