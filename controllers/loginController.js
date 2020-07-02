const { User, Book, Transaction } = require('../models/index')

class loginController {

  static getLogin(req, res) {
    res.render('./login.ejs')
  }

  static postLogin(req, res) {
    let { email, password } = req.body  // ini sesuain sama yg ada di data tabelnya mas
    User.findAll({ email, password })
      .then(dataUser => {
        res.redirect('/account', { dataUser })  //ini mengarah ke halaman user yg isi nya menampilkan data user atau profil
      })
      .catch(err => {
        res.send(err)
      })
  }

}

module.exports = loginController