const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  rating: {
    type: {
      rate: {
        type: Number,
        required: true,
      },
      count: {
        type: Number,
        required: true,
      },
    },
    required: true,
  },
});

module.exports = mongoose.model("Products", productSchema, "products");
