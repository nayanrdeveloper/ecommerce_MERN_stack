const mongoose = require("mongoose");
const dotenv = require("dotenv");
const users = require("./data/user");
const userModel = require("./models/User");
const products = require("./data/products");
const productModel = require("./models/Product");
const connectDb = require("./config/connectDb");
const orderModel = require("./models/OrderModel");

dotenv.config();
connectDb();

const importData = async () => {
  try {
    await orderModel.deleteMany();
    await productModel.deleteMany();
    await userModel.deleteMany();

    const createUser = await userModel.insertMany(users);
    const adminUser = createUser[0]._id;
    const sampleProductData = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await productModel.insertMany(sampleProductData);
    console.log("Data Imported");
    process.exit(1);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

const destroyData = async () => {
  await orderModel.deleteMany();
  await productModel.deleteMany();
  await userModel.deleteMany();
  console.log("Data Destory succefully");
  process.exit(1);
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
