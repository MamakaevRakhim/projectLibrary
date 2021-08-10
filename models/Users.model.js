const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  rentName: {
    type: String,
    required: true,
  },
  rentedBooks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    }
  ],
  isBlocked: Boolean ,
  img: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
