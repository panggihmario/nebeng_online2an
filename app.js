const express = require('express')
let app = express()


let index = require('./routes/index.js')

app.use('/', index)


app.listen(3000)
