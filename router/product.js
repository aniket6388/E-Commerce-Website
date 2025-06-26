const express = require('express');
const router = express.Router();
const Product = require('../model/product');

// Actual route for /product
router.get('/products', async (req, res) => {
  const products = await Product.find({});
  console.log("Fetched products:", products); // 👈 Add this line
  res.render('product/index', { products, title: "All Products" });
});



module.exports = router;
