const database = require('../models/models')

class BookController {

  static async getAllBooks(req, res) {
    const books = await database.Book.findAll()
    return res.status(200).json(books)
  }

  static async getBookById(req, res) {
    const { bookId } = req.params //o nome dessa const precisa ser igual ao req.param que passamos na rota!
    const book = await database.Book.findAll({
      where: {
        id: Number(bookId)
      }
    });
    return res.status(200).json(book)
  }

}

module.exports = BookController