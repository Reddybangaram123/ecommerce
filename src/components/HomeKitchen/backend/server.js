const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");        // ✅ require dotenv
const HomeKitchenRoutes = require("./routes/homekitchen");

// ✅ Load env variables
dotenv.config();

const app = express();

// ✅ CORS should be first to handle preflight requests
app.use(cors());

// ✅ Parse JSON bodies
app.use(express.json());

// ✅ Middleware to log all incoming requests (after body parsing)
app.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(`📥 ${req.method} ${req.path}`);
    console.log(`📦 Request Body:`, JSON.stringify(req.body, null, 2));
  }
  next();
});

// ✅ MongoDB connection using env
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/homekitchencategory";

console.log("🔄 Attempting to connect to MongoDB...");
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully!");
    console.log("📦 Database:", mongoose.connection.db.databaseName);
  })
  .catch(err => {
    console.error("❌ MongoDB connection error:", err.message);
    console.error("💡 Make sure MongoDB is running and MONGO_URI is correct in .env file");
  });

// ✅ Use Routes
app.use("/", HomeKitchenRoutes);

// ✅ Health check endpoint
app.get("/health", (req, res) => {
  res.json({ 
    status: "ok", 
    mongodb: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
    database: mongoose.connection.db?.databaseName || "unknown"
  });
});

// ✅ Start server using env port or default 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}...`);
  console.log(`🔗 Health check: http://localhost:${PORT}/health`);
  console.log(`📡 API endpoint: http://localhost:${PORT}/homekitchencategory`);
});