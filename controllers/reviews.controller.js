const { Reviews } = require("../models/Reviews.model");

module.exports.reviewsController = {
  getReview: async (req, res) => {
    const get = await Reviews.find({});
    res.json(get);
  },

  addReview: async (req, res) => {
    try {
      const addReviews = await Reviews.create({
        user: req.body.user,
        book: req.body.book,
        text: req.body.text,
      });
      res.json(`${addReviews} Отзыв успешно добавлен`);
    } catch {
      console.log("Упс... Ошибка");
    }
  },

  removeReview: async (req, res) => {
    try {
      await Reviews.findByIdAndDelete(req.params.id);
      res.json("Отзыв успешно удален 'ДАУН' ");
    } catch {
      console.log("Упс... Не удалось удалить отзыв");
    }
  },
};
