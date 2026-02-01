const express = require("express");
const Order = require("../models/Order");
const adminAuth = require("../middleware/adminAuth");

const router = express.Router();

router.get("/orders", adminAuth, async (req, res) => {
  const orders = await Order.find().populate("user");
  res.json(orders);
});

router.put("/order/:id", adminAuth, async (req, res) => {
  const { status } = req.body;
  await Order.findByIdAndUpdate(req.params.id, { status });
  res.json({ message: "Order updated" });
});

module.exports = router;
