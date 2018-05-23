const express = require('express')
let app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended : false}))
app.set('view engine','ejs')


let index = require('./routes/index.js')
let customer = require('./routes/customerRoutes.js')

app.use('/',index)
app.use('/customer',customer)


app.listen(3000)
