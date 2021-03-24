const { Router } = require('express')
const AuthorController = require('../controller/AuthorController')

const router = Router()

router.get("/", AuthorController.getAllAuthors)
router.get("/:authorId", AuthorController.getAuthorById)

module.exports = router