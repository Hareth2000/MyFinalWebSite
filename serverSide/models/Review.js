// models/Review.js
const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    userId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User",
      required: true 
    },
    equipmentId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Equipment", 
      required: true 
    },
    content: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", ReviewSchema);
