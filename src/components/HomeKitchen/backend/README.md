# Home Kitchen Backend Server

## Setup Instructions

### 1. Install Dependencies
```bash
cd src/components/HomeKitchen/backend
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in this directory with:
```
MONGO_URI=mongodb://localhost:27017/homekitchencategory
PORT=3001
```

Or use the default MongoDB connection (mongodb://localhost:27017/homekitchencategory)

### 3. Start the Server
```bash
npm start
```

The server will run on port 3001 by default.

### 4. Verify Server is Running

Check the health endpoint:
```
http://localhost:3001/health
```

You should see:
```json
{
  "status": "ok",
  "mongodb": "connected",
  "database": "homekitchencategory"
}
```

### 5. Test MongoDB Connection

Run the test script:
```bash
node test-connection.js
```

## API Endpoints

### POST /homekitchencategory
Add a product to the cart (saves to MongoDB)

**Request Body:**
```json
{
  "subCategory": "homekitchen",
  "itemName": "Product Name",
  "description": "Product Description",
  "price": "₹1,299",
  "imageUrl": "https://example.com/image.jpg"
}
```

**Response:**
```json
{
  "message": "✅ Home Kitchen product added to cart successfully!",
  "data": { ... },
  "success": true
}
```

## Troubleshooting

### Server not starting?
- Check if port 3001 is already in use
- Verify MongoDB is running: `mongod --version`
- Check `.env` file exists and has correct MONGO_URI

### Data not saving?
- Check backend server console for error logs
- Verify MongoDB is running and accessible
- Check browser console for API errors
- Verify the request is reaching the backend (check server logs)

### Connection errors?
- Make sure MongoDB is running on localhost:27017
- Check firewall settings
- Verify MONGO_URI in .env file

