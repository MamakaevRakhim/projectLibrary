const { Router } = require("express");
const { usersController } = require("../controllers/users.controller");

const router = Router();

router.get("/rentBook/:bookId/users", usersController.getUser);
router.get("/rentBook/:bookId/users/:id", usersController.rentBook);
router.get("/users", usersController.getUsers);
router.get("/users/:id", usersController.getUserById);
router.post("/users/:id", usersController.addUser);
router.get("/users/:id/blocked", usersController.blocked);
router.get("/users/:id/unBlocked", usersController.unBlocked);

module.exports = router;
