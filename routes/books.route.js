const { Router } = require("express");
const { booksController } = require("../controllers/books.controller");

const router = Router();

router.get("/user/books", booksController.getBooks);
router.get("/main", booksController.getMain);
router.get("/admin/rented/books", booksController.adminGet);
router.get("/user/books/:id", booksController.getBook);
router.get("/books/genre/:id", booksController.getBookByGenre);
router.post("/admin/books", booksController.addBook);
router.delete("/admin/books/:id", booksController.removeBook);
router.patch("/admin/books/:id", booksController.changeBook);

module.exports = router;
