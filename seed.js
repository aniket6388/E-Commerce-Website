const mongoose = require('mongoose');
const Product = require('./model/product'); // Make sure path is correct

// ✅ Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/E-Commerce-Immersion")
  .then(() => {
    console.log("✅ MongoDB connected!");
    return seedDB();
  })
  .catch(err => {
    console.error("❌ MongoDB connection error:", err);
  });

const seedProducts = [
  {
    name: "iPhone 14",
    image: "https://images.unsplash.com/photo-1603898037225-dab4d3b1f93b",
    price: 79999,
    desc: "Latest Apple iPhone with A15 Bionic chip."
  },
  {
    name: "Nike Air Max",
    image: "https://images.unsplash.com/photo-1618354691211-5691ba93ec2e",
    price: 5499,
    desc: "Lightweight, stylish running shoes."
  },
  {
    name: "Gaming Mouse",
    image: "https://images.unsplash.com/photo-1587202372775-df79b07b9b83",
    price: 1599,
    desc: "High precision RGB gaming mouse."
  }
];

// ✅ Seeding Function
async function seedDB() {
  try {
    await Product.deleteMany({});
    const result = await Product.insertMany(seedProducts);
    console.log("🌱 Seeded DB with products:", result);
  } catch (err) {
    console.error("❌ Seeding failed:", err);
  } finally {
    mongoose.connection.close();
  }
}
