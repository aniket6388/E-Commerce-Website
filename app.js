const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');

// Middleware and view engine setup
app.engine('ejs', ejsMate);
app.set("view engine", 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
const MONGO_URL = "mongodb://127.0.0.1:27017/E-Commerce-Immersion";
mongoose.connect(MONGO_URL)
    .then(() => console.log("Connected to DB"))
    .catch(err => console.log(err));

// Route import
const productRoutes = require('./router/product');
app.use('/', productRoutes); // mounts the /product route

// Default route
app.get("/", (req, res) => {
    res.send("Your request is accepted");
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});
