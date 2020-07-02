const { Book, Transaction, User } = require('../models/index')

class bookController {
  static list(req, res) {
    Book.findAll({order:[['id', 'ASC']]})
      .then(data => {
        res.render('./booklist.ejs', { data })
      })
      .catch(err => {
        res.send(err)
      })
  }

  static buyNewBooks(req, res) {
    const AuthorId = +req.params.id
    let { name, UserId } = req.body
    Transaction.create({
      name,
      AuthorId,
      UserId
    })
      .then(data => {
        res.send({ data })
      })
      .catch(err => {
        res.send(err)
      })
  }

  static createNewTrans(req, res) {
    const UserId = +req.params.id
    const BookId = req.body
    let newTransaction;
    let newData;
    Transaction.create({
      BookId,
      UserId
    })
      .then(data => {
        newTransaction = data
        res.send(newTransaction);

        // return Transaction.findAll({ include: Book })
      })
      // .then((data) => {
      //   newData = data
      //   res.send({ newData, newTransaction })
      //   // res.render('./account', { data })
      // })
      .catch(err => {
        res.send(err)
      })
  }

}
module.exports = bookController