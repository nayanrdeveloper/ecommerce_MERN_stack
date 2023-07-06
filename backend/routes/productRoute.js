const express = require("express");
const productModel = require("../models/Product");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

const router = express.Router();

router.get(
  "/products",
  asyncHandler(async (req, res) => {
    const products = await productModel.find({});
    console.log("Dragon product of", products);
    res.json(products);
  })
);

router.get(
  "/product/:id",
  asyncHandler(async (req, res) => {
    const product = await productModel.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product are not Found" });
    }
  })
);

module.exports = router;
