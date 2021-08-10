const { Router } = require("express");

const router = Router();

router.use(require('../routes/books.route'))
router.use(require('../routes/genres.route'))
router.use(require('../routes/reviews.route'))
router.use(require('../routes/users.route'))

module.exports = router;