const User = require("../models/Users.model");
const Book = require("../models/Books.model");

module.exports.usersController = {
  addUser: async (req, res) => {
    try {
      const add = await User.create({
        rentName: req.body.rentName,
        isBlocked: req.body.isBlocked,
        rentedBooks: req.body.rentedBooks,
      });
      res.render("single-user", {
        add
      });
    } catch (e) {
      console.log(e);
    }
  },
  getUser: async (req, res) => {
    try {
      const get = await User.find().populate("rentBook").lean();
      const book = await Book.findById(req.params.bookId).lean();
      res.render("users", {
        get,
        book
      });
    } catch (e) {
      console.log(e);
    }
  },
  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndRemove(req.params.id);
      res.json("Успешно удален пользователь");
    } catch (e) {
      console.log(e);
    }
  },
  rentBook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.bookId).lean();
      const user = await User.findById(req.params.id);
      console.log(req.params.bookId);
      if (user.blocked) {
        res.redirect("/users");
        res.json("Вас заблокировали Даун");
      } else if (book.rented) {
        res.json("Книга занята");
        return "Это книга занята даун";
      } else if (user.rentedBooks.length >= 3) {
        res.json("Нельзя арендовать больше трех книг");
        return "Нельзя Даун";
      } else {
        await User.findByIdAndUpdate(req.params.id, {
          $push: { rentedBooks: req.params.bookId },
        });
        await Book.findByIdAndUpdate(req.body.rentBook, {
          rented: req.body.rentBook,
        });
        res.redirect("/users");
      }
    } catch (e) {
      console.log(e);
    }
     },
  deleteBookUSer: async (req, res) => {
    try {
      await User.findByIdAndUpdate(id, {
        $pull: { rentBook: req.body.rentBook },
      });
      console.log(123);

      await User.findByIdAndUpdate(req.params.id, {
        block: true,
      });

      await Book.findByIdAndUpdate(req.body.rentBook, {
        rented: null,
      });
      res.json("Админ отобрал у вас книгу");
    } catch (e) {
      console.log(e);
    }
  },

  getUsers: async (req, res) => {
    try {
      const get = await User.find().populate("rentBook").lean();
      const book = await Book.findById(req.params.bookId).lean();
      res.render("allUsers", {
        get,
        book
      });
    } catch (e) {
      console.log(e);
    }
  },

  getUserById: async (req, res) => {
    try{
      console.log(123);
      const get = await User.findById(req.params.id).populate("rentedBooks").lean();
      res.render("single-user", {
        get
      })
    }catch(e){
      console.log(e)
    }
  },
  blocked: async (req, res) => {
    const block = await User.findByIdAndUpdate(req.params.id, {
      isBlocked:true,
      rentedBooks: [],
    })
    res.redirect("/users")
  },
  unBlocked: async (req, res) => {
    const block = await User.findByIdAndUpdate(req.params.id, {
      isBlocked:false,
      rentedBooks: [],
    })
    res.redirect("/users")
  },


};