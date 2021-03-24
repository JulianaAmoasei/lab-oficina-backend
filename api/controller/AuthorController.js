const database = require('../models/models')

class AuthorController {

  static async getAllAuthors(req, res) {
    const authors = await database.Author.findAll()
    return res.status(200).json(authors)
  }

  static async getAuthorById(req, res) {
    const { authorId } = req.params //o nome dessa const precisa ser igual ao req.param que passamos na rota!
    const author = await database.Author.findAll({
      where: {
        id: Number(authorId)
      }
    });
    return res.status(200).json(author)
  }

}

module.exports = AuthorController