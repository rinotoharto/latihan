const express = require('express')
const route = express.Router()

const accountController = require('../controllers/accountController')

route.get('/', accountController.showTransaction)
route.post('/', accountController.addTransaction)


module.exports = route