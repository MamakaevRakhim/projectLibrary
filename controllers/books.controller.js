const Books = require("../models/Books.model");

module.exports.booksController = {
  getBooks: async (req, res) => {
    try {
      const get = await Books.find({}).populate("rented genre").lean();
      res.render('books', {
        get
      });
    } catch (e) {
      console.log(e);
    }
  },

  getBook: async (req, res) => {
    try {
      const get = await Books.findById(req.params.id).lean();
      res.render("single-books", {
        get
      });
      console.log(get)
    } catch (e) {
      console.log(e);
    }
  },

  getBookByGenre: async (req, res) => {
    try {
      const get = await Books.find({ genre: req.params.id }).populate(
        "rented genre"
      ).lean();
      res.render("books", {
        get
      });
    } catch (e) {
      console.log(e);
    }
  },

  adminGet: async (req, res) => {
    try {
      const get = await Books.find({}).populate("rented genre");
      res.render("books", {
        get
      });
    } catch (e) {
      console.log(e);
    }
  },

  addBook: async (req, res) => {
    try {
      const add = await Books.create({
        name: req.body.name,
        genre: req.body.genre,
        rented: req.body.rented,
        description: req.body.description,
        img: req.body.img
      });
      res.json(`${add} Книга добавлена`);
    } catch {
      console.log("Вам не удалось добавить книгу");
    }
  },

  changeBook: async (req, res) => {
    try {
      await Books.findByIdAndUpdate(req.params.id, req.body);
      res.json("Книга успешно изменена");
    } catch {
      console.log("Вам не изменить книгу");
    }
  },

  removeBook: async (req, res) => {
    try {
      await Books.findByIdAndRemove(req.params.id);
      res.json("Книга успешно удалена");
    } catch {
      console.log("Извините вам не удалось удалить книгу");
    }
  },

  getMain: async (req, res) => {
    try {
      const get = await Books.find({}).sort({id:-1}).limit(3).lean();
      res.render("books", {
        get
      });
    } catch (e) {
      console.log(e);
    }
  },
};
