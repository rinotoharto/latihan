const {Transaction, Book} = require('../models')

class AccountController {

  static showTransaction(req, res) {
    res.render('account')
  }

  static addTransaction(req, res) {
    const {bookId, amount} = req.body
    console.log()
    Book.findByPk(bookId)
    .then(book => {
      console.log(book)
    })
  }

}

module.exports = AccountController