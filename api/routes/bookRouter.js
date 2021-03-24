const { Router } = require('express')
const BookController = require('../controller/BookController')

const router = Router()

router.get("/", BookController.getAllBooks)
router.get("/:bookId", BookController.getBookById)

module.exports = router