const express = require('express')
let app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}))

app.set('view engine', 'ejs');

const index = require('./routes/index.js')
app.use('/', index)

let providerRoute = require('./routes/provider.js');
app.use('/provider', providerRoute);

let customerRoute = require('./routes/customer.js');
app.use('/customer', customerRoute);

app.listen(3000)
