const { Router } = require("express");
const { genresController } = require("../controllers/genres.controller");

const router = Router();

router.get("/user/genre", genresController.getGenres);
router.get("/admin/genre", genresController.getGenres);
router.post("/admin/genre", genresController.addGenres);
router.delete("/admin/genre/:id", genresController.removeGenre);
router.patch("/admin/genre/:id", genresController.replaceGenre);

module.exports = router;
