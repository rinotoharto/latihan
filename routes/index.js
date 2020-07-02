const route = require('express').Router()

const homeRoute = require('./home')
const bookRoute = require('./books')

route.get('/', homeRoute)
route.use('/books', bookRoute)

module.exports = route