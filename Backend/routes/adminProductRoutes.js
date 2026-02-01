const express = require("express");
const Product = require("../models/Product");
const protect = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");

const router = express.Router();

// GET ALL PRODUCTS (ADMIN)
router.get("/products", protect, adminOnly, async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// DELETE PRODUCT
router.delete("/product/:id", protect, adminOnly, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
});

module.exports = router;
