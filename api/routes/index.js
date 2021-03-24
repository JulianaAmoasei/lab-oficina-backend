const { Router } = require('express')
const authorRouter = require("./authorRouter")
const bookRouter = require("./bookRouter")

const router = Router()

router.use('/author', authorRouter);
router.use('/book', bookRouter);

module.exports = router