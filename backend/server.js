const express = require("express");
const products = require("./data/products");
var cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./config/connectDb");

dotenv.config();

// Connect to the MongoDB
connectDb();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Welcom to Node server</h1>");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/product/:id", (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  res.json(product);
});

app.listen(process.env.PORT, () => {
  console.log("Server running on Localhost:8080");
});
