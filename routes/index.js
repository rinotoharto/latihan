const route = require('express').Router()

const homeRoute = require('./home')
const bookRoute = require('./books')
// const userRoute = require('./user')
const loginRoute = require('./login')

route.get('/', homeRoute)
route.use('/books', bookRoute)
// route.use('/users', userRoute)
route.use('/login', loginRoute)

module.exports = route