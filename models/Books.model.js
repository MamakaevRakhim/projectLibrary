const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: String,
  genre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Genre",
  },
  description: String,
  rented: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  img: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
