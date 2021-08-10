const { Router } = require("express");
const { reviewsController } = require("../controllers/reviews.controller");

const router = Router();

router.get("/admin/reviews", reviewsController.getReview);
router.get("/user/reviews", reviewsController.getReview);
router.post("/user/reviews", reviewsController.addReview);
router.delete("/admin/reviews/:id", reviewsController.removeReview);

module.exports = router;
