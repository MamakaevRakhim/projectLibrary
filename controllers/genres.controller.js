const Genres = require("../models/Genres.model");

module.exports.genresController = {
  getGenres: async (req, res) => {
    const getGenre = await Genres.find({});
    res.json(getGenre);
  },

  addGenres: async (req, res) => {
    const addGenre = await Genres.create({
      genre: req.body.genre,
    });
    res.json(`${addGenre} Жанр успешно добавлен`);
  },

  removeGenre: async (req, res) => {
    try {
      await Genres.findByIdAndDelete(req.params.id);
      res.json("Жанр успешно удален");
    } catch {
      console.log("Упс... Не удалось удалить жанр");
    }
  },

  replaceGenre: async (req, res) => {
    try {
      await Genres.findByIdAndUpdate(req.params.id);
      res.json("Жанр успешно изменен");
    } catch {
      console.log("Упс... Не удалось изменить жанр");
    }
  },

};
