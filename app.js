const express = require('express')
let app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended : false}))
app.set('view engine','ejs')
var session = require('express-session')


let index = require('./routes/index.js')
let customer = require('./routes/customerRoutes.js')
let schedule = require('./routes/scheduleRoutes.js')
let login = require('./routes/login.js')


app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.use('/',index)
app.use('/customer',customer)
app.use('/login',login)

// app.use('/schedule',schedule)


app.listen(3000)
