// Test script to verify the API endpoint is working
const axios = require('axios');

async function testAPI() {
  try {
    console.log("🔄 Testing API endpoint...");
    
    const testData = {
      subCategory: "test",
      itemName: "Test Product from API",
      description: "This is a test product sent via API",
      price: "₹999",
      imageUrl: "https://example.com/test.jpg"
    };

    console.log("📤 Sending POST request to http://localhost:3001/homekitchencategory");
    console.log("📦 Data:", JSON.stringify(testData, null, 2));

    const response = await axios.post("http://localhost:3001/homekitchencategory", testData);
    
    console.log("✅ Success!");
    console.log("📥 Response:", JSON.stringify(response.data, null, 2));
    
    process.exit(0);
  } catch (error) {
    console.error("❌ Error:");
    if (error.response) {
      console.error("   Status:", error.response.status);
      console.error("   Data:", error.response.data);
    } else if (error.request) {
      console.error("   No response received. Is the server running?");
      console.error("   Error:", error.message);
    } else {
      console.error("   Error:", error.message);
    }
    process.exit(1);
  }
}

testAPI();

