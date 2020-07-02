const express = require('express')
const route = require('./routes')
const app = express()
const session = require('express-session')
const port = 3000


app.use(session({
  secret: 'goodreads',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use('/', route)

app.listen(port, () => {
  console.log(`running on ${port} mph!`);
})