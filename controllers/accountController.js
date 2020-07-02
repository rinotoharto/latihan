const {Transaction, Book, User} = require('../models')

class AccountController {

  static showTransaction(req, res) {
    Transaction.findAll({
      include: [{model : Book}],
      where : {
          UserId: req.session.userId
      }
    })
    .then(data => {
      console.log(data)
      res.render('account', {data})
    })
    .catch(err => {
      console.log(err)
    })
  }

  static addTransaction(req, res) {
    const {bookId, amount} = req.body
    let dataTrans = {
      BookId : bookId,
      UserId : req.session.userId,
      amount
    }
    Book.findByPk(bookId)
    .then(book => {
      if(book.stocks == 0 || book.stocks < amount) {
        console.log('Invalid amount request')
      } else {
        return Transaction.findOne({where:{BookId : bookId, UserId: req.session.userId}})
      }
    })
    .then(trans => {
      if(trans) {
        return Transaction.update({
          amount: Number(amount) + Number(req.body.amount)
        }, {
          where: {
            BookId: bookId,
            UserId: req.session.userId
          }
        })
      } else {
        Transaction.create(dataTrans)
      }
    })
    .then(transaction => {
      res.redirect('/account')
    })
  }

}

module.exports = AccountController