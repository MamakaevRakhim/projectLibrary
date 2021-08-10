const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "book",
  },
  text: String,
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
