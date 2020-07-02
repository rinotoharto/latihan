const express = require('express')
const route = express.Router()
const Controller = require('../controllers/bookController')

route.get('/', Controller.list)
route.get('/buy/:id', Controller.buyNewBooks)

module.exports = route