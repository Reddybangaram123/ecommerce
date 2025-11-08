// Quick test script to verify MongoDB connection and save functionality
const mongoose = require("mongoose");
const homeKitchenModelsModel = require("./models/homeKitchenModels");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/homekitchencategory";

async function testConnection() {
  try {
    console.log("🔄 Connecting to MongoDB...");
    console.log("📍 URI:", MONGO_URI);
    
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected successfully!");
    console.log("📦 Database:", mongoose.connection.db.databaseName);
    
    // Test save
    console.log("\n🧪 Testing save operation...");
    const testProduct = new homeKitchenModelsModel({
      subCategory: "test",
      itemName: "Test Product",
      description: "This is a test product",
      price: 999,
      imageUrl: "https://example.com/test.jpg"
    });
    
    const saved = await testProduct.save();
    console.log("✅ Product saved successfully!");
    console.log("📄 Saved product:", saved);
    
    // Clean up test product
    await homeKitchenModelsModel.deleteOne({ _id: saved._id });
    console.log("🧹 Test product removed");
    
    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error.message);
    console.error("📊 Error details:", error);
    process.exit(1);
  }
}

testConnection();

