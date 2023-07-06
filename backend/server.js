const express = require("express");
const products = require("./data/products");
var cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./config/connectDb");
const productRoute = require("./routes/productRoute");
const { errorMiddleWare } = require("./middleware/errorMiddleware");

dotenv.config();

// Connect to the MongoDB
connectDb();

const app = express();

app.use(cors());
// Error Handling middleware
app.use(errorMiddleWare);

app.use("/api", productRoute);

app.listen(process.env.PORT, () => {
  console.log("Server running on Localhost:8080");
});
