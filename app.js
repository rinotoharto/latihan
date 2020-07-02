
const express = require('express')
const session = require('express-session')
const routes = require('./routes')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended : true }));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {secure:false}
}))
app.use(routes)
app.listen(port, () => {
  console.log(`running on ${port} mph!`);
})