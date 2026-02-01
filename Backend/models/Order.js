const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {

        user: {
        type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },

    items: [
      {
        productId: String,
        name: String,
        image: String,
        price: Number,
        qty: Number,
        color: String,
        size: String,
      },
    ],

    shippingAddress: {
      fullName: String,
      address: String,
      city: String,
      postalCode: String,
      country: String,
    },

    totalPrice: Number,

    paymentStatus: {
      type: String,
      default: "pending",
    },

    orderStatus: {
      type: String,
      default: "placed",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
