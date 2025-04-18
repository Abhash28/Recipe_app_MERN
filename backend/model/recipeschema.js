const mongoose = require("mongoose");
const recipeschema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    ingredient: {
      type: String,
      required: true,
    },
    instruction: { type: String, required: true },
    time: {
      type: String,
    },
    coverImage: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recipe", recipeschema);
